import React, { useState, useEffect } from "react";
import icons from "../utils/iconAccess";

function Navbar() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { id: 1, item: "Home", section: "#home" },
    { id: 2, item: "About", section: "#about" },
    { id: 3, item: "Skills", section: "#skills" },
    { id: 4, item: "Projects", section: "#projects" },
    { id: 5, item: "Contact", section: "#contact" },
  ];

  return (
    <div className="fixed top-0 z-50 flex w-full items-center border-b border-white/10 bg-black/10 px-4 py-4 backdrop-blur-2xl md:px-8">
      {/* Logo */}
      <a
        href="/"
        className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-2xl font-bold text-transparent"
      >
        SISIR SEN
      </a>

      {/* Mobile Menu Button */}
      <div
        onClick={() => setOpen(!open)}
        className="ml-auto h-9 w-9 cursor-pointer rounded-xl p-2 transition-all duration-200 active:bg-cyan-800 md:hidden"
      >
        <img src={icons.menuButton} alt="menu" />
      </div>

      {/* Desktop Navbar */}
      <div className="ml-auto hidden gap-9 text-lg md:flex">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.section}
            className={`relative pb-2 font-medium transition-all duration-300 text-white hover:underline hover:text-cyan-500 underline-offset-8`}
          >
            {item.item}

          
          </a>
        ))}
      </div>

      {/* Mobile Navbar */}
      <div
        className={`absolute right-3 top-16 w-[220px] rounded-2xl border border-cyan-800 bg-[#0B1120] p-5 shadow-lg transition-all duration-300 md:hidden ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-5 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-5 text-lg">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.section}
              onClick={() => setOpen(false)}
              className={`transition-all duration-300  text-white hover:underline hover:text-cyan-500 underline-offset-8`}
            >
              {item.item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;