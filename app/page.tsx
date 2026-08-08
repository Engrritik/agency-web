import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Calendar, PhoneCall, ShieldCheck, CheckCircle2, Activity, Clock, Zap, Stethoscope } from "lucide-react";
import BookingForm from "@/components/BookingForm";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import FAQItem from "@/components/FAQItem";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] pointer-events-none mix-blend-overlay"></div>
        
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-foreground/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <FadeIn className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-bold tracking-tight leading-[1.05] mb-8">
              Never Miss Another <br className="hidden md:block" /> Patient Call.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              AI Voice Receptionists that answer every call, book appointments, answer FAQs, and work 24/7—without hiring another front desk employee.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto group h-14 px-8 text-base shadow-xl hover:scale-105 transition-transform">
                  Book Free Strategy Call
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 text-base hover:bg-muted/50">
                  Watch Live Demo
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-foreground" /> 24/7 Availability</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-foreground" /> Calendar Integration</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-foreground" /> Sub-800ms Response Time</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-foreground" /> HIPAA-Friendly Architecture</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-foreground" /> Built for Private Clinics</div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 border-y border-border bg-foreground text-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-background/20">
            <FadeIn delay={0.1} className="text-center px-4">
              <div className="text-4xl md:text-5xl font-bold tracking-tight mb-2"><AnimatedCounter value={99.9} decimals={1} suffix="%" /></div>
              <div className="text-sm font-medium text-gray-400 uppercase tracking-widest">Call Availability</div>
            </FadeIn>
            <FadeIn delay={0.2} className="text-center px-4">
              <div className="text-4xl md:text-5xl font-bold tracking-tight mb-2"><AnimatedCounter value={24} suffix="/7" /></div>
              <div className="text-sm font-medium text-gray-400 uppercase tracking-widest">Answers Every Call</div>
            </FadeIn>
            <FadeIn delay={0.3} className="text-center px-4">
              <div className="text-4xl md:text-5xl font-bold tracking-tight mb-2"><AnimatedCounter value={800} prefix="<" suffix="ms" /></div>
              <div className="text-sm font-medium text-gray-400 uppercase tracking-widest">Average Response</div>
            </FadeIn>
            <FadeIn delay={0.4} className="text-center px-4">
              <div className="text-4xl md:text-5xl font-bold tracking-tight mb-2"><AnimatedCounter value={0} /></div>
              <div className="text-sm font-medium text-gray-400 uppercase tracking-widest">Missed After-Hours Calls</div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* What the AI Does */}
      <section className="py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Complete Front-Desk Automation</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">Everything a human receptionist does, automated with perfect consistency and zero sick days.</p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="group p-10 rounded-3xl border border-border bg-card h-full flex flex-col hover-card shadow-sm">
                <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mb-8 group-hover:bg-foreground group-hover:text-background transition-colors">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Answer Calls Instantly</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Never miss leads or patient calls again. The AI answers on the first ring, 24/7, with zero hold times.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="group p-10 rounded-3xl border border-border bg-card h-full flex flex-col hover-card shadow-sm">
                <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mb-8 group-hover:bg-foreground group-hover:text-background transition-colors">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Book Appointments</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Connected directly to your calendar and scheduling logic. It finds available slots and books them instantly.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="group p-10 rounded-3xl border border-border bg-card h-full flex flex-col hover-card shadow-sm">
                <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mb-8 group-hover:bg-foreground group-hover:text-background transition-colors">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Transfer Emergencies</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Escalates emergencies or sensitive requests to your human staff instantly, ensuring no critical issue is missed.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Trust / Why Clinics Choose Nexus AI */}
      <section className="py-32 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Why Clinics Choose Nexus AI</h2>
            <p className="text-xl text-muted-foreground">Engineered specifically for the demands of high-volume healthcare practices.</p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "No Long-Term Contracts", icon: <ShieldCheck className="w-6 h-6" /> },
              { title: "14-Day Risk-Free Pilot", icon: <Activity className="w-6 h-6" /> },
              { title: "Custom AI Voice", icon: <PhoneCall className="w-6 h-6" /> },
              { title: "Human Escalation", icon: <CheckCircle2 className="w-6 h-6" /> },
              { title: "Works After Hours", icon: <Clock className="w-6 h-6" /> },
              { title: "Calendar Integration", icon: <Calendar className="w-6 h-6" /> },
              { title: "Built For Clinics", icon: <Stethoscope className="w-6 h-6" /> },
              { title: "Lightning Fast", icon: <Zap className="w-6 h-6" /> },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-2xl p-6 flex items-center gap-4 hover-card shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-foreground shrink-0">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-lg leading-tight">{item.title}</h3>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Frequently Asked Questions</h2>
          </FadeIn>

          <div className="space-y-4">
            {[
              {
                q: "How does the AI answer calls?",
                a: "We integrate directly with your existing phone system (via SIP forwarding or a dedicated Twilio number). When a patient calls, the AI picks up instantly, understanding intent through advanced NLP and responding with a natural human voice."
              },
              {
                q: "Can it book appointments?",
                a: "Yes. It connects directly to your scheduling software (like Cal.com, Google Calendar, or select EMRs) via secure API. It reads real-time availability and writes appointments directly into your system without double-booking."
              },
              {
                q: "Can it transfer emergencies?",
                a: "Absolutely. We map your specific emergency protocols. If a patient mentions keywords like 'pain', 'broken', or 'emergency', the AI immediately puts them on a brief hold and transfers the call to a designated priority human line."
              },
              {
                q: "Does it replace my receptionist?",
                a: "No, it augments them. It handles the repetitive, high-volume tasks (booking, FAQs, hours) so your front desk can focus on in-person patient experience, complex billing issues, and high-value interactions."
              },
              {
                q: "Does it integrate with my calendar?",
                a: "Yes. We support custom API integrations with major calendar providers and can build webhooks for specific practice management software."
              },
              {
                q: "How long is setup?",
                a: "Deployment typically takes 3 to 7 days depending on the complexity of your workflow mapping and integration requirements."
              },
              {
                q: "What happens after the pilot?",
                a: "After the 14-day risk-free pilot, you review the call logs and performance metrics. If you love it, we move you to a standard month-to-month plan based on your call volume."
              }
            ].map((faq, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <FAQItem question={faq.q} answer={faq.a} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA & Booking Form */}
      <section id="booking-form" className="py-32 bg-foreground text-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">Ready to Stop Missing Patient Calls?</h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              Book a free strategy session and we&apos;ll show exactly how AI can fit into your clinic&apos;s operational workflow.
            </p>
            <div className="bg-background rounded-3xl p-2 max-w-xl mx-auto text-foreground">
              <BookingForm />
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
