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
      <div className="flex h-auto justify-start lg:justify-center items-start w-full px-3 sm:px-4 md:px-6 lg:px-0 lg:w-10/12 mx-auto mt-14 gap-x-10 flex-wrap">
        
        <div className="flex lg:w-7/12 md:w-10/12 w-full items-center flex-wrap gap-y-4 mx-auto md:mx-0">

          <div className="w-full">
            <h1 className="text-3xl sm:text-4xl md:text-start text-center font-black w-full">
              {data.name}
            </h1>
            <h2 className="mt-1 text-xs sm:text-sm md:text-start text-center font-normal w-full text-muted-foreground">
              {data.name_english}
            </h2>
          </div>

          <div className="w-full h-auto leading-6 sm:leading-7 text-justify border-t border-b py-3 sm:py-4 border-white/10 border-dashed">
            <p className="text-sm sm:text-base">
              {data.description}
            </p>
          </div>

          {/* تمام دکمه‌ها با هم در یک بخش */}
          <div className="w-full flex flex-wrap justify-center sm:justify-center md:justify-start items-center gap-2 sm:gap-3">
            
            {/* دکمه سطح سختی */}
            <Button 
              variant={difficultyInfo.variant} 
              className={`gap-1 sm:gap-2 ${difficultyInfo.color} hover:opacity-80 text-white text-xs sm:text-sm`}
            >
              <AlertCircle className="size-3 sm:size-4" />
              <span className="whitespace-nowrap">{difficultyInfo.text}</span>
            </Button>

            {/* دکمه ترم */}
            <Button variant="outline" className="gap-1 sm:gap-2 text-xs sm:text-sm">
              <Clock className="size-3 sm:size-4" />
              <span className="whitespace-nowrap">ترم {data.term}</span>
            </Button>

            {/* تعداد واحد */}
            <Button variant="default" className="gap-1 sm:gap-2 text-xs sm:text-sm">
              <BookOpen className="size-3 sm:size-4" />
              <span className="whitespace-nowrap">{data.credits} واحد</span>
            </Button>

            {/* تعداد دانشجویان */}
            <Button variant="outline" className="gap-1 sm:gap-2 text-xs sm:text-sm">
              <Users className="size-3 sm:size-4" />
              <span className="whitespace-nowrap">{data.students_count} دانشجو</span>
            </Button>

            {/* تعداد اساتید */}
            <Button variant="default" className="gap-1 sm:gap-2 text-xs sm:text-sm">
              <Award className="size-3 sm:size-4" />
              <span className="whitespace-nowrap">{data.professors_count} استاد</span>
            </Button>

            {/* پیش‌نیاز */}
            <Button variant="default" className="gap-1 sm:gap-2 bg-amber-600 hover:bg-amber-700 text-xs sm:text-sm">
              <Star className="size-3 sm:size-4" />
              <span className="whitespace-nowrap">پیش‌نیاز: {data.prerequisites}</span>
            </Button>

          </div>

        </div>
      </div>

      <div className="border-t-2 border-dashed w-full lg:w-10/12 mx-auto py-8 sm:py-10 mt-8 sm:mt-10 px-3 sm:px-4 md:px-6 lg:px-0 overflow-x-auto">

        <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-center">گراف روابط درس</h3>
        <div className="min-w-[250px] md:min-w-0">
          <MajorGraph />
        </div>

        <div className="mt-10 sm:mt-16">
          <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-center">اساتید این درس</h3>
          <CardItrationView detail={CardData.detail} />
        </div>

      </div>
    </>
  );
}

export default Page;