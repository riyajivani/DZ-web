import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/site";
import { SERVICES } from "@/constants/services";

export default function ServicesList() {
  return (
    <div className="bg-white pb-12 md:pb-16 text-foreground">
      <Container>
        <div className="flex flex-col">
          {SERVICES.map((s, i) => (
            <div key={s.title}>
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
                className="border-t border-border/60 py-16 grid grid-cols-1 gap-10 md:grid-cols-12 md:items-center md:py-24 md:px-12"
              >
                {/* Left Column: Title, Points, and Inquire button */}
                <div className="md:col-span-6 flex flex-col">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                      {s.title}
                    </h3>
                    <ul className="mt-8 space-y-3.5 text-sm font-medium text-muted-foreground">
                      {s.points.map((p) => (
                        <li
                          key={p}
                          className="hover:text-foreground transition-colors duration-200 cursor-default flex items-center gap-2"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-copper/40" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-6">
                    <Link
                      to="/partner"
                      className="inline-flex items-center gap-1 text-md font-bold text-copper hover:text-copper-glow transition-colors group"
                    >
                      Inquire now
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>

                {/* Right Column: Paragraph and Mockup Images Row */}
                <div className="md:col-span-6 flex flex-col justify-center">
                  <p className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-3xl">
                    {s.desc}
                  </p>

                  {/* Image Showcase (Single wide image) */}
                  <div className="mt-12 overflow-hidden rounded-2xl border border-border/60 bg-muted">
                    {s.images.map((img, imgIdx) => (
                      <img
                        key={imgIdx}
                        src={img}
                        alt={s.title}
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                        loading="lazy"
                      />
                    ))}
                  </div>
                </div>
              </motion.article>

              {/* Visual Break between every 2 services (inserted after 2nd service, index 1) */}
              {i === 1 && (
                <div className="py-16 my-8 flex flex-col items-center justify-center text-center">
                  <div className="w-24 h-px bg-border/60" />
                  <blockquote className="my-8 max-w-2xl text-xl md:text-2xl font-light italic text-muted-foreground px-4">
                    "Technology should simplify business, not complicate it."
                  </blockquote>
                  <div className="w-24 h-px bg-border/60" />
                </div>
              )}
            </div>
          ))}
          <div className="border-t border-border/60 w-full" />
        </div>
      </Container>
    </div>
  );
}
