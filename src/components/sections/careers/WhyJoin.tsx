import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Container, SectionHeading } from "@/components/site";
import { WHY } from "@/constants/careers";

export default function CareersWhyJoin() {
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedIndex((prev) => (prev + 1) % WHY.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-[#fafafa] border-t border-border/40">
      <Container>
        <SectionHeading
          eyebrow="Culture"
          title={
            <>
              Why join <span className="text-copper font-bold">DZ Infotech?</span>
            </>
          }
          subtitle="Explore our core values and pillars that define what it is like to build technology with us."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {WHY.map((w, i) => {
            const isHighlighted = i === highlightedIndex;
            return (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`rounded-3xl border transition-all duration-300 p-8 flex flex-col justify-between min-h-[220px] bg-white ${
                  isHighlighted
                    ? "border-copper shadow-lg scale-[1.03]"
                    : "border-border/60 hover:border-copper/45 hover:shadow-lg"
                }`}
              >
                <div>
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-300 border-copper/30 bg-copper/5 text-copper ${
                      isHighlighted ? "animate-pulse" : ""
                    }`}
                  >
                    <w.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 text-lg font-bold tracking-tight text-foreground flex items-center gap-1.5">
                    <span>{w.title}</span>
                    {isHighlighted && (
                      <Star className="h-4 w-4 text-copper fill-copper animate-pulse" />
                    )}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
