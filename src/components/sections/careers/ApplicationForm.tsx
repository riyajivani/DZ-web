import { useState, useEffect, useRef } from "react";
import {
  User,
  Mail,
  Phone,
  Briefcase,
  Link as LinkIcon,
  MessageSquare,
  ChevronDown,
  Send,
  Loader2,
  FileText,
  CheckCircle2,
} from "lucide-react";
import { Container, SectionHeading } from "@/components/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import careerFormBg from "@/assets/career-form.png";
import { POSITIONS } from "@/constants/careers";

interface ApplicationFormProps {
  form: {
    name: string;
    email: string;
    phone: string;
    position: string;
    portfolio: string;
    message: string;
  };
  setForm: React.Dispatch<
    React.SetStateAction<{
      name: string;
      email: string;
      phone: string;
      position: string;
      portfolio: string;
      message: string;
    }>
  >;
  errors: Record<string, string>;
  setErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  loading: boolean;
  sent: boolean;
  error: string | null;
  submit: (e: React.FormEvent) => void;
}

export default function CareersApplicationForm({
  form,
  setForm,
  errors,
  setErrors,
  loading,
  sent,
  error,
  submit,
}: ApplicationFormProps) {
  return (
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
                  We review all applications within 48 hours. If there is a fit, we'll reach out to
                  schedule a technical chat.
                </p>

                <div className="mt-8 space-y-5 w-full flex flex-col items-center lg:items-start">
                  <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left gap-4 w-full max-w-sm lg:max-w-none">
                    <div className="h-9 w-9 rounded-xl bg-copper/5 border border-copper/10 flex items-center justify-center text-copper shrink-0">
                      <FileText className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs text-foreground font-semibold">1. Application review</p>
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
                      <Briefcase className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs text-foreground font-semibold">3. Practical Task</p>
                      <p className="text-3xs text-muted-foreground">A short real-world scenario</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-border/60 relative z-10 text-center lg:text-left w-full">
                <p className="text-2xs uppercase tracking-widest text-muted-foreground font-bold">
                  Direct Inquiry
                </p>
                <p className="mt-1 text-sm text-foreground font-semibold">careers@dzinfotech.com</p>
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
                  <p className="text-sm text-red-500 font-medium mt-4 text-center">{error}</p>
                )}
              </div>
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
              : "border-neutral-300 hover:border-neutral-400"
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

/* Helper Component: Searchable Custom Floating Select */
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

/* Helper Component: Floating Textarea */
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
        className={`flex items-start gap-3 border-b transition-all duration-300 px-0 py-2 bg-transparent ${
          error
            ? "border-red-500"
            : focused
              ? "border-copper"
              : "border-neutral-300 hover:border-neutral-400"
        }`}
      >
        <Icon
          className={`h-4 w-4 mt-2 transition-colors duration-300 ${
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
