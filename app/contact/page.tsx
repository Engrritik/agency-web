"use client";

import FadeIn from "@/components/ui/FadeIn";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { useState, useRef } from "react";
import { CheckCircle2, Clock, Mail, Loader2, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [hour, setHour] = useState("09");
  const [minute, setMinute] = useState("00");
  const [ampm, setAmpm] = useState("AM");
  const [phone, setPhone] = useState("");
  
  const formRef = useRef<HTMLFormElement>(null);
  const selectedTime = selectedDate ? `${hour}:${minute} ${ampm}` : null;

  // Format phone number as user types: (XXX) XXX-XXXX
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, "");
    let formatted = raw;
    if (raw.length > 0) {
      if (raw.length <= 3) {
        formatted = `(${raw}`;
      } else if (raw.length <= 6) {
        formatted = `(${raw.slice(0, 3)}) ${raw.slice(3)}`;
      } else {
        formatted = `(${raw.slice(0, 3)}) ${raw.slice(3, 6)}-${raw.slice(6, 10)}`;
      }
    }
    setPhone(formatted);
  };

  const handleDateSelect = (day: number) => {
    setSelectedDate(day);
    // Smooth scroll to form if on mobile
    if (window.innerWidth < 1024 && formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Honeypot check
    const formData = new FormData(e.currentTarget);
    if (formData.get("bot-field")) {
      setFormStatus("success"); // Fake success for bots
      return;
    }

    setFormStatus("submitting");
    
    try {
      const response = await fetch("https://formspree.io/f/mgobepzd", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("success");
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <div className="flex flex-col min-h-screen pt-48 pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="max-w-5xl mb-32 md:text-left">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-6">Contact Us</p>
          <h1 className="text-6xl md:text-7xl lg:text-[7rem] font-bold tracking-tighter leading-[0.9] mb-10 text-foreground">
            Let&apos;s Automate Your Systems.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
            Book a strategy call to see a live demo or send us a message to discuss your specific operational bottlenecks.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Form & Info */}
          <FadeIn delay={0.1} className="space-y-12">
            <div className="bg-card border border-border rounded-3xl p-8 lg:p-10 shadow-sm relative overflow-hidden">
              <h2 className="text-2xl font-bold mb-8">Send us a message</h2>
              
              {formStatus === "success" ? (
                <div className="py-16 flex flex-col items-center justify-center text-center space-y-6 animate-in zoom-in-95 duration-500">
                  <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-2">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-2">Message Received</h3>
                    <p className="text-lg text-muted-foreground">
                      We&apos;ll get back to you within 24 hours to discuss your automation needs.
                    </p>
                  </div>
                  <Button 
                    variant="outline" 
                    className="mt-6 h-12 px-6"
                    onClick={() => {
                      setFormStatus("idle");
                      setSelectedDate(null);
                      setPhone("");
                    }}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form 
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-6 relative z-10"
                >
                  {formStatus === "error" && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-600 rounded-lg flex items-start gap-3 animate-in fade-in slide-in-from-top-2">
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                      <p className="text-sm">Something went wrong submitting the form. Please try again or email us directly.</p>
                    </div>
                  )}

                  {/* Honeypot */}
                  <input type="text" name="bot-field" className="hidden" tabIndex={-1} autoComplete="off" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold">Name</label>
                      <input 
                        id="name" 
                        name="name" 
                        type="text" 
                        required 
                        className="w-full h-12 px-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-foreground transition-all" 
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="business" className="text-sm font-bold">Clinic Name</label>
                      <input 
                        id="business" 
                        name="business" 
                        type="text" 
                        required 
                        className="w-full h-12 px-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-foreground transition-all" 
                        placeholder="Acme Dental"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-bold">Phone</label>
                      <input 
                        id="phone" 
                        name="phone" 
                        type="tel" 
                        value={phone}
                        onChange={handlePhoneChange}
                        required
                        className="w-full h-12 px-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-foreground transition-all" 
                        placeholder="(555) 123-4567"
                        maxLength={14}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="website" className="text-sm font-bold">Website</label>
                      <input 
                        id="website" 
                        name="website" 
                        type="url" 
                        className="w-full h-12 px-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-foreground transition-all" 
                        placeholder="https://example.com"
                        pattern="https?://.*"
                        title="Include http:// or https://"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold">What do you want automated?</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      required 
                      rows={4}
                      className="w-full p-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-foreground transition-all resize-y" 
                      placeholder="We need to handle after-hours bookings and basic insurance questions..."
                    ></textarea>
                  </div>

                  <div className={`space-y-2 border p-5 rounded-xl transition-colors duration-300 ${selectedDate ? 'border-foreground/50 bg-foreground/5' : 'border-border bg-muted/30'}`}>
                    <label className="text-sm font-bold flex items-center gap-2">
                      <Clock className={`w-4 h-4 ${selectedDate ? 'text-foreground' : 'text-muted-foreground'}`} />
                      Strategy Call Time
                    </label>
                    <div className="text-sm mt-1">
                      {selectedDate && selectedTime ? (
                        <span className="font-bold text-lg text-foreground animate-in fade-in">
                          Scheduled for Day {selectedDate} at {selectedTime}
                        </span>
                      ) : (
                        <span className="text-muted-foreground">No time selected. Please select a date from the right panel.</span>
                      )}
                    </div>
                    <input type="hidden" name="DemoDate" value={selectedDate ? `Day ${selectedDate}` : "Not selected"} />
                    <input type="hidden" name="DemoTime" value={selectedTime || "Not selected"} />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full h-14 text-base relative overflow-hidden group"
                    disabled={formStatus === "submitting"}
                  >
                    {formStatus === "submitting" ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Processing...
                      </span>
                    ) : (
                      "Submit Inquiry"
                    )}
                  </Button>
                </form>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 border border-border rounded-3xl bg-muted/30 flex flex-col justify-center items-center text-center hover-card">
                <div className="w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center mb-4 text-foreground">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="font-bold mb-1 text-lg">Email Us</h3>
                <p className="text-muted-foreground"><a href="mailto:ritik@buildwithnexusai.com" className="hover:text-foreground transition-colors">ritik@buildwithnexusai.com</a></p>
              </div>
              <div className="p-8 border border-border rounded-3xl bg-muted/30 flex flex-col justify-center items-center text-center hover-card">
                <div className="w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center mb-4 text-foreground">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-bold mb-1 text-lg">Response Time</h3>
                <p className="text-muted-foreground">Within 24 hours</p>
              </div>
            </div>
          </FadeIn>

          {/* Right Column: Calendly Embed */}
          <FadeIn delay={0.2} className="h-full">
            <div className="bg-card border border-border rounded-3xl p-2 h-full min-h-[700px] flex flex-col relative overflow-hidden shadow-sm">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-muted-foreground z-0">
                <p className="mb-2 font-mono text-sm">[ Calendly Embed Placeholder ]</p>
                <p className="text-xs">Loading scheduling interface...</p>
              </div>
              
              {/* Simulate Calendly Embed Container */}
              <div className="w-full h-full bg-background rounded-2xl border border-border relative z-10 flex items-center justify-center">
                <div className="text-center p-8 w-full max-w-md">
                  <div className="w-24 h-24 rounded-full border border-border bg-card mx-auto mb-6 flex items-center justify-center overflow-hidden p-4 shadow-sm">
                    <Image src="/favicon.ico" alt="Nexus AI Logo" width={64} height={64} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Nexus AI Strategy Session</h3>
                  <p className="text-muted-foreground mb-10 text-base">30 min, Web conferencing details provided upon confirmation.</p>
                  
                  <div className="border border-border rounded-2xl bg-card p-8 shadow-sm">
                    <div className="font-bold mb-6 text-lg text-left">Select a Date & Time</div>
                    <div className="grid grid-cols-7 gap-2 text-sm text-center mb-6">
                      {['S','M','T','W','T','F','S'].map((d,i) => <div key={i} className="text-muted-foreground font-bold">{d}</div>)}
                      {[...Array(30)].map((_, i) => (
                        <div 
                          key={i} 
                          onClick={() => handleDateSelect(i + 1)}
                          className={`p-3 rounded-full hover:bg-muted cursor-pointer transition-all font-medium ${selectedDate === i + 1 ? 'bg-foreground text-background font-bold shadow-md scale-110' : ''}`}
                        >
                          {i + 1}
                        </div>
                      ))}
                    </div>
                    
                    {selectedDate && (
                      <div className="mt-8 pt-6 border-t border-border animate-in fade-in slide-in-from-top-4 duration-500">
                        <label className="block font-bold mb-4 text-left">Choose your preferred time</label>
                        <div className="flex items-center gap-3">
                          <div className="flex-1 flex bg-background border border-border rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-foreground transition-all h-14">
                            <select 
                              value={hour} 
                              onChange={(e) => setHour(e.target.value)}
                              className="w-full bg-transparent px-4 py-2 outline-none appearance-none text-center cursor-pointer hover:bg-muted/50 font-bold text-lg"
                            >
                              {Array.from({length: 12}, (_, i) => String(i + 1).padStart(2, '0')).map(h => (
                                <option key={h} value={h}>{h}</option>
                              ))}
                            </select>
                            <span className="flex items-center text-muted-foreground font-bold text-xl">:</span>
                            <select 
                              value={minute} 
                              onChange={(e) => setMinute(e.target.value)}
                              className="w-full bg-transparent px-4 py-2 outline-none appearance-none text-center cursor-pointer hover:bg-muted/50 font-bold text-lg"
                            >
                              {["00", "15", "30", "45"].map(m => (
                                <option key={m} value={m}>{m}</option>
                              ))}
                            </select>
                          </div>
                          
                          <div className="flex bg-muted p-1.5 rounded-xl border border-border h-14 w-28">
                            <button 
                              type="button"
                              className={`flex-1 rounded-lg text-sm font-bold transition-all ${ampm === "AM" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                              onClick={() => setAmpm("AM")}
                            >
                              AM
                            </button>
                            <button 
                              type="button"
                              className={`flex-1 rounded-lg text-sm font-bold transition-all ${ampm === "PM" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                              onClick={() => setAmpm("PM")}
                            >
                              PM
                            </button>
                          </div>
                        </div>
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
