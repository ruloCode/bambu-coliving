"use client"

import { Wifi, Tv, Bath, UtensilsCrossed, PawPrint, MonitorSmartphone, Warehouse, Sun, Users, Lock, Hotel, Sofa, Bed } from "lucide-react"
import { createElement, use } from "react"
import { notFound } from "next/navigation"
import RoomGallerySection from "@/components/habitaciones/slug/RoomGallerySection"
import RoomFeaturesSection from "@/components/habitaciones/slug/RoomFeaturesSection"
import RoomDetailsSection from "@/components/habitaciones/slug/RoomDetailsSection"
import RoomPricesSection from "@/components/habitaciones/slug/RoomPricesSection"
import RoomBookingSection from "@/components/habitaciones/slug/RoomBookingSection"
import { roomDetails } from "@/content"

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
  const room = roomDetails[slug]

  if (!room) {
    notFound()
  }

  const featuresWithIcons = room.features.map(feature => ({
    icon: createElement(iconMap[feature.iconName as keyof typeof iconMap], {
      className: "h-5 w-5",
      key: feature.name
    }),
    name: feature.name
  }))

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
              <RoomPricesSection nightlyRates={room.nightlyRates} />
            </div>
            <div>
              <RoomBookingSection
                roomSlug={slug}
                roomTitle={room.title}
                roomImage={room.images[0]}
                roomSize={room.size}
                nightlyRates={room.nightlyRates}
                maxGuests={room.maxGuests}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
