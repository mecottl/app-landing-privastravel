import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { trips, type Trip } from "@/data/trips";
import { Search } from "lucide-react";

export const Route = createFileRoute("/explorar")({
  head: () => ({
    meta: [
      { title: "Explorar viajes · Marenostro" },
      { name: "description", content: "Catálogo de viajes curados. Filtra por destino y rango de precio para encontrar tu próxima escapada." },
      { property: "og:title", content: "Explorar viajes · Marenostro" },
      { property: "og:description", content: "Filtra y descubre destinos seleccionados." },
    ],
  }),
  component: ExplorarPage,
});

const regions = ["Todos", "Europa", "América", "Asia", "África", "Oceanía"] as const;
const priceRanges = [
  { label: "Todos", min: 0, max: Infinity },
  { label: "Hasta $2,000", min: 0, max: 2000 },
  { label: "$2,000 – $2,500", min: 2000, max: 2500 },
  { label: "Más de $2,500", min: 2500, max: Infinity },
];

function ExplorarPage() {
  const [region, setRegion] = useState<(typeof regions)[number]>("Todos");
  const [price, setPrice] = useState(0);
  const [q, setQ] = useState("");

  const filtered = useMemo<Trip[]>(() => {
    const range = priceRanges[price];
    return trips.filter((t) => {
      const matchRegion = region === "Todos" || t.region === region;
      const matchPrice = t.priceFrom >= range.min && t.priceFrom <= range.max;
      const matchQ =
        !q ||
        t.name.toLowerCase().includes(q.toLowerCase()) ||
        t.country.toLowerCase().includes(q.toLowerCase());
      return matchRegion && matchPrice && matchQ;
    });
  }, [region, price, q]);

  return (
    <Layout>
      <section className="pt-32 pb-12 md:pt-40">
        <div className="container-x">
          <p className="eyebrow">Catálogo</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl md:text-6xl">
            Explorar viajes.
          </h1>
          <p className="mt-5 max-w-xl text-muted-foreground">
            Una selección de itinerarios para inspirarte. Cada viaje puede ajustarse a tus fechas y ritmo.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="container-x flex flex-col gap-6 py-6 md:flex-row md:items-center md:justify-between md:gap-10">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Buscar destino o país"
              className="w-full rounded-full border border-border bg-background py-3 pl-11 pr-4 text-sm outline-none focus:border-foreground"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {regions.map((r) => (
              <button
                key={r}
                onClick={() => setRegion(r)}
                className={`rounded-full border px-4 py-2 text-xs transition-colors ${
                  region === r
                    ? "border-foreground bg-foreground text-background"
                    : "border-border hover:border-foreground"
                }`}
              >
                {r}
              </button>
            ))}
          </div>
          <select
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="rounded-full border border-border bg-background px-4 py-2.5 text-xs outline-none focus:border-foreground"
          >
            {priceRanges.map((p, i) => (
              <option key={p.label} value={i}>{p.label}</option>
            ))}
          </select>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-x">
          <p className="text-xs text-muted-foreground">
            {filtered.length} {filtered.length === 1 ? "viaje" : "viajes"}
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((t) => (
              <Link
                key={t.id}
                to="/explorar/$tripId"
                params={{ tripId: t.id }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card hover-lift"
              >
                <div className="image-zoom aspect-[4/3]">
                  <img src={t.image} alt={t.name} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{t.country} · {t.region}</span>
                    <span>{t.nights} noches</span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl">{t.name}</h3>
                  {t.tag && (
                    <span className="mt-3 inline-flex w-fit rounded-full bg-secondary px-3 py-1 text-[11px] uppercase tracking-widest text-muted-foreground">
                      {t.tag}
                    </span>
                  )}
                  <div className="mt-6 flex items-end justify-between border-t border-border pt-5">
                    <div>
                      <p className="text-[11px] uppercase tracking-widest text-muted-foreground">Desde</p>
                      <p className="font-display text-2xl">${t.priceFrom.toLocaleString()}</p>
                    </div>
                    <span className="rounded-full border border-foreground px-4 py-2 text-xs transition-colors group-hover:bg-foreground group-hover:text-background">
                      Cotizar
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="rounded-2xl border border-dashed border-border p-16 text-center text-muted-foreground">
              No encontramos viajes con esos filtros. Prueba ampliar tu búsqueda.
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
