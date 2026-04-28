"use client"

import { useMemo } from "react"
import { startOfToday } from "date-fns"
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

interface Props {
  checkIn: Date | undefined
  setCheckIn: (date: Date | undefined) => void
  checkOut: Date | undefined
  setCheckOut: (date: Date | undefined) => void
  guests: string
  setGuests: (guests: string) => void
}

export default function HabitacionesFilters({
  checkIn,
  setCheckIn,
  checkOut,
  setCheckOut,
  guests,
  setGuests
}: Props) {
  const today = useMemo(() => startOfToday(), [])

  const range: DateRange | undefined =
    checkIn || checkOut ? { from: checkIn, to: checkOut } : undefined

  const handleRangeChange = (next: DateRange | undefined) => {
    setCheckIn(next?.from)
    setCheckOut(next?.to)
  }

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">{habitaciones.filters.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-1">
              <Label>{habitaciones.filters.datesLabel}</Label>
              <DateRangePicker
                value={range}
                onChange={handleRangeChange}
                disabledBefore={today}
                placeholder={habitaciones.filters.datesPlaceholder}
                className="mt-1"
                numberOfMonths={2}
              />
            </div>
            <div>
              <Label htmlFor="guests">{habitaciones.filters.guestsLabel}</Label>
              <Select value={guests} onValueChange={setGuests}>
                <SelectTrigger className="w-full mt-1">
                  <SelectValue placeholder={habitaciones.filters.guestsPlaceholder} />
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
              <Button className={`w-full ${habitaciones.filters.searchButton.className}`}>
                {habitaciones.filters.searchButton.text}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
