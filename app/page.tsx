import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Calendar, PhoneCall, Stethoscope, Scale, Home, Zap, Clock, ShieldCheck } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
                AI Voice Agents That Never Miss a Customer Call
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
                Nexus AI builds intelligent voice systems that answer calls, qualify leads, book appointments, and automate customer conversations for clinics and service businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto group">
                    Book a Demo
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/demo">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Watch Live Demo
                  </Button>
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="relative hidden lg:block h-[400px] w-full rounded-2xl border border-border bg-muted/30 overflow-hidden flex items-center justify-center">
              {/* Minimal Animated Voice Wave Visualization placeholder */}
              <div className="flex items-center gap-1.5 h-24">
                {[...Array(15)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 bg-foreground rounded-full animate-pulse"
                    style={{
                      height: `${Math.max(20, Math.random() * 100)}%`,
                      animationDelay: `${i * 0.1}s`,
                      animationDuration: '1s'
                    }}
                  ></div>
                ))}
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-sm border border-border p-3 rounded-lg flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <p className="text-sm font-medium">AI Receptionist Active & Listening...</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-10 border-y border-border bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-muted-foreground mb-8 tracking-widest uppercase">
            Built for modern clinics and service businesses
          </p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale">
            <div className="flex items-center gap-2 font-semibold text-lg">
              <Stethoscope className="w-6 h-6" /> Dental Clinics
            </div>
            <div className="flex items-center gap-2 font-semibold text-lg">
              <Zap className="w-6 h-6" /> Med Spas
            </div>
            <div className="flex items-center gap-2 font-semibold text-lg">
              <Scale className="w-6 h-6" /> Law Firms
            </div>
            <div className="flex items-center gap-2 font-semibold text-lg">
              <Home className="w-6 h-6" /> Home Services
            </div>
          </div>
        </div>
      </section>

      {/* What the AI Does */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Complete Call Automation</h2>
            <p className="text-lg text-muted-foreground">Everything a human receptionist does, automated with perfect consistency.</p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="group p-8 rounded-2xl border border-border hover:border-foreground/20 transition-colors bg-card h-full flex flex-col">
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-6 group-hover:bg-foreground group-hover:text-background transition-colors">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Answer Calls Instantly</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Never miss leads or patient calls again. The AI answers on the first ring, 24/7, with zero hold times.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="group p-8 rounded-2xl border border-border hover:border-foreground/20 transition-colors bg-card h-full flex flex-col">
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-6 group-hover:bg-foreground group-hover:text-background transition-colors">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Book Appointments Automatically</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Connected directly to your calendar and scheduling logic. It finds available slots and books them instantly.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="group p-8 rounded-2xl border border-border hover:border-foreground/20 transition-colors bg-card h-full flex flex-col">
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-6 group-hover:bg-foreground group-hover:text-background transition-colors">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Transfer Complex Calls</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Escalates emergencies or sensitive requests to your human staff instantly, ensuring no critical issue is missed.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Live Conversation Demo Section */}
      <section className="py-24 md:py-32 bg-foreground text-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Listen to the AI Handle a Real Customer Call</h2>
            <p className="text-lg text-gray-400">Experience the natural, human-like voice and complex reasoning capabilities.</p>
          </FadeIn>

          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden border border-gray-800 bg-black aspect-video relative flex items-center justify-center group cursor-pointer">
              {/* This would be the Loom Embed. Using a placeholder. */}
              <div className="absolute inset-0 bg-gray-900/50 group-hover:bg-gray-900/30 transition-colors flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center pl-1 group-hover:scale-110 transition-transform">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="text-center z-10 opacity-50 font-mono text-sm">
                [ Loom Video Embed Placeholder ]<br />
                Flow: Booking Appointment & Handling Sunday Rejection
              </div>
            </div>

            <div className="mt-8 bg-gray-900 rounded-xl p-6 border border-gray-800 font-mono text-sm h-64 overflow-y-auto">
              <div className="flex gap-4 mb-4">
                <div className="font-bold text-gray-400 w-16 shrink-0">Caller:</div>
                <div className="text-gray-300">Hi, I'd like to book an appointment for a cleaning this Sunday.</div>
              </div>
              <div className="flex gap-4 mb-4">
                <div className="font-bold text-white w-16 shrink-0">AI:</div>
                <div className="text-white">I'd be happy to help you with that. However, we are actually closed on Sundays. We have availability on Monday at 10:00 AM or Tuesday at 2:00 PM. Would either of those work for you?</div>
              </div>
              <div className="flex gap-4 mb-4">
                <div className="font-bold text-gray-400 w-16 shrink-0">Caller:</div>
                <div className="text-gray-300">Oh, I see. Monday at 10 AM works great.</div>
              </div>
              <div className="flex gap-4">
                <div className="font-bold text-white w-16 shrink-0">AI:</div>
                <div className="text-white">Perfect. I have you scheduled for a cleaning on Monday at 10:00 AM. Is there anything else I can assist you with today?</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Fast Deployment</h2>
            <p className="text-lg text-muted-foreground">Go live in days, not months.</p>
          </FadeIn>

          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2"></div>
            
            <div className="space-y-16">
              {[
                { step: "01", title: "We map your business logic", desc: "We learn how you handle calls, objections, pricing, and scheduling rules." },
                { step: "02", title: "We connect your calendar and workflows", desc: "Seamless integration with your existing CRM, calendar, and operational software." },
                { step: "03", title: "Your AI receptionist goes live", desc: "Start automating your inbound volume instantly with ongoing optimization." }
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.2} className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-16">
                  <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:text-right md:pr-16' : 'md:order-2 md:pl-16'}`}>
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="absolute left-0 md:left-1/2 w-14 h-14 rounded-full bg-background border-4 border-foreground text-foreground flex items-center justify-center font-bold text-lg md:-translate-x-1/2 z-10 shrink-0 shadow-sm">
                    {item.step}
                  </div>
                  <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:order-2 md:pl-16 hidden md:block' : 'md:pr-16 hidden md:block'}`}></div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Nexus AI */}
      <section className="py-24 md:py-32 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Engineered for Reliability</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We don't build generic chatbots. We engineer robust, intelligent voice systems tailored to your specific operational workflows.
              </p>
              <ul className="space-y-4">
                {[
                  "Custom AI workflows built for your specific needs",
                  "Real-time appointment booking and syncing",
                  "Human-like voice interaction with under 800ms latency",
                  "Complex business-specific logic handling",
                  "Continuous ongoing optimization and learning"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-foreground text-background flex items-center justify-center shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.2} className="relative h-[500px] rounded-2xl border border-border bg-card p-8 flex flex-col justify-center">
               <div className="font-mono text-sm space-y-4 text-muted-foreground">
                 <div className="text-foreground font-semibold mb-6">// Core System Architecture</div>
                 <div>{'const system = new NexusEngine({'}</div>
                 <div className="pl-4">{'latency_target: "under_800ms",'}</div>
                 <div className="pl-4">{'voice_model: "ultra_realistic",'}</div>
                 <div className="pl-4">{'integrations: ["calendar", "crm", "emr"],'}</div>
                 <div className="pl-4">{'fallback: "human_transfer"'}</div>
                 <div>{'});'}</div>
                 <br />
                 <div>{'system.on("call_received", async (call) => {'}</div>
                 <div className="pl-4">{'const intent = await nlp.analyze(call);'}</div>
                 <div className="pl-4">{'if (intent === "booking") {'}</div>
                 <div className="pl-8">{'await calendar.schedule(call);'}</div>
                 <div className="pl-4">{'}'}</div>
                 <div>{'});'}</div>
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">See What an AI Receptionist Could Save Your Business</h2>
            <p className="text-xl text-muted-foreground mb-10">
              Stop missing calls. Start automating your growth.
            </p>
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto h-14 text-lg px-10">
                Book a Strategy Call
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
