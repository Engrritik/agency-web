import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";
import { ArrowRight, Calendar, PhoneCall, ShieldCheck, CheckCircle2, Activity, Clock, Zap, Stethoscope } from "lucide-react";
import BookingForm from "@/components/BookingForm";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import FAQItem from "@/components/FAQItem";
import InteractiveCard from "@/components/InteractiveCard";

import NeumorphicBlob from "@/components/NeumorphicBlob";
import { Phone, Menu } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)]">
      {/* Hero Section - Neumorphic Redesign */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-24 overflow-hidden">
        
        {/* Floating Side Buttons */}
        <button className="fixed left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-2xl neu-flat flex items-center justify-center text-foreground hover:neu-pressed z-50 transition-all hidden md:flex">
          <Menu className="w-5 h-5" />
        </button>
        <button className="fixed right-8 bottom-12 w-14 h-14 rounded-full neu-flat flex items-center justify-center text-foreground hover:neu-pressed z-50 transition-all">
          <Phone className="w-6 h-6" />
        </button>

        {/* Concentric Neumorphic Circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] max-w-[1200px] aspect-square rounded-full neu-inset opacity-80 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] aspect-square rounded-full neu-inset">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65%] aspect-square rounded-full neu-inset"></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center max-w-4xl mt-12">
          
          <FadeIn className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-pressed mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-600">Nexus AI Voice Agents</span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[1.05] text-foreground mb-8">
              Never Miss<br />
              Another Patient<br />
              Call. Period.
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-[#4b5563] max-w-2xl mx-auto leading-relaxed mb-12 font-medium">
              AI Voice Receptionists that answer every call, book appointments, answer FAQs, and work 24/7—without hiring another front desk employee. Our AI is always on, always ready, and never takes a break.
            </p>
          </FadeIn>

          <FadeIn delay={0.3} className="flex flex-col sm:flex-row items-center gap-6">
            <Link href="/contact">
              <button className="px-8 py-4 rounded-full neu-flat hover:neu-pressed hover-glow transition-all text-sm font-semibold flex items-center gap-2 text-foreground">
                Book the Demo <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href="/demo">
              <button className="px-8 py-4 rounded-full neu-flat hover:neu-pressed hover-glow transition-all text-sm font-semibold text-foreground">
                See How it Works
              </button>
            </Link>
          </FadeIn>
          
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 my-12 mx-4 sm:mx-8 rounded-[3rem] neu-inset text-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-black/10">
            <FadeIn delay={0.1} className="text-center px-4 animate-float" style={{ animationDelay: '0s' }}>
              <div className="text-4xl md:text-5xl font-bold tracking-tight mb-2"><AnimatedCounter value={99.9} decimals={1} suffix="%" /></div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-widest">Call Availability</div>
            </FadeIn>
            <FadeIn delay={0.2} className="text-center px-4 animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-4xl md:text-5xl font-bold tracking-tight mb-2"><AnimatedCounter value={24} suffix="/7" /></div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-widest">Answers Every Call</div>
            </FadeIn>
            <FadeIn delay={0.3} className="text-center px-4 animate-float" style={{ animationDelay: '2s' }}>
              <div className="text-4xl md:text-5xl font-bold tracking-tight mb-2"><AnimatedCounter value={800} prefix="<" suffix="ms" /></div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-widest">Average Response</div>
            </FadeIn>
            <FadeIn delay={0.4} className="text-center px-4 animate-float" style={{ animationDelay: '3s' }}>
              <div className="text-4xl md:text-5xl font-bold tracking-tight mb-2"><AnimatedCounter value={0} /></div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-widest">Missed After-Hours Calls</div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* What the AI Does */}
      <section className="py-24 relative overflow-hidden">
        {/* 3D Blob Behind Cards */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] z-0 pointer-events-none opacity-60">
          <NeumorphicBlob />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="max-w-4xl mx-auto mb-24 text-center">
            <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full neu-pressed mb-6">
              <span className="flex w-2 h-2 rounded-full bg-blue-600"></span>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground">The Platform</p>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.04em] leading-[0.9] mb-8 text-foreground">Complete Front-Desk Automation.</h2>
            <p className="text-xl text-muted-foreground mx-auto leading-relaxed max-w-2xl tracking-tight">Everything a human receptionist does, automated with perfect consistency and zero sick days.</p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-6xl mx-auto">
            <FadeIn delay={0.1} className="md:col-span-8">
              <InteractiveCard innerClassName="p-12 flex flex-col h-full" permanent={true}>
                <div className="w-16 h-16 rounded-2xl neu-inset flex items-center justify-center mb-10 text-foreground transition-colors relative z-10 animate-float">
                  <PhoneCall className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold mb-4 relative z-10 text-foreground">Answer Calls Instantly</h3>
                <p className="text-gray-600 leading-relaxed text-xl max-w-lg relative z-10">
                  Never miss leads or patient calls again. The AI answers on the first ring, 24/7, with zero hold times.
                </p>
              </InteractiveCard>
            </FadeIn>
            <FadeIn delay={0.2} className="md:col-span-4">
              <InteractiveCard innerClassName="p-12 flex flex-col h-full" permanent={true}>
                <div className="w-16 h-16 rounded-2xl neu-inset flex items-center justify-center mb-10 text-foreground transition-colors relative z-10 animate-float" style={{ animationDelay: '1s' }}>
                  <Calendar className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold mb-4 relative z-10 text-foreground">Book Appointments</h3>
                <p className="text-gray-600 leading-relaxed text-xl relative z-10">
                  Connected directly to your calendar and scheduling logic.
                </p>
              </InteractiveCard>
            </FadeIn>
            <FadeIn delay={0.3} className="md:col-span-12">
              <InteractiveCard innerClassName="p-12 flex flex-col md:flex-row items-center gap-12" permanent={true}>
                <div className="w-20 h-20 shrink-0 rounded-full neu-inset flex items-center justify-center text-foreground transition-colors relative z-10 animate-float" style={{ animationDelay: '2s' }}>
                  <ShieldCheck className="w-10 h-10" />
                </div>
                <div className="relative z-10 text-center md:text-left">
                  <h3 className="text-3xl font-bold mb-4 text-foreground">Transfer Emergencies</h3>
                  <p className="text-gray-600 leading-relaxed text-xl max-w-3xl">
                    Escalates emergencies or sensitive requests to your human staff instantly, ensuring no critical issue is ever missed in translation.
                  </p>
                </div>
              </InteractiveCard>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Trust / Why Clinics Choose Nexus AI */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="max-w-4xl mx-auto mb-32 text-center">
            <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full neu-pressed mb-6">
              <span className="flex w-2 h-2 rounded-full bg-blue-600"></span>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground">The Advantage</p>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.04em] leading-[0.9] mb-8 text-foreground">Why Clinics Choose Nexus AI.</h2>
            <p className="text-xl text-muted-foreground mx-auto max-w-2xl tracking-tight">Engineered specifically for the demands of high-volume healthcare practices.</p>
          </FadeIn>

          <div className="relative overflow-hidden w-full group animate-marquee-hover pb-10">
            <div className="flex gap-6 w-max animate-marquee">
              {[
                { title: "No Long-Term Contracts", icon: <ShieldCheck className="w-6 h-6" /> },
                { title: "14-Day Risk-Free Pilot", icon: <Activity className="w-6 h-6" /> },
                { title: "Custom AI Voice", icon: <PhoneCall className="w-6 h-6" /> },
                { title: "Human Escalation", icon: <CheckCircle2 className="w-6 h-6" /> },
                { title: "Works After Hours", icon: <Clock className="w-6 h-6" /> },
                { title: "Calendar Integration", icon: <Calendar className="w-6 h-6" /> },
                { title: "Built For Clinics", icon: <Stethoscope className="w-6 h-6" /> },
                { title: "Lightning Fast", icon: <Zap className="w-6 h-6" /> },
                // Duplicate for infinite scroll
                { title: "No Long-Term Contracts", icon: <ShieldCheck className="w-6 h-6" /> },
                { title: "14-Day Risk-Free Pilot", icon: <Activity className="w-6 h-6" /> },
                { title: "Custom AI Voice", icon: <PhoneCall className="w-6 h-6" /> },
                { title: "Human Escalation", icon: <CheckCircle2 className="w-6 h-6" /> },
                { title: "Works After Hours", icon: <Clock className="w-6 h-6" /> },
                { title: "Calendar Integration", icon: <Calendar className="w-6 h-6" /> },
                { title: "Built For Clinics", icon: <Stethoscope className="w-6 h-6" /> },
                { title: "Lightning Fast", icon: <Zap className="w-6 h-6" /> },
              ].map((item, i) => (
                <div key={i} className="shrink-0 w-72">
                  <InteractiveCard innerClassName="p-6 flex items-center gap-4 h-full">
                    <div className="w-12 h-12 rounded-full neu-inset flex items-center justify-center text-foreground shrink-0 relative z-10 transition-transform group-hover:scale-110">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-lg leading-tight relative z-10">{item.title}</h3>
                  </InteractiveCard>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <FadeIn className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.04em] mb-6 text-foreground">Frequently Asked Questions</h2>
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
      <section id="booking-form" className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col items-center">
            <FadeIn className="max-w-3xl mb-16">
              <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full neu-pressed mb-6">
                <span className="flex w-2 h-2 rounded-full bg-blue-600"></span>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground">Get Started</p>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.04em] leading-[0.9] mb-8 text-foreground">Ready to Stop Missing Calls?</h2>
              <p className="text-xl text-muted-foreground mb-12 mx-auto leading-relaxed tracking-tight max-w-2xl">
                Book a free strategy session and we&apos;ll show exactly how AI can fit into your clinic&apos;s operational workflow.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full neu-inset flex items-center justify-center"><CheckCircle2 className="w-5 h-5" /></div>
                  <p className="font-medium">Free Workflow Analysis</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full neu-inset flex items-center justify-center"><CheckCircle2 className="w-5 h-5" /></div>
                  <p className="font-medium">14-Day Pilot</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full neu-inset flex items-center justify-center"><CheckCircle2 className="w-5 h-5" /></div>
                  <p className="font-medium">Custom Voice</p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2} className="w-full max-w-xl animate-float">
              <div className="neu-flat rounded-[32px] p-2 relative overflow-hidden text-left">
                <BookingForm />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
