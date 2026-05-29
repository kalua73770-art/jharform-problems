import Link from "next/link";
import { TrendingUp, ChevronDown } from "lucide-react";
import { cleanVisibleCopy } from "@/lib/cleanVisibleCopy";
import { SearchBarIsland } from "@/components/SearchBarIsland";
import { featuredCategories, featuredProblems, heroStats, homeFaqs, trendingSearches } from "@/data/homepage";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": homeFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <div className="flex flex-col gap-16 pb-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="text-center space-y-8 py-12 lg:py-24">
        <div className="space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            Har Problem Ka <span className="text-primary">Pakka Solution</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Bharat ke 10 Categories ke 500+ Solutions. Tech, Mobile, Bank, ya Zindagi - apni bhasha mein jawab paayein.
          </p>
        </div>

        <SearchBarIsland />

        <div className="flex items-center justify-center gap-8 pt-8 text-muted-foreground font-medium text-sm md:text-base">
          {heroStats.map((stat, index) => (
            <div key={stat.label} className="flex items-center gap-8">
              <div>
                <span className="text-primary font-bold">{stat.value}</span> {stat.label}
              </div>
              {index < heroStats.length - 1 ? <div className="w-1.5 h-1.5 rounded-full bg-border" /> : null}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6 max-w-3xl mx-auto" style={{ contentVisibility: "auto", containIntrinsicSize: "1px 440px" }}>
        <div className="flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground uppercase tracking-wider">
          <TrendingUp className="w-4 h-4" />
          Log Abhi Search Kar Rahe Hain
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {trendingSearches.map((t) => (
            <Link
              key={t.slug}
              href={`/${t.category}/${t.slug}/`}
              className="px-4 py-2 bg-muted hover:bg-muted/80 rounded-full text-sm font-medium transition-colors border hover:border-primary/30"
            >
              {t.q}
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-8" style={{ contentVisibility: "auto", containIntrinsicSize: "1px 900px" }}>
        <h2 className="text-2xl md:text-3xl font-bold text-center">Browse Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {featuredCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/${cat.slug}/`}
              className="group p-6 rounded-2xl border bg-card hover:shadow-md transition-all flex flex-col items-center text-center gap-3 hover:border-primary/50"
            >
              <div className="text-4xl group-hover:scale-110 transition-transform">{cat.icon}</div>
              <h3 className="font-semibold text-sm md:text-base group-hover:text-primary transition-colors">{cat.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-8" style={{ contentVisibility: "auto", containIntrinsicSize: "1px 900px" }}>
        <h2 className="text-2xl md:text-3xl font-bold text-center">Popular Problems</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProblems.map((prob) => (
            <Link
              key={prob.slug}
              href={`/${prob.category}/${prob.slug}/`}
              className="p-6 rounded-2xl border bg-card hover:shadow-md transition-all flex flex-col gap-4 group"
            >
              <h3 className="font-semibold text-lg group-hover:text-primary transition-colors line-clamp-2">
                {cleanVisibleCopy(prob.title)}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-3">
                {cleanVisibleCopy(prob.description)}
              </p>
              <div className="text-sm font-medium text-primary mt-auto">Read Solution &rarr;</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-12 bg-muted/30 rounded-3xl p-8 lg:p-12 text-center border" style={{ contentVisibility: "auto", containIntrinsicSize: "1px 520px" }}>
        <h2 className="text-2xl md:text-3xl font-bold">Kaise Kaam Karta Hai?</h2>
        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-border -translate-y-1/2 z-0" />

          <div className="relative z-10 flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-background border-4 border-primary flex items-center justify-center text-xl font-bold text-primary shadow-sm">1</div>
            <h3 className="font-semibold text-lg">Problem Dhundho</h3>
            <p className="text-sm text-muted-foreground max-w-[200px]">Search bar mein apni problem type karo.</p>
          </div>

          <div className="relative z-10 flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-background border-4 border-primary flex items-center justify-center text-xl font-bold text-primary shadow-sm">2</div>
            <h3 className="font-semibold text-lg">Steps Padho</h3>
            <p className="text-sm text-muted-foreground max-w-[200px]">Simple Hindi mein step-by-step guide follow karo.</p>
          </div>

          <div className="relative z-10 flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-background border-4 border-primary flex items-center justify-center text-xl font-bold text-primary shadow-sm">3</div>
            <h3 className="font-semibold text-lg">Fix Karo</h3>
            <p className="text-sm text-muted-foreground max-w-[200px]">Apni problem solve karo aur tension free raho.</p>
          </div>
        </div>
      </section>

      <section className="space-y-8 max-w-3xl mx-auto w-full" style={{ contentVisibility: "auto", containIntrinsicSize: "1px 560px" }}>
        <h2 className="text-2xl md:text-3xl font-bold text-center">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {homeFaqs.map((faq) => (
            <details key={faq.q} className="group rounded-2xl border bg-card px-4 py-3">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-1 text-left font-medium hover:text-primary [&::-webkit-details-marker]:hidden">
                <span>{faq.q}</span>
                <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <div className="pb-2 pt-3 text-muted-foreground leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
