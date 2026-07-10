import { type ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className="relative overflow-x-clip bg-background text-foreground">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
