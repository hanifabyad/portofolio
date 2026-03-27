"use client";

import { motion } from "framer-motion";
import { Database, Smartphone, LayoutTemplate } from "lucide-react";
import Image from "next/image";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  contributions: string[];
  technologies: string[];
  highlight: boolean;
  typeIcon: React.ReactNode;
  mockups: React.ReactNode;
}

const projects: Project[] = [
  {
    title: "Aplikasi Pendeteksi Lubang Jalan Berbasis AI",
    subtitle: "Mobile App + AI | 2025",
    description: "Aplikasi mobile berbasis Artificial Intelligence untuk mendeteksi lubang jalan secara otomatis menggunakan model YOLO. Proyek ini memecahkan masalah pemeliharaan infrastruktur jalan dengan memanfaatkan deteksi objek cerdas.",
    contributions: [
      "Pengembangan aplikasi Android dengan Kotlin",
      "Integrasi AI / object detection",
      "Backend API dengan Laravel",
      "Penyusunan alur sistem"
    ],
    technologies: ["Kotlin", "Laravel", "YOLO", "MySQL"],
    highlight: true,
    typeIcon: <Smartphone className="w-5 h-5" />,
    mockups: (
      <div className="relative w-full h-full flex items-center justify-center p-8">
        <div className="relative w-[220px] h-[450px] shadow-2xl rounded-[2rem] overflow-hidden border-[6px] border-surface-dark/20 dark:border-surface z-10 group-hover:scale-105 transition-transform duration-700">
          <Image src="/projects/lumine.png" alt="Deteksi Lubang Jalan App" fill className="object-cover" />
        </div>
      </div>
    )
  },
  {
    title: "Aplikasi & Web Admin Pengelolaan Layanan Perumahan",
    subtitle: "Mobile App + Web Admin | 2026",
    description: "Sistem digital terintegrasi untuk mendukung pengelolaan layanan perumahan agar lebih efektif, terstruktur, dan modern. Solusi end-to-end yang menyederhanakan pelaporan dan administrasi perumahan bagi warga dan pengurus.",
    contributions: [
      "Pengembangan aplikasi Android",
      "Pengembangan web admin/dashboard",
      "Perancangan database & backend API",
      "Implementasi fitur layanan digital"
    ],
    technologies: ["Kotlin", "Laravel", "MySQL"],
    highlight: true,
    typeIcon: <LayoutTemplate className="w-5 h-5" />,
    mockups: (
      <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-8 overflow-hidden lg:overflow-visible">
        {/* Admin Dashboard - Background Layer */}
        <div className="absolute right-[-5%] sm:right-4 top-[45%] -translate-y-1/2 w-[85%] sm:w-[75%] aspect-video shadow-2xl rounded-xl overflow-hidden border border-surface-dark/20 dark:border-surface group-hover:scale-[1.02] group-hover:-translate-y-[48%] transition-transform duration-700 z-0">
          <Image src="/projects/homi-admin.png" alt="Homi Admin Dashboard" fill className="object-cover object-top" />
        </div>
        {/* Landing Page - Foreground Layer */}
        <div className="absolute left-[-5%] sm:left-4 top-[55%] -translate-y-1/2 w-[85%] sm:w-[75%] aspect-video shadow-2xl rounded-xl overflow-hidden border border-surface-dark/20 dark:border-surface group-hover:scale-[1.05] group-hover:-translate-y-[58%] transition-transform duration-700 z-10">
          <Image src="/projects/homi-landing.png" alt="Homi Landing Page" fill className="object-cover object-top" />
        </div>
      </div>
    )
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-surface/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="space-y-4 text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Proyek Unggulan
            </h2>
            <div className="h-1.5 w-24 bg-accent rounded-full mx-auto mt-4"></div>
            <p className="text-muted mt-4 max-w-2xl mx-auto">
              Project nyata yang menjadi nilai jual utama dan portofolio profesional. Menyoroti solusi end-to-end dan integrasi teknologi.
            </p>
          </motion.div>
        </div>

        <div className="space-y-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="group relative bg-background border border-surface rounded-3xl overflow-hidden hover:border-accent/40 transition-colors duration-500 shadow-sm hover:shadow-xl hover:shadow-accent/5 flex flex-col lg:flex-row"
            >
              {/* Graphic Area */}
              <div className="lg:w-[45%] md:min-h-[400px] h-[350px] lg:h-auto bg-surface-dark/5 dark:bg-surface/30 relative max-lg:overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 dark:from-accent/10 dark:to-transparent opacity-50 z-0"></div>
                {project.mockups}
              </div>

              {/* Content Area */}
              <div className="p-8 md:p-10 lg:w-[55%] flex flex-col justify-center">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-accent text-sm font-semibold tracking-wide uppercase px-3 py-1 bg-accent/10 rounded-full flex items-center gap-2">
                    {project.typeIcon}
                    {project.subtitle}
                  </span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="mb-6 space-y-3">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <Database className="w-4 h-4 text-accent" />
                    Kontribusi & Peran:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.contributions.map((contribution, cIdx) => (
                      <li key={cIdx} className="flex items-start text-sm text-muted-dark dark:text-muted">
                        <span className="mr-2 text-accent mt-1 text-xs">◆</span>
                        {contribution}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-6 border-t border-surface flex flex-wrap gap-2 items-center">
                  <span className="text-sm font-medium text-foreground mr-2">Teknologi:</span>
                  {project.technologies.map((tech, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-3 py-1 text-xs font-medium bg-surface/80 dark:bg-surface text-foreground rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
