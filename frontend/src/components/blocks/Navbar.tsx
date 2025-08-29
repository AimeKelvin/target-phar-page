"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

type NavLink = {
  href: string;
  label: string;
};

interface NavbarProps {
  links: NavLink[];
}

export default function Navbar({ links }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  const navLinks = links.filter((link) => link.label.toLowerCase() !== "contact");
  const contactLink = links.find((link) => link.label.toLowerCase() === "contact");

  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-5 md:py-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src="/Logo.png" alt="Target Complex Logo" className="h-10 w-auto" />
          <span className="text-2xl ml-3 font-extrabold text-[#207ae1]">TARGET</span>
          <span className="text-2xl font-extrabold text-[#6fab1d]">COMPLEX</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12 text-base font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition ${
                isActive(link.href)
                  ? "text-[#6fab1d] font-semibold"
                  : "text-gray-900 hover:text-[#6fab1d]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          {contactLink && (
            <Link
              href={contactLink.href}
              className="border-1 border-[#6fab1d] text-[#6fab1d] px-10 py-4  font-semibold hover:bg-[#6fab1d] hover:text-white transition"
            >
              {contactLink.label}
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-900 hover:text-[#6fab1d] focus:outline-none"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white space-y-5 justify-center items-center border-t border-gray-200 px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block mb-6 text-base ${
                isActive(link.href)
                  ? "text-[#207ae1] font-semibold"
                  : "text-gray-800 hover:text-[#207ae1]"
              } transition`}
            >
              {link.label}
            </Link>
          ))}
          {contactLink && (
            <Link
              href={contactLink.href}
              className="border-1 border-[#6fab1d] mb-4 text-[#6fab1d] px-10 py-4  font-semibold hover:bg-[#6fab1d] hover:text-white transition"
            >
              {contactLink.label}
            </Link>
          )}
        </div>
      )}
    </header>
  );
}
