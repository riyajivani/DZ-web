import { motion } from "framer-motion";
import { Container, Eyebrow, CTAButton } from "@/components/site";

export default function HomeVision() {
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
