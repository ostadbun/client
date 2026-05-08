"use client"

import { DataTable } from "@/components/data-table"
import { columns, tableData } from "./columns"
import ProfessorsInfo from "./professorsInfo"

const data: tableData[] = [
  {
    "وضعیت": "ناموفق",
    name: "پایگاه داده",
  },
  {
    "وضعیت": "ناموفق",
    name: "پایگاه داده",
  },
  {
    "وضعیت": "ناموفق",
    name: "پایگاه داده",
  },
  {
    "وضعیت": "ناموفق",
    name: "پایگاه داده",
  },
  {
    "وضعیت": "ناموفق",
    name: "پایگاه داده",
  },
]

export default function Page() {
  return (
    <div className=" mx-auto py-10">

      <ProfessorsInfo
        imageSrc="https://blog.faradars.org/wp-content/uploads/2024/12/siavash-shahshahani.jpg"
        teachingYears={4}
        address="lahijan"
        major="computer"
        degree="12"
        university="sharif"
      />

      <div className="mx-auto max-w-screen-xl px-6 grid grid-cols-2 gap-8">

      </div>

    </div>
  )
}