

import { CardItrationView, ICardItrationData } from "@/components/osbn/cardItreation"
import Image from "next/image"
import { tableData } from "./columns"

const TBdata: tableData[] = [
  { name: 'a', وضعیت: 'در حال پردازش' },
  { name: 'a', وضعیت: 'در حال پردازش' },
  { name: 'a', وضعیت: 'در حال پردازش' },
]

const data = {
    "id": "21",
    "name": "دکتر  سیاوش شهشهانی",
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
}
interface Rows {
  rowTitle: string[]
  cellData: string[][]
}

const table_data: Rows = {
  cellData: [
    [
      'دانشگاه صنعتی شریف',
      'دولتی'
    ],
    ['پیام نور ',
      'دولتی'
    ],
    [
      'دانشگاه آزاد لاهیجان',
      'آٰزاد'
    ],
    [
      'دانشگاه پردبس ',
      'غیر انتفاعی'
    ],
    [
      'دانشگاه تهران ',
      'دولتی'
    ],
    [
      ' دانشگاه شهید بهشتی ',
      'دولتی'
    ],
    [
      ' دانشگاه امیر کبیر ',
      'دولتی'
    ],
    [
      ' دانشگاه آزاد تهران ',
      'آزاد'
    ],
  ],
  rowTitle: [
    'نام دانشگاه',
    'نوع دانشگاه'
  ]
}

const CardData: ICardItrationData = {
  detail: {
    category: 'دانشگاه‌ها',
    data: [
      { title: 'دانشگاه صنعتی شریف', button: { url: 'sharif', name: 'شریف' } },
      { title: 'پیام نور', button: { url: 'payam-noor', name: 'پیام نور' } },
      { title: 'دانشگاه آزاد لاهیجان', button: { url: 'azad-lahijan', name: 'آزاد لاهیجان' } },
      { title: 'دانشگاه پردیس', button: { url: 'pardis', name: 'پردیس' } },
      { title: 'دانشگاه تهران', button: { url: 'tehran', name: 'تهران' } },
      { title: 'دانشگاه شهید بهشتی', button: { url: 'shahid-beheshti', name: 'شهید بهشتی' } },
      { title: 'دانشگاه امیر کبیر', button: { url: 'amir-kabir', name: 'امیر کبیر' } },
      { title: 'دانشگاه آزاد تهران', button: { url: 'azad-tehran', name: 'آزاد تهران' } }
    ],
  }
}
const Page = () => {
    return (
        <>
        <div className="flex h-auto justify-start md:justify-center items-start w-full px-4 md:w-10/12 mx-auto mt-14 gap-x-10 flex-wrap">

        <div className="w-full h-70 md:w-4/12 mb-14 rounded-2xl overflow-hidden border border-foreground border-dashed">
          <Image src={"https://blog.faradars.org/wp-content/uploads/2024/12/siavash-shahshahani.jpg"} width={300} height={200} alt="uni" className=" object-cover size-full opacity-75" />
        </div>



        <div className="flex md:w-7/12  items-center flex-wrap gap-y-4">


          <div className="w-full">
            <h1 className="text-4xl md:text-start text-center font-black w-full">

              {data.name}

            </h1>
            <h2 className="mt-2 text-sm md:text-start text-center font-normal w-full">

              {data.name_english} university of technologey

            </h2>
          </div>



          <div className="w-full h-auto leading-7 text-justify  border-t border-b py-4 border-white/10 border-dashed">
            <p>
              {data.description}
              {data.description}
              {data.description}
              {data.description}


            </p>
          </div>


          {/* <div className="w-full flex md:justify-start justify-center items-end gap-4">
            <Button variant={"secondary"}>ممتاز</Button>
            <Button variant={"destructive"}>ورودی غیر ممکن 💀</Button>
            <Button>ممتاز</Button>
            <Button><Map /> {data.city}</Button>
            <Button><CatIcon /> {data.category}</Button>
          </div> */}


        </div>
      </div>

      <div className="border-t-2 border-dashed w-10/12 mx-auto pt-10 mt-10">


        <CardItrationView detail={CardData.detail} />
        <CardItrationView detail={CardData.detail} />
        <CardItrationView detail={CardData.detail} />








      </div>

    </>
    );
}

export default Page;
