import { Wifi, Tv, Bath, UtensilsCrossed, PawPrint } from "lucide-react"
import { cn } from "@/lib/utils"
import RoomGallery from "@/components/room-gallery"
import BookingForm from "@/components/booking-form"

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
      {/* Room Gallery */}
      <RoomGallery images={room.images} title={room.title} />

      {/* Room Details */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-bold mb-4">{room.title}</h1>
              <p className="text-gray-600 mb-6">{room.description}</p>

              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Características</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {room.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className={cn("rounded-full p-2", index % 2 === 0 ? "bg-teal-100" : "bg-rose-100")}>
                        {feature.icon}
                      </div>
                      <span>{feature.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Detalles</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div>
                    <h3 className="font-semibold">Tamaño</h3>
                    <p>{room.size}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Capacidad</h3>
                    <p>Hasta {room.maxGuests} personas</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Disponibilidad</h3>
                    <p>A partir del 1 de julio, 2025</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">Precios</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="border rounded-lg p-4 text-center">
                    <h3 className="font-semibold mb-2">1 Mes</h3>
                    <p className="text-xl font-bold">$ {room.price}</p>
                    <p className="text-xs text-gray-500">COP MENSUAL</p>
                  </div>
                  <div className="border rounded-lg p-4 text-center">
                    <h3 className="font-semibold mb-2">3 Meses</h3>
                    <p className="text-xl font-bold">$ {room.discounts["3"]}</p>
                    <p className="text-xs text-gray-500">COP MENSUAL</p>
                  </div>
                  <div className="border rounded-lg p-4 text-center">
                    <h3 className="font-semibold mb-2">6 Meses</h3>
                    <p className="text-xl font-bold">$ {room.discounts["6"]}</p>
                    <p className="text-xs text-gray-500">COP MENSUAL</p>
                  </div>
                  <div className="border rounded-lg p-4 text-center">
                    <h3 className="font-semibold mb-2">12 Meses</h3>
                    <p className="text-xl font-bold">$ {room.discounts["12"]}</p>
                    <p className="text-xs text-gray-500">COP MENSUAL</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  * Los precios incluyen todos los servicios básicos (agua, luz, gas, internet).
                </p>
              </div>
            </div>

            <div>
              <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-4">Reserva ahora</h2>
                <BookingForm roomTitle={room.title} price={room.price} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
