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
import { api } from "@/app/api/base"
import { useForm } from "react-hook-form"


    // const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<FormValues>({
    //     defaultValues: {
    //         name: "",
    //         name_english: "",
    //         description: "",
    //         description_english: "",
    //         city: "",
    //         category: "",
    //         image_url: "",
    //     },
    // })
export function UniversityComponent() {
  return (
    <ExampleWrapper>
      <FormExample/>
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
        }}

export default function FormExample() {
  const [notifications, setNotifications] = React.useState({
    email: true,
    sms: false,
    push: true,
  });
  return (
    <Example className="w-full md:min-w-5xl max-w-5xl mx-auto p-4">
      <Card className="flex flex-col p-4 w-full min-w-0">
        <CardTitle className="text-xl font-semibold mb-2">ثبت دانشگاه جدید</CardTitle>
        <CardDescription className="mb-4 text-sm text-gray-600">
          لطفاً این بخش را تکمیل بفرمایید
        </CardDescription>
        <form className="w-full">
          <FieldGroup>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field>
                <FieldLabel htmlFor="en-form-title">نام درس</FieldLabel>
                <Input
                  id="en-form-title"
                  placeholder="Enter your name"
                  required
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="en-form-title-en">نام انگلیسی</FieldLabel>
                <Input
                  id="en-form-title-en"
                  placeholder="Enter your name"
                  required
                />
              </Field>
            </div>

            <div className="mt-4">
              <Field>
                <FieldLabel htmlFor="description">توضیحات</FieldLabel>
                <Textarea
                  id="description"
                  placeholder="Add any additional comments"
                />
              </Field>
            </div>

            <div className="mt-4">
              <Field>
                <FieldLabel htmlFor="english-description">توضیحات به انگلیسی</FieldLabel>
                <Textarea
                  id="english-description"
                  placeholder="Add any additional comments"
                />
              </Field>
            </div>

            <div className="mt-4">
              <Field>
                <FieldLabel htmlFor="small-form-framework">شهر را انتخاب کنید</FieldLabel>
                <Combobox items={cityOption}>
                  <ComboboxInput
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
                <Combobox items={universityOption}>
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
                  id="image-url"
                  placeholder="Enter your url"
                  required
                />
              </Field>
            </div>

            <div className="mt-6 flex justify-end gap-4">
              <Button type="submit">ذخیره</Button>
              <Button variant="outline" type="button">
                انصراف
              </Button>
            </div>
          </FieldGroup>
        </form>
      </Card>
    </Example>
  );
}
