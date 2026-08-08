"use client";

import { useState } from "react";
import styles from "./ThemeToggle.module.css";

function getInitialDark() {
  if (typeof document === "undefined") return false;
  return document.documentElement.classList.contains("dark");
}

export default function ThemeToggle({ variant = "pill" }: { variant?: "pill" | "icon" }) {
  const [dark, setDark] = useState(getInitialDark);

  function toggle() {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("kana-theme", next ? "dark" : "light");
    setDark(next);
  }

  const label = dark ? "Beralih ke mode terang" : "Beralih ke mode gelap";

  if (variant === "icon") {
    return (
      <button
        type="button"
        onClick={toggle}
        className={styles.iconToggle}
        aria-label={label}
        suppressHydrationWarning
      >
        {dark ? "☀" : "☾"}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className={styles.toggle}
      aria-label={label}
      suppressHydrationWarning
    >
      <span aria-hidden="true" suppressHydrationWarning>
        {dark ? "☀" : "☾"}
      </span>
    </button>
  );
}
