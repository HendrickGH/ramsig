export const SITE = {
  name: "RAMSIG Seguridad Privada",
  title: "RAMSIG Seguridad Privada | Guardias, monitoreo y custodias en México",
  description:
    "Guardias intramuros, monitoreo 24/7 y custodias de mercancía para industria, obras de construcción y parques logísticos en cinco estados.",
  canonicalUrl: "https://www.ramsigseguridad.com/",
} as const;

export const NAV_LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#sectores", label: "Sectores" },
  { href: "#cobertura", label: "Cobertura" },
] as const;

export const CONTACT = {
  phoneDisplay: "+52 55 3557 8304",
  phoneHref: "tel:+525535578304",
  whatsappHref:
    "https://wa.me/525535578304?text=Hola%2C%20solicito%20informaci%C3%B3n%20sobre%20servicios%20de%20seguridad%20privada%20con%20RAMSIG.",
  email: "ventas@ramsigseguridad.com",
  emailHref: "mailto:ventas@ramsigseguridad.com",
  city: "Naucalpan de Juárez, Estado de México",
  operationsHours: "Centro de monitoreo: 24 horas, todos los días.",
  officeHours: "Oficina comercial: lunes a viernes de 9:00 a 18:00 h.",
  copyright: "© 2026 RAMSIG Seguridad Privada",
  photoCredit: "Fotografía: Job Moses en Unsplash",
  privacyTitle: "Consultar aviso de privacidad",
  privacyText:
    "RAMSIG Seguridad Privada utiliza los datos proporcionados únicamente para atender solicitudes de cotización o postulaciones laborales, conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.",
} as const;

export const HERO = {
  title: "Seguridad privada para industria, obra y logística.",
  titlePrefix: "Seguridad privada para",
  sectors: ["industria", "obra", "logística"] as const,
  lead: "Guardias intramuros, monitoreo 24/7 y custodias de mercancía en cinco estados.",
  image: {
    src: "/images/hero-security.jpg",
    alt: "Elemento de seguridad privada en traje negro dentro de instalación corporativa",
  },
} as const;

export interface Entry {
  id: string;
  name: string;
  description: string;
}

export const SERVICES_SECTION = {
  title: "Servicios",
  summary:
    "Personal evaluado, supervisión en campo y protocolos adaptados a cada operación.",
} as const;

export const SERVICES: readonly Entry[] = [
  {
    id: "guardias",
    name: "Guardias intramuros",
    description:
      "Control de accesos peatonales, vehiculares y de proveedores; rondines con bitácora y resguardo perimetral en turnos de 12 y 24 horas.",
  },
  {
    id: "monitoreo",
    name: "Monitoreo 24/7",
    description:
      "Videovigilancia con cámaras HD de visión nocturna, zoom óptico y seguimiento satelital GPS desde nuestro centro de control.",
  },
  {
    id: "custodias",
    name: "Custodias de mercancía",
    description:
      "Escolta física en coordinación con CAPUFE, custodia cabinera a bordo y custodia virtual con cuenta espejo para su equipo logístico.",
  },
];

export const SECTORS_SECTION = {
  title: "Sectores que protegemos",
  summary: "Consignas diseñadas para las vulnerabilidades reales de cada entorno.",
  extendedNote:
    "También operamos esquemas dedicados para entornos corporativos, comerciales y residenciales.",
} as const;

export const SECTORS: readonly Entry[] = [
  {
    id: "industria",
    name: "Industria",
    description:
      "Control de personal, contratistas y transporte en plantas de manufactura y naves industriales; prevención de merma y vigilancia perimetral.",
  },
  {
    id: "construccion",
    name: "Obras de construcción",
    description:
      "Resguardo de maquinaria pesada, herramienta y materiales en frentes activos, con cobertura reforzada en turnos nocturnos y fines de semana.",
  },
  {
    id: "logistica",
    name: "Parques logísticos",
    description:
      "Supervisión de patios de maniobra, andenes y sellos fiscales, enlazada con custodia en ruta y rastreo satelital contra desvíos.",
  },
];

export interface Metric {
  id: string;
  value: string;
  label: string;
}

export const COVERAGE_SECTION = {
  title: "Cobertura y respaldo",
  summary:
    "Operación continua desde nuestra matriz en Naucalpan de Juárez, con despliegue en cinco estados y documentación verificable para licitaciones.",
  statesHeading: "Presencia regional",
  states: [
    "Estado de México (matriz en Naucalpan de Juárez)",
    "Ciudad de México",
    "Querétaro",
    "Jalisco",
    "Baja California Sur",
  ],
  complianceHeading: "Marco normativo y operativo",
  compliance: [
    {
      id: "sspc",
      name: "SSPC / DGSP",
      description:
        "Operación alineada con la Secretaría de Seguridad y Protección Ciudadana y la Dirección General de Seguridad Privada.",
    },
    {
      id: "repse",
      name: "Cumplimiento REPSE",
      description:
        "Registro para prestación de servicios especializados en auditorías fiscales y laborales.",
    },
    {
      id: "capufe",
      name: "Protocolo CAPUFE",
      description:
        "Coordinación operativa directa con Caminos y Puentes Federales en autopistas y rutas de carga.",
    },
  ],
} as const;

export const METRICS: readonly Metric[] = [
  { id: "empleos", value: "+600", label: "Empleos generados en campo y supervisión" },
  { id: "sitios", value: "+40", label: "Sitios operativos activos bajo resguardo" },
  { id: "superficie", value: "+4M m²", label: "Superficie vigilada diariamente" },
  { id: "horas", value: "+2.5M", label: "Horas anuales de servicio acumulado" },
];

export const REQUEST_OPTIONS = [
  { value: "guardias", label: "Guardias intramuros" },
  { value: "monitoreo", label: "Monitoreo 24/7" },
  { value: "custodias", label: "Custodias de mercancía" },
  { value: "integral", label: "Solución integral (varios servicios)" },
  { value: "bolsa", label: "Bolsa de trabajo (postulación)" },
] as const;
