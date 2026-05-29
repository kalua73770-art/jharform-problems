import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editorial Policy | JharForm Problems",
  description: "JharForm Problems par aane wala har content ek strict editorial process se gujarta hai taaki humari jankari reliable ho.",
  alternates: {
    canonical: "https://problems.jharform.in/editorial-policy/",
  },
  openGraph: {
    type: "website",
    title: "Editorial Policy | JharForm Problems",
    description: "JharForm Problems par aane wala har content ek strict editorial process se gujarta hai.",
    url: "https://problems.jharform.in/editorial-policy/",
    siteName: "JharForm Problems",
  },
};

export default function EditorialPolicyPage() {
  return (
    <div className="py-12 max-w-3xl mx-auto prose prose-slate dark:prose-invert">
      <h1 className="text-4xl font-bold mb-8">Editorial Policy</h1>
      
      <p>JharForm Problems par aane wala har content ek strict editorial process se gujarta hai taaki humari jankari reliable ho.</p>

      <h2>1. Content Creation</h2>
      <p>Har article ek tech ya domain expert dwara likha jaata hai. Hum sirf wahi problems cover karte hain jo sach mein logon ko pareshan karti hain aur jinki high demand hoti hai.</p>

      <h2>2. Verification Process</h2>
      <p>Publish hone se pehle, har solution ko real environment mein test kiya jaata hai. Agar solution kaam nahi karta, toh hum usko article mein shamil nahi karte.</p>

      <h2>3. Regular Updates</h2>
      <p>Tech duniya tezi se badalti hai. Hum apne top articles ko har 3-6 mahine mein review aur update karte hain. Article ke top par "Last Updated" date hamesha accurately mention ki jaati hai.</p>

      <h2>4. Unbiased Information</h2>
      <p>Humara content kisi brand ya company se sponsored nahi hai. Agar hum kisi software ya app ko recommend karte hain, toh wo purely uski performance ke basis par hota hai.</p>

      <h2>5. Error Reporting</h2>
      <p>Agar aapko kisi article mein koi galti dikhti hai, toh aap contact page ke zariye humein report kar sakte hain. Hum fact-check karke turant update karenge.</p>
    </div>
  );
}
