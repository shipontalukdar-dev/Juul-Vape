"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Star, Shield, ArrowLeft, Check } from "lucide-react";
import JuulDevice from "./JuulDevice";

export default function ProductDetail({ selectedProduct, onAddToCart, setCurrentPage, theme }) {
  const [activeTab, setActiveTab] = useState("specs");
  
  // Customizer State
  const [deviceColor, setDeviceColor] = useState({ id: "slate", label: "Slate Grey", color: "#4B5563" });
  const [selectedFlavor, setSelectedFlavor] = useState({ id: "mint", label: "Cool Mint", color: "#10B981", price: 15.99 });
  const [nicotineLevel, setNicotineLevel] = useState("5.0%");
  const [quantity, setQuantity] = useState(1);

  const deviceColors = [
    { id: "slate", label: "Slate Grey", color: "#4B5563" },
    { id: "carbon", label: "Midnight Carbon", color: "#1E1E20" },
    { id: "rose", label: "Sunset Rose", color: "#E11D48" },
    { id: "cobalt", label: "Cobalt Sea", color: "#2563EB" },
  ];

  const flavorPods = [
    { id: "mint", label: "Cool Mint", color: "#10B981", price: 15.99 },
    { id: "mango", label: "Royal Mango", color: "#F59E0B", price: 15.99 },
    { id: "berry", label: "Alpine Berry", color: "#EC4899", price: 16.99 },
    { id: "classic", label: "Classic Tobacco", color: "#EF4444", price: 15.99 }
  ];

  const isLight = theme === "light";

  const handleAddToCart = () => {
    // Construct a custom customized product
    const customProduct = {
      id: `custom-juul-${deviceColor.id}-${selectedFlavor.id}`,
      name: `JUUL custom - ${deviceColor.label} (${selectedFlavor.label} Pod)`,
      price: (29.99 + selectedFlavor.price).toFixed(2),
      flavor: selectedFlavor.id,
      imgColor: selectedFlavor.color,
      customDetails: {
        color: deviceColor.label,
        flavor: selectedFlavor.label,
        nicotine: nicotineLevel
      }
    };
    
    for (let i = 0; i < quantity; i++) {
      onAddToCart(customProduct);
    }
  };

  const specsContent = {
    specs: (
      <ul className={`space-y-2 text-xs font-light ${isLight ? "text-zinc-600" : "text-zinc-400"}`}>
        <li className={`flex justify-between border-b py-2 ${isLight ? "border-zinc-100" : "border-white/5"}`}><span className="text-zinc-500 font-medium">Dimensions</span><span>9.48 cm x 1.51 cm x 0.7 cm</span></li>
        <li className={`flex justify-between border-b py-2 ${isLight ? "border-zinc-100" : "border-white/5"}`}><span className="text-zinc-500 font-medium">Weight</span><span>14 grams</span></li>
        <li className={`flex justify-between border-b py-2 ${isLight ? "border-zinc-100" : "border-white/5"}`}><span className="text-zinc-500 font-medium">Battery Capacity</span><span>280 mAh</span></li>
        <li className={`flex justify-between border-b py-2 ${isLight ? "border-zinc-100" : "border-white/5"}`}><span className="text-zinc-500 font-medium">Heat Source</span><span>Nichrome coil heating</span></li>
      </ul>
    ),
    box: (
      <ul className={`space-y-2 text-xs font-light ${isLight ? "text-zinc-600" : "text-zinc-400"}`}>
        <li className={`flex items-center gap-2 border-b py-2 ${isLight ? "border-zinc-100" : "border-white/5"}`}><Check className="w-4 h-4 text-emerald-400" /> Rechargeable JUUL Device</li>
        <li className={`flex items-center gap-2 border-b py-2 ${isLight ? "border-zinc-100" : "border-white/5"}`}><Check className="w-4 h-4 text-emerald-400" /> Magnetic USB Charging Dock</li>
        <li className={`flex items-center gap-2 border-b py-2 ${isLight ? "border-zinc-100" : "border-white/5"}`}><Check className="w-4 h-4 text-emerald-400" /> Selected Flavor Pod (0.7 mL)</li>
        <li className={`flex items-center gap-2 border-b py-2 ${isLight ? "border-zinc-100" : "border-white/5"}`}><Check className="w-4 h-4 text-emerald-400" /> User Manual & Two-Year Warranty</li>
      </ul>
    )
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
        {/* Back navigation button */}
        <button 
          onClick={() => setCurrentPage("collection")}
          className={`flex items-center gap-2 transition-colors text-xs font-bold uppercase tracking-widest mb-8 cursor-pointer ${
            isLight ? "text-zinc-500 hover:text-zinc-950" : "text-zinc-400 hover:text-white"
          }`}
        >
          <ArrowLeft className="w-4 h-4" /> Back to Collection
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Device Custom Visualizer */}
          <div className={`lg:col-span-5 flex flex-col items-center justify-center border rounded-3xl p-8 relative overflow-hidden min-h-[500px] ${
            isLight ? "bg-white border-zinc-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.02)]" : "bg-zinc-950/40 border-white/5"
          }`}>
            {/* Visualizer Backdrop Glow */}
            <div 
              className="absolute w-48 h-48 rounded-full blur-3xl opacity-20 transition-all duration-700" 
              style={{ backgroundColor: selectedFlavor.color }}
            />

            {/* Simulated vaping visual device */}
            <JuulDevice 
              activeFlavor={selectedFlavor.id} 
              flavorColor={selectedFlavor.color} 
              theme={theme}
            />

            {/* Customizer Badge summary */}
            <div className={`mt-8 text-center px-6 py-3 rounded-full border ${
              isLight ? "bg-zinc-100 border-zinc-200 text-zinc-700" : "bg-white/5 border-white/10 text-zinc-300"
            }`}>
              <span className="text-[10px] uppercase font-black tracking-widest">
                Preview: {deviceColor.label} + {selectedFlavor.label} pod
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Customization Panel */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-emerald-400">
                <Shield className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-widest">Custom Lab Customizer</span>
              </div>
              <h1 className={`text-3xl sm:text-5xl font-black leading-none ${isLight ? "text-zinc-950" : "text-white"}`}>
                JUUL Custom Kit
              </h1>
              <div className={`flex items-center gap-4 text-xs font-semibold ${isLight ? "text-zinc-500" : "text-zinc-400"}`}>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className={`ml-1 font-bold ${isLight ? "text-zinc-800" : "text-white"}`}>5.0</span>
                </div>
                <span>|</span>
                <span>492 custom configurations ordered</span>
              </div>
            </div>

            {/* 1. Device Finish selector */}
            <div className="space-y-3 text-left">
              <h4 className={`text-xs uppercase font-bold tracking-widest ${isLight ? "text-zinc-500" : "text-zinc-400"}`}>1. Select Device Finish</h4>
              <div className="flex gap-3">
                {deviceColors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setDeviceColor(color)}
                    style={{ backgroundColor: color.color }}
                    className={`w-10 h-10 rounded-full border-2 transition-all flex items-center justify-center cursor-pointer ${
                      deviceColor.id === color.id 
                        ? isLight
                          ? "border-zinc-950 scale-110 shadow-lg"
                          : "border-white scale-110 shadow-lg shadow-white/15" 
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                    title={color.label}
                  >
                    {deviceColor.id === color.id && <Check className="w-4 h-4 text-white drop-shadow-md" />}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Pod Flavor selector */}
            <div className="space-y-3 text-left">
              <h4 className={`text-xs uppercase font-bold tracking-widest ${isLight ? "text-zinc-500" : "text-zinc-400"}`}>2. Select Premium Starter Pod</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {flavorPods.map((flavor) => (
                  <button
                    key={flavor.id}
                    onClick={() => setSelectedFlavor(flavor)}
                    className={`p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                      selectedFlavor.id === flavor.id 
                        ? isLight
                          ? "bg-white border-zinc-800 shadow-md"
                          : "bg-white/5 border-white/20 shadow-lg" 
                        : isLight
                        ? "bg-white border-zinc-200 hover:border-zinc-300 opacity-80"
                        : "bg-transparent border-white/5 hover:border-white/10 opacity-70"
                    }`}
                  >
                    <div className="w-3 h-3 rounded-full mb-3" style={{ backgroundColor: flavor.color }} />
                    <p className={`text-xs font-black ${isLight ? "text-zinc-900" : "text-white"}`}>{flavor.label}</p>
                    <p className={`text-[10px] font-bold mt-1 ${isLight ? "text-zinc-500" : "text-zinc-400"}`}>+${flavor.price}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Nicotine strength Selector */}
            <div className="space-y-3 text-left">
              <h4 className={`text-xs uppercase font-bold tracking-widest ${isLight ? "text-zinc-500" : "text-zinc-400"}`}>3. Nicotine Strength</h4>
              <div className="flex gap-3">
                {["3.0% (30mg/mL)", "5.0% (50mg/mL)"].map((str) => (
                  <button
                    key={str}
                    onClick={() => setNicotineLevel(str)}
                    className={`px-5 py-3 rounded-full border text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                      nicotineLevel.includes(str.substring(0,4))
                        ? isLight
                          ? "bg-zinc-950 text-white border-zinc-950"
                          : "bg-white text-black border-white"
                        : isLight
                        ? "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300"
                        : "bg-transparent text-zinc-400 border-white/5 hover:border-white/10"
                    }`}
                  >
                    {str}
                  </button>
                ))}
              </div>
            </div>

            {/* Purchase CTA block */}
            <div className={`pt-6 border-t flex flex-col sm:flex-row items-center gap-6 ${isLight ? "border-zinc-100" : "border-white/5"}`}>
              <div className="text-left w-full sm:w-auto">
                <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Total price</p>
                <p className={`text-3xl font-black ${isLight ? "text-zinc-950" : "text-white"}`}>${(29.99 + selectedFlavor.price).toFixed(2)}</p>
              </div>

              {/* Quantity Select */}
              <div className={`flex items-center border rounded-full px-2 py-1.5 w-full sm:w-auto justify-between gap-4 ${
                isLight ? "bg-white border-zinc-200 text-zinc-800" : "bg-zinc-950 border-white/10 text-white"
              }`}>
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className={`w-8 h-8 rounded-full transition-colors font-bold text-lg cursor-pointer ${isLight ? "hover:bg-zinc-100" : "hover:bg-white/5"}`}
                >
                  -
                </button>
                <span className="text-sm font-bold px-2">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className={`w-8 h-8 rounded-full transition-colors font-bold text-lg cursor-pointer ${isLight ? "hover:bg-zinc-100" : "hover:bg-white/5"}`}
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className={`w-full sm:flex-1 font-bold uppercase tracking-widest text-xs px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] cursor-pointer ${
                  isLight 
                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/10" 
                    : "bg-emerald-400 hover:bg-emerald-300 text-black shadow-emerald-400/20"
                }`}
              >
                <ShoppingCart className="w-4 h-4" /> Add Customized Kit
              </button>
            </div>

            {/* Tech tabs */}
            <div className={`pt-6 border-t ${isLight ? "border-zinc-100" : "border-white/5"}`}>
              <div className={`flex gap-4 border-b pb-2 mb-4 ${isLight ? "border-zinc-100" : "border-white/5"}`}>
                <button
                  onClick={() => setActiveTab("specs")}
                  className={`text-xs uppercase font-bold tracking-widest transition-colors cursor-pointer ${
                    activeTab === "specs" 
                      ? isLight ? "text-blue-600 border-b border-blue-600" : "text-emerald-400" 
                      : isLight ? "text-zinc-400 hover:text-zinc-900" : "text-zinc-500 hover:text-white"
                  }`}
                >
                  Specifications
                </button>
                <button
                  onClick={() => setActiveTab("box")}
                  className={`text-xs uppercase font-bold tracking-widest transition-colors cursor-pointer ${
                    activeTab === "box" 
                      ? isLight ? "text-blue-600 border-b border-blue-600" : "text-emerald-400" 
                      : isLight ? "text-zinc-400 hover:text-zinc-900" : "text-zinc-500 hover:text-white"
                  }`}
                >
                  What's In The Box
                </button>
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {specsContent[activeTab]}
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </motion.section>
  );
}
