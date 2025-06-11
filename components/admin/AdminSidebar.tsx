"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  BarChart3,
  Film,
  Calendar,
  Ticket,
  Users,
  Settings,
  LayoutDashboard,
  MessageSquare,
  CreditCard,
  Store,
  Bell,
  LogOut,
} from "lucide-react"

const sidebarItems = [
  {
    title: "Tổng quan",
    icon: <LayoutDashboard className="h-5 w-5" />,
    href: "/admin",
    variant: "default",
  },
  {
    title: "Phim",
    icon: <Film className="h-5 w-5" />,
    href: "/admin/movies",
    variant: "ghost",
  },
  {
    title: "Lịch chiếu",
    icon: <Calendar className="h-5 w-5" />,
    href: "/admin/showtimes",
    variant: "ghost",
  },
  {
    title: "Đặt vé",
    icon: <Ticket className="h-5 w-5" />,
    href: "/admin/bookings",
    variant: "ghost",
  },
  {
    title: "Người dùng",
    icon: <Users className="h-5 w-5" />,
    href: "/admin/users",
    variant: "ghost",
  },
  {
    title: "Thống kê",
    icon: <BarChart3 className="h-5 w-5" />,
    href: "/admin/analytics",
    variant: "ghost",
  },
  {
    title: "Thanh toán",
    icon: <CreditCard className="h-5 w-5" />,
    href: "/admin/payments",
    variant: "ghost",
  },
  {
    title: "Bình luận",
    icon: <MessageSquare className="h-5 w-5" />,
    href: "/admin/comments",
    variant: "ghost",
  },
  {
    title: "Cửa hàng",
    icon: <Store className="h-5 w-5" />,
    href: "/admin/store",
    variant: "ghost",
  },
  {
    title: "Thông báo",
    icon: <Bell className="h-5 w-5" />,
    href: "/admin/notifications",
    variant: "ghost",
  },
  {
    title: "Cài đặt",
    icon: <Settings className="h-5 w-5" />,
    href: "/admin/settings",
    variant: "ghost",
  },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <div className="hidden md:flex flex-col w-64 border-r bg-background h-[calc(100vh-4rem)] ">
      <div className="flex flex-col gap-2 p-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-bold ">CINEMA ADMIN</h2>
          <div className="space-y-1">
            {sidebarItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent",
                  pathname === item.href ? "bg-accent text-accent-foreground" : "transparent",
                )}
              >
                {item.icon}
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-auto p-4">
        <Link
          href="/admin/logout"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent"
        >
          <LogOut className="h-5 w-5" />
          Đăng xuất
        </Link>
      </div>
    </div>
  )
}
