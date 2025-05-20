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
import RoomCard from "@/components/room-card"

export default function Habitaciones() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [guests, setGuests] = useState<string>("1")

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-teal-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Nuestras Habitaciones</h1>
          <p className="max-w-2xl mx-auto">
            Descubre nuestros diferentes tipos de habitaciones diseñadas para ofrecerte la mejor experiencia de coliving
            en Bogotá.
          </p>
        </div>
      </section>

      {/* Search Filters */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Filtra tu búsqueda</h2>
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

      {/* Room Listings */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <RoomCard
              title="Plura Tipo 1"
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-05-14%20a%20las%2014.04.39_4b76c038.jpg-UuM2MMRM2jvoxKNMXUNECk8s0xIjZM.jpeg"
              price="3.000.000"
              features={["Cama doble", "WiFi ilimitado", "Cocina privada", "Baño privado"]}
              slug="tipo-1"
            />
            <RoomCard
              title="Plura Tipo 2"
              image="/placeholder.svg?height=400&width=600"
              price="3.500.000"
              features={["Cama queen", "WiFi ilimitado", "Cocina privada", "Baño privado", "Escritorio"]}
              slug="tipo-2"
            />
            <RoomCard
              title="Plura Tipo 3"
              image="/placeholder.svg?height=400&width=600"
              price="4.200.000"
              features={["Cama king", "WiFi ilimitado", "Cocina privada", "Baño privado", "Balcón"]}
              slug="tipo-3"
            />
            <RoomCard
              title="Plura Tipo 4 - Compartido"
              image="/placeholder.svg?height=400&width=600"
              price="2.200.000"
              features={["Habitación compartida", "WiFi ilimitado", "Cocina compartida", "Baño compartido"]}
              slug="tipo-4-compartido"
            />
            <RoomCard
              title="Plura Tipo 5 - Suite"
              image="/placeholder.svg?height=400&width=600"
              price="5.000.000"
              features={["Cama king", "WiFi ilimitado", "Cocina privada", "Baño privado", "Sala de estar"]}
              slug="tipo-5-suite"
            />
            <RoomCard
              title="Plura Tipo 6 - Familiar"
              image="/placeholder.svg?height=400&width=600"
              price="6.500.000"
              features={["2 habitaciones", "WiFi ilimitado", "Cocina privada", "2 baños", "Sala de estar"]}
              slug="tipo-6-familiar"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
