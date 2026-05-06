"use client"

import { DataTable } from "@/components/data-table"
import { columns, tableData } from "./columns"
import MajorsInfo from "./majorsInfo"

const data: tableData[] = [
  {
    "وضعیت": "ناموفق",
    name: "پایگاه داده",
    id: 4
  },
  {
    "وضعیت": "ناموفق",
    name: "پایگاه داده",
    id: 3
  },
  {
    "وضعیت": "ناموفق",
    name: "پایگاه داده",
    id: 2
  },
  {
    "وضعیت": "ناموفق",
    name: "پایگاه داده",
    id: 1
  },
  {
    "وضعیت": "ناموفق",
    name: "پایگاه داده",
    id: 3
  },
]

export default function Page() {
  return (
    <div className=" mx-auto py-10">

      <MajorsInfo />

      <div className="mx-auto max-w-screen-xl pt-24 grid grid-cols-2 gap-8">
        <DataTable columns={columns} data={data} />
        <DataTable columns={columns} data={data} />
      </div>

    </div>
  )
}