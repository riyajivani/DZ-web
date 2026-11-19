import { useState, useRef, useEffect } from "react";
import {
  User,
  Mail,
  Phone,
  GraduationCap,
  Link as LinkIcon,
  MessageSquare,
  ChevronDown,
  Send,
  Loader2,
  FileText,
  CheckCircle2,
  Calendar,
  AlertCircle,
  HelpCircle,
} from "lucide-react";
import { Container, SectionHeading } from "@/components/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import careerFormBg from "@/assets/career-form.png";
import { ACADEMIC_YEARS, INTERNSHIP_BATCHES } from "@/constants/internship";

const GOOGLE_SHEET_INTERNSHIP_URL =
  "https://script.google.com/macros/s/AKfycbxQSWzi8itH0JplB94EkTjj-UKgyXyThEpeizybfJDdzPygu82-Zd69_w7zG6P6mZ3pQw/exec";

export interface InternshipFormState {
  name: string;
  email: string;
  phone: string;
  college: string;
  year: string;
  batch: string;
  portfolio: string;
  message: string;
  acknowledged: boolean;
}

export default function InternshipApplicationForm() {
  const [form, setForm] = useState<InternshipFormState>({
    name: "",
    email: "",
    phone: "",
    college: "",
    year: "",
    batch: "",
    portfolio: "",
    message: "",
    acknowledged: false,
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!form.name.trim()) {
      errs.name = "Full Name is required";
    } else if (form.name.trim().length < 2) {
      errs.name = "Name must be at least 2 characters";
    }

    if (!form.email.trim()) {
      errs.email = "Email address is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.email.trim())) {
        errs.email = "Please enter a valid email address";
      }
    }

    const trimmedPhone = form.phone.trim();
    if (!trimmedPhone) {
      errs.phone = "Phone number with country code is required";
    } else if (!trimmedPhone.startsWith("+")) {
      errs.phone = "Country code starting with '+' is required (e.g. +91, +1)";
    } else {
      const digitsOnly = trimmedPhone.replace(/\D/g, "");
      const phoneRegex = /^\+[1-9]\d{0,3}[\s\-()]?[0-9\s\-()]{6,14}$/;
      if (!phoneRegex.test(trimmedPhone) || digitsOnly.length < 8 || digitsOnly.length > 15) {
        errs.phone = "Please enter a valid phone number (e.g. +91 98765 43210)";
      }
    }

    if (!form.college.trim()) {
      errs.college = "College / University name is required";
    }

    if (!form.year) {
      errs.year = "Please select your academic year / status";
    }

    if (!form.batch) {
      errs.batch = "Please select your preferred internship batch (3 or 6 months)";
    }

    if (form.portfolio.trim()) {
      if (!/^https?:\/\/[^\s$.?#].[^\s]*$/i.test(form.portfolio.trim())) {
        errs.portfolio = "Please enter a valid URL (starting with http:// or https://)";
      }
    }

    if (!form.message.trim()) {
      errs.message = "Please share your learning goals and motivation";
    } else if (form.message.trim().length < 20) {
      errs.message = "Please provide a bit more detail (minimum 20 characters)";
    }

    if (!form.acknowledged) {
      errs.acknowledged =
        "Please confirm your understanding of the enrollment-based internship program";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setError(null);
    setSent(false);

    try {
      const params = new URLSearchParams();
      params.append("form_type", "internship_application");
      params.append("name", form.name);
      params.append("email", form.email);
      params.append("phone", form.phone);
      params.append("college", form.college);
      params.append("year", form.year);
      params.append("batch", form.batch);
      params.append("duration", form.batch);
      params.append("portfolio", form.portfolio);
      params.append("message", form.message);
      params.append("acknowledged", form.acknowledged ? "Yes" : "No");
      params.append("submission_date", new Date().toISOString());

      await fetch(GOOGLE_SHEET_INTERNSHIP_URL, {
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
        college: "",
        year: "",
        batch: "",
        portfolio: "",
        message: "",
        acknowledged: false,
      });
      setErrors({});
    } catch (err: unknown) {
      console.error("Internship application submission error:", err);
      setError(
        "Something went wrong while submitting. Please try again or reach out directly to info@dzinfotech.in.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="apply-form" className="py-20 md:py-28 relative overflow-hidden mb-28">
      {/* Background with Opacity and Edge Fades */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.45] lg:opacity-[0.38] pointer-events-none z-0"
        style={{ backgroundImage: `url(${careerFormBg})` }}
      />
      <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-white to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white to-transparent pointer-events-none z-10" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Student Application"
            title={
              <>
                Apply for the <br />
                <span className="text-copper font-bold">Internship Program</span>
              </>
            }
            subtitle="Submit your application below for our 3-month or 6-month batch. Our engineering team reviews each submission and schedules an introductory discussion."
            align="center"
          />

          <div className="mt-16 bg-white/85 backdrop-blur-[4px] border border-white rounded-3xl p-8 md:p-12 shadow-xl grid gap-12 lg:grid-cols-5 items-stretch relative">
            {/* Left Column: Process & Direct Inquiry */}
            <div className="lg:col-span-2 flex flex-col items-center lg:items-start justify-between py-2 relative z-10 border-b lg:border-b-0 lg:border-r pb-8 lg:pb-0 lg:pr-8 border-border/20">
              <div className="flex flex-col items-center lg:items-start w-full">
                <span className="inline-block rounded-full border border-copper/20 bg-copper/5 px-3 py-1 text-2xs font-bold tracking-wider uppercase text-copper text-center">
                  Admission Journey
                </span>
                <h3 className="mt-6 text-2xl font-bold tracking-tight font-display text-foreground text-center lg:text-left">
                  How To Join
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed text-center lg:text-left">
                  We review student applications on a rolling basis. Selected candidates are invited
                  for an introductory discussion before onboarding.
                </p>

                <div className="mt-8 space-y-5 w-full flex flex-col items-center lg:items-start">
                  <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left gap-4 w-full max-w-sm lg:max-w-none">
                    <div className="h-9 w-9 rounded-xl bg-copper/5 border border-copper/10 flex items-center justify-center text-copper shrink-0">
                      <FileText className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs text-foreground font-semibold">1. Application Review</p>
                      <p className="text-3xs text-muted-foreground">
                        Within 48 hours of submission
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left gap-4 w-full max-w-sm lg:max-w-none">
                    <div className="h-9 w-9 rounded-xl bg-copper/5 border border-copper/10 flex items-center justify-center text-copper shrink-0">
                      <MessageSquare className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs text-foreground font-semibold">
                        2. Technical & Fit Chat
                      </p>
                      <p className="text-3xs text-muted-foreground">
                        Introductory call with a mentor
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left gap-4 w-full max-w-sm lg:max-w-none">
                    <div className="h-9 w-9 rounded-xl bg-copper/5 border border-copper/10 flex items-center justify-center text-copper shrink-0">
                      <Calendar className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs text-foreground font-semibold">
                        3. Enrollment & Kickoff
                      </p>
                      <p className="text-3xs text-muted-foreground">
                        Project assignment & live sessions begin
                      </p>
                    </div>
                  </div>
                </div>

                {/* Program Details Highlight Box */}
                <div className="mt-8 p-4 rounded-2xl bg-surface border border-border/60 w-full text-xs text-muted-foreground space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-copper shrink-0" />
                    <span>3 Months & 6 Months Flexible Batches</span>
                  </div>
                  <div className="flex items-center gap-2 font-semibold text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-copper shrink-0" />
                    <span>Individual Live Project Allocation</span>
                  </div>
                  <div className="flex items-center gap-2 font-semibold text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-copper shrink-0" />
                    <span>Collaborative Demo Group Projects</span>
                  </div>
                  <div className="flex items-center gap-2 font-semibold text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-copper shrink-0" />
                    <span>Official Certificate of Completion</span>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-border/60 relative z-10 text-center lg:text-left w-full">
                <p className="text-2xs uppercase tracking-widest text-muted-foreground font-bold">
                  Questions or Direct Inquiries
                </p>
                <p className="mt-1 text-sm text-foreground font-semibold">info@dzinfotech.in</p>
              </div>
            </div>

            {/* Right Column: Student Form */}
            <form
              onSubmit={handleSubmit}
              className="lg:col-span-3 flex flex-col justify-between gap-8 h-full"
            >
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-bold tracking-tight text-foreground font-display text-center lg:text-left">
                    Internship Application Form
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1 text-center lg:text-left">
                    Please provide accurate information. Fields marked with * are mandatory.
                  </p>
                </div>

                {/* Name & Email */}
                <div className="grid gap-6 md:grid-cols-2">
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

                {/* Phone & College */}
                <div className="grid gap-6 md:grid-cols-2">
                  <FloatingField
                    label="Phone / WhatsApp Number (+CountryCode)"
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
                    label="College / University Name"
                    value={form.college}
                    onChange={(v) => {
                      setForm({ ...form, college: v });
                      if (errors.college) setErrors((prev) => ({ ...prev, college: "" }));
                    }}
                    required
                    icon={GraduationCap}
                    error={errors.college}
                  />
                </div>

                {/* Year & Batch / Duration */}
                <div className="grid gap-6 md:grid-cols-2">
                  <FloatingSelect
                    label="Academic Year / Degree Status"
                    placeholder="Select current year"
                    value={form.year}
                    onChange={(v) => {
                      setForm({ ...form, year: v });
                      if (errors.year) setErrors((prev) => ({ ...prev, year: "" }));
                    }}
                    options={ACADEMIC_YEARS}
                    required
                    icon={Calendar}
                    error={errors.year}
                  />

                  <FloatingSelect
                    label="Internship Batch / Duration"
                    placeholder="Select batch (3 or 6 months)"
                    value={form.batch}
                    onChange={(v) => {
                      setForm({ ...form, batch: v });
                      if (errors.batch) setErrors((prev) => ({ ...prev, batch: "" }));
                    }}
                    options={INTERNSHIP_BATCHES as unknown as string[]}
                    required
                    icon={Calendar}
                    error={errors.batch}
                  />
                </div>

                {/* Portfolio URL */}
                <FloatingField
                  label="Portfolio / GitHub / LinkedIn URL (Optional)"
                  value={form.portfolio}
                  onChange={(v) => {
                    setForm({ ...form, portfolio: v });
                    if (errors.portfolio) setErrors((prev) => ({ ...prev, portfolio: "" }));
                  }}
                  icon={LinkIcon}
                  error={errors.portfolio}
                />

                {/* Motivation / Learning Goals */}
                <FloatingTextarea
                  label="Why would you like to join this internship & what are your learning goals?"
                  value={form.message}
                  onChange={(v) => {
                    setForm({ ...form, message: v });
                    if (errors.message) setErrors((prev) => ({ ...prev, message: "" }));
                  }}
                  required
                  icon={MessageSquare}
                  error={errors.message}
                />

                {/* Program Acknowledgment Checkbox */}
                <div className="rounded-2xl border border-border/80 bg-surface/70 p-4 transition-all hover:border-copper/40">
                  <label className="flex items-start gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={form.acknowledged}
                      onChange={(e) => {
                        setForm({ ...form, acknowledged: e.target.checked });
                        if (errors.acknowledged) {
                          setErrors((prev) => ({ ...prev, acknowledged: "" }));
                        }
                      }}
                      className="mt-0.5 h-4 w-4 rounded border-neutral-300 text-copper accent-copper focus:ring-copper cursor-pointer"
                    />
                    <div className="space-y-0.5 text-xs">
                      <span className="font-semibold text-foreground">
                        Paid Program Enrollment Acknowledgment{" "}
                        <span className="text-red-500">*</span>
                      </span>
                      <p className="text-muted-foreground leading-relaxed text-2xs">
                        I understand that this industrial internship (3-month or 6-month batch)
                        includes structured interactive sessions, an individual live project, demo
                        group projects, and an official certificate of completion. As an intensive
                        training initiative, a student enrollment fee applies upon selection.
                      </p>
                    </div>
                  </label>
                  {errors.acknowledged && (
                    <p className="text-[10px] text-red-500 mt-2 font-medium">
                      {errors.acknowledged}
                    </p>
                  )}
                </div>
              </div>

              {/* Submit CTA & Feedback Messages */}
              <div className="mt-2 pt-2">
                <Button
                  type="submit"
                  disabled={loading}
                  variant="none"
                  size="none"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-copper px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-copper-glow cursor-pointer shadow-md hover:shadow-lg active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>
                    {loading ? "Submitting Application..." : "Submit Internship Application"}
                  </span>
                  {loading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </Button>

                {sent && (
                  <div className="mt-4 rounded-xl border border-copper/30 bg-copper/5 p-4 text-center">
                    <p className="text-sm text-copper font-semibold flex items-center justify-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4" />
                      Application Submitted Successfully!
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Thank you for applying. Our engineering mentorship team will review your
                      profile and reach out within 48 hours.
                    </p>
                  </div>
                )}

                {error && (
                  <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4 text-center">
                    <p className="text-sm text-red-600 font-medium flex items-center justify-center gap-1.5">
                      <AlertCircle className="h-4 w-4" />
                      {error}
                    </p>
                  </div>
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
  placeholder,
  value,
  onChange,
  options,
  required,
  icon: Icon,
  error,
}: {
  label: string;
  placeholder?: string;
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
            {value || (
              <span className="text-muted-foreground/40">{placeholder || "Select option"}</span>
            )}
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
              placeholder="Search..."
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
