import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight, Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";
import logoSvg from "@/assets/DZInfotech.svg";
import footerPng from "@/assets/footer1.png";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1440px] px-5 md:px-8 ${className}`}>{children}</div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="text-xs uppercase tracking-wide text-muted-foreground">{children}</span>;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const alignCls =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`flex max-w-3xl flex-col gap-5 ${alignCls}`}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-balance text-base text-muted-foreground md:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

/** Simple, non-glowy CTA button */
export function CTAButton({
  children,
  to,
  href,
  variant = "primary",
}: {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: "primary" | "ghost";
}) {
  const base =
    "inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition-colors duration-200";
  const styles =
    variant === "primary"
      ? "bg-copper text-white hover:bg-copper-glow"
      : "border border-border bg-transparent text-foreground hover:border-copper hover:text-copper";

  const content = (
    <>
      {children}
      <ArrowRight className="h-4 w-4" />
    </>
  );
  if (to) {
    return (
      <Link to={to} className={`${base} ${styles}`}>
        {content}
      </Link>
    );
  }
  return (
    <a href={href} className={`${base} ${styles}`}>
      {content}
    </a>
  );
}

/** "Partner with us" CTA — the primary conversion action across the site */
export function PartnerButton({ variant = "primary" }: { variant?: "primary" | "ghost" }) {
  return (
    <CTAButton to="/partner" variant={variant}>
      Partner with us
    </CTAButton>
  );
}

const NAV = [
  { label: "Services", to: "/services" },
  { label: "Careers", to: "/careers" },
  { label: "About", to: "/about" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-background/85 border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <Container className="flex h-18 items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoSvg} alt="DZ Infotech" className="h-auto w-16 object-contain" />
          <span className="hidden text-sm font-semibold tracking-wide text-foreground sm:inline">
            DZ INFOTECH
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-lg px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground font-medium" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <PartnerButton />
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg border border-border p-2 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl md:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {NAV.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm text-muted-foreground hover:bg-surface hover:text-foreground"
                >
                  {n.label}
                </Link>
              ))}
              <Link
                to="/partner"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-copper px-4 py-3 text-sm font-medium text-white"
              >
                Partner with us <ArrowRight className="h-4 w-4" />
              </Link>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-blue-100/60 bg-blue-50 backdrop-blur-md pt-20 text-neutral-600">
      {/* Decorative glows */}
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-blue-300/10 blur-[120px]" />
      <div className="pointer-events-none absolute -top-40 -right-20 h-96 w-96 rounded-full bg-sky-300/10 blur-[120px]" />

      <Container className="relative z-10 pb-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="flex flex-col items-center text-center md:items-start md:text-left md:col-span-5">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <img src={logoSvg} alt="DZ Infotech" className="h-auto w-30 object-contain" />
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-neutral-600">
              A technology partner building custom software, mobile apps, workflow automation and
              AI-driven intelligence for real-world industries.
            </p>
            <div className="mt-8 flex gap-3 justify-center md:justify-start">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 bg-white/60 text-neutral-500 transition-colors hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50/30"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 text-center md:text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900/80">Company</h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link
                  to="/about"
                  className="text-neutral-600 hover:text-blue-600 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-neutral-600 hover:text-blue-600 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-neutral-600 hover:text-blue-600 transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/partner"
                  className="text-neutral-600 hover:text-blue-600 transition-colors"
                >
                  Partner with us
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 text-center md:text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900/80">
              Services
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                "Custom Software",
                "Mobile Apps",
                "Workflow Automation",
                "AI & Data Intelligence",
              ].map((l) => (
                <li key={l}>
                  <Link
                    to="/services"
                    className="text-neutral-600 hover:text-blue-600 transition-colors"
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 text-center md:text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900/80">Contact</h4>
            <ul className="mt-5 space-y-3 text-sm text-neutral-700 flex flex-col items-center md:items-start">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 text-blue-600 shrink-0" /> info@dzinfotech.in
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-blue-600 shrink-0" /> +91 93285 25395
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-blue-600 shrink-0" /> Bhavnagar,Gujarat,India
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Copyright block above the image */}
      <div className="border-t border-blue-100/60 py-8 relative z-10">
        <Container className="flex flex-col items-center justify-between gap-4 text-xs text-neutral-600 md:flex-row font-medium">
          <p>© {new Date().getFullYear()} DZ Infotech Partnership Firm. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-600 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              Cookies
            </a>
          </div>
        </Container>
      </div>

      {/* Footer background illustration at the bottom */}
      <img
        src={footerPng}
        alt=""
        className="pointer-events-none w-full h-auto block select-none relative z-0"
      />
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className="relative overflow-x-clip bg-background text-foreground">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
