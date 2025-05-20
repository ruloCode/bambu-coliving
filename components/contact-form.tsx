"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Check } from "lucide-react"

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    setIsSubmitted(true);
  };
  
  if (isSubmitted) {
    return (
      <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 text-center">
        <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <Check className="h-8 w-8 text-teal-600" />
        </div>
        <h3 className="text-xl font-bold mb-2">¡Mensaje enviado!</h3>
        <p className="text-gray-600">
          Gracias por contactarnos. Nos pondremos en contacto contigo lo antes posible.
        </p>
      </div>
    );
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name">Nombre</Label>
          <Input id="name" required className="mt-1" />
        </div>
        <div>
          <Label htmlFor="email">Correo electrónico</Label>
          <Input id="email" type="email" required className="mt-1" />
        </div>
      </div>
      
      <div>
        <Label htmlFor="subject">Asunto</Label>
        <Select>
          <SelectTrigger className="w-full mt-1">
            <SelectValue placeholder="Selecciona un asunto" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="info">Información general</SelectItem>
            <SelectItem value="coliving">Consulta sobre coliving</SelectItem>
            <SelectItem value="reservation">Reserva</SelectItem>
            <SelectItem value="other">Otro</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <Label htmlFor="message">Mensaje</Label>
        <textarea
          id="message"
          rows={4}
          className="w-full mt-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
          required
        />
      </div>
      
      <button
        type="submit"
        className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
      >
        Enviar mensaje
      </button>
    </form>
  );
}
