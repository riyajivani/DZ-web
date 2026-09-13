import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site";
import OfferHero from "@/components/sections/offer/OfferHero";
import SpecialOfferForm from "@/components/sections/offer/SpecialOfferForm";

export const Route = createFileRoute("/offer")({
  head: () => ({
    meta: [
      { title: "Special Offer: Custom Static Website for ₹499 — DZ Infotech" },
      {
        name: "description",
        content:
          "Get a professional, modern, mobile-optimized static website for your business for just ₹499. Includes custom design, fast load speed, lead capture, and free support.",
      },
      { property: "og:title", content: "Custom Static Website Offer — Only ₹499 | DZ Infotech" },
      {
        property: "og:description",
        content:
          "High-performance static website designed and built by software professionals. Claim your offer today.",
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
