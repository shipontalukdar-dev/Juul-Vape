"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MessageSquare, X, Phone } from "lucide-react";

const icons = {
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  ),
  messenger: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M12 2C6.477 2 2 6.145 2 11.259c0 2.896 1.487 5.485 3.793 7.151v4.116l3.46-1.905c.875.241 1.796.37 2.747.37 5.523 0 10-4.145 10-9.259S17.523 2 12 2zm1.093 12.545l-2.77-2.96-5.413 2.96 5.945-6.31 2.846 2.96 5.336-2.96-5.944 6.31z" />
    </svg>
  )
};

const chatOptions = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/971000000000",
    bgColor: "bg-[#25D366]",
    icon: icons.whatsapp,
  },
  {
    id: "messenger",
    label: "Messenger",
    href: "https://m.me/juuluae",
    bgColor: "bg-[#0084FF]",
    icon: icons.messenger,
  },
  {
    id: "phone",
    label: "Call Us",
    href: "tel:+971000000000",
    bgColor: "bg-[#D92D20]", // Distinct Red for phone
    icon: <Phone className="w-6 h-6 fill-current" />,
  },
];

export default function FloatingSocials({ theme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);
  const isLight = theme === "light";

  return (
    <div className="fixed right-6 bottom-6 z-[100] flex flex-col items-center">
      
      {/* Expanded Menu Options */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-4 mb-4 items-center"
          >
            {chatOptions.map((option, i) => (
              <motion.a
                key={option.id}
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: i * 0.05, duration: 0.2 }}
                onMouseEnter={() => setHoveredId(option.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="relative flex items-center justify-end group"
              >
                {/* Tooltip */}
                <AnimatePresence>
                  {hoveredId === option.id && (
                    <motion.span
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      className={`absolute right-[70px] px-3 py-1.5 text-xs font-bold rounded-lg shadow-md whitespace-nowrap ${
                        isLight ? "bg-white text-zinc-900 border border-zinc-200" : "bg-zinc-800 text-white border border-white/10"
                      }`}
                    >
                      {option.label}
                    </motion.span>
                  )}
                </AnimatePresence>

                {/* Circular Icon Button */}
                <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-[0_8px_20px_rgba(0,0,0,0.15)] transition-transform hover:scale-110 ${option.bgColor}`}>
                  {option.icon}
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main FAB Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex flex-col items-center justify-center outline-none"
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.25, type: "spring", stiffness: 200 }}
          className={`relative w-[60px] h-[60px] rounded-full flex items-center justify-center shadow-2xl transition-colors duration-300 ${
            isOpen 
              ? "bg-[#FF6A00] text-white border-2 border-[#FF6A00]" // Solid orange when open
              : isLight
                ? "bg-[#0A192F] border-2 border-[#FF6A00] text-[#FF6A00]" // Dark blueish center, orange border
                : "bg-[#050B14] border-2 border-[#FF6A00] text-[#FF6A00]" // Darker center, orange border
          }`}
        >
          {isOpen ? (
            <X className="w-7 h-7" strokeWidth={2.5} />
          ) : (
            <MessageSquare className="w-7 h-7" strokeWidth={2} />
          )}
        </motion.div>
        
        {/* Label below button (Live chat) */}
        <AnimatePresence>
          {!isOpen && (
            <motion.span
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className={`mt-2 text-[11px] font-bold tracking-wide ${
                isLight ? "text-zinc-600" : "text-zinc-400"
              }`}
            >
              Live chat
            </motion.span>
          )}
        </AnimatePresence>
      </button>

    </div>
  );
}
