import FadeIn from "@/components/ui/FadeIn";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="max-w-3xl mb-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Built by engineers focused on real-world automation.
          </h1>
          <p className="text-xl text-muted-foreground">
            We don't build toys. We engineer robust AI systems that solve actual operational bottlenecks for local businesses.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <FadeIn delay={0.1} className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border border-border">
              <Image 
                src="/ritik.jpeg" 
                alt="Nexus AI Founder" 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-bold">Ritik</h3>
              <p className="text-muted-foreground">Founder & Lead Systems Engineer</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="lg:col-span-7 space-y-8 text-lg leading-relaxed text-muted-foreground">
            <p>
              I started Nexus AI because I noticed a massive gap between the cutting-edge AI models being developed and the actual software being used by local clinics and service businesses.
            </p>
            <p>
              Most local businesses still rely on overwhelmed front-desk staff or incredibly basic, frustrating IVR systems ("press 1 for appointments, press 2 for billing"). Missing a call often means missing thousands of dollars in revenue. 
            </p>
            <p className="text-foreground font-medium">
              We engineer AI voice agents that are indistinguishable from a highly-trained receptionist.
            </p>
            <p>
              My background is in machine learning and systems engineering. I don't run a marketing agency; I run a technical automation firm. When we partner with a clinic, we dive deep into their operational logic, mapping out exactly how they handle edge cases, scheduling rules, and emergency escalations.
            </p>
            <p>
              Then, we build a customized voice system that handles those exact workflows flawlessly, 24/7.
            </p>
            
            <div className="pt-8 border-t border-border mt-12">
              <h4 className="text-foreground font-bold mb-4">The Engineering Approach</h4>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                  <span><strong>Zero Hallucination Tolerance:</strong> Our systems are hard-prompted to stick strictly to your business facts.</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                  <span><strong>Sub-800ms Latency:</strong> Conversations feel completely natural, with no awkward pauses.</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                  <span><strong>Deterministic Integration:</strong> Real-time syncing with your calendar API to ensure zero double-bookings.</span>
                </li>
              </ul>
            </div>

            <div className="pt-8 mt-8">
              <Link href="/contact">
                <Button>Talk to the Founder</Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
