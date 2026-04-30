import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

export function CTASection() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-24 md:py-32">
      <div ref={ref} className="reveal container-x">
        <div className="rounded-3xl border border-border bg-card px-8 py-16 text-center md:px-16 md:py-24">
          <p className="eyebrow">Tu próximo viaje</p>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl leading-tight md:text-6xl">
            Cuéntanos a dónde sueñas ir.
            <br />
            Lo demás lo diseñamos juntos.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            Cotización personalizada en menos de 24 horas, sin compromiso.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contacto"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm text-background transition-transform hover:-translate-y-0.5"
            >
              Cotizar mi viaje
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/explorar"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm hover:border-foreground"
            >
              Ver inspiración
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
