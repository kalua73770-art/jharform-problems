"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { navigationCategories } from "@/data/navigation";

export function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex md:hidden items-center gap-2">
      <Button
        variant="ghost"
        size="icon"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="absolute left-0 top-full z-40 w-full border-t bg-background shadow-lg md:hidden"
        >
          <div className="container px-4 py-4 flex flex-col gap-2 max-h-[80vh] overflow-y-auto">
            <Link
              href="/"
              className="px-4 py-3 font-medium hover:bg-muted rounded-md"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about/"
              className="px-4 py-3 font-medium hover:bg-muted rounded-md"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <div className="px-4 py-2 font-bold text-muted-foreground text-xs uppercase tracking-wider">
              Categories
            </div>
            {navigationCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/${cat.slug}/`}
                className="px-6 py-2 text-sm hover:bg-muted rounded-md"
                onClick={() => setMenuOpen(false)}
              >
                {cat.icon} {cat.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
