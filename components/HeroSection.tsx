"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] w-full">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-05-14%20a%20las%2014.04.39_2cc26270.jpg-DJzxuBgfK0IzOMmp0tVmjIOzBPVcte.jpeg"
        alt="Plura Coliving Bogotá"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <div className="relative w-full max-w-4xl mx-auto px-4 text-center text-white">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-rose-300/30 backdrop-blur-sm flex flex-col items-center justify-center">
            <div className="mb-4">
              <svg viewBox="0 0 100 24" className="w-20 h-8 mx-auto">
                <path fill="currentColor" d="M0,12 L20,0 L40,12 L60,0 L80,12 L100,0 L100,24 L0,24 Z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-2">PLURA</h1>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-2">LIVE,</h2>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-2">WORK</h2>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">& PLAY</h2>
            <Button asChild size="lg" className="rounded-full px-8 bg-teal-600 hover:bg-teal-700 text-white">
              <Link href="/habitaciones">Reserva Ahora</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
