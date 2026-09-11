import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, PhoneCall, ShieldCheck, Stethoscope, Clock, AlertTriangle } from 'lucide-react';
import BookingForm from '@/components/BookingForm';
import FAQItem from '@/components/FAQItem';

export const metadata: Metadata = {
  title: 'AI Receptionist for Dentists | Nexus AI Voice Agent',
  description: 'Discover how an AI receptionist for dentists handles incoming phone calls, answers patient questions, triages urgent dental pain, and integrates with dental workflows.',
  alternates: {
    canonical: 'https://www.buildwithnexusai.com/ai-receptionist-for-dentists',
  },
  openGraph: {
    title: 'AI Receptionist for Dentists | Nexus AI Voice Agent',
    description: 'Discover how an AI receptionist for dentists handles incoming phone calls, answers patient questions, triages urgent dental pain, and integrates with dental workflows.',
    url: 'https://www.buildwithnexusai.com/ai-receptionist-for-dentists',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'AI Receptionist for Dentists',
  'provider': {
    '@type': 'Organization',
    'name': 'Nexus AI',
    'url': 'https://www.buildwithnexusai.com',
  },
  'description': 'AI voice receptionist system engineered specifically for dental practices to answer calls, triage emergencies, and assist with patient appointment requests.',
  'areaServed': 'US',
  'serviceType': 'Dental Phone Automation',
};

export default function AiReceptionistForDentistsPage() {
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
            <Stethoscope className="w-4 h-4 text-[var(--accent)]" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[var(--accent)]">
              Dental Practice Phone Solutions
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white mb-6 leading-tight">
            AI Receptionist for Dentists: Automated Phone Handling Built for Practices
          </h1>

          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto font-medium leading-relaxed mb-10">
            Dental practices deal with intense phone call spikes during morning check-ins and afternoon checkouts. Nexus AI serves as your dedicated voice receptionist—answering calls instantly, answering routine dental FAQs, and capturing patient booking inquiries 24/7.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#booking-form"
              className="w-full sm:w-auto bg-[var(--accent)] text-black hover:bg-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(216,255,0,0.15)]"
            >
              Book a 15-Min Demo <ArrowRight className="w-4 h-4" />
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

      {/* Core Intent Section: How It Works for Dentists */}
      <section className="py-20 bg-black/40 border-y border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white mb-4">
              Engineered Specifically for Dental Workflows
            </h2>
            <p className="text-white/60 text-lg">
              Generic virtual receptionists don't understand dental terminology or emergency pain priorities. Nexus AI is trained on common practice protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10">
              <PhoneCall className="w-10 h-10 text-[var(--accent)] mb-6" />
              <h3 className="text-2xl font-bold text-white mb-3">Instant Call Answering</h3>
              <p className="text-white/60 leading-relaxed text-sm">
                Zero hold times for callers. When your front desk receptionist is assisting a patient in the chair or on another line, Nexus AI answers immediately on the first ring.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10">
              <AlertTriangle className="w-10 h-10 text-[var(--accent)] mb-6" />
              <h3 className="text-2xl font-bold text-white mb-3">Dental Pain Triage</h3>
              <p className="text-white/60 leading-relaxed text-sm">
                Distinguishes between routine hygiene inquiries and severe toothaches, abscesses, or facial swelling, escalating urgent calls according to your clinic's protocols.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10">
              <Clock className="w-10 h-10 text-[var(--accent)] mb-6" />
              <h3 className="text-2xl font-bold text-white mb-3">24/7 & Weekend Coverage</h3>
              <p className="text-white/60 leading-relaxed text-sm">
                Patients looking for a new dentist often call outside standard 8 AM - 5 PM office hours. Nexus AI captures these high-value new patient leads around the clock.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Navigation Section */}
      <section className="py-16 bg-black/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
          <h2 className="text-2xl font-bold uppercase text-white mb-8">Related Dental Phone Solutions</h2>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
            <Link href="/dental-answering-service" className="px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:border-[var(--accent)] transition-all">
              AI Dental Answering Service →
            </Link>
            <Link href="/ai-appointment-scheduling-dental" className="px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:border-[var(--accent)] transition-all">
              AI Appointment Scheduling →
            </Link>
            <Link href="/after-hours-dental-answering" className="px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:border-[var(--accent)] transition-all">
              After-Hours Dental Answering →
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
            <h2 className="text-3xl font-bold text-white uppercase mb-2">Schedule a 15-Minute Voice Demo</h2>
            <p className="text-white/60">Experience how Nexus AI answers calls live for dental practices.</p>
          </div>
          <div className="bg-white/[0.03] p-6 sm:p-10 rounded-3xl border border-white/10">
            <BookingForm />
          </div>
        </div>
      </section>
    </div>
  );
}
