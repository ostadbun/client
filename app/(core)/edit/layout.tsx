"use client"


import { useProtect } from "@/hooks/useProtect";
import { ReactNode } from "react";

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
    useProtect()

    return (
        { children }
    );
}




