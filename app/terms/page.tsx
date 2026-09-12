import FadeIn from "@/components/ui/FadeIn";

export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen relative z-10">
      
      {/* Subtle Background */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[30%] right-[10%] w-[30%] h-[30%] bg-purple-600/5 rounded-full blur-[150px] mix-blend-screen"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24 max-w-4xl">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8">
            <span className="flex w-2 h-2 rounded-full bg-gray-400"></span>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-300">Legal Document</p>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-8 text-white">Terms of Service</h1>
          <p className="text-gray-400 mb-16 text-lg">Last Updated: September 12, 2026</p>
          
          <div className="prose prose-invert prose-lg max-w-none text-gray-300">
            <h2 className="text-white text-2xl font-bold tracking-tight mb-4 mt-10">1. Agreement to Terms</h2>
            <p className="mb-6 leading-relaxed">
              These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Nexus AI ("we," "us" or "our"), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
            </p>

            <h2 className="text-white text-2xl font-bold tracking-tight mb-4 mt-10">2. Intellectual Property Rights</h2>
            <p className="mb-6 leading-relaxed">
              Unless otherwise indicated, the Site and our AI Voice Automation Services are our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
            </p>

            <h2 className="text-white text-2xl font-bold tracking-tight mb-4 mt-10">3. User Representations</h2>
            <p className="mb-6 leading-relaxed">
              By using the Site, you represent and warrant that: 
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 marker:text-blue-500">
              <li>All registration information you submit will be true, accurate, current, and complete.</li>
              <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
              <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
              <li>You will not access the Site through automated or non-human means, whether through a bot, script, or otherwise, except for standard search engine indexing.</li>
              <li>You will not use the Site for any illegal or unauthorized purpose.</li>
            </ul>

            <h2 className="text-white text-2xl font-bold tracking-tight mb-4 mt-10">4. Modifications and Interruptions</h2>
            <p className="mb-6 leading-relaxed">
              We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site. We also reserve the right to modify or discontinue all or part of the Site without notice at any time.
            </p>

            <h2 className="text-white text-2xl font-bold tracking-tight mb-4 mt-10">5. Contact Us</h2>
            <p className="mb-6 leading-relaxed">
              In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: <a href="mailto:legal@buildwithnexusai.com" className="text-blue-400 hover:underline">legal@buildwithnexusai.com</a>
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
