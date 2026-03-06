"use client"

import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import usehardness from "@/hooks/use-hardness"
import { sileo } from "sileo"
import { api } from "@/app/api/base"

type FormValues = {
    name: string
    name_english: string
    description: string
    description_english: string
    difficulty: number
    term: string
}

export default function Page() {
    const c = usehardness()

    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<FormValues>({
        defaultValues: {
            name: "",
            name_english: "",
            description: "",
            description_english: "",
            difficulty: 0,
            term: "",
        },
    })

    const onSubmit = (data: FormValues) => {

        data.difficulty = Number(data.difficulty)


        if (data.difficulty < 1) {
            sileo.error({ title: 'سطح سختی را انتخاب کنید' })
        } else if (data.term?.length < 1) {
            sileo.error({ title: 'شماره ترم را وارد کنید' })
        } else {
            console.log("Form submitted:", data)

            api.post("/manipulation/lesson", data).then(s => {
                console.log(s.data)
                sileo.success({
                    title: 'درس با موفقیت ثبت شد!'
                })
            })
        }
    }

    const hardnessValue = watch("difficulty")

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-8/12 place-self-center pt-20 space-y-6">
            <h2 className="text-3xl font-extrabold text-center">ثبت درس جدید</h2>

            {/* نام درس */}
            <Input placeholder="نام درس" {...register("name", { required: true })} />
            {errors.name && <p className="text-red-500 text-sm">نام درس الزامی است</p>}

            {/* نام انگلیسی */}
            <Input placeholder="نام انگلیسی" {...register("name_english", { required: true })} />
            {errors.name_english && <p className="text-red-500 text-sm">نام انگلیسی الزامی است</p>}

            {/* توضیحات */}
            <Textarea placeholder="توضیحات" {...register("description", { required: true })} />
            {errors.description && <p className="text-red-500 text-sm">توضیحات الزامی است</p>}

            {/* توضیحات انگلیسی */}
            <Textarea placeholder="توضیحات انگلیسی" {...register("description_english", { required: true })} />
            {errors.description_english && <p className="text-red-500 text-sm">توضیحات انگلیسی الزامی است</p>}

            {/* سختی */}
            <Select onValueChange={(val) => setValue("difficulty", val as number)} value={hardnessValue}>
                <SelectTrigger>
                    <SelectValue placeholder="انتخاب سختی" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {[1, 2, 3, 4, 5].map((i) => (
                            <SelectItem key={i} value={i.toString()}>
                                {c(i)}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
            {errors.difficulty && <p className="text-red-500 text-sm">سختی درس را انتخاب کنید</p>}

            {/* ترم */}
            <Input
                type="number"
                placeholder="ترم (۱ تا ۱۰)"
                min={1}
                max={10}
                {...register("term", { required: true })}
            />
            {errors.term && <p className="text-red-500 text-sm">شماره ترم الزامی است</p>}

            <Button type="submit" className="w-full">ثبت درس</Button>
        </form>
    )
}