"use client";
import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-32 bg-[#050505] overflow-hidden">
      {/* Animated Gradients inside Dark Background */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary/30 to-violet/30 blur-[120px] rounded-full pointer-events-none" 
        />
      </div>

      <Container className="relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="max-w-3xl mx-auto flex flex-col items-center"
        >
          <div className="w-16 h-16 bg-white/10 rounded-2xl border border-white/20 flex items-center justify-center mb-8 backdrop-blur-md">
            <Phone className="text-white" size={28} />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-tight mb-6">
            Your next missed call could be your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">next patient.</span>
          </h2>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-xl mx-auto mb-10 font-light leading-relaxed">
            See what Nexus AI sounds like when a real patient calls your practice.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
            <Link href="/demo" className="w-full sm:w-auto">
              <Button size="lg" className="w-full bg-white text-[#050505] hover:bg-slate-200 border-none shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]">
                Book a Live Demo
              </Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="ghost" size="lg" className="w-full text-white hover:bg-white/10 border border-white/20">
                Talk to Nexus <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
