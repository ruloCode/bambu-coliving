import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CTA() {
  return (
    <section className="py-16 bg-teal-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">¿Listo para unirte a nuestra comunidad?</h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Abrimos el 1 de julio de 2025. Reserva ahora y sé parte de los primeros en experimentar Plura Coliving.
        </p>
        <Button asChild size="lg" className="rounded-full px-8 bg-white text-teal-600 hover:bg-gray-100">
          <Link href="/habitaciones">Reserva tu espacio</Link>
        </Button>
      </div>
    </section>
  )
}
