import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { PhoneOff, Clock, CalendarCheck, ShieldAlert, FileText, BellRing } from "lucide-react";
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
    <div className="flex flex-col min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="max-w-5xl mb-16 md:text-left">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-6">Our Capabilities</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-8 text-foreground">
            Solutions That Drive Revenue.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
            We don&apos;t build generic chatbots. We engineer custom voice workflows designed to solve the most expensive operational bottlenecks in private clinics.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((item, index) => (
            <FadeIn key={index} delay={index * 0.1} className="col-span-1">
              <SolutionCard 
                icon={item.icon}
                problem={item.problem}
                solution={item.solution}
                outcome={item.outcome}
                className="h-full"
              />
            </FadeIn>
          ))}
        </div>
      </div>
      
      {/* CTA Section */}
      <section className="py-24 relative border-t border-black/5">
        <div className="absolute inset-0 bg-gradient-to-b from-black/[0.02] to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 md:text-left">
          <FadeIn className="max-w-5xl">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.9] mb-8">See the ROI for your clinic.</h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl">
              Let our engineers analyze your call volume and show you exactly how much revenue an AI receptionist could recover.
            </p>
            <Link href="/contact">
              <Button size="lg" className="h-14 px-8 text-base shadow-2xl hover:scale-105 transition-transform">
                Book Free Strategy Call
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
