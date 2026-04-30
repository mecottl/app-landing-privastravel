import paris from "@/assets/dest-paris.jpg";
import machu from "@/assets/dest-machu.jpg";
import dubai from "@/assets/dest-dubai.jpg";
import bali from "@/assets/dest-bali.jpg";
import nyc from "@/assets/dest-nyc.jpg";
import patagonia from "@/assets/dest-patagonia.jpg";

export type ItineraryDay = { day: number; title: string; description: string };
export type Hotel = { name: string; category: string; nights: number; board: string };
export type RoomPricing = { type: string; price: number; note?: string };
export type OptionalTour = { name: string; duration: string; price: number };

export type Trip = {
  id: string;
  name: string;
  country: string;
  region: "Europa" | "América" | "Asia" | "África" | "Oceanía";
  nights: number;
  priceFrom: number;
  image: string;
  tag?: string;
  summary: string;
  itinerary: ItineraryDay[];
  airlines: string[];
  departureDates: string[];
  includes: string[];
  excludes: string[];
  hotels: Hotel[];
  pricing: RoomPricing[];
  optionalTours: OptionalTour[];
  requirements: { passport: string; visa: string; vaccines?: string; other?: string };
  notes: string[];
};

export const trips: Trip[] = [
  {
    id: "paris",
    name: "París esencial",
    country: "Francia",
    region: "Europa",
    nights: 7,
    priceFrom: 1890,
    image: paris,
    tag: "Romántico",
    summary:
      "Recorre la Ciudad de la Luz a tu ritmo: desde el Sena hasta Montmartre, una semana para descubrir su arte, gastronomía y elegancia atemporal.",
    itinerary: [
      { day: 1, title: "Llegada a París", description: "Recepción en CDG, traslado privado al hotel y tarde libre por el barrio del Marais." },
      { day: 2, title: "París clásico", description: "Tour panorámico: Torre Eiffel, Campos Elíseos, Arco del Triunfo y crucero por el Sena." },
      { day: 3, title: "Louvre y Tullerías", description: "Visita guiada al Museo del Louvre y paseo por los jardines de las Tullerías." },
      { day: 4, title: "Versalles", description: "Excursión de día completo al Palacio y jardines de Versalles." },
      { day: 5, title: "Montmartre y arte", description: "Mañana en Montmartre, Sacré-Cœur y tarde libre para Musée d'Orsay." },
      { day: 6, title: "Día libre", description: "Día a tu disposición para tours opcionales o compras en Galeries Lafayette." },
      { day: 7, title: "Notre-Dame y Île de la Cité", description: "Recorrido a pie por el corazón histórico de París." },
      { day: 8, title: "Regreso", description: "Traslado al aeropuerto y vuelo de regreso." },
    ],
    airlines: ["Air France", "Iberia", "KLM"],
    departureDates: ["15 Jun 2026", "12 Jul 2026", "09 Ago 2026", "20 Sep 2026"],
    includes: [
      "Vuelo redondo en clase turista",
      "7 noches de alojamiento con desayuno",
      "Traslados aeropuerto-hotel-aeropuerto",
      "Tour panorámico de París",
      "Excursión a Versalles con guía",
      "Asistencia de viaje 24/7",
    ],
    excludes: [
      "Comidas no especificadas",
      "Bebidas en restaurantes",
      "Propinas a guías y conductores",
      "Gastos personales",
      "Seguro médico premium",
    ],
    hotels: [
      { name: "Hôtel Le Marais", category: "4★", nights: 7, board: "Desayuno" },
      { name: "Hôtel Lutetia", category: "5★", nights: 7, board: "Desayuno buffet" },
    ],
    pricing: [
      { type: "Sencilla", price: 2390, note: "1 persona" },
      { type: "Doble", price: 1890, note: "Por persona" },
      { type: "Triple", price: 1790, note: "Por persona" },
      { type: "Infante", price: 690, note: "0–2 años" },
    ],
    optionalTours: [
      { name: "Disneyland París", duration: "1 día", price: 180 },
      { name: "Cena crucero por el Sena", duration: "3 horas", price: 145 },
      { name: "Cabaret Moulin Rouge", duration: "Noche", price: 220 },
    ],
    requirements: {
      passport: "Vigencia mínima de 6 meses al regreso.",
      visa: "No requerida para estancias menores a 90 días (espacio Schengen).",
      vaccines: "Sin requerimientos especiales.",
      other: "ETIAS obligatorio a partir de 2026.",
    },
    notes: [
      "Tarifas sujetas a disponibilidad y cambios sin previo aviso.",
      "Itinerario puede modificarse por causas operativas o climáticas.",
      "Se recomienda llegar 3 horas antes al aeropuerto en vuelos internacionales.",
      "El equipaje documentado es de 1 maleta de 23 kg por pasajero.",
    ],
  },
  {
    id: "machu",
    name: "Machu Picchu místico",
    country: "Perú",
    region: "América",
    nights: 9,
    priceFrom: 2150,
    image: machu,
    tag: "Aventura",
    summary:
      "Una expedición por el corazón del imperio inca: Lima, Cusco, Valle Sagrado y la mítica ciudadela de Machu Picchu.",
    itinerary: [
      { day: 1, title: "Llegada a Lima", description: "Recepción y traslado al hotel en Miraflores." },
      { day: 2, title: "Lima colonial", description: "City tour por el Centro Histórico y Museo Larco." },
      { day: 3, title: "Vuelo a Cusco", description: "Traslado y tarde de aclimatación." },
      { day: 4, title: "Valle Sagrado", description: "Pisac, Ollantaytambo y mercados artesanales." },
      { day: 5, title: "Machu Picchu", description: "Tren a Aguas Calientes y visita guiada a la ciudadela." },
      { day: 6, title: "Cusco imperial", description: "Sacsayhuamán, Qorikancha y Plaza de Armas." },
      { day: 7, title: "Montaña de Colores", description: "Excursión opcional a Vinicunca." },
      { day: 8, title: "Regreso a Lima", description: "Vuelo y tarde libre en Barranco." },
      { day: 9, title: "Gastronomía limeña", description: "Tour culinario con clase de pisco sour." },
      { day: 10, title: "Regreso", description: "Traslado al aeropuerto." },
    ],
    airlines: ["LATAM", "Avianca", "Aeroméxico"],
    departureDates: ["10 May 2026", "14 Jun 2026", "12 Jul 2026", "16 Ago 2026"],
    includes: [
      "Vuelo internacional y vuelos internos Lima-Cusco-Lima",
      "9 noches de alojamiento",
      "Tren a Machu Picchu (servicio Vistadome)",
      "Boleto de ingreso a Machu Picchu",
      "Guía certificado en español",
      "Desayunos diarios y 2 cenas",
    ],
    excludes: [
      "Excursión a Montaña de Colores",
      "Almuerzos no especificados",
      "Propinas",
      "Seguro de viaje",
    ],
    hotels: [
      { name: "Casa Andina Premium", category: "4★", nights: 3, board: "Desayuno" },
      { name: "Aranwa Sacred Valley", category: "5★", nights: 2, board: "Media pensión" },
      { name: "Sumaq Machu Picchu", category: "4★", nights: 1, board: "Pensión completa" },
      { name: "JW Marriott Lima", category: "5★", nights: 3, board: "Desayuno" },
    ],
    pricing: [
      { type: "Sencilla", price: 2790, note: "1 persona" },
      { type: "Doble", price: 2150, note: "Por persona" },
      { type: "Triple", price: 2050, note: "Por persona" },
      { type: "Infante", price: 850, note: "0–2 años" },
    ],
    optionalTours: [
      { name: "Montaña de Colores Vinicunca", duration: "1 día", price: 95 },
      { name: "Huayna Picchu (subida)", duration: "2 horas", price: 75 },
      { name: "Tour gastronómico Lima", duration: "4 horas", price: 110 },
    ],
    requirements: {
      passport: "Vigencia mínima de 6 meses al regreso.",
      visa: "No requerida para turismo hasta 183 días.",
      vaccines: "Fiebre amarilla recomendada si visitas la selva.",
      other: "Boleto de Machu Picchu sujeto a cupos diarios — reserva con anticipación.",
    },
    notes: [
      "Cusco se ubica a 3,400 msnm: se recomienda hidratación y descanso al llegar.",
      "Llevar protector solar, repelente y ropa por capas.",
      "Tren y boletos de ingreso son nominativos y no reembolsables.",
      "Equipaje permitido en tren: 1 bolso de máximo 5 kg.",
    ],
  },
  {
    id: "dubai",
    name: "Dubái contemporáneo",
    country: "EAU",
    region: "Asia",
    nights: 6,
    priceFrom: 2390,
    image: dubai,
    tag: "Lujo",
    summary:
      "Rascacielos, desierto dorado y lujo árabe en una semana inolvidable entre el Burj Khalifa, Palm Jumeirah y Abu Dhabi.",
    itinerary: [
      { day: 1, title: "Llegada", description: "Traslado privado al hotel y check-in." },
      { day: 2, title: "Dubái moderno", description: "Burj Khalifa, Dubai Mall y fuente danzante." },
      { day: 3, title: "Dubái tradicional", description: "Barrio Al Fahidi, zoco del oro y abra por el Creek." },
      { day: 4, title: "Safari por el desierto", description: "Dunas en 4×4, paseo en camello y cena beduina." },
      { day: 5, title: "Abu Dhabi", description: "Mezquita Sheikh Zayed y Louvre Abu Dhabi." },
      { day: 6, title: "Día libre", description: "Playa privada o compras en Mall of the Emirates." },
      { day: 7, title: "Regreso", description: "Traslado al aeropuerto." },
    ],
    airlines: ["Emirates", "Qatar Airways", "Turkish Airlines"],
    departureDates: ["08 Mar 2026", "12 Abr 2026", "10 Oct 2026", "07 Nov 2026"],
    includes: [
      "Vuelo redondo clase turista",
      "6 noches en hotel 5★",
      "Traslados privados",
      "City tour Dubái moderno y tradicional",
      "Safari en el desierto con cena",
      "Excursión a Abu Dhabi",
    ],
    excludes: [
      "Boletos a Burj Khalifa piso 124/148",
      "Comidas no especificadas",
      "Propinas",
      "Gastos personales",
    ],
    hotels: [
      { name: "Address Dubai Mall", category: "5★", nights: 6, board: "Desayuno" },
      { name: "Atlantis The Palm", category: "5★ Lujo", nights: 6, board: "Media pensión" },
    ],
    pricing: [
      { type: "Sencilla", price: 3190, note: "1 persona" },
      { type: "Doble", price: 2390, note: "Por persona" },
      { type: "Triple", price: 2290, note: "Por persona" },
      { type: "Infante", price: 790, note: "0–2 años" },
    ],
    optionalTours: [
      { name: "Cena crucero Marina", duration: "2 horas", price: 130 },
      { name: "Acuario Atlantis", duration: "3 horas", price: 95 },
      { name: "Helicóptero sobre Dubái", duration: "15 min", price: 220 },
    ],
    requirements: {
      passport: "Vigencia mínima de 6 meses al ingreso.",
      visa: "Visa de turismo gratuita a la llegada (30 días) para muchas nacionalidades.",
      vaccines: "Sin requerimientos especiales.",
      other: "Respeto al código de vestimenta en lugares religiosos.",
    },
    notes: [
      "Temperatura en verano supera los 40 °C — mejor temporada: octubre a abril.",
      "Consumo de alcohol restringido a hoteles y zonas autorizadas.",
      "Ramadán afecta horarios y servicios; consulta fechas.",
      "Propina habitual del 10% en restaurantes.",
    ],
  },
  {
    id: "bali",
    name: "Bali sereno",
    country: "Indonesia",
    region: "Asia",
    nights: 10,
    priceFrom: 2490,
    image: bali,
    tag: "Bienestar",
    summary:
      "Templos milenarios, arrozales infinitos y playas de ensueño en una experiencia de bienestar entre Ubud, Seminyak y Nusa Dua.",
    itinerary: [
      { day: 1, title: "Llegada a Denpasar", description: "Traslado a Ubud, bienvenida con masaje balinés." },
      { day: 2, title: "Ubud cultural", description: "Bosque de los Monos, Palacio Real y mercado." },
      { day: 3, title: "Tegallalang", description: "Arrozales en terraza y templo Tirta Empul." },
      { day: 4, title: "Volcán Batur", description: "Amanecer en el volcán y aguas termales." },
      { day: 5, title: "Traslado a Seminyak", description: "Tarde libre en playa." },
      { day: 6, title: "Tanah Lot y Uluwatu", description: "Templos sobre el océano y danza Kecak al atardecer." },
      { day: 7, title: "Nusa Penida", description: "Tour de día completo a Kelingking Beach." },
      { day: 8, title: "Spa y bienestar", description: "Día completo en spa con tratamientos tradicionales." },
      { day: 9, title: "Día libre", description: "Surf, yoga o compras." },
      { day: 10, title: "Despedida", description: "Cena tradicional con espectáculo." },
      { day: 11, title: "Regreso", description: "Traslado al aeropuerto." },
    ],
    airlines: ["Singapore Airlines", "Qatar Airways", "Cathay Pacific"],
    departureDates: ["05 May 2026", "09 Jun 2026", "07 Jul 2026", "11 Ago 2026"],
    includes: [
      "Vuelo internacional clase turista",
      "10 noches en hoteles seleccionados",
      "Traslados privados",
      "Excursiones mencionadas con guía",
      "1 sesión de spa balinés",
      "Desayunos diarios",
    ],
    excludes: [
      "Tour Nusa Penida (opcional con costo)",
      "Almuerzos y cenas no especificadas",
      "Visa de ingreso (USD 35 aprox.)",
      "Propinas",
    ],
    hotels: [
      { name: "Komaneka at Bisma", category: "5★", nights: 4, board: "Desayuno" },
      { name: "The Legian Seminyak", category: "5★", nights: 3, board: "Desayuno" },
      { name: "Mulia Resort Nusa Dua", category: "5★", nights: 3, board: "Media pensión" },
    ],
    pricing: [
      { type: "Sencilla", price: 3290, note: "1 persona" },
      { type: "Doble", price: 2490, note: "Por persona" },
      { type: "Triple", price: 2390, note: "Por persona" },
      { type: "Infante", price: 720, note: "0–2 años" },
    ],
    optionalTours: [
      { name: "Nusa Penida Day Tour", duration: "1 día", price: 120 },
      { name: "Clase de cocina balinesa", duration: "4 horas", price: 65 },
      { name: "Rafting Río Ayung", duration: "Medio día", price: 85 },
    ],
    requirements: {
      passport: "Vigencia mínima de 6 meses y 2 páginas en blanco.",
      visa: "Visa on Arrival (USD 35), válida 30 días.",
      vaccines: "Hepatitis A y tifoidea recomendadas.",
      other: "Llevar repelente contra mosquitos.",
    },
    notes: [
      "Temporada de lluvias: noviembre a marzo.",
      "Respeto al código de vestimenta en templos (sarong incluido).",
      "Tráfico denso en Seminyak y Kuta — calcula tiempos extra.",
      "Moneda local: rupia indonesia (IDR).",
    ],
  },
  {
    id: "nyc",
    name: "Nueva York icónica",
    country: "EE. UU.",
    region: "América",
    nights: 5,
    priceFrom: 1690,
    image: nyc,
    tag: "Ciudad",
    summary:
      "La Gran Manzana en su máxima expresión: Times Square, Central Park, Broadway y los rascacielos más emblemáticos del planeta.",
    itinerary: [
      { day: 1, title: "Llegada a JFK", description: "Traslado al hotel en Midtown Manhattan." },
      { day: 2, title: "Manhattan clásico", description: "Times Square, Quinta Avenida, Rockefeller y Central Park." },
      { day: 3, title: "Downtown y Estatua de la Libertad", description: "Ferry a Liberty Island y Memorial 9/11." },
      { day: 4, title: "Brooklyn y museos", description: "DUMBO, puente de Brooklyn y MoMA." },
      { day: 5, title: "Día libre", description: "Compras o musical en Broadway." },
      { day: 6, title: "Regreso", description: "Traslado a JFK." },
    ],
    airlines: ["American Airlines", "Delta", "United", "Aeroméxico"],
    departureDates: ["20 Abr 2026", "18 May 2026", "15 Jun 2026", "21 Sep 2026", "16 Nov 2026"],
    includes: [
      "Vuelo redondo clase turista",
      "5 noches en hotel céntrico",
      "Traslados de aeropuerto",
      "City tour Manhattan",
      "Ferry a Estatua de la Libertad",
    ],
    excludes: [
      "Boleto Top of the Rock o Empire State",
      "Comidas",
      "Propinas (15–20% habitual)",
      "Espectáculos de Broadway",
      "ESTA (USD 21)",
    ],
    hotels: [
      { name: "Hilton Midtown", category: "4★", nights: 5, board: "Solo alojamiento" },
      { name: "The Plaza", category: "5★ Lujo", nights: 5, board: "Desayuno" },
    ],
    pricing: [
      { type: "Sencilla", price: 2390, note: "1 persona" },
      { type: "Doble", price: 1690, note: "Por persona" },
      { type: "Triple", price: 1590, note: "Por persona" },
      { type: "Infante", price: 590, note: "0–2 años" },
    ],
    optionalTours: [
      { name: "Musical de Broadway", duration: "Noche", price: 180 },
      { name: "Helicóptero sobre Manhattan", duration: "20 min", price: 290 },
      { name: "Tour Harlem y Gospel", duration: "Domingo AM", price: 95 },
    ],
    requirements: {
      passport: "Vigencia mínima de 6 meses.",
      visa: "Visa B1/B2 vigente o autorización ESTA según nacionalidad.",
      vaccines: "Sin requerimientos.",
      other: "Registro ESTA con mínimo 72 horas de anticipación.",
    },
    notes: [
      "Propinas son obligatorias culturalmente: 18–20% en restaurantes.",
      "Impuestos no incluidos en precios mostrados (≈ 8.875%).",
      "Clima variable — consulta el pronóstico antes de empacar.",
      "Metro 24/7, MetroCard recomendada.",
    ],
  },
  {
    id: "patagonia",
    name: "Patagonia salvaje",
    country: "Chile",
    region: "América",
    nights: 8,
    priceFrom: 2890,
    image: patagonia,
    tag: "Naturaleza",
    summary:
      "El fin del mundo en estado puro: glaciares, montañas y estepa entre Torres del Paine y los fiordos del sur.",
    itinerary: [
      { day: 1, title: "Llegada a Santiago", description: "Conexión y noche en hotel." },
      { day: 2, title: "Vuelo a Punta Arenas", description: "Traslado a Puerto Natales." },
      { day: 3, title: "Torres del Paine", description: "Día completo con guía: lagos, miradores y cascadas." },
      { day: 4, title: "Glaciar Grey", description: "Navegación frente al glaciar." },
      { day: 5, title: "Trekking Base Torres", description: "Caminata icónica de día completo." },
      { day: 6, title: "Cueva del Milodón", description: "Visita y traslado a Punta Arenas." },
      { day: 7, title: "Pingüinera Magdalena", description: "Navegación a la isla de los pingüinos." },
      { day: 8, title: "Regreso a Santiago", description: "Tarde libre en la capital." },
      { day: 9, title: "Regreso", description: "Traslado al aeropuerto." },
    ],
    airlines: ["LATAM", "Sky Airline", "Aeroméxico"],
    departureDates: ["12 Oct 2026", "09 Nov 2026", "07 Dic 2026", "11 Ene 2027", "08 Feb 2027"],
    includes: [
      "Vuelo internacional y vuelo interno Santiago-Punta Arenas",
      "8 noches de alojamiento",
      "Traslados terrestres en Patagonia",
      "Excursiones con guía bilingüe",
      "Ingreso a Parque Torres del Paine",
      "Navegación al Glaciar Grey",
    ],
    excludes: [
      "Almuerzos en excursiones",
      "Propinas a guías",
      "Equipo de trekking personal",
      "Seguro de cancelación",
    ],
    hotels: [
      { name: "Hotel Costaustralis", category: "4★", nights: 4, board: "Desayuno" },
      { name: "Tierra Patagonia", category: "5★ Boutique", nights: 3, board: "Pensión completa" },
      { name: "Hotel Cumbres Patagónicas", category: "4★", nights: 1, board: "Desayuno" },
    ],
    pricing: [
      { type: "Sencilla", price: 3690, note: "1 persona" },
      { type: "Doble", price: 2890, note: "Por persona" },
      { type: "Triple", price: 2790, note: "Por persona" },
      { type: "Infante", price: 890, note: "0–2 años" },
    ],
    optionalTours: [
      { name: "Kayak en lagunas glaciares", duration: "Medio día", price: 130 },
      { name: "Cabalgata en estancia", duration: "3 horas", price: 95 },
      { name: "Vuelo escénico sobre el Paine", duration: "1 hora", price: 320 },
    ],
    requirements: {
      passport: "Vigencia mínima de 6 meses.",
      visa: "No requerida para turismo hasta 90 días (consultar nacionalidad).",
      vaccines: "Sin requerimientos.",
      other: "Trae ropa térmica, impermeable y calzado de trekking.",
    },
    notes: [
      "Clima patagónico extremadamente cambiante: 4 estaciones en un día.",
      "Vientos pueden superar los 100 km/h en primavera.",
      "Algunas excursiones dependen de condiciones climáticas.",
      "Conectividad limitada en zonas remotas del parque.",
    ],
  },
];
