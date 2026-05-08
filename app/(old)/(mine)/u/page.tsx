"use client"

import { api } from "@/utils/api/base"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { FormEvent, useRef, useState } from "react"
import useSWR from "swr"

interface Entity {
  id: string
  name: string
  name_english: string
  city: string
  category: string
  image_url: string
  description: string
  description_english: string
  registered_by: string
  status: string
}

const fetcher = async (url: string): Promise<Entity[]> => {
  const res = await api.get(url)

  if (Array.isArray(res.data)) return res.data

  if (res.data.university) return res.data.university

  return []
}

const Page = () => {
  const [endpoint, setEndpoint] = useState<string | null>(null)
  const ref = useRef<HTMLInputElement>(null)

  const { data, error, isLoading } = useSWR<Entity[]>(
    endpoint,
    fetcher,
    {
      revalidateOnFocus: false,
    }
  )

  const request = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const query = ref.current?.value?.trim()
    if (!query) return

    setEndpoint(`academic?university=${encodeURIComponent(query)}`)
  }

  return (
    <div>
      <div className="w-10/12 md:w-6/12 mx-auto mt-12">
        <form onSubmit={request} className="flex gap-4 flex-wrap w-full">
          <Input
            ref={ref}
            className="h-14 w-full"
            placeholder="جست و جو در دانشگاه ها"
          />
          <Button type="submit" className="w-full">
            جست و جو
          </Button>
        </form>
      </div>

      {isLoading && (
        <div className="text-center mt-8">loading...</div>
      )}

      {error && (
        <div className="text-center mt-8 text-red-500">
          error loading data
        </div>
      )}

      {data && (
        <div className="mt-10 w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.length === 0 ? (
            <div className="text-center col-span-full">
              no data
            </div>
          ) : (
            data.map((v) => (
              <Card
                key={v.id}
                className="p-4 flex flex-col items-center text-center gap-3"
              >
                <h2 className="text-xl font-semibold">
                  {v.name}
                </h2>

                <p className="text-sm text-gray-500">
                  {v.city}
                </p>

                <p className="text-xs line-clamp-3">
                  {v.description}
                </p>

                {v.image_url && (
                  <Image
                    src={v.image_url}
                    width={300}
                    height={200}
                    alt={v.name || "university image"}
                    className="rounded-md"
                  />
                )}

                <span className="text-sm font-medium">
                  {v.category}
                </span>

                <Link href={`/u/${v.id}`}>
                  <Button>
                    ورود به صفحه
                  </Button>
                </Link>
              </Card>
            ))
          )}
        </div>
      )}
    </div>
  )
}

export default Page