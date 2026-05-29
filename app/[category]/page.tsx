import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getCategoryBySlug } from "@/data/problems";
import { ChevronRight } from "lucide-react";
import { CategoryProblems } from "@/components/CategoryProblems";
import { cleanVisibleCopy } from "@/lib/cleanVisibleCopy";
import { buildSeoTitle } from "@/lib/title";

export async function generateStaticParams() {
  return categories.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return {};

  const url = `https://problems.jharform.in/${cat.slug}/`;

  return {
    title: buildSeoTitle(cat.metaTitle),
    description: cleanVisibleCopy(cat.metaDescription),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      title: buildSeoTitle(cat.metaTitle),
      description: cleanVisibleCopy(cat.metaDescription),
      url,
      siteName: "JharForm Problems",
      images: [{
        url: "https://problems.jharform.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: cat.name,
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: buildSeoTitle(cat.metaTitle),
      description: cleanVisibleCopy(cat.metaDescription),
      images: ["https://problems.jharform.in/og-image.jpg"],
    },
  };
}

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();

  const url = `https://problems.jharform.in/${cat.slug}/`;

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://problems.jharform.in/" },
      { "@type": "ListItem", "position": 2, "name": cat.name, "item": url }
    ]
  };

  const collectionLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": cat.name,
    "description": cat.metaDescription,
    "url": url,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": cat.problems.map((prob, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "url": `https://problems.jharform.in/${cat.slug}/${prob.slug}/`,
        "name": prob.h1
      }))
    }
  };

  return (
    <div className="py-8 space-y-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionLd) }} />

      <nav className="flex text-sm text-muted-foreground items-center space-x-2 overflow-x-auto whitespace-nowrap pb-2">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-foreground font-medium">{cat.name}</span>
      </nav>

      <div className="bg-card border rounded-3xl p-8 md:p-12 text-center space-y-4">
        <div className="text-5xl mb-6">{cat.icon}</div>
        <h1 className="text-3xl md:text-4xl font-bold">{cat.name}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{cleanVisibleCopy(cat.description)}</p>
      </div>

      <div className="space-y-6 pt-4">
        <h2 className="text-2xl font-bold">Solutions in {cat.name}</h2>
        <CategoryProblems problems={cat.problems} categorySlug={cat.slug} categoryName={cat.name} />
      </div>

      <div className="pt-12 mt-12 border-t">
        <h2 className="text-xl font-bold mb-6">Explore Other Categories</h2>
        <div className="flex flex-wrap gap-3">
          {categories.filter(c => c.slug !== cat.slug).map(c => (
            <Link 
              key={c.slug} 
              href={`/${c.slug}/`}
              className="px-4 py-2 bg-muted hover:bg-muted/80 rounded-full text-sm font-medium transition-colors"
            >
              {c.icon} {c.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
