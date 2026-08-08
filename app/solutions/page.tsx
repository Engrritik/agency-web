import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { PhoneOff, Clock, CalendarCheck, ShieldAlert, FileText, BellRing } from "lucide-react";
import BentoCard from "@/components/BentoCard";

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
          {solutions.map((item, index) => {
            // Create a bento box layout by spanning specific cards
            // Card 0 and Card 3 span 2 columns on large screens
            const isLargeCard = index === 0 || index === 3;
            return (
              <FadeIn key={index} delay={index * 0.1} className={isLargeCard ? "lg:col-span-2" : "col-span-1"}>
                <BentoCard 
                  icon={item.icon}
                  problem={item.problem}
                  solution={item.solution}
                  outcome={item.outcome}
                  className="h-full"
                />
              </FadeIn>
            );
          })}
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
