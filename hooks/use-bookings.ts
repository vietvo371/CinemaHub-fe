"use client"

import { useState, useEffect, useCallback } from "react"
import type { Booking, FilterOptions } from "@/types"
import { apiClient } from "@/lib/api"

export function useBookings(initialFilters?: FilterOptions) {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [filters, setFilters] = useState<FilterOptions>(initialFilters || {})

  const fetchBookings = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await apiClient.getBookings(filters)
      setBookings(response.data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }, [filters])

  useEffect(() => {
    fetchBookings()
  }, [fetchBookings])

  const updateFilters = useCallback((newFilters: Partial<FilterOptions>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }))
  }, [])

  const refetch = useCallback(() => {
    fetchBookings()
  }, [])

  const createBooking = useCallback(
    async (bookingData: Omit<Booking, "id" | "createdAt" | "updatedAt" | "bookingCode">) => {
      try {
        const response = await apiClient.createBooking(bookingData)
        await refetch()
        return response.data
      } catch (err) {
        throw err
      }
    },
    [refetch],
  )

  return {
    bookings,
    loading,
    error,
    filters,
    updateFilters,
    refetch,
    createBooking,
  }
}
