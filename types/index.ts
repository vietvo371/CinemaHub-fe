export interface Movie {
  id: number
  title: string
  poster: string
  genre: string
  duration: number
  rating: number
  releaseDate: string
  description: string
  director: string
  cast: string[]
  trailer: string
  status: "showing" | "coming-soon" | "ended"
  createdAt: string
  updatedAt: string
}

export interface Showtime {
  id: number
  movieId: number
  movie?: Movie
  roomId: number
  room?: Room
  date: string
  time: string
  price: number
  status: "open" | "closed" | "sold-out"
  availableSeats: number
  totalSeats: number
  createdAt: string
  updatedAt: string
}

export interface Room {
  id: number
  name: string
  capacity: number
  type: "standard" | "vip" | "imax"
  status: "active" | "maintenance"
  seats: Seat[]
}

export interface Seat {
  id: string
  row: string
  number: number
  type: "standard" | "vip" | "couple"
  price: number
  isBooked: boolean
  isSelected?: boolean
}

export interface Booking {
  id: number
  userId: number
  user?: User
  showtimeId: number
  showtime?: Showtime
  seats: string[]
  totalAmount: number
  status: "pending" | "confirmed" | "cancelled" | "completed"
  paymentMethod?: string
  paymentStatus: "pending" | "paid" | "failed" | "refunded"
  bookingCode: string
  createdAt: string
  updatedAt: string
}

export interface User {
  id: number
  name: string
  email: string
  phone?: string
  role: "admin" | "staff" | "customer"
  status: "active" | "inactive" | "banned"
  createdAt: string
  updatedAt: string
}

export interface ApiResponse<T> {
  data: T
  message: string
  success: boolean
  pagination?: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export interface ApiError {
  message: string
  code: string
  details?: any
}

export interface FilterOptions {
  search?: string
  genre?: string
  status?: string
  sortBy?: string
  sortOrder?: "asc" | "desc"
  page?: number
  limit?: number
}
