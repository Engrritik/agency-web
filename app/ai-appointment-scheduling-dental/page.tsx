import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, CheckCircle2, ShieldCheck, RefreshCw } from 'lucide-react';
import BookingForm from '@/components/BookingForm';

export const metadata: Metadata = {
  title: 'AI Appointment Scheduling for Dental Practices | Nexus AI',
  description: 'Streamline patient bookings with AI appointment scheduling for dental practices. Learn how voice AI handles booking requests, reschedules, and openings 24/7.',
  alternates: {
    canonical: 'https://www.buildwithnexusai.com/ai-appointment-scheduling-dental',
  },
  openGraph: {
    title: 'AI Appointment Scheduling for Dental Practices | Nexus AI',
    description: 'Streamline patient bookings with AI appointment scheduling for dental practices. Learn how voice AI handles booking requests, reschedules, and openings 24/7.',
    url: 'https://www.buildwithnexusai.com/ai-appointment-scheduling-dental',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'AI Appointment Scheduling for Dental Practices',
  'provider': {
    '@type': 'Organization',
    'name': 'Nexus AI',
    'url': 'https://www.buildwithnexusai.com',
  },
  'description': 'Automated phone-based appointment booking and rescheduling system for dental clinics.',
  'areaServed': 'US',
  'serviceType': 'Dental Appointment Automation',
};

export default function AiAppointmentSchedulingDentalPage() {
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
            <Calendar className="w-4 h-4 text-[var(--accent)]" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[var(--accent)]">
              Automated Calendar Workflows
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white mb-6 leading-tight">
            AI Appointment Scheduling for Dental Practices
          </h1>

          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto font-medium leading-relaxed mb-10">
            Scheduling a dental cleaning or emergency consultation should take under two minutes. Nexus AI handles appointment booking requests over the phone in natural conversation—verifying patient status, gathering key info, and preventing double-booking.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#booking-form"
              className="w-full sm:w-auto bg-[var(--accent)] text-black hover:bg-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(216,255,0,0.15)]"
            >
              See Scheduling Demo <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/dental-front-desk-automation"
              className="w-full sm:w-auto border border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm flex items-center justify-center transition-all"
            >
              View Front Desk Automation
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-black/40 border-y border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white mb-4">
              How AI Handles Phone Booking Requests
            </h2>
            <p className="text-white/60 text-lg">
              Nexus AI adheres strictly to your practice's rules for appointment slot spacing, hygiene vs doctor time, and patient types.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10">
              <Calendar className="w-10 h-10 text-[var(--accent)] mb-6" />
              <h3 className="text-2xl font-bold text-white mb-3">New Patient Intake</h3>
              <p className="text-white/60 leading-relaxed text-sm">
                Collects essential patient details (name, contact info, chief complaint, insurance provider) and guides callers through scheduling options.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10">
              <RefreshCw className="w-10 h-10 text-[var(--accent)] mb-6" />
              <h3 className="text-2xl font-bold text-white mb-3">Reschedule Handling</h3>
              <p className="text-white/60 leading-relaxed text-sm">
                When patients call to change their appointment time, the AI checks available openings according to your rescheduling window policy.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10">
              <Clock className="w-10 h-10 text-[var(--accent)] mb-6" />
              <h3 className="text-2xl font-bold text-white mb-3">After-Hours Requests</h3>
              <p className="text-white/60 leading-relaxed text-sm">
                Captures late-night booking requests when competitor practices send callers straight to unmonitored voicemail boxes.
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
            <Link href="/ai-receptionist-for-dentists" className="px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:border-[var(--accent)] transition-all">
              AI Receptionist for Dentists →
            </Link>
            <Link href="/dental-answering-service" className="px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:border-[var(--accent)] transition-all">
              Dental Answering Service →
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
            <h2 className="text-3xl font-bold text-white uppercase mb-2">Book a 15-Minute Voice Demo</h2>
            <p className="text-white/60">Experience live AI appointment booking for dental clinics.</p>
          </div>
          <div className="bg-white/[0.03] p-6 sm:p-10 rounded-3xl border border-white/10">
            <BookingForm />
          </div>
        </div>
      </section>
    </div>
  );
}
