
import localFont from "next/font/local";
// @ts-ignore
import "./globals.css";
import { DirectionProvider } from "@base-ui/react";
import { Metadata } from "next";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useProtect } from "@/hooks/useProtect";




const arad = localFont({
  src: "../public/font/AradVF.woff2",
  variable: "--font-arad",
  display: "swap",

});

export const metadata: Metadata = {
  title: 'OstadBun',
  description: 'پلتفرم یادگیری با استادبان',
  icons: {
    icon: '/favicon.ico',
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body
        className={`${arad.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >


          <DirectionProvider direction="rtl">
            <Toaster position="bottom-right"  style={{ fontFamily: 'aradVF' }} />
            <SidebarProvider>
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

                        <BreadcrumbItem className="hidden md:block">
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
          </DirectionProvider>

        </ThemeProvider>


      </body>
    </html>
  );
}
