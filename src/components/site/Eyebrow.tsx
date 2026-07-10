import { type ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="text-xs uppercase tracking-wide text-muted-foreground">{children}</span>;
}
