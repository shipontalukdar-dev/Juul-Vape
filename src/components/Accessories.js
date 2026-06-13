"use client";

import { motion } from "framer-motion";
import { ShoppingBag, ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Accessories({ onAddToCart, setSelectedProduct, setCurrentPage, theme }) {
  const isLight = theme === "light";
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: 340, behavior: "smooth" });
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const scrollLeftNav = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth } = scrollRef.current;
      if (scrollLeft <= 0) {
        scrollRef.current.scrollTo({ left: scrollWidth, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: -340, behavior: "smooth" });
      }
    }
  };

  const scrollRightNav = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: 340, behavior: "smooth" });
      }
    }
  };

  const accessoryProducts = [
    {
      id: "juul-charging-case",
      name: "JUUL Portable Charging Case",
      category: "accessories",
      price: 119.00,
      originalPrice: 149.00,
      salePrice: 119.00,
      discount: 20,
      rating: 4.9,
      reviewsCount: 124,
      imgColor: "#18181B",
      tag: "Best Seller",
      desc: "Charge your JUUL device on the go. High-capacity battery case holds 1 JUUL device and 4 spare pods.",
      image: "/deal-case.png",
      inStock: false
    },
    {
      id: "juul-usb-dock",
      name: "Magnetic USB Charging Dock",
      category: "accessories",
      price: 29.00,
      originalPrice: 39.00,
      salePrice: 29.00,
      discount: 25,
      rating: 4.7,
      reviewsCount: 88,
      imgColor: "#3F3F46",
      tag: "Essential",
      desc: "Sleek, small, and cord-free magnetic USB charging dock. Get a full charge in under an hour from any USB port.",
      image: "/juul1-charger.png"
    },
    {
      id: "juul-charging-cable",
      name: "Premium USB-C Charging Cable",
      category: "accessories",
      price: 39.00,
      originalPrice: 49.00,
      salePrice: 39.00,
      discount: 20,
      rating: 4.8,
      reviewsCount: 45,
      imgColor: "#111827",
      tag: "New Drop",
      desc: "High-durability braided USB-C fast charging cable featuring a magnetic dock interface designed for JUUL.",
      image: "/cat-accessories.png"
    },
    {
      id: "juul-silicone-sleeve",
      name: "Silicone Protective Sleeve & Lanyard",
      category: "accessories",
      price: 19.00,
      originalPrice: 29.00,
      salePrice: 19.00,
      discount: 34,
      rating: 4.5,
      reviewsCount: 56,
      imgColor: "#DC2626",
      tag: "Trending",
      desc: "Keep your JUUL safe and easily accessible with this anti-slip, shockproof silicone case sleeve and neck lanyard.",
      image: "/cat-accessories.png",
      inStock: false
    },
    {
      id: "juul-car-charger",
      name: "Smart Dual USB Car Charger Adapter",
      category: "accessories",
      price: 25.00,
      originalPrice: 35.00,
      salePrice: 25.00,
      discount: 28,
      rating: 4.6,
      reviewsCount: 37,
      imgColor: "#2563EB",
      tag: "Utility",
      desc: "High-speed dual port USB car charger. Charge your JUUL and smartphone simultaneously while driving.",
      image: "/cat-accessories.png"
    }
  ];

  const handleProductClick = (prod) => {
    if (setSelectedProduct) {
      setSelectedProduct(prod);
    }
    if (setCurrentPage) {
      setCurrentPage("product");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const repeatedProducts = [...accessoryProducts, ...accessoryProducts];

  return (
    <section className={`py-24 border-b transition-colors duration-500 ${
      isLight ? "bg-white" : "bg-[#09090A]"
    }`}>
      <div className="max-w-7xl mx-auto px-6 text-left">
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
              Genuine Gear
            </span>
            <h2 className={`text-3xl sm:text-5xl font-black tracking-tight ${
              isLight ? "text-zinc-950" : "text-white"
            }`}>
              JUUL Accessories
            </h2>
            <p className={`text-sm max-w-xl ${isLight ? "text-zinc-500" : "text-zinc-400"}`}>
              Power up and protect your device with authentic JUUL accessories. Engineered for seamless compatibility and peak performance.
            </p>
          </div>
        </motion.div>

        {/* Scrolling Product Slider */}
        <div 
          className="relative w-full overflow-hidden py-4 group/slider"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows */}
          <button 
            onClick={scrollLeftNav} 
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-xl border border-zinc-200 dark:border-white/10 opacity-0 group-hover/slider:opacity-100 transition-opacity cursor-pointer hidden sm:flex"
          >
            <ChevronLeft className="w-5 h-5 text-zinc-900 dark:text-white" />
          </button>
          <button 
            onClick={scrollRightNav} 
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-xl border border-zinc-200 dark:border-white/10 opacity-0 group-hover/slider:opacity-100 transition-opacity cursor-pointer hidden sm:flex"
          >
            <ChevronRight className="w-5 h-5 text-zinc-900 dark:text-white" />
          </button>

          <div 
            ref={scrollRef}
            className="flex gap-6 w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 px-2 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {repeatedProducts.map((prod, i) => {
              const savings = prod.originalPrice ? (prod.originalPrice - prod.salePrice).toFixed(2) : null;
              
              return (
                <motion.div
                  key={`${prod.id}-${i}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: (i % accessoryProducts.length) * 0.1, duration: 0.5, ease: "easeOut" }}
                  className={`group relative rounded-3xl border overflow-hidden flex flex-col transition-all duration-300 snap-center flex-shrink-0 w-[calc(100vw-48px)] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] ${
                    prod.inStock === false ? "opacity-65" : "hover:-translate-y-1.5"
                  } ${
                    isLight
                      ? "bg-white border-zinc-200/80 shadow-[0_2px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_36px_rgba(0,0,0,0.09)]"
                      : "bg-[#111112] border-white/[0.06] hover:border-white/10"
                  }`}
                >
                  {/* Stock/Discount badge */}
                  {prod.inStock === false ? (
                    <div
                      className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-rose-600 text-white text-[10px] font-black uppercase tracking-wider shadow-md"
                    >
                      STOCK OUT
                    </div>
                  ) : (
                    prod.discount && (
                      <div
                        className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full text-white text-[10px] font-black uppercase tracking-wider shadow-md"
                        style={{ backgroundColor: prod.imgColor }}
                      >
                        -{prod.discount}% OFF
                      </div>
                    )
                  )}

                  {/* Rating Badge */}
                  <div className={`absolute top-3 right-3 z-10 px-2 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-1 ${
                    isLight ? "bg-zinc-100 text-zinc-800" : "bg-zinc-800/80 text-zinc-200"
                  }`}>
                    <Star className="w-3 h-3 fill-amber-400 stroke-amber-400" />
                    {prod.rating}
                  </div>

                  {/* Product Image */}
                  <div 
                    onClick={() => handleProductClick(prod)}
                    className={`relative w-full h-48 overflow-hidden cursor-pointer ${
                      isLight ? "bg-zinc-50" : "bg-zinc-900/50"
                    }`}
                  >
                    <motion.div
                      whileHover={prod.inStock === false ? undefined : { scale: 1.05 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="relative w-full h-full flex items-center justify-center p-5"
                    >
                      {prod.image ? (
                        <Image
                          src={prod.image}
                          alt={prod.name}
                          fill
                          className={`object-contain p-5 drop-shadow-md ${prod.inStock === false ? "grayscale opacity-50" : ""}`}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                      ) : (
                        <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center">
                          <ShoppingBag className="text-white w-8 h-8" />
                        </div>
                      )}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-3 p-5 flex-1 justify-between">
                    <div className="space-y-1.5 text-left">
                      <span className="text-[9px] font-black uppercase tracking-widest animate-pulse" style={{ color: prod.inStock === false ? "#6B7280" : prod.imgColor }}>
                        {prod.inStock === false ? "⚠️ OUT OF STOCK" : `⚡ ${prod.tag}`}
                      </span>
                      <h3 
                        onClick={() => handleProductClick(prod)}
                        className={`text-sm sm:text-base font-black leading-snug cursor-pointer hover:underline min-h-[44px] line-clamp-2 ${isLight ? "text-zinc-950" : "text-white"}`}
                      >
                        {prod.name}
                      </h3>
                      <p className={`text-[11px] font-light leading-relaxed line-clamp-2 min-h-[32px] ${isLight ? "text-zinc-500" : "text-zinc-400"}`}>
                        {prod.desc}
                      </p>
                    </div>

                    {/* Pricing and Action row */}
                    <div className="space-y-3 text-left pt-2">
                      <div className="flex items-end flex-wrap gap-x-2 gap-y-1">
                        <span className="text-2xl font-black" style={{ color: prod.inStock === false ? "#6B7280" : prod.imgColor }}>
                          AED {prod.salePrice || prod.price}
                        </span>
                        {prod.originalPrice && (
                          <span className={`text-sm line-through mb-0.5 ${isLight ? "text-zinc-400" : "text-zinc-600"}`}>
                            AED {prod.originalPrice}
                          </span>
                        )}
                      </div>

                      {/* CTA Button */}
                      <motion.button
                        whileTap={prod.inStock === false ? undefined : { scale: 0.95 }}
                        onClick={() => prod.inStock !== false && onAddToCart && onAddToCart(prod)}
                        disabled={prod.inStock === false}
                        className={`w-full py-3 rounded-2xl flex items-center justify-center gap-2 text-[11px] font-black uppercase tracking-wider transition-all border ${
                          prod.inStock === false
                            ? "bg-zinc-100 border-zinc-200 text-zinc-400 dark:bg-zinc-900/50 dark:border-white/5 dark:text-zinc-600 cursor-not-allowed"
                            : isLight
                              ? "bg-zinc-950 border-zinc-950 text-white hover:bg-zinc-800 cursor-pointer"
                              : "bg-white border-white text-zinc-950 hover:bg-zinc-100 cursor-pointer"
                        }`}
                      >
                        <ShoppingBag className="w-3.5 h-3.5" /> {prod.inStock === false ? "OUT OF STOCK" : "ADD TO CART"}
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
