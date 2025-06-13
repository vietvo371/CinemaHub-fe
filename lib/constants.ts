export const API_ENDPOINTS = {
  MOVIES: "/movies",
  SHOWTIMES: "/showtimes",
  BOOKINGS: "/bookings",
  USERS: "/users",
  AUTH: "/auth",
  ROOMS: "/rooms",
  THEATERS: "/theaters",
  SEATS: "/seats",
  PAYMENTS: "/payments",
  PROMOTIONS: "/promotions",
  NEWS: "/news",
  CHAT: "/chat",
} as const

export const USER_ROLES = {
  ADMIN: "ADMIN",
  USER: "USER",
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

export const PAYMENT_STATUS = {
  PENDING: { value: "pending", label: "Chờ thanh toán", color: "yellow" },
  PAID: { value: "paid", label: "Đã thanh toán", color: "green" },
  FAILED: { value: "failed", label: "Thanh toán thất bại", color: "red" },
  REFUNDED: { value: "refunded", label: "Đã hoàn tiền", color: "blue" },
} as const

export const PAYMENT_METHODS = {
  CASH: { value: "cash", label: "Tiền mặt" },
  CARD: { value: "card", label: "Thẻ tín dụng" },
  TRANSFER: { value: "transfer", label: "Chuyển khoản" },
  MOMO: { value: "momo", label: "Ví MoMo" },
  VNPAY: { value: "vnpay", label: "VNPay" },
} as const

export const SEAT_STATUS = {
  AVAILABLE: { value: "available", label: "Còn trống", color: "green" },
  BOOKED: { value: "booked", label: "Đã đặt", color: "red" },
  MAINTENANCE: { value: "maintenance", label: "Bảo trì", color: "yellow" },
} as const

export const CHAT_STATUS = {
  OPEN: { value: "open", label: "Đang mở", color: "green" },
  CLOSED: { value: "closed", label: "Đã đóng", color: "red" },
  PENDING: { value: "pending", label: "Đang chờ", color: "yellow" },
} as const

export const PAGINATION_DEFAULTS = {
  PAGE: 1,
  LIMIT: 10,
  MAX_LIMIT: 100,
  SORT_BY: 'createdAt',
  SORT_ORDER: 'DESC',
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
  ADMIN_THEATERS: "/admin/theaters",
  ADMIN_ROOMS: "/admin/rooms",
  ADMIN_PAYMENTS: "/admin/payments",
  ADMIN_PROMOTIONS: "/admin/promotions",
  ADMIN_NEWS: "/admin/news",
  ADMIN_CHAT: "/admin/chat",
} as const
