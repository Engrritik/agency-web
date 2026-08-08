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
    <div className="flex flex-col min-h-screen pt-48 pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="max-w-4xl mb-32 mx-auto text-center">
          <h1 className="text-6xl md:text-7xl lg:text-[7rem] font-bold tracking-tighter leading-[0.9] mb-12 text-foreground">
            Solutions That Drive Revenue
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We don&apos;t build generic chatbots. We engineer custom voice workflows designed to solve the most expensive operational bottlenecks in private clinics.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
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
      <section className="py-48 bg-foreground text-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn className="max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">See the ROI for your clinic</h2>
            <p className="text-2xl text-gray-400 mb-12 leading-relaxed">
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
