"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Clock, MapPin, Calendar } from "lucide-react"
import { eventosContent } from "@/content"

export default function EventosPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === eventosContent.gallery.images.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? eventosContent.gallery.images.length - 1 : prev - 1
    )
  }

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className={`${eventosContent.header.backgroundColor} py-16 ${eventosContent.header.textColor}`}>
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full mb-6">
            <Calendar className="h-4 w-4" />
            <span className="text-sm font-medium">Eventos Comunitarios</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {eventosContent.header.title}
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            {eventosContent.header.description}
          </p>
        </div>
      </section>

  

      {/* Events Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Nuestros eventos semanales
            </h2>
            <p className="text-lg text-gray-600">
              Cada evento está diseñado para crear conexiones auténticas y experiencias memorables
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventosContent.events.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardHeader className={`${event.colorScheme === 'teal' ? 'bg-teal-50' : 'bg-rose-50'} text-center`}>
                  <div className="text-4xl mb-2">{event.emoji}</div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {event.title}
                  </CardTitle>
                  <div className="flex flex-wrap justify-center gap-2 mt-3">
                    <Badge variant="secondary" className="text-xs">
                      <Calendar className="h-3 w-3 mr-1" />
                      {event.day}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      <Clock className="h-3 w-3 mr-1" />
                      {event.time}
                    </Badge>
                  </div>
                  <Badge 
                    className={`mt-2 ${event.colorScheme === 'teal' ? 'bg-teal-100 text-teal-800' : 'bg-rose-100 text-rose-800'}`}
                  >
                    {event.frequency}
                  </Badge>
                </CardHeader>
                <CardContent className="p-6">
                  <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                    {event.description}
                  </CardDescription>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Incluye:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {event.includes.map((item, index) => (
                          <li key={index} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-start gap-2 pt-2 border-t border-gray-100">
                      <MapPin className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-600">{event.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              {eventosContent.gallery.title}
            </h2>
            <p className="text-lg text-gray-600">
              {eventosContent.gallery.description}
            </p>
          </div>
          
          {/* Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-lg bg-white shadow-lg">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
              >
                {eventosContent.gallery.images.map((image, index) => (
                  <div key={index} className="min-w-full relative">
                    <div className="aspect-video relative">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <p className="text-white font-medium text-lg">
                        {image.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200"
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200"
                aria-label="Siguiente imagen"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
            
            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {eventosContent.gallery.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentImageIndex 
                      ? 'bg-teal-600' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Ir a imagen ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {eventosContent.cta.title}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {eventosContent.cta.description}
          </p>
          <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-gray-100 font-semibold">
            <Link href={eventosContent.cta.buttonLink}>
              {eventosContent.cta.buttonText}
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
} 