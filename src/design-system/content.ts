export const SITE = {
  name: "RAMSIG Seguridad Privada",
  title: "RAMSIG Seguridad Privada | Guardias, monitoreo con IA y custodias en México",
  description:
    "Guardias intramuros, monitoreo 24/7 con CCTV e inteligencia artificial y custodias de mercancía para industria, obras de construcción y parques logísticos en México.",
  canonicalUrl: "https://www.ramsigseguridad.com/",
} as const;

export const NAV_LINKS = [
  { href: "#acerca", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#sectores", label: "Sectores" },
  { href: "#presencia", label: "Presencia" },
  { href: "#bolsa-de-trabajo", label: "Vacantes" },
] as const;

export const HEADER_CTA = "Solicitar propuesta";

export const CONTACT = {
  phoneDisplay: "+52 55 3557 8304",
  phoneHref: "tel:+525535578304",
  whatsappHref:
    "https://wa.me/525535578304?text=Hola%2C%20solicito%20una%20propuesta%20de%20seguridad%20privada%20con%20RAMSIG.",
  whatsappLabel: "Contactar por WhatsApp",
  email: "ventas@ramsigseguridad.com",
  emailHref: "mailto:ventas@ramsigseguridad.com",
  city: "Naucalpan de Juárez, Estado de México, México",
  operationsHours: "Centro de monitoreo y operaciones: 24 horas, los 365 días.",
  officeHours: "Atención comercial y administrativa: lunes a viernes de 9:00 a 18:00 h.",
  copyright: "© 2026 RAMSIG Seguridad Privada",
  photoCredit: "Fotografías vía Unsplash",
  privacyTitle: "Consultar aviso de privacidad",
  privacyText:
    "RAMSIG Seguridad Privada trata sus datos personales únicamente para preparar propuestas comerciales o dar seguimiento a postulaciones laborales, conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.",
} as const;

export const HERO = {
  title: "Seguridad privada para industria, obra y logística.",
  titlePrefix: "Seguridad privada para",
  sectors: ["industria", "obra", "logística"] as const,
  lead: "Guardias intramuros, monitoreo 24/7 con CCTV e IA y custodias de mercancía en cinco estados.",
  image: {
    src: "/images/hero-security.jpg",
    alt: "Elemento de seguridad privada en traje negro dentro de instalación corporativa",
  },
} as const;

export const ABOUT_SECTION = {
  title: "Consolidación operativa bajo un solo mando",
  highlight: "mando",
  paragraphs: [
    "Cuando la vigilancia física, el monitoreo remoto y la escolta carretera operan con proveedores aislados, los incidentes se atienden tarde.",
    "RAMSIG integra guardias en sitio, videovigilancia CCTV con inteligencia artificial y custodia de carga en ruta bajo una misma coordinación para responder desde el primer aviso.",
  ],
  image: {
    src: "/images/monitoring.jpg",
    alt: "Centro de control con pantallas de videovigilancia y seguimiento operativo",
  },
} as const;

export interface Entry {
  id: string;
  name: string;
  description: string;
  image?: {
    src: string;
    alt: string;
  };
}

export const SERVICES_SECTION = {
  title: "Tres líneas de control para su operación",
  highlight: "control",
  summary:
    "Personal evaluado, supervisión directa en campo y protocolos escritos para cada punto crítico de su empresa.",
} as const;

export const SERVICES: readonly Entry[] = [
  {
    id: "guardias",
    name: "Guardia intramuros",
    description:
      "Registro estricto de personal, contratistas y transporte en casetas de acceso; rondines con bitácora y cobertura continua en turnos de 12 y 24 horas.",
  },
  {
    id: "monitoreo",
    name: "Monitoreo 24/7 y CCTV con IA",
    description:
      "Vigilancia permanente desde nuestro centro de control con cámaras HD nocturnas de zoom óptico, analítica por inteligencia artificial y seguimiento GPS para detectar desvíos al instante.",
  },
  {
    id: "custodias",
    name: "Custodias de mercancía",
    description:
      "Escolta física en coordinación con CAPUFE, custodia cabinera a bordo de la unidad y custodia virtual con cuenta espejo en tiempo real para su equipo logístico.",
  },
];

export const SECTORS_SECTION = {
  title: "Operación diseñada para su sector",
  highlight: "sector",
  summary:
    "Cada instalación enfrenta riesgos distintos; ajustamos turnos, consignas y enlaces de reacción a su operación diaria.",
  extendedNote:
    "También operamos esquemas dedicados para edificios corporativos, centros comerciales y desarrollos residenciales.",
} as const;

export const SECTORS: readonly Entry[] = [
  {
    id: "industria",
    name: "Industria",
    description:
      "Control de ingreso de operadores, proveedores y unidades pesadas en plantas y naves; prevención de merma en almacenes y resguardo perimetral.",
    image: {
      src: "/images/industry.jpg",
      alt: "Interior de nave industrial con estructura metálica e iluminación cenital",
    },
  },
  {
    id: "construccion",
    name: "Obras de construcción",
    description:
      "Resguardo de maquinaria pesada, herramienta y diésel en frentes abiertos, con vigilancia reforzada durante turnos nocturnos y fines de semana.",
    image: {
      src: "/images/construction.jpg",
      alt: "Grúas torre y estructura de obra civil iluminadas al anochecer",
    },
  },
  {
    id: "logistica",
    name: "Parques logísticos",
    description:
      "Supervisión de patios de maniobra, andenes y sellos fiscales, enlazada con custodia carretera y geocercas activas de origen a destino.",
    image: {
      src: "/images/logistics.jpg",
      alt: "Unidades de transporte de carga circulando en autopista al atardecer",
    },
  },
];

export interface Metric {
  id: string;
  value: string;
  label: string;
}

export const IMPACT_SECTION = {
  title: "Nuestra presencia en la seguridad",
  highlight: "seguridad",
  summary:
    "Cifras operativas acumuladas en plantas industriales, obras activas y rutas de distribución en México.",
} as const;

export const METRICS: readonly Metric[] = [
  { id: "empleos", value: "+600", label: "Empleos generados en campo y supervisión" },
  {
    id: "personas",
    value: "+10,000",
    label: "Personas resguardadas directa e indirectamente cada día",
  },
  { id: "sitios", value: "+40", label: "Sitios operativos activos bajo cobertura" },
  { id: "superficie", value: "+4M", label: "Metros cuadrados vigilados diariamente" },
  { id: "horas", value: "+2.5M", label: "Horas anuales de servicio acumulado" },
  { id: "sedes", value: "5", label: "Sedes operando de forma simultánea" },
];

export interface StatePresence {
  id: string;
  name: string;
  role: string;
}

export const PRESENCE_SECTION = {
  title: "Presencia nacional",
  highlight: "nacional",
  paragraphs: [
    "Operamos de forma activa en cinco entidades clave para la manufactura, la construcción y el traslado de carga.",
    "Cuando un cliente abre planta o ruta fuera de estas plazas, desplegamos supervisión y personal en cualquier estado de la República.",
  ],
  states: [
    { id: "edomex", name: "Estado de México", role: "Matriz operativa en Naucalpan de Juárez" },
    { id: "cdmx", name: "Ciudad de México", role: "Cobertura corporativa y metropolitana" },
    { id: "queretaro", name: "Querétaro", role: "Corredor industrial del Bajío" },
    { id: "jalisco", name: "Jalisco", role: "Occidente y parques logísticos" },
    { id: "bcs", name: "Baja California Sur", role: "Operaciones estratégicas del noroeste" },
  ] satisfies readonly StatePresence[],
  image: {
    src: "/images/mexico-presence.png",
    alt: "Mapa de la República Mexicana con los cinco estados donde opera RAMSIG Seguridad Privada",
  },
} as const;

export const FRAMEWORK_SECTION = {
  title: "Certificaciones y respaldo normativo",
  highlight: "normativo",
  summary:
    "Expediente corporativo preparado para licitaciones, auditorías internas y procesos de alta como proveedor.",
  items: [
    {
      id: "sspc",
      name: "SSPC / DGSP",
      description:
        "Operación alineada con los lineamientos de la Secretaría de Seguridad y Protección Ciudadana y la Dirección General de Seguridad Privada.",
    },
    {
      id: "repse",
      name: "Cumplimiento REPSE",
      description:
        "Documentación para servicios especializados orientada a cumplir auditorías fiscales y laborales de clientes corporativos.",
    },
    {
      id: "capufe",
      name: "Protocolo CAPUFE",
      description:
        "Coordinación operativa directa con Caminos y Puentes Federales ante incidencias en autopistas y corredores de carga.",
    },
  ] satisfies readonly Entry[],
} as const;

export const CAREERS_SECTION = {
  title: "Únete a nuestro equipo",
  highlight: "equipo",
  lead: "Vacantes operativas abiertas.",
  paragraphs: [
    "Buscamos guardias intramuros, monitoristas y escoltas que valoren trabajar con reglas claras, turnos definidos y capacitación continua.",
    "Intégrate a un equipo con operación estable en cinco estados y oportunidades reales de crecimiento operativo.",
  ],
  cta: "Postularme a vacantes",
  image: {
    src: "/images/team.jpg",
    alt: "Elemento de seguridad en caseta de control de accesos durante turno nocturno",
  },
} as const;

export const CONTACT_SECTION = {
  title: "Solicite una evaluación operativa",
  highlight: "operativa",
  subtitle:
    "Indique el servicio, sector y plaza donde requiere cobertura para recibir una propuesta adaptada a su operación.",
  submitCta: "Enviar solicitud de propuesta",
  confirmation:
    "Solicitud recibida. Un responsable de operaciones o recursos humanos se pondrá en contacto con usted.",
} as const;

export const REQUEST_OPTIONS = [
  { value: "guardias", label: "Guardia intramuros" },
  { value: "monitoreo", label: "Monitoreo 24/7 y CCTV con IA" },
  { value: "custodias", label: "Custodias de mercancía" },
  { value: "integral", label: "Consolidación integral (varios servicios)" },
  { value: "bolsa", label: "Bolsa de trabajo (postulación)" },
] as const;

export type RequestOptionValue = (typeof REQUEST_OPTIONS)[number]["value"];
