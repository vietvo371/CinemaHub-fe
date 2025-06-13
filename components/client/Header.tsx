"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Search, Film, User } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover"
import { useRouter } from "next/navigation"
// import { useSession } from "next-auth/react"

export function Header() {
  // const { data: session } = useSession()
  const [isLogin, setIsLogin] = useState(false)
  const router = useRouter()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Film className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">CinemaWopai</span>
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
          <Popover>
            <PopoverTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon"
                className="relative hover:bg-accent transition-all duration-200"
              >
                <Search className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent 
              className="w-[300px] sm:w-[400px] p-4 shadow-lg rounded-lg border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
              align="end"
              sideOffset={8}
            >
              <div className="flex flex-col space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Tìm kiếm phim..." 
                    className="pl-9 w-full focus-visible:ring-1 focus-visible:ring-primary"
                  />
                </div>
                <div className="text-sm text-muted-foreground">
                  Nhấn Enter để tìm kiếm
                </div>
              </div>
            </PopoverContent>
          </Popover>

          {isLogin ? (
            <Button variant="ghost" size="icon" >
              <User className="h-4 w-4" />
            </Button>
          ) : (
            <Button onClick={() => router.push("/auth/login")} className="text-sm font-medium bg-primary text-white transition-colors" >
              Đăng Nhập
            </Button>
          )}

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
    </header>
  )
}
