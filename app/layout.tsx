import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ChatWidget from "@/components/ChatWidget";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
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
    <html lang="en" className={`${plusJakartaSans.variable} ${playfairDisplay.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <AnimatedBackground />
        <Navbar />
        <main className="flex-1">{children}</main>
        <FloatingCTA />
        <ChatWidget />
        <Footer />
      </body>
    </html>
  );
}
