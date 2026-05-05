"use client"

import { useMemo, useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

interface Country {
  code: string
  name: string
  dial: string
  flag: string
}

const countries: Country[] = [
  { code: "CO", name: "Colombia", dial: "+57", flag: "🇨🇴" },
  { code: "US", name: "Estados Unidos", dial: "+1", flag: "🇺🇸" },
  { code: "MX", name: "México", dial: "+52", flag: "🇲🇽" },
  { code: "ES", name: "España", dial: "+34", flag: "🇪🇸" },
  { code: "AR", name: "Argentina", dial: "+54", flag: "🇦🇷" },
  { code: "CL", name: "Chile", dial: "+56", flag: "🇨🇱" },
  { code: "PE", name: "Perú", dial: "+51", flag: "🇵🇪" },
  { code: "BR", name: "Brasil", dial: "+55", flag: "🇧🇷" },
  { code: "EC", name: "Ecuador", dial: "+593", flag: "🇪🇨" },
  { code: "VE", name: "Venezuela", dial: "+58", flag: "🇻🇪" },
  { code: "UY", name: "Uruguay", dial: "+598", flag: "🇺🇾" },
  { code: "PY", name: "Paraguay", dial: "+595", flag: "🇵🇾" },
  { code: "BO", name: "Bolivia", dial: "+591", flag: "🇧🇴" },
  { code: "CR", name: "Costa Rica", dial: "+506", flag: "🇨🇷" },
  { code: "PA", name: "Panamá", dial: "+507", flag: "🇵🇦" },
  { code: "GT", name: "Guatemala", dial: "+502", flag: "🇬🇹" },
  { code: "CA", name: "Canadá", dial: "+1", flag: "🇨🇦" },
  { code: "GB", name: "Reino Unido", dial: "+44", flag: "🇬🇧" },
  { code: "FR", name: "Francia", dial: "+33", flag: "🇫🇷" },
  { code: "DE", name: "Alemania", dial: "+49", flag: "🇩🇪" },
  { code: "IT", name: "Italia", dial: "+39", flag: "🇮🇹" },
  { code: "PT", name: "Portugal", dial: "+351", flag: "🇵🇹" },
  { code: "NL", name: "Países Bajos", dial: "+31", flag: "🇳🇱" },
  { code: "AU", name: "Australia", dial: "+61", flag: "🇦🇺" },
]

const DEFAULT_COUNTRY_CODE = "CO"

interface PhoneInputProps {
  id?: string
  value: string
  onChange: (value: string) => void
  className?: string
  required?: boolean
}

function parseValue(value: string): { code: string; number: string } {
  if (!value) return { code: DEFAULT_COUNTRY_CODE, number: "" }
  const matched = countries
    .slice()
    .sort((a, b) => b.dial.length - a.dial.length)
    .find((c) => value.startsWith(c.dial))
  if (matched) {
    return { code: matched.code, number: value.slice(matched.dial.length).trim() }
  }
  return { code: DEFAULT_COUNTRY_CODE, number: value }
}

export function PhoneInput({ id, value, onChange, className, required }: PhoneInputProps) {
  const initial = useMemo(() => parseValue(value), [])
  const [countryCode, setCountryCode] = useState<string>(initial.code)
  const [number, setNumber] = useState<string>(initial.number)

  const dial = useMemo(
    () => countries.find((c) => c.code === countryCode)?.dial ?? "+57",
    [countryCode],
  )

  useEffect(() => {
    const trimmed = number.replace(/\s+/g, "")
    onChange(trimmed ? `${dial} ${trimmed}` : "")
  }, [countryCode, number])

  return (
    <div className={cn("flex gap-2", className)}>
      <Select value={countryCode} onValueChange={setCountryCode}>
        <SelectTrigger className="w-[120px] shrink-0" aria-label="Prefijo de país">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="max-h-72">
          {countries.map((c) => (
            <SelectItem key={c.code} value={c.code}>
              <span className="flex items-center gap-2">
                <span className="text-base">{c.flag}</span>
                <span className="text-sm tabular-nums">{c.dial}</span>
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Input
        id={id}
        type="tel"
        inputMode="tel"
        autoComplete="tel-national"
        value={number}
        onChange={(e) => setNumber(e.target.value.replace(/[^\d\s-]/g, ""))}
        className="flex-1"
        placeholder="300 000 0000"
        required={required}
      />
    </div>
  )
}
