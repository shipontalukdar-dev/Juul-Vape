"use client";

import { useApp } from "@/context/AppContext";
import About from "@/components/About";

export default function AboutPage() {
  const { theme } = useApp();
  return <About theme={theme} />;
}
