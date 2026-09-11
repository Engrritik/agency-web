import FadeIn, { FadeInStagger } from "@/components/ui/FadeIn";
import Link from "next/link";
import { AlertCircle, ArrowRight, Calendar, CheckCircle2, Clock, PhoneCall, ShieldCheck, Stethoscope, Zap } from "lucide-react";
import BookingForm from "@/components/BookingForm";
import FAQItem from "@/components/FAQItem";
import InteractiveCard from "@/components/InteractiveCard";
import Button from "@/components/ui/Button";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-transparent relative z-10 overflow-x-hidden md:overflow-x-visible">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 md:pt-32 md:pb-20">
        <FadeInStagger className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center w-full" staggerDelay={0.1}>
          
          <FadeIn useStagger className="mb-6 md:mb-8">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] animate-pulse shadow-[0_0_10px_var(--accent)]"></span>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-white/90">Automate Your Front Desk</span>
            </div>
          </FadeIn>

          <FadeIn useStagger className="w-full">
            {/* ONE PRIMARY H1 */}
            <h1 className="text-[2.25rem] sm:text-5xl md:text-6xl lg:text-[6.5vw] leading-[1.1] md:leading-[1] font-black tracking-tighter uppercase mix-blend-difference text-white max-w-[1200px] mx-auto">
              Your Dental Practice <br className="hidden lg:block" />
              <span className="block mt-2 lg:mt-4 text-[var(--accent)] drop-shadow-[0_0_30px_rgba(216,255,0,0.2)]">Never Misses</span> 
              <span className="block mt-2 lg:mt-4">A Call Again.</span>
            </h1>
          </FadeIn>

          <FadeIn useStagger className="mt-8 md:mt-10 max-w-2xl lg:max-w-3xl px-2">
            <p className="text-base sm:text-lg md:text-2xl text-white/70 font-medium tracking-tight leading-relaxed">
              An AI voice receptionist that answers your dental practice's calls, handles routine questions, and helps patients with appointment requests — even when your front desk is busy.
            </p>
          </FadeIn>

          <FadeIn useStagger className="mt-10 md:mt-14 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto px-2">
            <Link href="#booking-form" className="w-full sm:w-auto magnetic">
              <Button size="lg" className="w-full sm:w-auto bg-[var(--accent)] text-black hover:bg-white border-none rounded-full px-6 sm:px-10 py-5 sm:py-7 text-sm sm:text-lg uppercase tracking-widest font-bold flex items-center justify-center gap-3 transition-colors shadow-[0_0_20px_rgba(216,255,0,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                See it in Action <ArrowRight className="w-5 h-5 hidden sm:block" />
              </Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-transparent border-2 border-white/20 text-white hover:bg-white/10 rounded-full px-6 sm:px-10 py-5 sm:py-7 text-sm sm:text-lg uppercase tracking-widest font-bold flex items-center justify-center transition-colors">
                Book a Demo
              </Button>
            </Link>
          </FadeIn>
          
        </FadeInStagger>
      </section>

      {/* PHASE 7: PROBLEM SECTION - The Capacity Problem */}
      <section className="py-20 md:py-32 border-y border-white/10 bg-black/40 backdrop-blur-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center px-2 sm:px-4">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-8 md:mb-10 text-white leading-[1.1]">
                Your Front Desk Can't Answer <span className="text-white/40 block mt-2">Two Calls at Once.</span>
              </h2>
              <p className="text-base sm:text-lg md:text-2xl text-white/60 font-sans leading-relaxed max-w-4xl mx-auto">
                A receptionist may be helping a patient at checkout, answering another patient's question, scheduling an appointment, or dealing with insurance. At the exact same time, another patient may be calling.
              </p>
              <div className="mt-10 md:mt-14 inline-block px-6 py-4 rounded-2xl bg-[var(--accent)]/10 border border-[var(--accent)]/20">
                <p className="text-lg sm:text-xl md:text-2xl text-[var(--accent)] font-bold tracking-tight">
                  This isn't a performance problem. It's a capacity problem.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* PHASE 8: WHAT NEXUS HANDLES */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <FadeInStagger staggerDelay={0.1} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn useStagger className="mb-14 md:mb-24 text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl md:text-[6vw] font-black tracking-tighter leading-[1] uppercase max-w-5xl">
              What Nexus <br className="hidden md:block" />
              <span className="text-white/40">Handles.</span>
            </h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            <FadeIn useStagger className="group h-full">
              <InteractiveCard innerClassName="p-8 md:p-10 flex flex-col justify-between h-full bg-black/60 backdrop-blur-md border-white/5 hover:border-[var(--accent)]/50 transition-colors">
                <div className="w-16 h-16 rounded-full bg-[var(--accent)]/10 flex items-center justify-center mb-10 md:mb-24 text-[var(--accent)] shrink-0">
                  <PhoneCall className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4">Inbound Calls</h3>
                  <p className="text-white/60 text-base md:text-lg font-sans leading-relaxed">
                    Answers incoming calls immediately when your team is busy, assisting other patients, or unavailable.
                  </p>
                </div>
              </InteractiveCard>
            </FadeIn>

            <FadeIn useStagger className="group h-full">
              <InteractiveCard innerClassName="p-8 md:p-10 flex flex-col justify-between h-full bg-black/60 backdrop-blur-md border-white/5 hover:border-white/20 transition-colors">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-10 md:mb-24 text-white shrink-0">
                  <AlertCircle className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4">Routine Questions</h3>
                  <p className="text-white/60 text-base md:text-lg font-sans leading-relaxed">
                    Handles common questions about your practice, hours, location, and services based on your configured knowledge.
                  </p>
                </div>
              </InteractiveCard>
            </FadeIn>

            <FadeIn useStagger className="group h-full">
              <InteractiveCard innerClassName="p-8 md:p-10 flex flex-col justify-between h-full bg-black/60 backdrop-blur-md border-white/5 hover:border-white/20 transition-colors">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-10 md:mb-24 text-white shrink-0">
                  <Calendar className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4">Appointments</h3>
                  <p className="text-white/60 text-base md:text-lg font-sans leading-relaxed">
                    Helps patients request or schedule appointments directly according to your clinic's workflow.
                  </p>
                </div>
              </InteractiveCard>
            </FadeIn>

            <FadeIn useStagger className="group h-full md:col-span-2 lg:col-span-1">
              <InteractiveCard innerClassName="p-8 md:p-10 flex flex-col justify-between h-full bg-black/60 backdrop-blur-md border-white/5 hover:border-white/20 transition-colors">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-10 md:mb-24 text-white shrink-0">
                  <Clock className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4">After-Hours Care</h3>
                  <p className="text-white/60 text-base md:text-lg font-sans leading-relaxed">
                    Provides coverage when the office is closed, ensuring patients are heard instead of sent to a generic voicemail box.
                  </p>
                </div>
              </InteractiveCard>
            </FadeIn>

            <FadeIn useStagger className="group h-full md:col-span-2 lg:col-span-2">
              <InteractiveCard innerClassName="p-8 md:p-10 flex flex-col sm:flex-row items-center gap-8 md:gap-12 bg-[var(--accent)] border-none h-full">
                <div className="w-20 h-20 shrink-0 rounded-full bg-black/10 flex items-center justify-center text-black">
                  <ShieldCheck className="w-10 h-10" />
                </div>
                <div className="text-center sm:text-left text-black">
                  <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-4">Call Escalation</h3>
                  <p className="text-black/80 text-base sm:text-lg md:text-2xl font-sans font-medium leading-relaxed">
                    Escalates situations that require human attention directly to your team according to configured rules, making sure urgent matters actually get through.
                  </p>
                </div>
              </InteractiveCard>
            </FadeIn>
          </div>
        </FadeInStagger>
      </section>

      {/* PHASE 9: HOW IT WORKS */}
      <section className="py-24 md:py-32 bg-white/5 border-y border-white/10 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16 md:mb-24 px-2">
             <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter mb-6 text-white">How It Works</h2>
             <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto font-sans leading-relaxed">A seamless extension of your front office designed to feel invisible to patients.</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative max-w-6xl mx-auto">
             <div className="hidden md:block absolute top-[50%] left-12 right-12 h-[1px] bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.2),transparent)] -z-10 -translate-y-1/2"></div>
             
             {[
               { step: "01", title: "Patient Calls", desc: "A patient calls your practice when the team is busy or after hours. The call routes instantly." },
               { step: "02", title: "Nexus Answers", desc: "The AI answers immediately, understanding the caller's intent using natural language processing." },
               { step: "03", title: "Action Taken", desc: "Nexus books the appointment, provides the answer, or escalates priority calls to a human line." }
             ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.15} className="flex flex-col items-center text-center px-4 bg-[#0a0a0a]/50 md:bg-transparent rounded-3xl py-8 md:py-0">
                  <div className="w-20 h-20 rounded-full bg-black/80 backdrop-blur-xl border-2 border-[var(--accent)] text-[var(--accent)] font-bold text-3xl flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(216,255,0,0.15)] relative">
                    <span className="relative z-10">{item.step}</span>
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-5">{item.title}</h3>
                  <p className="text-white/60 text-base md:text-lg font-sans max-w-sm leading-relaxed">{item.desc}</p>
                </FadeIn>
             ))}
           </div>
        </div>
      </section>

      {/* Trust / The Advantage */}
      <section className="py-20 md:py-32 bg-white text-black relative rounded-t-[2.5rem] md:rounded-t-[8rem] mt-16 md:mt-24">
        <FadeInStagger staggerDelay={0.05} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4">
          <FadeIn useStagger className="mb-12 md:mb-20 text-center px-2">
            <h2 className="text-[2.25rem] sm:text-5xl md:text-[6vw] font-black tracking-tighter leading-[1] uppercase">
              The Advantage
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10 max-w-7xl mx-auto border border-black/10 rounded-2xl md:rounded-[2rem] overflow-hidden">
            {[
              { 
                title: "Custom Setup & Simple Rate", 
                subtext: "Straightforward implementation with a flat monthly rate and one-time setup fee.",
                icon: <Zap className="w-8 h-8" /> 
              },
              { title: "Custom AI Voice", icon: <PhoneCall className="w-8 h-8" />, subtext: "Configured to sound natural and highly professional for a healthcare environment." },
              { title: "Human Escalation", icon: <CheckCircle2 className="w-8 h-8" />, subtext: "Smart routing ensures complex or urgent medical requests reach your team." },
              { title: "After-Hours Coverage", icon: <Clock className="w-8 h-8" />, subtext: "Deliver reliable 24/7 availability for patients attempting to reach you." },
              { title: "Calendar Integrated", icon: <Calendar className="w-8 h-8" />, subtext: "Reads availability and seamlessly books directly into your existing workflow." },
              { title: "Built For Clinics", icon: <Stethoscope className="w-8 h-8" />, subtext: "Engineered specifically to handle the operations of U.S. dental practices." },
            ].map((item, i) => (
              <FadeIn useStagger key={i}>
                <div className="p-8 md:p-12 flex flex-col items-center text-center gap-5 md:gap-6 h-full bg-white hover:bg-[#fafafa] transition-colors cursor-default">
                  <div className="text-[var(--accent)] mix-blend-difference mb-2">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-xl md:text-2xl uppercase tracking-tighter leading-tight">{item.title}</h3>
                  <p className="text-base font-medium text-black/60 font-sans leading-relaxed px-2">{item.subtext}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-white text-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <FadeIn className="mb-10 md:mb-16 text-center md:text-left px-2">
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6">FAQ.</h2>
          </FadeIn>

          <div className="space-y-3 sm:space-y-4 px-2">
            {[
              {
                q: "Does Nexus replace my front desk?",
                a: "No. Nexus AI is built to assist your team, not replace them. It handles high-volume, repetitive tasks—like routine questions and basic appointment requests—freeing up your staff to provide an excellent in-person patient experience and address complex billing or insurance matters."
              },
              {
                q: "What happens when the AI can't answer something?",
                a: "If a patient asks a question outside of its configured knowledge base, or if a situation explicitly requires nuance, the AI is programmed to politely inform the patient and escalate the call to your human staff according to your specific rules."
              },
              {
                q: "Can it handle calls after hours?",
                a: "Yes. Nexus AI can be configured to continuously take calls 24/7, effectively providing robust coverage exactly when your office is closed."
              },
              {
                q: "Can it help with appointment requests?",
                a: "Yes. It can help patients request or directly schedule appointments, adhering firmly to your specific scheduling workflow and real-time calendar availability."
              },
              {
                q: "Can patients speak naturally with it?",
                a: "Absolutely. The AI utilizes highly advanced natural language processing. Callers do not need to press keypad buttons or speak like robots; they just converse naturally exactly as they would when speaking to a human receptionist."
              },
              {
                q: "What happens with urgent or emergency calls?",
                a: "Nexus AI can be programmed to instantly recognize critical emergency keywords defined by your clinic (like 'pain', 'broken', or 'emergency'). When detected, it will immediately escalate the call to a designated priority human line."
              },
              {
                q: "How does implementation work?",
                a: "We collaborate directly with your team to configure the AI's internal knowledge base, meticulously map out your scheduling workflow, and securely integrate it with your existing phone system—typically achieved via simple call forwarding or a direct SIP transfer."
              },
              {
                q: "What does the practice need to provide?",
                a: "Implementation requires your standard FAQs, your precise preferences for how specific questions should be answered, your scheduling logic/rules, and your protocol requirements for human call escalation."
              },
              {
                q: "Can I test it before making a decision?",
                a: "Yes. You can schedule a live demo to personally call the AI and audibly experience exactly how it processes realistic patient inquiries before committing."
              }
            ].map((faq, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <FAQItem question={faq.q} answer={faq.a} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA & Booking Form */}
      <section id="booking-form" className="py-20 md:py-32 relative bg-[#050505] rounded-t-[2.5rem] md:rounded-t-[8rem] -mt-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <FadeInStagger staggerDelay={0.1} className="flex flex-col items-center">
            <div className="max-w-4xl mb-12 md:mb-20 px-2 sm:px-4">
              <FadeIn useStagger>
                <h2 className="text-3xl sm:text-5xl md:text-[5vw] font-black tracking-tighter leading-[1.1] md:leading-[1] uppercase text-white mb-6 md:mb-10">
                  Don't Take Our Word For It. <br className="hidden md:block" />
                  <span className="text-[var(--accent)] mt-2 md:mt-4 block">Try The Receptionist Yourself.</span>
                </h2>
              </FadeIn>
              <FadeIn useStagger>
                <p className="text-base sm:text-lg md:text-2xl text-white/70 mb-8 md:mb-12 mx-auto font-sans font-medium max-w-2xl px-2 leading-relaxed">
                  Book a quick demo session. We'll show you exactly how the AI handles realistic calls and how it seamlessly fits into your clinic's workflow.
                </p>
              </FadeIn>
            </div>
            
            <FadeIn useStagger className="w-full max-w-[50rem] mx-auto px-0 sm:px-4">
              <div className="bg-white/[0.03] backdrop-blur-2xl rounded-2xl md:rounded-[3rem] p-4 sm:p-8 md:p-12 border border-white/10 text-left w-full shadow-2xl overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-20"></div>
                <BookingForm />
              </div>
            </FadeIn>
          </FadeInStagger>
        </div>
      </section>
    </div>
  );
}
