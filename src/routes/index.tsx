import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Smartphone,
  Cog,
  Brain,
  ArrowLeft,
  ArrowRight,
  Star,
  Quote,
} from "lucide-react";
import projConstruction from "@/assets/project-construction.jpg";
import projFieldApp from "@/assets/project-fieldapp.jpg";
import projLogistics from "@/assets/project-logistics.jpg";
import projAI from "@/assets/project-ai.jpg";

import heroImg from "@/assets/hero.jpg";

import avatarRajesh from "@/assets/avatar-rajesh.png";
import avatarPriya from "@/assets/avatar-priya.png";
import avatarAmit from "@/assets/avatar-amit.png";
import avatarSneha from "@/assets/avatar-sneha.png";
import avatarVikram from "@/assets/avatar-vikram.png";
import avatarWorkspace from "@/assets/avatar-workspace.png";
import { PageShell, Container, Eyebrow, CTAButton, PartnerButton } from "@/components/site";
import ctaBg from "@/assets/cta-image.jpeg";
import projectsBg from "@/assets/projects-bg.png";

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

/* -------------------------------- Hero -------------------------------- */

function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-40 pb-24 md:pt-48 md:pb-32"
    >
      <div className="pointer-events-none absolute inset-0 grain-bg" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-copper/10 blur-[140px]" />

      {/* Desktop image — right side, fades left-to-right */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] lg:block">
        <div className="relative h-full w-full">
          <img
            src={heroImg}
            alt="DZ Infotech tech solutions"
            width={1536}
            height={1280}
            className="hero-fade-mask absolute inset-0 h-full w-full object-cover object-left"
          />
          <div className="absolute inset-0 bg-linear-to-r from-background via-transparent to-background/30" />
        </div>
      </div>

      {/* Mobile image — full-bleed background, fades top-to-bottom behind text */}
      <div className="pointer-events-none absolute inset-0 lg:hidden">
        <img
          src={heroImg}
          alt=""
          className="hero-bg-mobile h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/60 via-background/20 to-transparent" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-[1.3fr_0.7fr]">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-8 lg:items-start"
          >
            <h1 className="text-balance text-center text-5xl font-semibold leading-[1.02] tracking-tight md:text-6xl lg:text-left lg:text-7xl">
              Building smart{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-copper font-bold">digital solutions</span>
                <span className="abso lute inset-x-0 -bottom-1 h-[6px] bg-copper/20 blur-md" />
              </span>{" "}
              for real-world industries.
            </h1>

            <p className="text-center text-base leading-relaxed text-muted-foreground md:text-lg lg:text-left">
              We design and develop technology that simplifies operations, improves efficiency, and
              gives businesses complete control over the workflows that drive their growth.
            </p>

            <div className="mt-2 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <PartnerButton />
              <CTAButton to="/services" variant="ghost">
                Explore services
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

/* -------------------------- Trusted Partners Marquee -------------------------- */

const PARTNERS = [
  "Microsoft",
  "Google Cloud",
  "AWS",
  "Salesforce",
  "Oracle",
  "SAP",
  "IBM",
  "Cisco",
  "Adobe",
  "Shopify",
  "HubSpot",
  "Twilio",
];

function TrustedPartners() {
  const strip = [...PARTNERS, ...PARTNERS];
  return (
    <section className="relative overflow-hidden bg-copper py-5">
      <div className="flex animate-marquee whitespace-nowrap">
        {strip.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="mx-10 inline-flex items-center gap-3 text-lg font-semibold tracking-wide text-white/90 md:mx-14 md:text-xl"
          >
            <span className="h-2 w-2 rounded-full bg-white/60" />
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}

/* -------------------------- What We Do (summary) -------------------------- */

const WHAT_WE_DO = [
  {
    icon: Code2,
    title: "Custom Software",
    desc: "Tailored enterprise solutions designed to solve specific industry bottlenecks and scale with your operations.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Powerful, offline-first mobile tools that empower field and site operations across iOS and Android.",
  },
  {
    icon: Cog,
    title: "Workflow Automation",
    desc: "Eliminating manual errors by digitizing fragmented communication, approvals and reporting.",
  },
  {
    icon: Brain,
    title: "AI-Based Solutions",
    desc: "Future-ready intelligence layers that provide predictive insights for growth and efficiency.",
  },
];

function WhatWeDo() {
  return (
    <section id="what-we-do" className="relative py-20 md:py-28">
      <Container className="relative">
        {/* Glassy copper-tinted section card — no shadow */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-copper/8 backdrop-blur-2xl border border-copper/15 px-6 pt-16 pb-44 md:px-12 md:pt-20 md:pb-56">
          {/* Subtle warm glow */}
          <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-80 -translate-x-1/2 rounded-full bg-copper/10 blur-[120px]" />

          {/* Heading — centered */}
          <div className="relative mx-auto max-w-3xl text-center">
            <Eyebrow>What We Do</Eyebrow>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.05] tracking-tight md:text-4xl lg:text-5xl">
              We bridge complex operational challenges with{" "}
              <span className="text-copper font-bold">simple digital experiences.</span>
            </h2>
            <p className="mt-5 max-w-xl mx-auto text-base text-muted-foreground">
              Four core capabilities designed to transform how your business operates, scales, and
              grows.
            </p>
          </div>
        </div>

        {/* Service cards — pulled up to overlap bottom of glassy card, sitting on top */}
        <div className="relative z-10 -mt-28 md:-mt-36 px-4 md:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHAT_WE_DO.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col items-center rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_50px_rgba(0,0,0,0.1)] md:p-7"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-copper/10 text-copper">
                  <s.icon className="h-6 w-6" />
                </div>

                {/* Heading */}
                <h3 className="mt-4 text-center text-base font-semibold tracking-tight text-foreground">
                  {s.title}
                </h3>

                {/* Details — centered */}
                <p className="mt-2 text-center text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>

                {/* Learn More link */}
                <Link
                  to="/services"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-copper transition-colors hover:text-copper-glow"
                >
                  Learn More
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* --------------------------------- Vision --------------------------------- */

function Vision() {
  return (
    <section className="relative border-y border-border/60 bg-surface py-20 md:py-28">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <Eyebrow>The Vision</Eyebrow>
            <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              Solving real operational <span className="text-copper font-bold">problems</span> with
              technology.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-6 text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            <p>
              DZ Infotech was founded with the vision of solving real operational problems using
              technology. We focus on building practical, scalable solutions that help businesses
              gain control, visibility and efficiency.
            </p>
            <p>
              We believe that technology shouldn't be complex; it should be an enabler. By observing
              daily struggles in industries like construction, we've learned how to build tools that
              users actually want to use.
            </p>
            <div className="mt-4">
              <CTAButton to="/about" variant="ghost">
                Our story
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

/* --------------------------- Projects Slider --------------------------- */

const PROJECTS = [
  {
    image: projConstruction,
    tag: "Custom Software",
    title: "Construction OS",
    client: "For a multi-site construction group",
    impact: "38% faster project closeouts",
    desc: "A unified operations platform replacing 6 spreadsheets — attendance, material tracking, progress reporting and approvals in one dashboard.",
  },
  {
    image: projFieldApp,
    tag: "Mobile App",
    title: "FieldPulse",
    client: "For a facility services company",
    impact: "60% drop in paperwork hours",
    desc: "Offline-first mobile app for 200+ field engineers — job cards, GPS check-ins, photo evidence and instant sync when back online.",
  },
  {
    image: projLogistics,
    tag: "Workflow Automation",
    title: "FleetFlow",
    client: "For a regional logistics operator",
    impact: "22% lower dispatch cost",
    desc: "Automated shipment routing, live fleet visibility and exception alerts — eliminating manual dispatch calls and reconciliation delays.",
  },
  {
    image: projAI,
    tag: "AI & Data",
    title: "PredictOps",
    client: "For a precision manufacturing plant",
    impact: "45% less unplanned downtime",
    desc: "Predictive maintenance layer over legacy PLC data — machine health scoring, anomaly alerts and root-cause dashboards for plant heads.",
  },
];

function ProjectsSlider() {
  const total = PROJECTS.length;
  const [index, setIndex] = useState(0); // content index 0..3
  const [pos, setPos] = useState(1); // track position 0..5
  const [noAnim, setNoAnim] = useState(false);
  const [paused, setPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const resetRef = useRef<number | null>(null);

  // Infinite track: [last clone, P0, P1, P2, P3, first clone]
  const track = [PROJECTS[total - 1], ...PROJECTS, PROJECTS[0]];

  const go = (dir: -1 | 1) => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    if (resetRef.current) {
      window.clearTimeout(resetRef.current);
      resetRef.current = null;
    }

    if (dir === 1 && index === total - 1) {
      setIndex(0);
      setPos(total + 1); // 5
      resetRef.current = window.setTimeout(() => {
        setNoAnim(true);
        setPos(1);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setNoAnim(false);
            setIsTransitioning(false);
          });
        });
      }, 700);
    } else if (dir === -1 && index === 0) {
      setIndex(total - 1);
      setPos(0);
      resetRef.current = window.setTimeout(() => {
        setNoAnim(true);
        setPos(total); // 4
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setNoAnim(false);
            setIsTransitioning(false);
          });
        });
      }, 700);
    } else {
      setIndex((prev) => (prev + dir + total) % total);
      setPos((prev) => prev + dir);
      resetRef.current = window.setTimeout(() => {
        setIsTransitioning(false);
      }, 700);
    }
  };

  const goTo = (i: number) => {
    if (isTransitioning) return;
    if (i === index) return;
    setIsTransitioning(true);

    if (resetRef.current) {
      window.clearTimeout(resetRef.current);
      resetRef.current = null;
    }

    setIndex(i);
    setPos(i + 1);
    resetRef.current = window.setTimeout(() => {
      setIsTransitioning(false);
    }, 700);
  };

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => go(1), 4500);
    return () => {
      window.clearInterval(id);
    };
  }, [paused, index, isTransitioning]);

  useEffect(() => {
    return () => {
      if (resetRef.current) {
        window.clearTimeout(resetRef.current);
      }
    };
  }, []);

  const current = PROJECTS[index];

  return (
    <section
      id="projects"
      className="relative overflow-hidden py-20 text-neutral-900 md:py-28"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(255,255,255,0.90), rgba(255,255,255,0.95)), url(${projectsBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[600px] rounded-full bg-copper/10 blur-[160px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 h-[400px] w-[500px] rounded-full bg-copper/5 blur-[140px]" />

      <div className="relative mx-auto mb-16 max-w-4xl text-center">
        <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-neutral-900 md:text-5xl lg:text-6xl">
          Projects delivered with{" "}
          <span className="text-copper font-bold">measurable business impact.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-12 px-5 md:px-8 lg:grid-cols-[1fr_minmax(0,648px)_minmax(0,792px)_1fr] lg:gap-x-12 lg:px-0 lg:items-center">
        {/* Left: text + controls */}
        <div className="relative flex flex-col gap-6 lg:col-start-2 lg:col-span-1 lg:pl-8">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-2 flex flex-col gap-3"
          >
            <span className="inline-flex w-fit rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs uppercase tracking-wide text-neutral-600">
              {current.tag}
            </span>
            <h3 className="text-3xl font-bold text-copper md:text-4xl">{current.title}</h3>
            <p className="text-sm text-neutral-500">{current.client}</p>
            <p className="mt-1 max-w-md text-base leading-relaxed text-neutral-600 md:text-lg">
              {current.desc}
            </p>
            <div className="mt-3 inline-flex w-fit items-center gap-2 rounded-lg border border-copper/40 bg-copper/10 px-4 py-2 text-sm font-medium text-copper">
              <span className="h-1.5 w-1.5 rounded-full bg-copper" />
              {current.impact}
            </div>
          </motion.div>

          <div className="mt-6 flex items-center gap-3">
            <button
              onClick={() => go(-1)}
              aria-label="Previous project"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition-all hover:border-copper hover:bg-copper hover:text-white"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next project"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition-all hover:border-copper hover:bg-copper hover:text-white"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
            <div className="ml-4 flex gap-1.5">
              {PROJECTS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to project ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-8 bg-copper" : "w-4 bg-neutral-300 hover:bg-neutral-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right: image slider — clipped to its own column */}
        <div className="relative w-full overflow-hidden lg:col-start-3 lg:col-span-2">
          <div
            className="flex gap-5"
            style={{
              transform: `translateX(calc(-${pos} * (70% + 20px)))`,
              transition: noAnim ? "none" : "transform 700ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            {track.map((p, i) => {
              const contentIdx = (i - 1 + total) % total;
              const isActive = contentIdx === index;
              return (
                <motion.button
                  key={`${p.title}-${i}`}
                  onClick={() => {
                    if (isTransitioning) return;
                    if (contentIdx === index) return;
                    setIsTransitioning(true);
                    setIndex(contentIdx);
                    setPos(i);

                    if (resetRef.current) {
                      window.clearTimeout(resetRef.current);
                      resetRef.current = null;
                    }

                    if (i === 0) {
                      resetRef.current = window.setTimeout(() => {
                        setNoAnim(true);
                        setPos(total);
                        requestAnimationFrame(() => {
                          requestAnimationFrame(() => {
                            setNoAnim(false);
                            setIsTransitioning(false);
                          });
                        });
                      }, 700);
                    } else if (i === total + 1) {
                      resetRef.current = window.setTimeout(() => {
                        setNoAnim(true);
                        setPos(1);
                        requestAnimationFrame(() => {
                          requestAnimationFrame(() => {
                            setNoAnim(false);
                            setIsTransitioning(false);
                          });
                        });
                      }, 700);
                    } else {
                      resetRef.current = window.setTimeout(() => {
                        setIsTransitioning(false);
                      }, 700);
                    }
                  }}
                  animate={{ scale: isActive ? 1 : 0.88, opacity: isActive ? 1 : 0.45 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative aspect-3/4 w-[70%] shrink-0 overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100 text-left shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)]"
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    width={1000}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-1200 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-xs uppercase tracking-wide text-white/70">{p.tag}</p>
                    <p className="mt-1 text-xl font-semibold text-white">{p.title}</p>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Why Choose Us ------------------------------ */

const REASONS = [
  {
    title: "Deep Industry Expertise",
    desc: "We don't just write code — we understand construction, logistics, and manufacturing workflows to build solutions that actually fit.",
    bg: "bg-foreground",
    text: "text-background",
    sub: "text-background/70",
    ring: "border-background/40",
  },
  {
    title: "End-to-End Partnership",
    desc: "From discovery and design to deployment and scaling, we stay invested in your success long after the first release.",
    bg: "bg-copper",
    text: "text-white",
    sub: "text-white/80",
    ring: "border-white/50",
  },
  {
    title: "Future-Ready Architecture",
    desc: "Scalable, cloud-native systems built with modern tech so your platform grows as fast as your business does.",
    bg: "bg-surface-2",
    text: "text-foreground",
    sub: "text-foreground/70",
    ring: "border-foreground/40",
  },
  {
    title: "Transparent Communication",
    desc: "Weekly demos, clear timelines, and direct access to the team — no opaque processes or hidden surprises.",
    bg: "bg-foreground",
    text: "text-background",
    sub: "text-background/70",
    ring: "border-background/40",
  },
  {
    title: "Local Presence, Global Standards",
    desc: "Based in Gujarat with delivery practices that match world-class engineering teams around the globe.",
    bg: "bg-copper",
    text: "text-white",
    sub: "text-white/80",
    ring: "border-white/50",
  },
];

const STATS = [
  { value: "90%", label: "Client satisfaction" },
  { value: "180+", label: "Project Successfully Done" },
  { value: "10K+", label: "Overall Revenue Raised" },
];

// Card width + gap (px) — must stay in sync with card w-[280px]/md:w-[320px] + gap-5 (20px)
const CARD_W_MOBILE = 280 + 20;
const CARD_W_DESKTOP = 320 + 20;
// How much of a past (already-covered) card peeks out from the left
const PEEK_MOBILE = 22;
const PEEK_DESKTOP = 28;

function WhyChooseUs() {
  const [index, setIndex] = useState(0);
  const [cardStep, setCardStep] = useState(CARD_W_DESKTOP);
  const [peek, setPeek] = useState(PEEK_DESKTOP);

  useEffect(() => {
    const update = () => {
      const isDesktop = window.innerWidth >= 768;
      setCardStep(isDesktop ? CARD_W_DESKTOP : CARD_W_MOBILE);
      setPeek(isDesktop ? PEEK_DESKTOP : PEEK_MOBILE);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const go = (dir: -1 | 1) => {
    setIndex((prev) => Math.max(0, Math.min(REASONS.length - 1, prev + dir)));
  };

  return (
    <section id="why-us" className="relative bg-white py-20 md:py-28">
      <Container className="relative">
        {/* Glassy copper-tinted section card */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-copper/8 backdrop-blur-2xl border border-copper/15 px-6 pt-16 pb-56 md:px-12 md:pt-20 md:pb-64">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-80 -translate-x-1/2 rounded-full bg-copper/10 blur-[120px]" />

          <div className="relative flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <Eyebrow>Why Choose DZ Infotech</Eyebrow>
              <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.05] tracking-tight md:text-4xl lg:text-5xl">
                Built different. <span className="text-copper font-bold">Built for you.</span>
              </h2>
              <p className="mt-5 max-w-xl text-base text-muted-foreground">
                Five reasons teams trust us to turn their operational challenges into competitive
                advantages.
              </p>
            </div>

            {/* Slider controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => go(-1)}
                aria-label="Previous"
                disabled={index === 0}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background transition-all hover:bg-copper disabled:opacity-40"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Next"
                disabled={index === REASONS.length - 1}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background transition-all hover:bg-copper disabled:opacity-40"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Cards slider — stacked deck: past cards peek from left, active on top, future queued to the right */}
        <div className="relative z-10 -mt-40 md:-mt-48 overflow-hidden px-2 md:px-6">
          <div className="relative" style={{ height: 280 }}>
            {REASONS.map((r, i) => {
              const offset = i - index;
              // Past (offset < 0): stack on the left, only `peek` px visible per card
              // Active (offset === 0): rests flush against the last peek slot
              // Future (offset > 0): queued at full card width to the right of active
              const activeX = Math.min(index, REASONS.length - 1) * peek;
              const x =
                offset < 0
                  ? (index + offset) * peek // = i * peek
                  : activeX + offset * cardStep;
              const zIndex =
                offset <= 0
                  ? 100 + offset // active highest, older cards below
                  : 100 - offset; // future cards below active, descending
              return (
                <motion.div
                  key={r.title}
                  className={`${r.bg} ${r.text} absolute top-0 left-0 flex min-h-[280px] w-[280px] md:w-[320px] flex-col rounded-2xl p-7`}
                  animate={{ x }}
                  style={{ zIndex }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full border ${r.ring} text-sm font-semibold`}
                  >
                    {i + 1}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{r.title}</h3>
                  <p className={`mt-3 text-sm leading-relaxed ${r.sub}`}>{r.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 flex flex-col items-center justify-center gap-8 border-y border-copper/15 py-12 md:flex-row md:gap-0"
        >
          {STATS.map((s, i) => (
            <div key={s.label} className="flex items-center">
              <div className="flex flex-col items-center px-12 md:px-16">
                <span className="text-5xl font-semibold tracking-tight text-foreground md:text-6xl">
                  {s.value}
                </span>
                <span className="mt-2 text-sm text-muted-foreground">{s.label}</span>
              </div>
              {i < STATS.length - 1 && <div className="hidden h-16 w-px bg-copper/20 md:block" />}
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

/* ------------------------------ Client Reviews ------------------------------ */

const REVIEWS = [
  {
    quote: "DZ Infotech transformed how we manage our construction sites.",
    author: "Rajesh Patel",
    role: "Director",
    company: "Multi-Site Construction",
    rating: 5,
  },
  {
    quote: "Our field team loves the mobile app. Offline-first was a game-changer.",
    author: "Priya Sharma",
    role: "Head of Operations",
    company: "Facility Services",
    rating: 5,
  },
  {
    quote: "The AI predictive maintenance saved us weeks of downtime.",
    author: "Amit Desai",
    role: "Plant Manager",
    company: "Precision Mfg",
    rating: 5,
  },
  {
    quote: "Professional, responsive, deeply technical. On time and within budget.",
    author: "Sneha Iyer",
    role: "Logistics Director",
    company: "Regional Logistics",
    rating: 5,
  },
];

const REVIEW_AVATARS = {
  rajesh: avatarRajesh,
  priya: avatarPriya,
  amit: avatarAmit,
  sneha: avatarSneha,
  vikram: avatarVikram,
  workspace: avatarWorkspace,
  unbox: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=600&h=800&fit=crop",
};

function GlassCard({
  children,
  className = "",
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={style}
      className={`rounded-2xl border border-white/10 bg-white backdrop-blur-xl shadow-[0_10px_30px_-20px_rgba(0,0,0,0.6)] ${className}`}
    >
      {children}
    </div>
  );
}

function Stars({ n = 5, size = "h-3.5 w-3.5" }: { n?: number; size?: string }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} className={`${size} fill-copper-glow text-copper-glow`} />
      ))}
    </div>
  );
}

function ClientReviews() {
  return (
    <section id="reviews" className="relative overflow-hidden py-20 md:py-28 bg-surface">
      <Container className="relative">
        {/* Header */}
        <div className="mb-14 flex flex-col items-center gap-3 text-center md:mb-20">
          <Eyebrow>Client Reviews</Eyebrow>
          <h2 className="mt-2 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-neutral-900 md:text-5xl lg:text-6xl">
            Don't just take our word for it.{" "}
            <span className="bg-linear-to-r from-copper to-neutral-700 bg-clip-text text-transparent font-bold">
              Hear from our partners.
            </span>
          </h2>
        </div>

        {/* Scattered collage — desktop absolute, mobile stacked grid */}
        <div className="relative mx-auto hidden lg:block" style={{ height: 720, maxWidth: 1200 }}>
          {/* Vertical tall card top-left */}
          <GlassCard
            className="absolute overflow-hidden p-5"
            style={{ left: "2%", top: 60, width: 200, height: 400 }}
          >
            <div className="flex flex-col gap-3">
              <Stars />
              <p className="text-sm font-semibold text-neutral-900 leading-snug">
                Highly satisfied with our platform, thank you!
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="rounded-full bg-copper/10 px-2 py-0.5 text-[10px] font-medium text-copper">
                  On time
                </span>
                <span className="rounded-full bg-copper/10 px-2 py-0.5 text-[10px] font-medium text-copper">
                  Reliable
                </span>
                <span className="rounded-full bg-copper/10 px-2 py-0.5 text-[10px] font-medium text-copper">
                  Great team
                </span>
              </div>
              <p className="text-[11px] text-neutral-500">– Rajesh Patel</p>
            </div>
            <div className="mt-4 -mx-5 -mb-5 h-[180px] overflow-hidden">
              <img src={REVIEW_AVATARS.workspace} alt="" className="h-full w-full object-cover" />
            </div>
          </GlassCard>

          {/* Wide quote card top-center */}
          <GlassCard className="absolute p-5" style={{ left: "23%", top: 20, width: 290 }}>
            <div className="mb-2 flex items-center gap-3">
              <img
                src={REVIEW_AVATARS.priya}
                alt=""
                className="h-9 w-9 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="text-xs font-semibold text-neutral-900">Priya & Team</p>
              </div>
              <span className="text-[10px] font-semibold text-copper">★ 5.0/5.0</span>
            </div>
            <p className="text-sm leading-relaxed text-neutral-700">
              I absolutely love the mobile app they built. The offline-first design has been a
              game-changer for our field engineers.
            </p>
            <p className="mt-2 text-[11px] font-medium text-copper">▾ Read more</p>
          </GlassCard>

          {/* Small quote center-top */}
          <GlassCard className="absolute p-4" style={{ left: "50%", top: 40, width: 180 }}>
            <Quote className="h-4 w-4 text-neutral-400" />
            <p className="mt-1 text-xs leading-relaxed text-neutral-700">
              The custom platform was delivered ahead of schedule. Their attention to detail is
              unmatched.
            </p>
            <div className="mt-3 flex items-center gap-2">
              <Stars n={5} size="h-2.5 w-2.5" />
              <div className="ml-auto flex items-center gap-1.5">
                <img
                  src={REVIEW_AVATARS.amit}
                  alt=""
                  className="h-6 w-6 rounded-full object-cover"
                />
                <div>
                  <p className="text-[10px] font-semibold text-neutral-900">Amit Desai</p>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Big image + title card top-right */}
          <GlassCard
            className="absolute overflow-hidden p-0"
            style={{ right: "8%", top: 30, width: 300, height: 190 }}
          >
            <div className="flex h-full">
              <div className="flex flex-1 flex-col justify-around p-4">
                <div>
                  <p className="text-lg font-semibold leading-tight text-neutral-900">
                    Incredible service
                  </p>
                  <p className="mt-1 text-[11px] text-neutral-600">
                    Perfect, exceeded expectations
                  </p>
                </div>
                <Stars n={5} size="h-3 w-3" />
              </div>
              <img src={REVIEW_AVATARS.sneha} alt="" className="h-full w-[45%] object-cover" />
            </div>
          </GlassCard>

          {/* Featured big quote center */}
          <GlassCard className="absolute p-6" style={{ left: "21%", top: 250, width: 270 }}>
            <div className="flex items-center gap-3">
              <img
                src={REVIEW_AVATARS.amit}
                alt=""
                className="h-11 w-11 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="text-sm font-semibold text-neutral-900">Amit Desai</p>
                <p className="text-[11px] text-neutral-500">Plant Manager, PrecisionMfg</p>
              </div>
              <Stars n={5} size="h-3 w-3" />
            </div>
            <h3 className="mt-4 text-xl font-semibold leading-snug text-neutral-900 md:text-2xl">
              Prompt and helpful responses to my inquiry!
            </h3>
            <p className="mt-2 text-sm text-neutral-600">Superb quality, impressed.</p>
          </GlassCard>

          {/* Small rating pill */}
          <GlassCard className="absolute px-4 py-3" style={{ left: "50%", top: 240, width: 220 }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-neutral-900">Service Rating</p>
                <p className="text-[10px] text-neutral-500">(5/5) from 180+ clients</p>
              </div>
              <span className="rounded-full bg-copper/10 px-2 py-1 text-[10px] font-bold text-copper">
                99+
              </span>
            </div>
          </GlassCard>

          {/* Search-like pill */}
          <GlassCard
            className="absolute flex items-center gap-2 px-3 py-2"
            style={{ left: "48%", top: 320, width: 220 }}
          >
            <span className="flex-1 text-xs text-neutral-700">Client Reviews</span>
            <span className="rounded-md bg-copper px-2 py-1 text-[10px] font-medium text-white">
              Search
            </span>
          </GlassCard>

          {/* Wide horizontal card bottom-left */}
          <GlassCard className="absolute p-5" style={{ left: "2%", top: 520, width: 290 }}>
            <Stars n={5} />
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Professional, responsive, and deeply technical. They delivered exactly what we
              envisioned — on time and within budget.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <img
                src={REVIEW_AVATARS.sneha}
                alt=""
                className="h-9 w-9 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="text-xs font-semibold text-neutral-900">Sneha Iyer</p>
                <p className="text-[10px] text-neutral-500">Logistics Director</p>
              </div>
              <span className="rounded-full bg-copper/10 px-2 py-0.5 text-[10px] font-medium text-copper">
                Verified
              </span>
            </div>
          </GlassCard>

          {/* Feedback slider card */}
          <GlassCard className="absolute p-4" style={{ left: "31%", top: 530, width: 180 }}>
            <div className="mb-2 flex items-center justify-between">
              <p className="text-xs font-semibold text-neutral-900">Your Feedback</p>
              <span className="rounded-full bg-copper px-2 py-0.5 text-[10px] font-bold text-white">
                100
              </span>
            </div>
            <div className="relative h-1.5 rounded-full bg-neutral-200">
              <div className="absolute inset-y-0 left-0 w-full rounded-full bg-linear-to-r from-copper to-copper-glow" />
              <div className="absolute -top-1 right-0 h-3.5 w-3.5 -translate-x-1 rounded-full border-2 border-copper bg-white" />
            </div>
          </GlassCard>

          {/* Great offers vertical card */}
          <GlassCard
            className="absolute p-5"
            style={{ left: "50%", top: 390, width: 240, height: 320 }}
          >
            <div className="flex items-center justify-between">
              <p className="text-[10px] text-neutral-500">~ Vikram Shah</p>
            </div>
            <h4 className="mt-2 text-xl font-semibold text-neutral-900">Great value</h4>
            <p className="mt-2 text-xs leading-relaxed text-neutral-600">
              Pellentesque results delivered by the DZ team — their workflow automation cut our
              manual reporting in half within the first month of deployment.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <Stars n={5} size="h-3 w-3" />
              <p className="text-[10px] text-neutral-500">(5.0) All Client Score</p>
            </div>
          </GlassCard>

          {/* Amazing product card right */}
          <GlassCard
            className="absolute p-5 text-center"
            style={{ right: "8%", top: 260, width: 240, height: 200 }}
          >
            <img
              src={REVIEW_AVATARS.vikram}
              alt=""
              className="mx-auto h-16 w-16 rounded-full border-2 border-copper object-cover"
            />
            <h4 className="mt-3 text-lg font-semibold text-neutral-900">Amazing Product!</h4>
            <p className="mt-2 text-xs leading-relaxed text-neutral-600">
              When it comes to quality, this product is top-notch.
            </p>
          </GlassCard>
        </div>

        {/* Mobile stacked layout */}
        <div className="grid gap-4 lg:hidden">
          {REVIEWS.map((r) => (
            <GlassCard key={r.author} className="p-5">
              <Stars n={r.rating} />
              <p className="mt-3 text-sm leading-relaxed text-neutral-700">{r.quote}</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-copper/10 text-xs font-bold text-copper">
                  {r.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-xs font-semibold text-neutral-900">{r.author}</p>
                  <p className="text-[10px] text-neutral-500">
                    {r.role}, {r.company}
                  </p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------- Final CTA ------------------------------- */

function FinalCTA() {
  return (
    <section className="relative py-20 md:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-4xl border border-border bg-surface p-10 md:p-20">
          {/* Calm real-world background image */}
          <img
            src={ctaBg}
            alt=""
            width={1920}
            height={640}
            loading="lazy"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          />
          {/* Soft overlay so text stays crisp across every area of the photo */}
          <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-background/85 via-background/50 to-background/80" />

          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-copper/15 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-copper/10 blur-[140px]" />
          <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
            <Eyebrow>Ready to build with us</Eyebrow>
            <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              Ready to digitize your industry?
            </h2>
            <p className="max-w-xl text-base text-muted-foreground md:text-lg">
              Join the growing list of businesses scaling with DZ Infotech intelligence.
            </p>
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <PartnerButton />
              <CTAButton to="/services" variant="ghost">
                See services
              </CTAButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* --------------------------------- Page --------------------------------- */

function Home(): ReactNode {
  return (
    <PageShell>
      <Hero />
      <TrustedPartners />
      <WhatWeDo />
      <Vision />
      <ProjectsSlider />
      <WhyChooseUs />
      <ClientReviews />
      <FinalCTA />
    </PageShell>
  );
}
