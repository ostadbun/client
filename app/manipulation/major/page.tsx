"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import usehardness from "@/hooks/use-hardness"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { api } from "@/app/api/base"
import { sileo } from "sileo"

type FormValues = {
    name: string
    name_english: string
    description: string
    description_english: string
}




const page = () => {

    const { register, handleSubmit } = useForm<FormValues>({})

    const onSubmit = (data: FormValues) => {
        api.post("/manipulation/major", data).then(s => {
            console.log(s.data)
            sileo.success({
                title: 'با موفقیت به لیست معلق ها اضاف شد !'
            })
        })
    }


    const c = usehardness()

    return (

        <form
            onSubmit={handleSubmit(onSubmit)}

        >


            <div className="w-8/12  place-self-center pt-20">






                <div className="mb-3 mt-6">
                    <h2
                        className=" text-[2rem] sm:text-[3rem] md:text-[2rem] font-extrabold text-center bg-linear-to-t from-[black]/60 to-[black] dark:from-[white]/60 dark:to-[pink]/30 text-transparent bg-clip-text"
                    >
                        ثبت رشته جدید

                    </h2>
                </div>






                <div className="mb-3 mt-6">
                    <p
                        className=" text-[2rem] sm:text-[3rem] md:text-[2rem] font-extrabold text-right bg-linear-to-t from-[black]/60 to-[black] dark:from-[white]/60 dark:to-[pink]/30 text-transparent bg-clip-text"
                    >
                        نام رشته

                    </p>
                </div>

                <Input  {...register("name", { required: true })} />


                <div className="mb-3 mt-6">
                    <p
                        className=" text-[2rem] sm:text-[3rem] md:text-[2rem] font-extrabold text-right bg-linear-to-t from-[black]/60 to-[black] dark:from-[white]/60 dark:to-[pink]/30 text-transparent bg-clip-text"
                    >


                        نام انگلیسی
                    </p>
                </div>
                <Input  {...register("name_english", { required: true })} />


                <div className="mb-3 mt-6">
                    <p
                        className=" text-[2rem] sm:text-[3rem] md:text-[2rem] font-extrabold text-right bg-linear-to-t from-[black]/60 to-[black] dark:from-[white]/60 dark:to-[pink]/30 text-transparent bg-clip-text"
                    >



                    </p>


                </div>




                <div className="mb-3 mt-6">
                    <p
                        className=" text-[2rem] sm:text-[3rem] md:text-[2rem] font-extrabold text-right bg-linear-to-t from-[black]/60 to-[black] dark:from-[white]/60 dark:to-[pink]/30 text-transparent bg-clip-text"
                    >


                        توضیحات

                    </p>
                </div>

                <Textarea {...register("description", { required: true })} />

                <div className="mb-3 mt-6">
                    <p
                        className=" text-[2rem] sm:text-[3rem] md:text-[2rem] font-extrabold text-right bg-linear-to-t from-[black]/60 to-[black] dark:from-[white]/60 dark:to-[pink]/30 text-transparent bg-clip-text"
                    >


                        توضیحات انگلیسی

                    </p>
                </div>
                <Textarea {...register("description_english", { required: true })} />







                <Button type="submit" className="w-full">
                    ثبت
                </Button>
            </div>



        </form>
    )
}



export default page