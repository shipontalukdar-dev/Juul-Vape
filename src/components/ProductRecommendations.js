"use client";

import { motion } from "framer-motion";
import { Star, ShoppingCart } from "lucide-react";
import Image from "next/image";

export default function ProductRecommendations({ category, currentProductId, onProductClick, onAddToCart, theme }) {
  const isLight = theme === "light";

  // Full product catalog for reference
  const catalog = [
    {
      id: "juul1-slate",
      name: "JUUL 1 Device Kit - Slate Grey",
      category: "kits",
      version: "juul1",
      price: 24.99,
      rating: 4.8,
      reviewsCount: 142,
      imgColor: "#4B5563",
      tag: "Original Classic",
      desc: "Anodized metal body with signature rapid USB magnetic charging."
    },
    {
      id: "juul1-mint",
      name: "JUUL 1 Pod Pack - Cool Mint",
      category: "pods",
      version: "juul1",
      price: 15.99,
      rating: 4.9,
      reviewsCount: 310,
      imgColor: "#10B981",
      tag: "Signature Blend",
      desc: "Pack of 4 pre-filled pods containing crisp peppermint frost.",
      image: "/deal-mint.png"
    },
    {
      id: "juul2-device",
      name: "JUUL 2 Device Kit - Slate Grey",
      category: "kits",
      version: "juul2",
      price: 29.99,
      rating: 5.0,
      reviewsCount: 194,
      imgColor: "#1E1E20",
      tag: "Smart Gen 2",
      desc: "Enhanced vapor draw, massive battery, and dynamic smart LED indicators.",
      image: "/deal-bundle.png"
    },
    {
      id: "juul2-apple",
      name: "JUUL 2 Pods - Ruby Sunset (Crisp Apple)",
      category: "pods",
      version: "juul2",
      price: 17.99,
      rating: 4.9,
      reviewsCount: 228,
      imgColor: "#EF4444",
      tag: "Many Flavors",
      desc: "Pack of 2 genuine pods with crisp red apple aroma and juicy finish.",
      image: "/deal-triple.png"
    },
    {
      id: "juul2-mango",
      name: "JUUL 2 Pods - Summer Gold (Tropical Mango)",
      category: "pods",
      version: "juul2",
      price: 17.99,
      rating: 4.8,
      reviewsCount: 312,
      imgColor: "#F59E0B",
      tag: "Many Flavors",
      desc: "Pack of 2 genuine pods featuring rich tropical sun-ripened mango.",
      image: "/deal-triple.png"
    },
    {
      id: "carry-case",
      name: "Tactical Leather Carrying Case",
      category: "accessories",
      version: "juul2",
      price: 19.99,
      rating: 4.9,
      reviewsCount: 52,
      imgColor: "#78350F",
      tag: "Bespoke Carry",
      desc: "Handcrafted, shockproof carrying case for device and pods.",
      image: "/deal-case.png"
    },
    {
      id: "usb-dock",
      name: "Magnetic USB Charging Dock",
      category: "accessories",
      version: "juul1",
      price: 9.99,
      rating: 4.6,
      reviewsCount: 64,
      imgColor: "#374151",
      tag: "Original Accessories",
      desc: "Compact wireless USB dock to charge your JUUL 1 anywhere.",
      image: "/juul1-charger.png"
    }
  ];

  // Filter out the current product and get items in similar categories or just generally popular items
  const recommendations = catalog
    .filter(p => p.id !== currentProductId)
    .filter(p => p.category === category || category === "all")
    .slice(0, 4);

  // If there are not enough items in the same category, fill up with general popular items
  if (recommendations.length < 4) {
    const extraItems = catalog
      .filter(p => p.id !== currentProductId && !recommendations.some(r => r.id === p.id))
      .slice(0, 4 - recommendations.length);
    recommendations.push(...extraItems);
  }

  return (
    <div className={`pt-16 border-t text-left ${isLight ? "border-zinc-200" : "border-white/5"}`}>
      <h3 className={`text-xl sm:text-2xl font-black mb-8 ${isLight ? "text-zinc-950" : "text-white"}`}>
        You May Also Like
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {recommendations.map((prod) => (
          <motion.div
            key={prod.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.4 }}
            className={`group relative flex flex-col justify-between rounded-3xl p-4 border transition-all duration-300 ${
              isLight
                ? "bg-white border-zinc-200 hover:border-zinc-300 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.04)]"
                : "bg-[#111112] border-white/5 hover:border-white/10"
            }`}
          >
            {/* Image Box */}
            <div 
              onClick={() => onProductClick(prod)}
              className={`w-full h-40 rounded-2xl border relative overflow-hidden flex items-center justify-center cursor-pointer transition-colors ${
                isLight ? "bg-zinc-50 border-zinc-100" : "bg-zinc-950 border-white/5"
              }`}
            >
              {prod.image ? (
                <Image
                  src={prod.image}
                  alt={prod.name}
                  fill
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
              ) : (
                /* Fallback device block */
                <div
                  className="w-6 h-20 rounded border flex flex-col items-center justify-between p-0.5 shadow-lg"
                  style={{ backgroundColor: "#18181A", borderColor: `${prod.imgColor}25` }}
                >
                  <div className="w-full h-5 bg-zinc-800 rounded-sm" />
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: prod.imgColor }} />
                  <div className="w-full h-1 bg-zinc-700 rounded-full" />
                </div>
              )}
            </div>

            {/* Content info */}
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-0.5 text-amber-400">
                  <Star className="w-3 h-3 fill-amber-400" />
                  <span className={`text-[10px] font-bold ${isLight ? "text-zinc-800" : "text-white"}`}>{prod.rating}</span>
                </div>
                <span className="text-[9px] uppercase font-bold text-zinc-500 tracking-wider">
                  {prod.category}
                </span>
              </div>

              <h4 
                onClick={() => onProductClick(prod)}
                className={`text-xs font-bold transition-colors cursor-pointer line-clamp-1 hover:underline ${
                  isLight ? "text-zinc-900" : "text-white"
                }`}
              >
                {prod.name}
              </h4>
            </div>

            {/* Footer action */}
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-zinc-100 dark:border-white/5">
              <span className={`text-sm font-black ${isLight ? "text-zinc-950" : "text-white"}`}>AED {prod.price}</span>
              <button
                onClick={() => onAddToCart(prod)}
                className={`p-2 rounded-full transition-all duration-300 cursor-pointer ${
                  isLight 
                    ? "bg-zinc-950 hover:bg-zinc-800 text-white" 
                    : "bg-white/5 hover:bg-emerald-450 hover:text-black text-white"
                }`}
              >
                <ShoppingCart className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
