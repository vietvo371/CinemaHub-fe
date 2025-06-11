"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Search, Film, User } from "lucide-react"

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Film className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">CinemaHub</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Trang Chủ
          </Link>
          <Link href="/movies" className="text-sm font-medium hover:text-primary transition-colors">
            Phim
          </Link>
          <Link href="/showtimes" className="text-sm font-medium hover:text-primary transition-colors">
            Lịch Chiếu
          </Link>
          <Link href="/theaters" className="text-sm font-medium hover:text-primary transition-colors">
            Rạp
          </Link>
          <Link href="/admin" className="text-sm font-medium hover:text-primary transition-colors">
            Quản Lý
          </Link>
        </nav>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(!isSearchOpen)} className="hidden md:flex">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-4 w-4" />
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4 mt-8">
                <Link href="/" className="text-sm font-medium">
                  Trang Chủ
                </Link>
                <Link href="/movies" className="text-sm font-medium">
                  Phim
                </Link>
                <Link href="/showtimes" className="text-sm font-medium">
                  Lịch Chiếu
                </Link>
                <Link href="/theaters" className="text-sm font-medium">
                  Rạp
                </Link>
                <Link href="/admin" className="text-sm font-medium">
                  Quản Lý
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {isSearchOpen && (
        <div className="border-t p-4">
          <div className="container mx-auto">
            <Input placeholder="Tìm kiếm phim..." className="max-w-md" />
          </div>
        </div>
      )}
    </header>
  )
}
