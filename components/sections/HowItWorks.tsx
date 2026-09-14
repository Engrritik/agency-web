"use client";
import { motion, useScroll, useTransform } from "motion/react";
import * as React from "react";
import { Container } from "@/components/ui/Container";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Answer",
      desc: "Nexus picks up immediately.",
    },
    {
      num: "02",
      title: "Understand",
      desc: "It understands what the patient needs.",
    },
    {
      num: "03",
      title: "Act",
      desc: "It answers questions, schedules, or escalates.",
    },
    {
      num: "04",
      title: "Update",
      desc: "Your team stays informed.",
    },
  ];

  return (
    <section className="py-24 bg-white" id="how-it-works">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-tight"
          >
            From first ring to booked appointment.
          </motion.h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-slate-100 -translate-y-1/2 hidden md:block" />
          
          <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="flex flex-col items-center text-center relative"
              >
                <div className="w-16 h-16 rounded-2xl bg-white border border-border shadow-premium flex items-center justify-center mb-6 relative group">
                  <div className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="text-xl font-bold text-primary">{step.num}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground w-48">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
