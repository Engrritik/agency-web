"use client";
import * as React from "react";
import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";

export default function Security() {
  return (
    <section className="py-24 lg:py-32 bg-[#050505] text-white overflow-hidden relative">
      {/* Abstract Network Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gridPattern)" />
        </svg>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 blur-[100px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-violet/20 blur-[100px] rounded-full" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-8"
          >
            Reliable conversations.<br />
            <span className="text-slate-400">Responsible automation.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 max-w-xl"
          >
            Engineered for high-volume service businesses where data privacy and call reliability are mission critical.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Patient Information Protection",
              desc: "Nexus AI handles calls with the same standard of care and privacy required for healthcare communications."
            },
            {
              title: "Secure Infrastructure",
              desc: "Built on enterprise-grade architecture ensuring conversations remain entirely confidential and encrypted."
            },
            {
              title: "Reliable Call Handling",
              desc: "No downtime, no dropped calls. Nexus is online 24/7/365, delivering consistent service quality on every ring."
            },
            {
              title: "Controlled Escalation",
              desc: "Safe by design. The AI knows its limits and instantly routes critical or unrecognized scenarios to human staff."
            }
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
            >
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                {item.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed pl-5">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
