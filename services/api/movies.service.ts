import axios from 'axios';
import { Movie, CreateMovieDto, UpdateMovieDto } from '@/types/movie.types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

export class MovieService {
  static async getAll() {
    const response = await axios.get<Movie[]>(`${API_URL}/movies`);
    return response.data;
  }

  static async getById(id: string) {
    const response = await axios.get<Movie>(`${API_URL}/movies/${id}`);
    return response.data;
  }

  static async create(data: CreateMovieDto) {
    const response = await axios.post<Movie>(`${API_URL}/movies`, data);
    return response.data;
  }

  static async update(id: string, data: UpdateMovieDto) {
    const response = await axios.patch<Movie>(`${API_URL}/movies/${id}`, data);
    return response.data;
  }

  static async delete(id: string) {
    await axios.delete(`${API_URL}/movies/${id}`);
  }
} 