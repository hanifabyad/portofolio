"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, FileCode2, Wrench, Layers } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  color: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Core Languages",
    icon: <Code2 className="w-5 h-5" />,
    color: "#00d4ff",
    skills: ["Kotlin", "PHP", "TypeScript"],
  },
  {
    title: "Backend & DB",
    icon: <DatabaseIcon className="w-5 h-5" />,
    color: "#7c6af7",
    skills: ["Laravel", "MySQL", "REST APIs", "Docker"],
  },
  {
    title: "Mobile & Web",
    icon: <FileCode2 className="w-5 h-5" />,
    color: "#10b981",
    skills: ["Android Dev", "Next.js", "React", "TailwindCSS"],
  },
  {
    title: "AI & Tools",
    icon: <Cpu className="w-5 h-5" />,
    color: "#0ea5e9",
    skills: ["Tesseract OCR", "Naive Bayes", "Git", "Postman"],
  },
];

function DatabaseIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        
        <div className="space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-[#7c6af7] font-mono text-sm tracking-widest uppercase mb-4">
              <Layers className="w-4 h-4" />
              <span>// Tech_Stack</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              System <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c6af7] to-[#00d4ff]">Modules</span>
            </h2>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card p-6 rounded-2xl group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle background glow based on category color */}
              <div 
                className="absolute -right-8 -top-8 w-32 h-32 blur-3xl opacity-10 group-hover:opacity-30 transition-opacity"
                style={{ backgroundColor: category.color }}
              ></div>

              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div 
                  className="p-3 rounded-xl bg-[#050510] border"
                  style={{ borderColor: `${category.color}40`, color: category.color }}
                >
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              
              <ul className="space-y-3 relative z-10">
                {category.skills.map((skill, idx) => (
                  <li 
                    key={idx} 
                    className="flex items-center text-[#a0a0c0] bg-[#050510]/50 border border-[#ffffff0a] px-4 py-2.5 rounded-lg text-sm font-medium group-hover:border-opacity-30 transition-colors"
                    style={{ borderLeftColor: category.color, borderLeftWidth: '2px' }}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
