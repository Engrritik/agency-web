"use client";

import FadeIn from "@/components/ui/FadeIn";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { useState } from "react";
import { CheckCircle2, Clock, Mail } from "lucide-react";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    try {
      const response = await fetch("https://formspree.io/f/mgobepzd", {
        method: "POST",
        body: new FormData(e.currentTarget),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("success");
      } else {
        console.error("Form submission failed");
        setFormStatus("idle");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus("idle");
    }
  };

  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Let's Automate Your Systems.
          </h1>
          <p className="text-xl text-muted-foreground">
            Book a strategy call to see a live demo or send us a message to discuss your specific operational bottlenecks.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Form & Info */}
          <FadeIn delay={0.1} className="space-y-12">
            <div className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              
              {formStatus === "success" ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold">Message Received</h3>
                  <p className="text-muted-foreground">
                    We'll get back to you within 24 hours to discuss your automation needs.
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => setFormStatus("idle")}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form 
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <input 
                        id="name" 
                        name="name" 
                        type="text" 
                        required 
                        className="w-full h-11 px-4 rounded-md border border-border bg-background focus:outline-none focus:ring-1 focus:ring-foreground transition-all" 
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="business" className="text-sm font-medium">Business Name</label>
                      <input 
                        id="business" 
                        name="business" 
                        type="text" 
                        required 
                        className="w-full h-11 px-4 rounded-md border border-border bg-background focus:outline-none focus:ring-1 focus:ring-foreground transition-all" 
                        placeholder="Acme Clinic"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                      <input 
                        id="phone" 
                        name="phone" 
                        type="tel" 
                        className="w-full h-11 px-4 rounded-md border border-border bg-background focus:outline-none focus:ring-1 focus:ring-foreground transition-all" 
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="website" className="text-sm font-medium">Website</label>
                      <input 
                        id="website" 
                        name="website" 
                        type="url" 
                        className="w-full h-11 px-4 rounded-md border border-border bg-background focus:outline-none focus:ring-1 focus:ring-foreground transition-all" 
                        placeholder="https://example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">What do you want automated?</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      required 
                      rows={4}
                      className="w-full p-4 rounded-md border border-border bg-background focus:outline-none focus:ring-1 focus:ring-foreground transition-all resize-y" 
                      placeholder="We need to handle after-hours bookings and basic insurance questions..."
                    ></textarea>
                  </div>

                  <div className="space-y-2 border border-border p-4 rounded-md bg-muted/20">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      Selected Demo Time
                    </label>
                    <div className="text-sm text-muted-foreground mt-1">
                      {selectedDate && selectedTime ? (
                        <span className="font-semibold text-foreground">
                          Scheduled for Day {selectedDate} at {selectedTime}
                        </span>
                      ) : (
                        "No time selected. Please select a date and time from the right panel."
                      )}
                    </div>
                    {/* Hidden inputs to submit to Formspree */}
                    <input type="hidden" name="DemoDate" value={selectedDate ? `Day ${selectedDate}` : "Not selected"} />
                    <input type="hidden" name="DemoTime" value={selectedTime || "Not selected"} />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full h-12"
                    disabled={formStatus === "submitting"}
                  >
                    {formStatus === "submitting" ? "Sending..." : "Submit Inquiry"}
                  </Button>
                </form>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border border-border rounded-xl bg-muted/30">
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="w-5 h-5 text-muted-foreground" />
                  <h3 className="font-semibold">Email Us</h3>
                </div>
                <p className="text-muted-foreground"><a href="mailto:ritik@buildwithnexusai.com" className="hover:text-foreground transition-colors">ritik@buildwithnexusai.com</a></p>
              </div>
              <div className="p-6 border border-border rounded-xl bg-muted/30">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-muted-foreground" />
                  <h3 className="font-semibold">Response Time</h3>
                </div>
                <p className="text-muted-foreground">Within 24 hours</p>
              </div>
            </div>
          </FadeIn>

          {/* Right Column: Calendly Embed */}
          <FadeIn delay={0.2} className="h-full">
            <div className="bg-card border border-border rounded-2xl p-2 h-full min-h-[600px] flex flex-col relative overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-muted-foreground z-0">
                <p className="mb-2 font-mono text-sm">[ Calendly Embed Placeholder ]</p>
                <p className="text-xs">Loading scheduling interface...</p>
              </div>
              
              {/* Simulate Calendly Embed Container */}
              <div className="w-full h-full bg-background rounded-xl border border-border relative z-10 flex items-center justify-center">
                <div className="text-center p-8 w-full">
                  <div className="w-20 h-20 rounded-full border border-border bg-muted/50 mx-auto mb-6 flex items-center justify-center overflow-hidden p-3">
                    <Image src="/favicon.ico" alt="Nexus AI Logo" width={56} height={56} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Nexus AI Strategy Session</h3>
                  <p className="text-muted-foreground mb-8 text-sm">30 min, Web conferencing details provided upon confirmation.</p>
                  
                  <div className="max-w-sm mx-auto border border-border rounded-lg bg-card p-6 shadow-sm">
                    <div className="font-bold mb-4">Select a Date & Time</div>
                    <div className="grid grid-cols-7 gap-2 text-sm text-center mb-4">
                      {['S','M','T','W','T','F','S'].map((d,i) => <div key={i} className="text-muted-foreground font-medium">{d}</div>)}
                      {[...Array(30)].map((_, i) => (
                        <div 
                          key={i} 
                          onClick={() => { setSelectedDate(i + 1); setSelectedTime(null); }}
                          className={`p-2 rounded-full hover:bg-muted cursor-pointer transition-colors ${selectedDate === i + 1 ? 'bg-foreground text-background font-bold hover:bg-foreground/90' : ''}`}
                        >
                          {i + 1}
                        </div>
                      ))}
                    </div>
                    
                    {selectedDate && (
                      <div className="mt-6 pt-4 border-t border-border animate-in fade-in slide-in-from-top-2 duration-300">
                        <label htmlFor="time-picker" className="block font-bold mb-3 text-sm text-left">Choose your preferred time</label>
                        <input 
                          type="time" 
                          id="time-picker"
                          value={selectedTime || ""}
                          onChange={(e) => setSelectedTime(e.target.value)}
                          className="w-full h-11 px-4 rounded-md border border-border bg-background focus:outline-none focus:ring-1 focus:ring-foreground transition-all"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </div>
  );
}
