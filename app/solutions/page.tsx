import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { Stethoscope, Zap, Scale, Home, CheckCircle2 } from "lucide-react";

export default function Solutions() {
  const industries = [
    {
      id: "dental",
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Dental Clinics",
      description: "Automate your front desk with an AI that understands dental terminology, scheduling rules, and insurance workflows.",
      features: [
        "New patient intake and appointment booking",
        "Rescheduling and cancellation handling",
        "Basic insurance acceptance inquiries",
        "Emergency triage and immediate staff routing",
        "After-hours intelligent answering"
      ]
    },
    {
      id: "med-spa",
      icon: <Zap className="w-8 h-8" />,
      title: "Med Spas",
      description: "Provide a luxury, white-glove booking experience over the phone without tying up your staff.",
      features: [
        "Consultation and treatment booking",
        "Lead qualification and service explanations",
        "Pre-appointment instructions",
        "Automated follow-ups and reminders",
        "Package pricing inquiries"
      ]
    },
    {
      id: "law-firms",
      icon: <Scale className="w-8 h-8" />,
      title: "Law Firms",
      description: "Professional, empathetic, and strictly confidential AI intake for legal practices of all sizes.",
      features: [
        "24/7 automated client intake",
        "Initial case type qualification",
        "Consultation scheduling",
        "Urgent matter routing to attorneys",
        "Information collection and CRM logging"
      ]
    },
    {
      id: "home-services",
      icon: <Home className="w-8 h-8" />,
      title: "Home Services",
      description: "Never miss a lead when you're out on a job. Capture every opportunity instantly.",
      features: [
        "Service request and quote scheduling",
        "Emergency dispatch routing (e.g., plumbing leaks)",
        "Service area qualification",
        "Basic pricing and timeline estimates",
        "Technician ETA updates"
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="max-w-3xl mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Solutions Built for Your Industry
          </h1>
          <p className="text-xl text-muted-foreground">
            Nexus AI isn't a one-size-fits-all chatbot. We build custom voice logic tailored specifically to how your vertical operates.
          </p>
        </FadeIn>

        <div className="space-y-32">
          {industries.map((industry, index) => (
            <div key={industry.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <FadeIn delay={0.1} className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="w-16 h-16 rounded-xl bg-foreground text-background flex items-center justify-center mb-8">
                  {industry.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">{industry.title}</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {industry.description}
                </p>
                <ul className="space-y-4">
                  {industry.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 shrink-0 mt-0.5 text-foreground" />
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <Link href="/contact">
                    <Button variant="outline">Discuss Your Use Case</Button>
                  </Link>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.2} className={`relative h-[400px] rounded-2xl border border-border bg-muted/30 p-8 flex flex-col justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                      <Zap className="w-6 h-6 opacity-50" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">AI Logic Module</div>
                      <div className="text-sm text-muted-foreground">Active Context: {industry.title}</div>
                    </div>
                  </div>
                  <div className="space-y-3 font-mono text-sm text-muted-foreground">
                    <div>{`if (intent === 'emergency') {`}</div>
                    <div className="pl-4 text-foreground font-medium">{`  transfer_to_human({ priority: 'high' });`}</div>
                    <div>{`} else if (intent === 'booking') {`}</div>
                    <div className="pl-4 text-foreground font-medium">{`  check_availability();`}</div>
                    <div className="pl-4 text-foreground font-medium">{`  schedule_appointment();`}</div>
                    <div>{`}`}</div>
                  </div>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA Section */}
      <section className="mt-32 py-24 bg-foreground text-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Don't see your industry?</h2>
            <p className="text-lg text-gray-400 mb-10">
              Our AI engine is fully customizable. We can build custom voice workflows for any service-based business.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                Talk to an Engineer
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
