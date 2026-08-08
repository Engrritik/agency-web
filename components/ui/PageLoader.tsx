"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    // Only show the loader if the page takes longer than 300ms to load
    // This prevents flashing on fast networks
    const timer = setTimeout(() => {
      if (isLoading) {
        setShowLoader(true);
      }
    }, 300);

    // Simulate load completion
    const hideTimer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && showLoader && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center gap-6"
          >
            {/* Minimalist spinner + branding */}
            <div className="relative w-16 h-16">
              <motion.div
                className="absolute inset-0 border-2 border-border rounded-full"
              />
              <motion.div
                className="absolute inset-0 border-2 border-foreground border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            </div>
            <motion.span 
              className="text-sm font-medium tracking-widest uppercase text-muted-foreground"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Nexus AI
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
