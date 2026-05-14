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
    "publications_count": 45,
    "students_count": 28,
    "courses_count": 12,
    "research_projects": 8,
    "teachingStyle": "تعاملی و پروژه محور",
    "ethics": "بسیار بالا",
    "evaluationMethod": "پروژه محور + ارزیابی مستمر",
    "communicationSkill": 5,
    "availability": "ایمیل و ساعات اداری",
    "satisfactionRate": 94,
    "teachingExperience": 15
}

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
        {/* بخش اصلی با چیدمان ریسپانسیو اصلاح شده */}
        <div className="flex flex-col lg:flex-row h-auto justify-center items-start w-full px-4 md:px-6 lg:w-10/12 mx-auto mt-8 md:mt-14 gap-y-8 lg:gap-x-10">
          
          {/* بخش تصویر استاد - در موبایل و تبلت در بالا قرار می‌گیرد */}
          <div className="w-full md:w-8/12 lg:w-4/12 mx-auto lg:mx-0">
            <div className="w-full aspect-square max-w-75 md:max-w-87.5 lg:max-w-full mx-auto rounded-2xl overflow-hidden border border-foreground border-dashed">
              <Image 
                src={"https://blog.faradars.org/wp-content/uploads/2024/12/siavash-shahshahani.jpg"} 
                width={400} 
                height={400} 
                alt="professor" 
                className="object-cover w-full h-full opacity-75" 
              />
            </div>
          </div>

          {/* بخش اطلاعات استاد */}
          <div className="flex-1 w-full lg:w-7/12 flex place-self-center flex-col gap-y-4">
            
            {/* نام و عنوان استاد */}
            <div className="w-full text-center lg:text-right">
              <h1 className="text-3xl md:text-4xl font-black">
                {data.name}
              </h1>
              <h2 className="mt-2 text-sm font-normal text-muted-foreground">
                {data.name_english} | استاد دانشگاه تهران
              </h2>
            </div>

            {/* توضیحات */}
            <div className="w-full h-auto leading-7 text-justify border-t border-b py-4 border-white/10 border-dashed">
              <p>
                {data.description}
              </p>
            </div>

            {/* دکمه‌های آماری - در تبلت و موبایل به دو ردیف تبدیل می‌شوند */}
            <div className="w-full flex flex-wrap justify-center lg:justify-start items-center gap-3">
              <Button variant="default" className="gap-2 text-sm md:text-base">
                <BookOpen className="size-4" />
                {data.publications_count} مقاله
              </Button>
              <Button variant="secondary" className="gap-2 text-sm md:text-base">
                <GraduationCap className="size-4" />
                {data.students_count} دانشجو
              </Button>
              <Button variant="outline" className="gap-2 text-sm md:text-base">
                <Award className="size-4" />
                {data.courses_count} دوره
              </Button>
              <Button variant="default" className="gap-2 text-sm md:text-base">
                <Briefcase className="size-4" />
                {data.research_projects} پروژه
              </Button>
              <Button variant="secondary" className="gap-2 bg-green-600 hover:bg-green-700 text-sm md:text-base">
                <TrendingUp className="size-4" />
                {data.satisfactionRate}% رضایت
              </Button>
            </div>
          </div>
        </div>

        {/* بخش ویژگی‌های حرفه‌ای استاد */}
        <div className="border-t-2 border-dashed w-11/12 md:w-10/12 mx-auto pt-8 md:pt-10 mt-8 md:mt-10">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8 flex items-center justify-center gap-2">
            <Star className="size-5 md:size-6 text-yellow-500" />
            ویژگی‌های حرفه‌ای
            <Star className="size-5 md:size-6 text-yellow-500" />
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            
            {/* نحوه تدریس */}
            <div className="bg-muted/30 rounded-xl p-4 border border-dashed">
              <div className="flex items-center gap-2 text-primary mb-2">
                <Users className="size-5" />
                <span className="font-semibold">نحوه تدریس</span>
              </div>
              <p className="text-foreground text-sm md:text-base">{data.teachingStyle}</p>
            </div>

            {/* اخلاقیات */}
            <div className="bg-muted/30 rounded-xl p-4 border border-dashed">
              <div className="flex items-center gap-2 text-primary mb-2">
                <HeartHandshake className="size-5" />
                <span className="font-semibold">اخلاقیات</span>
              </div>
              <p className="text-foreground text-sm md:text-base">{data.ethics}</p>
            </div>

            {/* روش ارزیابی */}
            <div className="bg-muted/30 rounded-xl p-4 border border-dashed">
              <div className="flex items-center gap-2 text-primary mb-2">
                <ClipboardList className="size-5" />
                <span className="font-semibold">روش ارزیابی</span>
              </div>
              <p className="text-foreground text-sm md:text-base">{data.evaluationMethod}</p>
            </div>

            {/* مهارت ارتباطی */}
            <div className="bg-muted/30 rounded-xl p-4 border border-dashed">
              <div className="flex items-center gap-2 text-primary mb-2">
                <MessageCircle className="size-5" />
                <span className="font-semibold">مهارت ارتباطی</span>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-base md:text-lg">{renderStars(data.communicationSkill)}</span>
                <span className="text-xs md:text-sm text-muted-foreground">({data.communicationSkill}/5)</span>
              </div>
            </div>

            {/* نحوه ارتباط */}
            <div className="bg-muted/30 rounded-xl p-4 border border-dashed">
              <div className="flex items-center gap-2 text-primary mb-2">
                <Map className="size-5" />
                <span className="font-semibold">نحوه ارتباط با استاد</span>
              </div>
              <p className="text-foreground text-sm md:text-base">{data.availability}</p>
            </div>

            {/* سابقه تدریس */}
            <div className="bg-muted/30 rounded-xl p-4 border border-dashed">
              <div className="flex items-center gap-2 text-primary mb-2">
                <Award className="size-5" />
                <span className="font-semibold">سابقه تدریس</span>
              </div>
              <p className="text-foreground text-sm md:text-base">{data.teachingExperience} سال تجربه</p>
            </div>
          </div>
        </div>

        {/* تحصیلات استاد */}
        <div className="border-t-2 border-dashed w-11/12 md:w-10/12 mx-auto pt-8 md:pt-10">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8 flex items-center justify-center gap-2">
            <GraduationCap className="size-5 md:size-6" />
            سوابق تحصیلی
          </h2>
          
          <div className="flex flex-col gap-4 mb-10">
            {data.education_history.map((edu, index) => (
              <div key={index} className="bg-muted/30 rounded-xl p-4 border border-dashed flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                <div className="text-center sm:text-right">
                  <span className="font-bold text-base md:text-lg">{edu.degree}</span>
                  <span className="text-muted-foreground mx-2">|</span>
                  <span className="text-sm md:text-base">{edu.field}</span>
                </div>
                <div className="text-muted-foreground text-center sm:text-left text-sm md:text-base">
                  {edu.university} | {edu.year}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* بخش دانشگاه‌ها */}
        <div className="border-t-2 border-dashed w-11/12 md:w-10/12 mx-auto pt-8 md:pt-10 pb-10">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8">دانشگاه‌ها</h2>
          <CardItrationView detail={CardData.detail} />
        </div>
      </>
    );
}

export default Page;