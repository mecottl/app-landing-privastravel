import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import luxury from "@/assets/exp-luxury.jpg";
import grupos from "@/assets/exp-grupos.jpg";
import tours from "@/assets/exp-tours.jpg";
import { useReveal } from "@/hooks/use-reveal";

const items = [
  { image: tours, title: "Tours culturales", text: "Itinerarios curados con guías locales." },
  { image: luxury, title: "Viajes de lujo", text: "Estancias privadas y servicio impecable." },
  { image: grupos, title: "Salidas grupales", text: "Pequeños grupos, grandes complicidades." },
];

export function Experiences() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <div ref={ref} className="reveal flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow">Experiencias</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Diseñadas para cómo te gusta viajar.</h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Tres maneras de descubrir el mundo. Todas con la misma curaduría y atención al detalle.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {items.map((it) => (
            <Link
              key={it.title}
              to="/experiencias"
              className="group relative isolate block aspect-[4/5] overflow-hidden rounded-2xl bg-charcoal"
            >
              <div className="image-zoom h-full w-full">
                <img src={it.image} alt={it.title} loading="lazy" className="h-full w-full object-cover opacity-90" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                <h3 className="font-display text-3xl">{it.title}</h3>
                <p className="mt-2 max-w-xs text-sm text-white/80">{it.text}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/90">
                  Descubrir <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
