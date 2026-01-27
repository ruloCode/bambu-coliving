"use client"

import { Wifi, Tv, Bath, UtensilsCrossed, PawPrint, MonitorSmartphone, Warehouse, Sun, Users, Lock, Hotel, Sofa, Bed } from "lucide-react"
import { useState, createElement } from "react"
import RoomGallerySection from "@/components/habitaciones/slug/RoomGallerySection"
import RoomFeaturesSection from "@/components/habitaciones/slug/RoomFeaturesSection"
import RoomDetailsSection from "@/components/habitaciones/slug/RoomDetailsSection"
import RoomPricesSection from "@/components/habitaciones/slug/RoomPricesSection"
import RoomBookingSection from "@/components/habitaciones/slug/RoomBookingSection"
import { roomDetails } from "@/content"
import { use } from "react"

const iconMap = {
  Wifi,
  Tv,
  Bath,
  UtensilsCrossed,
  PawPrint,
  MonitorSmartphone,
  Warehouse,
  Sun,
  Users,
  Lock,
  Hotel,
  Sofa,
  Bed
}

export default function RoomDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const room = roomDetails[slug] || roomDetails["oscuro"]
  
  // Estado para el periodo seleccionado (por defecto 12 meses - el mejor precio)
  const [selectedPeriod, setSelectedPeriod] = useState("12m")

  // Map the feature icons to their components using createElement
  const featuresWithIcons = room.features.map(feature => ({
    icon: createElement(iconMap[feature.iconName as keyof typeof iconMap], { 
      className: "h-5 w-5",
      key: feature.name 
    }),
    name: feature.name
  }))

  // Obtener el precio según el periodo seleccionado
  const selectedPrice = room.discounts[selectedPeriod as keyof typeof room.discounts]

  return (
    <div className="flex flex-col w-full">
      <RoomGallerySection images={room.images} title={room.title} />

      <section className="md:py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-bold mb-4">{room.title}</h1>
              <p className="text-gray-600 mb-6">{room.description}</p>
              <RoomFeaturesSection features={featuresWithIcons} />
              <RoomDetailsSection size={room.size} maxGuests={room.maxGuests} />
              <RoomPricesSection 
                prices={room.discounts} 
                selectedPeriod={selectedPeriod}
                onSelectPeriod={setSelectedPeriod}
              />
            </div>
            <div>
              <RoomBookingSection 
                roomSlug={slug}
                roomTitle={room.title} 
                roomImage={room.images[0]}
                roomSize={room.size}
                selectedPeriod={selectedPeriod}
                selectedPrice={selectedPrice}
                prices={room.discounts}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
