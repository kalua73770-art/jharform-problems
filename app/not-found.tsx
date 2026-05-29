"use client";

import Link from "next/link";
import { SearchBar } from "@/components/SearchBar";
import { categories } from "@/data/problems";
import { Frown, Home, TrendingUp, FolderOpen } from "lucide-react";

const popularProblems = [
  { title: "Mobile Internet Nahi Chal Raha", slug: "mobile-internet-nahi-chal-raha", category: "mobile" },
  { title: "Gmail Password Bhul Gaye?", slug: "gmail-password-bhul-gaye", category: "google" },
  { title: "Phone Hang Ho Raha Hai", slug: "phone-hang-ho-raha-hai", category: "mobile" },
  { title: "UPI Payment Fail Ho Raha Hai", slug: "upi-payment-fail-ho-raha-hai", category: "payment" },
  { title: "WhatsApp Account Banned", slug: "whatsapp-account-banned", category: "whatsapp" },
  { title: "PAN Card Download Nahi Ho Raha", slug: "pan-card-download-nahi-ho-raha", category: "government" },
];

export default function NotFound() {
  return (
    <div className="py-16 md:py-24 text-center max-w-3xl mx-auto space-y-12">
      <div className="space-y-4">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted mb-4">
          <Frown className="w-10 h-10 text-muted-foreground" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">Problem Nahi Mila?</h1>
        <p className="text-lg text-muted-foreground max-w-lg mx-auto">
          Shayad aapne galat link open kiya hai ya page delete ho gaya hai. Aap search kar sakte hain ya neeche popular problems dekh sakte hain.
        </p>
      </div>

      <div className="max-w-xl mx-auto">
        <SearchBar />
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground uppercase tracking-wider">
          <TrendingUp className="w-4 h-4" />
          Sabse Popular Problems
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-2xl mx-auto">
          {popularProblems.map((p) => (
            <Link
              key={p.slug}
              href={`/${p.category}/${p.slug}/`}
              className="p-4 rounded-xl border bg-card hover:bg-muted/50 hover:border-primary/50 transition-colors text-sm font-medium text-left block"
            >
              {p.title}
            </Link>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground uppercase tracking-wider">
          <FolderOpen className="w-4 h-4" />
          Categories Browse Karein
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map(c => (
            <Link
              key={c.slug}
              href={`/${c.slug}/`}
              className="px-4 py-2 border rounded-full hover:bg-muted transition-colors text-sm"
            >
              {c.icon} {c.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="pt-4">
        <Link href="/" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
          <Home className="w-4 h-4" />
          Home Par Wapas Jayein
        </Link>
      </div>
    </div>
  );
}
