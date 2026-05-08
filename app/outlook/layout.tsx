"use client"

import { ReactNode } from "react";

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <>
            <div className="size-12 bg-red-400 fixed bottom-10 right-10"></div>

            {children}
        </>
    );
}




