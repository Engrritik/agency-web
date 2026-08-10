"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0, filter: "blur(5px)" }}
      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      transition={{ type: "spring", stiffness: 200, damping: 20, duration: 0.6 }}
      className="flex-1 w-full"
    >
      {children}
    </motion.div>
  );
}
