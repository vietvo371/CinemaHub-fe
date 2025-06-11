"use client"

import type React from "react"
import { createContext, useContext, useReducer, type ReactNode } from "react"
import type { Movie, Showtime, Seat, Booking } from "@/types"

interface CinemaState {
  selectedMovie: Movie | null
  selectedShowtime: Showtime | null
  selectedSeats: Seat[]
  bookingData: Partial<Booking> | null
  user: any | null
}

type CinemaAction =
  | { type: "SET_SELECTED_MOVIE"; payload: Movie | null }
  | { type: "SET_SELECTED_SHOWTIME"; payload: Showtime | null }
  | { type: "SET_SELECTED_SEATS"; payload: Seat[] }
  | { type: "ADD_SEAT"; payload: Seat }
  | { type: "REMOVE_SEAT"; payload: string }
  | { type: "CLEAR_SEATS" }
  | { type: "SET_BOOKING_DATA"; payload: Partial<Booking> }
  | { type: "SET_USER"; payload: any }
  | { type: "RESET_BOOKING" }

const initialState: CinemaState = {
  selectedMovie: null,
  selectedShowtime: null,
  selectedSeats: [],
  bookingData: null,
  user: null,
}

function cinemaReducer(state: CinemaState, action: CinemaAction): CinemaState {
  switch (action.type) {
    case "SET_SELECTED_MOVIE":
      return { ...state, selectedMovie: action.payload }

    case "SET_SELECTED_SHOWTIME":
      return { ...state, selectedShowtime: action.payload }

    case "SET_SELECTED_SEATS":
      return { ...state, selectedSeats: action.payload }

    case "ADD_SEAT":
      return {
        ...state,
        selectedSeats: [...state.selectedSeats, action.payload],
      }

    case "REMOVE_SEAT":
      return {
        ...state,
        selectedSeats: state.selectedSeats.filter((seat) => seat.id !== action.payload),
      }

    case "CLEAR_SEATS":
      return { ...state, selectedSeats: [] }

    case "SET_BOOKING_DATA":
      return { ...state, bookingData: action.payload }

    case "SET_USER":
      return { ...state, user: action.payload }

    case "RESET_BOOKING":
      return {
        ...state,
        selectedMovie: null,
        selectedShowtime: null,
        selectedSeats: [],
        bookingData: null,
      }

    default:
      return state
  }
}

const CinemaContext = createContext<{
  state: CinemaState
  dispatch: React.Dispatch<CinemaAction>
} | null>(null)

export function CinemaProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cinemaReducer, initialState)

  return <CinemaContext.Provider value={{ state, dispatch }}>{children}</CinemaContext.Provider>
}

export function useCinema() {
  const context = useContext(CinemaContext)
  if (!context) {
    throw new Error("useCinema must be used within a CinemaProvider")
  }
  return context
}

// Custom hooks for specific actions
export function useCinemaActions() {
  const { dispatch } = useCinema()

  const setSelectedMovie = (movie: Movie | null) => {
    dispatch({ type: "SET_SELECTED_MOVIE", payload: movie })
  }

  const setSelectedShowtime = (showtime: Showtime | null) => {
    dispatch({ type: "SET_SELECTED_SHOWTIME", payload: showtime })
  }

  const setSelectedSeats = (seats: Seat[]) => {
    dispatch({ type: "SET_SELECTED_SEATS", payload: seats })
  }

  const addSeat = (seat: Seat) => {
    dispatch({ type: "ADD_SEAT", payload: seat })
  }

  const removeSeat = (seatId: string) => {
    dispatch({ type: "REMOVE_SEAT", payload: seatId })
  }

  const clearSeats = () => {
    dispatch({ type: "CLEAR_SEATS" })
  }

  const setBookingData = (data: Partial<Booking>) => {
    dispatch({ type: "SET_BOOKING_DATA", payload: data })
  }

  const resetBooking = () => {
    dispatch({ type: "RESET_BOOKING" })
  }

  return {
    setSelectedMovie,
    setSelectedShowtime,
    setSelectedSeats,
    addSeat,
    removeSeat,
    clearSeats,
    setBookingData,
    resetBooking,
  }
}
