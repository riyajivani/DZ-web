import { motion } from "framer-motion";
import { Container, SectionHeading } from "@/components/site";
import { WHY_INTERN } from "@/constants/internship";

export default function InternshipWhyJoin() {
  return (
    <section className="py-20 md:py-28 bg-[#fafafa] border-t border-border/40">
      <Container>
        <SectionHeading
          eyebrow="Student Advantages"
          title={
            <>
              Why complete your internship with{" "}
              <span className="text-copper font-bold">DZ Infotech?</span>
            </>
          }
          subtitle="Designed to bridge the gap between academic education and modern software engineering requirements."
          align="center"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {WHY_INTERN.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-3xl border border-border/60 bg-white p-8 flex flex-col justify-between transition-all duration-300 hover:border-copper/45 hover:shadow-xl"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-copper/20 bg-copper/5 text-copper">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-bold tracking-tight text-foreground font-display">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/30 text-xs text-muted-foreground font-medium">
                Pillar {String(i + 1).padStart(2, "0")}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
