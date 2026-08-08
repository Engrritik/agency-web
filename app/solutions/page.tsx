import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { PhoneOff, Clock, CalendarCheck, ShieldAlert, FileText, BellRing, ArrowRight } from "lucide-react";

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
    <div className="flex flex-col min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="max-w-3xl mb-24 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
            Solutions That Drive Revenue
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We don&apos;t build generic chatbots. We engineer custom voice workflows designed to solve the most expensive operational bottlenecks in private clinics.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {solutions.map((item, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-card border border-border rounded-3xl p-8 flex flex-col h-full hover-card shadow-sm">
                <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center text-foreground mb-8">
                  {item.icon}
                </div>
                
                <div className="space-y-6 flex-grow">
                  <div>
                    <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">Problem</h3>
                    <p className="text-xl font-semibold text-foreground">{item.problem}</p>
                  </div>
                  
                  <div className="border-t border-border/50 pt-6">
                    <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">Solution</h3>
                    <p className="text-lg text-foreground leading-relaxed">{item.solution}</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border/50">
                  <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">Business Outcome</h3>
                  <div className="flex items-center gap-2 text-foreground font-bold text-lg">
                    <ArrowRight className="w-5 h-5" />
                    {item.outcome}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
      
      {/* CTA Section */}
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">See the ROI for your clinic</h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              Let our engineers analyze your call volume and show you exactly how much revenue an AI receptionist could recover.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90 h-14 px-8 text-base">
                Book Free Strategy Call
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
