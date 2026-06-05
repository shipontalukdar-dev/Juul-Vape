"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ShoppingBag, Timer, Zap, Tag } from "lucide-react";
import Image from "next/image";

const DEALS = [
  {
    id: "deal-1",
    name: "JUUL 2 Starter Bundle",
    desc: "Device + 2 Pod Packs of your choice",
    originalPrice: 89.99,
    salePrice: 64.99,
    discount: 28,
    badge: "🔥 Best Deal",
    accentColor: "#E11D48",
    image: "/deal-bundle.png",
    stock: null,
  },
  {
    id: "deal-2",
    name: "JUUL 1 Classic Triple Pack",
    desc: "Cool Mint + Virginia Tobacco + Menthol",
    originalPrice: 47.97,
    salePrice: 34.99,
    discount: 27,
    badge: "⚡ Flash Sale",
    accentColor: "#10B981",
    image: "/deal-triple.png",
    stock: null,
  },
  {
    id: "deal-3",
    name: "JUUL 2 Polar Mint × 2 Packs",
    desc: "Double mint bundle at a special price",
    originalPrice: 31.98,
    salePrice: 24.99,
    discount: 22,
    badge: "🧊 Bundle Save",
    accentColor: "#06B6D4",
    image: "/deal-mint.png",
    stock: 5,
  },
  {
    id: "deal-4",
    name: "Tactical Leather Case",
    desc: "Premium leather carry case — fits JUUL 1 & 2",
    originalPrice: 29.99,
    salePrice: 19.99,
    discount: 33,
    badge: "🎁 Limited",
    accentColor: "#B45309",
    image: "/deal-case.png",
    stock: 4,
  },
];

function useCountdown() {
  const [time, setTime] = useState({ h: 11, m: 47, s: 23 });
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { h, m, s } = prev;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 23; m = 59; s = 59; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return time;
}

function TimeBlock({ value, label, isLight }) {
  const display = String(value).padStart(2, "0");
  return (
    <div className="flex flex-col items-center gap-1">
      <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-black text-lg tabular-nums overflow-hidden relative ${
        isLight ? "bg-zinc-950 text-white" : "bg-white text-zinc-950"
      }`}>
        <AnimatePresence mode="wait">
          <motion.span
            key={display}
            initial={{ y: -12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 12, opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {display}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className={`text-[8px] uppercase tracking-widest font-bold ${
        isLight ? "text-zinc-400" : "text-zinc-500"
      }`}>{label}</span>
    </div>
  );
}

function DealCard({ deal, isLight, onAddToCart, index }) {
  const [added, setAdded] = useState(false);
  const savings = (deal.originalPrice - deal.salePrice).toFixed(2);

  const handleAdd = () => {
    if (onAddToCart) {
      onAddToCart({
        id: deal.id,
        name: deal.name,
        price: deal.salePrice,
      });
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2200);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ delay: index * 0.09, duration: 0.45, ease: "easeOut" }}
      className={`group relative rounded-3xl border overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 ${
        isLight
          ? "bg-white border-zinc-200/80 shadow-[0_2px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_36px_rgba(0,0,0,0.09)]"
          : "bg-[#111112] border-white/[0.06] hover:border-white/10"
      }`}
    >
      {/* Discount pill */}
      <div
        className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full text-white text-[10px] font-black uppercase tracking-wider shadow-md"
        style={{ backgroundColor: deal.accentColor }}
      >
        -{deal.discount}% OFF
      </div>

      {/* Low stock warning */}
      {deal.stock && (
        <div className={`absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-wider ${
          isLight
            ? "bg-amber-50 text-amber-600 border border-amber-200"
            : "bg-amber-950/50 text-amber-400 border border-amber-800/30"
        }`}>
          Only {deal.stock} left!
        </div>
      )}

      {/* Product Image */}
      <div className={`relative w-full h-48 overflow-hidden ${
        isLight ? "bg-zinc-50" : "bg-zinc-900/50"
      }`}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          <Image
            src={deal.image}
            alt={deal.name}
            fill
            className="object-contain p-5 drop-shadow-md"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-5 flex-1 justify-between">
        <div className="space-y-1.5">
          {/* Badge */}
          <span className={`text-[9px] font-black uppercase tracking-widest`}>
            {deal.badge}
          </span>
          <h3 className={`text-sm font-black leading-snug ${isLight ? "text-zinc-950" : "text-white"}`}>
            {deal.name}
          </h3>
          <p className={`text-[11px] font-light leading-relaxed ${isLight ? "text-zinc-500" : "text-zinc-400"}`}>
            {deal.desc}
          </p>
        </div>

        {/* Pricing row */}
        <div className="space-y-3">
          <div className="flex items-end flex-wrap gap-x-2 gap-y-1">
            <span className="text-2xl font-black" style={{ color: deal.accentColor }}>
              AED {deal.salePrice}
            </span>
            <span className={`text-sm line-through mb-0.5 ${isLight ? "text-zinc-400" : "text-zinc-600"}`}>
              {deal.originalPrice}
            </span>
            <span className={`text-[10px] font-black mb-0.5 px-2 py-0.5 rounded-full ${
              isLight ? "bg-emerald-50 text-emerald-600" : "bg-emerald-950/50 text-emerald-400"
            }`}>
              Save AED {savings}
            </span>
          </div>

          {/* CTA Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleAdd}
            className={`w-full py-3 rounded-2xl flex items-center justify-center gap-2 text-[11px] font-black uppercase tracking-wider transition-all cursor-pointer border ${
              added
                ? "bg-emerald-500 border-emerald-500 text-white"
                : isLight
                ? "bg-zinc-950 border-zinc-950 text-white hover:bg-zinc-800"
                : "bg-white border-white text-zinc-950 hover:bg-zinc-100"
            }`}
          >
            {added ? (
              <><span>✓</span> Added!</>
            ) : (
              <><ShoppingBag className="w-3.5 h-3.5" /> Add to Cart</>
            )}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default function FlashDeals({ theme, onAddToCart }) {
  const { h, m, s } = useCountdown();
  const isLight = theme === "light";

  return (
    <section className={`py-20 transition-colors duration-500 relative overflow-hidden ${
      isLight ? "bg-white" : "bg-[#09090A]"
    }`}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ── Header Row ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-red-500 flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 text-white fill-white" />
              </div>
              <span className={`text-xs font-bold uppercase tracking-widest ${
                isLight ? "text-red-500" : "text-red-400"
              }`}>
                Limited Time Offers
              </span>
            </div>
            <h2 className={`text-3xl sm:text-5xl font-black tracking-tight ${
              isLight ? "text-zinc-950" : "text-white"
            }`}>
              Flash Deals <span>🔥</span>
            </h2>
            <p className={`text-sm font-light ${isLight ? "text-zinc-500" : "text-zinc-400"}`}>
              Exclusive discounts on premium JUUL bundles. Grab them before they're gone.
            </p>
          </div>

          {/* ── Countdown Timer ── */}
          <div className={`flex-shrink-0 px-5 py-4 rounded-3xl border flex flex-col items-center gap-3 ${
            isLight ? "bg-zinc-50 border-zinc-200" : "bg-white/[0.02] border-white/5"
          }`}>
            <div className="flex items-center gap-1.5">
              <Timer className="w-3.5 h-3.5 text-red-500 animate-pulse" />
              <span className={`text-[10px] font-black uppercase tracking-widest ${
                isLight ? "text-zinc-500" : "text-zinc-400"
              }`}>Ends In</span>
            </div>
            <div className="flex items-end gap-2">
              <TimeBlock value={h} label="Hrs" isLight={isLight} />
              <span className={`text-lg font-black mb-5 ${isLight ? "text-zinc-300" : "text-zinc-600"}`}>:</span>
              <TimeBlock value={m} label="Min" isLight={isLight} />
              <span className={`text-lg font-black mb-5 ${isLight ? "text-zinc-300" : "text-zinc-600"}`}>:</span>
              <TimeBlock value={s} label="Sec" isLight={isLight} />
            </div>
          </div>
        </div>

        {/* ── Deals Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DEALS.map((deal, i) => (
            <DealCard
              key={deal.id}
              deal={deal}
              isLight={isLight}
              onAddToCart={onAddToCart}
              index={i}
            />
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-8 flex items-center justify-center gap-2">
          <Tag className={`w-3.5 h-3.5 ${isLight ? "text-zinc-400" : "text-zinc-500"}`} />
          <p className={`text-[11px] font-medium ${isLight ? "text-zinc-400" : "text-zinc-500"}`}>
            Prices in AED · Discounts applied at checkout · While stocks last
          </p>
        </div>
      </div>
    </section>
  );
}
