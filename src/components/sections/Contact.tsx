"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="space-y-4 text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Hubungi Saya
            </h2>
            <div className="h-1.5 w-24 bg-accent rounded-full mx-auto mt-4"></div>
            <p className="text-muted mt-4 max-w-2xl mx-auto">
              Mari diskusikan proyek, peluang kerja sama, atau sekadar bertukar pikiran seputar teknologi.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex-1 space-y-8"
          >
            <h3 className="text-2xl font-bold text-foreground">Informasi Kontak</h3>
            
            <div className="space-y-6">
              <a href="mailto:hanipabyad79@gmail.com" className="flex items-center gap-4 group">
                <div className="p-4 bg-surface rounded-full group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <Mail className="w-6 h-6 text-primary dark:text-white group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted font-medium">Email</p>
                  <p className="text-foreground font-semibold group-hover:text-accent transition-colors">hanipabyad79@gmail.com</p>
                </div>
              </a>
              
              <a href="https://wa.me/6281992440287" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                <div className="p-4 bg-surface rounded-full group-hover:bg-[#25D366] group-hover:text-white transition-colors duration-300">
                  <Phone className="w-6 h-6 text-primary dark:text-white group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted font-medium">WhatsApp</p>
                  <p className="text-foreground font-semibold group-hover:text-[#25D366] transition-colors">+62 819-9244-0287</p>
                </div>
              </a>

              <a href="https://github.com/hanifabyad" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                <div className="p-4 bg-surface rounded-full group-hover:bg-[#333] group-hover:text-white transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary dark:text-white group-hover:text-white"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                </div>
                <div>
                  <p className="text-sm text-muted font-medium">GitHub</p>
                  <p className="text-foreground font-semibold group-hover:text-[#333] dark:group-hover:text-white transition-colors">hanifabyad</p>
                </div>
              </a>

              <a href="https://linkedin.com/in/hanifabyad" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                <div className="p-4 bg-surface rounded-full group-hover:bg-[#0077b5] group-hover:text-white transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary dark:text-white group-hover:text-white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </div>
                <div>
                  <p className="text-sm text-muted font-medium">LinkedIn</p>
                  <p className="text-foreground font-semibold group-hover:text-[#0077b5] transition-colors">hanifabyad</p>
                </div>
              </a>

              <div className="flex items-center gap-4 group">
                <div className="p-4 bg-surface rounded-full">
                  <MapPin className="w-6 h-6 text-primary dark:text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted font-medium">Lokasi</p>
                  <p className="text-foreground font-semibold">Tanjungpinang, Kepulauan Riau</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex-1"
          >
            <div className="bg-surface/50 p-6 md:p-8 rounded-3xl border border-surface shadow-sm">
              <h3 className="text-2xl font-bold text-foreground mb-6">Kirim Pesan</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted mb-1">Nama Lengkap</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-xl bg-background border border-surface focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all placeholder:text-muted/50 text-foreground" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted mb-1">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-xl bg-background border border-surface focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all placeholder:text-muted/50 text-foreground" placeholder="john@example.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted mb-1">Pesan</label>
                  <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-xl bg-background border border-surface focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all placeholder:text-muted/50 text-foreground resize-none" placeholder="Tuliskan pesan atau penawaran proyek di sini..."></textarea>
                </div>
                <button type="button" className="w-full inline-flex items-center justify-center gap-2 bg-primary dark:bg-accent text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 dark:hover:bg-accent/90 transition-colors mt-2">
                  <Send className="w-5 h-5" />
                  Kirim Sekarang
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
