export const API_ENDPOINTS = {
  MOVIES: "/api/movies",
  SHOWTIMES: "/api/showtimes",
  BOOKINGS: "/api/bookings",
  USERS: "/api/users",
  AUTH: "/api/auth",
  ROOMS: "/api/rooms",
} as const

export const MOVIE_GENRES = [
  { value: "action", label: "Hành Động" },
  { value: "comedy", label: "Hài" },
  { value: "drama", label: "Chính Kịch" },
  { value: "horror", label: "Kinh Dị" },
  { value: "animation", label: "Hoạt Hình" },
  { value: "romance", label: "Lãng Mạn" },
  { value: "thriller", label: "Ly Kỳ" },
  { value: "sci-fi", label: "Khoa Học Viễn Tưởng" },
] as const

export const SEAT_TYPES = {
  STANDARD: { value: "standard", label: "Thường", price: 80000 },
  VIP: { value: "vip", label: "VIP", price: 120000 },
  COUPLE: { value: "couple", label: "Couple", price: 150000 },
} as const

export const BOOKING_STATUS = {
  PENDING: { value: "pending", label: "Chờ xử lý", color: "yellow" },
  CONFIRMED: { value: "confirmed", label: "Đã xác nhận", color: "blue" },
  COMPLETED: { value: "completed", label: "Hoàn thành", color: "green" },
  CANCELLED: { value: "cancelled", label: "Đã hủy", color: "red" },
} as const

export const PAGINATION_DEFAULTS = {
  PAGE: 1,
  LIMIT: 10,
  MAX_LIMIT: 100,
} as const

export const ROUTES = {
  HOME: "/",
  MOVIES: "/movies",
  MOVIE_DETAIL: "/movies/[id]",
  BOOKING: "/booking/[id]",
  ADMIN: "/admin",
  ADMIN_MOVIES: "/admin/movies",
  ADMIN_SHOWTIMES: "/admin/showtimes",
  ADMIN_BOOKINGS: "/admin/bookings",
  ADMIN_USERS: "/admin/users",
} as const
