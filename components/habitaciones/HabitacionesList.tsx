import RoomCard from "@/components/room-card"

export default function HabitacionesList() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <RoomCard
            title="Bambu Tipo 1"
            image="/images/creativos1.jpg"
            price="3.000.000"
            features={["Cama doble", "WiFi ilimitado", "Cocina privada", "Baño privado"]}
            slug="tipo-1"
          />
          <RoomCard
            title="Bambu Tipo 2"
            image="/images/bambu1.png"
            price="3.500.000"
            features={["Cama Semi Doble", "WiFi ilimitado", "Escritorio", "Baño privado", "Closet"]}
            slug="tipo-2"
          />
          <RoomCard
            title="Bambu Tipo 3"
            image="/images/Creativos3.jpg"
            price="4.200.000"
            features={["Cama king", "WiFi ilimitado", "Cocina privada", "Baño privado", "Balcón"]}
            slug="tipo-3"
          />
          <RoomCard
            title="Bambu Tipo 4 - Compartido"
            image="/images/Creativos1.jpg"
            price="2.200.000"
            features={["Habitación compartida", "WiFi ilimitado", "Cocina compartida", "Baño compartido"]}
            slug="tipo-4-compartido"
          />
          <RoomCard
            title="Bambu Tipo 5 - Suite"
            image="/images/Creativos2.jpg"
            price="5.000.000"
            features={["Cama king", "WiFi ilimitado", "Cocina privada", "Baño privado", "Sala de estar"]}
            slug="tipo-5-suite"
          />
          <RoomCard
            title="Bambu Tipo 6 - Familiar"
            image="/images/Creativos3.jpg"
            price="6.500.000"
            features={["2 habitaciones", "WiFi ilimitado", "Cocina privada", "2 baños", "Sala de estar"]}
            slug="tipo-6-familiar"
          />
        </div>
      </div>
    </section>
  )
}