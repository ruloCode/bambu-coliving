"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { CalendarIcon, CreditCard, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { format, addDays } from "date-fns"
import { es } from "date-fns/locale"
import Image from "next/image"

const steps = [
  { id: "room", name: "Habitación" },
  { id: "dates", name: "Fechas" },
  { id: "guest", name: "Información" },
  { id: "payment", name: "Pago" },
  { id: "confirmation", name: "Confirmación" },
]

export default function BookingWizard() {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null)
  const [checkIn, setCheckIn] = useState<Date | undefined>(new Date("2025-07-01"))
  const [duration, setDuration] = useState<string>("1")

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0))
  }

  const handleDurationChange = (value: string) => {
    setDuration(value)
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
        {currentStep === 0 && (
          <div>
            <h2 className="text-xl font-bold mb-4">Selecciona tu habitación</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                className={cn(
                  "border rounded-lg p-4 cursor-pointer",
                  selectedRoom === "tipo-1" ? "border-teal-600 bg-teal-50" : "hover:border-gray-300",
                )}
                onClick={() => setSelectedRoom("tipo-1")}
              >
                <div className="flex gap-4">
                  <div className="relative h-24 w-24 rounded-md overflow-hidden flex-shrink-0">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-05-14%20a%20las%2014.04.39_4b76c038.jpg-UuM2MMRM2jvoxKNMXUNECk8s0xIjZM.jpeg"
                      alt="Bambu Tipo 1"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">Plura Tipo 1</h3>
                    <p className="text-sm text-gray-500 mb-2">Habitación individual con cama doble y baño privado</p>
                    <p className="font-bold">
                      $ 3.000.000 <span className="font-normal text-sm text-gray-500">/ mes</span>
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={cn(
                  "border rounded-lg p-4 cursor-pointer",
                  selectedRoom === "tipo-2" ? "border-teal-600 bg-teal-50" : "hover:border-gray-300",
                )}
                onClick={() => setSelectedRoom("tipo-2")}
              >
                <div className="flex gap-4">
                  <div className="relative h-24 w-24 rounded-md overflow-hidden flex-shrink-0">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Bambu Tipo 2"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">Plura Tipo 2</h3>
                    <p className="text-sm text-gray-500 mb-2">Habitación con cama queen y área de trabajo</p>
                    <p className="font-bold">
                      $ 3.500.000 <span className="font-normal text-sm text-gray-500">/ mes</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentStep === 1 && (
          <div>
            <h2 className="text-xl font-bold mb-4">Selecciona tus fechas</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="check-in">Fecha de llegada</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal mt-1">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {checkIn ? format(checkIn, "PPP", { locale: es }) : <span>Selecciona una fecha</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={checkIn}
                      onSelect={setCheckIn}
                      initialFocus
                      locale={es}
                      disabled={(date) => date < new Date("2025-07-01")}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <Label htmlFor="duration">Duración de estancia</Label>
                <Select value={duration} onValueChange={handleDurationChange}>
                  <SelectTrigger className="w-full mt-1">
                    <SelectValue placeholder="Selecciona la duración" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Mes - $3.000.000/mes</SelectItem>
                    <SelectItem value="3">3 Meses - $2.700.000/mes</SelectItem>
                    <SelectItem value="6">6 Meses - $2.500.000/mes</SelectItem>
                    <SelectItem value="12">12 Meses - $2.380.000/mes</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="pt-4 border-t">
                <div className="flex justify-between mb-2">
                  <span>Fecha de llegada</span>
                  <span>{checkIn ? format(checkIn, "PPP", { locale: es }) : "-"}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Fecha de salida</span>
                  <span>
                    {checkIn ? format(addDays(checkIn, Number.parseInt(duration) * 30), "PPP", { locale: es }) : "-"}
                  </span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Duración</span>
                  <span>
                    {duration} {Number.parseInt(duration) === 1 ? "mes" : "meses"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <h2 className="text-xl font-bold mb-4">Información del huésped</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="first-name">Nombre</Label>
                  <Input id="first-name" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="last-name">Apellido</Label>
                  <Input id="last-name" className="mt-1" />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Correo electrónico</Label>
                <Input id="email" type="email" className="mt-1" />
              </div>

              <div>
                <Label htmlFor="phone">Teléfono</Label>
                <Input id="phone" className="mt-1" />
              </div>

              <div>
                <Label htmlFor="nationality">Nacionalidad</Label>
                <Select>
                  <SelectTrigger className="w-full mt-1">
                    <SelectValue placeholder="Selecciona tu nacionalidad" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="colombia">Colombia</SelectItem>
                    <SelectItem value="usa">Estados Unidos</SelectItem>
                    <SelectItem value="spain">España</SelectItem>
                    <SelectItem value="mexico">México</SelectItem>
                    <SelectItem value="argentina">Argentina</SelectItem>
                    <SelectItem value="other">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="special-requests">Solicitudes especiales (opcional)</Label>
                <Textarea id="special-requests" className="mt-1" />
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div>
            <h2 className="text-xl font-bold mb-4">Información de pago</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h3 className="font-bold mb-2">Resumen de reserva</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Habitación:</span>
                    <span>Plura Tipo 1</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fecha de llegada:</span>
                    <span>{checkIn ? format(checkIn, "PPP", { locale: es }) : "-"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duración:</span>
                    <span>
                      {duration} {Number.parseInt(duration) === 1 ? "mes" : "meses"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Precio mensual:</span>
                    <span>
                      ${" "}
                      {duration === "1"
                        ? "3.000.000"
                        : duration === "3"
                          ? "2.700.000"
                          : duration === "6"
                            ? "2.500.000"
                            : "2.380.000"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Depósito de seguridad:</span>
                    <span>$ 1.000.000</span>
                  </div>
                  <div className="flex justify-between font-bold pt-2 border-t">
                    <span>Total a pagar:</span>
                    <span>
                      ${" "}
                      {(
                        Number.parseInt(duration) *
                          (duration === "1"
                            ? 3000000
                            : duration === "3"
                              ? 2700000
                              : duration === "6"
                                ? 2500000
                                : 2380000) +
                        1000000
                      ).toLocaleString("es-CO")}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="card-holder">Nombre del titular</Label>
                <Input id="card-holder" className="mt-1" />
              </div>

              <div>
                <Label htmlFor="card-number">Número de tarjeta</Label>
                <div className="relative mt-1">
                  <Input id="card-number" placeholder="1234 5678 9012 3456" />
                  <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiry">Fecha de expiración</Label>
                  <Input id="expiry" placeholder="MM/AA" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="cvc">CVC</Label>
                  <Input id="cvc" placeholder="123" className="mt-1" />
                </div>
              </div>

              <div className="flex items-start gap-2 mt-4">
                <input type="checkbox" id="terms" className="mt-1" />
                <Label htmlFor="terms" className="text-sm">
                  Acepto los{" "}
                  <a href="/terminos-y-condiciones" className="text-teal-600 hover:underline">
                    Términos y Condiciones
                  </a>{" "}
                  y la{" "}
                  <a href="/politica-de-privacidad" className="text-teal-600 hover:underline">
                    Política de Privacidad
                  </a>
                  .
                </Label>
              </div>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="text-center py-8">
            <div className="bg-teal-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Check className="h-10 w-10 text-teal-600" />
            </div>
            <h2 className="text-2xl font-bold mb-2">¡Reserva confirmada!</h2>
            <p className="text-gray-600 mb-6">
              Hemos enviado un correo electrónico con los detalles de tu reserva a tu dirección de correo electrónico.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg text-left mb-6">
              <h3 className="font-bold mb-4">Detalles de la reserva</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Número de reserva:</span>
                  <span className="font-medium">
                    PL-
                    {Math.floor(Math.random() * 10000)
                      .toString()
                      .padStart(4, "0")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Habitación:</span>
                  <span>Plura Tipo 1</span>
                </div>
                <div className="flex justify-between">
                  <span>Fecha de llegada:</span>
                  <span>{checkIn ? format(checkIn, "PPP", { locale: es }) : "-"}</span>
                </div>
                <div className="flex justify-between">
                  <span>Fecha de salida:</span>
                  <span>
                    {checkIn ? format(addDays(checkIn, Number.parseInt(duration) * 30), "PPP", { locale: es }) : "-"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Total pagado:</span>
                  <span className="font-medium">
                    ${" "}
                    {(
                      Number.parseInt(duration) *
                        (duration === "1"
                          ? 3000000
                          : duration === "3"
                            ? 2700000
                            : duration === "6"
                              ? 2500000
                              : 2380000) +
                      1000000
                    ).toLocaleString("es-CO")}
                  </span>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              Si tienes alguna pregunta o necesitas asistencia, no dudes en contactarnos a{" "}
              <a href="mailto:info@pluracoliving.co" className="text-teal-600 hover:underline">
                info@pluracoliving.co
              </a>{" "}
              o llamar al +57 (601) 123-4567.
            </p>
            <Button asChild className="bg-teal-600 hover:bg-teal-700">
              <a href="/">Volver al inicio</a>
            </Button>
          </div>
        )}
      </div>

      {/* Actions */}
      {currentStep < 4 && (
        <div className="px-6 py-4 bg-gray-50 border-t flex justify-between">
          <Button variant="outline" onClick={prevStep} disabled={currentStep === 0}>
            Anterior
          </Button>
          <Button
            className="bg-teal-600 hover:bg-teal-700"
            onClick={nextStep}
            disabled={currentStep === 0 && !selectedRoom}
          >
            {currentStep === 3 ? "Confirmar y pagar" : "Siguiente"}
          </Button>
        </div>
      )}
    </div>
  )
}
