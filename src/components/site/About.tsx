import { useReveal } from "@/hooks/use-reveal";

const stats = [
  { k: "18", v: "años de experiencia" },
  { k: "60+", v: "destinos curados" },
  { k: "4.9", v: "satisfacción promedio" },
];

export function About() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="border-y border-border bg-foreground py-24 text-background md:py-32">
      <div ref={ref} className="reveal container-x grid gap-14 md:grid-cols-2 md:items-center">
        <div>
          <p className="eyebrow !text-background/60">Nosotros</p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            Una agencia local con la mirada puesta en el mundo.
          </h2>
        </div>
        <div className="space-y-6">
          <p className="text-background/80">
            Somos un equipo pequeño y especializado. Cada itinerario lo escribimos a mano, contigo,
            cuidando lo que importa: el ritmo, los detalles y la gente que vas a conocer.
          </p>
          <div className="grid grid-cols-3 gap-6 border-t border-background/15 pt-8">
            {stats.map((s) => (
              <div key={s.v}>
                <p className="font-display text-3xl md:text-4xl">{s.k}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-background/60">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
