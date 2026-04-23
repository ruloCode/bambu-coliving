"use client"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import MonthSelect from "@/components/ui/month-select"
import { CalendarIcon, Users, Clock } from "lucide-react"
import { format, addMonths } from "date-fns"
import { es } from "date-fns/locale"
import { useState } from "react"
import { useBookingStore, type BookingDuration } from "@/lib/booking-store"
import { useRouter } from "next/navigation"

interface RoomBookingSectionProps {
  roomSlug: string
  roomTitle: string
  roomImage: string
  roomSize: string
  monthlyPrice: string
  maxGuests: number
}

const monthOptions: { value: BookingDuration; label: string }[] = [
  { value: "1", label: "1 Mes" },
  { value: "3", label: "3 Meses" },
  { value: "6", label: "6 Meses" },
  { value: "12", label: "12 Meses" }
]

export default function RoomBookingSection({
  roomSlug,
  roomTitle,
  roomImage,
  roomSize,
  monthlyPrice,
  maxGuests
}: RoomBookingSectionProps) {
  const [checkIn, setCheckIn] = useState<Date>()
  const [months, setMonths] = useState<BookingDuration>("1")
  const [guests, setGuests] = useState(1)
  const router = useRouter()

  const { updateRoomSelection, updateBookingDates } = useBookingStore()

  const monthsNum = Number.parseInt(months)
  const checkOut = checkIn ? addMonths(checkIn, monthsNum) : undefined

  const priceNum = Number.parseInt(monthlyPrice.replace(/\./g, ""))

  const extraGuestSurcharge = guests > 1 ? (guests - 1) * 0.05 : 0
  const subtotal = priceNum * monthsNum
  const surchargeAmount = Math.round(subtotal * extraGuestSurcharge)
  const total = subtotal + surchargeAmount

  const handleBookingReservation = () => {
    updateRoomSelection({
      roomSlug,
      roomTitle,
      roomImage,
      roomSize,
      basePrice: monthlyPrice,
      selectedDuration: months,
      finalPrice: monthlyPrice
    })

    updateBookingDates(checkIn || null, guests)
    router.push('/reserva')
  }

  return (
    <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
      <h2 className="text-xl font-bold mb-4">Reserva ahora</h2>

      <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mb-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Precio mensual:</span>
          <span className="font-bold text-lg">${monthlyPrice} <span className="text-sm font-normal text-gray-500">COP</span></span>
        </div>
        <p className="text-xs text-gray-500 mt-1">Estadía mínima: 1 mes</p>
      </div>

      <div className="space-y-4">
        <div>
          <Label>Duración de la estadía</Label>
          <div className="grid grid-cols-4 gap-2 mt-1">
            {monthOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setMonths(option.value)}
                className={`py-2 px-1 rounded-md border text-sm font-medium transition-colors ${
                  months === option.value
                    ? "border-teal-500 bg-teal-50 text-teal-700"
                    : "border-gray-200 bg-white hover:border-gray-300 text-gray-700"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <Label htmlFor="check-in">Mes de llegada (Check-in)</Label>
          <MonthSelect
            value={checkIn}
            onChange={setCheckIn}
            placeholder="Selecciona un mes"
            className="w-full mt-1"
          />
        </div>

        <div>
          <Label>Mes de salida (Check-out)</Label>
          <div className="w-full mt-1 px-3 py-2 border rounded-md bg-white text-sm text-gray-700 flex items-center">
            <CalendarIcon className="mr-2 h-4 w-4 text-gray-500" />
            {checkOut ? format(checkOut, "MMMM yyyy", { locale: es }).replace(/^\w/, (c) => c.toUpperCase()) : <span className="text-gray-400">Se calcula al elegir llegada</span>}
          </div>
          {checkIn && (
            <p className="text-xs text-teal-600 mt-1 font-medium">
              Estadía: {monthsNum} {monthsNum === 1 ? "mes" : "meses"}
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
              <p className="font-medium">2:00 PM</p>
            </div>
            <div>
              <span className="text-gray-500">Check-out:</span>
              <p className="font-medium">12:00 PM</p>
            </div>
          </div>
        </div>

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

        <div className="border-t pt-4 mt-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">
              ${priceNum.toLocaleString("es-CO")}/mes × {monthsNum} {monthsNum === 1 ? "mes" : "meses"}
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
          <div className="flex justify-between font-bold text-lg border-t pt-2">
            <span>Total</span>
            <span>
              ${total.toLocaleString("es-CO")}
              <span className="text-sm font-normal text-gray-500"> COP</span>
            </span>
          </div>
        </div>

        <Button
          className="w-full bg-teal-600 hover:bg-teal-700 text-white py-6 text-lg"
          onClick={handleBookingReservation}
          disabled={!checkIn}
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
