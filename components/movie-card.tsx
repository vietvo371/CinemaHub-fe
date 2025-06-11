import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Clock } from "lucide-react"

interface Movie {
  id: number
  title: string
  poster: string
  genre: string
  duration: number
  rating: number
  releaseDate: string
  description: string
}

interface MovieCardProps {
  movie: Movie
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative aspect-[2/3] overflow-hidden">
        <Image
          src={movie.poster || "/placeholder.svg"}
          alt={movie.title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2">
          <Badge variant="secondary" className="bg-black/70 text-white">
            <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
            {movie.rating}
          </Badge>
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{movie.title}</h3>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
          <span>{movie.genre}</span>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {movie.duration} phút
          </div>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">{movie.description}</p>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button asChild className="flex-1">
          <Link href={`/movies/${movie.id}`}>Chi Tiết</Link>
        </Button>
        <Button asChild variant="outline" className="flex-1">
          <Link href={`/booking/${movie.id}`}>Đặt Vé</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
