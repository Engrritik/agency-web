import FadeIn, { FadeInStagger } from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { PhoneOff, Clock, CalendarCheck, ShieldAlert, FileText, BellRing, ArrowRight } from "lucide-react";
import SolutionCard from "@/components/SolutionCard";

export default function Solutions() {
  const solutions = [
    {
      icon: <PhoneOff className="w-6 h-6" />,
      problem: "Missed Calls",
      solution: "AI answers instantly on the first ring.",
      outcome: "More booked appointments."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      problem: "After-Hours Inquiries",
      solution: "24/7 intelligent answering and booking.",
      outcome: "Zero lost patient leads."
    },
    {
      icon: <CalendarCheck className="w-6 h-6" />,
      problem: "Complex Scheduling",
      solution: "Direct calendar sync via secure API.",
      outcome: "Eliminated double-booking."
    },
    {
      icon: <ShieldAlert className="w-6 h-6" />,
      problem: "Emergency Handling",
      solution: "Instant transfer to human priority lines.",
      outcome: "Better patient care & safety."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      problem: "Routine Insurance Questions",
      solution: "Answers FAQs based on your exact policies.",
      outcome: "Saved front-desk staff time."
    },
    {
      icon: <BellRing className="w-6 h-6" />,
      problem: "Endless Follow-ups",
      solution: "Automated pre-appointment confirmation.",
      outcome: "Significantly reduced no-shows."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen relative z-10 overflow-x-hidden md:overflow-x-visible">
      <div className="flex flex-col container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <FadeInStagger staggerDelay={0.1}>
          <FadeIn className="max-w-5xl mb-16 md:text-left mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-6 transition-colors hover:bg-white/5">
              <span className="flex w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] animate-pulse-slow"></span>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-300">Our Capabilities</p>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1] mb-8 text-white">
              Solutions That <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 animate-gradient-shift">Drive Revenue.</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-400 leading-relaxed max-w-2xl font-medium">
              We don&apos;t build generic chatbots. We engineer custom voice workflows designed to solve the most expensive operational bottlenecks in private clinics.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 max-w-7xl">
            {solutions.map((item, index) => (
              <FadeIn useStagger key={index} className="col-span-1 h-full">
                <SolutionCard 
                  icon={item.icon}
                  problem={item.problem}
                  solution={item.solution}
                  outcome={item.outcome}
                  className="h-full w-full"
                />
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>
      </div>
      
      {/* CTA Section */}
      <section className="py-24 relative border-t border-white/5 bg-[#06070a]/80 backdrop-blur-3xl">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 md:text-left">
          <FadeInStagger staggerDelay={0.15}>
            <FadeIn className="max-w-5xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 mb-6 bg-white/5">
                <span className="flex w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]"></span>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white">Get Started</p>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1] mb-8 text-white">See the ROI for your clinic.</h2>
              <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-3xl font-medium">
                Let our engineers analyze your call volume and show you exactly how much revenue an AI receptionist could recover.
              </p>
              <Link href="/contact" className="inline-block">
                <Button size="lg" className="h-16 px-10 text-lg font-bold rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all flex items-center justify-center gap-3">
                  Book Strategy Call <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </FadeIn>
          </FadeInStagger>
        </div>
      </section>
    </div>
  );
}
