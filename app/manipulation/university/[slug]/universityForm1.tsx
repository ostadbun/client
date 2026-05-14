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
import { Building2, Users, Calendar, Trophy, Award, Plus, X, Globe, Phone, Mail, MapPin } from "lucide-react"
import { CardArea, CardAreaWrapper } from "@/components/CardArea"

export function UniversityComponent1() {
  return (
    <CardAreaWrapper>
      <FormExample />
    </CardAreaWrapper>
  )
}

const cityOption = [
  "tehran",
  "rasht",
  "qom",
  "shiraz",
  "mashhad",
  "isfahan",
  "tabriz",
  "karaj"
] as const

const universityOption = [
  "دانشگاه دولتی",
  "دانشگاه آزاد",
  "آزاد",
  "غیر انتفاعی",
  "پیام نور",
  "علمی کاربردی"
] as const

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
  // ویژگی‌های اصلی دانشگاه
  numberOfFaculties: number
  numberOfStudents: number
  establishmentYear: number
  nationalRank: number
  // ویژگی‌های اضافی
  extraFeatures: ExtraFeature[]
  // اطلاعات تماس
  website: string
  phone: string
  email: string
  address: string
}

// دیتای پیش‌فرض با مقادیر اولیه برای ویرایش
const defaultUniversityData: FormValues = {
  name: "دانشگاه صنعتی شریف",
  name_english: "Sharif University of Technology",
  description: "مرکز ممتاز آموزش مهندسی و علوم پایه در ایران با بیش از ۵۰ سال سابقه درخشان",
  description_english: "A premier center for engineering and basic sciences education in Iran",
  city: "tehran",
  category: "دانشگاه دولتی",
  image_url: "https://picsum.photos/seed/sharif/300/200",
  numberOfFaculties: 15,
  numberOfStudents: 12500,
  establishmentYear: 1345,
  nationalRank: 2,
  extraFeatures: [
    { title: "تعداد کتابخانه‌ها", value: "۵ کتابخانه مرکزی" },
    { title: "تعداد آزمایشگاه‌ها", value: "۲۳ آزمایشگاه تخصصی" },
    { title: "زمین ورزشی", value: "۳ زمین فوتبال، ۲ سالن سرپوشیده" }
  ],
  website: "https://sharif.edu",
  phone: "۰۲۱-۶۶۰۰۵۱۲۳",
  email: "info@sharif.edu",
  address: "تهران، خیابان آزادی، دانشگاه صنعتی شریف"
}

export default function FormExample() {
  const [isLoading, setIsLoading] = React.useState(false)
  const router = useRouter()

  const { register, handleSubmit, watch, setValue, control, formState: { errors } } = useForm<FormValues>({
    defaultValues: defaultUniversityData,
  })

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
        <CardTitle className="text-xl font-semibold mb-2">ویرایش دانشگاه</CardTitle>
        <CardDescription className="mb-4 text-sm text-gray-600">
          لطفاً بخش های مورد نظر را ویرایش نمایید
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
                  placeholder="نام دانشگاه"
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="university-name-en">نام انگلیسی</FieldLabel>
                <Input
                  {...register("name_english", { required: true })}
                  id="university-name-en"
                  dir="ltr"
                  placeholder="University name in English"
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
                  placeholder="توضیحات دانشگاه"
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
                    value={watch('city')}
                    {...register("city", { required: true })}
                    id="small-form-framework"
                    placeholder="Select your city"
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
                    value={watch('category')}
                    id="small-form-university"
                    placeholder="Select a university type"
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
                  ویژگی‌های اضافی
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
                    placeholder="مثال: ۱۳۴۵"
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
                    placeholder="مثال: ۲"
                  />
                </Field>
              </div>
            </div>

            {/* ========== اطلاعات تماس ========== */}
            {/* <div className="mt-6 pt-4 border-t border-dashed border-gray-200">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Globe className="size-5" />
                اطلاعات تماس
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field>
                  <FieldLabel htmlFor="website">
                    <span className="flex items-center gap-1">
                      <Globe className="size-4" />
                      وبسایت
                    </span>
                  </FieldLabel>
                  <Input
                    {...register("website")}
                    id="website"
                    dir="ltr"
                    placeholder="https://example.com"
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="phone">
                    <span className="flex items-center gap-1">
                      <Phone className="size-4" />
                      تلفن
                    </span>
                  </FieldLabel>
                  <Input
                    {...register("phone")}
                    id="phone"
                    placeholder="۰۲۱-۱۲۳۴۵۶۷۸"
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="email">
                    <span className="flex items-center gap-1">
                      <Mail className="size-4" />
                      ایمیل
                    </span>
                  </FieldLabel>
                  <Input
                    {...register("email")}
                    id="email"
                    dir="ltr"
                    placeholder="info@university.ac.ir"
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="address">
                    <span className="flex items-center gap-1">
                      <MapPin className="size-4" />
                      آدرس
                    </span>
                  </FieldLabel>
                  <Input
                    {...register("address")}
                    id="address"
                    placeholder="آدرس کامل دانشگاه"
                  />
                </Field>
              </div>
            </div> */}

            {/* ========== ویژگی‌های اضافی با دکمه پلاس ========== */}
            {/* <div className="mt-6 pt-4 border-t border-dashed border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <Award className="size-5" />
                  ویژگی‌های اضافی
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
                  افزودن ویژگی
                </Button>
              </div>

              {/* لیست ویژگی‌های اضافه شده */}
            {/* <div className="flex gap-3 flex-wrap mb-4">
                {fields.map((item, index) => (
                  <Badge key={item.id} className="flex items-center gap-2 cursor-pointer" onClick={() => remove(index)}>
                    <Award className="size-3" />
                    {item.title}: {item.value}
                    <X className="cursor-pointer w-3 h-3" />
                  </Badge>
                ))}
                {fields.length === 0 && (
                  <p className="text-sm text-muted-foreground">هیچ ویژگی اضافی ثبت نشده است</p>
                )}
              </div>

              {/* فرم افزودن ویژگی جدید */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="عنوان ویژگی (مثال: تعداد کتابخانه‌ها)"
                  value={tempFeature.title}
                  onChange={(e) =>
                    setTempFeature((prev) => ({
                      ...prev,
                      title: e.target.value,
                    }))
                  }
                />
                <Input
                  placeholder="مقدار (مثال: ۵)"
                  value={tempFeature.value}
                  onChange={(e) =>
                    setTempFeature((prev) => ({
                      ...prev,
                      value: e.target.value,
                    }))
                  }
                />
              </div>
            </div> */}

            {/* آدرس عکس */}
            <div className="mt-4">
              <Field>
                <FieldLabel htmlFor="image-url">آدرس عکس</FieldLabel>
                <Input
                  {...register("image_url", { required: true })}
                  id="image-url"
                  dir="ltr"
                  placeholder="https://example.com/image.jpg"
                />
              </Field>
            </div>

            {/* نمایش پیش‌نمایش کامل */}
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