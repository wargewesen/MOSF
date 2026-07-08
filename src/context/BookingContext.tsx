import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'

export interface Guest {
  name: string
  email: string
}

interface BookingState {
  date: Date
  timeSlot: string
  visitors: string
  guest: Guest
  bookingId: string
  setDate: (date: Date) => void
  setTimeSlot: (slot: string) => void
  setVisitors: (visitors: string) => void
}

const BookingContext = createContext<BookingState | null>(null)

/** Stable default so Confirmation renders even if reached directly. */
const DEFAULT_DATE = new Date(2026, 4, 9) // May 9, 2026 (Thursday), matches the design

export function BookingProvider({ children }: { children: ReactNode }) {
  const [date, setDate] = useState<Date>(DEFAULT_DATE)
  const [timeSlot, setTimeSlot] = useState('11:00 AM')
  const [visitors, setVisitors] = useState('1 Adult')

  const value = useMemo<BookingState>(
    () => ({
      date,
      timeSlot,
      visitors,
      guest: { name: 'Alyssa Jefferson', email: 'ajefferson@gmail.com' },
      bookingId: '093810\n390',
      setDate,
      setTimeSlot,
      setVisitors,
    }),
    [date, timeSlot, visitors],
  )

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
}

export function useBooking(): BookingState {
  const ctx = useContext(BookingContext)
  if (!ctx) throw new Error('useBooking must be used within a BookingProvider')
  return ctx
}
