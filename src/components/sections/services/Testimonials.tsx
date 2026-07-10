import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Container, Eyebrow } from "@/components/site";
import { REVIEWS } from "@/constants/services";

interface TestimonialsProps {
  activeReviewIdx: number;
  setActiveReviewIdx: React.Dispatch<React.SetStateAction<number>>;
}

export default function ServicesTestimonials({
  activeReviewIdx,
  setActiveReviewIdx,
}: TestimonialsProps) {
  return (
    <section className="py-20 md:py-28 bg-[#fafafa]">
      <Container>
        <div className="mb-10 flex flex-col items-center gap-3 text-center md:mb-14">
          <Eyebrow>TESTIMONIALS</Eyebrow>
          <h2 className="mt-2 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
            What Our Client <span className="text-copper font-bold">Say!</span>
          </h2>
        </div>

        <div className="relative flex flex-col items-center justify-center min-h-[460px] w-full max-w-6xl mx-auto px-4 mt-6">
          {/* Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 z-20 flex justify-between pointer-events-none px-2 md:px-8">
            <button
              onClick={() =>
                setActiveReviewIdx((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length)
              }
              className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-border/60 bg-white hover:bg-surface text-foreground shadow-sm hover:scale-105 active:scale-95 transition-all"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => setActiveReviewIdx((prev) => (prev + 1) % REVIEWS.length)}
              className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-border/60 bg-white hover:bg-surface text-foreground shadow-sm hover:scale-105 active:scale-95 transition-all"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Cards Container */}
          <div className="flex items-center justify-center gap-6 md:gap-8 w-full max-w-5xl px-8">
            {/* Left Card (Hidden on Mobile) */}
            {(() => {
              const leftIdx = (activeReviewIdx - 1 + REVIEWS.length) % REVIEWS.length;
              const review = REVIEWS[leftIdx];
              return (
                <div
                  onClick={() => setActiveReviewIdx(leftIdx)}
                  className="hidden md:flex flex-col justify-between p-8 rounded-3xl border border-border/40 bg-white opacity-85 scale-95 cursor-pointer hover:opacity-100 transition-all duration-500 w-full max-w-[360px] min-h-[380px] shrink-0 select-none shadow-sm"
                >
                  <div>
                    <Quote className="h-8 w-8 text-copper mb-4 rotate-180 opacity-60" />
                    <p className="text-sm text-foreground/80 leading-relaxed italic">
                      "{review.quote}"
                    </p>
                  </div>
                  <div>
                    <div className="border-t border-border/20 my-4" />
                    <div className="flex items-center gap-3">
                      <img
                        src={review.avatar}
                        alt={review.author}
                        className="h-10 w-10 rounded-full object-cover border border-border/40"
                      />
                      <div className="text-left">
                        <h4 className="text-sm font-bold text-foreground leading-none">
                          {review.author}
                        </h4>
                        <span className="text-xs text-muted-foreground mt-1 block">
                          {review.role}, {review.company}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Center Active Card */}
            {(() => {
              const review = REVIEWS[activeReviewIdx];
              return (
                <div className="flex flex-col justify-between p-8 md:p-10 rounded-3xl border border-copper/35 bg-white opacity-100 scale-100 md:scale-105 shadow-xl transition-all duration-500 w-full max-w-[440px] min-h-[390px] shrink-0 relative z-10">
                  <div>
                    <Quote className="h-10 w-10 text-copper mb-5 rotate-180 fill-copper/5" />
                    <p className="text-base text-foreground leading-relaxed italic font-medium">
                      "{review.quote}"
                    </p>
                  </div>
                  <div>
                    <div className="border-t border-border/40 my-5" />
                    <div className="flex items-center gap-4">
                      <img
                        src={review.avatar}
                        alt={review.author}
                        className="h-12 w-12 rounded-full object-cover border border-border/60"
                      />
                      <div className="text-left">
                        <h4 className="text-md font-bold text-foreground leading-none">
                          {review.author}
                        </h4>
                        <span className="text-xs text-muted-foreground mt-1 block">
                          {review.role}, {review.company}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Right Card (Hidden on Mobile) */}
            {(() => {
              const rightIdx = (activeReviewIdx + 1) % REVIEWS.length;
              const review = REVIEWS[rightIdx];
              return (
                <div
                  onClick={() => setActiveReviewIdx(rightIdx)}
                  className="hidden md:flex flex-col justify-between p-8 rounded-3xl border border-border/40 bg-white opacity-85 scale-95 cursor-pointer hover:opacity-100 transition-all duration-500 w-full max-w-[360px] min-h-[380px] shrink-0 select-none shadow-sm"
                >
                  <div>
                    <Quote className="h-8 w-8 text-copper mb-4 rotate-180 opacity-60" />
                    <p className="text-sm text-foreground/80 leading-relaxed italic">
                      "{review.quote}"
                    </p>
                  </div>
                  <div>
                    <div className="border-t border-border/20 my-4" />
                    <div className="flex items-center gap-3">
                      <img
                        src={review.avatar}
                        alt={review.author}
                        className="h-10 w-10 rounded-full object-cover border border-border/40"
                      />
                      <div className="text-left">
                        <h4 className="text-sm font-bold text-foreground leading-none">
                          {review.author}
                        </h4>
                        <span className="text-xs text-muted-foreground mt-1 block">
                          {review.role}, {review.company}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2.5 mt-8 z-20">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveReviewIdx(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === activeReviewIdx
                    ? "bg-copper scale-125"
                    : "bg-neutral-300 hover:bg-neutral-400"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
