"use client";

import * as React from "react";
import Link from "next/link";
import { useScroll, motion, useTransform, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const paddingY = useTransform(scrollY, [0, 50], ["1.25rem", "0.75rem"]);
  const bgOpacity = useTransform(scrollY, [0, 50], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.9)"]);
  const blurValue = useTransform(scrollY, [0, 50], ["blur(0px)", "blur(12px)"]);
  const borderOpacity = useTransform(scrollY, [0, 50], ["rgba(15, 23, 42, 0)", "rgba(15, 23, 42, 0.08)"]);

  const navLinks = [
    { name: "Product", href: "/solutions/ai-receptionist" },
    { name: "Solutions", href: "/solutions" },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "Pricing", href: "/#pricing" },
    { name: "Resources", href: "/about" },
  ];

  return (
    <>
      <motion.header
        style={{
          paddingTop: paddingY,
          paddingBottom: paddingY,
          backgroundColor: bgOpacity,
          backdropFilter: blurValue,
          borderBottomColor: borderOpacity,
          borderBottomWidth: "1px",
        }}
        className="fixed top-0 z-50 w-full"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-8 lg:px-12">
          
          <Link href="/" className="flex items-center gap-2 relative z-50">
            <span className="font-bold text-xl tracking-tight text-primary-deep">NEXUS AI</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Log in
            </Link>
            <Link href="/demo">
              <Button size="sm">Book a Demo</Button>
            </Link>
          </div>

          <button
            className="md:hidden text-foreground p-2 -mr-2 relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden flex flex-col gap-6"
          >
            <nav className="flex flex-col gap-6 text-lg font-medium">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="text-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-border my-2" />
              <Link href="/login" className="text-foreground" onClick={() => setIsMobileMenuOpen(false)}>
                Log in
              </Link>
              <Link href="/demo" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full">Book a Demo</Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
