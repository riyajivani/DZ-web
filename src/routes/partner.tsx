import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  User,
  Building,
  Briefcase,
  ChevronDown,
  Send,
  MessageSquare,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { PageShell, Container, Eyebrow, SectionHeading } from "@/components/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import talkToUsBg from "@/assets/talkToUs-bg.png";

export const Route = createFileRoute("/partner")({
  head: () => ({
    meta: [
      { title: "Partner With Us — DZ Infotech" },
      {
        name: "description",
        content:
          "Let's build the future together. Experience high-impact digital intelligence tailored for your specific industrial challenges.",
      },
      { property: "og:title", content: "Partner with DZ Infotech" },
      { property: "og:description", content: "Start a project with DZ Infotech." },
    ],
  }),
  component: PartnerPage,
});

const CATEGORIES = [
  "Custom Software Development",
  "Mobile Application Development",
  "Workflow Automation",
  "AI & Data Intelligence",
  "Other Consulting",
];

function PartnerPage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    category: "",
    requirements: "",
  });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <PageShell>
      {/* Hero Header */}
      <div className="bg-white pt-24 pb-12 md:pt-28 md:pb-16 text-foreground">
        <Container>
          <div className="relative">
            <h1 className="text-[12vw] font-bold tracking-tighter text-surface leading-[0.85] select-none md:text-[9vw]">
              Partner
            </h1>

            <div className="border-t border-border/85 mt-4 mb-2" />

            <div className="flex justify-between items-center text-[10px] text-muted-foreground uppercase tracking-widest py-1">
              <span>Collaborate with us</span>
              <span>Transform ideas into code</span>
            </div>

            <div className="border-t border-border/85 mt-2 mb-8" />
          </div>

          {/* Right Aligned Bracketed Statement */}
          <div className="flex justify-end py-4 px-4 mb-10">
            <h2 className="max-w-3xl text-right text-lg font-medium tracking-tight text-muted-foreground md:text-xl leading-relaxed">
              [ Build bespoke technology that drives your enterprise. Team up with software
              architects, domain engineers, and agile builders to construct resilient digital
              systems. ]
            </h2>
          </div>
        </Container>
      </div>

      {/* Main Form + Info Section */}
      <section id="contact-form" className="py-20 md:py-28 relative overflow-hidden mb-28">
        {/* Background Image Underlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.45] lg:opacity-[0.38] pointer-events-none z-0"
          style={{ backgroundImage: `url(${talkToUsBg})` }}
        />
        {/* Top/Bottom Fade Gradients */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-white to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white to-transparent pointer-events-none z-10" />

        <Container className="relative z-10">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Start a Project"
              title={
                <>
                  Tell us about <span className="text-copper font-bold">your project.</span>
                </>
              }
              subtitle="Fill in your project scope below, and our solutions architects will construct a blueprint for your software."
              align="center"
            />

            <div className="mt-16 bg-white/80 backdrop-blur-[3px] border border-white rounded-3xl p-8 md:p-12 shadow-xl grid gap-12 lg:grid-cols-5 items-stretch relative">
              {/* Left Column: Direct Info & Steps */}
              <div className="lg:col-span-2 flex flex-col items-center lg:items-start justify-between py-2 relative z-10 border-b lg:border-b-0 lg:border-r pb-8 lg:pb-0 lg:pr-8 border-border/20">
                <div className="flex flex-col items-center lg:items-start w-full">
                  <span className="inline-block rounded-full border border-copper/20 bg-copper/5 px-3 py-1 text-2xs font-bold tracking-wider uppercase text-copper text-center">
                    Development Process
                  </span>
                  <h3 className="mt-6 text-2xl font-bold tracking-tight font-display text-foreground text-center lg:text-left">
                    How We Collaborate
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed text-center lg:text-left">
                    From your initial idea to robust production software, we follow an
                    engineering-first pipeline.
                  </p>

                  <div className="mt-8 space-y-5 w-full flex flex-col items-center lg:items-start">
                    <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left gap-4 w-full max-w-sm lg:max-w-none">
                      <div className="h-9 w-9 rounded-xl bg-copper/5 border border-copper/10 flex items-center justify-center text-copper shrink-0">
                        <MessageSquare className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs text-foreground font-semibold">1. Discovery Call</p>
                        <p className="text-3xs text-muted-foreground">
                          Align objectives and software scope
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left gap-4 w-full max-w-sm lg:max-w-none">
                      <div className="h-9 w-9 rounded-xl bg-copper/5 border border-copper/10 flex items-center justify-center text-copper shrink-0">
                        <Sparkles className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs text-foreground font-semibold">
                          2. Technical Blueprint
                        </p>
                        <p className="text-3xs text-muted-foreground">
                          Receive architecture plan & timeline
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left gap-4 w-full max-w-sm lg:max-w-none">
                      <div className="h-9 w-9 rounded-xl bg-copper/5 border border-copper/10 flex items-center justify-center text-copper shrink-0">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs text-foreground font-semibold">3. Weekly Sprints</p>
                        <p className="text-3xs text-muted-foreground">
                          Watch your system grow block-by-block
                        </p>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* Direct inquiries */}
                <div className="mt-12 pt-8 border-t border-border/60 relative z-10 w-full space-y-4">
                  {[
                    {
                      icon: Mail,
                      label: "Email Us",
                      value: "info@dzinfotech.in",
                      href: "mailto:info@dzinfotech.in",
                    },
                    {
                      icon: Phone,
                      label: "Call Us",
                      value: "+91 93285 25395",
                      href: "tel:+919328525395",
                    },
                    {
                      icon: MapPin,
                      label: "HQ Address",
                      value: "Bhavnagar, Gujarat, India",
                      href: null,
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-4 p-3 rounded-2xl bg-white/40 hover:bg-white/70 transition-all duration-300 w-full"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-copper/10 bg-copper/5 text-copper">
                        <item.icon className="h-4.5 w-4.5" />
                      </div>
                      <div className="grow text-left">
                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-xs text-foreground font-semibold hover:text-copper transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-xs text-foreground font-semibold">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Premium Form */}
              <form
                onSubmit={submit}
                className="lg:col-span-3 flex flex-col justify-between gap-8 h-full"
              >
                {sent ? (
                  <div className="flex flex-col items-center justify-center text-center py-20 px-4 h-full">
                    <div className="h-14 w-14 rounded-full bg-copper/10 border border-copper/25 flex items-center justify-center text-copper mb-6">
                      <CheckCircle2 className="h-7 w-7" />
                    </div>
                    <h4 className="text-2xl font-bold tracking-tight text-foreground font-display">
                      Blueprint Scheduled!
                    </h4>
                    <p className="text-sm text-muted-foreground mt-3 max-w-md">
                      Thank you for reaching out. A solutions architect from our technical team has
                      received your request and will contact you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="space-y-9">
                      <div>
                        <h4 className="text-xl font-bold tracking-tight text-foreground font-display text-center lg:text-left">
                          Request Proposal
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1 text-center lg:text-left">
                          Fill out the fields below. We keep your project info strictly
                          confidential.
                        </p>
                      </div>

                      <div className="grid gap-8 md:grid-cols-2">
                        <FloatingField
                          label="Full Name"
                          value={form.name}
                          onChange={(v) => setForm({ ...form, name: v })}
                          required
                          icon={User}
                        />
                        <FloatingField
                          label="Company Name"
                          value={form.company}
                          onChange={(v) => setForm({ ...form, company: v })}
                          icon={Building}
                        />
                      </div>

                      <div className="grid gap-8 md:grid-cols-2">
                        <FloatingField
                          label="Work Email"
                          type="email"
                          value={form.email}
                          onChange={(v) => setForm({ ...form, email: v })}
                          required
                          icon={Mail}
                        />
                        <FloatingField
                          label="Phone Number"
                          value={form.phone}
                          onChange={(v) => setForm({ ...form, phone: v })}
                          icon={Phone}
                        />
                      </div>

                      <FloatingSelect
                        label="Project Category"
                        value={form.category}
                        onChange={(v) => setForm({ ...form, category: v })}
                        options={CATEGORIES}
                        required
                        icon={Briefcase}
                      />

                      <FloatingTextarea
                        label="Briefly outline your project requirements"
                        value={form.requirements}
                        onChange={(v) => setForm({ ...form, requirements: v })}
                        required
                        icon={MessageSquare}
                      />
                    </div>

                    <div className="mt-2 pt-2">
                      <Button
                        type="submit"
                        variant="none"
                        size="none"
                        className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-copper px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-copper-glow cursor-pointer shadow-md hover:shadow-lg active:scale-[0.99]"
                      >
                        <span>Send Proposal Request</span>
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </>
                )}
              </form>
            </div>
          </div>
        </Container>
      </section>
    </PageShell>
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
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  icon: React.ComponentType<{ className?: string }>;
}) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;

  return (
    <div className="relative flex flex-col group">
      <div
        className={`flex items-center gap-3 border-b transition-all duration-300 px-0 py-2 bg-transparent ${
          focused ? "border-copper" : "border-neutral-300 hover:border-neutral-400"
        }`}
      >
        <Icon
          className={`h-4 w-4 transition-colors duration-300 ${focused ? "text-copper" : "text-muted-foreground/60"}`}
        />
        <div className="relative grow">
          <label
            className={`absolute left-0 transition-all duration-300 pointer-events-none select-none text-xs ${
              active
                ? "-top-2.5 text-[10px] text-copper font-semibold"
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
            required={required}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onChange={(e) => onChange(e.target.value)}
            className="w-full bg-transparent text-sm outline-none pt-2 text-foreground placeholder-transparent"
            placeholder={label}
          />
        </div>
      </div>
    </div>
  );
}

/* Helper Component: Searchable Custom Floating Select */
function FloatingSelect({
  label,
  value,
  onChange,
  options,
  required,
  icon: Icon,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  required?: boolean;
  icon: React.ComponentType<{ className?: string }>;
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
          focused || open ? "border-copper" : "border-neutral-300 hover:border-neutral-400"
        }`}
      >
        <Icon
          className={`h-4 w-4 transition-colors duration-300 ${
            focused || open ? "text-copper" : "text-muted-foreground/60"
          }`}
        />
        <div className="relative grow pr-6">
          <label
            className={`absolute left-0 transition-all duration-300 pointer-events-none select-none text-[10px] -top-2.5 font-semibold ${
              focused || open || value ? "text-copper" : "text-muted-foreground/70"
            }`}
          >
            {label}
            {required && <span className="text-red-500 ml-0.5">*</span>}
          </label>
          <div className="w-full bg-transparent text-sm pt-2 text-foreground min-h-[24px] flex items-center">
            {value || <span className="text-muted-foreground/40">Select category</span>}
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
              placeholder="Search options..."
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
                No options found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/* Helper Component: Floating Textarea */
function FloatingTextarea({
  label,
  value,
  onChange,
  required,
  icon: Icon,
  rows = 4,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  icon: React.ComponentType<{ className?: string }>;
  rows?: number;
}) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;

  return (
    <div className="relative flex flex-col group">
      <div
        className={`flex items-start gap-3 border-b transition-all duration-300 px-0 py-2 bg-transparent ${
          focused ? "border-copper" : "border-neutral-300 hover:border-neutral-400"
        }`}
      >
        <Icon
          className={`h-4 w-4 mt-2 transition-colors duration-300 ${focused ? "text-copper" : "text-muted-foreground/60"}`}
        />
        <div className="relative grow">
          <label
            className={`absolute left-0 transition-all duration-300 pointer-events-none select-none text-xs ${
              active
                ? "-top-2.5 text-[10px] text-copper font-semibold"
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
            required={required}
          />
        </div>
      </div>
    </div>
  );
}
