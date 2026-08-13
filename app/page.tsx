import FadeIn, { FadeInStagger } from "@/components/ui/FadeIn";
import Link from "next/link";
import { ArrowRight, Calendar, PhoneCall, ShieldCheck, CheckCircle2, Activity, Clock, Zap, Stethoscope } from "lucide-react";
import BookingForm from "@/components/BookingForm";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import FAQItem from "@/components/FAQItem";
import InteractiveCard from "@/components/InteractiveCard";

import NeumorphicBlob from "@/components/NeumorphicBlob";
import { Phone, Menu } from "lucide-react";
import Button from "@/components/ui/Button";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)]">
      {/* Hero Section - Neumorphic Redesign */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-24 overflow-hidden">

        {/* Concentric Subtle Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] max-w-[1200px] aspect-square rounded-full border border-white/5 opacity-80 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] aspect-square rounded-full border border-white/5 shadow-[inset_0_0_100px_rgba(255,255,255,0.02)]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65%] aspect-square rounded-full border border-white/5 shadow-[0_0_100px_rgba(255,255,255,0.05)]"></div>
          </div>
        </div>

        {/* Hero Content */}
        <FadeInStagger className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center max-w-4xl mt-12" staggerDelay={0.15}>
          
          <FadeIn useStagger className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bento-card mb-8">
            <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"></span>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground">Nexus AI Solutions</span>
          </FadeIn>

          <FadeIn useStagger>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter leading-[1.05] mb-8 bg-clip-text text-transparent bg-gradient-to-br from-white via-gray-300 to-gray-600">
              Never Miss<br />
              Another Patient<br />
              Call. Period.
            </h1>
          </FadeIn>

          <FadeIn useStagger>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12 font-medium tracking-tight">
              AI Voice Receptionists that answer every call, book appointments, answer FAQs, and work 24/7—without hiring another front desk employee. Our AI is always on, always ready, and never takes a break.
            </p>
          </FadeIn>

          <FadeIn useStagger className="flex flex-col sm:flex-row items-center gap-6">
            <Link href="/contact">
              <Button size="lg" variant="primary" className="flex items-center gap-2">
                Book the Demo <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/demo">
              <Button size="lg" variant="outline">
                See How it Works
              </Button>
            </Link>
          </FadeIn>
          
        </FadeInStagger>
      </section>

      {/* Statistics Section */}
      <section className="py-12 my-12 mx-4 sm:mx-8 rounded-[3rem] neu-inset text-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] z-0 pointer-events-none opacity-30 grayscale">
          <NeumorphicBlob />
        </div>
        <FadeInStagger staggerDelay={0.15} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn useStagger className="max-w-4xl mx-auto mb-24 text-center">
            <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bento-card mb-6 border-white/10">
              <span className="flex w-2 h-2 rounded-full bg-white"></span>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground">The Platform</p>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.9] mb-8 text-foreground">Complete Front-Desk Automation.</h2>
            <p className="text-xl text-muted-foreground mx-auto leading-relaxed max-w-2xl tracking-tight">Everything a human receptionist does, automated with perfect consistency and zero sick days.</p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-6xl mx-auto">
            <FadeIn useStagger className="md:col-span-8">
              <InteractiveCard innerClassName="p-12 flex flex-col h-full" permanent={true}>
                <div className="w-16 h-16 rounded-2xl bento-inner border-white/10 flex items-center justify-center mb-10 text-foreground transition-colors relative z-10">
                  <PhoneCall className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold mb-4 relative z-10 text-foreground tracking-tight">Answer Calls Instantly</h3>
                <p className="text-muted-foreground leading-relaxed text-xl max-w-lg relative z-10">
                  Never miss leads or patient calls again. The AI answers on the first ring, 24/7, with zero hold times.
                </p>
              </InteractiveCard>
            </FadeIn>
            <FadeIn useStagger className="md:col-span-4">
              <InteractiveCard innerClassName="p-12 flex flex-col h-full" permanent={true}>
                <div className="w-16 h-16 rounded-2xl bento-inner border-white/10 flex items-center justify-center mb-10 text-foreground transition-colors relative z-10">
                  <Calendar className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold mb-4 relative z-10 text-foreground tracking-tight">Book Appointments</h3>
                <p className="text-muted-foreground leading-relaxed text-xl relative z-10">
                  Connected directly to your calendar and scheduling logic.
                </p>
              </InteractiveCard>
            </FadeIn>
            <FadeIn useStagger className="md:col-span-12">
              <InteractiveCard innerClassName="p-12 flex flex-col md:flex-row items-center gap-12" permanent={true}>
                <div className="w-20 h-20 shrink-0 rounded-full bento-inner border-white/10 flex items-center justify-center text-foreground transition-colors relative z-10">
                  <ShieldCheck className="w-10 h-10" />
                </div>
                <div className="relative z-10 text-center md:text-left">
                  <h3 className="text-3xl font-bold mb-4 text-foreground tracking-tight">Transfer Emergencies</h3>
                  <p className="text-muted-foreground leading-relaxed text-xl max-w-3xl">
                    Escalates emergencies or sensitive requests to your human staff instantly, ensuring no critical issue is ever missed in translation.
                  </p>
                </div>
              </InteractiveCard>
            </FadeIn>
          </div>
        </FadeInStagger>
      </section>

      {/* Trust / Why Clinics Choose Nexus AI */}
      <section className="py-24 relative overflow-hidden">
        <FadeInStagger staggerDelay={0.1} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn useStagger className="max-w-4xl mx-auto mb-20 text-center">
            <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bento-card mb-6 border-white/10">
              <span className="flex w-2 h-2 rounded-full bg-white"></span>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground">The Advantage</p>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.9] mb-8 text-foreground">Why Clinics Choose Nexus AI.</h2>
            <p className="text-xl text-muted-foreground mx-auto max-w-2xl tracking-tight">Engineered specifically for the demands of high-volume healthcare practices.</p>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
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
              <FadeIn useStagger key={i}>
                <InteractiveCard innerClassName="p-6 flex flex-col items-start gap-4 h-full border-white/5 bg-white/5">
                  <div className="w-12 h-12 rounded-xl bento-inner border-white/10 flex items-center justify-center text-foreground shrink-0 relative z-10 transition-transform group-hover:scale-110">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-lg leading-tight relative z-10 tracking-tight">{item.title}</h3>
                </InteractiveCard>
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>
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
          <FadeInStagger staggerDelay={0.15} className="flex flex-col items-center">
            <div className="max-w-3xl mb-16">
              <FadeIn useStagger className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bento-card mb-6 border-white/10">
                <span className="flex w-2 h-2 rounded-full bg-white"></span>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground">Get Started</p>
              </FadeIn>
              <FadeIn useStagger>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.9] mb-8 text-foreground">Ready to Stop Missing Calls?</h2>
              </FadeIn>
              <FadeIn useStagger>
                <p className="text-xl text-muted-foreground mb-12 mx-auto leading-relaxed tracking-tight max-w-2xl">
                  Book a free strategy session and we&apos;ll show exactly how AI can fit into your clinic&apos;s operational workflow.
                </p>
              </FadeIn>
              
              <FadeIn useStagger className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bento-inner border-white/10 flex items-center justify-center"><CheckCircle2 className="w-5 h-5" /></div>
                  <p className="font-medium">Free Workflow Analysis</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bento-inner border-white/10 flex items-center justify-center"><CheckCircle2 className="w-5 h-5" /></div>
                  <p className="font-medium">14-Day Pilot</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bento-inner border-white/10 flex items-center justify-center"><CheckCircle2 className="w-5 h-5" /></div>
                  <p className="font-medium">Custom Voice</p>
                </div>
              </FadeIn>
            </div>
            
            <FadeIn useStagger className="w-full max-w-xl">
              <div className="bento-card rounded-[32px] p-2 relative overflow-hidden text-left border-white/10">
                <BookingForm />
              </div>
            </FadeIn>
          </FadeInStagger>
        </div>
      </section>
    </div>
  );
}
