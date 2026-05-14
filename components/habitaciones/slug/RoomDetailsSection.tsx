export default function RoomDetailsSection({ maxGuests }: { size?: string; maxGuests: number }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">Detalles</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div>
          <h3 className="font-semibold">Capacidad</h3>
          <p>Hasta {maxGuests} personas</p>
        </div>
      </div>
    </div>
  )
}
