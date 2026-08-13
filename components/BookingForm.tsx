'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    clinicName: '',
    email: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://formspree.io/f/mgobepzd', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error("Formspree submission failed error status.");
      }
    } catch (error) {
      console.error("Error saving lead data to Formspree:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-background rounded-[2rem] p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-border">
      {!submitted ? (
        <div className="w-full">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Book a 15-Minute Voice AI Demo
          </h3>
          <p className="text-sm text-muted-foreground mb-8">
            See how Nexus AI answers calls, qualifies patients, and updates your PMS live.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-[11px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-2">Your Name</label>
              <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3.5 bg-transparent border border-border/60 hover:border-border rounded-xl text-foreground text-sm focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600/50 focus:outline-none transition-all placeholder:text-muted-foreground/50" placeholder="Dr. John Doe" />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-2">Clinic Name</label>
              <input type="text" name="clinicName" required value={formData.clinicName} onChange={handleChange} className="w-full px-4 py-3.5 bg-transparent border border-border/60 hover:border-border rounded-xl text-foreground text-sm focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600/50 focus:outline-none transition-all placeholder:text-muted-foreground/50" placeholder="Apex Dental Care" />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-2">Clinic Email</label>
              <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3.5 bg-transparent border border-border/60 hover:border-border rounded-xl text-foreground text-sm focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600/50 focus:outline-none transition-all placeholder:text-muted-foreground/50" placeholder="office@apexdental.com" />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-2">Phone Number</label>
              <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-3.5 bg-transparent border border-border/60 hover:border-border rounded-xl text-foreground text-sm focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600/50 focus:outline-none transition-all placeholder:text-muted-foreground/50" placeholder="(555) 000-0000" />
            </div>
            
            <button 
              type="submit" 
              disabled={loading} 
              className="w-full mt-4 bg-foreground text-background font-semibold text-sm py-4 rounded-xl hover:bg-foreground/90 transition-all shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_25px_rgba(0,0,0,0.2)] disabled:opacity-70 flex items-center justify-center"
            >
              {loading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full"
                />
              ) : "Proceed to Calendar"}
            </button>
          </form>
        </div>
      ) : (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <div className="text-center mb-6">
            <span className="inline-block bg-green-500/10 text-green-600 text-xs px-3 py-1.5 rounded-full font-semibold mb-4">
              ✓ Information Saved Securely
            </span>
            <h3 className="text-xl font-bold text-foreground">
              Select Your Demo Time Below
            </h3>
          </div>
          
          <div className="w-full h-[600px] rounded-xl overflow-hidden border border-border bg-white">
            <iframe 
              src="https://cal.com/ritik-kumar-grealv/15min?embed=true" 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              scrolling="no"
              className="w-full h-full"
            />
          </div>
        </motion.div>
      )}
    </div>
  );
}

