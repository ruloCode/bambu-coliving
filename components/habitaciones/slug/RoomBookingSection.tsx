"use client"

import { useEffect, useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import { differenceInCalendarDays, format, startOfToday } from "date-fns"
import { es } from "date-fns/locale"
import { ChevronDown, Clock } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import type { DateRange } from "react-day-picker"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  LONG_STAY_THRESHOLD_NIGHTS,
  MONTHLY_BILLING_NIGHTS,
  getStayTierDefinition,
  getTierForNights,
  type NightlyRates
} from "@/content"
import { useBookingStore } from "@/lib/booking-store"
import { cn } from "@/lib/utils"

interface RoomBookingSectionProps {
  roomSlug: string
  roomTitle: string
  roomImage: string
  roomSize: string
  nightlyRates: NightlyRates
  maxGuests: number
}

const HARD_GUEST_LIMIT = 2

const formatCop = (value: number) => `$${value.toLocaleString("es-CO")}`

const formatShortDate = (date: Date | undefined) =>
  date ? format(date, "d/M/yyyy", { locale: es }) : "Agregar"

export default function RoomBookingSection({
  roomSlug,
  roomTitle,
  roomImage,
  roomSize,
  nightlyRates,
  maxGuests
}: RoomBookingSectionProps) {
  const router = useRouter()
  const today = useMemo(() => startOfToday(), [])

  const [range, setRange] = useState<DateRange | undefined>()
  const [guests, setGuests] = useState(1)
  const [datesOpen, setDatesOpen] = useState(false)
  const [guestsOpen, setGuestsOpen] = useState(false)
  const [shake, setShake] = useState(0)
  const [showLimitMsg, setShowLimitMsg] = useState(false)

  const { selectRoom, setDates, setGuests: setStoreGuests } = useBookingStore()

  const guestCap = Math.min(HARD_GUEST_LIMIT, maxGuests || HARD_GUEST_LIMIT)

  const monthlyFromPrice = nightlyRates["361+"] * MONTHLY_BILLING_NIGHTS

  const breakdown = useMemo(() => {
    if (!range?.from || !range?.to) return null
    const nights = differenceInCalendarDays(range.to, range.from)
    if (nights < 1) return null
    const tier = getTierForNights(nights)
    const definition = getStayTierDefinition(tier)
    const nightlyRate = nightlyRates[tier]
    const subtotal = nightlyRate * nights
    const total = subtotal
    const monthlyEquivalent = nightlyRate * MONTHLY_BILLING_NIGHTS
    const isLongStay = nights >= LONG_STAY_THRESHOLD_NIGHTS
    return {
      nights,
      tierLabel: definition.label,
      nightlyRate,
      subtotal,
      total,
      monthlyEquivalent,
      isLongStay,
      displayAmount: isLongStay ? monthlyEquivalent : total
    }
  }, [range, nightlyRates])

  const canReserve = Boolean(range?.from && range?.to && breakdown)

  useEffect(() => {
    if (!showLimitMsg) return
    const t = setTimeout(() => setShowLimitMsg(false), 2500)
    return () => clearTimeout(t)
  }, [showLimitMsg])

  const handleAddGuest = () => {
    if (guests >= guestCap) {
      setShake((n) => n + 1)
      setShowLimitMsg(true)
      return
    }
    setGuests(guests + 1)
  }

  const handleRemoveGuest = () => {
    setGuests(Math.max(1, guests - 1))
  }

  const handleRangeChange = (next: DateRange | undefined) => {
    setRange(next)
    if (next?.from && next?.to) {
      setDatesOpen(false)
    }
  }

  const handleReserve = () => {
    if (!canReserve || !range?.from || !range?.to) return
    selectRoom({
      slug: roomSlug,
      title: roomTitle,
      image: roomImage,
      size: roomSize
    })
    setDates(range.from, range.to)
    setStoreGuests(guests)
    router.push("/reserva")
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-md sticky top-24 p-6">
      <div className="mb-4">
        {breakdown ? (
          <p>
            <span className="text-xl font-bold text-gray-900">
              {formatCop(breakdown.displayAmount)} COP
            </span>{" "}
            <span className="text-sm text-gray-600">
              {breakdown.isLongStay ? "/ mes" : `por ${breakdown.nights} ${breakdown.nights === 1 ? "noche" : "noches"}`}
            </span>
          </p>
        ) : (
          <p>
            <span className="text-xl font-bold text-gray-900">
              {formatCop(monthlyFromPrice)} COP
            </span>{" "}
            <span className="text-sm text-gray-600">/ mes desde</span>
          </p>
        )}
      </div>

      <div className="rounded-xl border border-gray-300 overflow-hidden mb-3">
        <Popover open={datesOpen} onOpenChange={setDatesOpen}>
          <div className="grid grid-cols-2 divide-x divide-gray-300 border-b border-gray-300">
            <PopoverTrigger asChild>
              <button
                type="button"
                className={cn(
                  "px-3 py-2 text-left transition-colors hover:bg-gray-50 focus:outline-none focus:bg-gray-50",
                  datesOpen && "bg-gray-50"
                )}
              >
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-700">Llegada</p>
                <p className={cn("text-sm mt-0.5", range?.from ? "text-gray-900" : "text-gray-400")}>
                  {formatShortDate(range?.from)}
                </p>
              </button>
            </PopoverTrigger>
            <PopoverTrigger asChild>
              <button
                type="button"
                className={cn(
                  "px-3 py-2 text-left transition-colors hover:bg-gray-50 focus:outline-none focus:bg-gray-50",
                  datesOpen && "bg-gray-50"
                )}
              >
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-700">Salida</p>
                <p className={cn("text-sm mt-0.5", range?.to ? "text-gray-900" : "text-gray-400")}>
                  {formatShortDate(range?.to)}
                </p>
              </button>
            </PopoverTrigger>
          </div>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="range"
              selected={range}
              onSelect={handleRangeChange}
              numberOfMonths={1}
              locale={es}
              disabled={{ before: today }}
              defaultMonth={range?.from ?? today}
            />
          </PopoverContent>
        </Popover>

        <Popover open={guestsOpen} onOpenChange={setGuestsOpen}>
          <PopoverTrigger asChild>
            <button
              type="button"
              className={cn(
                "w-full px-3 py-2 flex items-center justify-between text-left transition-colors hover:bg-gray-50 focus:outline-none focus:bg-gray-50",
                guestsOpen && "bg-gray-50"
              )}
            >
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-700">Huéspedes</p>
                <p className="text-sm mt-0.5 text-gray-900">
                  {guests} {guests === 1 ? "huésped" : "huéspedes"}
                </p>
              </div>
              <ChevronDown
                className={cn(
                  "h-4 w-4 text-gray-500 transition-transform",
                  guestsOpen && "rotate-180"
                )}
              />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-72 p-4" align="end">
            <motion.div
              key={shake}
              animate={shake > 0 ? { x: [0, -8, 8, -6, 6, -3, 3, 0] } : {}}
              transition={{ duration: 0.4 }}
              className="flex items-center justify-between gap-3"
            >
              <div>
                <p className="font-medium text-gray-900">Adultos</p>
                <p className="text-xs text-gray-500">Máximo {guestCap} por habitación</p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  type="button"
                  onClick={handleRemoveGuest}
                  disabled={guests <= 1}
                  className="rounded-full h-8 w-8"
                >
                  -
                </Button>
                <span className="w-6 text-center font-medium tabular-nums">{guests}</span>
                <Button
                  variant="outline"
                  size="icon"
                  type="button"
                  onClick={handleAddGuest}
                  className="rounded-full h-8 w-8"
                >
                  +
                </Button>
              </div>
            </motion.div>
            <AnimatePresence>
              {showLimitMsg && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="text-xs text-red-600 mt-3 font-medium"
                >
                  Máximo {guestCap} personas por habitación.
                </motion.p>
              )}
            </AnimatePresence>
          </PopoverContent>
        </Popover>
      </div>

      <Button
        className="w-full bg-teal-600 hover:bg-teal-700 text-white py-6 text-base font-semibold"
        onClick={handleReserve}
        disabled={!canReserve}
      >
        {canReserve ? "Reservar" : "Selecciona las fechas"}
      </Button>

      <p className="text-xs text-gray-500 text-center mt-3">
        No se realizará ningún cargo hasta confirmar la reserva
      </p>

      {breakdown && !breakdown.isLongStay && (
        <div className="mt-4 pt-4 border-t border-gray-200 space-y-2 text-sm">
          <div className="flex justify-between text-gray-700">
            <span className="underline">
              {formatCop(breakdown.nightlyRate)} × {breakdown.nights} {breakdown.nights === 1 ? "noche" : "noches"}
            </span>
            <span>{formatCop(breakdown.subtotal)}</span>
          </div>
          <div className="flex justify-between font-bold pt-2 border-t border-gray-200">
            <span>Total</span>
            <span>{formatCop(breakdown.total)} COP</span>
          </div>
        </div>
      )}

      {breakdown?.isLongStay && (
        <p className="mt-3 text-xs text-gray-500 text-center">
          Estadía de {breakdown.nights} noches facturada como pago mensual.
        </p>
      )}

      <div className="mt-5 pt-4 border-t border-gray-200">
        <div className="flex items-center gap-2 mb-2">
          <Clock className="h-4 w-4 text-teal-600" />
          <span className="text-xs font-semibold text-gray-700">Horarios</span>
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
          <div>
            <span className="block text-gray-500">Check-in</span>
            <span className="font-medium text-gray-800">3:00 PM</span>
          </div>
          <div>
            <span className="block text-gray-500">Check-out</span>
            <span className="font-medium text-gray-800">11:00 AM</span>
          </div>
        </div>
      </div>
    </div>
  )
}
