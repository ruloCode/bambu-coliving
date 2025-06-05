import Image from "next/image"

interface TestimonialCardProps {
  name: string
  origin: string
  quote: string
  image: string
}

export default function TestimonialCard({ name, origin, quote, image }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative h-12 w-12 rounded-full overflow-hidden">
          <Image src={image || "/images/persona1.jpg"} alt={name} fill className="object-cover" />
        </div>
        <div>
          <h3 className="font-bold">{name}</h3>
          <p className="text-sm text-gray-500">{origin}</p>
        </div>
      </div>
      <p className="text-gray-600 italic">"{quote}"</p>
    </div>
  )
}
