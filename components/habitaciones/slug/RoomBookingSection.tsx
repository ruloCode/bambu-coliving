"use client"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Users } from "lucide-react"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { useState } from "react"
import { useBookingStore } from "@/lib/booking-store"
import { useRouter } from "next/navigation"

interface RoomBookingSectionProps {
  roomSlug: string
  roomTitle: string
  roomImage: string
  roomSize: string
  selectedPeriod: string
  selectedPrice: string
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

export default function RoomBookingSection({ 
  roomSlug, 
  roomTitle, 
  roomImage, 
  roomSize, 
  selectedPeriod,
  selectedPrice,
  prices
}: RoomBookingSectionProps) {
  const [checkIn, setCheckIn] = useState<Date>()
  const [guests, setGuests] = useState(1)
  const router = useRouter()
  
  const { updateRoomSelection, updateBookingDates } = useBookingStore()

  const isDailyRate = ["1d", "3d", "7d", "15d"].includes(selectedPeriod)
  const priceNum = Number.parseInt(selectedPrice.replace(/\./g, ""))
  
  // Calcular total según el periodo
  const calculateTotal = () => {
    if (isDailyRate) {
      const days = periodMultipliers[selectedPeriod]
      return (priceNum * days).toLocaleString("es-CO")
    } else {
      const months = periodMultipliers[selectedPeriod]
      return (priceNum * months).toLocaleString("es-CO")
    }
  }

  // Depósito de seguridad (10% del precio mensual base)
  const monthlyBase = Number.parseInt(prices["1m"].replace(/\./g, ""))
  const securityDeposit = Math.round(monthlyBase * 0.1).toLocaleString("es-CO")

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
          <span className="font-bold text-teal-700">{periodLabels[selectedPeriod]}</span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-gray-600">{isDailyRate ? "Precio/día:" : "Precio/mes:"}</span>
          <span className="font-bold text-lg">${selectedPrice} <span className="text-sm font-normal text-gray-500">COP</span></span>
        </div>
      </div>

      <div className="space-y-4">
        {/* Fecha de llegada */}
        <div>
          <Label htmlFor="check-in">Fecha de llegada</Label>
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
              onClick={() => setGuests(Math.min(4, guests + 1))}
              disabled={guests >= 4}
            >
              +
            </Button>
          </div>
        </div>

        {/* Resumen de costos */}
        <div className="border-t pt-4 mt-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">
              ${selectedPrice} × {periodMultipliers[selectedPeriod]} {isDailyRate ? "días" : "meses"}
            </span>
            <span>${calculateTotal()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Depósito de seguridad</span>
            <span>${securityDeposit}</span>
          </div>
          <div className="flex justify-between font-bold text-lg border-t pt-2">
            <span>Total</span>
            <span>
              ${(Number.parseInt(calculateTotal().replace(/\./g, "")) + Number.parseInt(securityDeposit.replace(/\./g, ""))).toLocaleString("es-CO")} 
              <span className="text-sm font-normal text-gray-500"> COP</span>
            </span>
          </div>
        </div>

        {/* Botón de reserva */}
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
