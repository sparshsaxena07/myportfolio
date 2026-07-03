"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    // Determine initial theme after mounting on client to avoid hydration mismatch
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
    } else {
      const media = window.matchMedia("(prefers-color-scheme: dark)");
      setTheme(media.matches ? "dark" : "light");
    }
  }, []);

  const selectTheme = (newTheme: "light" | "dark") => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  // Fixed dimensions container to prevent layout shifting during hydration
  return (
    <div role="group" aria-label="Theme selector" className="relative w-[116px] h-7 flex items-center p-0.5 bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/80 rounded-full select-none transition-all duration-300">
      {theme && (
        <div
          className="absolute h-5 bg-white dark:bg-zinc-800 rounded-full shadow-sm transition-all duration-300 ease-out"
          style={{
            width: "54px",
            left: theme === "light" ? "2px" : "58px",
          }}
        />
      )}
      <button
        onClick={() => selectTheme("light")}
        aria-label="Light theme"
        className={`relative z-10 w-14 h-5 flex items-center justify-center text-[10px] font-mono tracking-wider uppercase transition-colors duration-300 cursor-pointer ${
          theme === "light"
            ? "text-accent-primary font-medium"
            : "text-text-secondary hover:text-text-primary"
        }`}
      >
        Light
      </button>
      <button
        onClick={() => selectTheme("dark")}
        aria-label="Dark theme"
        className={`relative z-10 w-14 h-5 flex items-center justify-center text-[10px] font-mono tracking-wider uppercase transition-colors duration-300 cursor-pointer ${
          theme === "dark"
            ? "text-accent-primary font-medium"
            : "text-text-secondary hover:text-text-primary"
        }`}
      >
        Dark
      </button>
    </div>
  );
}
