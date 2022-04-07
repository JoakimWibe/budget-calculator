import { useEffect, useState } from "react";

export default function useDarkMode() {
  const [theme, setTheme] = useState("light");
  const mode = theme === "light" ? "dark" : "light";

  useEffect(
    () => {
      const root = window.document.documentElement;
      root.classList.remove(mode);
      root.classList.add(theme);
    },
    [theme],
    mode
  );

  return [mode, setTheme];
}
