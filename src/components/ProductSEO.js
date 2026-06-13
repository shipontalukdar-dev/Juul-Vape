"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, HelpCircle, Table, AlertTriangle, Info, MapPin, ShieldCheck } from "lucide-react";

export default function ProductSEO({ product, theme }) {
  const isLight = theme === "light";
  const [openFAQ, setOpenFAQ] = useState(null);

  // Dynamic Product JSON-LD Schema for Google Search Rich Snippets
  const schemaJson = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": [
      `https://vape-pods-uae.com${product.image || "/deal-bundle.png"}`
    ],
    "description": product.desc,
    "sku": product.id,
    "mpn": product.id,
    "brand": {
      "@type": "Brand",
      "name": "JUUL"
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": product.rating || "5.0",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Arif Rahman"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": product.rating || "4.9",
      "reviewCount": product.reviewsCount || "198"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://vape-pods-uae.com/product/${product.id}`,
      "priceCurrency": "AED",
      "price": product.price,
      "priceValidUntil": "2028-12-31",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Vape Pods UAE Store"
      }
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://vape-pods-uae.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Collection",
        "item": "https://vape-pods-uae.com/collection"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": product.category || "Vapes",
        "item": `https://vape-pods-uae.com/collection?category=${product.category || ""}`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": product.name,
        "item": `https://vape-pods-uae.com/product/${product.id}`
      }
    ]
  };

  const faqs = [
    {
      q: "How can I verify if my JUUL 2 device and pods are 100% genuine?",
      a: "Every authentic JUUL and JUUL 2 pack contains a serial number and a security QR verification seal on the reverse side. Scratch the seal to reveal the unique security code and verify it on the official JUUL validation portal. Genuine JUUL 2 pods also contain a secure NFC chip that automatically authenticates the cartridge with the device, activating the dynamic green LED light indicator upon connection."
    },
    {
      q: "What is the delivery time and cost for Dubai, Abu Dhabi, and other Emirates?",
      a: "We offer express same-day shipping across Dubai, Sharjah, and Ajman. Place your order before 3:00 PM to receive it the same evening. Delivery is free for orders over 150 AED; otherwise, a flat rate of 30 AED applies. Deliveries to Abu Dhabi, Al Ain, Ras Al Khaimah, Fujairah, and Umm Al Quwain are processed within 24 to 48 hours via our priority courier partners."
    },
    {
      q: "Can I use JUUL 2 pods on a JUUL 1 device, or vice versa?",
      a: "No. JUUL 1 and JUUL 2 products are not cross-compatible. JUUL 1 devices utilize classic magnetic slide-in pods (0.7 mL capacity) with custom side terminals, while JUUL 2 devices feature larger, smart NFC-enabled pods (1.2 mL capacity) and a updated dynamic contact layout. Make sure you match the pod version with your specific device model."
    },
    {
      q: "What does the colored LED indicator light mean on my JUUL device?",
      a: "On JUUL 1, a single tap shows green (50-100% battery), yellow (25-50% battery), or red (needs charging). On JUUL 2, the four-light indicator displays charging status, battery diagnostics, and pod communication. If the lights flash red, it indicates the device battery is exhausted. Flashing white lights signify smart pod detection or NFC pairing."
    },
    {
      q: "Are these pods refillable with other nicotine salt e-liquids?",
      a: "No, JUUL pods are designed as closed-loop, non-refillable systems. Attempting to pry open or refill the cartridges can damage the internal coils, break the leak-proof seals, cause spitting, or void the product warranty. To ensure a premium vaping experience with consistent flavor and vapor density, always use original, pre-filled pods."
    },
    {
      q: "What ingredients are used in authentic JUUL e-liquid capsules?",
      a: "Genuine JUUL e-liquids consist of a proprietary formulation blending food-grade Vegetable Glycerin (VG), Propylene Glycol (PG), natural and artificial flavorings, benzoic acid, and high-purity USP-grade nicotine salts. The inclusion of benzoic acid helps match the throat hit of traditional cigarettes by facilitating smooth nicotine absorption."
    },
    {
      q: "How does the JUUL 2 Bluetooth smart application connection work?",
      a: "The JUUL 2 device features Bluetooth connectivity that pairs with the official JUUL Android application. Through the app, you can secure your device with lock options to prevent unauthorized usage, monitor your daily and weekly puff analytics, view precise battery percentages, and locate your misplaced device using the built-in tracking radar."
    },
    {
      q: "What are the legal age restrictions for purchasing vapes in the UAE?",
      a: "Under federal UAE law, customers must be 18 years of age or older to purchase or consume e-cigarettes and vaping accessories. Our store enforces a strict age-verification policy. You must upload or present a valid Emirates ID or Passport upon delivery to confirm you meet the legal age requirements."
    }
  ];

  return (
    <div className={`mt-16 pt-12 border-t text-left ${isLight ? "border-zinc-200" : "border-white/5"}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="space-y-12">
        {/* ── Section 1: Massive Editorial Keyword Guide ── */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span className={`text-[10px] font-black uppercase tracking-widest ${isLight ? "text-blue-600" : "text-emerald-400"}`}>
              Ultimate UAE Vape Buyer's Guide & SEO Reference
            </span>
          </div>

          <h2 className={`text-2xl sm:text-4xl font-black tracking-tight leading-tight ${isLight ? "text-zinc-950" : "text-white"}`}>
            The Ultimate Guide to Authentic JUUL Devices & Pods in Dubai, Abu Dhabi, & UAE
          </h2>

          <div className={`text-xs font-light leading-relaxed space-y-6 ${isLight ? "text-zinc-650" : "text-zinc-350"}`}>
            <p>
              Are you looking to buy genuine <strong className="font-bold">JUUL pods in Dubai</strong>, Abu Dhabi, Sharjah, or Ajman? With the vaping market expanding rapidly, finding original e-cigarette hardware and authentic pods has become critical. Our online store is dedicated to providing only verified, premium JUUL products with same-day express courier delivery across all seven Emirates. From the classic JUUL 1 device kits to the state-of-the-art Bluetooth-enabled JUUL 2 starter bundles, we stock everything a discerning vaper needs.
            </p>

            <h3 className={`text-base font-black uppercase tracking-wide ${isLight ? "text-zinc-800" : "text-zinc-200"}`}>
              Why JUUL Pods stand out in the UAE Vaping Market
            </h3>
            <p>
              JUUL has set a gold standard in the pod vape industry by developing a sleek, buttonless nicotine delivery system that mimics the sensory throat hit of traditional cigarettes. By blending USP-grade nicotine salts with benzoic acid, JUUL devices deliver nicotine rapidly to the bloodstream. This makes it a popular alternative for adult smokers in Dubai looking to make a clean transition. Our flavor line-up features original blends including <strong className="font-bold">Virginia Tobacco</strong>, <strong className="font-bold">Polar Mint</strong>, <strong className="font-bold">Ruby Sunset (Crisp Apple)</strong>, and <strong className="font-bold">Summer Gold (Tropical Mango)</strong>.
            </p>

            <h3 className={`text-base font-black uppercase tracking-wide ${isLight ? "text-zinc-800" : "text-zinc-200"}`}>
              Comparing Nicotine Strengths: 1.8%, 3.0%, and 5.0%
            </h3>
            <p>
              Understanding the concentration of nicotine in your pods is vital for a customized vaping experience. We provide options tailored to your preference. The <strong className="font-bold">5.0% (50mg/mL) strength</strong> offers a strong, full-bodied draw ideal for heavy former smokers. The <strong className="font-bold">3.0% (30mg/mL) level</strong> delivers a balanced, medium strength perfect for casual daily use, while the <strong className="font-bold">1.8% (18mg/mL) ratio</strong> is highly popular in compliance with European standards for users looking to reduce their nicotine intake gradually.
            </p>

            <h3 className={`text-base font-black uppercase tracking-wide ${isLight ? "text-zinc-800" : "text-zinc-200"}`}>
              Upgrading to JUUL 2: The Next Generation of Vaping
            </h3>
            <p>
              The JUUL 2 device represents a major leap forward in vaping technology. Equipped with smart NFC pod recognition, it prevents counterfeit cartridges from functioning, protecting you from harmful counterfeit elements. Additionally, the JUUL 2 boasts a 350mAh battery capacity (a 75% increase over the original JUUL 1) and holds 1.2mL of premium e-liquid per pod. With its official smartphone application, users can easily monitor puff counters, locate a lost vape, and lock their device remotely for safety.
            </p>
          </div>
        </div>

        {/* ── Section 2: Advanced Specs Comparison Grid ── */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Table className="w-4 h-4 text-emerald-400" />
            <h4 className={`text-xs uppercase font-black tracking-widest ${isLight ? "text-zinc-800" : "text-white"}`}>
              In-Depth Specifications: JUUL 1 vs JUUL 2
            </h4>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-zinc-200 dark:border-white/5">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className={`${isLight ? "bg-zinc-100 text-zinc-950" : "bg-white/5 text-white"} border-b border-zinc-200 dark:border-white/5`}>
                  <th className="p-4 font-black">Specification Detail</th>
                  <th className="p-4 font-black">JUUL 1 Classic System</th>
                  <th className="p-4 font-black">JUUL 2 Smart System</th>
                </tr>
              </thead>
              <tbody className={`divide-y divide-zinc-200 dark:divide-white/5 ${isLight ? "text-zinc-650" : "text-zinc-350"}`}>
                <tr>
                  <td className="p-4 font-bold">Liquid Capacity</td>
                  <td className="p-4">0.7 mL per cartridge</td>
                  <td className="p-4">1.2 mL per cartridge (+70% Capacity)</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Battery Capacity</td>
                  <td className="p-4">200 mAh (Lithium-ion)</td>
                  <td className="p-4">350 mAh (Extended Life)</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Smart NFC Chip</td>
                  <td className="p-4">Not Included</td>
                  <td className="p-4">NFC Pod Authentication Built-In</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Bluetooth Tracker</td>
                  <td className="p-4">No</td>
                  <td className="p-4">Yes (Pairs with JUUL Android App)</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">LED Display Status</td>
                  <td className="p-4">Single green/yellow/red battery LED</td>
                  <td className="p-4">4-light indicator (battery & pod status)</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Coil Technology</td>
                  <td className="p-4">Classic Nichrome wire wick</td>
                  <td className="p-4">Upgraded mesh coil for dense vapor profile</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Draw Mechanism</td>
                  <td className="p-4">Automatic pressure draw sensor</td>
                  <td className="p-4">Upgraded dynamic pressure draw sensor</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ── Section 3: UAE Delivery Matrix ── */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-emerald-400" />
            <h4 className={`text-xs uppercase font-black tracking-widest ${isLight ? "text-zinc-800" : "text-white"}`}>
              UAE Courier Dispatch & Shipping Information Matrix
            </h4>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-zinc-200 dark:border-white/5">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className={`${isLight ? "bg-zinc-100 text-zinc-950" : "bg-white/5 text-white"} border-b border-zinc-200 dark:border-white/5`}>
                  <th className="p-4 font-black">Emirate Location</th>
                  <th className="p-4 font-black">Delivery Timeframe</th>
                  <th className="p-4 font-black">Order Cutoff Limit</th>
                  <th className="p-4 font-black">Delivery Charge</th>
                </tr>
              </thead>
              <tbody className={`divide-y divide-zinc-200 dark:divide-white/5 ${isLight ? "text-zinc-650" : "text-zinc-350"}`}>
                <tr>
                  <td className="p-4 font-bold">Dubai City</td>
                  <td className="p-4">Express Same-Day (3-6 Hours)</td>
                  <td className="p-4">3:00 PM Daily</td>
                  <td className="p-4 text-emerald-400 font-bold">Free over 150 AED (30 AED Flat)</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Sharjah & Ajman</td>
                  <td className="p-4">Express Same-Day (4-8 Hours)</td>
                  <td className="p-4">2:00 PM Daily</td>
                  <td className="p-4 text-emerald-400 font-bold">Free over 150 AED (30 AED Flat)</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Abu Dhabi City</td>
                  <td className="p-4">Next-Day Courier (24 Hours)</td>
                  <td className="p-4">5:00 PM Daily</td>
                  <td className="p-4 text-emerald-400 font-bold">Free over 150 AED (30 AED Flat)</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Al Ain & Western Regions</td>
                  <td className="p-4">Courier Standard (24-48 Hours)</td>
                  <td className="p-4">5:00 PM Daily</td>
                  <td className="p-4">30 AED Flat Charge</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">RAK, Fujairah, & UAQ</td>
                  <td className="p-4">Courier Standard (24-48 Hours)</td>
                  <td className="p-4">4:00 PM Daily</td>
                  <td className="p-4">30 AED Flat Charge</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ── Section 4: Comprehensive Collapsible FAQ ── */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-red-400" />
            <h3 className={`text-base uppercase font-black tracking-wider ${isLight ? "text-zinc-900" : "text-white"}`}>
              Frequently Asked Questions (FAQ) - SEO Verified
            </h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border ${
                  isLight ? "bg-white border-zinc-200" : "bg-zinc-950/20 border-white/5"
                } overflow-hidden`}
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-xs font-bold text-left cursor-pointer"
                >
                  <span className={isLight ? "text-zinc-900" : "text-white"}>{faq.q}</span>
                  {openFAQ === idx ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                <AnimatePresence>
                  {openFAQ === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className={`px-5 pb-5 text-xs font-light leading-relaxed border-t border-zinc-100 dark:border-white/5 pt-4 ${
                        isLight ? "text-zinc-600" : "text-zinc-400"
                      }`}
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* ── Section 5: Regulatory Compliance & Addictive Chemical warnings ── */}
        <div className="p-5 rounded-2xl border border-red-500/20 bg-red-500/5 space-y-2">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0" />
            <strong className="text-xs uppercase font-black text-red-500 tracking-wider">
              Legal Compliance, Health Warning, and Age Disclaimer
            </strong>
          </div>
          <p className="text-[11px] sm:text-xs leading-relaxed text-red-400/90 font-medium">
            Nicotine is a highly addictive compound. This online platform is strictly reserved for adult tobacco consumers aged 18 or older (21+ where local regulations apply) in the United Arab Emirates. We do not sell or deliver to minors, and ID checks are carried out on all deliveries. All vaping devices, pod kits, and vaporizers contain nicotine salts and are not suitable for pregnant women, non-smokers, or individuals with pre-existing cardiovascular conditions. Please vape responsibly and store all products out of reach of children and pets.
          </p>
        </div>
      </div>
    </div>
  );
}
