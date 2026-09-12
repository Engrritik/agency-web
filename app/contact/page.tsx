"use client";

import FadeIn from "@/components/ui/FadeIn";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { useState, useRef } from "react";
import { CheckCircle2, Clock, Mail, Loader2, AlertCircle } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [hour, setHour] = useState("09");
  const [minute, setMinute] = useState("00");
  const [ampm, setAmpm] = useState("AM");
  const [phone, setPhone] = useState("");
  
  const formRef = useRef<HTMLFormElement>(null);
  const selectedTime = selectedDate ? `${hour}:${minute} ${ampm}` : null;

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
    if (window.innerWidth < 1024 && formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    if (formData.get("bot-field")) {
      setFormStatus("success");
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
    <div className="flex flex-col min-h-screen relative z-10 overflow-x-hidden md:overflow-x-visible">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <FadeIn className="max-w-5xl mb-16 md:text-left mt-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-6 hover:bg-white/5 transition-colors">
            <span className="flex w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] animate-pulse-slow"></span>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-300">Contact Us</p>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-black tracking-tight leading-[0.9] mb-10 text-white">
            Let&apos;s Automate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-blue-500">Systems.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-2xl font-medium tracking-tight">
            Book a strategy call to see a live demo or send us a message to discuss your specific operational bottlenecks.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Form & Info */}
          <FadeIn delay={0.1} className="space-y-12">
            <div className="glass-panel border-white/10 rounded-[2.5rem] p-8 lg:p-10 relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <h2 className="text-3xl font-black mb-8 text-white tracking-tight">Send us a message</h2>
              
              {formStatus === "success" ? (
                <div className="py-16 flex flex-col items-center justify-center text-center space-y-6 animate-in zoom-in-95 duration-500">
                  <div className="w-24 h-24 bg-green-500/10 border border-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-2 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-3 text-white">Message Received</h3>
                    <p className="text-lg text-gray-400 font-medium">
                      We&apos;ll get back to you within 24 hours to discuss your automation needs.
                    </p>
                  </div>
                  <Button 
                    variant="outline" 
                    className="mt-6 h-12 px-6 border-white/20 text-white hover:bg-white/10 hover:text-white rounded-full bg-transparent"
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
                    <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl flex items-start gap-3 animate-in fade-in slide-in-from-top-2">
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                      <p className="text-sm font-medium">Something went wrong submitting the form. Please try again or email us directly.</p>
                    </div>
                  )}

                  <input type="text" name="bot-field" className="hidden" tabIndex={-1} autoComplete="off" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold text-gray-300">Name</label>
                      <input 
                        id="name" 
                        name="name" 
                        type="text" 
                        required 
                        className="w-full h-14 px-5 rounded-2xl border border-white/10 bg-black/40 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-600" 
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="business" className="text-sm font-bold text-gray-300">Clinic Name</label>
                      <input 
                        id="business" 
                        name="business" 
                        type="text" 
                        required 
                        className="w-full h-14 px-5 rounded-2xl border border-white/10 bg-black/40 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-600" 
                        placeholder="Acme Dental"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-bold text-gray-300">Phone</label>
                      <input 
                        id="phone" 
                        name="phone" 
                        type="tel" 
                        value={phone}
                        onChange={handlePhoneChange}
                        required
                        className="w-full h-14 px-5 rounded-2xl border border-white/10 bg-black/40 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-600" 
                        placeholder="(555) 123-4567"
                        maxLength={14}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="website" className="text-sm font-bold text-gray-300">Website</label>
                      <input 
                        id="website" 
                        name="website" 
                        type="url" 
                        className="w-full h-14 px-5 rounded-2xl border border-white/10 bg-black/40 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-600" 
                        placeholder="https://example.com"
                        pattern="https?://.*"
                        title="Include http:// or https://"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-gray-300">What do you want automated?</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      required 
                      rows={4}
                      className="w-full p-5 rounded-2xl border border-white/10 bg-black/40 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-y placeholder:text-gray-600" 
                      placeholder="We need to handle after-hours bookings and basic insurance questions..."
                    ></textarea>
                  </div>

                  <div className={`space-y-3 p-6 rounded-2xl transition-all duration-300 ${selectedDate ? 'border border-blue-500/30 bg-blue-500/5 shadow-[0_0_20px_rgba(59,130,246,0.1)]' : 'border border-white/5 bg-white/5'}`}>
                    <label className="text-sm font-bold flex items-center gap-2 text-white">
                      <Clock className={`w-4 h-4 ${selectedDate ? 'text-blue-400' : 'text-gray-500'}`} />
                      Strategy Call Time
                    </label>
                    <div className="text-sm mt-1">
                      {selectedDate && selectedTime ? (
                        <span className="font-bold text-lg text-white animate-in fade-in">
                          Scheduled for <span className="text-blue-400">Day {selectedDate} at {selectedTime}</span>
                        </span>
                      ) : (
                        <span className="text-gray-500 font-medium tracking-tight">No time selected. Please select a date from the calendar.</span>
                      )}
                    </div>
                    <input type="hidden" name="DemoDate" value={selectedDate ? `Day ${selectedDate}` : "Not selected"} />
                    <input type="hidden" name="DemoTime" value={selectedTime || "Not selected"} />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full h-16 text-lg font-bold rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all relative overflow-hidden group"
                    disabled={formStatus === "submitting"}
                  >
                    {formStatus === "submitting" ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="w-6 h-6 animate-spin" />
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
              <div className="p-8 glass-panel border border-white/10 rounded-3xl flex flex-col justify-center items-center text-center hover-card hover:bg-white/5 transition-all">
                <div className="w-14 h-14 bg-blue-500/10 border border-blue-500/20 rounded-full flex items-center justify-center mb-5 text-blue-400">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-bold mb-2 text-xl text-white">Email Us</h3>
                <p className="text-gray-400 font-medium tracking-tight"><a href="mailto:ritik@buildwithnexusai.com" className="hover:text-blue-400 transition-colors">ritik@buildwithnexusai.com</a></p>
              </div>
              <div className="p-8 glass-panel border border-white/10 rounded-3xl flex flex-col justify-center items-center text-center hover-card hover:bg-white/5 transition-all">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-5 text-white">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-bold mb-2 text-xl text-white">Response Time</h3>
                <p className="text-gray-400 font-medium tracking-tight">Within 24 hours</p>
              </div>
            </div>
          </FadeIn>

          {/* Right Column: Calendly Embed Style */}
          <FadeIn delay={0.2} className="h-full">
            <TiltCard className="h-full min-h-[700px]">
              <div className="glass-panel border-white/10 rounded-[2.5rem] p-3 h-full flex flex-col relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-[#030305]/80">
                {/* Simulate Calendly Embed Container */}
              <div className="w-full h-full bg-[#0a0f18] rounded-3xl border border-white/5 relative z-10 flex items-center justify-center py-10 my-auto">
                <div className="text-center p-8 w-full max-w-md">
                  <div className="w-24 h-24 rounded-full border border-white/10 bg-white/5 mx-auto mb-8 flex items-center justify-center overflow-hidden p-5 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                    <Image src="/favicon.ico" alt="Nexus AI Logo" width={64} height={64} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-2xl font-black mb-3 text-white">Nexus AI Strategy Session</h3>
                  <p className="text-gray-400 mb-10 text-base font-medium">30 min, Web conferencing details provided upon confirmation.</p>
                  
                  <div className="border border-white/10 rounded-3xl bg-black/40 p-8 shadow-sm backdrop-blur-xl">
                    <div className="font-bold mb-6 text-lg text-left text-white">Select a Date & Time</div>
                    <div className="grid grid-cols-7 gap-2 text-sm text-center mb-6">
                      {['S','M','T','W','T','F','S'].map((d,i) => <div key={i} className="text-gray-500 font-bold">{d}</div>)}
                      {[...Array(30)].map((_, i) => (
                        <div 
                          key={i} 
                          onClick={() => handleDateSelect(i + 1)}
                          className={`p-3 rounded-full hover:bg-white/10 cursor-pointer transition-all font-medium ${selectedDate === i + 1 ? 'bg-blue-600 text-white font-bold shadow-[0_0_15px_rgba(59,130,246,0.5)] scale-110' : 'text-gray-300'}`}
                        >
                          {i + 1}
                        </div>
                      ))}
                    </div>
                    
                    {selectedDate && (
                      <div className="mt-8 pt-6 border-t border-white/10 animate-in fade-in slide-in-from-top-4 duration-500">
                        <label className="block font-bold mb-4 text-left text-white">Choose your preferred time</label>
                        <div className="flex items-center gap-3">
                          <div className="flex-1 flex bg-black border border-white/10 rounded-2xl overflow-hidden focus-within:border-blue-500 transition-all h-14">
                            <select 
                              value={hour} 
                              onChange={(e) => setHour(e.target.value)}
                              className="w-full bg-transparent px-4 py-2 outline-none appearance-none text-center cursor-pointer hover:bg-white/5 font-bold text-lg text-white"
                            >
                              {Array.from({length: 12}, (_, i) => String(i + 1).padStart(2, '0')).map(h => (
                                <option key={h} value={h} className="bg-black text-white">{h}</option>
                              ))}
                            </select>
                            <span className="flex items-center text-gray-500 font-bold text-xl">:</span>
                            <select 
                              value={minute} 
                              onChange={(e) => setMinute(e.target.value)}
                              className="w-full bg-transparent px-4 py-2 outline-none appearance-none text-center cursor-pointer hover:bg-white/5 font-bold text-lg text-white"
                            >
                              {["00", "15", "30", "45"].map(m => (
                                <option key={m} value={m} className="bg-black text-white">{m}</option>
                              ))}
                            </select>
                          </div>
                          
                          <div className="flex bg-white/5 p-1.5 rounded-2xl border border-white/10 h-14 w-28">
                            <button 
                              type="button"
                              className={`flex-1 rounded-xl text-sm font-bold transition-all ${ampm === "AM" ? "bg-white shadow-[0_0_10px_rgba(255,255,255,0.4)] text-black" : "text-gray-400 hover:text-white"}`}
                              onClick={() => setAmpm("AM")}
                            >
                              AM
                            </button>
                            <button 
                              type="button"
                              className={`flex-1 rounded-xl text-sm font-bold transition-all ${ampm === "PM" ? "bg-white shadow-[0_0_10px_rgba(255,255,255,0.4)] text-black" : "text-gray-400 hover:text-white"}`}
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
          </TiltCard>
        </FadeIn>

        </div>
      </div>
    </div>
  );
}
