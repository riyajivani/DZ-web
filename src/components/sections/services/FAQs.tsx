import { Minus, Plus } from "lucide-react";
import { Container, Eyebrow } from "@/components/site";
import { FAQs } from "@/constants/services";

interface FAQsProps {
  expandedFaq: number | null;
  setExpandedFaq: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function ServicesFAQs({ expandedFaq, setExpandedFaq }: FAQsProps) {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <div className="mb-14 flex flex-col items-center gap-3 text-center md:mb-20">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-2 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Frequently Asked <span className="text-copper font-bold">Questions</span>
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-base text-muted-foreground">
            Clear answers to core collaboration concerns and technical engagement parameters.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQs.map((faq, idx) => {
            const isExpanded = expandedFaq === idx;
            return (
              <div key={idx} className="border-b border-border/60 pb-4">
                <button
                  onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                  className="w-full flex justify-between items-center text-left py-4 font-bold text-foreground text-base md:text-lg hover:text-copper transition-colors focus:outline-none cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <span className="text-copper shrink-0 ml-4">
                    {isExpanded ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                  </span>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isExpanded
                      ? "max-h-[200px] opacity-100 mt-2"
                      : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
