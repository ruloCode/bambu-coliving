"use client"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { useState } from "react"
import Link from "next/link"

interface BookingFormProps {
  roomTitle: string
  price: string
  discounts?: {
    "2": string
    "3": string
  }
}

export default function BookingForm({ roomTitle, price, discounts }: BookingFormProps) {
  const [checkIn, setCheckIn] = useState<Date>()
  const [duration, setDuration] = useState("1")
  const [guests, setGuests] = useState("1")

  const handleDurationChange = (value: string) => {
    setDuration(value)
  }

  const getDiscountedPrice = (duration: string) => {
    if (!discounts) return price
    switch (duration) {
      case "2":
        return discounts["2"]
      case "3":
        return discounts["3"]
      default:
        return price
    }
  }

  const calculateSecurityDeposit = () => {
    const basePrice = Number.parseInt(price.replace(/\./g, ""))
    return Math.round(basePrice * 0.1).toLocaleString("es-CO")
  }

  const calculateTotal = () => {
    const monthlyPrice = Number.parseInt(getDiscountedPrice(duration).replace(/\./g, ""))
    const deposit = Number.parseInt(price.replace(/\./g, "")) * 0.1
    return (Number.parseInt(duration) * monthlyPrice + deposit).toLocaleString("es-CO")
  }

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="check-in">Fecha de llegada</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full mt-1">
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
            />
          </PopoverContent>
        </Popover>
      </div>

      <div>
        <Label htmlFor="duration">Duración de estancia</Label>
        <Select value={duration} onValueChange={handleDurationChange}>
          <SelectTrigger className="w-full mt-1">
            <SelectValue placeholder="Selecciona la duración" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1 Mes - ${price}/mes</SelectItem>
            <SelectItem value="2">2 Meses - ${discounts?.["2"]}/mes (-10%)</SelectItem>
            <SelectItem value="3">3 Meses - ${discounts?.["3"]}/mes (-15%)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="guests">Número de huéspedes</Label>
        <Select value={guests} onValueChange={setGuests}>
          <SelectTrigger className="w-full mt-1">
            <SelectValue placeholder="Selecciona el número de huéspedes" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1 Huésped</SelectItem>
            <SelectItem value="2">2 Huéspedes</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="pt-4 border-t">
        <div className="flex justify-between mb-2">
          <span>Precio mensual</span>
          <span>$ {getDiscountedPrice(duration)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Duración</span>
          <span>
            {duration} {Number.parseInt(duration) === 1 ? "mes" : "meses"}
          </span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Depósito de seguridad (10%)</span>
          <span>$ {calculateSecurityDeposit()}</span>
        </div>
        <div className="flex justify-between font-bold text-lg pt-2 border-t">
          <span>Total</span>
          <span>$ {calculateTotal()}</span>
        </div>
      </div>

      <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
        <Link href="/reserva">Reservar ahora</Link>
      </Button>

      <p className="text-xs text-gray-500 text-center">
        No se te cobrará nada en este momento. Completarás el pago en el siguiente paso.
      </p>
    </div>
  )
}
