import { Container, Eyebrow } from "@/components/site";
import { TIMELINE } from "@/constants/about";

export default function AboutTimeline() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <div className="mb-14 flex flex-col items-center gap-3 text-center md:mb-20">
          <Eyebrow>DZ Infotech Timeline</Eyebrow>
          <h2 className="mt-2 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Building the intelligence layer for{" "}
            <span className="text-copper font-bold">global industries.</span>
          </h2>
        </div>

        {/* Asymmetric Bento Grid (No Timeline) */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-12">
          {TIMELINE.map((t, i) => {
            const isWide = i === 0 || i === 5;
            return (
              <div
                key={t.title}
                className={`group relative rounded-3xl p-8 flex flex-col justify-between min-h-[260px] shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden text-left ${
                  t.bgImage
                    ? "bg-slate-950 border-transparent text-white"
                    : "bg-white border-transparent text-black"
                } ${isWide ? "md:col-span-2 lg:col-span-2" : "md:col-span-1 lg:col-span-1"}`}
              >
                {t.bgImage && (
                  <div className="absolute inset-0 z-0 pointer-events-none">
                    <img
                      src={t.bgImage}
                      alt={t.title}
                      className="w-full h-full object-cover object-top opacity-70 group-hover:opacity-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-white/30 via-white/20 to-white/5" />
                  </div>
                )}

                <div className="relative z-10">
                  <div
                    className={`inline-block text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-white/50 mb-4 shadow-xs`}
                  >
                    {t.when}
                  </div>

                  <h3
                    className={`text-2xl font-bold tracking-tight text-white transition-colors duration-300`}
                  >
                    {t.title}
                  </h3>
                </div>

                <p className={`mt-4 text-sm leading-relaxed relative z-10 text-slate-300`}>
                  {t.desc}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
