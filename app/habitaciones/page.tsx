"use client"

import { useEffect, useState, Suspense } from "react"
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

  useEffect(() => {
    const cameFromSearch = searchParams.has("guests") || searchParams.has("checkIn")
    if (!cameFromSearch) return

    const isMobile = window.matchMedia("(max-width: 767px)").matches
    if (!isMobile) return

    const target = document.getElementById("resultados")
    if (!target) return

    const id = window.requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
    })
    return () => window.cancelAnimationFrame(id)
  }, [searchParams])

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
