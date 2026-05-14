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
import { Plus, RefreshCcw, X } from "lucide-react"
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
}


interface IButton {
    isLoading: boolean
    isNotActive: boolean
}



export default function Professor() {
    const { register, control, handleSubmit } = useForm<FormValues>({})
    const [ButtonState, setButtonState] = useState<IButton>({ isNotActive: false, isLoading: false })









    const router = useRouter()






    const onSubmit = async (data: FormValues) => {
        setButtonState((prev) => { return { ...prev, isLoading: true } })






        try {



            await new Promise(resolve => setTimeout(resolve, 1000))

            toast.success('با موفقیت ارسال شد!')


            console.log(data)
            // router.replace('./console')


        } catch (error) {
            console.log(error);
            toast.error('ERROR')


        } finally {
            setButtonState((prev) => { return { ...prev, isLoading: false } })
        }
    }





    return (

        <CardAreaWrapper >
            <CardArea >
                <Card className="flex flex-col p-4 w-full">
                    <CardTitle className="text-xl font-semibold mb-2">درخواست افزودن رشته</CardTitle>
                    <CardDescription className="mb-4 text-sm text-gray-600">
                        لطفاً بخش های مورد نظر را وارد نمایید
                    </CardDescription>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                        <FieldGroup>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Field>
                                    <FieldLabel htmlFor="en-form-title">نام رشته</FieldLabel>
                                    <Input
                                        {...register("name", { required: true })}
                                        id="en-form-title"
                                        placeholder="مهندسی کامپیوتر"

                                    />
                                </Field>

                                <Field>
                                    <FieldLabel htmlFor="en-form-title-en">نام انگلیسی</FieldLabel>
                                    <Input
                                        {...register("name_english", { required: true })}
                                        id="en-form-title-en"
                                        dir={'ltr'}
                                        placeholder="computer engineering"
                                    />
                                </Field>
                            </div>

                            <div className="mt-4">
                                <Field>
                                    <FieldLabel htmlFor="description">توضیحات</FieldLabel>
                                    <Textarea
                                        {...register("description", { required: true })}
                                        id="description"

                                        placeholder="رشته پر طرفدار"
                                    />
                                </Field>
                            </div>

                            <div className="mt-4">
                                <Field>
                                    <FieldLabel htmlFor="english-description">توضیحات به انگلیسی</FieldLabel>
                                    <Textarea
                                        {...register("description_english", { required: true })}
                                        id="english-description"
                                        dir={'ltr'}
                                        placeholder="popular major  "
                                    />
                                </Field>
                            </div>

                            <div className="mt-2 flex justify-end gap-4">
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

    );
}