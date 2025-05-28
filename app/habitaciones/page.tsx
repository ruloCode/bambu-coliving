"use client"

import { useState } from "react"
// import HeroSection from "@/components/habitaciones/HeroSection"
import HabitacionesHeader from "@/components/habitaciones/HabitacionesHeader"
import HabitacionesFilters from "@/components/habitaciones/HabitacionesFilters"
import HabitacionesList from "@/components/habitaciones/HabitacionesList"

export default function Habitaciones() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [guests, setGuests] = useState<string>("1")

  return (
    <div className="flex flex-col w-full">
      {/* <HeroSection /> */}
      <HabitacionesHeader />
      <HabitacionesFilters
        date={date}
        setDate={setDate}
        guests={guests}
        setGuests={setGuests}
      />
      <HabitacionesList />

    </div>
  )
}