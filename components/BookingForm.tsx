"use client";

import { useState } from "react";
import Button from "./ui/Button";
import { CheckCircle2 } from "lucide-react";

export default function BookingForm() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    clinicName: "",
    phone: "",
    query: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    // TODO: Insert n8n Webhook URL here
    /*
    try {
      await fetch('YOUR_N8N_WEBHOOK_URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    */

    // Simulate success response
    setTimeout(() => {
      setFormStatus("success");
    }, 1500);
  };

  if (formStatus === "success") {
    return (
      <div className="w-full animate-fadeIn mt-12 max-w-3xl mx-auto">
        <div className="text-center mb-6">
          <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 text-xs px-3 py-1 rounded-full font-medium mb-2">
            ✓ Information Saved Securely
          </span>
          <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
            Select Your Demo Time Below
          </h3>
        </div>
        
        {/* Live Cal.com Router */}
        <div className="w-full h-[600px] rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white">
          <iframe 
            src="https://cal.com/ritik-kumar-grealv/15min?embed=true" 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            scrolling="no"
            className="w-full h-full"
          />
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-left max-w-xl mx-auto mt-12 bg-card p-8 rounded-2xl border border-border shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full h-11 px-4 rounded-md border border-border bg-background focus:outline-none focus:ring-1 focus:ring-foreground transition-all"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full h-11 px-4 rounded-md border border-border bg-background focus:outline-none focus:ring-1 focus:ring-foreground transition-all"
            placeholder="john@example.com"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="clinicName" className="text-sm font-medium">Clinic/Business Name</label>
          <input
            id="clinicName"
            name="clinicName"
            type="text"
            required
            value={formData.clinicName}
            onChange={handleChange}
            className="w-full h-11 px-4 rounded-md border border-border bg-background focus:outline-none focus:ring-1 focus:ring-foreground transition-all"
            placeholder="Acme Clinic"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full h-11 px-4 rounded-md border border-border bg-background focus:outline-none focus:ring-1 focus:ring-foreground transition-all"
            placeholder="(555) 123-4567"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="query" className="text-sm font-medium">General Query</label>
        <textarea
          id="query"
          name="query"
          required
          rows={4}
          value={formData.query}
          onChange={handleChange}
          className="w-full p-4 rounded-md border border-border bg-background focus:outline-none focus:ring-1 focus:ring-foreground transition-all resize-y"
          placeholder="What are you looking to automate?"
        ></textarea>
      </div>

      <Button
        type="submit"
        className="w-full h-12 text-lg"
        disabled={formStatus === "submitting"}
      >
        {formStatus === "submitting" ? "Connecting to Nexus AI..." : "Book a Demo"}
      </Button>
    </form>
  );
}
