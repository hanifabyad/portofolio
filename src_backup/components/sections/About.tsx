"use client";

import { motion } from "framer-motion";
import { User, Cpu, Code, Database } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: <Cpu className="w-5 h-5 text-[#00d4ff]" />,
      title: "AI Integration",
      desc: "Implementing ML models like Naive Bayes and OCR (Tesseract) into production apps."
    },
    {
      icon: <Code className="w-5 h-5 text-[#10b981]" />,
      title: "Clean Architecture",
      desc: "Building scalable and maintainable codebases for both Backend and Mobile."
    },
    {
      icon: <Database className="w-5 h-5 text-[#7c6af7]" />,
      title: "System Design",
      desc: "Architecting multi-tenant databases and complex API infrastructures."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-[#00d4ff]/5 to-transparent pointer-events-none blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-[#00d4ff] font-mono text-sm tracking-widest uppercase">
                <User className="w-4 h-4" />
                <span>// Identity.sys</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7c6af7]">Me</span>
              </h2>
            </div>
            
            <div className="text-[#a0a0c0] text-lg space-y-6 leading-relaxed font-light">
              <p>
                I am a D4 Software Engineering student at Politeknik Negeri Batam. My core expertise lies in developing robust <strong className="text-white font-medium">Backend Systems</strong> and <strong className="text-white font-medium">Android Mobile Applications</strong>.
              </p>
              <p>
                I thrive on solving real-world problems. Whether it's building a pothole detection system using AI or a multi-tenant property management platform (HOMI), I focus on creating <span className="text-[#00d4ff]">scalable SaaS</span> architectures and functional digital solutions.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full grid gap-4"
          >
            {highlights.map((item, idx) => (
              <div 
                key={idx} 
                className="glass-card p-6 rounded-xl flex items-start gap-4 group"
              >
                <div className="p-3 rounded-lg bg-[#050510] border border-[#ffffff0a] group-hover:border-[#00d4ff]/30 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <p className="text-[#6a6a8a] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
