import { Link } from "@tanstack/react-router";
import { type ReactNode } from "react";
import { ArrowRight } from "lucide-react";

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
