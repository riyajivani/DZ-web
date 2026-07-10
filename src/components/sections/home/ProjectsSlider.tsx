import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CTAButton } from "@/components/site";
import projectsBg from "@/assets/projects-bg.png";
import { PROJECTS } from "@/constants/home";

export default function HomeProjectsSlider() {
  const total = PROJECTS.length;
  const [index, setIndex] = useState(0); // content index 0..3
  const [pos, setPos] = useState(1); // track position 0..5
  const [noAnim, setNoAnim] = useState(false);
  const [paused, setPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const resetRef = useRef<number | null>(null);

  // Infinite track: [last clone, P0, P1, P2, P3, first clone]
  const track = [PROJECTS[total - 1], ...PROJECTS, PROJECTS[0]];

  const go = useCallback(
    (dir: -1 | 1) => {
      if (isTransitioning) return;
      setIsTransitioning(true);

      if (resetRef.current) {
        window.clearTimeout(resetRef.current);
        resetRef.current = null;
      }

      if (dir === 1 && index === total - 1) {
        setIndex(0);
        setPos(total + 1); // 5
        resetRef.current = window.setTimeout(() => {
          setNoAnim(true);
          setPos(1);
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              setNoAnim(false);
              setIsTransitioning(false);
            });
          });
        }, 700);
      } else if (dir === -1 && index === 0) {
        setIndex(total - 1);
        setPos(0);
        resetRef.current = window.setTimeout(() => {
          setNoAnim(true);
          setPos(total); // 4
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              setNoAnim(false);
              setIsTransitioning(false);
            });
          });
        }, 700);
      } else {
        setIndex((prev) => (prev + dir + total) % total);
        setPos((prev) => prev + dir);
        resetRef.current = window.setTimeout(() => {
          setIsTransitioning(false);
        }, 700);
      }
    },
    [index, isTransitioning, total],
  );

  const goTo = (i: number) => {
    if (isTransitioning) return;
    if (i === index) return;
    setIsTransitioning(true);

    if (resetRef.current) {
      window.clearTimeout(resetRef.current);
      resetRef.current = null;
    }

    setIndex(i);
    setPos(i + 1);
    resetRef.current = window.setTimeout(() => {
      setIsTransitioning(false);
    }, 700);
  };

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => go(1), 4500);
    return () => {
      window.clearInterval(id);
    };
  }, [paused, go]);

  useEffect(() => {
    return () => {
      if (resetRef.current) {
        window.clearTimeout(resetRef.current);
      }
    };
  }, []);

  const current = PROJECTS[index];

  return (
    <section
      id="projects"
      className="relative overflow-hidden py-20 text-neutral-900 md:py-28"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(255,255,255,0.90), rgba(255,255,255,0.95)), url(${projectsBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[600px] rounded-full bg-copper/10 blur-[160px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 h-[400px] w-[500px] rounded-full bg-copper/5 blur-[140px]" />

      <div className="relative mx-auto mb-16 max-w-4xl text-center">
        <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-neutral-900 md:text-5xl lg:text-6xl">
          Projects delivered with{" "}
          <span className="text-copper font-bold">measurable business impact.</span>
        </h2>
        <div className="mt-8 flex justify-center">
          <CTAButton href="#" variant="ghost">
            See all projects
          </CTAButton>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-12 px-5 md:px-8 lg:grid-cols-[1fr_minmax(0,648px)_minmax(0,792px)_1fr] lg:gap-x-12 lg:px-0 lg:items-center">
        {/* Left: text + controls */}
        <div className="relative flex flex-col gap-6 lg:col-start-2 lg:col-span-1 lg:pl-8">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-2 flex flex-col gap-3"
          >
            <span className="inline-flex w-fit rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs uppercase tracking-wide text-neutral-600">
              {current.tag}
            </span>
            <h3 className="text-3xl font-bold text-copper md:text-4xl">{current.title}</h3>
            <p className="text-sm text-neutral-500">{current.client}</p>
            <p className="mt-1 max-w-md text-base leading-relaxed text-neutral-600 md:text-lg">
              {current.desc}
            </p>
            <div className="mt-3 inline-flex w-fit items-center gap-2 rounded-lg border border-copper/40 bg-copper/10 px-4 py-2 text-sm font-medium text-copper">
              <span className="h-1.5 w-1.5 rounded-full bg-copper" />
              {current.impact}
            </div>
          </motion.div>

          <div className="mt-6 flex items-center gap-3">
            <button
              onClick={() => go(-1)}
              aria-label="Previous project"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition-all hover:border-copper hover:bg-copper hover:text-white"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next project"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition-all hover:border-copper hover:bg-copper hover:text-white"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
            <div className="ml-4 flex gap-1.5">
              {PROJECTS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to project ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-8 bg-copper" : "w-4 bg-neutral-300 hover:bg-neutral-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right: image slider — clipped to its own column */}
        <div className="relative w-full overflow-hidden lg:col-start-3 lg:col-span-2">
          <div
            className="flex gap-5"
            style={{
              transform: `translateX(calc(-${pos} * (70% + 20px)))`,
              transition: noAnim ? "none" : "transform 700ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            {track.map((p, i) => {
              const contentIdx = (i - 1 + total) % total;
              const isActive = contentIdx === index;
              return (
                <motion.button
                  key={`${p.title}-${i}`}
                  onClick={() => {
                    if (isTransitioning) return;
                    if (contentIdx === index) return;
                    setIsTransitioning(true);
                    setIndex(contentIdx);
                    setPos(i);

                    if (resetRef.current) {
                      window.clearTimeout(resetRef.current);
                      resetRef.current = null;
                    }

                    if (i === 0) {
                      resetRef.current = window.setTimeout(() => {
                        setNoAnim(true);
                        setPos(total);
                        requestAnimationFrame(() => {
                          requestAnimationFrame(() => {
                            setNoAnim(false);
                            setIsTransitioning(false);
                          });
                        });
                      }, 700);
                    } else if (i === total + 1) {
                      resetRef.current = window.setTimeout(() => {
                        setNoAnim(true);
                        setPos(1);
                        requestAnimationFrame(() => {
                          requestAnimationFrame(() => {
                            setNoAnim(false);
                            setIsTransitioning(false);
                          });
                        });
                      }, 700);
                    } else {
                      resetRef.current = window.setTimeout(() => {
                        setIsTransitioning(false);
                      }, 700);
                    }
                  }}
                  animate={{ scale: isActive ? 1 : 0.88, opacity: isActive ? 1 : 0.45 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative aspect-3/4 w-[70%] shrink-0 overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100 text-left shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)]"
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    width={1000}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-1200 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-xs uppercase tracking-wide text-white/70">{p.tag}</p>
                    <p className="mt-1 text-xl font-semibold text-white">{p.title}</p>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
