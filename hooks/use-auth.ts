import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { AuthService } from '@/services/api/auth.service';
import { LoginDto, RegisterDto } from '@/types/auth.types';
import { USER_ROLES } from '@/lib/constants';

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const login = useCallback(async (data: LoginDto) => {
    try {
      setLoading(true);
      setError(null);
      const response = await AuthService.login(data);
      
      // Lưu token
      localStorage.setItem('accessToken', response.data.access_token);
      
      // Redirect dựa vào role
      if (response.data.user.role === USER_ROLES.ADMIN) {
        router.push('/admin');
      } else {
        router.push('/');
      }
    } catch (err: any) {
      // Chỉ set error cho các lỗi không phải validation
      if (!err.response?.data?.errors) {
        setError(err.response?.data?.message || 'Đăng nhập thất bại');
      }
      throw err; // Throw error để component có thể xử lý validation errors
    } finally {
      setLoading(false);
    }
  }, [router]);

  const register = useCallback(async (data: RegisterDto) => {
    try {
      setLoading(true);
      setError(null);
      const response = await AuthService.register(data);
      
      // Tự động đăng nhập sau khi đăng ký
      await login({
        email: data.email,
        password: data.password,
      });
    } catch (err: any) {
      // Xử lý lỗi validation từ API
      if (err.response?.data?.errors && Array.isArray(err.response.data.errors)) {
        setError(err.response.data.errors[0]); // Lấy thông báo lỗi đầu tiên
      } else {
        // Xử lý các loại lỗi khác
        setError(err.response?.data?.message || 'Đăng ký thất bại');
      }
    } finally {
      setLoading(false);
    }
  }, [login]);

  const logout = useCallback(() => {
    AuthService.logout();
    router.push('/auth/login');
  }, [router]);

  return {
    login,
    register,
    logout,
    loading,
    error,
  };
}