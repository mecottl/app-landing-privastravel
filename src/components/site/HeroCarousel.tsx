import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import santorini from "@/assets/hero-santorini.jpg";
import maldives from "@/assets/hero-maldives.jpg";
import kyoto from "@/assets/hero-kyoto.jpg";

const slides = [
  {
    image: santorini,
    eyebrow: "Mediterráneo",
    title: "Santorini al atardecer",
    subtitle: "Caldera, viento y luz sobre el Egeo.",
  },
  {
    image: maldives,
    eyebrow: "Océano Índico",
    title: "Maldivas en silencio",
    subtitle: "Aguas turquesa y noches de cielo claro.",
  },
  {
    image: kyoto,
    eyebrow: "Japón",
    title: "Kyoto entre bambú",
    subtitle: "Antiguos senderos, neblina y serenidad.",
  },
];

export function HeroCarousel() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-charcoal">
      {slides.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ease-out ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={s.image}
            alt={s.title}
            className={`h-full w-full object-cover ${i === idx ? "animate-ken-burns" : ""}`}
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70" />
        </div>
      ))}

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex-1" />
        <div className="container-x pb-20 md:pb-28">
          <div key={i} className="max-w-3xl text-white animate-fade-in-up">
            <p className="eyebrow !text-white/70">{slides[i].eyebrow}</p>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] md:text-7xl">
              {slides[i].title}
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/80 md:text-lg">
              {slides[i].subtitle}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/explorar"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-charcoal transition-transform hover:-translate-y-0.5"
              >
                Explorar viajes
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                Cotizar mi viaje
              </Link>
            </div>
          </div>

          <div className="mt-12 flex items-center gap-3">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`h-[2px] transition-all duration-500 ${
                  i === idx ? "w-12 bg-white" : "w-6 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
            <span className="ml-3 text-xs text-white/60">
              0{i + 1} / 0{slides.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
