"use client"

import { useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import { startOfToday } from "date-fns"
import { motion } from "framer-motion"
import type { DateRange } from "react-day-picker"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import DateRangePicker from "@/components/ui/date-range-picker"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { habitaciones } from "@/content"

export default function SearchBar() {
  const router = useRouter()
  const today = useMemo(() => startOfToday(), [])

  const [range, setRange] = useState<DateRange | undefined>()
  const [guests, setGuests] = useState<string>("1")

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (range?.from) params.set("checkIn", range.from.toISOString())
    if (range?.to) params.set("checkOut", range.to.toISOString())
    params.set("guests", guests)
    router.push(`/habitaciones?${params.toString()}`)
  }

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6"
        >
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-4 text-center"
          >
            Encuentra tu espacio ideal
          </motion.h2>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            <div>
              <Label>Fechas (check-in / check-out)</Label>
              <DateRangePicker
                value={range}
                onChange={setRange}
                disabledBefore={today}
                placeholder="Selecciona check-in y check-out"
                className="mt-1"
                numberOfMonths={2}
              />
            </div>
            <div>
              <Label htmlFor="guests">Huéspedes</Label>
              <Select value={guests} onValueChange={setGuests}>
                <SelectTrigger className="w-full mt-1">
                  <SelectValue placeholder="Selecciona el número de huéspedes" />
                </SelectTrigger>
                <SelectContent>
                  {habitaciones.filters.guestsOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full"
              >
                <Button
                  onClick={handleSearch}
                  className="w-full bg-teal-600 hover:bg-teal-700 transition-all duration-300"
                >
                  Buscar disponibilidad
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
