import Link from "next/link";
import { navigationCategories } from "@/data/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 relative">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-7xl">
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/logo.webp"
            alt="JharForm Problems Logo"
            className="w-10 h-10 rounded-lg object-contain"
            loading="eager"
            width="40"
            height="40"
            decoding="async"
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors leading-tight">
              JharForm Problems
            </span>
            <span className="text-[10px] text-muted-foreground uppercase font-semibold tracking-wider">
              Bharat Ki Problems, Bharat Ka Solution
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <div className="relative group">
            <button
              className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1"
              aria-haspopup="menu"
              aria-label="Open categories menu"
              type="button"
            >
              Categories
            </button>
            <div className="absolute top-full left-0 pt-4 hidden group-hover:block group-focus-within:block w-64">
              <div className="bg-card border shadow-xl rounded-lg p-2 flex flex-col gap-1">
                {navigationCategories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/${cat.slug}/`}
                    className="px-4 py-2 text-sm hover:bg-muted rounded-md transition-colors"
                  >
                    {cat.icon} {cat.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link href="/about/" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <ThemeToggle />
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}
