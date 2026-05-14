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
  "numberOfFaculties": 12,
  "numberOfStudents": 12500,
  "establishmentYear": 1352,
  "nationalRank": 15,
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
    <div className="w-full overflow-x-hidden">
      {/* بخش اصلی - کاملاً ریسپانسیو و بدون شکستگی */}
      <div className="container mx-auto px-3 sm:px-4 md:px-6 mt-4 sm:mt-8 md:mt-14">
        
        {/* چیدمان: در موبایل ستونی، در دسکتاپ سطری */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10">
          
          {/* بخش تصویر - در موبایل حداکثر عرض 300px */}
          <div className="flex justify-center lg:justify-start flex-shrink-0">
            <div className="w-[260px] xs:w-[280px] sm:w-[300px] md:w-[340px] lg:w-[380px] aspect-[4/3] rounded-2xl overflow-hidden border border-foreground border-dashed bg-gray-100">
              <Image 
                src={"/images/university.webp"} 
                width={380} 
                height={285} 
                alt="دانشگاه" 
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>

          {/* بخش اطلاعات - در موبایل زیر تصویر */}
          <div className="flex-1 min-w-0 space-y-4 sm:space-y-5">
            
            {/* عنوان دانشگاه */}
            <div className="text-center lg:text-right">
              <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-black break-words">
                {data.name}
              </h1>
              <h2 className="text-xs sm:text-sm text-muted-foreground mt-1">
                {data.name_english} University
              </h2>
            </div>

            {/* توضیحات */}
            <div className="border-t border-b py-3 sm:py-4 border-white/10 border-dashed">
              <p className="text-sm sm:text-base leading-6 sm:leading-7 text-justify">
                {data.description}
              </p>
            </div>

            {/* دکمه‌ها - با wrap در موبایل */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              
              <Button size="sm" variant="default" className="gap-1.5 text-xs h-8 sm:h-9">
                <Building2 className="size-3 sm:size-3.5" />
                {data.numberOfFaculties} دانشکده
              </Button>

              <Button size="sm" variant="secondary" className="gap-1.5 text-xs h-8 sm:h-9">
                <Users className="size-3 sm:size-3.5" />
                {data.numberOfStudents.toLocaleString()} دانشجو
              </Button>

              <Button size="sm" variant="outline" className="gap-1.5 text-xs h-8 sm:h-9">
                <GraduationCap className="size-3 sm:size-3.5" />
                {data.professors_count} استاد
              </Button>

              <Button size="sm" variant="default" className="gap-1.5 text-xs h-8 sm:h-9">
                <BookOpen className="size-3 sm:size-3.5" />
                {data.majors_count} رشته
              </Button>

              <Button size="sm" variant="outline" className="gap-1.5 text-xs h-8 sm:h-9">
                <Map className="size-3 sm:size-3.5" />
                {data.city}
              </Button>

              <Button size="sm" variant="secondary" className="gap-1.5 text-xs h-8 sm:h-9">
                <CatIcon className="size-3 sm:size-3.5" />
                {data.category}
              </Button>

              <Button size="sm" variant="ghost" className="gap-1.5 text-xs h-8 sm:h-9">
                <Calendar className="size-3 sm:size-3.5" />
                تاسیس {data.establishmentYear}
              </Button>

              <Button size="sm" className={`gap-1.5 text-xs h-8 sm:h-9 ${getRankColor(data.nationalRank)}`}>
                <Trophy className="size-3 sm:size-3.5" />
                رتبه {data.nationalRank}
              </Button>

            </div>
          </div>
        </div>

        {/* بخش جزئیات دانشگاه */}
        <div className="border-t-2 border-dashed mt-8 sm:mt-10 pt-8 sm:pt-10">
          
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-6 sm:mb-8 flex items-center justify-center gap-2">
            <Building2 className="size-5 sm:size-6" />
            جزئیات دانشگاه
          </h2>

          {/* کارت‌های آماری - گرید ریسپانسیو */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10">
            
            <div className="bg-muted/30 rounded-xl p-3 sm:p-4 border border-dashed text-center">
              <Building2 className="size-6 sm:size-7 md:size-8 text-primary mx-auto mb-2" />
              <p className="text-lg sm:text-xl md:text-2xl font-bold">{data.numberOfFaculties}</p>
              <p className="text-xs sm:text-sm text-muted-foreground">دانشکده</p>
            </div>

            <div className="bg-muted/30 rounded-xl p-3 sm:p-4 border border-dashed text-center">
              <Users className="size-6 sm:size-7 md:size-8 text-primary mx-auto mb-2" />
              <p className="text-lg sm:text-xl md:text-2xl font-bold">{data.numberOfStudents.toLocaleString()}</p>
              <p className="text-xs sm:text-sm text-muted-foreground">دانشجو</p>
            </div>

            <div className="bg-muted/30 rounded-xl p-3 sm:p-4 border border-dashed text-center">
              <Calendar className="size-6 sm:size-7 md:size-8 text-primary mx-auto mb-2" />
              <p className="text-lg sm:text-xl md:text-2xl font-bold">{data.establishmentYear}</p>
              <p className="text-xs sm:text-sm text-muted-foreground">سال تأسیس</p>
            </div>

            <div className="bg-muted/30 rounded-xl p-3 sm:p-4 border border-dashed text-center">
              <Trophy className="size-6 sm:size-7 md:size-8 text-primary mx-auto mb-2" />
              <p className="text-lg sm:text-xl md:text-2xl font-bold">{data.nationalRank}</p>
              <p className="text-xs sm:text-sm text-muted-foreground">رتبه کشوری</p>
            </div>
          </div>

          {/* اطلاعات تکمیلی */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10">
            
            <div className="bg-muted/30 rounded-xl p-3 sm:p-4 border border-dashed flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FlaskConical className="size-4 sm:size-5 text-primary" />
                <span className="text-xs sm:text-sm md:text-base">آزمایشگاه‌ها</span>
              </div>
              <span className="font-bold text-sm sm:text-base md:text-lg">{data.labs_count}</span>
            </div>

            <div className="bg-muted/30 rounded-xl p-3 sm:p-4 border border-dashed flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Award className="size-4 sm:size-5 text-primary" />
                <span className="text-xs sm:text-sm md:text-base">درصد پذیرش</span>
              </div>
              <span className="font-bold text-sm sm:text-base md:text-lg">{data.acceptance_rate}%</span>
            </div>

            <div className="bg-muted/30 rounded-xl p-3 sm:p-4 border border-dashed flex items-center justify-between">
              <div className="flex items-center gap-2">
                <HeartHandshake className="size-4 sm:size-5 text-primary" />
                <span className="text-xs sm:text-sm md:text-base">رضایت دانشجویان</span>
              </div>
              <span className="font-bold text-sm sm:text-base md:text-lg">{data.satisfaction_rate}%</span>
            </div>
          </div>

          {/* نوار پیشرفت */}
          <div className="bg-muted/30 rounded-xl p-3 sm:p-4 border border-dashed mb-8 sm:mb-10">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs sm:text-sm font-medium">نرخ رضایت دانشجویان</span>
              <span className="text-sm sm:text-base font-bold text-primary">{data.satisfaction_rate}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-primary rounded-full h-2 transition-all duration-500"
                style={{ width: `${data.satisfaction_rate}%` }}
              />
            </div>
          </div>

          {/* اساتید برتر */}
          <div className="mb-8 sm:mb-10">
            <CardItrationView detail={CardData.detail} />
          </div>
          
        </div>
      </div>
    </div>
  )
}