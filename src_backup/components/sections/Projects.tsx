"use client";

import { motion } from "framer-motion";
import { Database, Smartphone, LayoutTemplate, Zap, ExternalLink, Link as LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  contributions: string[];
  technologies: string[];
  typeIcon: React.ReactNode;
  mockups: React.ReactNode;
  color: string;
}

const projects: Project[] = [
  {
    title: "HOMI: Property Management",
    subtitle: "Mobile App + Web Admin | 2026",
    description: "An integrated digital system to support housing service management, making it more effective, structured, and modern. An end-to-end solution that simplifies reporting and administration for both residents and administrators.",
    contributions: [
      "Android app development",
      "Admin dashboard development",
      "Database & backend API design",
      "Multi-tenant architecture implementation"
    ],
    technologies: ["Kotlin", "Laravel", "MySQL"],
    typeIcon: <LayoutTemplate className="w-4 h-4" />,
    color: "#00d4ff",
    mockups: (
      <div className="relative w-full h-full min-h-[300px] flex items-center justify-center p-4 overflow-hidden">
        <div className="absolute right-[-5%] sm:right-4 top-[45%] -translate-y-1/2 w-[85%] sm:w-[75%] aspect-video rounded-xl overflow-hidden border border-[#00d4ff]/20 opacity-60 hover:opacity-100 hover:scale-[1.02] transition-all duration-500 z-0 shadow-[0_0_30px_rgba(0,212,255,0.1)]">
          <Image src="/projects/homi-admin.png" alt="Homi Admin Dashboard" fill className="object-cover object-top" />
        </div>
        <div className="absolute left-[-5%] sm:left-4 top-[55%] -translate-y-1/2 w-[85%] sm:w-[75%] aspect-video rounded-xl overflow-hidden border border-[#00d4ff]/40 hover:scale-[1.05] transition-all duration-500 z-10 shadow-[0_0_30px_rgba(0,212,255,0.2)]">
          <Image src="/projects/homi-landing.png" alt="Homi Landing Page" fill className="object-cover object-top" />
        </div>
      </div>
    )
  },
  {
    title: "PowerSync EV Charging Platform",
    subtitle: "Web App + Decision Support System | 2026",
    description: "A platform for finding and managing electric vehicle (EV) charging stations (SPKLU). Features secure OTP authentication and a TOPSIS-based decision support engine to recommend optimal charging stations based on user criteria like distance, price, and capacity.",
    contributions: [
      "Backend Logic (TOPSIS Algorithm)",
      "Secure OTP Auth implementation",
      "Role Management (User/Admin)",
      "Database schema design"
    ],
    technologies: ["Laravel", "MySQL", "TailwindCSS"],
    typeIcon: <Zap className="w-4 h-4" />,
    color: "#10b981",
    mockups: (
      <div className="relative w-full h-full min-h-[300px] flex items-center justify-center p-8">
        <div className="relative w-[90%] aspect-video rounded-xl overflow-hidden border border-[#10b981]/40 hover:scale-[1.05] transition-all duration-500 z-10 shadow-[0_0_30px_rgba(16,185,129,0.2)] bg-[#050510] flex items-center justify-center">
           <div className="text-[#10b981] font-mono opacity-50">{"<PowerSync_Preview />"}</div>
        </div>
      </div>
    )
  },
  {
    title: "AI Pothole Detection App",
    subtitle: "Mobile App + AI | 2025",
    description: "An AI-powered mobile application designed to automatically detect road potholes using the YOLO object detection model. This project addresses road infrastructure maintenance challenges through intelligent computer vision.",
    contributions: [
      "Android application development",
      "AI / Object detection integration",
      "Backend API development",
      "System flow design"
    ],
    technologies: ["Kotlin", "Laravel", "YOLO", "MySQL"],
    typeIcon: <Smartphone className="w-4 h-4" />,
    color: "#7c6af7",
    mockups: (
      <div className="relative w-full h-full min-h-[350px] flex items-center justify-center p-8">
        <div className="relative w-[180px] h-[380px] rounded-[2rem] overflow-hidden border-[4px] border-[#7c6af7]/40 z-10 hover:scale-105 transition-transform duration-500 shadow-[0_0_30px_rgba(124,106,247,0.2)]">
          <Image src="/projects/lumine.png" alt="Deteksi Lubang Jalan App" fill className="object-cover" />
        </div>
      </div>
    )
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute left-0 top-1/4 w-1/3 h-1/2 bg-gradient-to-r from-[#7c6af7]/5 to-transparent pointer-events-none blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        
        <div className="space-y-4 mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center gap-2 text-[#00d4ff] font-mono text-sm tracking-widest uppercase mb-4">
              <Database className="w-4 h-4" />
              <span>// Build_Log</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#10b981]">Projects</span>
            </h2>
          </motion.div>
        </div>

        <div className="space-y-16">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="group relative glass-card rounded-3xl overflow-hidden flex flex-col lg:flex-row border border-[#ffffff0a] hover:border-opacity-30 transition-all duration-500"
            >
              {/* Dynamic border glow based on project color */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at center, ${project.color} 0%, transparent 70%)` }}
              ></div>

              {/* Graphic Area */}
              <div className="lg:w-[45%] bg-[#050510]/50 relative border-b lg:border-b-0 lg:border-r border-[#ffffff0a]">
                {project.mockups}
              </div>

              {/* Content Area */}
              <div className="p-8 md:p-10 lg:w-[55%] flex flex-col justify-center relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span 
                    className="text-xs font-mono tracking-wide uppercase px-3 py-1 rounded-full flex items-center gap-2 border"
                    style={{ color: project.color, borderColor: `${project.color}40`, backgroundColor: `${project.color}10` }}
                  >
                    {project.typeIcon}
                    {project.subtitle}
                  </span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text transition-colors"
                    style={{ backgroundImage: `linear-gradient(to right, #fff, ${project.color})` }}>
                  {project.title}
                </h3>
                
                <p className="text-[#a0a0c0] leading-relaxed mb-6 text-sm sm:text-base">
                  {project.description}
                </p>

                <div className="mb-8 space-y-3">
                  <h4 className="font-semibold text-white flex items-center gap-2 text-sm">
                    <span style={{ color: project.color }}>{">"}</span> Contributions
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.contributions.map((contribution, cIdx) => (
                      <li key={cIdx} className="flex items-start text-sm text-[#6a6a8a]">
                        <span className="mr-2 mt-1 text-[10px]" style={{ color: project.color }}>■</span>
                        {contribution}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-6 border-t border-[#ffffff0a] flex flex-wrap gap-2 items-center">
                  {project.technologies.map((tech, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-3 py-1 text-xs font-mono bg-[#050510] text-[#a0a0c0] rounded-md border border-[#ffffff0a]"
                    >
                      {tech}
                    </span>
                  ))}
                  <div className="flex-grow"></div>
                  <Link href="#" className="p-2 rounded-lg bg-[#ffffff05] hover:bg-[#ffffff10] text-[#a0a0c0] hover:text-white transition-colors border border-[#ffffff0a]">
                    <LinkIcon className="w-4 h-4" />
                  </Link>
                  <Link href="#" className="p-2 rounded-lg bg-[#ffffff05] hover:bg-[#ffffff10] text-[#a0a0c0] hover:text-white transition-colors border border-[#ffffff0a]">
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
