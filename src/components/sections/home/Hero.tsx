import { motion } from "framer-motion";
import { Container, CTAButton, PartnerButton } from "@/components/site";
import heroImg from "@/assets/hero.jpg";

export default function HomeHero() {
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
                <span className="absolute inset-x-0 -bottom-1 h-[6px] bg-copper/20 blur-md" />
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
