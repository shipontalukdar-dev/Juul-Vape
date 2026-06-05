"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function FlavorTeaser({ setCurrentPage, theme }) {
  const [activeTab, setActiveTab] = useState(0);

  const flavorList = [
    {
      id: "mint",
      title: "Cool Mint",
      slogan: "A crisp burst of natural peppermint.",
      desc: "Perfectly refreshing with a soothing exhale. Formulated using premium peppermint extracts and zero artificial coolants for a genuine crisp taste.",
      color: "from-emerald-600 to-teal-900",
      accent: "#10B981",
      badge: "Best Seller"
    },
    {
      id: "mango",
      title: "Royal Mango",
      slogan: "Sun-ripened tropical golden nectar.",
      desc: "Rich, luscious, and deeply satisfying. This flavor captures the sweet fragrance of orchard-fresh alphonso mangoes on hot summer nights.",
      color: "from-amber-600 to-orange-950",
      accent: "#F59E0B",
      badge: "Premium Collection"
    },
    {
      id: "classic",
      title: "Virginia Tobacco",
      slogan: "Rich American tobacco with toasted notes.",
      desc: "An earthy, full-bodied experience for traditionalists. Delivers smooth throat hits with classic Virginia leaf toasted leaf complexity.",
      color: "from-stone-600 to-zinc-950",
      accent: "#78716C",
      badge: "Signature Tobacco"
    },
    {
      id: "menthol",
      title: "Classic Menthol",
      slogan: "Bracing ocean breeze with clean icy exhale.",
      desc: "Bold, crisp menthol flavor delivering a cool, brisk throat hit designed for maximum sensory invigoration and icy satisfaction.",
      color: "from-cyan-600 to-blue-950",
      accent: "#06B6D4",
      badge: "New Menthol"
    }
  ];

  const current = flavorList[activeTab];
  const isLight = theme === "light";

  return (
    <section className={`py-24 border-y transition-colors duration-500 relative overflow-hidden ${
      isLight ? "bg-zinc-50 border-zinc-200/80" : "bg-[#0A0A0B] border-white/5"
    }`}>
      {/* Dynamic Background Glow (GPU Optimized) */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div 
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full transition-colors duration-1000" 
          style={{ background: `radial-gradient(circle, ${current.accent} 0%, transparent 60%)` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left Interactive Selection List */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="space-y-2">
            <span className={`text-xs font-bold uppercase tracking-widest ${
              isLight ? "text-zinc-400" : "text-zinc-500"
            }`}>
              The Aroma Lab
            </span>
            <h2 className={`text-3xl sm:text-5xl font-extrabold ${isLight ? "text-zinc-950" : "text-white"}`}>
              Signature Flavors
            </h2>
          </div>

          <div className="flex flex-col gap-3 pt-6">
            {flavorList.map((flavor, index) => (
              <button
                key={flavor.id}
                onClick={() => setActiveTab(index)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                  activeTab === index 
                    ? isLight
                      ? "bg-white border-zinc-200 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
                      : "bg-white/5 border-white/10 shadow-lg" 
                    : "bg-transparent border-transparent opacity-55 hover:opacity-90"
                }`}
              >
                <div>
                  <p className={`text-xs uppercase tracking-widest font-bold mb-1 ${
                    isLight ? "text-zinc-400" : "text-zinc-500"
                  }`}>0{index + 1}</p>
                  <p className={`text-lg font-black ${isLight ? "text-zinc-800" : "text-white"}`}>{flavor.title}</p>
                </div>
                <div 
                  className="w-4 h-4 rounded-full" 
                  style={{ backgroundColor: flavor.accent }}
                />
              </button>
            ))}
          </div>
        </motion.div>

        {/* Right Dynamic Flavor Info card */}
        <div className="lg:col-span-7 h-[420px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`w-full h-full p-8 sm:p-12 rounded-3xl bg-gradient-to-br ${current.color} flex flex-col justify-between shadow-2xl relative overflow-hidden border ${
                isLight ? "border-zinc-200/10" : "border-white/10"
              }`}
            >
              {/* Abs grid inside card */}
              <div className="absolute inset-0 bg-black/10 pointer-events-none" />

              <div className="space-y-4 relative z-10 text-left">
                <span className="inline-block bg-white/10 border border-white/20 backdrop-blur-md text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full text-white">
                  {current.badge}
                </span>
                <h3 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-none">
                  {current.title}
                </h3>
                <p className="text-base sm:text-lg font-medium text-emerald-100/90 italic leading-snug">
                  "{current.slogan}"
                </p>
                <p className="text-xs sm:text-sm text-zinc-100/80 leading-relaxed font-light max-w-xl">
                  {current.desc}
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-white/10 relative z-10 text-left">
                <div>
                  <p className="text-[10px] text-zinc-300 uppercase tracking-widest font-bold">Nicotine Strengths</p>
                  <p className="text-sm font-black text-white">3.0% (30mg) / 5.0% (50mg)</p>
                </div>
                <button
                  onClick={() => setCurrentPage("product")}
                  className="bg-white text-black hover:bg-black hover:text-white transition-all duration-300 text-xs uppercase tracking-widest font-bold px-6 py-4 rounded-full flex items-center gap-2 cursor-pointer shadow-md"
                >
                  Taste It <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
