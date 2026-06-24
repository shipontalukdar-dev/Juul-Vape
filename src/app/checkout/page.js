"use client";

import { useApp } from "@/context/AppContext";
import { useRouter } from "next/navigation";
import Checkout from "@/components/Checkout";

export default function CheckoutPage() {
  const { theme, cart, handleClearCart } = useApp();
  const router = useRouter();

  return (
    <Checkout
      cart={cart}
      onClearCart={handleClearCart}
      setCurrentPage={(page) => router.push(`/${page === "home" ? "" : page}`)}
      theme={theme}
    />
  );
}
