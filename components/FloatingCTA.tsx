"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "./ui/Button";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the CTA after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Link href="/contact">
        <Button size="lg" className="shadow-2xl rounded-full px-6 py-6 font-semibold hover:scale-105 transition-transform bg-foreground text-background">
          Book Strategy Call
        </Button>
      </Link>
    </div>
  );
}
