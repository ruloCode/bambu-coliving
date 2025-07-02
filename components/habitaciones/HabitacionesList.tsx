import RoomCard from "@/components/room-card"
import { habitaciones } from "@/content"

export default function HabitacionesList() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">{habitaciones.roomsList.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{habitaciones.roomsList.description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {habitaciones.roomsList.rooms.map((room) => (
            <RoomCard
              key={room.slug}
              title={room.title}
              image={room.image}
              price={room.price}
              features={room.features}
              slug={room.slug}
            />
          ))}
        </div>
      </div>
    </section>
  )
}