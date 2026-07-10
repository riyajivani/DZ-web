import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site";
import AboutHero from "@/components/sections/about/Hero";
import AboutOurStory from "@/components/sections/about/OurStory";
import AboutMissionVision from "@/components/sections/about/MissionVision";
import AboutTimeline from "@/components/sections/about/Timeline";
import AboutWhatNext from "@/components/sections/about/WhatNext";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About DZ Infotech — Building Technology for the Real World" },
      {
        name: "description",
        content:
          "Based in Bhavnagar, Gujarat, DZ Infotech develops digital tools that simplify project execution, improve cost visibility and empower better decisions.",
      },
      { property: "og:title", content: "About DZ Infotech" },
      { property: "og:description", content: "Practical innovation for complex workflows." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <AboutHero />
      <AboutOurStory />
      <AboutMissionVision />
      <AboutTimeline />
      <AboutWhatNext />
    </PageShell>
  );
}
