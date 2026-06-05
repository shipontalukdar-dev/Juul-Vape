"use client";

import { motion } from "framer-motion";
import { Info, Send } from "lucide-react";

export default function SEOContentBlock({ theme }) {
  const isLight = theme === "light";

  return (
    <section id="contact-section" className={`py-12 transition-colors duration-500 border-b relative overflow-hidden ${
      isLight ? "bg-zinc-50 border-zinc-200/80" : "bg-[#050505] border-white/5"
    }`}>
      {/* Background soft glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-500/5 blur-[120px] pointer-events-none rounded-[100%]" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {/* Left: SEO Content Card */}
        <div className={`p-8 md:p-10 rounded-3xl border backdrop-blur-sm transition-all duration-500 shadow-2xl relative overflow-hidden group flex flex-col justify-center ${
          isLight 
            ? "bg-white/80 border-zinc-200/80 shadow-blue-900/5 hover:border-blue-200 hover:shadow-blue-900/10" 
            : "bg-white/[0.01] border-white/5 shadow-black/50 hover:border-white/10 hover:bg-white/[0.02]"
        }`}>
          
          {/* Subtle Top Gradient Line */}
          <div className={`absolute top-0 left-0 w-full h-1 opacity-50 group-hover:opacity-100 transition-opacity duration-500 ${
            isLight ? "bg-gradient-to-r from-blue-300 via-zinc-200 to-zinc-300" : "bg-gradient-to-r from-emerald-500/30 via-zinc-800 to-zinc-800"
          }`} />

          {/* Watermark Quote Icon */}
          <div className={`absolute -top-8 -left-2 text-[150px] leading-none font-serif font-black opacity-[0.03] select-none pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6 ${
            isLight ? "text-blue-900" : "text-white"
          }`}>
            &ldquo;
          </div>

          <div className="flex flex-col items-start text-left space-y-6 relative z-10">
            
            {/* Floating Pill Label */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full border cursor-default shadow-sm backdrop-blur-md ${
                isLight ? "bg-white/80 border-blue-100 text-blue-600" : "bg-white/5 border-white/10 text-emerald-400"
              }`}
            >
              <Info className="w-3.5 h-3.5" />
              <span className="text-[9px] uppercase font-black tracking-[0.25em]">
                Directory
              </span>
            </motion.div>

            {/* Giant Gradient Heading */}
            <h2 className={`text-xl sm:text-2xl md:text-3xl font-black tracking-tight transition-all duration-500 ${
              isLight 
                ? "bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-blue-700 to-zinc-900" 
                : "bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-300 to-white"
            }`}>
              JUUL UAE Official Retail Directory
            </h2>

            {/* Content Body paragraphs */}
            <div className={`space-y-4 text-[12px] sm:text-[13px] leading-relaxed font-medium text-left ${
              isLight ? "text-zinc-600" : "text-zinc-400"
            }`}>
              <p>
                Welcome to the premier online <span className={`font-bold transition-colors px-1 rounded-md ${isLight ? "text-blue-700 bg-blue-50" : "text-emerald-400 bg-emerald-400/10"}`}>JUUL UAE</span> destination, your trusted <span className={`font-bold transition-colors px-1 rounded-md ${isLight ? "text-blue-700 bg-blue-50" : "text-emerald-400 bg-emerald-400/10"}`}>Dubai vape store</span> offering 100% authentic devices, accessories, and pre-filled vapor pods. We are dedicated to providing adult smokers in the Emirates with a satisfying, premium alternative to traditional cigarettes. Our curated inventory features the classic Slate and Carbon Black device kits, alongside the highly coveted signature pod flavor blends including Cool Mint, Royal Mango, Virginia Tobacco, and Alpine Berry. 
              </p>
              <p>
                Whether you are looking to buy a starter kit or stock up on replacement packs, our platform offers a seamless shopping experience with strict age-gate compliance and rapid dispatch. Experience unmatched flavor delivery, microprocessor-controlled temperature stability, and sleek structural design. We proudly serve adult consumers aged 21 and older with express delivery coverage across Dubai, Abu Dhabi, Sharjah, Ajman, Fujairah, Al Ain, Ras Al Khaimah, and Umm Al Quwain. Shop with confidence knowing every shipment undergoes thorough quality checks and is backed by dedicated customer support.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Contact Form Card */}
        <div className={`p-8 md:p-10 rounded-3xl border backdrop-blur-sm transition-all duration-500 shadow-2xl relative overflow-hidden group flex flex-col justify-center ${
          isLight 
            ? "bg-white/80 border-zinc-200/80 shadow-blue-900/5 hover:border-blue-200 hover:shadow-blue-900/10" 
            : "bg-white/[0.01] border-white/5 shadow-black/50 hover:border-white/10 hover:bg-white/[0.02]"
        }`}>
          {/* Subtle Top Gradient Line */}
          <div className={`absolute top-0 left-0 w-full h-1 opacity-50 group-hover:opacity-100 transition-opacity duration-500 ${
            isLight ? "bg-gradient-to-r from-blue-300 via-zinc-200 to-zinc-300" : "bg-gradient-to-r from-emerald-500/30 via-zinc-800 to-zinc-800"
          }`} />

          <div className="relative z-10">
            <h3 className={`text-xl sm:text-2xl font-black mb-2 tracking-tight ${isLight ? "text-zinc-900" : "text-white"}`}>
              Get In Touch
            </h3>
            <p className={`text-xs mb-8 font-medium ${isLight ? "text-zinc-500" : "text-zinc-400"}`}>
              Have questions about our products or your order? Send us a message and our support team will respond shortly.
            </p>
            
            <form className="space-y-5 w-full" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className={`text-[10px] uppercase font-bold tracking-wider ${isLight ? "text-zinc-500" : "text-zinc-400"}`}>Name</label>
                  <input id="contact-name" name="contact-name" type="text" placeholder="John Doe" className={`w-full p-3.5 rounded-xl border text-xs font-medium transition-all focus:outline-none focus:ring-2 ${
                    isLight 
                      ? "bg-zinc-50 border-zinc-200 text-zinc-900 focus:border-blue-500 focus:ring-blue-500/20 placeholder:text-zinc-400" 
                      : "bg-white/5 border-white/10 text-white focus:border-emerald-500 focus:ring-emerald-500/20 placeholder:text-zinc-600"
                  }`} />
                </div>
                
                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className={`text-[10px] uppercase font-bold tracking-wider ${isLight ? "text-zinc-500" : "text-zinc-400"}`}>Email</label>
                  <input id="contact-email" name="contact-email" type="email" placeholder="john@example.com" className={`w-full p-3.5 rounded-xl border text-xs font-medium transition-all focus:outline-none focus:ring-2 ${
                    isLight 
                      ? "bg-zinc-50 border-zinc-200 text-zinc-900 focus:border-blue-500 focus:ring-blue-500/20 placeholder:text-zinc-400" 
                      : "bg-white/5 border-white/10 text-white focus:border-emerald-500 focus:ring-emerald-500/20 placeholder:text-zinc-600"
                  }`} />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-message" className={`text-[10px] uppercase font-bold tracking-wider ${isLight ? "text-zinc-500" : "text-zinc-400"}`}>Message</label>
                <textarea id="contact-message" name="contact-message" placeholder="How can we help you?" rows="4" className={`w-full p-3.5 rounded-xl border text-xs font-medium transition-all focus:outline-none focus:ring-2 resize-none ${
                  isLight 
                    ? "bg-zinc-50 border-zinc-200 text-zinc-900 focus:border-blue-500 focus:ring-blue-500/20 placeholder:text-zinc-400" 
                    : "bg-white/5 border-white/10 text-white focus:border-emerald-500 focus:ring-emerald-500/20 placeholder:text-zinc-600"
                }`} />
              </div>

              <button className={`w-full py-3.5 rounded-xl text-xs font-bold transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group ${
                isLight 
                  ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20" 
                  : "bg-emerald-500 hover:bg-emerald-400 text-zinc-950 shadow-lg shadow-emerald-500/20"
              }`}>
                <span>Send Message</span>
                <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
