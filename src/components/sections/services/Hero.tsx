import { Container } from "@/components/site";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export default function ServicesHero() {
  return (
    <div className="bg-white pt-24 pb-12 md:pt-28 md:pb-16 text-foreground">
      <Container>
        {/* Header Section */}
        <div className="relative">
          <h1 className="text-[12vw] font-bold tracking-tighter text-surface leading-[0.85] select-none md:text-[9vw]">
            Services
          </h1>

          <div className="border-t border-border/85 mt-4 mb-2" />

          <div className="flex justify-between items-center text-[10px]  text-muted-foreground uppercase tracking-widest py-1">
            <span>Engineering Excellence</span>
            <span>Next-Gen Systems</span>
          </div>

          <div className="border-t border-border/85 mt-2 mb-8" />
        </div>

        {/* Right Aligned Bracketed Intro Statement */}
        <div className="flex justify-end py-4 px-4 mb-10">
          <h2 className="max-w-3xl text-right text-lg font-medium tracking-tight text-muted-foreground md:text-xl leading-relaxed">
            [ We provide a range of top-quality services designed to help brands grow, connect, and
            stand out. With a focus on creativity, functionality, and results ]
          </h2>
        </div>

        {/* Minimal Statistic Section */}
        <div className="border-t border-b border-border/60 py-12 my-16 flex flex-col items-center gap-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-copper text-center">
            Delivering measurable results through thoughtful engineering.
          </p>

          {/* <div className="grid grid-cols-2 gap-y-8 gap-x-0 w-full md:flex md:items-center md:justify-between text-center"> */}
          {/* <div className="flex-1 px-4 border-r border-border/60 md:border-r-0">
              <div className="text-4xl font-extrabold text-copper tracking-tight md:text-5xl">
                <AnimatedCounter value="10+" />
              </div>
              <div className="mt-2 text-xs text-muted-foreground uppercase tracking-wider">
                Projects Delivered
              </div>
            </div> */}

            {/* Vertical divider (desktop only) */}
          {/* <div className="hidden md:block h-10 w-px bg-border/60 shrink-0" />

            <div className="flex-1 px-4">
              <div className="text-4xl font-extrabold text-copper tracking-tight md:text-5xl">
                <AnimatedCounter value="10+" />
              </div>
              <div className="mt-2 text-xs text-muted-foreground uppercase tracking-wider">
                Industries
              </div>
            </div> */}

            {/* Vertical divider (desktop only) */}
          {/* <div className="hidden md:block h-10 w-px bg-border/60 shrink-0" />

            <div className="flex-1 px-4 border-r border-border/60 md:border-r-0">
              <div className="text-4xl font-extrabold text-copper tracking-tight md:text-5xl">
                <AnimatedCounter value="98%" />
              </div>
              <div className="mt-2 text-xs text-muted-foreground uppercase tracking-wider">
                Client Satisfaction
              </div>
            </div> */}
          {/* </div> */}
        </div>

        {/* What We Build Intro Paragraph */}
        <div className="py-12 max-w-4xl mx-auto text-center md:py-16">
          <h2 className="text-xs  uppercase tracking-widest text-copper mb-4">What We Build</h2>
          <p className="text-xl md:text-2xl leading-relaxed text-foreground/90 font-light">
            We engineer bespoke digital systems that turn complex workflow operational challenges
            into fluid, reliable, and high-yielding user experiences. By bridging advanced software
            design with robust back-end architecture, we give modern enterprises the structural
            agility to scale effortlessly.
          </p>
        </div>
      </Container>
    </div>
  );
}
