"use client"

import { useState, useEffect, useCallback } from "react"
import type { Movie, FilterOptions } from "@/types"
import { apiClient } from "@/lib/api"

export function useMovies(initialFilters?: FilterOptions) {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [filters, setFilters] = useState<FilterOptions>(initialFilters || {})

  const fetchMovies = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await apiClient.getMovies(filters)
      setMovies(response.data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }, [filters])

  useEffect(() => {
    fetchMovies()
  }, [fetchMovies])

  const updateFilters = useCallback((newFilters: Partial<FilterOptions>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }))
  }, [])

  const refetch = useCallback(() => {
    fetchMovies()
  }, [fetchMovies])

  return {
    movies,
    loading,
    error,
    filters,
    updateFilters,
    refetch,
  }
}

export function useMovie(id: number) {
  const [movie, setMovie] = useState<Movie | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await apiClient.getMovie(id)
        setMovie(response.data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchMovie()
    }
  }, [id])

  return { movie, loading, error }
}
