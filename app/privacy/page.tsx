import FadeIn from "@/components/ui/FadeIn";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen relative z-10">
      
      {/* Subtle Background */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[0%] left-[20%] w-[30%] h-[30%] bg-blue-600/5 rounded-full blur-[150px] mix-blend-screen"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24 max-w-4xl">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8">
            <span className="flex w-2 h-2 rounded-full bg-gray-400"></span>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-300">Legal Document</p>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-8 text-white">Privacy Policy</h1>
          <p className="text-gray-400 mb-16 text-lg">Last Updated: September 12, 2026</p>
          
          <div className="prose prose-invert prose-lg max-w-none text-gray-300">
            <h2 className="text-white text-2xl font-bold tracking-tight mb-4 mt-10">1. Introduction</h2>
            <p className="mb-6 leading-relaxed">
              At Nexus AI ("we", "our", or "us"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our AI Voice Automation Services (the "Services").
            </p>

            <h2 className="text-white text-2xl font-bold tracking-tight mb-4 mt-10">2. Information We Collect</h2>
            <p className="mb-6 leading-relaxed">
              We may collect information about you in a variety of ways. The information we may collect via the Website includes:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 marker:text-blue-500">
              <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as chat and feedback forms.</li>
              <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
              <li><strong>Call Data:</strong> For clients using our Services, we process audio data and transcripts entirely in accordance with HIPAA compliance standards (if applicable) and our Master Service Agreement.</li>
            </ul>

            <h2 className="text-white text-2xl font-bold tracking-tight mb-4 mt-10">3. Use of Your Information</h2>
            <p className="mb-6 leading-relaxed">
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 marker:text-blue-500">
              <li>Deliver custom AI voice agents tailored to your clinic.</li>
              <li>Process payments and refunds.</li>
              <li>Send you emails regarding your account or order.</li>
              <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
              <li>Generate a personal profile about you to make future visits to the Site more personalized.</li>
            </ul>

            <h2 className="text-white text-2xl font-bold tracking-tight mb-4 mt-10">4. Disclosure of Your Information</h2>
            <p className="mb-6 leading-relaxed">
              We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers.
            </p>

            <h2 className="text-white text-2xl font-bold tracking-tight mb-4 mt-10">5. Contact Us</h2>
            <p className="mb-6 leading-relaxed">
              If you have questions or comments about this Privacy Policy, please contact us at: <a href="mailto:privacy@buildwithnexusai.com" className="text-blue-400 hover:underline">privacy@buildwithnexusai.com</a>
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
