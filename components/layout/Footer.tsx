import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="font-bold text-2xl tracking-tight text-primary-deep">NEXUS AI</span>
            </Link>
            <p className="text-muted-foreground text-[15px] mb-6 max-w-sm">
              We engineer intelligent voice systems that automate customer conversations for modern clinics and service businesses.
            </p>
            <a href="mailto:ritik@buildwithnexusai.com" className="text-[15px] font-medium text-foreground hover:text-primary transition-colors">
              ritik@buildwithnexusai.com
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider mb-2">Product</h4>
            <Link href="/solutions/ai-receptionist" className="text-muted-foreground hover:text-primary transition-colors text-[15px]">AI Receptionist</Link>
            <Link href="/solutions/smart-scheduling" className="text-muted-foreground hover:text-primary transition-colors text-[15px]">Smart Scheduling</Link>
            <Link href="/solutions/after-hours" className="text-muted-foreground hover:text-primary transition-colors text-[15px]">After-Hours AI</Link>
            <Link href="/solutions" className="text-muted-foreground hover:text-primary transition-colors text-[15px]">Front Desk Automation</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider mb-2">Company</h4>
            <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors text-[15px]">About</Link>
            <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-[15px]">Contact</Link>
            <Link href="/demo" className="text-muted-foreground hover:text-primary transition-colors text-[15px]">Live Demo</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider mb-2">Legal</h4>
            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors text-[15px]">Privacy</Link>
            <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors text-[15px]">Terms</Link>
          </div>

        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nexus AI. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
