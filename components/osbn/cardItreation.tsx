import Link from "next/link"
import { Card, CardFooter } from "../ui/card"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { useEffect, useRef, useState } from "react"
import { PocketKnifeIcon, Pointer } from "lucide-react"


interface ICardData {

    button: {
        name: string,
        url: string
    },
    title: string

}

export interface ICardItrationData {
    detail: {
        category: string,
        data: ICardData[]
    }
}
export const CardItrationView = (dataValue: ICardItrationData) => {

    const { category, data } = dataValue.detail
    const [filteredData, setFilteredData] = useState<ICardData[]>(data)
    const inpRef = useRef<HTMLInputElement>(null)

    // مقداردهی اولیه
    useEffect(() => {
        setFilteredData(data)
    }, [data])

    const searchInput = () => {
        const searchTerm = inpRef.current?.value?.toLowerCase() || ''

        if (!searchTerm.trim()) {
            setFilteredData(data)
            return
        }

        const filtered = data.filter(item =>
            item.title.toLowerCase().includes(searchTerm) ||
            item.button.name.toLowerCase().includes(searchTerm)
        )

        setFilteredData(filtered)
    }

    // ریست جستجو
    const resetSearch = () => {
        if (inpRef.current) {
            inpRef.current.value = ''
        }
        setFilteredData(data)
    }

    return (
        <div className="my-10 relative">


            <h3 className="text-4xl md:text-start text-center font-black w-full mb-6">
                {category}
            </h3>


            {filteredData.length < 1
                ?
                <div className="w-full h-96 mask-b-from-0 mask-b-to-95% p-4">

                    <Card className="size-full">

                        <div className="flex mt-4 items-end justify-center gap-x-2">
                            <Pointer size={'3rem'} className="" />
                            <h3 className="font-black text-2xl text-black">
                                موردی یافت نشد
                            </h3>
                        </div>
                    </Card>
                </div>
                :
                <div className="grid md:grid-cols-4 gap-4 max-h-128 overflow-y-scroll mask-b-from-0 mask-b-to-95% p-4 relative pb-48">


                    {filteredData.map((v, i) => {
                        return (

                            <Card key={i}>
                                <h3 className="px-5">
                                    {v.title}
                                </h3>

                                <CardFooter>
                                    <Link href={v.button.url}>
                                        <Button>
                                            {v.button.name}
                                        </Button>
                                    </Link>
                                </CardFooter>
                            </Card>

                        )
                    })}


                </div>
            }


            <div className="w-full flex justify-center h-14 -translate-y-10">
                <Input className="w-8/12" placeholder="جست و جو" ref={inpRef} onInput={() => searchInput()} />

            </div>





        </div >
    )
}