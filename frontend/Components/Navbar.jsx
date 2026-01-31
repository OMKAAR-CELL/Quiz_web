import React from "react";
import { User } from "lucide-react";

const Navbar = () => {
  const navLinks = ["Test", "Leaderboard"];

  return (
    <nav className="w-full h-20 flex items-center justify-between px-10 bg-white border-b border-gray-100 shadow-sm">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="/logo.svg" alt="OpenTest logo" className="h-16 w-auto" />
      </div>

      {/* Right Section - Links + Profile together */}
      <div className="flex items-center gap-6">
        {navLinks.map((link) => (
          <span
            key={link}
            className="relative text-sm font-medium text-gray-500 cursor-pointer transition-colors duration-300 hover:text-gray-900 group"
          >
            {link}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full transition-all duration-300 group-hover:w-full" />
          </span>
        ))}

        {/* Profile */}
        <div className="flex flex-col items-center cursor-pointer group">
          <button className="h-9 w-9 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black/30 focus:ring-offset-2">
            <User size={16} strokeWidth={1.8} />
          </button>
          <span className="text-xs text-gray-400 mt-0.5 group-hover:text-gray-600 transition-colors duration-300">
            Profile
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;