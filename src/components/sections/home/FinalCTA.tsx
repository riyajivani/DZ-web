import { Container, Eyebrow, PartnerButton, CTAButton } from "@/components/site";
import ctaBg from "@/assets/cta-image.jpeg";

export default function HomeFinalCTA() {
  return (
    <section className="relative py-20 md:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-4xl border border-border bg-surface p-10 md:p-20">
          {/* Calm real-world background image */}
          <img
            src={ctaBg}
            alt=""
            width={1920}
            height={640}
            loading="lazy"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          />
          {/* Soft overlay so text stays crisp across every area of the photo */}
          <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-background/85 via-background/50 to-background/80" />

          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-copper/15 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-copper/10 blur-[140px]" />
          <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
            <Eyebrow>Ready to build with us</Eyebrow>
            <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              Ready to <br /> <span className="text-copper font-bold">digitize your industry?</span>
            </h2>
            <p className="max-w-xl text-base text-muted-foreground md:text-lg">
              Join the growing list of businesses scaling with DZ Infotech intelligence.
            </p>
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <PartnerButton />
              <CTAButton to="/services" variant="ghost">
                See services
              </CTAButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
