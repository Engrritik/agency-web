import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#030305] py-20 mt-auto relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 group inline-flex">
              <Logo />
              <span className="font-bold font-serif text-2xl text-white tracking-tight group-hover:text-blue-400 transition-colors">Nexus AI</span>
            </Link>
            <p className="text-base text-gray-400 max-w-sm leading-relaxed">
              We engineer intelligent voice systems that automate customer conversations for modern clinics and service businesses in the United States.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-6 text-white tracking-wide uppercase text-sm">Product</h3>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li><Link href="/solutions" className="hover:text-blue-400 hover:translate-x-1 transition-all inline-block">Solutions</Link></li>
              <li><Link href="/demo" className="hover:text-blue-400 hover:translate-x-1 transition-all inline-block">Live Demo</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 hover:translate-x-1 transition-all inline-block">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-6 text-white tracking-wide uppercase text-sm">Connect</h3>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li><Link href="/contact" className="hover:text-blue-400 hover:translate-x-1 transition-all inline-block">Contact</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 hover:translate-x-1 transition-all inline-block font-medium text-white">Book Strategy Call</Link></li>
              <li><a href="mailto:ritik@buildwithnexusai.com" className="hover:text-blue-400 hover:translate-x-1 transition-all inline-block">Email Us</a></li>
              <li><a href="https://www.linkedin.com/in/ritiksak/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 hover:translate-x-1 transition-all inline-block">LinkedIn</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-6 text-white tracking-wide uppercase text-sm">Legal</h3>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li><Link href="/privacy" className="hover:text-blue-400 hover:translate-x-1 transition-all inline-block">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-blue-400 hover:translate-x-1 transition-all inline-block">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Nexus AI. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)] animate-pulse-slow"></div> Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
