import * as React from "react"

import {
  Example,
  ExampleWrapper,
} from "@/components/example"
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
import { useForm } from "react-hook-form"
import { Back } from "@hugeicons/core-free-icons"
import { useRouter } from "next/navigation"



export function UniversityComponent() {
  return (
    <ExampleWrapper>
      <FormExample />
    </ExampleWrapper>
  )
}
const cityOption = [
  "تهران",
  "رشت",
  "اصفحان",
  "شیراز",
  "مشهد",
] as const
const universityOption = [
  "دانشگاه دولتی",
  "دانشگاه آزاد",
  "آزاد", "غیر انتفاعی", "پیام نور"
] as const


type FormValues = {
  name: string
  name_english: string
  description: string
  description_english: string
  city: string
  category: string
  image_url: string
}



export default function FormExample() {
  const [isLoading, setIsLoading] = React.useState(false)
  const router = useRouter()
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<FormValues>({
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
  const onSubmit = async (data: FormValues) => {
    setIsLoading(true)
    if (!data.city || data.city.length < 1) {
      sileo.error({ title: 'شهر را انتخاب کنید' })
      return
    }

    if (!data.category || data.category.length < 1) {
      sileo.error({ title: 'دسته بندی را انتخاب کنید' })
      return
    }
    // if (!id) {
    //   setIsLoading(false)
    //   sileo.error({ title: 'شناسه ادیت نامعتبر است' })
    //   return
    // }
    // the condition use for when we have id 


    try {
      console.log("Form submitted:", data)

      // const response = await api.patch(`/manipulation/university/${id}`, data)
      // Use api.patch for edits. The value below this comment is used for additions.

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

    <Example className="container w-full  mx-auto ">
      <Card className="flex  flex-col p-4 w-full">
        <CardTitle className="text-xl font-semibold mb-2">ادیت دانشگاه</CardTitle>
        <CardDescription className="mb-4 text-sm text-gray-600">
          لطفاً بخش های مورد نظر را ادیت نمایید
        </CardDescription>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <FieldGroup>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field>
                <FieldLabel htmlFor="en-form-title">نام درس</FieldLabel>
                <Input
                  {...register("name", { required: true })}
                  id="en-form-title"
                  placeholder="Enter your name"

                />
              </Field>

              <Field>
                <FieldLabel htmlFor="en-form-title-en">نام انگلیسی</FieldLabel>
                <Input
                  {...register("name_english", { required: true })}
                  id="en-form-title-en"
                  placeholder="Enter your name"
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
                <FieldLabel htmlFor="small-form-framework">شهر را انتخاب کنید</FieldLabel>
                <Combobox onValueChange={(value: string | null) => setValue("city", value ?? "")}
                  items={cityOption}>
                  <ComboboxInput
                    {...register("city", { required: true })}
                    id="small-form-framework"
                    placeholder="Select your city"
                    required
                  />
                  <ComboboxContent>
                    <ComboboxEmpty>No frameworks found.</ComboboxEmpty>
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

            <div className="mt-4">
              <Field>
                <FieldLabel htmlFor="small-form-university">نوع دانشگاه را انتخاب کنید</FieldLabel>
                <Combobox
                  items={universityOption}
                  onValueChange={(value: string | null) => setValue("category", value ?? "")}>
                  <ComboboxInput
                    id="small-form-university"
                    placeholder="Select a university type"
                    required
                  />
                  <ComboboxContent>
                    <ComboboxEmpty>No university types found.</ComboboxEmpty>
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
    </Example>

  );
}
