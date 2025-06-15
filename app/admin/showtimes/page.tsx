import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Plus } from "lucide-react"

export default function ShowtimesPage() {
  const showtimes = [
    {
      id: 1,
      movie: "Avengers: Endgame",
      theater: "Rạp 1",
      screen: "Phòng A1",
      date: "2024-01-20",
      time: "14:00",
      price: "120,000₫",
      availableSeats: 45,
      totalSeats: 60,
      status: "Đang bán",
    },
    {
      id: 2,
      movie: "Spider-Man: No Way Home",
      theater: "Rạp 1",
      screen: "Phòng B2",
      date: "2024-01-20",
      time: "16:30",
      price: "150,000₫",
      availableSeats: 12,
      totalSeats: 80,
      status: "Sắp hết vé",
    },
    {
      id: 3,
      movie: "The Batman",
      theater: "Rạp 2",
      screen: "Phòng C1",
      date: "2024-01-20",
      time: "19:00",
      price: "180,000₫",
      availableSeats: 0,
      totalSeats: 100,
      status: "Hết vé",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Lịch Chiếu</h1>
          <p className="text-gray-600">Quản lý lịch chiếu phim</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Thêm Suất Chiếu
        </Button>
      </div>

      {/* Calendar View */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Lịch Chiếu Hôm Nay - 20/01/2024
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {showtimes.map((showtime) => (
              <div key={showtime.id} className="border rounded-lg p-4 hover:bg-gray-50">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{showtime.movie}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {showtime.theater} - {showtime.screen}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {showtime.time}
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-medium text-green-600">{showtime.price}</span>
                      <span className="text-sm text-gray-500">
                        Còn {showtime.availableSeats}/{showtime.totalSeats} ghế
                      </span>
                    </div>
                  </div>
                  <div className="text-right space-y-2">
                    <Badge
                      variant={
                        showtime.status === "Đang bán"
                          ? "default"
                          : showtime.status === "Sắp hết vé"
                            ? "secondary"
                            : "destructive"
                      }
                    >
                      {showtime.status}
                    </Badge>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        Sửa
                      </Button>
                      <Button size="sm" variant="outline">
                        Xóa
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
