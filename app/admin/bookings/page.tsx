import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Eye, Download } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function BookingsPage() {
  const bookings = [
    {
      id: "BK001",
      customerName: "Nguyễn Văn A",
      customerPhone: "0123456789",
      movie: "Avengers: Endgame",
      theater: "CGV Vincom Center",
      screen: "Phòng A1",
      showtime: "2024-01-20 14:00",
      seats: ["A5", "A6"],
      totalAmount: "240,000₫",
      status: "Đã thanh toán",
      bookingDate: "2024-01-18 10:30",
      paymentMethod: "Thẻ tín dụng",
    },
    {
      id: "BK002",
      customerName: "Trần Thị B",
      customerPhone: "0987654321",
      movie: "Spider-Man: No Way Home",
      theater: "Lotte Cinema Landmark",
      screen: "Phòng B2",
      showtime: "2024-01-20 16:30",
      seats: ["D8", "D9", "D10"],
      totalAmount: "450,000₫",
      status: "Chờ thanh toán",
      bookingDate: "2024-01-19 15:45",
      paymentMethod: "Chuyển khoản",
    },
    {
      id: "BK003",
      customerName: "Lê Văn C",
      customerPhone: "0456789123",
      movie: "The Batman",
      theater: "Galaxy Cinema Nguyễn Du",
      screen: "Phòng C1",
      showtime: "2024-01-20 19:00",
      seats: ["F12"],
      totalAmount: "180,000₫",
      status: "Đã hủy",
      bookingDate: "2024-01-17 09:15",
      paymentMethod: "Tiền mặt",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Quản Lý Đặt Vé</h1>
          <p className="text-gray-600">Quản lý các đơn đặt vé của khách hàng</p>
        </div>
        <Button>
          <Download className="h-4 w-4 mr-2" />
          Xuất báo cáo
        </Button>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Tìm kiếm theo mã đặt vé, tên khách hàng..." className="pl-10" />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Lọc
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Mã đặt vé</TableHead>
                  <TableHead>Khách hàng</TableHead>
                  <TableHead>Phim</TableHead>
                  <TableHead>Rạp & Phòng</TableHead>
                  <TableHead>Suất chiếu</TableHead>
                  <TableHead>Ghế</TableHead>
                  <TableHead>Tổng tiền</TableHead>
                  <TableHead>Trạng thái</TableHead>
                  <TableHead>Thao tác</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bookings.map((booking) => (
                  <TableRow key={booking.id}>
                    <TableCell className="font-medium">{booking.id}</TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{booking.customerName}</p>
                        <p className="text-sm text-gray-500">{booking.customerPhone}</p>
                      </div>
                    </TableCell>
                    <TableCell>{booking.movie}</TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{booking.theater}</p>
                        <p className="text-sm text-gray-500">{booking.screen}</p>
                      </div>
                    </TableCell>
                    <TableCell>{booking.showtime}</TableCell>
                    <TableCell>{booking.seats.join(", ")}</TableCell>
                    <TableCell className="font-medium">{booking.totalAmount}</TableCell>
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
                    <TableCell>
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
