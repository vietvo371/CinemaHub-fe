import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Film, Users, Ticket, TrendingUp, DollarSign } from "lucide-react"

export default function AdminDashboard() {
  const stats = [
    {
      title: "Tổng Phim",
      value: "156",
      change: "+12%",
      icon: Film,
      color: "text-blue-600",
    },
    {
      title: "Người Dùng",
      value: "2,847",
      change: "+18%",
      icon: Users,
      color: "text-green-600",
    },
    {
      title: "Vé Đã Bán",
      value: "1,234",
      change: "+8%",
      icon: Ticket,
      color: "text-purple-600",
    },
    {
      title: "Doanh Thu",
      value: "₫45,678,000",
      change: "+23%",
      icon: DollarSign,
      color: "text-orange-600",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Tổng Quan</h1>
        <p className="text-gray-600">Chào mừng bạn đến với bảng điều khiển quản lý rạp chiếu phim</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-green-600 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  {stat.change} so với tháng trước
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Charts and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Doanh Thu Theo Tháng</CardTitle>
            <CardDescription>Biểu đồ doanh thu 6 tháng gần nhất</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center text-gray-500">
              [Biểu đồ doanh thu sẽ được hiển thị ở đây]
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Phim Phổ Biến</CardTitle>
            <CardDescription>Top 5 phim có lượt xem cao nhất</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Avengers: Endgame", views: "1,234", revenue: "₫12,340,000" },
                { name: "Spider-Man: No Way Home", views: "987", revenue: "₫9,870,000" },
                { name: "Top Gun: Maverick", views: "756", revenue: "₫7,560,000" },
                { name: "Black Panther", views: "654", revenue: "₫6,540,000" },
                { name: "Doctor Strange", views: "543", revenue: "₫5,430,000" },
              ].map((movie, index) => (
                <div key={movie.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-medium text-blue-600">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium">{movie.name}</p>
                      <p className="text-sm text-gray-500">{movie.views} lượt xem</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{movie.revenue}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activities */}
      <Card>
        <CardHeader>
          <CardTitle>Hoạt Động Gần Đây</CardTitle>
          <CardDescription>Các hoạt động mới nhất trong hệ thống</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                action: "Thêm phim mới",
                detail: '"Fast & Furious 10" đã được thêm vào hệ thống',
                time: "2 phút trước",
              },
              { action: "Cập nhật lịch chiếu", detail: "Lịch chiếu tuần tới đã được cập nhật", time: "15 phút trước" },
              { action: "Người dùng mới", detail: "Nguyễn Văn A đã đăng ký tài khoản", time: "1 giờ trước" },
              { action: "Đặt vé thành công", detail: "25 vé đã được đặt cho suất chiếu 19:00", time: "2 giờ trước" },
            ].map((activity, index) => (
              <div key={index} className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-0">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="font-medium">{activity.action}</p>
                  <p className="text-sm text-gray-600">{activity.detail}</p>
                  <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
