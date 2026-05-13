"use client"

import {
    Table as TableSh,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Input } from "../ui/input"
import { Button } from "../ui/button"


export interface ITableData {
    data: {
        rowTitle: string[]
        cellData: string[][]
    }
    title: string
    loadMorefn: () => void
    haveMoreData: boolean
}





export const Table = (data: ITableData) => {

    return (

        <div className="mx-auto w-10/12 mt-10">
            <div className="border-dashed border border-foreground/10 w-full absolute left-0 -z-10"></div>

            <div className="border-r border-l border-dashed  border-foreground/10 px-1 relative ">



                <div className="absolute -top-3 -right-[.53rem]">
                    <Disjonction />
                </div>


                <div className="absolute -bottom-3 -left-[.52rem]">
                    <Disjonction />
                </div>




                <div className=" size-full w-full px-1 mx-auto">

                    <h2 className="text-2xl mt-6 mr-10 font-black">
                        {data.title}
                    </h2>


                    <Input className="my-4" />
                </div>


                <div
                    className="max-h-[40dvh] w-full overflow-y-scroll">


                    <Core data={data} />
                </div>

                {data.haveMoreData &&

                    <Button variant={"outline"} className="mr-10 mt-6 mb-4" onClick={() => data.loadMorefn()}>
                        نمایش بیشتر
                    </Button>
                }



            </div>

            <div className="border-dashed border border-foreground/10 w-full absolute left-0 -z-10"></div>

        </div>

    )
}









const Disjonction = () => {
    return (
        // <div className="relative text-foreground/30 font-medium text-2xl">
        //     +
        // </div>


        <div className="relative flex justify-center items-center size-4">
            <div className="w-4 h-[.1rem] bg-foreground/20 absolute"></div>
            <div className="w-[.1rem] h-4 bg-foreground/20 absolute"></div>
        </div>
    )
}





const Core = ({ data }: { data: Pick<ITableData, 'data'> }) => {


    return (
        <TableSh dir="rtl">
            <TableHeader>
                <TableRow>

                    {data.data.rowTitle.map((v, i) => {
                        return (

                            <TableHead key={i} className="font-black">
                                {v}
                            </TableHead>

                        )
                    })}
                </TableRow>

            </TableHeader>
            <TableBody>

                {data.data.cellData.map((v, i) => {
                    return (

                        <TableRow key={i}>

                            {v.map((v1, i1) => {
                                return (

                                    <TableCell key={i1} className="text-xs md:">{v1}</TableCell>

                                )
                            })}
                        </TableRow>


                    )
                })}



            </TableBody>
        </TableSh>
    )
}