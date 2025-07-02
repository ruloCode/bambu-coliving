import { habitaciones } from "@/content"

export default function HabitacionesHeader() {
  return (
    <section className={`${habitaciones.header.backgroundColor} py-16 ${habitaciones.header.textColor}`}>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">{habitaciones.header.title}</h1>
        <p className="max-w-2xl mx-auto">
          {habitaciones.header.description}
        </p>
      </div>
    </section>
  )
}