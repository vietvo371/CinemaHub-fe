"use client"

import { useState, useEffect, useCallback } from "react"
import type { Movie, FilterOptions, ApiResponse } from "@/types"
import { MovieService } from "@/services/api/movies.service"



export const useMovies = (filters: FilterOptions) => {

  const [data, setData] = useState<Movie[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchMovies()
  }, [filters])

  const fetchMovies = async () => {
    try {
      const response = await MovieService.getAll(filters)
      setData(response.data.data)
      setLoading(false)
      return response.data
    } catch (error) {
      setError(error instanceof Error ? error.message : "An error occurred")
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }

  return {
    data,
    loading,
    error,
    fetchMovies
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
        const response = await MovieService.getById(id)
        // setMovie(response.data.data || null)
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
