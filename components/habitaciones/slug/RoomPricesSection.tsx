"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PriceOption {
  id: string
  period: string
  price: string
  discount?: string
  perDay?: boolean
}

interface RoomPricesSectionProps {
  prices: {
    "1d": string
    "3d": string
    "7d": string
    "15d": string
    "1m": string
    "3m": string
    "6m": string
    "12m": string
  }
  selectedPeriod: string
  onSelectPeriod: (period: string) => void
}

export default function RoomPricesSection({ prices, selectedPeriod, onSelectPeriod }: RoomPricesSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  // Orden: más barato primero (12m) hasta más caro (1d)
  const priceOptions: PriceOption[] = [
    { id: "12m", period: "12 Meses", price: prices["12m"], discount: "30%" },
    { id: "6m", period: "6 Meses", price: prices["6m"], discount: "20%" },
    { id: "3m", period: "3 Meses", price: prices["3m"], discount: "15%" },
    { id: "1m", period: "1 Mes", price: prices["1m"], discount: "10%" },
    { id: "15d", period: "15 Días", price: prices["15d"], discount: "5%", perDay: true },
    { id: "7d", period: "7 Días", price: prices["7d"], discount: "3%", perDay: true },
    { id: "3d", period: "3 Días", price: prices["3d"], discount: "2.5%", perDay: true },
    { id: "1d", period: "1 Día", price: prices["1d"], perDay: true },
  ]

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 200
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      })
    }
  }

  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-4">Precios según estadía</h2>
      
      <div className="relative">
        {/* Botón izquierdo */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 transition-colors hidden md:flex"
          aria-label="Anterior"
        >
          <ChevronLeft className="h-5 w-5 text-gray-600" />
        </button>

        {/* Contenedor del slider */}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 px-1 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {priceOptions.map((option) => {
            const isSelected = selectedPeriod === option.id
            const isBestDeal = option.id === "12m"
            
            return (
              <button
                key={option.id}
                onClick={() => onSelectPeriod(option.id)}
                className={`flex-shrink-0 snap-center border-2 rounded-xl p-4 text-center min-w-[140px] transition-all hover:shadow-md cursor-pointer ${
                  isSelected 
                    ? "border-teal-500 bg-teal-50 shadow-md" 
                    : isBestDeal
                      ? "border-teal-300 bg-teal-50/50"
                      : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                {isBestDeal && (
                  <span className="text-[10px] font-bold text-teal-700 bg-teal-100 px-2 py-0.5 rounded-full mb-2 inline-block">
                    MEJOR PRECIO
                  </span>
                )}
                <h3 className="font-semibold text-sm mb-2 text-gray-700">{option.period}</h3>
                <p className="text-lg font-bold text-gray-900">
                  ${option.price}
                </p>
                <p className="text-xs text-gray-500 mb-1">
                  {option.perDay ? "COP / día" : "COP / mes"}
                </p>
                {option.discount && (
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    isSelected 
                      ? "bg-teal-200 text-teal-800" 
                      : "bg-gray-100 text-teal-600"
                  }`}>
                    -{option.discount}
                  </span>
                )}
                {isSelected && (
                  <div className="mt-2 text-xs font-medium text-teal-600">
                    ✓ Seleccionado
                  </div>
                )}
              </button>
            )
          })}
        </div>

        {/* Botón derecho */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 transition-colors hidden md:flex"
          aria-label="Siguiente"
        >
          <ChevronRight className="h-5 w-5 text-gray-600" />
        </button>
      </div>

      {/* Indicador de scroll en móvil */}
      <p className="text-xs text-gray-400 text-center mt-2 md:hidden">
        ← Desliza para ver más opciones →
      </p>

      <p className="text-sm text-gray-600 mt-4">
        * Los precios incluyen todos los servicios básicos (agua, luz, gas, internet).
      </p>
    </div>
  )
}
