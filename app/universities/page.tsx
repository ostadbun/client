"use client"

import { DataTable } from "@/components/data-table"
import { columns, tableData } from "./columns"
import LessonInfo from "./universitiesInfo"
import UniversitiesInfo from "./universitiesInfo"
const data: tableData[] = [
  {
    "وضعیت": "موفق",
    name: "شریف"
  },
  {
    "وضعیت": "موفق",
    name: "شریف"
  },
  {
    "وضعیت": "موفق",
    name: "شریف"
  },
  {
    "وضعیت": "موفق",
    name: "شریف"
  },
  {
    "وضعیت": "موفق",
    name: "شریف"
  },
]

export default function Page() {
  return (
    <div className=" mx-auto py-10">

      <UniversitiesInfo />

      <div className="mx-auto max-w-screen-xl pt-16 grid grid-cols-2 gap-8">
        <DataTable columns={columns} data={data} />
        <DataTable columns={columns} data={data} />
      </div>

    </div>
  )
}