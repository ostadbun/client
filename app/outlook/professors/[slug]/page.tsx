import { CardItrationView, ICardItrationData } from "@/components/osbn/cardItreation"
import Image from "next/image"
import { tableData } from "./columns"
import { Button } from "@/components/ui/button"
import { CatIcon, Map, GraduationCap, Briefcase, Award, BookOpen, Star, Users, ClipboardList, MessageCircle, HeartHandshake, TrendingUp } from "lucide-react"

const TBdata: tableData[] = [
  { name: 'a', وضعیت: 'در حال پردازش' },
  { name: 'a', وضعیت: 'در حال پردازش' },
  { name: 'a', وضعیت: 'در حال پردازش' },
]

const data = {
    "id": "21",
    "name": "دکتر سیاوش شهشهانی",
    "name_english": "Siavash Shahshahani",
    "description": "عضو هیئت علمی دانشگاه تهران با بیش از 15 سال سابقه تدریس در حوزه یادگیری ماشین و پردازش زبان طبیعی",
    "description_english": "short text",
    "education_history": [
        {
            "year": "1398",
            "field": "هوش مصنوعی",
            "degree": "دکترا",
            "university": "دانشگاه صنعتی شریف"
        },
        {
            "year": "1393",
            "field": "مهندسی کامپیوتر",
            "degree": "کارشناسی ارشد",
            "university": "دانشگاه تهران"
        }
    ],
    "image_url": "https://picsum.photos/seed/prof1/200/200",
    // اطلاعات آماری
    "publications_count": 45,
    "students_count": 28,
    "courses_count": 12,
    "research_projects": 8,
    // ویژگی‌های جدید استاد
    "teachingStyle": "تعاملی و پروژه محور",
    "ethics": "بسیار بالا",
    "evaluationMethod": "پروژه محور + ارزیابی مستمر",
    "communicationSkill": 5,
    "availability": "ایمیل و ساعات اداری",
    "satisfactionRate": 94,
    "teachingExperience": 15
}

// تابع تبدیل امتیاز به نمایش ستاره
const renderStars = (rate: number) => {
    return "⭐".repeat(rate) + "☆".repeat(5 - rate)
}

interface Rows {
  rowTitle: string[]
  cellData: string[][]
}

const table_data: Rows = {
  cellData: [
    ['دانشگاه صنعتی شریف', 'دولتی'],
    ['پیام نور', 'دولتی'],
    ['دانشگاه آزاد لاهیجان', 'آزاد'],
    ['دانشگاه پردیس', 'غیر انتفاعی'],
    ['دانشگاه تهران', 'دولتی'],
    ['دانشگاه شهید بهشتی', 'دولتی'],
    ['دانشگاه امیر کبیر', 'دولتی'],
    ['دانشگاه آزاد تهران', 'آزاد'],
  ],
  rowTitle: ['نام دانشگاه', 'نوع دانشگاه']
}

const CardData: ICardItrationData = {
  detail: {
    category: 'دانشگاه‌ها',
    data: [
      { title: 'دانشگاه صنعتی شریف', button: { url: 'sharif', name: 'شریف' } },
      { title: 'دانشگاه تهران', button: { url: 'tehran', name: 'تهران' } },
      { title: 'دانشگاه امیر کبیر', button: { url: 'amir-kabir', name: 'امیر کبیر' } },
      { title: 'دانشگاه شهید بهشتی', button: { url: 'shahid-beheshti', name: 'شهید بهشتی' } },
      { title: 'دانشگاه شهید بهشتی', button: { url: 'shahid-beheshti', name: 'شهید بهشتی' } },
      { title: 'دانشگاه شهید بهشتی', button: { url: 'shahid-beheshti', name: 'شهید بهشتی' } },
      { title: 'دانشگاه شهید بهشتی', button: { url: 'shahid-beheshti', name: 'شهید بهشتی' } },
      { title: 'دانشگاه شهید بهشتی', button: { url: 'shahid-beheshti', name: 'شهید بهشتی' } },
      { title: 'دانشگاه شهید بهشتی', button: { url: 'shahid-beheshti', name: 'شهید بهشتی' } },
      { title: 'دانشگاه شهید بهشتی', button: { url: 'shahid-beheshti', name: 'شهید بهشتی' } },
      { title: 'دانشگاه شهید بهشتی', button: { url: 'shahid-beheshti', name: 'شهید بهشتی' } },
      { title: 'دانشگاه شهید بهشتی', button: { url: 'shahid-beheshti', name: 'شهید بهشتی' } },
      { title: 'دانشگاه شهید بهشتی', button: { url: 'shahid-beheshti', name: 'شهید بهشتی' } },

    ],
  }
}

const Page = () => {
    return (
        <>
        <div className="flex h-auto justify-start md:justify-center items-start w-full px-4 md:w-10/12 mx-auto mt-14 gap-x-10 flex-wrap">

          {/* بخش تصویر استاد */}
          <div className="w-full h-70 md:w-4/12 mb-14 rounded-2xl overflow-hidden border border-foreground border-dashed">
            <Image 
              src={"https://blog.faradars.org/wp-content/uploads/2024/12/siavash-shahshahani.jpg"} 
              width={300} 
              height={200} 
              alt="professor" 
              className="object-cover size-full opacity-75" 
            />
          </div>

          <div className="flex md:w-7/12 items-center flex-wrap gap-y-4">

            {/* نام و عنوان استاد */}
            <div className="w-full">
              <h1 className="text-4xl md:text-start text-center font-black w-full">
                {data.name}
              </h1>
              <h2 className="mt-2 text-sm md:text-start text-center font-normal w-full text-muted-foreground">
                {data.name_english} | استاد دانشگاه تهران
              </h2>
            </div>

            {/* توضیحات */}
            <div className="w-full h-auto leading-7 text-justify border-t border-b py-4 border-white/10 border-dashed">
              <p>
                {data.description}
              </p>
            </div>

            {/* دکمه‌های آماری */}
            <div className="w-full flex flex-wrap md:justify-start justify-center items-center gap-3">
              <Button variant="default" className="gap-2">
                <BookOpen className="size-4" />
                {data.publications_count} مقاله
              </Button>
              <Button variant="secondary" className="gap-2">
                <GraduationCap className="size-4" />
                {data.students_count} دانشجو
              </Button>
              <Button variant="outline" className="gap-2">
                <Award className="size-4" />
                {data.courses_count} دوره
              </Button>
              <Button variant="default" className="gap-2">
                <Briefcase className="size-4" />
                {data.research_projects} پروژه
              </Button>
              <Button variant="secondary" className="gap-2 bg-green-600 hover:bg-green-700">
                <TrendingUp className="size-4" />
                {data.satisfactionRate}% رضایت
              </Button>
            </div>

          </div>
        </div>

        {/* بخش ویژگی‌های حرفه‌ای استاد */}
        <div className="border-t-2 border-dashed w-10/12 mx-auto pt-10 mt-10">
          <h2 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2">
            <Star className="size-6 text-yellow-500" />
            ویژگی‌های حرفه‌ای
            <Star className="size-6 text-yellow-500" />
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            
            {/* نحوه تدریس */}
            <div className="bg-muted/30 rounded-xl p-4 border border-dashed">
              <div className="flex items-center gap-2 text-primary mb-2">
                <Users className="size-5" />
                <span className="font-semibold">نحوه تدریس</span>
              </div>
              <p className="text-foreground">{data.teachingStyle}</p>
            </div>

            {/* اخلاقیات */}
            <div className="bg-muted/30 rounded-xl p-4 border border-dashed">
              <div className="flex items-center gap-2 text-primary mb-2">
                <HeartHandshake className="size-5" />
                <span className="font-semibold">اخلاقیات</span>
              </div>
              <p className="text-foreground">{data.ethics}</p>
            </div>

            {/* روش ارزیابی */}
            <div className="bg-muted/30 rounded-xl p-4 border border-dashed">
              <div className="flex items-center gap-2 text-primary mb-2">
                <ClipboardList className="size-5" />
                <span className="font-semibold">روش ارزیابی</span>
              </div>
              <p className="text-foreground">{data.evaluationMethod}</p>
            </div>

            {/* مهارت ارتباطی */}
            <div className="bg-muted/30 rounded-xl p-4 border border-dashed">
              <div className="flex items-center gap-2 text-primary mb-2">
                <MessageCircle className="size-5" />
                <span className="font-semibold">مهارت ارتباطی</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">{renderStars(data.communicationSkill)}</span>
                <span className="text-sm text-muted-foreground">({data.communicationSkill}/5)</span>
              </div>
            </div>

            {/* نحوه ارتباط */}
            <div className="bg-muted/30 rounded-xl p-4 border border-dashed">
              <div className="flex items-center gap-2 text-primary mb-2">
                <Map className="size-5" />
                <span className="font-semibold">نحوه ارتباط با استاد</span>
              </div>
              <p className="text-foreground">{data.availability}</p>
            </div>

            {/* سابقه تدریس */}
            <div className="bg-muted/30 rounded-xl p-4 border border-dashed">
              <div className="flex items-center gap-2 text-primary mb-2">
                <Award className="size-5" />
                <span className="font-semibold">سابقه تدریس</span>
              </div>
              <p className="text-foreground">{data.teachingExperience} سال تجربه</p>
            </div>

          </div>
        </div>

        {/* تحصیلات استاد */}
        <div className="border-t-2 border-dashed w-10/12 mx-auto pt-10">
          <h2 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2">
            <GraduationCap className="size-6" />
            سوابق تحصیلی
          </h2>
          
          <div className="flex flex-col gap-4 mb-10">
            {data.education_history.map((edu, index) => (
              <div key={index} className="bg-muted/30 rounded-xl p-4 border border-dashed flex flex-wrap justify-between items-center">
                <div>
                  <span className="font-bold text-lg">{edu.degree}</span>
                  <span className="text-muted-foreground mx-2">|</span>
                  <span>{edu.field}</span>
                </div>
                <div className="text-muted-foreground">
                  {edu.university} | {edu.year}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t-2 border-dashed w-10/12 mx-auto pt-10 pb-10">
          <h2 className="text-2xl font-bold text-center mb-8">دانشگاه‌ها</h2>
          <CardItrationView detail={CardData.detail} />
        </div>

      </>
    );
}

export default Page;