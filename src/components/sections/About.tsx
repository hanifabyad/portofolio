"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 bg-surface/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          <div className="space-y-3 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Profil Singkat
            </h2>
            <div className="h-1.5 w-20 bg-accent rounded-full mx-auto md:mx-0"></div>
          </div>
          
          <div className="text-muted text-base sm:text-lg max-w-none space-y-6">
            <p className="leading-relaxed">
              Saya adalah mahasiswa D4 Teknologi Rekayasa Perangkat Lunak di Politeknik Negeri Batam yang memiliki minat dan pengalaman dalam pengembangan aplikasi mobile Android, website admin, backend system, dan implementasi teknologi berbasis AI.
            </p>
            <p className="leading-relaxed">
              Saya telah terlibat dalam pengembangan beberapa proyek berbasis solusi nyata, termasuk aplikasi pendeteksi lubang jalan menggunakan AI dan sistem pengelolaan layanan perumahan berbasis mobile dan web admin.
            </p>
            <p className="leading-relaxed text-foreground font-medium">
              Saya memiliki ketertarikan untuk membangun solusi digital yang fungsional, modern, dan relevan dengan kebutuhan pengguna di dunia nyata.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
