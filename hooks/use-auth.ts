import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { AuthService } from '@/services/api/auth.service';
import { LoginDto, RegisterDto } from '@/types/auth.types';
import { USER_ROLES } from '@/lib/constants';
import { toast } from 'sonner';

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
      localStorage.setItem('refreshToken', response.data.refresh_token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      // Redirect dựa vào role
      toast.success('Đăng nhập thành công');
      if (response.data.user.role === USER_ROLES.ADMIN) {
        router.push('/admin');
      } else {
        router.push('/');
      }
    } catch (err: any) {
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
      toast.success('Đăng ký thành công');
      router.push('/auth/login');
    } catch (err: any) {
      throw err;
    } finally {
      setLoading(false);
    }
  }, [login]);

  const logout = useCallback(() => {
    AuthService.logout();
    toast.success('Đăng xuất thành công');
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