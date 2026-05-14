import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface Rows {
  rowTitle: string[]
  cellData: string[][]
}

export const TUniversity = ({ data }: { data: Rows }) => {



  return (
    <>
      
      <Table dir="rtl">
        <TableHeader>
          <TableRow>

            {data.rowTitle.map((v, i) => {
              return (

                <TableHead key={i}>
                  {v}
                </TableHead>

              )
            })}
          </TableRow>

        </TableHeader>
        <TableBody>

          {data.cellData.map((v, i) => {
            return (

              <TableRow key={i}>

                {v.map((v1, i1) => {
                  return (

                    <TableCell key={i1}>{v1}</TableCell>

                  )
                })}
              </TableRow>


            )
          })}



        </TableBody>
      </Table>
    </>
  )
}