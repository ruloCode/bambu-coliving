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
            title="Bambu Tipo 1"
            image="/images/Creativos1.jpg"
            price="3.000.000"
            features={["Cama doble", "WiFi ilimitado", "Cocina privada", "Baño privado"]}
            slug="tipo-1"
          />
          <RoomCard
            title="Bambu Tipo 2"
            image="/images/Creativos1.jpg"
            price="3.500.000"
            features={["Cama queen", "WiFi ilimitado", "Cocina privada", "Baño privado", "Escritorio"]}
            slug="tipo-2"
          />
          <RoomCard
            title="Bambu Tipo 3"
            image="/images/Creativos1.jpg"
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
