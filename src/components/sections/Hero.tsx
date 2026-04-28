"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

// Dynamically import HeroCanvas (SSR disabled — WebGL is client-only)
const HeroCanvas = dynamic(
  () => import("@/components/canvas/HeroCanvas").then((mod) => mod.HeroCanvas),
  { ssr: false }
);

export function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-10 pb-16 overflow-hidden">
      {/* 3D Background Canvas */}
      <HeroCanvas />

      {/* Subtle gradient overlay for readability */}
      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-transparent via-background/30 to-background/60 dark:via-background/40 dark:to-background/70"></div>

      <div className="relative z-[2] container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 space-y-8 text-center md:text-left"
          >
            <div className="space-y-4">
              <h2 className="text-accent font-semibold tracking-wider uppercase text-sm">
                Developer Portfolio
              </h2>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                Muhammad <br className="hidden md:block" /> Hanif<span className="text-accent">.</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted font-medium pt-2">
                Mobile & Web Developer | <span className="text-foreground">AI-Based Application Enthusiast</span>
              </p>
            </div>
            
            <p className="text-muted/90 max-w-xl mx-auto md:mx-0 text-lg leading-relaxed">
              Mahasiswa D4 TRPL yang antusias dalam membangun solusi digital 
              fungsional, modern, dan relevan menggunakan teknologi terkini.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-5 pt-4">
              <Link 
                href="#projects" 
                className="group inline-flex items-center justify-center gap-2 bg-primary dark:bg-accent text-white px-8 py-3.5 rounded-full font-medium transition-transform hover:scale-105 shadow-md shadow-primary/20 dark:shadow-accent/20"
              >
                Lihat Proyek
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="#contact" 
                className="inline-flex items-center justify-center gap-2 border-2 border-surface bg-transparent hover:bg-surface text-foreground px-8 py-3.5 rounded-full font-medium transition-colors"
              >
                <Mail className="w-4 h-4" />
                Hubungi Saya
              </Link>
            </div>
          </motion.div>

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="flex-1 flex justify-center md:justify-end w-full max-w-[280px] sm:max-w-md md:max-w-none"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-surface shadow-2xl group">
              <Image 
                src="/user-photo.jpg" 
                alt="Muhammad Hanif" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent mix-blend-overlay opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
