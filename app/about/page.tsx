import { Metadata } from "next";

export const metadata: Metadata = {
  title: "JharForm Problems Ke Baare Mein | About Us",
  description: "JharForm Problems India ka leading problem-solving platform hai jahan 50+ problems ka step-by-step solution Hindi mein milta hai. Jaaniye humari mission aur team ke baare mein.",
  alternates: {
    canonical: "https://problems.jharform.in/about/",
  },
  openGraph: {
    type: "website",
    title: "JharForm Problems Ke Baare Mein | About Us",
    description: "JharForm Problems India ka leading problem-solving platform hai jahan 50+ problems ka step-by-step solution Hindi mein milta hai.",
    url: "https://problems.jharform.in/about/",
    siteName: "JharForm Problems",
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About JharForm Problems",
    description: "JharForm Problems India ka leading problem-solving platform hai.",
    url: "https://problems.jharform.in/about/",
    publisher: {
      "@type": "Organization",
      name: "JharForm Problems",
      url: "https://problems.jharform.in",
      email: "hunterboyz73770@gmail.com",
    },
  };

  return (
    <div className="py-12 max-w-3xl mx-auto prose prose-slate dark:prose-invert">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <h1 className="text-4xl font-bold mb-8">JharForm Problems Ke Baare Mein</h1>

      <p className="text-xl text-muted-foreground lead">
        Bharat ki har technical aur real-life problem ka asaan, step-by-step Hindi solution.
      </p>

      <h2>Hamara Mission</h2>
      <p>
        JharForm Problems ka ek hi lakshya hai - technology aur daily life ki pareshaniyon ko har Indian ke liye aasan banana. Humein pata hai ki English mein solutions dhundhna sabke liye aasan nahi hota, isliye hum saare solutions simple Hindi mein likhte hain.
      </p>

      <h2>Who We Are</h2>
      <p>
        Hum tech enthusiasts aur problem-solvers ki ek chhoti si team hain jo Jharkhand se operate karti hai. Hum rozana logon ki aam samasyaon ko observe karte hain aur unka pakka ilaaj (solution) dhundhte hain.
      </p>

      <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20 my-8">
        <h3 className="mt-0">How We Test Fixes (E-E-A-T)</h3>
        <p className="mb-0">
          Humara har solution personally test kiya jaata hai. Chahe wo phone ki battery drain problem ho ya WhatsApp ban, hum pehle khud real Android devices aur accounts pe test karte hain. Sirf wahi steps publish hote hain jo 100% working aur safe hote hain.
        </p>
      </div>

      <h2>Contact Us</h2>
      <p>
        Koi sawal hai? Humein email karein: <a href="mailto:hunterboyz73770@gmail.com">hunterboyz73770@gmail.com</a>
      </p>
    </div>
  );
}
