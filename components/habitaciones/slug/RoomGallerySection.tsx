"use client"

import { useState, useEffect } from "react"
import { X, ChevronLeft, ChevronRight, Grid3X3 } from "lucide-react"

interface RoomGallerySectionProps {
  images: string[]
  title: string
}

export default function RoomGallerySection({ images, title }: RoomGallerySectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [mobileCarouselIndex, setMobileCarouselIndex] = useState(0)

  const openModal = (index: number) => {
    setCurrentImageIndex(index)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const goToPreviousMobile = () => {
    setMobileCarouselIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNextMobile = () => {
    setMobileCarouselIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const visibleImages = images.slice(0, 5) // Mostrar máximo 5 imágenes en la vista previa

  // Auto-play para el carrusel móvil (opcional)
  useEffect(() => {
    const interval = setInterval(() => {
      setMobileCarouselIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }, 4000) // Cambiar cada 4 segundos

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <>
      <div className="container mx-auto mt-4 relative mb-8">
        {/* Vista Desktop - Grid */}
        <div className="hidden md:block">
          <div className="grid grid-cols-4 gap-2 h-[400px] md:h-[500px]">
            {/* Imagen principal */}
            <div 
              className="col-span-4 md:col-span-2 row-span-2 cursor-pointer relative group overflow-hidden rounded-lg"
              onClick={() => openModal(0)}
            >
              <img
                src={visibleImages[0]}
                alt={`${title} imagen principal`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
            </div>

            {/* Imágenes secundarias */}
            {visibleImages.slice(1, 5).map((img, idx) => (
              <div 
                key={idx + 1}
                className={`cursor-pointer relative group overflow-hidden rounded-lg ${
                  idx === 2 ? 'col-span-2 md:col-span-1' : 'col-span-2 md:col-span-1'
                }`}
                onClick={() => openModal(idx + 1)}
              >
                <img
                  src={img}
                  alt={`${title} imagen ${idx + 2}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
                
                {/* Overlay en la última imagen visible si hay más fotos */}
                {idx === 3 && images.length > 5 && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-white text-center">
                      <Grid3X3 className="h-8 w-8 mx-auto mb-2" />
                      <span className="text-lg font-semibold">
                        +{images.length - 5} fotos
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Botón "Mostrar todas las fotos" - Desktop */}
          <button
            onClick={() => openModal(0)}
            className="absolute bottom-4 right-4 bg-white hover:bg-gray-50 text-gray-800 px-4 py-2 rounded-lg shadow-lg border border-gray-200 transition-all duration-200 flex items-center gap-2 font-medium"
          >
            <Grid3X3 className="h-4 w-4" />
            Mostrar todas las fotos
          </button>
        </div>

        {/* Vista Mobile - Carrusel */}
        <div className="md:hidden">
          <div className="relative h-[300px] overflow-hidden rounded-lg">
            {/* Carrusel de imágenes */}
            <div 
              className="flex transition-transform duration-300 ease-out h-full"
              style={{ transform: `translateX(-${mobileCarouselIndex * 100}%)` }}
            >
              {images.map((img, idx) => (
                <div 
                  key={idx}
                  className="min-w-full h-full cursor-pointer"
                  onClick={() => openModal(idx)}
                >
                  <img
                    src={img}
                    alt={`${title} imagen ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Controles de navegación móvil */}
            <button
              onClick={goToPreviousMobile}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={goToNextMobile}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Indicadores de puntos */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setMobileCarouselIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    idx === mobileCarouselIndex 
                      ? 'bg-white' 
                      : 'bg-white bg-opacity-50'
                  }`}
                />
              ))}
            </div>

            {/* Contador móvil */}
            <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
              {mobileCarouselIndex + 1} / {images.length}
            </div>
          </div>

          
        </div>
      </div>

      {/* Modal de galería */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Botón cerrar */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navegación anterior */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Imagen actual */}
            <div className="w-full h-full flex items-center justify-center">
              <img
                src={images[currentImageIndex]}
                alt={`${title} imagen ${currentImageIndex + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Navegación siguiente */}
            <button
              onClick={goToNext}
              className="absolute right-4 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Contador de imágenes */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg">
              {currentImageIndex + 1} / {images.length}
            </div>

            {/* Miniaturas - Solo en desktop */}
            <div className="hidden md:flex absolute bottom-16 left-1/2 transform -translate-x-1/2 gap-2 max-w-full overflow-x-auto px-4">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    idx === currentImageIndex 
                      ? 'border-white' 
                      : 'border-transparent opacity-60 hover:opacity-80'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${title} miniatura ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}