import FadeIn, { FadeInStagger } from "@/components/ui/FadeIn";
import Link from "next/link";
import { AlertCircle, ArrowRight, Calendar, CheckCircle2, Clock, PhoneCall, ShieldCheck, Stethoscope, Zap, ChevronRight } from "lucide-react";
import BookingForm from "@/components/BookingForm";
import FAQItem from "@/components/FAQItem";
import InteractiveCard from "@/components/InteractiveCard";
import Button from "@/components/ui/Button";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-transparent relative z-10 overflow-x-hidden md:overflow-x-visible">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen animate-aurora"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-purple-600/10 rounded-full blur-[150px] mix-blend-screen animate-aurora" style={{ animationDelay: '-5s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-16 md:pt-40 md:pb-24">
        <FadeInStagger className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center w-full" staggerDelay={0.1}>
          
          <FadeIn useStagger className="mb-8">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-panel hover-glow cursor-pointer transition-all hover:bg-white/5">
              <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)] animate-pulse-slow"></span>
              <span className="text-sm font-semibold tracking-wide text-gray-300">Nexus AI Engine 2.0 Now Live</span>
              <ChevronRight className="w-4 h-4 text-gray-500" />
            </div>
          </FadeIn>

          <FadeIn useStagger className="w-full">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[7.5vw] leading-[1.05] font-black tracking-tight text-white max-w-[1200px] mx-auto">
              Your Practice <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 animate-gradient-shift">Never Misses</span> 
              <span className="block mt-2">A Call Again.</span>
            </h1>
          </FadeIn>

          <FadeIn useStagger className="mt-8 max-w-2xl lg:max-w-3xl px-4">
            <p className="text-lg md:text-2xl text-gray-400 font-medium tracking-tight leading-relaxed">
              An intelligent voice receptionist that handles calls, triage, and scheduling automatically—so your team can focus on the patients in front of them.
            </p>
          </FadeIn>

          <FadeIn useStagger className="mt-12 flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto px-4">
            <Link href="#booking-form" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-blue-600 text-white hover:bg-blue-500 border-blue-500/50 rounded-full px-8 py-7 text-lg font-bold flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all moving-glow">
                Deploy Your AI <ArrowRight className="w-5 h-5 hidden sm:block" />
              </Button>
            </Link>
            <Link href="/demo" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto glass-panel text-white hover:bg-white/10 rounded-full px-8 py-7 text-lg font-bold flex items-center justify-center transition-colors">
                Experience Demo
              </Button>
            </Link>
          </FadeIn>
        </FadeInStagger>
      </section>

      {/* The Capacity Problem - Bento Style */}
      <section className="py-24 md:py-32 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">The Front Desk Bottleneck</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-6xl mx-auto">
            <FadeIn className="md:col-span-8 glass-panel rounded-3xl p-8 md:p-12 hover-card">
              <div className="flex flex-col justify-center h-full">
                <ShieldCheck className="w-12 h-12 text-blue-500 mb-6" />
                <h3 className="text-2xl md:text-4xl font-black text-white mb-4">Capacity, Not Performance.</h3>
                <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                  Your team is amazing, but they can't be in two places at once. When they're helping a patient in person or handling complex insurance billing, incoming calls inevitably go to voicemail—or to the clinic down the street.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn className="md:col-span-4 glass-panel rounded-3xl p-8 flex flex-col items-center justify-center text-center hover-card" delay={0.2}>
              <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-purple-500 mb-2">25%</div>
              <p className="text-gray-400 font-medium">Of calls to dental clinics are missed daily.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Features Grid - What Nexus Handles */}
      <section className="py-24 relative overflow-hidden">
        <FadeInStagger staggerDelay={0.1} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn useStagger className="mb-16 text-center md:text-left max-w-4xl mx-auto md:mx-0">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6">Autonomous Operations.</h2>
            <p className="text-xl text-gray-400">Instantly route, escalate, and resolve every caller's intent.</p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              { icon: PhoneCall, title: "Inbound Calls", desc: "Instantly picks up the phone when your staff is occupied. Zero wait times." },
              { icon: AlertCircle, title: "Routine Questions", desc: "Trained on your clinic's FAQs, hours, parking, and post-op instructions." },
              { icon: Calendar, title: "Smart Scheduling", desc: "Checks your live calendar and helps patients book according to your custom rules." },
              { icon: Clock, title: "After-Hours Care", desc: "Never rely on a basic voicemail again. Be there for emergencies 24/7." },
              { icon: Zap, title: "Call Escalation", desc: "Immediately detects urgency and hot-routes calls to a designated human line." },
              { icon: CheckCircle2, title: "HIPAA Compliant", desc: "Built with secure infrastructure ensuring all patient data remains protected." }
            ].map((feature, i) => (
              <FadeIn useStagger key={i} className="h-full">
                <InteractiveCard innerClassName="glass-panel p-8 rounded-3xl h-full flex flex-col hover-glow transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-8">
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                </InteractiveCard>
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>
      </section>

      {/* Trust / SEO Links (Redesigned as Dark Glass) */}
      <section className="py-24 border-y border-white/5 relative bg-[#06070a]/80 backdrop-blur-3xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
              Comprehensive Call Solutions
            </h2>
            <p className="text-lg text-gray-400">
              Deploy specialized AI agents mapped perfectly to your clinic's workflows.
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: "AI Receptionist", desc: "Automate intake & triage.", href: "/ai-receptionist-for-dentists" },
              { title: "Smart Answering", desc: "24/7 instant phone response.", href: "/dental-answering-service" },
              { title: "Live Scheduling", desc: "Seamless appointment booking.", href: "/ai-appointment-scheduling-dental" },
              { title: "After-Hours AI", desc: "Overnight & weekend coverage.", href: "/after-hours-dental-answering" },
              { title: "Front Desk Automation", desc: "Eliminate repetitive tasks.", href: "/dental-front-desk-automation" }
            ].map((solution, i) => (
              <FadeIn key={i}>
                <Link href={solution.href} className="group block p-6 rounded-2xl glass-panel hover:border-blue-500/30 transition-all hover:bg-white/5">
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 mb-2 transition-colors flex items-center justify-between">
                    {solution.title}
                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                  </h3>
                  <p className="text-sm text-gray-400">{solution.desc}</p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6">Frequently Asked.</h2>
        </FadeIn>
        <div className="space-y-4">
          {[
            { q: "Does Nexus replace my front desk?", a: "No. Nexus AI handles high-volume routine calls so your staff can focus on the in-person patient experience and complex billing matters." },
            { q: "Can it handle calls after hours?", a: "Yes. Nexus AI provides robust 24/7 coverage exactly when your office is closed." },
            { q: "Can patients speak naturally?", a: "Absolutely. Using advanced NLP, callers converse naturally just as they would with a human—no rigid menus." },
            { q: "What happens with urgent calls?", a: "The AI recognizes emergency keywords (e.g., 'pain', 'emergency') and immediately escalates the call to a priority human line." }
          ].map((faq, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <FAQItem question={faq.q} answer={faq.a} />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section id="booking-form" className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/10 pointer-events-none"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <FadeInStagger staggerDelay={0.1} className="flex flex-col items-center">
            <div className="max-w-3xl mb-12">
              <FadeIn useStagger>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6">
                  Ready to Automate?
                </h2>
              </FadeIn>
              <FadeIn useStagger>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                  Book a live demo to call the AI yourself and see exactly how it integrates into your clinic's workflow.
                </p>
              </FadeIn>
            </div>
            
            <FadeIn useStagger className="w-full max-w-2xl mx-auto">
              <div className="glass-panel rounded-3xl p-6 md:p-10 text-left border-blue-500/20 shadow-[0_0_50px_rgba(59,130,246,0.1)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
                <BookingForm />
              </div>
            </FadeIn>
          </FadeInStagger>
        </div>
      </section>
    </div>
  );
}
