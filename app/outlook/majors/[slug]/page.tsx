"use client"

import { Button } from "@/components/ui/button"
import { CatIcon, Map } from "lucide-react"
import Image from "next/image"
import { columns, tableData } from "./columns"
import { DataTable } from "@/components/data-table"
import { Card, CardFooter } from "@/components/ui/card"
import { TUniversity } from "./tab"
import { Row } from "@tanstack/react-table"
import { Table } from "@/components/osbn/table"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { CardItrationView, ICardItrationData } from "@/components/osbn/cardItreation"
import MajorGraph from "../components/relationship/relations"



const TBdata: tableData[] = [
  { name: 'a', وضعیت: 'در حال پردازش' },
  { name: 'a', وضعیت: 'در حال پردازش' },
  { name: 'a', وضعیت: 'در حال پردازش' },
]




const data = {
  "id": "3",
  "name": "مهندسی کامپیوتر",
  "name_english": "softwer engineering",
  "description": "این کامپیوتر است",
  "description_english": "this is engineering"
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




const CardData: ICardItrationData = {

  detail: {
    category: 'اساتید',
    data: [
      { title: 'محمد رضا یمقانی', button: { url: 'yamaghani', name: 'یمق' } },
      { title: 'سید علی حسینی', button: { url: 'hoseyni', name: 'حسینی' } },
      { title: 'رضا کریمی', button: { url: 'karimi', name: 'کریمی' } },
      { title: 'مریم رضایی', button: { url: 'rezaei', name: 'رضایی' } },
      { title: 'احمد نوری', button: { url: 'nouri', name: 'نوری' } },
      { title: 'زهرا موسوی', button: { url: 'mousavi', name: 'موسوی' } },
      { title: 'علیرضا صادقی', button: { url: 'sadeghi', name: 'صادقی' } },
      { title: 'فاطمه محمدی', button: { url: 'mohammadi', name: 'محمدی' } },
      { title: 'حسن تقوی', button: { url: 'taghavi', name: 'تقوی' } },
      { title: 'نگین حسنی', button: { url: 'hasani', name: 'حسنی' } },
      { title: 'مهدی عابدی', button: { url: 'abedi', name: 'عابدی' } },
      { title: 'سمیه کاظمی', button: { url: 'kazemi', name: 'کاظمی' } },
      { title: 'پیمان قاسمی', button: { url: 'ghasemi', name: 'قاسمی' } },
      { title: 'لیلا جعفری', button: { url: 'jafari', name: 'جعفری' } },
      { title: 'امیر رحمانی', button: { url: 'rahmani', name: 'رحمانی' } },
      { title: 'نرگس احمدی', button: { url: 'ahmadi', name: 'احمدی' } },
      { title: 'بهرام فتحی', button: { url: 'fathi', name: 'فتحی' } },
      { title: 'الهه مرادی', button: { url: 'moradi', name: 'مرادی' } },
      { title: 'کیوان سلطانی', button: { url: 'soltan', name: 'سلطانی' } },
      { title: 'سارا امینی', button: { url: 'amini', name: 'امینی' } }
    ],
  }
}

export default function Page() {
  return (

    <>
      <div className="flex h-auto justify-start md:justify-center items-start w-full px-4 md:w-10/12 mx-auto mt-14 gap-x-10 flex-wrap">


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
            {/* <Button><Map /> {data.city}</Button> */}
            {/* <Button><CatIcon /> {data.category}</Button> */}
          </div>


        </div>
      </div>

      <div className="border-t-2 border-dashed w-10/12 mx-auto py-10 mt-10">

        <MajorGraph />

        <CardItrationView detail={CardData.detail} />
        <CardItrationView detail={CardData.detail} />
        <CardItrationView detail={CardData.detail} />







      </div>

    </>
  )
}