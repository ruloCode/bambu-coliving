"use client"

import { addMonths, startOfMonth } from "date-fns"
import { es } from "date-fns/locale"
import { format } from "date-fns"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon } from "lucide-react"

interface MonthSelectProps {
  value: Date | undefined
  onChange: (date: Date | undefined) => void
  placeholder?: string
  minDate?: Date
  count?: number
  className?: string
}

const formatMonthLabel = (date: Date) => {
  const label = format(date, "MMMM yyyy", { locale: es })
  return label.charAt(0).toUpperCase() + label.slice(1)
}

const toMonthKey = (date: Date) => format(date, "yyyy-MM")

export default function MonthSelect({
  value,
  onChange,
  placeholder = "Selecciona un mes",
  minDate,
  count = 12,
  className,
}: MonthSelectProps) {
  const base = startOfMonth(minDate ?? new Date())

  const options = Array.from({ length: count }, (_, i) => {
    const date = addMonths(base, i)
    return { key: toMonthKey(date), date, label: formatMonthLabel(date) }
  })

  const currentKey = value ? toMonthKey(value) : undefined

  return (
    <Select
      value={currentKey}
      onValueChange={(key) => {
        const match = options.find((option) => option.key === key)
        onChange(match?.date)
      }}
    >
      <SelectTrigger className={className}>
        <div className="flex items-center gap-2">
          <CalendarIcon className="h-4 w-4 text-gray-500" />
          <SelectValue placeholder={placeholder} />
        </div>
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.key} value={option.key}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
