import axiosInstance from '@/lib/axios';
import { Movie, FilterOptions, PaginationMeta } from '@/types';



export class MovieService {
  static async getAll(filters?: FilterOptions) {
    const response = await axiosInstance.get<{
      data: Movie[]
      meta: PaginationMeta
    }>(`/movies`, { params: filters });
    return response;
  }

  static async getById(id: number) {
    const response = await axiosInstance.get<Movie>(`/movies/${id}`);
    return response.data;
  }

  static async create(data: Movie) {
    const response = await axiosInstance.post<Movie>(`/movies`, data);
    return response.data;
  }

  static async update(id: number, data: Movie) {
    const response = await axiosInstance.patch<Movie>(`/movies/${id}`, data);
    return response.data;
  }

  static async delete(id: number) {
    await axiosInstance.delete(`/movies/${id}`);
  }
} 