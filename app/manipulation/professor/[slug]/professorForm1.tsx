"use client"
import * as React from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardDescription,
    CardTitle,
} from "@/components/ui/card"
import {
    Combobox,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxInput,
    ComboboxItem,
    ComboboxList,
} from "@/components/ui/combobox"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { sileo } from "sileo"
import { api } from "@/utils/api/base"
import { useFieldArray, useForm } from "react-hook-form"
import { Back } from "@hugeicons/core-free-icons"
import { useRouter } from "next/navigation"
import { Plus, X } from "lucide-react"
import { CardArea, CardAreaWrapper } from "@/components/CardArea"

const defaultProfessorData: FormValues = {
    name: "دکتر علی رضایی",
    name_english: "ali rezai",
    description: "عضو هیئت علمی دانشگاه تهران با بیش از 15 سال سابقه تدریس در حوزه یادگیری ماشین و پردازش زبان طبیعی",
    description_english: "a",
    image_url: "https://picsum.photos/seed/prof1/200/200",
    experienceYears: 15, // بر اساس توضیحات "بیش از 15 سال سابقه"
    education_history: [
        {
            year: "1398",
            field: "هوش مصنوعی",
            degree: "دکترا",
            university: "دانشگاه صنعتی شریف"
        },
        {
            year: "1393",
            field: "مهندسی کامپیوتر",
            degree: "کارشناسی ارشد",
            university: "دانشگاه تهران"
        }
    ].map(({ year, ...rest }) => rest) // فیلد year در type شما نیست
}

interface ProfessorProps {
    initialData?: FormValues
}

type Education = {
    degree: string
    university: string
    field: string
}

type FormValues = {
    name: string
    name_english: string
    description: string
    description_english: string
    image_url: string
    experienceYears: number
    education_history: Education[]
}

export function ProfessorComponent1() {
  return (
    <CardAreaWrapper>
      <Professor />
    </CardAreaWrapper>
  )
}


export default function Professor({ initialData = defaultProfessorData }: ProfessorProps) {
        const { register, control, handleSubmit } = useForm<FormValues>({
        defaultValues: initialData,
    })
    const [isLoading, setIsLoading] = React.useState(false)
    const degrees = ["کارشناسی", "کارشناسی ارشد", "دکترا"]
    const router = useRouter()
    // const { register, control, handleSubmit } = useForm<FormValues>({
    //     defaultValues: {
    //         education_history: [],
    //     },
    // })

    const { fields, append, remove } = useFieldArray({
        control,
        name: "education_history",
    })

    // 🔹 state موقت برای آیتم جدید
    const [tempEducation, setTempEducation] = React.useState<Education>({
        degree: "",
        university: "",
        field: "",
    })

    const onSubmit = async (data: FormValues) => {
        setIsLoading(true)

        if (data.education_history?.length < 1) {
            sileo.error({
                title: 'تحصیلات نباید خالی باشد',
            })
        } else {
            api.post("/manipulation/professor", data).then(s => {
                console.log(s.data)
                sileo.success({
                    title: 'با موفقیت به لیست معلق ها اضاف شد !'
                })
            })

        }

        // if (!id) {
        //   setIsLoading(false)
        //   sileo.error({ title: 'شناسه ادیت نامعتبر است' })
        //   return
        // }
        // the condition use for when we have id 


        try {

            // const response = await api.patch(`/manipulation/university/${id}`, data)
            // Use api.patch for edits. The value below this comment is used for additions.


            const response = await api.post(`/manipulation/professor/`, data)
            router.push('/console')
            console.log(response.data)

        } catch (error) {
            console.log(error);
            sileo.error({ title: 'خطا در ذخیره اطلاعات' })


        } finally {
            setIsLoading(false)
        }
    }
    return (

        <CardArea className="container w-full mx-auto ">
            <Card className="flex  flex-col p-4 w-full">
                <CardTitle className="text-xl font-semibold mb-2">ادیت استاد</CardTitle>
                <CardDescription className="mb-4 text-sm text-gray-600">
                    لطفاً بخش های مورد نظر را ادیت نمایید
                </CardDescription>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                    <FieldGroup>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Field>
                                <FieldLabel htmlFor="en-form-title">نام استاد</FieldLabel>
                                <Input
                                    {...register("name", { required: true })}
                                    id="en-form-title"
                                    placeholder="Enter professor`s name"

                                />
                            </Field>

                            <Field>
                                <FieldLabel htmlFor="en-form-title-en">نام انگلیسی</FieldLabel>
                                <Input
                                    {...register("name_english", { required: true })}
                                    id="en-form-title-en"
                                    placeholder="Enter professor`s name"
                                />
                            </Field>
                        </div>

                        <div className="mt-4">
                            <Field>
                                <FieldLabel htmlFor="description">توضیحات</FieldLabel>
                                <Textarea
                                    {...register("description", { required: true })}
                                    id="description"
                                    placeholder="Add any additional comments"
                                />
                            </Field>
                        </div>

                        <div className="mt-4">
                            <Field>
                                <FieldLabel htmlFor="english-description">توضیحات به انگلیسی</FieldLabel>
                                <Textarea
                                    {...register("description_english", { required: true })}
                                    id="english-description"
                                    placeholder="Add any additional comments"
                                />
                            </Field>
                        </div>

                        <div className="mt-4">
                            <Field>
                                <FieldLabel htmlFor="image-url">آدرس عکس</FieldLabel>
                                <Input
                                    {...register("image_url", { required: true })}
                                    id="image-url"
                                    placeholder="Enter your url"
                                />
                            </Field>
                        </div>

                        <div className="mt-4">
                            <Field>
                                <FieldLabel htmlFor="small-form-framework">سابقه</FieldLabel>
                                <Input
                                    placeholder="سابقه (سال)"
                                    {...register("experienceYears", { valueAsNumber: true, required: true })}
                                    type="number"

                                />
                            </Field>
                        </div>
                        <div>
                            <Field>
                            <h3 className="text-xl font-bold ">تحصیلات</h3>

                            {/* لیست ثبت شده‌ها */}
                            <div className="flex gap-3 flex-wrap mb-4">
                                {fields.map((item, index) => (
                                    <Badge key={item.id} className="flex items-center gap-2">
                                        {item.degree} | {item.university}
                                        <X
                                            className="cursor-pointer w-4 h-4"
                                            onClick={() => remove(index)}
                                        />
                                    </Badge>
                                ))}
                            </div>

                            {/* فرم افزودن */}
                            <div className="grid md:grid-cols-3 gap-4">
                                <Combobox
                                    items={degrees}
                                    onValueChange={(val) =>
                                        setTempEducation((prev: Education) => ({
                                            ...prev,
                                            degree: val as string,
                                        }))
                                    }
                                >
                                    <ComboboxInput placeholder="مقطع تحصیلی" />
                                    <ComboboxContent>
                                        <ComboboxEmpty>موردی یافت نشد</ComboboxEmpty>
                                        <ComboboxList>
                                            {(item) => (
                                                <ComboboxItem key={item} value={item}>
                                                    {item}
                                                </ComboboxItem>
                                            )}
                                        </ComboboxList>
                                    </ComboboxContent>
                                </Combobox>

                                <Input
                                    placeholder="دانشگاه"
                                    value={tempEducation.university}
                                    onChange={(e) =>
                                        setTempEducation((prev) => ({
                                            ...prev,
                                            university: e.target.value,
                                        }))
                                    }
                                />

                                <Input
                                    placeholder="رشته"
                                    value={tempEducation.field}
                                    onChange={(e) =>
                                        setTempEducation((prev) => ({
                                            ...prev,
                                            field: e.target.value,
                                        }))
                                    }
                                />
                            </div>

                            <div className="mt-4">
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="icon"
                                    onClick={() => {
                                        if (
                                            !tempEducation.degree ||
                                            !tempEducation.university ||
                                            !tempEducation.field
                                        )
                                            return

                                        append(tempEducation)

                                        // reset temp
                                        setTempEducation({
                                            degree: "",
                                            university: "",
                                            field: "",
                                        })
                                    }}
                                >
                                    <Plus />
                                </Button>
                            </div>
</Field>
                        </div>
                        <div className="mt-2 flex justify-end gap-4">
                            <Button type="submit" disabled={isLoading}>
                                {isLoading ? (
                                    <span className="flex items-center space-x-2">
                                        <svg
                                            className="animate-spin size-5 delay-150 text-black"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.25" />
                                            <path
                                                d="M22 12a10 10 0 0 0-10-10"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                        <span>در حال ذخیره...</span>
                                    </span>
                                ) : (
                                    'ذخیره'
                                )}

                            </Button>
                            <Button onClick={() => router.back()} variant="outline" type="button">
                                انصراف
                            </Button>
                        </div>
                    </FieldGroup>
                </form>
            </Card>
        </CardArea>

    );
}