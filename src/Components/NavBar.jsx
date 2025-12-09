import { useState } from "react";
import { NavLink } from "react-router-dom";
    export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Projects", to: "/projects" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <nav className="bg-primary text-white px-6 py-4 flex justify-between items-center shadow-md fixed w-full z-50">
      <h1 className="text-2xl font-bold cursor-pointer">DevPortfolio</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-lg">
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                isActive ? "underline" : "hover:text-gray-200"
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white text-3xl"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-primary text-white flex flex-col items-center gap-6 py-6 md:hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)} // close mobile menu when navigating
              className={({ isActive }) =>
                isActive ? "underline" : "hover:text-gray-200"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}