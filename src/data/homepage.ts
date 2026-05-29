export const heroStats = [
  { value: "10", label: "Categories" },
  { value: "500+", label: "Solutions" },
  { value: "Hindi", label: "Mein" },
] as const;

export const trendingSearches = [
  { q: "UPI payment failed", slug: "upi-payment-pending", category: "payment" },
  { q: "WhatsApp banned", slug: "whatsapp-account-banned", category: "whatsapp" },
  { q: "Gmail login nahi ho raha", slug: "gmail-login-nahi-ho-raha", category: "google" },
  { q: "Jio internet slow", slug: "jio-internet-slow", category: "network" },
  { q: "Mobile internet band", slug: "mobile-internet-nahi-chal-raha", category: "mobile" },
  { q: "Phone garam ho raha hai", slug: "phone-heat-ho-raha-hai", category: "mobile" },
  { q: "Screen tut gaya", slug: "screen-tut-gaya", category: "mobile" },
  { q: "Charging nahi ho rahi", slug: "charging-nahi-ho-rahi", category: "mobile" },
  { q: "Phone hang ho raha hai", slug: "mobile-hang-ho-raha-hai", category: "mobile" },
  { q: "Storage full hai", slug: "storage-full-hai", category: "mobile" },
  { q: "Aadhaar update kaise kare", slug: "aadhaar-mismatch", category: "document" },
  { q: "Income certificate pending", slug: "income-certificate-pending", category: "document" },
  { q: "Battery jaldi khatam", slug: "mobile-battery-drain", category: "mobile" },
] as const;

export const featuredCategories = [
  { slug: "mobile", name: "Mobile Problems", icon: "📱" },
  { slug: "google", name: "Google & Gmail", icon: "🔥" },
  { slug: "payment", name: "Payment Problems", icon: "💸" },
  { slug: "document", name: "Government Documents", icon: "🏛️" },
  { slug: "network", name: "SIM & Network", icon: "📶" },
  { slug: "whatsapp", name: "WhatsApp Problems", icon: "💬" },
  { slug: "apps", name: "App Problems", icon: "📲" },
  { slug: "computer", name: "Laptop & PC", icon: "💻" },
  { slug: "real-life", name: "Real Life Problems", icon: "❤️" },
  { slug: "home", name: "Home & Desi Solutions", icon: "🏠" },
] as const;

export const featuredProblems = [
  {
    category: "mobile",
    slug: "mobile-internet-nahi-chal-raha",
    title: "Mobile Internet Nahi Chal Raha — 7 Pakka Fix",
    description: "Android mobile ka internet band ho gaya? Jio, Airtel, Vi ka data nahi chal raha? Yeh 7 simple steps follow karo aur 5 minute mein fix karo.",
  },
  {
    category: "mobile",
    slug: "mobile-battery-drain",
    title: "Battery Fast Drain — 8 Asaan Steps Mein Fix Karo",
    description: "Phone ki battery 2-3 ghante mein khatam ho jaati hai? Yeh 8 proven steps se battery life 2x badhao. Android ke liye complete guide.",
  },
  {
    category: "mobile",
    slug: "phone-heat-ho-raha-hai",
    title: "Phone Bahut Garam Ho Raha Hai — Overheat Fix in 7 Steps",
    description: "Android phone charging ke waqt ya use karte waqt bahut garam ho raha hai? Overheating se phone damage ho sakta hai — yeh 7 steps se turant thanda karo.",
  },
  {
    category: "mobile",
    slug: "mobile-hang-ho-raha-hai",
    title: "Phone Hang Ho Raha Hai — 8 Steps Mein Speed Wapas Lao",
    description: "Android phone lag raha hai, apps slow khul rahi hain, screen freeze ho rahi hai? Yeh 8 steps se phone ka speed wapas lao.",
  },
  {
    category: "mobile",
    slug: "storage-full-hai",
    title: "Phone Storage Full Hai — 8 Tarike Se Free Karo",
    description: "Phone mein Storage Full ka notification aa raha hai? Apps install nahi ho rahi? Yeh 8 tarike se bina kuchh khoye storage free karo.",
  },
  {
    category: "mobile",
    slug: "mobile-viruses-malware",
    title: "Phone Mein Virus/Malware Aa Gaya — Complete Removal Guide",
    description: "Phone slow, popups, ya unknown apps aa rahi hain? Malware remove karke phone ko safe aur clean kaise rakhein, yeh guide batati hai.",
  },
] as const;

export const homeFaqs = [
  {
    q: "JharForm kya hai?",
    a: "JharForm India ka problem-solution platform hai jahan har technical aur real life problem ka step-by-step solution Hindi mein milta hai.",
  },
  {
    q: "Mobile internet slow kyu hota hai?",
    a: "Network congestion, galat APN settings, ya daily data limit khatam hone ke karan. Airplane mode on-off karke ya APN reset karke fix kar sakte hain.",
  },
  {
    q: "UPI payment fail ho gaya par paise kat gaye, kya karein?",
    a: "2-3 din wait karein. Zyaadatar cases mein auto-reversal ho jata hai. Nahi aane par UPI app se dispute raise karein.",
  },
  {
    q: "WhatsApp account ban ho gaya?",
    a: "GBWhatsApp delete karein aur official app install karke support ko email likhein appeal ke liye.",
  },
] as const;
