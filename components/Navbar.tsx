"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
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
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 group">
              <Image src="/mainlogo.png" alt="Nexus AI Logo" width={100} height={100} className="h-8 w-auto object-contain group-hover:opacity-80 transition-opacity" />
              <span className="text-xl font-bold tracking-tight">Nexus AI</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-foreground ${
                  pathname === link.href ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/contact">
              <Button variant="outline" size="sm">Contact</Button>
            </Link>
            <Link href="/#booking-form">
              <Button size="sm">Book a Demo</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-medium px-2 py-1 ${
                  pathname === link.href ? "text-foreground" : "text-muted-foreground"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border">
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full">Contact</Button>
              </Link>
              <Link href="/#booking-form" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full">Book a Demo</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
