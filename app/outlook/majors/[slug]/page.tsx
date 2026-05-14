"use client"

import { Button } from "@/components/ui/button"
import { CatIcon, Map, Code2, BookOpen, Users, Award, Clock, TrendingUp } from "lucide-react"
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

// اضافه کردن اطلاعات کامل برای رشته مهندسی کامپیوتر
const data = {
  "id": "3",
  "name": "مهندسی کامپیوتر",
  "name_english": "Computer Engineering",
  "description": "رشته مهندسی کامپیوتر به طراحی، پیاده‌سازی و مدیریت سیستم‌های کامپیوتری و نرم‌افزاری می‌پردازد. این رشته شامل گرایش‌های نرم‌افزار، سخت‌افزار، هوش مصنوعی و شبکه‌های کامپیوتری است.",
  "description_english": "computer engineering description",
  // اطلاعات آماری رشته
  "duration": 4,
  "credits": 140,
  "students_count": 450,
  "professors_count": 35,
  "job_opportunities": 92,
  "avg_salary": "25-45",
  "difficulty": "سخت",
  "demand_rate": "بسیار بالا"
}

interface Rows {
  rowTitle: string[]
  cellData: string[][]
}

const table_data: Rows = {
  cellData: [
    ['محمدرضا', 'یمقانی'],
    ['رضا', 'گلزار'],
    ['محمد رضا', 'شجریان'],
    ['محمد رضا', 'شجریان'],
    ['محمد رضا', 'شجریان'],
    ['محمد رضا', 'شجریان'],
    ['محمد رضا', 'شجریان'],
    ['محمد رضا', 'شجریان'],
    ['محمد رضا', 'شجریان'],
    ['حمید', 'هیراد'],
    ['علی', 'مددی']
  ],
  rowTitle: ['نام استاد', 'فامیلی استاد']
}

const repeat = ['اساتید', 'رشته ها', 'دروس']

const CardData: ICardItrationData = {
  detail: {
    category: 'اساتید این رشته',
    data: [
      { title: 'محمد رضا یمقانی', button: { url: 'yamaghani', name: 'یمقانی' } },
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


        <div className="flex md:w-7/12 items-center flex-wrap gap-y-4">

          <div className="w-full">
            <h1 className="text-4xl md:text-start text-center font-black w-full">
              {data.name}
            </h1>
            <h2 className="mt-1 text-sm md:text-start text-center font-normal w-full">
              {data.name_english} - Bachelor of Science
            </h2>
          </div>

          <div className="w-full h-auto leading-7 text-justify border-t border-b py-4 border-white/10 border-dashed">
            <p>
              {data.description}
            </p>
          </div>

          {/* دکمه‌های اصلاح شده با اطلاعات رشته */}
          <div className="w-full flex flex-wrap md:justify-start justify-center items-center gap-3">
            
            {/* مدت زمان تحصیل */}
            <Button variant="default" className="gap-2">
              <Clock className="size-4" />
              {data.duration} سال تحصیل
            </Button>

            {/* تعداد واحدها */}
            <Button variant="secondary" className="gap-2">
              <BookOpen className="size-4" />
              {data.credits} واحد
            </Button>

            {/* تعداد دانشجویان */}
            <Button variant="outline" className="gap-2">
              <Users className="size-4" />
              {data.students_count} دانشجو
            </Button>

            {/* تعداد اساتید */}
            <Button variant="default" className="gap-2">
              <Award className="size-4" />
              {data.professors_count} استاد
            </Button>

            {/* سطح سختی */}
            <Button variant="destructive" className="gap-2">
              <Code2 className="size-4" />
              سطح: {data.difficulty}
            </Button>

            {/* نرخ تقاضا */}
            <Button variant="secondary" className="gap-2 bg-green-600 hover:bg-green-700">
              <TrendingUp className="size-4" />
              تقاضا: {data.demand_rate}
            </Button>

            {/* فرصت‌های شغلی */}
            <Button variant="outline" className="gap-2">
              💼 {data.job_opportunities}% اشتغال
            </Button>

            {/* محدوده حقوق */}
            <Button variant="default" className="gap-2">
              💰 {data.avg_salary} میلیون تومان
            </Button>

          </div>

        </div>
      </div>

      <div className="border-t-2 border-dashed w-10/12 mx-auto py-10 mt-10">

        <MajorGraph />

        <div className="mt-10">
          <CardItrationView detail={CardData.detail} />
        </div>
        
        <div className="mt-6">
          <CardItrationView detail={CardData.detail} />
        </div>
        
        <div className="mt-6">
          <CardItrationView detail={CardData.detail} />
        </div>

      </div>
    </>
  )
}