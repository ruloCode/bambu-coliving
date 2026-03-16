"use client"

import { useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
// import HeroSection from "@/components/habitaciones/HeroSection"
import HabitacionesHeader from "@/components/habitaciones/HabitacionesHeader"
import HabitacionesFilters from "@/components/habitaciones/HabitacionesFilters"
import HabitacionesList from "@/components/habitaciones/HabitacionesList"
import HabitacionesDetails from "@/components/habitaciones/HabitacionesDetails"

function HabitacionesContent() {
  const searchParams = useSearchParams()

  const [checkIn, setCheckIn] = useState<Date | undefined>(() => {
    const param = searchParams.get("checkIn")
    return param ? new Date(param) : new Date()
  })
  const [checkOut, setCheckOut] = useState<Date | undefined>(() => {
    const param = searchParams.get("checkOut")
    return param ? new Date(param) : undefined
  })
  const [guests, setGuests] = useState<string>(() => {
    return searchParams.get("guests") || "1"
  })

  return (
    <div className="flex flex-col w-full">
      {/* <HeroSection /> */}
      <HabitacionesHeader />
      <HabitacionesFilters
        checkIn={checkIn}
        setCheckIn={setCheckIn}
        checkOut={checkOut}
        setCheckOut={setCheckOut}
        guests={guests}
        setGuests={setGuests}
      />
      <HabitacionesList />
      <HabitacionesDetails />
    </div>
  )
}

export default function Habitaciones() {
  return (
    <Suspense>
      <HabitacionesContent />
    </Suspense>
  )
}
