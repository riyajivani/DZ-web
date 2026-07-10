import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site";
import PartnerHero from "@/components/sections/partner/Hero";
import PartnerContactForm from "@/components/sections/partner/ContactForm";

export const Route = createFileRoute("/partner")({
  head: () => ({
    meta: [
      { title: "Partner With Us — DZ Infotech" },
      {
        name: "description",
        content: "Collaborate with DZ Infotech to build custom digital solutions.",
      },
    ],
  }),
  component: PartnerPage,
});

function PartnerPage() {
  return (
    <PageShell>
      <PartnerHero />
      <PartnerContactForm />
    </PageShell>
  );
}
