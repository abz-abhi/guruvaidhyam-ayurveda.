"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm fixed">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="flex items-center gap-4">
            <Image
              src="/logo/552272882_17844576087575966_6653134190890368995_n (1).jpg"
              alt="logo"
              width={40}
              height={40}
              className="rounded-full"
              priority
            />
            <span className="text-gray-800 font-semibold text-xl">
              Guruvaidhyam
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-gray-600 items-center">
            <a href="#product" className="hover:text-gray-900">Product</a>
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
            <a href="#footer" className="hover:text-gray-900">About</a>
            <a href="#footer" className="text-pink-500 font-semibold">Call to action</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="menu"
            className="md:hidden p-2 rounded-full hover:bg-gray-100"
          >
            {open ? (
              <svg width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
              </svg>
            ) : (
              <svg width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {open && (
          <div className="md:hidden flex flex-col gap-3 pb-6 text-gray-700 mt-4">
            <a href="#product" className="py-2 px-3 rounded hover:bg-gray-50">Product</a>
            <a href="#features" className="py-2 px-3 rounded hover:bg-gray-50">Features</a>
            <a href="#pricing" className="py-2 px-3 rounded hover:bg-gray-50">Pricing</a>
            <a href="#footer" className="py-2 px-3 rounded hover:bg-gray-50">About</a>
            <a href="#footer" className="py-2 px-3 rounded text-pink-500 hover:bg-pink-50">Call to action</a>
          </div>
        )}
      </div>
    </header>
  );
}
