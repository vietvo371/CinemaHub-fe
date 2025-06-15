import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, Edit, Trash2, Eye } from "lucide-react"
import Image from "next/image"

export default function MoviesPage() {
  const movies = [
    {
      id: 1,
      title: "Avengers: Endgame",
      genre: "Hành động, Khoa học viễn tưởng",
      duration: "181 phút",
      rating: "8.4/10",
      status: "Đang chiếu",
      releaseDate: "2024-01-15",
      poster: "/placeholder.svg?height=120&width=80",
    },
    {
      id: 2,
      title: "Spider-Man: No Way Home",
      genre: "Hành động, Phiêu lưu",
      duration: "148 phút",
      rating: "8.2/10",
      status: "Đang chiếu",
      releaseDate: "2024-01-20",
      poster: "/placeholder.svg?height=120&width=80",
    },
    {
      id: 3,
      title: "The Batman",
      genre: "Hành động, Tội phạm",
      duration: "176 phút",
      rating: "7.8/10",
      status: "Sắp chiếu",
      releaseDate: "2024-02-01",
      poster: "/placeholder.svg?height=120&width=80",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Quản Lý Phim</h1>
          <p className="text-gray-600">Quản lý danh sách phim trong hệ thống</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Thêm Phim Mới
        </Button>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Tìm kiếm phim..." className="pl-10" />
            </div>
            <Button variant="outline">Lọc</Button>
          </div>
        </CardContent>
      </Card>

      {/* Movies List */}
      <div className="grid gap-6">
        {movies.map((movie) => (
          <Card key={movie.id}>
            <CardContent className="p-6">
              <div className="flex gap-6">
                <Image
                  src={movie.poster || "/placeholder.svg"}
                  alt={movie.title}
                  width={80}
                  height={120}
                  className="rounded-lg object-cover"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{movie.title}</h3>
                    <Badge variant={movie.status === "Đang chiếu" ? "default" : "secondary"}>{movie.status}</Badge>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <span className="font-medium">Thể loại:</span> {movie.genre}
                    </p>
                    <p>
                      <span className="font-medium">Thời lượng:</span> {movie.duration}
                    </p>
                    <p>
                      <span className="font-medium">Đánh giá:</span> {movie.rating}
                    </p>
                    <p>
                      <span className="font-medium">Ngày phát hành:</span> {movie.releaseDate}
                    </p>
                  </div>
                  <div className="flex gap-2 mt-4">
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
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
