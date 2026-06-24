"use client";

import { useApp } from "@/context/AppContext";
import Wholesale from "@/components/Wholesale";

export default function WholesalePage() {
  const { theme } = useApp();
  return <Wholesale theme={theme} />;
}
