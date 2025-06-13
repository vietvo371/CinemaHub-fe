import { useState } from 'react';
import { useAuth } from '@/hooks/use-auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { validateEmail } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import GoogleIcon from '@/components/icon/google.png';
import FacebookIcon from '@/components/icon/FacebookIcon.png';
import Image from 'next/image';

export function LoginForm() {
  const router = useRouter();
  const { login, loading, error } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [formErrors, setFormErrors] = useState<{
    email?: string;
    password?: string;
  }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    const errors: typeof formErrors = {};
    if (!formData.email) {
      errors.email = 'Email là bắt buộc';
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Email không hợp lệ';
    }
    if (!formData.password) {
      errors.password = 'Mật khẩu là bắt buộc';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      await login(formData);
    } catch (err: any) {
      // Xử lý lỗi validation từ API
      if (err.response?.data?.errors) {
        const apiErrors = err.response.data.errors;
        // Cập nhật formErrors với lỗi từ API
        const newErrors: typeof formErrors = {};
        
        // Xử lý lỗi email
        if (apiErrors.email && Array.isArray(apiErrors.email)) {
          newErrors.email = apiErrors.email[0];
        }
        
        // Xử lý lỗi password
        if (apiErrors.password && Array.isArray(apiErrors.password)) {
          newErrors.password = apiErrors.password[0];
        }

        setFormErrors(newErrors);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-8 rounded-lg border p-6 shadow-lg">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Đăng nhập</h1>
          <p className="mt-2 text-sm text-gray-600">
            Vui lòng đăng nhập để tiếp tục
          </p>
        </div>
        {/* Chỉ hiển thị Alert cho các lỗi không liên quan đến validation */}
        {error && typeof error === 'string' && !formErrors.email && !formErrors.password && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={loading}
              />
              {formErrors.email && (
                <p className="text-sm text-red-500 mt-2">{formErrors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Mật khẩu</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                disabled={loading}
              />
              {formErrors.password && (
                <p className="text-sm text-red-500 mt-2">{formErrors.password}</p>
              )}
            </div>
          </div>
          {loading ? (
            <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90">
              Đang đăng nhập...
            </Button>
          ) : (
            <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90">
              Đăng nhập
            </Button>
          )}
          <div className="text-center text-sm text-gray-600">hoặc đăng nhập bằng</div>
          <div className="flex justify-center gap-2">
            <Button variant="outline" className="w-full">
              <Image src={GoogleIcon} alt="Google" width={20} height={20} />
              Đăng nhập với Google
            </Button>
            <Button variant="outline" className="w-full">
              <Image src={FacebookIcon} alt="Facebook" width={20} height={20} />
              Đăng nhập với Facebook
            </Button>
          </div>
          <p className="text-center text-sm text-gray-600">
            Bạn chưa có tài khoản?{" "}
            <button
              type="button"
              onClick={() => router.push("/auth/register")}
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Đăng ký ngay
            </button>
          </p>
        </form>
      </div>
    </div>
  );
} 