import Link from "next/link";
import { ArrowUp, Terminal } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#050510] py-12 border-t border-[#ffffff0a] relative overflow-hidden">
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-1/2 h-1/2 bg-gradient-to-t from-[#00d4ff]/10 to-transparent pointer-events-none blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl flex flex-col items-center justify-center relative z-10">
        
        <Link href="/" className="font-bold text-2xl tracking-wide text-white flex items-center gap-2 mb-4">
          <Terminal className="w-6 h-6 text-[#00d4ff]" />
          Hanif<span className="text-[#00d4ff]">.dev</span>
        </Link>
        
        <p className="text-[#a0a0c0] text-center max-w-md pb-8 font-light text-sm">
          Building functional, modern, and scalable digital solutions for the real world.
        </p>
        
        <div className="w-full h-px bg-[#ffffff0a] mb-8 max-w-md relative">
          <div className="absolute left-1/2 -translate-x-1/2 -top-[1px] w-24 h-[2px] bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent"></div>
        </div>
        
        <p className="text-xs font-mono text-[#6a6a8a]">
          &copy; {new Date().getFullYear()} Muhammad Hanif. All_Rights_Reserved.
        </p>
        
        {/* Back to top abstract circle */}
        <Link href="#home" aria-label="Back to top" className="absolute right-0 bottom-0 p-4 opacity-50 hover:opacity-100 transition-opacity">
          <div className="w-10 h-10 rounded-full border border-[#ffffff1a] flex items-center justify-center hover:bg-[#ffffff05] hover:border-[#00d4ff]/50 hover:text-[#00d4ff] transition-all text-[#6a6a8a]">
            <ArrowUp className="w-4 h-4" />
          </div>
        </Link>
      </div>
    </footer>
  );
}
