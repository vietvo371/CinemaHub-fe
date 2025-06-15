import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, Edit, Trash2, Gift, Calendar, Percent } from "lucide-react"

export default function PromotionsPage() {
  const promotions = [
    {
      id: 1,
      title: "Khuyến mãi Tết Nguyên Đán",
      description: "Giảm 30% cho tất cả các suất chiếu",
      discountType: "Phần trăm",
      discountValue: "30%",
      startDate: "2024-02-08",
      endDate: "2024-02-18",
      status: "Đang hoạt động",
      usageCount: 245,
      maxUsage: 1000,
      code: "TET2024",
      minAmount: "200,000₫",
    },
    {
      id: 2,
      title: "Ưu đãi sinh viên",
      description: "Giảm 50,000₫ cho sinh viên có thẻ",
      discountType: "Số tiền",
      discountValue: "50,000₫",
      startDate: "2024-01-01",
      endDate: "2024-12-31",
      status: "Đang hoạt động",
      usageCount: 89,
      maxUsage: 500,
      code: "STUDENT2024",
      minAmount: "150,000₫",
    },
    {
      id: 3,
      title: "Happy Hour",
      description: "Giảm 20% cho suất chiếu buổi sáng",
      discountType: "Phần trăm",
      discountValue: "20%",
      startDate: "2024-01-15",
      endDate: "2024-01-31",
      status: "Đã kết thúc",
      usageCount: 156,
      maxUsage: 200,
      code: "MORNING20",
      minAmount: "100,000₫",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Quản Lý Khuyến Mãi</h1>
          <p className="text-gray-600">Tạo và quản lý các chương trình khuyến mãi</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Tạo khuyến mãi
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Khuyến mãi đang hoạt động</CardTitle>
            <Gift className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-gray-500">Tổng cộng 3 chương trình</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Lượt sử dụng hôm nay</CardTitle>
            <Percent className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-green-600">+12% so với hôm qua</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tiết kiệm cho khách hàng</CardTitle>
            <Calendar className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,450,000₫</div>
            <p className="text-xs text-gray-500">Trong tháng này</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input placeholder="Tìm kiếm khuyến mãi..." className="pl-10" />
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6">
        {promotions.map((promotion) => (
          <Card key={promotion.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Gift className="h-5 w-5" />
                    {promotion.title}
                  </CardTitle>
                  <p className="text-gray-600 mt-1">{promotion.description}</p>
                </div>
                <Badge
                  variant={
                    promotion.status === "Đang hoạt động"
                      ? "default"
                      : promotion.status === "Đã kết thúc"
                        ? "secondary"
                        : "destructive"
                  }
                >
                  {promotion.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-500">Mã khuyến mãi</p>
                  <p className="font-medium">{promotion.code}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Giá trị giảm</p>
                  <p className="font-medium">{promotion.discountValue}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Đơn tối thiểu</p>
                  <p className="font-medium">{promotion.minAmount}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Lượt sử dụng</p>
                  <p className="font-medium">
                    {promotion.usageCount}/{promotion.maxUsage}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  Từ {promotion.startDate} đến {promotion.endDate}
                </div>
              </div>

              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  <Edit className="h-4 w-4 mr-1" />
                  Sửa
                </Button>
                <Button size="sm" variant="outline">
                  <Trash2 className="h-4 w-4 mr-1" />
                  Xóa
                </Button>
                <Button size="sm" variant="outline">
                  Xem báo cáo
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
