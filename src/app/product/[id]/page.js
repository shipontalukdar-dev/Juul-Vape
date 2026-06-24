"use client";

import { use } from "react";
import { useApp } from "@/context/AppContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { getProductById } from "@/data/products";
import ProductDetail from "@/components/ProductDetail";

export default function ProductPage({ params }) {
  // Next.js 15+: params is a Promise, must be unwrapped with React.use()
  const { id } = use(params);
  const { theme, handleAddToCart } = useApp();
  const router = useRouter();
  const product = getProductById(id);

  useEffect(() => {
    if (!product) {
      router.replace("/juul2");
    }
  }, [product, router]);

  if (!product) return null;

  return (
    <ProductDetail
      selectedProduct={product}
      onAddToCart={handleAddToCart}
      setCurrentPage={(page) => {
        if (page === "home") router.push("/");
        else if (page === "collection") router.push("/juul2");
        else if (page === "checkout") router.push("/checkout");
        else router.push(`/${page}`);
      }}
      theme={theme}
    />
  );
}
