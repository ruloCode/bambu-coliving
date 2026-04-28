import { create } from "zustand"
import { persist } from "zustand/middleware"
import { differenceInCalendarDays } from "date-fns"
import {
  LONG_STAY_THRESHOLD_NIGHTS,
  MONTHLY_BILLING_NIGHTS,
  getExtraGuestRate,
  getStayTierDefinition,
  getTierForNights,
  roomDetails,
  type StayTier
} from "@/content"

export type PriceDisplayMode = "total" | "monthly"

export interface GuestInfo {
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

export interface BookingData {
  roomSlug: string
  roomTitle: string
  roomImage: string
  roomSize: string
  checkInDate: Date | null
  checkOutDate: Date | null
  nights: number
  guests: number
  stayTier: StayTier | null
  nightlyRate: number
  tierLabel: string
  extraGuestRate: number
  surchargePerNight: number
  subtotal: number
  surchargeAmount: number
  total: number
  monthlyEquivalent: number
  displayMode: PriceDisplayMode
  displayAmount: number
  guestInfo: GuestInfo
  specialRequests: string
  agreedToTerms: boolean
  agreedToManual: boolean
}

interface BookingStore {
  bookingData: BookingData
  selectRoom: (room: { slug: string; title: string; image: string; size: string }) => void
  setDates: (checkIn: Date | null, checkOutDate: Date | null) => void
  setGuests: (guests: number) => void
  updateGuestInfo: (info: Partial<GuestInfo>) => void
  updateSpecialRequests: (requests: string) => void
  setAgreedToTerms: (agreed: boolean) => void
  setAgreedToManual: (agreed: boolean) => void
  clearBooking: () => void
  isBookingValid: () => boolean
}

const initialBookingData: BookingData = {
  roomSlug: "",
  roomTitle: "",
  roomImage: "",
  roomSize: "",
  checkInDate: null,
  checkOutDate: null,
  nights: 0,
  guests: 1,
  stayTier: null,
  nightlyRate: 0,
  tierLabel: "",
  extraGuestRate: 0,
  surchargePerNight: 0,
  subtotal: 0,
  surchargeAmount: 0,
  total: 0,
  monthlyEquivalent: 0,
  displayMode: "total",
  displayAmount: 0,
  guestInfo: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    nationality: "",
    occupation: "",
    emergencyContact: {
      name: "",
      phone: "",
      relationship: ""
    }
  },
  specialRequests: "",
  agreedToTerms: false,
  agreedToManual: false
}

interface Breakdown {
  nights: number
  stayTier: StayTier | null
  nightlyRate: number
  tierLabel: string
  extraGuestRate: number
  surchargePerNight: number
  subtotal: number
  surchargeAmount: number
  total: number
  monthlyEquivalent: number
  displayMode: PriceDisplayMode
  displayAmount: number
}

const EMPTY_BREAKDOWN: Breakdown = {
  nights: 0,
  stayTier: null,
  nightlyRate: 0,
  tierLabel: "",
  extraGuestRate: 0,
  surchargePerNight: 0,
  subtotal: 0,
  surchargeAmount: 0,
  total: 0,
  monthlyEquivalent: 0,
  displayMode: "total",
  displayAmount: 0
}

function computeBreakdown(input: {
  slug: string
  checkIn: Date | null
  checkOut: Date | null
  guests: number
}): Breakdown {
  const room = input.slug ? roomDetails[input.slug] : undefined
  if (!room || !input.checkIn || !input.checkOut) return EMPTY_BREAKDOWN

  const nights = differenceInCalendarDays(input.checkOut, input.checkIn)
  if (nights < 1) return EMPTY_BREAKDOWN

  const tier = getTierForNights(nights)
  const tierLabel = getStayTierDefinition(tier).label
  const nightlyRate = room.nightlyRates[tier]
  const extraGuestRate = getExtraGuestRate(tier)
  const extraGuests = Math.max(0, input.guests - 1)
  const surchargePerNight = extraGuestRate * extraGuests

  const subtotal = nightlyRate * nights
  const surchargeAmount = surchargePerNight * nights
  const total = subtotal + surchargeAmount
  const monthlyEquivalent = (nightlyRate + surchargePerNight) * MONTHLY_BILLING_NIGHTS

  const isLongStay = nights >= LONG_STAY_THRESHOLD_NIGHTS
  const displayMode: PriceDisplayMode = isLongStay ? "monthly" : "total"
  const displayAmount = isLongStay ? monthlyEquivalent : total

  return {
    nights,
    stayTier: tier,
    tierLabel,
    nightlyRate,
    extraGuestRate,
    surchargePerNight,
    subtotal,
    surchargeAmount,
    total,
    monthlyEquivalent,
    displayMode,
    displayAmount
  }
}

function recompute(data: BookingData): BookingData {
  const breakdown = computeBreakdown({
    slug: data.roomSlug,
    checkIn: data.checkInDate,
    checkOut: data.checkOutDate,
    guests: data.guests
  })
  return { ...data, ...breakdown }
}

export const useBookingStore = create<BookingStore>()(
  persist(
    (set, get) => ({
      bookingData: initialBookingData,

      selectRoom: (room) =>
        set((state) => ({
          bookingData: recompute({
            ...state.bookingData,
            roomSlug: room.slug,
            roomTitle: room.title,
            roomImage: room.image,
            roomSize: room.size
          })
        })),

      setDates: (checkInDate, checkOutDate) =>
        set((state) => ({
          bookingData: recompute({
            ...state.bookingData,
            checkInDate,
            checkOutDate
          })
        })),

      setGuests: (guests) =>
        set((state) => ({
          bookingData: recompute({
            ...state.bookingData,
            guests: Math.max(1, guests)
          })
        })),

      updateGuestInfo: (info) =>
        set((state) => ({
          bookingData: {
            ...state.bookingData,
            guestInfo: {
              ...state.bookingData.guestInfo,
              ...info,
              emergencyContact: {
                ...state.bookingData.guestInfo.emergencyContact,
                ...(info.emergencyContact || {})
              }
            }
          }
        })),

      updateSpecialRequests: (requests) =>
        set((state) => ({
          bookingData: { ...state.bookingData, specialRequests: requests }
        })),

      setAgreedToTerms: (agreed) =>
        set((state) => ({
          bookingData: { ...state.bookingData, agreedToTerms: agreed }
        })),

      setAgreedToManual: (agreed) =>
        set((state) => ({
          bookingData: { ...state.bookingData, agreedToManual: agreed }
        })),

      clearBooking: () => set({ bookingData: initialBookingData }),

      isBookingValid: () => {
        const { bookingData } = get()
        return (
          bookingData.roomSlug !== "" &&
          bookingData.checkInDate !== null &&
          bookingData.checkOutDate !== null &&
          bookingData.nights >= 1 &&
          bookingData.guestInfo.firstName !== "" &&
          bookingData.guestInfo.lastName !== "" &&
          bookingData.guestInfo.email !== "" &&
          bookingData.guestInfo.phone !== "" &&
          bookingData.agreedToTerms &&
          bookingData.agreedToManual
        )
      }
    }),
    {
      // v2: per-night tiered pricing schema. Bumped from the legacy monthly model.
      name: "bambu-booking-storage-v2",
      partialize: (state) => ({ bookingData: state.bookingData }),
      // Dates are serialized to ISO strings; revive them on rehydration and
      // recompute the price breakdown so derived fields stay consistent.
      merge: (persistedState, currentState) => {
        const persisted = persistedState as { bookingData?: Partial<BookingData> } | undefined
        if (!persisted?.bookingData) return currentState

        const reviveDate = (value: unknown): Date | null => {
          if (value instanceof Date) return value
          if (typeof value === "string" && value.length > 0) {
            const parsed = new Date(value)
            return Number.isNaN(parsed.getTime()) ? null : parsed
          }
          return null
        }

        return {
          ...currentState,
          bookingData: recompute({
            ...currentState.bookingData,
            ...persisted.bookingData,
            checkInDate: reviveDate(persisted.bookingData.checkInDate),
            checkOutDate: reviveDate(persisted.bookingData.checkOutDate)
          } as BookingData)
        }
      }
    }
  )
)
