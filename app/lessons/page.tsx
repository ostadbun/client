"use client"

import { DataTable } from "@/components/data-table"
import { columns, tableData } from "./columns"
import LessonInfo from "./lessonInfo"
const data: tableData[] = [
  {
    "وضعیت": "ناموفق",
    name: "پایگاه داده",
    id: 2
  },
  {
    "وضعیت": "ناموفق",
    name: "پایگاه داده",
    id: 3
  },
  {
    "وضعیت": "ناموفق",
    name: "پایگاه داده",
    id: 4
  },
  {
    "وضعیت": "ناموفق",
    name: "پایگاه داده",
    id: 5
  },
  {
    "وضعیت": "ناموفق",
    name: "پایگاه داده",
    id: 6
  },
]

export default function Page() {
  return (
    <div className=" mx-auto py-10">

      <LessonInfo level={3} semesterInfo={6} />

      <div className="mx-auto max-w-screen-xl pt-24 grid grid-cols-2 gap-8">
        {/* <DataTable columns={columns} data={data} />
        <DataTable columns={columns} data={data} /> */}
      </div>

    </div>
  )
}