"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import HeroProduct from "./HeroProduct";
import { Container } from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden lg:pt-48 lg:pb-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-white">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>
         {/* Subtle gradient blob */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6"
            >
              <Badge>AI receptionist built for modern dental practices</Badge>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[42px] leading-[1.1] sm:text-[56px] lg:text-[72px] xl:text-[88px] font-bold tracking-[-0.04em] text-foreground mb-6"
            >
              Your Practice <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-primary to-violet bg-clip-text text-transparent">
                Never Misses
              </span> <br className="hidden sm:block" />
              A Call Again.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl lg:max-w-lg leading-relaxed font-light"
            >
              An intelligent AI receptionist that answers calls, handles patient questions, books appointments, and escalates urgent calls — 24/7.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Link href="/demo" className="w-full sm:w-auto">
                <Button size="lg" className="w-full">
                  Book a Live Demo
                </Button>
              </Link>
              <Link href="/#how-it-works" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="w-full">
                  Talk to Nexus
                </Button>
              </Link>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 text-[13px] font-medium text-muted-foreground flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-[pulse_2s_ease-in-out_infinite]" />
              See exactly how Nexus handles a real patient call.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:pl-10"
          >
            <HeroProduct />
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
