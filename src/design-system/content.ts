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
} as const;

export const HERO = {
  title: "Seguridad privada para industria, obra y logística.",
  lead: "Guardias, monitoreo 24/7 y custodias de mercancía, con cobertura en cinco estados.",
} as const;

export interface Entry {
  id: string;
  name: string;
  description: string;
}

export const SERVICES: readonly Entry[] = [
  {
    id: "guardias",
    name: "Guardias",
    description:
      "Control de accesos, rondines y resguardo perimetral en plantas, obras y parques.",
  },
  {
    id: "monitoreo",
    name: "Monitoreo",
    description:
      "Videovigilancia y seguimiento GPS desde un centro de control activo las 24 horas.",
  },
  {
    id: "custodias",
    name: "Custodias de mercancía",
    description:
      "Escolta y seguimiento satelital de su carga, con cuenta espejo para su equipo logístico.",
  },
];
