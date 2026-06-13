"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Star, Shield, ArrowLeft, Check, CheckCircle2, Truck, Award, ChevronDown, ChevronRight, Clock } from "lucide-react";
import ProductGallery from "./ProductGallery";
import ProductSpecs from "./ProductSpecs";
import ProductReviews from "./ProductReviews";
import ProductRecommendations from "./ProductRecommendations";
import ProductSEO from "./ProductSEO";
import ProductRichDescription from "./ProductRichDescription";

export default function ProductDetail({ selectedProduct, onAddToCart, setCurrentPage, theme }) {
  const isLight = theme === "light";

  const defaultProduct = {
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
  };

  const product = selectedProduct || defaultProduct;

  // Customizer States
  const [deviceColor, setDeviceColor] = useState({ id: "slate", label: "Slate Grey", color: "#4B5563" });
  const [selectedFlavor, setSelectedFlavor] = useState({ id: "mint", label: "Cool Mint", color: "#10B981", price: 15.99 });
  const [activeFlavor, setActiveFlavor] = useState({ id: "mint", label: "Cool Mint", color: "#10B981" });
  const [packSize, setPackSize] = useState("2-Pack");
  const [nicotineLevel, setNicotineLevel] = useState("5.0%");
  const [quantity, setQuantity] = useState(1);

  // Dropdown States
  const [isFlavorDropdownOpen, setIsFlavorDropdownOpen] = useState(false);
  const [isNicotineDropdownOpen, setIsNicotineDropdownOpen] = useState(false);
  
  // Sticky Bottom CTA Drawer state
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Flash Deal Countdown Timer State
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 44, seconds: 59 });

  useEffect(() => {
    let totalSeconds = 2 * 3600 + 44 * 60 + 59;
    const interval = setInterval(() => {
      if (totalSeconds > 0) {
        totalSeconds--;
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        setTimeLeft({ hours, minutes, seconds });
      } else {
        totalSeconds = 3 * 3600; // auto-refresh timer to keep urgency high
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Reset states when product changes
  useEffect(() => {
    setQuantity(1);
    setIsFlavorDropdownOpen(false);
    setIsNicotineDropdownOpen(false);
    if (product.category === "pods") {
      setNicotineLevel("3.0%");
      setPackSize("2-Pack");
    } else {
      setNicotineLevel("5.0%");
    }
  }, [product]);

  // Handle scroll trigger for Mobile Sticky Bottom Bar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 680) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Static options
  const deviceColors = [
    { id: "slate", label: "Slate Grey", color: "#4B5563" },
    { id: "carbon", label: "Midnight Carbon", color: "#1E1E20" },
    { id: "rose", label: "Sunset Rose", color: "#E11D48" },
    { id: "cobalt", label: "Cobalt Sea", color: "#2563EB" },
    { id: "ruby", label: "Ruby Edition", color: "#DC2626" },
  ];

  const flavorPods = [
    { id: "mint", label: "Cool Mint", color: "#10B981", price: 15.99 },
    { id: "mango", label: "Royal Mango", color: "#F59E0B", price: 15.99 },
    { id: "berry", label: "Alpine Berry", color: "#EC4899", price: 16.99 },
    { id: "classic", label: "Classic Tobacco", color: "#EF4444", price: 15.99 }
  ];

  const podFlavors = [
    { id: "mint", label: "Cool Mint", color: "#10B981" },
    { id: "mango", label: "Royal Mango", color: "#F59E0B" },
    { id: "berry", label: "Ruby Sunset (Apple)", color: "#EF4444" },
    { id: "classic", label: "Virginia Tobacco", color: "#78716C" },
    { id: "menthol", label: "Classic Menthol", color: "#06B6D4" },
  ];

  const getCalculatedPrice = () => {
    let base = product.price;
    if (product.category === "kits") {
      base = product.price + selectedFlavor.price;
    } else if (product.category === "pods") {
      if (packSize === "4-Pack") {
        base = product.price + 12.00;
      }
    }
    return base.toFixed(2);
  };

  const getProductSummary = () => {
    if (product.category === "kits") {
      return [
        { label: "Battery Capacity", value: product.version === "juul2" ? "350 mAh (Extended Life)" : "200 mAh (Classic)" },
        { label: "Charging Method", value: "Magnetic USB Quick Charge" },
        { label: "Smart Connectivity", value: product.version === "juul2" ? "Bluetooth App Linked" : "Classic (No Bluetooth)" },
        { label: "Display Lights", value: product.version === "juul2" ? "4-LED Battery Indicator" : "Single Dot Status LED" },
      ];
    } else if (product.category === "pods") {
      return [
        { label: "Liquid capacity", value: product.version === "juul2" ? "1.2 mL per Pod" : "0.7 mL per Pod" },
        { label: "Nicotine level", value: nicotineLevel },
        { label: "Cartridge count", value: packSize },
        { label: "Estimated puffs", value: product.version === "juul2" ? "Approx. 350 puffs per Pod" : "Approx. 200 puffs per Pod" },
      ];
    } else {
      return [
        { label: "Device compatibility", value: product.version === "juul2" ? "JUUL 2 Devices Only" : "JUUL 1 Devices Only" },
        { label: "Premium Materials", value: product.id === "carry-case" ? "Genuine Premium Leather" : "Anodized Alloys & Silicone" },
        { label: "Fitting interface", value: product.id === "usb-dock" ? "Magnetic Snap Charging Dock" : "Physical Secure Sleeve Fit" },
        { label: "Box Contents", value: "1x Official Accessory Module" },
      ];
    }
  };

  const totalPrice = (parseFloat(getCalculatedPrice()) * quantity).toFixed(2);
  const originalPrice = (parseFloat(totalPrice) * 1.25).toFixed(2);

  const handleAddToCart = () => {
    let cartItem = {
      id: product.id,
      name: product.name,
      price: parseFloat(getCalculatedPrice()),
      image: product.image || "/deal-bundle.png",
      imgColor: product.imgColor || "#10B981",
      customDetails: {}
    };

    if (product.category === "kits") {
      cartItem.name = `${product.name} (+ ${selectedFlavor.label})`;
      cartItem.customDetails = {
        flavor: selectedFlavor.label,
        nicotine: nicotineLevel
      };
      cartItem.imgColor = selectedFlavor.color;
    } else if (product.category === "pods") {
      cartItem.name = `${product.name} (${activeFlavor.label} - ${packSize})`;
      cartItem.customDetails = {
        flavor: activeFlavor.label,
        packSize: packSize,
        nicotine: nicotineLevel
      };
      cartItem.imgColor = activeFlavor.color;
    } else if (product.category === "accessories") {
      cartItem.customDetails = {
        compatibility: product.version === "juul2" ? "JUUL 2 Compatible" : "JUUL 1 Compatible"
      };
    }

    for (let i = 0; i < quantity; i++) {
      onAddToCart(cartItem);
    }
  };

  const handleBuyNow = () => {
    handleAddToCart();
    if (setCurrentPage) {
      setCurrentPage("checkout");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleProductRecommendationClick = (newProduct) => {
    if (newProduct) {
      setCurrentPage("product");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
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
        {/* Breadcrumb Navigation Trail */}
        <nav className="flex flex-wrap items-center gap-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-8 select-none">
          <button 
            onClick={() => {
              setCurrentPage("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`transition-colors cursor-pointer ${
              isLight ? "text-zinc-400 hover:text-zinc-950" : "text-zinc-500 hover:text-white"
            }`}
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />
          <button 
            onClick={() => {
              setCurrentPage("collection");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`transition-colors cursor-pointer ${
              isLight ? "text-zinc-400 hover:text-zinc-950" : "text-zinc-500 hover:text-white"
            }`}
          >
            Collection
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />
          <span className={`capitalize ${isLight ? "text-zinc-450" : "text-zinc-450"}`}>
            {product.category}
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />
          <span className={`truncate max-w-[150px] sm:max-w-xs ${isLight ? "text-zinc-800" : "text-zinc-300"}`}>
            {product.name}
          </span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left Column: Media Showcase */}
          <div className="lg:col-span-5 w-full">
            <ProductGallery
              selectedProduct={product}
              deviceColor={deviceColor}
              selectedFlavor={selectedFlavor}
              theme={theme}
            />
          </div>

          {/* Right Column: Customizer & Details */}
          <div className="lg:col-span-7 space-y-8">
            {/* Header info */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-emerald-400">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span className="text-[10px] font-black uppercase tracking-widest">
                  {product.tag || "Verified Original Product"}
                </span>
              </div>
              <h1 className={`text-2xl sm:text-4xl font-black leading-tight tracking-tight ${isLight ? "text-zinc-950" : "text-white"}`}>
                {product.name}
              </h1>
              <div className={`flex items-center gap-4 text-xs font-semibold ${isLight ? "text-zinc-550" : "text-zinc-450"}`}>
                <div className="flex items-center gap-1 text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className={`font-black ${isLight ? "text-zinc-800" : "text-white"}`}>
                    {product.rating || "4.9"}
                  </span>
                  <span className="text-zinc-500 font-normal">({product.reviewsCount || 124} reviews)</span>
                </div>
                <span>|</span>
                <span className="text-emerald-400">In Stock</span>
              </div>
              {/* Glassmorphic Beautiful Description Card */}
              <div className={`p-5 rounded-3xl border transition-all duration-300 ${
                isLight 
                  ? "bg-white/60 border-zinc-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)]" 
                  : "bg-white/[0.01] border-white/5 shadow-inner"
              }`}>
                {/* Hidden Featured Image & Microdata for Google SEO Crawlers Only */}
                <div className="hidden" aria-hidden="true" style={{ display: "none" }}>
                  <img src={product.image || "/deal-bundle.png"} alt={product.name} />
                  <link itemprop="image" href={product.image || "/deal-bundle.png"} />
                  <meta property="og:image" content={product.image || "/deal-bundle.png"} />
                  <meta name="twitter:image" content={product.image || "/deal-bundle.png"} />
                </div>

                <p className={`text-sm font-light leading-relaxed max-w-2xl ${isLight ? "text-zinc-700" : "text-zinc-350"}`}>
                  {product.desc}
                </p>

                {/* Technical Specifications Summary List */}
                <div className={`mt-5 pt-5 border-t border-dashed ${isLight ? "border-zinc-200" : "border-white/5"} space-y-2.5`}>
                  <p className={`text-[10px] uppercase font-black tracking-widest ${isLight ? "text-zinc-400" : "text-zinc-500"}`}>
                    Quick Specifications
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
                    {getProductSummary().map((spec, index) => (
                      <div 
                        key={index}
                        className={`flex items-center justify-between py-1.5 border-b text-[11px] ${
                          isLight ? "border-zinc-100/60" : "border-white/[0.02]"
                        }`}
                      >
                        <span className={isLight ? "text-zinc-500 font-medium" : "text-zinc-400 font-normal"}>
                          {spec.label}
                        </span>
                        <span className={`font-bold ${isLight ? "text-zinc-800" : "text-white"}`}>
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Options Panel */}
            <div className="space-y-6">
              {/* Option A: Kits Customization */}
              {product.category === "kits" && (
                <>

                  {/* Starter Pod - Dropdown box */}
                  <div className="space-y-3 relative">
                    <h4 className={`text-xs uppercase font-bold tracking-widest ${isLight ? "text-zinc-500" : "text-zinc-400"}`}>
                      2. Bundle Premium Starter Pod
                    </h4>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setIsFlavorDropdownOpen(!isFlavorDropdownOpen)}
                        className={`w-full px-5 py-3.5 rounded-2xl border text-left flex items-center justify-between transition-all duration-300 cursor-pointer ${
                          isLight ? "bg-white border-zinc-200 text-zinc-900 shadow-sm" : "bg-zinc-950 border-white/5 text-white"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: selectedFlavor.color }} />
                          <span className="text-xs font-black">{selectedFlavor.label}</span>
                          <span className="text-[10px] text-zinc-500 font-semibold">(+AED {selectedFlavor.price})</span>
                        </div>
                        <ChevronDown className="w-4 h-4 text-zinc-500" />
                      </button>

                      <AnimatePresence>
                        {isFlavorDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className={`absolute z-30 w-full mt-2 rounded-2xl border shadow-2xl overflow-hidden ${
                              isLight ? "bg-white border-zinc-200" : "bg-[#111112] border-white/10"
                            }`}
                          >
                            <div className="p-1 divide-y divide-zinc-100 dark:divide-white/5">
                              {flavorPods.map((flavor) => (
                                <button
                                  key={flavor.id}
                                  type="button"
                                  onClick={() => {
                                    setSelectedFlavor(flavor);
                                    setIsFlavorDropdownOpen(false);
                                  }}
                                  className={`w-full px-4 py-3 text-left flex items-center justify-between hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors cursor-pointer ${
                                    selectedFlavor.id === flavor.id ? "bg-zinc-50 dark:bg-white/5" : ""
                                  }`}
                                >
                                  <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: flavor.color }} />
                                    <span className={`text-xs ${selectedFlavor.id === flavor.id ? "font-black" : "font-medium"}`}>{flavor.label}</span>
                                  </div>
                                  <span className="text-[10px] font-bold text-zinc-500">+AED {flavor.price}</span>
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </>
              )}

              {/* Option B: Pod Packs Customization */}
              {product.category === "pods" && (
                <>
                  {/* Pod Flavors - Dropdown box */}
                  <div className="space-y-3 relative">
                    <h4 className={`text-xs uppercase font-bold tracking-widest ${isLight ? "text-zinc-500" : "text-zinc-400"}`}>
                      1. Select Flavor Profile
                    </h4>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setIsFlavorDropdownOpen(!isFlavorDropdownOpen)}
                        className={`w-full px-5 py-3.5 rounded-2xl border text-left flex items-center justify-between transition-all duration-300 cursor-pointer ${
                          isLight ? "bg-white border-zinc-200 text-zinc-900 shadow-sm" : "bg-zinc-950 border-white/5 text-white"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: activeFlavor.color }} />
                          <span className="text-xs font-black">{activeFlavor.label}</span>
                        </div>
                        <ChevronDown className="w-4 h-4 text-zinc-500" />
                      </button>

                      <AnimatePresence>
                        {isFlavorDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className={`absolute z-30 w-full mt-2 rounded-2xl border shadow-2xl overflow-hidden ${
                              isLight ? "bg-white border-zinc-200" : "bg-[#111112] border-white/10"
                            }`}
                          >
                            <div className="p-1 divide-y divide-zinc-100 dark:divide-white/5">
                              {podFlavors.map((flavor) => (
                                <button
                                  key={flavor.id}
                                  type="button"
                                  onClick={() => {
                                    setActiveFlavor(flavor);
                                    setIsFlavorDropdownOpen(false);
                                  }}
                                  className={`w-full px-4 py-3 text-left flex items-center hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors cursor-pointer ${
                                    activeFlavor.id === flavor.id ? "bg-zinc-50 dark:bg-white/5" : ""
                                  }`}
                                >
                                  <div className="w-3.5 h-3.5 rounded-full mr-3" style={{ backgroundColor: flavor.color }} />
                                  <span className={`text-xs ${activeFlavor.id === flavor.id ? "font-black" : "font-medium"}`}>{flavor.label}</span>
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Pack size */}
                  <div className="space-y-3">
                    <h4 className={`text-xs uppercase font-bold tracking-widest ${isLight ? "text-zinc-500" : "text-zinc-400"}`}>
                      2. Pack Size
                    </h4>
                    <div className="flex gap-3">
                      {["2-Pack", "4-Pack"].map((size) => (
                        <button
                          key={size}
                          onClick={() => setPackSize(size)}
                          className={`px-5 py-3 rounded-full border text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                            packSize === size
                              ? isLight
                                ? "bg-zinc-950 text-white border-zinc-950 shadow-md"
                                : "bg-white text-black border-white"
                              : isLight
                              ? "bg-white text-zinc-650 border-zinc-200 hover:border-zinc-350"
                              : "bg-transparent text-zinc-400 border-white/5 hover:border-white/15"
                          }`}
                        >
                          {size} {size === "4-Pack" && "(+AED 12.00)"}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* Nicotine Strength Dropdown (Common for pods/kits) */}
              {product.category !== "accessories" && (
                <div className="space-y-3 relative">
                  <h4 className={`text-xs uppercase font-bold tracking-widest ${isLight ? "text-zinc-500" : "text-zinc-400"}`}>
                    Nicotine Strength
                  </h4>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsNicotineDropdownOpen(!isNicotineDropdownOpen)}
                      className={`w-full px-5 py-3.5 rounded-2xl border text-left flex items-center justify-between transition-all duration-300 cursor-pointer ${
                        isLight ? "bg-white border-zinc-200 text-zinc-900 shadow-sm" : "bg-zinc-950 border-white/5 text-white"
                      }`}
                    >
                      <span className="text-xs font-black">{nicotineLevel}</span>
                      <ChevronDown className="w-4 h-4 text-zinc-500" />
                    </button>

                    <AnimatePresence>
                      {isNicotineDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className={`absolute z-30 w-full mt-2 rounded-2xl border shadow-2xl overflow-hidden ${
                            isLight ? "bg-white border-zinc-200" : "bg-[#111112] border-white/10"
                          }`}
                        >
                          <div className="p-1">
                            {["1.8% (18mg/mL)", "3.0% (30mg/mL)", "5.0% (50mg/mL)"].map((str) => (
                              <button
                                key={str}
                                type="button"
                                onClick={() => {
                                  setNicotineLevel(str.split(" ")[0]);
                                  setIsNicotineDropdownOpen(false);
                                }}
                                className={`w-full px-4 py-3 text-xs text-left hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors cursor-pointer ${
                                  nicotineLevel === str.split(" ")[0] ? "font-black bg-zinc-50 dark:bg-white/5" : "font-medium"
                                }`}
                              >
                                {str}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              )}
            </div>

            {/* Limited Time Discount Countdown */}
            <div className={`p-4 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
              isLight ? "bg-amber-500/5 border-amber-500/15" : "bg-amber-500/[0.02] border-amber-500/10"
            }`}>
              <div className="flex items-center gap-2 text-amber-500">
                <Clock className="w-4 h-4 animate-pulse flex-shrink-0" />
                <span className="text-[10px] font-black uppercase tracking-wider">
                  Limited Time Flash Offer
                </span>
              </div>
              
              <div className="flex items-center gap-1.5 text-[10px] font-bold">
                <span className={isLight ? "text-zinc-500" : "text-zinc-400"}>Offer expires in:</span>
                <div className="flex items-center gap-1 font-mono text-[11px]">
                  <span className="bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 px-1.5 py-0.5 rounded font-black">
                    {timeLeft.hours.toString().padStart(2, '0')}
                  </span>
                  <span>:</span>
                  <span className="bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 px-1.5 py-0.5 rounded font-black">
                    {timeLeft.minutes.toString().padStart(2, '0')}
                  </span>
                  <span>:</span>
                  <span className="bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 px-1.5 py-0.5 rounded font-black text-rose-500">
                    {timeLeft.seconds.toString().padStart(2, '0')}
                  </span>
                </div>
              </div>
            </div>

            {/* Price & Cart addition block */}
            <div className={`pt-6 border-t flex flex-col lg:flex-row items-center gap-6 ${isLight ? "border-zinc-200" : "border-white/5"}`}>
              <div className="flex items-center justify-between w-full lg:w-auto gap-6">
                <div className="text-left">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Total price</span>
                    <span className="bg-red-500/10 dark:bg-red-500/20 text-red-500 dark:text-red-400 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md">
                      Save 20%
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <p className={`text-2xl font-black whitespace-nowrap ${isLight ? "text-zinc-950" : "text-white"}`}>
                      AED {totalPrice}
                    </p>
                    <p className="text-sm text-zinc-400 dark:text-zinc-500 line-through font-medium">
                      AED {originalPrice}
                    </p>
                  </div>
                </div>

                {/* Quantity Selector */}
                <div className={`flex items-center border rounded-full px-2 py-1 ${
                  isLight ? "bg-white border-zinc-200 text-zinc-800" : "bg-zinc-950 border-white/10 text-white"
                }`}>
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className={`w-7 h-7 rounded-full transition-colors font-bold text-base cursor-pointer ${isLight ? "hover:bg-zinc-150" : "hover:bg-white/5"}`}
                  >
                    -
                  </button>
                  <span className="text-xs font-bold px-2.5">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className={`w-7 h-7 rounded-full transition-colors font-bold text-base cursor-pointer ${isLight ? "hover:bg-zinc-150" : "hover:bg-white/5"}`}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:flex-1">
                {/* Add to Cart */}
                <button
                  onClick={handleAddToCart}
                  className={`w-full sm:flex-1 font-bold uppercase tracking-widest text-[10px] px-6 py-3.5 rounded-full flex items-center justify-center gap-2 transition-all transform hover:scale-[1.01] cursor-pointer ${
                    isLight 
                      ? "bg-zinc-100 hover:bg-zinc-200 text-zinc-900 border border-zinc-200 shadow-sm" 
                      : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                  }`}
                >
                  <ShoppingCart className="w-3.5 h-3.5" /> Add to Cart
                </button>

                {/* Buy Now */}
                <button
                  onClick={handleBuyNow}
                  className={`w-full sm:flex-1 font-bold uppercase tracking-widest text-[10px] px-6 py-3.5 rounded-full flex items-center justify-center gap-2 transition-all transform hover:scale-[1.01] cursor-pointer ${
                    isLight 
                      ? "bg-zinc-950 hover:bg-zinc-900 text-white shadow-lg shadow-zinc-950/20" 
                      : "bg-emerald-400 hover:bg-emerald-350 text-black shadow-lg shadow-emerald-400/20"
                  }`}
                >
                  ⚡ Buy Now
                </button>
              </div>
            </div>

            {/* Shipping badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-zinc-150 dark:border-white/5 text-xs text-zinc-500 font-medium">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-emerald-400" />
                <span>Free UAE Delivery &gt; 150 AED</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-400" />
                <span>100% Genuine Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>2-Year Official Warranty</span>
              </div>
            </div>

            {/* Product Specifications & Shipping tabs */}
            <ProductSpecs
              category={product.category}
              theme={theme}
            />

          </div>
        </div>

        {/* Dynamic SEO detailed Rich Description Showcase with Images */}
        <ProductRichDescription
          product={product}
          theme={theme}
        />

        {/* You May Also Like Suggestions */}
        <ProductRecommendations
          category={product.category}
          currentProductId={product.id}
          onProductClick={(p) => handleProductRecommendationClick(p)}
          onAddToCart={onAddToCart}
          theme={theme}
        />

        {/* Dynamic SEO Rich Snippets, FAQs, Guides & Warnings */}
        <ProductSEO
          product={product}
          theme={theme}
        />

        {/* Verified Reviews Section (Moved to the bottom) */}
        <ProductReviews
          productName={product.name}
          theme={theme}
        />

      </div>

      {/* Mobile Sticky Bottom CTA Drawer */}
      <AnimatePresence>
        {showStickyBar && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={`fixed bottom-0 left-0 right-0 z-40 lg:hidden border-t px-4 py-3 flex items-center justify-between gap-4 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] ${
              isLight ? "bg-white/95 border-zinc-200/80 backdrop-blur-md text-zinc-900" : "bg-[#09090A]/95 border-white/5 backdrop-blur-md text-white"
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="relative w-10 h-10 flex-shrink-0 bg-zinc-100 dark:bg-zinc-900 rounded-xl overflow-hidden p-1 border border-zinc-200 dark:border-white/5">
                <img
                  src={product.image || "/deal-bundle.png"}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-black truncate max-w-[120px] sm:max-w-[200px]">
                  {product.name}
                </h4>
                <div className="flex items-center gap-1.5">
                  <span className={`text-xs font-black ${isLight ? "text-zinc-900" : "text-emerald-450"}`}>
                    AED {totalPrice}
                  </span>
                  <span className="text-[10px] text-zinc-500 line-through">
                    AED {originalPrice}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              {/* Quick Add to Cart */}
              <button
                onClick={handleAddToCart}
                className={`p-3 rounded-full border flex items-center justify-center transition-colors cursor-pointer ${
                  isLight 
                    ? "bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-900" 
                    : "bg-white/5 hover:bg-white/10 border-white/5 text-white"
                }`}
                title="Add to Cart"
              >
                <ShoppingCart className="w-4 h-4" />
              </button>

              {/* Quick Buy Now */}
              <button
                onClick={handleBuyNow}
                className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap shadow-md ${
                  isLight 
                    ? "bg-zinc-950 hover:bg-zinc-900 text-white shadow-zinc-950/20" 
                    : "bg-emerald-400 hover:bg-emerald-350 text-black shadow-emerald-400/20"
                }`}
              >
                ⚡ Buy Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
