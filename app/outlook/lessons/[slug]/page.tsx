import { CardItrationView, ICardItrationData } from "@/components/osbn/cardItreation"
import { Button } from "@/components/ui/button"
import { Award, Code2, TrendingUp, Clock, BookOpen, Users, Star, AlertCircle, Brain, Calculator } from "lucide-react"
import MajorGraph from "../../majors/components/relationship/relations"

const data = {
    "id": "30",
    "name": "ریاضیات مهندسی",
    "name_english": "Engineering Mathematics",
    "term": "3",
    "difficulty": 5,         // from 1 to 5
    "description": "ریاضیات مهندسی شامل مباحث پیشرفته‌ای مانند معادلات دیفرانسیل، تبدیلات لاپلاس، آنالیز برداری و سری‌های فوریه است که پایه و اساس بسیاری از علوم مهندسی را تشکیل می‌دهد.",
    "description_english": "Advanced mathematics for engineering applications",
    // اطلاعات آماری درس
    "credits": 3,
    "weekly_hours": 4,
    "students_count": 180,
    "professors_count": 12,
    "pass_rate": 68,
    "prerequisites": "ریاضیات عمومی 2",
    "exam_type": "تشریحی",
    "projects_count": 2,
    "usefulness": 95,
    "demand_rate": "بسیار بالا",
    "job_opportunities": 92,
    "avg_salary": "25-45"
}

// تابع تعیین سطح سختی با رنگ
const getDifficultyInfo = (level: number): { text: string; color: string; variant: "default" | "destructive" | "outline" | "secondary" } => {
  switch (level) {
    case 1:
      return { text: "ساده", color: "bg-green-500", variant: "default" }
    case 2:
      return { text: "متوسط", color: "bg-blue-500", variant: "default" }
    case 3:
      return { text: "چالش‌برانگیز", color: "bg-yellow-500", variant: "default" }
    case 4:
      return { text: "سخت", color: "bg-orange-500", variant: "destructive" }
    case 5:
      return { text: "وحشتناک", color: "bg-red-500", variant: "destructive" }
    default:
      return { text: "نامشخص", color: "bg-gray-500", variant: "outline" }
  }
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
    category: 'اساتید این درس',
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

const Page = () => {
  const difficultyInfo = getDifficultyInfo(data.difficulty)
  
  return (
    <>
      <div className="flex h-auto justify-start md:justify-center items-start w-full px-4 md:w-10/12 mx-auto mt-14 gap-x-10 flex-wrap">

        {/* بخش تصویر برای درس
        <div className="w-full h-70 md:w-4/12 mb-14 rounded-2xl overflow-hidden border border-foreground border-dashed">
          <div className="w-full h-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
            <Calculator className="size-24 text-white/50" />
          </div>
        </div> */}

        <div className="flex md:w-7/12 items-center flex-wrap gap-y-4">

          <div className="w-full">
            <div className="flex flex-wrap items-center gap-3 mb-3 justify-center md:justify-start">
              <Button 
                variant={difficultyInfo.variant} 
                className={`gap-2 ${difficultyInfo.color} hover:opacity-80 text-white`}
              >
                <AlertCircle className="size-4" />
                {difficultyInfo.text}
              </Button>
              <Button variant="outline" className="gap-2">
                <Clock className="size-4" />
                ترم {data.term}
              </Button>
            </div>
            <h1 className="text-4xl md:text-start text-center font-black w-full">
              {data.name}
            </h1>
            <h2 className="mt-1 text-sm md:text-start text-center font-normal w-full text-muted-foreground">
              {data.name_english}
            </h2>
          </div>

          <div className="w-full h-auto leading-7 text-justify border-t border-b py-4 border-white/10 border-dashed">
            <p>
              {data.description}
            </p>
          </div>

          {/* دکمه‌های اصلاح شده با اطلاعات درس */}
          <div className="w-full flex flex-wrap md:justify-start justify-center items-center gap-3">
            
            {/* تعداد واحد */}
            <Button variant="default" className="gap-2">
              <BookOpen className="size-4" />
              {data.credits} واحد
            </Button>

            {/* ساعت در هفته */}
            <Button variant="secondary" className="gap-2">
              <Clock className="size-4" />
              {data.weekly_hours} ساعت/هفته
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

            {/* نوع امتحان */}
            <Button variant="secondary" className="gap-2">
              <Brain className="size-4" />
              {data.exam_type}
            </Button>

            {/* تعداد پروژه‌ها */}
            <Button variant="outline" className="gap-2">
              <Code2 className="size-4" />
              {data.projects_count} پروژه
            </Button>

            {/* درصد قبولی */}
            <Button variant={data.pass_rate < 50 ? "destructive" : "default"} className="gap-2">
              <TrendingUp className="size-4" />
              قبولی: {data.pass_rate}%
            </Button>

            {/* پیش‌نیاز */}
            <Button variant="default" className="gap-2 bg-amber-600 hover:bg-amber-700">
              <Star className="size-4" />
              پیش‌نیاز: {data.prerequisites}
            </Button>

          </div>

        </div>
      </div>

      <div className="border-t-2 border-dashed w-10/12 mx-auto py-10 mt-10">

        <h3 className="text-xl font-bold mb-6 text-center">گراف روابط درس</h3>
        <MajorGraph />

        <div className="mt-16">
          <h3 className="text-xl font-bold mb-6 text-center">اساتید این درس</h3>
          <CardItrationView detail={CardData.detail} />
        </div>

      </div>
    </>
  );
}

export default Page;