export interface Movie {
  data : {
      id: string
      title: string
      director: string
      duration: number
      releaseDate: string
      posterUrl: string
      createdAt: string
      updatedAt: string
      genres: string[]
      slug_title: string
      trailer_ytb: string
      manufacturer: string
      description: string
      rate: number
      status: string
    },
    meta: PaginationMeta
}

export interface Showtime {
  id: number
  movieId: number
  roomId: number
  startTime: string
  endTime?: string
  price?: number
  createdAt: string
  updatedAt: string
  movie?: Movie
  room?: Room
  bookings?: Booking[]
}

export interface Room {
  id: number
  theaterId: number
  name: string
  capacity?: number
  createdAt: string
  updatedAt: string
  theater?: Theater
  seats?: Seat[]
  showtimes?: Showtime[]
}

export interface Seat {
  id: number
  roomId: number
  row: string
  number: number
  type?: string
  status: string
  createdAt: string
  updatedAt: string
  room?: Room
  bookings?: BookingSeat[]
}

export interface Booking {
  id: number
  userId: number
  showtimeId: number
  bookingTime: string
  status: string
  createdAt: string
  updatedAt: string
  user?: User
  showtime?: Showtime
  seats?: BookingSeat[]
  payment?: Payment
}

export interface User {
  id: number
  email: string
  fullName: string
  phone?: string
  address?: string
  role: 'ADMIN' | 'USER'
  status: string
  createdAt: string
  updatedAt: string
  bookings?: Booking[]
  preferences?: UserPreference[]
}

export interface Genre {
  id: number
  name: string
  createdAt: string
  updatedAt: string
  movies?: MovieGenre[]
  preferences?: UserPreference[]
}

export interface MovieGenre {
  id: number
  movieId: number
  genreId: number
  createdAt: string
  updatedAt: string
  movie?: Movie
  genre?: Genre
}

export interface Theater {
  id: number
  name: string
  location?: string
  address?: string
  createdAt: string
  updatedAt: string
  rooms?: Room[]
}

export interface BookingSeat {
  id: number
  bookingId: number
  seatId: number
  price?: number
  createdAt: string
  updatedAt: string
  booking?: Booking
  seat?: Seat
}

export interface Payment {
  id: number
  bookingId: number
  amount: number
  paymentMethod?: string
  status: string
  transactionId?: string
  createdAt: string
  updatedAt: string
  booking?: Booking
}

export interface Promotion {
  id: number
  code: string
  discount?: number
  startDate?: string
  endDate?: string
  description?: string
  createdAt: string
  updatedAt: string
}

export interface NewsEvent {
  id: number
  title: string
  content?: string
  imageUrl?: string
  publishDate?: string
  createdAt: string
  updatedAt: string
}

export interface UserPreference {
  id: number
  userId: number
  genreId: number
  createdAt: string
  updatedAt: string
  user?: User
  genre?: Genre
}

export interface ChatSession {
  id: number
  userId: number
  adminId?: number
  startTime: string
  endTime?: string
  status: string
  createdAt: string
  updatedAt: string
  user?: User
  admin?: User
}

export interface PaginationMeta {
  total: number
  page: number
  limit: number
  totalPages: number
}

export interface ApiResponse<T> {
  data: {
    data: T[]
    meta: PaginationMeta
  }
  statusCode: number
  message: string
  timestamp: string
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
