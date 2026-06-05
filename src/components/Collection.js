"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Star, Filter, Heart, Eye } from "lucide-react";

export default function Collection({ onAddToCart, setCurrentPage, setSelectedProduct, theme, activeCategory = "all", setActiveCategory, versionFilter = "all", setVersionFilter }) {

  const categories = [
    { id: "all", label: "All Products" },
    { id: "kits", label: "Starter Kits" },
    { id: "pods", label: "Vape Pods" },
    { id: "accessories", label: "Accessories" }
  ];

  const products = [
    // JUUL 1 Series (Exactly 3 Signature Flavors + Slate Device)
    {
      id: "juul1-slate",
      name: "JUUL 1 Device Kit - Slate Grey",
      category: "kits",
      version: "juul1",
      price: 24.99,
      rating: 4.8,
      reviewsCount: 142,
      imgColor: "#4B5563",
      flavor: "classic",
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
      flavor: "mint",
      tag: "Signature Blend",
      desc: "Pack of 4 pre-filled pods containing crisp peppermint frost."
    },
    {
      id: "juul1-tobacco",
      name: "Virginia Tobacco JUUL 1 Pods",
      category: "pods",
      version: "juul1",
      price: 15.99,
      rating: 4.8,
      reviewsCount: 188,
      imgColor: "#78716C",
      flavor: "classic",
      tag: "Rich Taste",
      desc: "Pack of 4 pre-filled pods with classic robust American tobacco."
    },
    {
      id: "juul1-menthol",
      name: "Classic Menthol JUUL 1 Pods",
      category: "pods",
      version: "juul1",
      price: 15.99,
      rating: 4.7,
      reviewsCount: 95,
      imgColor: "#06B6D4",
      flavor: "menthol",
      tag: "Traditional Ice",
      desc: "Pack of 4 pre-filled pods with crisp icy traditional menthol."
    },

    // JUUL 2 Series (Enhanced smart device & many flavors!)
    {
      id: "juul2-device",
      name: "JUUL 2 Device Kit - Slate Grey",
      category: "kits",
      version: "juul2",
      price: 29.99,
      rating: 5.0,
      reviewsCount: 194,
      imgColor: "#1E1E20",
      flavor: "classic",
      tag: "Smart Gen 2",
      desc: "Enhanced vapor draw, massive battery, and dynamic smart LED indicators."
    },
    {
      id: "juul2-ruby-kit",
      name: "JUUL 2 Starter Kit - Ruby Edition",
      category: "kits",
      version: "juul2",
      price: 34.99,
      rating: 4.9,
      reviewsCount: 88,
      imgColor: "#E11D48",
      flavor: "berry",
      tag: "Premium Kit",
      desc: "Ruby Red anodized device with dual-pack dynamic starter pods."
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
      flavor: "berry",
      tag: "Many Flavors",
      desc: "Pack of 2 genuine pods with crisp red apple aroma and juicy finish."
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
      flavor: "mango",
      tag: "Many Flavors",
      desc: "Pack of 2 genuine pods featuring rich tropical sun-ripened mango."
    },
    {
      id: "juul2-polar-mint",
      name: "JUUL 2 Pods - Polar Mint (Spearmint Ice)",
      category: "pods",
      version: "juul2",
      price: 17.99,
      rating: 4.9,
      reviewsCount: 295,
      imgColor: "#10B981",
      flavor: "mint",
      tag: "Many Flavors",
      desc: "Pack of 2 genuine pods with intense spearmint and arctic cooling frost."
    },
    {
      id: "juul2-blackcurrant",
      name: "JUUL 2 Pods - Blackcurrant (Rich Berry)",
      category: "pods",
      version: "juul2",
      price: 18.99,
      rating: 4.7,
      reviewsCount: 110,
      imgColor: "#EC4899",
      flavor: "berry",
      tag: "Many Flavors",
      desc: "Pack of 2 genuine pods with juicy blackcurrant and wild forest berries."
    },
    {
      id: "juul2-crisp-menthol",
      name: "JUUL 2 Pods - Crisp Menthol (Ice Punch)",
      category: "pods",
      version: "juul2",
      price: 17.99,
      rating: 4.8,
      reviewsCount: 156,
      imgColor: "#06B6D4",
      flavor: "menthol",
      tag: "Many Flavors",
      desc: "Pack of 2 genuine pods delivering an extra punch of clean arctic menthol."
    },
    {
      id: "juul2-virginia-tobacco",
      name: "JUUL 2 Pods - Virginia Tobacco (Bold)",
      category: "pods",
      version: "juul2",
      price: 17.99,
      rating: 4.7,
      reviewsCount: 178,
      imgColor: "#78716C",
      flavor: "classic",
      tag: "Many Flavors",
      desc: "Pack of 2 genuine pods with full-bodied toasted tobacco leaves flavor."
    },
    {
      id: "juul2-autumn-gold",
      name: "JUUL 2 Pods - Autumn Gold (Spiced)",
      category: "pods",
      version: "juul2",
      price: 18.99,
      rating: 4.6,
      reviewsCount: 75,
      imgColor: "#B45309",
      flavor: "classic",
      tag: "Many Flavors",
      desc: "Pack of 2 genuine pods with sweet spiced notes and rich tobacco finish."
    },

    // Premium Accessories
    {
      id: "usb-dock",
      name: "Magnetic USB Charging Dock",
      category: "accessories",
      version: "juul1",
      price: 9.99,
      rating: 4.6,
      reviewsCount: 64,
      imgColor: "#374151",
      flavor: "classic",
      tag: "Original Accessories",
      desc: "Compact wireless USB dock to charge your JUUL 1 anywhere."
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
      flavor: "classic",
      tag: "Bespoke Carry",
      desc: "Handcrafted, shockproof carrying case for device and pods."
    }
  ];

  const isLight = theme === "light";

  const filteredProducts = products.filter(p => {
    const matchesCategory = activeCategory === "all" || p.category === activeCategory;
    const matchesVersion = versionFilter === "all" || p.version === versionFilter;
    return matchesCategory && matchesVersion;
  });

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setCurrentPage("product");
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`pt-32 pb-20 min-h-screen text-left transition-colors duration-500 ${
        isLight ? "bg-zinc-50 text-zinc-900" : "bg-[#09090A] text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <span className={`text-xs font-bold uppercase tracking-widest ${
              isLight ? "text-blue-600" : "text-emerald-400"
            }`}>
              Curated Catalog
            </span>
            <h1 className={`text-3xl sm:text-5xl font-extrabold tracking-tight ${
              isLight ? "text-zinc-950" : "text-white"
            }`}>
              Premium Collections
            </h1>
          </div>

          {/* Categories Tab selector */}
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-xs uppercase tracking-widest font-bold px-5 py-3 rounded-full border transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.id
                    ? isLight
                      ? "bg-zinc-950 text-white border-zinc-950"
                      : "bg-white text-black border-white"
                    : isLight
                    ? "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300 hover:text-zinc-900"
                    : "bg-transparent text-zinc-400 border-white/5 hover:border-white/10 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Device Generation Selector Segment */}
        <div className={`flex flex-wrap items-center justify-between border-b pb-6 mb-8 gap-4 ${
          isLight ? "border-zinc-200" : "border-white/5"
        }`}>
          <div className="flex items-center gap-1.5 bg-zinc-200/40 dark:bg-white/5 p-1 rounded-full border border-zinc-300/30 dark:border-white/5 w-fit">
            {[
              { id: "all", label: "All Products" },
              { id: "juul1", label: "JUUL 1 Classic" },
              { id: "juul2", label: "JUUL 2 Series" }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setVersionFilter(tab.id)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  versionFilter === tab.id
                    ? isLight
                      ? "bg-zinc-950 text-white shadow-sm"
                      : "bg-white text-zinc-950 shadow-lg"
                    : isLight
                    ? "text-zinc-650 hover:text-zinc-950"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <p className={`text-xs font-semibold uppercase tracking-widest ${
            isLight ? "text-zinc-400" : "text-zinc-500"
          }`}>
            Showing {filteredProducts.length} items
          </p>
        </div>

        {/* Product Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map(prod => (
              <motion.div
                key={prod.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`group relative flex flex-col justify-between rounded-3xl p-5 border transition-all duration-300 ${
                  isLight
                    ? "bg-white border-zinc-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:border-zinc-300/80 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
                    : "bg-white/[0.01] border-white/5 hover:border-white/10 p-5 hover:bg-white/[0.02]"
                }`}
              >
                {/* Image Showcase Box */}
                <div 
                  onClick={() => handleProductClick(prod)}
                  className={`w-full h-56 rounded-2xl border relative overflow-hidden flex items-center justify-center cursor-pointer transition-colors ${
                    isLight ? "bg-zinc-50 border-zinc-100" : "bg-zinc-950 border-white/5"
                  }`}
                >
                  {/* Floating Tag */}
                  {prod.tag && (
                    <span className={`absolute top-3 left-3 border backdrop-blur-md text-[9px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full ${
                      isLight 
                        ? "bg-zinc-900/10 border-zinc-900/5 text-zinc-800" 
                        : "bg-white/10 border-white/20 text-white"
                    }`}>
                      {prod.tag}
                    </span>
                  )}
                  <button className={`absolute top-3 right-3 p-1.5 rounded-full border transition-all ${
                    isLight 
                      ? "bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-400 hover:text-zinc-700" 
                      : "bg-white/5 hover:bg-white/10 border-white/5 text-zinc-400 hover:text-white"
                  }`}>
                    <Heart className="w-3.5 h-3.5" />
                  </button>

                  {/* Aesthetic device mock representation */}
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: -5 }}
                    transition={{ duration: 0.3 }}
                    className={`w-10 h-36 rounded-md border flex flex-col items-center justify-between p-1 transition-all duration-500 shadow-xl ${
                      isLight ? "border-zinc-200/50" : "border-white/10"
                    }`}
                    style={{ 
                      backgroundColor: "#18181A",
                      boxShadow: isLight ? `0 10px 30px ${prod.imgColor}15` : `0 0 30px ${prod.imgColor}20`
                    }}
                  >
                    <div 
                      className="w-full h-10 rounded-sm border-b border-black/40 flex flex-col justify-end p-0.5"
                      style={{ backgroundColor: `${prod.imgColor}20`, borderColor: `${prod.imgColor}40` }}
                    >
                      <div className="w-full h-3 bg-black/60 rounded-sm" />
                    </div>
                    {prod.version === "juul2" ? (
                      <div className="flex flex-col gap-0.5 justify-center items-center">
                        {[...Array(4)].map((_, i) => (
                          <div 
                            key={i}
                            className="w-1.5 h-1.5 rounded-full shadow-lg"
                            style={{ 
                              backgroundColor: prod.imgColor, 
                              boxShadow: `0 0 5px ${prod.imgColor}`,
                              opacity: i === 0 ? 1 : 0.4
                            }}
                          />
                        ))}
                      </div>
                    ) : (
                      <div 
                        className="w-2.5 h-2.5 rounded-full shadow-lg"
                        style={{ 
                          backgroundColor: prod.imgColor, 
                          boxShadow: `0 0 10px ${prod.imgColor}`
                        }}
                      />
                    )}
                    <div className="w-full h-1 bg-zinc-800 rounded-full" />
                  </motion.div>

                  {/* Quick-view overlay */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <button 
                      onClick={() => handleProductClick(prod)}
                      className={`p-3 rounded-full bg-white text-black transition-colors shadow-lg cursor-pointer ${
                        isLight ? "hover:bg-blue-600 hover:text-white" : "hover:bg-emerald-400"
                      }`}
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => onAddToCart(prod)}
                      className={`p-3 rounded-full bg-white text-black transition-colors shadow-lg cursor-pointer ${
                        isLight ? "hover:bg-blue-600 hover:text-white" : "hover:bg-emerald-400"
                      }`}
                    >
                      <ShoppingCart className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="mt-5 space-y-2 text-left">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span className={`text-xs font-bold ${isLight ? "text-zinc-800" : "text-white"}`}>{prod.rating}</span>
                      <span className="text-[10px] text-zinc-500 font-semibold">({prod.reviewsCount})</span>
                    </div>
                    <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">
                      {prod.category}
                    </span>
                  </div>

                  <h3 
                    onClick={() => handleProductClick(prod)}
                    className={`text-base font-bold transition-colors cursor-pointer line-clamp-1 ${
                      isLight 
                        ? "text-zinc-900 hover:text-blue-600" 
                        : "text-white hover:text-emerald-400"
                    }`}
                  >
                    {prod.name}
                  </h3>
                  <p className={`text-[11px] sm:text-xs font-light leading-relaxed line-clamp-2 ${
                    isLight ? "text-zinc-500" : "text-zinc-400"
                  }`}>
                    {prod.desc}
                  </p>
                </div>

                {/* Footer Purchase Actions */}
                <div className={`flex items-center justify-between pt-4 mt-4 border-t ${
                  isLight ? "border-zinc-100" : "border-white/5"
                }`}>
                  <span className={`text-lg font-black ${isLight ? "text-zinc-950" : "text-white"}`}>${prod.price}</span>
                  <button
                    onClick={() => onAddToCart(prod)}
                    className={`flex items-center gap-1.5 font-bold text-[10px] uppercase tracking-wider px-4 py-2 rounded-full transition-all duration-300 cursor-pointer ${
                      isLight 
                        ? "bg-zinc-950 hover:bg-zinc-800 text-white shadow-md shadow-zinc-950/10" 
                        : "bg-white/5 hover:bg-emerald-400 text-white hover:text-black border border-white/10 hover:border-transparent"
                    }`}
                  >
                    <ShoppingCart className="w-3.5 h-3.5" /> Buy
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
}
