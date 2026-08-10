"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
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
    <motion.div 
      className="fixed bottom-6 right-6 z-40"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <Link href="/contact">
        <motion.div
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 8
          }}
          className="rounded-full"
        >
          <Button size="lg" className="shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] rounded-full px-6 py-6 font-semibold bg-blue-600 text-white hover:bg-blue-700">
            Book Strategy Call
          </Button>
        </motion.div>
      </Link>
    </motion.div>
  );
}
