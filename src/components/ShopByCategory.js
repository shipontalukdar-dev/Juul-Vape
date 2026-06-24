"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ShopByCategory({ setCurrentPage, setCategoryFilter, setVersionFilter, theme }) {
  const isLight = theme === "light";

  const categories = [
    {
      id: "juul1",
      title: "Juul 1 Series",
      desc: "Classic compact devices & signature pods",
      itemsCount: "4 Products",
      image: "/cat-devices.png",
      accentColor: "#4B5563",
      cardBg: isLight
        ? "bg-gradient-to-br from-zinc-50 to-zinc-100 border-zinc-200"
        : "bg-gradient-to-br from-zinc-900 to-zinc-950 border-white/5",
    },
    {
      id: "juul2",
      title: "Juul 2 Series",
      desc: "Smart next-gen technology & enhanced flavors",
      itemsCount: "8 Products",
      image: "/cat-pods.png",
      accentColor: "#10B981",
      cardBg: isLight
        ? "bg-gradient-to-br from-emerald-50/60 to-zinc-100 border-emerald-100"
        : "bg-gradient-to-br from-emerald-950/30 to-zinc-950 border-emerald-900/20",
    },
  ];

  const handleCategoryClick = (catId) => {
    if (catId === "juul1" || catId === "juul2") {
      setVersionFilter?.(catId);
      setCategoryFilter?.("all");
    } else {
      setCategoryFilter?.(catId);
    }
    setCurrentPage("collection");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className={`py-24 transition-colors duration-500 ${
      isLight ? "bg-white" : "bg-[#09090A]"
    }`}>
      <div className="max-w-7xl mx-auto px-6 text-left">
        {/* Section Header */}
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="space-y-3 mb-12"
        >
          <span className={`text-xs font-bold uppercase tracking-widest ${
            isLight ? "text-zinc-400" : "text-zinc-500"
          }`}>
            Shop by Category
          </span>
          <h2 className={`text-3xl sm:text-5xl font-black tracking-tight ${
            isLight ? "text-zinc-950" : "text-white"
          }`}>
            Official UAE Collections
          </h2>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
          <Link
              key={cat.id}
              href={cat.id === "juul1" ? "/juul1" : "/juul2"}
              className={`group rounded-3xl border cursor-pointer transition-all duration-300 overflow-hidden flex flex-col ${cat.cardBg} hover:-translate-y-1.5 block`}
            >
              {/* Product Image Area */}
              <div className={`relative w-full h-52 overflow-hidden flex items-center justify-center ${
                isLight ? "bg-zinc-100/80" : "bg-zinc-900/60"
              }`}>
                <motion.div
                  whileHover={{ scale: 1.07 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-contain p-6 drop-shadow-lg"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </motion.div>

                {/* Count badge */}
                <span className={`absolute top-3 left-3 text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border backdrop-blur-md ${
                  isLight
                    ? "bg-white/80 border-zinc-200 text-zinc-600"
                    : "bg-black/40 border-white/10 text-zinc-300"
                }`}>
                  {cat.itemsCount}
                </span>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col gap-2 flex-1 justify-between">
                <div className="space-y-1.5">
                  <h3 className={`text-xl font-black ${isLight ? "text-zinc-950" : "text-white"}`}>
                    {cat.title}
                  </h3>
                  <p className={`text-sm font-light leading-relaxed ${
                    isLight ? "text-zinc-500" : "text-zinc-400"
                  }`}>
                    {cat.desc}
                  </p>
                </div>

                {/* Eye-catching CTA Button */}
                <div className="pt-5 mt-auto">
                  <div 
                    className="relative w-full flex items-center justify-between px-5 py-3.5 rounded-xl overflow-hidden group/btn transition-shadow duration-300 group-hover:shadow-md"
                    style={{ 
                      backgroundColor: isLight ? `${cat.accentColor}15` : `${cat.accentColor}25`,
                      '--btn-color': cat.accentColor 
                    }}
                  >
                    {/* Background Slide Fill */}
                    <div 
                      className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500 ease-out z-0"
                      style={{ backgroundColor: "var(--btn-color)" }}
                    />
                    
                    <span 
                      className={`relative z-10 text-[11px] font-black uppercase tracking-widest transition-colors duration-300 group-hover/btn:text-white ${isLight ? "text-[var(--btn-color)]" : "text-white"}`}
                    >
                      Explore Category
                    </span>
                    
                    <div 
                      className="relative z-10 w-7 h-7 rounded-full flex items-center justify-center bg-white shadow-sm transition-transform duration-500 group-hover/btn:scale-110 group-hover/btn:rotate-12 text-[var(--btn-color)]"
                    >
                      <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-px" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
