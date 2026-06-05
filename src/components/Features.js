"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Truck, UserCheck, Tag } from "lucide-react";

export default function Features({ theme }) {
  const isLight = theme === "light";

  const specs = [
    {
      icon: <ShieldCheck className={`w-6 h-6 ${isLight ? "text-zinc-950" : "text-white"}`} />,
      title: "100% Authentic",
      desc: "Direct brand sourcing ensures guaranteed safety and zero counterfeit products.",
      glow: isLight ? "hover:shadow-zinc-950/[0.03]" : "hover:shadow-white/5"
    },
    {
      icon: <Truck className={`w-6 h-6 ${isLight ? "text-zinc-950" : "text-white"}`} />,
      title: "Express UAE Shipping",
      desc: "Same-day courier dispatch inside Dubai and rapid next-day delivery to other emirates.",
      glow: isLight ? "hover:shadow-zinc-950/[0.03]" : "hover:shadow-white/5"
    },
    {
      icon: <UserCheck className={`w-6 h-6 ${isLight ? "text-zinc-950" : "text-white"}`} />,
      title: "Age Compliant",
      desc: "Strict age 21+ verification compliance at checkout and upon delivery for adult smokers.",
      glow: isLight ? "hover:shadow-zinc-950/[0.03]" : "hover:shadow-white/5"
    },
    {
      icon: <Tag className={`w-6 h-6 ${isLight ? "text-zinc-950" : "text-white"}`} />,
      title: "Guaranteed Best Price",
      desc: "Enjoy authentic vaping systems at highly competitive retail pricing and bulk deals.",
      glow: isLight ? "hover:shadow-zinc-950/[0.03]" : "hover:shadow-white/5"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="features" className={`py-24 transition-colors duration-500 relative overflow-hidden ${
      isLight ? "bg-white" : "bg-[#050506]"
    }`}>
      {/* Background element (GPU Optimized) */}
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full pointer-events-none"
           style={{ background: isLight ? "radial-gradient(circle, rgba(59,130,246,0.03) 0%, transparent 70%)" : "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className={`text-xs font-bold uppercase tracking-widest ${
            isLight ? "text-blue-600" : "text-emerald-400"
          }`}>
            Engineered Perfection
          </span>
          <h2 className={`text-3xl sm:text-5xl font-extrabold ${isLight ? "text-zinc-950" : "text-white"}`}>
            Uncompromising Standards
          </h2>
          <p className={`font-light ${isLight ? "text-zinc-500" : "text-zinc-400"}`}>
            Every millimeter of the JUUL is optimized for reliability and seamless comfort. Built with medical-grade alloys and pure elements.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {specs.map((spec, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between h-72 ${
                isLight 
                  ? "bg-zinc-50 border-zinc-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:border-zinc-300 hover:bg-zinc-100/60" 
                  : "bg-white/[0.02] border-white/5 hover:border-white/10"
              } ${spec.glow}`}
            >
              <div className="space-y-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${
                  isLight ? "bg-white border-zinc-200 shadow-sm" : "bg-white/5 border-white/10"
                }`}>
                  {spec.icon}
                </div>
                <h3 className={`text-lg font-bold ${isLight ? "text-zinc-800" : "text-white"}`}>{spec.title}</h3>
                <p className={`text-xs sm:text-sm font-light leading-relaxed ${
                  isLight ? "text-zinc-500" : "text-zinc-400"
                }`}>
                  {spec.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
