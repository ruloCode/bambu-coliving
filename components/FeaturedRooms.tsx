import { Button } from "@/components/ui/button"
import RoomCard from "@/components/room-card"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function FeaturedRooms() {
  return (
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
  )
}
