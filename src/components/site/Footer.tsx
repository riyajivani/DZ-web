import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";
import dzSvg from "@/assets/dz.svg";
import infotechSvg from "@/assets/infotech.svg";
import footerPng from "@/assets/footer1.png";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-blue-100/60 bg-blue-50 backdrop-blur-md pt-20 text-neutral-600">
      {/* Decorative glows */}
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-blue-300/10 blur-[120px]" />
      <div className="pointer-events-none absolute -top-40 -right-20 h-96 w-96 rounded-full bg-sky-300/10 blur-[120px]" />

      <Container className="relative z-10 pb-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="flex flex-col items-center text-center md:items-start md:text-left md:col-span-5">
            <div className="flex items-end gap-1 justify-center md:justify-start">
              <img src={dzSvg} alt="DZ Infotech" className="h-auto w-24 md:w-30 object-contain" />
              <img
                src={infotechSvg}
                alt="DZ Infotech"
                className="h-auto w-48 md:w-64 object-contain"
              />
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-neutral-600">
              A technology partner building custom software, mobile apps, workflow automation and
              AI-driven intelligence for real-world industries.
            </p>
            <div className="mt-8 flex gap-3 justify-center md:justify-start">
              {[Linkedin, Twitter].map((Icon, i) => (
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
                <Phone className="mt-0.5 h-4 w-4 text-blue-600 shrink-0" /> +91 93278 53727
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
