"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-gradient-to-tl from-[#00d4ff]/5 to-transparent pointer-events-none blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        
        <div className="space-y-4 mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center gap-2 text-[#0ea5e9] font-mono text-sm tracking-widest uppercase mb-4">
              <MessageSquare className="w-4 h-4" />
              <span>// Connection.req</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5e9] to-[#00d4ff]">Touch</span>
            </h2>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex-1 space-y-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Matrix</h3>
            
            <div className="space-y-4">
              <a href="mailto:hanipabyad79@gmail.com" className="flex items-center gap-4 group glass-card p-4 rounded-xl">
                <div className="p-3 bg-[#050510] border border-[#ffffff0a] rounded-lg group-hover:border-[#00d4ff]/50 transition-colors">
                  <Mail className="w-5 h-5 text-[#00d4ff]" />
                </div>
                <div>
                  <p className="text-xs font-mono text-[#6a6a8a] mb-1">Email_Address</p>
                  <p className="text-[#e8e8f0] font-medium group-hover:text-[#00d4ff] transition-colors">hanipabyad79@gmail.com</p>
                </div>
              </a>
              
              <a href="https://wa.me/6281992440287" target="_blank" rel="noreferrer" className="flex items-center gap-4 group glass-card p-4 rounded-xl">
                <div className="p-3 bg-[#050510] border border-[#ffffff0a] rounded-lg group-hover:border-[#10b981]/50 transition-colors">
                  <Phone className="w-5 h-5 text-[#10b981]" />
                </div>
                <div>
                  <p className="text-xs font-mono text-[#6a6a8a] mb-1">WhatsApp_Comms</p>
                  <p className="text-[#e8e8f0] font-medium group-hover:text-[#10b981] transition-colors">+62 819-9244-0287</p>
                </div>
              </a>

              <a href="https://github.com/hanifabyad" target="_blank" rel="noreferrer" className="flex items-center gap-4 group glass-card p-4 rounded-xl">
                <div className="p-3 bg-[#050510] border border-[#ffffff0a] rounded-lg group-hover:border-[#7c6af7]/50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#7c6af7]"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                </div>
                <div>
                  <p className="text-xs font-mono text-[#6a6a8a] mb-1">GitHub_Profile</p>
                  <p className="text-[#e8e8f0] font-medium group-hover:text-[#7c6af7] transition-colors">hanifabyad</p>
                </div>
              </a>

              <div className="flex items-center gap-4 glass-card p-4 rounded-xl border-dashed">
                <div className="p-3 bg-[#050510] border border-[#ffffff0a] rounded-lg">
                  <MapPin className="w-5 h-5 text-[#a0a0c0]" />
                </div>
                <div>
                  <p className="text-xs font-mono text-[#6a6a8a] mb-1">Base_Location</p>
                  <p className="text-[#a0a0c0] font-medium">Tanjungpinang, Riau Islands</p>
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
            <div className="glass-card p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00d4ff] to-[#7c6af7]"></div>
              
              <div className="flex items-center gap-2 mb-8">
                <div className="w-3 h-3 rounded-full bg-[#ef4444]"></div>
                <div className="w-3 h-3 rounded-full bg-[#f59e0b]"></div>
                <div className="w-3 h-3 rounded-full bg-[#10b981]"></div>
                <span className="ml-2 font-mono text-xs text-[#6a6a8a]">send_message.sh</span>
              </div>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-[#00d4ff] mb-2">{"$ input_name"}</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg bg-[#050510] border border-[#ffffff1a] focus:outline-none focus:border-[#00d4ff]/50 transition-all text-white font-mono text-sm placeholder:text-[#6a6a8a]" placeholder="Enter your name..." />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-[#00d4ff] mb-2">{"$ input_email"}</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-lg bg-[#050510] border border-[#ffffff1a] focus:outline-none focus:border-[#00d4ff]/50 transition-all text-white font-mono text-sm placeholder:text-[#6a6a8a]" placeholder="Enter your email..." />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-[#00d4ff] mb-2">{"$ input_message"}</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg bg-[#050510] border border-[#ffffff1a] focus:outline-none focus:border-[#00d4ff]/50 transition-all text-white font-mono text-sm placeholder:text-[#6a6a8a] resize-none" placeholder="Type your message here..."></textarea>
                </div>
                <button type="button" className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#00d4ff]/20 to-[#7c6af7]/20 border border-[#00d4ff]/30 text-white px-8 py-3.5 rounded-lg font-mono hover:from-[#00d4ff]/40 hover:to-[#7c6af7]/40 transition-all mt-4 glow-box">
                  <Send className="w-4 h-4" />
                  ./execute_send
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
