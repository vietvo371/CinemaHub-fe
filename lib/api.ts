import type { 
  Movie, Showtime, Booking, User, FilterOptions, 
  Theater, Room, Seat, Payment, Promotion, NewsEvent,
  ChatSession, Genre, MovieGenre, UserPreference 
} from "@/types"
import type { ApiResponse } from "./api-response"
import axiosInstance from "./axios"

class ApiClient {
  // Movies API
  async getMovies(filters?: FilterOptions): Promise<ApiResponse<Movie[]>> {
    const params = new URLSearchParams()
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          params.append(key, value.toString())
        }
      })
    }

    const response = await axiosInstance.get<ApiResponse<Movie[]>>(`/movies${params.toString() ? `?${params.toString()}` : ""}`)
    return response.data
  }

  async getMovie(id: string): Promise<ApiResponse<Movie>> {
    const response = await axiosInstance.get<ApiResponse<Movie>>(`/movies/${id}`)
    return response.data
  }

  async createMovie(movie: Omit<Movie, "id" | "createdAt" | "updatedAt">): Promise<ApiResponse<Movie>> {
    const response = await axiosInstance.post<ApiResponse<Movie>>("/movies", movie)
    return response.data
  }

  async updateMovie(id: string, movie: Partial<Movie>): Promise<ApiResponse<Movie>> {
    const response = await axiosInstance.patch<ApiResponse<Movie>>(`/movies/${id}`, movie)
    return response.data
  }

  async deleteMovie(id: string): Promise<ApiResponse<void>> {
    const response = await axiosInstance.delete<ApiResponse<void>>(`/movies/${id}`)
    return response.data
  }

  // Showtimes API
  async getShowtimes(filters?: FilterOptions): Promise<ApiResponse<Showtime[]>> {
    const params = new URLSearchParams()
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          params.append(key, value.toString())
        }
      })
    }

    const response = await axiosInstance.get<ApiResponse<Showtime[]>>(`/showtimes${params.toString() ? `?${params.toString()}` : ""}`)
    return response.data
  }

  async getShowtime(id: string): Promise<ApiResponse<Showtime>> {
    const response = await axiosInstance.get<ApiResponse<Showtime>>(`/showtimes/${id}`)
    return response.data
  }

  async createShowtime(showtime: Omit<Showtime, "id" | "createdAt" | "updatedAt">): Promise<ApiResponse<Showtime>> {
    const response = await axiosInstance.post<ApiResponse<Showtime>>("/showtimes", showtime)
    return response.data
  }

  // Bookings API
  async getBookings(filters?: FilterOptions): Promise<ApiResponse<Booking[]>> {
    const params = new URLSearchParams()
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          params.append(key, value.toString())
        }
      })
    }

    const response = await axiosInstance.get<ApiResponse<Booking[]>>(`/bookings${params.toString() ? `?${params.toString()}` : ""}`)
    return response.data
  }

  async createBooking(
    booking: Omit<Booking, "id" | "createdAt" | "updatedAt">,
  ): Promise<ApiResponse<Booking>> {
    const response = await axiosInstance.post<ApiResponse<Booking>>("/bookings", booking)
    return response.data
  }

  // Users API
  async getUsers(filters?: FilterOptions): Promise<ApiResponse<User[]>> {
    const params = new URLSearchParams()
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          params.append(key, value.toString())
        }
      })
    }

    const response = await axiosInstance.get<ApiResponse<User[]>>(`/users${params.toString() ? `?${params.toString()}` : ""}`)
    return response.data
  }

  // Theaters API
  async getTheaters(filters?: FilterOptions): Promise<ApiResponse<Theater[]>> {
    const params = new URLSearchParams()
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          params.append(key, value.toString())
        }
      })
    }

    const response = await axiosInstance.get<ApiResponse<Theater[]>>(`/theaters${params.toString() ? `?${params.toString()}` : ""}`)
    return response.data
  }

  // Rooms API
  async getRooms(filters?: FilterOptions): Promise<ApiResponse<Room[]>> {
    const params = new URLSearchParams()
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          params.append(key, value.toString())
        }
      })
    }

    const response = await axiosInstance.get<ApiResponse<Room[]>>(`/rooms${params.toString() ? `?${params.toString()}` : ""}`)
    return response.data
  }

  // Seats API
  async getSeats(filters?: FilterOptions): Promise<ApiResponse<Seat[]>> {
    const params = new URLSearchParams()
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          params.append(key, value.toString())
        }
      })
    }

    const response = await axiosInstance.get<ApiResponse<Seat[]>>(`/seats${params.toString() ? `?${params.toString()}` : ""}`)
    return response.data
  }

  // Payments API
  async getPayments(filters?: FilterOptions): Promise<ApiResponse<Payment[]>> {
    const params = new URLSearchParams()
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          params.append(key, value.toString())
        }
      })
    }

    const response = await axiosInstance.get<ApiResponse<Payment[]>>(`/payments${params.toString() ? `?${params.toString()}` : ""}`)
    return response.data
  }

  // Promotions API
  async getPromotions(filters?: FilterOptions): Promise<ApiResponse<Promotion[]>> {
    const params = new URLSearchParams()
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          params.append(key, value.toString())
        }
      })
    }

    const response = await axiosInstance.get<ApiResponse<Promotion[]>>(`/promotions${params.toString() ? `?${params.toString()}` : ""}`)
    return response.data
  }

  // News API
  async getNews(filters?: FilterOptions): Promise<ApiResponse<NewsEvent[]>> {
    const params = new URLSearchParams()
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          params.append(key, value.toString())
        }
      })
    }

    const response = await axiosInstance.get<ApiResponse<NewsEvent[]>>(`/news${params.toString() ? `?${params.toString()}` : ""}`)
    return response.data
  }

  // Chat API
  async getChatSessions(filters?: FilterOptions): Promise<ApiResponse<ChatSession[]>> {
    const params = new URLSearchParams()
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          params.append(key, value.toString())
        }
      })
    }

    const response = await axiosInstance.get<ApiResponse<ChatSession[]>>(`/chat${params.toString() ? `?${params.toString()}` : ""}`)
    return response.data
  }
}

export const apiClient = new ApiClient()
