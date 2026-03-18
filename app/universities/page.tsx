"use client"

import { DataTable } from "@/components/data-table"
import { columns, Payment } from "./columns"
import LessonInfo from "./universitiesInfo"
import UniversitiesInfo from "./universitiesInfo"
const data: Payment[] = [
  {
    status: "success",
    universitiesName: "شریف"
  },
  {
    status: "success",
    universitiesName: "شریف"
  },
  {
    status: "processing",
    universitiesName: "شریف"
  },
  {
    status: "success",
    universitiesName: "شریف"
  },
  {
    status: "failed",
    universitiesName: "شریف"
  },
]

export default function Page() {
  return (
    <div className=" mx-auto py-10">
      
      <UniversitiesInfo/>

      <div className="mx-auto max-w-screen-xl pt-16 grid grid-cols-2 gap-8">
        <DataTable columns={columns} data={data} />
        <DataTable columns={columns} data={data} />
      </div>

    </div>
  )
}