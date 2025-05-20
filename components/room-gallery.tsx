"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface RoomGalleryProps {
  images: string[]
  title: string
}

export default function RoomGallery({ images, title }: RoomGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  return (
    <section className="relative bg-gray-100">
      <div className="relative h-[50vh] md:h-[70vh]">
        <Image
          src={images[currentImage] || "/placeholder.svg"}
          alt={`${title} - Imagen ${currentImage + 1}`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20"></div>

        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full"
          onClick={prevImage}
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Imagen anterior</span>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full"
          onClick={nextImage}
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Imagen siguiente</span>
        </Button>
      </div>

      <div className="container mx-auto px-4 py-4">
        <div className="flex overflow-x-auto gap-2 pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              className={`relative h-16 w-24 flex-shrink-0 rounded-md overflow-hidden ${
                index === currentImage ? "ring-2 ring-teal-600" : ""
              }`}
              onClick={() => setCurrentImage(index)}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${title} - Miniatura ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
