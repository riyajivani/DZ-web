import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";
import { Container, SectionHeading } from "@/components/site";
import { ROLES } from "@/constants/careers";

interface OpenRolesProps {
  setFormPosition: (title: string) => void;
}

export default function CareersOpenRoles({ setFormPosition }: OpenRolesProps) {
  return (
    <section id="roles" className="bg-white py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Open Positions"
          title={
            <>
              Open <span className="text-copper font-bold">opportunities.</span>
            </>
          }
          subtitle="Find the right role for your skillset and start your journey with a team of active builders."
        />
        <div className="mx-auto mt-12 grid gap-8 md:grid-cols-2 max-w-5xl">
          {ROLES.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`group relative flex flex-col justify-between rounded-3xl rounded-tr-none ${r.bgClass} p-8 md:p-10 hover:shadow-xl transition-all duration-500 min-h-[320px]`}
              >
                {/* The Custom Cut-out Corner block */}
                <div className="absolute -top-px -right-px w-[65px] h-[65px] bg-white z-20 rounded-bl-3xl">
                  {/* Circle Button with Arrow */}
                  <a
                    href="/careers#apply"
                    className={`absolute top-2 right-2 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-105 ${r.buttonBgClass}`}
                    onClick={() => setFormPosition(r.title)}
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </a>

                  {/* Concave Corner Top-Left */}
                  <div className="absolute top-0 -left-4 w-4 h-4 bg-white">
                    <div className={`w-full h-full ${r.innerBgClass} rounded-tr-2xl`} />
                  </div>

                  {/* Concave Corner Bottom-Right */}
                  <div className="absolute -bottom-4 right-0 w-4 h-4 bg-white">
                    <div className={`w-full h-full ${r.innerBgClass} rounded-tr-2xl`} />
                  </div>
                </div>

                <div>
                  {/* Circular Icon and Badge Row */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${r.iconBgClass}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <span
                      className={`rounded-full border px-3 py-0.5 text-2xs font-bold tracking-wider uppercase ${r.badgeClass}`}
                    >
                      {r.type}
                    </span>
                  </div>

                  <h3
                    className={`text-xl font-bold tracking-tight ${r.textClass} font-display mt-2`}
                  >
                    {r.title}
                  </h3>
                  <p className={`mt-3 text-sm leading-relaxed ${r.descClass}`}>{r.desc}</p>
                </div>

                <div
                  className={`mt-8 pt-6 border-t ${
                    r.bgClass === "bg-neutral-900" ? "border-neutral-800" : "border-border/40"
                  } flex items-center gap-1.5 text-xs ${r.metaClass} font-medium`}
                >
                  <MapPin className="h-3.5 w-3.5 text-copper" />
                  <span>{r.location}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
