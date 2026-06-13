"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldAlert, Sparkles, CheckSquare, Zap, Leaf } from "lucide-react";

export default function ProductRichDescription({ product, theme }) {
  const isLight = theme === "light";
  if (!product) return null;

  const isPods = product.category === "pods";
  const isKits = product.category === "kits";
  const isAcc = product.category === "accessories";

  return (
    <div className={`mt-16 pt-16 border-t ${isLight ? "border-zinc-200" : "border-white/5"} space-y-16`}>
      {/* ═══ SECTION 1: DYNAMIC HERO SPECS & DETAIL IMAGE ═══ */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center gap-1.5 text-blue-500 dark:text-emerald-400">
            <Sparkles className="w-4 h-4" />
            <span className="text-[10px] font-black uppercase tracking-widest">Advanced Technology</span>
          </div>
          <h3 className={`text-2xl sm:text-3xl font-black tracking-tight ${isLight ? "text-zinc-950" : "text-white"}`}>
            {isKits && "Smart Vaping Reimagined: The Ultimate UAE Gen 2 Nicotine Delivery"}
            {isPods && "Pure Nicotine Salt Blends: Rich Throat Hits & Clean Vaporization"}
            {isAcc && "Premium Build Materials: Ergonomic Fit & Rapid Charging Speed"}
          </h3>
          <p className={`text-sm font-light leading-relaxed ${isLight ? "text-zinc-650" : "text-zinc-350"}`}>
            {isKits && `Our authentic JUUL 2 Starter Kits deliver the peak of e-cigarette engineering in Dubai, Abu Dhabi, and Sharjah. Equipped with a smart 280mAh or 350mAh lithium battery core, this device utilizes smart temperature regulation to prevent burnt draws. The companion app connects via Bluetooth to monitor puff metrics and prevent underage usage, guaranteeing a highly secure experience.`}
            {isPods && `Formulated with natural nicotine salts extracted from real tobacco leaves, these pods offer precise strength levels (1.8%, 3.0%, 5.0%) with zero leakage. Designed for adult smokers looking to transition, these pods provide a smooth throat hit, satisfying flavor profiles, and consistent vapor volume from the first puff to the last.`}
            {isAcc && `Enhance your vaping routine with handcrafted leather carry sleeves and rapid magnetic USB docks. These accessories utilize high-grade silicone and anodized alloy shells to shield your kit against shocks and supply full power in under 45 minutes.`}
          </p>
          <div className="space-y-2.5 pt-2">
            <div className="flex items-center gap-2 text-xs font-semibold">
              <CheckSquare className="w-4 h-4 text-emerald-400" />
              <span className={isLight ? "text-zinc-800" : "text-zinc-200"}>100% Genuine Sealed Packaging with Authenticity Seal</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold">
              <CheckSquare className="w-4 h-4 text-emerald-400" />
              <span className={isLight ? "text-zinc-800" : "text-zinc-200"}>Compliant with Emirates Authority for Standardization & Metrology (ESMA)</span>
            </div>
          </div>
        </div>

        {/* Feature Image Block */}
        <div className="lg:col-span-5 relative h-[280px] sm:h-[340px] rounded-3xl overflow-hidden border border-zinc-200 dark:border-white/5 bg-zinc-100/30 dark:bg-zinc-950/20 p-6 flex items-center justify-center">
          <Image
            src={isPods ? "/cat-pods.png" : (isAcc ? "/deal-case.png" : "/cat-devices.png")}
            alt={`${product.name} detail view`}
            fill
            className="object-contain p-8 drop-shadow-2xl"
            sizes="(max-width: 1024px) 100vw, 30vw"
          />
        </div>
      </div>

      {/* ═══ SECTION 2: FLIPPED RICH TEXT & SECOND DETAIL IMAGE ═══ */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center lg:flex-row-reverse">
        {/* Detail Image Block */}
        <div className="lg:col-span-5 lg:order-last relative h-[280px] sm:h-[340px] rounded-3xl overflow-hidden border border-zinc-200 dark:border-white/5 bg-zinc-100/30 dark:bg-zinc-950/20 p-6 flex items-center justify-center">
          <Image
            src={isPods ? "/deal-bundle.png" : (isAcc ? "/cat-accessories.png" : "/deal-bundle.png")}
            alt={`${product.name} components diagram`}
            fill
            className="object-contain p-8 drop-shadow-2xl"
            sizes="(max-width: 1024px) 100vw, 30vw"
          />
        </div>

        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center gap-1.5 text-blue-500 dark:text-emerald-400">
            <Zap className="w-4 h-4" />
            <span className="text-[10px] font-black uppercase tracking-widest">Designed for UAE Climates</span>
          </div>
          <h3 className={`text-2xl sm:text-3xl font-black tracking-tight ${isLight ? "text-zinc-950" : "text-white"}`}>
            {isKits && "Advanced Safety Features & Anti-Leak Chamber Engineering"}
            {isPods && "High Compatibility & Temperature Control flavor release"}
            {isAcc && "Sturdy Magnetics & High Temperature Safety Shielding"}
          </h3>
          <p className={`text-sm font-light leading-relaxed ${isLight ? "text-zinc-650" : "text-zinc-350"}`}>
            {isKits && `Engineered specifically to resist high ambient temperatures in the Middle East, the JUUL2's internal circuit board is protected by high-temperature sealant. The magnetic interface locks pods tightly in place, ensuring no juice leakage even inside warm cars or pockets.`}
            {isPods && `Each pod utilizes a custom-wicking cotton coil optimized for rich nicotine salt evaporation. The exact resistance ensures that flavor profiles remain intact without burning. Get consistent, vaporous draws containing pure tobacco extract or mint menthol frost.`}
            {isAcc && `Never lose connectivity with our heavy-duty magnet dock chargers. The copper pins are gold-plated to shield against corrosion and ensure rapid, stable energy currents for your smart battery.`}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className={`p-4 rounded-2xl border ${isLight ? "bg-zinc-100/40 border-zinc-200" : "bg-white/[0.01] border-white/5"}`}>
              <h5 className={`text-xs font-bold mb-1 ${isLight ? "text-zinc-950" : "text-white"}`}>Fast Delivery</h5>
              <p className={`text-[11px] leading-relaxed ${isLight ? "text-zinc-550" : "text-zinc-400"}`}>
                Ships instantly from local warehouses in Dubai, Marina, Downtown, and Abu Dhabi.
              </p>
            </div>
            <div className={`p-4 rounded-2xl border ${isLight ? "bg-zinc-100/40 border-zinc-200" : "bg-white/[0.01] border-white/5"}`}>
              <h5 className={`text-xs font-bold mb-1 ${isLight ? "text-zinc-950" : "text-white"}`}>Security Sealed</h5>
              <p className={`text-[11px] leading-relaxed ${isLight ? "text-zinc-550" : "text-zinc-400"}`}>
                Features QR code checks to guarantee original imports direct from manufacturer.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ SECTION 3: UAE REGULATORY COMPLIANCE WARNING ═══ */}
      <div className={`p-6 rounded-3xl border flex flex-col sm:flex-row gap-4 items-start ${
        isLight ? "bg-amber-500/5 border-amber-500/25 text-amber-900" : "bg-amber-500/[0.02] border-amber-500/10 text-amber-200"
      }`}>
        <ShieldAlert className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
        <div className="space-y-1.5">
          <h4 className="text-xs font-black uppercase tracking-wider">
            Important UAE Safety Advisory & Nicotine Warning
          </h4>
          <p className="text-xs font-light leading-relaxed opacity-90">
            This product contains nicotine which is a highly addictive substance. Strictly restricted to existing adult smokers and vapers aged 21 years and above. Keep out of reach of children and pregnant women. Only purchase verified authentic products to prevent health risks from counterfeit imports.
          </p>
        </div>
      </div>
    </div>
  );
}
