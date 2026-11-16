"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Keep server and first client render consistent until next-themes resolves.
  const isDark = !mounted || resolvedTheme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative h-[43px] w-[92px] rounded-full outline-none transition-colors focus-visible:ring-2 focus-visible:ring-blue-400 ${
        isDark ? "bg-[#0c0c0c]" : "border border-black/10 bg-[#e5e7eb]"
      }`}
    >
      <span
        className={`absolute left-[5px] top-[5px] flex h-8 w-8 items-center justify-center rounded-full bg-white text-black shadow-sm transition-transform duration-300 ${
          isDark ? "translate-x-[50px]" : "translate-x-0"
        }`}
      >
        {isDark ? <Moon size={18} fill="currentColor" /> : <Sun size={18} />}
      </span>
    </button>
  );
}
