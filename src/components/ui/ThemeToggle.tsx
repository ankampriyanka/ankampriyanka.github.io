"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="rounded-xl border border-slate-700 p-2.5 text-slate-300"
      >
        <FaMoon />
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="rounded-xl border border-slate-700 p-2.5 text-slate-300 transition hover:border-cyan-400/60 hover:bg-slate-800 hover:text-cyan-300"
    >
      {isDark ? <FaSun /> : <FaMoon />}
    </button>
  );
}