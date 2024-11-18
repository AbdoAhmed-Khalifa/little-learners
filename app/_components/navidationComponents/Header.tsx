import React from "react";
import NavigationToggle from "./NavigationToggel";
import NavBar from "./NavBar";
import Logo from "../Logo";

export default function Header() {
  return (
    <header className="mx-5 mt-6 flex items-center justify-between overflow-hidden rounded-xl border-2 border-dark-15">
      <Logo
        background=" bg-primary-65"
        borderColor="border-dark-15"
        borderThickness="border-r-2"
      />
      <NavigationToggle>
        <NavBar />
      </NavigationToggle>
    </header>
  );
}
