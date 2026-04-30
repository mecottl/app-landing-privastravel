import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-x py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 font-display text-2xl">
              <span className="inline-block h-2 w-2 rounded-full bg-accent" />
              Marenostro
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Diseñamos viajes con sentido. Itinerarios curados, atención personal y la confianza
              de una agencia local con presencia internacional.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4">Explorar</p>
            <ul className="space-y-2 text-sm">
              <li><Link to="/explorar" className="hover:text-accent">Viajes</Link></li>
              <li><Link to="/experiencias" className="hover:text-accent">Experiencias</Link></li>
              <li><Link to="/nosotros" className="hover:text-accent">Nosotros</Link></li>
              <li><Link to="/contacto" className="hover:text-accent">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Contacto</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Av. Reforma 142, CDMX</li>
              <li>+52 55 1234 5678</li>
              <li>hola@marenostro.travel</li>
            </ul>
            <div className="mt-5 flex gap-3">
              <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border hover:border-accent hover:text-accent transition-colors"><Instagram size={16} /></a>
              <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border hover:border-accent hover:text-accent transition-colors"><Facebook size={16} /></a>
              <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border hover:border-accent hover:text-accent transition-colors"><Mail size={16} /></a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Marenostro Viajes. Todos los derechos reservados.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-foreground">Aviso de privacidad</a>
            <a href="#" className="hover:text-foreground">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
