import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Mail, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto · Marenostro" },
      { name: "description", content: "Cuéntanos a dónde sueñas ir. Cotización personalizada en menos de 24 horas, sin compromiso." },
      { property: "og:title", content: "Contacto · Marenostro" },
      { property: "og:description", content: "Cotiza tu próximo viaje con nosotros." },
    ],
  }),
  component: ContactoPage,
});

function ContactoPage() {
  const [sent, setSent] = useState(false);

  return (
    <Layout>
      <section className="pt-32 pb-12 md:pt-40">
        <div className="container-x grid gap-16 md:grid-cols-2 md:gap-24">
          <div>
            <p className="eyebrow">Contacto</p>
            <h1 className="mt-4 font-display text-5xl leading-tight md:text-6xl">
              Cuéntanos a dónde sueñas ir.
            </h1>
            <p className="mt-6 text-muted-foreground">
              Respondemos en menos de 24 horas con una propuesta a medida.
            </p>

            <ul className="mt-12 space-y-5 border-t border-border pt-8 text-sm">
              <li className="flex items-start gap-4">
                <MapPin size={18} className="mt-0.5 text-accent" />
                <span>Av. Reforma 142, Col. Juárez, CDMX</span>
              </li>
              <li className="flex items-start gap-4">
                <Phone size={18} className="mt-0.5 text-accent" />
                <span>+52 55 1234 5678</span>
              </li>
              <li className="flex items-start gap-4">
                <Mail size={18} className="mt-0.5 text-accent" />
                <span>hola@marenostro.travel</span>
              </li>
            </ul>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-2xl border border-border bg-card p-8 md:p-10"
          >
            {sent ? (
              <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center">
                <div className="h-12 w-12 rounded-full bg-accent/10" />
                <h3 className="mt-6 font-display text-2xl">¡Gracias!</h3>
                <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                  Recibimos tu mensaje. Te escribimos en menos de 24 horas.
                </p>
              </div>
            ) : (
              <>
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Nombre" name="nombre" />
                  <Field label="Email" name="email" type="email" />
                </div>
                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  <Field label="Destino soñado" name="destino" />
                  <Field label="Fechas aproximadas" name="fechas" />
                </div>
                <div className="mt-5">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">
                    Cuéntanos más
                  </label>
                  <textarea
                    rows={4}
                    className="mt-2 w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-foreground"
                    placeholder="Tipo de viaje, número de personas, intereses…"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-8 w-full rounded-full bg-foreground py-3.5 text-sm text-background transition-opacity hover:opacity-90"
                >
                  Enviar solicitud
                </button>
              </>
            )}
          </form>
        </div>
      </section>
      <div className="h-24" />
    </Layout>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-foreground"
      />
    </div>
  );
}
