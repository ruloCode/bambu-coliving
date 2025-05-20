import BookingWizard from "@/components/booking-wizard"

export default function Booking() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-teal-600 py-12 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-2">Reserva tu Habitación</h1>
          <p className="max-w-2xl mx-auto">Completa el proceso de reserva en unos sencillos pasos.</p>
        </div>
      </section>

      {/* Booking Wizard */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <BookingWizard />
          </div>
        </div>
      </section>
    </div>
  )
}
