"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, FileCode2, Wrench } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    icon: <Code2 className="w-6 h-6 text-accent" />,
    skills: ["Kotlin", "PHP"],
  },
  {
    title: "Development",
    icon: <FileCode2 className="w-6 h-6 text-accent" />,
    skills: [
      "Laravel",
      "MySQL",
      "Android Development",
      "REST API Integration",
    ],
  },
  {
    title: "AI Integration",
    icon: <Cpu className="w-6 h-6 text-accent" />,
    skills: ["YOLO / Object Detection"],
  },
  {
    title: "Tools & Others",
    icon: <Wrench className="w-6 h-6 text-accent" />,
    skills: ["Git & GitHub", "Figma", "Postman"],
  },
];

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="space-y-4 text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Keahlian Teknis
            </h2>
            <div className="h-1.5 w-24 bg-accent rounded-full mx-auto mt-4"></div>
            <p className="text-muted mt-4 max-w-2xl mx-auto">
              Berbagai teknologi dan alat yang saya kuasai dan gunakan dalam pengembangan perangkat lunak modern.
            </p>
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
              className="bg-surface/50 border border-surface rounded-2xl p-6 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-surface-dark/5 dark:bg-surface rounded-xl">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-start text-muted-dark dark:text-muted bg-surface/30 dark:bg-surface/50 px-3 py-2 rounded-lg text-sm font-medium">
                    <span className="mr-2 text-accent">•</span>
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
