import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, Edit, Trash2 } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function GenresPage() {
  const genres = [
    { id: 1, name: "Hành động", description: "Phim hành động, võ thuật", movieCount: 45, status: "Hoạt động" },
    { id: 2, name: "Tình cảm", description: "Phim tình cảm, lãng mạn", movieCount: 32, status: "Hoạt động" },
    { id: 3, name: "Kinh dị", description: "Phim kinh dị, ma quái", movieCount: 18, status: "Hoạt động" },
    { id: 4, name: "Hài kịch", description: "Phim hài, giải trí", movieCount: 28, status: "Hoạt động" },
    { id: 5, name: "Khoa học viễn tưởng", description: "Phim sci-fi, tương lai", movieCount: 15, status: "Tạm dừng" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Quản Lý Thể Loại</h1>
          <p className="text-gray-600">Quản lý các thể loại phim trong hệ thống</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Thêm Thể Loại
        </Button>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input placeholder="Tìm kiếm thể loại..." className="pl-10" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tên thể loại</TableHead>
                <TableHead>Mô tả</TableHead>
                <TableHead>Số phim</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead>Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {genres.map((genre) => (
                <TableRow key={genre.id}>
                  <TableCell className="font-medium">{genre.name}</TableCell>
                  <TableCell>{genre.description}</TableCell>
                  <TableCell>{genre.movieCount}</TableCell>
                  <TableCell>
                    <Badge variant={genre.status === "Hoạt động" ? "default" : "secondary"}>{genre.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
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
    </div>
  )
}
