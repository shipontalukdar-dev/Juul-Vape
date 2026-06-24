"use client";

import { useState } from "react";
import { useApp } from "@/context/AppContext";
import { useRouter } from "next/navigation";
import Juul1Collection from "@/components/Juul1Collection";

export default function Juul1Page() {
  const { theme, handleAddToCart } = useApp();
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <Juul1Collection
      onAddToCart={handleAddToCart}
      setCurrentPage={(page) => router.push(`/${page === "home" ? "" : page}`)}
      setSelectedProduct={(p) => router.push(`/product/${p.id}`)}
      activeCategory={activeCategory}
      setActiveCategory={setActiveCategory}
      versionFilter="juul1"
      setVersionFilter={() => {}}
      theme={theme}
    />
  );
}
