"use client"

import { DataTable } from "@/components/data-table"
import { columns, Payment } from "./columns"
import MajorsInfo from "./majorsInfo"

const data: Payment[] = [
  {
    id: 1,
    majorsName: "کامپیوتر"
  },
  {
    id: 2,
    majorsName: "کامپیوتر"
  },
  {
    id: 3,
    majorsName: "کامپیوتر"
  },
  {
    id: 4,
    majorsName: "کامپیوتر"
  },
  {
    id: 5,
    majorsName: "کامپیوتر"
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