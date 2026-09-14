import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Script from "next/script";

const inter = Inter({
  variable: "--font-sans",
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
  verification: {
    google: 'google9170e269071faa6b',
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.buildwithnexusai.com/#organization",
      "name": "Nexus AI",
      "url": "https://www.buildwithnexusai.com/",
      "logo": "https://www.buildwithnexusai.com/mainlogo.png",
      "description": "AI voice receptionist systems for independent and private dental practices in the United States."
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.buildwithnexusai.com/#software",
      "name": "Nexus AI Voice Receptionist",
      "operatingSystem": "Cloud / Phone System",
      "applicationCategory": "BusinessApplication",
      "description": "AI voice receptionist for dental practices that answers calls, handles routine questions, and helps patients book appointments."
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans tracking-tight text-[#101114] bg-[#F7F8FC]">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-W5BTF7XH8M"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W5BTF7XH8M');
          `}
        </Script>
        
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
