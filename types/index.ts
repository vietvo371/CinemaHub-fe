export interface Movie {
  id: string
  title: string
  director?: string
  duration?: number
  releaseDate?: string
  posterUrl?: string
  createdAt: string
  updatedAt: string
  genres?: MovieGenre[]
  showtimes?: Showtime[]
}

export interface Showtime {
  id: string
  movieId: string
  roomId: string
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
  id: string
  theaterId: string
  name: string
  capacity?: number
  createdAt: string
  updatedAt: string
  theater?: Theater
  seats?: Seat[]
  showtimes?: Showtime[]
}

export interface Seat {
  id: string
  roomId: string
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
  id: string
  userId: string
  showtimeId: string
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
  id: string
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
  id: string
  name: string
  createdAt: string
  updatedAt: string
  movies?: MovieGenre[]
  preferences?: UserPreference[]
}

export interface MovieGenre {
  id: string
  movieId: string
  genreId: string
  createdAt: string
  updatedAt: string
  movie?: Movie
  genre?: Genre
}

export interface Theater {
  id: string
  name: string
  location?: string
  address?: string
  createdAt: string
  updatedAt: string
  rooms?: Room[]
}

export interface BookingSeat {
  id: string
  bookingId: string
  seatId: string
  price?: number
  createdAt: string
  updatedAt: string
  booking?: Booking
  seat?: Seat
}

export interface Payment {
  id: string
  bookingId: string
  amount: number
  paymentMethod?: string
  status: string
  transactionId?: string
  createdAt: string
  updatedAt: string
  booking?: Booking
}

export interface Promotion {
  id: string
  code: string
  discount?: number
  startDate?: string
  endDate?: string
  description?: string
  createdAt: string
  updatedAt: string
}

export interface NewsEvent {
  id: string
  title: string
  content?: string
  imageUrl?: string
  publishDate?: string
  createdAt: string
  updatedAt: string
}

export interface UserPreference {
  id: string
  userId: string
  genreId: string
  createdAt: string
  updatedAt: string
  user?: User
  genre?: Genre
}

export interface ChatSession {
  id: string
  userId: string
  adminId?: string
  startTime: string
  endTime?: string
  status: string
  createdAt: string
  updatedAt: string
  user?: User
  admin?: User
}

export interface FilterOptions {
  search?: string
  genre?: string
  status?: string
  sortBy?: string
  sortOrder?: "asc" | "desc"
  page?: number
  limit?: number
  startDate?: string
  endDate?: string
  theaterId?: string
  roomId?: string
  movieId?: string
  userId?: string
}
