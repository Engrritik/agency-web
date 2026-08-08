import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-16 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 group inline-flex">
              <Image src="/favicon.ico" alt="Nexus AI Logo" width={32} height={32} className="h-8 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity" />
              <span className="font-bold text-2xl text-foreground tracking-tight">Nexus AI</span>
            </Link>
            <p className="text-base text-muted-foreground max-w-sm leading-relaxed">
              We engineer intelligent voice systems that automate customer conversations for modern clinics and service businesses in the United States.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-6 text-foreground tracking-wide">Product</h3>
            <ul className="flex flex-col gap-4 text-sm text-muted-foreground">
              <li><Link href="/solutions" className="hover:text-foreground transition-colors">Solutions</Link></li>
              <li><Link href="/demo" className="hover:text-foreground transition-colors">Live Demo</Link></li>
              <li><Link href="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-6 text-foreground tracking-wide">Connect</h3>
            <ul className="flex flex-col gap-4 text-sm text-muted-foreground">
              <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
              <li><Link href="/contact" className="hover:text-foreground transition-colors font-medium text-foreground">Book Strategy Call</Link></li>
              <li><a href="mailto:ritik@buildwithnexusai.com" className="hover:text-foreground transition-colors">Email Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">LinkedIn</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-6 text-foreground tracking-wide">Legal</h3>
            <ul className="flex flex-col gap-4 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Nexus AI. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500"></div> Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
