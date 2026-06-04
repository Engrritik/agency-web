'use client';

import React, { useState } from 'react';

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
      // 🚀 Real Formspree Endpoint Live Integration
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
    <section id="booking-form" className="py-20 bg-white dark:bg-neutral-950 transition-colors">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 shadow-xl">
          
          {!submitted ? (
            /* STEP 1: High-Converting Lead Capture Form */
            <div className="max-w-md mx-auto">
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white text-center mb-2">
                Book a 15-Minute Voice AI Demo
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 text-center mb-8">
                See how Nexus AI answers calls, qualifies patients, and updates your PMS live.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-1">Your Name</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-2.5 bg-white dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-700 rounded-lg text-neutral-900 dark:text-white text-sm" placeholder="Dr. John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-1">Clinic Name</label>
                  <input type="text" name="clinicName" required value={formData.clinicName} onChange={handleChange} className="w-full px-4 py-2.5 bg-white dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-700 rounded-lg text-neutral-900 dark:text-white text-sm" placeholder="Apex Dental Care" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-1">Clinic Email</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-2.5 bg-white dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-700 rounded-lg text-neutral-900 dark:text-white text-sm" placeholder="office@apexdental.com" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-1">Phone Number</label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-2.5 bg-white dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-700 rounded-lg text-neutral-900 dark:text-white text-sm" placeholder="(555) 000-0000" />
                </div>
                
                <button type="submit" disabled={loading} className="w-full mt-2 bg-black dark:bg-white text-white dark:text-black font-semibold text-sm py-3 rounded-lg hover:opacity-90 transition disabled:opacity-50 flex items-center justify-center">
                  {loading ? "Securing Secure Line..." : "Proceed to Calendar →"}
                </button>
              </form>
            </div>
          ) : (
            /* STEP 2: Live Cal.com Scheduler Embed */
            <div className="w-full">
              <div className="text-center mb-6">
                <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 text-xs px-3 py-1 rounded-full font-medium mb-2">
                  ✓ Information Saved Securely
                </span>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                  Select Your Demo Time Below
                </h3>
              </div>
              
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
          )}

        </div>
      </div>
    </section>
  );
}
