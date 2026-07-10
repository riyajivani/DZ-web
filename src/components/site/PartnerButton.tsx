import { CTAButton } from "./CTAButton";

export function PartnerButton({ variant = "primary" }: { variant?: "primary" | "ghost" }) {
  return (
    <CTAButton to="/partner" variant={variant}>
      Partner with us
    </CTAButton>
  );
}
