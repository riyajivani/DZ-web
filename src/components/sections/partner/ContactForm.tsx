import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Loader2,
} from "lucide-react";
import { Container, SectionHeading } from "@/components/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import talkToUsBg from "@/assets/talkToUs-bg.png";
import { CATEGORIES } from "@/constants/partner";

export default function PartnerContactForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    category: "",
    requirements: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [isMobile, setIsMobile] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(0); // 1 for forward, -1 for backward

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const validateStep = (step: number) => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!form.name.trim()) {
        newErrors.name = "Full Name is required";
      } else if (form.name.trim().length < 2) {
        newErrors.name = "Name must be at least 2 characters long";
      }
    }

    if (step === 3) {
      if (!form.email.trim()) {
        newErrors.email = "Email is required";
      } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(form.email.trim())) {
          newErrors.email = "Please enter a valid email address";
        }
      }
    }

    if (step === 4) {
      if (form.phone.trim()) {
        const phoneRegex = /^[+]?[0-9\s\-()]{7,20}$/;
        if (!phoneRegex.test(form.phone.trim())) {
          newErrors.phone = "Please enter a valid phone number (at least 7 digits)";
        }
      }
    }

    if (step === 5) {
      if (!form.category) {
        newErrors.category = "Please select a project category";
      }
    }

    if (step === 6) {
      if (!form.requirements.trim()) {
        newErrors.requirements = "Please outline your project requirements";
      } else if (form.requirements.trim().length < 20) {
        newErrors.requirements = "Please write a bit more description (minimum 20 characters)";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setDirection(1);
      setCurrentStep((prev) => Math.min(prev + 1, 6));
    }
  };

  const prevStep = () => {
    setDirection(-1);
    setErrors({});
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

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

    if (!form.category) {
      newErrors.category = "Please select a project category";
    }

    if (!form.requirements.trim()) {
      newErrors.requirements = "Please outline your project requirements";
    } else if (form.requirements.trim().length < 20) {
      newErrors.requirements = "Please write a bit more description (minimum 20 characters)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isMobile) {
      if (currentStep < 6) {
        nextStep();
        return;
      }
      if (!validateStep(6)) return;
    } else {
      if (!validateForm()) return;
    }

    setLoading(true);
    setError(null);
    setSent(false);

    try {
      const params = new URLSearchParams();
      params.append("name", form.name);
      params.append("company", form.company);
      params.append("email", form.email);
      params.append("phone", form.phone);
      params.append("category", form.category);
      params.append("requirements", form.requirements);

      await fetch(
        "https://script.google.com/macros/s/AKfycbzJbjboyMVRTPsUGHeszbYC_uKi4tSG0loUeIGeE-oxYrs6kO1lfpPzoxIeFsO_nKKf/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: params.toString(),
        },
      );

      setSent(true);
      // Reset form on success
      setForm({
        name: "",
        company: "",
        email: "",
        phone: "",
        category: "",
        requirements: "",
      });
      setErrors({});
      if (isMobile) {
        setCurrentStep(1);
      }
    } catch (err) {
      console.error("Submission error:", err);
      setError(
        "Something went wrong. Please try again or contact us directly at info@dzinfotech.in.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact-form" className="py-20 md:py-28 relative overflow-hidden mb-28">
      {/* Background Image Underlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.20] lg:opacity-[0.20] pointer-events-none z-0"
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

          <div className="mt-16 bg-white/80 backdrop-blur-[3px] border border-white rounded-3xl p-5 sm:p-8 md:p-12 shadow-xl grid gap-12 lg:grid-cols-5 items-stretch relative">
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
                    value: "+91 93278 53727",
                    href: "tel:+919327853727",
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
              ) : isMobile ? (
                <div className="flex flex-col justify-between h-full min-h-[280px]">
                  {/* Step Form Header: Title and Progress */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-end">
                      <div>
                        <h4 className="text-xl font-bold tracking-tight text-foreground font-display">
                          Request Proposal
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Step {currentStep} of 6:{" "}
                          {
                            [
                              "Full Name",
                              "Company Name",
                              "Work Email",
                              "Phone Number",
                              "Project Category",
                              "Project Requirements",
                            ][currentStep - 1]
                          }
                        </p>
                      </div>
                      {/* Progress Dots */}
                      <div className="flex items-center gap-1.5 pb-1">
                        {Array.from({ length: 6 }).map((_, i) => (
                          <div
                            key={i}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                              i + 1 === currentStep
                                ? "w-6 bg-copper"
                                : i + 1 < currentStep
                                  ? "w-1.5 bg-copper/40"
                                  : "w-1.5 bg-neutral-200"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    {/* Progress Bar */}
                    <div className="h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-copper rounded-full transition-all duration-300 ease-out"
                        style={{ width: `${(currentStep / 6) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Active Step Field Container */}
                  <div className="relative py-4 my-auto min-h-[110px] flex flex-col justify-center">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                      <motion.div
                        key={currentStep}
                        custom={direction}
                        variants={{
                          enter: (direction: number) => ({
                            x: direction > 0 ? 50 : -50,
                            opacity: 0,
                          }),
                          center: {
                            x: 0,
                            opacity: 1,
                          },
                          exit: (direction: number) => ({
                            x: direction < 0 ? 50 : -50,
                            opacity: 0,
                          }),
                        }}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="w-full"
                      >
                        {currentStep === 1 && (
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
                        )}
                        {currentStep === 2 && (
                          <FloatingField
                            label="Company Name"
                            value={form.company}
                            onChange={(v) => setForm({ ...form, company: v })}
                            icon={Building}
                          />
                        )}
                        {currentStep === 3 && (
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
                        )}
                        {currentStep === 4 && (
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
                        )}
                        {currentStep === 5 && (
                          <FloatingSelect
                            label="Project Category"
                            value={form.category}
                            onChange={(v) => {
                              setForm({ ...form, category: v });
                              if (errors.category) setErrors((prev) => ({ ...prev, category: "" }));
                            }}
                            options={CATEGORIES}
                            required
                            icon={Briefcase}
                            error={errors.category}
                          />
                        )}
                        {currentStep === 6 && (
                          <FloatingTextarea
                            label="Briefly outline your project requirements"
                            value={form.requirements}
                            onChange={(v) => {
                              setForm({ ...form, requirements: v });
                              if (errors.requirements)
                                setErrors((prev) => ({ ...prev, requirements: "" }));
                            }}
                            required
                            icon={MessageSquare}
                            error={errors.requirements}
                          />
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex flex-col gap-3 mt-6">
                    {currentStep < 6 ? (
                      <div className="flex gap-4">
                        {currentStep > 1 && (
                          <Button
                            type="button"
                            onClick={prevStep}
                            variant="none"
                            size="none"
                            className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl border border-neutral-300 px-4 py-3 text-sm font-semibold text-neutral-700 transition-all duration-300 hover:bg-neutral-50 cursor-pointer shadow-xs active:scale-[0.99]"
                          >
                            Back
                          </Button>
                        )}
                        <Button
                          type="button"
                          onClick={nextStep}
                          variant="none"
                          size="none"
                          className="flex-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-copper px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-copper-glow cursor-pointer shadow-md hover:shadow-lg active:scale-[0.99]"
                        >
                          Next
                        </Button>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-3">
                        <Button
                          type="submit"
                          disabled={loading}
                          variant="none"
                          size="none"
                          className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-copper px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-copper-glow cursor-pointer shadow-md hover:shadow-lg active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <span>{loading ? "Submitting..." : "Send Proposal Request"}</span>
                          {loading ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            <Send className="h-4 w-4" />
                          )}
                        </Button>
                        {currentStep > 1 && (
                          <Button
                            type="button"
                            onClick={prevStep}
                            variant="none"
                            size="none"
                            className="w-full inline-flex items-center justify-center gap-2 rounded-2xl border border-neutral-300 px-4 py-3 text-sm font-semibold text-neutral-700 transition-all duration-300 hover:bg-neutral-50 cursor-pointer shadow-xs active:scale-[0.99]"
                          >
                            Back
                          </Button>
                        )}
                      </div>
                    )}
                    {error && (
                      <p className="text-sm text-red-500 font-medium mt-2 text-center">{error}</p>
                    )}
                  </div>
                </div>
              ) : (
                <>
                  <div className="space-y-9">
                    <div>
                      <h4 className="text-xl font-bold tracking-tight text-foreground font-display text-center lg:text-left">
                        Request Proposal
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1 text-center lg:text-left">
                        Fill out the fields below. We keep your project info strictly confidential.
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
                        onChange={(v) => {
                          setForm({ ...form, email: v });
                          if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
                        }}
                        required
                        icon={Mail}
                        error={errors.email}
                      />
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
                    </div>

                    <FloatingSelect
                      label="Project Category"
                      value={form.category}
                      onChange={(v) => {
                        setForm({ ...form, category: v });
                        if (errors.category) setErrors((prev) => ({ ...prev, category: "" }));
                      }}
                      options={CATEGORIES}
                      required
                      icon={Briefcase}
                      error={errors.category}
                    />

                    <FloatingTextarea
                      label="Briefly outline your project requirements"
                      value={form.requirements}
                      onChange={(v) => {
                        setForm({ ...form, requirements: v });
                        if (errors.requirements)
                          setErrors((prev) => ({ ...prev, requirements: "" }));
                      }}
                      required
                      icon={MessageSquare}
                      error={errors.requirements}
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
                      <span>{loading ? "Submitting..." : "Send Proposal Request"}</span>
                      {loading ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Send className="h-4 w-4" />
                      )}
                    </Button>
                    {error && (
                      <p className="text-sm text-red-500 font-medium mt-4 text-center">{error}</p>
                    )}
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
    function handleClickOutside(event: Event) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
        setFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
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
