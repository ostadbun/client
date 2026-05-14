"use client"
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
import { redirect, RedirectType, useRouter } from "next/navigation"
import { Plus, RefreshCcw, X, Star, Users, ClipboardList } from "lucide-react"
import { CardArea, CardAreaWrapper } from "@/components/CardArea"
import { useState } from "react"
import { toast, useSonner } from "sonner"

// IProfessor

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
    // فیلدهای جدید
    teachingStyle: string
    ethics: string
    evaluationMethod: string
    communicationSkill: number
    availability: string
}


interface IButton {
    isLoading: boolean
    isNotActive: boolean
}

// مقادیر پیشنهادی برای نحوه تدریس
const teachingStyles = ["تعاملی", "سخنرانی محور", "پروژه محور", "مسئله محور", "ترکیبی"]
const ethicsLevels = ["بسیار بالا", "بالا", "متوسط", "قابل قبول"]
const availabilityOptions = ["ایمیل", "ساعات اداری", "پیام رسان", "حضوری", "همه موارد"]
const evaluationMethods = ["میان‌ترم + پایان‌ترم", "پروژه محور", "ارزیابی مستمر", "حضور و مشارکت", "ترکیبی"]

export default function Professor() {
    const { register, control, handleSubmit, setValue, watch } = useForm<FormValues>({})
    const [ButtonState, setButtonState] = useState<IButton>({ isNotActive: false, isLoading: false })
    const degrees = ["کارشناسی", "کارشناسی ارشد", "دکترا"]

    const router = useRouter()

    const { fields, append, remove } = useFieldArray({
        control,
        name: "education_history",
    })

    // state موقت برای آیتم جدید
    const [tempEducation, setTempEducation] = useState<Education>({
        degree: "",
        university: "",
        field: "",
    })

    // مقادیر انتخابی
    const [selectedTeachingStyle, setSelectedTeachingStyle] = useState("")
    const [selectedEthics, setSelectedEthics] = useState("")
    const [selectedAvailability, setSelectedAvailability] = useState("")
    const [selectedEvaluationMethod, setSelectedEvaluationMethod] = useState("")

    const onSubmit = async (data: FormValues) => {
        setButtonState((prev) => { return { ...prev, isLoading: true } })

        console.log(data.education_history.length)

        try {
            if (data.education_history?.length < 1) {
                toast.warning('سابقه تحصیلات اضافه کنید')
            } else {
                await new Promise(resolve => setTimeout(resolve, 1000))
                console.log(data)
                toast.success('با موفقیت ارسال شد!')
            }
        } catch (error) {
            console.log(error)
            toast.error('ERROR')
        } finally {
            setButtonState((prev) => { return { ...prev, isLoading: false } })
        }
    }

    return (
        <CardAreaWrapper>
            <CardArea>
                <Card className="flex flex-col p-4 w-full">
                    <CardTitle className="text-xl font-semibold mb-2">درخواست افزودن استاد</CardTitle>
                    <CardDescription className="mb-4 text-sm text-gray-600">
                        لطفاً بخش های مورد نظر را وارد نمایید
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
                                        placeholder="محمد رضا یمقانی"
                                    />
                                </Field>

                                <Field>
                                    <FieldLabel htmlFor="en-form-title-en">نام انگلیسی</FieldLabel>
                                    <Input
                                        {...register("name_english", { required: true })}
                                        id="en-form-title-en"
                                        dir={'ltr'}
                                        placeholder="mohammad reza yamaghani"
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
                                        placeholder="استادیار دانشگاه آزاد لاهیجان"
                                    />
                                </Field>

                                <Field>
                                    <FieldLabel htmlFor="english-description">توضیحات به انگلیسی</FieldLabel>
                                    <Textarea
                                        {...register("description_english", { required: true })}
                                        id="english-description"
                                        dir={'ltr'}
                                        placeholder="Assistant Professor, Lahijan Azad University"
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
                                        dir={'ltr'}
                                        placeholder="https://example.com/professor.jpg"
                                    />
                                </Field>

                                <Field>
                                    <FieldLabel htmlFor="small-form-framework">سابقه (سال)</FieldLabel>
                                    <Input
                                        placeholder="مثال: ۱۵"
                                        {...register("experienceYears", { valueAsNumber: true, required: true })}
                                        type="number"
                                    />
                                </Field>
                            </div>

                            {/* ========== بخش جدید: نحوه تدریس و اخلاقیات ========== */}
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
                                                💬
                                                نحوه ارتباط با استاد
                                            </span>
                                        </FieldLabel>
                                        <Combobox
                                            items={availabilityOptions}
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

                                {/* میزان ارتباط و تعامل */}
                                <div className="mt-4">
                                    <Field>
                                        <FieldLabel htmlFor="communication-skill">
                                            مهارت ارتباطی و تعامل با دانشجویان (از ۱ تا ۵)
                                        </FieldLabel>
                                        <div className="flex gap-2 mt-1">
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
                                            <Badge key={item.id} className="flex items-center gap-2">
                                                {item.degree} | {item.university} | {item.field}
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
                                <Button type="submit" disabled={ButtonState.isNotActive || ButtonState.isLoading}>
                                    {ButtonState.isLoading ? (
                                        <span className="flex items-center space-x-2">
                                            <RefreshCcw className="animate-spin" />
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
        </CardAreaWrapper>
    )
}