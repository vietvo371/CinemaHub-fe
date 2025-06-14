import { useState } from 'react';
import { useAuth } from '@/hooks/use-auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { validateEmail } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import GoogleIcon from '@/components/icon/google.png';
import FacebookIcon from '@/components/icon/FacebookIcon.png';
import Image from 'next/image';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { toast } from 'sonner';

export function RegisterForm() {
  const router = useRouter();
  const { register, loading } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    phone: '',
    address: '',
    confirmPassword: '',
  });
  const [formErrors, setFormErrors] = useState<{
    email?: string;
    password?: string;
    fullName?: string;
    phone?: string;
    address?: string;
    confirmPassword?: string;
  }>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors: typeof formErrors = {};
    if (!formData.email) {
      errors.email = 'Email là bắt buộc';
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Email không hợp lệ';
    }
    if (!formData.password) {
      errors.password = 'Mật khẩu là bắt buộc';
    }
    if (!formData.fullName) {
      errors.fullName = 'Tên là bắt buộc';
    }
    if (!formData.phone) {
      errors.phone = 'Số điện thoại là bắt buộc';
    }
    if (!formData.confirmPassword) {
      errors.confirmPassword = 'Xác nhận mật khẩu là bắt buộc';
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Mật khẩu không khớp';
    }
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      await register({
        email: formData.email,
        password: formData.password,
        fullName: formData.fullName,
        phone: formData.phone,
        address: formData.address,
        confirmPassword: formData.confirmPassword,
      });
    } catch (err: any) {
      if (err.response?.data?.errors) {
        const apiErrors = err.response.data.errors;
        const newErrors: typeof formErrors = {};
        
        if (apiErrors.email && Array.isArray(apiErrors.email)) {
          newErrors.email = apiErrors.email[0];
        }
        
        if (apiErrors.password && Array.isArray(apiErrors.password)) {
          newErrors.password = apiErrors.password[0];
        }
        if (apiErrors.fullName && Array.isArray(apiErrors.fullName)) {
          newErrors.fullName = apiErrors.fullName[0];
        }
        if (apiErrors.phone && Array.isArray(apiErrors.phone)) {
          newErrors.phone = apiErrors.phone[0];
        }
        if (apiErrors.address && Array.isArray(apiErrors.address)) {
          newErrors.address = apiErrors.address[0];
        }

        setFormErrors(newErrors);
      } else {
        toast.error(err.response?.data?.message || 'Đăng ký thất bại');
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
          <h1 className="text-2xl font-bold">Đăng ký</h1>
          <p className="mt-2 text-sm text-gray-600">
            Vui lòng đăng ký để tiếp tục
          </p>
        </div>
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

            <div className="space-y-2 relative">
              <Label htmlFor="password">Mật khẩu</Label>
              <Input 
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className='mt-2'
                required
                disabled={loading}
              />
              {showPassword ? (
                <EyeIcon onClick={() => setShowPassword(!showPassword)} className="absolute right-2 top-1/2 transform -translate-y-2 text-gray-500 cursor-pointer" />
              ) : (
                <EyeOffIcon onClick={() => setShowPassword(!showPassword)} className="absolute  right-2 top-1/2 transform -translate-y-2 text-gray-500 cursor-pointer" />
              )}
              {formErrors.password && (
                <p className="text-sm text-red-500 mt-2">{formErrors.password}</p>
              )}
            </div>
            <div className="space-y-2 relative ">
              <Label htmlFor="confirmPassword">Xác nhận mật khẩu</Label>
              <Input 
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className='mt-2'
                required
                disabled={loading}
              />
              {showConfirmPassword ? (
                <EyeIcon onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-2 top-1/2 transform -translate-y-2 text-gray-500 cursor-pointer" />
              ) : (
                <EyeOffIcon onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-2 top-1/2 transform -translate-y-2 text-gray-500 cursor-pointer" />
              )}
              {formErrors.confirmPassword && (
                <p className="text-sm text-red-500 mt-2">{formErrors.confirmPassword}</p>
              )}
            </div>
            <div>
              <Label htmlFor="fullName">Họ và tên</Label>
              <Input
                id="fullName"
                name="fullName"
                placeholder="Nhập họ và tên của bạn"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="mt-2"
                disabled={loading}
              />
              {formErrors.fullName && (
                <p className="text-sm text-red-500 mt-2">{formErrors.fullName}</p>
              )}
            </div>
            <div>
              <Label htmlFor="phone">Số điện thoại</Label>
              <Input
                id="phone"
                name="phone"
                placeholder="Nhập số điện thoại của bạn"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-2"
                disabled={loading}
              />
              {formErrors.phone && (
                <p className="text-sm text-red-500 mt-2">{formErrors.phone}</p>
              )}
            </div>
          </div>
          {loading ? (
            <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90">
              Đang đăng ký...
            </Button>
          ) : (
            <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90">
              Đăng ký
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
            Bạn đã có tài khoản?{" "}
            <button
              type="button"
              onClick={() => router.push("/auth/login")}
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Đăng nhập ngay
            </button>
          </p>
        </form>
      </div>
    </div>
  );
} 