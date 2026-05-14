// Content configuration for home page components

// Hero Section Content
export const heroContent = {
  backgroundImage: "/images/Creativos1.jpg",
  alt: "Bambu Coliving Bogotá",
  titles: {
    main: "BAMBU",
    subtitle1: "TU ESPACIO,",
    subtitle2: "TU",
    subtitle3: "ESENCIA"
  },
  cta: {
    text: "Reserva Ahora",
    href: "https://wa.me/573007438588?text=Hola,%20estoy%20interesado%20en%20reservar%20una%20habitación%20en%20Bambu%20Coliving",
    isExternal: true
  }
}

// Featured Rooms Content
export const featuredRoomsContent = {
  title: "Nuestros Espacios",
  description: "Descubre nuestras habitaciones diseñadas para ofrecerte confort, privacidad y todo lo que necesitas para vivir, trabajar y disfrutar en Bogotá.",
  rooms: [
    {
      title: "Nogal - 19m²",
      image: "/images/bambu_fotos/H7-4763.jpg",
      monthlyFromPrice: 1496000,
      features: ["Cama doble", "WiFi ilimitado", "Escritorio", "Baño privado", "Closet L"],
      slug: "nogal"
    },
    {
      title: "Samán - 16m²",
      image: "/images/bambu_fotos/H4-4805.jpg",
      monthlyFromPrice: 1304000,
      features: ["Cama doble", "WiFi ilimitado", "Escritorio", "Baño privado", "Closet XL"],
      slug: "saman"
    },
    {
      title: "Palma de Cera - 19m²",
      image: "/images/bambu_fotos/H8-4775.jpg",
      monthlyFromPrice: 1440000,
      features: ["Cama doble", "WiFi ilimitado", "Escritorio", "Baño privado", "Closet XL"],
      slug: "palma-de-cera"
    }
  ],
  cta: {
    text: "Ver todas las habitaciones",
    href: "/habitaciones"
  }
}

// Benefits Content
export const benefitsContent = {
  title: "¿Por qué elegir Bambu?",
  description: "Ofrecemos más que un lugar para vivir. Somos una comunidad donde podrás conectar, crecer y disfrutar.",
  benefits: [
    {
      icon: "MapPin",
      iconColor: "rose",
      title: "Bogotá Auténtica",
      description: "Descubre la ciudad con experiencias únicas y planes locales.",
      href: "/planes"
    },
    {
      icon: "MapPin",
      iconColor: "teal",
      title: "Ubicación Estratégica",
      description: "En el corazón de Bogotá, cerca de todo lo que necesitas.",
      href: "/nosotros#ubicacion"
    },
    {
      icon: "Coffee",
      iconColor: "rose",
      title: "Espacios Vibrantes",
      description: "Coworking, cocina y áreas de descanso a tu disposición.",
      href: "/espacios-compartidos"
    }
  ]
}

// Testimonials Content
export const testimonialsContent = {
  title: "Lo que dicen nuestros residentes",
  description: "Experiencias reales de nuestra comunidad internacional.", 
  testimonials: [
    {
      name: "María González",
      origin: "España",
      quote: "Encontré en Bambu no solo un lugar para vivir, sino una familia. La ubicación es perfecta y las instalaciones superaron mis expectativas.",
      image: "/images/persona1.jpg"
    },
    {
      name: "John Smith",
      origin: "Estados Unidos", 
      quote: "Como nómada digital, valoro mucho la conexión a internet y los espacios de trabajo. Bambu ofrece todo eso y más, con una comunidad increíble.",
      image: "/images/persona2.jpg"
    },
    {
      name: "Luisa Fernández",
      origin: "Colombia",
      quote: "La flexibilidad de los contratos y la calidad de los espacios hacen de Bambu la mejor opción en Bogotá para profesionales jóvenes.",
      image: "/images/luisa.png"
    }
  ]
}

// CTA Section Content
export const ctaContent = {
  title: "¿Listo para unirte a nuestra comunidad?",
  description: "Reserva ahora y sé parte de la comunidad Bambu Coliving.",
  cta: {
    text: "Reserva tu espacio",
    href: "/habitaciones"
  }
}

// ============= HABITACIONES PAGE CONTENT =============

const habitacionesHeader = {
  title: "Nuestras Habitaciones",
  description: "Descubre nuestros diferentes tipos de habitaciones diseñadas para ofrecerte la mejor experiencia de coliving en Bogotá.",
  backgroundColor: "bg-teal-600",
  textColor: "text-white"
}

const habitacionesFilters = {
  title: "Filtra tu búsqueda",
  datesLabel: "Fechas (check-in / check-out)",
  datesPlaceholder: "Selecciona check-in y check-out",
  guestsLabel: "Huéspedes",
  guestsPlaceholder: "Selecciona el número de huéspedes",
  guestsOptions: [
    { value: "1", label: "1 Huésped" },
    { value: "2", label: "2 Huéspedes" }
  ],
  searchButton: {
    text: "Buscar disponibilidad",
    className: "bg-teal-600 hover:bg-teal-700"
  }
}

const habitacionesList = {
  title: "Todas nuestras habitaciones",
  description: "Encuentra el espacio perfecto para tu estilo de vida",
  rooms: [
    {
      title: "Gualanday - 12m²",
      image: "/images/bambu_fotos/H1-4720.jpg",
      monthlyFromPrice: 952000,
      features: ["Cama doble", "WiFi ilimitado", "Escritorio", "Baño privado", "Closet XS"],
      slug: "gualanday",
      category: "privada"
    },
    {
      title: "Ceiba - 14m²",
      image: "/images/bambu_fotos/H2-4952.jpg",
      monthlyFromPrice: 1152000,
      features: ["Cama doble", "WiFi ilimitado", "Escritorio", "Baño privado", "Closet L"],
      slug: "ceiba",
      category: "privada"
    },
    {
      title: "Ocobo - 9m²",
      image: "/images/bambu_fotos/H3-4817.jpg",
      monthlyFromPrice: 752000,
      features: ["Cama semidoble", "WiFi ilimitado", "Escritorio", "Baño privado", "Closet S"],
      slug: "ocobo",
      category: "privada"
    },
    {
      title: "Samán - 16m²",
      image: "/images/bambu_fotos/H4-4805.jpg",
      monthlyFromPrice: 1304000,
      features: ["Cama doble", "WiFi ilimitado", "Escritorio", "Baño privado", "Closet XL"],
      slug: "saman",
      category: "suite"
    },
    {
      title: "Cedro - 17m²",
      image: "/images/bambu_fotos/H5-4730.jpg",
      monthlyFromPrice: 1352000,
      features: ["Cama doble", "WiFi ilimitado", "Escritorio", "Baño privado", "Closet XL"],
      slug: "cedro",
      category: "suite"
    },
    {
      title: "Caracolí - 14m²",
      image: "/images/bambu_fotos/H6-4747.jpg",
      monthlyFromPrice: 1136000,
      features: ["Cama doble", "WiFi ilimitado", "Escritorio", "Baño privado", "Closet S"],
      slug: "caracoli",
      category: "privada"
    },
    {
      title: "Nogal - 19m²",
      image: "/images/bambu_fotos/H7-4763.jpg",
      monthlyFromPrice: 1496000,
      features: ["Cama doble", "WiFi ilimitado", "Escritorio", "Baño privado", "Closet L"],
      slug: "nogal",
      category: "suite"
    },
    {
      title: "Palma de Cera - 19m²",
      image: "/images/bambu_fotos/H8-4775.jpg",
      monthlyFromPrice: 1440000,
      features: ["Cama doble", "WiFi ilimitado", "Escritorio", "Baño privado", "Closet XL"],
      slug: "palma-de-cera",
      category: "suite"
    },
    {
      title: "Sauce - 18m²",
      image: "/images/bambu_fotos/H9-4663.jpg",
      monthlyFromPrice: 1416000,
      features: ["Cama doble", "WiFi ilimitado", "Escritorio", "Baño privado", "Closet L"],
      slug: "sauce",
      category: "suite"
    },
    {
      title: "Balso - 13m²",
      image: "/images/bambu_fotos/H10-4687.jpg",
      monthlyFromPrice: 1024000,
      features: ["Cama doble", "WiFi ilimitado", "Escritorio", "Baño privado", "Closet S"],
      slug: "balso",
      category: "privada"
    },
    {
      title: "Chicalá - 16m²",
      image: "/images/bambu_fotos/H11-4705.jpg",
      monthlyFromPrice: 1256000,
      features: ["Cama doble", "WiFi ilimitado", "Escritorio", "Baño privado amplio", "Closet L"],
      slug: "chicala",
      category: "suite"
    }
  ]
}

const habitacionesDetails = {
  amenities: {
    title: "Comodidades incluidas",
    description: "Todas nuestras habitaciones incluyen:",
    list: [
      "WiFi de alta velocidad",
      "Aseo cada 2 semanas",
      "Servicios públicos incluidos (agua, luz, gas)",
      "Acceso a espacios comunes",
      "Seguridad 24/7"
    ]
  },
  policies: {
    title: "Políticas de estadía",
    checkIn: "Check-in: 3:00 PM",
    checkOut: "Check-out: 11:00 AM",
    cancellation: "Política de cancelación flexible"
  },
  location: {
    title: "Ubicación privilegiada",
    description: "Nos encontramos en el corazón de Bogotá, cerca de:",
    landmarks: [
      "Zona Centro (5 min)",
      "Chapinero (10 min)",
      "TransMilenio (2 min)", 
      "Centros comerciales (15 min)",
      "Restaurantes y cafés (caminando)",
      "Parques y espacios verdes (caminando)"
    ]
  }
}

// Export habitaciones content
export const habitaciones = {
  header: habitacionesHeader,
  filters: habitacionesFilters,
  roomsList: habitacionesList,
  details: habitacionesDetails
}

// Types for better TypeScript support
export interface RoomData {
  title: string
  image: string
  monthlyFromPrice: number
  features: string[]
  slug: string
  category?: string
}

export interface BenefitData {
  icon: string
  iconColor: "teal" | "rose"
  title: string
  description: string
}

export interface TestimonialData {
  name: string
  origin: string
  quote: string
  image: string
}

export interface CTAButton {
  text: string
  href: string
  isExternal?: boolean
}

export interface GuestOption {
  value: string
  label: string
}

// ============= ROOM DETAILS CONTENT =============

export interface RoomFeature {
  name: string
  iconName: string
}

export type StayTier =
  | "361+"
  | "180-360"
  | "90-179"
  | "30-89"
  | "15-29"
  | "7-14"
  | "3-6"
  | "1-2"

export type NightlyRates = Record<StayTier, number>

export interface StayTierDefinition {
  tier: StayTier
  minNights: number
  label: string
  shortLabel: string
}

// Ordered from longest stay (cheapest per night) to shortest (most expensive).
// `minNights` is the minimum total stay in nights for the tier to apply.
export const STAY_TIERS: StayTierDefinition[] = [
  { tier: "361+", minNights: 361, label: "361 días o más", shortLabel: "361+ noches" },
  { tier: "180-360", minNights: 180, label: "180 a 360 días", shortLabel: "180-360 noches" },
  { tier: "90-179", minNights: 90, label: "90 a 179 días", shortLabel: "90-179 noches" },
  { tier: "30-89", minNights: 30, label: "30 a 89 días", shortLabel: "30-89 noches" },
  { tier: "15-29", minNights: 15, label: "15 a 29 días", shortLabel: "15-29 noches" },
  { tier: "7-14", minNights: 7, label: "7 a 14 días", shortLabel: "7-14 noches" },
  { tier: "3-6", minNights: 3, label: "3 a 6 días", shortLabel: "3-6 noches" },
  { tier: "1-2", minNights: 1, label: "1 a 2 días", shortLabel: "1-2 noches" }
]

// Stays of this many nights or more are billed as monthly payments instead of
// a lump-sum total (matches the long-stay residential model).
export const LONG_STAY_THRESHOLD_NIGHTS = 90

// Number of nights used to convert a per-night rate to a monthly equivalent.
export const MONTHLY_BILLING_NIGHTS = 30

// Flat per-night surcharge per additional guest, varying by stay tier.
export const EXTRA_GUEST_NIGHT_RATES: Record<StayTier, number> = {
  "361+": 13000,
  "180-360": 15000,
  "90-179": 18000,
  "30-89": 21000,
  "15-29": 24000,
  "7-14": 27000,
  "3-6": 30000,
  "1-2": 35000
}

export function getExtraGuestRate(tier: StayTier): number {
  return EXTRA_GUEST_NIGHT_RATES[tier]
}

export interface DetailedRoom {
  title: string
  description: string
  features: RoomFeature[]
  images: string[]
  size: string
  maxGuests: number
  nightlyRates: NightlyRates
}

export const roomDetails: Record<string, DetailedRoom> = {
  "gualanday": {
    title: "Gualanday",
    description: "De flores violetas y místicas; aporta un aire de magia y serenidad al entorno. Habitación acogedora, perfecta para quienes buscan un espacio íntimo y relajante para descansar y trabajar.",
    features: [
      { name: "Cama doble", iconName: "Bed" },
      { name: "WiFi ilimitado", iconName: "Wifi" },
      { name: "Escritorio", iconName: "MonitorSmartphone" },
      { name: "Closet XS", iconName: "Warehouse" },
      { name: "Baño privado", iconName: "Bath" }
    ],
    images: [
      "/images/bambu_fotos/H1-4720.jpg",
      "/images/bambu_fotos/H1-4726.jpg"
    ],
    size: "12m²",
    maxGuests: 2,
    nightlyRates: {
      "361+": 31733,
      "180-360": 36267,
      "90-179": 38533,
      "30-89": 40800,
      "15-29": 86124,
      "7-14": 109924,
      "3-6": 123790,
      "1-2": 136000
    }
  },
  "ceiba": {
    title: "Ceiba",
    description: "La gigante protectora de la selva; representa la sabiduría ancestral y la conexión espiritual. Habitación con detalles únicos y amplio espacio, ideal para profesionales y nómadas digitales.",
    features: [
      { name: "Cama doble", iconName: "Bed" },
      { name: "WiFi ilimitado", iconName: "Wifi" },
      { name: "Escritorio", iconName: "MonitorSmartphone" },
      { name: "Closet L", iconName: "Warehouse" },
      { name: "Baño privado", iconName: "Bath" }
    ],
    images: [
      "/images/bambu_fotos/H2-4952.jpg",
      "/images/bambu_fotos/H2-4959.jpg"
    ],
    size: "14m²",
    maxGuests: 2,
    nightlyRates: {
      "361+": 38400,
      "180-360": 43866,
      "90-179": 46629,
      "30-89": 49371,
      "15-29": 104229,
      "7-14": 133029,
      "3-6": 149760,
      "1-2": 164571
    }
  },
  "ocobo": {
    title: "Ocobo",
    description: "La delicadeza rosada de la montaña; evoca la belleza sutil y el renacer de la primavera. Espacio compacto pero luminoso, perfecto para estadías económicas.",
    features: [
      { name: "Cama semidoble", iconName: "Bed" },
      { name: "WiFi ilimitado", iconName: "Wifi" },
      { name: "Escritorio", iconName: "MonitorSmartphone" },
      { name: "Closet S", iconName: "Warehouse" },
      { name: "Baño privado", iconName: "Bath" }
    ],
    images: [
      "/images/bambu_fotos/H3-4817.jpg",
      "/images/bambu_fotos/H3-4820.jpg",
      "/images/bambu_fotos/H3-4824.jpg"
    ],
    size: "9m²",
    maxGuests: 2,
    nightlyRates: {
      "361+": 25067,
      "180-360": 28648,
      "90-179": 30438,
      "30-89": 32229,
      "15-29": 68038,
      "7-14": 86838,
      "3-6": 97760,
      "1-2": 107429
    }
  },
  "saman": {
    title: "Samán",
    description: "El árbol de la hospitalidad; su copa inmensa es el refugio perfecto para el descanso. Suite espaciosa con closet XL y cama doble, diseñada para quienes valoran el confort.",
    features: [
      { name: "Cama doble", iconName: "Bed" },
      { name: "WiFi ilimitado", iconName: "Wifi" },
      { name: "Escritorio dedicado", iconName: "MonitorSmartphone" },
      { name: "Closet XL", iconName: "Warehouse" },
      { name: "Baño privado", iconName: "Bath" }
    ],
    images: [
      "/images/bambu_fotos/H4-4805.jpg",
      "/images/bambu_fotos/H4-4811.jpg",
      "/images/bambu_fotos/H4-4815.jpg"
    ],
    size: "16m²",
    maxGuests: 2,
    nightlyRates: {
      "361+": 43467,
      "180-360": 49676,
      "90-179": 52781,
      "30-89": 55886,
      "15-29": 117981,
      "7-14": 150581,
      "3-6": 169524,
      "1-2": 186286
    }
  },
  "cedro": {
    title: "Cedro",
    description: "El aroma de la tradición; una madera preciosa que evoca lujo rústico y durabilidad. Una de nuestras suites más amplias, con ambiente perfecto para estadías largas.",
    features: [
      { name: "Cama doble", iconName: "Bed" },
      { name: "WiFi ilimitado", iconName: "Wifi" },
      { name: "Escritorio dedicado", iconName: "MonitorSmartphone" },
      { name: "Closet XL", iconName: "Warehouse" },
      { name: "Baño privado", iconName: "Bath" }
    ],
    images: [
      "/images/bambu_fotos/H5-4730.jpg",
      "/images/bambu_fotos/H5-4733.jpg",
      "/images/bambu_fotos/H5-4744.jpg"
    ],
    size: "17m²",
    maxGuests: 2,
    nightlyRates: {
      "361+": 45067,
      "180-360": 51505,
      "90-179": 54724,
      "30-89": 57943,
      "15-29": 122324,
      "7-14": 156124,
      "3-6": 175760,
      "1-2": 193143
    }
  },
  "caracoli": {
    title: "Caracolí",
    description: "El titán de los ríos; madera robusta que cuenta historias de agua y tierra caliente. Ubicación privilegiada con vista y tranquilidad, espacio cómodo para profesionales.",
    features: [
      { name: "Cama doble", iconName: "Bed" },
      { name: "WiFi ilimitado", iconName: "Wifi" },
      { name: "Escritorio", iconName: "MonitorSmartphone" },
      { name: "Closet S", iconName: "Warehouse" },
      { name: "Baño privado", iconName: "Bath" }
    ],
    images: [
      "/images/bambu_fotos/H6-4747.jpg",
      "/images/bambu_fotos/H6-4751.jpg"
    ],
    size: "14m²",
    maxGuests: 2,
    nightlyRates: {
      "361+": 37867,
      "180-360": 43276,
      "90-179": 45981,
      "30-89": 48686,
      "15-29": 102781,
      "7-14": 131181,
      "3-6": 147650,
      "1-2": 162286
    }
  },
  "nogal": {
    title: "Nogal",
    description: "El señor de la capital; representa la nobleza de la madera y la resistencia bogotana. Nuestra habitación más grande y premium, suite ejecutiva con todo el espacio que necesitas.",
    features: [
      { name: "Cama doble", iconName: "Bed" },
      { name: "WiFi ilimitado", iconName: "Wifi" },
      { name: "Escritorio dedicado", iconName: "MonitorSmartphone" },
      { name: "Closet L", iconName: "Warehouse" },
      { name: "Baño privado", iconName: "Bath" }
    ],
    images: [
      "/images/bambu_fotos/H7-4763.jpg",
      "/images/bambu_fotos/H7-4770.jpg",
      "/images/bambu_fotos/H7-4771.jpg"
    ],
    size: "19m²",
    maxGuests: 2,
    nightlyRates: {
      "361+": 49867,
      "180-360": 56990,
      "90-179": 60552,
      "30-89": 64114,
      "15-29": 135352,
      "7-14": 172752,
      "3-6": 194480,
      "1-2": 213714
    }
  },
  "palma-de-cera": {
    title: "Palma de Cera",
    description: "Nuestro símbolo nacional; representa la elegancia que toca el cielo de los Andes. Suite amplia con carácter especial, closet XL y espacio generoso para comodidad premium.",
    features: [
      { name: "Cama doble", iconName: "Bed" },
      { name: "WiFi ilimitado", iconName: "Wifi" },
      { name: "Escritorio dedicado", iconName: "MonitorSmartphone" },
      { name: "Closet XL", iconName: "Warehouse" },
      { name: "Baño privado", iconName: "Bath" }
    ],
    images: [
      "/images/bambu_fotos/H8-4775.jpg",
      "/images/bambu_fotos/H8-4780.jpg",
      "/images/bambu_fotos/H8-4789.jpg",
      "/images/bambu_fotos/H8-4790.jpg"
    ],
    size: "19m²",
    maxGuests: 2,
    nightlyRates: {
      "361+": 48000,
      "180-360": 54857,
      "90-179": 58286,
      "30-89": 61714,
      "15-29": 130286,
      "7-14": 166286,
      "3-6": 187240,
      "1-2": 205714
    }
  },
  "sauce": {
    title: "Sauce",
    description: "La danza del viento; sus ramas colgantes inspiran paz, fluidez y una calma profunda. Suite en primer piso con fácil acceso, espacio amplio ideal para estadías prolongadas.",
    features: [
      { name: "Cama doble", iconName: "Bed" },
      { name: "WiFi ilimitado", iconName: "Wifi" },
      { name: "Escritorio dedicado", iconName: "MonitorSmartphone" },
      { name: "Closet L", iconName: "Warehouse" },
      { name: "Baño privado", iconName: "Bath" }
    ],
    images: [
      "/images/bambu_fotos/H9-4663.jpg",
      "/images/bambu_fotos/H9-4666.jpg",
      "/images/bambu_fotos/H9-4675.jpg"
    ],
    size: "18m²",
    maxGuests: 2,
    nightlyRates: {
      "361+": 47200,
      "180-360": 53943,
      "90-179": 57314,
      "30-89": 60686,
      "15-29": 128114,
      "7-14": 163514,
      "3-6": 184000,
      "1-2": 202286
    }
  },
  "balso": {
    title: "Balso",
    description: "La ligereza del bosque; una madera suave y blanca que simboliza la paz y la sencillez. Habitación con personalidad única y buen espacio, perfecta para profesionales.",
    features: [
      { name: "Cama doble", iconName: "Bed" },
      { name: "WiFi ilimitado", iconName: "Wifi" },
      { name: "Escritorio", iconName: "MonitorSmartphone" },
      { name: "Closet S", iconName: "Warehouse" },
      { name: "Baño privado", iconName: "Bath" }
    ],
    images: [
      "/images/bambu_fotos/H10-4687.jpg",
      "/images/bambu_fotos/H10-4693.jpg"
    ],
    size: "13m²",
    maxGuests: 2,
    nightlyRates: {
      "361+": 34133,
      "180-360": 39010,
      "90-179": 41448,
      "30-89": 43886,
      "15-29": 92648,
      "7-14": 118248,
      "3-6": 133120,
      "1-2": 146286
    }
  },
  "chicala": {
    title: "Chicalá",
    description: "El destello del camino; arbusto de flores amarillas que celebra la resistencia y el brillo. Suite con baño amplio y espacioso, ideal para quienes valoran el confort.",
    features: [
      { name: "Cama doble", iconName: "Bed" },
      { name: "WiFi ilimitado", iconName: "Wifi" },
      { name: "Escritorio dedicado", iconName: "MonitorSmartphone" },
      { name: "Closet L", iconName: "Warehouse" },
      { name: "Baño privado amplio", iconName: "Bath" }
    ],
    images: [
      "/images/bambu_fotos/H11-4705.jpg",
      "/images/bambu_fotos/H11-4712.jpg",
      "/images/bambu_fotos/H11-4713.jpg"
    ],
    size: "16m²",
    maxGuests: 2,
    nightlyRates: {
      "361+": 41867,
      "180-360": 47848,
      "90-179": 50838,
      "30-89": 53829,
      "15-29": 113638,
      "7-14": 145038,
      "3-6": 163200,
      "1-2": 179429
    }
  }
}

// Resolve the matching tier for a stay length in nights.
// Returns the tier whose `minNights` is the largest value <= nights.
// Falls back to the shortest tier ("1-2") for any value < 1.
export function getTierForNights(nights: number): StayTier {
  if (nights < 1) return "1-2"
  for (const definition of STAY_TIERS) {
    if (nights >= definition.minNights) return definition.tier
  }
  return "1-2"
}

export function getStayTierDefinition(tier: StayTier): StayTierDefinition {
  const found = STAY_TIERS.find((definition) => definition.tier === tier)
  if (!found) throw new Error(`Unknown stay tier: ${tier}`)
  return found
}

export function getNightlyRate(slug: string, nights: number): number | null {
  const room = roomDetails[slug]
  if (!room) return null
  const tier = getTierForNights(nights)
  return room.nightlyRates[tier]
}

// ============= BLOG CONTENT =============

export interface BlogPost {
  id: number
  title: string
  excerpt: string
  author: string
  image: string
  slug: string
}

export const blogContent = {
  header: {
    title: "Blog de Bambu Coliving",
    description: "Descubre consejos, historias y guías para sacar el máximo provecho de tu experiencia de coliving en Bogotá.",
    image: "/images/Creativos2.jpg"
  },
  newsletter: {
    title: "Suscríbete a nuestro newsletter",
    description: "Recibe las últimas actualizaciones, consejos y eventos directamente en tu bandeja de entrada.",
    buttonText: "Suscribirse",
    placeholder: "Tu correo electrónico"
  },
  posts: [
    {
      id: 1,
      title: "5 razones para elegir coliving en tu próxima aventura",
      excerpt: "Descubre por qué el coliving se ha convertido en la opción preferida para nómadas digitales y profesionales en todo el mundo.",
      author: "María Rodríguez",
      image: "/images/Creativos1.jpg",
      slug: "5-razones-para-elegir-coliving"
    },
    {
      id: 2,
      title: "Guía para nómadas digitales en Bogotá",
      excerpt: "Todo lo que necesitas saber para trabajar remotamente desde la vibrante capital colombiana.",
      author: "Carlos Gómez",
      image: "/images/Creativos1.jpg",
      slug: "guia-nomadas-digitales-bogota"
    },
    {
      id: 3,
      title: "Cómo construir una comunidad en espacios compartidos",
      excerpt: "Estrategias y consejos para fomentar conexiones significativas en entornos de coliving.",
      author: "Laura Martínez",
      image: "/images/Creativos1.jpg",
      slug: "construir-comunidad-espacios-compartidos"
    },
    {
      id: 4,
      title: "Los mejores cafés para trabajar cerca de Bambu Coliving",
      excerpt: "Una selección de cafeterías con buen WiFi, enchufes y ambiente agradable para tus días de trabajo fuera de casa.",
      author: "Andrés Pérez",
      image: "/images/Creativos1.jpg",
      slug: "mejores-cafes-para-trabajar"
    },
    {
      id: 5,
      title: "Eventos imperdibles en Bogotá durante el verano 2025",
      excerpt: "Festivales, exposiciones y actividades culturales para disfrutar al máximo tu estancia en la ciudad.",
      author: "Sofía Vargas",
      image: "/images/Creativos1.jpg",
      slug: "eventos-bogota-verano-2025"
    },
    {
      id: 6,
      title: "Equilibrio entre trabajo y vida personal en espacios de coliving",
      excerpt: "Consejos prácticos para mantener la productividad sin sacrificar tu bienestar en entornos compartidos.",
      author: "Daniel Moreno",
      image: "/images/Creativos1.jpg",
      slug: "equilibrio-trabajo-vida-personal"
    }
  ]
}

// Blog post content interface
export interface BlogPostContent extends BlogPost {
  content: {
    mainImage: string
    introduction: string
    sections: {
      title: string
      content: string
      image?: string
    }[]
    conclusion: string
    tags: string[]
    relatedPosts: string[] // slugs of related posts
  }
}

// Detailed blog post content
export const blogPostsContent: Record<string, BlogPostContent> = {
  "slowmads-en-bogota": {
    id: 1,
    title: "Slowmads en Bogotá: El Auge del Coliving para una inmersión cultural real.",
    excerpt: "El mundo de los viajes está en constante evolución. La figura del nómada digital, siempre conectado y en rápido movimiento, está dando paso a una nueva ola de viajeros...",
    author: "Fausto Abner",
    image: "/images/blog_slowmad.jpg",
    slug: "slowmads-en-bogota",
    content: {
      mainImage: "/images/blog_slowmad.jpg",
      introduction: "El mundo de los viajes está en constante evolución. La figura del nómada digital, siempre conectado y en rápido movimiento, está dando paso a una nueva ola de viajeros: los slowmads. Estos exploradores conscientes ya no buscan coleccionar sellos en su pasaporte a toda velocidad; anhelan algo más profundo. Buscan autenticidad, conexión y transformación. Y en esta búsqueda, han encontrado el ecosistema perfecto en espacios como Bambu Coliving, que redefine lo que es coliving y lo eleva a una experiencia de vida.",
      sections: [
        
        {
          title: "El Fin de la Prisa: Nace el Viajero Consciente",
          content: "La tendencia es clara y las cifras la respaldan. Un informe de MBO Partners de 2024 revela que los nómadas digitales están cambiando su ritmo: ahora visitan menos lugares, pero se quedan más tiempo en cada uno, con una estancia promedio de casi doce semanas. Este no es un simple cambio de itinerario, es un cambio de mentalidad. El slowmadismo es la respuesta al agotamiento digital y a la superficialidad de los viajes turísticos tradicionales. Es una elección deliberada por la calidad sobre la cantidad, priorizando la inmersión cultural y las conexiones humanas genuinas por encima de una lista de atracciones.",
          image: "/images/blog_slowmad.jpg"
        },
        {
          title: "Más que un Techo: El Coliving como Epicentro de la Comunidad",
          content: "Para un slowmad, un alojamiento es mucho más que cuatro paredes y una buena conexión a internet. Es su base de operaciones, su puerta de entrada a una nueva cultura y, lo más importante, su comunidad. Aquí es donde el coliving en Bogotá brilla con luz propia, ofreciendo mucho más que simples habitaciones amuebladas en arriendo. Se convierte en una de las mejores alternativas a un apartaestudio al proporcionar un entorno diseñado para la interacción. Espacios como cocinas compartidas, salas de estar y áreas de trabajo se transforman en escenarios de encuentros espontáneos, intercambios culturales y amistades duraderas, combatiendo la soledad que a menudo enfrentan los viajeros.",
        },
        {
          title: "Bambu Coliving: Tu Hogar para Vivir Bogotá, no solo para Visitarla",
          content: "En Bambu Coliving entendemos este nuevo paradigma. No ofrecemos solo un alquiler de habitación con baño privado; curamos una experiencia de vivienda compartida para que te sientas parte de la vibrante energía de Bogotá desde el primer día. Nuestro modelo de coliving todo incluido simplifica tu vida, permitiéndote enfocarte en lo que realmente importa: conectar, explorar y crecer. Olvídate de los contratos rígidos; con opciones de arriendo de habitaciones por meses, te damos la flexibilidad que tu estilo de vida necesita.",
          image: "/images/blog_slowmad1.png"
        },
        {
          title: "Un Ecosistema para Crecer y Conectar",
          content: "Nuestros espacios están pensados para el profesional moderno y el estudiante que busca más. La combinación de espacios de coliving con coworking integrados fomenta un equilibrio perfecto entre la vida personal y la profesional, ideal para el coliving para nómadas digitales y jóvenes en desarrollo. No se trata solo de convivencia en espacios compartidos, sino de crear una comunidad coliving activa y enriquecedora donde el networking surge de forma natural y las ideas fluyen libremente. Por eso, muchos nos consideran entre los mejores coliving en Bogotá."
        },
        {
          title: "Da el Paso hacia un Viaje con Propósito",
          content: "El movimiento slowmad ha llegado para quedarse, redefiniendo el éxito de un viaje no por la distancia recorrida, sino por la profundidad de la experiencia. Si estás buscando un alojamiento flexible en Bogotá que sea más que un simple lugar para dormir, si anhelas conectar con una comunidad de personas afines y vivir la ciudad de una manera auténtica, estás en el lugar correcto. Descubre cómo funciona un coliving diseñado para el viajero consciente. Explora los espacios y la comunidad que Bambu Coliving tiene para ti. Tu próxima gran aventura empieza viviendo con propósito.",
        },
      ],
      conclusion: "El coliving no es solo una tendencia pasajera, sino una respuesta moderna a las necesidades cambiantes de una generación que valora la flexibilidad, la comunidad y las experiencias significativas por encima de las posesiones materiales.",
      tags: ["coliving", "slowmads", "comunidad", "estilo de vida", "flexibilidad"],
      relatedPosts: ["mas-alla-de-las-paredes", "coliving-vs-residencia"]
    }
  },
  "el-auge-del-coliving": {
    id: 2,
    title: "Guía para nómadas digitales en Bogotá",
    excerpt: "El coliving se consolida en Bogotá como una solución de vivienda cada vez más popular, atrayendo a una diversa gama de residentes.",
    author: "Fausto Abner",
    image: "/images/Creativos1.jpg",
    slug: "el-auge-del-coliving",
    content: {
      mainImage: "/images/Creativos3.jpg",
      introduction: "El coliving se consolida en Bogotá como una solución de vivienda cada vez más popular, atrayendo a una diversa gama de residentes, desde jóvenes profesionales y estudiantes hasta nómadas digitales. Un análisis detallado de los términos de búsqueda más utilizados revela un mercado dinámico con claras intenciones de conversión, una creciente necesidad de información y una competencia que abarca desde operadores especializados hasta el mercado de arriendo tradicional.",
      sections: [
        {
          title: "Búsquedas de Alta Intención: La Conversión Directa y la Comparación de Precios.",
          content: "En la cima de las búsquedas con mayor potencial de conversión se encuentra Coliving Bogotá. Este término, de alta especificidad, es utilizado por usuarios que ya conocen el concepto y buscan activamente un espacio en la capital colombiana. Directamente relacionada con la intención de compra, la búsqueda Coliving precios indica que el usuario se encuentra en una fase avanzada de consideración, comparando activamente opciones. Los precios en Bogotá varían significativamente dependiendo de la ubicación, las comodidades y el tipo de habitación, con opciones que pueden ir desde aproximadamente $1.000.000 COP hasta más de $4.000.000 COP mensuales, según lo observado en diversas plataformas. Varios operadores destacan en este segmento al promocionar un modelo todo incluido, una propuesta de valor atractiva para quienes buscan simplicidad en sus finanzas. Para aquellos que buscan validar su elección, Mejores coliving en Bogotá es una búsqueda crucial. Aquí, los rankings y las listas de blogs especializados y plataformas como Holafly y VICO juegan un papel fundamental, posicionando los diferentes espacios ofrecidos en Bogotá. ",
          image: "/images/Creativos1.jpg"
        },
        {
          title: "El Mercado Amplio: Sinónimos y Competencia con el Arriendo Tradicional.",
          content: "El término genérico Coliving atrae a un público en fase de exploración. Las búsquedas revelan un interés por entender el concepto, sus ventajas y cómo funciona, con resultados que a menudo provienen de medios de comunicación y blogs informativos. Sin embargo, el coliving compite directamente con el mercado de arriendo tradicional a través de términos como Habitaciones amuebladas en arriendo, Vivienda compartida, y Apartamentos compartidos. Estas búsquedas, con un alto volumen, muestran un solapamiento en la oferta, donde portales como Finca Raíz, Mitula, Trovit y MercadoLibre presentan tanto habitaciones en apartamentos tradicionales como espacios en colivings. Arriendo de habitaciones Bogotá es otra búsqueda transaccional clave que refleja esta competencia.",
        },
        {
          title: "La Importancia de las Características Específicas y la Flexibilidad.",
          content: "Los usuarios no solo buscan un lugar para vivir, sino también características que se adapten a sus necesidades. Alquiler de habitación con baño privado es una de las búsquedas más demandadas, indicando una preferencia por la privacidad dentro de un entorno comunitario. La flexibilidad es otro factor clave, como lo demuestran búsquedas como Arriendo de habitaciones por meses, Alquiler temporal de habitaciones y Alojamiento flexible Bogotá. Estos términos atraen a expatriados, viajeros de negocios y locales que buscan soluciones habitacionales sin los compromisos de un contrato de arrendamiento tradicional a largo plazo.",
        },
        {
          title: "Contenido Educativo: Capturando al Usuario en la Fase de Descubrimiento",
          content: "Para atraer a aquellos que recién exploran el concepto, el contenido informativo es esencial. Términos como Qué es coliving, Cómo funciona un coliving, y Beneficios del coliving presentan una oportunidad para que los operadores se posicionen como expertos y generen confianza. Los resultados actuales para estas búsquedas están dominados por blogs de empresas del sector inmobiliario y medios de comunicación que explican las ventajas de este modelo de vivienda: la vida en comunidad, la simplicidad en los pagos (todo incluido), el networking y la flexibilidad."
        },
      ],
      conclusion: "En resumen, el panorama de búsqueda del coliving en Bogotá refleja un mercado en plena expansión y diversificación. Desde la intención de reserva directa hasta la exploración inicial del concepto, las palabras clave utilizadas por los usuarios ofrecen una hoja de ruta clara para entender las demandas del público y las oportunidades para los actores del sector. La competencia es variada, y el éxito radica en la capacidad de ofrecer propuestas de valor claras, ya sea a través de la especialización en nichos, la oferta de comodidades específicas o la creación de contenido que eduque y atraiga a una nueva generación de residentes urbanos.",
      tags: ["Bogotá", "nómadas digitales", "trabajo remoto", "guía ciudad", "Colombia"],
      relatedPosts: ["slowmads-en-bogota", "coliving-vs-residencia"]
    }
  },
  "coliving-vs-residencia": {
    id: 3,
    title: "Coliving vs Residencia Estudiantil: La evolución del alojamiento en Bogotá para la nueva generación",
    excerpt: "En la vibrante Bogotá, la búsqueda del alojamiento ideal es una preocupación constante para estudiantes universitarios y jóvenes profesionales que inician su camino laboral.",
    author: "Fausto Abner",
    image: "/images/Creativos1.jpg",
    slug: "coliving-vs-residencia",
    content: {
      mainImage: "/images/Creativos2.jpg",
      introduction: "En la vibrante Bogotá, la búsqueda del alojamiento ideal es una preocupación constante para estudiantes universitarios y jóvenes profesionales que inician su camino laboral. Tradicionalmente, las residencias estudiantiles han sido una opción recurrente, pero un nuevo modelo ha emergido con fuerza, ofreciendo una alternativa moderna y atractiva: el coliving Bogotá. En este artículo, exploraremos a fondo el concepto de vivienda compartida bajo el esquema de comunidad coliving, comparándolo con las residencias tradicionales y destacando los significativos beneficios del coliving para la generación actual de jóvenes en la capital colombiana.",
      sections: [
        {
          title: "¿Qué es el Coliving? Una Nueva Forma de Conectar y Crecer",
          content: "El coliving va más allá de compartir un espacio físico. Se trata de un concepto de alojamiento flexible en Bogotá que fomenta la creación de comunidades, el networking y el desarrollo personal a través de espacios diseñados para la interacción y la colaboración. En esencia, el coliving ofrece habitaciones privadas dentro de un inmueble que cuenta con amplias áreas comunes como cocinas equipadas, salas de estar, espacios de trabajo compartido e incluso áreas de recreación. La clave reside en la comunidad que se genera entre los residentes, quienes a menudo comparten intereses, aspiraciones y etapas de vida similares.",
        },
        {
          title: "Residencias Estudiantiles Tradicionales: Un Modelo Conocido",
          content: "Las residencias estudiantiles tradicionales han sido durante mucho tiempo la opción predilecta para estudiantes que se mudan a Bogotá para cursar sus estudios. Generalmente ubicadas cerca de las universidades, ofrecen habitaciones privadas o compartidas y, en algunos casos, servicios básicos como alimentación y lavandería. Si bien cumplen una función primordial de proporcionar un lugar donde vivir, a menudo se centran más en la funcionalidad básica que en la creación de un ambiente comunitario enriquecedor.",
          image: "/images/living_2.png"
        },
        {
          title: "Coliving vs. Residencias: Un Análisis Detallado de los Beneficios",
          content: "Para comprender mejor por qué el coliving se ha convertido en una alternativa tan atractiva, comparemos ambos modelos en aspectos clave:"
        },
        {
          title: "1. Networking y Comunidad: Residencias Tradicionales: ",
          content: "Si bien se convive con otros estudiantes, la interacción suele ser limitada a los compañeros de piso o a encuentros casuales. La creación de una red de contactos profesional y personal no es un objetivo central. Coliving: La comunidad coliving es el corazón del modelo. Los espacios comunes están diseñados para fomentar la interacción, se organizan eventos sociales y profesionales, y se facilita la creación de lazos significativos con personas de diversos orígenes y disciplinas. Para un recién graduado o un estudiante buscando oportunidades, esta red de contactos puede ser invaluable."
        },
        {
          title: "2. Desarrollo Personal y Profesional: Residencias Tradicionales: ",
          content: " El enfoque principal es el alojamiento, con escasas oportunidades estructuradas para el desarrollo de habilidades blandas, el aprendizaje compartido o la colaboración en proyectos. Coliving: Muchos espacios de coliving en Bogotá ofrecen talleres, charlas, mentorías y espacios de coworking, lo que facilita el desarrollo de nuevas habilidades, el intercambio de ideas y la colaboración en proyectos. Esta atmósfera de aprendizaje continuo es especialmente beneficiosa para estudiantes y jóvenes profesionales en sus primeras etapas de carrera."
        },
        {
          title: "3. Flexibilidad: Residencias Tradicionales: ",
          content: "Los contratos suelen ser anuales o semestrales, lo que puede ser un inconveniente para estudiantes que realizan intercambios académicos o jóvenes profesionales con trabajos temporales. Coliving: Una de las grandes ventajas del alojamiento flexible Bogotá es la diversidad de opciones de contrato, que pueden ser mensuales, trimestrales o semestrales, adaptándose mejor a las necesidades cambiantes de los jóvenes."
        },
        {
          title: "4. Costos: Residencias Tradicionales: ",
          content: "Los costos pueden variar considerablemente dependiendo de la ubicación, el tamaño de la habitación y los servicios incluidos. A menudo, se pagan servicios adicionales por separado. Coliving: El modelo de vivienda compartida a menudo incluye en una tarifa plana servicios como internet de alta velocidad, servicios públicos, limpieza de áreas comunes e incluso acceso a eventos y actividades. Si bien el costo base puede ser similar, la inclusión de estos servicios puede resultar más conveniente y predecible para el presupuesto de un estudiante o recién graduado."
        },
        {
          title: "Beneficios Específicos del Coliving para Estudiantes y Recién Graduados en Bogotá",
          content: "Los beneficios del coliving son especialmente relevantes para el público objetivo de BambuColiving: Oportunidades de Networking (Conectar con otros estudiantes de diferentes universidades y jóvenes profesionales de diversas industrias puede abrir puertas a futuras colaboraciones, oportunidades laborales y amistades duraderas).  Apoyo y Comunidad (Mudarse a una nueva ciudad o comenzar la vida profesional puede ser desafiante. El coliving ofrece un sentido de pertenencia y una red de apoyo inmediata). Desarrollo de Habilidades (La participación en talleres, charlas y eventos dentro de la comunidad coliving puede ayudar a desarrollar habilidades blandas como el liderazgo, la comunicación y el trabajo en equipo, fundamentales para el éxito académico y profesional). Reducción del Estrés (La gestión de facturas, la limpieza y el mantenimiento del hogar pueden ser una carga para estudiantes y jóvenes profesionales. El coliving simplifica estos aspectos, permitiendo a los residentes enfocarse en sus estudios y carreras)."
        },
        {
          title: "¿Estás listo para ser parte de la comunidad BambuColiving? ¡Contáctanos hoy y descubre tu próximo hogar!",
          content: "Referencias: 1)	Davidson, G., & Sahakijpinyo, C. (2008). Shared housing and the shifting landscape of urban housing in the developed world. International Journal of Housing Policy, 8(3), 259-279. 2) Madden, D. J., & Marcuse, P. (2016). In Defense of Housing: The Politics of Crisis. Verso Books. 3)The Class Foundation. (2019). The Class of 2020: Student Living in Europe."
        }
      ],
      conclusion: "El Coliving como la Vivienda del Futuro para Jóvenes en Bogotá: El coliving en Bogotá representa una evolución significativa en el concepto de alojamiento para estudiantes y jóvenes profesionales. Al ofrecer más que un simple lugar para dormir, fomenta la creación de comunidades vibrantes, impulsa el desarrollo personal y profesional, y proporciona una alojamiento flexible en Bogotá que se adapta a las necesidades de la nueva generación. BambuColiving se posiciona como un facilitador de esta experiencia, ofreciendo espacios diseñados para conectar, crecer y prosperar en la dinámica capital colombiana. Si buscas más que una habitación, si valoras la comunidad, la flexibilidad y las oportunidades de crecimiento, el coliving es sin duda la alternativa moderna a las residencias estudiantiles tradicionales que debes considerar.",
      tags: ["comunidad", "coliving", "eventos", "conexiones", "convivencia"],
      relatedPosts: ["el-auge-del-coliving", "slowmads-en-bogota"]
    }
  },
  "mas-alla-de-las-paredes": {
    id: 4,
    title: "Los mejores cafés para trabajar cerca de Bambu Coliving",
    excerpt: "Una selección de cafeterías con buen WiFi, enchufes y ambiente agradable para tus días de trabajo fuera de casa.",
    author: "Fausto Abner",
    image: "/images/Creativos1.jpg",
    slug: "mas-alla-de-las-paredes",
    content: {
      mainImage: "/images/Creativos3.jpg",
      introduction: "Redefiniendo la vivienda en la capital: En una ciudad tan vibrante y competitiva como Bogotá, el concepto de hogar está en plena transformación. Para la nueva generación de profesionales y creativos, un lugar para vivir ya no es suficiente. Hoy, la búsqueda se centra en espacios que ofrezcan flexibilidad, comunidad y, sobre todo, oportunidades. Aquí es donde el coliving en Bogotá deja de ser una simple tendencia para convertirse en un ecosistema estratégico de crecimiento.",
      sections: [
        {
          title: "Pero, ¿qué es coliving? ",
          content: "Lejos de ser una simple vivienda compartida, un coliving es un modelo residencial que fusiona lo privado con lo comunitario. Ofrece habitaciones amuebladas en arriendo, muchas veces con la opción de alquiler de habitación con baño privado, dentro de una propiedad con increíbles áreas sociales y de trabajo compartidas. La pregunta de cómo funciona un coliving tiene una respuesta sencilla: pagas una tarifa mensual que lo cubre todo (servicios, internet, limpieza y acceso a todas las amenidades), permitiéndote vivir sin complicaciones y enfocarte en lo que realmente importa: tu vida y tu carrera.",
          image: "/images/Creativos1.jpg"
        },
        {
          title: "El Ecosistema Oculto: Networking y Sinergias Profesionales en tu Propio Hogar",
          content: "El mayor de los beneficios del coliving no siempre figura en el folleto de coliving precios, pero es el más valioso: la comunidad. Imagina eliminar la fricción de los eventos de networking tradicionales y, en su lugar, generar conexiones significativas mientras te preparas un café en la cocina o compartes ideas en la zona de coworking. Estos espacios están diseñados para fomentar la interacción. El coliving para profesionales y el coliving para nómadas digitales atraen a un perfil de personas con mentalidad de crecimiento, creando un caldo de cultivo para la innovación.",
        },
        {
          title: "Conexiones Orgánicas y Auténticas: ",
          content: "En lugar de intercambiar tarjetas de presentación de manera forzada, en un coliving compartes experiencias. La convivencia en espacios compartidos transforma a tus vecinos en tu red de apoyo. Ese diseñador gráfico que vive en el pasillo puede convertirse en el socio perfecto para tu nuevo proyecto web.",
          image: "/images/living_1.png"
        },
        {
          title: "Colaboración Interdisciplinaria: ",
          content: "Un estudio reciente de la Harvard Business Review destaca que las redes profesionales diversas son un catalizador para la innovación. En Bambu Coliving, no es raro encontrar a un ingeniero de software, una especialista en marketing digital y un emprendedor social discutiendo ideas en el salón. Esta diversidad de talentos convierte los espacios compartidos en verdaderos centros de pensamiento."
        },
        {
          title: "Flexibilidad que Impulsa la Productividad: ",
          content: "Al optar por un coliving todo incluido, te liberas de las preocupaciones administrativas de un arriendo tradicional. Esto te da más tiempo y energía mental para dedicar a tus proyectos. Ya sea que necesites en arriendo una habitacion por meses o un alojamiento flexible Bogotá para una estancia menos larga, el modelo se adapta a ti."
        },
        {
          title: "Colaboración Interdisciplinaria: ",
          content: "Un estudio reciente de la Harvard Business Review destaca que las redes profesionales diversas son un catalizador para la innovación. En Bambu Coliving, no es raro encontrar a un ingeniero de software, una especialista en marketing digital y un emprendedor social discutiendo ideas en el salón. Esta diversidad de talentos convierte los espacios compartidos en verdaderos centros de pensamiento."
        },
        {
          title: "El Futuro del Trabajo es el Futuro del Hogar",
          content: "Las estadísticas globales no mienten: la demanda de espacios de coliving sigue en aumento. Un informe de MarketsandMarkets proyecta un crecimiento sostenido del mercado global, una tendencia que se refleja con fuerza en polos de innovación como Bogotá. Los profesionales ya no solo buscan un arriendo de habitaciones Bogotá; buscan experiencias integrales. Los mejores coliving en Bogotá entienden esto a la perfección. No se trata solo de ofrecer un techo, sino de construir una comunidad coliving sólida, facilitar conexiones y proporcionar las herramientas para el éxito. Es la respuesta perfecta para quienes buscan un alojamiento estudiantil en Bogotá con un enfoque profesional, o para cualquier persona que valore la sinergia entre vida y trabajo."
        },
        {
          title: "¿Estás listo para llevar tu carrera al siguiente nivel? ",
          content: "Descubre cómo Bambu Coliving puede ser el ecosistema que impulse tu crecimiento. ¡Únete a una comunidad que avanza unida!"
        },

      ],
      conclusion: "Bambu Coliving, tu Próximo Paso Estratégico: Elegir dónde vivir en Bogotá es una de las decisiones más importantes que tomarás. Al considerar tus opciones, piensa más allá del alquiler. Piensa en el valor añadido, en la comunidad que te rodeará y en las puertas que se pueden abrir. Bambu Coliving no es solo un lugar con habitaciones amuebladas en arriendo; es un trampolín. Es una inversión en tu red de contactos, en tu desarrollo profesional y en tu bienestar personal. Es el lugar donde tu vecino puede convertirse en tu próximo mentor, socio o amigo para toda la vida.",
      tags: ["coliving", "networking", "crecimiento profesional", "Bogotá", "Bambu Coliving"],
      relatedPosts: ["coliving-vs-residencia", "el-auge-del-coliving"]
    }
  },
  
}

// ============= SHARED SPACES CONTENT =============

export interface SharedSpaceSection {
  title: string
  description: string
  features: {
    title: string
    description: string
    icon: string
  }[]
  images: string[]
}

export const sharedSpacesContent = {
  header: {
    title: "Espacios Compartidos",
    description: "Descubre las áreas comunes diseñadas para fomentar la comunidad, productividad y bienestar."
  },
  coworking: {
    title: "Espacio de Coworking",
    description: "Un espacio diseñado para impulsar tu productividad y creatividad. Perfecto para trabajar, estudiar o colaborar con otros miembros de la comunidad.",
    features: [
      {
        title: "Internet de Alta Velocidad",
        description: "Conexión fibra óptica de 300Mbps para todas tus necesidades digitales.",
        icon: "Wifi"
      },
      {
        title: "Espacios Versátiles",
        description: "Áreas para trabajo individual, salas de reuniones y espacios colaborativos.",
        icon: "LayoutGrid"
      },
      {
        title: "Equipamiento Completo",
        description: "Escritorios ergonómicos, sillas cómodas y múltiples conexiones eléctricas.",
        icon: "Monitor"
      },
      {
        title: "Ambiente Profesional",
        description: "Iluminación natural, aire acondicionado y ambiente tranquilo para concentrarte.",
        icon: "Sun"
      }
    ],
    images: ["/images/Creativos1.jpg", "/images/Creativos2.jpg", "/images/Creativos3.jpg"]
  },
  kitchen: {
    title: "Cocina Compartida",
    description: "Una cocina totalmente equipada donde podrás preparar tus comidas favoritas y compartir momentos con otros residentes.",
    features: [
      {
        title: "Electrodomésticos Modernos",
        description: "Nevera, estufa, horno, microondas y pequeños electrodomésticos a tu disposición.",
        icon: "Refrigerator"
      },
      {
        title: "Utensilios Completos",
        description: "Todo lo necesario para cocinar: ollas, sartenes, vajilla y cubiertos.",
        icon: "UtensilsCrossed"
      },
      {
        title: "Espacio de Almacenamiento",
        description: "Gabinetes y espacio en nevera asignado para cada residente.",
        icon: "Package"
      },
      {
        title: "Área de Comedor",
        description: "Amplio comedor para disfrutar tus comidas y socializar con otros residentes.",
        icon: "Coffee"
      }
    ],
    images: ["/images/cocina1.png", "/images/cocina2.png", "/images/cocina3.png"]
  },
  lounge: {
    title: "Sala de Estar",
    description: "Un espacio acogedor para relajarte, socializar y disfrutar de momentos de ocio con otros residentes.",
    features: [
      {
        title: "Entretenimiento",
        description: "Smart TV con Netflix, área de juegos de mesa y zona de lectura.",
        icon: "Tv"
      },
      {
        title: "Mobiliario Cómodo",
        description: "Sofás confortables, puffs y sillas para diferentes actividades.",
        icon: "Sofa"
      },
      {
        title: "Ambiente Relajado",
        description: "Iluminación ajustable y decoración que invita al descanso.",
        icon: "Lamp"
      },
      {
        title: "Espacio Versátil",
        description: "Perfecto para eventos sociales, noches de película o simplemente relajarte.",
        icon: "Users"
      }
    ],
    images: ["/images/living_1.png", "/images/living_2.png", "/images/living_3.png"]
  }
}

// ============= COMUNIDAD PAGE CONTENT =============

export const comunidadContent = {
  header: {
    title: "Únete a la comunidad de Bambu Coliving",
    description: "Conecta con nómadas digitales, emprendedores y profesionales de todo el mundo. Una comunidad vibrante donde las ideas florecen y las amistades duran para siempre.",
    backgroundColor: "bg-gradient-to-br from-teal-50 to-white"
  },
  stats: [
    { number: "150+", label: "Miembros activos" },
    { number: "25+", label: "Nacionalidades" },
    { number: "50+", label: "Eventos al año" },
    { number: "95%", label: "Satisfacción" }
  ],
  features: [
    {
      icon: "MessageCircle",
      title: "Networking Auténtico",
      description: "Conecta con profesionales de diversas industrias en un ambiente relajado y natural.",
      colorScheme: "teal"
    },
    {
      icon: "Calendar",
      title: "Eventos Regulares",
      description: "Talleres, charlas, noches de juegos, salidas grupales y mucho más cada semana.",
      colorScheme: "teal"
    },
    {
      icon: "Wifi",
      title: "Coworking Integrado",
      description: "Trabaja junto a otros profesionales en espacios diseñados para la productividad.",
      colorScheme: "teal"
    },
    {
      icon: "MapPin",
      title: "Exploración Local",
      description: "Descubre Bogotá con guías locales y miembros que conocen los mejores secretos de la ciudad.",
      colorScheme: "teal"
    },
    {
      icon: "Coffee",
      title: "Espacios Sociales",
      description: "Cocina compartida, sala de estar, terraza y áreas diseñadas para la convivencia.",
      colorScheme: "teal"
    },
    {
      icon: "Heart",
      title: "Apoyo Mutuo",
      description: "Una red de apoyo para adaptarse a la vida en Bogotá y alcanzar tus metas profesionales.",
      colorScheme: "teal"
    }
  ],
  upcomingPlans: {
    title: "Próximos Planes",
    description: "Experiencias diseñadas para conectar con la ciudad y con nuestra comunidad",
    plans: [
      {
        id: 1,
        emoji: "🌆",
        title: "Plan Cultural",
        subtitle: "Descubre la historia y el alma de Bogotá.",
        description: "Exploramos museos, monumentos y sitios emblemáticos como Monserrate, Guadalupe, Usaquén, el Jardín Botánico y más. Cada semana rotamos el destino, así que siempre habrá algo nuevo por conocer. ¡Perfecto para amantes del arte, la arquitectura y las buenas caminatas con historia!",
        colorScheme: "teal",
        image: "/images/Creativos1.jpg",
        registerLink: "/reserva?plan=cultural"
      },
      {
        id: 2,
        emoji: "🍴",
        title: "Plan Comida",
        subtitle: "Sabores locales, barrios vibrantes.",
        description: "Te llevamos a descubrir rincones gastronómicos únicos: plazas de mercado, calles icónicas como la Séptima, y barrios como Chapinero o Usaquén. Desde comida típica hasta fusiones inesperadas, cada tour es una experiencia distinta para el paladar. ¡Vente con hambre!",
        colorScheme: "rose",
        image: "/images/Creativos2.jpg",
        registerLink: "/reserva?plan=comida"
      },
      {
        id: 3,
        emoji: "🌙",
        title: "Plan Nocturno",
        subtitle: "Farra con flow capitalino.",
        description: "¿Noche de salsa o electrónica? ¿Un bar oculto o uno de los más top de la ciudad? Este plan es para mover el cuerpo, conocer la noche bogotana y pasarla rico con buena compañía. Cada salida tiene su estilo, pero todas tienen algo en común: buena vibra y fiesta garantizada.",
        colorScheme: "teal",
        image: "/images/Creativos3.jpg",
        registerLink: "/reserva?plan=nocturno"
      },
      {
        id: 4,
        emoji: "🏞️",
        title: "Plan Fuera",
        subtitle: "Escape natural, cerca de la ciudad.",
        description: "Cuando el cuerpo pide aire fresco, nos vamos de parche a pueblos, lagunas, cascadas y paisajes que te recargan. Siempre exploramos lugares distintos, ideales para desconectar sin ir muy lejos. Incluye transporte, snacks y parche bacano.",
        colorScheme: "rose",
        image: "/images/Bambu1.png",
        registerLink: "/reserva?plan=fuera"
      },
      {
        id: 5,
        emoji: "🎶",
        title: "Plan Live",
        subtitle: "Música en vivo, energía real.",
        description: "Desde conciertos de artistas locales hasta noches acústicas en bares con talento emergente, este plan es para los que gozan la música en directo. Lugares rotativos, géneros variados y siempre buena onda. ¡Lo importante es vibrar juntos!",
        colorScheme: "teal",
        image: "/images/Bambu2.png",
        registerLink: "/reserva?plan=live"
      }
    ]
  },
  testimonials: [
    {
      name: "María González",
      role: "Diseñadora UX",
      origin: "España",
      quote: "La comunidad de Bambu es increíble. He hecho amigos de todo el mundo y he crecido tanto profesional como personalmente.",
      rating: 5,
      avatar: "M"
    },
    {
      name: "James Wilson",
      role: "Desarrollador",
      origin: "Canadá",
      quote: "Los eventos y actividades hacen que cada semana sea diferente. Nunca me aburro y siempre hay algo interesante que hacer.",
      rating: 5,
      avatar: "J"
    },
    {
      name: "Ana Rodríguez",
      role: "Marketing Digital",
      origin: "México",
      quote: "El ambiente de colaboración es único. He encontrado socios de negocio y amigos para toda la vida aquí en Bambu.",
      rating: 5,
      avatar: "A"
    }
  ],
  cta: {
    title: "¿Listo para formar parte de nuestra comunidad?",
    description: "Únete a Bambu Coliving y descubre una nueva forma de vivir, trabajar y conectar en Bogotá.",
    buttons: [
      {
        text: "Reserva tu habitación",
        href: "/reserva",
        primary: true
      },
      {
        text: "Contáctanos",
        href: "/nosotros",
        primary: false
      }
    ]
  }
}

// ============= FAQS CONTENT =============

export interface FAQ {
  question: string
  answer: string
}

export interface FAQSection {
  title: string
  faqs: FAQ[]
}

export const faqsContent = {
  header: {
    title: "Preguntas Frecuentes",
    description: "Encuentra respuestas a las preguntas más comunes sobre Bambu Coliving."
  },
  sections: [
    {
      title: "Sobre las Reservas",
      faqs: [
        {
          question: "¿Cuál es el proceso de reserva?",
          answer: "El proceso de reserva es sencillo: selecciona tu habitación preferida, elige las fechas de tu estancia, completa tus datos personales y realiza el pago. Una vez confirmada la reserva, recibirás un correo electrónico con todos los detalles."
        },
        {
          question: "¿Cuál es la estancia mínima?",
          answer: "La estancia mínima en Bambu Coliving es de 1 noche. Las tarifas se ajustan automáticamente según la duración total de tu estadía: a más noches, mejor tarifa por noche, con tramos especiales desde 3 noches y descuentos significativos a partir de 30 noches."
        },
        {
          question: "¿Qué métodos de pago aceptan?",
          answer: "Aceptamos tarjetas de crédito y débito internacionales (Visa, Mastercard, American Express), transferencias bancarias y PayPal. Todos los pagos se procesan de manera segura a través de nuestra plataforma."
        },
        {
          question: "¿Cuál es la política de cancelación?",
          answer: "Si cancelas con más de 30 días de anticipación a tu llegada, recibirás un reembolso del 100% menos los gastos de gestión. Para cancelaciones entre 15-30 días antes, el reembolso será del 50%. No hay reembolsos para cancelaciones con menos de 15 días de anticipación."
        }
      ]
    },
    {
      title: "Sobre la Estancia",
      faqs: [
        {
          question: "¿Qué incluye el precio mensual?",
          answer: "El precio mensual incluye alojamiento, todos los servicios básicos (agua, luz, gas), internet de alta velocidad, limpieza de áreas comunes, acceso a todas las instalaciones compartidas y participación en eventos comunitarios."
        },
        {
          question: "¿Puedo recibir visitas?",
          answer: "Sí, puedes recibir visitas durante el día. Para visitas que pernocten, debes notificar con anticipación y podría aplicar un cargo adicional según la duración de la estancia."
        },
        {
          question: "¿Se permiten mascotas?",
          answer: "Sí, Bambu Coliving es pet-friendly. Aceptamos mascotas pequeñas y medianas con un depósito adicional. Por favor, infórmanos sobre tu mascota al momento de hacer la reserva."
        },
        {
          question: "¿Hay servicio de limpieza para las habitaciones?",
          answer: "Ofrecemos servicio de limpieza semanal para las habitaciones con un costo adicional. Las áreas comunes se limpian diariamente sin costo extra."
        }
      ]
    },
    {
      title: "Sobre las Instalaciones",
      faqs: [
        {
          question: "¿Cómo es la conexión a internet?",
          answer: "Ofrecemos conexión WiFi de fibra óptica de 300 Mbps en todo el edificio, con una red dedicada para trabajo que garantiza estabilidad y velocidad para videoconferencias y tareas exigentes."
        },
        {
          question: "¿Hay espacios para trabajar?",
          answer: "Sí, contamos con un espacio de coworking completamente equipado con escritorios ergonómicos, sillas cómodas, salas de reuniones y áreas de descanso para maximizar tu productividad."
        },
        {
          question: "¿Qué medidas de seguridad tienen?",
          answer: "La seguridad es una prioridad en Bambu Coliving. Contamos con sistema de acceso con tarjeta electrónica, cámaras de seguridad en áreas comunes, personal de seguridad 24/7 y casilleros individuales para objetos de valor."
        },
        {
          question: "¿Hay estacionamiento disponible?",
          answer: "Sí, ofrecemos estacionamiento limitado con un costo adicional. Te recomendamos reservar tu espacio con anticipación si planeas traer vehículo."
        }
      ]
    }
  ],
  cta: {
    title: "¿No encontraste lo que buscabas?",
    description: "Si tienes alguna pregunta adicional, no dudes en contactarnos. Estamos aquí para ayudarte.",
    primaryButton: {
      text: "Contáctanos",
      link: "/nosotros#contacto"
    },
    secondaryButton: {
      text: "Explorar habitaciones",
      link: "/habitaciones"
    }
  }
}

// ============= ABOUT US CONTENT =============

export interface Value {
  title: string
  description: string
}

export interface ContactInfo {
  type: string
  icon: string
  label: string
  value: string
}

export const aboutUsContent = {
  header: {
    title: "Quiénes Somos",
    description: "Conoce más sobre Bambu Coliving, nuestra misión y el equipo detrás de este proyecto."
  },
  missionVision: {
    mission: {
      title: "Nuestra Misión",
      paragraphs: [
        "En Bambu Coliving, nuestra misión es crear espacios de vida que fomenten la comunidad, la productividad y el bienestar. Creemos en el poder de los entornos compartidos para impulsar la creatividad y las conexiones significativas.",
        "Nos esforzamos por ofrecer una experiencia de coliving que combine la comodidad de un hogar con las ventajas de una comunidad global, todo ello en una ubicación privilegiada en el corazón de Bogotá."
      ]
    },
    vision: {
      title: "Nuestra Visión",
      description: "Aspiramos a redefinir la forma en que las personas viven y trabajan en la era digital, creando un ecosistema donde nómadas digitales, emprendedores y profesionales puedan prosperar personal y profesionalmente."
    },
    image: {
      src: "/images/Creativos1.jpg",
      alt: "Equipo de Bambu Coliving"
    }
  },
  values: {
    title: "Nuestros Valores",
    items: [
      {
        title: "Comunidad",
        description: "Creemos en el poder de las conexiones humanas y en crear espacios que fomenten relaciones significativas entre personas de diversos orígenes."
      },
      {
        title: "Sostenibilidad",
        description: "Nos comprometemos a implementar prácticas sostenibles en nuestras operaciones diarias y a minimizar nuestro impacto ambiental."
      },
      {
        title: "Innovación",
        description: "Buscamos constantemente nuevas formas de mejorar la experiencia de coliving, adaptándonos a las necesidades cambiantes de nuestra comunidad."
      }
    ]
  },
  location: {
    title: "Nuestra Ubicación",
    description: "Bambu Coliving está estratégicamente ubicado en Comuneros, Bogotá, un área vibrante conocida por su escena artística, restaurantes de moda y excelente conectividad.",
    contactInfo: [
      {
        type: "address",
        icon: "MapPin",
        label: "Dirección",
        value: "Calle 4 # 31-24, Bogotá, Colombia"
      },
      {
        type: "phone",
        icon: "Phone",
        label: "WhatsApp",
        value: "+57 300 7438588"
      },
      {
        type: "email",
        icon: "Mail",
        label: "Email",
        value: "info@bambucoliving.com"
      }
    ],
    mapUrl: "https://maps.app.goo.gl/6E7hpm7ydFvUpTR88",
    mapButtonText: "Ver en Google Maps",
    embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8901166769586!2d-74.10221425164589!3d4.604803015278485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f992f31c1b2a5%3A0x923c3f73c6d2e5e0!2sCl.%204%20%2331-24%2C%20Bogot%C3%A1%2C%20Colombia!5e0!3m2!1sen!2sco!4v1710864000000!5m2!1sen!2sco"
  },
  contact: {
    title: "Contáctanos",
    description: "¿Tienes alguna pregunta o comentario? Completa el formulario a continuación y nos pondremos en contacto contigo lo antes posible."
  }
} 