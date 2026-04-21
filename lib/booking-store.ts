import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type BookingDuration = '1' | '3' | '6' | '12'

export interface BookingData {
  roomSlug: string
  roomTitle: string
  roomImage: string
  roomSize: string
  basePrice: string
  selectedDuration: BookingDuration
  finalPrice: string
  checkInDate: Date | null
  guests: number
  guestInfo: {
    firstName: string
    lastName: string
    email: string
    phone: string
    nationality: string
    occupation: string
    emergencyContact: {
      name: string
      phone: string
      relationship: string
    }
  }
  specialRequests: string
  agreedToTerms: boolean
  agreedToManual: boolean
}

interface BookingStore {
  bookingData: BookingData
  updateRoomSelection: (roomData: {
    roomSlug: string
    roomTitle: string
    roomImage: string
    roomSize: string
    basePrice: string
    selectedDuration: BookingDuration
    finalPrice: string
  }) => void
  updateBookingDates: (checkInDate: Date | null, guests: number) => void
  updateGuestInfo: (guestInfo: Partial<BookingData['guestInfo']>) => void
  updateSpecialRequests: (requests: string) => void
  setAgreedToTerms: (agreed: boolean) => void
  setAgreedToManual: (agreed: boolean) => void
  clearBooking: () => void
  isBookingValid: () => boolean
}

const initialBookingData: BookingData = {
  roomSlug: '',
  roomTitle: '',
  roomImage: '',
  roomSize: '',
  basePrice: '',
  selectedDuration: '1',
  finalPrice: '',
  checkInDate: null,
  guests: 1,
  guestInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    nationality: '',
    occupation: '',
    emergencyContact: {
      name: '',
      phone: '',
      relationship: ''
    }
  },
  specialRequests: '',
  agreedToTerms: false,
  agreedToManual: false
}

export const useBookingStore = create<BookingStore>()(
  persist(
    (set, get) => ({
      bookingData: initialBookingData,

      updateRoomSelection: (roomData) =>
        set((state) => ({
          bookingData: {
            ...state.bookingData,
            ...roomData
          }
        })),

      updateBookingDates: (checkInDate, guests) =>
        set((state) => ({
          bookingData: {
            ...state.bookingData,
            checkInDate,
            guests
          }
        })),

      updateGuestInfo: (guestInfo) =>
        set((state) => ({
          bookingData: {
            ...state.bookingData,
            guestInfo: {
              ...state.bookingData.guestInfo,
              ...guestInfo,
              emergencyContact: {
                ...state.bookingData.guestInfo.emergencyContact,
                ...(guestInfo.emergencyContact || {})
              }
            }
          }
        })),

      updateSpecialRequests: (requests) =>
        set((state) => ({
          bookingData: {
            ...state.bookingData,
            specialRequests: requests
          }
        })),

      setAgreedToTerms: (agreed) =>
        set((state) => ({
          bookingData: {
            ...state.bookingData,
            agreedToTerms: agreed
          }
        })),

      setAgreedToManual: (agreed) =>
        set((state) => ({
          bookingData: {
            ...state.bookingData,
            agreedToManual: agreed
          }
        })),

      clearBooking: () =>
        set({ bookingData: initialBookingData }),

      isBookingValid: () => {
        const { bookingData } = get()
        return (
          bookingData.roomSlug !== '' &&
          bookingData.checkInDate !== null &&
          bookingData.guestInfo.firstName !== '' &&
          bookingData.guestInfo.lastName !== '' &&
          bookingData.guestInfo.email !== '' &&
          bookingData.guestInfo.phone !== '' &&
          bookingData.agreedToTerms &&
          bookingData.agreedToManual
        )
      }
    }),
    {
      name: 'bambu-booking-storage',
      partialize: (state) => ({ bookingData: state.bookingData })
    }
  )
)
