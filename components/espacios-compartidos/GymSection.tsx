import Image from "next/image"
import { Heart, Music, Users } from "lucide-react"
import { SharedSpaceSection } from "@/content"

const iconMap = {
  Heart,
  Music,
  Users,
  Dumbbell: Heart, // Temporarily using Heart icon as Dumbbell is not available
  Yoga: Users // Temporarily using Users icon as Yoga is not available
}

interface GymSectionProps {
  content: SharedSpaceSection
}

export default function GymSection({ content }: GymSectionProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{content.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{content.description}</p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {content.features.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap]
            return (
              <div key={index} className="text-center">
                {Icon && <Icon className="h-8 w-8 mx-auto mb-4 text-teal-600" />}
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            )
          })}
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {content.images.map((image, index) => (
            <div key={index} className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src={image}
                alt={`${content.title} - Imagen ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}