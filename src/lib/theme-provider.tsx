"use client";
import { createContext, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "portfolio-theme";

const ThemeContext = createContext<{
   theme: string;
   toggleTheme: () => void;
}>({ theme: "dark", toggleTheme: () => {} });

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
   const [theme, setTheme] = useState<string>(() => {
      if (typeof window === "undefined") return "dark";
      return localStorage.getItem(STORAGE_KEY) ?? "dark";
   });

   useEffect(() => {
      const root = document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(theme);
      localStorage.setItem(STORAGE_KEY, theme);
   }, [theme]);

   const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

   return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
         {children}
      </ThemeContext.Provider>
   );
};

export const useTheme = () => useContext(ThemeContext);
