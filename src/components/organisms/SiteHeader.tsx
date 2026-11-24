import { Button } from "../atoms/Button";
import { Logo } from "../atoms/Logo";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header__row">
        <Logo href="#inicio" />
        <Button href="#contacto" small>
          Cotizar
        </Button>
      </div>
    </header>
  );
}
