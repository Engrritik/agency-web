"use client";
import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Container } from "@/components/ui/Container";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIdx, setOpenIdx] = React.useState<number | null>(0);

  const faqs = [
    { q: "Does Nexus replace my front desk?", a: "No. Nexus is designed to empower your front desk, not replace them. It handles the repetitive inbound calls so your human staff can focus on the patients physically in the clinic." },
    { q: "Can Nexus handle calls after hours?", a: "Yes. Nexus provides 24/7 coverage. Whether it's 2 PM on a busy Tuesday or 3 AM on a Sunday, your patients can always get answers and book appointments." },
    { q: "Can patients speak naturally?", a: "Absolutely. Nexus uses advanced conversational AI to understand interruptions, nuances, and natural speech, just like a human receptionist would." },
    { q: "Can Nexus schedule appointments?", a: "Yes. It securely integrates with your practice management software to check live availability and book appointments in real-time without double-booking." },
    { q: "What happens with urgent calls?", a: "Nexus is trained to detect clinical urgency. If a patient indicates a dental emergency, the AI immediately escalates the call to your on-call staff or specified emergency number." },
    { q: "Can Nexus answer practice-specific questions?", a: "Yes. The system is customized with your practice's specific knowledge base, including accepted insurances, location details, pre-op instructions, and more." },
    { q: "How does Nexus integrate with my workflow?", a: "Setup is simple. We handle the technical integration with your existing phone tree and scheduling software, meaning you don't have to change your core systems." },
  ];

  return (
    <section className="py-24 bg-white" id="faq">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-tight mb-4"
            >
              Frequently asked questions
            </motion.h2>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`border rounded-2xl overflow-hidden transition-colors ${isOpen ? 'border-primary/30 bg-primary/5' : 'border-border bg-white hover:border-border/80'}`}
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-foreground pr-8">{faq.q}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="shrink-0"
                    >
                      <ChevronDown size={20} className={isOpen ? "text-primary" : "text-muted-foreground"} />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
