"use client";

import { useState } from "react";
import { useApp } from "@/context/AppContext";
import { useRouter } from "next/navigation";
import Collection from "@/components/Collection";

export default function Juul2Page() {
  const { theme, handleAddToCart } = useApp();
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <Collection
      onAddToCart={handleAddToCart}
      setCurrentPage={(page) => router.push(`/${page === "home" ? "" : page}`)}
      setSelectedProduct={(p) => router.push(`/product/${p.id}`)}
      activeCategory={activeCategory}
      setActiveCategory={setActiveCategory}
      versionFilter="juul2"
      setVersionFilter={() => {}}
      theme={theme}
    />
  );
}
