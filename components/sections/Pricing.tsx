"use client";
import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section className="py-24 bg-[#F7F8FC]" id="pricing">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-tight mb-4"
          >
            Every practice is different.
          </motion.h2>
          <p className="text-lg text-muted-foreground">
            Let's design the right AI workflow for your clinic.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 border border-border shadow-premium flex flex-col md:flex-row items-center gap-12"
        >
           <div className="flex-1">
             <h3 className="text-2xl font-bold text-foreground mb-4">Enterprise-grade voice AI, sized for independent practices.</h3>
             <p className="text-muted-foreground mb-8 leading-relaxed">
               Instead of rigid pricing tiers, our team works directly with you to integrate Nexus with your specific phone system and practice management software seamlessly. 
             </p>
             <ul className="flex flex-col gap-3">
                {[
                  "Custom voice persona configuration",
                  "Deep EMR / scheduling integration",
                  "Dedicated ongoing support",
                  "Simple flat-rate monthly structure"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-green-600" />
                    </div>
                    <span className="font-medium text-slate-700">{item}</span>
                  </li>
                ))}
             </ul>
           </div>
           
           <div className="w-full md:w-[320px] bg-slate-50 border border-border rounded-2xl p-8 text-center flex flex-col pt-10">
             <p className="text-sm font-bold text-primary uppercase tracking-widest mb-6">Discovery Call</p>
             <p className="text-foreground text-[15px] font-medium mb-8">
               Speak with our engineering team to evaluate if Nexus AI is the right fit.
             </p>
             <Link href="/demo">
               <Button className="w-full" size="lg">Book a Strategy Call</Button>
             </Link>
           </div>
        </motion.div>
      </Container>
    </section>
  );
}
