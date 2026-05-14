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
import { CardArea, CardAreaWrapper } from "@/components/CardArea"
import { Building2, Users, Calendar, Trophy, Plus, X, Globe, Phone, Mail, MapPin, Award } from "lucide-react"

export function UniversityComponent() {
  return (
    <CardAreaWrapper>
      <FormExample />
    </CardAreaWrapper>
  )
}

const cityOption = [
  "تهران",
  "رشت",
  "اصفهان",
  "شیراز",
  "مشهد",
  "تبریز",
  "کرج",
  "قم",
  "اهواز",
  "کرمانشاه"
] as const

const universityOption = [
  "دانشگاه دولتی",
  "دانشگاه آزاد",
  "آزاد",
  "غیر انتفاعی",
  "پیام نور",
  "علمی کاربردی"
] as const

// ویژگی‌های اضافی دانشگاه
type ExtraFeature = {
  title: string
  value: string
}

type FormValues = {
  name: string
  name_english: string
  description: string
  description_english: string
  city: string
  category: string
  image_url: string
  // ویژگی‌های جدید دانشگاه
  numberOfFaculties: number      // تعداد دانشکده‌ها
  numberOfStudents: number       // تعداد دانشجویان
  establishmentYear: number      // سال تأسیس
  nationalRank: number           // رتبه دانشگاه در کشور
  // ویژگی‌های اضافی با قابلیت افزودن داینامیک
  extraFeatures: ExtraFeature[]
  website: string
  phone: string
  email: string
  address: string
}

export default function FormExample() {
  const [isLoading, setIsLoading] = React.useState(false)
  const router = useRouter()

  const { register, handleSubmit, watch, setValue, control, formState: { errors } } = useForm<FormValues>({
    defaultValues: {
      name: "",
      name_english: "",
      description: "",
      description_english: "",
      city: "",
      category: "",
      image_url: "",
      numberOfFaculties: 0,
      numberOfStudents: 0,
      establishmentYear: new Date().getFullYear(),
      nationalRank: 0,
      extraFeatures: [],
      website: "",
      phone: "",
      email: "",
      address: "",
    },
  })

  // useFieldArray برای ویژگی‌های اضافی
  const { fields, append, remove } = useFieldArray({
    control,
    name: "extraFeatures",
  })

  // state موقت برای ویژگی جدید
  const [tempFeature, setTempFeature] = React.useState<ExtraFeature>({
    title: "",
    value: "",
  })

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true)

    if (!data.city || data.city.length < 1) {
      sileo.error({ title: 'شهر را انتخاب کنید' })
      setIsLoading(false)
      return
    }

    if (!data.category || data.category.length < 1) {
      sileo.error({ title: 'دسته بندی را انتخاب کنید' })
      setIsLoading(false)
      return
    }

    // اعتبارسنجی ویژگی‌های جدید
    if (data.numberOfFaculties && data.numberOfFaculties < 1) {
      sileo.error({ title: 'تعداد دانشکده‌ها باید حداقل ۱ باشد' })
      setIsLoading(false)
      return
    }

    if (data.numberOfStudents && data.numberOfStudents < 100) {
      sileo.warning({ title: 'تعداد دانشجویان کمتر از حد معمول است' })
    }

    if (data.establishmentYear && (data.establishmentYear < 1000 || data.establishmentYear > new Date().getFullYear())) {
      sileo.error({ title: 'سال تأسیس نامعتبر است' })
      setIsLoading(false)
      return
    }

    try {
      console.log("Form submitted:", data)

      const response = await api.post(`/manipulation/university/`, data)

      router.push('/console')
      console.log(response.data)

      sileo.success({
        title: 'با موفقیت به لیست معلق‌ها اضافه شد!'
      })
    } catch (error) {
      console.error(error)
      sileo.error({
        title: 'ارسال اطلاعات با خطا مواجه شد'
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <CardArea className="container w-full mx-auto">
      <Card className="flex flex-col p-4 w-full">
        <CardTitle className="text-xl font-semibold mb-2">ویرایش دانشگاه جدید</CardTitle>
        <CardDescription className="mb-4 text-sm text-gray-600">
          لطفاً بخش های مورد نظر را وارد نمایید
        </CardDescription>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <FieldGroup>
            {/* ردیف اول: نام دانشگاه و نام انگلیسی */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field>
                <FieldLabel htmlFor="university-name">نام دانشگاه</FieldLabel>
                <Input
                  {...register("name", { required: true })}
                  id="university-name"
                  placeholder="مثال: دانشگاه تهران"
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="university-name-en">نام انگلیسی</FieldLabel>
                <Input
                  {...register("name_english", { required: true })}
                  id="university-name-en"
                  dir="ltr"
                  placeholder="Example: University of Tehran"
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
                  placeholder="توضیحات کامل درباره دانشگاه"
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

            {/* شهر و نوع دانشگاه */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <Field>
                <FieldLabel htmlFor="small-form-framework">شهر را انتخاب کنید</FieldLabel>
                <Combobox
                  onValueChange={(value: string | null) => setValue("city", value ?? "")}
                  items={cityOption}
                >
                  <ComboboxInput
                    {...register("city", { required: true })}
                    id="small-form-framework"
                    placeholder="انتخاب شهر"
                    required
                  />
                  <ComboboxContent>
                    <ComboboxEmpty>شهری یافت نشد</ComboboxEmpty>
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

              <Field>
                <FieldLabel htmlFor="small-form-university">نوع دانشگاه را انتخاب کنید</FieldLabel>
                <Combobox
                  items={universityOption}
                  onValueChange={(value: string | null) => setValue("category", value ?? "")}
                >
                  <ComboboxInput
                    id="small-form-university"
                    placeholder="انتخاب نوع دانشگاه"
                    required
                  />
                  <ComboboxContent>
                    <ComboboxEmpty>نوعی یافت نشد</ComboboxEmpty>
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

            {/* ========== ویژگی‌های اصلی دانشگاه ========== */}
            <div className="mt-6 pt-4 border-t border-dashed border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold flex items-center gap-2">
                    <Award className="size-5" />
                    ویژگی های دانشگاه
                  </h3>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="gap-1"
                    onClick={() => {
                      if (!tempFeature.title || !tempFeature.value) {
                        sileo.warning({ title: 'لطفاً عنوان و مقدار ویژگی را وارد کنید' })
                        return
                      }
                      append(tempFeature)
                      setTempFeature({ title: "", value: "" })
                    }}
                  >
                    <Plus className="size-4" />
                   
                  </Button>
                </div>
              

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* تعداد دانشکده‌ها */}
                <Field>
                  <FieldLabel htmlFor="number-of-faculties">
                    <span className="flex items-center gap-1">
                      <Building2 className="size-4" />
                      تعداد دانشکده‌ها
                    </span>
                  </FieldLabel>
                  <Input
                    {...register("numberOfFaculties", {
                      required: true,
                      valueAsNumber: true,
                      min: 1
                    })}
                    id="number-of-faculties"
                    type="number"
                    placeholder="مثال: ۱۲"
                  />
                </Field>

                {/* تعداد دانشجویان */}
                <Field>
                  <FieldLabel htmlFor="number-of-students">
                    <span className="flex items-center gap-1">
                      <Users className="size-4" />
                      تعداد دانشجویان
                    </span>
                  </FieldLabel>
                  <Input
                    {...register("numberOfStudents", {
                      required: true,
                      valueAsNumber: true,
                      min: 0
                    })}
                    id="number-of-students"
                    type="number"
                    placeholder="مثال: ۱۵۰۰۰"
                  />
                </Field>

                {/* سال تأسیس */}
                <Field>
                  <FieldLabel htmlFor="establishment-year">
                    <span className="flex items-center gap-1">
                      <Calendar className="size-4" />
                      سال تأسیس
                    </span>
                  </FieldLabel>
                  <Input
                    {...register("establishmentYear", {
                      required: true,
                      valueAsNumber: true
                    })}
                    id="establishment-year"
                    type="number"
                    placeholder="مثال: ۱۳۵۳"
                  />
                </Field>

                {/* رتبه دانشگاه */}
                <Field>
                  <FieldLabel htmlFor="national-rank">
                    <span className="flex items-center gap-1">
                      <Trophy className="size-4" />
                      رتبه دانشگاه در کشور
                    </span>
                  </FieldLabel>
                  <Input
                    {...register("nationalRank", {
                      required: true,
                      valueAsNumber: true,
                      min: 1
                    })}
                    id="national-rank"
                    type="number"
                    placeholder="مثال: ۵"
                  />
                </Field>
              </div>
            </div>









            {/* ========== ویژگی‌های اضافی با دکمه پلاس ========== */}



            {/* آدرس عکس */}
            <div className="mt-4">
              <Field>
                <FieldLabel htmlFor="image-url">آدرس عکس</FieldLabel>
                <Input
                  {...register("image_url", { required: true })}
                  id="image-url"
                  dir="ltr"
                  placeholder="https://example.com/university-logo.jpg"
                />
              </Field>
            </div>

            {/* نمایش پیش‌نمایش */}
            {(watch("numberOfFaculties") > 0 || watch("numberOfStudents") > 0 || watch("establishmentYear") > 0 || watch("nationalRank") > 0 || fields.length > 0) && (
              <div className="mt-4 p-3 bg-muted/30 rounded-lg border border-dashed">
                <p className="text-sm font-medium mb-2">پیش‌نمایش:</p>
                <div className="flex flex-wrap gap-3 text-sm">
                  {watch("numberOfFaculties") > 0 && (
                    <Badge variant="outline" className="gap-1">
                      <Building2 className="size-3" />
                      {watch("numberOfFaculties")} دانشکده
                    </Badge>
                  )}
                  {watch("numberOfStudents") > 0 && (
                    <Badge variant="outline" className="gap-1">
                      <Users className="size-3" />
                      {watch("numberOfStudents").toLocaleString()} دانشجو
                    </Badge>
                  )}
                  {watch("establishmentYear") > 0 && (
                    <Badge variant="outline" className="gap-1">
                      <Calendar className="size-3" />
                      تأسیس {watch("establishmentYear")}
                    </Badge>
                  )}
                  {watch("nationalRank") > 0 && (
                    <Badge variant="outline" className="gap-1">
                      <Trophy className="size-3" />
                      رتبه {watch("nationalRank")} کشوری
                    </Badge>
                  )}
                  {fields.map((item, index) => (
                    <Badge key={index} variant="secondary" className="gap-1">
                      <Award className="size-3" />
                      {item.title}: {item.value}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

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
                  'ویرایش دانشگاه'
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