"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function TableOfContents() {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -80% 0px" }
    );

    const ids = ["description", "steps", "pro-tips", "faq", "related"];
    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth"
      });
    }
  };

  const links = [
    { id: "description", label: "Overview" },
    { id: "steps", label: "Steps to Fix" },
    { id: "pro-tips", label: "Pro Tips" },
    { id: "faq", label: "FAQs" },
    { id: "related", label: "Related Problems" }
  ];

  return (
    <div className="sticky top-24 hidden lg:block border rounded-xl p-6 bg-card shadow-sm w-64 h-fit">
      <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Is Page Par</h3>
      <nav className="flex flex-col gap-2">
        {links.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => handleClick(e, id)}
            className={cn(
              "text-sm hover:text-primary transition-colors py-1",
              activeId === id ? "text-primary font-medium" : "text-muted-foreground"
            )}
          >
            {label}
          </a>
        ))}
      </nav>
    </div>
  );
}