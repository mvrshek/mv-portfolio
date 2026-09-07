"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0a0a0a]/90 px-8 py-5 backdrop-blur-md md:px-16 lg:px-24">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        
        {/* Name */}
        <a
          href="/"
          className="text-sm font-semibold tracking-[0.15em] text-white"
        >
          MASON VRSHEK
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              {link.name}
            </a>
          ))}

          <a
            href="/resume.pdf"
            className="text-sm font-medium text-white transition-colors hover:text-gray-400"
          >
            Resume ↗
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span className="block h-px w-5 bg-white" />
          <span className="block h-px w-5 bg-white" />
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="mx-auto mt-5 max-w-7xl border-t border-white/10 pt-5 md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                {link.name}
              </a>
            ))}

            <a
              href="/resume.pdf"
              className="text-sm font-medium text-white"
            >
              Resume ↗
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}