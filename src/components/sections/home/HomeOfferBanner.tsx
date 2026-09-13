import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/site";

export default function HomeOfferBanner() {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-neutral-900 via-neutral-900 to-copper/90 p-8 sm:p-10 md:p-14 text-white shadow-2xl border border-copper/30"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-copper/30 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/20 px-3.5 py-1 text-xs font-semibold text-amber-300">
                <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                <span>Special Sale Announcement</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold font-display tracking-tight text-white">
                Get a Custom Static Website for Only <span className="text-amber-400 font-black">₹499</span>
              </h2>

              <p className="text-sm sm:text-base text-neutral-300 max-w-2xl leading-relaxed">
                Take your business online with a fast, modern, mobile-optimized static website designed by professionals. Complete with lead capture forms and SEO setup.
              </p>

              <div className="pt-2 flex flex-wrap gap-y-2 gap-x-6 text-xs sm:text-sm text-neutral-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-400" />
                  <span>Responsive Static Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-400" />
                  <span>Lead Form Integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-400" />
                  <span>30 Days Free Support</span>
                </div>
              </div>
            </div>

            {/* Right Action */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-center lg:items-end justify-center gap-4">
              <div className="text-center lg:text-right">
                <div className="text-3xl font-extrabold text-white font-display">
                  ₹499 <span className="text-xs font-normal text-amber-400">/ static website</span>
                </div>
              </div>

              <Link
                to="/offer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:brightness-110 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-98 group"
              >
                <span>Enroll in ₹499 Offer</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
