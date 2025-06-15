import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, Monitor, Users, Settings } from "lucide-react"

export default function ScreensPage() {
  const screens = [
    {
      id: 1,
      name: "Phòng A1",
      theater: "CGV Vincom Center",
      type: "2D Standard",
      capacity: 150,
      rows: 10,
      seatsPerRow: 15,
      status: "Hoạt động",
      equipment: "Projector 4K, Dolby Atmos",
    },
    {
      id: 2,
      name: "Phòng B2",
      theater: "CGV Vincom Center",
      type: "IMAX",
      capacity: 200,
      rows: 12,
      seatsPerRow: 17,
      status: "Hoạt động",
      equipment: "IMAX Projector, IMAX Sound",
    },
    {
      id: 3,
      name: "Phòng C1",
      theater: "Lotte Cinema Landmark",
      type: "4DX",
      capacity: 80,
      rows: 8,
      seatsPerRow: 10,
      status: "Bảo trì",
      equipment: "4DX Motion Seats, Environmental Effects",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Quản Lý Phòng Chiếu</h1>
          <p className="text-gray-600">Quản lý thông tin các phòng chiếu</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Thêm Phòng Chiếu
        </Button>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Tìm kiếm phòng chiếu..." className="pl-10" />
            </div>
            <Button variant="outline">Lọc theo rạp</Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6">
        {screens.map((screen) => (
          <Card key={screen.id}>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="flex items-center gap-2">
                  <Monitor className="h-5 w-5" />
                  {screen.name} - {screen.theater}
                </CardTitle>
                <Badge variant={screen.status === "Hoạt động" ? "default" : "secondary"}>{screen.status}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium text-sm text-gray-500">THÔNG TIN CỞ BẢN</h4>
                  <div className="space-y-1 text-sm">
                    <p>
                      <span className="font-medium">Loại phòng:</span> {screen.type}
                    </p>
                    <p className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span className="font-medium">Sức chứa:</span> {screen.capacity} ghế
                    </p>
                    <p>
                      <span className="font-medium">Bố trí:</span> {screen.rows} hàng × {screen.seatsPerRow} ghế
                    </p>
                  </div>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <h4 className="font-medium text-sm text-gray-500">THIẾT BỊ</h4>
                  <p className="text-sm">{screen.equipment}</p>
                </div>
              </div>

              <div className="flex gap-2 mt-4">
                <Button size="sm" variant="outline">
                  <Settings className="h-4 w-4 mr-1" />
                  Cấu hình
                </Button>
                <Button size="sm" variant="outline">
                  Sơ đồ ghế
                </Button>
                <Button size="sm" variant="outline">
                  Lịch chiếu
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
