import FadeIn from "@/components/ui/FadeIn";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { CheckCircle2, Cog, FileSearch, HardHat, Rocket, Zap } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen pt-48 pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="max-w-5xl mb-32 text-center mx-auto">
          <h1 className="text-6xl md:text-7xl lg:text-[7rem] font-bold tracking-tighter leading-[0.9] mb-12 text-foreground">
            Built by engineers focused on real-world automation.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We don&apos;t build toys. We engineer robust AI systems that solve actual operational bottlenecks for local clinics.
          </p>
        </FadeIn>

        {/* Founder Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
          <FadeIn delay={0.1} className="lg:col-span-5 relative flex flex-col items-center lg:items-start">
            <div className="w-[80%] aspect-[4/5] rounded-[2rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border border-border shadow-xl">
              <Image 
                src="/ritik.jpeg" 
                alt="Nexus AI Founder" 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 80vw, 40vw"
                priority
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-8 text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-2">Ritik</h3>
              <div className="text-muted-foreground font-medium space-y-1">
                <p>Founder</p>
                <p>Machine Learning Engineer</p>
                <p>MCA (Artificial Intelligence & Machine Learning)</p>
                <p>Specialized in Voice AI Systems</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="lg:col-span-7 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              I started Nexus AI because I noticed a massive gap between the cutting-edge AI models being developed and the actual software being used by private clinics.
            </p>
            <p>
              Most local businesses still rely on overwhelmed front-desk staff or incredibly basic, frustrating IVR systems (&quot;press 1 for appointments, press 2 for billing&quot;). Missing a call often means missing thousands of dollars in revenue. 
            </p>
            <p className="text-foreground font-medium text-2xl py-4">
              We engineer AI voice agents that are indistinguishable from a highly-trained medical receptionist.
            </p>
            <p>
              My background is in machine learning and systems engineering. I don&apos;t run a marketing agency; I run a technical automation firm. 
            </p>
            <p>
              When we partner with a clinic, we dive deep into their operational logic, mapping out exactly how they handle edge cases, scheduling rules, and emergency escalations. Then, we build a customized voice system that handles those exact workflows flawlessly, 24/7.
            </p>
            
            <div className="pt-10 mt-10">
              <Link href="/contact">
                <Button size="lg" className="h-14 px-8 text-base">Talk to the Founder</Button>
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* Why Clinics Trust Nexus AI */}
        <div className="mb-48 mt-32">
          <FadeIn className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">Why Clinics Trust Nexus AI</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Custom Workflows", 
              "No Hallucinated Answers", 
              "Built For Healthcare", 
              "Calendar Integration", 
              "Fast Support"
            ].map((trust, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-2xl p-8 flex items-center gap-4 hover-card shadow-sm h-full">
                  <CheckCircle2 className="w-8 h-8 text-foreground shrink-0" />
                  <h3 className="font-bold text-xl">{trust}</h3>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Our Process - Timeline */}
        <div className="mb-20">
          <FadeIn className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Our Engineering Process</h2>
            <p className="text-xl text-muted-foreground">From initial discovery to a fully autonomous system.</p>
          </FadeIn>
          
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-[39px] md:left-1/2 top-4 bottom-4 w-1 bg-border md:-translate-x-1/2 rounded-full hidden md:block"></div>
            
            <div className="space-y-12">
              {[
                { title: "Discovery", icon: <FileSearch />, desc: "We learn your business rules, objections, and edge cases." },
                { title: "Workflow Mapping", icon: <Cog />, desc: "We design the conversational logic and API integrations." },
                { title: "AI Development", icon: <HardHat />, desc: "Engineering the custom voice model and connecting to your CRM." },
                { title: "Testing", icon: <Zap />, desc: "Rigorous internal QA to ensure zero hallucinations." },
                { title: "Deployment", icon: <Rocket />, desc: "Going live on a dedicated number or SIP forwarding." },
                { title: "Optimization", icon: <CheckCircle2 />, desc: "Continuous improvement based on real call logs." },
              ].map((step, i) => (
                <FadeIn key={i} delay={i * 0.15} className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-16 group">
                  <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:text-right md:pr-16' : 'md:order-2 md:pl-16'}`}>
                    <div className="bg-card border border-border rounded-2xl p-8 shadow-sm group-hover:border-foreground/30 transition-colors">
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">{step.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex absolute left-1/2 w-20 h-20 rounded-full bg-background border-4 border-border text-foreground items-center justify-center -translate-x-1/2 z-10 shadow-sm group-hover:border-foreground group-hover:scale-110 transition-all">
                    {step.icon}
                  </div>
                  <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:order-2 md:pl-16 hidden md:block' : 'md:pr-16 hidden md:block'}`}></div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <FadeIn delay={0.3} className="py-48 border-t border-white/10 text-center">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12">Ready to automate your clinic?</h2>
          <Link href="/contact">
            <Button size="lg" className="h-14 px-8 text-base shadow-xl hover:scale-105 transition-transform">Book Free Strategy Call</Button>
          </Link>
        </FadeIn>
      </div>
    </div>
  );
}
