import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Cpu, ShieldCheck, Users, Smile, Layers } from 'lucide-react';
import BookingForm from '@/components/BookingForm';

export const metadata: Metadata = {
  title: 'Dental Front Desk Automation Solutions | Nexus AI',
  description: 'Automate routine phone tasks for your dental office. Learn how dental front desk automation frees your team to focus on in-clinic patient care.',
  alternates: {
    canonical: 'https://www.buildwithnexusai.com/dental-front-desk-automation',
  },
  openGraph: {
    title: 'Dental Front Desk Automation Solutions | Nexus AI',
    description: 'Automate routine phone tasks for your dental office. Learn how dental front desk automation frees your team to focus on in-clinic patient care.',
    url: 'https://www.buildwithnexusai.com/dental-front-desk-automation',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'Dental Front Desk Automation Solutions',
  'provider': {
    '@type': 'Organization',
    'name': 'Nexus AI',
    'url': 'https://www.buildwithnexusai.com',
  },
  'description': 'Workflow automation solutions for dental practice front desk operations, automating routine phone inquiries and appointment requests.',
  'areaServed': 'US',
  'serviceType': 'Dental Practice Automation',
};

export default function DentalFrontDeskAutomationPage() {
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
            <Cpu className="w-4 h-4 text-[var(--accent)]" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[var(--accent)]">
              Practice Workflow Optimization
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white mb-6 leading-tight">
            Dental Front Desk Automation: Reducing Staff Overload & Missed Calls
          </h1>

          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto font-medium leading-relaxed mb-10">
            Front desk receptionists in busy dental offices juggle check-ins, insurance verifications, phone calls, and checkout co-pays simultaneously. Nexus AI automates repetitive phone calls so your staff can focus on delivering an exceptional in-person patient experience.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#booking-form"
              className="w-full sm:w-auto bg-[var(--accent)] text-black hover:bg-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(216,255,0,0.15)]"
            >
              See Automation Demo <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/ai-receptionist-for-dentists"
              className="w-full sm:w-auto border border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm flex items-center justify-center transition-all"
            >
              Explore AI Receptionist
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-black/40 border-y border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white mb-4">
              How Front Desk Automation Helps Dental Teams
            </h2>
            <p className="text-white/60 text-lg">
              Automation is not about replacing staff—it's about removing the repetitive phone stress that leads to front desk burnout.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10">
              <Smile className="w-10 h-10 text-[var(--accent)] mb-6" />
              <h3 className="text-2xl font-bold text-white mb-3">Reduces Staff Burnout</h3>
              <p className="text-white/60 leading-relaxed text-sm">
                Eliminates the constant phone ringing while receptionists are checking in patients or discussing complex treatment plans.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10">
              <Layers className="w-10 h-10 text-[var(--accent)] mb-6" />
              <h3 className="text-2xl font-bold text-white mb-3">Automates Repetitive FAQs</h3>
              <p className="text-white/60 leading-relaxed text-sm">
                Answers routine calls regarding office location, parking directions, accepted insurance plans, and pre-op fasting guidelines automatically.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10">
              <Users className="w-10 h-10 text-[var(--accent)] mb-6" />
              <h3 className="text-2xl font-bold text-white mb-3">Hybrid Human + AI Model</h3>
              <p className="text-white/60 leading-relaxed text-sm">
                The AI handles routine inquiries and gathers initial details, while complex cases, billing questions, and personalized needs route seamlessly to human staff.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Navigation Section */}
      <section className="py-16 bg-black/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
          <h2 className="text-2xl font-bold uppercase text-white mb-8">Explore All Dental Phone Solutions</h2>
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
            <Link href="/after-hours-dental-answering" className="px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:border-[var(--accent)] transition-all">
              After-Hours Dental Answering →
            </Link>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking-form" className="py-20 bg-black">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white uppercase mb-2">Book a 15-Minute Automation Demo</h2>
            <p className="text-white/60">Discover how front desk automation can relieve your dental staff.</p>
          </div>
          <div className="bg-white/[0.03] p-6 sm:p-10 rounded-3xl border border-white/10">
            <BookingForm />
          </div>
        </div>
      </section>
    </div>
  );
}
