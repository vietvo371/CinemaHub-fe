"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, Clock, MapPin } from "lucide-react"

interface Seat {
  id: string
  row: string
  number: number
  type: "standard" | "vip" | "couple"
  price: number
  isBooked: boolean
  isSelected: boolean
}

export default function BookingPage() {
  const params = useParams()
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([])
  const [seats, setSeats] = useState<Seat[]>([])

  useEffect(() => {
    // Generate seats
    const generateSeats = () => {
      const seatTypes = ["standard", "vip", "couple"] as const
      const rows = ["A", "B", "C", "D", "E", "F", "G", "H"]
      const seatsPerRow = 12
      const newSeats: Seat[] = []

      rows.forEach((row, rowIndex) => {
        for (let i = 1; i <= seatsPerRow; i++) {
          const seatType = rowIndex < 3 ? "standard" : rowIndex < 6 ? "vip" : "couple"
          const price = seatType === "standard" ? 80000 : seatType === "vip" ? 120000 : 150000

          newSeats.push({
            id: `${row}${i}`,
            row,
            number: i,
            type: seatType,
            price,
            isBooked: Math.random() < 0.3, // 30% chance of being booked
            isSelected: false,
          })
        }
      })

      setSeats(newSeats)
    }

    generateSeats()
  }, [])

  const handleSeatClick = (seatId: string) => {
    setSeats((prev) =>
      prev.map((seat) => {
        if (seat.id === seatId && !seat.isBooked) {
          const newSeat = { ...seat, isSelected: !seat.isSelected }

          if (newSeat.isSelected) {
            setSelectedSeats((current) => [...current, newSeat])
          } else {
            setSelectedSeats((current) => current.filter((s) => s.id !== seatId))
          }

          return newSeat
        }
        return seat
      }),
    )
  }

  const totalPrice = selectedSeats.reduce((sum, seat) => sum + seat.price, 0)

  const getSeatColor = (seat: Seat) => {
    if (seat.isBooked) return "bg-red-500"
    if (seat.isSelected) return "bg-green-500"
    if (seat.type === "standard") return "bg-gray-300 hover:bg-gray-400"
    if (seat.type === "vip") return "bg-yellow-300 hover:bg-yellow-400"
    return "bg-pink-300 hover:bg-pink-400"
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Đặt Vé Xem Phim</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Date Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Chọn Ngày
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 gap-2">
                  {["Hôm nay", "Ngày mai", "Thứ 7", "Chủ nhật"].map((date) => (
                    <Button
                      key={date}
                      variant={selectedDate === date ? "default" : "outline"}
                      onClick={() => setSelectedDate(date)}
                      className="h-12"
                    >
                      {date}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Time Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Chọn Suất Chiếu
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-5 gap-2">
                  {["09:00", "12:00", "15:00", "18:00", "21:00"].map((time) => (
                    <Button
                      key={time}
                      variant={selectedTime === time ? "default" : "outline"}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Seat Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Chọn Ghế
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="bg-gray-800 text-white text-center py-2 rounded mb-4">MÀN HÌNH</div>

                  <div className="space-y-2">
                    {["A", "B", "C", "D", "E", "F", "G", "H"].map((row) => (
                      <div key={row} className="flex items-center gap-2">
                        <span className="w-6 text-center font-medium">{row}</span>
                        <div className="flex gap-1">
                          {seats
                            .filter((seat) => seat.row === row)
                            .map((seat) => (
                              <button
                                key={seat.id}
                                onClick={() => handleSeatClick(seat.id)}
                                disabled={seat.isBooked}
                                className={`w-8 h-8 rounded text-xs font-medium transition-colors ${getSeatColor(seat)} ${
                                  seat.isBooked ? "cursor-not-allowed" : "cursor-pointer"
                                }`}
                              >
                                {seat.number}
                              </button>
                            ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center gap-6 mt-6 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-gray-300 rounded"></div>
                      <span>Thường (80k)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-yellow-300 rounded"></div>
                      <span>VIP (120k)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-pink-300 rounded"></div>
                      <span>Couple (150k)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-red-500 rounded"></div>
                      <span>Đã đặt</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-green-500 rounded"></div>
                      <span>Đã chọn</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Summary */}
          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Thông Tin Đặt Vé</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Phim</h3>
                  <p className="text-sm text-muted-foreground">Avengers: Endgame</p>
                </div>

                {selectedDate && (
                  <div>
                    <h3 className="font-medium mb-2">Ngày chiếu</h3>
                    <Badge variant="outline">{selectedDate}</Badge>
                  </div>
                )}

                {selectedTime && (
                  <div>
                    <h3 className="font-medium mb-2">Suất chiếu</h3>
                    <Badge variant="outline">{selectedTime}</Badge>
                  </div>
                )}

                {selectedSeats.length > 0 && (
                  <div>
                    <h3 className="font-medium mb-2">Ghế đã chọn</h3>
                    <div className="flex flex-wrap gap-1">
                      {selectedSeats.map((seat) => (
                        <Badge key={seat.id} variant="secondary">
                          {seat.id}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-medium">Tổng tiền:</span>
                    <span className="text-xl font-bold text-primary">{totalPrice.toLocaleString("vi-VN")}đ</span>
                  </div>

                  <Button
                    className="w-full"
                    size="lg"
                    disabled={!selectedDate || !selectedTime || selectedSeats.length === 0}
                  >
                    Thanh Toán
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
