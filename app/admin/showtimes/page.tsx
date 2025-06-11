"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { AdminSidebar } from "@/components/admin-sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon, Plus, Search } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

export default function ShowtimesPage() {
  const [date, setDate] = useState<Date>()
  const [isAddShowtimeOpen, setIsAddShowtimeOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Quản Lý Lịch Chiếu</h1>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Tìm kiếm lịch chiếu..."
                  className="w-64 pl-8"
                />
              </div>
              <Dialog open={isAddShowtimeOpen} onOpenChange={setIsAddShowtimeOpen}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Thêm Lịch Chiếu
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>Thêm Lịch Chiếu Mới</DialogTitle>
                    <DialogDescription>
                      Nhập thông tin chi tiết của lịch chiếu mới. Nhấn Lưu khi hoàn tất.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="movie">Phim</Label>
                        <Select>
                          <SelectTrigger id="movie">
                            <SelectValue placeholder="Chọn phim" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="avengers">Avengers: Endgame</SelectItem>
                            <SelectItem value="batman">The Batman</SelectItem>
                            <SelectItem value="spiderman">Spider-Man: No Way Home</SelectItem>
                            <SelectItem value="topgun">Top Gun: Maverick</SelectItem>
                            <SelectItem value="doctorstrange">Doctor Strange in the Multiverse of Madness</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="room">Phòng chiếu</Label>
                        <Select>
                          <SelectTrigger id="room">
                            <SelectValue placeholder="Chọn phòng" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="room1">Phòng 1</SelectItem>
                            <SelectItem value="room2">Phòng 2</SelectItem>
                            <SelectItem value="room3">Phòng 3</SelectItem>
                            <SelectItem value="room4">Phòng 4</SelectItem>
                            <SelectItem value="room5">Phòng 5</SelectItem>
                            <SelectItem value="room6">Phòng 6</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Ngày chiếu</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !date && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {date ? format(date, "dd/MM/yyyy") : <span>Chọn ngày</span>}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div>
                        <Label htmlFor="time">Giờ chiếu</Label>
                        <Input id="time" type="time" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="price">Giá vé (VNĐ)</Label>
                        <Input id="price" type="number" placeholder="80000" />
                      </div>
                      <div>
                        <Label htmlFor="status">Trạng thái</Label>
                        <Select>
                          <SelectTrigger id="status">
                            <SelectValue placeholder="Chọn trạng thái" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="open">Đang mở</SelectItem>
                            <SelectItem value="closed">Đã đóng</SelectItem>
                            <SelectItem value="soldout">Hết vé</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setIsAddShowtimeOpen(false)}>
                      Hủy
                    </Button>
                    <Button type="submit">Lưu</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <Tabs defaultValue="all">
            <div className="flex justify-between items-center mb-4">
              <TabsList>
                <TabsTrigger value="all">Tất cả</TabsTrigger>
                <TabsTrigger value="open">Đang mở</TabsTrigger>
                <TabsTrigger value="closed">Đã đóng</TabsTrigger>
                <TabsTrigger value="soldout">Hết vé</TabsTrigger>
              </TabsList>
            </div>
          </Tabs>
        </main>
      </div>
    </div>
  )
} 