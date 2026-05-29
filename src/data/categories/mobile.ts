import type { Category } from "../types";

export const mobileCategory: Category = {
    slug: "mobile",
    name: "Mobile Problems",
    icon: "📱",
    description: "Android mobile ke saare problems ka solution yahan hai.",
    metaTitle: "Mobile Problems — Android Phone Fix Guide | JharForm Problems",
    metaDescription: "Android mobile ke saare problems ka solution yahan hai. Battery drain, internet, hang, storage full — step-by-step Hindi guide.",
    problems: [
      {
        slug: "mobile-internet-nahi-chal-raha",
        category: "mobile",
        metaTitle: "Mobile Internet Nahi Chal Raha? 7 Pakka Fix (2026) | JharForm",
        metaDescription: "Android mobile ka internet band ho gaya? Jio, Airtel, Vi ka data nahi chal raha? Yeh 7 simple steps follow karo aur 5 minute mein fix karo.",
        h1: "Mobile Internet Nahi Chal Raha — 7 Pakka Fix",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Android mobile ka internet achanak band ho jaata hai — network bars dikhte hain par data nahi chalta. Yeh problem Jio, Airtel, Vi teeno mein hoti hai. Zyaadatar APN settings corrupt hone, SIM loose hone, ya network congestion se hoti hai.",
        steps: [
          { title: "Airplane Mode on-off karo", detail: "Settings ya notification panel se Airplane Mode on karo, 10 second rukko, phir off karo. Network refresh hoga." },
          { title: "Mobile Data band karke on karo", detail: "Quick settings mein Mobile Data tile pe tap karo — band karo, 5 second baad on karo." },
          { title: "Network type 4G/LTE karo", detail: "Settings > Connections > Mobile Networks > Network Mode > LTE/4G/3G/2G pe set karo." },
          { title: "APN settings reset karo", detail: "Settings > Connections > Mobile Networks > Access Point Names > 3 dots > Reset to default." },
          { title: "SIM tray nikalo aur saaf karo", detail: "SIM tray nikalo, SIM card ko soft kapde se saaf karo, wapas tight lagao." },
          { title: "Phone restart karo", detail: "30 second ke liye completely band karo phir on karo." },
          { title: "Network settings reset karo", detail: "Settings > General Management > Reset > Reset Network Settings. WARNING: WiFi passwords bhi reset honge." }
        ],
        screenshots: [
          { caption: "Settings > Mobile Networks > Network Mode showing 4G/LTE Auto selected", alt: "Mobile network mode settings with 4G/LTE selected in Android phone", type: "phone", mockupType: "android-network-mode" },
          { caption: "APN Settings screen with Reset to Default option in top-right menu", alt: "APN settings screen with reset to default menu option visible", type: "phone", mockupType: "android-apn" }
        ],
        proTips: ["Jio users: My Jio app kholo > Refresh karo", "Data balance check karo *121# dial karke", "Peak hours 8pm-11pm mein slowness normal hai"],
        faqs: [
          { q: "Internet achanak band ho gaya kyu?", a: "Network congestion, APN settings corrupt, ya SIM loose hone ki wajah se ho sakta hai. Airplane Mode trick 90% cases mein kaam karta hai." },
          { q: "SIM badal ne se fix hoga?", a: "Agar SIM physically damage ya purana hai to haan. Warna pehle yeh steps try karo." },
          { q: "4G se 3G switch karne se speed badh sakti hai?", a: "Kabhi kabhi haan — jab 4G tower congested ho to 3G better perform karta hai." },
          { q: "Network reset se kya kya reset hota hai?", a: "WiFi passwords, Bluetooth pairings, aur mobile network settings sab reset hote hain. Note kar lo pehle." }
        ],
        related: [
          { title: "Battery Jaldi Khatam Ho Rahi", slug: "mobile-battery-drain", category: "mobile" },
          { title: "Phone Bahut Heat Ho Raha Hai", slug: "phone-heat-ho-raha-hai", category: "mobile" },
          { title: "Mobile Hang Ho Raha Hai", slug: "mobile-hang-ho-raha-hai", category: "mobile" }
        ],
        keywords: ["mobile internet nahi chal raha", "android internet fix", "data nahi chal raha", "mobile data band ho gaya"],
        variants: ["mobile data nahi chal raha", "internet band ho gaya", "4g nahi chal raha", "jio data nahi chal raha", "airtel internet fix", "data on nahi ho raha"]
      },
      {
        slug: "mobile-battery-drain",
        category: "mobile",
        metaTitle: "Battery Jaldi Khatam Ho Rahi Hai? 8 Asaan Fix (2026) | JharForm",
        metaDescription: "Phone ki battery 2-3 ghante mein khatam ho jaati hai? Yeh 8 proven steps se battery life 2x badhao. Android ke liye complete guide.",
        h1: "Battery Fast Drain — 8 Asaan Steps Mein Fix Karo",
        lastUpdated: "May 2026",
        readingTime: "6 min",
        difficulty: "Easy",
        description: "Phone ki battery 100% se 2-3 ghante mein 20% tak aa jaati hai — background apps, screen brightness, location services, ya battery health issue ho sakta hai. AMOLED screen phones mein dark mode se 30% tak battery bachti hai.",
        steps: [
          { title: "Screen brightness kam karo", detail: "50% se kam rakho ya auto-brightness on karo. Brightness sabse zyada battery leta hai." },
          { title: "Background apps close karo", detail: "Recent apps button > Close all. Ya individual apps swipe karke band karo." },
          { title: "Location services band karo", detail: "Settings > Location > Off. Ya sirf app use karte waqt on karo." },
          { title: "Battery Saver mode on karo", detail: "Settings > Battery > Power Saving Mode. Background activity reduce hogi." },
          { title: "Auto-sync band karo", detail: "Settings > Accounts > Auto-sync data > Off. Manual sync battery-friendly hai." },
          { title: "WiFi band karo jab use na ho", detail: "WiFi searching mode mein battery leta hai. Bahar band rakho." },
          { title: "Dark mode on karo", detail: "AMOLED screens pe dark mode se 30% battery bachti hai. Settings > Display > Dark Mode." },
          { title: "Battery Usage dekho", detail: "Settings > Battery > Battery Usage. Facebook, Instagram, Maps top battery consumers hain — uninstall ya Lite version use karo." }
        ],
        screenshots: [
          { caption: "Settings > Battery screen showing daily usage chart with Screen as top consumer at 35%", alt: "Android battery usage settings showing screen as top battery consumer", type: "phone", mockupType: "android-battery-chart" },
          { caption: "Battery Usage list showing Facebook 23%, Instagram 18%, Maps 12% consumption", alt: "Battery usage list showing top consuming apps on Android", type: "phone", mockupType: "android-battery-apps" }
        ],
        proTips: ["80% se upar battery health acchi hai — below 80% battery replace karwao", "Raat bhar charge mat rakho — 80% pe charger nikalo", "Fast charging sirf emergency mein use karo"],
        faqs: [
          { q: "Kitni battery health normal hai?", a: "80% se upar accha hai. Niche ho to service center mein battery replace karwao — Rs. 500-1500 mein hoti hai." },
          { q: "Fast charging se battery kharab hoti hai?", a: "Thoda haan — zyada heat generate hoti hai. Raat bhar charge mat rakho. 80% pe nikal lo charger." },
          { q: "Kaun se apps sabse zyada battery lete hain?", a: "Facebook, Instagram, Maps, WhatsApp, aur heavy games sabse zyada lete hain. Uninstall karo ya Lite versions use karo." },
          { q: "Battery backup kitna normal hai?", a: "Normal use mein 6-8 ghante screen-on time normal hai. Isse kam ho to yeh steps try karo." }
        ],
        related: [
          { title: "Mobile Internet Nahi Chal Raha", slug: "mobile-internet-nahi-chal-raha", category: "mobile" },
          { title: "Phone Bahut Heat Ho Raha Hai", slug: "phone-heat-ho-raha-hai", category: "mobile" },
          { title: "Charging Nahi Ho Rahi Hai", slug: "charging-nahi-ho-rahi", category: "mobile" }
        ],
        keywords: ["battery jaldi khatam", "battery drain fix", "phone ki battery fast khatam", "android battery backup"],
        variants: ["battery problem", "phone battery bahut jaldi khatam", "battery backup kam hai", "phone battery drain fast", "mobile battery saver"]
      },
      {
        slug: "phone-heat-ho-raha-hai",
        category: "mobile",
        metaTitle: "Phone Bahut Garam Ho Raha Hai? Overheat Fix Guide (2026) | JharForm",
        metaDescription: "Android phone charging ke waqt ya use karte waqt bahut garam ho raha hai? Overheating se phone damage ho sakta hai — yeh 7 steps se turant thanda karo.",
        h1: "Phone Bahut Garam Ho Raha Hai — Overheat Fix in 7 Steps",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Easy",
        description: "Phone charging ke waqt 45°C se zyada ho jaata hai — heavy gaming, fast charging, poor ventilation, ya background apps ki wajah se. Lagatar garam hone se battery health kharab hoti hai aur performance slow ho jaati hai. Turant thanda karna zaroori hai.",
        steps: [
          { title: "Sab apps band karo", detail: "Recent apps se sab swipe karke close karo. Heavy games (BGMI, Free Fire) turant exit karo." },
          { title: "Phone ko hawa mein rakho", detail: "Phone ko AC ke saamne, pankhe ke niche, ya thandi jagah pe rakho. Pillow ya mattress pe mat rakho." },
          { title: "Phone case nikaal do", detail: "Thick case/cover garmi trap karta hai. Turant nikaal do taaki heat dissipate ho sake." },
          { title: "Charging band karo", detail: "Agar charging ke waqt garam ho raha hai to charger turant nikaalo. 30 min cool hone do phir slow charge karo." },
          { title: "Brightness kam karo", detail: "100% brightness sabse zyada heat generate karti hai. 30-40% pe rakho. Auto-brightness on karo." },
          { title: "Unused features band karo", detail: "Bluetooth, GPS/Location, Mobile Hotspot, NFC — jo use nahi ho raha sab band karo." },
          { title: "Battery health check karo", detail: "Settings > Battery > Battery Health. Below 80% ho to battery replace karwao — yeh common heat reason hai." }
        ],
        screenshots: [
          { caption: "Settings > Battery showing Battery Health at 76% with Replace Battery recommendation", alt: "Android battery health screen showing 76 percent health with replace battery warning", type: "phone", mockupType: "android-battery-chart" },
          { caption: "Phone without case placed on cool surface with fan airflow direction shown", alt: "Phone placed on cool metal surface near fan for overheating cooling", type: "phone", mockupType: "android-battery-apps" }
        ],
        proTips: ["Charging ke waqt phone mat use karo — heat double hoti hai", "Overnight charging se bacho — 80% pe charger nikaalo", "Garmi mein car dashboard pe phone mat rakho — 60°C+ ho jaata hai"],
        faqs: [
          { q: "Phone 45°C se zyada ho raha hai — khatarnak hai?", a: "Haan — 45°C+ se battery permanently damage hoti hai. Turant thanda karo. 50°C+ pe phone band ho sakta hai." },
          { q: "Charging ke waqt garam hona normal hai?", a: "Thoda sa garam hona normal hai (35-40°C). Lekin 45°C+ nahi hona chahiye. Fast charging zyada heat karti hai." },
          { q: "Cooling app se phone thanda hota hai?", a: "Nahi — yeh fake apps hain. Sirf background apps close karte hain. Hardware cooling nahi karte." },
          { q: "Water se phone thanda kar sakte hain?", a: "Bilkul nahi — water damage ho sakta hai. Hawa, AC, ya fan se thanda karo. Ice mat lagao." }
        ],
        related: [
          { title: "Battery Jaldi Khatam Ho Rahi", slug: "mobile-battery-drain", category: "mobile" },
          { title: "Charging Nahi Ho Rahi Hai", slug: "charging-nahi-ho-rahi", category: "mobile" },
          { title: "Mobile Hang Ho Raha Hai", slug: "mobile-hang-ho-raha-hai", category: "mobile" }
        ],
        keywords: ["phone heat ho raha hai", "phone garam ho raha hai", "mobile overheating fix", "android phone hot"],
        variants: ["phone bahut garam ho raha hai", "mobile heat problem", "phone overheating solution", "charging ke waqt phone garam", "phone temperature high"]
      },
      {
        slug: "mobile-hang-ho-raha-hai",
        category: "mobile",
        metaTitle: "Phone Hang Ho Raha Hai? Lag Raha Hai? 8 Fix (2026) | JharForm",
        metaDescription: "Android phone lag raha hai, apps slow khul rahi hain, screen freeze ho rahi hai? Yeh 8 steps se phone ka speed wapas lao.",
        h1: "Phone Hang Ho Raha Hai — 8 Steps Mein Speed Wapas Lao",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Easy",
        description: "Phone lag raha hai, apps crash ho rahi hain, touch response slow hai — RAM full hone, storage kam hone, ya too many background apps ki wajah se hota hai. 2-3 saal purana phone mein yeh common problem hai. Software optimization se bina new phone liye speed badh sakti hai.",
        steps: [
          { title: "RAM free karo", detail: "Recent apps button > Close all. Settings > RAM > Clear RAM. Heavy apps (games, editing) band karo." },
          { title: "Storage free karo", detail: "Settings > Storage > Cached Data > Clear. Kam se kam 2GB free hona chahiye. Photos/videos cloud pe shift karo." },
          { title: "Unused apps uninstall karo", detail: "Settings > Apps > sort by size. Bade apps jo use nahi hote — uninstall karo. Bloatware bhi disable karo." },
          { title: "Animation speed kam karo", detail: "Developer Options > Window animation scale / Transition animation scale / Animator duration scale — sab 0.5x ya Off karo." },
          { title: "Phone restart karo", detail: "Har 2-3 din mein ek baar restart karo. RAM refresh hoti hai aur background processes band hoti hain." },
          { title: "Lite apps use karo", detail: "Facebook ko Facebook Lite se replace karo. Instagram Lite, Messenger Lite bhi available hain. 70% less RAM use karte hain." },
          { title: "Factory Reset socho", detail: "Backup ke baad Settings > General Management > Reset > Factory Data Reset. Naya phone jaisa speed milega." },
          { title: "Custom ROM try karo (advanced)", detail: "Purana phone ho to LineageOS jaise lightweight ROM install karo. Bina bloatware ke phone fast hota hai." }
        ],
        screenshots: [
          { caption: "Settings > Storage showing Used 58GB of 64GB with red warning and Cached Data 4.2GB", alt: "Android storage settings showing low storage warning with cached data highlighted", type: "phone", mockupType: "android-settings-storage" },
          { caption: "Developer Options showing animation scales all set to 0.5x for faster performance", alt: "Android developer options showing window and transition animation scale set to 0.5x", type: "phone", mockupType: "android-settings-storage" }
        ],
        proTips: ["Restart karne se 80% hang problems fix ho jaati hain", "Widget aur live wallpapers band karo — yeh RAM khaate hain", "Auto-start apps disable karo: Settings > Apps > Auto-start"],
        faqs: [
          { q: "Phone kitni RAM mein smooth chalta hai?", a: "4GB RAM mein basic use smooth hai. 6GB+ recommended hai heavy users ke liye. 2GB wale phones mein Lite apps use karo." },
          { q: "Factory reset se data delete hoga?", a: "Haan — sab photos, apps, contacts delete honge. Pehle Google Photos + Google Drive mein backup karo." },
          { q: "Phone lag raha hai to naya phone lena chahiye?", a: "Pehle yeh steps try karo. 70% cases mein software optimization se fix ho jaata hai. 3+ saal purana phone ho to upgrade socho." },
          { q: "Custom ROM se warranty void hoti hai?", a: "Haan — official warranty void hoti hai. Lekin purane phones ki to warranty khatam ho jaati hai. LineageOS safe hai." }
        ],
        related: [
          { title: "Storage Full Hai", slug: "storage-full-hai", category: "mobile" },
          { title: "Mobile Internet Nahi Chal Raha", slug: "mobile-internet-nahi-chal-raha", category: "mobile" },
          { title: "Phone Bahut Garam Ho Raha Hai", slug: "phone-heat-ho-raha-hai", category: "mobile" }
        ],
        keywords: ["phone hang ho raha hai", "mobile lag raha hai", "android slow fix", "phone freeze ho raha hai"],
        variants: ["phone bahut slow chal raha hai", "mobile hang ho raha hai", "phone lag raha hai", "android phone slow", "phone screen freeze", "touch kaam nahi kar raha"]
      },
      {
        slug: "storage-full-hai",
        category: "mobile",
        metaTitle: "Phone Storage Full Hai? 8 Tarike Se Free Karo (2026) | JharForm",
        metaDescription: "Phone mein Storage Full ka notification aa raha hai? Apps install nahi ho rahi? Yeh 8 tarike se bina kuchh khoye storage free karo.",
        h1: "Phone Storage Full Hai — 8 Tarike Se Free Karo",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Easy",
        description: "Phone mein 'Storage Full' notification aa raha hai — photos, videos, WhatsApp media, aur app cache sab storage bharte hain. 64GB phone mein yeh common problem hai. Cloud storage aur cache cleaning se bina photos delete kiye space free hoti hai.",
        steps: [
          { title: "Cached data clear karo", detail: "Settings > Storage > Cached Data > Clear. Yeh temporary files hain — kuchh nahi jayega. 2-5GB tak free ho sakta hai." },
          { title: "WhatsApp media manage karo", detail: "WhatsApp > Settings > Storage and Data > Manage Storage. Bade videos aur repeated photos delete karo. Auto-download band karo." },
          { title: "Downloads folder saaf karo", detail: "Files app > Downloads. Purani APK files, PDFs, aur videos delete karo. Yeh sab junk hoti hain." },
          { title: "Photos/videos Google Photos pe shift karo", detail: "Google Photos app install karo > Backup & Sync on karo. Sab photos cloud pe chali jayengi. Phir phone se 'Free up space' karo." },
          { title: "Unused apps uninstall karo", detail: "Settings > Apps > sort by size. 500MB+ apps jo use nahi hote — uninstall karo. Games sabse zyada space leti hain." },
          { title: "Duplicate photos delete karo", detail: "Files app > Clean tab > Delete duplicate files. Ya Google Files app ka 'Clean' feature use karo." },
          { title: "Streaming apps ka offline content delete karo", detail: "Netflix, YouTube, Spotify, Amazon Prime — inke downloaded videos/songs delete karo. 5-10GB free ho sakta hai." },
          { title: "SD Card lagao (agar slot ho)", detail: "MicroSD card (128GB/256GB) lagao. Photos, videos, aur apps ko SD card pe shift karo. Budget solution hai." }
        ],
        screenshots: [
          { caption: "Settings > Storage showing Cached Data 3.8GB with Clear button highlighted", alt: "Android storage settings showing cached data with clear button for freeing space", type: "phone", mockupType: "android-settings-storage" },
          { caption: "Google Photos app showing Free up space button with 2.3GB recoverable storage", alt: "Google Photos app showing free up space option to remove backed up photos from device", type: "phone", mockupType: "android-settings-storage" }
        ],
        proTips: ["Google Photos unlimited backup nahi hai ab — 15GB free hai phir Rs. 130/month", "WhatsApp ka 'Storage Usage' weekly check karo", "Auto-download band karo: WhatsApp > Settings > Data > Media auto-download"],
        faqs: [
          { q: "Storage full hone se phone slow hota hai?", a: "Haan — Android ko 10-15% free space chahiye smooth performance ke liye. Storage full hone se apps crash aur phone lag hota hai." },
          { q: "Cache clear karne se kya delete hota hai?", a: "Sirf temporary files — app data, login, ya photos safe hain. Apps first time thoda slow khulengi phir normal." },
          { q: "Google Photos se delete karne se cloud se bhi gayab hoga?", a: "Nahi — 'Free up space' sirf device se delete karta hai. Cloud pe backed up rehta hai. 'Delete from device' dhyan se padho." },
          { q: "SD card se apps chal sakti hain?", a: "Modern Android mein nahi — Android 6+ mein apps internal storage pe hi install hoti hain. SD card sirf media ke liye hai." }
        ],
        related: [
          { title: "Mobile Hang Ho Raha Hai", slug: "mobile-hang-ho-raha-hai", category: "mobile" },
          { title: "Mobile Internet Nahi Chal Raha", slug: "mobile-internet-nahi-chal-raha", category: "mobile" },
          { title: "Mobile Mein Virus Aa Gaya", slug: "mobile-viruses-malware", category: "mobile" }
        ],
        keywords: ["storage full hai", "phone storage full", "android storage full fix", "phone mein jagah nahi hai"],
        variants: ["phone storage full", "mobile storage full hai", "phone mein storage nahi hai", "storage full notification", "phone mein jagah nahi hai", "apps install nahi ho rahi"]
      },
      {
        slug: "mobile-viruses-malware",
        category: "mobile",
        metaTitle: "Phone Mein Virus Aa Gaya? Malware Remove Guide (2026) | JharForm",
        metaDescription: "Phone mein ads bahut aa rahe hain, apps khud install ho rahi hain, ya data udd raha hai? Phone mein virus/malware ho sakta hai — yeh guide se remove karo.",
        h1: "Phone Mein Virus/Malware Aa Gaya — Complete Removal Guide",
        lastUpdated: "May 2026",
        readingTime: "6 min",
        difficulty: "Medium",
        description: "Phone mein unexpected ads, apps khud install hona, battery fast drain, ya data usage zyada hone ka matlab malware infection ho sakta hai. Third-party APKs, fake apps, ya malicious websites se virus aata hai. Turant remove karna zaroori hai warna bank details aur personal data chori ho sakta hai.",
        steps: [
          { title: "Safe Mode mein boot karo", detail: "Power button long press > Power off pe long press > 'Reboot to Safe Mode' pe tap karo. Safe mode mein third-party apps band hoti hain." },
          { title: "Suspicious apps uninstall karo", detail: "Settings > Apps > recently installed apps check karo. Jo apps yaad nahi ki install ki — uninstall karo. Fake antivirus apps bhi malware hote hain." },
          { title: "Device Admin apps check karo", detail: "Settings > Security > Device Admin Apps. Unknown apps ko admin access mila hai to disable karo." },
          { title: "Malwarebytes ya reputed antivirus scan karo", detail: "Malwarebytes, Avast, ya Kaspersky install karo Google Play Store se. Full scan karo. Detected threats quarantine karo." },
          { title: "Browser cache aur data clear karo", detail: "Chrome > Settings > Privacy > Clear Browsing Data > All time > Cookies, Cache, Site data select karo." },
          { title: "Notification permission revoke karo", detail: "Settings > Apps > suspicious app > Notifications > Off. Adware notifications band ho jayengi." },
          { title: "Factory Reset (last resort)", detail: "Backup ke baad Settings > General Management > Reset > Factory Data Reset. Sab malware guaranteed remove hoga." }
        ],
        screenshots: [
          { caption: "Android Safe Mode boot screen showing shield icon, safe mode watermark instructions, third-party apps disabled warning, aur reboot steps", alt: "Android safe mode boot screen showing safe mode instructions and reboot steps", type: "phone", mockupType: "android-safe-mode-boot" },
          { caption: "Malwarebytes scan showing 3 threats found adware PUP trojan, remove all button, high medium low risk badges, aur post-removal play protect tip", alt: "Malwarebytes antivirus scan results showing detected threats with risk levels and remove button", type: "phone", mockupType: "antivirus-scan-result" }
        ],
        proTips: ["Play Protect always on rakho: Play Store > Profile > Play Protect > Scan", "Third-party APKs mat install karo — Play Store se hi karo", "Unknown Sources band rakho: Settings > Security > Unknown Sources > Off"],
        faqs: [
          { q: "Phone mein virus ka pata kaise chalega?", a: "Ads pop-up ho rahi hain, apps khud install ho rahi hain, battery fast drain, data usage zyada, ya phone garam ho raha hai — yeh signs hain." },
          { q: "Factory reset se virus hat jayega?", a: "Haan — 100% guaranteed. Lekin sab data bhi delete hoga. Backup pehle karo. Root kiya hua phone ho to root ke baad virus aa sakta hai." },
          { q: "Free antivirus apps kaam karte hain?", a: "Basic malware detect kar lete hain. Lekin advanced threats ke liye paid better hai. Malwarebytes free version bhi accha hai." },
          { q: "Banking app use karna safe hai virus ke saath?", a: "Bilkul nahi — turant banking apps mat use karo. Pehle virus remove karo. Banking details chori ho sakti hain." }
        ],
        related: [
          { title: "Storage Full Hai", slug: "storage-full-hai", category: "mobile" },
          { title: "Mobile Hang Ho Raha Hai", slug: "mobile-hang-ho-raha-hai", category: "mobile" },
          { title: "OTP Nahi Aa Raha Hai", slug: "otp-nahi-aa-raha", category: "mobile" }
        ],
        keywords: ["phone mein virus aa gaya", "mobile malware remove", "android virus scan", "phone hacked ho gaya"],
        variants: ["phone mein virus hai", "mobile virus kaise hataye", "phone hack ho gaya", "ads bahut aa rahe hain phone mein", "phone mein malware", "android virus removal"]
      },
      {
        slug: "screen-tut-gaya",
        category: "mobile",
        metaTitle: "Phone Ka Screen Tut Gaya? Kya Karein Complete Guide (2026) | JharForm",
        metaDescription: "Phone ka screen crack ho gaya, touch kaam nahi kar raha, ya display lines aa gayi hain? Repair, replacement, aur temporary fix ka complete guide.",
        h1: "Phone Screen Tut Gaya — Repair, Replace, Ya Temporary Fix?",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Medium",
        description: "Phone girne se screen crack ho jaati hai — touch response band ho jaata hai, display lines aa jaati hain, ya glass completely toot jaata hai. Small crack ho to screen protector se temporarily chal sakta hai. Lekin touch kaam nahi kar raha ho to replacement hi solution hai. Local repair vs authorized service center mein cost alag hoti hai.",
        steps: [
          { title: "Damage assess karo", detail: "Sirf outer glass crack hai ya LCD bhi damage hua hai? Screen on karke dekho — lines, black spots, ya colors distorted hain to LCD damage hai." },
          { title: "Temporary fix: Packing tape lagao", detail: "Crack pe clear packing tape lagao taaki glass pieces naa nikle. Screen protector pehle se ho to mat nikaalo — additional protection degi." },
          { title: "Data backup turant karo", detail: "Screen touch kaam kar raha hai to Google Drive/Photos mein backup karo. Touch nahi kaam kar raha to OTG mouse connect karo." },
          { title: "Authorized service center pe jaao", detail: "Samsung, Xiaomi, Realme, Vivo ke official service centers pe jaao. Genuine parts + warranty milti hai. Online appointment book karo." },
          { title: "Local repair shop compare karo", detail: "Local shop pe Rs. 800-2500 mein ho sakta hai. Lekin duplicate screen milti hai. Touch quality aur color accuracy kam hoti hai." },
          { title: "Screen replacement cost check karo", detail: "Budget phones: Rs. 1500-3000. Mid-range: Rs. 3000-6000. Premium (Samsung S/iPhone): Rs. 8000-25000+. Warranty mein free hota hai." },
          { title: "DIY replacement mat karo", detail: "YouTube videos dekhe ho to bhi mat karo. Screen delicate hai aur further damage ho sakta hai. Professional hi karwayein." }
        ],
        screenshots: [
          { caption: "Phone screen showing cracked glass with spider web pattern and touch unresponsive areas marked", alt: "Cracked phone screen with spider web pattern showing touch unresponsive areas", type: "phone", mockupType: "android-settings-display" },
          { caption: "Samsung authorized service center showing screen replacement price list for different models", alt: "Samsung service center screen replacement price chart for various phone models", type: "phone", mockupType: "myjio-app" }
        ],
        proTips: ["Tempered glass hamesha lagao — Rs. 100-300 mein screen bach jaati hai", "Flip cover use karo — corner drops se screen safe hoti hai", "Screen replacement ke baad 24 hours tak waterproof nahi hota"],
        faqs: [
          { q: "Screen crack hone se water damage ho sakta hai?", a: "Haan — crack se water andar ja sakta hai. Turant waterproof case lagao aur paani se bachao." },
          { q: "Local screen aur original mein kya farak hai?", a: "Local screen: touch sensitivity kam, colors dull, 3-6 months mein problem. Original: same quality, warranty, long lasting." },
          { q: "Screen replacement ke baad waterproofing rehti hai?", a: "Nahi — IP rating (waterproof) khatam ho jaati hai. Authorized center bhi seal properly nahi kar paate." },
          { q: "Insurance se screen replacement cover hoti hai?", a: "Haan agar phone insurance liya hai to. Brand warranty mein accidental damage cover nahi hota normally." }
        ],
        related: [
          { title: "Charging Nahi Ho Rahi Hai", slug: "charging-nahi-ho-rahi", category: "mobile" },
          { title: "Phone Paani Mein Gir Gaya", slug: "phone-water-damage-gir-gaya", category: "mobile" },
          { title: "Mobile Hang Ho Raha Hai", slug: "mobile-hang-ho-raha-hai", category: "mobile" }
        ],
        keywords: ["phone screen tut gaya", "mobile screen crack", "phone display broken", "screen replacement cost"],
        variants: ["phone ka screen toot gaya", "mobile screen tut gaya", "phone display lines aa gayi", "touch screen kaam nahi kar raha", "screen repair kaise karaye", "phone gir gaya screen tut gaya"]
      },
      {
        slug: "charging-nahi-ho-rahi",
        category: "mobile",
        metaTitle: "Phone Charging Nahi Ho Raha Hai? 8 Pakka Fix (2026) | JharForm",
        metaDescription: "Phone mein charger lagane par charging nahi ho rahi? Slow charging hai? Ya charging symbol aa raha hai par percentage badh nahi rahi? Yeh 8 steps se fix karo.",
        h1: "Phone Charging Nahi Ho Raha — 8 Pakka Fix",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Easy",
        description: "Phone mein charger lagane par charging symbol nahi aa raha, ya aa raha hai par battery percentage badh nahi rahi — charger fault, cable damage, charging port dust, ya battery health issue ho sakta hai. 90% cases mein yeh simple steps se fix ho jaata hai bina service center jaaye.",
        steps: [
          { title: "Different charger/cable try karo", detail: "Dusra charger aur cable try karo. Zyaadatar cable internal wire break ki wajah se charging band hoti hai." },
          { title: "Charging port saaf karo", detail: "Toothpick ya SIM ejector pin pe cotton lagao. Charging port mein gently ghumao — dust aur lint nikaalo. Air blower se bhi kar sakte ho." },
          { title: "Power source change karo", detail: "Laptop USB port, power bank, ya different wall socket try karo. Voltage issue ho sakta hai." },
          { title: "Phone restart karo", detail: "Software glitch ki wajah se charging band ho sakti hai. 30 second ke liye completely off karo phir charger lagao." },
          { title: "Wireless charging try karo (agar phone support kare)", detail: "Agar port damage ho to wireless charger se temporary charging ho sakti hai. Qi wireless pad Rs. 500-1500 mein milta hai." },
          { title: "Battery calibration karo", detail: "Phone ko 0% tak drain karo (automatic off hone do). Phir 100% tak bina use kiye charge karo. Battery percentage accurate ho jayega." },
          { title: "Battery health check karo", detail: "Settings > Battery > Battery Health. Below 80% ho to battery replace karwao — yeh common reason hai charging failure ka." },
          { title: "Service center le jao", detail: "Agar kuchh nahi kaam kiya to charging IC (internal circuit) fault ho sakta hai. Authorized center pe Rs. 500-2000 mein fix hota hai." }
        ],
        screenshots: [
          { caption: "Charging port cleaning showing SIM ejector pin with cotton tip removing lint from port", alt: "Cleaning phone charging port with cotton tipped SIM ejector pin removing dust and lint", type: "phone", mockupType: "android-settings-battery" },
          { caption: "Settings > Battery showing Battery Health at 74% with Replace Now recommendation", alt: "Android battery health screen showing 74 percent health with replace battery recommendation", type: "phone", mockupType: "android-battery-chart" }
        ],
        proTips: ["Overnight charging se bacho — 80% pe nikaalo charger", "Fast charging cable alag hoti hai — normal cable se fast charge nahi hoga", "Third-party chargers se battery damage ho sakti hai — original use karo"],
        faqs: [
          { q: "Charging symbol aa raha hai par percentage nahi badh rahi?", a: "Battery health 80% se kam ho sakti hai. Ya charging IC fault ho sakta hai. Pehle battery health check karo." },
          { q: "Phone charging ke waqt garam ho raha hai — normal hai?", a: "Thoda sa garam hona normal hai (35-40°C). Lekin 45°C+ nahi hona chahiye. Agar zyada garam ho raha hai to charger change karo." },
          { q: "Fast charging kaam nahi kar rahi — normal speed se ho rahi?", a: "Fast charging ke liye compatible charger + cable + phone sab chahiye. Ek bhi galat ho to normal speed se charge hogi." },
          { q: "Phone 0% se on nahi ho raha — kya karu?", a: "15-20 minute charge karo bina on kiye. Phir power button press karo. Deep discharge ho gayi hai battery." }
        ],
        related: [
          { title: "Battery Jaldi Khatam Ho Rahi", slug: "mobile-battery-drain", category: "mobile" },
          { title: "Phone Bahut Garam Ho Raha Hai", slug: "phone-heat-ho-raha-hai", category: "mobile" },
          { title: "Phone Screen Tut Gaya", slug: "screen-tut-gaya", category: "mobile" }
        ],
        keywords: ["phone charging nahi ho rahi", "mobile charge nahi ho raha", "charging slow hai", "phone charger nahi kaam kar raha"],
        variants: ["phone charge nahi ho raha", "mobile charging nahi ho rahi", "charger lagane par kuchh nahi ho raha", "phone charging symbol aa raha hai par nahi badh rahi", "slow charging fix", "phone 0 percent se on nahi ho raha"]
      },
      {
        slug: "phone-ghost-touch",
        category: "mobile",
        metaTitle: "Phone Khud Touch Ho Raha Hai? Ghost Touch Fix (2026) | JharForm",
        metaDescription: "Phone screen khud hi tap ho rahi hai, apps khud open ho rahi hain, ya typing khud ho rahi hai? Ghost touch problem ka step-by-step solution yahan hai.",
        h1: "Phone Ghost Touch Problem — Screen Khud Hi Tap Ho Rahi Hai",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Phone screen khud hi touch input register kar rahi hai bina aap kuchh kare — apps khud open ho rahi hain, typing ho rahi hai, ya screen randomly scroll ho rahi hai. Yeh screen protector bubble, moisture, charging ke waqt voltage fluctuation, ya screen damage ki wajah se hota hai.",
        steps: [
          { title: "Screen protector nikaal ke dekho", detail: "Tempered glass mein air bubble ya crack ho to ghost touch hota hai. Screen protector nikaalo — agar problem solve ho jaye to naya protector lagao." },
          { title: "Screen saaf karo", detail: "Soft microfiber cloth se screen pocho. Water spots, oil, ya dust ke particles touch sensors trigger kar sakte hain." },
          { title: "Charger nikaal ke dekho", detail: "Cheap chargers se voltage fluctuation hoti hai jo ghost touch cause karti hai. Original charger use karo. Charging ke waqt zyada problem ho to yeh reason hai." },
          { title: "Phone restart karo", detail: "Software glitch bhi ghost touch cause kar sakta hai. Phone restart karo. Agar safe mode mein problem nahi hai to koi app reason hai." },
          { title: "Touch sensitivity adjust karo", detail: "Settings > Display > Touch Sensitivity. Some phones mein option hota hai. Sensitivity kam karo." },
          { title: "Developer options se pointer location on karo", detail: "Developer Options > Pointer Location on karo. Yeh screen pe touch coordinates dikhaega — ghost touch spots identify karne mein help karega." },
          { title: "Screen replacement socho", detail: "Agar kuchh nahi kaam kiya to digitizer (touch layer) fault ho sakta hai. Screen replacement se fix hoga. Rs. 1500-4000 mein local se ho jaata hai." }
        ],
        screenshots: [
          { caption: "Phone screen showing random touch points with blue lines in developer mode pointer location", alt: "Android developer mode pointer location showing ghost touch points on screen", type: "phone", mockupType: "android-settings-display" },
          { caption: "Screen protector with air bubbles along edges causing false touch inputs marked with arrows", alt: "Tempered glass screen protector with air bubbles causing ghost touch issues on phone", type: "phone", mockupType: "android-settings-display" }
        ],
        proTips: ["Naya screen protector lagate waqt dust-free room mein karo", "Cheap chargers se bacho — voltage fluctuation ghost touch ka main reason hai", "Humidity zyada ho to phone dry jagah pe rakho"],
        faqs: [
          { q: "Ghost touch permanent damage hai?", a: "Nahi hamesha — zyaadatar screen protector, moisture, ya charger issue se hota hai. Screen damage ho to replacement chahiye." },
          { q: "Charging ke waqt hi ghost touch kyu hota hai?", a: "Cheap charger se ground/voltage issue hota hai. Original charger use karo. Earthing wale socket mein lagao." },
          { q: "Screen protector ke bina ghost touch nahi hota?", a: "Haan agar protector mein bubble ya crack ho to. Naya quality protector lagao ya bina protector ke chalao." },
          { q: "Ghost touch se data delete ho sakta hai?", a: "Haan — khud se apps open ho ke settings change ho sakti hain. Turant phone lock karo aur fix karo." }
        ],
        related: [
          { title: "Screen Tut Gaya", slug: "screen-tut-gaya", category: "mobile" },
          { title: "Mobile Hang Ho Raha Hai", slug: "mobile-hang-ho-raha-hai", category: "mobile" },
          { title: "Phone Bahut Garam Ho Raha Hai", slug: "phone-heat-ho-raha-hai", category: "mobile" }
        ],
        keywords: ["ghost touch problem", "phone khud touch ho raha hai", "screen auto touch", "android ghost touch fix"],
        variants: ["phone screen khud chal rahi hai", "ghost touch fix", "phone khud hi apps open kar raha hai", "touch screen khud kaam kar raha hai", "phone typing khud ho rahi hai"]
      },
      {
        slug: "speaker-aur-mic-nahi-chal-raha",
        category: "mobile",
        metaTitle: "Phone Ka Speaker Ya Mic Nahi Chal Raha? Fix Guide (2026) | JharForm",
        metaDescription: "Phone mein awaaz nahi aa rahi, call mein doosra side sun nahi pa raha, ya speaker se music nahi aa raha? Speaker aur mic problem ka complete fix.",
        h1: "Phone Speaker Aur Mic Nahi Chal Raha — Complete Fix Guide",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Easy",
        description: "Phone ka speaker ya mic kaam nahi kar raha — call mein awaaz nahi aa rahi, music mute hai, ya doosra side aapko nahi sun pa raha. Yeh dust blockage, water damage, software glitch, ya hardware fault ki wajah se hota hai. 70% cases mein cleaning se fix ho jaata hai.",
        steps: [
          { title: "Volume check karo", detail: "Volume up button press karo. Do Not Disturb mode off karo. Call volume aur media volume alag hote hain — dono check karo." },
          { title: "Speaker grill saaf karo", detail: "Soft toothbrush se speaker grill pe gently brush karo. Compressed air se dust nikaalo. Caution: pin mat use karo — speaker damage ho sakta hai." },
          { title: "Mic hole saaf karo", detail: "Phone ke bottom mein chhota mic hole hota hai. SIM ejector pin pe soft cloth lagake gently saaf karo." },
          { title: "Phone restart karo", detail: "Audio drivers glitch ho sakte hain. Restart se fix ho jaate hain. Safe mode mein check karo — wahan kaam kare to app conflict hai." },
          { title: "Bluetooth off karo", detail: "Bluetooth on ho to audio Bluetooth device pe ja rahi hai. Bluetooth off karo ya connected device disconnect karo." },
          { title: "Audio settings reset karo", detail: "Settings > Apps > Phone/Calling app > Storage > Clear Cache. Ya Settings > Sound > Reset to defaults." },
          { title: "Water eject app try karo", detail: "Phone mein paani gaya ho to Speaker Cleaner ya Fix My Speakers app se low frequency sound se paani nikaal sakte hain." },
          { title: "Service center le jao", detail: "Agar cleaning se nahi fix hua to speaker/mic module replace karna padega. Local: Rs. 300-800. Authorized: Rs. 800-2000." }
        ],
        screenshots: [
          { caption: "Phone bottom showing speaker grill and mic hole with dust accumulation visible", alt: "Phone bottom speaker grill and microphone hole with visible dust blocking sound", type: "phone", mockupType: "android-settings-sound" },
          { caption: "Volume settings panel showing Call volume at max, Media volume at max, and Do Not Disturb off", alt: "Android volume panel showing call media and ring volume all set to maximum levels", type: "phone", mockupType: "android-settings-sound" }
        ],
        proTips: ["Shower ke waqt phone bathroom mein mat rakho — steam mic aur speaker damage karta hai", "Speaker grill pe tape mat lagao — sound block hoti hai", "Headphone jack mein dust mat jane do — wahan se bhi audio issue hota hai"],
        faqs: [
          { q: "Call mein awaaz aa rahi hai par music nahi aa rahi?", a: "Media volume alag hoti hai. Volume up karo jab music chal rahi ho. Ya music app ka volume alag hota hai — app mein check karo." },
          { q: "Speaker saaf karne se damage hoga?", a: "Soft brush se nahi. Pin ya sharp object se damage ho sakta hai. Toothbrush ya compressed air safe hai." },
          { q: "Water damage ke baad speaker kaam kar raha par awaaz muffled hai?", a: "Paani speaker cone mein gaya hai. Speaker Cleaner app se low frequency sound se paani nikaalo. 24-48 hours dry rakho." },
          { q: "Ear speaker (call speaker) alag hota hai kya?", a: "Haan — phone mein 2 speakers hote hain: bottom loudspeaker (music) aur top earpiece (calls). Earpiece repair Rs. 500-1500 mein hota hai." }
        ],
        related: [
          { title: "Phone Screen Tut Gaya", slug: "screen-tut-gaya", category: "mobile" },
          { title: "Phone Paani Mein Gir Gaya", slug: "phone-water-damage-gir-gaya", category: "mobile" },
          { title: "Mobile Hang Ho Raha Hai", slug: "mobile-hang-ho-raha-hai", category: "mobile" }
        ],
        keywords: ["phone speaker nahi chal raha", "mobile mic nahi kaam kar raha", "call mein awaaz nahi aa rahi", "phone speaker problem"],
        variants: ["phone mein awaaz nahi aa rahi", "speaker kaam nahi kar raha", "mic nahi chal raha phone mein", "call mein doosra side sun nahi pa raha", "phone speaker mute ho gaya", "phone audio nahi aa raha"]
      },
      {
        slug: "mobile-camera-problem",
        category: "mobile",
        metaTitle: "Phone Camera Nahi Chal Raha? Blurry Photos? Fix (2026) | JharForm",
        metaDescription: "Phone camera black screen dikh raha hai, photos blurry aa rahi hain, ya flash kaam nahi kar raha? Mobile camera problem ka complete fix guide.",
        h1: "Phone Camera Problem — Black Screen, Blurry Photos, Flash Fix",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Easy",
        description: "Phone camera black screen dikh raha hai, photos blurry ya dark aa rahi hain, autofocus kaam nahi kar raha, ya camera app crash ho rahi hai. Yeh lens smudge, software glitch, insufficient storage, ya camera module fault ki wajah se hota hai. Most cases mein cleaning aur software fix se solve ho jaata hai.",
        steps: [
          { title: "Camera lens saaf karo", detail: "Soft microfiber cloth se lens pe gentle circular motion mein pocho. Fingerprints aur dust photos blurry kar deti hain. Lens protector hata ke saaf karo." },
          { title: "Camera app force stop karo", detail: "Settings > Apps > Camera > Force Stop. Phir Camera app dobara kholo. App crash ki wajah se black screen aa rahi hoti hai." },
          { title: "Camera app cache clear karo", detail: "Settings > Apps > Camera > Storage > Clear Cache. Camera settings bhi reset ho jaayengi — default ho jayega." },
          { title: "Storage check karo", detail: "Camera ko photos save karne ke liye space chahiye. Storage full hone se camera open nahi hota. 500MB+ free karo." },
          { title: "Third-party camera app try karo", detail: "Google Camera (GCam) ya Open Camera install karo. Agar third-party app se photo acchi aa rahi hai to stock camera app problem hai." },
          { title: "Phone restart karo", detail: "Camera drivers software glitch ki wajah se crash ho sakte hain. Phone restart se camera subsystem refresh hota hai." },
          { title: "Safe mode mein check karo", detail: "Safe mode boot karo — agar wahan camera kaam kar raha hai to koi recently installed app conflict kar rahi hai." },
          { title: "Service center le jao", detail: "Hardware fault ho to camera module replacement chahiye. Local: Rs. 800-2000. Authorized: Rs. 1500-4000. Lens crack ho to alag cost aati hai." }
        ],
        screenshots: [
          { caption: "Phone camera lens showing fingerprint smudges and dust causing blurry photos", alt: "Phone camera lens with visible fingerprint smudges and dust particles affecting photo quality", type: "phone", mockupType: "android-settings-camera" },
          { caption: "Settings > Apps > Camera showing Force Stop and Clear Cache buttons highlighted", alt: "Android settings showing camera app with force stop and clear cache options highlighted", type: "phone", mockupType: "android-settings-camera" }
        ],
        proTips: ["Lens hamesha microfiber cloth se saaf karo — tissue se scratches aa sakte hain", "GCam port apne phone model ke liye search karo — photos quality 2x badh jaati hai", "Camera flash overuse se lens coating damage hoti hai — natural light use karo"],
        faqs: [
          { q: "Camera black screen dikh raha hai — kya karu?", a: "Camera app force stop karo. Agar nahi fix hua to safe mode mein check karo. Safe mode mein kaam kare to third-party app conflict hai." },
          { q: "Photos blurry aa rahi hain — lens saaf hai phir bhi?", a: "Autofocus issue ho sakta hai. Tap to focus karo photo lene se pehle. Ya camera app mein manual focus mode try karo." },
          { q: "Front camera kaam kar rahi par back nahi?", a: "Back camera module alag hota hai. Hardware fault possible hai. Service center le jao — back camera replacement Rs. 1000-3000." },
          { q: "Night mode mein photos bahut grainy aa rahi hain?", a: "Normal hai budget phones mein — small sensor size ki wajah se. Stable rakho (tripod ya wall support). GCam se better low light performance milti hai." }
        ],
        related: [
          { title: "Phone Screen Tut Gaya", slug: "screen-tut-gaya", category: "mobile" },
          { title: "Storage Full Hai", slug: "storage-full-hai", category: "mobile" },
          { title: "Phone Paani Mein Gir Gaya", slug: "phone-water-damage-gir-gaya", category: "mobile" }
        ],
        keywords: ["phone camera nahi chal raha", "mobile camera black screen", "phone camera blurry", "camera app crash"],
        variants: ["phone camera kaam nahi kar raha", "camera black screen aa rahi hai", "mobile camera problem", "phone camera blurry photos", "flash nahi chal raha", "camera focus nahi kar raha"]
      },
      {
        slug: "otp-nahi-aa-raha",
        category: "mobile",
        metaTitle: "OTP SMS Nahi Aa Raha? Bank OTP Miss Ho Raha? Fix (2026) | JharForm",
        metaDescription: "Bank OTP, UPI PIN, ya login code SMS nahi aa raha? Phone mein OTP delay ho raha hai ya bilkul nahi aa raha? Yeh guide se turant OTP fix karo.",
        h1: "OTP SMS Nahi Aa Raha — Bank, UPI, App Login Code Fix",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Bank OTP, UPI transaction code, ya app login verification SMS nahi aa raha — network issue, DND (Do Not Disturb) activation, SMS inbox full, ya message filtering ki wajah se hota hai. Yeh India mein sabse common mobile banking problem hai. 5 minute mein fix kar sakte hain.",
        steps: [
          { title: "Network signal check karo", detail: "Phone mein signal bars check karo. 1-2 bars ho to OTP delay hota hai. Airplane mode on-off karo ya better signal area mein jao." },
          { title: "SMS inbox saaf karo", detail: "Messages app kholo — 5000+ messages hone se new SMS block ho sakta hai. Purane OTP messages aur promotional SMS delete karo." },
          { title: "DND (Do Not Disturb) check karo", detail: "Settings > DND > Off karo. Ya *#*#3646633#*#* dial karo (MTS). TRAI DND se promotional block ho sakta hai — banking OTPs alag hoti hain lekin sometimes block ho jaati hain." },
          { title: "Message app ka cache clear karo", detail: "Settings > Apps > Messages > Storage > Clear Cache. Message app crash ki wajah se SMS receive nahi ho rahi hoti." },
          { title: "SIM card reseat karo", detail: "Phone band karo. SIM tray nikaalo. SIM card nikaal ke saaf kapde se pocho. Wapas tight lagao. SIM damage ho to duplicate SIM bank se le lo." },
          { title: "Alternative OTP try karo", detail: "Bank/app mein 'Resend OTP' pe 2-3 baar try karo. Agar SMS nahi aa rahi to 'Call OTP' option try karo — phone pe OTP bolke aata hai." },
          { title: "Bank/app customer care call karo", detail: "Agar regularly nahi aa raha to bank ko call karo — unka system se SMS block ho sakta hai. Customer care se SMS service unblock karwa lo." }
        ],
        screenshots: [
          { caption: "Android Messages inbox showing 4872 old SMS with storage full warning banner, bank OTP SMS list, DND check note, aur airplane mode on-off tip", alt: "Android messages app showing storage full warning blocking new SMS with OTP messages", type: "phone", mockupType: "android-otp-sms" },
          { caption: "SIM card settings showing no SIM detected warning, SIM 1 SIM 2 status, network operators auto-select toggle, aur SIM tray reseat fix steps", alt: "Android SIM card manager showing no SIM detected status and network operator settings", type: "phone", mockupType: "android-sim-settings" }
        ],
        proTips: ["OTP messages turant delete mat karo — 24 hours tak rakho (transaction dispute ke liye)", "Banking apps mein 'Call OTP' zyada reliable hai congested networks mein", "Dual SIM phone mein correct SIM pe OTP mangwao — galat SIM pe delay hota hai"],
        faqs: [
          { q: "OTP 10 minute baad aa raha hai — normal hai?", a: "Nahi — normal mein 10-30 second mein aata hai. 2 minute se zyada delay ho to network issue hai. Airplane mode on-off karo." },
          { q: "DND se OTP block hota hai?", a: "Banking OTPs DND se block nahi hote normally. Lekin kabhi kabhi network operator se promotional filter mein chala jaata hai." },
          { q: "SIM card purana ho to OTP nahi aa sakta?", a: "Haan — 5+ saal purana SIM damage ho sakta hai. Bank branch mein jao — duplicate SIM Rs. 25-50 mein milta hai. Same number rehta hai." },
          { q: "OTP kisi aur ke phone pe aa raha hai?", a: "SIM cloning ya number porting ho sakta hai. Turant bank call karo aur number freeze karwao. Police complaint bhi socho." }
        ],
        related: [
          { title: "UPI Payment Failed", slug: "upi-payment-pending", category: "payment" },
          { title: "Mobile Internet Nahi Chal Raha", slug: "mobile-internet-nahi-chal-raha", category: "mobile" },
          { title: "Mobile Mein Virus Aa Gaya", slug: "mobile-viruses-malware", category: "mobile" }
        ],
        keywords: ["otp nahi aa raha", "sms otp not received", "bank otp nahi aa raha", "upi otp delay"],
        variants: ["otp nahi aa raha", "sms nahi aa raha", "bank otp miss ho raha hai", "phone mein otp nahi aa raha", "login code nahi aa raha", "otp delay ho raha hai"]
      },
      {
        slug: "fingerprint-nahi-chal-raha",
        category: "mobile",
        metaTitle: "Fingerprint Scanner Nahi Chal Raha? Unlock Fix (2026) | JharForm",
        metaDescription: "Phone ka fingerprint sensor kaam nahi kar raha? Finger scan nahi ho raha? Ya slow response de raha hai? Fingerprint problem ka complete fix.",
        h1: "Fingerprint Scanner Nahi Chal Raha — Unlock Fix Guide",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Fingerprint scanner recognize nahi kar raha, 'Not recognized' error aa raha hai, ya slow response de raha hai — screen protector interference, dirty sensor, wet fingers, ya registered fingerprint damage ki wajah se hota hai. Software re-register se 80% cases mein fix ho jaata hai.",
        steps: [
          { title: "Sensor saaf karo", detail: "Soft cloth se fingerprint sensor area pocho. Oil, sweat, ya dust se sensor read nahi kar paata. Screen protector ke neeche bubble ho to hatao." },
          { title: "Fingers dry karo", detail: "Gile ya sweaty fingers se scanner kaam nahi karta. Haath pocho. Winter mein dry skin se bhi problem hoti hai — lotion lagao phir scan karo." },
          { title: "Fingerprint re-register karo", detail: "Settings > Security > Fingerprint > Delete existing > Add new fingerprint. Same finger ko 5-6 different angles se scan karo. Edge angles bhi include karo." },
          { title: "Multiple fingers register karo", detail: "Same finger ke alag angles ke saath doosre haath ki same finger bhi register karo. Backup ke liye useful hota hai." },
          { title: "Screen protector check karo", detail: "Thick tempered glass ya privacy screen protector se fingerprint optical sensor block hota hai. Protector hata ke check karo. Thin protector lagao." },
          { title: "Phone restart karo", detail: "Fingerprint driver glitch ho sakta hai. Restart se fix ho jaata hai. Safe mode mein check karo — third-party app conflict possible hai." },
          { title: "Backup unlock method use karo", detail: "PIN/Pattern backup hamesha ready rakho. Fingerprint permanently fail ho to service center le jao — Rs. 500-1500 mein sensor replace hota hai." }
        ],
        screenshots: [
          { caption: "Settings > Security > Fingerprint showing Add Fingerprint with finger placement animation", alt: "Android fingerprint setup screen showing finger placement instruction for scanning", type: "phone", mockupType: "android-settings-security" },
          { caption: "Fingerprint sensor closeup showing dust particles and oil smudge affecting scan accuracy", alt: "Closeup of phone fingerprint sensor with visible dust and oil affecting recognition", type: "phone", mockupType: "android-settings-security" }
        ],
        proTips: ["Finger register karte waqt zyada pressure mat do — normal touch se best result milta hai", "Side-mounted fingerprint mein thumb ka natural grip angle register karo", "Face unlock bhi enable karo backup ke liye — Settings > Security > Face Unlock"],
        faqs: [
          { q: "Fingerprint 5 baar fail hone ke baad kya hota hai?", a: "Phone PIN/Pattern maangta hai. 10+ failed attempts pe temporary lock ho sakta hai. Backup unlock hamesha ready rakho." },
          { q: "Screen protector ke saath fingerprint kaam karta hai?", a: "Thin tempered glass se kaam karta hai. Thick ya privacy protector se problem hoti hai. In-display fingerprint wale phones mein certified protectors use karo." },
          { q: "Cut ya scratch se fingerprint change ho jaata hai?", a: "Haan — major cut ya scar se fingerprint pattern change ho jaata hai. Heal hone ke baad re-register karo." },
          { q: "Fingerprint scanner permanently damage ho sakta hai?", a: "Haan — water damage, physical crack, ya liquid se sensor chip damage ho sakta hai. Replacement hi solution hai." }
        ],
        related: [
          { title: "Mobile Hang Ho Raha Hai", slug: "mobile-hang-ho-raha-hai", category: "mobile" },
          { title: "Screen Tut Gaya", slug: "screen-tut-gaya", category: "mobile" },
          { title: "Phone Paani Mein Gir Gaya", slug: "phone-water-damage-gir-gaya", category: "mobile" }
        ],
        keywords: ["fingerprint not working", "fingerprint scanner problem", "phone fingerprint nahi chal raha", "fingerprint unlock failed"],
        variants: ["fingerprint kaam nahi kar raha", "phone unlock nahi ho raha fingerprint se", "fingerprint scanner slow hai", "finger scan nahi ho raha", "biometric unlock failed", "fingerprint not recognized"]
      },
      {
        slug: "phone-water-damage-gir-gaya",
        category: "mobile",
        metaTitle: "Phone Paani Mein Gir Gaya? Water Damage Fix — Turant Kya Kare (2026) | JharForm",
        metaDescription: "Phone pani mein gir gaya, toilet mein gaya, ya baarish mein bheeg gaya? Paani girne ke baad turant kya karein aur phone bachane ka best tarika.",
        h1: "Phone Paani Mein Gir Gaya — Water Damage Emergency Fix",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Medium",
        description: "Phone pani mein gir gaya — sink, toilet, rain, ya drink spill. Paani andar jaane se motherboard short circuit ho sakta hai. Turant sahi steps lene se phone bach sakta hai. Galti se charger lagana, shake karna, ya hair dryer se phone permanently damage ho sakta hai.",
        steps: [
          { title: "Turant phone nikaalo", detail: "Jitni jaldi ho pani se nikaalo. 30 second bhi matter karti hain — paani andar jaldi se jata hai. On ho to mat band karo — power button press karne se short circuit ho sakta hai." },
          { title: "Sab accessories nikaalo", detail: "Case, cover, SIM tray, aur memory card turant nikaalo. Yeh pani trap karte hain. SIM tray ejector pin se nikaalo — paani nikaalne ka raasta banta hai." },
          { title: "Phone ko patla rakho", detail: "Gravity se paani nikaalne ke liye phone ko speaker grill aur charging port niche karke rakho. Gently tap karo — zor se mat shake karo." },
          { title: "Pochne ke liye dry cloth use karo", detail: "Microfiber cloth se bahar ka paani pocho. Charging port mein cloth ka tukda mat ghusao — further andar ja sakta hai." },
          { title: "Silica gel packets ke saath rakho", detail: "Phone ko ziplock bag mein silica gel packets ke saath 48-72 ghante rakho. Rice kaam nahi karti — silica gel 10x better hai. New shoe box mein silica gel milti hai." },
          { title: "48 ghante tak on mat karo", detail: "Bilkul bhi power button mat press karo. Internal paani dry hone mein 48-72 hours lagte hain. Jaldi on karne se motherboard damage pakka hota hai." },
          { title: "Service center le jao", detail: "48 hours baad bhi problem hai to authorized service center le jao. Ultrasonic cleaning se motherboard saaf hoti hai. Cost: Rs. 500-3000 depending on damage." }
        ],
        screenshots: [
          { caption: "Phone placed vertically with charging port facing down over dry cloth to drain water by gravity", alt: "Water damaged phone placed vertically with port facing down on cloth for gravity drainage", type: "phone", mockupType: "android-settings-system" },
          { caption: "Ziplock bag filled with silica gel packets surrounding phone for moisture absorption", alt: "Phone placed in ziplock bag surrounded by silica gel desiccant packets for drying", type: "phone", mockupType: "android-settings-system" }
        ],
        proTips: ["Hair dryer bilkul mat use karo — heat se internal components damage hote hain", "Rice mein rakhna myth hai — silica gel 10x better hai", "IP67/IP68 phone bhi paani se damage ho sakta hai — warranty mein accidental damage cover nahi hota"],
        faqs: [
          { q: "Phone on hai pani girne ke baad — band karu ya chalu rakhu?", a: "Turant mat band karo — power button press karne se short circuit ho sakta hai. SIM tray nikaalo aur battery disconnect ho sake to nikaalo (removable battery wale)." },
          { q: "Rice mein rakhne se phone thik hota hai?", a: "Myth hai — rice bahut slow absorb karta hai. Silica gel, clay cat litter, ya professional drying agent use karo." },
          { q: "48 ghante baad bhi charging nahi ho rahi?", a: "Charging port ya motherboard water damage ho sakta hai. Service center le jao. Turant charging na lagao — further damage hoga." },
          { q: "Water damage warranty mein cover hota hai?", a: "Nahi — accidental liquid damage warranty mein nahi hota. IP rating wale phones bhi manufacturing defect pe hi cover hote hain." }
        ],
        related: [
          { title: "Charging Nahi Ho Rahi Hai", slug: "charging-nahi-ho-rahi", category: "mobile" },
          { title: "Speaker Aur Mic Nahi Chal Raha", slug: "speaker-aur-mic-nahi-chal-raha", category: "mobile" },
          { title: "Screen Tut Gaya", slug: "screen-tut-gaya", category: "mobile" }
        ],
        keywords: ["phone pani mein gir gaya", "water damage phone fix", "mobile water damage", "phone paani mein gaya"],
        variants: ["phone paani mein gir gaya", "mobile pani mein gaya", "phone water damage", "phone toilet mein gir gaya", "phone baarish mein bheeg gaya", "pani gir gaya phone mein"]
      },
      {
        slug: "mobile-data-usage-jaldi-khatam",
        category: "mobile",
        metaTitle: "Mobile Data Jaldi Khatam Ho Raha Hai? Data Saver Guide (2026) | JharForm",
        metaDescription: "Phone ka data 1-2 din mein hi khatam ho ja raha hai? Daily data limit jaldi khatam hoti hai? Data usage control ka complete guide.",
        h1: "Mobile Data Jaldi Khatam Ho Raha Hai \u2014 Data Usage Fix",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Easy",
        description: "1GB daily data 2-3 ghante mein khatam ho ja raha hai \u2014 background apps, auto-play videos, app updates, aur high-quality streaming data bahut khaate hain. Instagram Reels, YouTube Shorts, aur WhatsApp status sabse zyada data consume karte hain. Data Saver mode aur app-level controls se data 2x tak bachta hai.",
        steps: [
          { title: "Data usage check karo", detail: "Settings > Network & Internet > Data Usage. Sabse zyada data kaun sa app consume kar raha hai dekho. Top consumers identify karo." },
          { title: "Background data restrict karo", detail: "Settings > Apps > Heavy app > Mobile Data > Background Data > Off. Facebook, Instagram, Snapchat background mein data khaate hain." },
          { title: "Data Saver mode on karo", detail: "Settings > Network & Internet > Data Saver > On. Yeh background data block karta hai aur apps ko compressed data use karne pe force karta hai." },
          { title: "Auto-play videos band karo", detail: "Instagram: Settings > Account > Cellular Data Use > Use Less Data. Facebook: Settings > Media > Auto-play > Never. YouTube: Settings > General > Limit mobile data usage." },
          { title: "App updates WiFi pe restrict karo", detail: "Play Store > Settings > Network Preferences > Auto-update apps > Over WiFi only. App updates 50-200MB ke hote hain \u2014 daily data khatam kar dete hain." },
          { title: "Streaming quality kam karo", detail: "YouTube: Settings > Video quality preferences > Data saver. Netflix: App > Downloads/Stream > Mobile Data Usage > Low. Spotify: Music Quality > Low/Normal." },
          { title: "WhatsApp media auto-download band karo", detail: "WhatsApp > Settings > Storage and Data > Media Auto-Download > Mobile Data pe sab off karo. Group mein photos/videos bahut aate hain." },
          { title: "Lite apps use karo", detail: "Facebook Lite, Instagram Lite, Messenger Lite, Google Go, YouTube Go use karo. 70% less data consume karte hain aur slow network pe bhi chalte hain." }
        ],
        screenshots: [
          { caption: "Settings > Data Usage showing Facebook consumed 450MB Instagram 380MB and YouTube 290MB in one day", alt: "Android data usage settings showing top consuming apps Facebook Instagram YouTube with MB usage", type: "phone", mockupType: "myjio-app" },
          { caption: "Instagram Settings > Cellular Data Use showing Data Saver toggle and Use Less Data option", alt: "Instagram app settings showing cellular data usage options with data saver mode", type: "phone", mockupType: "myjio-app" }
        ],
        proTips: ["Google Chrome mein Data Saver on karo \u2014 Settings > Lite mode", "Maps offline download karo \u2014 navigation mein data nahi lagta", "Music offline download karo \u2014 streaming mein zyada data lagta hai"],
        faqs: [
          { q: "1GB data kitne der chalta hai normal use mein?", a: "Social media + browsing: 3-4 hours. Videos dekh rahe ho to 1-2 hours. Data saver mode + lite apps se 6-8 hours chal sakta hai." },
          { q: "WhatsApp kitna data use karta hai?", a: "Text messages: bahut kam. Photos: 2-5MB each. Videos: 10-50MB each. Voice calls: 0.5MB/min. Video calls: 3-8MB/min." },
          { q: "Background data restrict karne se notifications nahi aayengi?", a: "Real-time notifications (WhatsApp, calls) aa jaayengi. Lekin refresh-based apps (email, news) delay ho sakti hain." },
          { q: "Data Saver mode se sab apps slow ho jaati hain?", a: "Nahi \u2014 sirf background data block hota hai. Foreground apps waise hi chalti hain. Kuchh apps compressed images use karti hain." }
        ],
        related: [
          { title: "Mobile Internet Nahi Chal Raha", slug: "mobile-internet-nahi-chal-raha", category: "mobile" },
          { title: "Storage Full Hai", slug: "storage-full-hai", category: "mobile" },
          { title: "Phone Hang Ho Raha Hai", slug: "mobile-hang-ho-raha-hai", category: "mobile" }
        ],
        keywords: ["mobile data jaldi khatam", "data usage zyada", "phone data fast khatam", "android data saver"],
        variants: ["data jaldi khatam ho raha hai", "mobile data bahut jaldi khatam", "1gb data kitne der chalta hai", "phone mein data fast khatam", "data saver kaise on kare", "mobile data usage kam kaise kare"]
      },
      {
        slug: "phone-app-crash-ho-rahi-hai",
        category: "mobile",
        metaTitle: "Phone Apps Baar Baar Crash Ho Rahi Hain? App Freeze Fix (2026) | JharForm",
        metaDescription: "Apps khulte hi band ho jaati hain, app freeze ho rahi hai, ya 'App has stopped' error aa raha hai? App crash ka step-by-step fix.",
        h1: "Apps Crash Ho Rahi Hain \u2014 App Freeze Fix Guide",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Easy",
        description: "Apps khulte hi band ho jaati hain, screen freeze ho rahi hai, ya 'Unfortunately, App has stopped' error aa raha hai. Low RAM, corrupt cache, outdated app version, ya insufficient storage ki wajah se apps crash hoti hain. Multiple apps crash ho rahi hain to system-level issue hai \u2014 sirf ek app crash ho rahi to app-specific problem hai.",
        steps: [
          { title: "App force stop karo", detail: "Settings > Apps > Crashing app > Force Stop. App completely band ho jayegi. Phir dobara kholo. Temporary glitch fix hota hai." },
          { title: "App cache clear karo", detail: "Settings > Apps > Crashing app > Storage > Clear Cache. Corrupt cache common crash reason hai. Data mat clear karo \u2014 login reh jaayega." },
          { title: "App data clear karo (if cache doesn't work)", detail: "Settings > Apps > Crashing app > Storage > Clear Data. App completely reset ho jayegi. Login aur settings delete hongi. Backup zaroori hai." },
          { title: "App update karo", detail: "Play Store > Profile > Manage apps & device > Updates available. Outdated apps latest OS pe crash hoti hain. Auto-update on rakho." },
          { title: "App reinstall karo", detail: "App uninstall karo. Play Store se latest version install karo. Corrupt APK fresh install se fix hota hai." },
          { title: "Storage check karo", detail: "Settings > Storage. Kam se kam 1GB free hona chahiye. Storage full hone se apps crash hoti hain \u2014 cache write nahi hota." },
          { title: "Phone restart karo", detail: "RAM refresh hogi. Background processes clear hongi. Multiple apps crash ho rahi hain to restart sabse effective hai." },
          { title: "Safe mode mein check karo", detail: "Safe mode mein app crash nahi ho rahi to third-party app conflict hai. Recently installed apps uninstall karo." }
        ],
        screenshots: [
          { caption: "Android crash dialog showing Instagram keeps stopping with error message, Close App aur Send Feedback buttons, aur quick fix steps below", alt: "Android app crash dialog showing instagram keeps stopping error with close app and send feedback buttons", type: "phone", mockupType: "android-app-crash" },
          { caption: "Android Settings Apps Instagram showing Force Stop, Clear Cache buttons with storage info aur crash fix instructions", alt: "Android settings apps instagram showing force stop and clear cache options for fixing app crash", type: "phone", mockupType: "android-app-crash" }
        ],
        proTips: ["Beta apps unstable hoti hain \u2014 Play Store mein beta sign dekho", "Developer options mein 'Don't keep activities' off rakho", "RAM 4GB se kam ho to ek hi app use karo background mein"],
        faqs: [
          { q: "Sirf ek app crash ho rahi hai baaki sab chal rahi hain?", a: "App-specific issue hai. Cache clear, data clear, ya reinstall karo. App update bhi check karo." },
          { q: "Cache clear karne se app data delete hoga?", a: "Nahi \u2014 sirf temporary files delete hoti hain. Login, settings, aur saved data safe rehta hai." },
          { q: "Phone mein RAM kitni honi chahiye?", a: "4GB minimum hai smooth apps ke liye. 6GB+ recommended hai heavy users ke liye. 2GB pe Lite apps use karo." },
          { q: "Factory reset se app crash fix hoga?", a: "Haan \u2014 100% fix. Lekin sab data delete hoga. Pehle cache clear, reinstall, aur storage free karo." }
        ],
        related: [
          { title: "Storage Full Hai", slug: "storage-full-hai", category: "mobile" },
          { title: "Mobile Hang Ho Raha Hai", slug: "mobile-hang-ho-raha-hai", category: "mobile" },
          { title: "Mobile Mein Virus Aa Gaya", slug: "mobile-viruses-malware", category: "mobile" }
        ],
        keywords: ["app crash ho rahi hai", "phone apps crash", "app freeze android", "app has stopped error"],
        variants: ["app crash ho rahi hai", "phone apps band ho ja rahi hain", "app khulte hi band ho jaati hai", "app freeze ho rahi hai", "unfortunately app has stopped", "apps nahi chal rahi phone mein"]
      },
      {
        slug: "mobile-usb-file-transfer-nahi-ho-rahi",
        category: "mobile",
        metaTitle: "Phone Se Computer Mein File Transfer Nahi Ho Rahi? Fix (2026) | JharForm",
        metaDescription: "USB cable se phone se laptop/computer mein file copy nahi ho rahi? USB connection detect nahi ho raha? File transfer problem ka complete fix.",
        h1: "USB File Transfer Nahi Ho Rahi \u2014 Phone Se Computer Connect Fix",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "USB cable lagane par phone sirf charge ho raha hai, computer mein phone detect nahi ho raha, ya 'USB device not recognized' error aa raha hai. USB settings 'Charging only' pe set hone, cable fault, driver issue, ya port problem ki wajah se hota hai. Zyaadatar USB connection mode change karne se fix ho jaata hai.",
        steps: [
          { title: "USB mode check karo", detail: "Cable lagane ke baad notification panel mein 'USB for charging' dikhega. Uspe tap karo. 'File transfer' ya 'MTP' select karo. Default charging only hota hai." },
          { title: "Dusri USB cable try karo", detail: "Data cable alag hoti hai charging cable se. Rs. 50-100 wali cables sirf charging karti hain. Original cable ya branded cable use karo." },
          { title: "USB port change karo", detail: "PC ke back panel ke USB 2.0 port try karo. Front panel ports loose ho sakte hain. USB 3.0 (blue) ports sometimes compatibility issue deti hain." },
          { title: "Phone driver install karo (Windows)", detail: "Windows Device Manager mein phone ke neeche yellow triangle ho to driver issue hai. Manufacturer website se USB driver download karo. Samsung: Smart Switch. Xiaomi: Mi PC Suite." },
          { title: "MTP mode manually enable karo", detail: "Phone dialer mein *#*#13491#*#* dial karo (Samsung). Ya Settings > Developer Options > Default USB Configuration > File Transfer." },
          { title: "Phone restart aur dobara connect karo", detail: "Phone aur dono devices restart karo. USB stack refresh hoga. First connection pe drivers install honge." },
          { title: "Wireless transfer try karo", detail: "Nearby Share, ShareIt, Xender, ya Google Drive se wireless transfer karo. WiFi same network pe hona chahiye. Speed USB se zyada hoti hai." }
        ],
        screenshots: [
          { caption: "Phone notification panel showing USB for charging with File Transfer MTP and PTP options", alt: "Android notification panel showing USB connection mode options file transfer MTP and PTP", type: "phone", mockupType: "android-settings-system" },
          { caption: "Windows Device Manager showing Android phone with driver update option highlighted", alt: "Windows device manager showing Android phone driver with yellow warning and update option", type: "browser", mockupType: "android-settings-system" }
        ],
        proTips: ["Hamesha branded USB cable use karo \u2014 cheap cables data transfer nahi karte", "Windows 10/11 mein drivers auto-install hote hain", "USB debugging on rakho developer options mein \u2014 advanced troubleshooting ke liye"],
        faqs: [
          { q: "Phone charge ho raha hai par computer detect nahi kar raha?", a: "USB mode 'Charging only' pe hai. Notification panel se 'File Transfer' select karo. Ya data cable nahi hai." },
          { q: "Mac mein Android phone detect nahi ho raha?", a: "Android File Transfer app install karo (official Google app). macOS natively Android MTP support nahi karta." },
          { q: "USB 3.0 port mein phone disconnect ho raha hai?", a: "Some phones USB 3.0 se compatible nahi hote. USB 2.0 port try karo. Ya cable USB 3.0 specific na ho." },
          { q: "Wireless transfer kaun sa best hai?", a: "Nearby Share (Android-Windows). Samsung: Quick Share. Apple: AirDrop. Cross-platform: Google Drive, Telegram. Speed: ShareIt/Xender fast." }
        ],
        related: [
          { title: "Mobile Hang Ho Raha Hai", slug: "mobile-hang-ho-raha-hai", category: "mobile" },
          { title: "Storage Full Hai", slug: "storage-full-hai", category: "mobile" },
          { title: "Mobile Internet Nahi Chal Raha", slug: "mobile-internet-nahi-chal-raha", category: "mobile" }
        ],
        keywords: ["usb file transfer not working", "phone not connecting to pc", "android usb file transfer", "phone usb connection problem"],
        variants: ["phone computer se connect nahi ho raha", "usb se file copy nahi ho rahi", "phone laptop mein detect nahi ho raha", "usb cable se data nahi aa rahi", "phone usb charging only ho raha hai", "mobile se computer mein file kaise bheje"]
      },
      {
        slug: "phone-front-camera-nahi-chal-rahi",
        category: "mobile",
        metaTitle: "Phone Front Camera Nahi Chal Rahi? Selfie Black Screen Fix (2026) | JharForm",
        metaDescription: "Selfie camera black screen dikh rahi hai, front camera kaam nahi kar rahi, ya camera app switch karte hi band ho jaati hai? Front camera problem ka fix.",
        h1: "Front Camera Nahi Chal Rahi \u2014 Selfie Camera Fix",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Front camera (selfie camera) black screen dikh rahi hai, camera app front camera mode mein crash ho rahi hai, ya front camera se photos blurry aa rahi hain. Back camera chal rahi hai par front nahi \u2014 yeh front camera module fault, software glitch, ya app issue ki wajah se hota hai. Back camera alag module hota hai isliye ek chal sakta hai dusra nahi.",
        steps: [
          { title: "Camera app force stop karo", detail: "Settings > Apps > Camera > Force Stop. Camera app completely band hogi. Dobarah kholo. Front camera switch karo." },
          { title: "Camera cache clear karo", detail: "Settings > Apps > Camera > Storage > Clear Cache. Corrupt camera cache front camera crash kar sakta hai." },
          { title: "Third-party camera app try karo", detail: "Google Camera (GCam), Open Camera, ya Instagram camera try karo. Agar third-party mein front camera chal rahi to stock camera app issue hai." },
          { title: "Phone restart karo", detail: "Camera drivers software glitch se front camera band ho sakti hai. Restart se camera subsystem refresh hoga." },
          { title: "Safe mode mein check karo", detail: "Safe mode mein front camera chal rahi to recently installed app conflict kar rahi hai. Uninstall recently installed photo/camera apps." },
          { title: "Front camera lens saaf karo", detail: "Front camera lens (screen ke upar notch/mein) ko microfiber cloth se saaf karo. Oil, dust, aur pocket lint se front camera blurry ya dark aa sakti hai." },
          { title: "Software update check karo", detail: "Settings > Software Update. Camera bugs OS updates mein fix hote hain. Latest security patch bhi camera stability deta hai." },
          { title: "Service center le jao", detail: "Front camera module alag hota hai back camera se. Hardware fault ho to front camera replacement chahiye. Cost: Local Rs. 800-2000, Authorized Rs. 1500-4000." }
        ],
        screenshots: [
          { caption: "Camera app showing black screen in front camera mode with switch camera button visible", alt: "Phone camera app showing black screen in front selfie camera mode", type: "phone", mockupType: "android-settings-camera" },
          { caption: "Settings > Apps > Camera showing Clear Cache and Force Stop options highlighted", alt: "Android settings showing camera app storage with clear cache and force stop options", type: "phone", mockupType: "android-settings-camera" }
        ],
        proTips: ["Front camera screen protector se block mat hone do \u2014 cutout saaf rakho", "Beauty mode se front camera slow ho sakti hai \u2014 off rakho", "Portrait mode front camera pe zyada processing leti hai \u2014 normal photo try karo"],
        faqs: [
          { q: "Back camera chal rahi par front nahi?", a: "Front camera module alag hai. Software issue ho to dono band hoti. Sirf front nahi chal rahi to front camera module hardware fault hai." },
          { q: "Front camera se green line aa rahi hai?", a: "Camera sensor damage hai. Physical impact se front camera module damage ho sakta hai. Replacement chahiye. Cost Rs. 1000-3000." },
          { q: "WhatsApp front camera chal rahi par stock camera nahi?", a: "Stock camera app corrupt hai. Cache clear ya app data clear karo. Ya third-party camera app use karo permanent solution ke liye." },
          { q: "Front camera mein white spot aa raha hai?", a: "Dust front camera lens ke andar gaya hai. Sealed module hai \u2014 cleaning mushkil. Service center le jao. Ya live with it." }
        ],
        related: [
          { title: "Mobile Camera Problem", slug: "mobile-camera-problem", category: "mobile" },
          { title: "Screen Tut Gaya", slug: "screen-tut-gaya", category: "mobile" },
          { title: "Storage Full Hai", slug: "storage-full-hai", category: "mobile" }
        ],
        keywords: ["front camera not working", "selfie camera black screen", "phone front camera problem", "android front camera"],
        variants: ["front camera nahi chal rahi", "selfie camera kaam nahi kar rahi", "phone front camera black screen", "selfie camera band ho gayi", "front camera nahi aa rahi", "selfie camera app crash ho rahi hai"]
      },
      {
        slug: "mobile-headphone-jack-nahi-chal-raha",
        category: "mobile",
        metaTitle: "Phone Headphone Jack Nahi Chal Raha? Earphone Detect Nahi Ho Rahi? Fix (2026) | JharForm",
        metaDescription: "Earphone lagane par awaaz nahi aa rahi, headphone detect nahi ho rahi, ya ek earphone se awaaz aa rahi hai? Headphone jack problem ka fix.",
        h1: "Headphone Jack Nahi Chal Raha \u2014 Earphone Detect Fix",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Earphone/headphone lagane par phone detect nahi kar raha, awaaz speaker se aa rahi hai earphone se nahi, ya ek side se awaaz aa rahi hai dusri side se nahi. 3.5mm headphone jack mein lint, dust, ya liquid damage se contact issue hota hai. Wireless earbuds ke zamane mein bhi bahut log wired earphones use karte hain \u2014 specially budget users.",
        steps: [
          { title: "Jack saaf karo", detail: "Cotton bud pe thoda rubbing alcohol lagao. Headphone jack mein gently rotate karo. Lint aur dust nikaalo. Air blower se bhi kar sakte ho." },
          { title: "Dusri earphone try karo", detail: "Earphone fault ho sakti hai. Dusri wired earphone ya headphones try karo. Wireless earbuds bhi try karo." },
          { title: "Jack mein plug properly lagao", detail: "Kuchh cases thick hote hain \u2014 jack properly insert nahi hota. Case hata ke try karo. TRRS (4-ring) vs TRS (3-ring) compatibility check karo." },
          { title: "Phone restart karo", detail: "Audio jack detection software glitch ho sakta hai. Restart se audio subsystem reload hoga." },
          { title: "Audio settings check karo", detail: "Settings > Sound > Media audio output. Bluetooth connected ho to audio wahan ja rahi hai. Wired headphone manually select karo." },
          { title: "OTG adapter se USB earphone try karo", detail: "Agar 3.5mm jack damage ho to USB-C to 3.5mm adapter ya OTG + USB headphones use karo. Alternative solution hai." },
          { title: "Service center le jao", detail: "Jack physically damage ho to replacement chahiye. Cost: Local Rs. 300-800. Authorized Rs. 800-1500. Simple soldering wala kaam hai jaldi hota hai." }
        ],
        screenshots: [
          { caption: "Cotton swab cleaning headphone jack with visible lint and dust particles being removed", alt: "Cleaning phone headphone jack with cotton swab removing lint and dust particles", type: "phone", mockupType: "android-settings-sound" },
          { caption: "Audio settings showing media output options with wired headphones selected and Bluetooth off", alt: "Android audio settings showing media output device options with wired headphones selected", type: "phone", mockupType: "android-settings-sound" }
        ],
        proTips: ["Jack mein cotton bud se clean karo monthly \u2014 lint buildup common hai", "Phone pocket mein ulta rakho \u2014 jack neeche ho to lint kam jaati hai", "Water-resistant phones mein jack seal rehta hai \u2014 liquid damage kam hota hai"],
        faqs: [
          { q: "Earphone lagane par speaker se awaaz aa rahi hai?", a: "Jack detect nahi ho raha. Clean karo. Ya earphone properly insert nahi ho rahi. Case hata ke try karo." },
          { q: "Ek earphone se awaaz aa rahi hai dusri se nahi?", a: "Earphone wire break hui hai. Ya jack mein contact issue hai. Dusri earphone try karo. Agar wahan same issue to jack fault hai." },
          { q: "Headphone jack se charging ho sakti hai?", a: "Nahi \u2014 alag port hai. Kuchh phones mein USB-C audio + charging combo port hota hai. Adapter chahiye." },
          { q: "Bluetooth earphones sahi rahengi ya wired?", a: "Bluetooth convenient hai par charging chahiye. Wired reliable hai par tangle hoti hai. Budget: wired. Premium: Bluetooth." }
        ],
        related: [
          { title: "Speaker Aur Mic Nahi Chal Raha", slug: "speaker-aur-mic-nahi-chal-raha", category: "mobile" },
          { title: "Phone Paani Mein Gir Gaya", slug: "phone-water-damage-gir-gaya", category: "mobile" },
          { title: "Bluetooth Nahi Chal Raha", slug: "bluetooth-nahi-chal-raha", category: "mobile" }
        ],
        keywords: ["headphone jack not working", "earphone not detected", "phone headphone problem", "android earphone jack"],
        variants: ["earphone lagane par awaaz nahi aa rahi", "headphone jack nahi chal raha", "phone earphone detect nahi ho rahi", "headphone lagane par speaker se awaaz aa rahi hai", "earphone ek side se awaaz aa rahi hai", "phone mein headphone jack kaam nahi kar raha"]
      },
      {
        slug: "phone-power-button-nahi-kaam-kar-raha",
        category: "mobile",
        metaTitle: "Phone Ka Power Button Ya Volume Button Nahi Kaam Kar Raha? Fix (2026) | JharForm",
        metaDescription: "Phone ka power button press karne par kuchh nahi ho raha, volume button kaam nahi kar raha, ya buttons stuck hain? Button problem ka complete fix.",
        h1: "Power / Volume Button Nahi Kaam Kar Raha \u2014 Button Fix",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Power button press karne par phone on/off nahi ho raha, volume up/down kaam nahi kar raha, ya buttons stuck/dent ho gaye hain. Yeh physical damage, liquid ingress, dust under button, ya button flex cable loose hone ki wajah se hota hai. Power button damage ho to phone completely unusable ho jaata hai \u2014 isliye software workarounds zaroori hain.",
        steps: [
          { title: "Button ke aas paas saaf karo", detail: "Soft brush se button edges saaf karo. Canned air se blow karo taaki dust aur debris nikle. Liquid ho to isopropyl alcohol se gently clean karo." },
          { title: "Case/cover hata ke try karo", detail: "Thick cases buttons press hone mein interference karte hain. Button cutout misaligned ho to button proper press nahi hota. Case hata ke check karo." },
          { title: "Phone restart karo (agar button partially kaam kar raha)", detail: "Button thoda sa kaam kar raha ho to long-press se restart ho sakta hai. Power button 30 second tak press karo. Volume buttons restart mein help kar sakti hain." },
          { title: "ADB se restart karo (phone on hai to)", detail: "Phone PC se connected hai to ADB command: adb reboot. Ya developer options mein 'Stay awake' on karo taaki power button kam use ho." },
          { title: "Assistive Touch/Accessibility button on karo", detail: "Settings > Accessibility > Interaction and dexterity > Assistant menu > On. On-screen power button aa jaayega. Power button bypass kar sakte ho." },
          { title: "Scheduled power on/off set karo", detail: "Settings > Battery > Scheduled power on/off. Auto restart se power button use kam hota hai. Temporary workaround hai." },
          { title: "Service center le jao", detail: "Power button flex cable ya physical button replacement chahiye. Cost: Local Rs. 300-800, Authorized Rs. 800-1500. Simple repair hai." }
        ],
        screenshots: [
          { caption: "Settings > Accessibility showing Assistant Menu toggle ON with floating button visible on screen", alt: "Android accessibility settings showing assistant menu enabled with floating on-screen button", type: "phone", mockupType: "android-settings-system" },
          { caption: "Phone side buttons closeup showing dented power button with visible gap and dust accumulation", alt: "Phone side view showing damaged power button with visible dent and dust around button edges", type: "phone", mockupType: "android-settings-system" }
        ],
        proTips: ["Power button ka zyada use mat karo \u2014 fingerprint ya double-tap to wake use karo", "Water-resistant phones mein buttons sealed hote hain \u2014 liquid damage kam hota hai", "Button press karne mein zyada force mat do \u2014 gentle press sufficient hota hai"],
        faqs: [
          { q: "Power button band hai to phone on kaise karu?", a: "Charger lagao \u2014 phone auto-on ho jaata hai. Ya PC se ADB se reboot karo. Assistive touch se on-screen power button use karo." },
          { q: "Volume button stuck hai \u2014 software se control ho sakta hai?", a: "Haan \u2014 Assistive touch mein volume control aa jaata hai. Ya Volume Panel Pro jaise apps use karo. Lekin hardware fix karwana best hai." },
          { q: "Button flex cable loose ho to ghar pe fix kar sakte hain?", a: "Nahi \u2014 phone open karna padta hai aur flex cable reseat karna padta hai. Service center le jao. Rs. 300-800 mein hota hai." },
          { q: "All buttons ek saath band ho gayi hain?", a: "Motherboard ya power management IC issue ho sakta hai. Service center le jao. Cost zyada aa sakti hai Rs. 1500+. Water damage bhi reason ho sakta hai." }
        ],
        related: [
          { title: "Screen Tut Gaya", slug: "screen-tut-gaya", category: "mobile" },
          { title: "Phone Paani Mein Gir Gaya", slug: "phone-water-damage-gir-gaya", category: "mobile" },
          { title: "Phone Hang Ho Raha Hai", slug: "mobile-hang-ho-raha-hai", category: "mobile" }
        ],
        keywords: ["power button not working", "volume button not working", "phone button stuck", "android power button problem"],
        variants: ["power button kaam nahi kar raha", "phone button press nahi ho rahi", "volume button nahi chal raha", "phone button stuck ho gayi", "power button dabane par kuchh nahi ho raha", "phone button damage ho gayi"]
      },
      {
        slug: "mobile-fast-charging-nahi-ho-rahi",
        category: "mobile",
        metaTitle: "Phone Fast Charging Nahi Ho Rahi? Slow Charge Fix (2026) | JharForm",
        metaDescription: "Phone normal charging se fast charge nahi ho raha, fast charging symbol nahi aa raha, ya 2 ghante mein full charge ho raha hai? Fast charging fix guide.",
        h1: "Fast Charging Nahi Ho Rahi \u2014 Slow Charge Fix",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Phone fast charge nahi ho raha \u2014 2 hours+ mein full charge ho raha hai jabki pehle 45 min mein ho jaata tha. Yeh incompatible charger, damaged cable, dirty charging port, battery degradation, ya background apps ki wajah se hota hai. Fast charging ke liye phone, charger, aur cable teeno compatible hone chahiye.",
        steps: [
          { title: "Original fast charger use karo", detail: "Samsung: 25W+ charger. Xiaomi: 33W+ charger. Realme/OPPO: VOOC charger. Normal 5W charger se fast charge nahi hogi. Charger pe output rating check karo." },
          { title: "Fast charging cable check karo", detail: "Fast charging ke liye 3A+ cable chahiye. Normal cable se current limited hota hai. Original cable ya branded 3A/5A cable use karo. Cable pe amperage rating likhi hoti hai." },
          { title: "Charging port saaf karo", detail: "Lint aur dust se charging port loose connection hota hai aur fast charge negotiate nahi hota. Toothpick se gently clean karo. Air blower se bhi kar sakte ho." },
          { title: "Background apps band karo", detail: "Charging ke waqt heavy apps (games, camera, GPS) band karo. Phone garam ho to fast charge intentionally slow ho jaati hai safety ke liye." },
          { title: "Fast charging toggle check karo", detail: "Settings > Battery > Fast Charging / Super Fast Charging toggle ON hona chahiye. Kabhi kabhi software update se off ho jaata hai." },
          { title: "Dusra wall socket try karo", detail: "Low voltage ya fluctuating power supply se fast charging activate nahi hoti. Dusra socket try karo. Power strip surge protector pe try karo." },
          { title: "Battery health check karo", detail: "Settings > Battery > Battery Health. Below 80% ho to battery fast charge accept nahi karti safety ke liye. Battery replacement se fast charging wapas aa sakti hai." }
        ],
        screenshots: [
          { caption: "Lock screen showing Charging 15% with 'Fast Charging' text and estimated 45 min to full", alt: "Android lock screen showing fast charging status with percentage and estimated time remaining", type: "phone", mockupType: "android-settings-battery" },
          { caption: "Settings > Battery showing Fast Charging toggle ON and Super Fast Charging option enabled", alt: "Android battery settings showing fast charging and super fast charging toggles enabled", type: "phone", mockupType: "android-settings-battery" }
        ],
        proTips: ["Fast charging 0-80% fast hoti hai, 80-100% slow \u2014 yeh normal hai", "Phone garam ho to fast charge intentionally slow hoti hai \u2014 cool jagah pe charge karo", "Overnight charging ke liye slow charger best hai \u2014 battery health better rehti hai"],
        faqs: [
          { q: "Phone fast charging pe 2 ghante kyun lag rahe hain?", a: "Incompatible charger, damaged cable, ya dirty port. Ya battery health 80% se kam hai. Fast charge safety ke liye slow ho jaati hai." },
          { q: "Kya koi bhi fast charger se koi bhi phone fast charge hoga?", a: "Nahi \u2014 phone ka fast charging protocol (PD, QC, VOOC) aur charger ka protocol match hona chahiye." },
          { q: "Fast charging se battery jaldi kharab hoti hai?", a: "Thoda haan \u2014 heat se battery health degrade hoti hai. Lekin modern phones mein heat management accha hai. 80% pe charger nikaalo." },
          { q: "Wireless fast charging same speed deti hai?", a: "Wireless hamesha wired se slow hoti hai. 15W wireless = 10W wired approximately. Heat bhi zyada generate hoti hai wireless mein." }
        ],
        related: [
          { title: "Charging Nahi Ho Rahi Hai", slug: "charging-nahi-ho-rahi", category: "mobile" },
          { title: "Battery Jaldi Khatam Ho Rahi", slug: "mobile-battery-drain", category: "mobile" },
          { title: "Phone Bahut Garam Ho Raha Hai", slug: "phone-heat-ho-raha-hai", category: "mobile" }
        ],
        keywords: ["fast charging not working", "phone slow charging", "fast charge not working android", "phone charging very slow"],
        variants: ["fast charging nahi ho rahi", "phone slow charge ho raha hai", "phone 2 ghante mein charge ho raha hai", "fast charger lagane par bhi slow charge", "phone fast charge nahi le raha", "charging speed bahut slow hai"]
      },
      {
        slug: "phone-notification-nahi-aa-rahi",
        category: "mobile",
        metaTitle: "Phone Mein Notifications Nahi Aa Rahi? Missed Calls Fix (2026) | JharForm",
        metaDescription: "WhatsApp, calls, SMS notifications nahi aa rahi hain? Phone vibration ya sound nahi de raha? Notification problem ka complete fix.",
        h1: "Notifications Nahi Aa Rahi \u2014 Missed Calls Aur Messages Fix",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Calls, WhatsApp, SMS, ya app notifications nahi aa rahi hain \u2014 screen black hai par kuchh nahi dikhta, notification sound nahi aa rahi, ya delay se notifications aa rahi hain. Do Not Disturb mode, battery optimization, notification settings off, ya background restrict ki wajah se hota hai. Missed calls aur messages ka reason banti hain.",
        steps: [
          { title: "Do Not Disturb mode off karo", detail: "Quick settings se DND off karo. Ya Settings > Sound > Do Not Disturb > Off. DND mode mein sirf calls aa sakti hain baaki sab block hota hai." },
          { title: "Notification settings check karo", detail: "Settings > Apps > WhatsApp/Phone/Messages > Notifications > Allow notifications > On. Sound, vibration, aur pop-up sab on hona chahiye." },
          { title: "Battery optimization band karo", detail: "Settings > Battery > Battery Optimization > WhatsApp/Calls/Messages > Don't Optimize. Battery saver background notifications block kar deta hai." },
          { title: "Background data allow karo", detail: "Settings > Apps > affected app > Mobile Data > Allow background data usage. Background data band hone se push notifications nahi aa paati." },
          { title: "Priority mode set karo", detail: "Settings > Apps > Notifications > Priority. Important apps ko priority mode mein daalo taaki DND mein bhi notifications aa sakein." },
          { title: "Notification history check karo (Android 11+)", detail: "Settings > Apps & Notifications > Notifications > Notification History. Missed notifications ki history dikhegi. Kaun si app block ho rahi hai pata chalega." },
          { title: "Phone restart karo", detail: "Notification service glitch ho sakta hai. Restart se notification subsystem reload hoga." }
        ],
        screenshots: [
          { caption: "Settings > Notifications showing WhatsApp notifications allowed with sound vibration and pop-up all enabled", alt: "Android notification settings showing WhatsApp with all notification channels enabled", type: "phone", mockupType: "android-settings-notifications" },
          { caption: "Battery optimization settings showing WhatsApp set to Not Optimized with explanation text", alt: "Android battery optimization settings showing WhatsApp set to not optimized for unrestricted notifications", type: "phone", mockupType: "android-settings-notifications" }
        ],
        proTips: ["Important contacts ko priority list mein daalo \u2014 DND mein bhi calls aa jaayengi", "Notification history weekly check karo \u2014 missed notifications ka pata chalega", "Adaptive battery ko off rakho \u2014 ye frequently used apps ko bhi restrict kar deta hai"],
        faqs: [
          { q: "Sirf WhatsApp notifications nahi aa rahi baaki sab aa rahi hain?", a: "WhatsApp-specific issue hai. WhatsApp notification settings check karo. Ya WhatsApp cache clear karo. Reinstall bhi try kar sakte ho." },
          { q: "Notifications delay se aa rahi hain 10-15 minute baad?", a: "Battery optimization ya Doze mode ki wajah se. App ko battery optimization exception mein daalo. Ya phone restart karo." },
          { q: "Screen on hone ke baad notifications aa rahi hain?", a: "Doze mode/Deep sleep mein phone background sync band kar deta hai. Screen on hone pe sync hota hai. Battery optimization exception daalo." },
          { q: "Group notifications aa rahi hain par individual nahi?", a: "Notification channel settings mein individual messages ka channel alag hota hai. Group notifications on hai par individual off ho sakta hai." }
        ],
        related: [
          { title: "Mobile Internet Nahi Chal Raha", slug: "mobile-internet-nahi-chal-raha", category: "mobile" },
          { title: "Phone Hang Ho Raha Hai", slug: "mobile-hang-ho-raha-hai", category: "mobile" },
          { title: "Storage Full Hai", slug: "storage-full-hai", category: "mobile" }
        ],
        keywords: ["notifications not coming", "phone notifications not working", "missed calls notification", "android notifications problem"],
        variants: ["notifications nahi aa rahi", "phone mein notifications band ho gayi", "missed calls ki notification nahi aa rahi", "whatsapp notification nahi aa rahi", "phone notifications delay se aa rahi hain", "sms notification nahi aa rahi"]
      },
      {
        slug: "wifi-not-connecting",
        category: "mobile",
        metaTitle: "Phone WiFi Connect Nahi Ho Raha? 7 Pakka Fix (2026) | JharForm",
        metaDescription: "Android phone mein WiFi connect nahi ho raha, saved network pe stuck hai, ya wrong password error aa raha hai? Yeh 7 steps se turant fix karo.",
        h1: "Phone WiFi Connect Nahi Ho Raha — 7 Pakka Fix",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Phone WiFi network pe connect nahi ho raha hai — saved network pe stuck hai, 'Obtaining IP Address' loop mein hai, ya 'Authentication Error' aa raha hai. Router issue, phone WiFi settings, ya IP conflict ki wajah se hota hai. Ghar ka WiFi baaki devices pe chal raha hai to phone side problem hai.",
        steps: [
          { title: "WiFi band karke on karo", detail: "Quick settings se WiFi tile pe long-press karo. WiFi off karo, 10 second wait karo, phir on karo." },
          { title: "Network ko forget karke dobara connect karo", detail: "Settings > WiFi > Network name pe tap > Forget. Password dobara enter karo. Saved corrupt profile delete ho jayegi." },
          { title: "Router restart karo", detail: "Router ka power cable 30 second ke liye nikaalo. Wapas lagao. 2 minute wait karo. Zyaadatar router issues se fix hota hai." },
          { title: "Airplane Mode on-off karo", detail: "Airplane mode 10 second on rakho phir off karo. Network stack refresh hoga. WiFi aur Mobile data dono reset honge." },
          { title: "Static IP try karo", detail: "WiFi network > Modify > Advanced > IP Settings > Static. IP: 192.168.1.X (router range mein), Gateway router IP, DNS: 8.8.8.8" },
          { title: "WiFi frequency band change karo", detail: "Settings > WiFi > Advanced > WiFi Frequency Band. 5GHz pe nahi ho raha to 2.4GHz try karo. Purane phones 5GHz support nahi karte." },
          { title: "Phone restart karo", detail: "Software glitch ya DHCP lease issue ho to restart se fix hota hai. WiFi drivers reload hote hain." }
        ],
        screenshots: [
          { caption: "WiFi settings showing saved network with Forget option and authentication error", alt: "Android WiFi settings showing saved network with forget option highlighted", type: "phone", mockupType: "android-settings-network" },
          { caption: "WiFi network details showing IP settings changed to Static with Google DNS", alt: "Android WiFi network advanced settings showing static IP configuration", type: "phone", mockupType: "android-settings-network" }
        ],
        proTips: ["2.4GHz range zyada hoti hai par speed kam, 5GHz speed zyada par range kam", "Router se door hone pe WiFi signal weak ho jaata hai", "WiFi extenders se ghar ke har corner mein signal aa jaata hai"],
        faqs: [
          { q: "WiFi password sahi hai phir bhi connect nahi ho raha?", a: "Saved network profile corrupt ho sakti hai. Forget karke dobara connect karo. Ya router ka password change hua ho to old password saved hai." },
          { q: "Sirf ek phone mein WiFi nahi chal raha baaki sab mein chal raha hai?", a: "Phone ka WiFi settings ya MAC address block ho sakta hai. Phone restart karo ya factory reset network settings karo." },
          { q: "Obtaining IP Address pe stuck hai?", a: "Router ka DHCP pool full ho sakta hai. Router restart karo. Ya phone mein static IP set karo." },
          { q: "5GHz WiFi connect nahi ho raha?", a: "Phone 5GHz support nahi karta. Ya router 5GHz band alag naam se broadcast kar raha hai. 2.4GHz try karo." }
        ],
        related: [
          { title: "Mobile Internet Nahi Chal Raha", slug: "mobile-internet-nahi-chal-raha", category: "mobile" },
          { title: "Mobile Hang Ho Raha Hai", slug: "mobile-hang-ho-raha-hai", category: "mobile" },
          { title: "Phone Bahut Garam Ho Raha Hai", slug: "phone-heat-ho-raha-hai", category: "mobile" }
        ],
        keywords: ["phone wifi not connecting", "wifi connect nahi ho raha", "android wifi problem", "phone wifi saved but not connecting"],
        variants: ["wifi connect nahi ho raha", "phone wifi nahi chal raha", "wifi saved hai par connect nahi ho raha", "phone mein wifi nahi aa raha", "wifi authentication error", "wifi password sahi hai par nahi lag raha"]
      },
      {
        slug: "bluetooth-nahi-chal-raha",
        category: "mobile",
        metaTitle: "Phone Bluetooth Nahi Chal Raha? Pairing Fix Guide (2026) | JharForm",
        metaDescription: "Bluetooth on nahi ho raha, devices pair nahi ho rahi, ya audio connect nahi ho raha? Bluetooth problem ka complete step-by-step fix.",
        h1: "Bluetooth Nahi Chal Raha — Pairing Aur Connection Fix",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Phone mein Bluetooth on nahi ho raha, devices pair nahi ho rahi, ya connected hone ke baad audio nahi aa raha hai. Bluetooth cache corrupt, device list full, ya interference ki wajah se hota hai. 80% cases mein simple reset se fix ho jaata hai.",
        steps: [
          { title: "Bluetooth band karke on karo", detail: "Quick settings se Bluetooth off karo, 10 second wait karo, phir on karo. Simple refresh se zyaadatar issues fix hote hain." },
          { title: "Device ko unpair karke dobara pair karo", detail: "Settings > Bluetooth > Paired device pe tap > Unpair. Device ko pairing mode mein rakho. Dobra search karo aur pair karo." },
          { title: "Bluetooth cache clear karo", detail: "Settings > Apps > Show system apps > Bluetooth > Storage > Clear Cache. Bluetooth pairing data reset hoga." },
          { title: "Phone aur dono device restart karo", detail: "Dono devices band karke on karo. Bluetooth stack refresh hoga. Interference clear ho jayegi." },
          { title: "Device discoverable check karo", detail: "AirPods/Earbuds ka case kholo. Speaker ko pairing mode mein rakho. Car mein Bluetooth menu mein 'Add Device' select karo." },
          { title: "Nearby devices clear karo", detail: "Settings > Bluetooth > Previously connected devices > Clear all. Bluetooth memory full ho to naye devices pair nahi hote." },
          { title: "Safe mode mein check karo", detail: "Safe mode mein Bluetooth kaam kare to third-party app conflict hai. Recently installed apps check karo jo Bluetooth use karti hain." }
        ],
        screenshots: [
          { caption: "Bluetooth settings showing paired devices with unpair option highlighted", alt: "Android Bluetooth settings showing paired devices list with unpair option", type: "phone", mockupType: "android-settings-bluetooth" },
          { caption: "Bluetooth device pairing mode showing LED blinking and discoverable status", alt: "Bluetooth earbuds in pairing mode with blinking LED light indicator", type: "phone", mockupType: "android-settings-bluetooth" }
        ],
        proTips: ["Bluetooth 5.0+ devices ek saath 2 devices se connect ho sakti hain", "2.4GHz WiFi se Bluetooth interfere hota hai — ek band mein shift karo", "Earbuds ka case band karke kholo pairing mode ke liye"],
        faqs: [
          { q: "Bluetooth on karne pe turant off ho ja raha hai?", a: "Bluetooth driver ya hardware issue ho sakta hai. Phone restart karo. Cache clear karo. Nahi fix hua to service center le jao." },
          { q: "Bluetooth connected par audio nahi aa raha?", a: "Media audio stream alag hoti hai. Bluetooth settings mein device pe tap karo aur 'Media Audio' on karo. Call audio alag hoti hai." },
          { q: "Device pair ho rahi par connect nahi ho rahi?", a: "Device ka range bahar ho sakti hai. Ya device kisi aur se connected hai. Pehle sab devices se disconnect karo." },
          { q: "Bluetooth ka range kitni hoti hai?", a: "Class 2 Bluetooth: 10 meters. Walls aur obstacles se kam hoti hai. Line of sight mein best performance." }
        ],
        related: [
          { title: "Mobile Internet Nahi Chal Raha", slug: "mobile-internet-nahi-chal-raha", category: "mobile" },
          { title: "WiFi Connect Nahi Ho Raha", slug: "wifi-not-connecting", category: "mobile" },
          { title: "Speaker Aur Mic Nahi Chal Raha", slug: "speaker-aur-mic-nahi-chal-raha", category: "mobile" }
        ],
        keywords: ["bluetooth not working", "phone bluetooth nahi chal raha", "bluetooth pairing failed", "android bluetooth problem"],
        variants: ["bluetooth connect nahi ho raha", "phone bluetooth nahi on ho raha", "bluetooth devices pair nahi ho rahi", "bluetooth audio nahi aa raha", "bluetooth band ho gaya", "earbuds connect nahi ho rahi"]
      },
      {
        slug: "sim-not-detected",
        category: "mobile",
        metaTitle: "SIM Card Detect Nahi Ho Rahi? No Signal Fix (2026) | JharForm",
        metaDescription: "Phone mein SIM card detect nahi ho rahi, No SIM dikh raha hai, ya SIM card error aa raha hai? SIM detection problem ka complete fix.",
        h1: "SIM Card Detect Nahi Ho Rahi — No Signal Fix",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Phone mein 'No SIM Card' ya 'SIM Not Detected' error aa raha hai — SIM tray loose, SIM card damage, ya phone ka SIM reader fault ki wajah se hota hai. Zyaadatar SIM reseat karne se fix ho jaata hai. Dual SIM phones mein ek SIM detect ho rahi dusri nahi to SIM-specific issue hai.",
        steps: [
          { title: "SIM tray nikaalo aur wapas lagao", detail: "SIM ejector tool se tray nikaalo. SIM card nikaal ke saaf microfiber cloth se pocho. SIM tray mein SIM sahi direction mein rakho. Tight lagao." },
          { title: "Dusre phone mein SIM check karo", detail: "SIM ko dusre phone mein lagao. Agar wahan bhi detect nahi ho rahi to SIM card damage hai. New SIM le lo operator se." },
          { title: "SIM slot saaf karo", detail: "Compressed air se SIM slot mein blow karo. Dust particles SIM contacts block kar sakti hain. Soft brush se gently clean karo." },
          { title: "Network mode change karo", detail: "Settings > Connections > Mobile Networks > Network Mode. Auto se hata ke manually 4G/LTE select karo. Kabhi kabhi 5G mode mein SIM detect nahi hoti." },
          { title: "Carrier settings update karo", detail: "Settings > About Phone > Software Update > Carrier Settings. Ya phone dialer mein *#*#4636#*#* dial karo aur phone information se network select karo." },
          { title: "Airplane mode on-off karo", detail: "Airplane mode 30 second on rakho. Network stack completely refresh hoga. SIM re-registration hogi." },
          { title: "Service center le jao", detail: "SIM reader hardware fault ho to service center mein SIM slot module replace hota hai. Cost: Rs. 300-1000 depending on model." }
        ],
        screenshots: [
          { caption: "Settings > About Phone > Status showing SIM Status as Not Detected with IMEI visible", alt: "Android settings showing SIM not detected status with IMEI information visible", type: "phone", mockupType: "android-settings-sim" },
          { caption: "SIM tray ejected showing SIM card with visible scratch marks and tarnished gold contacts", alt: "Phone SIM tray with damaged SIM card showing scratched gold contact points", type: "phone", mockupType: "android-settings-sim" }
        ],
        proTips: ["SIM card 5+ saal purani ho to replace karwao — contacts oxidize ho jaate hain", "Nano SIM ko Micro SIM adapter se mat use karo — thickness different hoti hai", "Dual SIM mein slot 1 primary hai — 4G SIM hamesha slot 1 mein rakho"],
        faqs: [
          { q: "SIM dusre phone mein chal rahi par ismein nahi?", a: "Phone ka SIM reader hardware fault hai. Service center le jao. SIM slot replacement Rs. 300-1000." },
          { q: "SIM card physically damage ho to duplicate kaise milegi?", a: "Airtel: Store pe jao Rs. 25-50 mein. Jio: MyJio app se Rs. 50. Vi: Store pe Rs. 50-100. Same number rehta hai." },
          { q: "Dual SIM mein ek detect ho rahi dusri nahi?", a: "Dusri SIM ko dusre slot mein try karo. Agar wahan chal rahi to pehla slot fault hai. Slot 1 mein 4G SIM rakho hamesha." },
          { q: "SIM PUK code lock ho gaya to?", a: "PUK code SIM card ke original packet mein hota hai. Nahi hai to operator customer care pe call karo — verification ke baad PUK provide karenge." }
        ],
        related: [
          { title: "Mobile Internet Nahi Chal Raha", slug: "mobile-internet-nahi-chal-raha", category: "mobile" },
          { title: "OTP Nahi Aa Raha Hai", slug: "otp-nahi-aa-raha", category: "mobile" },
          { title: "Phone Hang Ho Raha Hai", slug: "mobile-hang-ho-raha-hai", category: "mobile" }
        ],
        keywords: ["sim not detected", "phone sim card not detected", "no sim card error", "sim card not working"],
        variants: ["sim card detect nahi ho rahi", "phone mein sim nahi dikh rahi", "sim card error", "no sim card", "sim not registered", "phone sim nahi chal rahi"]
      },
      {
        slug: "mobile-pattern-lock-bhool-gaya",
        category: "mobile",
        metaTitle: "Phone Ka Pattern Lock Ya PIN Bhool Gaya? Unlock Kaise Kare (2026) | JharForm",
        metaDescription: "Android phone ka pattern lock, PIN, ya password bhool gaye? Bina data delete kiye unlock kaise karein? Complete step-by-step guide.",
        h1: "Phone Pattern Lock / PIN Bhool Gaya — Unlock Kaise Kare",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Medium",
        description: "Android phone ka pattern lock, PIN, ya password bhool gaya hai — 5 galat attempts ke baad phone temporarily lock ho jaata hai. Google account se reset, Find My Device se unlock, ya factory reset se phone open ho sakta hai. Android 5.0+ mein Google account se unlock option limited hai, lekin Find My Device se remote reset possible hai.",
        steps: [
          { title: "Forgot Pattern pe tap karo", detail: "5 baar galat pattern try karo. Screen pe 'Forgot Pattern' option aayega. Tap karo. Google account credentials maangega." },
          { title: "Google account se unlock karo", detail: "'Forgot Pattern' pe linked Google account ka email aur password daalo. Correct hone pe new pattern set karne dega. Internet connection chahiye." },
          { title: "Find My Device se remote reset karo", detail: "android.com/find pe jao. Apna Google account login karo. Locked phone select karo. 'Erase Device' pe click karo. Sab data delete hoga par phone unlock ho jaayega." },
          { title: "Samsung Find My Mobile se karo (Samsung phones)", detail: "Samsung phones mein findmymobile.samsung.com pe jao. Samsung account login karo. 'Unlock' button se bina data delete kiye unlock ho sakta hai." },
          { title: "ADB se unlock karo (advanced, USB debugging on hona chahiye)", detail: "Phone ko PC se connect karo. ADB command: adb shell rm /data/system/gesture.key. Phone restart karo. Pattern remove ho jayega. USB debugging pehle se on honi chahiye." },
          { title: "Factory Reset (last resort)", detail: "Recovery mode mein jaao: Power + Volume Up. Wipe data/factory reset select karo. Sab data delete hoga. Phone first boot jaisa hoga." },
          { title: "Service center le jao", detail: "Authorized service center mein proof of purchase (bill/invoice) dikhao. Wo official tools se bina data delete kiye unlock kar sakte hain." }
        ],
        screenshots: [
          { caption: "Android lock screen showing Forgot Pattern option after 5 failed attempts", alt: "Android lock screen showing forgot pattern unlock option after multiple failed attempts", type: "phone", mockupType: "android-settings-security" },
          { caption: "Google Find My Device web page showing Erase Device option for locked Android phone", alt: "Google Find My Device website showing erase device option for remotely resetting locked phone", type: "browser", mockupType: "android-settings-security" }
        ],
        proTips: ["Hamesha Google Find My Device on rakho — future lockouts ke liye", "Samsung phone ho to Samsung account zaroor register karo — remote unlock milta hai", "Pattern ki jagah PIN + Fingerprint rakho — PIN yaad rehta hai"],
        faqs: [
          { q: "Pattern bhool gaya to data save karke unlock ho sakta hai?", a: "Samsung Find My Mobile se ho sakta hai. Baaki phones mein nahi — ya to Google account se ya factory reset." },
          { q: "Factory reset ke baad data wapas aa sakta hai?", a: "Agar Google Photos + Google Drive backup on tha to photos aur contacts aa jayenge. Apps aur messages nahi aayenge." },
          { q: "ADB se unlock karne ke liye USB debugging on honi chahiye?", a: "Haan — pehle se on honi chahiye. Lock hone ke baad on nahi kar sakte. Developer options se pehle enable karo." },
          { q: "Service center bina bill ke unlock karega?", a: "Nahi — proof of purchase chahiye taaki chori hua phone na ho. Bill/Invoice zaroori hai." }
        ],
        related: [
          { title: "Fingerprint Nahi Chal Raha", slug: "fingerprint-nahi-chal-raha", category: "mobile" },
          { title: "Mobile Hang Ho Raha Hai", slug: "mobile-hang-ho-raha-hai", category: "mobile" },
          { title: "Mobile Mein Virus Aa Gaya", slug: "mobile-viruses-malware", category: "mobile" }
        ],
        keywords: ["pattern lock bhool gaya", "phone pin bhool gaya", "android unlock forgot password", "phone lock kaise tode"],
        variants: ["pattern lock bhool gaya", "phone ka password bhool gaya", "pin lock bhool gaya", "phone lock kaise khole", "android phone unlock", "pattern lock todne ka tarika"]
      },
      {
        slug: "call-drop-ho-rahi-hai",
        category: "mobile",
        metaTitle: "Call Drop Ho Rahi Hai? Awaaz Kat-Kat Ke Aa Rahi? Fix (2026) | JharForm",
        metaDescription: "Phone call mein awaaz kat rahi hai, call drop ho rahi hai, ya doosra side sun nahi pa raha? Call quality problem ka step-by-step fix.",
        h1: "Call Drop Ho Rahi Hai — Awaaz Kat-Kat Ke Fix",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Phone call mein awaaz kat-kat ke aa rahi hai, call baar baar disconnect ho rahi hai, ya ek side sun pa rahi hai dusri nahi. Network coverage weak, SIM damage, microphone blockage, ya VoLTE issue ki wajah se hota hai. Rural areas aur buildings ke andar yeh common problem hai.",
        steps: [
          { title: "Signal strength check karo", detail: "Phone mein signal bars check karo. 1-2 bars par call drop normal hai. Khidki ke paas jao ya bahar niklo." },
          { title: "VoLTE on karo", detail: "Settings > Connections > Mobile Networks > VoLTE calls > On. VoLTE se 4G pe HD voice calling hoti hai. Call quality 2x better hoti hai." },
          { title: "WiFi Calling try karo", detail: "Settings > Connections > WiFi Calling > On. Ghar mein WiFi strong hai to WiFi pe call route hogi. Network issue bypass ho jayega." },
          { title: "SIM card reseat karo", detail: "SIM tray nikaalo, SIM saaf karo, wapas tight lagao. Loose SIM se network connection unstable hoti hai." },
          { title: "Mic aur ear speaker saaf karo", detail: "Phone ke bottom mic hole aur top ear speaker grill ko soft brush se saaf karo. Dust se awaaz muffled aur drop hoti hai." },
          { title: "Network mode manually set karo", detail: "Settings > Mobile Networks > Network Mode. Auto se hata ke 4G/LTE only karo. 2G/3G pe call quality bahut poor hoti hai." },
          { title: "Operator se complaint karo", detail: "Airtel: 198, Jio: 198, Vi: 199. Network coverage issue ho to tower maintenance chal rahi hogi. Complaint darj karo." }
        ],
        screenshots: [
          { caption: "Settings > Mobile Networks showing VoLTE calls toggle switched ON", alt: "Android mobile network settings showing VoLTE calls enabled toggle switch", type: "phone", mockupType: "android-settings-sim" },
          { caption: "Phone signal bars showing 1 bar with Call Quality warning indicator", alt: "Phone status bar showing weak one bar signal strength with call quality warning", type: "phone", mockupType: "android-settings-sim" }
        ],
        proTips: ["Basement aur lifts mein call drop normal hai — bahar aake call karo", "Ear speaker pe screen protector mat lagao — sound block hoti hai", "Headphones se call karo agar mic problem hai — phone ka mic bypass ho jaata hai"],
        faqs: [
          { q: "Sirf ek number pe call drop ho rahi hai?", a: "Us specific number ka network issue ho sakta hai. Ya usne call forwarding on kiya ho. Dusre number se try karo." },
          { q: "VoLTE kya hai aur kyun zaroori hai?", a: "Voice over LTE — 4G pe direct voice call. 2G/3G se zyada clear awaaz aur kam drop rate. Zyaadatar 4G SIM pe auto-enable hota hai." },
          { q: "WiFi calling se normal call charges lagti hain?", a: "Haan — same call charges. WiFi sirf network route karta hai. Airtime charges same rehti hain." },
          { q: "Indoor mein call drop hoti hai bahar nahi?", a: "Building materials signal block karte hain. WiFi calling on karo ghar mein. Ya signal booster lagwao." }
        ],
        related: [
          { title: "SIM Card Detect Nahi Ho Rahi", slug: "sim-not-detected", category: "mobile" },
          { title: "Mobile Internet Nahi Chal Raha", slug: "mobile-internet-nahi-chal-raha", category: "mobile" },
          { title: "Speaker Aur Mic Nahi Chal Raha", slug: "speaker-aur-mic-nahi-chal-raha", category: "mobile" }
        ],
        keywords: ["call drop ho rahi hai", "phone call drop", "call quality poor", "voice breaking in call"],
        variants: ["call drop ho rahi hai", "phone call kat rahi hai", "awaaz kat rahi hai call mein", "call disconnect ho rahi hai", "phone call mein awaaz nahi aa rahi", "call quality bahut kharab hai"]
      },
      {
        slug: "phone-screen-black-ho-rahi-hai",
        category: "mobile",
        metaTitle: "Phone Screen Black Ho Gayi Hai Par Phone On Hai? Fix (2026) | JharForm",
        metaDescription: "Phone on hai par screen bilkul black dikh rahi hai, touch kaam kar rahi hai par display nahi aa rahi? Black screen problem ka complete fix.",
        h1: "Phone Screen Black Ho Gayi Hai Par Phone On Hai — Fix",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Medium",
        description: "Phone on hai — notification sound aa rahi hai, vibration ho rahi hai, par screen bilkul black dikh rahi hai. Yeh display backlight failure, LCD connection loose, ya software crash ki wajah se hota hai. Drop ke baad common hota hai. Power button aur volume buttons se force restart se 60% cases mein fix ho jaata hai.",
        steps: [
          { title: "Force restart karo", detail: "Power button + Volume Down button 15-20 second tak press karo. Phone vibrate hoga aur restart hoga. Black screen software crash fix hota hai." },
          { title: "Phone fully drain karke charge karo", detail: "Phone ko completely drain hone do. 30 min charge pe lagao. Baad mein power button long press karo. Deep discharge recovery hoti hai." },
          { title: "Recovery mode se boot karo", detail: "Power + Volume Up 10 second. Recovery menu aa jaayega. Reboot system now select karo. Software issues fix hongi." },
          { title: "Safe mode se check karo", detail: "Power off hone pe Power button press karo. 'Safe Mode' dikhega pe volume down press karo. Safe mode mein screen chale to third-party app issue hai." },
          { title: "Screen brightness check karo (if visible in dark)", detail: "Andhere mein screen dekhne ki koshish karo. Thodi si visibility hai to brightness minimum ho sakti hai. Flashlight se screen pe light daalo." },
          { title: "Screen connection physically check karo (risky)", detail: "Phone open karo aur display flex cable reseat karo. Sirf experienced user. Risk: warranty void aur further damage." },
          { title: "Service center le jao", detail: "LCD backlight failure ya display IC fault ho to screen replacement chahiye. Cost: Local Rs. 1500-4000, Authorized Rs. 3000-8000." }
        ],
        screenshots: [
          { caption: "Phone showing completely black screen with notification LED blinking indicating phone is powered on", alt: "Android phone with black screen and blinking notification LED showing device is powered on", type: "phone", mockupType: "android-settings-display" },
          { caption: "Android recovery mode menu showing Reboot System Now option highlighted", alt: "Android recovery mode screen showing reboot system now highlighted option", type: "phone", mockupType: "android-settings-display" }
        ],
        proTips: ["Drop ke baad black screen ho to display connection loose ho sakti hai — service center best option", "AMOLED screens mein black screen backlight failure zyada common hai", "Screen protector hata ke check karo — kabhi kabhi protector se light block hoti hai"],
        faqs: [
          { q: "Screen black hai par touch kaam kar rahi hai?", a: "Display backlight failure hai. LCD panel kaam kar rahi par backlight band hai. Screen replacement chahiye. Cost Rs. 2000-6000." },
          { q: "Phone drop ke turant baad black screen ho gayi?", a: "Display flex cable loose ho gayi hai. Service center mein cable reseat se Rs. 500-1500 mein fix ho sakta hai. LCD damage ho to screen replace." },
          { q: "Force restart se phone on ho raha par screen phir black ho ja rahi?", a: "Boot loop ya software corruption hai. Recovery mode se factory reset karo. Data backup nahi hai to sab delete hoga." },
          { q: "Black screen hone se data delete hota hai?", a: "Nahi — sirf display issue hai. Data phone mein safe hai. Screen repair ke baad sab waise ka waise milega." }
        ],
        related: [
          { title: "Screen Tut Gaya", slug: "screen-tut-gaya", category: "mobile" },
          { title: "Phone Hang Ho Raha Hai", slug: "mobile-hang-ho-raha-hai", category: "mobile" },
          { title: "Charging Nahi Ho Rahi Hai", slug: "charging-nahi-ho-rahi", category: "mobile" }
        ],
        keywords: ["phone screen black", "mobile display black but phone on", "black screen problem", "phone screen not showing"],
        variants: ["phone screen black ho gayi", "mobile display nahi aa rahi", "phone on hai par screen black hai", "screen black ho gayi hai", "phone chal raha par display nahi aa rahi", "mobile screen band ho gayi"]
      },
      {
        slug: "mobile-imei-number-kaise-dekhe",
        category: "mobile",
        metaTitle: "Phone Ka IMEI Number Kaise Check Kare? 6 Tarike (2026) | JharForm",
        metaDescription: "Phone ka IMEI number kahan dikhata hai? USSD code, settings, box, ya phone body se IMEI kaise nikaalein. Lost phone ya warranty ke liye zaroori hai.",
        h1: "Phone Ka IMEI Number Kaise Check Kare — 6 Pakka Tarika",
        lastUpdated: "May 2026",
        readingTime: "3 min",
        difficulty: "Easy",
        description: "IMEI number har phone ka unique 15-digit ID hota hai — warranty claims, lost phone track, SIM block, aur police report ke liye zaroori hai. Phone chalu ho ya band ho, IMEI har haal mein nikaala ja sakta hai. Box, bill, phone body, USSD code, ya settings se easily mil jaata hai.",
        steps: [
          { title: "USSD code se check karo", detail: "Phone dialer kholo aur *#06# dial karo. Screen pe 15-digit IMEI number flash hoga. Screenshot le lo ya note kar lo." },
          { title: "Settings mein dekho", detail: "Settings > About Phone > Status > IMEI Information. Dual SIM phones mein IMEI 1 aur IMEI 2 alag dikhega." },
          { title: "Phone box se dekho", detail: "Phone ka original box nikaalo. Side ya back pe sticker pe IMEI number hota hai. Bill/Invoice pe bhi hota hai." },
          { title: "Phone ke back pe dekho (non-removable battery)", detail: "Non-removable battery wale phones mein SIM tray ke paas sticker pe IMEI hota hai. SIM tray nikaal ke check karo." },
          { title: "Battery ke neeche dekho (removable battery)", detail: "Purane phones mein back cover kholo, battery nikaalo. Battery ke neeche ya phone body pe IMEI sticker hoga." },
          { title: "Google Find My Device se check karo", detail: "android.com/find pe login karo. Phone select karo > gear icon pe click karo. IMEI aur device info dikhega. Phone online hona chahiye." }
        ],
        screenshots: [
          { caption: "Phone dialer showing *#06# USSD code and popup with 15-digit IMEI number displayed", alt: "Android phone dialer screen showing IMEI number popup after dialing star hash zero six hash", type: "phone", mockupType: "android-settings-system" },
          { caption: "Settings > About Phone > Status showing IMEI 1 and IMEI 2 information for dual SIM", alt: "Android settings showing about phone status with IMEI 1 and IMEI 2 numbers displayed", type: "phone", mockupType: "android-settings-system" }
        ],
        proTips: ["IMEI hamesha likh ke rakh lo — lost hone pe SIM block karne mein kaam aata hai", "IMEI ki photo bill ke saath rakh lo — warranty claim easy ho jaata hai", "IMEI tamper mat karo — illegal hai aur phone brick ho sakta hai"],
        faqs: [
          { q: "IMEI number kyun zaroori hai?", a: "Phone ka unique ID hai — lost hone pe police report mein, SIM block karne mein, warranty claim mein, aur network blacklist check mein zaroori hai." },
          { q: "IMEI 1 aur IMEI 2 alag kyun hai?", a: "Dual SIM phones mein har SIM slot ka alag IMEI hota hai. IMEI 1 primary slot ke liye hai aur IMEI 2 dusri slot ke liye." },
          { q: "IMEI number change ho sakta hai?", a: "Illegal hai. IMEI tampering (flashing) se phone permanently damage ho sakta hai aur legal action ho sakta hai." },
          { q: "IMEI se lost phone kaise milega?", a: "Police ko IMEI do — wo network operators se track kar sakte hain. Google Find My Device se bhi location track kar sakte ho agar phone online hai." }
        ],
        related: [
          { title: "SIM Card Detect Nahi Ho Rahi", slug: "sim-not-detected", category: "mobile" },
          { title: "Mobile Pattern Lock Bhool Gaya", slug: "mobile-pattern-lock-bhool-gaya", category: "mobile" },
          { title: "Phone Hang Ho Raha Hai", slug: "mobile-hang-ho-raha-hai", category: "mobile" }
        ],
        keywords: ["imei number kaise dekhe", "phone ka imei number kahan hai", "imei check karne ka tarika", "android imei number"],
        variants: ["imei number kaise check kare", "phone ka imei kahan hota hai", "imei number kya hai", "imei number kaise nikale", "mobile ka imei number", "imei number kahan likha hota hai"]
      },
      {
        slug: "phone-vibrate-nahi-kar-raha",
        category: "mobile",
        metaTitle: "Phone Vibrate Nahi Kar Raha? Notification Feel Nahi Ho Rahi? Fix (2026) | JharForm",
        metaDescription: "Phone mein vibration band ho gayi hai, notifications feel nahi ho rahi, ya call pe phone hil nahi raha? Vibration motor problem ka complete fix.",
        h1: "Phone Vibrate Nahi Kar Raha — Vibration Motor Fix",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Phone mein vibration band ho gayi hai — call pe phone hil nahi raha, notifications mein buzz nahi ho rahi, ya games mein haptic feedback nahi aa raha. Yeh vibration motor damage, settings off hone, Do Not Disturb mode, ya software glitch ki wajah se hota hai. 70% cases mein settings se fix ho jaata hai.",
        steps: [
          { title: "Vibration settings check karo", detail: "Settings > Sound & Vibration > Vibrate. Call vibrate, notification vibrate, aur touch feedback sab on hona chahiye." },
          { title: "Do Not Disturb mode off karo", detail: "DND mode mein vibration bhi band hoti hai. Quick settings se DND off karo. Ya Settings > DND > customize karke vibration allow karo." },
          { title: "Power saving mode off karo", detail: "Battery Saver/Power Saving mode mein vibration band ho jaati hai. Settings > Battery > Power Saving > Off karo." },
          { title: "Phone restart karo", detail: "Software glitch se vibration driver hang ho sakta hai. Restart se fix hota hai. Safe mode mein check karo — wahan kaam kare to app conflict hai." },
          { title: "Accessibility vibration check karo", detail: "Settings > Accessibility > Vibration & Haptic. Interaction, call, aur notification vibration sab on honi chahiye." },
          { title: "Test vibration motor", detail: "Phone dialer mein *#*#0842#*#* dial karo (Samsung). Ya third-party vibration test app install karo. Motor physically working hai ya nahi check hoga." },
          { title: "Service center le jao", detail: "Vibration motor physically damage ho to replacement chahiye. Cost: Local Rs. 200-500, Authorized Rs. 500-1200. Small component hai jaldi fix hota hai." }
        ],
        screenshots: [
          { caption: "Settings > Sound & Vibration showing all vibration toggles ON including calls notifications and touch", alt: "Android sound and vibration settings showing all vibration toggles enabled for calls and notifications", type: "phone", mockupType: "android-settings-sound" },
          { caption: "Vibration test app showing motor spinning at 100% with device vibration status active", alt: "Phone vibration test app showing motor test with active vibration status indicator", type: "phone", mockupType: "android-settings-sound" }
        ],
        proTips: ["Thick case/cover se vibration feel kam hoti hai — thin case lagao", "Vibration motor hamesha chalana battery thodi zyada use karti hai", "Water damage ke baad vibration motor sabse pehle fail hota hai"],
        faqs: [
          { q: "Vibration motor physically damage ka pata kaise chalega?", a: "Test apps se check karo. Ya phone ko haath mein pakad ke shake karo — vibration motor loose hua to awaaz degi. Service center le jao." },
          { q: "Phone drop ke baad vibration band ho gayi?", a: "Vibration motor ya uska connector loose ho gaya hai. Service center mein Rs. 300-800 mein fix ho jaata hai." },
          { q: "Vibration intensity kam ho gayi hai?", a: "Settings > Accessibility > Vibration > Intensity. Max pe set karo. Ya motor aging se weak ho gayi hai — replacement chahiye." },
          { q: "Only calls mein vibration nahi ho rahi notifications mein ho rahi?", a: "Call vibration setting alag hoti hai. Settings > Sound > Ringtone > Vibrate for calls > On karo." }
        ],
        related: [
          { title: "Speaker Aur Mic Nahi Chal Raha", slug: "speaker-aur-mic-nahi-chal-raha", category: "mobile" },
          { title: "Phone Hang Ho Raha Hai", slug: "mobile-hang-ho-raha-hai", category: "mobile" },
          { title: "Mobile Internet Nahi Chal Raha", slug: "mobile-internet-nahi-chal-raha", category: "mobile" }
        ],
        keywords: ["phone vibrate nahi kar raha", "vibration not working android", "phone vibration problem", "notification vibrate not working"],
        variants: ["phone vibrate nahi ho raha", "phone hil nahi raha", "vibration band ho gayi", "phone mein vibration nahi aa rahi", "call pe phone vibrate nahi kar raha", "notification feel nahi ho rahi"]
      },
      {
        slug: "auto-rotate-kaam-nahi-kar-raha",
        category: "mobile",
        metaTitle: "Phone Screen Auto Rotate Nahi Ho Rahi? Portrait Mein Stuck Hai? Fix (2026) | JharForm",
        metaDescription: "Phone screen rotate nahi ho rahi, landscape mode mein nahi aa rahi, ya auto-rotate band ho gayi hai? Screen rotation problem ka complete fix.",
        h1: "Auto Rotate Nahi Kaam Kar Raha — Screen Rotation Fix",
        lastUpdated: "May 2026",
        readingTime: "3 min",
        difficulty: "Easy",
        description: "Phone screen landscape mein rotate nahi ho rahi — YouTube full screen nahi ho raha, games landscape mein nahi khul rahi, ya phone tilt karne par screen sidhi nahi ho rahi. Auto-rotate setting off, screen rotation lock on, ya accelerometer sensor fault ki wajah se hota hai. 90% cases mein settings se fix ho jaata hai.",
        steps: [
          { title: "Auto-rotate toggle check karo", detail: "Quick settings panel se Auto-Rotate pe tap karo. Blue/On hona chahiye. Portrait pe tap ho to landscape rotate nahi hoga." },
          { title: "Screen rotation lock off karo", detail: "Quick settings mein Portrait Lock ya Auto-Rotate Locked icon ho to tap karke unlock karo. Settings > Display > Auto-rotate screen > On." },
          { title: "Accelerometer calibrate karo", detail: "Phone dialer mein *#*#64663#*#* dial karo (Xiaomi). Ya sensor test apps install karo. Accelerometer values check karo — XYZ values change ho rahi hain ya nahi." },
          { title: "Phone restart karo", detail: "Sensor driver glitch ho sakta hai. Restart se accelerometer service refresh hogi. Safe mode mein check karo — third-party app conflict check karne ke liye." },
          { title: "Gravity sensor test app use karo", detail: "Sensor Test ya AndroSensor app install karo. Accelerometer aur gyroscope values check karo. Sab sensors active hain ya nahi pata chalega." },
          { title: "Specific app mein check karo", detail: "YouTube ya Maps kholo aur tilt karo. Agar sirf ek app mein rotate nahi ho rahi to wo app ka issue hai. App cache clear karo." },
          { title: "Service center le jao", detail: "Accelerometer hardware damage ho to motherboard-level repair chahiye. Cost: Rs. 800-2500. Rare case — zyaadatar software issue hota hai." }
        ],
        screenshots: [
          { caption: "Quick settings panel showing Auto-Rotate toggle ON and Portrait Lock toggle OFF", alt: "Android quick settings panel showing auto-rotate enabled and portrait lock disabled", type: "phone", mockupType: "android-settings-display" },
          { caption: "Sensor Test app showing accelerometer XYZ values changing as phone is tilted", alt: "Phone sensor test app showing accelerometer X Y Z values changing with phone tilt", type: "phone", mockupType: "android-settings-display" }
        ],
        proTips: ["Bed pe phone use karte waqt auto-rotate off rakho — side-lying mein annoy karta hai", "YouTube mein full screen ke liye video pe tap karke expand icon bhi mil jaata hai", "Third-party launcher mein rotation setting alag hoti hai"],
        faqs: [
          { q: "Home screen rotate kyu nahi ho raha?", a: "Android mein home screen by default portrait mode mein hoti hai. Some custom ROMs ya launchers mein landscape home screen enable ho sakti hai." },
          { q: "Sirf ek app mein rotate nahi ho raha?", a: "Wo app ne rotation lock kiya hua hai. App settings mein check karo. Ya app update karo. App-specific issue hai." },
          { q: "Accelerometer kaam kar raha par rotate nahi ho raha?", a: "Screen rotation service mein glitch hai. Phone restart karo. Ya Settings > Apps > System apps > Screen Rotation > Clear Data." },
          { q: "Auto-rotate on hai phir bhi rotate nahi ho raha?", a: "Accelerometer sensor calibration issue hai. Sensor calibration app se recalibrate karo. Ya Settings > Display mein rotation sensitivity adjust karo." }
        ],
        related: [
          { title: "Phone Screen Black Ho Gayi Hai", slug: "phone-screen-black-ho-rahi-hai", category: "mobile" },
          { title: "Mobile Hang Ho Raha Hai", slug: "mobile-hang-ho-raha-hai", category: "mobile" },
          { title: "Ghost Touch Problem", slug: "phone-ghost-touch", category: "mobile" }
        ],
        keywords: ["auto rotate not working", "phone screen not rotating", "android auto rotate problem", "landscape mode not working"],
        variants: ["screen rotate nahi ho rahi", "phone landscape mode mein nahi aa rahi", "auto rotate band ho gaya", "screen tilt nahi ho rahi", "phone sidha nahi ho raha", "rotate screen nahi ho rahi"]
      },
      {
        slug: "phone-gps-location-nahi-aa-raha",
        category: "mobile",
        metaTitle: "Phone GPS Location Nahi Aa Rahi? Maps Khud Location Nahi Dikhata? Fix (2026) | JharForm",
        metaDescription: "Google Maps mein location nahi aa rahi hai, GPS signal weak dikh raha hai, ya location inaccurate aa rahi hai? GPS problem ka complete fix guide.",
        h1: "GPS Location Nahi Aa Rahi — Maps Location Fix",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Google Maps, Uber, Ola, ya Zomato mein location nahi aa rahi, GPS searching hota rehta hai, ya location 500m+ inaccurate aa rahi hai. Yeh GPS settings off, location mode battery saving pe, indoor use, ya GPS cache corrupt ki wajah se hota hai. Outdoor mein khulle aasmaan ke neeche best GPS signal milti hai.",
        steps: [
          { title: "Location services on karo", detail: "Quick settings se Location tile tap karo. ON hona chahiye. Settings > Location > On. Mode: High Accuracy select karo." },
          { title: "Location mode High Accuracy karo", detail: "Settings > Location > Mode > High Accuracy. Battery saving ya Device only se location inaccurate aa sakti hai. High Accuracy GPS + WiFi + Cellular use karta hai." },
          { title: "GPS cache clear karo", detail: "Settings > Apps > Show system apps > Google Play Services > Storage > Clear Cache. Location cache corrupt ho to location inaccurate hoti hai." },
          { title: "Google Maps cache clear karo", detail: "Settings > Apps > Maps > Storage > Clear Cache. Maps ka offline data corrupt ho to location issues hoti hain." },
          { title: "Phone restart karo", detail: "GPS driver aur location services reload hongi. Location cache refresh hoga. Airplane mode on-off se bhi GPS refresh hota hai." },
          { title: "GPS status app se test karo", detail: "GPS Test ya GPS Status app install karo. Kitne satellites detect ho rahi hain dekho. 4+ satellites chahiye accurate location ke liye." },
          { title: "Outdoor open area mein jaao", detail: "Indoor, basement, aur buildings ke andar GPS signal weak hoti hai. Khuli jagah pe jaao. Building ke bahar balcony mein bhi better hota hai." }
        ],
        screenshots: [
          { caption: "Settings > Location showing Location ON with High Accuracy mode selected", alt: "Android location settings showing location services enabled with high accuracy mode selected", type: "phone", mockupType: "android-settings-location" },
          { caption: "GPS Test app showing 8 satellites connected with signal strength bars and accuracy 3 meters", alt: "GPS test app showing satellite connections with signal strength and location accuracy", type: "phone", mockupType: "android-settings-location" }
        ],
        proTips: ["High Accuracy mode mein battery zyada use hoti hai — sirf navigation ke waqt use karo", "Metal case ya magnetic car mount se GPS interference hoti hai", "AGPS data weekly update hoti hai — first fix mein time lagta hai"],
        faqs: [
          { q: "GPS indoor mein kaam kyu nahi karta?", a: "GPS satellites se direct line-of-sight chahiye. Buildings, roof, aur walls signal block karte hain. WiFi location indoor mein better kaam karti hai." },
          { q: "Location mode mein kya farak hai?", a: "High Accuracy: GPS+WiFi+Cellular — sabse accurate. Battery Saving: WiFi+Cellular only — kam accurate. Device Only: sirf GPS — slow." },
          { q: "GPS location 1km galat aa rahi hai?", a: "Location cache corrupt ho sakta hai. Google Play Services cache clear karo. Ya phone restart karo. High Accuracy mode on karo." },
          { q: "Phone ne GPS permission revoke kar di?", a: "Settings > Apps > Maps/Uber > Permissions > Location > Allow all the time. Background location zaroori hai navigation apps ke liye." }
        ],
        related: [
          { title: "WiFi Connect Nahi Ho Raha", slug: "wifi-not-connecting", category: "mobile" },
          { title: "Mobile Internet Nahi Chal Raha", slug: "mobile-internet-nahi-chal-raha", category: "mobile" },
          { title: "Phone Hang Ho Raha Hai", slug: "mobile-hang-ho-raha-hai", category: "mobile" }
        ],
        keywords: ["gps not working", "phone location not working", "google maps location problem", "gps signal weak"],
        variants: ["gps location nahi aa rahi", "phone location nahi dikh rahi", "maps mein location nahi aa rahi", "gps signal weak hai", "location inaccurate aa rahi hai", "phone location band ho gayi"]
      },
      {
        slug: "mobile-laggy-performance-slow",
        category: "mobile",
        metaTitle: "Phone Bahut Slow Chal Raha Hai? Laggy Performance Fix (2026) | JharForm",
        metaDescription: "Phone bahut slow ho gaya hai, apps 5-10 second mein khul rahi hain, animation lag ho raha hai? Phone speed aur performance ka complete fix guide.",
        h1: "Phone Bahut Slow Chal Raha Hai \u2014 Laggy Performance Fix",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Easy",
        description: "Phone bahut slow chal raha hai \u2014 apps khulte waqt 5-10 second lag raha hai, home screen swipe smooth nahi hai, keyboard type karne mein delay ho raha hai, aur games mein FPS drop ho raha hai. Yeh low RAM, storage full, too many background apps, outdated OS, ya storage fragmentation ki wajah se hota hai. 2-3 saal purane phones mein yeh common issue hai.",
        steps: [
          { title: "Background apps close karo", detail: "Recent apps button press karo. Sab apps ko close karo. Background mein 10+ apps chal rahi hoti hain jo RAM khaati hain." },
          { title: "Storage free karo", detail: "Settings > Storage. Kam se kam 2-3GB free hona chahiye. Photos/videos Google Photos pe backup karke delete karo. WhatsApp media clear karo." },
          { title: "Cache clear karo", detail: "Settings > Storage > Cached Data > Clear. Sab apps ka cache ek saath clear ho jaayega. Cache rebuild hota hai \u2014 safe hai." },
          { title: "Unused apps uninstall karo", detail: "Settings > Apps. 6 mahine se use nahi ki hui apps uninstall karo. Bloatware bhi disable karo. Facebook, Uber, Ola kabhi-kabhi use karte ho to website use karo." },
          { title: "Animation scale kam karo (Developer Options)", detail: "Settings > About Phone > Build Number 7 baar tap karo. Developer options on ho jaayega. Developer Options > Window/Transition/Animator animation scale > 0.5x. UI bahut fast feel hoga." },
          { title: "Lite apps install karo", detail: "Facebook Lite, Messenger Lite, Instagram Lite, Google Go use karo. 50-70% less RAM aur storage use karte hain. Same features Lite versions mein available hain." },
          { title: "Factory reset (last resort)", detail: "Settings > System > Reset > Factory Data Reset. Sab data delete hoga. Pehle backup karo. 2+ saal purane phone mein factory reset se phone jaise naya chalega." },
          { title: "RAM upgrade nahi ho sakti", detail: "Phone mein RAM physically upgrade nahi hoti. Lekin virtual RAM (Settings > RAM > RAM Plus/Virtual RAM) se storage se 2-4GB extra RAM bana sakte ho." }
        ],
        screenshots: [
          { caption: "Settings > Storage showing 1.2GB free out of 64GB with cached data highlighted for clearing", alt: "Android storage settings showing low free space with cached data option highlighted", type: "phone", mockupType: "android-settings-storage" },
          { caption: "Developer Options showing Window Animation Scale Transition Animation Scale and Animator Duration Scale all set to 0.5x", alt: "Android developer options showing animation scales set to 0.5x for faster performance", type: "phone", mockupType: "android-settings-storage" }
        ],
        proTips: ["Restart phone weekly \u2014 RAM fragmentation clear hota hai", "Live wallpapers aur widgets se bacho \u2014 RAM khaate hain", "Auto-sync off rakho \u2014 background sync processing bahut leta hai"],
        faqs: [
          { q: "Phone 2 saal purana hai \u2014 slow hona normal hai?", a: "Haan \u2014 apps zyada heavy ho jaati hain har update mein. Factory reset se better ho jaata hai. Lekin hardware limit bhi hoti hai." },
          { q: "Animation scale change karne se kya hoga?", a: "UI transitions 2x fast ho jaayenge. Same performance par phone zyada fast feel hoga. Koi app crash nahi hogi." },
          { q: "Virtual RAM kaam karti hai?", a: "Thodi help karti hai \u2014 storage ko RAM ki tarah use karti hai. Lekin storage speed RAM se 10x slow hoti hai. Real RAM replacement nahi hai." },
          { q: "Factory reset ke baad phone kitne der naya jaise chalega?", a: "3-6 mahine tak smooth chalta hai. Phir apps aur data accumulate hote hain aur slow ho jaata hai. Regular maintenance zaroori hai." }
        ],
        related: [
          { title: "Mobile Hang Ho Raha Hai", slug: "mobile-hang-ho-raha-hai", category: "mobile" },
          { title: "Storage Full Hai", slug: "storage-full-hai", category: "mobile" },
          { title: "Phone Bahut Garam Ho Raha Hai", slug: "phone-heat-ho-raha-hai", category: "mobile" }
        ],
        keywords: ["phone slow chal raha hai", "mobile laggy performance", "phone speed up", "android slow fix"],
        variants: ["phone bahut slow chal raha hai", "mobile lag ho raha hai", "phone speed kam ho gayi", "phone hang ho raha hai", "apps slow khul rahi hain", "phone performance down ho gayi"]
      },
      {
        slug: "phone-touch-not-working",
        category: "mobile",
        metaTitle: "Phone Touch Screen Kaam Nahi Kar Rahi? Touch Nahi Chal Raha? Fix (2026) | JharForm",
        metaDescription: "Phone touch screen kaam nahi kar rahi, touch respond nahi ho raha, ya kisi ek jagah pe touch stuck hai? Touch screen problem ka complete fix.",
        h1: "Touch Screen Kaam Nahi Kar Rahi \u2014 Touch Fix Guide",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Medium",
        description: "Phone ki touch screen bilkul kaam nahi kar rahi \u2014 kahi bhi tap karne par kuchh nahi ho raha, ya kuchh areas mein touch kaam kar rahi hai kuchh mein nahi. Yeh screen protector interference, liquid damage, digitizer fault, ya software issue ki wajah se hota hai. Drop ke baad digitizer (touch layer) alag se damage ho sakta hai screen theek hone ke baad bhi.",
        steps: [
          { title: "Screen protector hatao", detail: "Thick ya low-quality screen protector touch sensitivity block kar deta hai. Screen protector hata ke check karo. Glass protector ke neeche air bubble bhi touch issue deta hai." },
          { title: "Screen saaf karo", detail: "Microfiber cloth se screen saaf karo. Oil, water, ya sweat se capacitive touch kaam nahi karti. Andhere mein check karo \u2014 liquid streaks dikhti hain." },
          { title: "Force restart karo", detail: "Power + Volume Down 15 second. Phone restart hoga. Software touch driver hang ho to restart se fix hota hai." },
          { title: "Safe mode mein check karo", detail: "Safe mode mein touch kaam kare to third-party app conflict hai. Recently installed apps uninstall karo jo overlay permission use karte hain." },
          { title: "Glove mode / Touch sensitivity on karo", detail: "Settings > Display > Touch Sensitivity > On. Gloves ya thick screen protector ke liye sensitivity boost hoti hai. Some phones mein 'Accidental Touch Protection' off karna padta hai." },
          { title: "Touch calibration test karo", detail: "Phone dialer mein *#*#2664#*#* dial karo (Samsung). Ya touch screen test app install karo. Dead zones identify honge." },
          { title: "Service center le jao", detail: "Digitizer ya touch IC damage ho to screen replacement chahiye. Cost: Local Rs. 1500-3500, Authorized Rs. 3000-7000. Touch layer LCD ke saath integrated hoti hai most phones mein." }
        ],
        screenshots: [
          { caption: "Phone screen showing touch test grid with red X marks on dead zones where touch is not responding", alt: "Phone touch screen test showing dead zones marked with red X where touch is unresponsive", type: "phone", mockupType: "android-settings-display" },
          { caption: "Settings > Display showing Touch Sensitivity toggle ON and Accidental Touch Protection OFF", alt: "Android display settings showing touch sensitivity enabled and accidental touch protection disabled", type: "phone", mockupType: "android-settings-display" }
        ],
        proTips: ["Tempered glass mein 0.3mm se zyada thickness avoid karo \u2014 touch interference hota hai", "Wet hands mein phone mat use karo \u2014 water touch accuracy bahut kam karti hai", "Magnetic case se bacho \u2014 magnetic interference touch screen affect kar sakti hai"],
        faqs: [
          { q: "Sirf corner ya ek side mein touch nahi kaam kar rahi?", a: "Digitizer partially damage hua hai. Ya screen protector us corner mein properly stuck nahi hai. Screen protector check karo pehle." },
          { q: "Water damage ke baad touch kaam nahi kar rahi?", a: "Water digitizer circuit damage kar sakta hai. 48 ghante dry karke check karo. Nahi fix hua to digitizer replacement chahiye. Cost Rs. 1500-3500." },
          { q: "Touch randomly click ho rahi hai apne aap?", a: "Ghost touch issue hai. Screen protector, liquid, ya digitizer fault. Screen protector hatao. Liquid damage ho to screen replace." },
          { q: "Screen cracked hai par touch kaam kar rahi hai \u2014 repair zaroori hai?", a: "Hairline crack se touch kaam karegi par risk hai ki crack spread ho jaaye aur touch fail ho jaaye. Tempered glass lagao protection ke liye." }
        ],
        related: [
          { title: "Screen Tut Gaya", slug: "screen-tut-gaya", category: "mobile" },
          { title: "Ghost Touch Problem", slug: "phone-ghost-touch", category: "mobile" },
          { title: "Phone Paani Mein Gir Gaya", slug: "phone-water-damage-gir-gaya", category: "mobile" }
        ],
        keywords: ["touch screen not working", "phone touch not responding", "mobile touch problem", "android touch screen issue"],
        variants: ["phone touch nahi kaam kar rahi", "mobile touch screen nahi chal rahi", "touch respond nahi ho raha", "phone screen touch band ho gayi", "touch kaam nahi kar raha phone mein", "phone touch stuck ho gayi"]
      },
      {
        slug: "phone-software-update-nahi-ho-raha",
        category: "mobile",
        metaTitle: "Phone Software Update Nahi Ho Raha? Download Pending Fix (2026) | JharForm",
        metaDescription: "Phone ka software update download nahi ho raha, installation fail ho rahi hai, ya update check karte waqt error aa raha hai? Software update fix guide.",
        h1: "Software Update Nahi Ho Raha \u2014 Download Pending Fix",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Phone mein software update download nahi ho raha \u2014 'Checking for updates' pe stuck hai, download 100% ho ke fail ho jaata hai, ya 'Installation failed' error aa raha hai. Insufficient storage, weak WiFi, low battery, ya server-side issue ki wajah se hota hai. Software updates security patches aur bug fixes ke liye zaroori hain \u2014 ignore mat karo.",
        steps: [
          { title: "Storage free karo", detail: "Update 1-3GB ka hota hai. Settings > Storage mein 5GB+ free hona chahiye. Photos backup karke delete karo. Cache clear karo." },
          { title: "WiFi se strong connection pe karo", detail: "Mobile data pe update bahut bada hota hai. WiFi pe switch karo. Stable connection chahiye \u2014 download ke beech disconnect hone se fail hota hai." },
          { title: "Battery 50%+ honi chahiye", detail: "Update install ke waqt phone band nahi hona chahiye. 50%+ battery honi chahiye. Ya charger pe lagao during update." },
          { title: "Phone restart karo", detail: "Update service mein glitch ho sakta hai. Restart ke baad Settings > Software Update > Check again." },
          { title: "Cache partition wipe karo (recovery mode)", detail: "Recovery mode: Power + Volume Up. 'Wipe cache partition' select karo. System cache clear hoga. Data safe rahega. Restart karo aur update try karo." },
          { title: "Manual update try karo", detail: "Manufacturer website se firmware download karo. Samsung: Smart Switch. Xiaomi: Mi Flash. OnePlus: Oxygen Updater app. PC se flash karo." },
          { title: "Wait and retry karo", detail: "Server overload ho sakta hai. 24-48 ghante baad try karo. New update release ke pehle 2-3 din server slow hote hain." }
        ],
        screenshots: [
          { caption: "Settings > Software Update showing Download Pending with insufficient storage warning and 2.1GB required", alt: "Android software update screen showing download pending with insufficient storage warning", type: "phone", mockupType: "android-settings-system" },
          { caption: "Recovery mode menu showing Wipe Cache Partition option highlighted with volume buttons navigation", alt: "Android recovery mode showing wipe cache partition option highlighted", type: "phone", mockupType: "android-settings-system" }
        ],
        proTips: ["OTA updates WiFi pe hi download karo \u2014 mobile data pe 1-3GB lagta hai", "Update ke pehle photos aur important data backup karo", "Beta updates unstable hoti hain \u2014 stable release wait karo"],
        faqs: [
          { q: "Update download 100% ho gaya par install fail ho raha hai?", a: "Storage full ho sakta hai. Ya battery low ho gayi. 5GB+ free karo. Charger pe lagao. Cache partition wipe karo." },
          { q: "Phone rooted hai \u2014 update nahi ho raha?", a: "Rooted phones OTA updates fail hoti hain. Unroot karo ya manually flash karo. Magisk se systemless root pe OTA possible hai." },
          { q: "Kitne saal tak phone ko software updates milte hain?", a: "Android phones: 2-3 years. Samsung flagship: 4 years. Pixel: 5 years. iPhone: 5-6 years. Budget phones: 1-2 years." },
          { q: "Software update se phone slow ho jaata hai?", a: "Naya OS purane hardware pe zyada heavy hota hai. 1-2 din mein optimize ho jaata hai. Lekin 3+ saal purane phones mein slowdown noticeable hota hai." }
        ],
        related: [
          { title: "Storage Full Hai", slug: "storage-full-hai", category: "mobile" },
          { title: "Mobile Hang Ho Raha Hai", slug: "mobile-hang-ho-raha-hai", category: "mobile" },
          { title: "Phone Hang Ho Raha Hai", slug: "mobile-hang-ho-raha-hai", category: "mobile" }
        ],
        keywords: ["software update not working", "phone update failed", "android update pending", "software update error"],
        variants: ["phone update nahi ho raha", "software update download nahi ho raha", "update fail ho raha hai", "phone software update stuck hai", "update install nahi ho raha", "phone ka update kaise kare"]
      },
      {
        slug: "phone-screen-brightness-dim",
        category: "mobile",
        metaTitle: "Phone Screen Bahut Dim Dikh Rahi Hai? Brightness Low Fix (2026) | JharForm",
        metaDescription: "Phone screen bahut kam brightness pe dikh rahi hai, outdoor mein kuchh nahi dikhta, ya auto-brightness kam brightness pe atak gayi hai? Screen dim fix.",
        h1: "Screen Bahut Dim Dikh Rahi Hai \u2014 Brightness Low Fix",
        lastUpdated: "May 2026",
        readingTime: "3 min",
        difficulty: "Easy",
        description: "Phone screen bahut kam brightness pe dikh rahi hai \u2014 outdoor sunlight mein bilkul kuchh nahi dikhta, auto-brightness bahut dim rakh rahi hai, ya screen brightness slider pe maximum par bhi dim dikh rahi hai. Proximity sensor blockage, adaptive brightness bug, power saving mode, ya screen hardware fault ki wajah se hota hai.",
        steps: [
          { title: "Brightness slider maximum karo", detail: "Quick settings se brightness slider fully right pe karo. Auto-brightness off karo. Manual control pe rakho." },
          { title: "Auto-brightness off karo", detail: "Settings > Display > Adaptive Brightness / Auto Brightness > Off. Auto-brightness indoor lighting mein bahut dim kar deti hai. Manual se better control milta hai." },
          { title: "Power saving mode off karo", detail: "Battery Saver / Power Saving mode mein screen brightness intentionally 50% se kam kar deta hai. Settings > Battery > Power Saving > Off." },
          { title: "Proximity sensor check karo", detail: "Phone ke top speaker ke paas proximity sensor hota hai. Screen protector ya dust se block ho to screen call ke baad black hi rehti hai. Sensor area saaf karo." },
          { title: "Blue light filter/Night mode off karo", detail: "Settings > Display > Blue Light Filter / Night Mode > Off. Night mode screen ko yellow/dim kar deta hai. Auto schedule off karo." },
          { title: "Extra dim / Vision accessibility off karo", detail: "Settings > Accessibility > Vision > Remove Animations / Reduce Bright Colors / Extra Dim > Off. Accessibility features screen ko intentionally dim karti hain." },
          { title: "Phone restart karo", detail: "Display driver glitch se brightness control kaam nahi kar rahi ho sakta hai. Restart se display subsystem reload hogi." }
        ],
        screenshots: [
          { caption: "Quick settings panel showing brightness slider at maximum with Auto-Brightness toggle switched OFF", alt: "Android quick settings showing brightness at maximum with auto brightness disabled", type: "phone", mockupType: "android-settings-display" },
          { caption: "Settings > Display showing Adaptive Brightness OFF and Blue Light Filter OFF with brightness at 100%", alt: "Android display settings showing adaptive brightness and blue light filter both disabled", type: "phone", mockupType: "android-settings-display" }
        ],
        proTips: ["Outdoor mein brightness max + auto-brightness off rakho \u2014 sunlight legibility best hogi", "AMOLED screens dark mode mein zyada bright aur battery efficient hoti hain", "Screen protectors matte/anti-glare brightness ko 20-30% kam kar dete hain"],
        faqs: [
          { q: "Screen maximum brightness pe bhi outdoor mein kuchh nahi dikhta?", a: "Budget phones mein max brightness 300-400 nits hoti hai. Flagships 800-1500 nits. Budget phone ho to shade mein use karo ya brightness booster app try karo." },
          { q: "Auto-brightness on karne pe screen dim ho jaati hai?", a: "Auto-brightness sensor indoor low light mein bahut dim kar deta hai. Sensor recalibrate karo: Settings > Apps > Device Health Services > Storage > Clear Data." },
          { q: "Call ke baad screen black hi rehti hai?", a: "Proximity sensor block ho raha hai. Screen protector, case, ya dust. Top speaker ke paas sensor area saaf karo. Screen protector ka cutout check karo." },
          { q: "Screen brightness gradually kam ho rahi hai din ba din?", a: "AMOLED screens aging se brightness degrade hoti hai. 2-3 saal mein noticeable. Screen replacement se fix hoga. Cost Rs. 2000-6000." }
        ],
        related: [
          { title: "Phone Screen Black Ho Gayi Hai", slug: "phone-screen-black-ho-rahi-hai", category: "mobile" },
          { title: "Screen Tut Gaya", slug: "screen-tut-gaya", category: "mobile" },
          { title: "Battery Jaldi Khatam Ho Rahi", slug: "mobile-battery-drain", category: "mobile" }
        ],
        keywords: ["screen brightness low", "phone screen dim", "brightness not working", "android screen dim"],
        variants: ["phone screen bahut dim hai", "screen brightness kam hai", "phone screen outdoor mein nahi dikhta", "brightness maximum par bhi kam hai", "screen bahut andheri dikh rahi hai", "auto brightness kam brightness pe atak gayi"]
      },
      {
        slug: "phone-alarm-clock-nahi-baj-raha",
        category: "mobile",
        metaTitle: "Phone Alarm Clock Nahi Baj Raha? Missed Alarm Fix (2026) | JharForm",
        metaDescription: "Phone ka alarm clock nahi baj raha, alarm silent ho jaata hai, ya doosre phone mein alarm kaam kar raha ismein nahi? Alarm problem ka complete fix.",
        h1: "Alarm Clock Nahi Baj Raha \u2014 Missed Alarm Fix",
        lastUpdated: "May 2026",
        readingTime: "3 min",
        difficulty: "Easy",
        description: "Phone ka alarm clock nahi baj raha \u2014 alarm set hai par awaaz nahi aa rahi, vibration nahi ho rahi, ya alarm 1-2 second baj ke band ho ja raha hai. Do Not Disturb mode, low volume, battery saver, ya third-party alarm app ki wajah se hota hai. Morning wake up miss hone se office/school late ho jaata hai \u2014 yeh serious issue hai.",
        steps: [
          { title: "Alarm volume check karo", detail: "Settings > Sound > Alarm Volume. Maximum pe rakho. Alarm volume media volume se alag hota hai. Silent mode mein bhi alarm bajni chahiye." },
          { title: "Do Not Disturb mode off ya exception do", detail: "Settings > DND > Alarms > Allow. DND mode mein alarms by default block ho jaati hain. Alarms ko DND exception mein daalo." },
          { title: "Battery optimization exception do", detail: "Settings > Battery > Battery Optimization > Clock app > Don't Optimize. Battery saver alarm app ko background mein kill kar deta hai." },
          { title: "Default Clock app use karo", detail: "Third-party alarm apps unreliable hote hain. Phone ka default Clock app use karo. Wo system-level permissions rakhti hai." },
          { title: "Multiple alarms set karo", detail: "Ek alarm ke bharose mat raho. 5-10 minute gap mein 2-3 alarms set karo. Agar ek fail ho to dusri bajegi." },
          { title: "Phone ko face up rakho", detail: "Phone face down ya pillow ke neeche rakho to alarm muffled ho jaati hai. Bedside pe face up rakho. Vibration bhi feel hogi." },
          { title: "Test alarm set karo", detail: "2 minute baad ka alarm set karo. Confirm karo ki sahi awaaz aa rahi hai aur volume sufficient hai. Regular testing zaroori hai." }
        ],
        screenshots: [
          { caption: "Clock app showing alarm set for 6:00 AM with alarm volume at maximum and DND exception enabled", alt: "Android clock app showing alarm settings with volume max and DND alarm exception enabled", type: "phone", mockupType: "android-settings-sound" },
          { caption: "Settings > Battery Optimization showing Clock app set to Not Optimized for unrestricted alarm operation", alt: "Android battery optimization settings showing clock app set to not optimized", type: "phone", mockupType: "android-settings-sound" }
        ],
        proTips: ["Alarm ke liye distinctive loud ringtone use karo \u2014 soothing tones deep sleep mein miss ho jaati hain", "Phone airplane mode mein rakho night mein \u2014 alarm still kaam karti hai", "Smartwatch ho to phone + watch dono pe alarm set karo"],
        faqs: [
          { q: "Alarm baj rahi par bahut kam awaaz aa rahi hai?", a: "Alarm volume low hai. Ya ringtone volume kam hai. Settings > Sound > Alarm Volume maximum karo. Loud ringtone select karo." },
          { q: "Alarm ek second baj ke band ho ja rahi hai?", a: "Third-party app conflict ya battery optimization. Default Clock app use karo. Battery optimization exception do. Phone restart karo." },
          { q: "Phone silent mode mein alarm bajegi?", a: "Haan \u2014 alarm volume independent hoti hai. Lekin DND mode mein allow karna padta hai. Some phones mein silent mode mein alarm mute hoti hai." },
          { q: "Alarm ka snooze kitni baar kaam karta hai?", a: "Default 3-5 times. Phone ke Clock app settings mein change kar sakte ho. Snooze interval bhi customize kar sakte ho." }
        ],
        related: [
          { title: "Phone Hang Ho Raha Hai", slug: "mobile-hang-ho-raha-hai", category: "mobile" },
          { title: "Notifications Nahi Aa Rahi", slug: "phone-notification-nahi-aa-rahi", category: "mobile" },
          { title: "Phone Vibrate Nahi Kar Raha", slug: "phone-vibrate-nahi-kar-raha", category: "mobile" }
        ],
        keywords: ["alarm not working", "phone alarm not ringing", "missed alarm fix", "android alarm problem"],
        variants: ["phone alarm nahi baj raha", "alarm clock kaam nahi kar raha", "phone mein alarm nahi aa rahi", "alarm set hai par nahi baj raha", "morning alarm miss ho gayi", "phone alarm silent ho ja raha hai"]
      },
      {
        slug: "phone-microphone-nahi-chal-raha",
        category: "mobile",
        metaTitle: "Phone Mic Nahi Chal Raha? Call Mein Awaaz Nahi Ja Rahi? Fix (2026) | JharForm",
        metaDescription: "Phone ka microphone kaam nahi kar raha, call mein doosra side awaaz nahi sun pa raha, ya voice recording mute aa rahi hai? Mic problem ka complete fix.",
        h1: "Microphone Nahi Chal Raha \u2014 Call Mic Fix",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Phone ka microphone (mic) kaam nahi kar raha \u2014 call mein doosra side keh raha hai 'hello hello awaaz nahi aa rahi', voice recording mute aa rahi hai, ya Google Assistant awaaz nahi sun pa raha. Yeh mic hole blockage, water damage, software glitch, ya app permission issue ki wajah se hota hai. Bottom mic call ke liye hota hai aur top mic noise cancellation ke liye.",
        steps: [
          { title: "Mic hole saaf karo", detail: "Phone ke bottom edge mein small mic hole hota hai. SIM ejector pin pe soft cloth lapet ke gently clean karo. Pocket lint aur dust mic block kar deti hai." },
          { title: "Phone restart karo", detail: "Audio subsystem glitch se mic kaam nahi kar sakta. Restart se audio drivers reload hote hain. 70% software mic issues restart se fix hote hain." },
          { title: "Mic permissions check karo", detail: "Settings > Apps > affected app > Permissions > Microphone > Allow. WhatsApp, Phone, Recorder sab ko mic permission honi chahiye." },
          { title: "Safe mode mein check karo", detail: "Safe mode mein mic kaam kare to third-party app conflict hai. Recently installed voice changer, recorder, ya calling apps uninstall karo." },
          { title: "Voice Recorder se test karo", detail: "Default Voice Recorder app kholo. Recording karo. Playback suno. Recording clear aa rahi to call-specific issue hai (network). Recording mute aa rahi to mic hardware fault hai." },
          { title: "Network/Voice quality check karo", detail: "Dusre location pe call karo. Ya dusre network (WiFi calling) pe try karo. Kabhi kabhi network issue mic issue mimic karta hai." },
          { title: "Service center le jao", detail: "Mic physically damage ho to bottom mic module replace hota hai. Cost: Local Rs. 300-800, Authorized Rs. 800-1500. Simple repair hai 15-30 min mein." }
        ],
        screenshots: [
          { caption: "Voice Recorder app showing waveform during recording test indicating microphone is picking up audio clearly", alt: "Phone voice recorder app showing active waveform during microphone test recording", type: "phone", mockupType: "android-settings-sound" },
          { caption: "Settings > Apps > WhatsApp showing Microphone permission set to Allow with microphone icon highlighted", alt: "Android app permissions showing WhatsApp microphone permission allowed", type: "phone", mockupType: "android-settings-sound" }
        ],
        proTips: ["Mic hole monthly clean karo \u2014 pocket lint buildup common hai", "Phone case mein mic cutout aligned hona chahiye \u2014 misaligned case mic block kar deti hai", "Speaker mode mein mic alag hota hai \u2014 test karo speaker vs normal mode"],
        faqs: [
          { q: "Sirf WhatsApp call mein mic nahi chal raha normal call mein chal raha?", a: "WhatsApp-specific issue hai. WhatsApp permissions check karo. Ya WhatsApp reinstall karo. Network issue bhi ho sakta hai." },
          { q: "Mic se awaaz kam aur muffled aa rahi hai?", a: "Mic hole partially block ho rahi hai. Clean karo. Ya water damage se mic diaphragm weak ho gayi hai. Service center le jao." },
          { q: "Video recording mein awaaz aa rahi hai par call mein nahi?", a: "Video recording rear/top mic use karti hai. Call bottom mic use karti hai. Bottom mic fault hai. Service center mein bottom mic replace." },
          { q: "Headphone mic se awaaz aa rahi hai par phone mic se nahi?", a: "Phone ka internal mic fault hai. Headphone mic workaround ke liye use karo. Internal mic repair karwana chahiye." }
        ],
        related: [
          { title: "Speaker Aur Mic Nahi Chal Raha", slug: "speaker-aur-mic-nahi-chal-raha", category: "mobile" },
          { title: "Call Drop Ho Rahi Hai", slug: "call-drop-ho-rahi-hai", category: "mobile" },
          { title: "Headphone Jack Nahi Chal Raha", slug: "mobile-headphone-jack-nahi-chal-raha", category: "mobile" }
        ],
        keywords: ["microphone not working", "phone mic not working", "call mic problem", "android microphone issue"],
        variants: ["phone mic nahi chal raha", "microphone kaam nahi kar raha", "call mein awaaz nahi ja rahi", "phone ka mic band ho gaya", "mic nahi aa rahi phone mein", "voice recording mute aa rahi hai"]
      },
      {
        slug: "phone-wireless-charging-nahi-ho-rahi",
        category: "mobile",
        metaTitle: "Phone Wireless Charging Nahi Ho Rahi? Qi Charging Fix (2026) | JharForm",
        metaDescription: "Wireless charging pad pe phone charge nahi ho raha, charging light nahi aa rahi, ya wireless charging slow hai? Wireless charging problem ka fix.",
        h1: "Wireless Charging Nahi Ho Rahi \u2014 Qi Charging Fix",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Wireless charging pad pe phone rakhne par charging nahi ho raha \u2014 charging LED nahi aa rahi, phone garam ho raha hai par charge nahi ho raha, ya wireless charging bahut slow ho rahi hai. Qi wireless charging coil alignment, thick case interference, incompatible charger, ya phone ka wireless charging hardware fault ki wajah se hota hai.",
        steps: [
          { title: "Phone ko center mein align karo", detail: "Wireless charging pad ke center pe phone ko exactly center mein rakho. Misalignment se coil connect nahi hoti. Charging pad pe sweet spot hota hai \u2014 LED indicator dekho." },
          { title: "Thick case hatao", detail: "5mm+ thick cases, metal cases, aur magnetic cases wireless charging block kar dete hain. Case hata ke charge karo. Ya thin wireless-compatible case lagao." },
          { title: "Original/certified Qi charger use karo", detail: "Cheap Rs. 200-300 ke wireless chargers unreliable hote hain. Qi-certified charger use karo (Anker, Samsung, Belkin). Output 10W+ hona chahiye." },
          { title: "Power adapter check karo", detail: "Wireless pad ko 18W+ adapter se connect karo. Pad ka original adapter use karo. Weak adapter se pad proper power nahi de paata." },
          { title: "Phone restart karo", detail: "Wireless charging firmware glitch ho sakta hai. Restart se wireless charging subsystem reload hoga." },
          { title: "Wireless charging toggle check karo", detail: "Kuchh phones mein Settings > Battery > Wireless Charging toggle hota hai. On hona chahiye. iPhone mein always on rehta hai." },
          { title: "Different pad try karo", detail: "Dusri wireless charging pad pe try karo. Agar wahan chal raha to pehle pad fault hai. Public wireless pads (cafes/malls) bhi test karo." },
          { title: "Service center le jao", detail: "Wireless charging coil (back glass ke neeche) damage ho to replacement chahiye. Back glass + coil combined hoti hai. Cost: Rs. 1500-4000." }
        ],
        screenshots: [
          { caption: "Phone placed exactly centered on wireless charging pad with LED indicator showing blue charging light", alt: "Phone centered on wireless charging pad with blue LED indicator showing active charging", type: "phone", mockupType: "android-settings-battery" },
          { caption: "Settings > Battery showing Wireless Charging toggle ON and charging pad connected with 10W output", alt: "Android battery settings showing wireless charging enabled with charger output details", type: "phone", mockupType: "android-settings-battery" }
        ],
        proTips: ["Wireless charging overnight best hai \u2014 slow par convenient", "Phone garam hota hai wireless charging mein \u2014 AC mein ya cool surface pe rakho", "Wireless charging battery health ke liye acchi hai \u2014 slow charge = less heat = longer life"],
        faqs: [
          { q: "Wireless charging se battery jaldi kharab hoti hai?", a: "Nahi \u2014 actually acchi hai. Heat thodi zyada hoti hai par slow charge se battery stress kam hota hai. 80% pe nikaalo." },
          { q: "Kya koi bhi phone wireless charge ho sakta hai?", a: "Nahi \u2014 phone mein Qi wireless charging coil honi chahiye. Budget phones mostly nahi hoti. Flagships aur mid-range mein common hai." },
          { q: "Wireless charging wired se kitni slow hoti hai?", a: "Wired 25-65W common hai. Wireless 10-15W common hai. Wireless hamesha wired se 30-50% slow hoti hai. Heat bhi zyada hoti hai." },
          { q: "Phone case ke saath wireless charge ho sakta hai?", a: "Thin plastic/TPU cases (3mm se kam) mein ho jaata hai. Thick, metal, magnetic, ya wallet cases block kar deti hain." }
        ],
        related: [
          { title: "Charging Nahi Ho Rahi Hai", slug: "charging-nahi-ho-rahi", category: "mobile" },
          { title: "Fast Charging Nahi Ho Rahi", slug: "mobile-fast-charging-nahi-ho-rahi", category: "mobile" },
          { title: "Phone Bahut Garam Ho Raha Hai", slug: "phone-heat-ho-raha-hai", category: "mobile" }
        ],
        keywords: ["wireless charging not working", "qi charging not working", "phone wireless charge problem", "android wireless charging"],
        variants: ["wireless charging nahi ho rahi", "phone wireless charge nahi ho raha", "charging pad pe phone charge nahi ho rahi", "wireless charger kaam nahi kar raha", "qi charging nahi chal rahi", "phone wireless charging slow hai"]
      },
      {
        slug: "phone-screen-flickering",
        category: "mobile",
        metaTitle: "Phone Screen Flicker Kar Rahi Hai? Display Blinking Fix (2026) | JharForm",
        metaDescription: "Phone screen blink kar rahi hai, flicker ho rahi hai, ya brightness up-down ho rahi hai automatically? Screen flickering problem ka complete fix.",
        h1: "Screen Flicker Kar Rahi Hai \u2014 Display Blinking Fix",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Medium",
        description: "Phone screen flicker kar rahi hai \u2014 brightness up-down ho rahi hai, screen content shake ho raha hai, ya low brightness pe screen flicker zyada dikhti hai. Yeh PWM dimming, auto-brightness bug, software issue, ya display hardware fault ki wajah se hota hai. AMOLED screens mein low brightness pe flicker zyada common hai due to PWM (Pulse Width Modulation).",
        steps: [
          { title: "Brightness maximum karo", detail: "PWM flicker low brightness pe zyada hoti hai. Brightness 50%+ rakho. Auto-brightness off karo. Manual brightness control use karo." },
          { title: "Auto-brightness off karo", detail: "Settings > Display > Adaptive Brightness > Off. Auto-brightness sensor ka rapid adjustment flicker mimic kar sakta hai." },
          { title: "DC Dimming on karo (agar available)", detail: "Settings > Display > DC Dimming / Anti-Flicker > On. OnePlus, Xiaomi, OPPO mein DC dimming PWM ko replace karta hai. Flicker significantly kam hoti hai." },
          { title: "Blue light filter / Night mode off karo", detail: "Night mode screen overlay use karta hai jo flicker create kar sakta hai. Blue light filter se bhi similar issue hota hai." },
          { title: "Software update check karo", detail: "Display driver bugs OS updates mein fix hote hain. Settings > Software Update > Check. Latest security patch bhi display stability deta hai." },
          { title: "Safe mode mein check karo", detail: "Safe mode mein flicker band ho to third-party app overlay kar raha hai. Recently installed screen dimmer, blue light filter apps uninstall karo." },
          { title: "Developer options se disable HW overlays karo", detail: "Developer Options > Disable HW Overlays > On. Software rendering mein flicker fix ho sakta hai par performance thodi kam hogi." },
          { title: "Service center le jao", detail: "Display panel ya display IC fault ho to screen replacement chahiye. Cost: Local Rs. 2000-5000, Authorized Rs. 4000-10000. PWM flicker hardware limit hai \u2014 DC dimming wala phone prefer karo." }
        ],
        screenshots: [
          { caption: "Settings > Display showing DC Dimming Anti-Flicker toggle ON with brightness slider at 60%", alt: "Android display settings showing DC dimming anti-flicker enabled at medium brightness", type: "phone", mockupType: "android-settings-display" },
          { caption: "Screen showing visible horizontal flicker lines at low brightness with PWM dimming artifact visible", alt: "Phone screen showing horizontal flicker lines at low brightness due to PWM dimming", type: "phone", mockupType: "android-settings-display" }
        ],
        proTips: ["AMOLED mein DC dimming prefer karo \u2014 PWM se aankhon mein strain kam hota hai", "Flicker-sensitive users ko LCD screens better rehti hain \u2014 no PWM", "Low brightness night use mein always-on display se bacho \u2014 PWM flicker zyada hoti hai"],
        faqs: [
          { q: "Screen flicker se aankhein dukhti hain?", a: "Haan \u2014 PWM flicker eye strain aur headache deti hai. DC dimming on karo. Ya brightness 50%+ rakho. LCD phone prefer karo." },
          { q: "Sirf low brightness pe flicker hoti hai?", a: "PWM dimming low brightness pe zyada aggressive hoti hai. 50%+ brightness pe flicker significantly kam ho jaati hai. DC dimming best solution hai." },
          { q: "All apps mein flicker ho rahi hai ya kisi ek mein?", a: "All apps mein ho rahi to hardware PWM flicker hai. Sirf ek app mein ho rahi to app-specific overlay issue hai. App uninstall karo." },
          { q: "Screen replacement se flicker fix hogi?", a: "Agar display panel fault hai to haan. Lekin PWM flicker phone ke design limit hai \u2014 replacement se bhi nahi fix hogi. DC dimming on karo ya brightness high rakho." }
        ],
        related: [
          { title: "Phone Screen Black Ho Gayi Hai", slug: "phone-screen-black-ho-rahi-hai", category: "mobile" },
          { title: "Screen Bahut Dim Dikh Rahi Hai", slug: "phone-screen-brightness-dim", category: "mobile" },
          { title: "Screen Tut Gaya", slug: "screen-tut-gaya", category: "mobile" }
        ],
        keywords: ["screen flickering", "phone screen flicker", "display blinking", "screen brightness flickering"],
        variants: ["screen flicker kar rahi hai", "phone screen blink kar rahi hai", "display flickering ho rahi hai", "screen up down ho rahi hai", "phone screen flickering problem", "brightness automatically change ho rahi hai"]
      },
      {
        slug: "phone-factory-reset-kaise-kare",
        category: "mobile",
        metaTitle: "Phone Factory Reset Kaise Kare? Data Backup Pehle (2026) | JharForm",
        metaDescription: "Phone factory reset kaise karein? Data backup kaise karein? Reset ke baad kya hoga? Factory reset ka complete step-by-step guide with data safety.",
        h1: "Factory Reset Kaise Kare \u2014 Data Backup + Reset Guide",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Easy",
        description: "Phone factory reset karna hai \u2014 hang ho raha hai, virus aa gaya, slow ho gaya, ya bechne se pehle. Factory reset sab data delete kar deta hai aur phone ko jaise naya bana deta hai. Pehle data backup karna zaroori hai \u2014 photos, contacts, messages, aur app data sab delete ho jaata hai. Google account se kuchh data auto-restore ho sakta hai.",
        steps: [
          { title: "Data backup karo", detail: "Google Photos: Auto-backup on rakho. Contacts: Google Contacts sync on rakho. WhatsApp: Settings > Chats > Chat Backup > Google Drive. SMS: SMS Backup & Restore app." },
          { title: "Google account sync check karo", detail: "Settings > Accounts > Google > Account Sync. Contacts, Calendar, Photos, aur Drive sab sync hona chahiye. Sync complete hone do." },
          { title: "Remove Google account (security)", detail: "Settings > Accounts > Google > Remove Account. Yaad rahe: factory reset ke baad FRP (Factory Reset Protection) activate ho jaata hai. Same Google account chahiye setup ke waqt." },
          { title: "Settings se factory reset karo", detail: "Settings > System > Reset > Factory Data Reset / Erase All Data. 'Erase all data' confirm karo. Phone restart hoga aur 5-10 min mein reset complete hoga." },
          { title: "Recovery mode se factory reset karo", detail: "Phone band karo. Power + Volume Up 10 second press karo. Recovery mode aa jaayega. 'Wipe data/factory reset' select karo. Volume buttons se navigate, power se select." },
          { title: "Setup karo reset ke baad", detail: "Phone first boot jaisa hoga. WiFi connect karo. Google account login karo. 'Restore from backup' pe tap karo. Apps, contacts, aur settings auto-restore honge." },
          { title: "FRP bypass mat karo", detail: "FRP lock legal hai \u2014 chori hua phone use na ho sake. Same Google account se login karo. Bill/Proof of purchase le jao service center agar account bhool gaye." },
          { title: "Second-hand bechne se pehle extra steps", detail: "Settings > Accounts > sab accounts remove karo. Settings > Google > Ads > Reset Advertising ID. Settings > Security > Screen Lock > None. Phir factory reset karo." }
        ],
        screenshots: [
          { caption: "Settings > System > Reset showing Factory Data Reset option with warning about data deletion", alt: "Android system reset menu showing factory data reset option with data deletion warning", type: "phone", mockupType: "android-settings-system" },
          { caption: "Recovery mode menu showing Wipe Data Factory Reset option with volume button navigation instructions", alt: "Android recovery mode showing wipe data factory reset option with navigation instructions", type: "phone", mockupType: "android-settings-system" }
        ],
        proTips: ["Factory reset se pehle battery 50%+ honi chahiye ya charger pe lagao", "SD card nikaal lo reset se pehle \u2014 kuchh phones SD card data bhi delete kar deti hain", "Phone bechne se pehle 2 baar factory reset karo \u2014 data recovery impossible ho jaata hai"],
        faqs: [
          { q: "Factory reset se sab data delete hota hai?", a: "Haan \u2014 internal storage ka sab data. SD card pe depend karta hai \u2014 kuchh phones SD card bhi format kar deti hain. Google Drive pe backed up data safe hai." },
          { q: "Factory reset ke baad Google account se data wapas aa sakta hai?", a: "Contacts, Calendar, Photos, aur app list aa jaati hai. App data, messages, aur local files nahi aayengi. WhatsApp backup restore kar sakte ho." },
          { q: "Phone locked hai \u2014 factory reset kaise karu?", a: "Recovery mode se kar sakte ho. Power + Volume Up. Lekin FRP lock hoga \u2014 same Google account chahiye setup mein." },
          { q: "Factory reset se phone naya jaise chalega?", a: "Software level haan \u2014 jaise naya. Lekin hardware aging (battery, screen) same rahega. 2+ saal purane phone mein improvement temporary hota hai." }
        ],
        related: [
          { title: "Mobile Hang Ho Raha Hai", slug: "mobile-hang-ho-raha-hai", category: "mobile" },
          { title: "Storage Full Hai", slug: "storage-full-hai", category: "mobile" },
          { title: "Mobile Mein Virus Aa Gaya", slug: "mobile-viruses-malware", category: "mobile" }
        ],
        keywords: ["factory reset kaise kare", "phone factory reset", "mobile reset kaise kare", "android factory reset"],
        variants: ["phone factory reset kaise kare", "mobile reset kaise karein", "phone data delete kaise kare", "factory reset karne ka tarika", "phone format kaise kare", "android phone reset kaise kare"]
      },
      {
        slug: "phone-screen-unresponsive-freeze",
        category: "mobile",
        metaTitle: "Phone Screen Freeze Ho Rahi Hai? Touch Nahi Respond Kar Rahi? Fix (2026) | JharForm",
        metaDescription: "Phone screen freeze ho gayi hai, touch respond nahi kar rahi, phone kaam kar raha par screen stuck hai? Screen freeze/unresponsive fix guide.",
        h1: "Screen Freeze Ho Rahi Hai \u2014 Touch Unresponsive Fix",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Phone screen freeze ho gayi hai \u2014 touch respond nahi kar rahi, display stuck hai par phone background mein chal raha hai, ya screen completely unresponsive hai. Yeh software hang, app crash, low RAM, overheating, ya system process freeze ki wajah se hota hai. Force restart se 80% cases mein fix ho jaata hai. Screen physically theek hai par software ne hang kar liya hai.",
        steps: [
          { title: "Force restart karo", detail: "Power button + Volume Down 15-20 second tak press karo. Phone vibrate hoga aur restart hoga. Screen freeze software hang fix hota hai force restart se." },
          { title: "Wait 1-2 minute", detail: "System process hang ho to 1-2 minute wait karne se auto-recover ho sakta hai. Heavy app load ho raha ho to time lagta hai. Screen black ho to phone restart ho raha hai." },
          { title: "Charger lagao", detail: "Battery 0% pe ho to screen freeze lagta hai. Charger lagao 5-10 minute. Battery icon dikhe to phone on ho raha hai." },
          { title: "Safe mode mein boot karo", detail: "Power off hone ke baad Power button press karo. 'Safe Mode' text dikhe pe Volume Down press karo. Safe mode mein freeze nahi ho rahi to third-party app cause hai." },
          { title: "Recent heavy app uninstall karo", detail: "Screen freeze kis app ke use ke baad ho rahi hai? Wo app uninstall karo. Heavy games, video editors, ya poorly coded apps system hang kar sakti hain." },
          { title: "Storage aur RAM free karo", detail: "Storage full hone se swap/use hota hai jo slow/freeze deta hai. 2GB+ free karo. Background apps close karo. Lite apps install karo." },
          { title: "Overheating cool down karo", detail: "Phone garam hone se CPU intentionally slow ho jaata hai (thermal throttling). Phone ko thanda hone do 10-15 minute. Fan ke saamne rakh do. AC room mein rakh do." },
          { title: "Factory reset agar frequent ho raha hai", detail: "Roz screen freeze ho raha hai to software corruption hai. Factory reset karo. Pehle data backup karo. Clean install se 95% freeze issues fix hote hain." }
        ],
        screenshots: [
          { caption: "Phone screen showing frozen app UI with no touch response and system navigation buttons unresponsive", alt: "Android phone showing frozen screen with app UI stuck and no touch response", type: "phone", mockupType: "android-settings-system" },
          { caption: "Phone booting into Safe Mode with black screen and Safe Mode text at bottom left corner", alt: "Android phone boot screen showing safe mode text indicator at bottom left", type: "phone", mockupType: "android-settings-system" }
        ],
        proTips: ["Heavy games ke waqt phone cool rakhne se freeze kam hoga", "RAM 4GB se kam ho to ek hi heavy app use karo", "Weekly restart freeze issues prevent karta hai"],
        faqs: [
          { q: "Screen freeze ho rahi hai par phone background mein chal raha hai?", a: "Display/touch driver hang ho gaya hai. Force restart karo. System process freeze ho gaya hai. Restart se reload hoga." },
          { q: "Baar baar screen freeze ho rahi hai roz?", a: "Software corruption, failing storage, ya insufficient RAM. Factory reset karo. Storage 5GB+ free rakho. Lite apps use karo." },
          { q: "Screen freeze drop ke baad ho raha hai?", a: "Touch digitizer ya display connector loose ho gaya hai. Hardware issue hai. Service center le jao. Cost Rs. 1000-3000." },
          { q: "Screen freeze aur hang mein kya farak hai?", a: "Hang mein phone completely stop ho jaata hai. Freeze mein sirf screen/touch stuck hai par phone background mein kaam kar raha hai. Dono ka fix same hai." }
        ],
        related: [
          { title: "Mobile Hang Ho Raha Hai", slug: "mobile-hang-ho-raha-hai", category: "mobile" },
          { title: "Phone Screen Black Ho Gayi Hai", slug: "phone-screen-black-ho-rahi-hai", category: "mobile" },
          { title: "Phone Bahut Garam Ho Raha Hai", slug: "phone-heat-ho-raha-hai", category: "mobile" }
        ],
        keywords: ["screen freeze", "phone screen unresponsive", "phone freeze fix", "android screen stuck"],
        variants: ["phone screen freeze ho gayi", "phone touch respond nahi kar rahi", "screen freeze ho rahi hai", "phone stuck hai", "screen unresponsive ho gayi", "phone freeze ho raha hai"]
      },
      {
        slug: "phone-nfc-not-working",
        category: "mobile",
        metaTitle: "Phone NFC Nahi Kaam Kar Raha? UPI Tap Pay Fail Ho Raha? Fix (2026) | JharForm",
        metaDescription: "Phone ka NFC UPI tap payment mein kaam nahi kar raha, card reader pe tap karne par kuchh nahi ho raha? NFC problem ka complete fix.",
        h1: "NFC Nahi Kaam Kar Raha \u2014 UPI Tap Pay Fix",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Phone ka NFC (Near Field Communication) kaam nahi kar raha \u2014 UPI tap-and-pay POS machine pe tap karne par kuchh nahi ho raha, card reader detect nahi ho raha, ya 'NFC not detected' error aa raha hai. Yeh NFC off, case interference, app permissions, ya hardware fault ki wajah se hota hai. Metro cards, UPI tap pay, aur file share mein NFC zaroori hai.",
        steps: [
          { title: "NFC on karo", detail: "Quick settings mein NFC tile tap karo ON karo. Ya Settings > Connections > NFC and Contactless Payments > On. NFC by default off hota hai security ke liye." },
          { title: "Default payment app set karo", detail: "Settings > Connections > NFC > Contactless Payments > Default Payment App. Google Pay, PhonePe, ya Paytm select karo. Payment app mein NFC permission on honi chahiye." },
          { title: "Case hata ke try karo", detail: "Metal cases, thick cases (3mm+), aur wallet cases NFC signal block kar deti hain. Case hata ke tap karo. Ya NFC-compatible case lagao." },
          { title: "Phone ko sahi position mein rakho", detail: "Har phone ka NFC antenna alag jagah hoti hai. Google: back center. Samsung: upper back. iPhone: top back. 1-2 cm doori pe tap karo. Zyada doori pe work nahi karta." },
          { title: "NFC cache clear karo", detail: "Settings > Apps > Show system apps > NFC Service > Storage > Clear Cache. Corrupt NFC cache pairing issues deta hai." },
          { title: "Phone restart karo", detail: "NFC subsystem reload hoga. Payment app refresh hogi. Kabhi kabhi background payment service hang ho jaati hai." },
          { title: "Payment app re-setup karo", detail: "Payment app (GPay/PhonePe) se card remove karke wapas add karo. NFC card provisioning dobara ho jayegi. Card details re-verify honge." },
          { title: "Service center le jao", detail: "NFC antenna/IC damage ho to motherboard-level repair chahiye. Cost: Rs. 1000-3000. NFC antenna back cover ke saath integrated hoti hai \u2014 back cover replacement bhi fix kar sakta hai." }
        ],
        screenshots: [
          { caption: "Settings > Connections showing NFC toggle ON with Default Payment App set to Google Pay", alt: "Android NFC settings showing NFC enabled with Google Pay as default payment app", type: "phone", mockupType: "android-settings-system" },
          { caption: "Phone tapping on POS card reader showing contactless payment icon and UPI payment processing screen", alt: "Phone NFC tap payment on POS machine showing contactless symbol and processing", type: "phone", mockupType: "android-settings-system" }
        ],
        proTips: ["NFC sirf 4cm range kaam karta hai \u2014 phone ko close rakho", "POS machine pe NFC icon/symbol dikhe tabhi tap karo", "NFC + Google Pay combo sabse fast UPI payment hai \u2014 QR se bhi fast"],
        faqs: [
          { q: "NFC se payment safe hai?", a: "Haan \u2014 4cm range aur tokenization use hota hai. Actual card number share nahi hota. PIN/biometric verification bhi hoti hai transactions pe." },
          { q: "Kya har phone mein NFC hota hai?", a: "Nahi \u2014 budget phones (under Rs. 10000) mostly nahi hota. Mid-range aur flagships mein common hai. Phone specs mein 'NFC' mention hota hai." },
          { q: "NFC se file transfer kaise kare?", a: "Android Beam (deprecated) ya Nearby Share use karo. Samsung: Quick Share. Files photos videos NFC se quickly share ho jaate hain same phone touch karke." },
          { q: "NFC card clone ho sakta hai?", a: "Technically haan par encrypted cards (credit/debit/UPI) clone nahi hote. Unencrypted metro cards/access cards clone ho sakti hain." }
        ],
        related: [
          { title: "Phone Hang Ho Raha Hai", slug: "mobile-hang-ho-raha-hai", category: "mobile" },
          { title: "Mobile Internet Nahi Chal Raha", slug: "mobile-internet-nahi-chal-raha", category: "mobile" },
          { title: "Mobile Pattern Lock Bhool Gaya", slug: "mobile-pattern-lock-bhool-gaya", category: "mobile" }
        ],
        keywords: ["nfc not working", "phone nfc problem", "upi tap pay not working", "nfc payment failed"],
        variants: ["nfc nahi kaam kar raha", "phone nfc nahi chal raha", "upi tap payment nahi ho raha", "nfc card reader detect nahi ho raha", "phone nfc tap nahi kaam kar raha", "contactless payment nahi ho rahi"]
      },
      {
        slug: "phone-speaker-volume-low",
        category: "mobile",
        metaTitle: "Phone Speaker Ki Awaaz Bahut Kam Aa Rahi Hai? Volume Low Fix (2026) | JharForm",
        metaDescription: "Phone speaker ki awaaz bahut kam aa rahi hai, call mein doosra side sun nahi pa raha, ya media volume max pe bhi kam hai? Speaker volume low fix.",
        h1: "Speaker Volume Bahut Kam Aa Rahi Hai \u2014 Low Audio Fix",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Phone speaker (bottom loudspeaker) ki awaaz bahut kam aa rahi hai \u2014 videos YouTube mein kam sunai de rahi hain, call speaker mode mein awaaz nahi aa rahi, ya ringtones bahut kam baj rahi hain. Yeh speaker grill blockage, water/liquid in speaker, software equalizer settings, ya speaker hardware degradation ki wajah se hota hai. Ear speaker (call speaker) alag component hota hai \u2014 bottom speaker media aur ringtone ke liye hota hai.",
        steps: [
          { title: "Volume maximum karo aur mute off karo", detail: "Volume up button se max karo. Media volume, ring volume, aur call volume alag alag hoti hain. Quick settings mein volume slider se sab check karo. Mute switch off hona chahiye." },
          { title: "Speaker grill saaf karo", detail: "Bottom speaker grill (charging port ke paas) ko soft brush se saaf karo. Compressed air se blow karo. Dust, lint, aur pocket debris volume 50% tak kam kar deti hai." },
          { title: "Water eject karo", detail: "Speaker mein paani gaya ho to FixMySpeaker.com pe jao. Eject sound bass play hoga. Ya Speaker Cleaner app install karo. Bass tones se paani nikalti hai." },
          { title: "Disable audio enhancements", detail: "Settings > Sound > Advanced > Disable all sound effects / Equalizer. Dolby Atmos, Samsung SoundAlive, ya custom EQ volume kam kar sakti hain. Off karo." },
          { title: "Mono audio on karo (accessibility)", detail: "Settings > Accessibility > Audio & Visual > Mono Audio > On. Left/right channel mix mono mein aa jaata hai. Ek speaker damage ho to dusre se full audio milega." },
          { title: "Safe mode mein check karo", detail: "Safe mode mein speaker volume sahi ho to third-party equalizer/ sound enhancer app conflict kar rahi hai. AudioFX, Viper4Android, jaise apps uninstall karo." },
          { title: "Phone restart karo", detail: "Audio subsystem glitch se volume low ho sakta hai. Restart se audio drivers reload honge." },
          { title: "Service center le jao", detail: "Speaker diaphragm damage ya coil weak ho gayi hai. Speaker replacement chahiye. Cost: Local Rs. 300-800, Authorized Rs. 800-1500. Simple component replacement hai." }
        ],
        screenshots: [
          { caption: "Settings > Sound showing all volume sliders at maximum with media call and ring volumes individually set to 100%", alt: "Android sound settings showing media call and ring volume sliders all at maximum level", type: "phone", mockupType: "android-settings-volume" },
          { caption: "Bottom speaker grill closeup showing dust lint and debris accumulation blocking speaker holes", alt: "Phone bottom speaker grill closeup showing accumulated dust and lint blocking speaker holes", type: "phone", mockupType: "android-settings-volume" }
        ],
        proTips: ["Bass-heavy music se speaker damage hota hai \u2014 volume 80% se kam rakho", "Water-resistant phones mein speaker mein mesh hota hai \u2014 dry cleaning se saaf karo", "Stereo speakers wale phones mein ek speaker damage ho to mono audio se workaround milta hai"],
        faqs: [
          { q: "Sirf videos mein awaaz kam aa rahi hai calls mein sahi hai?", a: "Media volume alag hoti hai call volume se. Volume up button media volume ko adjust karta hai jab koi media chal raha ho. Call mein ear speaker alag hota hai." },
          { q: "Speaker mein paani gaya ho to?", a: "Speaker cleaner app se bass tones se paani nikalo. Gravity se niche karke tap karo. 24 ghante dry karne do. Nahi fix hua to speaker replacement chahiye." },
          { q: "Ear speaker kaam kar raha hai bottom speaker nahi?", a: "Dono alag components hain. Bottom speaker damage hai. Mono audio on kar lo temporary workaround ke liye. Speaker replacement karwao." },
          { q: "Bluetooth speaker se awaaz sahi aa rahi hai phone speaker se kam?", a: "Phone speaker hardware issue confirmed hai. Bluetooth audio bypass karta hai phone speaker. Service center le jao speaker replacement ke liye." }
        ],
        related: [
          { title: "Speaker Aur Mic Nahi Chal Raha", slug: "speaker-aur-mic-nahi-chal-raha", category: "mobile" },
          { title: "Headphone Jack Nahi Chal Raha", slug: "mobile-headphone-jack-nahi-chal-raha", category: "mobile" },
          { title: "Call Drop Ho Rahi Hai", slug: "call-drop-ho-rahi-hai", category: "mobile" }
        ],
        keywords: ["speaker volume low", "phone speaker quiet", "android speaker volume", "speaker audio low"],
        variants: ["phone speaker awaaz kam aa rahi hai", "speaker volume bahut low hai", "phone mein awaaz kam aa rahi hai", "speaker ki awaaz bahut kam hai", "phone loudspeaker volume low", "speaker se kam sound aa rahi hai"]
      },
      {
        slug: "phone-mobile-hotspot-nahi-chal-raha",
        category: "mobile",
        metaTitle: "Phone Mobile Hotspot Nahi Chal Raha? WiFi Tethering Fail Fix (2026) | JharForm",
        metaDescription: "Phone ka mobile hotspot on nahi ho raha, WiFi tethering connect nahi ho raha, ya hotspot pe internet nahi aa raha? Mobile hotspot fix guide.",
        h1: "Mobile Hotspot Nahi Chal Raha \u2014 WiFi Tethering Fix",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Phone ka mobile hotspot/WiFi tethering on nahi ho raha \u2014 hotspot toggle on karne pe error aa raha hai, devices connect ho rahi hain par internet nahi aa raha, ya hotspot name/SSID dikhai nahi de raha. Yeh mobile data off, hotspot settings incorrect, device limit reached, carrier restriction, ya software bug ki wajah se hota hai. Hotspot se laptop, tablet, aur dusre phones ko internet share karte hain.",
        steps: [
          { title: "Mobile data on karo", detail: "Hotspot mobile data pe dependent hota hai. Settings > Mobile Data > ON. Mobile data nahi chal rahi to hotspot bhi nahi chalega. Airplane mode off hona chahiye." },
          { title: "Hotspot toggle on karo", detail: "Quick settings se Hotspot tile tap karo. Ya Settings > Connections > Mobile Hotspot and Tethering > Mobile Hotspot > On. Toggle blue/green hona chahiye." },
          { title: "Hotspot settings check karo", detail: "Settings > Hotspot > Configure. SSID (network name) unique honi chahiye. Password 8+ characters. Band 2.4GHz pe rakho maximum compatibility ke liye. 5GHz pe purane devices connect nahi hoti." },
          { title: "Connected device limit check karo", detail: "Settings > Hotspot > Allowed Devices. Maximum 5-10 devices connect ho sakti hain limit ke hisaab se. Purani connections hatao. New devices connect karne do." },
          { title: "Hotspot band 2.4GHz pe set karo", detail: "Settings > Hotspot > Band > 2.4GHz. 5GHz pe older laptops, TVs, aur IoT devices connect nahi hoti hain. 2.4GHz sabse compatible hai." },
          { title: "Data saver/power saving off karo", detail: "Data Saver ya Power Saving mode mein hotspot intentionally restrict ho jaata hai. Dono off karo. Battery saver hotspot connections ko limit kar deta hai." },
          { title: "Phone restart karo", detail: "Hotspot subsystem mein glitch ho sakta hai. Restart se tethering service reload hogi. Network stack refresh hoga." },
          { title: "Carrier restriction check karo", detail: "Kuchh carriers (specially prepaid plans) mein hotspot allowed nahi hota. Carrier app mein plan details check karo. Postpaid plans mein usually included hota hai." }
        ],
        screenshots: [
          { caption: "Settings > Hotspot showing Mobile Hotspot ON with SSID MyPhoneHotspot password set and 2.4GHz band selected", alt: "Android mobile hotspot settings showing hotspot enabled with SSID password and 2.4GHz band", type: "phone", mockupType: "android-settings-hotspot" },
          { caption: "Quick settings panel showing Mobile Hotspot tile active blue with data usage indicator", alt: "Android quick settings showing mobile hotspot tile active with connected devices indicator", type: "phone", mockupType: "android-settings-hotspot" }
        ],
        proTips: ["Hotspot se 2-3 device se zyada connect mat karo \u2014 speed sabko kam milti hai", "Hotspot password hamesha strong rakho \u2014 public places mein unauthorized log connect ho jaate hain", "USB tethering se hotspot se zyada fast aur stable connection milti hai"],
        faqs: [
          { q: "Hotspot on ho raha par internet nahi aa raha connected devices pe?", a: "Mobile data on hai ya nahi check karo. Data limit khatam ho gayi ho sakti hai. APN settings check karo. Phone restart karo." },
          { q: "Hotspot se laptop connect nahi ho rahi?", a: "Hotspot band 2.4GHz pe set karo. Laptop ka WiFi adapter 5GHz support nahi karta ho. Password sahi hai ya nahi check karo." },
          { q: "Hotspot use karne se zyada data lagta hai?", a: "Same data hota hai. Lekin laptop/desktop websites desktop version load karte hain \u2014 3-5x zyada data. Mobile sites se bach ke 50% save kar sakte ho." },
          { q: "USB tethering kaise use kare?", a: "USB cable se phone ko laptop se connect karo. Settings > Hotspot > USB Tethering > On. Wired connection hotspot se zyada fast aur stable hoti hai." }
        ],
        related: [
          { title: "Mobile Internet Nahi Chal Raha", slug: "mobile-internet-nahi-chal-raha", category: "mobile" },
          { title: "Mobile Data Jaldi Khatam Ho Raha Hai", slug: "mobile-data-usage-jaldi-khatam", category: "mobile" },
          { title: "WiFi Connect Nahi Ho Raha", slug: "wifi-not-connecting", category: "mobile" }
        ],
        keywords: ["mobile hotspot not working", "phone hotspot not working", "wifi tethering failed", "hotspot not turning on"],
        variants: ["phone hotspot nahi chal raha", "mobile hotspot nahi on ho raha", "wifi tethering nahi kaam kar rahi", "hotspot se internet nahi aa raha", "phone hotspot connect nahi ho raha", "tethering nahi chal rahi phone mein"]
      },
      {
        slug: "phone-keyboard-typing-issue",
        category: "mobile",
        metaTitle: "Phone Keyboard Nahi Kaam Kar Raha? Typing Issue Fix (2026) | JharForm",
        metaDescription: "Phone keyboard nahi aa raha, type karne mein delay ho raha hai, ya autocorrect galat words daal raha hai? Keyboard problem ka complete fix.",
        h1: "Phone Keyboard Nahi Kaam Kar Raha \u2014 Typing Issue Fix",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Phone keyboard nahi aa raha \u2014 type karne pe keyboard pop-up nahi ho raha, keys press karne mein delay ho raha hai, autocorrect galat words daal raha hai, ya keyboard app crash ho rahi hai. Yeh keyboard app cache corrupt, default keyboard change, outdated keyboard app, ya software glitch ki wajah se hota hai. 90% cases mein simple reset se fix ho jaata hai.",
        steps: [
          { title: "Keyboard app force stop karo", detail: "Settings > Apps > Keyboard (Gboard/SwiftKey/Samsung Keyboard) > Force Stop. Keyboard reload hoga. Temporary glitch fix hota hai." },
          { title: "Keyboard cache clear karo", detail: "Settings > Apps > Keyboard > Storage > Clear Cache. Personal dictionary safe rehti hai. Learned words aur autocorrect data delete hoga." },
          { title: "Default keyboard set karo", detail: "Settings > System > Languages & Input > Virtual Keyboard > Manage Keyboards. Default keyboard select karo. Disable aur re-enable karo." },
          { title: "Gboard update karo ya reinstall karo", detail: "Play Store > Gboard > Update. Ya uninstall updates karo: Settings > Apps > Gboard > three dots > Uninstall Updates. Phir latest install karo." },
          { title: "Autocorrect aur predictions off karo", detail: "Keyboard settings mein Text Correction > Auto-correction > Off. Aur Predictive text > Off. Temporary workaround hai taaki type kar sakte ho." },
          { title: "Safe mode mein check karo", detail: "Safe mode mein keyboard kaam kare to third-party app conflict hai. Recently installed keyboard themes, stickers, ya keyboard apps uninstall karo." },
          { title: "Keyboard size aur layout adjust karo", detail: "Keyboard settings > Preferences > Keyboard Height > Tall/Mid. One-handed mode off karo. Layout QWERTY confirm karo." },
          { title: "Phone restart karo", detail: "System keyboard service mein glitch ho to restart se fix hota hai. Input method framework reload hoga." }
        ],
        screenshots: [
          { caption: "Keyboard settings showing Gboard as default virtual keyboard with autocorrect and predictive text toggles", alt: "Android keyboard settings showing Gboard as default with text correction options", type: "phone", mockupType: "android-settings-keyboard" },
          { caption: "Keyboard app showing Force Stop and Clear Cache buttons in app info screen", alt: "Android app info screen for keyboard app showing force stop and clear cache options", type: "phone", mockupType: "android-settings-keyboard" }
        ],
        proTips: ["Gboard mein glide typing on rakho \u2014 speed 2x hoti hai", "Keyboard theme heavy hote hain \u2014 light theme use karo", "Hinglish typing ke liye Gboard ka Hindi (Roman) input best hai"],
        faqs: [
          { q: "Keyboard type karte waqt delay ho raha hai?", a: "Low RAM ya too many background apps. Background apps close karo. Ya Lite keyboard apps try karo. Storage 1GB+ free honi chahiye." },
          { q: "Autocorrect hamesha galat words daal raha hai?", a: "Personal dictionary clear karo: Keyboard Settings > Dictionary > Clear. Ya autocorrect temporarily off karo. New words manually add karo." },
          { q: "Keyboard pop-up hi nahi ho raha?", a: "Default keyboard set nahi hai. Settings > Keyboard > Default keyboard select karo. Ya keyboard app crash ho rahi hai \u2014 reinstall karo." },
          { q: "Third-party keyboard safe hai?", a: "Reputable ones (Gboard, SwiftKey, Microsoft) safe hain. Unknown Chinese/Indian keyboard apps se bacho \u2014 keylogger ho sakte hain." }
        ],
        related: [
          { title: "Mobile Hang Ho Raha Hai", slug: "mobile-hang-ho-raha-hai", category: "mobile" },
          { title: "Storage Full Hai", slug: "storage-full-hai", category: "mobile" },
          { title: "Phone Screen Black Ho Gayi Hai", slug: "phone-screen-black-ho-rahi-hai", category: "mobile" }
        ],
        keywords: ["phone keyboard not working", "android keyboard issue", "typing delay phone", "keyboard app crash"],
        variants: ["phone keyboard nahi aa raha", "type karne mein delay ho raha hai", "keyboard nahi kaam kar raha", "autocorrect galat daal raha hai", "phone mein keyboard band ho gaya", "typing nahi ho rahi phone mein"]
      },
      {
        slug: "phone-ringtone-nahi-baj-rahi",
        category: "mobile",
        metaTitle: "Phone Ringtone Nahi Baj Rahi? Call Silent Fix (2026) | JharForm",
        metaDescription: "Phone mein call aa rahi par ringtone nahi baj rahi, phone silent ho gaya hai, ya notification sound nahi aa rahi? Ringtone problem ka complete fix.",
        h1: "Ringtone Nahi Baj Rahi \u2014 Call Silent Fix",
        lastUpdated: "May 2026",
        readingTime: "3 min",
        difficulty: "Easy",
        description: "Phone mein call aa rahi par ringtone nahi baj rahi \u2014 phone bilkul silent ho gaya hai, sirf vibration ho rahi hai, ya notification sounds bhi band ho gayi hain. Yeh silent mode on, Do Not Disturb mode, volume zero, broken speaker, ya ringtone file corrupt ki wajah se hota hai. Missed calls ka sabse common reason hai.",
        steps: [
          { title: "Silent mode off karo", detail: "Volume up button press karo taaki silent mode off ho. Ya side ka mute switch (iPhone) off karo. Screen pe ringer volume indicator aa jaayega." },
          { title: "Volume maximum karo", detail: "Settings > Sound > Ring Volume. Slider ko max pe karo. Media volume alag hoti hai \u2014 ring volume separately adjust karo." },
          { title: "Do Not Disturb mode off karo", detail: "Quick settings se DND off karo. Ya Settings > Sound > Do Not Disturb > Off. DND mein sirf allowed calls aa sakti hain." },
          { title: "Default ringtone check karo", detail: "Settings > Sound > Ringtone. 'None' select na ho. Koi ringtone select karo jo phone mein available hai. Custom ringtone corrupt ho to default pe switch karo." },
          { title: "Speaker grill saaf karo", detail: "Bottom speaker grill ko soft brush se saaf karo. Dust aur lint se ringtone muffled ya kam ho jaati hai." },
          { title: "Mono audio on karo", detail: "Settings > Accessibility > Audio > Mono Audio > On. Agar ek speaker damage ho to mono audio se dusre se full awaaz milegi." },
          { title: "Phone restart karo", detail: "Audio service glitch se ringtone band ho sakti hai. Restart se audio subsystem reload hoga." }
        ],
        screenshots: [
          { caption: "Settings > Sound showing Ring Volume at maximum with Silent Mode OFF and Do Not Disturb OFF", alt: "Android sound settings showing ring volume at max with silent mode and DND both disabled", type: "phone", mockupType: "android-settings-ringtone" },
          { caption: "Ringtone selection screen showing default ringtone selected with preview play button", alt: "Android ringtone selection screen showing default ringtone with play preview button", type: "phone", mockupType: "android-settings-ringtone" }
        ],
        proTips: ["Different ringtone har contact ko set karo \u2014 important calls identify karne mein aasan hota hai", "Silent mode ke jagah priority mode use karo \u2014 important calls aa jaayengi", "Vibrate + ringtone dono on rakho \u2014 noisy places mein kaam aata hai"],
        faqs: [
          { q: "Ringtone baj rahi par bahut kam aa rahi hai?", a: "Speaker partially blocked hai ya volume low hai. Speaker grill saaf karo. Volume max karo. Mono audio on karo." },
          { q: "Sirf ek specific number ki call pe ringtone nahi baj rahi?", a: "Us contact ka custom ringtone 'None' set ho sakti hai. Contact details mein ringtone check karo." },
          { q: "Phone pocket mein hone par ringtone kam sunai deti hai?", a: "Pocket fabric sound absorb karti hai. Vibration on rakho. Loud ringtone select karo. Pocket se phone nikaal lo jab available ho." },
          { q: "Headphones lagane par ringtone headphones mein aa rahi hai?", a: "Default behavior hai \u2014 audio routing headphones pe hoti hai. Headphones nikaalne par speaker se bajegi. Bluetooth connected ho to speaker se nahi bajegi." }
        ],
        related: [
          { title: "Speaker Aur Mic Nahi Chal Raha", slug: "speaker-aur-mic-nahi-chal-raha", category: "mobile" },
          { title: "Notifications Nahi Aa Rahi", slug: "phone-notification-nahi-aa-rahi", category: "mobile" },
          { title: "Phone Vibrate Nahi Kar Raha", slug: "phone-vibrate-nahi-kar-raha", category: "mobile" }
        ],
        keywords: ["ringtone not working", "phone not ringing", "call silent android", "notification sound not working"],
        variants: ["phone ringtone nahi baj rahi", "call aa rahi par phone nahi baj raha", "phone silent ho gaya", "ringtone band ho gayi", "phone mein awaaz nahi aa rahi", "call sound nahi aa rahi"]
      },
      {
        slug: "phone-sd-card-not-showing",
        category: "mobile",
        metaTitle: "Phone SD Card / Memory Card Nahi Dikh Rahi? Fix (2026) | JharForm",
        metaDescription: "SD card phone mein detect nahi ho rahi, memory card not showing aa raha hai, ya files nahi dikhai de rahi? SD card problem ka complete fix.",
        h1: "SD Card Nahi Dikh Rahi \u2014 Memory Card Fix",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "SD card / memory card phone mein detect nahi ho rahi \u2014 file manager mein nahi dikhai de rahi, 'SD card removed unexpectedly' error aa raha hai, ya photos/apps SD card pe move nahi ho rahi hain. Yeh loose insertion, corrupt file system, incompatible format, damaged card, ya slot issue ki wajah se hota hai. Modern Android 10+ mein SD card mostly media storage ke liye hoti hai \u2014 apps internal storage pe hi install hoti hain.",
        steps: [
          { title: "SD card nikaal ke wapas lagao", detail: "Phone off karke SD card tray nikaalo. Card saaf microfiber se pocho. Wapas tight lagao. 'Click' awaaz aa jaani chahiye. Loose connection common reason hai." },
          { title: "Dusre device mein check karo", detail: "SD card ko card reader se laptop/PC mein lagao. Agar wahan bhi detect nahi ho rahi to card damage ya corrupt hai. Wahan detect ho rahi to phone ka slot issue hai." },
          { title: "Phone restart karo", detail: "SD card mount service mein glitch ho sakta hai. Restart se storage subsystem reload hoga. SD card auto-detect ho jayegi." },
          { title: "Storage settings mein check karo", detail: "Settings > Storage > SD Card. Agar 'Corrupted' ya 'Unsupported' dikhe to format karna padega. Card ka capacity aur status dikhega." },
          { title: "SD card format karo (data delete hoga)", detail: "Settings > Storage > SD Card > Format. FAT32 ya exFAT format mein karo. Sab data delete hoga. Backup pehle karo agar card detect ho rahi ho." },
          { title: "PC se format karo", detail: "Card reader mein PC pe lagao. Right click > Format. File System: exFAT (32GB+ cards ke liye) ya FAT32. Quick Format karo. Phir phone mein try karo." },
          { title: "Different SD card try karo", detail: "Dusri SD card phone mein lagao. Agar wahan detect ho rahi to pehli card damage/corrupt hai. Nayi card Rs. 300-800 mein milti hai (64-128GB)." },
          { title: "Service center le jao", detail: "SD card slot physically damage ho to motherboard-level repair chahiye. Cost: Rs. 500-1500. Rare hai \u2014 zyaadatar card issue hota hai." }
        ],
        screenshots: [
          { caption: "Settings > Storage showing SD Card with 59GB used of 64GB and format option highlighted", alt: "Android storage settings showing SD card usage with format option available", type: "phone", mockupType: "android-settings-sdcard" },
          { caption: "SD card tray ejected showing microSD card with visible scratch marks and tarnished gold contacts", alt: "Phone SD card tray with microSD card showing contacts and physical condition", type: "phone", mockupType: "android-settings-sdcard" }
        ],
        proTips: ["Hamesha Class 10 / UHS-1 SD card kharido \u2014 slow cards apps ko hang kar deti hain", "SD card ko regularly backup karo \u2014 cards fail ho sakti hain", "Internal storage prefer karo \u2014 SD card 10x slower hoti hai"],
        faqs: [
          { q: "SD card pe apps install ho sakti hain?", a: "Android 6+ mein adoptable storage se ho sakti hai par slow performance deti hai. Android 10+ mein mostly restricted hai. Photos/videos/music ke liye best hai." },
          { q: "SD card corrupt ho gayi hai \u2014 data recover ho sakta hai?", a: "PC pe card reader se lagao. Data recovery software (Recuva, DiskDigger) se recover kar sakte ho. Format mat karo pehle." },
          { q: "Kaun sa SD card format best hai?", a: "exFAT: best for 64GB+ cards, large files support. FAT32: 32GB tak, universal compatibility. NTFS: Android support nahi karti." },
          { q: "SD card slow ho gayi hai \u2014 speed kaise check karu?", a: "A1/A2 rated cards fast hoti hain. Class 10 minimum chahiye. Write speed 10MB/s+ honi chahiye. A2 rated cards app performance ke liye best hain." }
        ],
        related: [
          { title: "Storage Full Hai", slug: "storage-full-hai", category: "mobile" },
          { title: "Mobile Hang Ho Raha Hai", slug: "mobile-hang-ho-raha-hai", category: "mobile" },
          { title: "Mobile Internet Nahi Chal Raha", slug: "mobile-internet-nahi-chal-raha", category: "mobile" }
        ],
        keywords: ["sd card not detected", "memory card not showing", "phone sd card problem", "sd card removed unexpectedly"],
        variants: ["sd card nahi dikh rahi", "memory card phone mein detect nahi ho rahi", "phone mein sd card nahi aa rahi", "sd card not showing", "memory card nahi chal rahi", "sd card removed error aa raha hai"]
      },
      {
        slug: "phone-safe-mode-nikale-kaise",
        category: "mobile",
        metaTitle: "Phone Safe Mode Mein Atak Gaya? Safe Mode Se Bahar Kaise Nikle (2026) | JharForm",
        metaDescription: "Phone safe mode mein atak gaya hai, apps kaam nahi kar rahi, ya safe mode se bahar nahi aa raha? Safe mode exit ka complete guide.",
        h1: "Safe Mode Se Bahar Kaise Nikle \u2014 Safe Mode Exit Guide",
        lastUpdated: "May 2026",
        readingTime: "3 min",
        difficulty: "Easy",
        description: "Phone safe mode mein atak gaya hai \u2014 screen corner pe 'Safe Mode' text dikhai de rahi hai, third-party apps greyed out ho gayi hain, widgets kaam nahi kar rahi hain, ya phone safe mode se bahar nahi aa raha hai. Safe mode troubleshooting ke liye hota hai \u2014 third-party apps temporarily disable ho jaati hain taaki pata chale ki koi app system ko affect kar rahi hai ya nahi. Normal restart se zyaadatar phones safe mode se bahar aa jaate hain.",
        steps: [
          { title: "Normal restart karo", detail: "Power button long press karo. 'Restart' pe tap karo. 90% phones restart ke baad safe mode se bahar aa jaate hain. Simple restart se fix hota hai." },
          { title: "Power off completely karke on karo", detail: "Power button > Power Off. Phone completely band hone do 30 second. Phir Power button se on karo. Safe mode se bahar aa jaana chahiye." },
          { title: "Volume button trick (some phones)", detail: "Power off hone ke baad Power button press karo. Phone logo aane ke baad Volume Down button continuously press karo. 'Safe Mode' text dikhe to Volume Up press karo safe mode exit karne ke liye." },
          { title: "Notification panel se safe mode off karo (Samsung)", detail: "Notification panel neeche kheencho. 'Safe Mode On' notification dikhega. Uspe tap karo. 'Turn Off' pe tap karo. Phone restart hoga normal mode mein." },
          { title: "ADB se safe mode off karo (advanced)", detail: "Phone PC se connect karo. ADB command: adb shell am broadcast -a android.intent.action.BOOT_COMPLETED. Ya adb reboot. Restart se safe mode clear hota hai." },
          { title: "Settings mein safe mode toggle check karo", detail: "Kuchh custom ROMs mein Settings > Developer Options > Safe Mode toggle hota hai. Off karo. Samsung mein notification panel se easy hota hai." },
          { title: "Factory reset agar stuck ho raha hai", detail: "Agar phone safe mode mein hi restart ho raha hai to software corruption hai. Recovery mode se factory reset karo. Data backup nahi hai to sab delete hoga." }
        ],
        screenshots: [
          { caption: "Phone screen showing Safe Mode text at bottom left corner with third-party apps greyed out", alt: "Android phone home screen showing safe mode indicator at bottom left with disabled third-party apps", type: "phone", mockupType: "android-settings-safemode" },
          { caption: "Notification panel showing Safe Mode is ON tap to turn off option with restart button", alt: "Android notification panel showing safe mode active with tap to turn off and restart option", type: "phone", mockupType: "android-settings-safemode" }
        ],
        proTips: ["Safe mode mein sirf system apps chalti hain \u2014 yeh normal hai", "Safe mode mein virus scan karo \u2014 malware detect hone pe easy remove hota hai", "Safe mode boot hone ka matlab recently installed app ne problem ki hai"],
        faqs: [
          { q: "Safe mode mein third-party apps kyu nahi chal rahi?", a: "Yeh by design hai \u2014 safe mode sirf pre-installed system apps chalata hai taaki pata chale ki third-party app ne system affect kiya hai ya nahi." },
          { q: "Phone baar baar safe mode mein boot ho raha hai?", a: "Recently installed app ne system files modify kar di hain. Safe mode mein wo apps uninstall karo jo recently install ki thi. Ya factory reset karo." },
          { q: "Safe mode mein data delete hota hai?", a: "Nahi \u2014 safe mode sirf apps temporarily disable karta hai. Sab data safe rehta hai. Safe mode se bahar aate hi sab apps normal chalti hain." },
          { q: "Safe mode aur recovery mode mein kya farak hai?", a: "Safe Mode: Android chalta hai par third-party apps disable. Recovery Mode: Android nahi chalta \u2014 sirf recovery menu. Factory reset recovery mode se hota hai." }
        ],
        related: [
          { title: "Mobile Hang Ho Raha Hai", slug: "mobile-hang-ho-raha-hai", category: "mobile" },
          { title: "Mobile Mein Virus Aa Gaya", slug: "mobile-viruses-malware", category: "mobile" },
          { title: "Apps Crash Ho Rahi Hain", slug: "phone-app-crash-ho-rahi-hai", category: "mobile" }
        ],
        keywords: ["safe mode exit", "phone stuck in safe mode", "android safe mode turn off", "safe mode nikale kaise"],
        variants: ["phone safe mode mein atak gaya", "safe mode se bahar kaise nikle", "phone safe mode mein aa gaya", "safe mode band kaise kare", "phone safe mode nahi hat raha", "safe mode se exit kaise kare"]
      },
      {
        slug: "phone-screen-time-pin-bhool-gaya",
        category: "mobile",
        metaTitle: "Phone Screen Time PIN Ya Password Bhool Gaya? Reset Kaise Kare (2026) | JharForm",
        metaDescription: "Screen time PIN, parental control password, ya Digital Wellbeing PIN bhool gaya hai? Screen time lock kaise bypass ya reset karein?",
        h1: "Screen Time PIN Bhool Gaya \u2014 Reset Kaise Kare",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Medium",
        description: "Phone ka Screen Time PIN / Digital Wellbeing password bhool gaya hai \u2014 app limits change nahi kar pa rahe, restricted apps open nahi ho rahi, ya parental controls settings access nahi kar pa rahe. Screen Time PIN (iPhone) aur Digital Wellbeing PIN (Android) alag hota hai device lock se. Yeh Google account (Android) ya Apple ID (iPhone) se reset ho sakta hai. Factory reset se bhi remove hota hai par sab data delete hoga.",
        steps: [
          { title: "Android: Google account se reset karo", detail: "Settings > Digital Wellbeing > Dashboard > three dots > Settings > Lock. 'Forgot PIN' pe tap karo. Linked Google account ka password daalo. New PIN set karne dega." },
          { title: "Samsung: Samsung account se reset karo", detail: "Samsung phones mein Settings > Digital Wellbeing > Settings > Lock. 'Forgot PIN' pe Samsung account credentials daalo. Reset ho jaayega." },
          { title: "iPhone: Apple ID se reset karo", detail: "Settings > Screen Time > Change Screen Time Passcode > Forgot Passcode. Apple ID aur password daalo. New passcode set karo. iOS 13.4+ pe yeh feature available hai." },
          { title: "Third-party parental app mein reset karo", detail: "App Lock, Norton Family, ya Qustodio jaise third-party apps mein app ke login se parent dashboard se PIN/lock change kar sakte ho. App uninstall se lock remove ho jaata hai." },
          { title: "ADB se Digital Wellbeing data clear karo (advanced)", detail: "ADB command: adb shell pm clear com.google.android.apps.wellbeing. Digital Wellbeing app data clear hoga. All limits aur locks reset ho jaayenge. USB debugging on honi chahiye." },
          { title: "Safe mode se third-party lock apps remove karo", detail: "Safe mode mein third-party app locks disable ho jaate hain. App Lock, Smart AppLock, ya Norton jaise apps safe mode mein uninstall karo." },
          { title: "Factory reset (last resort)", detail: "Settings > System > Reset > Factory Data Reset. Ya recovery mode se. Screen Time / Digital Wellbeing locks sab reset honge. Sab data delete hoga. Backup zaroori hai." }
        ],
        screenshots: [
          { caption: "Digital Wellbeing settings showing Forgot PIN option with Google account password prompt", alt: "Android digital wellbeing settings showing forgot PIN with Google account verification", type: "phone", mockupType: "android-settings-screentime" },
          { caption: "Screen Time settings showing Change Passcode with Forgot Passcode Apple ID verification option", alt: "iPhone screen time settings showing forgot passcode option with Apple ID verification", type: "phone", mockupType: "android-settings-screentime" }
        ],
        proTips: ["Screen Time PIN hamesha device lock PIN se alag rakho \u2014 confuse nahi honge", "Parental controls ke liye apna hi PIN mat rakho \u2014 bachche guess kar lete hain", "Screen Time weekly reports check karo \u2014 phone usage habits samajh mein aate hain"],
        faqs: [
          { q: "Screen Time PIN aur phone lock PIN alag hai?", a: "Haan \u2014 dono alag hote hain. Screen Time PIN parental controls aur app limits ke liye hota hai. Phone lock PIN device unlock ke liye hota hai." },
          { q: "Digital Wellbeing uninstall karne se lock hat jaayega?", a: "Nahi \u2014 Android system app hai. Disable kar sakte ho par uninstall nahi. Disable karne se existing locks bhi hat jaate hain lekin system app disable karne se side effects ho sakte hain." },
          { q: "Third-party app lock ka PIN bhool gaya to?", a: "Safe mode mein jaake uninstall karo. Ya app ke web dashboard se parent account se reset karo. App ke email recovery option use karo." },
          { q: "Factory reset ke baad Screen Time locks wapas aayengi?", a: "Nahi \u2014 factory reset se sab locks aur data delete hote hain. Nayi setup ke baad fresh Screen Time configure karna padega. Google account se restore nahi hoti Screen Time settings." }
        ],
        related: [
          { title: "Mobile Pattern Lock Bhool Gaya", slug: "mobile-pattern-lock-bhool-gaya", category: "mobile" },
          { title: "Mobile Hang Ho Raha Hai", slug: "mobile-hang-ho-raha-hai", category: "mobile" },
          { title: "Factory Reset Kaise Kare", slug: "phone-factory-reset-kaise-kare", category: "mobile" }
        ],
        keywords: ["screen time pin forgot", "digital wellbeing pin reset", "parental control password forgot", "app lock pin reset"],
        variants: ["screen time pin bhool gaya", "digital wellbeing pin bhool gaya", "parental control password bhool gaya", "screen time lock kaise tode", "app limit password bhool gaya", "phone screen time pin reset kaise kare"]
      },
    ]
  };
