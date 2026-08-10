import FadeIn from "@/components/ui/FadeIn";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import InteractiveCard from "@/components/InteractiveCard";
import { CheckCircle2, Cog, FileSearch, HardHat, Rocket, Zap } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="max-w-5xl mb-16 md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5 border border-black/5 mb-6">
            <span className="flex w-2 h-2 rounded-full bg-blue-600"></span>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground">Our Mission</p>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-[-0.04em] leading-[0.9] mb-8 text-foreground">
            Built by engineers focused on real-world automation.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl tracking-tight">
            We saw private practices losing tens of thousands of dollars a month to missed calls. So we built the ultimate solution.
          </p>
        </FadeIn>

        {/* Founder Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-16">
          <FadeIn delay={0.1} className="lg:col-span-5 relative flex flex-col items-center lg:items-start">
            <div className="w-[80%] aspect-[4/5] rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border border-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
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
        <div className="mb-24 mt-24 relative">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.02),transparent_60%)] pointer-events-none"></div>
          <FadeIn className="mb-24 md:text-left max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5 border border-black/5 mb-6">
              <span className="flex w-2 h-2 rounded-full bg-blue-600"></span>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground">The Standard</p>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.04em] mb-8 text-foreground">Why Clinics Trust Nexus AI.</h2>
          </FadeIn>
          
          <div className="relative max-w-5xl mx-auto py-10">
            {/* Tree Trunk */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-600/30 to-transparent -translate-x-1/2 hidden md:block"></div>
            
            <div className="flex flex-col gap-16 relative z-10">
              {[
                "Custom Workflows", 
                "No Hallucinated Answers", 
                "Built For Healthcare", 
                "Calendar Integration", 
                "Fast Support"
              ].map((trust, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <div key={i} className={`flex w-full md:w-1/2 ${isLeft ? 'md:pr-16 md:self-start md:justify-end' : 'md:pl-16 md:self-end justify-start'} relative group`}>
                    {/* Branch connector */}
                    <div className={`hidden md:block absolute top-1/2 w-16 h-px bg-gradient-to-r ${isLeft ? 'from-blue-600/30 to-transparent right-0' : 'from-transparent to-blue-600/30 left-0'} -translate-y-1/2`}></div>
                    
                    <FadeIn delay={i * 0.1} className="w-full sm:w-[90%] md:w-[85%]">
                      <div 
                        className="animate-float w-full"
                        style={{ animationDelay: `${i * 0.7}s` }}
                      >
                        <InteractiveCard innerClassName="p-8 flex items-center gap-4 h-full bg-white/40 backdrop-blur-xl border border-white/20">
                          <CheckCircle2 className="w-8 h-8 text-blue-600 shrink-0 relative z-10" />
                          <h3 className="font-bold text-xl relative z-10">{trust}</h3>
                        </InteractiveCard>
                      </div>
                    </FadeIn>
                  </div>
                );
              })}
            </div>
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
                    <InteractiveCard innerClassName="p-8">
                      <h3 className="text-2xl font-bold mb-3 relative z-10">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-lg relative z-10">{step.desc}</p>
                    </InteractiveCard>
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
        <FadeIn delay={0.3} className="py-24 border-t border-black/5 md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5 border border-black/5 mb-6">
            <span className="flex w-2 h-2 rounded-full bg-blue-600"></span>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground">Take Action</p>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.04em] mb-12 text-foreground">Ready to automate your clinic?</h2>
          <Link href="/contact">
            <Button size="lg" className="h-14 px-8 text-base shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:scale-[1.02] transition-transform rounded-full ">Book Free Strategy Call</Button>
          </Link>
        </FadeIn>
      </div>
    </div>
  );
}
