"use client"

import { useForm } from "react-hook-form"
import useCities from "@/hooks/usecities"
import { sileo } from "sileo"
import { api } from "@/utils/api/base"
import { UniversityComponent } from "./universityForm"

type FormValues = {
    name: string
    name_english: string
    description: string
    description_english: string
    city: string
    category: string
    image_url: string
}

export default function Page() {
    const cities = useCities()
    const categories = ["دولتی", "آزاد", "غیر انتفاعی", "پیام نور"]

    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<FormValues>({
        defaultValues: {
            name: "",
            name_english: "",
            description: "",
            description_english: "",
            city: "",
            category: "",
            image_url: "",
        },
    })

    const onSubmit = (data: FormValues) => {


        if (data.city?.length < 1) {
            sileo.error({ title: 'شهر را انتخاب کنید' })
        } else if (data.category?.length < 1) {
            sileo.error({ title: 'دسته بندی را انتخاب کنید' })
        } else {

            console.log("Form submitted:", data)

            api.post("/manipulation/university", data).then(s => {
                console.log(s.data)
                sileo.success({
                    title: 'با موفقیت به لیست معلق ها اضاف شد !'
                })
            })
        }



        // اینجا api.post(...)
    }

    const cityValue = watch("city")
    const categoryValue = watch("category")

    return (
        // <form onSubmit={handleSubmit(onSubmit)} className="w-8/12 place-self-center pt-20 space-y-6">
        //     <h2 className="text-3xl font-extrabold text-center">ثبت دانشگاه جدید</h2>

        //     {/* نام درس */}
        //     <Input placeholder="نام درس" {...register("name", { required: true })} />


        //     {/* نام انگلیسی */}
        //     <Input placeholder="نام انگلیسی" {...register("name_english", { required: true })} />


        //     {/* توضیحات */}
        //     <Textarea placeholder="توضیحات" {...register("description", { required: true })} />


        //     {/* توضیحات انگلیسی */}
        //     <Textarea placeholder="توضیحات انگلیسی" {...register("description_english", { required: true })} />


        //     {/* شهر */}
        //     <Combobox
        //         items={cities}
        //         onValueChange={(val) => setValue("city", val as string)}
        //     >
        //         <ComboboxInput placeholder="شهر را انتخاب کنید" value={cityValue} readOnly />
        //         <ComboboxContent>
        //             <ComboboxEmpty>موردی یافت نشد.</ComboboxEmpty>
        //             <ComboboxList>
        //                 {(item) => <ComboboxItem key={item} value={item}>{item}</ComboboxItem>}
        //             </ComboboxList>
        //         </ComboboxContent>
        //     </Combobox>
        //     {errors.city && <p className="text-red-500">شهر الزامی است</p>}

        //     {/* دسته بندی */}
        //     <Combobox
        //         items={categories}
        //         onValueChange={(val) => setValue("category", val as string)}
        //     >
        //         <ComboboxInput placeholder="نوع دانشگاه خود را انتخاب کنید" value={categoryValue} readOnly />
        //         <ComboboxContent>
        //             <ComboboxEmpty>موردی یافت نشد.</ComboboxEmpty>
        //             <ComboboxList>
        //                 {(item) => <ComboboxItem key={item} value={item}>{item}</ComboboxItem>}
        //             </ComboboxList>
        //         </ComboboxContent>
        //     </Combobox>


        //     {/* آدرس عکس */}
        //     <Input placeholder="آدرس عکس" {...register("image_url", { required: true })} />


        //     <Button type="submit" className="w-full">ثبت</Button>
        // </form>
            <div>
            
            <UniversityComponent/>
            </div>

    )
}