"use client";

import { motion } from "framer-motion";
import { Star, MessageSquare } from "lucide-react";

export default function Reviews({ theme }) {
  const isLight = theme === "light";

  const testimonials = [
    {
      name: "Marcus Sterling",
      role: "Verified Vaporist",
      rating: 5,
      comment: "The temperature control on this thing is unbelievable. I've been using it for 3 weeks and haven't had a single burnt taste. The Cool Mint pod is clean, refreshing, and incredibly satisfying.",
      date: "2 days ago"
    },
    {
      name: "Aria Thorne",
      role: "Flavor Connoisseur",
      rating: 5,
      comment: "Royal Mango captures the actual fruit notes perfectly, without being overly sweet like other brands. The design is absolutely gorgeous, feels like a piece of high-end consumer technology.",
      date: "1 week ago"
    },
    {
      name: "Dr. Kenji Tanaka",
      role: "Industrial Designer",
      rating: 5,
      comment: "As a designer, I'm blown away by the industrial design of the JUUL. The anodized metal body, the tactile click of the magnetic charge base, and the glowing indicator LED are masterpieces.",
      date: "2 weeks ago"
    }
  ];

  return (
    <section className={`py-24 transition-colors duration-500 relative overflow-hidden ${
      isLight ? "bg-white" : "bg-[#09090A]"
    }`}>
      {/* Background radial glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none ${
        isLight ? "bg-blue-500/[0.01]" : "bg-emerald-500/[0.02]"
      }`} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className={`inline-flex items-center gap-2 ${
            isLight ? "text-blue-600" : "text-emerald-400"
          }`}>
            <MessageSquare className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-widest">
              Community Feedback
            </span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-extrabold ${isLight ? "text-zinc-950" : "text-white"}`}>
            Vaporists Love Us
          </h2>
          <p className={`font-light ${isLight ? "text-zinc-500" : "text-zinc-400"}`}>
            Hear from our global collective of design enthusiasts and flavor lovers who transitioned to a premium lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className={`p-8 rounded-3xl border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                isLight 
                  ? "bg-zinc-50/50 border-zinc-200/80 hover:border-zinc-300 hover:bg-white shadow-[0_8px_30px_rgba(0,0,0,0.01)]" 
                  : "bg-white/[0.01] border-white/5 hover:border-white/10 hover:bg-white/[0.02]"
              }`}
            >
              <div className="space-y-4 text-left">
                {/* Rating */}
                <div className="flex gap-1 text-amber-400">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className={`text-xs sm:text-sm font-light leading-relaxed italic ${
                  isLight ? "text-zinc-600" : "text-zinc-300"
                }`}>
                  "{test.comment}"
                </p>
              </div>

              <div className={`flex items-center justify-between pt-6 border-t mt-6 text-left ${
                isLight ? "border-zinc-200/80" : "border-white/5"
              }`}>
                <div>
                  <p className={`text-sm font-bold ${isLight ? "text-zinc-800" : "text-white"}`}>{test.name}</p>
                  <p className={`text-[10px] uppercase tracking-widest font-semibold ${
                    isLight ? "text-zinc-400" : "text-zinc-500"
                  }`}>{test.role}</p>
                </div>
                <span className={`text-[10px] font-semibold ${
                  isLight ? "text-zinc-400" : "text-zinc-600"
                }`}>{test.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
