import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import kyoto from "@/assets/hero-kyoto.jpg";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros · PrivasTravel" },
      { name: "description", content: "Una agencia local con la mirada puesta en el mundo. Itinerarios curados a mano, atención personal y la confianza de 18 años de experiencia." },
      { property: "og:title", content: "Nosotros · PrivasTravel" },
      { property: "og:description", content: "Agencia local, mirada internacional." },
    ],
  }),
  component: NosotrosPage,
});

function NosotrosPage() {
  return (
    <Layout>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-x grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <p className="eyebrow">Nosotros</p>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] md:text-6xl">
              Diseñamos viajes con sentido, no productos en serie.
            </h1>
            <p className="mt-8 text-lg text-muted-foreground">
              PrivasTravel nació en 2007 como una agencia local con una idea simple: tratar cada viaje
              como un proyecto personal. Hoy seguimos siendo un equipo pequeño y especializado, con
              presencia en más de 60 destinos y un cuidado obsesivo por los detalles.
            </p>
            <p className="mt-5 text-muted-foreground">
              No vendemos paquetes prearmados. Escuchamos, proponemos, ajustamos y volvemos a empezar
              hasta que el itinerario se siente tuyo.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="image-zoom aspect-[4/5] overflow-hidden rounded-2xl">
              <img src={kyoto} alt="Equipo PrivasTravel" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-20">
        <div className="container-x grid gap-12 md:grid-cols-3">
          {[
            { t: "Curaduría", d: "Cada destino es visitado y validado por nuestro equipo antes de recomendarlo." },
            { t: "Cercanía", d: "Atención humana en español, antes, durante y después del viaje." },
            { t: "Confianza", d: "Operadores propios, garantía de cumplimiento y soporte 24/7 en destino." },
          ].map((b) => (
            <div key={b.t}>
              <h3 className="font-display text-2xl">{b.t}</h3>
              <p className="mt-3 text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
