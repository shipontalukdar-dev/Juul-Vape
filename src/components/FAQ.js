"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FAQ({ theme }) {
  const isLight = theme === "light";
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Is JUUL available in UAE?",
      a: "Yes, authentic JUUL devices and pod flavors are fully available for purchase online in the UAE with rapid delivery across Dubai, Sharjah, Abu Dhabi, and other emirates."
    },
    {
      q: "How long does one pod last?",
      a: "One authentic JUUL pod is engineered to last approximately 200 puffs, which is roughly equivalent to a standard pack of 20 traditional cigarettes, depending on your individual usage patterns."
    },
    {
      q: "Do you deliver outside Dubai?",
      a: "Yes! We provide fast, reliable courier delivery to all UAE emirates, including Abu Dhabi, Sharjah, Ajman, Fujairah, Ras Al Khaimah, and Umm Al Quwain, with same-day dispatch available."
    },
    {
      q: "Minimum age to order?",
      a: "Strictly age 21 years or older. We maintain a strict age verification compliance protocol at checkout and upon delivery to ensure responsible consumption."
    }
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`py-24 border-b transition-colors duration-500 ${
      isLight ? "bg-white" : "bg-[#09090A]"
    }`}>
      <div className="max-w-3xl mx-auto px-6 text-left">
        {/* Section Header */}
        <div className="space-y-3 mb-12 text-center">
          <span className={`text-xs font-bold uppercase tracking-widest ${
            isLight ? "text-zinc-400" : "text-zinc-500"
          }`}>
            Got Questions?
          </span>
          <h2 className={`text-3xl sm:text-5xl font-black tracking-tight ${
            isLight ? "text-zinc-950" : "text-white"
          }`}>
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? isLight
                      ? "bg-zinc-50 border-zinc-300"
                      : "bg-white/[0.02] border-white/20"
                    : isLight
                    ? "bg-white border-zinc-200 hover:border-zinc-300"
                    : "bg-transparent border-white/5 hover:border-white/10"
                }`}
              >
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full flex items-center justify-between p-6 cursor-pointer text-left"
                >
                  <span className={`text-sm sm:text-base font-bold ${
                    isLight ? "text-zinc-950" : "text-white"
                  }`}>
                    {faq.q}
                  </span>
                  <div className={`p-1.5 rounded-full border ${
                    isLight ? "border-zinc-200" : "border-white/10"
                  }`}>
                    {isOpen ? (
                      <Minus className={`w-3.5 h-3.5 ${isLight ? "text-zinc-700" : "text-zinc-350"}`} />
                    ) : (
                      <Plus className={`w-3.5 h-3.5 ${isLight ? "text-zinc-750" : "text-white"}`} />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className={`px-6 pb-6 text-xs sm:text-sm font-light leading-relaxed ${
                        isLight ? "text-zinc-500 border-t border-zinc-200 pt-4" : "text-zinc-400 border-t border-white/5 pt-4"
                      }`}>
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
