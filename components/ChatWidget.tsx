"use client";

import { useState } from "react";
import { MessageSquare, X, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const quickLinks = [
    { label: "Pricing", href: "/contact" },
    { label: "Integrations", href: "/solutions" },
    { label: "Booking Demo", href: "/#booking-form" },
    { label: "Availability", href: "/contact" },
    { label: "Support", href: "/contact" },
  ];

  return (
    <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="bg-white/80 backdrop-blur-xl border border-black/5 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-[320px] mb-4 animate-in fade-in slide-in-from-bottom-2 duration-300 overflow-hidden flex flex-col">
          <div className="bg-blue-600 text-white p-5 flex items-center justify-between">
            <div className="font-semibold flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-100"></span>
              </span>
              Nexus Assistant
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:opacity-70 transition-opacity">
              <X size={18} />
            </button>
          </div>
          <div className="p-5 bg-white/50">
            <p className="text-sm text-foreground mb-4 font-medium leading-relaxed">Hi! How can I help you today?</p>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="bg-card hover:bg-muted border border-border rounded-lg p-3 text-sm flex items-center justify-between transition-colors shadow-sm group"
                >
                  {link.label}
                  <ChevronRight size={16} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:scale-[1.02] transition-transform"
        aria-label="Open chat"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
}
