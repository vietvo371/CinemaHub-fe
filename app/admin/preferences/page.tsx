import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Heart, TrendingUp, Users, Film } from "lucide-react"

export default function PreferencesPage() {
  const genrePreferences = [
    { genre: "Hành động", percentage: 35, users: 1250, color: "bg-blue-500" },
    { genre: "Tình cảm", percentage: 28, users: 980, color: "bg-pink-500" },
    { genre: "Hài kịch", percentage: 22, users: 770, color: "bg-yellow-500" },
    { genre: "Kinh dị", percentage: 15, users: 525, color: "bg-red-500" },
    { genre: "Khoa học viễn tưởng", percentage: 18, users: 630, color: "bg-purple-500" },
  ]

  const ageGroups = [
    { age: "18-25", percentage: 40, users: 1400 },
    { age: "26-35", percentage: 35, users: 1225 },
    { age: "36-45", percentage: 15, users: 525 },
    { age: "46+", percentage: 10, users: 350 },
  ]

  const timePreferences = [
    { time: "Buổi sáng (9:00-12:00)", percentage: 15, bookings: 450 },
    { time: "Buổi chiều (12:00-18:00)", percentage: 35, bookings: 1050 },
    { time: "Buổi tối (18:00-22:00)", percentage: 45, bookings: 1350 },
    { time: "Đêm muộn (22:00+)", percentage: 5, bookings: 150 },
  ]

  const topMovies = [
    { title: "Avengers: Endgame", likes: 1250, rating: 4.8 },
    { title: "Spider-Man: No Way Home", likes: 980, rating: 4.6 },
    { title: "Top Gun: Maverick", likes: 756, rating: 4.5 },
    { title: "Black Panther", likes: 654, rating: 4.4 },
    { title: "Doctor Strange", likes: 543, rating: 4.3 },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Sở Thích Người Dùng</h1>
        <p className="text-gray-600">Phân tích sở thích và hành vi của khách hàng</p>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tổng người dùng</CardTitle>
            <Users className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,500</div>
            <p className="text-xs text-green-600">+12% so với tháng trước</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Lượt thích</CardTitle>
            <Heart className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4,183</div>
            <p className="text-xs text-green-600">+8% so với tháng trước</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Đánh giá TB</CardTitle>
            <TrendingUp className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.5</div>
            <p className="text-xs text-green-600">+0.2 so với tháng trước</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Phim yêu thích</CardTitle>
            <Film className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-green-600">+5 phim mới</p>
          </CardContent>
        </Card>
      </div>

      {/* Genre Preferences */}
      <Card>
        <CardHeader>
          <CardTitle>Sở thích thể loại phim</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {genrePreferences.map((item) => (
              <div key={item.genre} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{item.genre}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">{item.users} người dùng</span>
                    <Badge variant="outline">{item.percentage}%</Badge>
                  </div>
                </div>
                <Progress value={item.percentage} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Age Groups */}
        <Card>
          <CardHeader>
            <CardTitle>Phân bố độ tuổi</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {ageGroups.map((group) => (
                <div key={group.age} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{group.age} tuổi</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">{group.users} người</span>
                      <Badge variant="outline">{group.percentage}%</Badge>
                    </div>
                  </div>
                  <Progress value={group.percentage} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Time Preferences */}
        <Card>
          <CardHeader>
            <CardTitle>Thời gian xem phim ưa thích</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {timePreferences.map((time) => (
                <div key={time.time} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-sm">{time.time}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">{time.bookings} vé</span>
                      <Badge variant="outline">{time.percentage}%</Badge>
                    </div>
                  </div>
                  <Progress value={time.percentage} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Liked Movies */}
      <Card>
        <CardHeader>
          <CardTitle>Phim được yêu thích nhất</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topMovies.map((movie, index) => (
              <div key={movie.title} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-medium text-blue-600">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium">{movie.title}</p>
                    <p className="text-sm text-gray-500">Đánh giá: {movie.rating}/5.0</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-red-500" />
                  <span className="font-medium">{movie.likes}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
