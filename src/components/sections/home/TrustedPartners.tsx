import { PARTNERS } from "@/constants/home";

export default function HomeTrustedPartners() {
  const strip = [...PARTNERS, ...PARTNERS];
  return (
    <section className="relative overflow-hidden bg-copper/15 py-6">
      <div className="flex w-max animate-marquee whitespace-nowrap items-center">
        {strip.map((partner, i) => (
          <span
            key={`${partner.name}-${i}`}
            title={partner.name}
            className="mx-12 inline-flex items-center gap-4 transition-all duration-300 hover:scale-105"
          >
            {partner.logo && (
              <partner.logo className="h-10 md:h-12 w-auto max-w-[120px] object-contain hover:opacity-100 transition-all duration-300" />
            )}
            <span className="text-lg font-bold tracking-wide text-slate-700 hover:text-slate-950 md:text-xl">
              {partner.name}
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}
