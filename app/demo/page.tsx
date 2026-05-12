import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { Play } from "lucide-react";

export default function Demo() {
  const demos = [
    {
      title: "Booking a Dental Appointment",
      description: "Listen as the AI handles a routine scheduling request, checking availability and confirming details.",
      transcript: [
        { speaker: "Caller", text: "Hi, I need to schedule a cleaning for next week." },
        { speaker: "AI", text: "I can help with that. Are you a current patient with us?" },
        { speaker: "Caller", text: "Yes, my name is John Smith." },
        { speaker: "AI", text: "Thanks, John. I see we have openings next Tuesday at 9 AM or Thursday at 2 PM. Do either of those work?" },
        { speaker: "Caller", text: "Tuesday at 9 AM is perfect." },
        { speaker: "AI", text: "Great. You are all set for Tuesday at 9 AM for your cleaning. We'll send a reminder text a day before." }
      ]
    },
    {
      title: "Handling Sunday Rejections",
      description: "See how the AI gracefully handles requests for times when the business is closed.",
      transcript: [
        { speaker: "Caller", text: "I'd like to come in this Sunday." },
        { speaker: "AI", text: "I'd be happy to help you with that. However, we are actually closed on Sundays. We have availability on Monday starting at 8 AM. Would you like to hear Monday's options?" },
        { speaker: "Caller", text: "Oh, okay. What do you have on Monday afternoon?" },
        { speaker: "AI", text: "On Monday afternoon, we have a 1:30 PM and a 4:00 PM slot available." }
      ]
    },
    {
      title: "Emergency Transfer Protocol",
      description: "Watch the AI instantly recognize an urgent situation and route the call to a human.",
      transcript: [
        { speaker: "Caller", text: "Hi, I'm in a lot of pain. One of my crowns just fell out." },
        { speaker: "AI", text: "I'm so sorry to hear you're in pain. Since this is a dental emergency, I am going to transfer you to our triage nurse immediately so they can help you right away. Please hold." },
        { speaker: "System", text: "[Call transferred to priority ring group in 0.4 seconds]" }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="max-w-3xl mb-16 text-center mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Hear Nexus AI in Action
          </h1>
          <p className="text-xl text-muted-foreground">
            Experience the natural conversational flow, instant response times, and complex reasoning capabilities.
          </p>
        </FadeIn>

        {/* Main Loom Embed */}
        <FadeIn delay={0.1} className="max-w-5xl mx-auto mb-32">
          <div className="aspect-video w-full bg-foreground rounded-2xl overflow-hidden relative group flex flex-col items-center justify-center text-background cursor-pointer">
            <div className="w-20 h-20 bg-background/20 backdrop-blur-md rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Play className="w-8 h-8 ml-1" />
            </div>
            <p className="font-mono text-sm opacity-80">[ Primary Loom Video Embed Placeholder ]</p>
            <p className="font-mono text-xs opacity-50 mt-2">Full Platform Walkthrough</p>
          </div>
        </FadeIn>

        {/* Interactive Call Simulations */}
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight mb-12 border-b border-border pb-4">Live Call Transcripts</h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {demos.map((demo, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-card border border-border rounded-2xl overflow-hidden h-full flex flex-col hover:border-foreground/30 transition-colors">
                  <div className="p-6 border-b border-border bg-muted/20">
                    <h3 className="font-bold text-lg mb-2">{demo.title}</h3>
                    <p className="text-sm text-muted-foreground">{demo.description}</p>
                  </div>
                  <div className="p-6 font-mono text-sm space-y-4 flex-grow bg-[#0a0a0a] text-[#ededed]">
                    {demo.transcript.map((line, i) => (
                      <div key={i} className="flex gap-3">
                        <span className={`w-16 shrink-0 font-bold ${line.speaker === 'AI' ? 'text-white' : line.speaker === 'System' ? 'text-yellow-500' : 'text-gray-500'}`}>
                          {line.speaker}:
                        </span>
                        <span className={line.speaker === 'AI' ? 'text-white' : line.speaker === 'System' ? 'text-yellow-500/80 italic' : 'text-gray-300'}>
                          {line.text}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 border-t border-border bg-[#0a0a0a]">
                    <button className="w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold uppercase tracking-wider text-white hover:bg-white/10 rounded transition-colors">
                      <Play className="w-4 h-4" /> Play Audio Sample
                    </button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* CTA */}
        <FadeIn delay={0.4} className="mt-32 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Ready to test it for your business?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book a call with our engineers and we'll build a live prototype for your specific workflows.
          </p>
          <Link href="/contact">
            <Button size="lg">Book a Strategy Call</Button>
          </Link>
        </FadeIn>
      </div>
    </div>
  );
}
