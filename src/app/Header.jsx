"use client";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div>
            <a href="/">
              <p className="text-2xl font-bold">Riyan Ghouri</p>
            </a>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6">
            <a href="/">
              <p className="hover:text-blue-300">Home</p>
            </a>
            <a href="/service">
              <p className="hover:text-blue-300">Service</p>
            </a>
            <a href="/about">
              <p className="hover:text-blue-300">About</p>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden flex flex-col space-y-2 bg-blue-700 p-4 rounded-md">
            <a href="/">
              <p className="hover:text-blue-300">Home</p>
            </a>
            <a href="/service">
              <p className="hover:text-blue-300">Service</p>
            </a>
            <a href="/about">
              <p className="hover:text-blue-300">About</p>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
