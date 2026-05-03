"use client";

import { motion } from "framer-motion";
import { ChevronRight, Terminal } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";

const HeroCanvas = dynamic(
  () => import("@/components/canvas/HeroCanvas").then((mod) => mod.HeroCanvas),
  { ssr: false }
);

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* 3D Background */}
      <HeroCanvas />

      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-r from-[#050510] via-[#050510]/80 to-transparent"></div>
      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-transparent via-transparent to-[#050510]"></div>

      <div className="relative z-[2] container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 space-y-8 text-left max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/10 backdrop-blur-md">
              <Terminal className="w-4 h-4 text-[#00d4ff]" />
              <span className="text-xs font-mono text-[#00d4ff] uppercase tracking-wider">
                System Initialized
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                Muhammad <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7c6af7] glow-text">
                  Hanif.
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-[#a0a0c0] font-light">
                <span className="font-mono text-[#10b981]">{"<"}</span>
                Software Developer 
                <span className="font-mono text-[#10b981]">{"/>"}</span>
              </p>
            </div>
            
            <p className="text-[#6a6a8a] text-lg leading-relaxed max-w-lg">
              Engineering scalable backend systems, mobile applications, and AI-driven solutions. Focusing on clean architecture and real-world problem solving.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-5 pt-6">
              <Link 
                href="#projects" 
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg overflow-hidden font-medium transition-all"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00d4ff] to-[#7c6af7] opacity-90 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-0 w-full h-full glow-box opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative text-white flex items-center gap-2">
                  Initialize Projects
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link 
                href="#contact" 
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-medium text-[#a0a0c0] border border-[#a0a0c0]/30 hover:border-[#00d4ff]/50 hover:text-[#00d4ff] hover:bg-[#00d4ff]/5 transition-all backdrop-blur-sm"
              >
                Ping Me
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
