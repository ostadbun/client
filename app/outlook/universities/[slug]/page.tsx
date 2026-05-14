"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CatIcon, Map, Building2, Users, BookOpen, GraduationCap, Trophy, Calendar, Award, FlaskConical, HeartHandshake } from "lucide-react"
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

const TBdata: tableData[] = [
  { name: 'a', وضعیت: 'در حال پردازش' },
  { name: 'a', وضعیت: 'در حال پردازش' },
  { name: 'a', وضعیت: 'در حال پردازش' },
]

// اطلاعات دانشگاه بر اساس فیلدهای فرم
const data = {
  "id": "22",
  "name": "دانشگاه آزاد واحد لاهیجان",
  "name_english": "Lahijan Azad University",
  "city": "رشت",
  "category": "دانشگاه آزاد",
  "image_url": "https://picsum.photos/seed/sharif/300/200",
  "description": "مرکز ممتاز آموزش مهندسی و علوم پایه در ایران با بیش از ۵۰ سال سابقه درخشان آموزشی",
  "description_english": "best of all",
  // فیلدهای اصلی فرم (ویژگی‌های دانشگاه)
  "numberOfFaculties": 12,        // تعداد دانشکده‌ها (مطابق فرم)
  "numberOfStudents": 12500,      // تعداد دانشجویان (مطابق فرم)
  "establishmentYear": 1352,      // سال تأسیس (مطابق فرم)
  "nationalRank": 15,             // رتبه دانشگاه (مطابق فرم)
  // اطلاعات تکمیلی
  "professors_count": 340,
  "majors_count": 48,
  "labs_count": 23,
  "acceptance_rate": 68,
  "satisfaction_rate": 92
}

// تابع نمایش رتبه
const getRankColor = (rank: number) => {
  if (rank <= 3) return "bg-yellow-600 hover:bg-yellow-700"
  if (rank <= 10) return "bg-blue-600 hover:bg-blue-700"
  if (rank <= 30) return "bg-green-600 hover:bg-green-700"
  return "bg-gray-600 hover:bg-gray-700"
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
    category: 'اساتید برتر',
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

        <div className="w-full h-70 md:w-4/12 mb-14 rounded-2xl overflow-hidden border border-foreground border-dashed">
          <Image src={"/images/university.webp"} width={300} height={200} alt="uni" className="object-cover size-full opacity-75" />
        </div>

        <div className="flex md:w-7/12 items-center flex-wrap gap-y-4">

          <div className="w-full">
            <h1 className="text-4xl md:text-start text-center font-black w-full">
              {data.name}
            </h1>
            <h2 className="mt-1 text-sm md:text-start text-center font-normal w-full text-muted-foreground">
              {data.name_english} University
            </h2>
          </div>

          <div className="w-full h-auto leading-7 text-justify border-t border-b py-4 border-white/10 border-dashed">
            <p>
              {data.description}
            </p>
          </div>

          {/* دکمه‌ها بر اساس فیلدهای اصلی فرم */}
          <div className="w-full flex flex-wrap md:justify-start justify-center items-center gap-3">
            
            {/* تعداد دانشکده‌ها - مطابق فرم */}
            <Button variant="default" className="gap-2">
              <Building2 className="size-4" />
              {data.numberOfFaculties} دانشکده
            </Button>

            {/* تعداد دانشجویان - مطابق فرم */}
            <Button variant="secondary" className="gap-2">
              <Users className="size-4" />
              {data.numberOfStudents.toLocaleString()} دانشجو
            </Button>

            {/* تعداد اساتید */}
            <Button variant="outline" className="gap-2">
              <GraduationCap className="size-4" />
              {data.professors_count} استاد
            </Button>

            {/* تعداد رشته‌ها */}
            <Button variant="default" className="gap-2">
              <BookOpen className="size-4" />
              {data.majors_count} رشته
            </Button>

            {/* موقعیت مکانی */}
            <Button variant="outline" className="gap-2">
              <Map className="size-4" />
              {data.city}
            </Button>

            {/* نوع دانشگاه */}
            <Button variant="secondary" className="gap-2">
              <CatIcon className="size-4" />
              {data.category}
            </Button>

            {/* سال تاسیس - مطابق فرم */}
            <Button variant="ghost" className="gap-2">
              <Calendar className="size-4" />
              تاسیس {data.establishmentYear}
            </Button>

            {/* رتبه دانشگاه - مطابق فرم */}
            <Button className={`gap-2 ${getRankColor(data.nationalRank)}`}>
              <Trophy className="size-4" />
              رتبه {data.nationalRank} کشوری
            </Button>

          </div>

        </div>
      </div>

      {/* بخش نمایش جزئیات بیشتر بر اساس فیلدهای فرم */}
      <div className="border-t-2 border-dashed w-10/12 mx-auto pt-10 mt-10">
        
        <h2 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2">
          <Building2 className="size-6 text-primary" />
          جزئیات دانشگاه
        </h2>

        {/* کارت‌های نمایشی برای فیلدهای فرم */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          
          {/* تعداد دانشکده‌ها */}
          <div className="bg-muted/30 rounded-xl p-4 border border-dashed text-center">
            <Building2 className="size-8 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold">{data.numberOfFaculties}</p>
            <p className="text-sm text-muted-foreground">دانشکده</p>
          </div>

          {/* تعداد دانشجویان */}
          <div className="bg-muted/30 rounded-xl p-4 border border-dashed text-center">
            <Users className="size-8 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold">{data.numberOfStudents.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground">دانشجو</p>
          </div>

          {/* سال تأسیس */}
          <div className="bg-muted/30 rounded-xl p-4 border border-dashed text-center">
            <Calendar className="size-8 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold">{data.establishmentYear}</p>
            <p className="text-sm text-muted-foreground">سال تأسیس</p>
          </div>

          {/* رتبه دانشگاه */}
          <div className="bg-muted/30 rounded-xl p-4 border border-dashed text-center">
            <Trophy className="size-8 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold">{data.nationalRank}</p>
            <p className="text-sm text-muted-foreground">رتبه کشوری</p>
          </div>

        </div>

        {/* اطلاعات تکمیلی */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          
          {/* تعداد آزمایشگاه‌ها */}
          <div className="bg-muted/30 rounded-xl p-4 border border-dashed flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FlaskConical className="size-5 text-primary" />
              <span>آزمایشگاه‌ها</span>
            </div>
            <span className="font-bold text-lg">{data.labs_count}</span>
          </div>

          {/* درصد پذیرش */}
          <div className="bg-muted/30 rounded-xl p-4 border border-dashed flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Award className="size-5 text-primary" />
              <span>درصد پذیرش</span>
            </div>
            <span className="font-bold text-lg">{data.acceptance_rate}%</span>
          </div>

          {/* رضایت دانشجویان */}
          <div className="bg-muted/30 rounded-xl p-4 border border-dashed flex items-center justify-between">
            <div className="flex items-center gap-2">
              <HeartHandshake className="size-5 text-primary" />
              <span>رضایت دانشجویان</span>
            </div>
            <span className="font-bold text-lg">{data.satisfaction_rate}%</span>
          </div>

        </div>

        {/* نوار پیشرفت رضایت */}
        <div className="bg-muted/30 rounded-xl p-4 border border-dashed mb-10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">نرخ رضایت دانشجویان</span>
            <span className="text-sm font-bold text-primary">{data.satisfaction_rate}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-primary rounded-full h-2 transition-all duration-500"
              style={{ width: `${data.satisfaction_rate}%` }}
            />
          </div>
        </div>

        {/* اساتید برتر */}
        <CardItrationView detail={CardData.detail} />
        
      </div>

    </>
  )
}