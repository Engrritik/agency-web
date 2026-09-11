import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Moon, ShieldCheck, PhoneCall, AlertCircle, Clock } from 'lucide-react';
import BookingForm from '@/components/BookingForm';

export const metadata: Metadata = {
  title: 'After-Hours Dental Answering Service | 24/7 Voice AI | Nexus AI',
  description: 'Never lose a new patient call after 5 PM or on weekends. Discover how Nexus AI provides 24/7 after-hours dental answering, appointment capture, and urgent care triage.',
  alternates: {
    canonical: 'https://www.buildwithnexusai.com/after-hours-dental-answering',
  },
  openGraph: {
    title: 'After-Hours Dental Answering Service | 24/7 Voice AI | Nexus AI',
    description: 'Never lose a new patient call after 5 PM or on weekends. Discover how Nexus AI provides 24/7 after-hours dental answering, appointment capture, and urgent care triage.',
    url: 'https://www.buildwithnexusai.com/after-hours-dental-answering',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'After-Hours Answering Service for Dental Practices',
  'provider': {
    '@type': 'Organization',
    'name': 'Nexus AI',
    'url': 'https://www.buildwithnexusai.com',
  },
  'description': '24/7 after-hours phone call handling system for dental clinics to triage urgent dental care and record appointment requests overnight.',
  'areaServed': 'US',
  'serviceType': 'After Hours Call Answering',
};

export default function AfterHoursDentalAnsweringPage() {
  return (
    <div className="flex flex-col min-h-screen bg-transparent relative z-10 overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 mb-6">
            <Moon className="w-4 h-4 text-[var(--accent)]" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[var(--accent)]">
              24/7 & Weekend Patient Coverage
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white mb-6 leading-tight">
            After-Hours Answering Service for Dental Practices
          </h1>

          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto font-medium leading-relaxed mb-10">
            Patients often search for dental care after working hours or over the weekend when suffering from sudden tooth pain or seeking a routine appointment. Nexus AI provides continuous after-hours call handling—collecting details, scheduling requests, and routing true emergencies instantly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#booking-form"
              className="w-full sm:w-auto bg-[var(--accent)] text-black hover:bg-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(216,255,0,0.15)]"
            >
              See After-Hours AI Demo <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/dental-answering-service"
              className="w-full sm:w-auto border border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm flex items-center justify-center transition-all"
            >
              Compare Answering Services
            </Link>
          </div>
        </div>
      </section>

      {/* Breakdown Section: Emergency Triage vs Routine Inquiries */}
      <section className="py-20 bg-black/40 border-y border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white mb-4">
              Handling Late-Night & Weekend Calls Correctly
            </h2>
            <p className="text-white/60 text-lg">
              Not all after-hours calls require waking up an on-call dentist. Nexus AI categorizes every late call based on your clinical guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center mb-6 font-bold">
                🚨 Emergency
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Urgent Dental Emergency Calls</h3>
              <ul className="space-y-3 text-white/70 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">•</span> Detects severe swelling, knocked-out teeth, bleeding, or intense pain keywords.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">•</span> Instantly forwards call or notifies your designated on-call doctor protocol line.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">•</span> Ensures urgent patients receive immediate attention without delay.
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center mb-6 font-bold">
                📅 Routine
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Routine Appointment & FAQ Calls</h3>
              <ul className="space-y-3 text-white/70 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent)] font-bold">•</span> Answers questions about clinic location, accepted insurance policies, and office hours.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent)] font-bold">•</span> Captures new patient booking requests so your front desk can confirm first thing in the morning.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent)] font-bold">•</span> Prevents potential new patients from hanging up and calling competing clinics.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Navigation Section */}
      <section className="py-16 bg-black/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
          <h2 className="text-2xl font-bold uppercase text-white mb-8">Related Dental Phone Solutions</h2>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
            <Link href="/ai-receptionist-for-dentists" className="px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:border-[var(--accent)] transition-all">
              AI Receptionist for Dentists →
            </Link>
            <Link href="/dental-answering-service" className="px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:border-[var(--accent)] transition-all">
              Dental Answering Service →
            </Link>
            <Link href="/ai-appointment-scheduling-dental" className="px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:border-[var(--accent)] transition-all">
              AI Appointment Scheduling →
            </Link>
            <Link href="/dental-front-desk-automation" className="px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:border-[var(--accent)] transition-all">
              Dental Front Desk Automation →
            </Link>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking-form" className="py-20 bg-black">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white uppercase mb-2">Book a 15-Minute Voice Demo</h2>
            <p className="text-white/60">Test how Nexus AI handles after-hours calls live.</p>
          </div>
          <div className="bg-white/[0.03] p-6 sm:p-10 rounded-3xl border border-white/10">
            <BookingForm />
          </div>
        </div>
      </section>
    </div>
  );
}
