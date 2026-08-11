"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Button from "./ui/Button";

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
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl rounded-full border border-black/5 bg-white/70 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.02)] transition-all duration-500">
      <div className="px-5 lg:px-6">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 group">
              <Image src="/favicon.ico" alt="Nexus AI Logo" width={28} height={28} className="h-6 sm:h-7 w-auto object-contain group-hover:opacity-80 transition-opacity" />
              <span className="font-bold font-sans text-lg text-foreground tracking-tight ml-1.5">Nexus AI</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 relative">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-1 py-1.5 text-sm font-medium transition-colors hover:text-foreground ${
                    isActive ? "text-foreground font-semibold" : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute left-0 right-0 -bottom-[15px] h-[2px] bg-foreground"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/contact">
              <Button variant="outline" size="sm" className="hidden lg:flex rounded-full border-black/10 hover:bg-black/5">Contact</Button>
            </Link>
            <Link href="/contact">
              <Button size="sm" className="rounded-full">Book Free Strategy Call</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-white/95 backdrop-blur-xl absolute w-full left-0 animate-in slide-in-from-top-2 duration-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-b-[2rem] overflow-hidden">
          <div className="px-4 py-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold px-4 py-3 rounded-xl transition-colors ${
                  pathname === link.href ? "bg-black/5 text-foreground" : "text-muted-foreground hover:bg-black/5"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-black/5 px-2">
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full h-11 rounded-full">Contact</Button>
              </Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full h-11 rounded-full">Book Free Strategy Call</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
