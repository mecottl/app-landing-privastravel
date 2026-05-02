import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { ArrowRight } from "lucide-react";
import luxury from "@/assets/exp-luxury.jpg";
import grupos from "@/assets/exp-grupos.jpg";
import tours from "@/assets/exp-tours.jpg";

export const Route = createFileRoute("/experiencias")({
  head: () => ({
    meta: [
      { title: "Experiencias · PrivasTravel" },
      { name: "description", content: "Tours culturales, viajes de lujo y salidas grupales. Tres formas de descubrir el mundo con la misma curaduría." },
      { property: "og:title", content: "Experiencias · PrivasTravel" },
      { property: "og:description", content: "Tours, lujo y grupos. Una sola filosofía." },
    ],
  }),
  component: ExperienciasPage,
});

const items = [
  {
    image: tours,
    title: "Tours culturales",
    text: "Recorridos diseñados con historiadores y guías locales. Pequeños grupos, ritmo humano y acceso a lugares que no salen en las guías.",
    points: ["Guías expertos", "Grupos reducidos", "Itinerario flexible"],
  },
  {
    image: luxury,
    title: "Viajes de lujo",
    text: "Hoteles boutique, traslados privados y experiencias exclusivas. Cada detalle pensado para que solo tengas que disfrutar.",
    points: ["Alojamiento boutique", "Traslados privados", "Concierge 24/7"],
  },
  {
    image: grupos,
    title: "Salidas grupales",
    text: "Grupos pequeños con fechas fijas. Conoce gente afín mientras descubrimos juntos rincones especiales del mundo.",
    points: ["Fechas confirmadas", "Máx. 12 personas", "Coordinador en destino"],
  },
];

function ExperienciasPage() {
  return (
    <Layout>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-x">
          <p className="eyebrow">Experiencias</p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl md:text-6xl">
            Tres maneras de viajar.
            <br />
            <span className="text-muted-foreground">Una sola filosofía.</span>
          </h1>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container-x flex flex-col gap-24 md:gap-32">
          {items.map((it, i) => (
            <div
              key={it.title}
              className={`grid gap-10 md:grid-cols-2 md:items-center md:gap-16 ${
                i % 2 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="image-zoom aspect-[4/5] overflow-hidden rounded-2xl">
                <img src={it.image} alt={it.title} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div>
                <p className="eyebrow">0{i + 1}</p>
                <h2 className="mt-3 font-display text-4xl md:text-5xl">{it.title}</h2>
                <p className="mt-5 text-muted-foreground">{it.text}</p>
                <ul className="mt-8 space-y-3 border-t border-border pt-6">
                  {it.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-sm">
                      <span className="h-px w-6 bg-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contacto"
                  className="mt-8 inline-flex items-center gap-2 text-sm text-accent hover:underline"
                >
                  Cotizar esta experiencia <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
