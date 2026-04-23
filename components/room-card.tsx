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
}

export default function RoomCard({ title, image, price, features, slug }: RoomCardProps) {
  return (
    <Link
      href={`/habitaciones/${slug}`}
      aria-label={`Ver detalles de ${title}`}
      className="group bg-white rounded-xl overflow-hidden shadow-sm border h-full md:h-[520px] flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
    >
      <div className="relative h-48 flex-shrink-0 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="mb-4">
          <div>
            <span className="text-2xl font-bold text-teal-600">$ {price}</span>
            <span className="text-sm text-gray-500"> / mes</span>
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
        <Button
          asChild={false}
          tabIndex={-1}
          className="w-full bg-teal-600 hover:bg-teal-700 mt-auto pointer-events-none"
        >
          <span>Ver detalles</span>
        </Button>
      </div>
    </Link>
  )
}
