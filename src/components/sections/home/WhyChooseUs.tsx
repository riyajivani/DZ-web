import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container, Eyebrow } from "@/components/site";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import {
  REASONS,
  STATS,
  CARD_W_DESKTOP,
  CARD_W_MOBILE,
  PEEK_DESKTOP,
  PEEK_MOBILE,
} from "@/constants/home";

export default function HomeWhyChooseUs() {
  const [index, setIndex] = useState(0);
  const [cardStep, setCardStep] = useState(CARD_W_DESKTOP);
  const [peek, setPeek] = useState(PEEK_DESKTOP);

  useEffect(() => {
    const update = () => {
      const isDesktop = window.innerWidth >= 768;
      setCardStep(isDesktop ? CARD_W_DESKTOP : CARD_W_MOBILE);
      setPeek(isDesktop ? PEEK_DESKTOP : PEEK_MOBILE);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const go = (dir: -1 | 1) => {
    setIndex((prev) => Math.max(0, Math.min(REASONS.length - 1, prev + dir)));
  };

  return (
    <section id="why-us" className="relative bg-white py-20 md:py-28">
      <Container className="relative">
        {/* Glassy copper-tinted section card */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-copper/8 backdrop-blur-2xl border border-copper/15 px-6 pt-16 pb-56 md:px-12 md:pt-20 md:pb-64">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-80 -translate-x-1/2 rounded-full bg-copper/10 blur-[120px]" />

          <div className="relative flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <Eyebrow>Why Choose DZ Infotech</Eyebrow>
              <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.05] tracking-tight md:text-4xl lg:text-5xl">
                Built different. <span className="text-copper font-bold">Built for you.</span>
              </h2>
              <p className="mt-5 max-w-xl text-base text-muted-foreground">
                Five reasons teams trust us to turn their operational challenges into competitive
                advantages.
              </p>
            </div>

            {/* Slider controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => go(-1)}
                aria-label="Previous"
                disabled={index === 0}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background transition-all hover:bg-copper disabled:opacity-40"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Next"
                disabled={index === REASONS.length - 1}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background transition-all hover:bg-copper disabled:opacity-40"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Cards slider — stacked deck: past cards peek from left, active on top, future queued to the right */}
        <div className="relative z-10 -mt-40 md:-mt-48 overflow-hidden px-2 md:px-6">
          <div className="relative" style={{ height: 280 }}>
            {REASONS.map((r, i) => {
              const offset = i - index;
              // Past (offset < 0): stack on the left, only `peek` px visible per card
              // Active (offset === 0): rests flush against the last peek slot
              // Future (offset > 0): queued at full card width to the right of active
              const activeX = Math.min(index, REASONS.length - 1) * peek;
              const x =
                offset < 0
                  ? (index + offset) * peek // = i * peek
                  : activeX + offset * cardStep;
              const zIndex =
                offset <= 0
                  ? 100 + offset // active highest, older cards below
                  : 100 - offset; // future cards below active, descending
              return (
                <motion.div
                  key={r.title}
                  className={`${r.bg} ${r.text} absolute top-0 left-0 flex min-h-[280px] w-[280px] md:w-[320px] flex-col rounded-2xl p-7`}
                  animate={{ x }}
                  style={{ zIndex }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full border ${r.ring} text-sm font-semibold`}
                  >
                    {i + 1}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{r.title}</h3>
                  <p className={`mt-3 text-sm leading-relaxed ${r.sub}`}>{r.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 flex flex-col items-center justify-center gap-8 border-y border-copper/15 py-12 md:flex-row md:gap-0"
        >
          {STATS.map((s, i) => (
            <div key={s.label} className="flex items-center">
              <div className="flex flex-col items-center px-12 md:px-16">
                <span className="text-5xl font-semibold tracking-tight text-foreground md:text-6xl">
                  <AnimatedCounter value={s.value} />
                </span>
                <span className="mt-2 text-sm text-muted-foreground">{s.label}</span>
              </div>
              {i < STATS.length - 1 && <div className="hidden h-16 w-px bg-copper/20 md:block" />}
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
