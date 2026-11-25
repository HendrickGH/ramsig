"use client";

import { useState, type FormEvent } from "react";
import { CONTACT, REQUEST_OPTIONS } from "@/design-system/content";
import { Button } from "../atoms/Button";
import { Heading } from "../atoms/Heading";
import { Text } from "../atoms/Text";
import { FormField } from "../molecules/FormField";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacto" aria-labelledby="contacto-title" className="band band--base">
      <div className="container split">
        <div className="split__intro">
          <Heading id="contacto-title">Contacto y cotización</Heading>
          <Text>
            Indique el servicio, sede o perfil operativo que requiere para preparar su propuesta.
          </Text>

          <div className="contact-details">
            <Text muted>{CONTACT.city}</Text>
            <a href={CONTACT.phoneHref} className="contact-link">
              Teléfono: {CONTACT.phoneDisplay}
            </a>
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              WhatsApp: {CONTACT.phoneDisplay}
            </a>
            <a href={CONTACT.emailHref} className="contact-link">
              {CONTACT.email}
            </a>
          </div>

          <div className="contact-hours">
            <Text muted>{CONTACT.operationsHours}</Text>
            <Text muted>{CONTACT.officeHours}</Text>
          </div>
        </div>

        <form className="contact-panel" onSubmit={handleSubmit}>
          {sent ? (
            <p className="confirmation" role="status">
              Solicitud recibida. Nuestro equipo se pondrá en contacto con usted.
            </p>
          ) : null}

          <FormField id="nombre" label="Nombre completo" required autoComplete="name" />
          <FormField id="empresa" label="Empresa o razón social" autoComplete="organization" />

          <div className="form-row">
            <FormField
              id="correo"
              label="Correo electrónico"
              type="email"
              required
              autoComplete="email"
            />
            <FormField id="telefono" label="Teléfono" type="tel" autoComplete="tel" />
          </div>

          <FormField id="servicio" label="Servicio o solicitud">
            {REQUEST_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </FormField>

          <FormField id="mensaje" label="Detalles del requerimiento" multiline />
          <Button type="submit">Enviar solicitud</Button>

          <details className="privacy-disclosure">
            <summary className="privacy-disclosure__summary">{CONTACT.privacyTitle}</summary>
            <p className="privacy-disclosure__body">{CONTACT.privacyText}</p>
          </details>
        </form>
      </div>
    </section>
  );
}
