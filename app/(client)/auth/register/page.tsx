"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import GoogleIcon from "@/components/icon/google.png"
import FacebookIcon from "@/components/icon/FacebookIcon.png"
import Image from "next/image"

export default function LoginPage() {
    const router = useRouter()
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        fullName: "",
        phoneNumber: ""
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        // TODO: Implement login logic here
        console.log("Login attempt with:", formData)
    }

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
                            <Label htmlFor="fullName">Họ và tên</Label>
                            <Input
                                id="fullName"
                                type="text"
                                placeholder="Nguyen Van A"
                                value={formData.fullName}
                                onChange={(e) =>
                                    setFormData({ ...formData, fullName: e.target.value })
                                }
                                required
                            />
                        </div>
                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="your@email.com"
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({ ...formData, email: e.target.value })
                                }
                                required
                            />
                        </div>

                        <div>
                            <Label htmlFor="password">Mật khẩu</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={(e) =>
                                    setFormData({ ...formData, password: e.target.value })
                                }
                                required
                            />
                        </div>
                        <div>
                            <Label htmlFor="confirmPassword">Xác nhận mật khẩu</Label>
                            <Input
                                id="confirmPassword"
                                type="password"
                                placeholder="••••••••"
                                value={formData.confirmPassword}
                                onChange={(e) =>
                                    setFormData({ ...formData, confirmPassword: e.target.value })
                                }
                                required
                            />
                        </div>

                    </div>

                    <Button type="submit" className="w-full">
                        Đăng ký
                    </Button>
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
    )
} 