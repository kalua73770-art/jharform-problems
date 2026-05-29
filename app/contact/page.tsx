import { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Mail, MessageSquare, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Humse Sampark Karo | Contact JharForm Problems",
  description: "Koi sawal hai ya naya problem ka solution chahiye? Humein message karein.",
  alternates: {
    canonical: "https://problems.jharform.in/contact/",
  },
  openGraph: {
    title: "Humse Sampark Karo | Contact JharForm Problems",
    description: "Koi sawal hai ya naya problem ka solution chahiye? Humein message karein.",
    url: "https://problems.jharform.in/contact/",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="py-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-center">Humse Sampark Karo</h1>
      <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
        Agar aapko kisi nayi problem ka solution chahiye ya website mein koi issue hai, toh humein message karein. Hum 24-48 ghante mein reply karte hain.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="flex items-start gap-4 p-4 rounded-xl border bg-card">
            <Mail className="w-6 h-6 text-primary shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <a href="mailto:hunterboyz73770@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                hunterboyz73770@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl border bg-card">
            <Clock className="w-6 h-6 text-primary shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold">Response Time</h3>
              <p className="text-muted-foreground">24-48 ghante mein reply (weekdays)</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl border bg-card">
            <MapPin className="w-6 h-6 text-primary shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold">Location</h3>
              <p className="text-muted-foreground">Jharkhand, Bharat (India)</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl border bg-card">
            <MessageSquare className="w-6 h-6 text-primary shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold">Language</h3>
              <p className="text-muted-foreground">Hindi aur English dono mein reply</p>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
