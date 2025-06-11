"use client"

import { Button } from "@/components/ui/button"
import { Play, Calendar } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10" />
      <Image src="/placeholder.svg?height=800&width=1200" alt="Featured Movie" fill className="object-cover" priority />

      <div className="relative z-20 text-center text-white px-4 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Trải Nghiệm Điện Ảnh
          <br />
          <span className="text-primary">Đỉnh Cao</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Khám phá những bộ phim mới nhất với chất lượng hình ảnh và âm thanh tuyệt vời
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-6">
            <Play className="mr-2 h-5 w-5" />
            Xem Trailer
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Đặt Vé Ngay
          </Button>
        </div>
      </div>
    </section>
  )
}
