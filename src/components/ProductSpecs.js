"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Truck, ShieldCheck, RotateCcw } from "lucide-react";

export default function ProductSpecs({ category, theme }) {
  const [activeTab, setActiveTab] = useState("specs");
  const isLight = theme === "light";

  const getSpecs = () => {
    switch (category) {
      case "pods":
        return [
          { key: "E-Liquid Capacity", value: "0.7 mL per pod" },
          { key: "Puff Count", value: "Approx. 200 puffs per pod" },
          { key: "Nicotine Strengths", value: "1.8%, 3.0% (30mg), 5.0% (50mg)" },
          { key: "Coil Resistance", value: "1.6 ohm Nichrome" },
          { key: "Ingredients", value: "Propylene glycol, Glycerin, Nicotine, Benzoic acid, Flavorings" },
        ];
      case "accessories":
        return [
          { key: "Compatibility", value: "JUUL 1 & JUUL 2 (Product dependent)" },
          { key: "Build Material", value: "High-grade silicone, aluminum or braided nylon" },
          { key: "Charging Speed", value: "Full charge in 45-60 mins (Charging accessories)" },
          { key: "Safety Certs", value: "CE, RoHS, FCC Certified" },
          { key: "Warranty", value: "1 Year Manufacturer Warranty" },
        ];
      default: // kits
        return [
          { key: "Dimensions", value: "9.48 cm x 1.51 cm x 0.7 cm" },
          { key: "Weight", value: "14 grams" },
          { key: "Battery Capacity", value: "280 mAh (Rechargeable)" },
          { key: "Heat Source", value: "Nichrome coil temperature control heating" },
          { key: "Charge Interface", value: "Magnetic USB Dock connection" },
        ];
    }
  };

  const getBoxContents = () => {
    switch (category) {
      case "pods":
        return [
          "Genuine pre-filled JUUL Pods (Select pack size)",
          "Freshness-sealed blister packaging",
          "Flavor profile user guide",
          "Authenticity sticker with security QR code",
        ];
      case "accessories":
        return [
          "Authentic JUUL accessory item",
          "User guide & setup instructions",
          "Warranty information leaflet",
          "Premium retail packaging",
        ];
      default: // kits
        return [
          "Rechargeable JUUL Smart Device",
          "Magnetic wireless USB Charging Dock",
          "Starter Pod pack (Included in custom bundles)",
          "Full Instruction guide & 2-year warranty card",
        ];
    }
  };

  const specsList = getSpecs();
  const boxContents = getBoxContents();

  const renderContent = () => {
    switch (activeTab) {
      case "box":
        return (
          <ul className={`space-y-3 text-xs font-light ${isLight ? "text-zinc-650" : "text-zinc-400"}`}>
            {boxContents.map((item, idx) => (
              <motion.li 
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                key={idx} 
                className="flex items-center gap-2.5 py-1.5 border-b border-zinc-100 dark:border-white/5 last:border-none"
              >
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        );
      case "shipping":
        return (
          <div className={`space-y-4 text-xs font-light ${isLight ? "text-zinc-650" : "text-zinc-400"}`}>
            <div className="flex gap-3 items-start border-b border-zinc-100 dark:border-white/5 pb-3">
              <Truck className="w-5 h-5 text-blue-500 dark:text-emerald-400 flex-shrink-0" />
              <div>
                <h5 className={`font-bold mb-0.5 ${isLight ? "text-zinc-800" : "text-white"}`}>Same Day Delivery</h5>
                <p>Order within Dubai, Sharjah, & Ajman before 2:00 PM for same-day delivery. Abu Dhabi & others delivered in 24-48 hrs.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start border-b border-zinc-100 dark:border-white/5 pb-3">
              <ShieldCheck className="w-5 h-5 text-blue-500 dark:text-emerald-400 flex-shrink-0" />
              <div>
                <h5 className={`font-bold mb-0.5 ${isLight ? "text-zinc-800" : "text-white"}`}>Age Verification</h5>
                <p>Strictly for adults 18+ (21+ depending on region). Valid ID check is mandatory at the time of delivery.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <RotateCcw className="w-5 h-5 text-blue-500 dark:text-emerald-400 flex-shrink-0" />
              <div>
                <h5 className={`font-bold mb-0.5 ${isLight ? "text-zinc-800" : "text-white"}`}>Return Policy</h5>
                <p>Hassle-free 7-day returns on unopened, sealed products. Defective devices covered under standard manufacturer warranty.</p>
              </div>
            </div>
          </div>
        );
      default: // specs
        return (
          <div className={`space-y-1 text-xs font-light ${isLight ? "text-zinc-650" : "text-zinc-400"}`}>
            {specsList.map((item, idx) => (
              <div 
                key={idx}
                className="flex justify-between border-b border-zinc-100 dark:border-white/5 py-2.5 last:border-none"
              >
                <span className="text-zinc-550 font-bold">{item.key}</span>
                <span className={`text-right font-medium ${isLight ? "text-zinc-800" : "text-zinc-200"}`}>{item.value}</span>
              </div>
            ))}
          </div>
        );
    }
  };

  return (
    <div className={`pt-6 border-t ${isLight ? "border-zinc-100" : "border-white/5"}`}>
      {/* Tabs list */}
      <div className={`flex gap-6 border-b pb-2 mb-5 ${isLight ? "border-zinc-100" : "border-white/5"}`}>
        {[
          { id: "specs", label: "Specifications" },
          { id: "box", label: "What's In The Box" },
          { id: "shipping", label: "Delivery & Returns" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`text-xs uppercase font-bold tracking-widest pb-1 transition-all cursor-pointer relative ${
              activeTab === tab.id
                ? isLight 
                  ? "text-blue-600 border-b-2 border-blue-600" 
                  : "text-emerald-400 border-b-2 border-emerald-400"
                : isLight
                ? "text-zinc-400 hover:text-zinc-900"
                : "text-zinc-500 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tabs Content */}
      <div className="min-h-[140px] pr-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
