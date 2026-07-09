import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Target, Eye, Sparkles, Cpu, Globe, Layers } from "lucide-react";
import { PageShell, Container, Eyebrow, SectionHeading, PartnerButton } from "@/components/site";
import careerFormBg from "@/assets/about.png";
import theIdeaImg from "@/assets/the-idea.png";
import prototypePhaseImg from "@/assets/prototype-phase.png";
import dzFoundationImg from "@/assets/dz-foundation.png";
import mvpLaunchImg from "@/assets/mvp-launch.png";
import proofOfConceptImg from "@/assets/proof-of-concept.png";
import industryExpansionImg from "@/assets/industry-expansion.png";

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
    bgImage: theIdeaImg,
  },
  {
    when: "June – July 2025",
    title: "Prototype Phase",
    desc: "First working prototype developed, focusing on digital site execution and field-first reporting.",
    bgImage: prototypePhaseImg,
  },
  {
    when: "September 2025",
    title: "DZ Infotech Foundation",
    desc: "DZ Infotech officially registered as a technology firm in Bhavnagar, Gujarat.",
    bgImage: dzFoundationImg,
  },
  {
    when: "Late 2025",
    title: "MVP Launch",
    desc: "First flagship platform launched with DPR, progress tracking and attendance modules.",
    bgImage: mvpLaunchImg,
  },
  {
    when: "Early Adoption",
    title: "Proof of Concept",
    desc: "Solution successfully demonstrated to over 15 major contractors for live feedback.",
    bgImage: proofOfConceptImg,
  },
  {
    when: "Future Vision",
    title: "Industry Expansion",
    desc: "Expanding our digital intelligence platform to automate workflows across multiple heavy industries.",
    bgImage: industryExpansionImg,
  },
];

const NEXT = [
  {
    icon: Sparkles,
    title: "AI Predictive Analytics",
    desc: "Leveraging machine learning models to forecast project delays, predict material cost variances, and optimize workforce allocation.",
  },
  {
    icon: Layers,
    title: "Workflow Automation",
    desc: "Expanding our proprietary workflow engines to seamlessly automate back-office operations and cross-system handoffs.",
  },
  {
    icon: Globe,
    title: "Global Infrastructure",
    desc: "Deploying high-performance edge servers globally to assure low latency and offline-first functionality for remote sites.",
  },
  {
    icon: Cpu,
    title: "Hardware Integration",
    desc: "Connecting telemetry modules, smart weighbridges, and IoT sensors directly to our real-time reporting pipeline.",
  },
];

function AboutPage() {
  return (
    <PageShell>
      {/* Services-like Hero/Header wrapper */}
      <div className="bg-white pt-24 pb-12 md:pt-28 text-foreground">
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
              [ DZ Infotech is a Gujarat-based technology firm building digital systems that
              optimize operations, enhance cost visibility, and empower better decision-making
              systems ]
            </h2>
          </div>
        </Container>
      </div>

      {/* Our Story */}
      <section className="relative w-full bg-white overflow-visible">
        <div className="w-full flex flex-col md:flex-row items-center">
          {/* Left Column: Image (Taller than the blue section next to it) */}
          <div className="w-full md:w-[45%] h-[350px] md:h-[600px] relative z-20">
            <img
              src={careerFormBg}
              alt="Our Story"
              className="w-full h-full object-cover shadow-xl"
            />
          </div>

          {/* Right Column: Blue Section (Starts exactly where the image ends) */}
          <div className="w-full md:w-[55%] bg-linear-to-br from-blue-900 via-blue-950 to-indigo-950 text-white py-16 px-8 md:py-20 md:px-16 flex flex-col justify-center items-center text-center relative z-10 self-center">
            <div className="max-w-xl mx-auto flex flex-col items-center">
              <span className="text-xs uppercase tracking-widest text-blue-200/80 font-bold">
                Our Story
              </span>

              <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.1] tracking-tight md:text-4xl lg:text-5xl text-white">
                Practical innovation for{" "}
                <span className="text-blue-400 font-bold">complex workflows.</span>
              </h2>

              <div className="mt-6 text-lg md:text-xl font-medium text-blue-200 tracking-tight leading-relaxed border-y border-blue-500/20 py-4 my-6">
                "Technology should solve real operational problems, not create new ones."
              </div>

              <div className="flex flex-col gap-5 text-sm md:text-base leading-relaxed text-blue-100/90">
                <p>
                  DZ Infotech was founded with the vision of solving real operational problems using
                  technology. We focus on building practical, scalable solutions that help
                  businesses gain control, visibility, and efficiency.
                </p>
                <p>
                  The idea for our flagship platform came directly from observing the daily
                  struggles contractors face on site. We realized that digital transformation isn't
                  just about moving to the cloud; it's about making work easier for the person on
                  the ground.
                </p>
                <p>
                  Today, we are expanding that mindset to other sectors, building an ecosystem of
                  tools designed for the modern industrial age.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="py-20 md:py-16 bg-white">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                icon: Target,
                label: "Our Mission",
                body: "To digitally empower construction and infrastructure businesses by providing tools that solve real operational and financial challenges.",
                badge: "Empowerment",
                isVision: false,
              },
              {
                icon: Eye,
                label: "Our Vision",
                body: "To become the operating system for industries, where every workflow is digital, every cost is tracked, and every decision is data-driven.",
                badge: "Innovation",
                isVision: true,
              },
            ].map((c, i) => (
              <div
                className={`group relative rounded-3xl p-8 md:p-12 flex flex-col justify-between min-h-[300px] transition-all duration-300 overflow-hidden ${
                  c.isVision ? "bg-blue-50/40" : "bg-surface"
                }`}
              >
                {/* Subtly animated large watermark icon in background */}
                <div
                  className={`absolute right-6 bottom-6 transition-colors duration-500 pointer-events-none ${
                    c.isVision
                      ? "text-blue-500/5 group-hover:text-blue-500/[0.04]"
                      : "text-copper/1.5 group-hover:text-copper/[0.035]"
                  }`}
                >
                  <c.icon className="h-44 w-44 stroke-[0.5] translate-y-8 translate-x-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-700" />
                </div>

                {/* Tech blueprint dot grid */}
                <div
                  className={`absolute inset-0 bg-size-[16px_16px] pointer-events-none opacity-[0.04] ${
                    c.isVision
                      ? "bg-[radial-gradient(var(--color-blue-500)_1px,transparent_2px)]"
                      : "bg-[radial-gradient(var(--color-copper)_1px,transparent_2px)]"
                  }`}
                />

                {/* Concentric wireframe circles in top-left */}
                <div
                  className={`absolute -left-12 -top-12 h-36 w-36 rounded-full border pointer-events-none group-hover:scale-110 transition-transform duration-700 ${
                    c.isVision ? "border-blue-500/5" : "border-copper/4"
                  }`}
                />
                <div
                  className={`absolute -left-16 -top-16 h-48 w-48 rounded-full border pointer-events-none group-hover:scale-105 transition-transform duration-700 ${
                    c.isVision ? "border-blue-500/3" : "border-copper/2"
                  }`}
                />

                {/* Decorative background gradient glow */}
                <div
                  className={`absolute -right-10 -bottom-10 h-40 w-40 rounded-full blur-3xl opacity-60 group-hover:scale-150 transition-transform duration-700 pointer-events-none ${
                    c.isVision
                      ? "bg-linear-to-br from-blue-500/10 to-transparent"
                      : "bg-linear-to-br from-copper/5 to-transparent"
                  }`}
                />

                <div className="relative z-10">
                  {/* Badge & Icon Row */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                        c.isVision ? "text-blue-600" : "text-copper"
                      }`}
                    >
                      <c.icon className="h-8 w-8 stroke-[1.5]" />
                    </div>
                    <span
                      className={`text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border transition-colors duration-300 ${
                        c.isVision
                          ? "text-blue-600 bg-blue-50 border-blue-100"
                          : "text-copper bg-copper/5 border-copper/10"
                      }`}
                    >
                      {c.badge}
                    </span>
                  </div>

                  <h3 className="mt-8 text-2xl font-bold tracking-tight text-foreground font-display">
                    {c.label}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground/90 max-w-md">
                    {c.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline Section */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="mb-14 flex flex-col items-center gap-3 text-center md:mb-20">
            <Eyebrow>DZ Infotech Timeline</Eyebrow>
            <h2 className="mt-2 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Building the intelligence layer for{" "}
              <span className="text-copper font-bold">global industries.</span>
            </h2>
          </div>

          {/* Asymmetric Bento Grid (No Timeline) */}
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-12">
            {TIMELINE.map((t, i) => {
              const isWide = i === 0 || i === 5;
              return (
                <div
                  className={`group relative rounded-3xl p-8 flex flex-col justify-between min-h-[260px] shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden text-left ${
                    t.bgImage
                      ? "bg-slate-950 border-transparent text-white"
                      : "bg-white border-transparent text-black"
                  } ${isWide ? "md:col-span-2 lg:col-span-2" : "md:col-span-1 lg:col-span-1"}`}
                >
                  {t.bgImage && (
                    <div className="absolute inset-0 z-0 pointer-events-none">
                      <img
                        src={t.bgImage}
                        alt={t.title}
                        className="w-full h-full object-cover object-top opacity-70 group-hover:opacity-0 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-white/30 via-white/20 to-white/5" />
                    </div>
                  )}

                  <div className="relative z-10">
                    <div
                      className={`inline-block text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-white/50 mb-4 shadow-xs`}
                    >
                      {t.when}
                    </div>

                    <h3
                      className={`text-2xl font-bold tracking-tight text-white transition-colors duration-300`}
                    >
                      {t.title}
                    </h3>
                  </div>

                  <p className={`mt-4 text-sm leading-relaxed relative z-10 text-slate-300`}>
                    {t.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* What we are building next */}
      <section className="relative overflow-hidden bg-[#fafafa] py-24 md:py-32 text-foreground">
        {/* Soft background glow effects */}
        <div className="absolute -left-64 top-1/4 h-96 w-96 rounded-full bg-blue-500/3 blur-[120px] pointer-events-none" />
        <div className="absolute -right-64 bottom-1/4 h-96 w-96 rounded-full bg-copper/3 blur-[120px] pointer-events-none" />

        <Container>
          <div className="max-w-3xl mb-16 md:mb-24">
            <Eyebrow>What's Next</Eyebrow>
            <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              What we are <span className="text-copper font-bold">building next.</span>
            </h2>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-muted-foreground">
              While our flagship remains our current focus, we are actively expanding the
              intelligence layer of our entire digital ecosystem.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {NEXT.map((n, i) => (
              <motion.div
                key={n.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-3xl border border-border/50 bg-white p-8 flex flex-col justify-between min-h-[260px] hover:border-copper/45 hover:shadow-lg transition-all duration-300 overflow-hidden text-left"
              >
                {/* Tech blueprint grid pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(rgba(184,134,11,0.02)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-copper/10 bg-copper/5 text-copper group-hover:border-copper group-hover:bg-copper group-hover:text-white transition-all duration-300">
                    <n.icon className="h-5 w-5 stroke-[1.5]" />
                  </div>
                  <h4 className="mt-6 text-lg font-bold text-foreground tracking-tight group-hover:text-copper transition-colors duration-300">
                    {n.title}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{n.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Immersive CTA card */}
          <div className="mx-auto mt-20 max-w-3xl rounded-3xl border border-blue-900 bg-linear-to-br from-blue-900 via-blue-950 to-indigo-950 p-10 text-center flex flex-col items-center relative overflow-hidden shadow-xl">
            <div className="absolute -right-32 -bottom-32 h-64 w-64 rounded-full bg-copper/10 blur-3xl pointer-events-none" />
            <h3 className="text-2xl font-bold text-white relative z-10">The AI-driven future</h3>
            <p className="mt-4 text-base leading-relaxed text-blue-100/80 md:text-lg max-w-2xl relative z-10">
              In the future, DZ Infotech plans to integrate Artificial Intelligence across all our
              products to analyze massive datasets, monitor performance and guide businesses in
              making better operational and financial decisions.
            </p>
            <div className="mt-8 relative z-10">
              <PartnerButton />
            </div>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
