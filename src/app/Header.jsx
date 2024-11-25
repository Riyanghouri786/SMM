"use client";
import Link from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="text-white bg-blue-600 shadow-md">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div>
            <Link href="/">
              <p className="text-2xl font-bold">Riyan Ghouri</p>
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden space-x-6 md:flex">
            <Link href="/">
              <p className="hover:text-blue-300">Home</p>
            </Link>
            <Link href="/service">
              <p className="hover:text-blue-300">Service</p>
            </Link>
            <Link href="/about">
              <p className="hover:text-blue-300">About</p>
            </Link>
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
          <nav className="flex flex-col p-4 space-y-2 bg-blue-700 rounded-md md:hidden">
            <Link href="/">
              <p className="hover:text-blue-300">Home</p>
            </Link>
            <Link href="/service">
              <p className="hover:text-blue-300">Service</p>
            </Link>
            <Link href="/about">
              <p className="hover:text-blue-300">About</p>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
