import type { Metadata } from "next";
import { Space_Grotesk, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ChatWidget from "@/components/ChatWidget";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import Preloader from "@/components/ui/Preloader";
import CustomCursor from "@/components/ui/CustomCursor";
import SmoothScroll from "@/components/ui/SmoothScroll";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nexus AI | Never Miss Another Patient Call",
  description: "AI Voice Receptionists that answer every call, book appointments, answer FAQs, and work 24/7 for private clinics.",
  openGraph: {
    title: "Nexus AI | AI Voice Receptionists for Clinics",
    description: "AI Voice Receptionists that answer every call, book appointments, answer FAQs, and work 24/7.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus AI",
    description: "AI Voice Receptionists that answer every call, book appointments, answer FAQs, and work 24/7.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${syne.variable} h-full antialiased bg-[#050505] text-white`}>
      <body className="min-h-full flex flex-col font-sans tracking-tight">
        <SmoothScroll>
          <Preloader />
          <CustomCursor />
          <AnimatedBackground />
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <FloatingCTA />
          <ChatWidget />
        </SmoothScroll>
      </body>
    </html>
  );
}
