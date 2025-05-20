"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon, ChevronRight, Wifi, Users, MapPin, Coffee } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { useState } from "react"
import TestimonialCard from "@/components/testimonial-card"
import RoomCard from "@/components/room-card"

export default function Home() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [guests, setGuests] = useState<string>("1")

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-05-14%20a%20las%2014.04.39_2cc26270.jpg-DJzxuBgfK0IzOMmp0tVmjIOzBPVcte.jpeg"
          alt="Plura Coliving Bogotá"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="relative w-full max-w-4xl mx-auto px-4 text-center text-white">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-rose-300/30 backdrop-blur-sm flex flex-col items-center justify-center">
              <div className="mb-4">
                <svg viewBox="0 0 100 24" className="w-20 h-8 mx-auto">
                  <path fill="currentColor" d="M0,12 L20,0 L40,12 L60,0 L80,12 L100,0 L100,24 L0,24 Z" />
                </svg>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-2">PLURA</h1>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-2">LIVE,</h2>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-2">WORK</h2>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">& PLAY</h2>
              <Button asChild size="lg" className="rounded-full px-8 bg-teal-600 hover:bg-teal-700 text-white">
                <Link href="/habitaciones">Reserva Ahora</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar */}
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

      {/* Featured Rooms */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center">Nuestros Espacios</h2>
          <p className="text-gray-600 mb-10 text-center max-w-2xl mx-auto">
            Descubre nuestras habitaciones diseñadas para ofrecerte confort, privacidad y todo lo que necesitas para
            vivir, trabajar y disfrutar en Bogotá.
          </p>
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
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link href="/habitaciones">
                Ver todas las habitaciones <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center">¿Por qué elegir Plura?</h2>
          <p className="text-gray-600 mb-10 text-center max-w-2xl mx-auto">
            Ofrecemos más que un lugar para vivir. Somos una comunidad donde podrás conectar, crecer y disfrutar.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wifi className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">WiFi de Alta Velocidad</h3>
              <p className="text-gray-600">Conexión estable y rápida para trabajar sin interrupciones.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Comunidad Vibrante</h3>
              <p className="text-gray-600">Conoce personas de todo el mundo y expande tu red profesional.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Ubicación Estratégica</h3>
              <p className="text-gray-600">En el corazón de Bogotá, cerca de todo lo que necesitas.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Espacios Compartidos</h3>
              <p className="text-gray-600">Coworking, cocina, gimnasio y áreas de descanso a tu disposición.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center">Lo que dicen nuestros residentes</h2>
          <p className="text-gray-600 mb-10 text-center max-w-2xl mx-auto">
            Experiencias reales de nuestra comunidad internacional.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              name="María González"
              origin="España"
              quote="Encontré en Plura no solo un lugar para vivir, sino una familia. La ubicación es perfecta y las instalaciones superaron mis expectativas."
              image="/placeholder.svg?height=100&width=100"
            />
            <TestimonialCard
              name="John Smith"
              origin="Estados Unidos"
              quote="Como nómada digital, valoro mucho la conexión a internet y los espacios de trabajo. Plura ofrece todo eso y más, con una comunidad increíble."
              image="/placeholder.svg?height=100&width=100"
            />
            <TestimonialCard
              name="Luisa Fernández"
              origin="Colombia"
              quote="La flexibilidad de los contratos y la calidad de los espacios hacen de Plura la mejor opción en Bogotá para profesionales jóvenes."
              image="/placeholder.svg?height=100&width=100"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para unirte a nuestra comunidad?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Abrimos el 1 de julio de 2025. Reserva ahora y sé parte de los primeros en experimentar Plura Coliving.
          </p>
          <Button asChild size="lg" className="rounded-full px-8 bg-white text-teal-600 hover:bg-gray-100">
            <Link href="/habitaciones">Reserva tu espacio</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
