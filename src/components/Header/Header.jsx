import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";
import './Header.css'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <section className="header-section fixed top-0 left-0 right-0 w-100 h-100 bg-[#f9f8ff]">
      <nav className="py-4 px-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div>
            <h3>
              <Link className="text-black text-3xl font-bold" to='/'>
              JobHunting
              </Link>
            </h3>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-8 w-8 fill-current text-black"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4">
            <ActiveLink to="/" className="text-white hover:text-gray-300 text-sm">
              Home
            </ActiveLink>
            <ActiveLink
              to="/statistics"
              className="text-white hover:text-gray-300 text-sm"
            >
              Statistics
            </ActiveLink>
            
            <ActiveLink
              to="/applied-job"
              className="text-black hover:text-gray-300 text-sm"
            >
              Applied Job
            </ActiveLink>
            <ActiveLink className="text-black hover:text-gray-300 text-sm" to="/blog">
              Blog
            </ActiveLink>
          </div>

          {/* Button */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r bg-[#7E90FE] bg-[#7450d5] text-white px-4 p-4 rounded-md hover:bg-blue-600 text-xl font-bold">
            Star Applying
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-100 py-2">
            <ActiveLink to="/" className="text-white hover:text-gray-300 text-sm">
              Home
            </ActiveLink>
            <ActiveLink to="/statistics" className="text-white hover:text-gray-300 text-sm"
            >
              Statistics
            </ActiveLink>
            
            <ActiveLink to="/applied-job" className="text-white hover:text-gray-300 text-sm"
            >
              Applied Job
            </ActiveLink>
            <ActiveLink to="/blog" className="text-white hover:text-gray-300 text-sm">
              Blog
            </ActiveLink>
            <button className="bg-gradient-to-r bg-[#7E90FE] bg-[#7450d5] text-white px-4 p-4 rounded-md hover:bg-blue-600 text-xl font-bold">
            Star Applying
            </button>
          </div>
        )}
      </nav>
    </section>
  );
}
