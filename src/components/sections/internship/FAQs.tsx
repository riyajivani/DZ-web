import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Container, SectionHeading } from "@/components/site";
import { INTERNSHIP_FAQS } from "@/constants/internship";

export default function InternshipFAQs() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 bg-white border-t border-border/40">
      <Container>
        <SectionHeading
          eyebrow="Questions & Clarity"
          title={
            <>
              Frequently Asked <span className="text-copper font-bold">Questions</span>
            </>
          }
          subtitle="Answers to common questions about our 3-month internship structure, project work, and enrollment."
          align="center"
        />

        <div className="mt-14 max-w-3xl mx-auto space-y-4">
          {INTERNSHIP_FAQS.map((faq, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-border/60 bg-[#fafafa] p-6 transition-all duration-300 hover:border-copper/40"
              >
                <button
                  type="button"
                  onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                  className="w-full flex justify-between items-center text-left font-bold text-foreground text-base md:text-lg hover:text-copper transition-colors focus:outline-none cursor-pointer"
                >
                  <span className="pr-4">{faq.question}</span>
                  <span className="text-copper shrink-0">
                    {isExpanded ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                  </span>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isExpanded
                      ? "max-h-[300px] opacity-100 mt-3 pt-3 border-t border-border/40"
                      : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <p className="text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
