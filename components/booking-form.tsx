"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon } from "lucide-react"
import { format, addDays } from "date-fns"
import { es } from "date-fns/locale"
import Link from "next/link"

interface BookingFormProps {
  roomTitle: string
  price: string
}

export default function BookingForm({ roomTitle, price }: BookingFormProps) {
  const [checkIn, setCheckIn] = useState<Date | undefined>(new Date())
  const [checkOut, setCheckOut] = useState<Date | undefined>(addDays(new Date(), 30))
  const [guests, setGuests] = useState<string>("1")
  const [duration, setDuration] = useState<string>("1")

  const handleCheckInChange = (date: Date | undefined) => {
    setCheckIn(date)
    if (date && (!checkOut || checkOut <= date)) {
      setCheckOut(addDays(date, 30))
    }
  }

  const handleDurationChange = (value: string) => {
    setDuration(value)
    if (checkIn) {
      setCheckOut(addDays(checkIn, Number.parseInt(value) * 30))
    }
  }

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="check-in">Fecha de llegada</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full justify-start text-left font-normal mt-1">
              <CalendarIcon className="mr-2 h-4 w-4" />
              {checkIn ? format(checkIn, "PPP", { locale: es }) : <span>Selecciona una fecha</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={checkIn}
              onSelect={handleCheckInChange}
              initialFocus
              locale={es}
              disabled={(date) => date < new Date("2025-07-01")}
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
            <SelectItem value="3">3 Meses - $2.700.000/mes</SelectItem>
            <SelectItem value="6">6 Meses - $2.500.000/mes</SelectItem>
            <SelectItem value="12">12 Meses - $2.380.000/mes</SelectItem>
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
          <span>
            $ {duration === "1" ? price : duration === "3" ? "2.700.000" : duration === "6" ? "2.500.000" : "2.380.000"}
          </span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Duración</span>
          <span>
            {duration} {Number.parseInt(duration) === 1 ? "mes" : "meses"}
          </span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Depósito de seguridad</span>
          <span>$ 1.000.000</span>
        </div>
        <div className="flex justify-between font-bold text-lg pt-2 border-t">
          <span>Total</span>
          <span>
            ${" "}
            {(
              Number.parseInt(duration) *
                (duration === "1"
                  ? Number.parseInt(price.replace(/\./g, ""))
                  : duration === "3"
                    ? 2700000
                    : duration === "6"
                      ? 2500000
                      : 2380000) +
              1000000
            ).toLocaleString("es-CO")}
          </span>
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
