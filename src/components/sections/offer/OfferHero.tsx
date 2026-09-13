import { motion } from "framer-motion";
import { Sparkles, Zap, ShieldCheck, Globe, Code, ArrowRight } from "lucide-react";
import { Container } from "@/components/site";
import { Button } from "@/components/ui/button";

interface OfferHeroProps {
  onEnrollClick?: () => void;
}

export default function OfferHero({ onEnrollClick }: OfferHeroProps) {
  const scrollToForm = () => {
    if (onEnrollClick) {
      onEnrollClick();
    } else {
      const el = document.getElementById("enroll-form");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-surface via-background to-background">
      {/* Background Glows & Accent Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-copper/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          {/* Promo Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs md:text-sm font-semibold text-amber-600 dark:text-amber-400 shadow-sm mb-6"
          >
            <Sparkles className="h-4 w-4 text-amber-500" />
            <span>Exclusive Limited Time Offer</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight font-display text-foreground"
          >
            Get a Professional <br className="hidden sm:inline" />
            <span className="text-copper">Custom Website for ₹499</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            Empower your business with a stunning, high-converting website built by software professionals. Fast, mobile-optimized, and SEO-ready.
          </motion.p>

          {/* Price Card & CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 inline-flex flex-col sm:flex-row items-center justify-center gap-6 p-6 sm:px-10 rounded-3xl bg-white/70 dark:bg-card/70 border border-white/80 dark:border-border backdrop-blur-md shadow-2xl"
          >
            <div className="text-center sm:text-left">
              <div className="flex items-baseline gap-3 justify-center sm:justify-start">
                <span className="text-4xl md:text-5xl font-black font-display text-foreground">₹499</span>
                <span className="text-xs uppercase font-bold tracking-wide text-amber-600 bg-amber-500/10 px-2.5 py-1 rounded-md">
                  One-Time Fee
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">No hidden fees • Full ownership of source code</p>
            </div>

            <Button
              onClick={scrollToForm}
              size="lg"
              className="w-full sm:w-auto bg-copper hover:brightness-110 text-white font-semibold rounded-2xl px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all duration-300 active:scale-98 group cursor-pointer"
            >
              <span>Enroll Now for ₹499</span>
              <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* Quick Value Grid */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left"
          >
            {[
              {
                icon: Globe,
                title: "Custom Modern Design",
                desc: "Tailored to your brand, pixel-perfect on mobile & desktop.",
              },
              {
                icon: Zap,
                title: "Fast & SEO Optimized",
                desc: "Speed-tuned for high Google ranking & smooth user experience.",
              },
              {
                icon: Code,
                title: "Lead Form & Analytics",
                desc: "Integrated Google Sheet form capture & contact workflow.",
              },
              {
                icon: ShieldCheck,
                title: "30-Day Support",
                desc: "Free domain setup, hosting guidance, and maintenance.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/50 dark:bg-card/50 border border-border/50 backdrop-blur-xs flex flex-col justify-between hover:border-copper/40 transition-colors"
              >
                <div className="h-10 w-10 rounded-xl bg-copper/10 text-copper flex items-center justify-center mb-4">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-foreground">{item.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
