import { Container, Eyebrow } from "@/components/site";
import { TECHS_ROW_1, TECHS_ROW_2 } from "@/constants/services";

export default function ServicesTechStack() {
  return (
    <section className="py-20 md:py-28  w-full bg-white overflow-hidden border-t border-border/40">
      <Container>
        <div className="mb-14 flex flex-col items-center gap-3 text-center md:mb-16">
          <Eyebrow>Our Stack</Eyebrow>
          <h2 className="mt-2 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Modern Technology <span className="text-copper font-bold">Stack</span>
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-base text-muted-foreground">
            We leverage reliable systems and lightweight modern frameworks to guarantee
            responsiveness and scalability.
          </p>
        </div>
      </Container>

      {/* Full-width Technology Horizontal Scroll Banners */}
      <div className="flex flex-col gap-6 relative w-full overflow-hidden mt-16">
        {/* Row 1: Scrolls Left */}
        <div className="relative w-full overflow-hidden py-2">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...TECHS_ROW_1, ...TECHS_ROW_1, ...TECHS_ROW_1, ...TECHS_ROW_1].map((tech, i) => {
              const Logo = tech.logo;
              return (
                <div
                  key={`${tech.name}-row1-${i}`}
                  className="mx-3 inline-flex items-center gap-3.5 px-6 py-3.5 rounded-2xl bg-background text-md font-bold tracking-wide text-foreground/80 md:mx-4 md:text-lg hover:scale-105 transition-transform duration-300 shadow-[0_3px_5px_rgba(0,0,0,0.15)]"
                >
                  <Logo />
                  {tech.name}
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 2: Scrolls Right */}
        <div className="relative w-full overflow-hidden py-2">
          <div className="flex animate-marquee-reverse whitespace-nowrap">
            {[...TECHS_ROW_2, ...TECHS_ROW_2, ...TECHS_ROW_2, ...TECHS_ROW_2].map((tech, i) => {
              const Logo = tech.logo;
              return (
                <div
                  key={`${tech.name}-row2-${i}`}
                  className="mx-3 inline-flex items-center gap-3.5 px-6 py-3.5 rounded-2xl bg-background text-md font-bold tracking-wide text-foreground/80 md:mx-4 md:text-lg hover:scale-105 transition-transform duration-300 shadow-[0_3px_5px_rgba(0,0,0,0.15)]"
                >
                  <Logo />
                  {tech.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
