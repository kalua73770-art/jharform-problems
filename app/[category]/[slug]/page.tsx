import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Clock, Calendar, BarChart, Lightbulb } from "lucide-react";
import { categories, getProblemBySlug, getCategoryBySlug, getSmartRelatedProblems } from "@/data/problems";
import { TableOfContents } from "@/components/TableOfContents";
import { WorkingFixBadge } from "@/components/WorkingFixBadge";
import { FeedbackButtons } from "@/components/FeedbackButtons";
import { SourcesSection } from "@/components/SourcesSection";
import ScreenshotFrame from "@/components/ScreenshotFrame";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cleanVisibleCopy } from "@/lib/cleanVisibleCopy";
import { buildPageTitle, buildSeoTitle } from "@/lib/title";

export async function generateStaticParams() {
  const params: { category: string; slug: string }[] = [];
  categories.forEach(cat => {
    cat.problems.forEach(prob => {
      params.push({ category: cat.slug, slug: prob.slug });
    });
  });
  return params;
}

export async function generateMetadata({ params }: { params: { category: string; slug: string } }): Promise<Metadata> {
  const { category, slug } = await params;
  const prob = getProblemBySlug(category, slug);
  if (!prob) return {};

  const url = `https://problems.jharform.in/${category}/${slug}/`;

  return {
    title: buildSeoTitle(prob.metaTitle),
    description: cleanVisibleCopy(prob.metaDescription),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      title: buildSeoTitle(prob.metaTitle),
      description: cleanVisibleCopy(prob.metaDescription),
      url,
      siteName: "JharForm Problems",
      images: [{
        url: "https://problems.jharform.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: prob.h1,
      }],
      locale: "hi_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: buildSeoTitle(prob.metaTitle),
      description: cleanVisibleCopy(prob.metaDescription),
      images: ["https://problems.jharform.in/og-image.jpg"],
    },
    keywords: [...prob.keywords, ...prob.variants],
  };
}

export default async function ProblemPage({ params }: { params: { category: string; slug: string } }) {
  const { category, slug } = await params;
  const prob = getProblemBySlug(category, slug);
  const cat = getCategoryBySlug(category);

  if (!prob || !cat) notFound();
  const relatedProblems = getSmartRelatedProblems(prob, 4);
  const displayTitle = buildPageTitle(prob.h1);

  const url = `https://problems.jharform.in/${category}/${slug}/`;

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://problems.jharform.in/" },
      { "@type": "ListItem", "position": 2, "name": cat.name, "item": `https://problems.jharform.in/${cat.slug}/` },
      { "@type": "ListItem", "position": 3, "name": displayTitle, "item": url }
    ]
  };

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": displayTitle,
    "description": prob.metaDescription,
    "author": {
      "@type": "Organization",
      "name": "JharForm Problems Team",
      "url": "https://problems.jharform.in",
      "email": "hunterboyz73770@gmail.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "JharForm Problems",
      "url": "https://problems.jharform.in",
      "logo": {
        "@type": "ImageObject",
        "url": "https://problems.jharform.in/logo.webp"
      }
    },
    "datePublished": "2026-05-01T08:00:00+05:30",
    "dateModified": "2026-05-22T08:00:00+05:30",
    "url": url,
    "image": "https://problems.jharform.in/og-image.jpg",
    "keywords": prob.keywords.join(", ")
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": prob.faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  return (
    <div className="py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <nav className="flex text-sm text-muted-foreground items-center space-x-2 overflow-x-auto whitespace-nowrap pb-6">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight className="w-4 h-4" />
        <Link href={`/${cat.slug}/`} className="hover:text-primary transition-colors">{cat.name}</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-foreground font-medium truncate max-w-[200px] md:max-w-none">{displayTitle}</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-12 items-start relative">
        <article className="flex-1 w-full max-w-3xl prose prose-slate dark:prose-invert prose-headings:font-bold prose-a:text-primary max-w-none">

          <header className="mb-8 not-prose">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-foreground leading-tight">
              {displayTitle}
            </h1>
            <WorkingFixBadge lastChecked={prob.lastUpdated} />
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-4">
              <div className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Updated {prob.lastUpdated}</div>
              <div className="flex items-center gap-1"><Clock className="w-4 h-4" /> {prob.readingTime} read</div>
              <div className="flex items-center gap-1"><BarChart className="w-4 h-4" /> {prob.difficulty}</div>
            </div>
          </header>

          <div id="description" className="text-lg text-muted-foreground leading-relaxed mb-10">
            {cleanVisibleCopy(prob.description)}
          </div>

          {prob.screenshots[0] && (
            <ScreenshotFrame type={prob.screenshots[0].type} caption={prob.screenshots[0].caption} alt={prob.screenshots[0].alt || prob.screenshots[0].caption} mockupType={prob.screenshots[0].mockupType} imagePath={prob.screenshots[0].imagePath} />
          )}

          <h2 id="steps" className="text-2xl font-bold mt-12 mb-6 text-foreground flex items-center gap-2">
            Step-by-Step Fix
          </h2>
          <div className="space-y-6 not-prose">
            {prob.steps.map((step, index) => (
              <div key={index} className="flex gap-4 p-5 rounded-2xl border bg-card shadow-sm">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-1">{cleanVisibleCopy(step.title)}</h3>
                  <p className="text-muted-foreground">{cleanVisibleCopy(step.detail)}</p>
                </div>
              </div>
            ))}
          </div>


          <div id="pro-tips" className="my-12 p-6 rounded-2xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/50 not-prose">
            <h3 className="text-xl font-bold text-amber-800 dark:text-amber-500 mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" /> Pro Tips
            </h3>
            <ul className="space-y-2">
              {prob.proTips.map((tip, i) => (
                <li key={i} className="flex gap-2 text-amber-900/80 dark:text-amber-200/80">
                  <span className="text-amber-500 dark:text-amber-600 font-bold">{"•"}</span>
                  <span>{cleanVisibleCopy(tip)}</span>
                </li>
              ))}
            </ul>
          </div>

          <h2 id="faq" className="text-2xl font-bold mt-12 mb-6 text-foreground">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full not-prose">
            {prob.faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-border py-2">
                <AccordionTrigger className="text-left font-medium hover:text-primary">{cleanVisibleCopy(faq.q)}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{cleanVisibleCopy(faq.a)}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {prob.sources && prob.sources.length > 0 && (
            <SourcesSection sources={prob.sources} />
          )}

          <div className="not-prose">
            <FeedbackButtons categorySlug={category} problemSlug={slug} />
          </div>

          <div id="related" className="mt-16 pt-8 border-t not-prose">
            <h2 className="text-xl font-bold mb-6 text-foreground">Related Problems</h2>
            {relatedProblems.length > 0 ? (
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {relatedProblems.map((rel, i) => (
                  <Link 
                    key={i} 
                    href={`/${rel.category}/${rel.slug}/`}
                    className="p-4 rounded-xl border bg-card hover:bg-muted/50 hover:border-primary/50 transition-colors font-medium text-sm block"
                  >
                    {cleanVisibleCopy(rel.title)}
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">Koi related problem nahi mila.</p>
            )}
          </div>

        </article>

        <aside className="hidden lg:block w-64 shrink-0">
          <TableOfContents />
        </aside>
      </div>
    </div>
  );
}
