import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | JharForm Problems",
  description: "JharForm Problems par maujood saari jankari sirf general informational purposes ke liye hai.",
  alternates: {
    canonical: "https://problems.jharform.in/disclaimer/",
  },
  openGraph: {
    type: "website",
    title: "Disclaimer | JharForm Problems",
    description: "JharForm Problems par maujood saari jankari sirf general informational purposes ke liye hai.",
    url: "https://problems.jharform.in/disclaimer/",
    siteName: "JharForm Problems",
  },
};

export default function DisclaimerPage() {
  return (
    <div className="py-12 max-w-3xl mx-auto prose prose-slate dark:prose-invert">
      <h1 className="text-4xl font-bold mb-8">Disclaimer</h1>
      
      <p>JharForm Problems par maujood saari jankari sirf general informational purposes ke liye hai.</p>

      <h2>No Professional Advice</h2>
      <p>Website par diye gaye solutions professional technical, medical, ya legal advice nahi hain. Humne aam problems ke general fixes bataye hain, par har device, account, ya situation alag ho sakti hai.</p>

      <h2>At Your Own Risk</h2>
      <p>Aap in solutions ko apne risk par use kar rahe hain. JharForm Problems kisi bhi data loss, device damage, ya financial nuksan ke liye zimmewar nahi hai jo in steps ko follow karne se ho.</p>

      <h2>Accuracy of Information</h2>
      <p>Humne poori koshish ki hai ki saari jankari 100% sahi aur updated ho, par technology rapidly change hoti hai. Kuch apps ke menus ya government portals ki links waqt ke sath badal sakti hain.</p>
    </div>
  );
}
