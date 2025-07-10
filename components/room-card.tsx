import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface RoomCardProps {
  title: string
  image: string
  price: string
  features: string[]
  slug: string
  discounts?: {
    "2": string
    "3": string
  }
}

export default function RoomCard({ title, image, price, features, slug, discounts }: RoomCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border h-full md:h-[580px] flex flex-col">
      <div className="relative h-48 flex-shrink-0">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="mb-4">
          <div className="flex flex-col gap-1">
            <div>
              <span className="text-2xl font-bold text-teal-600">$ {price}</span>
              <span className="text-sm text-gray-500"> / mes</span>
            </div>
            {discounts && (
              <div className="space-y-1">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">2 meses:</span> ${discounts["2"]}/mes
                  <span className="text-teal-600 ml-1">(-10%)</span>
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">3 meses:</span> ${discounts["3"]}/mes
                  <span className="text-teal-600 ml-1">(-15%)</span>
                </p>
              </div>
            )}
          </div>
        </div>
        <ul className="space-y-2 mb-6 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-teal-600 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Button asChild className="w-full bg-teal-600 hover:bg-teal-700 mt-auto">
          <Link href={`/habitaciones/${slug}`}>Ver detalles</Link>
        </Button>
      </div>
    </div>
  )
}
