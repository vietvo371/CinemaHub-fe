import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, Edit, Trash2, Eye, Calendar } from "lucide-react"
import Image from "next/image"

export default function NewsPage() {
  const news = [
    {
      id: 1,
      title: "Ra mắt phim bom tấn 'Fast & Furious 10'",
      excerpt: "Phần phim mới nhất của series Fast & Furious sẽ được công chiếu tại tất cả các rạp từ ngày 15/02/2024",
      content: "Nội dung chi tiết về bộ phim...",
      author: "Admin",
      publishDate: "2024-01-20",
      status: "Đã xuất bản",
      category: "Tin phim mới",
      views: 1250,
      image: "/placeholder.svg?height=100&width=150",
    },
    {
      id: 2,
      title: "Khuyến mãi đặc biệt dịp Tết Nguyên Đán",
      excerpt: "Giảm giá 30% cho tất cả các suất chiếu từ ngày 8/2 đến 18/2/2024",
      content: "Chi tiết chương trình khuyến mãi...",
      author: "Marketing Team",
      publishDate: "2024-01-18",
      status: "Đã xuất bản",
      category: "Khuyến mãi",
      views: 890,
      image: "/placeholder.svg?height=100&width=150",
    },
    {
      id: 3,
      title: "Nâng cấp hệ thống âm thanh IMAX tại CGV Vincom",
      excerpt: "Trải nghiệm âm thanh chất lượng cao với công nghệ IMAX mới nhất",
      content: "Thông tin về việc nâng cấp...",
      author: "Technical Team",
      publishDate: "2024-01-15",
      status: "Nháp",
      category: "Tin tức rạp",
      views: 456,
      image: "/placeholder.svg?height=100&width=150",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Tin Tức & Sự Kiện</h1>
          <p className="text-gray-600">Quản lý tin tức và sự kiện của rạp</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Thêm bài viết
        </Button>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Tìm kiếm bài viết..." className="pl-10" />
            </div>
            <Button variant="outline">Lọc theo danh mục</Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6">
        {news.map((article) => (
          <Card key={article.id}>
            <CardContent className="p-6">
              <div className="flex gap-6">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  width={150}
                  height={100}
                  className="rounded-lg object-cover"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{article.title}</h3>
                      <Badge variant="outline" className="mb-2">
                        {article.category}
                      </Badge>
                    </div>
                    <Badge variant={article.status === "Đã xuất bản" ? "default" : "secondary"}>{article.status}</Badge>
                  </div>

                  <p className="text-gray-600 mb-3">{article.excerpt}</p>

                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {article.publishDate}
                    </div>
                    <span>Tác giả: {article.author}</span>
                    <span>{article.views} lượt xem</span>
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
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
