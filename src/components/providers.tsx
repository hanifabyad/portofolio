"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactLenis } from "@studio-freight/react-lenis";
import { useEffect, useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
        {/* @ts-expect-error React 19 Type mismatch */}
        {children}
      </ReactLenis>
    </NextThemesProvider>
  );
}
