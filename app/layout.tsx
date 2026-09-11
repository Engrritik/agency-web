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
  metadataBase: new URL('https://www.buildwithnexusai.com/'),
  title: "AI Voice Receptionist for Dental Practices | Nexus AI",
  description: "AI voice receptionist for dental practices that answers calls, handles routine questions, and helps patients book appointments when your front desk is busy or unavailable.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "AI Voice Receptionist for Dental Practices | Nexus AI",
    description: "AI voice receptionist for dental practices that answers calls, handles routine questions, and helps patients book appointments when your front desk is busy or unavailable.",
    type: "website",
    url: "https://www.buildwithnexusai.com/",
    siteName: "Nexus AI",
    images: [
      {
        url: "/mainlogo.png",
        width: 1200,
        height: 630,
        alt: "Nexus AI Voice Receptionist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Voice Receptionist for Dental Practices | Nexus AI",
    description: "AI voice receptionist for dental practices that answers calls, handles routine questions, and helps patients book appointments when your front desk is busy or unavailable.",
    images: ["/mainlogo.png"],
  },
  robots: {
    index: true,
    follow: true,
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
