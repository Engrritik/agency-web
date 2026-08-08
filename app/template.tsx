"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ y: 15, opacity: 0, filter: "blur(4px)" }}
      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.6 }}
      className="flex-1 w-full"
    >
      {children}
    </motion.div>
  );
}
