import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/site";
import CareersHero from "@/components/sections/careers/Hero";
import CareersWhyJoin from "@/components/sections/careers/WhyJoin";
import CareersOpenRoles from "@/components/sections/careers/OpenRoles";
import CareersApplicationForm from "@/components/sections/careers/ApplicationForm";

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

      await fetch(
        "https://script.google.com/macros/s/AKfycby0vgvRDdrSmkjCOvQciwDW5dASUfe_i3zn7yU6vIZn0E5kS5-5IFHYuyL8Sm25wKBqDQ/exec",
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
      setForm({
        name: "",
        email: "",
        phone: "",
        position: "",
        portfolio: "",
        message: "",
      });
      setErrors({});
    } catch (err: unknown) {
      console.error("Submission error:", err);
      setError(
        "Something went wrong. Please try again or contact us directly at careers@dzinfotech.com.",
      );
    } finally {
      setLoading(false);
    }
  };

  const setFormPosition = (title: string) => {
    setForm((f) => ({ ...f, position: title }));
  };

  return (
    <PageShell>
      <CareersHero />
      <CareersWhyJoin />
      <CareersOpenRoles setFormPosition={setFormPosition} />
      <CareersApplicationForm
        form={form}
        setForm={setForm}
        errors={errors}
        setErrors={setErrors}
        loading={loading}
        sent={sent}
        error={error}
        submit={submit}
      />
    </PageShell>
  );
}
