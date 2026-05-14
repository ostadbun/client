import { DataTable } from "@/components/data-table"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

type LessonInfoProps = {
  level: number
  semesterInfo: SemesterInfo
}


export const hardness = (level: number): string => {
  switch (level) {
    case 1:
      return "ساده"
    case 2:
      return "متوسط"
    case 3:
      return "چالش‌برانگیز"
    case 4:
      return "سخت"
    case 5:
      return "وحشتناک"
    default:
      return ""
  }
}

type SemesterInfo = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

const LessonInfo = ({ level, semesterInfo }: LessonInfoProps
) => {
  return (
    <div className="space-y-4   flex justify-center mt-[7vh]">
      <Card className="w-full p-10 max-w-3xl">

        <div className="flex items-center gap-4 justify-center">
          <Button className="text-base font-medium">
            {hardness(level)}
          </Button>

          <h2 className="text-2xl font-semibold">
            سیستم های عامل
          </h2>

          <Button className="text-base font-medium">
            ترم {semesterInfo}
          </Button>
        </div>

        <Separator />

        <p className="text-center">
          سیستم‌های عامل قلب تپنده‌ی هر رایانه‌اند؛ نرم‌افزاری که میان سخت‌افزار و کاربر پل می‌زند و همه چیز را هماهنگ و قابل استفاده می‌کند.
        </p>
        {/* <div className="mt-[6vh]">
          <DataTable columns={columns} data={data} />
          <br />
          <DataTable columns={columns} data={data} />
        </div> */}
      </Card>
    </div>
  )
}

export default LessonInfo

