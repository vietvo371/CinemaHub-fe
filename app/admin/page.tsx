"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  Plus,
  Edit,
  Trash2,
  Film,
  Calendar,
  Users,
  Search,
  Filter,
  Download,
  Upload,
  Eye,
  Settings,
  DollarSign,
} from "lucide-react"
import { AdminSidebar } from "@/components/admin-sidebar"

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Quản Lý Rạp Chiếu Phim</h1>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Tìm kiếm..." className="w-64 pl-8" />
              </div>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Thêm Mới
              </Button>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview">Tổng Quan</TabsTrigger>
              <TabsTrigger value="movies">Phim</TabsTrigger>
              <TabsTrigger value="showtimes">Lịch Chiếu</TabsTrigger>
              <TabsTrigger value="bookings">Đặt Vé</TabsTrigger>
              <TabsTrigger value="users">Người Dùng</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Tổng Phim</CardTitle>
                    <Film className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">24</div>
                    <p className="text-xs text-muted-foreground">+2 từ tháng trước</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Suất Chiếu Hôm Nay</CardTitle>
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">48</div>
                    <p className="text-xs text-muted-foreground">Trên 6 phòng chiếu</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Vé Đã Bán</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1,234</div>
                    <p className="text-xs text-muted-foreground">+15% so với hôm qua</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Doanh Thu</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">₫123.4M</div>
                    <p className="text-xs text-muted-foreground">+8% so với tuần trước</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Phim Phổ Biến</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { title: "Avengers: Endgame", bookings: 456, revenue: "₫45.6M" },
                        { title: "Spider-Man: No Way Home", bookings: 389, revenue: "₫38.9M" },
                        { title: "The Batman", bookings: 234, revenue: "₫23.4M" },
                        { title: "Top Gun: Maverick", bookings: 198, revenue: "₫19.8M" },
                        { title: "Doctor Strange in the Multiverse of Madness", bookings: 176, revenue: "₫17.6M" },
                      ].map((movie, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">{movie.title}</p>
                            <p className="text-sm text-muted-foreground">{movie.bookings} vé</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">{movie.revenue}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Hoạt Động Gần Đây</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { action: "Thêm phim mới", detail: "The Batman", time: "2 giờ trước" },
                        { action: "Cập nhật lịch chiếu", detail: "Phòng 3", time: "4 giờ trước" },
                        { action: "Xử lý đặt vé", detail: "Đơn #1234", time: "6 giờ trước" },
                        { action: "Thêm người dùng mới", detail: "admin@example.com", time: "8 giờ trước" },
                        { action: "Cập nhật giá vé", detail: "Suất chiếu tối", time: "10 giờ trước" },
                      ].map((activity, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">{activity.action}</p>
                            <p className="text-sm text-muted-foreground">{activity.detail}</p>
                          </div>
                          <p className="text-sm text-muted-foreground">{activity.time}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Doanh Thu Theo Tháng</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80 flex items-center justify-center bg-muted/20 rounded-md">
                    <p className="text-muted-foreground">Biểu đồ doanh thu sẽ hiển thị ở đây</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="movies" className="space-y-6">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Lọc
                  </Button>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Trạng thái" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tất cả</SelectItem>
                      <SelectItem value="showing">Đang chiếu</SelectItem>
                      <SelectItem value="coming">Sắp chiếu</SelectItem>
                      <SelectItem value="ended">Đã kết thúc</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Xuất
                  </Button>
                  <Button variant="outline" size="sm">
                    <Upload className="h-4 w-4 mr-2" />
                    Nhập
                  </Button>
                  <Button size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Thêm Phim
                  </Button>
                </div>
              </div>

              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[50px]">ID</TableHead>
                        <TableHead>Tên Phim</TableHead>
                        <TableHead>Thể Loại</TableHead>
                        <TableHead>Thời Lượng</TableHead>
                        <TableHead>Ngày Phát Hành</TableHead>
                        <TableHead>Trạng Thái</TableHead>
                        <TableHead className="text-right">Hành Động</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        {
                          id: 1,
                          title: "Avengers: Endgame",
                          genre: "Hành Động",
                          duration: "181 phút",
                          releaseDate: "26/04/2024",
                          status: "Đang chiếu",
                        },
                        {
                          id: 2,
                          title: "The Batman",
                          genre: "Hành Động",
                          duration: "176 phút",
                          releaseDate: "04/03/2024",
                          status: "Đang chiếu",
                        },
                        {
                          id: 3,
                          title: "Spider-Man: No Way Home",
                          genre: "Hành Động",
                          duration: "148 phút",
                          releaseDate: "17/12/2024",
                          status: "Sắp chiếu",
                        },
                        {
                          id: 4,
                          title: "Top Gun: Maverick",
                          genre: "Hành Động",
                          duration: "130 phút",
                          releaseDate: "27/05/2024",
                          status: "Đang chiếu",
                        },
                        {
                          id: 5,
                          title: "Doctor Strange in the Multiverse of Madness",
                          genre: "Hành Động",
                          duration: "126 phút",
                          releaseDate: "06/05/2024",
                          status: "Đang chiếu",
                        },
                        {
                          id: 6,
                          title: "Minions: The Rise of Gru",
                          genre: "Hoạt Hình",
                          duration: "87 phút",
                          releaseDate: "01/07/2024",
                          status: "Sắp chiếu",
                        },
                        {
                          id: 7,
                          title: "Thor: Love and Thunder",
                          genre: "Hành Động",
                          duration: "119 phút",
                          releaseDate: "08/07/2024",
                          status: "Sắp chiếu",
                        },
                        {
                          id: 8,
                          title: "Black Panther: Wakanda Forever",
                          genre: "Hành Động",
                          duration: "161 phút",
                          releaseDate: "11/11/2024",
                          status: "Sắp chiếu",
                        },
                      ].map((movie) => (
                        <TableRow key={movie.id}>
                          <TableCell>{movie.id}</TableCell>
                          <TableCell className="font-medium">{movie.title}</TableCell>
                          <TableCell>{movie.genre}</TableCell>
                          <TableCell>{movie.duration}</TableCell>
                          <TableCell>{movie.releaseDate}</TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                movie.status === "Đang chiếu"
                                  ? "default"
                                  : movie.status === "Sắp chiếu"
                                    ? "secondary"
                                    : "outline"
                              }
                            >
                              {movie.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button size="icon" variant="ghost">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button size="icon" variant="ghost">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button size="icon" variant="ghost">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="showtimes" className="space-y-6">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Lọc
                  </Button>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Phòng chiếu" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tất cả</SelectItem>
                      <SelectItem value="room1">Phòng 1</SelectItem>
                      <SelectItem value="room2">Phòng 2</SelectItem>
                      <SelectItem value="room3">Phòng 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Thêm Lịch Chiếu
                </Button>
              </div>

              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[50px]">ID</TableHead>
                        <TableHead>Phim</TableHead>
                        <TableHead>Phòng</TableHead>
                        <TableHead>Ngày</TableHead>
                        <TableHead>Giờ</TableHead>
                        <TableHead>Giá Vé</TableHead>
                        <TableHead>Trạng Thái</TableHead>
                        <TableHead className="text-right">Hành Động</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        {
                          id: 1,
                          movie: "Avengers: Endgame",
                          room: "Phòng 1",
                          date: "12/07/2024",
                          time: "09:00",
                          price: "80,000đ",
                          status: "Đang mở",
                        },
                        {
                          id: 2,
                          movie: "Avengers: Endgame",
                          room: "Phòng 1",
                          date: "12/07/2024",
                          time: "12:00",
                          price: "80,000đ",
                          status: "Đang mở",
                        },
                        {
                          id: 3,
                          movie: "Avengers: Endgame",
                          room: "Phòng 1",
                          date: "12/07/2024",
                          time: "15:00",
                          price: "100,000đ",
                          status: "Đang mở",
                        },
                        {
                          id: 4,
                          movie: "The Batman",
                          room: "Phòng 2",
                          date: "12/07/2024",
                          time: "09:30",
                          price: "80,000đ",
                          status: "Đang mở",
                        },
                        {
                          id: 5,
                          movie: "The Batman",
                          room: "Phòng 2",
                          date: "12/07/2024",
                          time: "12:30",
                          price: "80,000đ",
                          status: "Đang mở",
                        },
                        {
                          id: 6,
                          movie: "The Batman",
                          room: "Phòng 2",
                          date: "12/07/2024",
                          time: "15:30",
                          price: "100,000đ",
                          status: "Đang mở",
                        },
                        {
                          id: 7,
                          movie: "Top Gun: Maverick",
                          room: "Phòng 3",
                          date: "12/07/2024",
                          time: "10:00",
                          price: "80,000đ",
                          status: "Đang mở",
                        },
                        {
                          id: 8,
                          movie: "Top Gun: Maverick",
                          room: "Phòng 3",
                          date: "12/07/2024",
                          time: "13:00",
                          price: "80,000đ",
                          status: "Đang mở",
                        },
                      ].map((showtime) => (
                        <TableRow key={showtime.id}>
                          <TableCell>{showtime.id}</TableCell>
                          <TableCell className="font-medium">{showtime.movie}</TableCell>
                          <TableCell>{showtime.room}</TableCell>
                          <TableCell>{showtime.date}</TableCell>
                          <TableCell>{showtime.time}</TableCell>
                          <TableCell>{showtime.price}</TableCell>
                          <TableCell>
                            <Badge variant="default">{showtime.status}</Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button size="icon" variant="ghost">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button size="icon" variant="ghost">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Thêm Lịch Chiếu Mới</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
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
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="date">Ngày chiếu</Label>
                      <Input id="date" type="date" />
                    </div>
                    <div>
                      <Label htmlFor="time">Giờ chiếu</Label>
                      <Input id="time" type="time" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="price">Giá vé</Label>
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
                  <Button>Thêm Lịch Chiếu</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="bookings" className="space-y-6">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Lọc
                  </Button>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Trạng thái" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tất cả</SelectItem>
                      <SelectItem value="pending">Chờ thanh toán</SelectItem>
                      <SelectItem value="completed">Đã thanh toán</SelectItem>
                      <SelectItem value="cancelled">Đã hủy</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Xuất
                  </Button>
                </div>
              </div>

              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[50px]">ID</TableHead>
                        <TableHead>Khách hàng</TableHead>
                        <TableHead>Phim</TableHead>
                        <TableHead>Suất chiếu</TableHead>
                        <TableHead>Ghế</TableHead>
                        <TableHead>Tổng tiền</TableHead>
                        <TableHead>Trạng thái</TableHead>
                        <TableHead className="text-right">Hành động</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        {
                          id: 1,
                          customer: "Nguyễn Văn A",
                          movie: "Avengers: Endgame",
                          showtime: "12/07/2024 09:00",
                          seats: "A1, A2",
                          total: "160,000đ",
                          status: "Đã thanh toán",
                        },
                        {
                          id: 2,
                          customer: "Trần Thị B",
                          movie: "The Batman",
                          showtime: "12/07/2024 09:30",
                          seats: "B3, B4, B5",
                          total: "240,000đ",
                          status: "Đã thanh toán",
                        },
                        {
                          id: 3,
                          customer: "Lê Văn C",
                          movie: "Top Gun: Maverick",
                          showtime: "12/07/2024 10:00",
                          seats: "C6, C7",
                          total: "160,000đ",
                          status: "Chờ thanh toán",
                        },
                        {
                          id: 4,
                          customer: "Phạm Thị D",
                          movie: "Avengers: Endgame",
                          showtime: "12/07/2024 12:00",
                          seats: "D8, D9",
                          total: "160,000đ",
                          status: "Đã thanh toán",
                        },
                        {
                          id: 5,
                          customer: "Hoàng Văn E",
                          movie: "The Batman",
                          showtime: "12/07/2024 12:30",
                          seats: "E10, E11",
                          total: "160,000đ",
                          status: "Đã hủy",
                        },
                        {
                          id: 6,
                          customer: "Ngô Thị F",
                          movie: "Top Gun: Maverick",
                          showtime: "12/07/2024 13:00",
                          seats: "F12",
                          total: "80,000đ",
                          status: "Chờ thanh toán",
                        },
                        {
                          id: 7,
                          customer: "Đỗ Văn G",
                          movie: "Avengers: Endgame",
                          showtime: "12/07/2024 15:00",
                          seats: "G1, G2",
                          total: "200,000đ",
                          status: "Đã thanh toán",
                        },
                        {
                          id: 8,
                          customer: "Vũ Thị H",
                          movie: "The Batman",
                          showtime: "12/07/2024 15:30",
                          seats: "H3, H4",
                          total: "200,000đ",
                          status: "Đã thanh toán",
                        },
                      ].map((booking) => (
                        <TableRow key={booking.id}>
                          <TableCell>{booking.id}</TableCell>
                          <TableCell className="font-medium">{booking.customer}</TableCell>
                          <TableCell>{booking.movie}</TableCell>
                          <TableCell>{booking.showtime}</TableCell>
                          <TableCell>{booking.seats}</TableCell>
                          <TableCell>{booking.total}</TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                booking.status === "Đã thanh toán"
                                  ? "default"
                                  : booking.status === "Chờ thanh toán"
                                    ? "secondary"
                                    : "destructive"
                              }
                            >
                              {booking.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button size="icon" variant="ghost">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button size="icon" variant="ghost">
                                <Edit className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="users" className="space-y-6">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Lọc
                  </Button>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Vai trò" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tất cả</SelectItem>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="staff">Nhân viên</SelectItem>
                      <SelectItem value="user">Người dùng</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Thêm Người Dùng
                </Button>
              </div>

              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[50px]">ID</TableHead>
                        <TableHead>Tên</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Vai trò</TableHead>
                        <TableHead>Ngày đăng ký</TableHead>
                        <TableHead>Trạng thái</TableHead>
                        <TableHead className="text-right">Hành động</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        {
                          id: 1,
                          name: "Nguyễn Văn Admin",
                          email: "admin@example.com",
                          role: "Admin",
                          registered: "01/01/2024",
                          status: "Hoạt động",
                        },
                        {
                          id: 2,
                          name: "Trần Thị Staff",
                          email: "staff1@example.com",
                          role: "Nhân viên",
                          registered: "15/01/2024",
                          status: "Hoạt động",
                        },
                        {
                          id: 3,
                          name: "Lê Văn Staff",
                          email: "staff2@example.com",
                          role: "Nhân viên",
                          registered: "01/02/2024",
                          status: "Hoạt động",
                        },
                        {
                          id: 4,
                          name: "Phạm Thị User",
                          email: "user1@example.com",
                          role: "Người dùng",
                          registered: "10/02/2024",
                          status: "Hoạt động",
                        },
                        {
                          id: 5,
                          name: "Hoàng Văn User",
                          email: "user2@example.com",
                          role: "Người dùng",
                          registered: "15/02/2024",
                          status: "Hoạt động",
                        },
                        {
                          id: 6,
                          name: "Ngô Thị User",
                          email: "user3@example.com",
                          role: "Người dùng",
                          registered: "20/02/2024",
                          status: "Bị khóa",
                        },
                        {
                          id: 7,
                          name: "Đỗ Văn User",
                          email: "user4@example.com",
                          role: "Người dùng",
                          registered: "25/02/2024",
                          status: "Hoạt động",
                        },
                        {
                          id: 8,
                          name: "Vũ Thị User",
                          email: "user5@example.com",
                          role: "Người dùng",
                          registered: "01/03/2024",
                          status: "Hoạt động",
                        },
                      ].map((user) => (
                        <TableRow key={user.id}>
                          <TableCell>{user.id}</TableCell>
                          <TableCell className="font-medium">{user.name}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>{user.role}</TableCell>
                          <TableCell>{user.registered}</TableCell>
                          <TableCell>
                            <Badge variant={user.status === "Hoạt động" ? "default" : "destructive"}>
                              {user.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button size="icon" variant="ghost">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button size="icon" variant="ghost">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button size="icon" variant="ghost">
                                <Settings className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
