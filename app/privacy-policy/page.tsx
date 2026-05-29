import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | JharForm Problems",
  description: "JharForm Problems aapki privacy ki respect karta hai. Yeh Privacy Policy batati hai ki hum aapki information kaise handle karte hain.",
  alternates: {
    canonical: "https://problems.jharform.in/privacy-policy/",
  },
  openGraph: {
    type: "website",
    title: "Privacy Policy | JharForm Problems",
    description: "JharForm Problems aapki privacy ki respect karta hai.",
    url: "https://problems.jharform.in/privacy-policy/",
    siteName: "JharForm Problems",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 max-w-3xl mx-auto prose prose-slate dark:prose-invert">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      
      <p>Last updated: May 2026</p>

      <p>JharForm Problems ("hum", "humara", "humein") aapki privacy ki respect karta hai. Yeh Privacy Policy batati hai ki hum aapki information kaise handle karte hain.</p>

      <h2>1. Information We Collect</h2>
      <p>Humari website ek static informational site hai. Hum user se koi bhi personal data (jaise naam, email, phone number) collect nahi karte jab tak aap khud humein contact form ke through message na karein.</p>

      <h2>2. Cookies</h2>
      <p>Hum tracking ke liye koi third-party cookies use nahi karte. Dark mode ki preference save karne ke liye browser ki local storage use ki jaati hai.</p>

      <h2>3. Third-Party Links</h2>
      <p>Humari website mein dusri websites (jaise government portals, app stores) ke links ho sakte hain. Hum un external sites ki privacy policies ke liye responsible nahi hain. Unhe visit karne par unki policy apply hogi.</p>

      <h2>4. Analytics</h2>
      <p>Hum website traffic samajhne ke liye basic privacy-friendly analytics use kar sakte hain jo personal data collect nahi karta.</p>

      <h2>5. Contact Us</h2>
      <p>Agar is policy ke baare mein aapke koi sawal hain, toh aap hunterboyz73770@gmail.com par sampark kar sakte hain.</p>
    </div>
  );
}
