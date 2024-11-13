"use client";
import { ReactNode, useEffect, useState } from "react";
import SideMenu from "./SideMenu";
import { useResponsiveState } from "@/app/_hooks/useResponsiveHook";
type NavigationToggleProps = {
  children: ReactNode;
};

export default function NavigationToggle({ children }: NavigationToggleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useResponsiveState("(min-width: 1024px)");
  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Example: Close the menu automatically on mobile
    if (isMobile) {
      setIsOpen(false);
    }
  }, [isMobile]);

  return (
    <nav className="">
      {!isOpen && (
        <div className="flex items-center justify-between p-4 lg:hidden">
          <button
            className="text-2xl focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            &#9776;
          </button>
        </div>
      )}

      <SideMenu state={isOpen} onClose={() => setIsOpen(false)} />
      {children}
    </nav>
  );
}
