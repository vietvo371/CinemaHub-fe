export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER'
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface RegisterDto {
  email: string;
  password: string;
  fullName: string;
  phone: string;
  address: string;
  confirmPassword: string;
}

export interface AuthResponse {
  data: {
    access_token: string;
    refresh_token: string;
    user: {
      id: string;
      email: string;
      fullName: string;
      role: string;
    };
  };
  statusCode: number;
  message: string;
  timestamp: string;
}

export interface RegisterResponse {
  data: {
    id: string;
    email: string;
    fullName: string;
    phone: string;
    address: string;
    role: string;
    status: string;
    refreshToken: string | null;
    isActive: boolean | null;
    hashActive: string | null;
    hashForget: string | null;
    createdAt: string;
    updatedAt: string;
  }
  statusCode: number;
  message: string;
  timestamp: string;
}

export interface TokenPayload {
  sub: string;
  email: string;
  role: UserRole;
  iat: number;
  exp: number;
} 