"use client"

import { DataTable } from "@/components/data-table"
import { Table } from "@/components/osbn/table"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"

export type tableData = {
    "وضعیت": "موفق" | "در حال پردازش" | "ناموفق"
    name: string
    id: number
}
export const columns: ColumnDef<tableData>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={table.getIsAllPageRowsSelected()}
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
    },
    {
        accessorKey: "وضعیت",
        header: "وضعیت",
    },
    {
        accessorKey: "name",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                نام درس
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
    },
    {
        id: "actions",
        cell: () => (
            <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
            </Button>
        ),
    },
]


const data: tableData[] = [
    {
        "وضعیت": "ناموفق",
        name: "پایگاه گوز",
        id: 2
    },
    {
        "وضعیت": "ناموفق",
        name: "پایگاه یمیقان",
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
    {
        "وضعیت": "ناموفق",
        name: "پایگاه گوز",
        id: 2
    },
    {
        "وضعیت": "ناموفق",
        name: "پایگاه یمیقان",
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

interface Rows {
    rowTitle: string[]
    cellData: string[][]
}


const table_data: Rows = {
    cellData: [
        [
            'محمدرضا',
            'یمقانی'
        ],
        ['رضا ',
            'گلزار'
        ],
        [
            'محمد رضا ',
            'شجریان'
        ],
        [
            'محمد رضا ',
            'شجریان'
        ],
        [
            'محمد رضا ',
            'شجریان'
        ],
        [
            'محمد رضا ',
            'شجریان'
        ],
        [
            'محمد رضا ',
            'شجریان'
        ],
        [
            'محمد رضا ',
            'شجریان'
        ],
        [
            'محمد رضا ',
            'شجریان'
        ],
        [
            'حمید ',
            'هیراد'
        ],
        [
            'علی ',
            'مددی'
        ]
    ],
    rowTitle: [
        'نام استاد',
        'فامیلی استاد'
    ]
}

const page = () => {

    return (
        <>

            <div className="w-10/12 mx-auto">

                <DataTable data={data} columns={columns} />
            </div>


            <Table data={table_data} haveMoreData={true} loadMorefn={() => alert("s")} title={"ali"} />
        </>
    )
}

export default page