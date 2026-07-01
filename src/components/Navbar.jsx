



import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About", path: "#about" },
    { name: "Services", path: "#services" },
    { name: "Portfolio", path: "#portfolio" },
    { name: "Process", path: "#process" },
    { name: "Privacy-policy", path: "#legal" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <nav className="fixed left-0 top-4 z-50 w-full px-4">
      <div className="mx-auto flex max-w-5xl flex-col rounded-3xl border border-white/10 bg-[#272727]/95 px-5 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.45)] backdrop-blur-md md:rounded-full">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="text-lg font-extrabold tracking-wide bg-gradient-to-r from-[#ff3bd4] via-[#985cff] to-[#00a3ff] bg-clip-text text-transparent"
          >
            ZOGO LAB
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-white md:hidden"
          >
            {isOpen ? "✕" : "☰"}
          </button>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="text-[12px] font-medium text-gray-400 transition-all duration-300 hover:scale-110 hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {isOpen && (
          <div className="mt-4 flex flex-col gap-4 border-t border-white/10 pt-4 md:hidden">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-gray-300 hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;