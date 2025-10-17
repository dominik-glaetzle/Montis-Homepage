import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

function getInitialTheme() {
  if (typeof window === "undefined") return false;
  const saved = localStorage.getItem("theme");
  if (saved === "dark") return true;
  if (saved === "light") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export default function DarkModeButton() {
  const [dark, setDark] = useState<boolean>(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      onClick={() => setDark((d) => !d)}
      className="
        flex items-center justify-center
        w-9 h-9 sm:w-10 sm:h-10
        rounded-full border border-slate-300 dark:border-slate-600
        bg-slate-100 dark:bg-slate-800
        text-slate-800 dark:text-slate-200
        hover:bg-slate-200 dark:hover:bg-slate-700
        transition-transform active:scale-95
      "
      aria-label="Toggle Dark Mode"
    >
      {dark ? (
        <Sun size={18} strokeWidth={2} />
      ) : (
        <Moon size={18} strokeWidth={2} />
      )}
    </button>
  );
}
