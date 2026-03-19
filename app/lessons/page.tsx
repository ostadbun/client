"use client"

import { DataTable } from "@/components/data-table"
import { columns, Payment } from "./columns"
import LessonInfo from "./lessonInfo"
const data: Payment[] = [
  {
    status: "success",
    name: "پایگاه داده",
    amount:4
  },
  {
    status: "success",
    name: "پایگاه داده",
    amount:2
  },
  {
    status: "processing",
    name: "پایگاه داده",
    amount:2
  },
  {
    status: "success",
    name: "پایگاه داده",
    amount:2
  },
  {
    status: "failed",
    name: "پایگاه داده",
    amount:2
  },
]

export default function Page() {
  return (
    <div className=" mx-auto py-10">
      
      <LessonInfo level={3} semesterInfo={6} />

      <div className="mx-auto max-w-screen-xl pt-24 grid grid-cols-2 gap-8">
        <DataTable columns={columns} data={data} />
        <DataTable columns={columns} data={data} />
      </div>

    </div>
  )
}