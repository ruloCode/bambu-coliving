"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Check, ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"
import { format, addMonths } from "date-fns"
import { es } from "date-fns/locale"
import Image from "next/image"
import Link from "next/link"
import { useBookingStore } from "@/lib/booking-store"
import { useRouter } from "next/navigation"

const steps = [
  { id: "summary", name: "Resumen" },
  { id: "guest", name: "Información" },
  { id: "confirmation", name: "Confirmación" },
]

export default function BookingWizard() {
  const [currentStep, setCurrentStep] = useState(0)
  const router = useRouter()
  
  const {
    bookingData,
    updateGuestInfo,
    updateSpecialRequests,
    setAgreedToTerms,
    setAgreedToManual,
    clearBooking
  } = useBookingStore()

  // Form state
  const [guestForm, setGuestForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    nationality: '',
    occupation: '',
    emergencyContact: {
      name: '',
      phone: '',
      relationship: ''
    }
  })
  const [specialRequests, setSpecialRequests] = useState('')

  // Redirect if no room selected
  useEffect(() => {
    if (!bookingData.roomSlug) {
      router.push('/habitaciones')
    }
  }, [bookingData.roomSlug, router])

  const calculateTotal = () => {
    const monthlyPrice = Number.parseInt(bookingData.finalPrice.replace(/\./g, ""))
    return (Number.parseInt(bookingData.selectedDuration) * monthlyPrice).toLocaleString("es-CO")
  }

  const nextStep = () => {
    if (currentStep === 1) {
      // Update guest info in store before proceeding
      updateGuestInfo(guestForm)
      updateSpecialRequests(specialRequests)
      // Go directly to confirmation after guest info
      handleConfirmBooking()
      return
    }
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0))
  }

  const handleGuestFormChange = (field: string, value: string) => {
    setGuestForm(prev => ({
      ...prev,
      [field]: value
    }))
  }



  const handleConfirmBooking = () => {
    // Here you would typically send the booking data to your backend
    console.log('Booking confirmed:', bookingData)
    setCurrentStep(2) // Go to confirmation step (now step 2)
  }

  const handleBackToRooms = () => {
    clearBooking()
    router.push('/habitaciones')
  }

  if (!bookingData.roomSlug) {
    return (
      <div className="text-center py-8">
        <p>Cargando...</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Steps */}
      <div className="bg-gray-50 px-4 py-4 border-b">
        <nav aria-label="Progress">
          <ol className="flex space-x-2 sm:space-x-4">
            {steps.map((step, index) => (
              <li key={step.id} className="flex-1">
                <div
                  className={cn(
                    "group flex flex-col items-center",
                    index <= currentStep ? "text-teal-600" : "text-gray-400",
                  )}
                >
                  <span
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-medium",
                      index < currentStep
                        ? "border-teal-600 bg-teal-600 text-white"
                        : index === currentStep
                          ? "border-teal-600 text-teal-600"
                          : "border-gray-300",
                    )}
                  >
                    {index < currentStep ? <Check className="h-5 w-5" /> : index + 1}
                  </span>
                  <span className="hidden sm:inline-block mt-2 text-xs">{step.name}</span>
                </div>
              </li>
            ))}
          </ol>
        </nav>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Step 0: Summary */}
        {currentStep === 0 && (
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleBackToRooms}
                className="text-teal-600 hover:text-teal-700"
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                Cambiar habitación
              </Button>
            </div>
            
            <h2 className="text-xl font-bold mb-4">Resumen de tu reserva</h2>
            
            <div className="border rounded-lg p-4 mb-6">
              <div className="flex gap-4">
                <div className="relative h-24 w-24 rounded-md overflow-hidden flex-shrink-0">
                  <Image
                    src={bookingData.roomImage}
                    alt={bookingData.roomTitle}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold">{bookingData.roomTitle}</h3>
                  <p className="text-sm text-gray-500 mb-2">{bookingData.roomSize}</p>
                  <p className="font-bold">
                    $ {bookingData.finalPrice} <span className="font-normal text-sm text-gray-500">/ mes</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Fecha de llegada:</span>
                <span>{bookingData.checkInDate ? format(bookingData.checkInDate, "PPP", { locale: es }) : "-"}</span>
              </div>
              <div className="flex justify-between">
                <span>Fecha de salida:</span>
                <span>
                  {bookingData.checkInDate
                    ? format(addMonths(bookingData.checkInDate, Number.parseInt(bookingData.selectedDuration)), "PPP", { locale: es })
                    : "-"
                  }
                </span>
              </div>
              <div className="flex justify-between">
                <span>Duración:</span>
                <span>
                  {bookingData.selectedDuration} {Number.parseInt(bookingData.selectedDuration) === 1 ? "mes" : "meses"}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Huéspedes:</span>
                <span>{bookingData.guests}</span>
              </div>
              <div className="flex justify-between">
                <span>Precio mensual:</span>
                <span>$ {bookingData.finalPrice}</span>
              </div>
              <div className="flex justify-between font-bold pt-2 border-t">
                <span>Total a pagar:</span>
                <span>$ {calculateTotal()}</span>
              </div>
            </div>
          </div>
        )}

        {/* Step 1: Guest Information */}
        {currentStep === 1 && (
          <div>
            <h2 className="text-xl font-bold mb-4">Información del huésped</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="first-name">Nombre *</Label>
                  <Input 
                    id="first-name" 
                    className="mt-1" 
                    value={guestForm.firstName}
                    onChange={(e) => handleGuestFormChange('firstName', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="last-name">Apellido *</Label>
                  <Input 
                    id="last-name" 
                    className="mt-1" 
                    value={guestForm.lastName}
                    onChange={(e) => handleGuestFormChange('lastName', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Correo electrónico *</Label>
                <Input 
                  id="email" 
                  type="email" 
                  className="mt-1" 
                  value={guestForm.email}
                  onChange={(e) => handleGuestFormChange('email', e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone">Teléfono *</Label>
                <Input 
                  id="phone" 
                  className="mt-1" 
                  value={guestForm.phone}
                  onChange={(e) => handleGuestFormChange('phone', e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="nationality">Nacionalidad *</Label>
                <Select value={guestForm.nationality} onValueChange={(value) => handleGuestFormChange('nationality', value)}>
                  <SelectTrigger className="w-full mt-1">
                    <SelectValue placeholder="Selecciona tu nacionalidad" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="colombia">Colombia</SelectItem>
                    <SelectItem value="usa">Estados Unidos</SelectItem>
                    <SelectItem value="spain">España</SelectItem>
                    <SelectItem value="mexico">México</SelectItem>
                    <SelectItem value="argentina">Argentina</SelectItem>
                    <SelectItem value="chile">Chile</SelectItem>
                    <SelectItem value="peru">Perú</SelectItem>
                    <SelectItem value="brazil">Brasil</SelectItem>
                    <SelectItem value="other">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="occupation">Ocupación</Label>
                <Input 
                  id="occupation" 
                  className="mt-1" 
                  value={guestForm.occupation}
                  onChange={(e) => handleGuestFormChange('occupation', e.target.value)}
                />
              </div>



              <div>
                <Label htmlFor="special-requests">Solicitudes especiales (opcional)</Label>
                <Textarea 
                  id="special-requests" 
                  className="mt-1" 
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  placeholder="Ejemplo: Llegada temprana, alergias alimentarias, preferencias de habitación, etc."
                />
              </div>

              <div className="border-t pt-4 space-y-3">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="agree-terms"
                    checked={bookingData.agreedToTerms}
                    onCheckedChange={(checked) => setAgreedToTerms(checked === true)}
                    className="mt-1"
                  />
                  <Label htmlFor="agree-terms" className="text-sm font-normal leading-snug cursor-pointer">
                    He leído y acepto los{" "}
                    <Link
                      href="/terminos-y-condiciones"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-600 hover:underline font-medium"
                    >
                      Términos y Condiciones
                    </Link>
                    .
                  </Label>
                </div>
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="agree-manual"
                    checked={bookingData.agreedToManual}
                    onCheckedChange={(checked) => setAgreedToManual(checked === true)}
                    className="mt-1"
                  />
                  <Label htmlFor="agree-manual" className="text-sm font-normal leading-snug cursor-pointer">
                    He leído y acepto el{" "}
                    <Link
                      href="/manual-de-convivencia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-600 hover:underline font-medium"
                    >
                      Manual de Convivencia
                    </Link>
                    .
                  </Label>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Confirmation */}
        {currentStep === 2 && (
          <div className="text-center py-8">
            <div className="bg-teal-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Check className="h-10 w-10 text-teal-600" />
            </div>
            <h2 className="text-2xl font-bold mb-2">¡Reserva enviada!</h2>
            <p className="text-gray-600 mb-6">
              Hemos recibido tu solicitud de reserva. Te contactaremos pronto para coordinar el pago y confirmar los detalles.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg text-left mb-6">
              <h3 className="font-bold mb-4">Detalles de la reserva</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Número de reserva:</span>
                  <span className="font-medium">
                    BM-{Math.floor(Math.random() * 10000).toString().padStart(4, "0")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Habitación:</span>
                  <span>{bookingData.roomTitle}</span>
                </div>
                <div className="flex justify-between">
                  <span>Fecha de llegada:</span>
                  <span>{bookingData.checkInDate ? format(bookingData.checkInDate, "PPP", { locale: es }) : "-"}</span>
                </div>
                <div className="flex justify-between">
                  <span>Fecha de salida:</span>
                  <span>
                    {bookingData.checkInDate
                      ? format(addMonths(bookingData.checkInDate, Number.parseInt(bookingData.selectedDuration)), "PPP", { locale: es })
                      : "-"
                    }
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Total estimado:</span>
                  <span className="font-medium">$ {calculateTotal()}</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              Si tienes alguna pregunta, contáctanos a{" "}
              <a href="mailto:info@bambucoliving.com" className="text-teal-600 hover:underline">
                info@bambucoliving.com
              </a>{" "}
              o al +57 300 7438588.
            </p>
            <Button 
              onClick={() => {
                clearBooking()
                router.push('/')
              }}
              className="bg-teal-600 hover:bg-teal-700"
            >
              Volver al inicio
            </Button>
          </div>
        )}
      </div>

      {/* Actions */}
      {currentStep < 2 && (
        <div className="px-6 py-4 bg-gray-50 border-t flex justify-between">
          <Button variant="outline" onClick={prevStep} disabled={currentStep === 0}>
            Anterior
          </Button>
          <Button
            className="bg-teal-600 hover:bg-teal-700"
            onClick={nextStep}
            disabled={
              currentStep === 1 && (
                !guestForm.firstName ||
                !guestForm.lastName ||
                !guestForm.email ||
                !guestForm.phone ||
                !guestForm.nationality ||
                !bookingData.agreedToTerms ||
                !bookingData.agreedToManual
              )
            }
          >
            {currentStep === 1 ? "Confirmar reserva" : "Siguiente"}
          </Button>
        </div>
      )}
    </div>
  )
}
