import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface BookingData {
  roomSlug: string
  roomTitle: string
  roomImage: string
  roomSize: string
  basePrice: string
  selectedDuration: '1' | '2' | '3' // months
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
}

interface BookingStore {
  bookingData: BookingData
  updateRoomSelection: (roomData: {
    roomSlug: string
    roomTitle: string
    roomImage: string
    roomSize: string
    basePrice: string
    selectedDuration: '1' | '2' | '3'
    finalPrice: string
  }) => void
  updateBookingDates: (checkInDate: Date | null, guests: number) => void
  updateGuestInfo: (guestInfo: Partial<BookingData['guestInfo']>) => void
  updateSpecialRequests: (requests: string) => void
  toggleTermsAgreement: () => void
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
  agreedToTerms: false
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
      
      toggleTermsAgreement: () =>
        set((state) => ({
          bookingData: {
            ...state.bookingData,
            agreedToTerms: !state.bookingData.agreedToTerms
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
          bookingData.agreedToTerms
        )
      }
    }),
    {
      name: 'bambu-booking-storage',
      partialize: (state) => ({ bookingData: state.bookingData })
    }
  )
) 