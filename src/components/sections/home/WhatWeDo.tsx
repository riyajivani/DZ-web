import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Container, Eyebrow } from "@/components/site";
import { WHAT_WE_DO } from "@/constants/home";

export default function HomeWhatWeDo() {
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

        {/* Service cards sitting on top */}
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
