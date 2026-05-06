import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { getTrips } from "@/lib/supabase";
import { useReveal } from "@/hooks/use-reveal";

export function Promotions() {
  const ref = useReveal<HTMLDivElement>();
  const { data: allTrips = [] } = useQuery({ queryKey: ["trips"], queryFn: getTrips });
  const promos = allTrips.slice(0, 3);

  return (
    <section className="border-y border-border bg-secondary/40 py-24 md:py-32">
      <div className="container-x">
        <div ref={ref} className="reveal max-w-2xl">
          <p className="eyebrow">Salidas seleccionadas</p>
          <h2 className="mt-4 text-4xl md:text-5xl">Oportunidades de temporada.</h2>
          <p className="mt-5 text-muted-foreground">
            Una pequeña selección de salidas confirmadas con tarifas preferentes. Cupos limitados.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {promos.map((p) => (
            <article
              key={p.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card hover-lift"
            >
              <div className="image-zoom aspect-4/3 overflow-hidden">
                <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{p.country}</span>
                  <span>{p.nights} noches</span>
                </div>
                <h3 className="mt-3 font-display text-2xl">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Vuelos, hospedaje boutique y traslados incluidos.
                </p>
                <div className="mt-6 flex items-end justify-between border-t border-border pt-5">
                  <div>
                    <p className="text-[11px] uppercase tracking-widest text-muted-foreground">
                      Desde
                    </p>
                    <p className="font-display text-2xl">
                      ${p.priceFrom.toLocaleString()}
                      <span className="ml-1 text-xs text-muted-foreground">USD</span>
                    </p>
                  </div>
                  <Link
                    to="/explorar"
                    className="rounded-full border border-foreground px-4 py-2 text-xs transition-colors hover:bg-foreground hover:text-background"
                  >
                    Ver detalle
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
