import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site";
import HomeHero from "@/components/sections/home/Hero";
import HomeTrustedPartners from "@/components/sections/home/TrustedPartners";
import HomeWhatWeDo from "@/components/sections/home/WhatWeDo";
import HomeVision from "@/components/sections/home/Vision";
import HomeProjectsSlider from "@/components/sections/home/ProjectsSlider";
import HomeWhyChooseUs from "@/components/sections/home/WhyChooseUs";
import HomeClientReviews from "@/components/sections/home/ClientReviews";
import HomeFinalCTA from "@/components/sections/home/FinalCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DZ Infotech — Building Smart Digital Solutions for Real-World Industries" },
      {
        name: "description",
        content:
          "DZ Infotech designs and develops technology that simplifies operations, improves efficiency and gives businesses complete control over their workflows.",
      },
      { property: "og:title", content: "DZ Infotech — Building Smart Digital Solutions" },
      {
        property: "og:description",
        content:
          "Custom software, mobile apps, workflow automation and AI solutions for real-world industries.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <PageShell>
      <HomeHero />
      {/* <HomeTrustedPartners /> */}
      <HomeWhatWeDo />
      <HomeVision />
      <HomeProjectsSlider />
      <HomeWhyChooseUs />
      {/* <HomeClientReviews /> */}
      <HomeFinalCTA />
    </PageShell>
  );
}
