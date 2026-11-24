export function Logo({ href }: { href?: string }) {
  const image = (
    <span className="logo-plate">
      <img
        src="/images/ramsig-logo.png"
        alt="RAMSIG Seguridad Privada"
        width={90}
        height={73}
      />
    </span>
  );

  return href ? (
    <a href={href} aria-label="RAMSIG Seguridad Privada, inicio">
      {image}
    </a>
  ) : (
    image
  );
}
