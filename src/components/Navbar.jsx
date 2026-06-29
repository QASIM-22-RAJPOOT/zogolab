import React from "react";

const Navbar = () => {
  const navItems = [
    { name: "About", path: "#about" },
    { name: "Services", path: "#services" },
    { name: "Portfolio", path: "#portfolio" },
    { name: "Process", path: "#process" },
      { name:  "Privacy", path: "#legal"},
    { name: "Contact", path: "#contact" }

  
  ];

  return (
    <nav className="fixed left-0 top-4 z-50 flex w-full justify-center px-4">
      <div className="flex items-center gap-8 rounded-full border border-white/10 bg-[#272727]/95 px-7 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.45)] backdrop-blur-md">
        {/* Logo */}
        <a
          href="#home"
          className="text-lg font-extrabold tracking-wide bg-gradient-to-r from-[#ff3bd4] via-[#985cff] to-[#00a3ff] bg-clip-text text-transparent transition-all duration-300 hover:scale-105"
        >
          ZOGO LAB
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className="text-[12px] font-medium text-gray-400 transition-all duration-300 hover:scale-110 hover:text-white active:scale-95"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;