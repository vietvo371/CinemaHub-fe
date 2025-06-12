import axios from 'axios';
import { LoginDto, RegisterDto, AuthResponse, User } from '@/types/auth.types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

export class AuthService {
  static async login(data: LoginDto): Promise<AuthResponse> {
    const response = await axios.post<AuthResponse>(`${API_URL}/auth/login`, data);
    return response.data;
  }

  static async register(data: RegisterDto): Promise<AuthResponse> {
    const response = await axios.post<AuthResponse>(`${API_URL}/auth/register`, data);
    return response.data;
  }

  static async logout(): Promise<void> {
    await axios.post(`${API_URL}/auth/logout`);
  }

  static async getProfile(): Promise<User> {
    const response = await axios.get<User>(`${API_URL}/auth/profile`);
    return response.data;
  }

  static async refreshToken(): Promise<AuthResponse> {
    const response = await axios.post<AuthResponse>(`${API_URL}/auth/refresh`);
    return response.data;
  }
} 