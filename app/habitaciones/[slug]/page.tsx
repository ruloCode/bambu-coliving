import { Wifi, Tv, Bath, UtensilsCrossed, PawPrint } from "lucide-react"
import RoomGallerySection from "@/components/habitaciones/slug/RoomGallerySection"
import RoomFeaturesSection from "@/components/habitaciones/slug/RoomFeaturesSection"
import RoomDetailsSection from "@/components/habitaciones/slug/RoomDetailsSection"
import RoomPricesSection from "@/components/habitaciones/slug/RoomPricesSection"
import RoomBookingSection from "@/components/habitaciones/slug/RoomBookingSection"

// Simulación de datos de habitación
const roomData = {
  "tipo-1": {
    title: "Plura Tipo 1",
    description:
      "Nuestra habitación estándar ofrece todo lo que necesitas para una estancia cómoda y productiva. Con una cama doble, baño privado, cocina equipada y un espacio de trabajo, es perfecta para nómadas digitales y profesionales.",
    price: "3.000.000",
    discounts: {
      "3": "2.700.000",
      "6": "2.500.000",
      "12": "2.380.000",
    },
    features: [
      { icon: <Wifi className="h-5 w-5" />, name: "WiFi ilimitado" },
      { icon: <UtensilsCrossed className="h-5 w-5" />, name: "Cocina privada" },
      { icon: <PawPrint className="h-5 w-5" />, name: "Pet friendly" },
      { icon: <Tv className="h-5 w-5" />, name: "Smart TV" },
      { icon: <Bath className="h-5 w-5" />, name: "Baño privado" },
    ],
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-05-14%20a%20las%2014.04.39_4b76c038.jpg-UuM2MMRM2jvoxKNMXUNECk8s0xIjZM.jpeg",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    size: "25m²",
    maxGuests: 2,
  },
}

export default function RoomDetail({ params }: { params: { slug: string } }) {
  const { slug } = params
  const room = roomData[slug as keyof typeof roomData] || roomData["tipo-1"]

  return (
    <div className="flex flex-col w-full">
      <RoomGallerySection images={room.images} title={room.title} />

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-bold mb-4">{room.title}</h1>
              <p className="text-gray-600 mb-6">{room.description}</p>
              <RoomFeaturesSection features={room.features} />
              <RoomDetailsSection size={room.size} maxGuests={room.maxGuests} />
              <RoomPricesSection price={room.price} discounts={room.discounts} />
            </div>
            <div>
              <RoomBookingSection roomTitle={room.title} price={room.price} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
