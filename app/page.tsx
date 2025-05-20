"use client"

import { Button } from "@/components/ui/button"
import HeroSection from "@/components/HeroSection"
import SearchBar from "@/components/SearchBar"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon, ChevronRight, Wifi, Users, MapPin, Coffee } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { useState } from "react"
import TestimonialCard from "@/components/testimonial-card"
import RoomCard from "@/components/room-card"
import FeaturedRooms from "@/components/FeaturedRooms"
import Benefits from "@/components/Benefits"
import Testimonials from "@/components/Testimonials"
import CTA from "@/components/CTA"

export default function Home() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [guests, setGuests] = useState<string>("1")

  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <SearchBar />
      {/* Featured Rooms */}
      <FeaturedRooms />

      {/* Benefits */}
      <Benefits />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <CTA />
    </div>
  )
}
