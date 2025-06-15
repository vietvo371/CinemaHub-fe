import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, MapPin, Phone, Edit, Trash2, Eye } from "lucide-react"

export default function TheatersPage() {
  const theaters = [
    {
      id: 1,
      name: "CGV Vincom Center",
      address: "191 Bà Triệu, Hai Bà Trưng, Hà Nội",
      phone: "024-3974-3333",
      screens: 8,
      totalSeats: 1200,
      status: "Hoạt động",
      manager: "Nguyễn Văn A",
    },
    {
      id: 2,
      name: "Lotte Cinema Landmark",
      address: "72 Lê Thánh Tôn, Quận 1, TP.HCM",
      phone: "028-3827-2727",
      screens: 12,
      totalSeats: 1800,
      status: "Hoạt động",
      manager: "Trần Thị B",
    },
    {
      id: 3,
      name: "Galaxy Cinema Nguyễn Du",
      address: "116 Nguyễn Du, Quận 1, TP.HCM",
      phone: "028-3925-5555",
      screens: 6,
      totalSeats: 900,
      status: "Bảo trì",
      manager: "Lê Văn C",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Quản Lý Rạp</h1>
          <p className="text-gray-600">Quản lý thông tin các rạp chiếu phim</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Thêm Rạp Mới
        </Button>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input placeholder="Tìm kiếm rạp..." className="pl-10" />
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6">
        {theaters.map((theater) => (
          <Card key={theater.id}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-semibold">{theater.name}</h3>
                    <Badge variant={theater.status === "Hoạt động" ? "default" : "secondary"}>{theater.status}</Badge>
                  </div>

                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {theater.address}
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      {theater.phone}
                    </div>
                  </div>

                  <div className="flex gap-6 text-sm">
                    <div>
                      <span className="font-medium">Số phòng:</span> {theater.screens}
                    </div>
                    <div>
                      <span className="font-medium">Tổng ghế:</span> {theater.totalSeats}
                    </div>
                    <div>
                      <span className="font-medium">Quản lý:</span> {theater.manager}
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Eye className="h-4 w-4 mr-1" />
                    Xem
                  </Button>
                  <Button size="sm" variant="outline">
                    <Edit className="h-4 w-4 mr-1" />
                    Sửa
                  </Button>
                  <Button size="sm" variant="outline">
                    <Trash2 className="h-4 w-4 mr-1" />
                    Xóa
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
