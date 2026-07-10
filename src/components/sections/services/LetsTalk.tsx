import { Container, Eyebrow, PartnerButton, CTAButton } from "@/components/site";
import talkToUsBg from "@/assets/talkToUs-bg.png";

export default function ServicesLetsTalk() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background Image with Low Opacity */}
      <img
        src={talkToUsBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-[0.2] pointer-events-none select-none z-0"
      />
      <Container className="relative z-10">
        <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          {/* Soft decorative glow */}
          <div className="pointer-events-none absolute left-1/2 -top-24 h-72 w-80 -translate-x-1/2 rounded-full bg-copper/5 blur-[120px]" />
          <div className="pointer-events-none absolute -right-32 -bottom-32 h-[450px] w-[450px] rounded-full bg-copper-light/5 blur-[130px]" />

          <Eyebrow>Let's talk</Eyebrow>

          <h2 className="mt-2 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Have a project in mind?{" "}
            <span className="text-copper font-bold block mt-2 md:inline md:mt-0">
              Let's build it.
            </span>
          </h2>

          <p className="mt-4 max-w-xl text-base text-muted-foreground md:text-lg leading-relaxed">
            Connect with our senior engineering team today to review your project roadmap and
            receive a detailed, cost-effective implementation strategy.
          </p>

          <div className="mt-6 relative flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
            <PartnerButton variant="primary" />
            <CTAButton to="/about" variant="ghost">
              About us
            </CTAButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
