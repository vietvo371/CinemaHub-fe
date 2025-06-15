import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Armchair, Settings } from "lucide-react"
import { cn } from "@/lib/utils"

export default function SeatsPage() {
  const seatTypes = [
    { type: "Standard", color: "bg-blue-500", price: "120,000₫", count: 120 },
    { type: "VIP", color: "bg-purple-500", price: "180,000₫", count: 20 },
    { type: "Couple", color: "bg-pink-500", price: "250,000₫", count: 10 },
  ]

  // Mô phỏng sơ đồ ghế cho phòng A1
  const generateSeats = () => {
    const seats = []
    const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]

    for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
      const row = []
      for (let seatNum = 1; seatNum <= 15; seatNum++) {
        let seatType = "Standard"
        let status = "available"

        // VIP seats (rows D, E, F)
        if (rowIndex >= 3 && rowIndex <= 5) {
          seatType = "VIP"
        }

        // Couple seats (last row)
        if (rowIndex === 9 && seatNum >= 6 && seatNum <= 10) {
          seatType = "Couple"
        }

        // Some seats are occupied or broken
        if (Math.random() < 0.1) status = "occupied"
        if (Math.random() < 0.05) status = "broken"

        row.push({
          id: `${rows[rowIndex]}${seatNum}`,
          row: rows[rowIndex],
          number: seatNum,
          type: seatType,
          status: status,
        })
      }
      seats.push(row)
    }
    return seats
  }

  const seats = generateSeats()

  const getSeatColor = (seat: any) => {
    if (seat.status === "broken") return "bg-red-500"
    if (seat.status === "occupied") return "bg-gray-400"

    switch (seat.type) {
      case "VIP":
        return "bg-purple-500 hover:bg-purple-600"
      case "Couple":
        return "bg-pink-500 hover:bg-pink-600"
      default:
        return "bg-blue-500 hover:bg-blue-600"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Quản Lý Ghế</h1>
          <p className="text-gray-600">Quản lý sơ đồ ghế và loại ghế</p>
        </div>
        <Button>
          <Settings className="h-4 w-4 mr-2" />
          Cấu hình ghế
        </Button>
      </div>

      {/* Seat Types Legend */}
      <Card>
        <CardHeader>
          <CardTitle>Loại ghế và giá vé</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-6">
            {seatTypes.map((type) => (
              <div key={type.type} className="flex items-center gap-3">
                <div className={cn("w-4 h-4 rounded", type.color)}></div>
                <div>
                  <p className="font-medium">{type.type}</p>
                  <p className="text-sm text-gray-500">
                    {type.price} ({type.count} ghế)
                  </p>
                </div>
              </div>
            ))}
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded bg-gray-400"></div>
              <div>
                <p className="font-medium">Đã đặt</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded bg-red-500"></div>
              <div>
                <p className="font-medium">Hỏng</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Seat Map */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Armchair className="h-5 w-5" />
            Sơ đồ ghế - Phòng A1 (CGV Vincom Center)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Screen */}
            <div className="text-center">
              <div className="bg-gray-800 text-white py-2 px-8 rounded-lg inline-block mb-8">MÀN HÌNH</div>
            </div>

            {/* Seats */}
            <div className="space-y-2">
              {seats.map((row, rowIndex) => (
                <div key={rowIndex} className="flex items-center justify-center gap-1">
                  <div className="w-8 text-center font-medium text-gray-600">{row[0].row}</div>
                  {row.map((seat) => (
                    <button
                      key={seat.id}
                      className={cn(
                        "w-8 h-8 rounded-t-lg text-xs font-medium text-white transition-colors",
                        getSeatColor(seat),
                      )}
                      disabled={seat.status === "occupied" || seat.status === "broken"}
                      title={`${seat.id} - ${seat.type} - ${seat.status}`}
                    >
                      {seat.number}
                    </button>
                  ))}
                  <div className="w-8 text-center font-medium text-gray-600">{row[0].row}</div>
                </div>
              ))}
            </div>

            {/* Seat Numbers */}
            <div className="flex items-center justify-center gap-1 text-xs text-gray-500">
              <div className="w-8"></div>
              {Array.from({ length: 15 }, (_, i) => (
                <div key={i} className="w-8 text-center">
                  {i + 1}
                </div>
              ))}
              <div className="w-8"></div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
