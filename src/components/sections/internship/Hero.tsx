import { ArrowRight, Calendar, Award, Laptop, Users } from "lucide-react";
import { Container } from "@/components/site";
import { Button } from "@/components/ui/button";

export default function InternshipHero() {
  const scrollToApply = () => {
    const el = document.getElementById("apply-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white pt-24 pb-12 md:pt-28 md:pb-16 text-foreground">
      <Container>
        {/* Header Section */}
        <div className="relative">
          <h1 className="text-[12vw] font-bold tracking-tighter text-surface leading-[0.85] select-none md:text-[9vw]">
            Internship
          </h1>

          <div className="border-t border-border/85 mt-4 mb-2" />

          <div className="flex justify-between items-center text-[10px] text-muted-foreground uppercase tracking-widest py-1">
            <span>3-Month Intensive Program</span>
            <span>Live & Demo Projects</span>
          </div>

          <div className="border-t border-border/85 mt-2 mb-8" />
        </div>

        {/* Right Aligned Bracketed Intro Statement */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 py-4 px-2 md:px-4 mb-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-copper/20 bg-copper/5 px-3 py-1 text-xs font-semibold text-copper">
              <Calendar className="h-3.5 w-3.5" /> 3 Months Duration
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-foreground">
              <Laptop className="h-3.5 w-3.5 text-copper" /> Individual Live Project
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-foreground">
              <Users className="h-3.5 w-3.5 text-copper" /> Demo Group Projects
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-foreground">
              <Award className="h-3.5 w-3.5 text-copper" /> Verified Certificate
            </span>
          </div>

          <div className="max-w-2xl text-left lg:text-right">
            <h2 className="text-base font-medium tracking-tight text-muted-foreground md:text-xl leading-relaxed">
              [ A 3-month immersive industrial internship designed for driven students. Engage in
              interactive mentor sessions, build your own individual live project, collaborate on
              demo group sprints, and earn an official certificate of completion. ]
            </h2>

            <div className="mt-6 flex justify-start lg:justify-end">
              <Button
                onClick={scrollToApply}
                className="inline-flex items-center gap-2 rounded-xl bg-copper px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-copper-glow hover:shadow-lg active:scale-98 cursor-pointer"
              >
                <span>Apply for Internship</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
