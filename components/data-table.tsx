"use client"

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { Filter } from "lucide-react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  onRowAction?: (row: TData) => void; // callback دکمه هر سطر
}

export function DataTable<TData, TValue>({
  columns,
  data,
  onRowAction,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<
    Array<{ id: string; value: unknown }>
  >([]);

  const table = useReactTable({
    data: data ?? [],
    columns: [
      // ستون اکشن اضافه می‌کنیم
      ...columns,
      {
        id: "actions",
        header: "عملیات",
        cell: ({ row }) => (
          <Button
            size="sm"
            onClick={() => onRowAction?.(row.original)}
          >
            ورود
          </Button>
        ),
      },
    ],
    state: {
      sorting,
      columnFilters,
    },



    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,

    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),

    getPaginationRowModel: getPaginationRowModel(),

    initialState: {
      pagination: { pageIndex: 0, pageSize: 2 },
    },
  });

  return (
    <div className="mx-auto w-full rounded-md border">
      <div className="flex items-center justify-between p-3 gap-3">
        <Input
          className="w-10/12"
          placeholder="نمایش بر اساس نام . . ."
          value={
            (table.getColumn("name")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
        />

        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter />
          </Button>
        </div>
      </div>

      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header, i) => (
                <TableHead key={i}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell, i) => (
                  <TableCell key={i}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}

                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length + 1}>
                داده ای یافت نشد
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Pagination UI درست */}
      <div className="flex items-center justify-between px-2 py-4">
        <div className="text-sm text-muted-foreground">
          صفحه{" "}
          <strong>{table.getState().pagination.pageIndex + 1}</strong>{" "}
          از{" "}
          <strong>{table.getPageCount()}</strong>
          {" — "}
          {table.getFilteredRowModel().rows.length} ردیف بعد از فیلتر
        </div>

        <div className="flex items-center gap-2">
          {/* <Button
            variant="outline"
            size="sm"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            اول
          </Button> */}

          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            قبلی
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            بعدی
          </Button>

          {/* <Button
            variant="outline"
            size="sm"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            آخر
          </Button> */}
        </div>
      </div>
    </div>
  );
}
