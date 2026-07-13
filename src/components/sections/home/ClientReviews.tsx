import { type ReactNode } from "react";
import { Star, Quote } from "lucide-react";
import { Container, Eyebrow } from "@/components/site";
import { REVIEWS, REVIEW_AVATARS } from "@/constants/home";

function GlassCard({
  children,
  className = "",
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={style}
      className={`rounded-2xl border border-white/10 bg-white backdrop-blur-xl shadow-[0_10px_30px_-20px_rgba(0,0,0,0.6)] ${className}`}
    >
      {children}
    </div>
  );
}

function Stars({ n = 5, size = "h-3.5 w-3.5" }: { n?: number; size?: string }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} className={`${size} fill-copper-glow text-copper-glow`} />
      ))}
    </div>
  );
}

export default function HomeClientReviews() {
  return (
    <section id="reviews" className="relative overflow-hidden py-20 md:py-28 bg-surface">
      <Container className="relative">
        {/* Header */}
        <div className="mb-14 flex flex-col items-center gap-3 text-center md:mb-20">
          <Eyebrow>Client Reviews</Eyebrow>
          <h2 className="mt-2 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-neutral-900 md:text-5xl lg:text-6xl">
            Don't just take our word for it.{" "}
            <span className="bg-linear-to-r from-copper to-neutral-700 bg-clip-text text-transparent font-bold">
              Hear from our partners.
            </span>
          </h2>
        </div>

        {/* Scattered collage — desktop absolute, mobile stacked grid */}
        <div className="relative mx-auto hidden xl:block" style={{ height: 720, maxWidth: 1200 }}>
          {/* Vertical tall card top-left */}
          <GlassCard
            className="absolute overflow-hidden p-5"
            style={{ left: "2%", top: 60, width: 200, height: 400 }}
          >
            <div className="flex flex-col gap-3">
              <Stars />
              <p className="text-sm font-semibold text-neutral-900 leading-snug">
                Highly satisfied with our platform, thank you!
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="rounded-full bg-copper/10 px-2 py-0.5 text-[10px] font-medium text-copper">
                  On time
                </span>
                <span className="rounded-full bg-copper/10 px-2 py-0.5 text-[10px] font-medium text-copper">
                  Reliable
                </span>
                <span className="rounded-full bg-copper/10 px-2 py-0.5 text-[10px] font-medium text-copper">
                  Great team
                </span>
              </div>
              <p className="text-[11px] text-neutral-500">– Rajesh Patel</p>
            </div>
            <div className="mt-4 -mx-5 -mb-5 h-[180px] overflow-hidden">
              <img src={REVIEW_AVATARS.workspace} alt="" className="h-full w-full object-cover" />
            </div>
          </GlassCard>

          {/* Wide quote card top-center */}
          <GlassCard className="absolute p-5" style={{ left: "23%", top: 20, width: 290 }}>
            <div className="mb-2 flex items-center gap-3">
              <img
                src={REVIEW_AVATARS.priya}
                alt=""
                className="h-9 w-9 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="text-xs font-semibold text-neutral-900">Priya & Team</p>
              </div>
              <span className="text-[10px] font-semibold text-copper">★ 5.0/5.0</span>
            </div>
            <p className="text-sm leading-relaxed text-neutral-700">
              I absolutely love the mobile app they built. The offline-first design has been a
              game-changer for our field engineers.
            </p>
            <p className="mt-2 text-[11px] font-medium text-copper">▾ Read more</p>
          </GlassCard>

          {/* Small quote center-top */}
          <GlassCard className="absolute p-4" style={{ left: "50%", top: 40, width: 180 }}>
            <Quote className="h-4 w-4 text-neutral-400" />
            <p className="mt-1 text-xs leading-relaxed text-neutral-700">
              The custom platform was delivered ahead of schedule. Their attention to detail is
              unmatched.
            </p>
            <div className="mt-3 flex items-center gap-2">
              <Stars n={5} size="h-2.5 w-2.5" />
              <div className="ml-auto flex items-center gap-1.5">
                <img
                  src={REVIEW_AVATARS.amit}
                  alt=""
                  className="h-6 w-6 rounded-full object-cover"
                />
                <div>
                  <p className="text-[10px] font-semibold text-neutral-900">Amit Desai</p>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Big image + title card top-right */}
          <GlassCard
            className="absolute overflow-hidden p-0"
            style={{ right: "8%", top: 30, width: 300, height: 190 }}
          >
            <div className="flex h-full">
              <div className="flex flex-1 flex-col justify-around p-4">
                <div>
                  <p className="text-lg font-semibold leading-tight text-neutral-900">
                    Incredible service
                  </p>
                  <p className="mt-1 text-[11px] text-neutral-600">
                    Perfect, exceeded expectations
                  </p>
                </div>
                <Stars n={5} size="h-3 w-3" />
              </div>
              <img src={REVIEW_AVATARS.sneha} alt="" className="h-full w-[45%] object-cover" />
            </div>
          </GlassCard>

          {/* Featured big quote center */}
          <GlassCard className="absolute p-6" style={{ left: "21%", top: 250, width: 270 }}>
            <div className="flex items-center gap-3">
              <img
                src={REVIEW_AVATARS.amit}
                alt=""
                className="h-11 w-11 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="text-sm font-semibold text-neutral-900">Amit Desai</p>
                <p className="text-[11px] text-neutral-500">Plant Manager, PrecisionMfg</p>
              </div>
              <Stars n={5} size="h-3 w-3" />
            </div>
            <h3 className="mt-4 text-xl font-semibold leading-snug text-neutral-900 md:text-2xl">
              Prompt and helpful responses to my inquiry!
            </h3>
            <p className="mt-2 text-sm text-neutral-600">Superb quality, impressed.</p>
          </GlassCard>

          {/* Small rating pill */}
          <GlassCard className="absolute px-4 py-3" style={{ left: "50%", top: 240, width: 220 }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-neutral-900">Service Rating</p>
                <p className="text-[10px] text-neutral-500">(5/5) from 180+ clients</p>
              </div>
              <span className="rounded-full bg-copper/10 px-2 py-1 text-[10px] font-bold text-copper">
                99+
              </span>
            </div>
          </GlassCard>

          {/* Search-like pill */}
          <GlassCard
            className="absolute flex items-center gap-2 px-3 py-2"
            style={{ left: "48%", top: 320, width: 220 }}
          >
            <span className="flex-1 text-xs text-neutral-700">Client Reviews</span>
            <span className="rounded-md bg-copper px-2 py-1 text-[10px] font-medium text-white">
              Search
            </span>
          </GlassCard>

          {/* Wide horizontal card bottom-left */}
          <GlassCard className="absolute p-5" style={{ left: "2%", top: 520, width: 290 }}>
            <Stars n={5} />
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Professional, responsive, and deeply technical. They delivered exactly what we
              envisioned — on time and within budget.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <img
                src={REVIEW_AVATARS.sneha}
                alt=""
                className="h-9 w-9 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="text-xs font-semibold text-neutral-900">Sneha Iyer</p>
                <p className="text-[10px] text-neutral-500">Logistics Director</p>
              </div>
              <span className="rounded-full bg-copper/10 px-2 py-0.5 text-[10px] font-medium text-copper">
                Verified
              </span>
            </div>
          </GlassCard>

          {/* Feedback slider card */}
          <GlassCard className="absolute p-4" style={{ left: "31%", top: 530, width: 180 }}>
            <div className="mb-2 flex items-center justify-between">
              <p className="text-xs font-semibold text-neutral-900">Your Feedback</p>
              <span className="rounded-full bg-copper px-2 py-0.5 text-[10px] font-bold text-white">
                100
              </span>
            </div>
            <div className="relative h-1.5 rounded-full bg-neutral-200">
              <div className="absolute inset-y-0 left-0 w-full rounded-full bg-linear-to-r from-copper to-copper-glow" />
              <div className="absolute -top-1 right-0 h-3.5 w-3.5 -translate-x-1 rounded-full border-2 border-copper bg-white" />
            </div>
          </GlassCard>

          {/* Great offers vertical card */}
          <GlassCard
            className="absolute p-5"
            style={{ left: "50%", top: 390, width: 240, height: 320 }}
          >
            <div className="flex items-center justify-between">
              <p className="text-[10px] text-neutral-500">~ Vikram Shah</p>
            </div>
            <h4 className="mt-2 text-xl font-semibold text-neutral-900">Great value</h4>
            <p className="mt-2 text-xs leading-relaxed text-neutral-600">
              Pellentesque results delivered by the DZ team — their workflow automation cut our
              manual reporting in half within the first month of deployment.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <Stars n={5} size="h-3 w-3" />
              <p className="text-[10px] text-neutral-500">(5.0) All Client Score</p>
            </div>
          </GlassCard>

          {/* Amazing product card right */}
          <GlassCard
            className="absolute p-5 text-center"
            style={{ right: "8%", top: 260, width: 240, height: 200 }}
          >
            <img
              src={REVIEW_AVATARS.vikram}
              alt=""
              className="mx-auto h-16 w-16 rounded-full border-2 border-copper object-cover"
            />
            <h4 className="mt-3 text-lg font-semibold text-neutral-900">Amazing Product!</h4>
            <p className="mt-2 text-xs leading-relaxed text-neutral-600">
              When it comes to quality, this product is top-notch.
            </p>
          </GlassCard>
        </div>

        {/* Mobile & Tablet Masonry layout */}
        <div className="columns-1 md:columns-2 gap-6 [column-fill:balance] box-border mx-auto max-w-4xl xl:hidden">
          {/* Card 1: Rajesh Patel */}
          <GlassCard className="break-inside-avoid mb-6 overflow-hidden p-6">
            <div className="flex flex-col gap-3">
              <Stars />
              <p className="text-sm font-semibold text-neutral-900 leading-snug">
                Highly satisfied with our platform, thank you!
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="rounded-full bg-copper/10 px-2 py-0.5 text-[10px] font-medium text-copper">
                  On time
                </span>
                <span className="rounded-full bg-copper/10 px-2 py-0.5 text-[10px] font-medium text-copper">
                  Reliable
                </span>
                <span className="rounded-full bg-copper/10 px-2 py-0.5 text-[10px] font-medium text-copper">
                  Great team
                </span>
              </div>
              <p className="text-[11px] text-neutral-500">– Rajesh Patel</p>
            </div>
            <div className="mt-4 -mx-6 -mb-6 h-[180px] overflow-hidden">
              <img src={REVIEW_AVATARS.workspace} alt="" className="h-full w-full object-cover" />
            </div>
          </GlassCard>

          {/* Card 2: Priya & Team */}
          <GlassCard className="break-inside-avoid mb-6 p-6">
            <div className="mb-3 flex items-center gap-3">
              <img
                src={REVIEW_AVATARS.priya}
                alt=""
                className="h-9 w-9 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="text-xs font-semibold text-neutral-900">Priya & Team</p>
              </div>
              <span className="text-[10px] font-semibold text-copper">★ 5.0/5.0</span>
            </div>
            <p className="text-sm leading-relaxed text-neutral-700">
              I absolutely love the mobile app they built. The offline-first design has been a
              game-changer for our field engineers.
            </p>
            <p className="mt-2 text-[11px] font-medium text-copper cursor-pointer hover:underline">
              ▾ Read more
            </p>
          </GlassCard>

          {/* Card 3: Amit Desai */}
          <GlassCard className="break-inside-avoid mb-6 p-6">
            <div className="flex items-center gap-3">
              <img
                src={REVIEW_AVATARS.amit}
                alt=""
                className="h-11 w-11 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="text-sm font-semibold text-neutral-900">Amit Desai</p>
                <p className="text-[11px] text-neutral-500">Plant Manager, PrecisionMfg</p>
              </div>
              <Stars n={5} size="h-3 w-3" />
            </div>
            <h3 className="mt-4 text-lg font-semibold leading-snug text-neutral-900">
              Prompt and helpful responses to my inquiry!
            </h3>
            <p className="mt-2 text-sm text-neutral-600">Superb quality, impressed.</p>
          </GlassCard>

          {/* Card 4: Service Rating and Your Feedback Grid */}
          <div className="break-inside-avoid mb-6 grid grid-cols-2 gap-4">
            <GlassCard className="p-4 flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold text-neutral-900">Service Rating</p>
                <p className="text-[10px] text-neutral-500">(5/5) from 180+ clients</p>
              </div>
              <div className="mt-4">
                <span className="rounded-full bg-copper/10 px-2 py-0.5 text-[10px] font-bold text-copper">
                  99+
                </span>
              </div>
            </GlassCard>

            <GlassCard className="p-4 flex flex-col justify-between">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-xs font-semibold text-neutral-900">Your Feedback</p>
                <span className="rounded-full bg-copper px-1.5 py-0.5 text-[10px] font-bold text-white">
                  100
                </span>
              </div>
              <div className="relative h-1.5 rounded-full bg-neutral-200 mt-2">
                <div className="absolute inset-y-0 left-0 w-full rounded-full bg-linear-to-r from-copper to-copper-glow" />
                <div className="absolute -top-1 right-0 h-3.5 w-3.5 -translate-x-1 rounded-full border-2 border-copper bg-white" />
              </div>
            </GlassCard>
          </div>

          {/* Card 5: Sneha Iyer */}
          <GlassCard className="break-inside-avoid mb-6 p-6">
            <Stars n={5} />
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Professional, responsive, and deeply technical. They delivered exactly what we
              envisioned — on time and within budget.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <img
                src={REVIEW_AVATARS.sneha}
                alt=""
                className="h-9 w-9 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="text-xs font-semibold text-neutral-900">Sneha Iyer</p>
                <p className="text-[10px] text-neutral-500">Logistics Director</p>
              </div>
              <span className="rounded-full bg-copper/10 px-2 py-0.5 text-[10px] font-medium text-copper">
                Verified
              </span>
            </div>
          </GlassCard>

          {/* Card 6: Vikram Shah */}
          <GlassCard className="break-inside-avoid mb-6 p-6">
            <div className="flex items-center justify-between">
              <p className="text-[10px] text-neutral-500">~ Vikram Shah</p>
            </div>
            <h4 className="mt-2 text-lg font-semibold text-neutral-900">Great value</h4>
            <p className="mt-2 text-xs leading-relaxed text-neutral-600">
              Pellentesque results delivered by the DZ team — their workflow automation cut our
              manual reporting in half within the first month of deployment.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <Stars n={5} size="h-3 w-3" />
              <p className="text-[10px] text-neutral-500">(5.0) All Client Score</p>
            </div>
          </GlassCard>

          {/* Card 7: Amazing Product */}
          <GlassCard className="break-inside-avoid mb-6 p-6 text-center">
            <img
              src={REVIEW_AVATARS.vikram}
              alt=""
              className="mx-auto h-16 w-16 rounded-full border-2 border-copper object-cover"
            />
            <h4 className="mt-3 text-lg font-semibold text-neutral-900">Amazing Product!</h4>
            <p className="mt-2 text-xs leading-relaxed text-neutral-600">
              When it comes to quality, this product is top-notch.
            </p>
          </GlassCard>
        </div>
      </Container>
    </section>
  );
}
