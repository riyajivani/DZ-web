import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Target, Eye, Sparkles, Cpu, Globe, Layers } from "lucide-react";
import { PageShell, Container, Eyebrow, SectionHeading, PartnerButton } from "@/components/site";

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

const TIMELINE = [
  {
    when: "April 2025",
    title: "The Idea",
    desc: "Concept conceived after identifying operational challenges faced by contractors on real construction projects.",
  },
  {
    when: "June – July 2025",
    title: "Prototype Phase",
    desc: "First working prototype developed, focusing on digital site execution and field-first reporting.",
  },
  {
    when: "September 2025",
    title: "DZ Infotech Foundation",
    desc: "DZ Infotech officially registered as a technology firm in Bhavnagar, Gujarat.",
  },
  {
    when: "Late 2025",
    title: "MVP Launch",
    desc: "First flagship platform launched with DPR, progress tracking and attendance modules.",
  },
  {
    when: "Early Adoption",
    title: "Proof of Concept",
    desc: "Solution successfully demonstrated to over 15 major contractors for live feedback.",
  },
  {
    when: "Future Vision",
    title: "Industry Expansion",
    desc: "Expanding our digital intelligence platform to automate workflows across multiple heavy industries.",
  },
];

const NEXT = [
  { icon: Sparkles, title: "AI-driven predictive analytics" },
  { icon: Layers, title: "Multi-industry workflow automation" },
  { icon: Globe, title: "Global cloud infrastructure expansion" },
  { icon: Cpu, title: "Advanced hardware–software integration" },
];

function AboutPage() {
  return (
    <PageShell>
      {/* Services-like Hero/Header wrapper */}
      <div className="bg-white pt-24 pb-12 md:pt-28 md:pb-16 text-foreground">
        <Container>
          {/* Header Section */}
          <div className="relative">
            <h1 className="text-[12vw] font-bold tracking-tighter text-surface leading-[0.85] select-none md:text-[9vw]">
              About Us
            </h1>

            <div className="border-t border-border/85 mt-4 mb-2" />

            <div className="flex justify-between items-center text-[10px] text-muted-foreground uppercase tracking-widest py-1">
              <span>Who We Are</span>
              <span>Our Vision</span>
            </div>

            <div className="border-t border-border/85 mt-2 mb-8" />
          </div>

          {/* Right Aligned Bracketed Intro Statement */}
          <div className="flex justify-end py-4 px-4 mb-10">
            <h2 className="max-w-3xl text-right text-lg font-medium tracking-tight text-muted-foreground md:text-xl leading-relaxed">
              [ DZ Infotech is a Gujarat-based technology firm building digital systems that optimize operations, enhance cost visibility, and empower better decision-making systems ]
            </h2>
          </div>
        </Container>
      </div>

      {/* Mission + Vision */}
      <section className="py-20 md:py-28 bg-[#fafafa] border-t border-border/40">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                icon: Target,
                label: "Our Mission",
                body: "To digitally empower construction and infrastructure businesses by providing tools that solve real operational and financial challenges.",
              },
              {
                icon: Eye,
                label: "Our Vision",
                body: "To become the operating system for industries, where every workflow is digital, every cost is tracked, and every decision is data-driven.",
              },
            ].map((c) => (
              <div key={c.label} className="rounded-3xl border border-border/60 bg-white hover:border-copper/45 hover:shadow-lg transition-all duration-300 p-8 md:p-10 flex flex-col justify-between min-h-[240px]">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-copper/30 bg-copper/5 text-copper">
                    <c.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold tracking-tight text-foreground">{c.label}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Our Story */}
      <section className="border-y border-border/60 bg-surface py-20 md:py-28">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div>
              <Eyebrow>Our Story</Eyebrow>
              <h2 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
                Practical innovation for{" "}
                <span className="text-copper font-bold">complex workflows.</span>
              </h2>
            </div>
            <div className="flex flex-col gap-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                DZ Infotech was founded with the vision of solving real operational problems using
                technology. We focus on building practical, scalable solutions that help businesses
                gain control, visibility, and efficiency.
              </p>
              <p>
                The idea for our flagship platform came directly from observing the daily struggles
                contractors face on site. We realized that digital transformation isn't just about
                moving to the cloud; it's about making work easier for the person on the ground.
              </p>
              <p>
                Today, we are expanding that mindset to other sectors, building an ecosystem of
                tools designed for the modern industrial age.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Timeline Section */}
      <section className="py-20 md:py-28 bg-[#fafafa]">
        <Container>
          <div className="mb-14 flex flex-col items-center gap-3 text-center md:mb-20">
            <Eyebrow>DZ Infotech Timeline</Eyebrow>
            <h2 className="mt-2 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Building the intelligence layer for <span className="text-copper font-bold">global industries.</span>
            </h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {TIMELINE.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="relative rounded-3xl border border-border/40 bg-white hover:border-copper/45 hover:shadow-lg transition-all duration-300 p-8 flex flex-col justify-between min-h-[220px]"
              >
                <div>
                  <div className="inline-block text-[10px] font-bold tracking-widest text-copper uppercase bg-copper/5 px-3 py-1 rounded-full border border-copper/15 mb-4">
                    {t.when}
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-foreground">{t.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* What we are building next */}
      <section className="border-t border-border/60 bg-white py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="What's Next"
            title={
              <>
                What we are <span className="text-copper font-bold">building next.</span>
              </>
            }
            subtitle="While our flagship remains our current focus, we are actively expanding the intelligence layer of our entire digital ecosystem."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {NEXT.map((n) => (
              <div key={n.title} className="rounded-3xl border border-border/50 bg-surface hover:border-copper/45 hover:shadow-md transition-all duration-300 p-8 flex flex-col justify-between min-h-[180px]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-copper/30 bg-copper/5">
                  <n.icon className="h-5 w-5 text-copper" />
                </div>
                <p className="mt-6 text-base font-semibold text-foreground">{n.title}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-16 max-w-3xl rounded-3xl border border-border bg-surface p-10 text-center flex flex-col items-center">
            <h3 className="text-2xl font-bold text-foreground">The AI-driven future</h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg max-w-2xl">
              In the future, DZ Infotech plans to integrate Artificial Intelligence across all our
              products to analyze massive datasets, monitor performance and guide businesses in
              making better operational and financial decisions.
            </p>
            <div className="mt-8">
              <PartnerButton />
            </div>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
