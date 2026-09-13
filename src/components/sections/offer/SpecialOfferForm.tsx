import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Building,
  Globe,
  MessageSquare,
  ChevronDown,
  Send,
  Loader2,
  CheckCircle2,
  ShieldCheck,
  Check,
  Lock,
} from "lucide-react";
import { Container, SectionHeading } from "@/components/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const WEBSITE_TYPES = [
  "Single Page Business Landing Page (Static)",
  "Multi-Page Business Static Website (1-3 Pages)",
  "Portfolio & Personal Static Website",
  "Company / Agency Profile (Static)",
  "Other Custom Static Website",
];

interface SpecialOfferFormProps {
  customSheetUrl?: string;
}

export default function SpecialOfferForm({ customSheetUrl }: SpecialOfferFormProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    websiteType: "Single Page Business Landing Page (Static)",
    requirements: "",
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!form.name.trim()) {
      newErrors.name = "Full Name is required";
    } else if (form.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters long";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email address is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.email.trim())) {
        newErrors.email = "Please enter a valid email address";
      }
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone / WhatsApp number is required";
    } else {
      const phoneRegex = /^[+]?[0-9\s\-()]{7,20}$/;
      if (!phoneRegex.test(form.phone.trim())) {
        newErrors.phone = "Please enter a valid phone number (at least 7 digits)";
      }
    }

    if (!form.websiteType) {
      newErrors.websiteType = "Please select a website type";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setError(null);
    setSent(false);

    try {
      const params = new URLSearchParams();
      params.append("name", form.name);
      params.append("email", form.email);
      params.append("phone", form.phone);
      params.append("businessName", form.businessName);
      params.append("websiteType", form.websiteType);
      params.append("requirements", form.requirements || "N/A (₹499 Static Website Offer)");
      params.append("offer", "₹499 Custom Static Website Sale");

      await fetch("https://script.google.com/macros/s/AKfycbzIV8P7-UFslQCk_byYszn6vrQ4uXK4Sf7bV4ccNf6ust-KSRE4nps-ZprOkr196-xReA/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      });

      setSent(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        businessName: "",
        websiteType: "Single Page Business Landing Page (Static)",
        requirements: "",
      });
      setErrors({});
    } catch (err: unknown) {
      console.error("Submission error:", err);
      setError(
        "Something went wrong submitting your enrollment. Please try again or contact us at info@dzinfotech.in",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="enroll-form" className="py-20 md:py-28 relative overflow-hidden">
      {/* Top and Bottom Fades */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-linear-to-b from-background to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-background to-transparent pointer-events-none z-10" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Enrollment Form"
            title={
              <>
                Claim Your <span className="text-copper font-bold">₹499 Custom Static Website</span>
              </>
            }
            subtitle="Fill out the details below to lock in the special ₹499 offer rate for a high-performance static website. Our engineering leads will connect with you within 24 hours."
            align="center"
          />

          <div className="mt-14 bg-white/80 dark:bg-card/80 backdrop-blur-md border border-white/80 dark:border-border rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl grid gap-10 lg:grid-cols-5 items-stretch relative">
            {/* Left Column: What's Included */}
            <div className="lg:col-span-2 flex flex-col justify-between py-2 border-b lg:border-b-0 lg:border-r pb-8 lg:pb-0 lg:pr-8 border-border/40">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-copper/30 bg-copper px-3 py-1 text-2xs font-bold tracking-wider uppercase text-white dark:text-white">
                  Package Breakdown
                </div>
                <h3 className="mt-5 text-2xl font-bold tracking-tight font-display text-foreground">
                  Static Website Plan (₹499)
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Fast, lightweight, single or multi-page static website tailored for your business or personal portfolio.
                </p>

                <div className="mt-6 space-y-3.5">
                  {[
                    "Custom Static Website",
                    "Fully Responsive Mobile & Desktop Layout",
                    "Lightning Fast Loading Speed",
                    "SEO Optimized Meta Tags & Headers",
                    "Contact Form & WhatsApp Integration",
                    "Social Media Links & Business Info",
                    "Domain Setup Assistance",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div className="h-5 w-5 rounded-full bg-copper/10 text-copper flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-3 w-3 stroke-[3]" />
                      </div>
                      <span className="text-xs font-medium text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border/40 bg-surface/50 rounded-2xl p-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-8 w-8 text-copper shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-foreground">Zero Risk Guarantee</p>
                    <p className="text-[11px] text-muted-foreground mt-0.5">
                      Direct 1-on-1 consultation before starting. Quick delivery with zero hidden charges.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Enrollment Form */}
            <form onSubmit={submit} className="lg:col-span-3 flex flex-col justify-between gap-6">
              {sent ? (
                <div className="flex flex-col items-center justify-center text-center py-16 px-4 h-full">
                  <div className="h-16 w-16 rounded-full bg-copper/10 border border-copper/30 flex items-center justify-center text-copper mb-5">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h4 className="text-2xl font-bold tracking-tight text-foreground font-display">
                    Enrollment Submitted!
                  </h4>
                  <p className="text-sm text-muted-foreground mt-3 max-w-md leading-relaxed">
                    Thank you! Your spot for the ₹499 Custom Static Website offer has been reserved. One of our technical solution specialists will reach out via WhatsApp / Email within 24 hours.
                  </p>
                  <Button
                    type="button"
                    onClick={() => setSent(false)}
                    variant="outline"
                    className="mt-6 text-xs font-semibold rounded-xl border-copper/30 text-copper hover:bg-copper/10 hover:text-copper"
                  >
                    Submit Another Enrollment
                  </Button>
                </div>
              ) : (
                <>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-bold tracking-tight text-foreground font-display">
                          Static Website Enrollment Details
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1">
                          Please fill in your contact and static site preferences to claim the offer.
                      </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <FloatingField
                        label="Full Name"
                        value={form.name}
                        onChange={(v) => {
                          setForm({ ...form, name: v });
                          if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
                        }}
                        required
                        icon={User}
                        error={errors.name}
                      />
                      <FloatingField
                        label="Email Address"
                        type="email"
                        value={form.email}
                        onChange={(v) => {
                          setForm({ ...form, email: v });
                          if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
                        }}
                        required
                        icon={Mail}
                        error={errors.email}
                      />
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <FloatingField
                        label="Phone / WhatsApp Number"
                        value={form.phone}
                        onChange={(v) => {
                          setForm({ ...form, phone: v });
                          if (errors.phone) setErrors((prev) => ({ ...prev, phone: "" }));
                        }}
                        required
                        icon={Phone}
                        error={errors.phone}
                      />
                      <FloatingField
                        label="Business / Project Name"
                        value={form.businessName}
                        onChange={(v) => setForm({ ...form, businessName: v })}
                        icon={Building}
                      />
                    </div>

                    <FloatingSelect
                        label="Static Website Type"
                      value={form.websiteType}
                      onChange={(v) => {
                        setForm({ ...form, websiteType: v });
                        if (errors.websiteType) setErrors((prev) => ({ ...prev, websiteType: "" }));
                      }}
                      options={WEBSITE_TYPES}
                      required
                      icon={Globe}
                      error={errors.websiteType}
                    />

                    <FloatingTextarea
                        label="Tell us briefly about your business & static website goals (Optional)"
                      value={form.requirements}
                      onChange={(v) => setForm({ ...form, requirements: v })}
                      icon={MessageSquare}
                    />
                  </div>

                  <div className="mt-4">
                    <Button
                      type="submit"
                      disabled={loading}
                      variant="none"
                      size="none"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-copper hover:brightness-110 px-6 py-4 text-sm font-semibold text-white transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                        <span>{loading ? "Submitting Enrollment..." : "Claim Static Website Offer for ₹499"}</span>
                      {loading ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Send className="h-4 w-4" />
                      )}
                    </Button>

                    {error && (
                      <p className="text-xs text-red-500 font-medium mt-3 text-center">{error}</p>
                    )}

                    <p className="text-[11px] text-muted-foreground text-center mt-3 flex items-center justify-center gap-1">
                      <Lock className="h-3 w-3 text-muted-foreground/70" /> Your information is confidential and will never be shared with third parties.
                    </p>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* Helper Component: Floating Field */
function FloatingField({
  label,
  value,
  onChange,
  type = "text",
  required,
  icon: Icon,
  error,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  icon: React.ComponentType<{ className?: string }>;
  error?: string;
}) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;

  return (
    <div className="relative flex flex-col group">
      <div
        className={`flex items-center gap-3 border-b transition-all duration-300 px-0 py-2 bg-transparent ${
          error
            ? "border-red-500"
            : focused
              ? "border-copper"
              : "border-neutral-300 dark:border-neutral-700 hover:border-neutral-400"
        }`}
      >
        <Icon
          className={`h-4 w-4 transition-colors duration-300 ${
            error ? "text-red-500" : focused ? "text-copper" : "text-muted-foreground/60"
          }`}
        />
        <div className="relative grow">
          <label
            className={`absolute left-0 transition-all duration-300 pointer-events-none select-none text-xs ${
              active
                ? `-top-2.5 text-[10px] font-semibold ${error ? "text-red-500" : "text-copper"}`
                : error
                  ? "top-1 text-red-500/70"
                  : "top-1 text-muted-foreground/70"
            }`}
          >
            {label}
            {required && <span className="text-red-500 ml-0.5">*</span>}
          </label>
          <Input
            unstyled
            type={type}
            value={value}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onChange={(e) => onChange(e.target.value)}
            className="w-full bg-transparent text-sm outline-none pt-2 text-foreground placeholder-transparent"
            placeholder={label}
          />
        </div>
      </div>
      {error && <span className="text-[10px] text-red-500 mt-1 font-medium">{error}</span>}
    </div>
  );
}

/* Helper Component: Custom Floating Select */
function FloatingSelect({
  label,
  value,
  onChange,
  options,
  required,
  icon: Icon,
  error,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  required?: boolean;
  icon: React.ComponentType<{ className?: string }>;
  error?: string;
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative flex flex-col group">
      <div
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-3 border-b transition-all duration-300 px-0 py-2 bg-transparent cursor-pointer ${
          error
            ? "border-red-500"
            : open
              ? "border-copper"
              : "border-neutral-300 dark:border-neutral-700 hover:border-neutral-400"
        }`}
      >
        <Icon
          className={`h-4 w-4 transition-colors duration-300 ${
            error ? "text-red-500" : open ? "text-copper" : "text-muted-foreground/60"
          }`}
        />
        <div className="relative grow pr-6">
          <label className="absolute left-0 transition-all duration-300 pointer-events-none select-none text-[10px] -top-2.5 font-semibold text-copper">
            {label}
            {required && <span className="text-red-500 ml-0.5">*</span>}
          </label>
          <div className="w-full bg-transparent text-sm pt-2 text-foreground min-h-[24px] flex items-center font-medium">
            {value}
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none mt-1">
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ${
                open ? "rotate-180 text-copper" : "text-muted-foreground/50"
              }`}
            />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="absolute z-50 left-0 right-0 top-full mt-2 bg-white dark:bg-card border border-neutral-200 dark:border-border rounded-2xl shadow-xl overflow-hidden py-1.5"
          >
            {options.map((o) => (
              <div
                key={o}
                onClick={() => {
                  onChange(o);
                  setOpen(false);
                }}
                className={`px-4 py-2.5 text-xs text-foreground hover:bg-copper/10 hover:text-copper cursor-pointer transition-colors ${
                  value === o ? "bg-copper/10 font-semibold text-copper" : ""
                }`}
              >
                {o}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      {error && <span className="text-[10px] text-red-500 mt-1 font-medium">{error}</span>}
    </div>
  );
}

/* Helper Component: Floating Textarea */
function FloatingTextarea({
  label,
  value,
  onChange,
  icon: Icon,
  rows = 3,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  icon: React.ComponentType<{ className?: string }>;
  rows?: number;
}) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;

  return (
    <div className="relative flex flex-col group">
      <div
        className={`flex items-start gap-3 border-b transition-all duration-300 px-0 py-2 bg-transparent ${
          focused
            ? "border-copper"
            : "border-neutral-300 dark:border-neutral-700 hover:border-neutral-400"
        }`}
      >
        <Icon
          className={`h-4 w-4 mt-2 transition-colors duration-300 ${
            focused ? "text-copper" : "text-muted-foreground/60"
          }`}
        />
        <div className="relative grow">
          <label
            className={`absolute left-0 transition-all duration-300 pointer-events-none select-none text-xs ${
              active
                ? "-top-2.5 text-[10px] font-semibold text-copper"
                : "top-1 text-muted-foreground/70"
            }`}
          >
            {label}
          </label>
          <Textarea
            unstyled
            value={value}
            rows={rows}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onChange={(e) => onChange(e.target.value)}
            className="w-full bg-transparent text-sm outline-none pt-2 text-foreground resize-none"
          />
        </div>
      </div>
    </div>
  );
}
