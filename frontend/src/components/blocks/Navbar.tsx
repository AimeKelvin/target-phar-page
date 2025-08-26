// components/Navbar.tsx
"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full shadow-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Left Logo & Brand */}
        <div className="flex items-center space-x-2">
          <img
            src="/Logo.png"
            alt="Target Complex Logo"
            className="h-10 w-auto"
          />
          <span className="text-2xl font-bold text-blue-600">
            TARGET
          </span>
          <span className="text-lg font-semibold text-green-600">
            COMPLEX
          </span>
        </div>

        {/* Right Nav Links */}
        <div className="flex space-x-8 text-sm font-medium">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            Home
          </Link>
          <Link href="/retail" className="text-gray-800 hover:text-blue-600">
            Retail-Pharmacy
          </Link>
          <Link href="/para" className="text-gray-800 hover:text-blue-600">
            Para-Pharmacy
          </Link>
          <Link href="/wholesale" className="text-gray-800 hover:text-blue-600">
            Wholesale-Pharmacy
          </Link>
          <Link href="/contact" className="text-gray-800 hover:text-blue-600">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
