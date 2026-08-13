"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
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
    <header className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-4rem)] max-w-4xl rounded-full neu-flat transition-all duration-500">
      <div className="px-6">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-5 h-5 flex items-end gap-[2px]">
                <div className="w-1 h-3 bg-foreground rounded-full"></div>
                <div className="w-1 h-5 bg-foreground rounded-full"></div>
                <div className="w-1 h-2 bg-foreground rounded-full"></div>
              </div>
              <span className="font-bold font-sans text-[17px] text-foreground tracking-tight ml-1.5">Nexus AI</span>
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
                  className={`relative px-4 py-2 text-[13px] font-medium transition-colors hover:text-foreground rounded-full ${
                    isActive ? "text-foreground neu-pressed" : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center">
            <Link href="/contact">
              <button className="text-[13px] font-medium px-5 py-2 rounded-full neu-flat hover:neu-pressed hover-glow transition-all">
                Book the Demo Call
              </button>
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
