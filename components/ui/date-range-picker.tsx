"use client"

import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import type { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export type { DateRange }

interface DateRangePickerProps {
  value?: DateRange
  onChange?: (range: DateRange | undefined) => void
  placeholder?: string
  disabledBefore?: Date
  numberOfMonths?: number
  className?: string
  triggerClassName?: string
  align?: "start" | "center" | "end"
}

export default function DateRangePicker({
  value,
  onChange,
  placeholder = "Selecciona fechas",
  disabledBefore,
  numberOfMonths = 2,
  className,
  triggerClassName,
  align = "start"
}: DateRangePickerProps) {
  const renderTriggerLabel = () => {
    if (!value?.from) return <span>{placeholder}</span>
    if (!value.to) {
      return format(value.from, "d 'de' MMM yyyy", { locale: es })
    }
    return `${format(value.from, "d MMM", { locale: es })} - ${format(value.to, "d MMM yyyy", { locale: es })}`
  }

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            type="button"
            variant="outline"
            className={cn(
              "w-full h-10 justify-start text-left font-normal",
              !value?.from && "text-muted-foreground",
              triggerClassName
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {renderTriggerLabel()}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align={align}>
          <Calendar
            mode="range"
            selected={value}
            onSelect={onChange}
            numberOfMonths={numberOfMonths}
            locale={es}
            disabled={disabledBefore ? { before: disabledBefore } : undefined}
            defaultMonth={value?.from ?? disabledBefore ?? new Date()}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
