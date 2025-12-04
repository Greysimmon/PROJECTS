import { useState } from "react";
    export default function Navbar() {
        const [open, setOpen] = useState(false);
        return( 
          <nav className="bg-primary text-white px-6 py-4 flex justify-between items-center shadow-md fixed w-full z-50">
          <h1 className="text-2xl font-bold cursor-pointer"> Simon Kibuna Portfolio</h1>
{/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-lg">
        {["Home", "About", "Projects", "Contact"].map((item) => (
          <li key={item} className="hover:text-gray-200 cursor-pointer">
            {item}
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white text-3xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-primary text-white flex flex-col items-center gap-6 py-6 md:hidden">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <p key={item} className="hover:text-gray-200 cursor-pointer">
              {item}
            </p>
          ))}
        </div>
      )}


          </nav>  
        );


    }
