"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Button from "./ui/Button";
import Logo from "./Logo";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Solutions", href: "/solutions" },
  { name: "Demo", href: "/demo" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-4rem)] max-w-4xl rounded-full glass-panel transition-all duration-500 hover:border-blue-500/30">
      <div className="px-6 relative overflow-hidden rounded-full">
        <div className="absolute inset-0 moving-glow opacity-30 mix-blend-overlay pointer-events-none rounded-full"></div>
        <div className="flex h-14 items-center justify-between relative z-10">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 group">
              <Logo />
              <span className="font-bold font-sans text-[17px] text-white tracking-tight ml-1.5 transition-colors group-hover:text-blue-400">Nexus AI</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2 relative">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-[13px] font-medium transition-all hover:text-white hover:bg-white/5 rounded-full ${
                    isActive ? "text-white bg-white/10 shadow-[0_0_10px_rgba(255,255,255,0.05)]" : "text-gray-400"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-[2px] bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center">
            <Link href="/contact">
              <button className="text-[13px] text-white font-bold px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:shadow-[0_0_25px_rgba(59,130,246,0.8)] transition-all border border-blue-500/50">
                Book the Demo
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#030305]/95 backdrop-blur-xl absolute w-full left-0 animate-in slide-in-from-top-2 duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.8)] rounded-b-[2rem] overflow-hidden mt-2 p-2">
          <div className="px-4 py-6 flex flex-col gap-2 rounded-2xl glass-panel">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold px-4 py-3 rounded-xl transition-colors ${
                  pathname === link.href ? "bg-white/10 text-white" : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-white/10 px-2">
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full h-11 rounded-full border-white/20 text-white hover:bg-white/10">Contact</Button>
              </Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full h-11 rounded-full bg-blue-600 text-white hover:bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.4)]">Book Free Strategy Call</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
