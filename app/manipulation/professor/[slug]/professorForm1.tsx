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
import { useRouter } from "next/navigation"
import { Plus, X, Star, Users, ClipboardList, MessageCircle } from "lucide-react"
import { CardArea, CardAreaWrapper } from "@/components/CardArea"

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
    // فیلدهای جدید
    teachingStyle: string
    ethics: string
    evaluationMethod: string
    communicationSkill: number
    availability: string
}

// مقادیر پیشنهادی برای کامبوباکس‌ها
const teachingStyles = ["تعاملی", "سخنرانی محور", "پروژه محور", "مسئله محور", "ترکیبی"]
const ethicsLevels = ["بسیار بالا", "بالا", "متوسط", "قابل قبول"]
const availabilityOptions = ["ایمیل", "ساعات اداری", "پیام رسان", "حضوری", "همه موارد"]
const evaluationMethods = ["میان‌ترم + پایان‌ترم", "پروژه محور", "ارزیابی مستمر", "حضور و مشارکت", "ترکیبی"]
const degrees = ["کارشناسی", "کارشناسی ارشد", "دکترا"]

// دیتای پیش‌فرض با مقادیر اولیه برای ویرایش
const defaultProfessorData: FormValues = {
    name: "دکتر علی رضایی",
    name_english: "Ali Rezai",
    description: "عضو هیئت علمی دانشگاه تهران با بیش از 15 سال سابقه تدریس در حوزه یادگیری ماشین و پردازش زبان طبیعی",
    description_english: "Faculty member of Tehran University with over 15 years of teaching experience in machine learning and NLP",
    image_url: "https://picsum.photos/seed/prof1/200/200",
    experienceYears: 15,
    education_history: [
        {
            degree: "دکترا",
            university: "دانشگاه صنعتی شریف",
            field: "هوش مصنوعی"
        },
        {
            degree: "کارشناسی ارشد",
            university: "دانشگاه تهران",
            field: "مهندسی کامپیوتر"
        }
    ],
    // مقادیر اولیه برای فیلدهای جدید
    teachingStyle: "تعاملی",
    ethics: "بسیار بالا",
    evaluationMethod: "پروژه محور",
    communicationSkill: 5,
    availability: "ایمیل و ساعات اداری"
}

interface ProfessorProps {
    initialData?: FormValues
}

export function ProfessorComponent1() {
    return (
        <CardAreaWrapper>
            <Professor />
        </CardAreaWrapper>
    )
}

export default function Professor({ initialData = defaultProfessorData }: ProfessorProps) {
    const { register, control, handleSubmit, setValue, watch } = useForm<FormValues>({
        defaultValues: initialData,
    })
    const [isLoading, setIsLoading] = React.useState(false)
    const router = useRouter()

    const { fields, append, remove } = useFieldArray({
        control,
        name: "education_history",
    })

    // state موقت برای آیتم جدید تحصیلی
    const [tempEducation, setTempEducation] = React.useState<Education>({
        degree: "",
        university: "",
        field: "",
    })

    // state برای مقادیر انتخابی کامبوباکس‌ها (برای نمایش)
    const [selectedTeachingStyle, setSelectedTeachingStyle] = React.useState(initialData?.teachingStyle || "")
    const [selectedEthics, setSelectedEthics] = React.useState(initialData?.ethics || "")
    const [selectedAvailability, setSelectedAvailability] = React.useState(initialData?.availability || "")
    const [selectedEvaluationMethod, setSelectedEvaluationMethod] = React.useState(initialData?.evaluationMethod || "")

    const onSubmit = async (data: FormValues) => {
        setIsLoading(true)

        if (data.education_history?.length < 1) {
            sileo.error({
                title: 'تحصیلات نباید خالی باشد',
            })
            setIsLoading(false)
            return
        }

        try {
            const response = await api.post(`/manipulation/professor/`, data)
            sileo.success({
                title: 'با موفقیت به لیست معلق ها اضافه شد!'
            })
            router.push('/console')
            console.log(response.data)
        } catch (error) {
            console.log(error)
            sileo.error({ title: 'خطا در ذخیره اطلاعات' })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <CardArea className="container w-full mx-auto">
            <Card className="flex flex-col p-4 w-full">
                <CardTitle className="text-xl font-semibold mb-2">ویرایش استاد</CardTitle>
                <CardDescription className="mb-4 text-sm text-gray-600">
                    لطفاً بخش های مورد نظر را ویرایش نمایید
                </CardDescription>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                    <FieldGroup>
                        {/* ردیف اول: نام استاد و نام انگلیسی */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Field>
                                <FieldLabel htmlFor="en-form-title">نام استاد</FieldLabel>
                                <Input
                                    {...register("name", { required: true })}
                                    id="en-form-title"
                                    placeholder="نام استاد"
                                />
                            </Field>

                            <Field>
                                <FieldLabel htmlFor="en-form-title-en">نام انگلیسی</FieldLabel>
                                <Input
                                    {...register("name_english", { required: true })}
                                    id="en-form-title-en"
                                    dir="ltr"
                                    placeholder="Professor's name in English"
                                />
                            </Field>
                        </div>

                        {/* توضیحات فارسی و انگلیسی */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <Field>
                                <FieldLabel htmlFor="description">توضیحات</FieldLabel>
                                <Textarea
                                    {...register("description", { required: true })}
                                    id="description"
                                    placeholder="توضیحات فارسی"
                                    rows={3}
                                />
                            </Field>

                            <Field>
                                <FieldLabel htmlFor="english-description">توضیحات به انگلیسی</FieldLabel>
                                <Textarea
                                    {...register("description_english", { required: true })}
                                    id="english-description"
                                    dir="ltr"
                                    placeholder="English description"
                                    rows={3}
                                />
                            </Field>
                        </div>

                        {/* آدرس عکس و سابقه */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <Field>
                                <FieldLabel htmlFor="image-url">آدرس عکس</FieldLabel>
                                <Input
                                    {...register("image_url", { required: true })}
                                    id="image-url"
                                    dir="ltr"
                                    placeholder="https://example.com/photo.jpg"
                                />
                            </Field>

                            <Field>
                                <FieldLabel htmlFor="small-form-framework">سابقه (سال)</FieldLabel>
                                <Input
                                    placeholder="سابقه به سال"
                                    {...register("experienceYears", { valueAsNumber: true, required: true })}
                                    type="number"
                                />
                            </Field>
                        </div>

                        {/* ========== بخش جدید: ویژگی‌های حرفه‌ای ========== */}
                        <div className="mt-6 pt-4 border-t border-dashed border-gray-200">
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <Star className="size-5" />
                                ویژگی‌های حرفه‌ای
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* نحوه تدریس */}
                                <Field>
                                    <FieldLabel htmlFor="teaching-style">
                                        <span className="flex items-center gap-1">
                                            <Users className="size-4" />
                                            نحوه تدریس
                                        </span>
                                    </FieldLabel>
                                    <Combobox
                                        items={teachingStyles}
                                        value={selectedTeachingStyle}
                                        onValueChange={(val) => {
                                            setSelectedTeachingStyle(val as string)
                                            setValue("teachingStyle", val as string)
                                        }}
                                    >
                                        <ComboboxInput placeholder="انتخاب نحوه تدریس" />
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
                                </Field>

                                {/* اخلاقیات */}
                                <Field>
                                    <FieldLabel htmlFor="ethics">
                                        <span className="flex items-center gap-1">
                                            <Star className="size-4" />
                                            اخلاقیات
                                        </span>
                                    </FieldLabel>
                                    <Combobox
                                        items={ethicsLevels}
                                        value={selectedEthics}
                                        onValueChange={(val) => {
                                            setSelectedEthics(val as string)
                                            setValue("ethics", val as string)
                                        }}
                                    >
                                        <ComboboxInput placeholder="اخلاقیات استاد" />
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
                                </Field>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                {/* روش ارزیابی */}
                                <Field>
                                    <FieldLabel htmlFor="evaluation-method">
                                        <span className="flex items-center gap-1">
                                            <ClipboardList className="size-4" />
                                            روش ارزیابی
                                        </span>
                                    </FieldLabel>
                                    <Combobox
                                        items={evaluationMethods}
                                        value={selectedEvaluationMethod}
                                        onValueChange={(val) => {
                                            setSelectedEvaluationMethod(val as string)
                                            setValue("evaluationMethod", val as string)
                                        }}
                                    >
                                        <ComboboxInput placeholder="روش ارزیابی دانشجویان" />
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
                                </Field>

                                {/* دسترسی و ارتباط */}
                                <Field>
                                    <FieldLabel htmlFor="availability">
                                        <span className="flex items-center gap-1">
                                            <MessageCircle className="size-4" />
                                            نحوه ارتباط با استاد
                                        </span>
                                    </FieldLabel>
                                    <Combobox
                                        items={availabilityOptions}
                                        value={selectedAvailability}
                                        onValueChange={(val) => {
                                            setSelectedAvailability(val as string)
                                            setValue("availability", val as string)
                                        }}
                                    >
                                        <ComboboxInput placeholder="روش ارتباط با استاد" />
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
                                </Field>
                            </div>

                            {/* میزان مهارت ارتباطی */}
                            <div className="mt-4">
                                <Field>
                                    <FieldLabel htmlFor="communication-skill">
                                        مهارت ارتباطی و تعامل با دانشجویان (از ۱ تا ۵)
                                    </FieldLabel>
                                    <div className="flex gap-2 mt-1 flex-wrap">
                                        {[1, 2, 3, 4, 5].map((rate) => (
                                            <Button
                                                key={rate}
                                                type="button"
                                                variant={watch("communicationSkill") === rate ? "default" : "outline"}
                                                className="w-12"
                                                onClick={() => setValue("communicationSkill", rate)}
                                            >
                                                {rate}
                                            </Button>
                                        ))}
                                    </div>
                                    {watch("communicationSkill") && (
                                        <p className="text-xs text-muted-foreground mt-2">
                                            امتیاز فعلی: {watch("communicationSkill")} از ۵
                                        </p>
                                    )}
                                </Field>
                            </div>
                        </div>

                        {/* بخش تحصیلات */}
                        <div className="mt-6 pt-4 border-t border-dashed border-gray-200">
                            <Field>
                                <h3 className="text-lg font-bold mb-4">تحصیلات</h3>

                                {/* لیست ثبت شده‌ها */}
                                <div className="flex gap-3 flex-wrap mb-4">
                                    {fields.map((item, index) => (
                                        <Badge key={item.id} className="flex items-center gap-2 cursor-pointer" onClick={() => remove(index)}>
                                            {item.degree} | {item.university} | {item.field}
                                            <X className="cursor-pointer w-4 h-4" />
                                        </Badge>
                                    ))}
                                    {fields.length === 0 && (
                                        <p className="text-sm text-muted-foreground">هیچ تحصیلی ثبت نشده است</p>
                                    )}
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

                        {/* دکمه‌های ارسال و انصراف */}
                        <div className="mt-6 flex justify-end gap-4">
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
                                    'ذخیره تغییرات'
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
    )
}