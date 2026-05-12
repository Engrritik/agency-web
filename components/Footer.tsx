import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/mainlogo.png" alt="Nexus AI Logo" width={24} height={24} className="opacity-80" />
              <span className="text-lg font-bold tracking-tight">Nexus AI</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm">
              Building intelligent voice systems that automate customer conversations for modern clinics and service businesses.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-sm">Product</h3>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li><Link href="/solutions" className="hover:text-foreground transition-colors">Solutions</Link></li>
              <li><Link href="/demo" className="hover:text-foreground transition-colors">Live Demo</Link></li>
              <li><Link href="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-sm">Connect</h3>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
              <li><Link href="/contact" className="hover:text-foreground transition-colors">Book Strategy Call</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Nexus AI. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <span className="hover:text-foreground cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-foreground cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
