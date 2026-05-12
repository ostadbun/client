"use client"

import { Button } from "@/components/ui/button";
import { Pen } from "lucide-react";
import { ReactNode } from "react";

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <>
            <div className="min-h-[calc(100vh-60px)] ">
                {children}
            </div>


            <div className="text-xs h-14 w-full flex justify-start px-12 items-center border-t-2 border-dashed">
                <Button variant={"destructive"}>
                    <Pen />
                    ویرایش
                </Button>
            </div>
        </>
    );
}




