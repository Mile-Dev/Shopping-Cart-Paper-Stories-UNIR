import React from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderSearchBar from "./HeaderSearchBar";
import HeaderIcons from "./HeaderIcons";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-orange-700 shadow-md z-50 p-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-8 gap-4 items-center">
          <HeaderLogo />
          <HeaderSearchBar />
          <HeaderIcons />
        </div>
      </div>
      <div className="grid grid-cols-8 gap-4 items-center mt-4">
        <div className="flex items-center justify-center text-black font-semibold"></div>
        <div className="flex items-center justify-center text-black font-semibold"></div>
        <div className="flex items-center justify-center text-black font-semibold">Pedidos</div>
        <div className="flex items-center justify-center text-black font-semibold">Socializando</div>
        <div className="flex items-center justify-center text-black font-semibold">Ayuda/PQR</div>
      </div>
    </header>
  );
};

export default Header;