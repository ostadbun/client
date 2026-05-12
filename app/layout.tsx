
import localFont from "next/font/local";
// @ts-ignore
import "./globals.css";
import { DirectionProvider } from "@base-ui/react";
import { Metadata } from "next";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";




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
            <Toaster position="top-center" theme="dark" />
            <SidebarProvider>
              <main className=" w-full float-right">

                {children}
              </main>
            </SidebarProvider>
          </DirectionProvider>

        </ThemeProvider>


      </body>
    </html>
  );
}
