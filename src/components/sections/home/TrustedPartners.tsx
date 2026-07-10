import { PARTNERS } from "@/constants/home";

export default function HomeTrustedPartners() {
  const strip = [...PARTNERS, ...PARTNERS];
  return (
    <section className="relative overflow-hidden bg-copper py-5">
      <div className="flex animate-marquee whitespace-nowrap">
        {strip.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="mx-10 inline-flex items-center gap-3 text-lg font-semibold tracking-wide text-white/90 md:mx-14 md:text-xl"
          >
            <span className="h-2 w-2 rounded-full bg-white/60" />
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
