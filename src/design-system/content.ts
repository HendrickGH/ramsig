export const SITE = {
  name: "RAMSIG Seguridad Privada",
  title: "RAMSIG Seguridad Privada | Guardias, monitoreo y custodias en México",
  description:
    "Guardias, monitoreo 24/7 y custodias de mercancía para industria, obras de construcción y parques logísticos.",
  canonicalUrl: "https://www.ramsigseguridad.com/",
} as const;

export const CONTACT = {
  phoneDisplay: "+52 55 3557 8304",
  phoneHref: "tel:+525535578304",
  email: "ventas@ramsigseguridad.com",
  emailHref: "mailto:ventas@ramsigseguridad.com",
  city: "Naucalpan de Juárez, Estado de México",
  copyright: "© 2026 RAMSIG Seguridad Privada",
  photoCredit: "Fotografía: Job Moses en Unsplash",
} as const;

export const HERO = {
  title: "Seguridad privada para industria, obra y logística.",
  lead: "Guardias, monitoreo 24/7 y custodias de mercancía.",
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
  title: "Servicios y sectores",
  summary:
    "Operación especializada para plantas industriales, obras de construcción y parques logísticos.",
} as const;

export const SERVICES: readonly Entry[] = [
  {
    id: "guardias",
    name: "Guardias",
    description:
      "Control de accesos, rondines y resguardo perimetral en industria, obra y parques logísticos.",
  },
  {
    id: "monitoreo",
    name: "Monitoreo",
    description:
      "Videovigilancia y seguimiento GPS las 24 horas desde nuestro centro de control.",
  },
  {
    id: "custodias",
    name: "Custodias de mercancía",
    description:
      "Escolta en ruta y rastreo satelital de carga, con cuenta espejo para su operación logística.",
  },
];
