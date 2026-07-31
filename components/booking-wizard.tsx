"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { ArrowLeft, Check, MessageCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PhoneInput } from "@/components/ui/phone-input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { useBookingStore } from "@/lib/booking-store"

const steps = [
  { id: "summary", name: "Resumen" },
  { id: "guest", name: "Información" },
  { id: "confirmation", name: "Confirmación" }
]

const BAMBU_WHATSAPP = "573504956021"

const generateReservationNumber = () =>
  `BM-${Math.floor(Math.random() * 10000).toString().padStart(4, "0")}`

const formatCop = (value: number) => `$${value.toLocaleString("es-CO")}`

const formatLongDate = (date: Date | null) =>
  date ? format(date, "PPP", { locale: es }) : "-"

export default function BookingWizard() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)

  const {
    bookingData,
    updateGuestInfo,
    updateSpecialRequests,
    setAgreedToTerms,
    setAgreedToManual,
    clearBooking
  } = useBookingStore()

  const [guestForm, setGuestForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    nationality: "",
    occupation: "",
    emergencyContact: {
      name: "",
      phone: "",
      relationship: ""
    }
  })
  const [specialRequests, setSpecialRequests] = useState("")
  const [reservationNumber, setReservationNumber] = useState("")

  useEffect(() => {
    if (!bookingData.roomSlug) {
      router.push("/habitaciones")
    }
  }, [bookingData.roomSlug, router])

  const handleGuestFormChange = (field: string, value: string) => {
    setGuestForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleConfirmBooking = () => {
    setReservationNumber(generateReservationNumber())
    setCurrentStep(2)
  }

  const buildWhatsappMessage = () => {
    const isLongStayMsg = bookingData.displayMode === "monthly"
    const totalLine = isLongStayMsg
      ? `*Pago mensual estimado:* ${formatCop(bookingData.displayAmount)} COP/mes`
      : `*Total estimado:* ${formatCop(bookingData.displayAmount)} COP`

    const lines = [
      "Hola Bambu, quiero confirmar una reserva.",
      "",
      `*Reserva:* ${reservationNumber}`,
      `*Habitación:* ${bookingData.roomTitle}`,
      `*Llegada:* ${formatLongDate(bookingData.checkInDate)}`,
      `*Salida:* ${formatLongDate(bookingData.checkOutDate)}`,
      `*Noches:* ${bookingData.nights}`,
      `*Huéspedes:* ${bookingData.guests}`,
      `*Tarifa aplicada:* ${bookingData.tierLabel || "—"}`,
      totalLine,
      "",
      "*Mis datos:*",
      `Nombre: ${bookingData.guestInfo.firstName} ${bookingData.guestInfo.lastName}`,
      `Correo: ${bookingData.guestInfo.email}`,
      `Teléfono: ${bookingData.guestInfo.phone}`,
      `Nacionalidad: ${bookingData.guestInfo.nationality}`
    ]
    if (bookingData.guestInfo.occupation) {
      lines.push(`Ocupación: ${bookingData.guestInfo.occupation}`)
    }
    if (bookingData.specialRequests) {
      lines.push("", `*Solicitudes especiales:* ${bookingData.specialRequests}`)
    }
    return lines.join("\n")
  }

  const handleSendWhatsapp = () => {
    const url = `https://wa.me/${BAMBU_WHATSAPP}?text=${encodeURIComponent(buildWhatsappMessage())}`
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const nextStep = () => {
    if (currentStep === 1) {
      updateGuestInfo(guestForm)
      updateSpecialRequests(specialRequests)
      handleConfirmBooking()
      return
    }
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0))
  }

  const handleBackToRooms = () => {
    clearBooking()
    router.push("/habitaciones")
  }

  if (!bookingData.roomSlug) {
    return (
      <div className="text-center py-8">
        <p>Cargando...</p>
      </div>
    )
  }

  const {
    roomImage,
    roomTitle,
    roomSize,
    checkInDate,
    checkOutDate,
    nights,
    guests,
    tierLabel,
    nightlyRate,
    surchargePerNight,
    displayMode,
    displayAmount
  } = bookingData

  const isLongStay = displayMode === "monthly"
  const extraGuests = Math.max(0, guests - 1)

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="bg-gray-50 px-4 py-4 border-b">
        <nav aria-label="Progress">
          <ol className="flex space-x-2 sm:space-x-4">
            {steps.map((step, index) => (
              <li key={step.id} className="flex-1">
                <div
                  className={cn(
                    "group flex flex-col items-center",
                    index <= currentStep ? "text-teal-600" : "text-gray-400"
                  )}
                >
                  <span
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-medium",
                      index < currentStep
                        ? "border-teal-600 bg-teal-600 text-white"
                        : index === currentStep
                          ? "border-teal-600 text-teal-600"
                          : "border-gray-300"
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

      <div className="p-6">
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
                    src={roomImage}
                    alt={roomTitle}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold">{roomTitle}</h3>
                  <p className="text-sm text-gray-500 mb-2">{roomSize}</p>
                  <p className="font-bold">
                    {formatCop(nightlyRate)}{" "}
                    <span className="font-normal text-sm text-gray-500">/ noche</span>
                  </p>
                  {tierLabel && (
                    <p className="text-xs text-teal-600 mt-1">Tarifa: {tierLabel}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Fecha de llegada:</span>
                <span>{formatLongDate(checkInDate)}</span>
              </div>
              <div className="flex justify-between">
                <span>Fecha de salida:</span>
                <span>{formatLongDate(checkOutDate)}</span>
              </div>
              <div className="flex justify-between">
                <span>Noches:</span>
                <span>{nights}</span>
              </div>
              <div className="flex justify-between">
                <span>Huéspedes:</span>
                <span>{guests}</span>
              </div>
              <div className="flex justify-between">
                <span>Tarifa por noche:</span>
                <span>{formatCop(nightlyRate)}</span>
              </div>
              {extraGuests > 0 && (
                <div className="flex justify-between text-gray-600">
                  <span>
                    Recargo {extraGuests}{" "}
                    {extraGuests === 1 ? "huésped adicional" : "huéspedes adicionales"}:
                  </span>
                  <span>+{formatCop(surchargePerNight)} / noche</span>
                </div>
              )}
              <div className="flex justify-between font-bold pt-2 border-t">
                <span>{isLongStay ? "Pago mensual:" : "Total a pagar:"}</span>
                <span>
                  {formatCop(displayAmount)} COP{isLongStay ? "/mes" : ""}
                </span>
              </div>
              {isLongStay && (
                <p className="text-xs text-gray-500">
                  Estadía de {nights} noches facturada como pago mensual.
                </p>
              )}
            </div>
          </div>
        )}

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
                    onChange={(e) => handleGuestFormChange("firstName", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="last-name">Apellido *</Label>
                  <Input
                    id="last-name"
                    className="mt-1"
                    value={guestForm.lastName}
                    onChange={(e) => handleGuestFormChange("lastName", e.target.value)}
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
                  onChange={(e) => handleGuestFormChange("email", e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone">Teléfono *</Label>
                <PhoneInput
                  id="phone"
                  className="mt-1"
                  value={guestForm.phone}
                  onChange={(value) => handleGuestFormChange("phone", value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="nationality">Nacionalidad *</Label>
                <Select
                  value={guestForm.nationality}
                  onValueChange={(value) => handleGuestFormChange("nationality", value)}
                >
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
                  onChange={(e) => handleGuestFormChange("occupation", e.target.value)}
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
                  <Label
                    htmlFor="agree-terms"
                    className="text-sm font-normal leading-snug cursor-pointer"
                  >
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
                  <Label
                    htmlFor="agree-manual"
                    className="text-sm font-normal leading-snug cursor-pointer"
                  >
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

        {currentStep === 2 && (
          <div className="text-center py-8">
            <div className="bg-teal-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Check className="h-10 w-10 text-teal-600" />
            </div>
            <h2 className="text-2xl font-bold mb-2">¡Casi listo!</h2>
            <p className="text-gray-600 mb-6">
              Para confirmar tu reserva, envíanos los detalles por WhatsApp y empezamos el chat
              para coordinar el pago.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg text-left mb-6">
              <h3 className="font-bold mb-4">Detalles de la reserva</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Número de reserva:</span>
                  <span className="font-medium">{reservationNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span>Habitación:</span>
                  <span>{roomTitle}</span>
                </div>
                <div className="flex justify-between">
                  <span>Fecha de llegada:</span>
                  <span>{formatLongDate(checkInDate)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Fecha de salida:</span>
                  <span>{formatLongDate(checkOutDate)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Noches:</span>
                  <span>{nights}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tarifa aplicada:</span>
                  <span>{tierLabel || "—"}</span>
                </div>
                <div className="flex justify-between">
                  <span>{isLongStay ? "Pago mensual estimado:" : "Total estimado:"}</span>
                  <span className="font-medium">
                    {formatCop(displayAmount)} COP{isLongStay ? "/mes" : ""}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 max-w-sm mx-auto">
              <Button
                onClick={handleSendWhatsapp}
                className="bg-[#25D366] hover:bg-[#1ebe57] text-white py-6 text-base"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Enviar a WhatsApp y empezar chat
              </Button>
              <Button
                variant="ghost"
                onClick={() => {
                  clearBooking()
                  router.push("/")
                }}
                className="text-gray-600"
              >
                Volver al inicio
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-6">
              Al tocar el botón se abre WhatsApp con tu información ya escrita; solo dale enviar
              para que lleguemos al chat.
            </p>
            <p className="text-sm text-gray-600 mt-4">
              ¿Prefieres correo? Escríbenos a{" "}
              <a href="mailto:info@bambucoliving.com" className="text-teal-600 hover:underline">
                info@bambucoliving.com
              </a>
              .
            </p>
          </div>
        )}
      </div>

      {currentStep < 2 && (
        <div className="px-6 py-4 bg-gray-50 border-t flex justify-between">
          <Button variant="outline" onClick={prevStep} disabled={currentStep === 0}>
            Anterior
          </Button>
          <Button
            className="bg-teal-600 hover:bg-teal-700"
            onClick={nextStep}
            disabled={
              currentStep === 1 &&
              (!guestForm.firstName ||
                !guestForm.lastName ||
                !guestForm.email ||
                !guestForm.phone ||
                !guestForm.nationality ||
                !bookingData.agreedToTerms ||
                !bookingData.agreedToManual)
            }
          >
            {currentStep === 1 ? "Confirmar reserva" : "Siguiente"}
          </Button>
        </div>
      )}
    </div>
  )
}
