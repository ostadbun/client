"use client"

import { DataTable } from "@/components/data-table"
import { columns, Payment } from "./columns"
import ProfessorsInfo from "./professorsInfo"

const data: Payment[] = [
  {
    status: "success",
    name: "استاد شهشهانی"
  },
  {
    status: "success",
    name: "استاد شهشهانی"
  },
  {
    status: "processing",
    name: "استاد شهشهانی"
  },
  {
    status: "success",
    name: "استاد شهشهانی"
  },
  {
    status: "failed",
    name: "استاد شهشهانی"
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
        <DataTable columns={columns} data={data} />
        <DataTable columns={columns} data={data} />
      </div>

    </div>
  )
}