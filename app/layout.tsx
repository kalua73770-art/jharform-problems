import type { Metadata } from "next";
import Script from "next/script";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://problems.jharform.in"),
  title: "JharForm Problems - Bharat Ki Problems, Bharat Ka Solution",
  description:
    "India ke sabse common problems ke step-by-step solutions in simple Hindi. Mobile, Google, Payment, WhatsApp, Laptop, Government Documents ke easy fixes.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  alternates: {
    canonical: "https://problems.jharform.in",
  },
  openGraph: {
    title: "JharForm Problems - Bharat Ki Problems, Bharat Ka Solution",
    description: "India ke sabse common problems ke step-by-step solutions in simple Hindi.",
    url: "https://problems.jharform.in",
    siteName: "JharForm Problems",
    images: [
      {
        url: "https://problems.jharform.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JharForm Problems - India Ke Sabse Common Problems Ke Solutions",
      },
    ],
    type: "website",
    locale: "hi_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "JharForm Problems",
    description: "India ke sabse common problems ke step-by-step solutions in simple Hindi.",
    images: ["https://problems.jharform.in/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "JharForm Problems",
    url: "https://problems.jharform.in",
    description: "India ke sabse common problems ke step-by-step solutions",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://problems.jharform.in/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
    publisher: {
      "@type": "Organization",
      name: "JharForm Problems",
      url: "https://problems.jharform.in",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {process.env.NEXT_PUBLIC_GA4_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_ID}`}
            />
            <Script
              id="ga4-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA4_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-1 flex flex-col relative max-w-7xl mx-auto w-full px-4 md:px-6 py-8">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
