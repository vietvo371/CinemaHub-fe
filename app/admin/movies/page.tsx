"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, Edit, Trash2, Eye, Loader2 } from "lucide-react"
import Image from "next/image"  
import { useMovies } from "@/hooks/use-movies"
import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FilterOptions, Movie } from "@/types"
import React from "react"

export default function MoviesPage() {
  const [filters, setFilters] = useState<FilterOptions>({
    search: "",
    // genre: "all",
    status: "all",
    sortBy: "releaseDate",
    sortOrder: "desc",
    page: 1,
    limit: 10
  })

  const { data, loading, fetchMovies } = useMovies(filters)
  console.log(data)

  const handleSearch = (value: string) => {
    setFilters(prev => ({ ...prev, search: value, page: 1 }))
    fetchMovies()
  }

  const handleSort = (value: string) => {
    const [sortBy, sortOrder] = value.split("-")
    setFilters(prev => ({ ...prev, sortBy, sortOrder: sortOrder as "asc" | "desc" }))
    fetchMovies()
  }

  const handleFilter = (key: keyof FilterOptions, value: string) => {
    setFilters(prev => ({ 
      ...prev, 
      [key]: value === "all" ? "" : value,
      page: 1 
    }))
    fetchMovies()
  }

  const formatDate = (dateString: string | Date) => {
    try {
      const date = new Date(dateString)
      if (isNaN(date.getTime())) {
        return 'Invalid date'
      }
      return date.toLocaleDateString('vi-VN')
    } catch (error) {
      console.error('Error formatting date:', error)
      return 'Invalid date'
    }
  }

  // const movies = [
  //   {
  //     id: 1,
  //     title: "Avengers: Endgame",
  //     genre: "Hành động, Khoa học viễn tưởng",
  //     duration: "181 phút",
  //     rating: "8.4/10",
  //     status: "Đang chiếu",
  //     releaseDate: "2024-01-15",
  //     poster: "/placeholder.svg?height=120&width=80",
  //   },
  //   {
  //     id: 2,
  //     title: "Spider-Man: No Way Home",
  //     genre: "Hành động, Phiêu lưu",
  //     duration: "148 phút",
  //     rating: "8.2/10",
  //     status: "Đang chiếu",
  //     releaseDate: "2024-01-20",
  //     poster: "/placeholder.svg?height=120&width=80",
  //   },
  //   {
  //     id: 3,
  //     title: "The Batman",
  //     genre: "Hành động, Tội phạm",
  //     duration: "176 phút",
  //     rating: "7.8/10",
  //     status: "Sắp chiếu",
  //     releaseDate: "2024-02-01",
  //     poster: "/placeholder.svg?height=120&width=80",
  //   },
  // ]

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
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input 
                  placeholder="Tìm kiếm phim..." 
                  className="pl-10"
                  value={filters.search}
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </div>
              <Select
                value={`${filters.sortBy}-${filters.sortOrder}`}
                onValueChange={handleSort}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sắp xếp theo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="releaseDate-desc">Mới nhất</SelectItem>
                  <SelectItem value="releaseDate-asc">Cũ nhất</SelectItem>
                  <SelectItem value="title-asc">Tên A-Z</SelectItem>
                  <SelectItem value="title-desc">Tên Z-A</SelectItem>
                </SelectContent>
              </Select>
              <Select
                value={filters.status}
                onValueChange={(value) => handleFilter("status", value)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Trạng thái" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả</SelectItem>
                  <SelectItem value="Đang chiếu">Đang chiếu</SelectItem>
                  <SelectItem value="Sắp chiếu">Sắp chiếu</SelectItem>
                </SelectContent>
              </Select>
              <Select
                value={filters.genre}
                onValueChange={(value) => handleFilter("genre", value)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Thể loại" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả</SelectItem>
                  <SelectItem value="Hành động">Hành động</SelectItem>
                  <SelectItem value="Tình cảm">Tình cảm</SelectItem>
                  <SelectItem value="Hài">Hài</SelectItem>
                  <SelectItem value="Kinh dị">Kinh dị</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Movies List */}
      <div className="grid gap-6">
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <Loader2 className="h-4 w-4 animate-spin" />
          </div>  
        ) : (
          <>
            {data?.data.map((movie: any) => (
              <Card key={movie.id}>
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <Image
                      src={movie.posterUrl || "/placeholder.svg"}
                      alt={movie.title}
                      width={80}
                      height={120}
                      className="rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold">{movie.title}</h3>
                        <Badge variant="secondary">Phim mới</Badge>
                      </div>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p>
                          <span className="font-medium">Thể loại:</span> {movie.genres.join(", ") || "Chưa có"}
                        </p>
                        <p>
                          <span className="font-medium">Thời lượng:</span> {movie.duration} phút
                        </p>
                        <p>
                          <span className="font-medium">Đạo diễn:</span> {movie.director}
                        </p>
                        <p>
                          <span className="font-medium">Ngày phát hành:</span> {formatDate(movie.releaseDate)}
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
            
            {/* Pagination */}
            {data?.meta && (
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-600">
                  Hiển thị <span className="font-medium">{data.data.length}</span> / <span className="font-medium">{data.meta.total}</span> phim
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={filters.page === 1}
                    onClick={() => {
                      setFilters(prev => ({ ...prev, page: prev?.page - 1 }))
                    }}
                  >
                    Trang trước
                  </Button>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: data.meta.totalPages }, (_, i) => i + 1)
                      .filter(page => {
                        const currentPage = filters.page;
                        return (
                          page === 1 ||
                          page === data.meta.totalPages ||
                          (page >= currentPage - 1 && page <= currentPage + 1)
                        );
                      })
                      .map((page, index, array) => {
                        if (index > 0 && array[index - 1] !== page - 1) {
                          return (
                            <React.Fragment key={`ellipsis-${page}`}>
                              <span className="px-2">...</span>
                              <Button
                                variant={filters.page === page ? "default" : "outline"}
                                size="sm"
                                onClick={() => {
                                  setFilters(prev => ({ ...prev, page }))
                                }}
                              >
                                {page}
                              </Button>
                            </React.Fragment>
                          );
                        }
                        return (
                          <Button
                            key={page}
                            variant={filters.page === page ? "default" : "outline"}
                            size="sm"
                            onClick={() => {
                              setFilters(prev => ({ ...prev, page }))
                            }}
                          >
                            {page}
                          </Button>
                        );
                      })}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={filters.page >= data.meta.totalPages}
                    onClick={() => {
                      setFilters(prev => ({ ...prev, page: prev.page + 1 }))
                    }}
                  >
                    Trang sau
                  </Button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
