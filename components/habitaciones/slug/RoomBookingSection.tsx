import BookingForm from "@/components/habitaciones/slug/booking-form";


export default function RoomBookingSection({ roomTitle, price }: { roomTitle: string; price: string }) {
  return (
    <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
      <h2 className="text-xl font-bold mb-4">Reserva ahora</h2>
      <BookingForm roomTitle={roomTitle} price={price} />
      
    </div>
  )
}
