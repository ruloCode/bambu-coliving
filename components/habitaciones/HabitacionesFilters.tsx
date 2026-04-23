import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import MonthSelect from "@/components/ui/month-select"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { addMonths } from "date-fns"
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
              <MonthSelect
                value={checkIn}
                onChange={setCheckIn}
                placeholder={habitaciones.filters.checkInPlaceholder}
                className="w-full"
              />
            </div>
            <div>
              <Label htmlFor="check-out">Mes de salida</Label>
              <MonthSelect
                value={checkOut}
                onChange={setCheckOut}
                placeholder="Selecciona un mes"
                minDate={checkIn ? addMonths(checkIn, 1) : undefined}
                className="w-full"
              />
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
