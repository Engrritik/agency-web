import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, X, ShieldCheck, Clock, Users, Zap } from 'lucide-react';
import BookingForm from '@/components/BookingForm';

export const metadata: Metadata = {
  title: 'AI Dental Answering Service vs Call Centers | Nexus AI',
  description: 'Compare traditional call center answering services with a modern 24/7 AI dental answering service. Eliminate hold times, lower costs, and capture every inquiry.',
  alternates: {
    canonical: 'https://www.buildwithnexusai.com/dental-answering-service',
  },
  openGraph: {
    title: 'AI Dental Answering Service vs Call Centers | Nexus AI',
    description: 'Compare traditional call center answering services with a modern 24/7 AI dental answering service. Eliminate hold times, lower costs, and capture every inquiry.',
    url: 'https://www.buildwithnexusai.com/dental-answering-service',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'AI Dental Answering Service',
  'provider': {
    '@type': 'Organization',
    'name': 'Nexus AI',
    'url': 'https://www.buildwithnexusai.com',
  },
  'description': '24/7 AI-powered dental answering service replacing traditional call centers with instant zero-hold voice call handling.',
  'areaServed': 'US',
  'serviceType': 'Dental Call Answering',
};

export default function DentalAnsweringServicePage() {
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
            <Zap className="w-4 h-4 text-[var(--accent)]" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[var(--accent)]">
              Modern Call Center Alternative
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white mb-6 leading-tight">
            Modern Dental Answering Service: AI Voice Agent vs Traditional Call Centers
          </h1>

          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto font-medium leading-relaxed mb-10">
            Traditional third-party dental answering services rely on offsite human call operators who bill by the minute, lack clinic context, and force callers to wait on hold. Nexus AI provides an instant, dedicated AI voice agent trained specifically on your clinic's answers and scheduling logic.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#booking-form"
              className="w-full sm:w-auto bg-[var(--accent)] text-black hover:bg-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(216,255,0,0.15)]"
            >
              See AI Answering Demo <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/after-hours-dental-answering"
              className="w-full sm:w-auto border border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm flex items-center justify-center transition-all"
            >
              Explore After-Hours Coverage
            </Link>
          </div>
        </div>
      </section>

      {/* Direct Intent Comparison Table */}
      <section className="py-20 bg-black/40 border-y border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white mb-4">
              Comparing Dental Answering Options
            </h2>
            <p className="text-white/60 text-lg">
              How Nexus AI voice receptionist technology compares to legacy answering call centers for independent dental practices.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10 text-white font-bold text-lg">
                  <th className="py-4 px-6 w-1/3">Feature / Capability</th>
                  <th className="py-4 px-6 w-1/3 text-[var(--accent)]">Nexus AI Answering</th>
                  <th className="py-4 px-6 w-1/3 text-white/40">Traditional Call Center</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm text-white/80">
                <tr>
                  <td className="py-4 px-6 font-semibold text-white">Call Wait / Hold Time</td>
                  <td className="py-4 px-6 text-[var(--accent)] font-medium">Instant (0 Seconds)</td>
                  <td className="py-4 px-6 text-white/50">Variable (1 to 5+ Minutes)</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-white">Dental Knowledge Depth</td>
                  <td className="py-4 px-6 text-[var(--accent)] font-medium">Custom Clinic FAQs & Logic</td>
                  <td className="py-4 px-6 text-white/50">Generic script readers</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-white">Simultaneous Call Capacity</td>
                  <td className="py-4 px-6 text-[var(--accent)] font-medium">Unlimited concurrent calls</td>
                  <td className="py-4 px-6 text-white/50">Limited by operator count</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-white">Billing Model</td>
                  <td className="py-4 px-6 text-[var(--accent)] font-medium">Predictable Flat Monthly Rate</td>
                  <td className="py-4 px-6 text-white/50">Expensive per-minute charges</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-white">Emergency Call Escalation</td>
                  <td className="py-4 px-6 text-[var(--accent)] font-medium">Instant automated transfer</td>
                  <td className="py-4 px-6 text-white/50">Manual operator callback</td>
                </tr>
              </tbody>
            </table>
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
            <h2 className="text-3xl font-bold text-white uppercase mb-2">Book a 15-Minute Voice Demo</h2>
            <p className="text-white/60">Test how Nexus AI answers calls live vs your current answering service.</p>
          </div>
          <div className="bg-white/[0.03] p-6 sm:p-10 rounded-3xl border border-white/10">
            <BookingForm />
          </div>
        </div>
      </section>
    </div>
  );
}
