"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Star, Eye } from "lucide-react";

export default function NewArrivals({ onAddToCart, setCurrentPage, setSelectedProduct, theme }) {
  const isLight = theme === "light";

  const newProducts = [
    {
      id: "carbon-kit",
      name: "JUUL Device Kit - Carbon Black",
      category: "kits",
      price: 34.99,
      rating: 5.0,
      reviewsCount: 88,
      imgColor: "#111827",
      flavor: "classic",
      tag: "Premium",
      desc: "Super sleek matte carbon finish designed for pure style."
    },
    {
      id: "berry-pods",
      name: "JUUL Pod Pack - Alpine Berry",
      category: "pods",
      price: 16.99,
      rating: 4.7,
      reviewsCount: 95,
      imgColor: "#EC4899",
      flavor: "berry",
      tag: "New Drop",
      desc: "Pack of 4 pre-filled pods with cool wild berries flavor."
    },
    {
      id: "usb-dock",
      name: "Magnetic USB Charging Dock",
      category: "accessories",
      price: 9.99,
      rating: 4.6,
      reviewsCount: 64,
      imgColor: "#374151",
      flavor: "classic",
      tag: "Original",
      desc: "Compact wireless USB dock to charge your JUUL anywhere."
    }
  ];

  const handleProductClick = (prod) => {
    setSelectedProduct(prod);
    setCurrentPage("product");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className={`py-24 border-b transition-colors duration-500 ${
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
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div className="space-y-3">
            <span className={`text-xs font-bold uppercase tracking-widest ${
              isLight ? "text-zinc-400" : "text-zinc-500"
            }`}>
              Featured Collection
            </span>
            <h2 className={`text-3xl sm:text-5xl font-black tracking-tight ${
              isLight ? "text-zinc-950" : "text-white"
            }`}>
              New Arrivals Dubai
            </h2>
          </div>
        </motion.div>

        {/* Product Grid */}
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newProducts.map((prod, i) => (
            <motion.div
              key={prod.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
              className={`group flex flex-col justify-between rounded-3xl p-5 border transition-all duration-300 ${
                isLight
                  ? "bg-zinc-50 border-zinc-200/85 hover:border-zinc-350 shadow-sm hover:shadow-md"
                  : "bg-white/[0.01] border-white/5 hover:border-white/10 hover:bg-white/[0.02]"
              }`}
            >
              {/* Product Visual Box */}
              <div 
                onClick={() => handleProductClick(prod)}
                className={`w-full h-52 rounded-2xl border relative overflow-hidden flex items-center justify-center cursor-pointer transition-colors ${
                  isLight ? "bg-white border-zinc-150" : "bg-zinc-950 border-white/5"
                }`}
              >
                {/* Floating Tag */}
                <span className={`absolute top-3 left-3 border backdrop-blur-md text-[9px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full ${
                  isLight 
                    ? "bg-zinc-900/10 border-zinc-900/5 text-zinc-800" 
                    : "bg-white/10 border-white/20 text-white"
                }`}>
                  {prod.tag}
                </span>

                {/* Aesthetic mock device representation */}
                <div
                  className="w-8 h-28 rounded-md border flex flex-col items-center justify-between p-1 transition-all shadow-lg"
                  style={{ 
                    backgroundColor: "#18181A",
                    boxShadow: isLight ? `0 10px 30px ${prod.imgColor}15` : `0 0 30px ${prod.imgColor}20`
                  }}
                >
                  <div 
                    className="w-full h-8 rounded-sm border-b border-black/40 flex flex-col justify-end p-0.5"
                    style={{ backgroundColor: `${prod.imgColor}20`, borderColor: `${prod.imgColor}40` }}
                  >
                    <div className="w-full h-2.5 bg-black/60 rounded-sm" />
                  </div>
                  <div 
                    className="w-2 h-2 rounded-full shadow-lg animate-pulse"
                    style={{ 
                      backgroundColor: prod.imgColor, 
                      boxShadow: `0 0 10px ${prod.imgColor}`
                    }}
                  />
                  <div className="w-full h-0.5 bg-zinc-800 rounded-full" />
                </div>

                {/* Quick-view overlay */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProductClick(prod);
                    }}
                    className={`p-3 rounded-full bg-white text-black transition-colors shadow-lg cursor-pointer ${
                      isLight ? "hover:bg-zinc-950 hover:text-white" : "hover:bg-zinc-900"
                    }`}
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(prod);
                    }}
                    className={`p-3 rounded-full bg-white text-black transition-colors shadow-lg cursor-pointer ${
                      isLight ? "hover:bg-zinc-950 hover:text-white" : "hover:bg-zinc-900"
                    }`}
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Info content */}
              <div className="mt-5 space-y-2 text-left">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span className={`text-[10px] font-bold ${isLight ? "text-zinc-800" : "text-white"}`}>{prod.rating}</span>
                  </div>
                  <span className={`text-[10px] uppercase tracking-widest font-black ${isLight ? "text-zinc-400" : "text-zinc-500"}`}>
                    {prod.reviewsCount} Reviews
                  </span>
                </div>
                <h3 
                  onClick={() => handleProductClick(prod)}
                  className={`text-sm sm:text-base font-black hover:underline cursor-pointer truncate ${
                    isLight ? "text-zinc-950" : "text-white"
                  }`}
                >
                  {prod.name}
                </h3>
                <p className={`text-xs font-light line-clamp-2 h-8 leading-relaxed ${isLight ? "text-zinc-500" : "text-zinc-400"}`}>
                  {prod.desc}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-zinc-100 dark:border-white/5">
                  <p className={`text-sm sm:text-base font-black ${isLight ? "text-zinc-950" : "text-white"}`}>
                    AED {prod.price}
                  </p>
                  <button
                    onClick={() => onAddToCart(prod)}
                    className={`text-[9px] uppercase tracking-widest font-black py-2 px-4 rounded-full border transition-all cursor-pointer ${
                      isLight 
                        ? "border-zinc-200 hover:border-zinc-950 hover:bg-zinc-950 hover:text-white bg-white text-zinc-900" 
                        : "border-white/5 hover:border-white hover:bg-white hover:text-zinc-950 bg-white/5 text-white"
                    }`}
                  >
                    Quick Add
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
