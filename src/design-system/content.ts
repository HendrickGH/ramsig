export const SITE = {
  name: "RAMSIG Seguridad Privada",
  title: "RAMSIG Seguridad Privada | Guardias, monitoreo y custodias en México",
  description:
    "Soluciones integrales para la protección de personas, bienes y valores: guardias intramuros, monitoreo 24/7 y custodias de mercancía para industria, obras de construcción y parques logísticos.",
  canonicalUrl: "https://www.ramsigseguridad.com/",
} as const;

export const NAV_LINKS = [
  { href: "#acerca", label: "Acerca de" },
  { href: "#servicios", label: "Servicios" },
  { href: "#sectores", label: "Sectores" },
  { href: "#presencia", label: "Presencia" },
  { href: "#bolsa-de-trabajo", label: "Bolsa de trabajo" },
] as const;

export const CONTACT = {
  phoneDisplay: "+52 55 3557 8304",
  phoneHref: "tel:+525535578304",
  whatsappHref:
    "https://wa.me/525535578304?text=Hola%2C%20solicito%20informaci%C3%B3n%20sobre%20servicios%20de%20seguridad%20privada%20con%20RAMSIG.",
  email: "ventas@ramsigseguridad.com",
  emailHref: "mailto:ventas@ramsigseguridad.com",
  city: "Naucalpan de Juárez, Estado de México, México",
  operationsHours: "Centro de monitoreo y operaciones: 24 horas, todos los días.",
  officeHours: "Horario administrativo: lunes a viernes de 9:00 a 18:00 h.",
  copyright: "© 2026 RAMSIG Seguridad Privada",
  photoCredit: "Fotografías vía Unsplash",
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

export const ABOUT_SECTION = {
  title: "Acerca de nosotros",
  paragraphs: [
    "RAMSIG Seguridad Privada es una empresa comprometida y dedicada a ofrecer soluciones integrales para la protección de personas, bienes y valores.",
    "Con un enfoque profesional y personalizado, brindamos servicios de vigilancia intramuros, monitoreo 24/7, custodia de mercancías y seguridad especializada con tecnología.",
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
  title: "Nuestros servicios",
  summary:
    "Desde el resguardo físico en instalaciones hasta la vigilancia tecnológica, diseñamos esquemas adaptados a las necesidades de cada cliente para salvaguardar su operación.",
} as const;

export const SERVICES: readonly Entry[] = [
  {
    id: "guardias",
    name: "Guardia intramuros",
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
    image: {
      src: "/images/industry.jpg",
      alt: "Interior de nave industrial con estructura metálica e iluminación cenital",
    },
  },
  {
    id: "construccion",
    name: "Obras de construcción",
    description:
      "Resguardo de maquinaria pesada, herramienta y materiales en frentes activos, con cobertura reforzada en turnos nocturnos y fines de semana.",
    image: {
      src: "/images/construction.jpg",
      alt: "Grúas torre y estructura de obra civil iluminadas al anochecer",
    },
  },
  {
    id: "logistica",
    name: "Parques logísticos",
    description:
      "Supervisión de patios de maniobra, andenes y sellos fiscales, enlazada con custodia en ruta y rastreo satelital contra desvíos.",
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
  title: "Un poco de nuestro impacto",
  summary:
    "Capacidad operativa acumulada en instalaciones industriales, obras de construcción y corredores logísticos.",
} as const;

export const METRICS: readonly Metric[] = [
  { id: "empleos", value: "+600", label: "Empleos generados a lo largo de nuestra existencia" },
  {
    id: "personas",
    value: "+10,000",
    label: "Personas beneficiadas directa e indirectamente cada día",
  },
  { id: "sitios", value: "+40", label: "Sitios operativos activos" },
  { id: "superficie", value: "+4M", label: "Metros cuadrados vigilados diariamente" },
  { id: "horas", value: "+2.5M", label: "Horas de servicio de seguridad operadas anualmente" },
  { id: "sedes", value: "5", label: "Sedes en diferentes entidades operativas" },
];

export interface StatePresence {
  id: string;
  name: string;
  role: string;
}

export const PRESENCE_SECTION = {
  title: "Presencia nacional",
  paragraphs: [
    "Nuestro compromiso nacional con la seguridad nos ha llevado a operar en cinco estados de la República Mexicana.",
    "Contamos con total disposición para continuar con nuestra expansión y brindar cobertura en otras entidades federativas donde su operación lo requiera.",
  ],
  states: [
    { id: "edomex", name: "Estado de México", role: "Matriz en Naucalpan de Juárez" },
    { id: "cdmx", name: "Ciudad de México", role: "Cobertura metropolitana" },
    { id: "queretaro", name: "Querétaro", role: "Corredor industrial del Bajío" },
    { id: "jalisco", name: "Jalisco", role: "Occidente y parques logísticos" },
    { id: "bcs", name: "Baja California Sur", role: "Noroeste y proyectos estratégicos" },
  ] satisfies readonly StatePresence[],
} as const;

export const FRAMEWORK_SECTION = {
  title: "Marco normativo y operativo",
  summary:
    "Documentación verificable para procesos de licitación, alta de proveedores y auditorías corporativas.",
  items: [
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
  ] satisfies readonly Entry[],
} as const;

export const CAREERS_SECTION = {
  title: "Únete a nuestro equipo",
  lead: "Estamos contratando.",
  paragraphs: [
    "En RAMSIG Seguridad Privada estamos comprometidos con la seguridad de México y el crecimiento profesional de quienes forman parte de nuestro equipo.",
    "Ofrecemos un entorno de trabajo profesional, capacitación constante y desarrollo humano. Tu compromiso con la seguridad es nuestra fortaleza.",
  ],
  cta: "Postularme hoy",
  image: {
    src: "/images/team.jpg",
    alt: "Elemento de seguridad en caseta de control de accesos durante turno nocturno",
  },
} as const;

export const REQUEST_OPTIONS = [
  { value: "guardias", label: "Guardia intramuros" },
  { value: "monitoreo", label: "Monitoreo 24/7" },
  { value: "custodias", label: "Custodias de mercancía" },
  { value: "integral", label: "Solución integral (varios servicios)" },
  { value: "bolsa", label: "Bolsa de trabajo (postulación)" },
] as const;

export type RequestOptionValue = (typeof REQUEST_OPTIONS)[number]["value"];
