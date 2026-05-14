"use client"


import { ReactNode } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger, useSidebar } from "@/components/ui/sidebar"

export const SideBarLayout = ({ children }: Readonly<{ children: ReactNode }>) => {

    return (
        <SidebarProvider  >
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ms-1" />
                        <Separator
                            orientation="vertical"
                            className="me-2 data-vertical:h-4 data-vertical:self-auto"
                        />

                        <Breadcrumb>
                            <BreadcrumbList>

                                <BreadcrumbItem className="hidden md:block ">
                                    <BreadcrumbLink href="#">
                                        استادبان
                                    </BreadcrumbLink>
                                </BreadcrumbItem>

                                <BreadcrumbSeparator className="hidden md:block" />
                                <BreadcrumbItem className="hidden md:block">
                                    <BreadcrumbLink href="#">
                                        استادبان
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="hidden md:block" />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>
                                        ویرایش
                                    </BreadcrumbPage>
                                </BreadcrumbItem>


                            </BreadcrumbList>
                        </Breadcrumb>


                    </div>
                </header>



                <main className=" w-full float-right">

                    {children}
                </main>
            </SidebarInset>
        </SidebarProvider>
    )
}