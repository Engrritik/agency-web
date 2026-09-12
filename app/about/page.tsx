import FadeIn, { FadeInStagger } from "@/components/ui/FadeIn";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import InteractiveCard from "@/components/InteractiveCard";
import { CheckCircle2, Cog, FileSearch, HardHat, Rocket, Zap, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen relative z-10 overflow-x-hidden md:overflow-x-visible">
      
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen animate-aurora"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[150px] mix-blend-screen animate-aurora" style={{ animationDelay: '-5s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <FadeInStagger staggerDelay={0.15}>
          <FadeIn className="max-w-5xl mx-auto mb-16 text-center flex flex-col items-center mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-6 hover:bg-white/5 transition-colors">
              <span className="flex w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] animate-pulse-slow"></span>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-300">Our Mission</p>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[7.5vw] font-black tracking-tight leading-[1] mb-8 text-white max-w-4xl mx-auto">
              Built by engineers focused on <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-blue-500">real-world automation.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl font-medium mx-auto tracking-tight">
              We saw private practices losing tens of thousands of dollars a month to missed calls. So we built the ultimate solution.
            </p>
          </FadeIn>

          {/* Founder Section */}
          <div className="flex flex-col items-center mb-24 max-w-4xl mx-auto relative">
            <FadeIn useStagger className="relative flex flex-col items-center mb-12">
              <div className="w-64 aspect-[4/5] rounded-[2rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 glass-panel p-2 shadow-[0_0_50px_rgba(3,3,5,0.8)] hover-glow">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image 
                    src="/ritik.jpeg" 
                    alt="Nexus AI Founder" 
                    fill 
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="256px"
                    priority
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="mt-8 text-center bg-white/5 backdrop-blur-xl border border-white/10 px-8 py-6 rounded-3xl inline-flex flex-col items-center shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
                <h3 className="text-3xl font-black mb-3 tracking-tight text-white">Ritik</h3>
                <div className="flex flex-col items-center gap-1.5 text-gray-400 font-medium text-sm tracking-wide">
                  <div className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-bold uppercase border border-blue-500/20 mb-2">Founder</div>
                  <p>Machine Learning Engineer</p>
                  <p>MCA (Artificial Intelligence & Machine Learning)</p>
                  <p className="text-gray-300">Specialized in Voice AI Systems</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn useStagger className="space-y-8 text-xl leading-relaxed text-gray-400 text-center max-w-3xl font-medium mx-auto glass-panel p-8 md:p-12 rounded-[2.5rem]">
              <p>
                I started Nexus AI because I noticed a massive gap between the cutting-edge AI models being developed and the actual software being used by private clinics.
              </p>
              <p>
                Most local businesses still rely on overwhelmed front-desk staff or incredibly basic, frustrating IVR systems (&quot;press 1 for appointments, press 2 for billing&quot;). Missing a call often means missing thousands of dollars in revenue. 
              </p>
              <p className="text-white font-bold text-2xl md:text-3xl py-2 tracking-tight">
                <span className="text-blue-400">We engineer AI voice agents</span> that are indistinguishable from a highly-trained medical receptionist.
              </p>
              <p>
                My background is in machine learning and systems engineering. I don&apos;t run a marketing agency; I run a technical automation firm. 
              </p>
              <p>
                When we partner with a clinic, we dive deep into their operational logic, mapping out exactly how they handle edge cases, scheduling rules, and emergency escalations. Then, we build a customized voice system that handles those exact workflows flawlessly, 24/7.
              </p>
              
              <div className="pt-6 mt-4 flex justify-center">
                <Link href="/contact" className="inline-block">
                  <Button size="lg" className="h-14 px-8 text-base font-bold bg-white text-black hover:bg-gray-200 rounded-full flex items-center gap-3">
                    Talk to the Founder <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </FadeInStagger>

        {/* Why Clinics Trust Nexus AI */}
        <div className="mb-32 mt-10 relative flex flex-col items-center">
          <FadeInStagger staggerDelay={0.1}>
            <FadeIn className="mb-16 text-center max-w-4xl mx-auto flex flex-col items-center">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-white">Why Clinics Trust Nexus AI.</h2>
              <p className="text-lg text-gray-400">Enterprise grade reliability out of the box.</p>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto py-4 relative z-10">
              {[
                "Custom Clinical Workflows", 
                "No Hallucinated Answers", 
                "Built For Healthcare", 
                "Calendar Integration", 
                "Fast Ongoing Support",
                "Scalable Architecture"
              ].map((trust, i) => {
                return (
                  <FadeIn useStagger key={i} className="w-full h-full">
                    <InteractiveCard innerClassName="p-8 flex flex-col items-center justify-center gap-6 h-full glass-panel hover-glow border-white/10 text-center hover:bg-white/5 transition-colors">
                      <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-2 relative z-10 transition-transform group-hover:scale-110 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                         <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg relative z-10 tracking-tight text-white">{trust}</h3>
                    </InteractiveCard>
                  </FadeIn>
                );
              })}
            </div>
          </FadeInStagger>
        </div>

        {/* Our Process - Timeline */}
        <div className="mb-24">
          <FadeInStagger staggerDelay={0.15}>
            <FadeIn className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-white">Our Engineering Process</h2>
              <p className="text-xl text-gray-400">From initial discovery to a fully autonomous system.</p>
            </FadeIn>
            
            <div className="max-w-5xl mx-auto relative">
              <div className="absolute left-[39px] md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0 md:-translate-x-1/2 hidden md:block"></div>
              
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
                      <InteractiveCard innerClassName={`p-8 ${i % 2 === 0 ? 'md:items-end' : 'md:items-start'} flex flex-col items-center glass-panel border-white/10 hover-glow`}>
                        <h3 className="text-2xl font-bold mb-3 relative z-10 tracking-tight text-white">{step.title}</h3>
                        <p className="text-gray-400 font-medium leading-relaxed text-lg relative z-10 text-center md:text-left">{step.desc}</p>
                      </InteractiveCard>
                    </div>
                    <div className="hidden md:flex absolute left-1/2 w-14 h-14 rounded-full bg-[#06070a] border-2 border-blue-500/50 text-blue-400 items-center justify-center -translate-x-1/2 z-10 shadow-[0_0_20px_rgba(59,130,246,0.3)] group-hover:border-blue-400 group-hover:bg-blue-500/10 group-hover:scale-110 transition-all">
                      {step.icon}
                    </div>
                    <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:order-2 md:pl-16 hidden md:block' : 'md:pr-16 hidden md:block'}`}></div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeInStagger>
        </div>
      </div>
        
      {/* CTA section matching the others */}
      <section className="py-24 relative border-t border-white/5 bg-[#06070a]/80 backdrop-blur-3xl">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 md:text-center">
          <FadeInStagger staggerDelay={0.15} className="flex flex-col items-center">
            <FadeIn className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-8 text-white">Ready to automate your clinic?</h2>
              <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
                Book a call with our engineers and we&apos;ll build a live prototype tailored to your specific clinical workflows.
              </p>
              <Link href="/contact" className="inline-block">
                <Button size="lg" className="h-16 px-10 text-lg font-bold rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all flex items-center justify-center gap-3">
                  Book Free Strategy Call <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </FadeIn>
          </FadeInStagger>
        </div>
      </section>
    </div>
  );
}
