"use client";

import { ThemeProvider } from "next-themes";
import {PageTransition} from "@/components/PageTransition";

if (
  typeof window !== "undefined" &&
  process.env.NODE_ENV === "development"
) {
  const originalError = console.error;
  console.error = (...args: unknown[]) => {
    if (
      typeof args[0] === "string" &&
      args[0].includes("Encountered a script tag")
    ) {
      return;
    }
    originalError.apply(console, args);
  };
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <PageTransition>
        {children}
      </PageTransition>
    </ThemeProvider>
  );
}