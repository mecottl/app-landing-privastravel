import { useEffect, useState } from "react";
import { Link, useLocation} from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logo  from "../../assets/logo.png";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/explorar", label: "Explorar viajes" },
  { to: "/experiencias", label: "Experiencias" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

    const location = useLocation();
    const isHome = location.pathname === "/";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2 font-display text-xl tracking-tight">
        
          <img src={logo} alt="Logo Privas Travel"  className={`w-32 transition-all duration-500 ${isHome && !scrolled ? "brightness-0 invert" : ""}`} />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-foreground/80 transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contacto"
          className="hidden rounded-full bg-foreground px-5 py-2.5 text-xs font-medium tracking-wide text-background transition-opacity hover:opacity-90 md:inline-block"
        >
          Cotizar viaje
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/70 backdrop-blur"
          aria-label="Menú"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background animate-fade-in-up">
          <div className="container-x flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-sm hover:bg-secondary"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contacto"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-foreground px-5 py-3 text-center text-sm text-background"
            >
              Cotizar viaje
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
