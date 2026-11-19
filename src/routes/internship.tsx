import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site";
import InternshipHero from "@/components/sections/internship/Hero";
import InternshipProgramOverview from "@/components/sections/internship/ProgramOverview";
import InternshipCurriculumJourney from "@/components/sections/internship/CurriculumJourney";
import InternshipWhyJoin from "@/components/sections/internship/WhyJoin";
import InternshipApplicationForm from "@/components/sections/internship/ApplicationForm";
import InternshipFAQs from "@/components/sections/internship/FAQs";

export const Route = createFileRoute("/internship")({
  head: () => ({
    meta: [
      { title: "3-Month Industrial Internship — DZ Infotech" },
      {
        name: "description",
        content:
          "Join the DZ Infotech 3-month industrial internship. Engage in live interactive sessions, build an individual live project, collaborate on demo group projects, and earn an official certificate of completion.",
      },
      { property: "og:title", content: "3-Month Industrial Internship at DZ Infotech" },
      {
        property: "og:description",
        content:
          "Accelerate your engineering career with real-world individual live projects, interactive mentor sessions, demo group sprints, and verified certification.",
      },
    ],
  }),
  component: InternshipPage,
});

function InternshipPage() {
  return (
    <PageShell>
      <InternshipHero />
      <InternshipProgramOverview />
      <InternshipCurriculumJourney />
      <InternshipWhyJoin />
      <InternshipApplicationForm />
      <InternshipFAQs />
    </PageShell>
  );
}
