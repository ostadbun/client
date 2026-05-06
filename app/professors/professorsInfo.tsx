import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { DataTable } from "@/components/data-table"
import { columns, tableData } from "./columns"

type ProfessorsInfoProps = {
  address: string
  teachingYears: number
  degree: string
  university: string
  major: string
  imageSrc: string
}


const data: tableData[] = [
  {
    "وضعیت": "ناموفق",
    name: "پایگاه داده",
  },
  {
    "وضعیت": "ناموفق",
    name: "پایگاه داده",
  },
  {
    "وضعیت": "ناموفق",
    name: "پایگاه داده",
  },
  {
    "وضعیت": "ناموفق",
    name: "پایگاه داده",
  },
  {
    "وضعیت": "ناموفق",
    name: "پایگاه داده",
  },
]

const ProfessorsInfo = ({
  address,
  teachingYears,
  degree,
  university,
  major,
  imageSrc,
}: ProfessorsInfoProps) => {
  return (
    <div className="flex justify-center mb-8">
      <Card className="w-full max-w-3xl">
        <CardContent className="p-6 space-y-6">

          <div className="flex justify-center">
            <Image
              width={200}
              height={200}
              src={imageSrc}
              alt="عکس استاد"
              className="w-32 h-32 rounded-full object-cover shadow-lg border-2 border-gray-200"
            />
          </div>

          <div className="text-center space-y-1">
            <h2 className="text-3xl font-bold">سیاوش شهشانی</h2>
            <p className="text-muted-foreground">
              سیاوش شهشانی، استادی متعهد و الهام‌بخش که با دانش عمیق و نگاه آینده‌نگر خود، مسیر رشد علمی و فکری دانشجویانش را هموار می‌سازد.
            </p>
          </div>

          <Separator />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="flex justify-between border-b pb-2">
              <span className="font-medium">آدرس</span>
              <span className="text-muted-foreground">{address}</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-medium">سابقه تدریس</span>
              <span className="text-muted-foreground">{teachingYears} سال</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-medium">مقطع تحصیلی</span>
              <span className="text-muted-foreground">{degree}</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-medium">دانشگاه</span>
              <span className="text-muted-foreground">{university}</span>
            </div>

            <div className="flex justify-between border-b pb-2 sm:col-span-2">
              <span className="font-medium">رشته</span>
              <span className="text-muted-foreground">{major}</span>
            </div>
          </div>
            <div>
          <DataTable columns={columns} data={data} />
          <br/>
        <DataTable columns={columns} data={data} />
            </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ProfessorsInfo