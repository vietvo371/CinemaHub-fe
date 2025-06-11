import Link from "next/link"
import { Film, Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Film className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">CinemaHub</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Hệ thống rạp chiếu phim hiện đại với công nghệ tiên tiến và dịch vụ tốt nhất.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Youtube className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Phim</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="/movies" className="hover:text-primary">
                  Phim Đang Chiếu
                </Link>
              </li>
              <li>
                <Link href="/movies/coming-soon" className="hover:text-primary">
                  Phim Sắp Chiếu
                </Link>
              </li>
              <li>
                <Link href="/movies/imax" className="hover:text-primary">
                  Phim IMAX
                </Link>
              </li>
              <li>
                <Link href="/movies/3d" className="hover:text-primary">
                  Phim 3D
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Dịch Vụ</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="/booking" className="hover:text-primary">
                  Đặt Vé Online
                </Link>
              </li>
              <li>
                <Link href="/membership" className="hover:text-primary">
                  Thành Viên
                </Link>
              </li>
              <li>
                <Link href="/gift-card" className="hover:text-primary">
                  Thẻ Quà Tặng
                </Link>
              </li>
              <li>
                <Link href="/group-booking" className="hover:text-primary">
                  Đặt Vé Nhóm
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Liên Hệ</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Hotline: 1900 1234</li>
              <li>Email: info@cinemahub.vn</li>
              <li>Địa chỉ: 123 Nguyễn Huệ, Q1, TP.HCM</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 CinemaHub. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
}
