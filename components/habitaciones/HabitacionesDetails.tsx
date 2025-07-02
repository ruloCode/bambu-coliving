import { habitaciones } from "@/content"
import { Check, MapPin, Clock, Shield } from "lucide-react"

export default function HabitacionesDetails() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Amenities */}
          <div>
            <div className="flex items-center mb-4">
              <Check className="h-6 w-6 text-teal-600 mr-2" />
              <h3 className="text-2xl font-bold">{habitaciones.details.amenities.title}</h3>
            </div>
            <p className="text-gray-600 mb-6">{habitaciones.details.amenities.description}</p>
            <ul className="space-y-3">
              {habitaciones.details.amenities.list.map((amenity, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-4 w-4 text-teal-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{amenity}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <div className="flex items-center mb-4">
              <Clock className="h-6 w-6 text-rose-600 mr-2" />
              <h3 className="text-2xl font-bold">{habitaciones.details.policies.title}</h3>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-teal-600 pl-4">
                <p className="font-semibold text-gray-800">{habitaciones.details.policies.checkIn}</p>
              </div>
              <div className="border-l-4 border-teal-600 pl-4">
                <p className="font-semibold text-gray-800">{habitaciones.details.policies.checkOut}</p>
              </div>
              <div className="border-l-4 border-rose-600 pl-4">
                <p className="font-semibold text-gray-800">{habitaciones.details.policies.minimumStay}</p>
              </div>
              <div className="border-l-4 border-rose-600 pl-4">
                <p className="font-semibold text-gray-800">{habitaciones.details.policies.deposit}</p>
              </div>
              <div className="border-l-4 border-gray-400 pl-4">
                <p className="font-semibold text-gray-800">{habitaciones.details.policies.cancellation}</p>
              </div>
            </div>
          </div>

          {/* Location */}
          <div>
            <div className="flex items-center mb-4">
              <MapPin className="h-6 w-6 text-teal-600 mr-2" />
              <h3 className="text-2xl font-bold">{habitaciones.details.location.title}</h3>
            </div>
            <p className="text-gray-600 mb-6">{habitaciones.details.location.description}</p>
            <ul className="space-y-3">
              {habitaciones.details.location.landmarks.map((landmark, index) => (
                <li key={index} className="flex items-center">
                  <MapPin className="h-4 w-4 text-teal-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{landmark}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
} 