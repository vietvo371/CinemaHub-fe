"use client"

import { memo } from "react"
import { useMovies } from "@/hooks/use-movies"
import { MovieCard } from "@/components/movie-card"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { ErrorMessage } from "@/components/ui/error-message"

export const MovieGrid = memo(function MovieGrid() {
  const { movies, loading, error, refetch } = useMovies({
    status: "showing",
    limit: 8,
  })

  if (loading) {
    return <LoadingSpinner />
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={refetch} />
  }

  if (movies.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Không có phim nào đang chiếu.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
})
