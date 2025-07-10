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
      title: "Bambu Tipo 2",
      image: "/images/hb2.1.png",
      price: "1.350.000",
      features: ["Cama semidoble", "WiFi ilimitado", "Escritorio", "Baño privado", "Espacios comunes"],
      slug: "tipo-1"
    },
    {
      title: "Bambu Tipo 7", 
      image: "/images/hb7.1.png",
      price: "1.680.000",
      features: ["Cama semidoble", "WiFi ilimitado", "Escritorio", "Baño privado", "Espacios comunes"],
      slug: "tipo-2"
    },
    {
      title: "Bambu Tipo 4",
      image: "/images/hb4.2.png", 
      price: "1.510.000",
      features: ["Cama doble", "WiFi ilimitado", "Escritorio", "Baño privado", "Espacios comunes"],
      slug: "tipo-3"
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
      icon: "Calendar",
      iconColor: "teal",
      title: "Eventos Sociales",
      description: "Actividades semanales para conectar y disfrutar en comunidad.",
      href: "/eventos"
    },
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
      href: "/servicios"
    },
    {
      icon: "Coffee",
      iconColor: "rose",
      title: "Espacios Vibrantes",
      description: "Coworking, cocina, gimnasio y áreas de descanso a tu disposición.",
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
      image: "/images/persona3.jpg"
    }
  ]
}

// CTA Section Content
export const ctaContent = {
  title: "¿Listo para unirte a nuestra comunidad?",
  description: "Abrimos el 1 de julio de 2025. Reserva ahora y sé parte de los primeros en experimentar Bambu Coliving.",
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
  checkInLabel: "Fecha de llegada",
  checkInPlaceholder: "Selecciona una fecha",
  guestsLabel: "Huéspedes",
  guestsPlaceholder: "Selecciona el número de huéspedes",
  guestsOptions: [
    { value: "1", label: "1 Huésped" },
    { value: "2", label: "2 Huéspedes" },
    { value: "3", label: "3 Huéspedes" },
    { value: "4", label: "4+ Huéspedes" }
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
      title: "Bambu Tipo 1 - 16m²",
      image: "/images/hb1.png",
      price: "1.180.000",
      features: ["Cama doble", "WiFi ilimitado", "Escritorio", "Baño privado", "Closet"],
      slug: "tipo-1",
      category: "privada",
      discounts: {
        "2": "1.062.000",
        "3": "1.003.000"
      }
    },
    {
      title: "Bambu Tipo 2 - 12m²",
      image: "/images/hb2.1.png",
      price: "1.350.000",
      features: ["Cama Semi Doble", "WiFi ilimitado", "Escritorio", "Baño privado", "Closet"],
      slug: "tipo-2",
      category: "privada",
      discounts: {
        "2": "1.215.000",
        "3": "1.147.500"
      }
    },
    {
      title: "Bambu Tipo 3 - 12m²",
      image: "/images/hb3.1.png",
      price: "1.100.000",
      features: ["Cama Semi Doble", "WiFi ilimitado", "Escritorio", "Baño privado", "Closet"],
      slug: "tipo-3",
      category: "privada",
      discounts: {
        "2": "990.000",
        "3": "935.000"
      }
    },
    {
      title: "Bambu Tipo 4 - 16m²",
      image: "/images/hb4.1.png",
      price: "1.510.000",
      features: ["Cama doble", "WiFi ilimitado", "Escritorio", "Baño privado", "Closet"],
      slug: "tipo-4",
      category: "privada"
    },
    {
      title: "Bambu Tipo 5 - 17m²",
      image: "/images/hb5.1.png",
      price: "1.550.000",
      features: ["Cama doble", "WiFi ilimitado", "Escritorio", "Baño privado", "Closet"],
      slug: "tipo-5",
      category: "suite"
    },
    {
      title: "Bambu Tipo 6 - 17m²",
      image: "/images/hb6.1.png",
      price: "1.350.000",
      features: ["Cama doble", "WiFi ilimitado", "Escritorio", "Baño privado", "Closet"],
      slug: "tipo-6",
      category: "suite",
      discounts: {
        "2": "1.215.000",
        "3": "1.147.500"
      }
    },
    {
      title: "Bambu Tipo 7 - 14m²",
      image: "/images/hb7.1.png",
      price: "1.680.000",
      features: ["Cama Semi Doble", "WiFi ilimitado", "Escritorio", "Baño privado", "Closet"],
      slug: "tipo-7",
      category: "privada",
      discounts: {
        "2": "1.512.000",
        "3": "1.428.000"
      }
    },
    {
      title: "Bambu Tipo 8 - 17m²",
      image: "/images/hb8.1.png",
      price: "1.700.000",
      features: ["Cama doble", "WiFi ilimitado", "Escritorio", "Baño privado", "Closet"],
      slug: "tipo-8",
      category: "suite",
      discounts: {
        "2": "1.530.000",
        "3": "1.445.000"
      }
    },
    {
      title: "Bambu Tipo 9 - 17m²",
      image: "/images/hb9.1.png",
      price: "1.680.000",
      features: ["Cama doble", "WiFi ilimitado", "Escritorio", "Baño privado", "Closet"],
      slug: "tipo-9",
      category: "suite",
      discounts: {
        "2": "1.512.000",
        "3": "1.428.000"
      }
    },
    {
      title: "Bambu Tipo 10 - 14m²",
      image: "/images/hb10.1.png",
      price: "1.510.000",
      features: ["Cama Semi Doble", "WiFi ilimitado", "Escritorio", "Baño privado", "Closet"],
      slug: "tipo-10",
      category: "privada",
      discounts: {
        "2": "1.359.000",
        "3": "1.283.500"
      }
    }
  ]
}

const habitacionesDetails = {
  amenities: {
    title: "Comodidades incluidas",
    description: "Todas nuestras habitaciones incluyen:",
    list: [
      "WiFi de alta velocidad",
      "Limpieza semanal",
      "Servicios públicos incluidos",
      "Acceso a espacios comunes",
      "Seguridad 24/7",
      "Recepción y conserjería"
    ]
  },
  policies: {
    title: "Políticas de estadía",
    checkIn: "Check-in: 3:00 PM",
    checkOut: "Check-out: 11:00 AM", 
    minimumStay: "Estancia mínima: 1 mes",
    deposit: "Depósito: 1 mes de renta",
    cancellation: "Política de cancelación flexible"
  },
  location: {
    title: "Ubicación privilegiada",
    description: "Nos encontramos en el corazón de Bogotá, cerca de:",
    landmarks: [
      "Zona Rosa (5 min)",
      "Chapinero (10 min)",
      "TransMilenio (2 min)", 
      "Centros comerciales (5 min)",
      "Restaurantes y cafés (caminando)",
      "Parques y espacios verdes (3 min)"
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
  price: string
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

export interface RoomDiscount {
  "2": string // 10% discount
  "3": string // 15% discount
}

export interface RoomFeature {
  name: string
  iconName: string
}

export interface DetailedRoom {
  title: string
  description: string
  price: string
  discounts: RoomDiscount
  features: RoomFeature[]
  images: string[]
  size: string
  maxGuests: number
}

export const roomDetails: Record<string, DetailedRoom> = {
  "tipo-1": {
    title: "Bambu Tipo 1",
    description: "Nuestra habitación ofrece todo lo que necesitas para una estancia cómoda y productiva, Con una cama doble, baño privado y un espacio de trabajo, es perfecta para nómadas digitales, estudiantes y profesionales.",
    price: "1.050.000",
    discounts: {
      "2": "1.062.000",
      "3": "1.003.000"
    },
    features: [
      { name: "Cama doble", iconName: "Tv" },
      { name: "WiFi ilimitado", iconName: "Wifi" },
      { name: "Escritorio dedicado", iconName: "MonitorSmartphone" },
      { name: "Closet amplio", iconName: "Warehouse" },
      { name: "Baño privado", iconName: "Bath" }
    ],
    images: [
      "/images/hb1.png",
      "/images/habitacion_2.avif",
      "/images/habitacion_3.avif",
      "/images/habitacion_4.avif",
      "/images/habitacion_5.avif"
    ],
    size: "16m²",
    maxGuests: 2
  },
  "tipo-2": {
    title: "Bambu Tipo 2",
    description: "Una habitación con cama semi doble y Perfecta para profesionales, estudiantes y nómadas digitales que necesitan un espacio confortable para vivir y trabajar.",
    price: "800.000",
    discounts: {
      "2": "1.215.000",
      "3": "1.147.500"
    },
    features: [
      { name: "Cama Semidoble", iconName: "Tv" },
      { name: "WiFi ilimitado", iconName: "Wifi" },
      { name: "Escritorio", iconName: "MonitorSmartphone" },
      { name: "Closet", iconName: "Warehouse" },
      { name: "Baño privado", iconName: "Bath" }
    ],
    images: [
      "/images/hb2.1.png",
      "/images/hb2.2.png",
      "/images/habitacion_4.avif",
      "/images/habitacion_5.avif",
      "/images/habitacion_1.avif"
    ],
    size: "12m²",
    maxGuests: 1
  },
  "tipo-3": {
    title: "Bambu Tipo 3",
    description: "Una habitación con cama semi doble y Perfecta para profesionales, estudiantes y nómadas digitales que necesitan un espacio confortable para vivir y trabajar.",
    price: "800.000",
    discounts: {
      "2": "990.000",
      "3": "935.000"
    },
    features: [
      { name: "Cama Semidoble", iconName: "Tv" },
      { name: "WiFi ilimitado", iconName: "Wifi" },
      { name: "Escritorio", iconName: "MonitorSmartphone" },
      { name: "Closet", iconName: "Warehouse" },
      { name: "Baño privado", iconName: "Bath" }
    ],
    images: [
      "/images/hb3.1.png",
      "/images/hb3.2.png",
      "/images/habitacion_5.avif",
      "/images/habitacion_1.avif",
      "/images/habitacion_2.avif"
    ],
    size: "12m²",
    maxGuests: 1
  },
  "tipo-4": {
    title: "Bambu Tipo 4",
    description: "Nuestra habitación ofrece todo lo que necesitas para una estancia cómoda y productiva, Con una cama doble, baño privado y un espacio de trabajo, es perfecta para nómadas digitales, estudiantes y profesionales.",
    price: "1.510.000",
    discounts: {
      "2": "1.359.000",
      "3": "1.283.500"
    },
    features: [
      { name: "Cama doble", iconName: "Tv" },
      { name: "WiFi ilimitado", iconName: "Wifi" },
      { name: "Escritorio dedicado", iconName: "MonitorSmartphone" },
      { name: "Closet amplio", iconName: "Warehouse" },
      { name: "Baño privado", iconName: "Bath" }
    ],
    images: [
      "/images/hb4.1.png",
      "/images/hb4.2.png",
      "/images/habitacion_1.avif",
      "/images/habitacion_2.avif",
      "/images/habitacion_3.avif"
    ],
    size: "16m²",
    maxGuests: 2
  },
  "tipo-5": {
    title: "Bambu Tipo 5",
    description: "Nuestra habitación ofrece todo lo que necesitas para una estancia cómoda y productiva, Con una cama doble, baño privado y un espacio de trabajo, es perfecta para nómadas digitales, estudiantes y profesionales.",
    price: "1.550.000",
    discounts: {
      "2": "1.395.000",
      "3": "1.317.500"
    },
    features: [
      { name: "Cama doble", iconName: "Tv" },
      { name: "WiFi ilimitado", iconName: "Wifi" },
      { name: "Escritorio dedicado", iconName: "MonitorSmartphone" },
      { name: "Closet amplio", iconName: "Warehouse" },
      { name: "Baño privado", iconName: "Bath" }
    ],
    images: [
      "/images/hb5.1.png",
      "/images/hb5.2.png",
      "/images/habitacion_2.avif",
      "/images/habitacion_3.avif",
      "/images/habitacion_4.avif"
    ],
    size: "17m²",
    maxGuests: 2
  },
  "tipo-6": {
    title: "Bambu Tipo 6",
    description: "Nuestra habitación ofrece todo lo que necesitas para una estancia cómoda y productiva, Con una cama doble, baño privado y un espacio de trabajo, es perfecta para nómadas digitales, estudiantes y profesionales.",
    price: "1.350.000",
    discounts: {
      "2": "1.215.000",
      "3": "1.147.500"
    },
    features: [
      { name: "Cama doble", iconName: "Tv" },
      { name: "WiFi ilimitado", iconName: "Wifi" },
      { name: "Escritorio dedicado", iconName: "MonitorSmartphone" },
      { name: "Closet amplio", iconName: "Warehouse" },
      { name: "Baño privado", iconName: "Bath" }
    ],
    images: [
      "/images/hb6.1.png",
      "/images/hb6.2.png",
      "/images/habitacion_3.avif",
      "/images/habitacion_4.avif",
      "/images/habitacion_5.avif"
    ],
    size: "17m²",
    maxGuests: 2
  },
  "tipo-7": {
    title: "Bambu Tipo 7",
    description: "Una habitación con cama semi doble y Perfecta para profesionales, estudiantes y nómadas digitales que necesitan un espacio confortable para vivir y trabajar.",
    price: "1.680.000",
    discounts: {
      "2": "1.512.000",
      "3": "1.428.000"
    },
    features: [
      { name: "Cama semidoble", iconName: "Tv" },
      { name: "WiFi ilimitado", iconName: "Wifi" },
      { name: "Escritorio dedicado", iconName: "MonitorSmartphone" },
      { name: "Closet amplio", iconName: "Warehouse" },
      { name: "Baño privado", iconName: "Bath" }
    ],
    images: [
      "/images/hb7.1.png",
      "/images/hb7.2.png",
      "/images/habitacion_3.avif",
      "/images/habitacion_4.avif",
      "/images/habitacion_5.avif"
    ],
    size: "14m²",
    maxGuests: 1
  },
  "tipo-8": {
    title: "Bambu Tipo 8",
    description: "Nuestra habitación ofrece todo lo que necesitas para una estancia cómoda y productiva, Con una cama doble, baño privado y un espacio de trabajo, es perfecta para nómadas digitales, estudiantes y profesionales.",
    price: "1.700.000",
    discounts: {
      "2": "1.530.000",
      "3": "1.445.000"
    },
    features: [
      { name: "Cama doble", iconName: "Tv" },
      { name: "WiFi ilimitado", iconName: "Wifi" },
      { name: "Escritorio dedicado", iconName: "MonitorSmartphone" },
      { name: "Closet amplio", iconName: "Warehouse" },
      { name: "Baño privado", iconName: "Bath" }
    ],
    images: [
      "/images/hb8.1.png",
      "/images/hb8.2.png",
      "/images/habitacion_3.avif",
      "/images/habitacion_4.avif",
      "/images/habitacion_5.avif"
    ],
    size: "17m²",
    maxGuests: 2
  },
  "tipo-9": {
    title: "Bambu Tipo 9",
    description: "Nuestra habitación ofrece todo lo que necesitas para una estancia cómoda y productiva, Con una cama doble, baño privado y un espacio de trabajo, es perfecta para nómadas digitales, estudiantes y profesionales.",
    price: "1.680.000",
    discounts: {
      "2": "1.512.000",
      "3": "1.428.000"
    },
    features: [
      { name: "Cama doble", iconName: "Tv" },
      { name: "WiFi ilimitado", iconName: "Wifi" },
      { name: "Escritorio dedicado", iconName: "MonitorSmartphone" },
      { name: "Closet amplio", iconName: "Warehouse" },
      { name: "Baño privado", iconName: "Bath" }
    ],
    images: [
      "/images/hb9.1.png",
      "/images/hb9.2.png",
      "/images/habitacion_3.avif",
      "/images/habitacion_4.avif",
      "/images/habitacion_5.avif"
    ],
    size: "17m²",
    maxGuests: 2
  },
  "tipo-10": {
    title: "Bambu Tipo 10",
    description: "Una habitación con cama semi doble y Perfecta para profesionales, estudiantes y nómadas digitales que necesitan un espacio confortable para vivir y trabajar.",
    price: "1.510.000",
    discounts: {
      "2": "1.359.000",
      "3": "1.283.500"
    },
    features: [
      { name: "Cama doble", iconName: "Tv" },
      { name: "WiFi ilimitado", iconName: "Wifi" },
      { name: "Escritorio dedicado", iconName: "MonitorSmartphone" },
      { name: "Closet amplio", iconName: "Warehouse" },
      { name: "Baño privado", iconName: "Bath" }
    ],
    images: [
      "/images/hb10.1.png",
      "/images/hb10.2.png",
      "/images/habitacion_3.avif",
      "/images/habitacion_4.avif",
      "/images/habitacion_5.avif"
    ],
    size: "14m²",
    maxGuests: 2
  }
}

// ============= BLOG CONTENT =============

export interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
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
      date: "15 de abril, 2025",
      author: "María Rodríguez",
      image: "/images/Creativos1.jpg",
      slug: "5-razones-para-elegir-coliving"
    },
    {
      id: 2,
      title: "Guía para nómadas digitales en Bogotá",
      excerpt: "Todo lo que necesitas saber para trabajar remotamente desde la vibrante capital colombiana.",
      date: "2 de mayo, 2025",
      author: "Carlos Gómez",
      image: "/images/Creativos1.jpg",
      slug: "guia-nomadas-digitales-bogota"
    },
    {
      id: 3,
      title: "Cómo construir una comunidad en espacios compartidos",
      excerpt: "Estrategias y consejos para fomentar conexiones significativas en entornos de coliving.",
      date: "20 de mayo, 2025",
      author: "Laura Martínez",
      image: "/images/Creativos1.jpg",
      slug: "construir-comunidad-espacios-compartidos"
    },
    {
      id: 4,
      title: "Los mejores cafés para trabajar cerca de Bambu Coliving",
      excerpt: "Una selección de cafeterías con buen WiFi, enchufes y ambiente agradable para tus días de trabajo fuera de casa.",
      date: "5 de junio, 2025",
      author: "Andrés Pérez",
      image: "/images/Creativos1.jpg",
      slug: "mejores-cafes-para-trabajar"
    },
    {
      id: 5,
      title: "Eventos imperdibles en Bogotá durante el verano 2025",
      excerpt: "Festivales, exposiciones y actividades culturales para disfrutar al máximo tu estancia en la ciudad.",
      date: "12 de junio, 2025",
      author: "Sofía Vargas",
      image: "/images/Creativos1.jpg",
      slug: "eventos-bogota-verano-2025"
    },
    {
      id: 6,
      title: "Equilibrio entre trabajo y vida personal en espacios de coliving",
      excerpt: "Consejos prácticos para mantener la productividad sin sacrificar tu bienestar en entornos compartidos.",
      date: "25 de junio, 2025",
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
  "5-razones-para-elegir-coliving": {
    id: 1,
    title: "5 razones para elegir coliving en tu próxima aventura",
    excerpt: "Descubre por qué el coliving se ha convertido en la opción preferida para nómadas digitales y profesionales en todo el mundo.",
    date: "15 de abril, 2025",
    author: "María Rodríguez",
    image: "/images/Creativos2.jpg",
    slug: "5-razones-para-elegir-coliving",
    content: {
      mainImage: "/images/Creativos2.jpg",
      introduction: "El coliving está revolucionando la forma en que vivimos y trabajamos. En este artículo, exploraremos las principales razones por las que cada vez más personas eligen este estilo de vida moderno y colaborativo.",
      sections: [
        {
          title: "1. Comunidad y Conexiones Significativas",
          content: "En un mundo cada vez más digital, el coliving ofrece la oportunidad de crear conexiones reales y significativas. Compartir espacios con personas afines no solo enriquece tu vida social, sino que también puede abrir puertas a nuevas oportunidades profesionales y colaboraciones.",
          image: "/images/Creativos3.jpg"
        },
        {
          title: "2. Flexibilidad y Libertad",
          content: "Olvídate de los contratos largos y las preocupaciones del mantenimiento. El coliving te permite moverte con libertad y adaptarte a nuevas oportunidades sin ataduras, perfecto para el estilo de vida nómada digital.",
          image: "/images/living_1.png"
        },
        {
          title: "3. Comodidad y Servicios Todo Incluido",
          content: "Desde internet de alta velocidad hasta servicios de limpieza, el coliving simplifica tu vida al incluir todo lo que necesitas en un solo pago mensual. Menos preocupaciones, más tiempo para lo que realmente importa.",
          image: "/images/living_2.png"
        },
        {
          title: "4. Ubicaciones Privilegiadas",
          content: "Los espacios de coliving suelen estar ubicados en zonas estratégicas de la ciudad, cerca de transporte público, restaurantes y zonas de interés, permitiéndote aprovechar al máximo tu experiencia en la ciudad.",
          image: "/images/living_3.png"
        },
        {
          title: "5. Crecimiento Personal y Profesional",
          content: "El ambiente colaborativo del coliving fomenta el intercambio de conocimientos y habilidades. Los eventos comunitarios, workshops y espacios compartidos crean un ecosistema perfecto para el desarrollo personal y profesional."
        }
      ],
      conclusion: "El coliving no es solo una tendencia pasajera, sino una respuesta moderna a las necesidades cambiantes de una generación que valora la flexibilidad, la comunidad y las experiencias significativas por encima de las posesiones materiales.",
      tags: ["coliving", "nómadas digitales", "comunidad", "estilo de vida", "flexibilidad"],
      relatedPosts: ["guia-nomadas-digitales-bogota", "construir-comunidad-espacios-compartidos"]
    }
  },
  "guia-nomadas-digitales-bogota": {
    id: 2,
    title: "Guía para nómadas digitales en Bogotá",
    excerpt: "Todo lo que necesitas saber para trabajar remotamente desde la vibrante capital colombiana.",
    date: "2 de mayo, 2025",
    author: "Carlos Gómez",
    image: "/images/Creativos1.jpg",
    slug: "guia-nomadas-digitales-bogota",
    content: {
      mainImage: "/images/Creativos3.jpg",
      introduction: "Bogotá se ha convertido en un hub para nómadas digitales en Latinoamérica. Esta guía te ayudará a navegar la ciudad y aprovechar al máximo tu estancia mientras trabajas remotamente.",
      sections: [
        {
          title: "Conectividad y Espacios de Trabajo",
          content: "Bogotá ofrece excelente infraestructura digital con internet de alta velocidad y numerosos espacios de coworking. Descubre las mejores opciones para mantenerte productivo.",
          image: "/images/Creativos1.jpg"
        },
        {
          title: "Zonas Recomendadas para Vivir",
          content: "Desde el moderno Chapinero hasta el histórico La Candelaria, cada barrio tiene su encanto. Analizamos las mejores zonas para establecerte según tu estilo de vida y presupuesto.",
          image: "/images/Creativos2.jpg"
        },
        {
          title: "Costo de Vida y Presupuesto",
          content: "Desglosamos los costos típicos mensuales, desde alojamiento hasta alimentación y entretenimiento, para ayudarte a planificar tu estancia efectivamente.",
          image: "/images/living_1.png"
        },
        {
          title: "Vida Social y Networking",
          content: "Eventos, grupos y comunidades donde puedes conectar con otros nómadas digitales y profesionales locales. La clave para construir tu red en la ciudad."
        }
      ],
      conclusion: "Bogotá ofrece una combinación única de modernidad, cultura y oportunidades para nómadas digitales. Con la preparación adecuada, tu experiencia en la ciudad será inolvidable y productiva.",
      tags: ["Bogotá", "nómadas digitales", "trabajo remoto", "guía ciudad", "Colombia"],
      relatedPosts: ["mejores-cafes-para-trabajar", "eventos-bogota-verano-2025"]
    }
  },
  "construir-comunidad-espacios-compartidos": {
    id: 3,
    title: "Cómo construir una comunidad en espacios compartidos",
    excerpt: "Estrategias y consejos para fomentar conexiones significativas en entornos de coliving.",
    date: "20 de mayo, 2025",
    author: "Laura Martínez",
    image: "/images/Creativos1.jpg",
    slug: "construir-comunidad-espacios-compartidos",
    content: {
      mainImage: "/images/Creativos2.jpg",
      introduction: "La verdadera magia del coliving está en su comunidad. Descubre cómo puedes contribuir a crear y fortalecer lazos significativos en tu espacio compartido.",
      sections: [
        {
          title: "El Poder de los Espacios Comunes",
          content: "Los espacios compartidos son más que áreas físicas; son catalizadores de interacción social. Aprende a aprovecharlos para fomentar encuentros casuales y conexiones naturales.",
          image: "/images/living_1.png"
        },
        {
          title: "Organizando Eventos Comunitarios",
          content: "Desde cenas compartidas hasta sesiones de skill-sharing, los eventos son fundamentales para construir comunidad. Te compartimos ideas y mejores prácticas.",
          image: "/images/living_2.png"
        },
        {
          title: "Comunicación Efectiva",
          content: "La comunicación es clave en espacios compartidos. Descubre herramientas y estrategias para mantener una comunicación fluida y positiva entre residentes."
        },
        {
          title: "Resolución de Conflictos",
          content: "Aprende a manejar desacuerdos de manera constructiva y a convertir los retos en oportunidades para fortalecer la comunidad."
        }
      ],
      conclusion: "Construir una comunidad fuerte requiere tiempo, dedicación y participación activa de todos los miembros. Los beneficios de una comunidad vibrante hacen que todo el esfuerzo valga la pena.",
      tags: ["comunidad", "coliving", "eventos", "conexiones", "convivencia"],
      relatedPosts: ["5-razones-para-elegir-coliving", "equilibrio-trabajo-vida-personal"]
    }
  },
  "mejores-cafes-para-trabajar": {
    id: 4,
    title: "Los mejores cafés para trabajar cerca de Bambu Coliving",
    excerpt: "Una selección de cafeterías con buen WiFi, enchufes y ambiente agradable para tus días de trabajo fuera de casa.",
    date: "5 de junio, 2025",
    author: "Andrés Pérez",
    image: "/images/Creativos1.jpg",
    slug: "mejores-cafes-para-trabajar",
    content: {
      mainImage: "/images/Creativos3.jpg",
      introduction: "A veces necesitas un cambio de ambiente para impulsar tu creatividad. Descubre los mejores cafés cerca de Bambu Coliving que combinan buen café, WiFi confiable y ambiente perfecto para trabajar.",
      sections: [
        {
          title: "Café Creativo",
          content: "A solo 5 minutos caminando, este café ofrece espacios de trabajo individuales, WiFi de alta velocidad y los mejores lattes de la zona. Perfecto para sesiones largas de trabajo.",
          image: "/images/Creativos1.jpg"
        },
        {
          title: "The Coffee Lab",
          content: "Un espacio moderno con múltiples enchufes, mesas amplias y café de especialidad. Su ambiente tranquilo lo hace ideal para reuniones virtuales.",
          image: "/images/Creativos2.jpg"
        },
        {
          title: "Biblioteca Café",
          content: "Combina el encanto de una biblioteca con la comodidad de un café. Espacios silenciosos y conexión estable para máxima concentración.",
          image: "/images/living_1.png"
        },
        {
          title: "Tips para Trabajar en Cafés",
          content: "Consejos prácticos para maximizar tu productividad cuando trabajas desde un café, desde elegir el mejor horario hasta mantener tus dispositivos cargados."
        }
      ],
      conclusion: "Trabajar desde cafés puede ser una experiencia productiva y agradable. Estos espacios ofrecen el equilibrio perfecto entre ambiente profesional y casual que muchos trabajadores remotos buscan.",
      tags: ["cafés", "trabajo remoto", "Bogotá", "productividad", "WiFi"],
      relatedPosts: ["guia-nomadas-digitales-bogota", "equilibrio-trabajo-vida-personal"]
    }
  },
  "eventos-bogota-verano-2025": {
    id: 5,
    title: "Eventos imperdibles en Bogotá durante el verano 2025",
    excerpt: "Festivales, exposiciones y actividades culturales para disfrutar al máximo tu estancia en la ciudad.",
    date: "12 de junio, 2025",
    author: "Sofía Vargas",
    image: "/images/Creativos1.jpg",
    slug: "eventos-bogota-verano-2025",
    content: {
      mainImage: "/images/Creativos2.jpg",
      introduction: "El verano 2025 en Bogotá promete ser extraordinario. Te presentamos una guía completa de los eventos más destacados para que no te pierdas nada de la vibrante escena cultural de la ciudad.",
      sections: [
        {
          title: "Festivales de Música",
          content: "Desde conciertos al aire libre hasta festivales de música electrónica, la escena musical de Bogotá cobra vida en verano. Fechas, lugares y cómo conseguir entradas.",
          image: "/images/Creativos3.jpg"
        },
        {
          title: "Exposiciones de Arte",
          content: "Las mejores galerías y museos presentan exposiciones especiales. Descubre artistas locales e internacionales en espacios únicos.",
          image: "/images/living_1.png"
        },
        {
          title: "Eventos Gastronómicos",
          content: "Festivales de comida, mercados al aire libre y experiencias culinarias que no te puedes perder este verano.",
          image: "/images/living_2.png"
        },
        {
          title: "Actividades al Aire Libre",
          content: "Desde yoga en el parque hasta ciclovías especiales, aprovecha el buen clima con eventos al aire libre."
        }
      ],
      conclusion: "El verano en Bogotá es la temporada perfecta para explorar la rica oferta cultural de la ciudad. Con tantos eventos emocionantes, cada día trae una nueva aventura por descubrir.",
      tags: ["eventos", "Bogotá", "cultura", "festivales", "verano 2025"],
      relatedPosts: ["guia-nomadas-digitales-bogota", "mejores-cafes-para-trabajar"]
    }
  },
  "equilibrio-trabajo-vida-personal": {
    id: 6,
    title: "Equilibrio entre trabajo y vida personal en espacios de coliving",
    excerpt: "Consejos prácticos para mantener la productividad sin sacrificar tu bienestar en entornos compartidos.",
    date: "25 de junio, 2025",
    author: "Daniel Moreno",
    image: "/images/Creativos1.jpg",
    slug: "equilibrio-trabajo-vida-personal",
    content: {
      mainImage: "/images/Creativos2.jpg",
      introduction: "Mantener un equilibrio saludable entre trabajo y vida personal puede ser un reto en espacios de coliving. Descubre estrategias efectivas para maximizar tu productividad mientras cuidas tu bienestar.",
      sections: [
        {
          title: "Creando Rutinas Efectivas",
          content: "Establece rutinas que separen claramente el tiempo de trabajo del tiempo personal, incluso cuando trabajas desde casa.",
          image: "/images/Creativos3.jpg"
        },
        {
          title: "Espacios de Trabajo vs. Descanso",
          content: "Aprende a delimitar espacios físicos y mentales para diferentes actividades, maximizando la funcionalidad de tu entorno de coliving.",
          image: "/images/living_1.png"
        },
        {
          title: "Gestión del Tiempo",
          content: "Técnicas y herramientas para organizar tu tiempo efectivamente, incluyendo el método Pomodoro y otras estrategias de productividad.",
          image: "/images/living_2.png"
        },
        {
          title: "Actividades de Desconexión",
          content: "Ideas para actividades que te ayuden a desconectar del trabajo y reconectar con tu comunidad y contigo mismo."
        }
      ],
      conclusion: "El equilibrio entre trabajo y vida personal es fundamental para tu éxito y bienestar en un espacio de coliving. Con las estrategias adecuadas, puedes crear una rutina que te permita ser productivo sin sacrificar tu calidad de vida.",
      tags: ["productividad", "bienestar", "trabajo remoto", "coliving", "equilibrio"],
      relatedPosts: ["5-razones-para-elegir-coliving", "construir-comunidad-espacios-compartidos"]
    }
  }
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
    images: ["/images/living_1.png", "/images/living_2.png", "/images/living_3.png"]
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
  },
  gym: {
    title: "Gimnasio",
    description: "Mantén tu rutina de ejercicios sin salir de casa en nuestro gimnasio completamente equipado.",
    features: [
      {
        title: "Equipo Cardiovascular",
        description: "Caminadoras, bicicletas estáticas y elípticas de última generación.",
        icon: "Heart"
      },
      {
        title: "Área de Pesas",
        description: "Pesas libres, máquinas y equipamiento para entrenamiento de fuerza.",
        icon: "Dumbbell"
      },
      {
        title: "Espacio para Yoga",
        description: "Área dedicada para yoga, estiramientos y ejercicios de suelo.",
        icon: "Yoga"
      },
      {
        title: "Ambiente Motivador",
        description: "Espejos, sistema de sonido y ventilación adecuada para tu entrenamiento.",
        icon: "Music"
      }
    ],
    images: ["/images/living_1.png", "/images/living_2.png", "/images/living_3.png"]
  }
}

// ============= SERVICES CONTENT =============

export interface Service {
  title: string
  description: string
  icon: string
  features: string[]
  colorScheme: 'teal' | 'rose'
}

export const servicesContent = {
  header: {
    title: "Nuestros Servicios",
    description: "En Bambu Coliving, ofrecemos todo lo que necesitas para una experiencia de vida cómoda y productiva."
  },
  services: [
    {
      title: "Internet de Alta Velocidad",
      description: "Conexión WiFi de 300 Mbps en todas las áreas del edificio, ideal para trabajo remoto y streaming.",
      icon: "Wifi",
      features: [
        "Fibra óptica de alta velocidad",
        "Red dedicada para trabajo",
        "Soporte técnico disponible"
      ],
      colorScheme: "teal"
    },
    {
      title: "Limpieza y Mantenimiento",
      description: "Servicio de limpieza regular para áreas comunes y opción de limpieza para habitaciones privadas.",
      icon: "Sparkles",
      features: [
        "Limpieza diaria de áreas comunes",
        "Limpieza semanal de habitaciones (opcional)",
        "Mantenimiento 24/7"
      ],
      colorScheme: "rose"
    },
    {
      title: "Eventos Comunitarios",
      description: "Actividades semanales para fomentar la comunidad y el networking entre residentes.",
      icon: "Calendar",
      features: [
        "Happy hours semanales",
        "Talleres y charlas profesionales",
        "Excursiones y actividades culturales"
      ],
      colorScheme: "teal"
    },
    {
      title: "Servicios de Cocina",
      description: "Cocina completamente equipada y servicios adicionales para tu comodidad.",
      icon: "UtensilsCrossed",
      features: [
        "Desayuno continental (opcional)",
        "Cenas comunitarias semanales",
        "Servicio de café y té gratuito"
      ],
      colorScheme: "rose"
    },
    {
      title: "Bienestar y Fitness",
      description: "Servicios para mantener un estilo de vida saludable durante tu estancia.",
      icon: "Dumbbell",
      features: [
        "Gimnasio 24/7",
        "Clases de yoga (2 veces por semana)",
        "Asesoramiento de bienestar"
      ],
      colorScheme: "teal"
    },
    {
      title: "Servicios Adicionales",
      description: "Complementa tu experiencia con nuestros servicios premium adicionales.",
      icon: "Wifi",
      features: [
        "Servicio de lavandería",
        "Recepción de paquetes",
        "Asistencia para turismo local"
      ],
      colorScheme: "rose"
    }
  ],
  includedServices: [
    "WiFi de alta velocidad (300 Mbps)",
    "Servicios básicos (agua, luz, gas)",
    "Limpieza de áreas comunes",
    "Acceso a todas las áreas comunes",
    "Mantenimiento del edificio",
    "Seguridad 24/7",
    "Participación en eventos comunitarios",
    "Café y té gratuitos"
  ],
  cta: {
    title: "¿Listo para experimentar Bambu?",
    description: "Reserva ahora y disfruta de todos nuestros servicios premium desde el primer día.",
    buttonText: "Explorar habitaciones",
    buttonLink: "/habitaciones"
  }
}

// ============= EVENTOS PAGE CONTENT =============

export const eventosContent = {
  header: {
    title: "Eventos Sociales",
    description: "Únete a nuestros eventos semanales diseñados para crear conexiones auténticas y experiencias memorables en nuestra comunidad, sin costo adicional.  ",
    backgroundColor: "bg-teal-600",
    textColor: "text-white"
  },

  events: [
    {
      id: 1,
      title: "Noche de Peli",
      emoji: "🎬",
      day: "Jueves",
      time: "8:00 p.m.",
      frequency: "Semanal",
      description: "Una peli cada semana con sabor y ambiente suave.",
      includes: ["palomitas artesanales", "sangría fría o té caliente"],
      location: "Espacio común con mantas, luces bajas y sonido envolvente",
      colorScheme: "teal"
    },
    {
      id: 2,
      title: "Música en Vivo",
      emoji: "🎶",
      day: "Sábados",
      time: "8:00 p.m.",
      frequency: "1er sábado del mes",
      description: "Conciertos acústicos con músicos locales, en parche relajado.",
      includes: ["pola fría", "snacks salados"],
      location: "Tarima con chimenea, luz tenue, cojines y buen flow",
      colorScheme: "rose"
    },
    {
      id: 3,
      title: "Open Mic",
      emoji: "🎤",
      day: "Sábados",
      time: "8:00 p.m.",
      frequency: "3er sábado del mes",
      description: "Poetas, músicos, cuenteros y valientes. Micrófono libre, vibra cálida.",
      includes: ["pola fría", "snacks salados"],
      location: "Tarima acogedora, sin presión, solo expresión",
      colorScheme: "teal"
    },
    {
      id: 4,
      title: "Taller de Letras",
      emoji: "✍️",
      day: "Martes",
      time: "7:00 p.m.",
      frequency: "Cada 15 días",
      description: "Poesía, lectura en voz alta, escritura íntima. Palabras que abrazan.",
      includes: ["vino tinto o infusión con especias"],
      location: "Sala con velas, chimenea, materiales impresos y cuaderno comunitario",
      colorScheme: "rose"
    },
    {
      id: 5,
      title: "DJ Sessions",
      emoji: "🎧",
      day: "Domingo",
      time: "11:00 a.m. – 3:00 p.m.",
      frequency: "1 domingo al mes",
      description: "Domingos musicales con vinilos, sets suaves y traguito rico.",
      includes: ["sangría o cocktail", "tabla de quesos y frutas"],
      location: "Terraza o sala social con decoración sonora y ambiente chill",
      colorScheme: "teal"
    },
    {
      id: 6,
      title: "Galería Abierta",
      emoji: "🖼️",
      day: "Domingo",
      time: "3:00 p.m. – 7:00 p.m.",
      frequency: "1 domingo al mes",
      description: "Arte visual, pintura, fotografía, collages, objetos y más. Los residentes y amigos exponen lo que crean.",
      includes: [
        "Copa de vino de bienvenida",
        "Mini catering dulce/salado",
        "DJ set de fondo o música acústica suave",
        "Estación libre de intervención",
        "Rincón fotomatón análogo",
        "Cuaderno de visitantes"
      ],
      location: "Espacio artístico con iluminación natural y ambiente creativo",
      colorScheme: "rose"
    }
  ],
  gallery: {
    title: "Momentos especiales",
    description: "Revive algunos de nuestros eventos más memorables",
    images: [
      {
        src: "/images/Creativos1.jpg",
        alt: "Noche de película en el espacio común",
        caption: "Noche de peli con palomitas artesanales"
      },
      {
        src: "/images/Creativos2.jpg",
        alt: "Concierto acústico en la tarima",
        caption: "Música en vivo con músicos locales"
      },
      {
        src: "/images/Creativos3.jpg",
        alt: "Open mic con residentes",
        caption: "Open mic - micrófono libre"
      },
      {
        src: "/images/Bambu1.png",
        alt: "Taller de escritura",
        caption: "Taller de letras y poesía"
      },
      {
        src: "/images/Bambu2.png",
        alt: "DJ session en la terraza",
        caption: "DJ sessions dominicales"
      },
      {
        src: "/images/Bambu3.png",
        alt: "Galería de arte",
        caption: "Galería abierta - arte comunitario"
      }
    ]
  },
  cta: {
    title: "¿Listo para ser parte de nuestra comunidad?",
    description: "Únete a Bambu Coliving y vive experiencias únicas cada semana. La comunidad te espera.",
    buttonText: "Reserva tu lugar",
    buttonLink: "/reserva"
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
          answer: "La estancia mínima en Bambu Coliving es de 1 mes. Ofrecemos descuentos especiales para estancias de 3, 6 y 12 meses."
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
      link: "/nosotros"
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