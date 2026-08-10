import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Calendar, PhoneCall, ShieldCheck, CheckCircle2, Activity, Clock, Zap, Stethoscope } from "lucide-react";
import BookingForm from "@/components/BookingForm";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import FAQItem from "@/components/FAQItem";
import InteractiveCard from "@/components/InteractiveCard";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05] pointer-events-none mix-blend-overlay"></div>
        
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-black/[0.02] blur-[150px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <FadeIn className="lg:col-span-8 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5 border border-black/5 mb-8">
                <span className="flex w-2 h-2 rounded-full bg-foreground"></span>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground">Nexus AI Voice Agents</p>
              </div>
              <h1 className="text-6xl md:text-[5rem] lg:text-[6.5rem] font-bold tracking-[-0.04em] leading-[0.85] mb-8 text-foreground">
                Never Miss Another Patient Call.
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl leading-relaxed tracking-tight">
                AI Voice Receptionists that answer every call, book appointments, answer FAQs, and work 24/7—without hiring another front desk employee.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full sm:w-auto">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto group h-14 px-8 text-base shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] hover:bg-blue-700 bg-blue-600 text-white transition-all rounded-full">
                    Book Free Strategy Call
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 text-base bg-transparent border-black/10 hover:bg-black/5 rounded-full">
                    Watch Live Demo
                  </Button>
                </Link>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2} className="lg:col-span-4 hidden lg:block">
              <div className="flex flex-col gap-8 border-l border-black/10 pl-8">
                <FadeIn delay={0.3} className="hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-center gap-3 mb-2"><CheckCircle2 className="w-5 h-5 text-foreground" /><span className="font-bold">24/7 Availability</span></div>
                  <p className="text-sm text-muted-foreground">Always on, never sick.</p>
                </FadeIn>
                <FadeIn delay={0.4} className="hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-center gap-3 mb-2"><CheckCircle2 className="w-5 h-5 text-foreground" /><span className="font-bold">Sub-800ms Latency</span></div>
                  <p className="text-sm text-muted-foreground">Indistinguishable from human speed.</p>
                </FadeIn>
                <FadeIn delay={0.5} className="hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-center gap-3 mb-2"><CheckCircle2 className="w-5 h-5 text-foreground" /><span className="font-bold">Calendar Sync</span></div>
                  <p className="text-sm text-muted-foreground">Direct write-access to your EMR.</p>
                </FadeIn>
              </div>
            </FadeIn>
          </div>
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
      <section className="py-24 relative border-t border-black/5">
        <div className="absolute inset-0 bg-gradient-to-b from-black/[0.02] to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="max-w-4xl mb-24 md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5 border border-black/5 mb-6">
              <span className="flex w-2 h-2 rounded-full bg-foreground"></span>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground">The Platform</p>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.04em] leading-[0.9] mb-8 text-foreground">Complete Front-Desk Automation.</h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl tracking-tight">Everything a human receptionist does, automated with perfect consistency and zero sick days.</p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-6xl mx-auto">
            <FadeIn delay={0.1} className="md:col-span-8">
              <InteractiveCard innerClassName="p-12 flex flex-col h-full" permanent={true} darker={true}>
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-10 group-hover:bg-white group-hover:text-zinc-950 transition-colors relative z-10">
                  <PhoneCall className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold mb-4 relative z-10 text-white">Answer Calls Instantly</h3>
                <p className="text-zinc-400 leading-relaxed text-xl max-w-lg relative z-10">
                  Never miss leads or patient calls again. The AI answers on the first ring, 24/7, with zero hold times.
                </p>
              </InteractiveCard>
            </FadeIn>
            <FadeIn delay={0.2} className="md:col-span-4">
              <InteractiveCard innerClassName="p-12 flex flex-col h-full" permanent={true} darker={true}>
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-10 group-hover:bg-white group-hover:text-zinc-950 transition-colors relative z-10">
                  <Calendar className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold mb-4 relative z-10 text-white">Book Appointments</h3>
                <p className="text-zinc-400 leading-relaxed text-xl relative z-10">
                  Connected directly to your calendar and scheduling logic.
                </p>
              </InteractiveCard>
            </FadeIn>
            <FadeIn delay={0.3} className="md:col-span-12">
              <InteractiveCard innerClassName="p-12 flex flex-col md:flex-row items-center gap-12" permanent={true} darker={true}>
                <div className="w-20 h-20 shrink-0 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-zinc-950 transition-colors relative z-10">
                  <ShieldCheck className="w-10 h-10" />
                </div>
                <div className="relative z-10 text-center md:text-left">
                  <h3 className="text-3xl font-bold mb-4 text-white">Transfer Emergencies</h3>
                  <p className="text-zinc-400 leading-relaxed text-xl max-w-3xl">
                    Escalates emergencies or sensitive requests to your human staff instantly, ensuring no critical issue is ever missed in translation.
                  </p>
                </div>
              </InteractiveCard>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Trust / Why Clinics Choose Nexus AI */}
      <section className="py-24 bg-black/[0.03] border-y border-black/5 relative overflow-hidden">
        <div className="absolute -left-1/4 top-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.03),transparent_70%)] pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="max-w-4xl mb-32 md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5 border border-black/5 mb-6">
              <span className="flex w-2 h-2 rounded-full bg-foreground"></span>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground">The Advantage</p>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.04em] leading-[0.9] mb-8 text-foreground">Why Clinics Choose Nexus AI.</h2>
            <p className="text-xl text-muted-foreground max-w-2xl tracking-tight">Engineered specifically for the demands of high-volume healthcare practices.</p>
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
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-foreground shrink-0 relative z-10 transition-transform group-hover:scale-110">
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
      <section id="booking-form" className="py-24 relative border-t border-black/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.02),transparent_70%)] pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 md:text-left">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <FadeIn className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5 border border-black/5 mb-6">
                <span className="flex w-2 h-2 rounded-full bg-foreground"></span>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground">Get Started</p>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.04em] leading-[0.9] mb-8 text-foreground">Ready to Stop Missing Calls?</h2>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed tracking-tight">
                Book a free strategy session and we&apos;ll show exactly how AI can fit into your clinic&apos;s operational workflow.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center"><CheckCircle2 className="w-5 h-5" /></div>
                  <p className="font-medium">Free Workflow Analysis</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center"><CheckCircle2 className="w-5 h-5" /></div>
                  <p className="font-medium">14-Day Risk-Free Pilot</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center"><CheckCircle2 className="w-5 h-5" /></div>
                  <p className="font-medium">Custom Voice Cloning</p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2} className="moving-glow">
              <div className="bg-black/[0.02] border border-black/5 rounded-[32px] p-2 relative overflow-hidden backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <BookingForm />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
