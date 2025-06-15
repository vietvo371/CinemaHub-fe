"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  BarChart3,
  Film,
  Tags,
  Building2,
  Monitor,
  Armchair,
  Calendar,
  Ticket,
  CreditCard,
  Newspaper,
  Users,
  Heart,
  Gift,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const menuItems = [
  { icon: BarChart3, label: "Tổng Quan", href: "/admin" },
  { icon: Film, label: "Quản Lý Phim", href: "/admin/movies" },
  { icon: Tags, label: "Quản Lý Thể Loại", href: "/admin/genres" },
  { icon: Building2, label: "Quản Lý Rạp", href: "/admin/theaters" },
  { icon: Monitor, label: "Quản Lý Phòng Chiếu", href: "/admin/screens" },
  { icon: Armchair, label: "Quản Lý Ghế", href: "/admin/seats" },
  { icon: Calendar, label: "Lịch Chiếu", href: "/admin/showtimes" },
  { icon: Ticket, label: "Đặt Vé", href: "/admin/bookings" },
  { icon: CreditCard, label: "Thanh Toán", href: "/admin/payments" },
  { icon: Newspaper, label: "Tin Tức & Sự Kiện", href: "/admin/news" },
  { icon: Users, label: "Người Dùng", href: "/admin/users" },
  { icon: Heart, label: "Sở Thích Người Dùng", href: "/admin/preferences" },
  { icon: Gift, label: "Khuyến Mãi", href: "/admin/promotions" },
]

export function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed left-0 top-0 z-40 h-full w-64 bg-white border-r border-gray-200 transform transition-transform duration-200 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        )}
      >
        <div className="p-6">
          <h1 className="text-xl font-bold text-gray-900">CINEMA ADMIN</h1>
        </div>

        <nav className="px-3">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors mb-1",
                  isActive ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-100",
                )}
                onClick={() => setIsOpen(false)}
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden" onClick={() => setIsOpen(false)} />
      )}
    </>
  )
}
