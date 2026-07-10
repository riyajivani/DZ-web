import { Container } from "@/components/site";

export default function PartnerHero() {
  return (
    <div className="bg-white pt-24 pb-12 md:pt-28 md:pb-16 text-foreground">
      <Container>
        <div className="relative">
          <h1 className="text-[12vw] font-bold tracking-tighter text-surface leading-[0.85] select-none md:text-[9vw]">
            Partner
          </h1>

          <div className="border-t border-border/85 mt-4 mb-2" />

          <div className="flex justify-between items-center text-[10px] text-muted-foreground uppercase tracking-widest py-1">
            <span>Collaborate with us</span>
            <span>Transform ideas into code</span>
          </div>

          <div className="border-t border-border/85 mt-2 mb-8" />
        </div>

        {/* Right Aligned Bracketed Statement */}
        <div className="flex justify-end py-4 px-4 mb-10">
          <h2 className="max-w-3xl text-right text-lg font-medium tracking-tight text-muted-foreground md:text-xl leading-relaxed">
            [ Build bespoke technology that drives your enterprise. Team up with software
            architects, domain engineers, and agile builders to construct resilient digital systems.
            ]
          </h2>
        </div>
      </Container>
    </div>
  );
}
