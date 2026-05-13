"use client"

import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { HugeiconsIcon } from "@hugeicons/react"
import { LayoutBottomIcon, AudioWave01Icon, CommandIcon, ComputerTerminalIcon, RoboticIcon, BookOpen02Icon, Settings05Icon, CropIcon, PieChartIcon, MapsIcon } from "@hugeicons/core-free-icons"
import { OSBN } from "@/iconjsx/logo"
import useCounterStore from "@/store/counterStore"
import useUserAuthontication from "@/store/useUserAuthontication"
import { useTheme } from "next-themes"
import { TeamSwitcher } from "./team-switcher"
import { Moon, Sun } from "lucide-react"


let data = {
  user: {
    name: "محمد رضا گلزار",
    email: "",
    avatar: "",
  },
  teams: [
    {
      name: "استادبان",
      logo: (
        <OSBN />
      ),
      plan: "کنسول کاربری",
    },
    {
      name: "Acme Corp.",
      logo: (
        <HugeiconsIcon icon={AudioWave01Icon} strokeWidth={2} />
      ),
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: (
        <HugeiconsIcon icon={CommandIcon} strokeWidth={2} />
      ),
      plan: "Free",
    },
  ],
  navMain: [

    {
      title: "موجودیت‌ها",
      url: "#",
      icon: (
        <HugeiconsIcon icon={ComputerTerminalIcon} strokeWidth={2} />
      ),
      isActive: true,
      items: [
        {
          title: "ثبت جدید",
          url: "manipulation/university",
        },
        {
          title: "لیست ثبت شده های من",
          url: "manipulation/professor",
        },
      ],
    },
    {
      title: "ثبت رای",
      url: "#",
      icon: (
        <HugeiconsIcon icon={RoboticIcon} strokeWidth={2} />
      ),
      items: [
        {
          title: "رای جدید",
          url: "#",
        },
        {
          title: "لیست آرای من",
          url: "#",
        },
        {
          title: "دعوت دیگران",
          url: "#",
        },
      ],
    },

  ],
  projects: [
    {
      name: "مستندات",
      url: "#",
      icon: (
        <HugeiconsIcon icon={CropIcon} strokeWidth={2} />
      ),
    },
    {
      name: "ثبت پیشنهادات",
      url: "#",
      icon: (
        <HugeiconsIcon icon={PieChartIcon} strokeWidth={2} />
      ),
    },
    {
      name: "درباره ما",
      url: "#",
      icon: (
        <HugeiconsIcon icon={MapsIcon} strokeWidth={2} />
      ),
    },
  ],
}



data.navMain.push(

  {
    title: "مدیریت",
    url: "#",
    icon: (
      <HugeiconsIcon icon={Settings05Icon} strokeWidth={2} />
    ),
    isActive: true,
    items: [
      {
        title: "لیست معلق ها",
        url: "manipulation/university",
      },
      {
        title: "لیست تایید کرده های من",
        url: "manipulation/professor",
      },
    ],
  },
)

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  const username = useUserAuthontication()
  data.user.name = username.username


  console.log(username.username, username.isLogin, "this is")

  return (
    <Sidebar collapsible="icon" {...props} side="right" dir="rtl" variant="floating">
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
