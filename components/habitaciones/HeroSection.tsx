import Image from "next/image"

export default function HeroSection() {
  return (
    <div className="relative w-full h-[350px]">
      <Image
        src="/images/creativos1.jpg"
        alt="Plura Coliving Bogotá"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">Habitaciones</h1>
      </div>
    </div>
  )
}