"use client";

import { useApp } from "@/context/AppContext";
import Contact from "@/components/Contact";

export default function ContactPage() {
  const { theme } = useApp();
  return <Contact theme={theme} />;
}
