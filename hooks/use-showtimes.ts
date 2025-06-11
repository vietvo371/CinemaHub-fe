"use client"

import { useState, useEffect, useCallback } from "react"
import type { Showtime, FilterOptions } from "@/types"
import { apiClient } from "@/lib/api"

export function useShowtimes(initialFilters?: FilterOptions) {
  const [showtimes, setShowtimes] = useState<Showtime[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [filters, setFilters] = useState<FilterOptions>(initialFilters || {})

  const fetchShowtimes = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await apiClient.getShowtimes(filters)
      setShowtimes(response.data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }, [filters])

  useEffect(() => {
    fetchShowtimes()
  }, [fetchShowtimes])

  const updateFilters = useCallback((newFilters: Partial<FilterOptions>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }))
  }, [])

  const refetch = useCallback(() => {
    fetchShowtimes()
  }, [])

  return {
    showtimes,
    loading,
    error,
    filters,
    updateFilters,
    refetch,
  }
}
