"use client";

import { useState, type FormEvent } from "react";
import { CONTACT, SERVICES } from "@/design-system/content";
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
        <div>
          <Heading id="contacto-title">Cuéntenos qué necesita proteger.</Heading>
          <div className="contact-details">
            <Text muted>{CONTACT.city}</Text>
            <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
            <a href={CONTACT.emailHref}>{CONTACT.email}</a>
          </div>
        </div>

        <form className="contact-panel" onSubmit={handleSubmit}>
          {sent ? (
            <p className="confirmation" role="status">
              Solicitud recibida. Nos pondremos en contacto con usted en horario laboral.
            </p>
          ) : null}
          <FormField id="nombre" label="Nombre" required autoComplete="name" />
          <FormField id="correo" label="Correo electrónico" type="email" required autoComplete="email" />
          <FormField id="servicio" label="Servicio">
            {SERVICES.map((service) => (
              <option key={service.id} value={service.id}>
                {service.name}
              </option>
            ))}
          </FormField>
          <FormField id="mensaje" label="Mensaje" multiline />
          <Button type="submit">Enviar solicitud</Button>
          <Text muted>Al enviar, acepta el aviso de privacidad de RAMSIG.</Text>
        </form>
      </div>
    </section>
  );
}
