"use client"

interface RoomPricesSectionProps {
  monthlyPrice: string
}

export default function RoomPricesSection({ monthlyPrice }: RoomPricesSectionProps) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-4">Precio mensual</h2>

      <div className="border-2 border-teal-500 bg-teal-50 rounded-xl p-6 text-center max-w-sm">
        <h3 className="font-semibold text-sm mb-2 text-gray-700">Tarifa fija por mes</h3>
        <p className="text-3xl font-bold text-gray-900">
          ${monthlyPrice}
        </p>
        <p className="text-xs text-gray-500 mt-1">COP / mes</p>
        <p className="text-xs text-gray-600 mt-3">Estadía mínima: 1 mes</p>
      </div>

      <p className="text-sm text-gray-600 mt-4">
        * Los precios incluyen todos los servicios básicos (agua, luz, gas, internet) y aseo 1 vez al mes.
      </p>
    </div>
  )
}
