import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import dzSvg from "@/assets/dz.svg";
import infotechSvg from "@/assets/infotech.svg";
import { Container } from "./Container";
import { PartnerButton } from "./PartnerButton";

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
        <Link to="/" className="flex items-end gap-1">
          <img src={dzSvg} alt="DZ Infotech" className="h-auto w-12 md:w-16 object-contain" />
          <img src={infotechSvg} alt="DZ Infotech" className="h-auto w-24 md:w-32 object-contain" />
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
