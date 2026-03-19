"use client"

import { DataTable } from "@/components/data-table"
import { columns, Payment } from "./columns"
import MajorsInfo from "./majorsInfo"

const data: Payment[] = [
  {
    id: 1,
    name: "کامپیوتر"
  },
  {
    id: 2,
    name: "ببببب"
  },
  {
    id: 3,
    name: "کامپیوتر"
  },
  {
    id: 4,
    name: "کامپیوتر"
  },
  {
    id: 5,
    name: "کامپیوتر"
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