import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { habitaciones } from "@/content"

interface Props {
  checkIn: Date | undefined
  setCheckIn: (date: Date | undefined) => void
  checkOut: Date | undefined
  setCheckOut: (date: Date | undefined) => void
  guests: string
  setGuests: (guests: string) => void
}

export default function HabitacionesFilters({ checkIn, setCheckIn, checkOut, setCheckOut, guests, setGuests }: Props) {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">{habitaciones.filters.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <Label htmlFor="check-in">{habitaciones.filters.checkInLabel}</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {checkIn ? format(checkIn, "PPP", { locale: es }) : <span>{habitaciones.filters.checkInPlaceholder}</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={checkIn} onSelect={setCheckIn} initialFocus locale={es} disabled={(date) => date < new Date()} />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <Label htmlFor="check-out">Fecha de salida</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {checkOut ? format(checkOut, "PPP", { locale: es }) : <span>Selecciona una fecha</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={checkOut} onSelect={setCheckOut} initialFocus locale={es} disabled={(date) => date <= (checkIn || new Date())} />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <Label htmlFor="guests">{habitaciones.filters.guestsLabel}</Label>
              <Select value={guests} onValueChange={setGuests}>
                <SelectTrigger className="w-full">
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
