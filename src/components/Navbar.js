import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gradient-to-r from-pink-300 to-pink-200 shadow-md rounded-xl font-poppins">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-red-800 tracking-wide cursor-pointer">
        Coquette Crockery
      </h1>

      {/* Navigation Links */}
      <div className="flex gap-6 items-center">
        <Link
          to="/"
          className="text-red-800 text-lg font-medium px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white hover:text-pink-600 shadow-sm"
        >
          Home
        </Link>
        <Link
          to="/wishlist"
          className="text-red-800 text-lg font-medium px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white hover:text-pink-600 shadow-sm"
        >
          ❤️ Wishlist
        </Link>

        {/* Login / Signup Button */}
        <button className="px-5 py-2 text-white text-lg font-bold bg-pink-600 rounded-lg transition-transform duration-300 hover:bg-pink-700 hover:scale-105">
          Login / Signup
        </button>
      </div>
    </nav>
  );
};

export default Navbar;




