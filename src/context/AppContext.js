"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { allProducts as defaultProducts } from "@/data/products";

const AppContext = createContext(null);

const defaultSiteContent = {
  heroTitle: "JUUL 2",
  heroSubtitle: "NEXT-GEN SATISFACTION",
  heroDesc: "Experience the future of clean vaping with the brand new JUUL 2. Sleeker body, smarter interface, and richer vapor draw.",
  promoBanner: "FREE SHIPPING IN UAE FOR ORDERS ABOVE AED 150!",
  teaserTitle: "Explore Pods",
  teaserDesc: "Authentic flavors crafted for the ultimate satisfaction. Select your device type to see available options."
};

export function AppProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [siteContent, setSiteContent] = useState(defaultSiteContent);

  // Persist theme in localStorage
  useEffect(() => {
    const stored = localStorage.getItem("vapepods-theme");
    if (stored) setTheme(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("vapepods-theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Persist products list
  useEffect(() => {
    const storedProducts = localStorage.getItem("vapepods-products");
    if (storedProducts) {
      try {
        setProducts(JSON.parse(storedProducts));
      } catch (e) {
        setProducts(defaultProducts);
      }
    } else {
      setProducts(defaultProducts);
    }
  }, []);

  const saveProducts = (newProducts) => {
    setProducts(newProducts);
    localStorage.setItem("vapepods-products", JSON.stringify(newProducts));
  };

  const addProduct = (prod) => {
    const newProducts = [prod, ...products];
    saveProducts(newProducts);
  };

  const updateProduct = (id, updated) => {
    const newProducts = products.map((p) => (p.id === id ? { ...p, ...updated } : p));
    saveProducts(newProducts);
  };

  const deleteProduct = (id) => {
    const newProducts = products.filter((p) => p.id !== id);
    saveProducts(newProducts);
  };

  const resetProducts = () => {
    saveProducts(defaultProducts);
  };

  // Persist site content
  useEffect(() => {
    const storedContent = localStorage.getItem("vapepods-site-content");
    if (storedContent) {
      try {
        setSiteContent(JSON.parse(storedContent));
      } catch (e) {
        setSiteContent(defaultSiteContent);
      }
    }
  }, []);

  const updateSiteContent = (key, value) => {
    const newContent = { ...siteContent, [key]: value };
    setSiteContent(newContent);
    localStorage.setItem("vapepods-site-content", JSON.stringify(newContent));
  };

  const resetSiteContent = () => {
    setSiteContent(defaultSiteContent);
    localStorage.setItem("vapepods-site-content", JSON.stringify(defaultSiteContent));
  };

  // Persist cart in localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("vapepods-cart");
    if (storedCart) setCart(JSON.parse(storedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem("vapepods-cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (indexToRemove) => {
    setCart((prev) => prev.filter((_, idx) => idx !== indexToRemove));
  };

  const handleClearCart = () => setCart([]);

  return (
    <AppContext.Provider
      value={{
        cart,
        isCartOpen,
        setIsCartOpen,
        theme,
        setTheme,
        selectedProduct,
        setSelectedProduct,
        products,
        addProduct,
        updateProduct,
        deleteProduct,
        resetProducts,
        siteContent,
        updateSiteContent,
        resetSiteContent,
        handleAddToCart,
        handleRemoveFromCart,
        handleClearCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
