import { Suspense } from "react"
import { MovieGrid } from "@/components/movie-grid"
import { HeroSection } from "@/components/hero-section"
import { Header } from "@/components/client/Header"
import { Footer } from "@/components/client/Footer"
import { LoadingSpinner } from "@/components/ui/loading-spinner"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Phim Đang Chiếu</h2>
            <Suspense fallback={<LoadingSpinner />}>
              <MovieGrid />
            </Suspense>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
