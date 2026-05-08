"use client"

import {
    Combobox,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxInput,
    ComboboxItem,
    ComboboxList,
} from "@/components/ui/combobox"
import { useRouter } from "next/navigation"

const page = () => {

    const router = useRouter()

    const i: { url: string, title: string }[] = [
        { title: "دانشگاه", url: 'university' },
        { title: "استاد", url: 'professor' },
        { title: "درس", url: 'lesson' },
        { title: "رشته", url: 'major' }
    ]



    const handleSelect = (value: string | null) => {

        console.log("انتخاب شد:", value)

        if (value) router.push(`manipulation/${value}`)

    }

    return (

        <div className="w-8/12  mx-auto">




            <Combobox items={i}
                onValueChange={handleSelect}
            >

                <div className="my-6 mt-32">
                    <h2
                        className=" text-[2rem] sm:text-[3rem] md:text-[2rem] font-extrabold text-center bg-linear-to-t from-[black]/60 to-[black] dark:from-[white]/60 dark:to-[pink]/30 text-transparent bg-clip-text"
                    >
                        یک مورد را انتخاب کنید

                    </h2>

                </div>



                <ComboboxInput placeholder="یک مورد انتخاب کنید" className="h-14" />
                <ComboboxContent>
                    <ComboboxEmpty>موردی یافت نشد.</ComboboxEmpty>
                    <ComboboxList >
                        {(item, index) => (
                            <ComboboxItem key={index} value={item.url}>
                                {item.title}
                            </ComboboxItem>
                        )}
                    </ComboboxList>
                </ComboboxContent>
            </Combobox>
        </div>
    )
}



export default page