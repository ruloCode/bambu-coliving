import BookingForm from "@/components/habitaciones/slug/Booking-form";

interface RoomBookingSectionProps {
  roomSlug: string
  roomTitle: string
  roomImage: string
  roomSize: string
  price: string
  discounts?: {
    "2": string
    "3": string
  }
}

export default function RoomBookingSection({ 
  roomSlug, 
  roomTitle, 
  roomImage, 
  roomSize, 
  price, 
  discounts 
}: RoomBookingSectionProps) {
  return (
    <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
      <h2 className="text-xl font-bold mb-4">Reserva ahora</h2>
      <BookingForm 
        roomSlug={roomSlug}
        roomTitle={roomTitle} 
        roomImage={roomImage}
        roomSize={roomSize}
        price={price} 
        discounts={discounts}
      />
    </div>
  )
}
