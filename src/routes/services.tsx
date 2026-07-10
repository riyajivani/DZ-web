import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/site";
import ServicesHero from "@/components/sections/services/Hero";
import ServicesList from "@/components/sections/services/ServicesList";
import ServicesProcess from "@/components/sections/services/Process";
import ServicesTechStack from "@/components/sections/services/TechStack";
import ServicesTestimonials from "@/components/sections/services/Testimonials";
import ServicesFAQs from "@/components/sections/services/FAQs";
import ServicesLetsTalk from "@/components/sections/services/LetsTalk";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — DZ Infotech" },
      {
        name: "description",
        content:
          "Custom software engineering, legacy upgrades, mobile apps, and dedicated dev teams.",
      },
      { property: "og:title", content: "Services by DZ Infotech" },
      {
        property: "og:description",
        content: "Bespoke digital solutions built for operational scale.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [activeReviewIdx, setActiveReviewIdx] = useState(2);

  return (
    <PageShell>
      <ServicesHero />
      <ServicesList />
      <ServicesProcess />
      <ServicesTechStack />
      <ServicesTestimonials
        activeReviewIdx={activeReviewIdx}
        setActiveReviewIdx={setActiveReviewIdx}
      />
      <ServicesFAQs expandedFaq={expandedFaq} setExpandedFaq={setExpandedFaq} />
      <ServicesLetsTalk />
    </PageShell>
  );
}
