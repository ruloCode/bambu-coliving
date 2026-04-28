"use client"

import {
  LONG_STAY_THRESHOLD_NIGHTS,
  MONTHLY_BILLING_NIGHTS,
  STAY_TIERS,
  type NightlyRates
} from "@/content"

interface RoomPricesSectionProps {
  nightlyRates: NightlyRates
}

const formatCop = (value: number) => `$${value.toLocaleString("es-CO")}`

export default function RoomPricesSection({ nightlyRates }: RoomPricesSectionProps) {
  const orderedTiers = [...STAY_TIERS].reverse()

  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-4">Tarifas por noche</h2>

      <div className="border rounded-xl overflow-hidden bg-white">
        <table className="w-full text-sm">
          <thead className="bg-teal-50 text-teal-800">
            <tr>
              <th className="text-left font-semibold px-4 py-3">Duración de la estadía</th>
              <th className="text-right font-semibold px-4 py-3">Tarifa por noche</th>
              <th className="text-right font-semibold px-4 py-3 hidden sm:table-cell">
                Equivalente mensual
              </th>
            </tr>
          </thead>
          <tbody>
            {orderedTiers.map((tier, index) => {
              const isLongStay = tier.minNights >= LONG_STAY_THRESHOLD_NIGHTS
              const nightly = nightlyRates[tier.tier]
              const monthly = nightly * MONTHLY_BILLING_NIGHTS
              return (
                <tr
                  key={tier.tier}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="px-4 py-3 text-gray-700">{tier.label}</td>
                  <td className="px-4 py-3 text-right font-medium text-gray-900">
                    {formatCop(nightly)}
                  </td>
                  <td className="px-4 py-3 text-right text-gray-600 hidden sm:table-cell">
                    {isLongStay ? `${formatCop(monthly)} / mes` : "—"}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <p className="text-sm text-gray-600 mt-4">
        * Las tarifas se aplican automáticamente según la duración total de tu estadía. Para
        estadías de 90 noches o más, el cobro se realiza como pago mensual.
      </p>
      <p className="text-sm text-gray-600 mt-2">
        Incluye servicios básicos (agua, luz, gas, internet) y aseo mensual.
      </p>
    </div>
  )
}
