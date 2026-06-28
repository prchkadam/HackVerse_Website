"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Theme = "dark" | "light";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = "echosight-theme";

/**
 * Theme provider — dark by default, light available on toggle.
 *
 * Why dark-by-default needs a real justification here and not just
 * "it looks premium": photophobia (light sensitivity) co-occurs with
 * several causes of low vision more often than general UX wisdom
 * assumes, so a darker default surface is a reasonable starting
 * point for this specific audience. It is not universal, though —
 * some low-vision conditions do better with light backgrounds and
 * dark text — which is exactly why the toggle has to be a first-
 * class, easy-to-reach control and not a buried settings option.
 *
 * The theme is applied as a class on <html> (not a data attribute)
 * because Tailwind's `darkMode: "class"` strategy reads the same
 * selector, keeping one source of truth between the provider and
 * every Tailwind `dark:` utility used across the site.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  // Initial value matches the inline script in the root layout (see
  // layout.tsx) so this never causes a hydration mismatch — the
  // server-rendered class and this initial state must agree.
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
