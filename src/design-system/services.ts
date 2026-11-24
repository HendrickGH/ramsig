import type { SectorId, ServiceId, TacticalIconName } from "./tokens";

export interface NavLinkItem {
  id: string;
  label: string;
  href: string;
}

export interface HeroContent {
  eyebrow: string;
  headlinePrefix: string;
  headlineHighlight: string;
  lead: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  trustHighlights: readonly string[];
}

export interface ServiceModality {
  id: string;
  code: string;
  name: string;
  summary: string;
  protocol: string;
}

export interface ServicePillar {
  id: ServiceId;
  index: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  readinessLabel: string;
  iconName: TacticalIconName;
  capabilities: readonly string[];
  modalities?: readonly ServiceModality[];
  ctaLabel: string;
}

export interface SectorItem {
  id: SectorId;
  index: string;
  name: string;
  subtitle: string;
  description: string;
  iconName: TacticalIconName;
  risksMitigated: readonly string[];
  recommendedServices: readonly ServiceId[];
  ctaLabel: string;
}

export interface ImpactMetric {
  id: string;
  indexCode: string;
  value: string;
  label: string;
  detail: string;
}

export interface StateOffice {
  id: string;
  name: string;
  role: string;
  city: string;
  coverageNote: string;
}

export interface ComplianceItem {
  id: string;
  code: string;
  title: string;
  status: string;
  description: string;
}

export interface PrivacyNotice {
  title: string;
  summary: string;
  rightsLabel: string;
  rightsDetail: string;
  consentLabel: string;
  closeLabel: string;
}

export interface ContactInfo {
  brandName: string;
  addressLabel: string;
  addressFull: string;
  phoneLabel: string;
  phoneDisplay: string;
  phoneHref: string;
  whatsappLabel: string;
  whatsappDisplay: string;
  whatsappHref: string;
  emailLabel: string;
  email: string;
  emailHref: string;
  operationsSchedule: { label: string; hours: string };
  adminSchedule: { label: string; hours: string };
  copyright: string;
}

export interface SelectOption {
  value: string;
  label: string;
}

export interface QuoteFormConfig {
  tabLabel: string;
  heading: string;
  subtitle: string;
  submitLabel: string;
  resetLabel: string;
  confirmationTitle: string;
  confirmationBody: string;
  folioPrefix: string;
  fields: {
    fullName: { label: string; placeholder: string; requiredMessage: string };
    company: { label: string; placeholder: string; requiredMessage: string };
    email: {
      label: string;
      placeholder: string;
      requiredMessage: string;
      invalidMessage: string;
    };
    phone: { label: string; placeholder: string; requiredMessage: string };
    service: { label: string; options: readonly SelectOption[] };
    sector: { label: string; options: readonly SelectOption[] };
    state: { label: string; options: readonly SelectOption[] };
    details: { label: string; placeholder: string };
    privacyConsent: { requiredMessage: string };
  };
}

export interface RecruitmentFormConfig {
  tabLabel: string;
  heading: string;
  subtitle: string;
  submitLabel: string;
  resetLabel: string;
  confirmationTitle: string;
  confirmationBody: string;
  folioPrefix: string;
  fields: {
    fullName: { label: string; placeholder: string; requiredMessage: string };
    email: {
      label: string;
      placeholder: string;
      requiredMessage: string;
      invalidMessage: string;
    };
    phone: { label: string; placeholder: string; requiredMessage: string };
    position: { label: string; options: readonly SelectOption[] };
    office: { label: string; options: readonly SelectOption[] };
    experience: { label: string; placeholder: string };
    privacyConsent: { requiredMessage: string };
  };
}

export const HEADER_COPY = {
  ctaLabel: "Cotizar Servicio",
  ctaHref: "#contacto",
  openMenuLabel: "Abrir menú de navegación",
  closeMenuLabel: "Cerrar menú de navegación",
  navAriaLabel: "Navegación principal",
} as const;

export const NAV_LINKS: readonly NavLinkItem[] = [
  { id: "servicios", label: "Servicios", href: "#servicios" },
  { id: "sectores", label: "Sectores", href: "#sectores" },
  { id: "cobertura", label: "Cobertura", href: "#cobertura" },
  { id: "contacto", label: "Contacto", href: "#contacto" },
];

export const HERO_CONTENT: HeroContent = {
  eyebrow: "SEGURIDAD PRIVADA CORPORATIVA · MÉXICO",
  headlinePrefix: "Protección táctica para ",
  headlineHighlight: "industria, obra y logística",
  lead: "Guardias intramuros certificados, centro de monitoreo 24/7 y custodias de mercancía en ruta con protocolos verificables y cobertura en cinco entidades.",
  primaryCta: { label: "Solicitar cotización operativa", href: "#contacto" },
  secondaryCta: { label: "Explorar servicios", href: "#servicios" },
  trustHighlights: [
    "Operación 24/7/365",
    "+40 sitios activos",
    "Cobertura en 5 estados",
    "Cumplimiento SSPC / REPSE",
  ],
};

export const SERVICES_SECTION_COPY = {
  eyebrowIndex: "01",
  eyebrowLabel: "ARQUITECTURA DE SERVICIOS",
  title: "Tres pilares operativos bajo un solo mando",
  subtitle:
    "Cada servicio integra personal evaluado, supervisión continua y trazabilidad documental adaptada al nivel de riesgo de su operación.",
  modalitiesHeading: "Modalidades de Custodia en Ruta",
} as const;

export const SERVICES: readonly ServicePillar[] = [
  {
    id: "guardias",
    index: "01",
    name: "Guardias Intramuros",
    shortName: "Guardias",
    tagline: "Vigilancia presencial, control de accesos y resguardo perimetral",
    description:
      "Elementos capacitados y evaluados bajo estándares de control de confianza para proteger plantas industriales, frentes de obra, patios de maniobra e instalaciones estratégicas.",
    readinessLabel: "Cobertura 24/7 · Turnos 12x12 y 24x24",
    iconName: "shield",
    capabilities: [
      "Control estricto de accesos peatonales, vehiculares y de proveedores",
      "Rondines georreferenciados con bitácora digital de consignas e incidencias",
      "Resguardo de maquinaria, materias primas, almacenes y perímetros nocturnos",
      "Supervisión operativa continua en sitio y enlaces de reacción inmediata",
    ],
    ctaLabel: "Cotizar Guardias Intramuros",
  },
  {
    id: "monitoreo",
    index: "02",
    name: "Monitoreo 24/7",
    shortName: "Monitoreo",
    tagline: "Centro de monitoreo continuo, videovigilancia HD y seguimiento satelital",
    description:
      "Supervisión permanente desde nuestro centro de control con cámaras de alta definición, visión nocturna, zoom óptico y telemetría GPS para prevenir mermas e intrusiones en tiempo real.",
    readinessLabel: "Centro de Monitoreo 24/7/365",
    iconName: "radar",
    capabilities: [
      "Videovigilancia remota mediante cámaras HD con visión nocturna y zoom óptico",
      "Seguimiento GPS continuo de flotillas, unidades de carga y puntos críticos",
      "Detección temprana de anomalías perimetrales y desvío de rutas autorizadas",
      "Protocolos escalonados de verificación, alertamiento y coordinación con autoridades",
    ],
    ctaLabel: "Cotizar Monitoreo 24/7",
  },
  {
    id: "custodias",
    index: "03",
    name: "Custodias de Mercancía",
    shortName: "Custodias",
    tagline: "Protección integral de personas, vehículos y carga de alto valor en tránsito",
    description:
      "Operativos carreteros y urbanos diseñados según el nivel de riesgo de cada ruta, combinando escolta en campo, personal a bordo y seguimiento satelital con cuenta espejo para el cliente.",
    readinessLabel: "Protocolo Carretero · Cobertura Nacional",
    iconName: "truck",
    capabilities: [
      "Planeación de rutas seguras, geocercas y paraderos autorizados",
      "Protocolo de coordinación operativa con CAPUFE en corredores carreteros",
      "Cuenta espejo en tiempo real para visibilidad total del área logística del cliente",
      "Cierre de bitácora de entrega y reportes ejecutivos por embarque",
    ],
    modalities: [
      {
        id: "fisica",
        code: "CUS-01",
        name: "Custodia Física",
        summary:
          "Unidades de escolta dedicadas que acompañan el trayecto completo de la mercancía.",
        protocol:
          "Colaboración operativa con CAPUFE y enlace directo con centro de control.",
      },
      {
        id: "cabinera",
        code: "CUS-02",
        name: "Custodia Cabinera",
        summary:
          "Elemento de seguridad capacitado a bordo de la unidad de transporte durante la ruta.",
        protocol:
          "Supervisión directa de cabina, paradas programadas y verificación de sellos.",
      },
      {
        id: "virtual",
        code: "CUS-03",
        name: "Custodia Virtual",
        summary:
          "Monitoreo GPS satelital en tiempo real desde salida hasta descarga en destino.",
        protocol:
          "Cuenta espejo para el cliente, geocercas activas y protocolo de reacción inmediata.",
      },
    ],
    ctaLabel: "Cotizar Custodia de Mercancía",
  },
];

export const SECTORS_SECTION_COPY = {
  eyebrowIndex: "02",
  eyebrowLabel: "VERTICALES B2B PRIORITARIAS",
  title: "Despliegue especializado por entorno operativo",
  subtitle:
    "Diseñamos consignas y protocolos específicos para las vulnerabilidades reales de manufactura, construcción y cadenas de suministro.",
} as const;

export const SECTORS: readonly SectorItem[] = [
  {
    id: "industria",
    index: "01",
    name: "Industria",
    subtitle: "Plantas de manufactura, naves y parques industriales",
    description:
      "Blindaje operativo para líneas de producción, almacenes de insumos críticos y perímetros industriales con alto flujo de personal y transporte.",
    iconName: "factory",
    risksMitigated: [
      "Control de accesos de personal, contratistas y transporte",
      "Prevención de robo hormiga y merma en inventarios",
      "Vigilancia perimetral continua y control de básculas",
    ],
    recommendedServices: ["guardias", "monitoreo"],
    ctaLabel: "Cotizar para Industria",
  },
  {
    id: "construccion",
    index: "02",
    name: "Obras de Construcción",
    subtitle: "Frentes de obra civil, infraestructura y edificación",
    description:
      "Resguardo táctico de maquinaria pesada, herramienta especializada, materiales de alto valor y accesos de obra en turnos diurnos y nocturnos.",
    iconName: "crane",
    risksMitigated: [
      "Protección nocturna de maquinaria pesada y diésel",
      "Registro de entrada y salida de materiales y cuadrillas",
      "Cobertura perimetral en predios abiertos o en expansión",
    ],
    recommendedServices: ["guardias", "monitoreo"],
    ctaLabel: "Cotizar para Obra",
  },
  {
    id: "logistica",
    index: "03",
    name: "Parques Logísticos",
    subtitle: "Centros de distribución, patios de maniobra y corredores de carga",
    description:
      "Seguridad integral desde el patio de carga hasta el destino final mediante control de andenes, custodia física o cabinera y monitoreo GPS con cuenta espejo.",
    iconName: "warehouse",
    risksMitigated: [
      "Control de patios, andenes, marchamos y sellos fiscales",
      "Custodia en ruta frente a siniestros y desvío de unidades",
      "Trazabilidad 24/7 con cuenta espejo para torre de control",
    ],
    recommendedServices: ["custodias", "monitoreo", "guardias"],
    ctaLabel: "Cotizar para Logística",
  },
];

export const EXTENDED_SECTORS_NOTE = {
  label: "Capacidades extendidas",
  text: "Además de nuestros tres verticales estratégicos B2B, RAMSIG opera esquemas especializados para entornos Corporativos, Comerciales y Residenciales de alto perfil.",
} as const;

export const COVERAGE_SECTION_COPY = {
  eyebrowIndex: "03",
  eyebrowLabel: "IMPACTO, COBERTURA Y CUMPLIMIENTO",
  title: "Capacidad comprobable y respaldo normativo",
  subtitle:
    "Indicadores operativos acumulados, sedes regionales activas y preparación documental para procesos de contratación corporativa.",
  officesHeading: "Sedes Operativas Regionales",
  complianceHeading: "Marco Regulatorio y Confianza B2B",
} as const;

export const IMPACT_METRICS: readonly ImpactMetric[] = [
  {
    id: "empleos",
    indexCode: "M-01",
    value: "+600",
    label: "Empleos generados",
    detail: "Personal operativo y administrativo incorporado a lo largo de nuestra trayectoria.",
  },
  {
    id: "beneficiados",
    indexCode: "M-02",
    value: "+10,000",
    label: "Personas beneficiadas al día",
    detail: "Colaboradores, operadores y usuarios protegidos directa e indirectamente cada jornada.",
  },
  {
    id: "sitios",
    indexCode: "M-03",
    value: "+40",
    label: "Sitios operativos activos",
    detail: "Plantas industriales, frentes de obra y centros logísticos bajo resguardo continuo.",
  },
  {
    id: "superficie",
    indexCode: "M-04",
    value: "+4M",
    label: "m² vigilados diariamente",
    detail: "Superficie operativa protegida con elementos intramuros y videovigilancia.",
  },
  {
    id: "horas",
    indexCode: "M-05",
    value: "+2.5M",
    label: "Horas anuales de servicio",
    detail: "Cobertura acumulada con supervisión continua y bitácoras verificables.",
  },
  {
    id: "sedes",
    indexCode: "M-06",
    value: "5",
    label: "Sedes estatales",
    detail: "Presencia operativa regional para atención ágil y despliegue inmediato.",
  },
];

export const STATE_OFFICES: readonly StateOffice[] = [
  {
    id: "edomex",
    name: "Estado de México",
    role: "Sede Matriz",
    city: "Naucalpan de Juárez",
    coverageNote: "Dirección general, centro de operaciones y despacho metropolitano.",
  },
  {
    id: "cdmx",
    name: "Ciudad de México",
    role: "Sede Operativa",
    city: "Zona Metropolitana",
    coverageNote: "Cobertura corporativa, industrial y enlace de custodias.",
  },
  {
    id: "queretaro",
    name: "Querétaro",
    role: "Sede Regional Bajío",
    city: "Corredor Industrial",
    coverageNote: "Atención a parques industriales, manufactura y rutas logísticas del Bajío.",
  },
  {
    id: "jalisco",
    name: "Jalisco",
    role: "Sede Regional Occidente",
    city: "Área Metropolitana de Guadalajara",
    coverageNote: "Resguardo de centros de distribución, industria y enlace carretero.",
  },
  {
    id: "bcs",
    name: "Baja California Sur",
    role: "Sede Regional Noroeste",
    city: "Cobertura Estatal",
    coverageNote: "Servicios intramuros, vigilancia de obra y monitoreo especializado.",
  },
];

export const COMPLIANCE_ITEMS: readonly ComplianceItem[] = [
  {
    id: "sspc-dgsp",
    code: "REG-01",
    title: "SSPC / DGSP",
    status: "Alineación normativa federal y estatal",
    description:
      "Operación estructurada conforme a los lineamientos de la Secretaría de Seguridad y Protección Ciudadana (SSPC) y la Dirección General de Seguridad Privada (DGSP). Documentación verificable durante el proceso de licitación o contratación.",
  },
  {
    id: "repse",
    code: "REG-02",
    title: "Cumplimiento REPSE",
    status: "Preparación fiscal y laboral B2B",
    description:
      "Esquema orientado al cumplimiento de servicios especializados ante clientes industriales, constructoras y operadores logísticos, con documentación corporativa disponible para auditoría de proveedores.",
  },
  {
    id: "capufe",
    code: "REG-03",
    title: "Protocolo CAPUFE",
    status: "Coordinación en rutas carreteras",
    description:
      "Procedimientos de custodia física y reacción en ruta en colaboración operativa con Caminos y Puentes Federales (CAPUFE) y enlace de centro de monitoreo 24/7.",
  },
];

export const PRIVACY_NOTICE: PrivacyNotice = {
  title: "Aviso de Privacidad Integral",
  summary:
    "RAMSIG Seguridad Privada, con domicilio en Naucalpan de Juárez, Estado de México, México, trata los datos personales recabados exclusivamente para atender solicitudes de cotización corporativa, coordinación operativa y procesos de reclutamiento, conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).",
  rightsLabel: "Derechos ARCO",
  rightsDetail:
    "Usted puede ejercer sus derechos de Acceso, Rectificación, Cancelación u Oposición (ARCO) enviando una solicitud al correo ventas@ramsigseguridad.com.",
  consentLabel:
    "He leído y acepto el Aviso de Privacidad para el tratamiento de mis datos de contacto.",
  closeLabel: "Cerrar Aviso de Privacidad",
};

export const CONTACT_INFO: ContactInfo = {
  brandName: "RAMSIG Seguridad Privada",
  addressLabel: "Matriz Operativa",
  addressFull: "Naucalpan de Juárez, Estado de México, México",
  phoneLabel: "Teléfono Directo",
  phoneDisplay: "+52 55 3557 8304",
  phoneHref: "tel:+525535578304",
  whatsappLabel: "WhatsApp Corporativo",
  whatsappDisplay: "+52 55 3557 8304",
  whatsappHref:
    "https://wa.me/525535578304?text=Hola%2C%20solicito%20informaci%C3%B3n%20sobre%20servicios%20de%20seguridad%20privada%20con%20RAMSIG.",
  emailLabel: "Correo Comercial",
  email: "ventas@ramsigseguridad.com",
  emailHref: "mailto:ventas@ramsigseguridad.com",
  operationsSchedule: {
    label: "Centro de Monitoreo y Operaciones",
    hours: "24 horas · 365 días del año",
  },
  adminSchedule: {
    label: "Atención Administrativa y Comercial",
    hours: "Lunes a Viernes de 9:00 a 18:00 h",
  },
  copyright: "© 2026 RAMSIG Seguridad Privada. Todos los derechos reservados.",
};

export const CONTACT_SECTION_COPY = {
  eyebrowIndex: "04",
  eyebrowLabel: "MESA DE ATENCIÓN Y COTIZACIÓN",
  title: "Enlace directo con dirección comercial y operaciones",
  subtitle:
    "Canal unificado para cotizaciones corporativas en industria, obra y logística, así como postulaciones operativas en nuestras cinco sedes.",
  channelsHeading: "Canales Directos Verificados",
  schedulesHeading: "Horarios de Operación y Oficina",
} as const;

export const QUOTE_FORM_CONFIG: QuoteFormConfig = {
  tabLabel: "Cotización Corporativa",
  heading: "Solicitud de diagnóstico y cotización B2B",
  subtitle:
    "Indique el servicio, sector y entidad donde requiere cobertura para generar su ficha de requerimiento.",
  submitLabel: "Enviar solicitud de cotización",
  resetLabel: "Registrar otra solicitud",
  confirmationTitle: "Solicitud corporativa registrada",
  confirmationBody:
    "Su requerimiento quedó estructurado para atención comercial. Nuestro equipo responderá vía ventas@ramsigseguridad.com o al +52 55 3557 8304.",
  folioPrefix: "RAMSIG-COT",
  fields: {
    fullName: {
      label: "Nombre completo",
      placeholder: "Ej. Ing. Carlos Mendoza",
      requiredMessage: "Ingrese su nombre completo.",
    },
    company: {
      label: "Empresa o razón social",
      placeholder: "Ej. Parque Industrial del Bajío S.A. de C.V.",
      requiredMessage: "Indique el nombre de su empresa o razón social.",
    },
    email: {
      label: "Correo corporativo",
      placeholder: "nombre@empresa.com",
      requiredMessage: "Ingrese un correo electrónico corporativo.",
      invalidMessage: "Ingrese un correo electrónico válido.",
    },
    phone: {
      label: "Teléfono de contacto",
      placeholder: "+52 55 0000 0000",
      requiredMessage: "Ingrese un número telefónico de contacto.",
    },
    service: {
      label: "Servicio de interés",
      options: [
        { value: "guardias", label: "Guardias Intramuros" },
        { value: "monitoreo", label: "Monitoreo 24/7" },
        { value: "custodias", label: "Custodias de Mercancía" },
        { value: "integral", label: "Solución Integral" },
      ],
    },
    sector: {
      label: "Sector operativo",
      options: [
        { value: "industria", label: "Industria" },
        { value: "construccion", label: "Obras de Construcción" },
        { value: "logistica", label: "Parques Logísticos" },
        { value: "extendido", label: "Corporativo / Comercial / Residencial" },
      ],
    },
    state: {
      label: "Sede o entidad de operación",
      options: [
        { value: "Estado de México", label: "Estado de México" },
        { value: "Ciudad de México", label: "Ciudad de México" },
        { value: "Querétaro", label: "Querétaro" },
        { value: "Jalisco", label: "Jalisco" },
        { value: "Baja California Sur", label: "Baja California Sur" },
        { value: "Cobertura Nacional", label: "Cobertura Nacional" },
      ],
    },
    details: {
      label: "Detalles del requerimiento",
      placeholder: "Número de turnos, accesos, rutas o necesidades específicas de resguardo...",
    },
    privacyConsent: {
      requiredMessage: "Debe aceptar el Aviso de Privacidad para continuar.",
    },
  },
};

export const RECRUITMENT_FORM_CONFIG: RecruitmentFormConfig = {
  tabLabel: "Bolsa de Trabajo",
  heading: "Postulación a cuerpo operativo y monitoreo",
  subtitle:
    "Registro de candidatos para elementos intramuros, custodios en ruta, operadores de centro de control y supervisión.",
  submitLabel: "Enviar postulación operativa",
  resetLabel: "Registrar otra postulación",
  confirmationTitle: "Postulación operativa registrada",
  confirmationBody:
    "Sus datos quedaron registrados para valoración en la sede seleccionada. Para seguimiento directo comuníquese al +52 55 3557 8304.",
  folioPrefix: "RAMSIG-RH",
  fields: {
    fullName: {
      label: "Nombre completo",
      placeholder: "Ej. Roberto Hernández López",
      requiredMessage: "Ingrese su nombre completo.",
    },
    email: {
      label: "Correo electrónico",
      placeholder: "candidato@correo.com",
      requiredMessage: "Ingrese un correo electrónico.",
      invalidMessage: "Ingrese un correo electrónico válido.",
    },
    phone: {
      label: "Teléfono de contacto",
      placeholder: "+52 55 0000 0000",
      requiredMessage: "Ingrese un número telefónico de contacto.",
    },
    position: {
      label: "Puesto de interés",
      options: [
        { value: "Guardia Intramuros", label: "Guardia Intramuros" },
        { value: "Custodio de Mercancía", label: "Custodio de Mercancía" },
        { value: "Operador de Centro de Monitoreo", label: "Operador de Centro de Monitoreo" },
        { value: "Supervisión Operativa", label: "Supervisión Operativa" },
      ],
    },
    office: {
      label: "Sede de preferencia",
      options: [
        { value: "Estado de México (Naucalpan)", label: "Estado de México (Naucalpan)" },
        { value: "Ciudad de México", label: "Ciudad de México" },
        { value: "Querétaro", label: "Querétaro" },
        { value: "Jalisco", label: "Jalisco" },
        { value: "Baja California Sur", label: "Baja California Sur" },
      ],
    },
    experience: {
      label: "Experiencia operativa",
      placeholder: "Resuma su experiencia en seguridad intramuros, custodias o monitoreo...",
    },
    privacyConsent: {
      requiredMessage: "Debe aceptar el Aviso de Privacidad para continuar.",
    },
  },
};

export const FOOTER_COPY = {
  tagline:
    "Protección táctica B2B para industria, obras de construcción y parques logísticos con presencia en cinco entidades.",
  navigationTitle: "Navegación",
  contactTitle: "Contacto Corporativo",
  privacyButtonLabel: "Aviso de Privacidad",
} as const;
