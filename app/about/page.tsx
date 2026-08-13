import FadeIn, { FadeInStagger } from "@/components/ui/FadeIn";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import InteractiveCard from "@/components/InteractiveCard";
import { CheckCircle2, Cog, FileSearch, HardHat, Rocket, Zap } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInStagger staggerDelay={0.15}>
          <FadeIn useStagger className="max-w-5xl mx-auto mb-16 text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bento-card border-white/10 mb-6">
              <span className="flex w-2 h-2 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(139,92,246,0.8)]"></span>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground">Our Mission</p>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-8 text-foreground">
              Built by engineers focused on real-world automation.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl tracking-tight mx-auto">
              We saw private practices losing tens of thousands of dollars a month to missed calls. So we built the ultimate solution.
            </p>
          </FadeIn>

          {/* Founder Section */}
          <div className="flex flex-col items-center mb-16 max-w-4xl mx-auto">
            <FadeIn useStagger className="relative flex flex-col items-center mb-12">
              <div className="w-64 aspect-[4/5] rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.05)]">
                <Image 
                  src="/ritik.jpeg" 
                  alt="Nexus AI Founder" 
                  fill 
                  className="object-cover"
                  sizes="256px"
                  priority
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-8 text-center">
                <h3 className="text-2xl font-bold mb-2 tracking-tight">Ritik</h3>
                <div className="text-muted-foreground font-medium space-y-1 text-sm tracking-wide">
                  <p>Founder</p>
                  <p>Machine Learning Engineer</p>
                  <p>MCA (Artificial Intelligence & Machine Learning)</p>
                  <p>Specialized in Voice AI Systems</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn useStagger className="space-y-6 text-lg leading-relaxed text-muted-foreground text-center">
              <p>
                I started Nexus AI because I noticed a massive gap between the cutting-edge AI models being developed and the actual software being used by private clinics.
              </p>
              <p>
                Most local businesses still rely on overwhelmed front-desk staff or incredibly basic, frustrating IVR systems (&quot;press 1 for appointments, press 2 for billing&quot;). Missing a call often means missing thousands of dollars in revenue. 
              </p>
              <p className="text-foreground font-medium text-2xl py-4 tracking-tight">
                We engineer AI voice agents that are indistinguishable from a highly-trained medical receptionist.
              </p>
              <p>
                My background is in machine learning and systems engineering. I don&apos;t run a marketing agency; I run a technical automation firm. 
              </p>
              <p>
                When we partner with a clinic, we dive deep into their operational logic, mapping out exactly how they handle edge cases, scheduling rules, and emergency escalations. Then, we build a customized voice system that handles those exact workflows flawlessly, 24/7.
              </p>
              
              <div className="pt-10 mt-10 flex justify-center">
                <Link href="/contact">
                  <Button size="lg" className="h-14 px-8 text-base">Talk to the Founder</Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </FadeInStagger>

        {/* Why Clinics Trust Nexus AI */}
        <div className="mb-24 mt-24 relative flex flex-col items-center">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.02),transparent_60%)] pointer-events-none"></div>
          <FadeInStagger staggerDelay={0.1}>
            <FadeIn useStagger className="mb-24 text-center max-w-4xl mx-auto flex flex-col items-center">
              <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bento-card border-white/10 mb-6">
                <span className="flex w-2 h-2 rounded-full bg-white"></span>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground">The Standard</p>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-8 text-foreground">Why Clinics Trust Nexus AI.</h2>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto py-10 relative z-10">
              {[
                "Custom Workflows", 
                "No Hallucinated Answers", 
                "Built For Healthcare", 
                "Calendar Integration", 
                "Fast Support"
              ].map((trust, i) => {
                return (
                  <FadeIn useStagger key={i} className="w-full h-full">
                    <InteractiveCard innerClassName="p-8 flex flex-col items-center justify-center gap-4 h-full bento-inner border-white/10 text-center">
                      <CheckCircle2 className="w-8 h-8 text-white/50 shrink-0 relative z-10" />
                      <h3 className="font-bold text-xl relative z-10 tracking-tight">{trust}</h3>
                    </InteractiveCard>
                  </FadeIn>
                );
              })}
            </div>
          </FadeInStagger>
        </div>

        {/* Our Process - Timeline */}
        <div className="mb-20">
          <FadeInStagger staggerDelay={0.15}>
            <FadeIn useStagger className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">Our Engineering Process</h2>
              <p className="text-xl text-muted-foreground">From initial discovery to a fully autonomous system.</p>
            </FadeIn>
            
            <div className="max-w-4xl mx-auto relative">
              <div className="absolute left-[39px] md:left-1/2 top-4 bottom-4 w-px bg-white/10 md:-translate-x-1/2 hidden md:block"></div>
              
              <div className="space-y-12">
                {[
                  { title: "Discovery", icon: <FileSearch />, desc: "We learn your business rules, objections, and edge cases." },
                  { title: "Workflow Mapping", icon: <Cog />, desc: "We design the conversational logic and API integrations." },
                  { title: "AI Development", icon: <HardHat />, desc: "Engineering the custom voice model and connecting to your CRM." },
                  { title: "Testing", icon: <Zap />, desc: "Rigorous internal QA to ensure zero hallucinations." },
                  { title: "Deployment", icon: <Rocket />, desc: "Going live on a dedicated number or SIP forwarding." },
                  { title: "Optimization", icon: <CheckCircle2 />, desc: "Continuous improvement based on real call logs." },
                ].map((step, i) => (
                  <FadeIn useStagger key={i} className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-16 group">
                    <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:text-right md:pr-16' : 'md:order-2 md:pl-16'}`}>
                      <InteractiveCard innerClassName="p-8 text-center flex flex-col items-center bento-inner border-white/10">
                        <h3 className="text-2xl font-bold mb-3 relative z-10 tracking-tight">{step.title}</h3>
                        <p className="text-muted-foreground leading-relaxed text-lg relative z-10">{step.desc}</p>
                      </InteractiveCard>
                    </div>
                    <div className="hidden md:flex absolute left-1/2 w-16 h-16 rounded-full bg-black border border-white/20 text-white items-center justify-center -translate-x-1/2 z-10 shadow-[0_0_20px_rgba(255,255,255,0.05)] group-hover:border-white group-hover:scale-110 transition-all">
                      {step.icon}
                    </div>
                    <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:order-2 md:pl-16 hidden md:block' : 'md:pr-16 hidden md:block'}`}></div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeInStagger>
        </div>

        {/* CTA */}
        <FadeInStagger staggerDelay={0.15}>
          <FadeIn useStagger className="py-24 border-t border-white/10 text-center flex flex-col items-center">
            <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bento-card border-white/10 mb-6">
              <span className="flex w-2 h-2 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(139,92,246,0.8)]"></span>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground">Take Action</p>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-12 text-foreground">Ready to automate your clinic?</h2>
            <Link href="/contact">
              <Button size="lg" className="h-14 px-8 text-base transition-transform rounded-full">
                Book Free Strategy Call
              </Button>
            </Link>
          </FadeIn>
        </FadeInStagger>
      </div>
    </div>
  );
}
