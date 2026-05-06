import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getTrips } from "@/lib/supabase";
import { useReveal } from "@/hooks/use-reveal";

export function DestinationsGallery() {
  const ref = useReveal<HTMLDivElement>();
  const [active, setActive] = useState<string | null>(null);
  const { data: allTrips = [] } = useQuery({ queryKey: ["trips"], queryFn: getTrips });
  const items = allTrips.slice(0, 6);

  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <div ref={ref} className="reveal flex items-end justify-between gap-8">
          <div className="max-w-2xl">
            <p className="eyebrow">Destinos destacados</p>
            <h2 className="mt-4 text-4xl md:text-5xl">
              Lugares que vale la pena recorrer despacio.
            </h2>
          </div>
          <Link
            to="/explorar"
            className="hidden shrink-0 items-center gap-2 text-sm text-accent hover:underline md:inline-flex"
          >
            Ver todos <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3 md:grid-rows-2 md:gap-6">
          {items.map((t, idx) => {
            const span = idx === 0 ? "md:col-span-2 md:row-span-2" : "";
            const sharedClass = `group relative isolate overflow-hidden rounded-2xl bg-charcoal hover-lift ${span} ${
              active && active !== t.id ? "opacity-70" : ""
            } transition-opacity`;

            return (
              <Link
                key={t.id}
                to="/explorar"
                onMouseEnter={() => setActive(t.id)}
                onMouseLeave={() => setActive(null)}
                className={sharedClass}
              >
                <div className="image-zoom h-full w-full">
                  <img
                    src={t.image}
                    alt={t.name}
                    loading="lazy"
                    className={`h-full w-full object-cover ${
                      idx === 0 ? "aspect-square md:aspect-auto" : "aspect-4/5"
                    }`}
                  />
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-7">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-white/70">
                    {t.country}
                  </p>
                  <div className="mt-2 flex items-end justify-between gap-4">
                    <h3 className="font-display text-2xl md:text-3xl">{t.name}</h3>
                    <span className="shrink-0 text-xs text-white/80">
                      desde ${t.priceFrom.toLocaleString()}
                    </span>
                  </div>
                </div>
                <div className="pointer-events-none absolute right-5 top-5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-charcoal opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <ArrowUpRight size={16} />
                </div>
              </Link>
            );
          })}
        </div>

        <Link
          to="/explorar"
          className="mt-10 inline-flex items-center gap-2 text-sm text-accent hover:underline md:hidden"
        >
          Ver todos los destinos <ArrowUpRight size={16} />
        </Link>
      </div>
    </section>
  );
}
