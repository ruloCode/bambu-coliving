export default function RoomDetailsSection({ size, maxGuests }: { size: string; maxGuests: number }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">Detalles</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div>
          <h3 className="font-semibold">Tamaño</h3>
          <p>{size}</p>
        </div>
        <div>
          <h3 className="font-semibold">Capacidad</h3>
          <p>Hasta {maxGuests} personas</p>
        </div>
        <div>
          <h3 className="font-semibold">Disponibilidad</h3>
          <p>A partir del 1 de julio, 2025</p>
        </div>
      </div>
    </div>
  )
}