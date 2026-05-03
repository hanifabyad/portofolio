"use client";

import { motion } from "framer-motion";

const items = [
  "Mobile Development",
  "Web Development",
  "AI Integration",
  "Backend Development",
  "Digital Service Solutions"
];

export function Marquee() {
  return (
    <div className="py-12 bg-primary dark:bg-accent text-white overflow-hidden flex whitespace-nowrap">
      <motion.div
        className="flex gap-8 items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 25, repeat: Infinity }}
      >
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-8">
            <span className="text-xl md:text-3xl font-bold uppercase tracking-wider">{item}</span>
            <span className="text-accent dark:text-white/50 text-2xl">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
