"use client"

import { useEffect, useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import { differenceInCalendarDays, format, startOfToday } from "date-fns"
import { es } from "date-fns/locale"
import { Clock, Users } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import type { DateRange } from "react-day-picker"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import {
  LONG_STAY_THRESHOLD_NIGHTS,
  MONTHLY_BILLING_NIGHTS,
  getStayTierDefinition,
  getTierForNights,
  type NightlyRates
} from "@/content"
import { useBookingStore } from "@/lib/booking-store"
import { useIsMobile } from "@/hooks/use-mobile"

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

const formatRangeLabel = (range: DateRange | undefined) => {
  if (!range?.from) return null
  if (!range.to) return format(range.from, "d 'de' MMM yyyy", { locale: es })
  return `${format(range.from, "d MMM", { locale: es })} - ${format(range.to, "d MMM yyyy", { locale: es })}`
}

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
  const isMobile = useIsMobile()

  const [range, setRange] = useState<DateRange | undefined>()
  const [guests, setGuests] = useState(1)
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
    <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
      <h2 className="text-xl font-bold mb-2">Reserva ahora</h2>
      <p className="text-sm text-gray-600 mb-4">
        Desde{" "}
        <span className="font-semibold text-gray-900">{formatCop(monthlyFromPrice)}</span>{" "}
        / mes
      </p>

      <div className="space-y-4">
        <div>
          <Label className="mb-2 block">Fechas (check-in / check-out)</Label>
          <div className="rounded-lg border bg-white p-2 flex justify-center overflow-x-auto">
            <Calendar
              mode="range"
              selected={range}
              onSelect={setRange}
              numberOfMonths={isMobile ? 1 : 2}
              locale={es}
              disabled={{ before: today }}
              defaultMonth={range?.from ?? today}
            />
          </div>
          {!range?.from && (
            <p className="text-xs text-gray-500 mt-2">
              Selecciona la fecha de llegada y salida para ver el precio.
            </p>
          )}
          {range?.from && !range?.to && (
            <p className="text-xs text-gray-500 mt-2">
              Llegada: <span className="font-medium">{formatRangeLabel(range)}</span>. Selecciona la fecha de salida.
            </p>
          )}
          {breakdown && (
            <p className="text-xs text-teal-600 mt-2 font-medium">
              {formatRangeLabel(range)} · {breakdown.nights} {breakdown.nights === 1 ? "noche" : "noches"}
            </p>
          )}
        </div>

        <div className="bg-white border rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="h-4 w-4 text-teal-600" />
            <span className="text-sm font-medium">Horarios</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <span className="text-gray-500">Check-in:</span>
              <p className="font-medium">3:00 PM</p>
            </div>
            <div>
              <span className="text-gray-500">Check-out:</span>
              <p className="font-medium">11:00 AM</p>
            </div>
          </div>
        </div>

        <div>
          <Label>Huéspedes</Label>
          <motion.div
            key={shake}
            animate={shake > 0 ? { x: [0, -8, 8, -6, 6, -3, 3, 0] } : {}}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 mt-1"
          >
            <Button
              variant="outline"
              size="icon"
              type="button"
              onClick={handleRemoveGuest}
              disabled={guests <= 1}
            >
              -
            </Button>
            <div className="flex-1 text-center py-2 border rounded-md bg-white">
              <Users className="h-4 w-4 inline mr-2" />
              {guests} {guests === 1 ? "huésped" : "huéspedes"}
            </div>
            <Button
              variant="outline"
              size="icon"
              type="button"
              onClick={handleAddGuest}
            >
              +
            </Button>
          </motion.div>
          <AnimatePresence>
            {showLimitMsg && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="text-xs text-red-600 mt-2 font-medium text-center"
              >
                Máximo 2 personas por habitación
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {breakdown && (
          <div className="border-t pt-4 mt-4 space-y-2">
            <div className="flex justify-between font-bold text-lg">
              <span>{breakdown.isLongStay ? "Pago mensual" : "Total"}</span>
              <span>
                {formatCop(breakdown.displayAmount)}
                <span className="text-sm font-normal text-gray-500">
                  {breakdown.isLongStay ? " COP/mes" : " COP"}
                </span>
              </span>
            </div>
            {breakdown.isLongStay && (
              <p className="text-xs text-gray-500">
                Estadía de {breakdown.nights} noches facturada como pago mensual.
              </p>
            )}
          </div>
        )}

        <Button
          className="w-full bg-teal-600 hover:bg-teal-700 text-white py-6 text-lg"
          onClick={handleReserve}
          disabled={!canReserve}
        >
          Reservar ahora
        </Button>

        <p className="text-xs text-gray-500 text-center">
          No se realizará ningún cargo hasta confirmar la reserva
        </p>
      </div>
    </div>
  )
}
