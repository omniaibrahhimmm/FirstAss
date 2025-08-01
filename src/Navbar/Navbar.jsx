import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#2c3e50]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-7 container px-10 text-white no-underline">
        
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-3xl font-extrabold whitespace-nowrap dark:text-white">
            START FRAMEWORK
          </span>
        </NavLink>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-solid-bg">
          <ul className="uppercase flex flex-col text-lg font-bold mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 px-4 text-white rounded-sm ${
                    isActive ? "bg-[#18bc9c] font-semibold py-1 px-3" : ""
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  `block py-2 px-4 text-white rounded-sm ${
                    isActive ? "bg-[#18bc9c] font-semibold py-1 px-3" : ""
                  }`
                }
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacts"
                className={({ isActive }) =>
                  `block py-2 px-4 text-white rounded-sm ${
                    isActive ? "bg-[#18bc9c] font-semibold py-1 px-3" : ""
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
