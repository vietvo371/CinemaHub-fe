"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AdminSidebar } from "@/components/admin-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Edit, Trash2, Search, Filter, Download, Upload, Eye } from "lucide-react"

export default function MoviesPage() {
  const [isAddMovieOpen, setIsAddMovieOpen] = useState(false)
  const [isEditMovieOpen, setIsEditMovieOpen] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState<any>(null)

  const handleEditMovie = (movie: any) => {
    setSelectedMovie(movie)
    setIsEditMovieOpen(true)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Quản Lý Phim</h1>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Tìm kiếm phim..." className="w-64 pl-8" />
              </div>
              <Dialog open={isAddMovieOpen} onOpenChange={setIsAddMovieOpen}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Thêm Phim
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>Thêm Phim Mới</DialogTitle>
                    <DialogDescription>Nhập thông tin chi tiết của phim mới. Nhấn Lưu khi hoàn tất.</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="title">Tên Phim</Label>
                        <Input id="title" placeholder="Nhập tên phim" />
                      </div>
                      <div>
                        <Label htmlFor="genre">Thể Loại</Label>
                        <Select>
                          <SelectTrigger id="genre">
                            <SelectValue placeholder="Chọn thể loại" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="action">Hành Động</SelectItem>
                            <SelectItem value="comedy">Hài</SelectItem>
                            <SelectItem value="drama">Chính Kịch</SelectItem>
                            <SelectItem value="horror">Kinh Dị</SelectItem>
                            <SelectItem value="animation">Hoạt Hình</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="duration">Thời Lượng (phút)</Label>
                        <Input id="duration" type="number" placeholder="120" />
                      </div>
                      <div>
                        <Label htmlFor="releaseDate">Ngày Phát Hành</Label>
                        <Input id="releaseDate" type="date" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="director">Đạo Diễn</Label>
                        <Input id="director" placeholder="Tên đạo diễn" />
                      </div>
                      <div>
                        <Label htmlFor="cast">Diễn Viên</Label>
                        <Input id="cast" placeholder="Diễn viên (phân cách bằng dấu phẩy)" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="description">Mô Tả</Label>
                      <Textarea id="description" placeholder="Nhập mô tả phim" />
                    </div>
                    <div>
                      <Label htmlFor="trailer">Link Trailer</Label>
                      <Input id="trailer" placeholder="https://youtube.com/..." />
                    </div>
                    <div>
                      <Label htmlFor="poster">Poster</Label>
                      <div className="flex items-center gap-4">
                        <div className="w-24 h-36 bg-muted rounded flex items-center justify-center">
                          <Upload className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <Button variant="outline" type="button">
                          Tải lên
                        </Button>
                      </div>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setIsAddMovieOpen(false)}>
                      Hủy
                    </Button>
                    <Button type="submit">Lưu</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <Tabs defaultValue="all">
            <div className="flex justify-between items-center mb-4">
              <TabsList>
                <TabsTrigger value="all">Tất cả</TabsTrigger>
                <TabsTrigger value="showing">Đang chiếu</TabsTrigger>
                <TabsTrigger value="coming">Sắp chiếu</TabsTrigger>
                <TabsTrigger value="ended">Đã kết thúc</TabsTrigger>
              </TabsList>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Lọc
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Xuất
                </Button>
              </div>
            </div>

            <TabsContent value="all">
              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[50px]">ID</TableHead>
                        <TableHead>Tên Phim</TableHead>
                        <TableHead>Thể Loại</TableHead>
                        <TableHead>Thời Lượng</TableHead>
                        <TableHead>Ngày Phát Hành</TableHead>
                        <TableHead>Trạng Thái</TableHead>
                        <TableHead className="text-right">Hành Động</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        {
                          id: 1,
                          title: "Avengers: Endgame",
                          genre: "Hành Động",
                          duration: "181 phút",
                          releaseDate: "26/04/2024",
                          status: "Đang chiếu",
                        },
                        {
                          id: 2,
                          title: "The Batman",
                          genre: "Hành Động",
                          duration: "176 phút",
                          releaseDate: "04/03/2024",
                          status: "Đang chiếu",
                        },
                        {
                          id: 3,
                          title: "Spider-Man: No Way Home",
                          genre: "Hành Động",
                          duration: "148 phút",
                          releaseDate: "17/12/2024",
                          status: "Sắp chiếu",
                        },
                        {
                          id: 4,
                          title: "Top Gun: Maverick",
                          genre: "Hành Động",
                          duration: "130 phút",
                          releaseDate: "27/05/2024",
                          status: "Đang chiếu",
                        },
                        {
                          id: 5,
                          title: "Doctor Strange in the Multiverse of Madness",
                          genre: "Hành Động",
                          duration: "126 phút",
                          releaseDate: "06/05/2024",
                          status: "Đang chiếu",
                        },
                        {
                          id: 6,
                          title: "Minions: The Rise of Gru",
                          genre: "Hoạt Hình",
                          duration: "87 phút",
                          releaseDate: "01/07/2024",
                          status: "Sắp chiếu",
                        },
                        {
                          id: 7,
                          title: "Thor: Love and Thunder",
                          genre: "Hành Động",
                          duration: "119 phút",
                          releaseDate: "08/07/2024",
                          status: "Sắp chiếu",
                        },
                        {
                          id: 8,
                          title: "Black Panther: Wakanda Forever",
                          genre: "Hành Động",
                          duration: "161 phút",
                          releaseDate: "11/11/2024",
                          status: "Sắp chiếu",
                        },
                      ].map((movie) => (
                        <TableRow key={movie.id}>
                          <TableCell>{movie.id}</TableCell>
                          <TableCell className="font-medium">{movie.title}</TableCell>
                          <TableCell>{movie.genre}</TableCell>
                          <TableCell>{movie.duration}</TableCell>
                          <TableCell>{movie.releaseDate}</TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                movie.status === "Đang chiếu"
                                  ? "default"
                                  : movie.status === "Sắp chiếu"
                                    ? "secondary"
                                    : "outline"
                              }
                            >
                              {movie.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button size="icon" variant="ghost">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button size="icon" variant="ghost" onClick={() => handleEditMovie(movie)}>
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button size="icon" variant="ghost">
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
            </TabsContent>
          </Tabs>

          <Dialog open={isEditMovieOpen} onOpenChange={setIsEditMovieOpen}>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Chỉnh Sửa Phim</DialogTitle>
                <DialogDescription>Chỉnh sửa thông tin chi tiết của phim. Nhấn Lưu khi hoàn tất.</DialogDescription>
              </DialogHeader>
              {selectedMovie && (
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="edit-title">Tên Phim</Label>
                      <Input id="edit-title" defaultValue={selectedMovie.title} />
                    </div>
                    <div>
                      <Label htmlFor="edit-genre">Thể Loại</Label>
                      <Select defaultValue="action">
                        <SelectTrigger id="edit-genre">
                          <SelectValue placeholder={selectedMovie.genre} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="action">Hành Động</SelectItem>
                          <SelectItem value="comedy">Hài</SelectItem>
                          <SelectItem value="drama">Chính Kịch</SelectItem>
                          <SelectItem value="horror">Kinh Dị</SelectItem>
                          <SelectItem value="animation">Hoạt Hình</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="edit-duration">Thời Lượng (phút)</Label>
                      <Input id="edit-duration" defaultValue={selectedMovie.duration.replace(" phút", "")} />
                    </div>
                    <div>
                      <Label htmlFor="edit-releaseDate">Ngày Phát Hành</Label>
                      <Input id="edit-releaseDate" type="date" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="edit-director">Đạo Diễn</Label>
                      <Input id="edit-director" placeholder="Tên đạo diễn" />
                    </div>
                    <div>
                      <Label htmlFor="edit-cast">Diễn Viên</Label>
                      <Input id="edit-cast" placeholder="Diễn viên (phân cách bằng dấu phẩy)" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="edit-description">Mô Tả</Label>
                    <Textarea id="edit-description" placeholder="Nhập mô tả phim" />
                  </div>
                  <div>
                    <Label htmlFor="edit-trailer">Link Trailer</Label>
                    <Input id="edit-trailer" placeholder="https://youtube.com/..." />
                  </div>
                  <div>
                    <Label htmlFor="edit-poster">Poster</Label>
                    <div className="flex items-center gap-4">
                      <div className="w-24 h-36 bg-muted rounded flex items-center justify-center">
                        <Upload className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <Button variant="outline" type="button">
                        Tải lên
                      </Button>
                    </div>
                  </div>
                </div>
              )}
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsEditMovieOpen(false)}>
                  Hủy
                </Button>
                <Button type="submit">Lưu</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </main>
      </div>
    </div>
  )
}
