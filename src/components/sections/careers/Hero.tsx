import { Container } from "@/components/site";

export default function CareersHero() {
  return (
    <div className="bg-white pt-24 pb-12 md:pt-28 md:pb-16 text-foreground">
      <Container>
        {/* Header Section */}
        <div className="relative">
          <h1 className="text-[12vw] font-bold tracking-tighter text-surface leading-[0.85] select-none md:text-[9vw]">
            Careers
          </h1>

          <div className="border-t border-border/85 mt-4 mb-2" />

          <div className="flex justify-between items-center text-[10px] text-muted-foreground uppercase tracking-widest py-1">
            <span>Join our team</span>
            <span>Build the Future</span>
          </div>

          <div className="border-t border-border/85 mt-2 mb-8" />
        </div>

        {/* Right Aligned Bracketed Intro Statement */}
        <div className="flex justify-end py-4 px-4 mb-10">
          <h2 className="max-w-3xl text-right text-lg font-medium tracking-tight text-muted-foreground md:text-xl leading-relaxed">
            [ Build technology that solves real-world problems. Grow with a team that values
            ownership, curiosity, and continuous learning. ]
          </h2>
        </div>
      </Container>
    </div>
  );
}
