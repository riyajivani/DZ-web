import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site";
import OfferHero from "@/components/sections/offer/OfferHero";
import SpecialOfferForm from "@/components/sections/offer/SpecialOfferForm";

export const Route = createFileRoute("/offer")({
  head: () => ({
    meta: [
      { title: "Special Offer: Custom Website for ₹499 — DZ Infotech" },
      {
        name: "description",
        content:
          "Get a professional, modern, mobile-optimized website for your business for just ₹499. Includes custom design, SEO, lead capture, and free support.",
      },
      { property: "og:title", content: "Custom Website Offer — Only ₹499 | DZ Infotech" },
      {
        property: "og:description",
        content:
          "High-performance website designed and built by software professionals. Claim your offer today.",
      },
    ],
  }),
  component: OfferPage,
});

function OfferPage() {
  return (
    <PageShell>
      <OfferHero />
      <SpecialOfferForm />
    </PageShell>
  );
}
