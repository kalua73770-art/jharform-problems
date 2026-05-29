import Link from "next/link";
import { footerQuickLinks, navigationCategories } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="border-t bg-muted/40 mt-12 py-12">
      <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <img
              src="/logo.webp"
              alt="JharForm Problems Logo"
              className="w-8 h-8 rounded-lg object-contain"
              width="32"
              height="32"
              loading="lazy"
              decoding="async"
            />
            JharForm Problems
          </Link>
          <p className="mt-2 text-sm text-muted-foreground max-w-xs">
            Bharat ka sabse bada problem-solution hub. Apni bhasha mein technical aur real-life problems ke step-by-step solutions.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-foreground">Categories</h3>
          <ul className="space-y-2 text-sm text-muted-foreground flex flex-col">
            {navigationCategories.slice(0, 5).map((cat) => (
              <li key={cat.slug}>
                <Link href={`/${cat.slug}/`} className="hover:text-primary transition-colors">
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-foreground">Quick Links</h3>
          <ul className="space-y-2 text-sm text-muted-foreground flex flex-col">
            {footerQuickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-primary transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl mt-12 pt-8 border-t border-border/50 text-center text-xs text-muted-foreground space-y-2">
        <p>Yeh website sirf informational purposes ke liye hai - kisi bhi serious problem ke liye qualified expert se milein.</p>
        <p>&copy; 2026 JharForm Problems. Jharkhand, Bharat.</p>
        <p className="font-medium text-foreground">Har Indian Ki Help Karna Hamara Lakshya Hai</p>
      </div>
    </footer>
  );
}
