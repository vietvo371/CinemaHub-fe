import axios from 'axios';
import { Showtime, CreateShowtimeDto, UpdateShowtimeDto } from '@/types/showtime.types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

export class ShowtimeService {
  static async getAll() {
    const response = await axios.get<Showtime[]>(`${API_URL}/showtimes`);
    return response.data;
  }

  static async getById(id: string) {
    const response = await axios.get<Showtime>(`${API_URL}/showtimes/${id}`);
    return response.data;
  }

  static async create(data: CreateShowtimeDto) {
    const response = await axios.post<Showtime>(`${API_URL}/showtimes`, data);
    return response.data;
  }

  static async update(id: string, data: UpdateShowtimeDto) {
    const response = await axios.patch<Showtime>(`${API_URL}/showtimes/${id}`, data);
    return response.data;
  }

  static async delete(id: string) {
    await axios.delete(`${API_URL}/showtimes/${id}`);
  }

  static async getByMovie(movieId: string) {
    const response = await axios.get<Showtime[]>(`${API_URL}/movies/${movieId}/showtimes`);
    return response.data;
  }

  static async getAvailableSeats(showtimeId: string) {
    const response = await axios.get<string[]>(`${API_URL}/showtimes/${showtimeId}/seats`);
    return response.data;
  }
} 