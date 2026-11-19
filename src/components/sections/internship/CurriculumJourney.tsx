import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Container, SectionHeading } from "@/components/site";
import { CURRICULUM_PHASES } from "@/constants/internship";

export default function InternshipCurriculumJourney() {
  return (
    <section className="py-20 md:py-28 bg-white border-t border-border/40">
      <Container>
        <SectionHeading
          eyebrow="12-Week Roadmap"
          title={
            <>
              Your 3-Month{" "}
              <span className="text-copper font-bold">Learning & Building Journey</span>
            </>
          }
          subtitle="A progressive roadmap carefully crafted to take you from core engineering fundamentals to real project delivery."
          align="center"
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {CURRICULUM_PHASES.map((phase, idx) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative flex flex-col justify-between rounded-3xl border border-border/70 bg-[#fafafa] p-8 transition-all duration-300 hover:border-copper/40 hover:shadow-xl hover:bg-white"
            >
              <div>
                {/* Header Badge & Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-copper">
                      {phase.phase}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-border" />
                    <span className="text-2xs font-semibold text-muted-foreground uppercase tracking-wider">
                      {phase.tag}
                    </span>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-copper/20 bg-copper/5 text-copper">
                    <phase.icon className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="mt-6 text-xl font-bold tracking-tight text-foreground font-display">
                  {phase.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{phase.desc}</p>

                {/* Highlights List */}
                <div className="mt-8 space-y-3.5 border-t border-border/50 pt-6">
                  {phase.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-copper shrink-0 mt-0.5" />
                      <span className="text-xs leading-relaxed text-foreground/80">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Stage Indicator */}
              <div className="mt-8 pt-4 border-t border-border/40 flex items-center justify-between text-xs text-muted-foreground font-medium">
                <span>Milestone Stage 0{idx + 1}</span>
                <span className="text-copper font-semibold">
                  {idx === 0
                    ? "Interactive Foundations"
                    : idx === 1
                      ? "Individual Project"
                      : "Group Demo & Certificate"}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
