import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen relative z-10 overflow-hidden items-center justify-center -mt-20">
      
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[30%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-blue-600/10 rounded-full blur-[150px] mix-blend-screen animate-aurora"></div>
      </div>

      <div className="container mx-auto px-4 text-center">
        <FadeIn className="max-w-3xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border-red-500/20 bg-red-500/5">
            <span className="flex w-2 h-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)] animate-pulse-slow"></span>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-red-400">Error 404</p>
          </div>
          
          <h1 className="text-[8rem] md:text-[12rem] font-black tracking-tighter leading-none mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10">
            404
          </h1>
          
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white">
            Page not found.
          </h2>
          
          <p className="text-xl text-gray-400 font-medium mb-12 max-w-lg mx-auto">
            The page you are looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
          </p>
          
          <Link href="/">
            <Button size="lg" className="h-14 px-8 text-lg font-bold rounded-full bg-white text-black hover:bg-gray-200 transition-all flex items-center justify-center gap-3">
              <ArrowLeft className="w-5 h-5" /> Back to Home
            </Button>
          </Link>
        </FadeIn>
      </div>
    </div>
  );
}
