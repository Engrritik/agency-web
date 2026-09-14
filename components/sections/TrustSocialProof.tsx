"use client";

import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";

export default function TrustSocialProof() {
  const capabilities = [
    "24/7 Call Handling",
    "Smart Scheduling",
    "Patient FAQs",
    "Call Escalation",
    "After-Hours Coverage"
  ];

  return (
    <section className="py-12 border-b border-border/50 bg-white">
      <Container>
        <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-8">
          Built for modern dental practices
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center gap-2"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
              <span className="text-sm md:text-[15px] font-medium text-foreground/80">{cap}</span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
