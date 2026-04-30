import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { trips } from "@/data/trips";
import { ArrowLeft, Check, X, Plane, CalendarDays, Hotel as HotelIcon, MapPin, FileCheck2, AlertTriangle, Compass } from "lucide-react";

export const Route = createFileRoute("/explorar/$tripId")({
  loader: ({ params }) => {
    const trip = trips.find((t) => t.id === params.tripId);
    if (!trip) throw notFound();
    return { trip };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `Cotización: ${loaderData.trip.name} · Marenostro` },
          { name: "description", content: loaderData.trip.summary },
          { property: "og:title", content: `${loaderData.trip.name} · Marenostro` },
          { property: "og:description", content: loaderData.trip.summary },
          { property: "og:image", content: loaderData.trip.image },
          { name: "twitter:image", content: loaderData.trip.image },
        ]
      : [{ title: "Cotización · Marenostro" }],
  }),
  notFoundComponent: () => (
    <Layout>
      <section className="container-x py-40 text-center">
        <h1 className="font-display text-5xl">Destino no encontrado</h1>
        <p className="mt-4 text-muted-foreground">El viaje que buscas no está en nuestro catálogo.</p>
        <Link to="/explorar" className="mt-8 inline-flex rounded-full border border-foreground px-5 py-2 text-sm hover:bg-foreground hover:text-background">
          Volver al catálogo
        </Link>
      </section>
    </Layout>
  ),
  errorComponent: ({ error }) => (
    <Layout>
      <section className="container-x py-40 text-center">
        <h1 className="font-display text-4xl">Algo salió mal</h1>
        <p className="mt-4 text-muted-foreground">{error.message}</p>
      </section>
    </Layout>
  ),
  component: TripDetailPage,
});

function SectionTitle({ icon: Icon, eyebrow, title }: { icon: React.ElementType; eyebrow: string; title: string }) {
  return (
    <div className="mb-8 flex items-end justify-between gap-6 border-b border-border pb-4">
      <div>
        <p className="eyebrow flex items-center gap-2"><Icon size={14} /> {eyebrow}</p>
        <h2 className="mt-2 font-display text-3xl md:text-4xl">{title}</h2>
      </div>
    </div>
  );
}

function TripDetailPage() {
  const { trip } = Route.useLoaderData();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
        <img src={trip.image} alt={trip.name} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70" />
        <div className="container-x relative flex h-full flex-col justify-end pb-16 text-white">
          <Link to="/explorar" className="mb-6 inline-flex w-fit items-center gap-2 text-xs uppercase tracking-[0.22em] opacity-80 hover:opacity-100">
            <ArrowLeft size={14} /> Volver al catálogo
          </Link>
          <p className="text-xs uppercase tracking-[0.22em] opacity-80">{trip.country} · {trip.region}</p>
          <h1 className="mt-3 max-w-3xl font-display text-5xl leading-tight md:text-7xl">{trip.name}</h1>
          <p className="mt-4 max-w-xl text-base opacity-90 md:text-lg">{trip.summary}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs">
            <span className="rounded-full border border-white/40 px-4 py-2">{trip.nights} noches</span>
            {trip.tag && <span className="rounded-full border border-white/40 px-4 py-2">{trip.tag}</span>}
            <span className="rounded-full bg-white px-4 py-2 text-foreground">Desde ${trip.priceFrom.toLocaleString()} USD</span>
          </div>
        </div>
      </section>

      {/* Aerolíneas + Fechas */}
      <section className="border-b border-border bg-secondary/40">
        <div className="container-x grid gap-10 py-12 md:grid-cols-2">
          <div>
            <p className="eyebrow flex items-center gap-2"><Plane size={14} /> Aerolíneas operadoras</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {trip.airlines.map((a) => (
                <span key={a} className="rounded-full border border-border bg-background px-4 py-2 text-sm">
                  {a}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow flex items-center gap-2"><CalendarDays size={14} /> Fechas de salida</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {trip.departureDates.map((d) => (
                <span key={d} className="rounded-full border border-border bg-background px-4 py-2 text-sm">
                  {d}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Itinerario */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionTitle icon={MapPin} eyebrow="Día a día" title="Itinerario" />
          <ol className="grid gap-4 md:grid-cols-2">
            {trip.itinerary.map((d) => (
              <li key={d.day} className="rounded-2xl border border-border bg-card p-6 hover-lift">
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground font-display text-sm text-background">
                    {d.day}
                  </span>
                  <h3 className="font-display text-xl">{d.title}</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{d.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Incluye / No incluye */}
      <section className="border-y border-border bg-secondary/40 py-20 md:py-28">
        <div className="container-x">
          <SectionTitle icon={Check} eyebrow="Detalles del paquete" title="Qué incluye y qué no" />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-background p-8">
              <h3 className="font-display text-2xl">Incluye</h3>
              <ul className="mt-6 space-y-3">
                {trip.includes.map((i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <Check size={18} className="mt-0.5 shrink-0 text-[var(--ocean)]" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-background p-8">
              <h3 className="font-display text-2xl">No incluye</h3>
              <ul className="mt-6 space-y-3">
                {trip.excludes.map((i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <X size={18} className="mt-0.5 shrink-0 text-muted-foreground" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Hoteles */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionTitle icon={HotelIcon} eyebrow="Alojamiento" title="Hoteles seleccionados" />
          <div className="overflow-hidden rounded-2xl border border-border">
            <table className="w-full text-left text-sm">
              <thead className="bg-secondary/60 text-xs uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-6 py-4">Hotel</th>
                  <th className="px-6 py-4">Categoría</th>
                  <th className="px-6 py-4">Noches</th>
                  <th className="px-6 py-4">Régimen</th>
                </tr>
              </thead>
              <tbody>
                {trip.hotels.map((h) => (
                  <tr key={h.name} className="border-t border-border bg-card">
                    <td className="px-6 py-4 font-medium">{h.name}</td>
                    <td className="px-6 py-4">{h.category}</td>
                    <td className="px-6 py-4">{h.nights}</td>
                    <td className="px-6 py-4">{h.board}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Precios por habitación */}
      <section className="border-y border-border bg-secondary/40 py-20 md:py-28">
        <div className="container-x">
          <SectionTitle icon={FileCheck2} eyebrow="Tarifas" title="Precios por tipo de habitación" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trip.pricing.map((p) => (
              <div key={p.type} className="rounded-2xl border border-border bg-background p-8 text-center hover-lift">
                <p className="eyebrow">Habitación</p>
                <h3 className="mt-2 font-display text-2xl">{p.type}</h3>
                <p className="mt-6 font-display text-4xl">${p.price.toLocaleString()}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">USD</p>
                {p.note && <p className="mt-4 text-xs text-muted-foreground">{p.note}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tours opcionales */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionTitle icon={Compass} eyebrow="Extras" title="Tours opcionales" />
          <div className="grid gap-4 md:grid-cols-3">
            {trip.optionalTours.map((t) => (
              <article key={t.name} className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 hover-lift">
                <div>
                  <h3 className="font-display text-xl">{t.name}</h3>
                  <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{t.duration}</p>
                </div>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="text-[11px] uppercase tracking-widest text-muted-foreground">Desde</p>
                  <p className="font-display text-2xl">${t.price.toLocaleString()} USD</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Requisitos */}
      <section className="border-y border-border bg-secondary/40 py-20 md:py-28">
        <div className="container-x">
          <SectionTitle icon={FileCheck2} eyebrow="Documentación" title="Requisitos para entrar al país" />
          <dl className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-background p-6">
              <dt className="eyebrow">Pasaporte</dt>
              <dd className="mt-2 text-sm">{trip.requirements.passport}</dd>
            </div>
            <div className="rounded-2xl border border-border bg-background p-6">
              <dt className="eyebrow">Visa</dt>
              <dd className="mt-2 text-sm">{trip.requirements.visa}</dd>
            </div>
            {trip.requirements.vaccines && (
              <div className="rounded-2xl border border-border bg-background p-6">
                <dt className="eyebrow">Vacunas</dt>
                <dd className="mt-2 text-sm">{trip.requirements.vaccines}</dd>
              </div>
            )}
            {trip.requirements.other && (
              <div className="rounded-2xl border border-border bg-background p-6">
                <dt className="eyebrow">Otros</dt>
                <dd className="mt-2 text-sm">{trip.requirements.other}</dd>
              </div>
            )}
          </dl>
        </div>
      </section>

      {/* Notas importantes */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionTitle icon={AlertTriangle} eyebrow="Antes de viajar" title="Notas importantes" />
          <ul className="space-y-3 rounded-2xl border border-border bg-card p-8">
            {trip.notes.map((n) => (
              <li key={n} className="flex gap-3 text-sm">
                <AlertTriangle size={16} className="mt-0.5 shrink-0 text-[var(--ocean)]" />
                <span className="text-muted-foreground">{n}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-foreground py-20 text-background">
        <div className="container-x flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] opacity-70">¿Listo para reservar?</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">{trip.name}</h2>
            <p className="mt-3 max-w-xl opacity-80">Personalizamos cada detalle de tu viaje. Solicita tu cotización formal y un asesor te contactará en 24 horas.</p>
          </div>
          <Link
            to="/contacto"
            className="rounded-full bg-background px-8 py-4 text-sm text-foreground transition-transform hover:scale-[1.02]"
          >
            Solicitar cotización
          </Link>
        </div>
      </section>
    </Layout>
  );
}
