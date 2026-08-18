import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About", path: "/#about" },
    { name: "Services", path: "/#services" },
    { name: "Portfolio", path: "/#portfolio" },
    { name: "Process", path: "/#process" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Contact", path: "/#contact" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed left-0 top-4 z-50 w-full px-4">
      <div className="mx-auto flex max-w-5xl flex-col rounded-3xl border border-white/10 bg-[#272727]/95 px-5 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.45)] backdrop-blur-md md:rounded-full">
        <div className="flex items-center justify-between">
          <Link
            to="/#home"
            onClick={closeMenu}
            className="bg-gradient-to-r from-[#ff3bd4] via-[#985cff] to-[#00a3ff] bg-clip-text text-lg font-extrabold tracking-wide text-transparent"
          >
            ZOGO LAB
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="text-2xl text-white md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? "✕" : "☰"}
          </button>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-[12px] font-medium text-gray-400 transition-all duration-300 hover:scale-110 hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {isOpen && (
          <div className="mt-4 flex flex-col gap-4 border-t border-white/10 pt-4 md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={closeMenu}
                className="text-sm font-medium text-gray-300 hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
