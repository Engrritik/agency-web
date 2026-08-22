import FadeIn, { FadeInStagger } from "@/components/ui/FadeIn";
import Link from "next/link";
import { ArrowRight, Calendar, PhoneCall, ShieldCheck, CheckCircle2, Activity, Clock, Zap, Stethoscope } from "lucide-react";
import BookingForm from "@/components/BookingForm";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import FAQItem from "@/components/FAQItem";
import InteractiveCard from "@/components/InteractiveCard";
import Button from "@/components/ui/Button";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-transparent relative z-10 overflow-hidden">
      
      {/* Hero Section - Trionn Style (Massive Typography) */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-10">
        <FadeInStagger className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center w-full" staggerDelay={0.1}>
          
          <FadeIn useStagger className="mb-4">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/80">Nexus AI Engine</span>
            </div>
          </FadeIn>

          <FadeIn useStagger>
            <h1 className="text-[12vw] leading-[0.85] font-black tracking-tighter uppercase mix-blend-difference text-white">
              NEVER
            </h1>
          </FadeIn>
          <FadeIn useStagger>
            <h1 className="text-[12vw] leading-[0.85] font-black tracking-tighter uppercase mix-blend-difference text-white">
              MISS A
            </h1>
          </FadeIn>
          <FadeIn useStagger>
            <h1 className="text-[12vw] leading-[0.85] font-black tracking-tighter uppercase text-[var(--accent)] drop-shadow-[0_0_30px_rgba(216,255,0,0.3)]">
              CALL.
            </h1>
          </FadeIn>

          <FadeIn useStagger className="mt-12 max-w-2xl">
            <p className="text-xl md:text-2xl text-white/60 font-medium tracking-tight">
              AI Voice Receptionists that answer every call, book appointments, and work 24/7.
            </p>
          </FadeIn>

          <FadeIn useStagger className="mt-12 flex flex-col sm:flex-row items-center gap-6">
            <Link href="/contact" className="magnetic">
              <Button size="lg" className="bg-[var(--accent)] text-black hover:bg-white border-none rounded-full px-8 py-7 text-lg uppercase tracking-widest font-bold flex items-center gap-3 transition-colors">
                Book Demo <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </FadeIn>
          
        </FadeInStagger>
      </section>

      {/* Statistics Section - Brutalist Marquee or Large Grid */}
      <section className="py-24 border-y border-white/10 bg-black/40 backdrop-blur-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
            <FadeIn delay={0.1} className="flex flex-col items-center justify-center text-center">
              <div className="text-6xl md:text-8xl font-black text-[var(--accent)] tracking-tighter mb-4"><AnimatedCounter value={99.9} decimals={1} suffix="%" /></div>
              <div className="text-sm font-bold text-white/50 uppercase tracking-[0.2em]">Uptime</div>
            </FadeIn>
            <FadeIn delay={0.2} className="flex flex-col items-center justify-center text-center">
              <div className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-4"><AnimatedCounter value={24} suffix="/7" /></div>
              <div className="text-sm font-bold text-white/50 uppercase tracking-[0.2em]">Availability</div>
            </FadeIn>
            <FadeIn delay={0.3} className="flex flex-col items-center justify-center text-center">
              <div className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-4"><AnimatedCounter value={800} prefix="<" suffix="ms" /></div>
              <div className="text-sm font-bold text-white/50 uppercase tracking-[0.2em]">Response</div>
            </FadeIn>
            <FadeIn delay={0.4} className="flex flex-col items-center justify-center text-center">
              <div className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-4"><AnimatedCounter value={0} /></div>
              <div className="text-sm font-bold text-white/50 uppercase tracking-[0.2em]">Missed Calls</div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* What the AI Does */}
      <section className="py-32 relative">
        <FadeInStagger staggerDelay={0.1} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn useStagger className="mb-24">
            <h2 className="text-[8vw] md:text-[6vw] font-black tracking-tighter leading-[0.9] uppercase max-w-5xl">
              Complete <br />
              <span className="text-white/40">Automation.</span>
            </h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-7xl mx-auto">
            <FadeIn useStagger className="md:col-span-8 group">
              <InteractiveCard innerClassName="p-10 md:p-16 flex flex-col justify-between h-full bg-black/60 backdrop-blur-md border-white/5 hover:border-[var(--accent)]/50 transition-colors">
                <div className="w-20 h-20 rounded-full bg-[var(--accent)]/10 flex items-center justify-center mb-24 text-[var(--accent)]">
                  <PhoneCall className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">Answer Instantly</h3>
                  <p className="text-white/60 text-xl max-w-lg font-sans">
                    Never miss leads or patient calls again. The AI answers on the first ring, 24/7, with zero hold times.
                  </p>
                </div>
              </InteractiveCard>
            </FadeIn>
            <FadeIn useStagger className="md:col-span-4 group">
              <InteractiveCard innerClassName="p-10 flex flex-col justify-between h-full bg-black/60 backdrop-blur-md border-white/5 hover:border-white/20 transition-colors">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-24 text-white">
                  <Calendar className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-3xl font-black uppercase tracking-tight mb-4">Bookings</h3>
                  <p className="text-white/60 text-lg font-sans">
                    Connected directly to your scheduling logic.
                  </p>
                </div>
              </InteractiveCard>
            </FadeIn>
            <FadeIn useStagger className="md:col-span-12 group">
              <InteractiveCard innerClassName="p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 bg-[var(--accent)] border-none">
                <div className="w-24 h-24 shrink-0 rounded-full bg-black/10 flex items-center justify-center text-black">
                  <ShieldCheck className="w-12 h-12" />
                </div>
                <div className="text-center md:text-left text-black">
                  <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">Smart Escalation</h3>
                  <p className="text-black/80 text-2xl font-sans max-w-4xl font-medium">
                    Escalates emergencies or sensitive requests to your human staff instantly, ensuring no critical issue is ever missed.
                  </p>
                </div>
              </InteractiveCard>
            </FadeIn>
          </div>
        </FadeInStagger>
      </section>

      {/* Trust / Why Clinics Choose Nexus AI */}
      <section className="py-32 bg-white text-black relative rounded-t-[4rem] md:rounded-t-[8rem] mt-24">
        <FadeInStagger staggerDelay={0.05} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn useStagger className="mb-20 text-center">
            <h2 className="text-[10vw] md:text-[7vw] font-black tracking-tighter leading-[0.9] uppercase">
              The Advantage
            </h2>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-black/5 max-w-7xl mx-auto border border-black/5 rounded-[2rem] overflow-hidden">
            {[
              { 
                title: "Custom Setup + Simple Monthly Rate", 
                subtext: "$3,000 one-time setup (split into two payments), then $500/month for ongoing maintenance — no trial period.",
                icon: <ShieldCheck className="w-8 h-8" /> 
              },
              { title: "Custom AI Voice", icon: <PhoneCall className="w-8 h-8" /> },
              { title: "Human Escalation", icon: <CheckCircle2 className="w-8 h-8" /> },
              { title: "Works After Hours", icon: <Clock className="w-8 h-8" /> },
              { title: "Calendar Integration", icon: <Calendar className="w-8 h-8" /> },
              { title: "Built For Clinics", icon: <Stethoscope className="w-8 h-8" /> },
              { title: "Lightning Fast", icon: <Zap className="w-8 h-8" /> },
            ].map((item, i) => (
              <FadeIn useStagger key={i}>
                <div className="p-8 md:p-12 flex flex-col items-center justify-center text-center gap-6 h-full bg-white hover:bg-black/5 transition-colors cursor-none">
                  <div className="text-[var(--accent)] mix-blend-difference">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-xl md:text-2xl uppercase tracking-tighter leading-tight">{item.title}</h3>
                  {item.subtext && <p className="text-sm font-medium text-black/60 font-sans leading-relaxed">{item.subtext}</p>}
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-white text-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <FadeIn className="mb-20">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-6">FAQ.</h2>
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
      <section id="booking-form" className="py-32 relative bg-[#050505] rounded-t-[4rem] md:rounded-t-[8rem] -mt-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInStagger staggerDelay={0.1} className="flex flex-col items-center">
            <div className="max-w-4xl mb-20">
              <FadeIn useStagger>
                <h2 className="text-[8vw] md:text-[6vw] font-black tracking-tighter leading-[0.85] uppercase text-white mb-8">
                  Ready To <br />
                  <span className="text-[var(--accent)]">Stop Missing Calls?</span>
                </h2>
              </FadeIn>
              <FadeIn useStagger>
                <p className="text-2xl text-white/50 mb-12 mx-auto font-sans font-medium max-w-2xl">
                  Book a free strategy session and we&apos;ll show exactly how AI can fit into your clinic&apos;s workflow.
                </p>
              </FadeIn>
            </div>
            
            <FadeIn useStagger className="w-full max-w-2xl">
              <div className="bg-white/5 backdrop-blur-xl rounded-[3rem] p-4 md:p-8 border border-white/10 text-left">
                <BookingForm />
              </div>
            </FadeIn>
          </FadeInStagger>
        </div>
      </section>
    </div>
  );
}
