import { RoomDiscount } from "@/content"

export default function RoomPricesSection({ price, discounts }: { price: string; discounts: RoomDiscount }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Precios</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="border rounded-lg p-4 text-center">
          <h3 className="font-semibold mb-2">1 Mes</h3>
          <p className="text-xl font-bold">$ {price}</p>
          <p className="text-xs text-gray-500">COP MENSUAL</p>
        </div>
        <div className="border rounded-lg p-4 text-center">
          <h3 className="font-semibold mb-2">2 Meses</h3>
          <p className="text-xl font-bold">$ {discounts["2"]}</p>
          <p className="text-xs text-gray-500">COP MENSUAL</p>
          <p className="text-sm text-teal-600 mt-1">10% de descuento</p>
        </div>
        <div className="border rounded-lg p-4 text-center">
          <h3 className="font-semibold mb-2">3 Meses</h3>
          <p className="text-xl font-bold">$ {discounts["3"]}</p>
          <p className="text-xs text-gray-500">COP MENSUAL</p>
          <p className="text-sm text-teal-600 mt-1">15% de descuento</p>
        </div>
      </div>
      <p className="text-sm text-gray-600">
        * Los precios incluyen todos los servicios básicos (agua, luz, gas, internet).
      </p>
    </div>
  )
}