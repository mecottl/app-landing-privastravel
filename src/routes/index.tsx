import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { HeroCarousel } from "@/components/site/HeroCarousel";
import { DestinationsGallery } from "@/components/site/DestinationsGallery";
import { Promotions } from "@/components/site/Promotions";
import { Experiences } from "@/components/site/Experiences";
import { About } from "@/components/site/About";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/")({
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
