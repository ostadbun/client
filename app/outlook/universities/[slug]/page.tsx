"use client"

import { Button } from "@/components/ui/button"
import { CatIcon, Map } from "lucide-react"
import Image from "next/image"
import { columns, tableData } from "./columns"
import { DataTable } from "@/components/data-table"
import { Card } from "@/components/ui/card"
import { TUniversity } from "./tab"
import { Row } from "@tanstack/react-table"



const TBdata: tableData[] = [
  { name: 'a', وضعیت: 'در حال پردازش' },
  { name: 'a', وضعیت: 'در حال پردازش' },
  { name: 'a', وضعیت: 'در حال پردازش' },
]




const data = {
  "id": "22",
  "name": "دانشگاه آزاد واحد لاهیجان",
  "name_english": "lahijan azad ",
  "city": "تهران",
  "category": "دولتی",
  "image_url": "https://picsum.photos/seed/sharif/300/200",
  "description": "مرکز ممتاز آموزش مهندسی و علوم پایه در ایران",
  "description_english": "best of all",
}

interface Rows {
  rowTitle: string[]
  cellData: string[][]
}

const table_data: Rows = {
  cellData: [
    [
      'محمدرضا',
      'یمقانی'
    ],
    ['رضا ',
      'گلزار'
    ],
    [
      'محمد رضا ',
      'شجریان'
    ],
    [
      'محمد رضا ',
      'شجریان'
    ],
    [
      'محمد رضا ',
      'شجریان'
    ],
    [
      'محمد رضا ',
      'شجریان'
    ],
    [
      'محمد رضا ',
      'شجریان'
    ],
    [
      'محمد رضا ',
      'شجریان'
    ],
    [
      'محمد رضا ',
      'شجریان'
    ],
    [
      'حمید ',
      'هیراد'
    ],
    [
      'علی ',
      'مددی'
    ]
  ],
  rowTitle: [
    'نام استاد',
    'فامیلی استاد'
  ]
}



const repeat = [
  'اساتید',
  'رشته ها',
  'دروس',
]


export default function Page() {
  return (

    <>
      <div className="flex h-auto justify-start md:justify-center items-start w-full px-4 md:w-10/12 mx-auto mt-14 gap-x-10 flex-wrap">

        <div className="w-full h-70 md:w-4/12 mb-14 rounded-2xl overflow-hidden border border-white border-dashed">
          <Image src={"/images/university.webp"} width={300} height={200} alt="uni" className=" object-cover size-full opacity-75" />
        </div>



        <div className="flex md:w-7/12  items-center flex-wrap gap-y-4">


          <div className="w-full">
            <h1 className="text-4xl md:text-start text-center font-black w-full">

              {data.name}

            </h1>
            <h2 className="mt-1 text-sm md:text-start text-center font-normal w-full">

              {data.name_english} university of technologey

            </h2>
          </div>



          <div className="w-full h-auto leading-7 text-justify  border-t border-b py-4 border-white/10 border-dashed">
            <p>
              {data.description}
              {data.description}
              {data.description}
              {data.description}
              {data.description}
              {data.description}
              {data.description}
              {data.description}

            </p>
          </div>


          <div className="w-full flex md:justify-start justify-center items-end gap-4">
            <Button variant={"secondary"}>ممتاز</Button>
            <Button variant={"destructive"}>ورودی غیر ممکن 💀</Button>
            <Button>ممتاز</Button>
            <Button><Map /> {data.city}</Button>
            <Button><CatIcon /> {data.category}</Button>
          </div>


        </div>
      </div>

      <div className="border-t-2 border-dashed w-10/12 mx-auto pt-10 mt-10">
        <h3 className="text-4xl md:text-start text-center font-black w-full mb-6">
          روابط
        </h3>




        {repeat.map((v, i) => {
          return (
            <div key={i}>

              <h3 className="text-3xl md:text-start text-center font-extrabold w-full my-14">

                به {v} :
              </h3>

              <div className="border-dashed border border-white/10 w-full absolute left-0 -z-10"></div>

              <div className="border-r border-l border-dashed  border-white/10 py-6 relative">



                <div className="absolute -top-3 -right-[.53rem]">
                  <div className="relative flex justify-center items-center size-4  text-2xl text-gray-300">
                    <div className="w-4 h-[.1rem] bg-white/65 absolute"></div>
                    <div className="w-[.1rem] h-4 bg-white/65 absolute"></div>
                  </div>
                </div>


                <div className="absolute -bottom-3 -left-[.52rem]">
                  {/* <div className="relative font-medium text-2xl">
                    +
                  </div> */}
                  <div className="relative flex justify-center items-center size-4  text-2xl text-gray-300">
                    <div className="w-4 h-[.1rem] bg-white/65 absolute"></div>
                    <div className="w-[.1rem] h-4 bg-white/65 absolute"></div>
                  </div>
                </div>

                <TUniversity data={table_data} />
              </div>

              <div className="border-dashed border border-white/10 w-full absolute left-0 -z-10"></div>

            </div>
          )
        })}











      </div>

    </>
  )
}