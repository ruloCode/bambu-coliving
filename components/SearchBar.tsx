"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { useState } from "react"

export default function SearchBar() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [guests, setGuests] = useState<string>("1")

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">Encuentra tu espacio ideal</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="check-in">Fecha de llegada</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP", { locale: es }) : <span>Selecciona una fecha</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={date} onSelect={setDate} initialFocus locale={es} />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <Label htmlFor="guests">Huéspedes</Label>
              <Select value={guests} onValueChange={setGuests}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecciona el número de huéspedes" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Huésped</SelectItem>
                  <SelectItem value="2">2 Huéspedes</SelectItem>
                  <SelectItem value="3">3 Huéspedes</SelectItem>
                  <SelectItem value="4">4+ Huéspedes</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button className="w-full bg-teal-600 hover:bg-teal-700">Buscar disponibilidad</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
