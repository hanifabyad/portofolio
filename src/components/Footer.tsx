import Link from "next/link";
import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-surface py-12 border-t border-surface-dark/10 dark:border-surface relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl flex flex-col items-center justify-center relative z-10">
        <Link href="/" className="font-bold text-3xl tracking-tight text-foreground mb-4">
          Hanif<span className="text-accent">.</span>
        </Link>
        <p className="text-muted text-center max-w-md pb-8">
          Membangun solusi digital fungsional, modern, dan relevan dengan kebutuhan dunia nyata.
        </p>
        <div className="w-full h-px bg-foreground/10 mb-8 max-w-md"></div>
        <p className="text-sm font-medium text-muted">
          &copy; {new Date().getFullYear()} Muhammad Hanif. All rights reserved.
        </p>
        
        {/* Back to top abstract circle */}
        <Link href="#home" aria-label="Back to top" className="absolute right-0 bottom-0 p-4 translate-y-2 opacity-50 hover:opacity-100 transition-opacity">
          <div className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-surface">
            <ArrowUp className="w-5 h-5 text-foreground" />
          </div>
        </Link>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 dark:bg-accent/10 rounded-full blur-[100px] pointer-events-none -z-0"></div>
    </footer>
  );
}
