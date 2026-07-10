import { Container, Eyebrow } from "@/components/site";
import { PROCESS_STEPS } from "@/constants/services";

export default function ServicesProcess() {
  return (
    <section className="py-20 md:py-28 bg-surface overflow-hidden">
      <Container>
        <div className="mb-14 flex flex-col items-center gap-3 text-center md:mb-20">
          <Eyebrow>How We Work</Eyebrow>
          <h2 className="mt-2 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Our Development <span className="text-copper font-bold">Process</span>
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-base text-muted-foreground">
            A structured roadmap built to guarantee operational continuity, rigorous testing, and
            flawless delivery.
          </p>
        </div>

        {/* Desktop alternating horizontal timeline */}
        <div className="hidden md:block relative py-12">
          {/* Horizontal Center Line */}
          <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-copper/35 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-7 gap-4 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const isTop = idx % 2 === 0;
              return (
                <div key={step.name} className="flex flex-col items-center text-center">
                  {isTop ? (
                    /* Top Step Content Block */
                    <div className="flex flex-col items-center justify-end h-[180px] mb-px">
                      {/* Circle Node with Icon */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="font-mono text-xs font-bold text-copper/60">
                          {idx + 1}.
                        </span>
                        <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-copper text-copper bg-white hover:scale-105 transition-transform duration-300 shadow-[0_4px_12px_rgba(var(--copper),0.05)]">
                          <step.icon className="h-6 w-6" />
                        </div>
                      </div>
                      {/* Text Information */}
                      <div className="px-2">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-foreground font-display">
                          {step.name}
                        </h4>
                        <p className="text-[11px] text-muted-foreground mt-1.5 max-w-[125px] mx-auto leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                      {/* Vertical Connector Line */}
                      <div className="w-[2px] h-8 bg-copper/30 mt-4" />
                    </div>
                  ) : (
                    /* Empty Spacer to align bottom steps */
                    <div className="h-[180px]" />
                  )}

                  {/* Connection Dot on the Horizontal Line */}
                  <div className="h-3.5 w-3.5 rounded-full bg-white border-2 border-copper z-20 shadow-xs" />

                  {!isTop ? (
                    /* Bottom Step Content Block */
                    <div className="flex flex-col items-center justify-start h-[180px] mt-px">
                      {/* Vertical Connector Line */}
                      <div className="w-[2px] h-8 bg-copper/30 mb-4" />
                      {/* Text Information */}
                      <div className="px-2 mb-3">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-foreground font-display">
                          {step.name}
                        </h4>
                        <p className="text-[11px] text-muted-foreground mt-1.5 max-w-[125px] mx-auto leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                      {/* Circle Node with Icon */}
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-copper/60">
                          {idx + 1}.
                        </span>
                        <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-copper text-copper bg-white hover:scale-105 transition-transform duration-300 shadow-[0_4px_12px_rgba(var(--copper),0.05)]">
                          <step.icon className="h-6 w-6" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Empty Spacer to align top steps */
                    <div className="h-[180px]" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile alternating vertical timeline */}
        <div className="block md:hidden relative py-8 px-2">
          {/* Center Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-copper/35 -translate-x-1/2 z-0" />

          <div className="relative z-10 flex flex-col gap-6">
            {PROCESS_STEPS.map((step, idx) => {
              const isRight = idx % 2 === 0;
              return (
                <div
                  key={step.name}
                  className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 relative"
                >
                  {/* Left Column (Content or Empty Spacer) */}
                  <div
                    className={`flex flex-col ${
                      isRight ? "invisible pointer-events-none" : "items-end text-right px-1"
                    }`}
                  >
                    {!isRight && (
                      <>
                        <div className="flex items-center gap-2 justify-end mb-1">
                          <span className="font-mono text-xs font-bold text-copper/60">
                            {idx + 1}.
                          </span>
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-copper text-copper bg-white shadow-xs">
                            <step.icon className="h-5 w-5" />
                          </div>
                        </div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-foreground font-display">
                          {step.name}
                        </h4>
                        <p className="text-[10px] text-muted-foreground mt-1 max-w-[140px] leading-relaxed">
                          {step.desc}
                        </p>
                      </>
                    )}
                  </div>

                  {/* Middle Column (Center Line Connector) */}
                  <div className="flex items-center justify-center w-8 relative h-full">
                    {/* Connection Dot */}
                    <div className="h-3 w-3 rounded-full bg-white border-2 border-copper z-20 shadow-xs" />
                    {/* Horizontal extension line */}
                    <div
                      className={`absolute h-[2px] w-4 bg-copper/35 top-1/2 -translate-y-1/2 ${
                        isRight ? "left-1/2" : "right-1/2"
                      }`}
                    />
                  </div>

                  {/* Right Column (Content or Empty Spacer) */}
                  <div
                    className={`flex flex-col ${
                      !isRight ? "invisible pointer-events-none" : "items-start text-left px-1"
                    }`}
                  >
                    {isRight && (
                      <>
                        <div className="flex items-center gap-2 justify-start mb-1">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-copper text-copper bg-white shadow-xs">
                            <step.icon className="h-5 w-5" />
                          </div>
                          <span className="font-mono text-xs font-bold text-copper/60">
                            {idx + 1}.
                          </span>
                        </div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-foreground font-display">
                          {step.name}
                        </h4>
                        <p className="text-[10px] text-muted-foreground mt-1 max-w-[140px] leading-relaxed">
                          {step.desc}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
