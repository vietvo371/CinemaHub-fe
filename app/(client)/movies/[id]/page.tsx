"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Clock, Calendar, Play } from "lucide-react"
import Link from "next/link"

interface Movie {
  id: number
  title: string
  poster: string
  genre: string
  duration: number
  rating: number
  releaseDate: string
  description: string
  director: string
  cast: string[]
  trailer: string
}

export default function MovieDetailPage() {
  const params = useParams()
  const [movie, setMovie] = useState<Movie | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (params.id) {
      fetch(`/api/movies/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setMovie(data)
          setLoading(false)
        })
        .catch((err) => {
          console.error("Error fetching movie:", err)
          setLoading(false)
        })
    }
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded w-1/3 mb-8" />
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-muted rounded-lg aspect-[2/3]" />
              <div className="md:col-span-2 space-y-4">
                <div className="h-6 bg-muted rounded" />
                <div className="h-4 bg-muted rounded w-2/3" />
                <div className="h-20 bg-muted rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!movie) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Không tìm thấy phim</h1>
          <Button asChild>
            <Link href="/">Về Trang Chủ</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="relative">
            <Image
              src={movie.poster || "/placeholder.svg"}
              alt={movie.title}
              width={400}
              height={600}
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          <div className="md:col-span-2 space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
              <div className="flex flex-wrap gap-4 mb-4">
                <Badge variant="secondary">{movie.genre}</Badge>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{movie.rating}/10</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{movie.duration} phút</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{movie.releaseDate}</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Mô tả</h2>
              <p className="text-muted-foreground leading-relaxed">{movie.description}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Đạo diễn</h2>
              <p className="text-muted-foreground">{movie.director}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Diễn viên</h2>
              {/* <p className="text-muted-foreground">{movie.cast.join(", ")}</p> */}
            </div>

            <div className="flex gap-4">
              <Button size="lg" className="flex-1">
                <Play className="mr-2 h-5 w-5" />
                Xem Trailer
              </Button>
              <Button asChild size="lg" variant="outline" className="flex-1">
                <Link href={`/booking/${movie.id}`}>Đặt Vé Ngay</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Lịch Chiếu</h2>
          <div className="grid gap-4">
            {["Hôm nay", "Ngày mai", "Thứ 7", "Chủ nhật"].map((day, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">{day}</h3>
                  <div className="flex flex-wrap gap-2">
                    {["09:00", "12:00", "15:00", "18:00", "21:00"].map((time) => (
                      <Button key={time} variant="outline" size="sm">
                        {time}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
