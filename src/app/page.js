"use client";

import { useApp } from "@/context/AppContext";
import { useRouter } from "next/navigation";
import Home from "@/components/Home";

export default function HomePage() {
  const { theme, handleAddToCart, setSelectedProduct } = useApp();
  const router = useRouter();

  // Map old page names to new URL routes
  const navigate = (page) => {
    const routes = {
      home: "/",
      collection: "/juul2",
      juul1: "/juul1",
      juul2: "/juul2",
      about: "/about",
      contact: "/contact",
      wholesale: "/wholesale",
      checkout: "/checkout",
      product: "/juul2", // fallback - product pages are /product/[id]
    };
    router.push(routes[page] || `/${page}`);
  };

  return (
    <Home
      setCurrentPage={navigate}
      setCategoryFilter={() => {}}
      setVersionFilter={() => {}}
      onAddToCart={handleAddToCart}
      setSelectedProduct={(p) => {
        // If product has an id that maps to our shared catalog, go to its URL
        if (p?.id) {
          router.push(`/product/${p.id}`);
        } else {
          router.push("/juul2");
        }
      }}
      theme={theme}
    />
  );
}
