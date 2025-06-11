import type { ApiResponse, Movie, Showtime, Booking, User, FilterOptions } from "@/types"

class ApiClient {
  private baseURL: string

  constructor(baseURL = "") {
    this.baseURL = baseURL
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
    const url = `${this.baseURL}${endpoint}`

    const config: RequestInit = {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    }

    try {
      const response = await fetch(url, config)

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      return data
    } catch (error) {
      console.error("API request failed:", error)
      throw error
    }
  }

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

    const endpoint = `/api/movies${params.toString() ? `?${params.toString()}` : ""}`
    return this.request<Movie[]>(endpoint)
  }

  async getMovie(id: number): Promise<ApiResponse<Movie>> {
    return this.request<Movie>(`/api/movies/${id}`)
  }

  async createMovie(movie: Omit<Movie, "id" | "createdAt" | "updatedAt">): Promise<ApiResponse<Movie>> {
    return this.request<Movie>("/api/movies", {
      method: "POST",
      body: JSON.stringify(movie),
    })
  }

  async updateMovie(id: number, movie: Partial<Movie>): Promise<ApiResponse<Movie>> {
    return this.request<Movie>(`/api/movies/${id}`, {
      method: "PUT",
      body: JSON.stringify(movie),
    })
  }

  async deleteMovie(id: number): Promise<ApiResponse<void>> {
    return this.request<void>(`/api/movies/${id}`, {
      method: "DELETE",
    })
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

    const endpoint = `/api/showtimes${params.toString() ? `?${params.toString()}` : ""}`
    return this.request<Showtime[]>(endpoint)
  }

  async getShowtime(id: number): Promise<ApiResponse<Showtime>> {
    return this.request<Showtime>(`/api/showtimes/${id}`)
  }

  async createShowtime(showtime: Omit<Showtime, "id" | "createdAt" | "updatedAt">): Promise<ApiResponse<Showtime>> {
    return this.request<Showtime>("/api/showtimes", {
      method: "POST",
      body: JSON.stringify(showtime),
    })
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

    const endpoint = `/api/bookings${params.toString() ? `?${params.toString()}` : ""}`
    return this.request<Booking[]>(endpoint)
  }

  async createBooking(
    booking: Omit<Booking, "id" | "createdAt" | "updatedAt" | "bookingCode">,
  ): Promise<ApiResponse<Booking>> {
    return this.request<Booking>("/api/bookings", {
      method: "POST",
      body: JSON.stringify(booking),
    })
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

    const endpoint = `/api/users${params.toString() ? `?${params.toString()}` : ""}`
    return this.request<User[]>(endpoint)
  }
}

export const apiClient = new ApiClient()
