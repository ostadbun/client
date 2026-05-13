"use client"

import { ITableData, Table } from "@/components/osbn/table"


const page = () => {

    const fnldmr = () => {
        alert("more")
    }
    const table_data: Pick<ITableData, 'data'> = {


        data: {
            cellData: [

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
                'فامیلی استاد',
            ]
        }

    }
    return (
        <div>
            <Table data={table_data.data} loadMorefn={fnldmr} haveMoreData={false} />
        </div>
    )
}

export default page