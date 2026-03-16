"use client"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Users, Clock } from "lucide-react"
import { format, differenceInDays, addDays, addMonths } from "date-fns"
import { es } from "date-fns/locale"
import { useState, useEffect } from "react"
import { useBookingStore } from "@/lib/booking-store"
import { useRouter } from "next/navigation"

interface RoomBookingSectionProps {
  roomSlug: string
  roomTitle: string
  roomImage: string
  roomSize: string
  selectedPeriod: string
  selectedPrice: string
  maxGuests: number
  prices: {
    "1d": string
    "3d": string
    "7d": string
    "15d": string
    "1m": string
    "3m": string
    "6m": string
    "12m": string
  }
}

const periodLabels: Record<string, string> = {
  "1d": "1 Día",
  "3d": "3 Días",
  "7d": "7 Días",
  "15d": "15 Días",
  "1m": "1 Mes",
  "3m": "3 Meses",
  "6m": "6 Meses",
  "12m": "12 Meses"
}

const periodMultipliers: Record<string, number> = {
  "1d": 1,
  "3d": 3,
  "7d": 7,
  "15d": 15,
  "1m": 1,
  "3m": 3,
  "6m": 6,
  "12m": 12
}

const periodDiscounts: Record<string, string> = {
  "3d": "2.5%",
  "7d": "3%",
  "15d": "5%",
  "1m": "10%",
  "3m": "15%",
  "6m": "20%",
  "12m": "30%"
}

const isDailyPeriod = (period: string) => period.endsWith("d")

export default function RoomBookingSection({
  roomSlug,
  roomTitle,
  roomImage,
  roomSize,
  selectedPeriod,
  selectedPrice,
  maxGuests,
  prices
}: RoomBookingSectionProps) {
  const [checkIn, setCheckIn] = useState<Date>()
  const [checkOut, setCheckOut] = useState<Date>()
  const [guests, setGuests] = useState(1)
  const router = useRouter()

  const { updateRoomSelection, updateBookingDates } = useBookingStore()

  // Actualizar checkout al cambiar periodo o check-in
  useEffect(() => {
    if (!checkIn) return
    const multiplier = periodMultipliers[selectedPeriod] || 1
    if (isDailyPeriod(selectedPeriod)) {
      setCheckOut(addDays(checkIn, multiplier))
    } else {
      setCheckOut(addMonths(checkIn, multiplier))
    }
  }, [selectedPeriod, checkIn])

  // Calcular días de estadía
  const stayDays = checkIn && checkOut ? differenceInDays(checkOut, checkIn) : 0

  const priceNum = Number.parseInt(selectedPrice.replace(/\./g, ""))
  const isDaily = isDailyPeriod(selectedPeriod)

  // Para periodos diarios el precio es total del periodo, calcular tarifa por día
  // Para periodos mensuales el precio es por mes, calcular tarifa por día (mes = 30 días)
  const dailyRate = isDaily
    ? priceNum / (periodMultipliers[selectedPeriod] || 1)
    : priceNum / 30

  // Recargo del 5% por huésped adicional (más de 1)
  const extraGuestSurcharge = guests > 1 ? (guests - 1) * 0.05 : 0

  // Calcular total
  const subtotal = Math.round(dailyRate * stayDays)
  const surchargeAmount = Math.round(subtotal * extraGuestSurcharge)

  // Depósito de seguridad (10% del precio mensual base)
  const monthlyBase = Number.parseInt(prices["1m"].replace(/\./g, ""))
  const securityDepositNum = Math.round(monthlyBase * 0.1)

  const total = subtotal + surchargeAmount + securityDepositNum

  const handleBookingReservation = () => {
    updateRoomSelection({
      roomSlug,
      roomTitle,
      roomImage,
      roomSize,
      basePrice: selectedPrice,
      selectedDuration: selectedPeriod as any,
      finalPrice: selectedPrice
    })

    updateBookingDates(checkIn || null, guests)
    router.push('/reserva')
  }

  return (
    <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
      <h2 className="text-xl font-bold mb-4">Reserva ahora</h2>

      {/* Resumen del precio seleccionado */}
      <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mb-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Plan seleccionado:</span>
          <span className="font-bold text-teal-700">{periodLabels[selectedPeriod] || selectedPeriod}</span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-gray-600">{isDaily ? "Precio total:" : "Precio/mes:"}</span>
          <span className="font-bold text-lg">${selectedPrice} <span className="text-sm font-normal text-gray-500">COP</span></span>
        </div>
        {periodDiscounts[selectedPeriod] && (
          <div className="flex justify-between items-center mt-2">
            <span className="text-gray-600">Descuento por estadía:</span>
            <span className="font-semibold text-teal-600">-{periodDiscounts[selectedPeriod]}</span>
          </div>
        )}
      </div>

      <div className="space-y-4">
        {/* Fecha de llegada */}
        <div>
          <Label htmlFor="check-in">Fecha de llegada (Check-in)</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full mt-1 justify-start">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {checkIn ? format(checkIn, "PPP", { locale: es }) : <span>Selecciona una fecha</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={checkIn}
                onSelect={setCheckIn}
                initialFocus
                locale={es}
                disabled={(date) => date < new Date()}
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Fecha de salida */}
        <div>
          <Label>Fecha de salida (Check-out)</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full mt-1 justify-start">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {checkOut ? format(checkOut, "PPP", { locale: es }) : <span>Selecciona una fecha</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={checkOut}
                onSelect={setCheckOut}
                initialFocus
                locale={es}
                disabled={(date) => date <= (checkIn || new Date())}
              />
            </PopoverContent>
          </Popover>
          {stayDays > 0 && (
            <p className="text-xs text-teal-600 mt-1 font-medium">
              Estadía: {stayDays} {stayDays === 1 ? "día" : "días"}
            </p>
          )}
        </div>

        {/* Horarios de check-in / check-out */}
        <div className="bg-white border rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="h-4 w-4 text-teal-600" />
            <span className="text-sm font-medium">Horarios</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <span className="text-gray-500">Check-in:</span>
              <p className="font-medium">2:00 PM</p>
            </div>
            <div>
              <span className="text-gray-500">Check-out:</span>
              <p className="font-medium">12:00 PM</p>
            </div>
          </div>
        </div>

        {/* Huéspedes */}
        <div>
          <Label>Huéspedes</Label>
          <div className="flex items-center gap-2 mt-1">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setGuests(Math.max(1, guests - 1))}
              disabled={guests <= 1}
            >
              -
            </Button>
            <div className="flex-1 text-center py-2 border rounded-md">
              <Users className="h-4 w-4 inline mr-2" />
              {guests} {guests === 1 ? "huésped" : "huéspedes"}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setGuests(Math.min(maxGuests, guests + 1))}
              disabled={guests >= maxGuests}
            >
              +
            </Button>
          </div>
          {guests > 1 && (
            <p className="text-xs text-gray-500 mt-1">
              +5% por cada huésped adicional
            </p>
          )}
        </div>

        {/* Resumen de costos */}
        <div className="border-t pt-4 mt-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">
              {stayDays > 0
                ? `$${Math.round(dailyRate).toLocaleString("es-CO")}/día × ${stayDays} ${stayDays === 1 ? "día" : "días"}`
                : "Selecciona fechas"
              }
            </span>
            <span>${subtotal.toLocaleString("es-CO")}</span>
          </div>
          {surchargeAmount > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">
                Recargo huéspedes adicionales ({guests - 1} × 5%)
              </span>
              <span>${surchargeAmount.toLocaleString("es-CO")}</span>
            </div>
          )}
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Depósito de seguridad</span>
            <span>${securityDepositNum.toLocaleString("es-CO")}</span>
          </div>
          <div className="flex justify-between font-bold text-lg border-t pt-2">
            <span>Total</span>
            <span>
              ${total.toLocaleString("es-CO")}
              <span className="text-sm font-normal text-gray-500"> COP</span>
            </span>
          </div>
        </div>

        {/* Botón de reserva */}
        <Button
          className="w-full bg-teal-600 hover:bg-teal-700 text-white py-6 text-lg"
          onClick={handleBookingReservation}
          disabled={!checkIn || !checkOut}
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
