import { Target, Eye } from "lucide-react";
import { Container } from "@/components/site";

export default function AboutMissionVision() {
  return (
    <section className="py-20 md:py-16 bg-white">
      <Container>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              icon: Target,
              label: "Our Mission",
              body: "To digitally empower construction and infrastructure businesses by providing tools that solve real operational and financial challenges.",
              badge: "Empowerment",
              isVision: false,
            },
            {
              icon: Eye,
              label: "Our Vision",
              body: "To become the operating system for industries, where every workflow is digital, every cost is tracked, and every decision is data-driven.",
              badge: "Innovation",
              isVision: true,
            },
          ].map((c) => (
            <div
              key={c.label}
              className={`group relative rounded-3xl p-8 md:p-12 flex flex-col justify-between min-h-[300px] transition-all duration-300 overflow-hidden ${
                c.isVision ? "bg-blue-50/40" : "bg-surface"
              }`}
            >
              {/* Subtly animated large watermark icon in background */}
              <div
                className={`absolute right-6 bottom-6 transition-colors duration-500 pointer-events-none ${
                  c.isVision
                    ? "text-blue-500/5 group-hover:text-blue-500/4"
                    : "text-copper/1.5 group-hover:text-copper/3.5"
                }`}
              >
                <c.icon className="h-44 w-44 stroke-[0.5] translate-y-8 translate-x-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-700" />
              </div>

              {/* Tech blueprint dot grid */}
              <div
                className={`absolute inset-0 bg-size-[16px_16px] pointer-events-none opacity-[0.04] ${
                  c.isVision
                    ? "bg-[radial-gradient(var(--color-blue-500)_1px,transparent_2px)]"
                    : "bg-[radial-gradient(var(--color-copper)_1px,transparent_2px)]"
                }`}
              />

              {/* Concentric wireframe circles in top-left */}
              <div
                className={`absolute -left-12 -top-12 h-36 w-36 rounded-full border pointer-events-none group-hover:scale-110 transition-transform duration-700 ${
                  c.isVision ? "border-blue-500/5" : "border-copper/4"
                }`}
              />
              <div
                className={`absolute -left-16 -top-16 h-48 w-48 rounded-full border pointer-events-none group-hover:scale-105 transition-transform duration-700 ${
                  c.isVision ? "border-blue-500/3" : "border-copper/2"
                }`}
              />

              {/* Decorative background gradient glow */}
              <div
                className={`absolute -right-10 -bottom-10 h-40 w-40 rounded-full blur-3xl opacity-60 group-hover:scale-150 transition-transform duration-700 pointer-events-none ${
                  c.isVision
                    ? "bg-linear-to-br from-blue-500/10 to-transparent"
                    : "bg-linear-to-br from-copper/5 to-transparent"
                }`}
              />

              <div className="relative z-10">
                {/* Badge & Icon Row */}
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                      c.isVision ? "text-blue-600" : "text-copper"
                    }`}
                  >
                    <c.icon className="h-8 w-8 stroke-[1.5]" />
                  </div>
                  <span
                    className={`text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border transition-colors duration-300 ${
                      c.isVision
                        ? "text-blue-600 bg-blue-50 border-blue-100"
                        : "text-copper bg-copper/5 border-copper/10"
                    }`}
                  >
                    {c.badge}
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-bold tracking-tight text-foreground font-display">
                  {c.label}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground/90 max-w-md">
                  {c.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
