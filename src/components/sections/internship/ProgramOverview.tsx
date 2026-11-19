import { motion } from "framer-motion";
import { Container, SectionHeading } from "@/components/site";
import { INTERNSHIP_PILLARS, INTERNSHIP_STATS } from "@/constants/internship";

export default function InternshipProgramOverview() {
  return (
    <section className="py-20 md:py-28 bg-[#fafafa] border-t border-border/40">
      <Container>
        {/* Top Stats Banner */}
        <div className="mb-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {INTERNSHIP_STATS.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border/60 bg-white p-6 text-center shadow-xs transition-all hover:border-copper/40 hover:shadow-md"
            >
              <div className="text-2xl md:text-3xl font-bold tracking-tight text-foreground font-display">
                <span className="text-copper">{s.value}</span>
              </div>
              <p className="mt-1 text-xs md:text-sm text-muted-foreground font-medium">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Section Heading */}
        <SectionHeading
          eyebrow="Program Architecture"
          title={
            <>
              What does this <span className="text-copper font-bold">internship offer?</span>
            </>
          }
          subtitle="Designed to transition students from classroom theory to production-grade engineering over 12 intensive weeks."
          align="center"
        />

        {/* Pillars Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {INTERNSHIP_PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative rounded-3xl border border-border/60 bg-white p-8 transition-all duration-300 hover:border-copper/50 hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-copper/20 bg-copper/5 text-copper transition-all duration-300 group-hover:scale-105 group-hover:bg-copper group-hover:text-white">
                    <pillar.icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full border border-copper/15 bg-copper/5 px-3 py-1 text-[11px] font-semibold text-copper">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold tracking-tight text-foreground font-display">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pillar.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/40 text-xs font-semibold text-copper flex items-center gap-1 opacity-80 group-hover:opacity-100">
                <span>Core Curriculum Feature</span>
                <span className="text-copper">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
