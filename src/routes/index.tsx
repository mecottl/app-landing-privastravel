import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { HeroCarousel } from "@/components/site/HeroCarousel";
import { DestinationsGallery } from "@/components/site/DestinationsGallery";
import { Promotions } from "@/components/site/Promotions";
import { Experiences } from "@/components/site/Experiences";
import { About } from "@/components/site/About";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marenostro · Viajes diseñados con sentido" },
      { name: "description", content: "Agencia de viajes local. Destinos curados, experiencias a medida y atención personal para diseñar tu próximo viaje." },
      { property: "og:title", content: "Marenostro · Viajes diseñados con sentido" },
      { property: "og:description", content: "Destinos curados y experiencias a medida." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <Layout>
      <HeroCarousel />
      <DestinationsGallery />
      <Promotions />
      <Experiences />
      <About />
      <CTASection />
    </Layout>
  );
}
