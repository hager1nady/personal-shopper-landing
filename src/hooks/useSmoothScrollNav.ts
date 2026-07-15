import { useState } from "react";

/**
 * Manages the mobile menu open/close state and provides a smooth-scroll
 * handler for in-page anchor navigation.
 */
export function useSmoothScrollNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  function scrollTo(href: string) {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return { menuOpen, setMenuOpen, scrollTo };
}
