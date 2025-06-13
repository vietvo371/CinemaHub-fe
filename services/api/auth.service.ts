import { LoginDto, RegisterDto, AuthResponse, RegisterResponse } from '@/types/auth.types';
import axiosInstance  from '@/lib/axios';

export const AuthService = {
  async login(data: LoginDto): Promise<AuthResponse> {
    try {
      const response = await axiosInstance.post<AuthResponse>('/auth/login', data);
      return response.data;
    } catch (error: any) {
      if (error.response?.data) {
        throw error;
      }
      throw new Error('Không thể kết nối đến server');
    }
  },

  async register(data: RegisterDto): Promise<RegisterResponse> {
    try {
      const response = await axiosInstance.post<RegisterResponse>('/auth/register', data);
      return response.data;
    } catch (error: any) {
      if (error.response?.data) {
        throw error;
      }
      throw new Error('Không thể kết nối đến server');
    }
  },

  async refreshToken(): Promise<AuthResponse> {
    try {
      const refreshToken = localStorage.getItem('refreshToken');
      const response = await axiosInstance.post<AuthResponse>('/auth/refresh', {
        refreshToken,
      });
      return response.data;
    } catch (error: any) {
      if (error.response?.data) {
        throw error;
      }
      throw new Error('Không thể kết nối đến server');
    }
  },

  logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  },
}; 