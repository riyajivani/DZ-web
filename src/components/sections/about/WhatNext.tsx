import { motion } from "framer-motion";
import { Container, Eyebrow, PartnerButton } from "@/components/site";
import { NEXT } from "@/constants/about";

export default function AboutWhatNext() {
  return (
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
            While our flagship remains our current focus, we are actively expanding the intelligence
            layer of our entire digital ecosystem.
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
              <div className="absolute inset-0 bg-[radial-gradient(rgba(184,134,11,0.02)_1px,transparent_1px)] bg-size-[16px_16px] pointer-events-none" />

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
            products to analyze massive datasets, monitor performance and guide businesses in making
            better operational and financial decisions.
          </p>
          <div className="mt-8 relative z-10">
            <PartnerButton />
          </div>
        </div>
      </Container>
    </section>
  );
}
