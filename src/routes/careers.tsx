import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Trophy,
  GraduationCap,
  TrendingUp,
  MapPin,
  Code2,
  Smartphone,
  Sparkles,
  ArrowUpRight,
  Link as LinkIcon,
  Send,
  User,
  Mail,
  Phone,
  Briefcase,
  MessageSquare,
  ChevronDown,
  FileText,
  Star,
  Loader2,
} from "lucide-react";
import { PageShell, Container, Eyebrow, SectionHeading } from "@/components/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import careerFormBg from "@/assets/career-form.png";
import { Form } from "react-hook-form";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — DZ Infotech" },
      {
        name: "description",
        content:
          "Join DZ Infotech and help solve real-world industry problems through practical, high-impact digital solutions.",
      },
      { property: "og:title", content: "Careers at DZ Infotech" },
      { property: "og:description", content: "Build the future of technology with us." },
    ],
  }),
  component: CareersPage,
});

const WHY = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    desc: "Work on cutting-edge problems and build products that actually make a difference.",
  },
  {
    icon: Trophy,
    title: "Ownership",
    desc: "Take charge of your modules and projects. We value outcomes over hours.",
  },
  {
    icon: GraduationCap,
    title: "Learning Culture",
    desc: "A fast-paced startup environment where you learn more in 3 months than 3 years elsewhere.",
  },
  {
    icon: TrendingUp,
    title: "Accelerated Growth",
    desc: "As the company scales, so does your career path and responsibility.",
  },
];

const ROLES = [
  {
    title: "React Developer Intern",
    location: "Remote / Bhavnagar",
    type: "Internship",
    desc: "Help build and scale our modern digital platforms using Next.js, React and advanced UI frameworks.",
    icon: Code2,
    bgClass: "bg-copper-light",
    borderClass: "border-copper/15",
    textClass: "text-foreground",
    descClass: "text-muted-foreground",
    badgeClass: "bg-copper/5 border-copper/20 text-copper",
    metaClass: "text-muted-foreground",
    iconBgClass: "bg-white border-copper/10 text-copper",
    buttonBgClass: "bg-neutral-900 text-white hover:bg-copper",
    innerBgClass: "bg-copper-light",
  },
  {
    title: "Flutter Developer Intern",
    location: "Remote / Bhavnagar",
    type: "Internship",
    desc: "Work on mobile-first operational tools and cross-platform applications for global industries.",
    icon: Smartphone,
    bgClass: "bg-surface",
    borderClass: "border-border/60",
    textClass: "text-foreground",
    descClass: "text-muted-foreground",
    badgeClass: "bg-copper/5 border-copper/20 text-copper",
    metaClass: "text-muted-foreground",
    iconBgClass: "bg-copper/5 border-copper/15 text-copper",
    buttonBgClass: "bg-neutral-900 text-white hover:bg-copper",
    innerBgClass: "bg-surface",
  },
  {
    title: "Sales Intern",
    location: "Field / Remote",
    type: "Internship",
    desc: "Identify market opportunities and assist in strategic lead generation for DZ Infotech's product suite.",
    icon: TrendingUp,
    bgClass: "bg-neutral-900",
    borderClass: "border-neutral-800",
    textClass: "text-white",
    descClass: "text-neutral-400",
    badgeClass: "bg-white/10 border-white/20 text-white",
    metaClass: "text-neutral-400",
    iconBgClass: "bg-white/10 border-white/10 text-white",
    buttonBgClass: "bg-white text-neutral-900 hover:bg-copper hover:text-white",
    innerBgClass: "bg-neutral-900",
  },
  {
    title: "Marketing / Digital Marketing Intern",
    location: "Remote",
    type: "Internship",
    desc: "Create high-impact digital content and manage campaigns for a visionary technology brand.",
    icon: Sparkles,
    bgClass: "bg-gray-100",
    borderClass: "border-gray-200",
    textClass: "text-foreground",
    descClass: "text-muted-foreground",
    badgeClass: "bg-copper/5 border-copper/20 text-copper",
    metaClass: "text-muted-foreground",
    iconBgClass: "bg-white border-gray-300 text-foreground",
    buttonBgClass: "bg-neutral-900 text-white hover:bg-copper",
    innerBgClass: "bg-gray-100",
  },
];

const POSITIONS = [...ROLES.map((r) => r.title), "Open Application"];

function CareersPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    portfolio: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedIndex((prev) => (prev + 1) % WHY.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!form.name.trim()) {
      newErrors.name = "Full Name is required";
    } else if (form.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters long";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.email.trim())) {
        newErrors.email = "Please enter a valid email address";
      }
    }

    if (form.phone.trim()) {
      const phoneRegex = /^[+]?[0-9\s\-()]{7,20}$/;
      if (!phoneRegex.test(form.phone.trim())) {
        newErrors.phone = "Please enter a valid phone number (at least 7 digits)";
      }
    }

    if (!form.position) {
      newErrors.position = "Please select a position";
    }

    if (form.portfolio.trim()) {
      if (!/^https?:\/\/[^\s$.?#].[^\s]*$/i.test(form.portfolio.trim())) {
        newErrors.portfolio = "Please enter a valid URL (starting with http:// or https://)";
      }
    }

    if (!form.message.trim()) {
      newErrors.message = "Please tell us why you would like to join";
    } else if (form.message.trim().length < 20) {
      newErrors.message = "Please write a bit more details (minimum 20 characters)";
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
      params.append("position", form.position);
      params.append("portfolio", form.portfolio);
      params.append("message", form.message);

      // Send as application/x-www-form-urlencoded to avoid CORS preflight options check.
      // Use no-cors mode to safely bypass response CORS restrictions.
      await fetch(
        "https://script.google.com/macros/s/AKfycby0vgvRDdrSmkjCOvQciwDW5dASUfe_i3zn7yU6vIZn0E5kS5-5IFHYuyL8Sm25wKBqDQ/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: params.toString(),
        }
      );

      setSent(true);
      // Reset form on success
      setForm({
        name: "",
        email: "",
        phone: "",
        position: "",
        portfolio: "",
        message: "",
      });
      setErrors({});
    } catch (err: any) {
      console.error("Submission error:", err);
      setError("Something went wrong. Please try again or contact us directly at careers@dzinfotech.com.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageShell>
      {/* Services-like Hero/Header wrapper */}
      <div className="bg-white pt-24 pb-12 md:pt-28 md:pb-16 text-foreground">
        <Container>
          {/* Header Section */}
          <div className="relative">
            <h1 className="text-[12vw] font-bold tracking-tighter text-surface leading-[0.85] select-none md:text-[9vw]">
              Careers
            </h1>

            <div className="border-t border-border/85 mt-4 mb-2" />

            <div className="flex justify-between items-center text-[10px] text-muted-foreground uppercase tracking-widest py-1">
              <span>Join our team</span>
              <span>Build the Future</span>
            </div>

            <div className="border-t border-border/85 mt-2 mb-8" />
          </div>

          {/* Right Aligned Bracketed Intro Statement */}
          <div className="flex justify-end py-4 px-4 mb-10">
            <h2 className="max-w-3xl text-right text-lg font-medium tracking-tight text-muted-foreground md:text-xl leading-relaxed">
              [ Build technology that solves real-world problems. Grow with a team that values
              ownership, curiosity, and continuous learning. ]
            </h2>
          </div>
        </Container>
      </div>

      {/* Why join */}
      <section className="py-20 md:py-28 bg-[#fafafa] border-t border-border/40">
        <Container>
          <SectionHeading
            eyebrow="Culture"
            title={
              <>
                Why join <span className="text-copper font-bold">DZ Infotech?</span>
              </>
            }
            subtitle="Explore our core values and pillars that define what it is like to build technology with us."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {WHY.map((w, i) => {
              const isHighlighted = i === highlightedIndex;
              return (
                <motion.div
                  key={w.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className={`rounded-3xl border transition-all duration-300 p-8 flex flex-col justify-between min-h-[220px] bg-white ${isHighlighted
                      ? "border-copper shadow-lg scale-[1.03]"
                      : "border-border/60 hover:border-copper/45 hover:shadow-lg"
                    }`}
                >
                  <div>
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-300 border-copper/30 bg-copper/5 text-copper ${isHighlighted ? "animate-pulse" : ""
                        }`}
                    >
                      <w.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-6 text-lg font-bold tracking-tight text-foreground flex items-center gap-1.5">
                      <span>{w.title}</span>
                      {isHighlighted && (
                        <Star className="h-4 w-4 text-copper fill-copper animate-pulse" />
                      )}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Open roles */}
      <section id="roles" className="bg-white py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Open Positions"
            title={
              <>
                Open <span className="text-copper font-bold">opportunities.</span>
              </>
            }
            subtitle="Find the right role for your skillset and start your journey with a team of active builders."
          />
          <div className="mx-auto mt-12 grid gap-8 md:grid-cols-2 max-w-5xl">
            {ROLES.map((r, i) => {
              const Icon = r.icon;
              return (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className={`group relative flex flex-col justify-between rounded-3xl rounded-tr-none ${r.bgClass} p-8 md:p-10 hover:shadow-xl transition-all duration-500 min-h-[320px]`}
                >
                  {/* The Custom Cut-out Corner block */}
                  <div className="absolute -top-px -right-px w-[65px] h-[65px] bg-white z-20 rounded-bl-3xl">
                    {/* Circle Button with Arrow */}
                    <a
                      href="/careers#apply"
                      className={`absolute top-2 right-2 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-105 ${r.buttonBgClass}`}
                      onClick={() => setForm((f) => ({ ...f, position: r.title }))}
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </a>

                    {/* Concave Corner Top-Left */}
                    <div className="absolute top-0 -left-4 w-4 h-4 bg-white">
                      <div className={`w-full h-full ${r.innerBgClass} rounded-tr-2xl`} />
                    </div>

                    {/* Concave Corner Bottom-Right */}
                    <div className="absolute -bottom-4 right-0 w-4 h-4 bg-white">
                      <div className={`w-full h-full ${r.innerBgClass} rounded-tr-2xl`} />
                    </div>
                  </div>

                  <div>
                    {/* Circular Icon and Badge Row */}
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${r.iconBgClass}`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <span
                        className={`rounded-full border px-3 py-0.5 text-2xs font-bold tracking-wider uppercase ${r.badgeClass}`}
                      >
                        {r.type}
                      </span>
                    </div>

                    <h3
                      className={`text-xl font-bold tracking-tight ${r.textClass} font-display mt-2`}
                    >
                      {r.title}
                    </h3>
                    <p className={`mt-3 text-sm leading-relaxed ${r.descClass}`}>{r.desc}</p>
                  </div>

                  <div
                    className={`mt-8 pt-6 border-t ${r.bgClass === "bg-neutral-900" ? "border-neutral-800" : "border-border/40"} flex items-center gap-1.5 text-xs ${r.metaClass} font-medium`}
                  >
                    <MapPin className="h-3.5 w-3.5 text-copper" />
                    <span>{r.location}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Application form */}
      <section id="apply" className="py-20 md:py-28 relative overflow-hidden mb-28">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.45] lg:opacity-[0.38] pointer-events-none z-0"
          style={{ backgroundImage: `url(${careerFormBg})` }}
        />
        {/* Gradients to fade top and bottom edges */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-white to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white to-transparent pointer-events-none z-10" />
        <Container className="relative z-10">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Submit Application"
              title={
                <>
                  Ready to <span className="text-copper font-bold">apply?</span>
                </>
              }
              subtitle="Submit your application details below, and our engineering team will get back to you within 48 hours."
              align="center"
            />

            <div className="mt-16 bg-white/80 backdrop-blur-[3px] border border-white rounded-3xl p-8 md:p-12 shadow-xl grid gap-12 lg:grid-cols-5 items-stretch relative">
              {/* Left Column: Info & Process */}
              <div className="lg:col-span-2 flex flex-col items-center lg:items-start justify-between py-2 relative z-10 border-b lg:border-b-0 lg:border-r pb-8 lg:pb-0 lg:pr-8 border-border/20">
                <div className="flex flex-col items-center lg:items-start w-full">
                  <span className="inline-block rounded-full border border-copper/20 bg-copper/5 px-3 py-1 text-2xs font-bold tracking-wider uppercase text-copper text-center">
                    Hiring Process
                  </span>
                  <h3 className="mt-6 text-2xl font-bold tracking-tight font-display text-foreground text-center lg:text-left">
                    How We Hire
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed text-center lg:text-left">
                    We review all applications within 48 hours. If there is a fit, we'll reach out
                    to schedule a technical chat.
                  </p>

                  <div className="mt-8 space-y-5 w-full flex flex-col items-center lg:items-start">
                    <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left gap-4 w-full max-w-sm lg:max-w-none">
                      <div className="h-9 w-9 rounded-xl bg-copper/5 border border-copper/10 flex items-center justify-center text-copper shrink-0">
                        <FileText className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs text-foreground font-semibold">
                          1. Application review
                        </p>
                        <p className="text-3xs text-muted-foreground">Within 2 business days</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left gap-4 w-full max-w-sm lg:max-w-none">
                      <div className="h-9 w-9 rounded-xl bg-copper/5 border border-copper/10 flex items-center justify-center text-copper shrink-0">
                        <MessageSquare className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs text-foreground font-semibold">2. Technical Chat</p>
                        <p className="text-3xs text-muted-foreground">
                          1-on-1 with a senior engineer
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left gap-4 w-full max-w-sm lg:max-w-none">
                      <div className="h-9 w-9 rounded-xl bg-copper/5 border border-copper/10 flex items-center justify-center text-copper shrink-0">
                        <Code2 className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs text-foreground font-semibold">3. Practical Task</p>
                        <p className="text-3xs text-muted-foreground">
                          A short real-world scenario
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border/60 relative z-10 text-center lg:text-left w-full">
                  <p className="text-2xs uppercase tracking-widest text-muted-foreground font-bold">
                    Direct Inquiry
                  </p>
                  <p className="mt-1 text-sm text-foreground font-semibold">
                    careers@dzinfotech.com
                  </p>
                </div>
              </div>

              {/* Right Column: Premium Form */}
              <form
                onSubmit={submit}
                className="lg:col-span-3 flex flex-col justify-between gap-8 h-full"
              >
                <div className="space-y-9">
                  <div>
                    <h4 className="text-xl font-bold tracking-tight text-foreground font-display text-center lg:text-left">
                      Apply Now
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1 text-center lg:text-left">
                      Please fill in your details below. Fields marked with * are required.
                    </p>
                  </div>

                  <div className="grid gap-8 md:grid-cols-2">
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
                      label="Work Email"
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

                  <div className="grid gap-8 md:grid-cols-2">
                    <FloatingField
                      label="Phone Number"
                      value={form.phone}
                      onChange={(v) => {
                        setForm({ ...form, phone: v });
                        if (errors.phone) setErrors((prev) => ({ ...prev, phone: "" }));
                      }}
                      icon={Phone}
                      error={errors.phone}
                    />
                    <FloatingSelect
                      label="Position"
                      value={form.position}
                      onChange={(v) => {
                        setForm({ ...form, position: v });
                        if (errors.position) setErrors((prev) => ({ ...prev, position: "" }));
                      }}
                      options={POSITIONS}
                      required
                      icon={Briefcase}
                      error={errors.position}
                    />
                  </div>

                  <FloatingField
                    label="Portfolio / Resume URL"
                    value={form.portfolio}
                    onChange={(v) => {
                      setForm({ ...form, portfolio: v });
                      if (errors.portfolio) setErrors((prev) => ({ ...prev, portfolio: "" }));
                    }}
                    icon={LinkIcon}
                    error={errors.portfolio}
                  />

                  <FloatingTextarea
                    label="Why would you like to join DZ Infotech?"
                    value={form.message}
                    onChange={(v) => {
                      setForm({ ...form, message: v });
                      if (errors.message) setErrors((prev) => ({ ...prev, message: "" }));
                    }}
                    required
                    icon={MessageSquare}
                    error={errors.message}
                  />
                </div>

                <div className="mt-2 pt-2">
                  <Button
                    type="submit"
                    disabled={loading}
                    variant="none"
                    size="none"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-copper px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-copper-glow cursor-pointer shadow-md hover:shadow-lg active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>{loading ? "Submitting..." : "Submit Application"}</span>
                    {loading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                  </Button>
                  {sent && (
                    <p className="text-sm text-copper font-medium mt-4 text-center">
                      Thanks — your application has been received. We'll be in touch soon.
                    </p>
                  )}
                  {error && (
                    <p className="text-sm text-red-500 font-medium mt-4 text-center">
                      {error}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}

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
        className={`flex items-center gap-3 border-b transition-all duration-300 px-0 py-2 bg-transparent ${error
          ? "border-red-500"
          : focused
            ? "border-copper"
            : "border-neutral-300 hover:border-neutral-400"
          }`}
      >
        <Icon
          className={`h-4 w-4 transition-colors duration-300 ${error ? "text-red-500" : focused ? "text-copper" : "text-muted-foreground/60"
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
  const [focused, setFocused] = useState(false);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
        setFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredOptions = options.filter((o) => o.toLowerCase().includes(search.toLowerCase()));

  return (
    <div ref={containerRef} className="relative flex flex-col group">
      <div
        onClick={() => {
          setOpen(!open);
          setFocused(true);
        }}
        className={`flex items-center gap-3 border-b transition-all duration-300 px-0 py-2 bg-transparent cursor-pointer ${
          error
            ? "border-red-500"
            : focused || open
              ? "border-copper"
              : "border-neutral-300 hover:border-neutral-400"
        }`}
      >
        <Icon
          className={`h-4 w-4 transition-colors duration-300 ${
            error ? "text-red-500" : focused || open ? "text-copper" : "text-muted-foreground/60"
          }`}
        />
        <div className="relative grow pr-6">
          <label
            className={`absolute left-0 transition-all duration-300 pointer-events-none select-none text-[10px] -top-2.5 font-semibold ${
              error
                ? "text-red-500"
                : focused || open || value
                  ? "text-copper"
                  : "text-muted-foreground/70"
            }`}
          >
            {label}
            {required && <span className="text-red-500 ml-0.5">*</span>}
          </label>
          <div className="w-full bg-transparent text-sm pt-2 text-foreground min-h-[24px] flex items-center">
            {value || <span className="text-muted-foreground/40">Select position</span>}
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

      {open && (
        <div className="absolute z-50 left-0 right-0 top-full mt-2 bg-white/95 backdrop-blur-md border border-neutral-200 rounded-2xl shadow-xl overflow-hidden py-2">
          <div className="px-3 py-1.5 border-b border-neutral-100 flex items-center gap-2">
            <Input
              unstyled
              type="text"
              placeholder="Search positions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onClick={(e) => e.stopPropagation()}
              className="w-full text-xs bg-neutral-50 border border-neutral-200 rounded-lg px-2.5 py-1.5 outline-none focus:border-copper"
            />
          </div>
          <div className="max-h-48 overflow-y-auto">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((o) => (
                <div
                  key={o}
                  onClick={(e) => {
                    e.stopPropagation();
                    onChange(o);
                    setOpen(false);
                    setFocused(false);
                    setSearch("");
                  }}
                  className={`px-4 py-2.5 text-xs text-foreground hover:bg-copper/5 hover:text-copper cursor-pointer transition-colors ${
                    value === o ? "bg-copper/5 font-semibold text-copper" : ""
                  }`}
                >
                  {o}
                </div>
              ))
            ) : (
              <div className="px-4 py-3 text-xs text-muted-foreground text-center">
                No positions found
              </div>
            )}
          </div>
        </div>
      )}
      {error && <span className="text-[10px] text-red-500 mt-1 font-medium">{error}</span>}
    </div>
  );
}

function FloatingTextarea({
  label,
  value,
  onChange,
  required,
  icon: Icon,
  rows = 4,
  error,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  icon: React.ComponentType<{ className?: string }>;
  rows?: number;
    error?: string;
}) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;

  return (
    <div className="relative flex flex-col group">
      <div
        className={`flex items-start gap-3 border-b transition-all duration-300 px-0 py-2 bg-transparent ${error
          ? "border-red-500"
          : focused
            ? "border-copper"
            : "border-neutral-300 hover:border-neutral-400"
          }`}
      >
        <Icon
          className={`h-4 w-4 mt-2 transition-colors duration-300 ${error ? "text-red-500" : focused ? "text-copper" : "text-muted-foreground/60"
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
      {error && <span className="text-[10px] text-red-500 mt-1 font-medium">{error}</span>}
    </div>
  );
}
