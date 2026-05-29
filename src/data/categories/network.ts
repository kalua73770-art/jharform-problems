import type { Category } from "../types";

export const networkCategory: Category = {
    slug: "network",
    name: "SIM & Network",
    icon: "📶",
    description: "Jio internet slow, Airtel no network, SIM not detected, VoLTE issue — India ke network problems ka step-by-step solution.",
    metaTitle: "SIM & Network Problems — Jio Airtel Fix Guide | JharForm Problems",
    metaDescription: "Jio internet slow, Airtel no network, SIM not detected, VoLTE issue — India ke network problems ka step-by-step solution.",
    problems: [
      {
        slug: "jio-internet-slow",
        category: "network",
        metaTitle: "Jio Internet Slow Hai? Speed Kaise Badhaye (2026) | JharForm",
        metaDescription: "Jio 4G data hai par internet bahut slow chal raha hai? FUP limit ya network issue? Yeh 6 proven steps se Jio internet speed fix karo.",
        h1: "Jio Internet Slow — 6 Proven Fix Jinse Speed Badh Jaaye",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Jio 4G data hone ke bawajood internet bahut slow hai — daily FUP limit khatam hone, APN settings galat hone, ya tower congestion ki wajah se. Raat 8pm-11pm peak hours mein slowness normal hai.",
        steps: [
          { title: "Data balance check karo", detail: "My Jio app kholo ya *333# dial karo. Daily data balance dekho." },
          { title: "FUP limit check karo", detail: "Daily 1.5GB/2GB limit ke baad speed 64kbps ho jaati hai. Plan details check karo. FUP khatam hua to naya recharge karo." },
          { title: "APN settings reset karo", detail: "Settings > Connections > Mobile Networks > Access Point Names. Delete all > Reset to default. APN 'jionet' hona chahiye." },
          { title: "Network mode 4G prefer karo", detail: "Settings > Connections > Mobile Networks > Network Mode > LTE/4G/3G/2G Auto pe set karo." },
          { title: "WiFi Calling band karo", detail: "Settings > Connections > WiFi Calling > Off. Kabhi kabhi yeh 4G performance affect karta hai." },
          { title: "Better signal area mein jao", detail: "Khidki ke paas ya bahar jao. Signal bars check karo. 4 bars minimum chahiye." }
        ],
        screenshots: [
          { caption: "My Jio app home screen showing Daily Data 1.2GB used of 1.5GB with FUP warning", alt: "My Jio app showing daily data usage with FUP limit warning on home screen", type: "phone", mockupType: "myjio-app" },
          { caption: "Settings > Mobile Networks > Network Mode showing LTE/4G/3G/2G Auto selected", alt: "Android mobile network settings showing LTE 4G 3G 2G auto mode selected", type: "phone", mockupType: "android-network-4g" }
        ],
        sources: [
          { title: "Jio Official Support", url: "https://www.jio.com/help", icon: "📞" },
          { title: "TRAI Consumer Portal", url: "https://www.trai.gov.in/consumer", icon: "🏛️" }
        ],
        proTips: ["2am-6am mein Jio sabse fast hota hai — heavy downloads tab karo", "My Jio app se daily data track karo", "WiFi pe switch karo ghar mein — mobile data bacho"],
        faqs: [
          { q: "Jio ka daily limit kitna hai?", a: "Plan pe depend karta hai — most plans mein 1.5GB ya 2GB per day. Uske baad 64kbps speed hoti hai." },
          { q: "Raat ko Jio slow kyu hota hai?", a: "Network congestion — 8pm-11pm sabse zyada users active hote hain. 2am-6am fastest hota hai." },
          { q: "Jio 5G kab milega?", a: "Jio 5G major cities mein available hai. My Jio app pe apne area mein check karo. 5G phone bhi chahiye." }
        ],
        related: [
          { title: "Mobile Internet Nahi Chal Raha", slug: "mobile-internet-nahi-chal-raha", category: "mobile" },
          { title: "OTP Nahi Aa Raha", slug: "otp-nahi-aa-raha", category: "mobile" }
        ],
        keywords: ["jio internet slow", "jio speed slow", "jio data slow hai", "jio 4g slow"],
        variants: ["jio ka net slow hai", "jio internet bahut slow chal raha hai", "jio speed badhane ka tarika", "jio slow fix", "jio net nahi chal raha"]
      },
      {
        slug: "airtel-vi-idea-no-network",
        category: "network",
        metaTitle: "Airtel/Vi/IDEA Mein No Network? Signal Kaise Laaye (2026) | JharForm",
        metaDescription: "Airtel, Vi, ya IDEA SIM mein no network, no signal, ya 'Emergency Calls Only' aa raha hai? SIM aur network fix ka complete guide.",
        h1: "Airtel/Vi/IDEA No Network — Signal Wapas Laane Ke 7 Steps",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Airtel, Vodafone Idea (Vi), ya kisi bhi telecom operator mein phone mein 'No Service', 'Emergency Calls Only', ya signal bars hi nahi aa rahe hain. SIM card issue, network outage, phone settings, ya SIM physically damage ho sakta hai. Yeh steps sab networks ke liye kaam karte hain — Airtel, Vi, Jio, BSNL sab.",
        steps: [
          { title: "Airplane Mode on-off karo", detail: "Quick settings se Airplane Mode on karo, 10 second rukko, off karo. Sab networks refresh honge. Sabse simple aur effective fix." },
          { title: "SIM tray nikaal ke wapas lagao", detail: "SIM ejector tool se tray nikaalo. SIM card ko soft cloth se saaf karo (gold contacts). Tight fit se wapas lagao." },
          { title: "Network mode 4G/3G/2G auto set karo", detail: "Settings > Connections > Mobile Networks > Network Mode > LTE/4G/3G/2G (Auto). Airtel 4G band 40/3/1 pe chalta hai. Auto pe sab bands scan karta hai." },
          { title: "Different SIM slot try karo", detail: "Dual SIM phone ho to SIM doosri slot mein daalo. Kuch phones mein ek slot 4G support karti hai doosri sirf 2G/3G." },
          { title: "Network operators manually select karo", detail: "Settings > Connections > Mobile Networks > Network Operators > Search Networks. Airtel/Vi manually select karo. Auto se hat ke manual pe set karo." },
          { title: "SIM ko doosre phone mein try karo", detail: "SIM nikaal ke doosre phone mein daalo. Agar wahan bhi no network to SIM damage ya account block ho gaya." },
          { title: "Customer care se SIM status check karwao", detail: "Airtel: 121, Vi: 199, BSNL: 1503. SIM block, expiry, ya KYC pending ho sakta hai. OTP bhi nahi aa raha ho to yeh common reason hai." }
        ],
        screenshots: [
          { caption: "Settings > Mobile Networks > Network Operators showing manual network selection with Airtel and Vi listed", alt: "Android network operators manual selection screen showing airtel and vi networks available", type: "phone", mockupType: "android-network-4g" },
          { caption: "Airtel and Vi network outage map showing signal bars zero, manual network search result no networks found, flight mode on-off toggle, aur tower location nearest cell tower finder", alt: "Network outage screen showing no signal and manual search options", type: "phone", mockupType: "android-network-4g" }
        ],
        sources: [
          { title: "Airtel Network Support", url: "https://www.airtel.in/help", icon: "📞" },
          { title: "Vi Customer Care", url: "https://www.myvi.in", icon: "📞" },
          { title: "TRAI Consumer Portal", url: "https://www.trai.gov.in/consumer", icon: "🏛️" }
        ],
        proTips: ["Airtel 4G ke liye VoLTE on hona chahiye — call+data ek saath chalne ke liye", "Old SIM (3-4+ saal purani) 4G support nahi karti — free SIM replacement le lo", "Tower maintenance ke time temporary no network normal hai — 2-4 ghante wait karo"],
        faqs: [
          { q: "'Emergency Calls Only' kyu aa raha hai?", a: "Phone tower se connected hai par SIM authenticate nahi ho rahi. SIM issue, account block, ya KYC pending ho sakta hai." },
          { q: "SIM doosre phone mein kaam kar rahi hai par is phone mein nahi?", a: "Phone ka SIM slot damage, network IC issue, ya software bug ho sakta hai. Phone service center le jao." },
          { q: "KYC pending se no network aa sakta hai?", a: "Haan — 2019 ke baad KYC mandatory hai. KYC pending ho to outgoing calls aur data band ho jaate hain. Incoming 1-2 mahine tak chalti hai." },
          { q: "SIM 3 saal purani hai — replace karna chahiye?", a: "Haan — purani SIM 4G/VoLTE support nahi karti. Airtel/Vi store pe free SIM replacement milta hai. Same number retain hoti hai." }
        ],
        related: [
          { title: "Jio Internet Slow", slug: "jio-internet-slow", category: "network" },
          { title: "Mobile Internet Nahi Chal Raha", slug: "mobile-internet-nahi-chal-raha", category: "mobile" }
        ],
        keywords: ["airtel no network", "no signal phone", "vi no network", "emergency calls only"],
        variants: ["airtel network nahi aa raha", "phone mein signal nahi hai", "no service phone", "vi network nahi aa raha", "sim no network"]
      },
      {
        slug: "sim-not-detected-phone-mein",
        category: "network",
        metaTitle: "SIM Phone Mein Detect Nahi Ho Rahi? Fix Guide (2026) | JharForm",
        metaDescription: "Phone mein SIM detect nahi ho rahi? 'No SIM', 'Invalid SIM', ya SIM tray nahi aa rahi? SIM detection fix ka complete step-by-step guide.",
        h1: "SIM Detect Nahi Ho Rahi — Phone Mein SIM Recognition Fix",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Phone mein 'No SIM Card', 'Invalid SIM', 'SIM not detected', ya 'Insert SIM' message aa raha hai — SIM physically inserted hai phir bhi phone recognize nahi kar raha. SIM tray issue, dirty contacts, SIM damage, software bug, ya hardware problem ho sakta hai. Yeh steps hardware se leke software tak cover karte hain.",
        steps: [
          { title: "SIM nikaal ke saaf karke wapas lagao", detail: "SIM ejector tool use karo. SIM card ke gold contacts ko eraser se halka rub karo — oxidation hatao. Tray mein correct orientation se lagao." },
          { title: "SIM doosre phone mein try karo", detail: "SIM kisi doosre phone mein daalo. Agar detect ho rahi hai to phone ka problem hai. Nahi ho rahi to SIM damage ho gayi hai — free replacement le lo." },
          { title: "Doosri SIM is phone mein try karo", detail: "Kisi dusri active SIM ko is phone mein daalo. Agar detect ho rahi hai to pehli SIM ka problem. Nahi ho rahi to phone ka hardware/software issue." },
          { title: "Network settings reset karo", detail: "Settings > General Management > Reset > Reset Network Settings. WiFi passwords bhi delete honge. SIM re-register ho jaayegi." },
          { title: "Phone restart karo safe mode mein", detail: "Power off hone ke baad Power button + Volume Down. Safe mode mein third-party apps disable hongi. Agar safe mode mein SIM detect ho rahi hai to koi app interfere kar rahi hai." },
          { title: "SIM toolkit app check karo", detail: "Settings > Apps > SIM Toolkit. Force Stop karo. Cache clear karo. Yeh app SIM aur network communication handle karti hai." },
          { title: "Service center le jao (hardware damage ho to)", detail: "SIM slot physically damage ho, motherboard issue ho, ya water damage ho to service center hi solution hai. Cost: Rs. 500-2000." }
        ],
        screenshots: [
          { caption: "Phone showing No SIM Card message with SIM tray ejected showing clean gold contacts", alt: "Android phone showing no sim card inserted message with sim tray and contacts visible", type: "phone", mockupType: "android-settings-sdcard" },
          { caption: "Android SIM card manager showing No SIM detected warning for SIM 1 and SIM 2, network operators auto-select toggle off, SIM tray reseat instructions, aur clean contacts with soft cloth note", alt: "Android SIM settings showing no SIM detected status and reseat instructions", type: "phone", mockupType: "android-sim-settings" }
        ],
        sources: [
          { title: "TRAI SIM Replacement Guidelines", url: "https://www.trai.gov.in", icon: "🏛️" }
        ],
        proTips: ["SIM ko direct haath se mat chhoo — oil aur dust contacts ko block karte hain", "SIM ko plastic cover mein rakho jab use nahi ho rahi", "Dual SIM phone mein ek slot 4G, doosri 2G/3G only hoti hai — check karo"],
        faqs: [
          { q: "'Invalid SIM' ka matlab kya hai?", a: "SIM corrupt ho gayi hai ya phone SIM format read nahi kar pa raha. Doosre phone mein try karo. Same error aaya to SIM replacement lo." },
          { q: "SIM tray nahi aa rahi — stuck hai?", a: "Ejector tool properly insert karo — small hole mein. Paperclip bhi kaam karta hai. Zor mat lagao — tray damage ho sakti hai. Mechanic pe le jao agar stuck hai." },
          { q: "Water damage ke baad SIM detect nahi ho rahi?", a: "Water se SIM contacts corrode ho gaye hain. Saaf karo eraser se. Nahi hua to service center. Liquid damage motherboard pe asar karti hai." },
          { q: "SIM free replacement kaise milti hai?", a: "Same operator store pe jao. Original ID + FIR (agar lost) ya damaged SIM le jao. Rs. 25-50 charge. Same number 4-24 hours mein activate ho jaati hai." }
        ],
        related: [
          { title: "Airtel/Vi No Network", slug: "airtel-vi-idea-no-network", category: "network" },
          { title: "Jio Internet Slow", slug: "jio-internet-slow", category: "network" }
        ],
        keywords: ["sim not detected", "no sim card", "invalid sim", "sim not recognized"],
        variants: ["sim phone mein detect nahi ho rahi", "sim nahi dikh rahi", "no sim card error", "sim not detected phone"]
      },
      {
        "slug": "mobile-internet-nahi-chal-raha",
        "category": "network",
        "metaTitle": "Mobile Internet Nahi Chal Raha? Internet Slow, 5G, APN Fix | JharForm",
        "metaDescription": "Mobile Internet Nahi Chal Raha ka issue? Mobile Internet Nahi Chal Raha ki problem me aksar APN, FUP, network congestion, ya data settings ka role hota hai. Is guide me simple Hinglish steps diye gaye hain jo bina service center ke kaam kar sakte hain. Simple Hinglish steps se fix karo.",
        "h1": "Mobile Internet Nahi Chal Raha — Complete Hinglish Fix Guide",
        "lastUpdated": "May 2026",
        "readingTime": "4 min",
        "difficulty": "Easy",
        "description": "Mobile Internet Nahi Chal Raha ki problem me aksar APN, FUP, network congestion, ya data settings ka role hota hai. Is guide me simple Hinglish steps diye gaye hain jo bina service center ke kaam kar sakte hain.",
        "steps": [
          {
            "title": "Mobile data toggle off-on karo",
            "detail": "Quick settings se Mobile Data band karke 10 second baad on karo. Network session refresh hota hai."
          },
          {
            "title": "APN settings default pe reset karo",
            "detail": "Settings > Mobile Network > Access Point Names. Reset to default karo. Galat APN internet block kar sakta hai."
          },
          {
            "title": "Network mode 4G/5G auto set karo",
            "detail": "Preferred network type ko Auto ya 5G/4G/3G/2G pe rakho. Manual lock se speed issue aata hai."
          },
          {
            "title": "FUP ya plan validity check karo",
            "detail": "Daily data quota khatam ho gaya ho to speed thodi ya bahut kam ho jaati hai."
          },
          {
            "title": "Background apps aur cache clear karo",
            "detail": "Heavy apps, browser cache, aur downloads speed ko feel-wise slow bana dete hain."
          },
          {
            "title": "Operator outage aur tower congestion check karo",
            "detail": "Agar area me sabka slow hai to tower issue ho sakta hai. Thoda move karke test karo."
          },
          {
            "title": "Operator app me plan aur validity check karo",
            "detail": "Agar recharge active hai phir bhi internet off hai to plan status, SIM data toggle, aur operator outage check karo."
          },
          {
            "title": "Phone restart karo aur speed retest karo",
            "detail": "Restart se cached network state reset hota hai. Phir speed test karke compare karo."
          }
        ],
        "screenshots": [
          {
            "caption": "Mobile Internet Nahi Chal Raha issue screen showing warning banner, network status, aur quick settings shortcuts",
            "alt": "Mobile Internet Nahi Chal Raha issue screen showing warning banner and quick settings shortcuts",
            "type": "phone",
            "mockupType": "mobile-internet-nahi-chal-raha-screen-1"
          },
          {
            "caption": "Step-by-step fix screen for mobile internet nahi chal raha with settings path, toggle buttons, aur status after fix note",
            "alt": "Step-by-step fix screen for Mobile Internet Nahi Chal Raha with settings path and status after fix",
            "type": "phone",
            "mockupType": "mobile-internet-nahi-chal-raha-screen-2"
          }
        ],
        "sources": [
          {
            "title": "TRAI Consumer Portal",
            "url": "https://www.trai.gov.in/consumer",
            "icon": "🏛️"
          },
          {
            "title": "Jio Help",
            "url": "https://www.jio.com/help",
            "icon": "📞"
          }
        ],
        "proTips": [
          "Data saver aur battery saver dono off karke test karo",
          "APN reset ke baad phone restart zaroor karo",
          "Peak hours mein speed drop normal ho sakta hai"
        ],
        "faqs": [
          {
            "q": "Mobile data on hai phir bhi internet kyu nahi chal raha?",
            "a": "APN, network mode, FUP limit, ya operator outage common reasons hote hain. Pehle data toggle aur network reset try karo."
          },
          {
            "q": "5G pack ke baad bhi 4G aa raha hai?",
            "a": "5G coverage, handset compatibility, aur plan eligibility check karo. Many areas me 4G fallback hota hai."
          },
          {
            "q": "APN reset safe hai?",
            "a": "Haan, safe hai. Isse sirf network profile default hota hai."
          },
          {
            "q": "Speed sabse zyada kab fast hoti hai?",
            "a": "Usually late night ya early morning. Peak hours me congestion hoti hai."
          }
        ],
        "related": [
          {
            "title": "Jio Internet Slow",
            "slug": "jio-internet-slow",
            "category": "network"
          },
          {
            "title": "Airtel/Vi No Network",
            "slug": "airtel-vi-idea-no-network",
            "category": "network"
          }
        ],
        "keywords": [
          "mobile internet nahi chal raha",
          "mobile data issue",
          "apn fix",
          "internet slow fix"
        ],
        "variants": [
          "mobile internet nahi chal raha",
          "mobile internet nahi chal raha",
          "phone data issue",
          "internet slow problem"
        ]
      },
      {
        "slug": "apn-settings-galat-hain",
        "category": "network",
        "metaTitle": "APN Settings Galat Hain? Internet Slow, 5G, APN Fix | JharForm",
        "metaDescription": "APN Settings Galat Hain ka issue? APN Settings Galat Hain ki problem me aksar APN, FUP, network congestion, ya data settings ka role hota hai. Is guide me simple Hinglish steps diye gaye hain jo bina service center ke kaam kar sakte hain. Simple Hinglish steps se fix karo.",
        "h1": "APN Settings Galat Hain — Complete Hinglish Fix Guide",
        "lastUpdated": "May 2026",
        "readingTime": "4 min",
        "difficulty": "Easy",
        "description": "APN Settings Galat Hain ki problem me aksar APN, FUP, network congestion, ya data settings ka role hota hai. Is guide me simple Hinglish steps diye gaye hain jo bina service center ke kaam kar sakte hain.",
        "steps": [
          {
            "title": "Mobile data toggle off-on karo",
            "detail": "Quick settings se Mobile Data band karke 10 second baad on karo. Network session refresh hota hai."
          },
          {
            "title": "APN settings default pe reset karo",
            "detail": "Settings > Mobile Network > Access Point Names. Reset to default karo. Galat APN internet block kar sakta hai."
          },
          {
            "title": "Network mode 4G/5G auto set karo",
            "detail": "Preferred network type ko Auto ya 5G/4G/3G/2G pe rakho. Manual lock se speed issue aata hai."
          },
          {
            "title": "FUP ya plan validity check karo",
            "detail": "Daily data quota khatam ho gaya ho to speed thodi ya bahut kam ho jaati hai."
          },
          {
            "title": "Background apps aur cache clear karo",
            "detail": "Heavy apps, browser cache, aur downloads speed ko feel-wise slow bana dete hain."
          },
          {
            "title": "Operator outage aur tower congestion check karo",
            "detail": "Agar area me sabka slow hai to tower issue ho sakta hai. Thoda move karke test karo."
          },
          {
            "title": "Operator app me plan aur validity check karo",
            "detail": "Agar recharge active hai phir bhi internet off hai to plan status, SIM data toggle, aur operator outage check karo."
          },
          {
            "title": "Phone restart karo aur speed retest karo",
            "detail": "Restart se cached network state reset hota hai. Phir speed test karke compare karo."
          }
        ],
        "screenshots": [
          {
            "caption": "APN Settings Galat Hain issue screen showing warning banner, network status, aur quick settings shortcuts",
            "alt": "APN Settings Galat Hain issue screen showing warning banner and quick settings shortcuts",
            "type": "phone",
            "mockupType": "apn-settings-galat-hain-screen-1"
          },
          {
            "caption": "Step-by-step fix screen for apn settings galat hain with settings path, toggle buttons, aur status after fix note",
            "alt": "Step-by-step fix screen for APN Settings Galat Hain with settings path and status after fix",
            "type": "phone",
            "mockupType": "apn-settings-galat-hain-screen-2"
          }
        ],
        "sources": [
          {
            "title": "TRAI Consumer Portal",
            "url": "https://www.trai.gov.in/consumer",
            "icon": "🏛️"
          },
          {
            "title": "Jio Help",
            "url": "https://www.jio.com/help",
            "icon": "📞"
          }
        ],
        "proTips": [
          "Data saver aur battery saver dono off karke test karo",
          "APN reset ke baad phone restart zaroor karo",
          "Peak hours mein speed drop normal ho sakta hai"
        ],
        "faqs": [
          {
            "q": "Mobile data on hai phir bhi internet kyu nahi chal raha?",
            "a": "APN, network mode, FUP limit, ya operator outage common reasons hote hain. Pehle data toggle aur network reset try karo."
          },
          {
            "q": "5G pack ke baad bhi 4G aa raha hai?",
            "a": "5G coverage, handset compatibility, aur plan eligibility check karo. Many areas me 4G fallback hota hai."
          },
          {
            "q": "APN reset safe hai?",
            "a": "Haan, safe hai. Isse sirf network profile default hota hai."
          },
          {
            "q": "Speed sabse zyada kab fast hoti hai?",
            "a": "Usually late night ya early morning. Peak hours me congestion hoti hai."
          }
        ],
        "related": [
          {
            "title": "Jio Internet Slow",
            "slug": "jio-internet-slow",
            "category": "network"
          },
          {
            "title": "Airtel/Vi No Network",
            "slug": "airtel-vi-idea-no-network",
            "category": "network"
          }
        ],
        "keywords": [
          "apn settings galat hain",
          "mobile data issue",
          "apn fix",
          "internet slow fix"
        ],
        "variants": [
          "apn settings galat hain",
          "apn settings galat hain",
          "phone data issue",
          "internet slow problem"
        ]
      },
      {
        "slug": "data-pack-hone-ke-baad-bhi-no-internet",
        "category": "network",
        "metaTitle": "Data Pack Hone Ke Baad Bhi Internet Nahi? Internet Slow, 5G, APN Fix | JharForm",
        "metaDescription": "Data Pack Hone Ke Baad Bhi Internet Nahi ka issue? Data Pack Hone Ke Baad Bhi Internet Nahi ki problem me aksar APN, FUP, network congestion, ya data settings ka role hota hai. Is guide me simple Hinglish steps diye gaye hain jo bina service center ke kaam kar sakte hain. Simple Hinglish steps se fix karo.",
        "h1": "Data Pack Hone Ke Baad Bhi Internet Nahi — Complete Hinglish Fix Guide",
        "lastUpdated": "May 2026",
        "readingTime": "4 min",
        "difficulty": "Easy",
        "description": "Data Pack Hone Ke Baad Bhi Internet Nahi ki problem me aksar APN, FUP, network congestion, ya data settings ka role hota hai. Is guide me simple Hinglish steps diye gaye hain jo bina service center ke kaam kar sakte hain.",
        "steps": [
          {
            "title": "Mobile data toggle off-on karo",
            "detail": "Quick settings se Mobile Data band karke 10 second baad on karo. Network session refresh hota hai."
          },
          {
            "title": "APN settings default pe reset karo",
            "detail": "Settings > Mobile Network > Access Point Names. Reset to default karo. Galat APN internet block kar sakta hai."
          },
          {
            "title": "Network mode 4G/5G auto set karo",
            "detail": "Preferred network type ko Auto ya 5G/4G/3G/2G pe rakho. Manual lock se speed issue aata hai."
          },
          {
            "title": "FUP ya plan validity check karo",
            "detail": "Daily data quota khatam ho gaya ho to speed thodi ya bahut kam ho jaati hai."
          },
          {
            "title": "Background apps aur cache clear karo",
            "detail": "Heavy apps, browser cache, aur downloads speed ko feel-wise slow bana dete hain."
          },
          {
            "title": "Operator outage aur tower congestion check karo",
            "detail": "Agar area me sabka slow hai to tower issue ho sakta hai. Thoda move karke test karo."
          },
          {
            "title": "Operator app me plan aur validity check karo",
            "detail": "Agar recharge active hai phir bhi internet off hai to plan status, SIM data toggle, aur operator outage check karo."
          },
          {
            "title": "Phone restart karo aur speed retest karo",
            "detail": "Restart se cached network state reset hota hai. Phir speed test karke compare karo."
          }
        ],
        "screenshots": [
          {
            "caption": "Data Pack Hone Ke Baad Bhi Internet Nahi issue screen showing warning banner, network status, aur quick settings shortcuts",
            "alt": "Data Pack Hone Ke Baad Bhi Internet Nahi issue screen showing warning banner and quick settings shortcuts",
            "type": "phone",
            "mockupType": "data-pack-hone-ke-baad-bhi-no-internet-screen-1"
          },
          {
            "caption": "Step-by-step fix screen for data pack hone ke baad bhi internet nahi with settings path, toggle buttons, aur status after fix note",
            "alt": "Step-by-step fix screen for Data Pack Hone Ke Baad Bhi Internet Nahi with settings path and status after fix",
            "type": "phone",
            "mockupType": "data-pack-hone-ke-baad-bhi-no-internet-screen-2"
          }
        ],
        "sources": [
          {
            "title": "TRAI Consumer Portal",
            "url": "https://www.trai.gov.in/consumer",
            "icon": "🏛️"
          },
          {
            "title": "Jio Help",
            "url": "https://www.jio.com/help",
            "icon": "📞"
          }
        ],
        "proTips": [
          "Data saver aur battery saver dono off karke test karo",
          "APN reset ke baad phone restart zaroor karo",
          "Peak hours mein speed drop normal ho sakta hai"
        ],
        "faqs": [
          {
            "q": "Mobile data on hai phir bhi internet kyu nahi chal raha?",
            "a": "APN, network mode, FUP limit, ya operator outage common reasons hote hain. Pehle data toggle aur network reset try karo."
          },
          {
            "q": "5G pack ke baad bhi 4G aa raha hai?",
            "a": "5G coverage, handset compatibility, aur plan eligibility check karo. Many areas me 4G fallback hota hai."
          },
          {
            "q": "APN reset safe hai?",
            "a": "Haan, safe hai. Isse sirf network profile default hota hai."
          },
          {
            "q": "Speed sabse zyada kab fast hoti hai?",
            "a": "Usually late night ya early morning. Peak hours me congestion hoti hai."
          }
        ],
        "related": [
          {
            "title": "Jio Internet Slow",
            "slug": "jio-internet-slow",
            "category": "network"
          },
          {
            "title": "Airtel/Vi No Network",
            "slug": "airtel-vi-idea-no-network",
            "category": "network"
          }
        ],
        "keywords": [
          "data pack hone ke baad bhi no internet",
          "mobile data issue",
          "apn fix",
          "internet slow fix"
        ],
        "variants": [
          "data pack hone ke baad bhi internet nahi",
          "data pack hone ke baad bhi internet nahi",
          "phone data issue",
          "internet slow problem"
        ]
      },
      {
        "slug": "data-speed-bahut-slow",
        "category": "network",
        "metaTitle": "Data Speed Bahut Slow Hai? Internet Slow, 5G, APN Fix | JharForm",
        "metaDescription": "Data Speed Bahut Slow Hai ka issue? Data Speed Bahut Slow Hai ki problem me aksar APN, FUP, network congestion, ya data settings ka role hota hai. Is guide me simple Hinglish steps diye gaye hain jo bina service center ke kaam kar sakte hain. Simple Hinglish steps se fix karo.",
        "h1": "Data Speed Bahut Slow Hai — Complete Hinglish Fix Guide",
        "lastUpdated": "May 2026",
        "readingTime": "4 min",
        "difficulty": "Easy",
        "description": "Data Speed Bahut Slow Hai ki problem me aksar APN, FUP, network congestion, ya data settings ka role hota hai. Is guide me simple Hinglish steps diye gaye hain jo bina service center ke kaam kar sakte hain.",
        "steps": [
          {
            "title": "Mobile data toggle off-on karo",
            "detail": "Quick settings se Mobile Data band karke 10 second baad on karo. Network session refresh hota hai."
          },
          {
            "title": "APN settings default pe reset karo",
            "detail": "Settings > Mobile Network > Access Point Names. Reset to default karo. Galat APN internet block kar sakta hai."
          },
          {
            "title": "Network mode 4G/5G auto set karo",
            "detail": "Preferred network type ko Auto ya 5G/4G/3G/2G pe rakho. Manual lock se speed issue aata hai."
          },
          {
            "title": "FUP ya plan validity check karo",
            "detail": "Daily data quota khatam ho gaya ho to speed thodi ya bahut kam ho jaati hai."
          },
          {
            "title": "Background apps aur cache clear karo",
            "detail": "Heavy apps, browser cache, aur downloads speed ko feel-wise slow bana dete hain."
          },
          {
            "title": "Operator outage aur tower congestion check karo",
            "detail": "Agar area me sabka slow hai to tower issue ho sakta hai. Thoda move karke test karo."
          },
          {
            "title": "Operator app me plan aur validity check karo",
            "detail": "Agar recharge active hai phir bhi internet off hai to plan status, SIM data toggle, aur operator outage check karo."
          },
          {
            "title": "Phone restart karo aur speed retest karo",
            "detail": "Restart se cached network state reset hota hai. Phir speed test karke compare karo."
          }
        ],
        "screenshots": [
          {
            "caption": "Data Speed Bahut Slow Hai issue screen showing warning banner, network status, aur quick settings shortcuts",
            "alt": "Data Speed Bahut Slow Hai issue screen showing warning banner and quick settings shortcuts",
            "type": "phone",
            "mockupType": "data-speed-bahut-slow-screen-1"
          },
          {
            "caption": "Step-by-step fix screen for data speed bahut slow hai with settings path, toggle buttons, aur status after fix note",
            "alt": "Step-by-step fix screen for Data Speed Bahut Slow Hai with settings path and status after fix",
            "type": "phone",
            "mockupType": "data-speed-bahut-slow-screen-2"
          }
        ],
        "sources": [
          {
            "title": "TRAI Consumer Portal",
            "url": "https://www.trai.gov.in/consumer",
            "icon": "🏛️"
          },
          {
            "title": "Jio Help",
            "url": "https://www.jio.com/help",
            "icon": "📞"
          }
        ],
        "proTips": [
          "Data saver aur battery saver dono off karke test karo",
          "APN reset ke baad phone restart zaroor karo",
          "Peak hours mein speed drop normal ho sakta hai"
        ],
        "faqs": [
          {
            "q": "Mobile data on hai phir bhi internet kyu nahi chal raha?",
            "a": "APN, network mode, FUP limit, ya operator outage common reasons hote hain. Pehle data toggle aur network reset try karo."
          },
          {
            "q": "5G pack ke baad bhi 4G aa raha hai?",
            "a": "5G coverage, handset compatibility, aur plan eligibility check karo. Many areas me 4G fallback hota hai."
          },
          {
            "q": "APN reset safe hai?",
            "a": "Haan, safe hai. Isse sirf network profile default hota hai."
          },
          {
            "q": "Speed sabse zyada kab fast hoti hai?",
            "a": "Usually late night ya early morning. Peak hours me congestion hoti hai."
          }
        ],
        "related": [
          {
            "title": "Jio Internet Slow",
            "slug": "jio-internet-slow",
            "category": "network"
          },
          {
            "title": "Airtel/Vi No Network",
            "slug": "airtel-vi-idea-no-network",
            "category": "network"
          }
        ],
        "keywords": [
          "data speed bahut slow",
          "mobile data issue",
          "apn fix",
          "internet slow fix"
        ],
        "variants": [
          "data speed bahut slow hai",
          "data speed bahut slow hai",
          "phone data issue",
          "internet slow problem"
        ]
      },
      {
        "slug": "5g-nahi-aa-raha",
        "category": "network",
        "metaTitle": "5G Nahi Aa Raha? Internet Slow, 5G, APN Fix | JharForm",
        "metaDescription": "5G Nahi Aa Raha ka issue? 5G Nahi Aa Raha ki problem me aksar APN, FUP, network congestion, ya data settings ka role hota hai. Is guide me simple Hinglish steps diye gaye hain jo bina service center ke kaam kar sakte hain. Simple Hinglish steps se fix karo.",
        "h1": "5G Nahi Aa Raha — Complete Hinglish Fix Guide",
        "lastUpdated": "May 2026",
        "readingTime": "4 min",
        "difficulty": "Easy",
        "description": "5G Nahi Aa Raha ki problem me aksar APN, FUP, network congestion, ya data settings ka role hota hai. Is guide me simple Hinglish steps diye gaye hain jo bina service center ke kaam kar sakte hain.",
        "steps": [
          {
            "title": "Mobile data toggle off-on karo",
            "detail": "Quick settings se Mobile Data band karke 10 second baad on karo. Network session refresh hota hai."
          },
          {
            "title": "APN settings default pe reset karo",
            "detail": "Settings > Mobile Network > Access Point Names. Reset to default karo. Galat APN internet block kar sakta hai."
          },
          {
            "title": "Network mode 4G/5G auto set karo",
            "detail": "Preferred network type ko Auto ya 5G/4G/3G/2G pe rakho. Manual lock se speed issue aata hai."
          },
          {
            "title": "FUP ya plan validity check karo",
            "detail": "Daily data quota khatam ho gaya ho to speed thodi ya bahut kam ho jaati hai."
          },
          {
            "title": "Background apps aur cache clear karo",
            "detail": "Heavy apps, browser cache, aur downloads speed ko feel-wise slow bana dete hain."
          },
          {
            "title": "Operator outage aur tower congestion check karo",
            "detail": "Agar area me sabka slow hai to tower issue ho sakta hai. Thoda move karke test karo."
          },
          {
            "title": "Operator app me plan aur validity check karo",
            "detail": "Agar recharge active hai phir bhi internet off hai to plan status, SIM data toggle, aur operator outage check karo."
          },
          {
            "title": "Phone restart karo aur speed retest karo",
            "detail": "Restart se cached network state reset hota hai. Phir speed test karke compare karo."
          }
        ],
        "screenshots": [
          {
            "caption": "5G Nahi Aa Raha issue screen showing warning banner, network status, aur quick settings shortcuts",
            "alt": "5G Nahi Aa Raha issue screen showing warning banner and quick settings shortcuts",
            "type": "phone",
            "mockupType": "5g-nahi-aa-raha-screen-1"
          },
          {
            "caption": "Step-by-step fix screen for 5g nahi aa raha with settings path, toggle buttons, aur status after fix note",
            "alt": "Step-by-step fix screen for 5G Nahi Aa Raha with settings path and status after fix",
            "type": "phone",
            "mockupType": "5g-nahi-aa-raha-screen-2"
          }
        ],
        "sources": [
          {
            "title": "TRAI Consumer Portal",
            "url": "https://www.trai.gov.in/consumer",
            "icon": "🏛️"
          },
          {
            "title": "Jio Help",
            "url": "https://www.jio.com/help",
            "icon": "📞"
          }
        ],
        "proTips": [
          "Data saver aur battery saver dono off karke test karo",
          "APN reset ke baad phone restart zaroor karo",
          "Peak hours mein speed drop normal ho sakta hai"
        ],
        "faqs": [
          {
            "q": "Mobile data on hai phir bhi internet kyu nahi chal raha?",
            "a": "APN, network mode, FUP limit, ya operator outage common reasons hote hain. Pehle data toggle aur network reset try karo."
          },
          {
            "q": "5G pack ke baad bhi 4G aa raha hai?",
            "a": "5G coverage, handset compatibility, aur plan eligibility check karo. Many areas me 4G fallback hota hai."
          },
          {
            "q": "APN reset safe hai?",
            "a": "Haan, safe hai. Isse sirf network profile default hota hai."
          },
          {
            "q": "Speed sabse zyada kab fast hoti hai?",
            "a": "Usually late night ya early morning. Peak hours me congestion hoti hai."
          }
        ],
        "related": [
          {
            "title": "Jio Internet Slow",
            "slug": "jio-internet-slow",
            "category": "network"
          },
          {
            "title": "Airtel/Vi No Network",
            "slug": "airtel-vi-idea-no-network",
            "category": "network"
          }
        ],
        "keywords": [
          "5g nahi aa raha",
          "mobile data issue",
          "apn fix",
          "internet slow fix"
        ],
        "variants": [
          "5g nahi aa raha",
          "5g nahi aa raha",
          "phone data issue",
          "internet slow problem"
        ]
      },
      {
        "slug": "5g-to-4g-switch-fix",
        "category": "network",
        "metaTitle": "5G Se 4G Switch Fix? Internet Slow, 5G, APN Fix | JharForm",
        "metaDescription": "5G Se 4G Switch Fix ka issue? 5G Se 4G Switch Fix ki problem me aksar APN, FUP, network congestion, ya data settings ka role hota hai. Is guide me simple Hinglish steps diye gaye hain jo bina service center ke kaam kar sakte hain. Simple Hinglish steps se fix karo.",
        "h1": "5G Se 4G Switch Fix — Complete Hinglish Fix Guide",
        "lastUpdated": "May 2026",
        "readingTime": "4 min",
        "difficulty": "Easy",
        "description": "5G Se 4G Switch Fix ki problem me aksar APN, FUP, network congestion, ya data settings ka role hota hai. Is guide me simple Hinglish steps diye gaye hain jo bina service center ke kaam kar sakte hain.",
        "steps": [
          {
            "title": "Mobile data toggle off-on karo",
            "detail": "Quick settings se Mobile Data band karke 10 second baad on karo. Network session refresh hota hai."
          },
          {
            "title": "APN settings default pe reset karo",
            "detail": "Settings > Mobile Network > Access Point Names. Reset to default karo. Galat APN internet block kar sakta hai."
          },
          {
            "title": "Network mode 4G/5G auto set karo",
            "detail": "Preferred network type ko Auto ya 5G/4G/3G/2G pe rakho. Manual lock se speed issue aata hai."
          },
          {
            "title": "FUP ya plan validity check karo",
            "detail": "Daily data quota khatam ho gaya ho to speed thodi ya bahut kam ho jaati hai."
          },
          {
            "title": "Background apps aur cache clear karo",
            "detail": "Heavy apps, browser cache, aur downloads speed ko feel-wise slow bana dete hain."
          },
          {
            "title": "Operator outage aur tower congestion check karo",
            "detail": "Agar area me sabka slow hai to tower issue ho sakta hai. Thoda move karke test karo."
          },
          {
            "title": "Operator app me plan aur validity check karo",
            "detail": "Agar recharge active hai phir bhi internet off hai to plan status, SIM data toggle, aur operator outage check karo."
          },
          {
            "title": "Phone restart karo aur speed retest karo",
            "detail": "Restart se cached network state reset hota hai. Phir speed test karke compare karo."
          }
        ],
        "screenshots": [
          {
            "caption": "5G Se 4G Switch Fix issue screen showing warning banner, network status, aur quick settings shortcuts",
            "alt": "5G Se 4G Switch Fix issue screen showing warning banner and quick settings shortcuts",
            "type": "phone",
            "mockupType": "5g-to-4g-switch-fix-screen-1"
          },
          {
            "caption": "Step-by-step fix screen for 5g se 4g switch fix with settings path, toggle buttons, aur status after fix note",
            "alt": "Step-by-step fix screen for 5G Se 4G Switch Fix with settings path and status after fix",
            "type": "phone",
            "mockupType": "5g-to-4g-switch-fix-screen-2"
          }
        ],
        "sources": [
          {
            "title": "TRAI Consumer Portal",
            "url": "https://www.trai.gov.in/consumer",
            "icon": "🏛️"
          },
          {
            "title": "Jio Help",
            "url": "https://www.jio.com/help",
            "icon": "📞"
          }
        ],
        "proTips": [
          "Data saver aur battery saver dono off karke test karo",
          "APN reset ke baad phone restart zaroor karo",
          "Peak hours mein speed drop normal ho sakta hai"
        ],
        "faqs": [
          {
            "q": "Mobile data on hai phir bhi internet kyu nahi chal raha?",
            "a": "APN, network mode, FUP limit, ya operator outage common reasons hote hain. Pehle data toggle aur network reset try karo."
          },
          {
            "q": "5G pack ke baad bhi 4G aa raha hai?",
            "a": "5G coverage, handset compatibility, aur plan eligibility check karo. Many areas me 4G fallback hota hai."
          },
          {
            "q": "APN reset safe hai?",
            "a": "Haan, safe hai. Isse sirf network profile default hota hai."
          },
          {
            "q": "Speed sabse zyada kab fast hoti hai?",
            "a": "Usually late night ya early morning. Peak hours me congestion hoti hai."
          }
        ],
        "related": [
          {
            "title": "Jio Internet Slow",
            "slug": "jio-internet-slow",
            "category": "network"
          },
          {
            "title": "Airtel/Vi No Network",
            "slug": "airtel-vi-idea-no-network",
            "category": "network"
          }
        ],
        "keywords": [
          "5g to 4g switch fix",
          "mobile data issue",
          "apn fix",
          "internet slow fix"
        ],
        "variants": [
          "5g se 4g switch fix",
          "5g se 4g switch fix",
          "phone data issue",
          "internet slow problem"
        ]
      },
      {
        "slug": "recharge-hua-phir-bhi-internet-nahi",
        "category": "network",
        "metaTitle": "Recharge Hua Phir Bhi Internet Nahi Chal Raha? Internet Slow, 5G, APN Fix | JharForm",
        "metaDescription": "Recharge Hua Phir Bhi Internet Nahi Chal Raha ka issue? Recharge Hua Phir Bhi Internet Nahi Chal Raha ki problem me aksar APN, FUP, network congestion, ya data settings ka role hota hai. Is guide me simple Hinglish steps diye gaye hain jo bina service center ke kaam kar sakte hain. Simple Hinglish steps se fix karo.",
        "h1": "Recharge Hua Phir Bhi Internet Nahi Chal Raha — Complete Hinglish Fix Guide",
        "lastUpdated": "May 2026",
        "readingTime": "4 min",
        "difficulty": "Easy",
        "description": "Recharge Hua Phir Bhi Internet Nahi Chal Raha ki problem me aksar APN, FUP, network congestion, ya data settings ka role hota hai. Is guide me simple Hinglish steps diye gaye hain jo bina service center ke kaam kar sakte hain.",
        "steps": [
          {
            "title": "Mobile data toggle off-on karo",
            "detail": "Quick settings se Mobile Data band karke 10 second baad on karo. Network session refresh hota hai."
          },
          {
            "title": "APN settings default pe reset karo",
            "detail": "Settings > Mobile Network > Access Point Names. Reset to default karo. Galat APN internet block kar sakta hai."
          },
          {
            "title": "Network mode 4G/5G auto set karo",
            "detail": "Preferred network type ko Auto ya 5G/4G/3G/2G pe rakho. Manual lock se speed issue aata hai."
          },
          {
            "title": "FUP ya plan validity check karo",
            "detail": "Daily data quota khatam ho gaya ho to speed thodi ya bahut kam ho jaati hai."
          },
          {
            "title": "Background apps aur cache clear karo",
            "detail": "Heavy apps, browser cache, aur downloads speed ko feel-wise slow bana dete hain."
          },
          {
            "title": "Operator outage aur tower congestion check karo",
            "detail": "Agar area me sabka slow hai to tower issue ho sakta hai. Thoda move karke test karo."
          },
          {
            "title": "Operator app me plan aur validity check karo",
            "detail": "Agar recharge active hai phir bhi internet off hai to plan status, SIM data toggle, aur operator outage check karo."
          },
          {
            "title": "Phone restart karo aur speed retest karo",
            "detail": "Restart se cached network state reset hota hai. Phir speed test karke compare karo."
          }
        ],
        "screenshots": [
          {
            "caption": "Recharge Hua Phir Bhi Internet Nahi Chal Raha issue screen showing warning banner, network status, aur quick settings shortcuts",
            "alt": "Recharge Hua Phir Bhi Internet Nahi Chal Raha issue screen showing warning banner and quick settings shortcuts",
            "type": "phone",
            "mockupType": "recharge-hua-phir-bhi-internet-nahi-screen-1"
          },
          {
            "caption": "Step-by-step fix screen for recharge hua phir bhi internet nahi chal raha with settings path, toggle buttons, aur status after fix note",
            "alt": "Step-by-step fix screen for Recharge Hua Phir Bhi Internet Nahi Chal Raha with settings path and status after fix",
            "type": "phone",
            "mockupType": "recharge-hua-phir-bhi-internet-nahi-screen-2"
          }
        ],
        "sources": [
          {
            "title": "TRAI Consumer Portal",
            "url": "https://www.trai.gov.in/consumer",
            "icon": "🏛️"
          },
          {
            "title": "Jio Help",
            "url": "https://www.jio.com/help",
            "icon": "📞"
          }
        ],
        "proTips": [
          "Data saver aur battery saver dono off karke test karo",
          "APN reset ke baad phone restart zaroor karo",
          "Peak hours mein speed drop normal ho sakta hai"
        ],
        "faqs": [
          {
            "q": "Mobile data on hai phir bhi internet kyu nahi chal raha?",
            "a": "APN, network mode, FUP limit, ya operator outage common reasons hote hain. Pehle data toggle aur network reset try karo."
          },
          {
            "q": "5G pack ke baad bhi 4G aa raha hai?",
            "a": "5G coverage, handset compatibility, aur plan eligibility check karo. Many areas me 4G fallback hota hai."
          },
          {
            "q": "APN reset safe hai?",
            "a": "Haan, safe hai. Isse sirf network profile default hota hai."
          },
          {
            "q": "Speed sabse zyada kab fast hoti hai?",
            "a": "Usually late night ya early morning. Peak hours me congestion hoti hai."
          }
        ],
        "related": [
          {
            "title": "Jio Internet Slow",
            "slug": "jio-internet-slow",
            "category": "network"
          },
          {
            "title": "Airtel/Vi No Network",
            "slug": "airtel-vi-idea-no-network",
            "category": "network"
          }
        ],
        "keywords": [
          "recharge hua phir bhi internet nahi",
          "mobile data issue",
          "apn fix",
          "internet slow fix"
        ],
        "variants": [
          "recharge hua phir bhi internet nahi chal raha",
          "recharge hua phir bhi internet nahi chal raha",
          "phone data issue",
          "internet slow problem"
        ]
      },
      {
        "slug": "network-congestion-slow",
        "category": "network",
        "metaTitle": "Network Congestion Se Internet Slow? Internet Slow, 5G, APN Fix | JharForm",
        "metaDescription": "Network Congestion Se Internet Slow ka issue? Network Congestion Se Internet Slow ki problem me aksar APN, FUP, network congestion, ya data settings ka role hota hai. Is guide me simple Hinglish steps diye gaye hain jo bina service center ke kaam kar sakte hain. Simple Hinglish steps se fix karo.",
        "h1": "Network Congestion Se Internet Slow — Complete Hinglish Fix Guide",
        "lastUpdated": "May 2026",
        "readingTime": "4 min",
        "difficulty": "Easy",
        "description": "Network Congestion Se Internet Slow ki problem me aksar APN, FUP, network congestion, ya data settings ka role hota hai. Is guide me simple Hinglish steps diye gaye hain jo bina service center ke kaam kar sakte hain.",
        "steps": [
          {
            "title": "Mobile data toggle off-on karo",
            "detail": "Quick settings se Mobile Data band karke 10 second baad on karo. Network session refresh hota hai."
          },
          {
            "title": "APN settings default pe reset karo",
            "detail": "Settings > Mobile Network > Access Point Names. Reset to default karo. Galat APN internet block kar sakta hai."
          },
          {
            "title": "Network mode 4G/5G auto set karo",
            "detail": "Preferred network type ko Auto ya 5G/4G/3G/2G pe rakho. Manual lock se speed issue aata hai."
          },
          {
            "title": "FUP ya plan validity check karo",
            "detail": "Daily data quota khatam ho gaya ho to speed thodi ya bahut kam ho jaati hai."
          },
          {
            "title": "Background apps aur cache clear karo",
            "detail": "Heavy apps, browser cache, aur downloads speed ko feel-wise slow bana dete hain."
          },
          {
            "title": "Operator outage aur tower congestion check karo",
            "detail": "Agar area me sabka slow hai to tower issue ho sakta hai. Thoda move karke test karo."
          },
          {
            "title": "Operator app me plan aur validity check karo",
            "detail": "Agar recharge active hai phir bhi internet off hai to plan status, SIM data toggle, aur operator outage check karo."
          },
          {
            "title": "Phone restart karo aur speed retest karo",
            "detail": "Restart se cached network state reset hota hai. Phir speed test karke compare karo."
          }
        ],
        "screenshots": [
          {
            "caption": "Network Congestion Se Internet Slow issue screen showing warning banner, network status, aur quick settings shortcuts",
            "alt": "Network Congestion Se Internet Slow issue screen showing warning banner and quick settings shortcuts",
            "type": "phone",
            "mockupType": "network-congestion-slow-screen-1"
          },
          {
            "caption": "Step-by-step fix screen for network congestion se internet slow with settings path, toggle buttons, aur status after fix note",
            "alt": "Step-by-step fix screen for Network Congestion Se Internet Slow with settings path and status after fix",
            "type": "phone",
            "mockupType": "network-congestion-slow-screen-2"
          }
        ],
        "sources": [
          {
            "title": "TRAI Consumer Portal",
            "url": "https://www.trai.gov.in/consumer",
            "icon": "🏛️"
          },
          {
            "title": "Jio Help",
            "url": "https://www.jio.com/help",
            "icon": "📞"
          }
        ],
        "proTips": [
          "Data saver aur battery saver dono off karke test karo",
          "APN reset ke baad phone restart zaroor karo",
          "Peak hours mein speed drop normal ho sakta hai"
        ],
        "faqs": [
          {
            "q": "Mobile data on hai phir bhi internet kyu nahi chal raha?",
            "a": "APN, network mode, FUP limit, ya operator outage common reasons hote hain. Pehle data toggle aur network reset try karo."
          },
          {
            "q": "5G pack ke baad bhi 4G aa raha hai?",
            "a": "5G coverage, handset compatibility, aur plan eligibility check karo. Many areas me 4G fallback hota hai."
          },
          {
            "q": "APN reset safe hai?",
            "a": "Haan, safe hai. Isse sirf network profile default hota hai."
          },
          {
            "q": "Speed sabse zyada kab fast hoti hai?",
            "a": "Usually late night ya early morning. Peak hours me congestion hoti hai."
          }
        ],
        "related": [
          {
            "title": "Jio Internet Slow",
            "slug": "jio-internet-slow",
            "category": "network"
          },
          {
            "title": "Airtel/Vi No Network",
            "slug": "airtel-vi-idea-no-network",
            "category": "network"
          }
        ],
        "keywords": [
          "network congestion slow",
          "mobile data issue",
          "apn fix",
          "internet slow fix"
        ],
        "variants": [
          "network congestion se internet slow",
          "network congestion se internet slow",
          "phone data issue",
          "internet slow problem"
        ]
      },
      {
        "slug": "volte-call-nahi-ja-rahi",
        "category": "network",
        "metaTitle": "VoLTE Call Nahi Ja Rahi? Calling Problem Fix Guide | JharForm",
        "metaDescription": "VoLTE Call Nahi Ja Rahi ka issue? VoLTE Call Nahi Ja Rahi ke piche network mode, VoLTE, barring, aur weak signal jaisi common wajah hoti hain. Yeh guide call ko stable karne ke practical steps batati hai. Simple Hinglish steps se fix karo.",
        "h1": "VoLTE Call Nahi Ja Rahi — Complete Hinglish Fix Guide",
        "lastUpdated": "May 2026",
        "readingTime": "4 min",
        "difficulty": "Easy",
        "description": "VoLTE Call Nahi Ja Rahi ke piche network mode, VoLTE, barring, aur weak signal jaisi common wajah hoti hain. Yeh guide call ko stable karne ke practical steps batati hai.",
        "steps": [
          {
            "title": "VoLTE/HD Calling on karo",
            "detail": "Settings > Mobile Network > VoLTE ya HD Calling ko on rakho. Isse call quality aur success rate improve hota hai."
          },
          {
            "title": "Airplane mode off-on karke network refresh karo",
            "detail": "10 second ke liye airplane mode on karo, phir off. Ye radio stack ko reset karta hai."
          },
          {
            "title": "Call barring/call forwarding check karo",
            "detail": "Kabhi kabhi settings me barring on hoti hai. Use off karo aur phir call test karo."
          },
          {
            "title": "Network mode auto rakho",
            "detail": "4G/3G/2G Auto use karo. Sirf 2G pe call routing weak ho sakti hai."
          },
          {
            "title": "SIM ko reseat ya दूसरे slot me try karo",
            "detail": "SIM tray nikaal ke wapas lagao. Dual SIM phone me slot change karke test karo."
          },
          {
            "title": "Operator support ya app se complaint karo",
            "detail": "Agar baar-baar call fail ho raha hai to network issue ho sakta hai."
          },
          {
            "title": "Ek test call doosre number pe karo",
            "detail": "Agar kisi ek number pe problem hai to issue side mismatch ho sakta hai. Test karke isolate karo."
          },
          {
            "title": "VoLTE/HD Calling setting on rakho",
            "detail": "Isse voice call stability aur clarity dono better hoti hain."
          }
        ],
        "screenshots": [
          {
            "caption": "VoLTE Call Nahi Ja Rahi issue screen showing warning banner, network status, aur quick settings shortcuts",
            "alt": "VoLTE Call Nahi Ja Rahi issue screen showing warning banner and quick settings shortcuts",
            "type": "phone",
            "mockupType": "volte-call-nahi-ja-rahi-screen-1"
          },
          {
            "caption": "Step-by-step fix screen for volte call nahi ja rahi with settings path, toggle buttons, aur status after fix note",
            "alt": "Step-by-step fix screen for VoLTE Call Nahi Ja Rahi with settings path and status after fix",
            "type": "phone",
            "mockupType": "volte-call-nahi-ja-rahi-screen-2"
          }
        ],
        "sources": [
          {
            "title": "TRAI Consumer Portal",
            "url": "https://www.trai.gov.in/consumer",
            "icon": "🏛️"
          },
          {
            "title": "Airtel Help",
            "url": "https://www.airtel.in/help",
            "icon": "📞"
          }
        ],
        "proTips": [
          "VoLTE aur HD Calling support on rakho",
          "Call settings mein barring aur forwarding check karo",
          "Weak signal pe calls drop hoti hain — location change karo"
        ],
        "faqs": [
          {
            "q": "Call connect nahi ho rahi to sabse pehle kya check karu?",
            "a": "Network bars, VoLTE, aur call barring settings check karo."
          },
          {
            "q": "Sirf ek hi number pe call fail ho rahi hai?",
            "a": "Ho sakta hai doosre side ka issue ho. Kisi aur number pe try karke compare karo."
          },
          {
            "q": "Voice distorted kyu lag rahi hai?",
            "a": "Weak signal, network congestion, ya handset mic/receiver issue ho sakta hai."
          },
          {
            "q": "WiFi calling kab use karni chahiye?",
            "a": "Jab indoor signal weak ho aur WiFi strong ho."
          }
        ],
        "related": [
          {
            "title": "Network Signal Kam Hai",
            "slug": "network-signal-kam-hai",
            "category": "network"
          },
          {
            "title": "Volte Icon Gayab",
            "slug": "volte-icon-gayab",
            "category": "network"
          }
        ],
        "keywords": [
          "volte call nahi ja rahi",
          "call failed",
          "volte issue",
          "voice issue"
        ],
        "variants": [
          "volte call nahi ja rahi",
          "call problem",
          "voice call issue",
          "calling not working"
        ]
      },
      {
        "slug": "outgoing-call-failed",
        "category": "network",
        "metaTitle": "Outgoing Call Failed? Calling Problem Fix Guide | JharForm",
        "metaDescription": "Outgoing Call Failed ka issue? Outgoing Call Failed ke piche network mode, VoLTE, barring, aur weak signal jaisi common wajah hoti hain. Yeh guide call ko stable karne ke practical steps batati hai. Simple Hinglish steps se fix karo.",
        "h1": "Outgoing Call Failed — Complete Hinglish Fix Guide",
        "lastUpdated": "May 2026",
        "readingTime": "4 min",
        "difficulty": "Easy",
        "description": "Outgoing Call Failed ke piche network mode, VoLTE, barring, aur weak signal jaisi common wajah hoti hain. Yeh guide call ko stable karne ke practical steps batati hai.",
        "steps": [
          {
            "title": "VoLTE/HD Calling on karo",
            "detail": "Settings > Mobile Network > VoLTE ya HD Calling ko on rakho. Isse call quality aur success rate improve hota hai."
          },
          {
            "title": "Airplane mode off-on karke network refresh karo",
            "detail": "10 second ke liye airplane mode on karo, phir off. Ye radio stack ko reset karta hai."
          },
          {
            "title": "Call barring/call forwarding check karo",
            "detail": "Kabhi kabhi settings me barring on hoti hai. Use off karo aur phir call test karo."
          },
          {
            "title": "Network mode auto rakho",
            "detail": "4G/3G/2G Auto use karo. Sirf 2G pe call routing weak ho sakti hai."
          },
          {
            "title": "SIM ko reseat ya दूसरे slot me try karo",
            "detail": "SIM tray nikaal ke wapas lagao. Dual SIM phone me slot change karke test karo."
          },
          {
            "title": "Operator support ya app se complaint karo",
            "detail": "Agar baar-baar call fail ho raha hai to network issue ho sakta hai."
          },
          {
            "title": "Ek test call doosre number pe karo",
            "detail": "Agar kisi ek number pe problem hai to issue side mismatch ho sakta hai. Test karke isolate karo."
          },
          {
            "title": "VoLTE/HD Calling setting on rakho",
            "detail": "Isse voice call stability aur clarity dono better hoti hain."
          }
        ],
        "screenshots": [
          {
            "caption": "Outgoing Call Failed issue screen showing warning banner, network status, aur quick settings shortcuts",
            "alt": "Outgoing Call Failed issue screen showing warning banner and quick settings shortcuts",
            "type": "phone",
            "mockupType": "outgoing-call-failed-screen-1"
          },
          {
            "caption": "Step-by-step fix screen for outgoing call failed with settings path, toggle buttons, aur status after fix note",
            "alt": "Step-by-step fix screen for Outgoing Call Failed with settings path and status after fix",
            "type": "phone",
            "mockupType": "outgoing-call-failed-screen-2"
          }
        ],
        "sources": [
          {
            "title": "TRAI Consumer Portal",
            "url": "https://www.trai.gov.in/consumer",
            "icon": "🏛️"
          },
          {
            "title": "Airtel Help",
            "url": "https://www.airtel.in/help",
            "icon": "📞"
          }
        ],
        "proTips": [
          "VoLTE aur HD Calling support on rakho",
          "Call settings mein barring aur forwarding check karo",
          "Weak signal pe calls drop hoti hain — location change karo"
        ],
        "faqs": [
          {
            "q": "Call connect nahi ho rahi to sabse pehle kya check karu?",
            "a": "Network bars, VoLTE, aur call barring settings check karo."
          },
          {
            "q": "Sirf ek hi number pe call fail ho rahi hai?",
            "a": "Ho sakta hai doosre side ka issue ho. Kisi aur number pe try karke compare karo."
          },
          {
            "q": "Voice distorted kyu lag rahi hai?",
            "a": "Weak signal, network congestion, ya handset mic/receiver issue ho sakta hai."
          },
          {
            "q": "WiFi calling kab use karni chahiye?",
            "a": "Jab indoor signal weak ho aur WiFi strong ho."
          }
        ],
        "related": [
          {
            "title": "Network Signal Kam Hai",
            "slug": "network-signal-kam-hai",
            "category": "network"
          },
          {
            "title": "Volte Icon Gayab",
            "slug": "volte-icon-gayab",
            "category": "network"
          }
        ],
        "keywords": [
          "outgoing call failed",
          "call failed",
          "volte issue",
          "voice issue"
        ],
        "variants": [
          "outgoing call failed",
          "call problem",
          "voice call issue",
          "calling not working"
        ]
      },
      {
        "slug": "incoming-call-nahi-aa-rahi",
        "category": "network",
        "metaTitle": "Incoming Call Nahi Aa Rahi? Calling Problem Fix Guide | JharForm",
        "metaDescription": "Incoming Call Nahi Aa Rahi ka issue? Incoming Call Nahi Aa Rahi ke piche network mode, VoLTE, barring, aur weak signal jaisi common wajah hoti hain. Yeh guide call ko stable karne ke practical steps batati hai. Simple Hinglish steps se fix karo.",
        "h1": "Incoming Call Nahi Aa Rahi — Complete Hinglish Fix Guide",
        "lastUpdated": "May 2026",
        "readingTime": "4 min",
        "difficulty": "Easy",
        "description": "Incoming Call Nahi Aa Rahi ke piche network mode, VoLTE, barring, aur weak signal jaisi common wajah hoti hain. Yeh guide call ko stable karne ke practical steps batati hai.",
        "steps": [
          {
            "title": "VoLTE/HD Calling on karo",
            "detail": "Settings > Mobile Network > VoLTE ya HD Calling ko on rakho. Isse call quality aur success rate improve hota hai."
          },
          {
            "title": "Airplane mode off-on karke network refresh karo",
            "detail": "10 second ke liye airplane mode on karo, phir off. Ye radio stack ko reset karta hai."
          },
          {
            "title": "Call barring/call forwarding check karo",
            "detail": "Kabhi kabhi settings me barring on hoti hai. Use off karo aur phir call test karo."
          },
          {
            "title": "Network mode auto rakho",
            "detail": "4G/3G/2G Auto use karo. Sirf 2G pe call routing weak ho sakti hai."
          },
          {
            "title": "SIM ko reseat ya दूसरे slot me try karo",
            "detail": "SIM tray nikaal ke wapas lagao. Dual SIM phone me slot change karke test karo."
          },
          {
            "title": "Operator support ya app se complaint karo",
            "detail": "Agar baar-baar call fail ho raha hai to network issue ho sakta hai."
          },
          {
            "title": "Ek test call doosre number pe karo",
            "detail": "Agar kisi ek number pe problem hai to issue side mismatch ho sakta hai. Test karke isolate karo."
          },
          {
            "title": "VoLTE/HD Calling setting on rakho",
            "detail": "Isse voice call stability aur clarity dono better hoti hain."
          }
        ],
        "screenshots": [
          {
            "caption": "Incoming Call Nahi Aa Rahi issue screen showing warning banner, network status, aur quick settings shortcuts",
            "alt": "Incoming Call Nahi Aa Rahi issue screen showing warning banner and quick settings shortcuts",
            "type": "phone",
            "mockupType": "incoming-call-nahi-aa-rahi-screen-1"
          },
          {
            "caption": "Step-by-step fix screen for incoming call nahi aa rahi with settings path, toggle buttons, aur status after fix note",
            "alt": "Step-by-step fix screen for Incoming Call Nahi Aa Rahi with settings path and status after fix",
            "type": "phone",
            "mockupType": "incoming-call-nahi-aa-rahi-screen-2"
          }
        ],
        "sources": [
          {
            "title": "TRAI Consumer Portal",
            "url": "https://www.trai.gov.in/consumer",
            "icon": "🏛️"
          },
          {
            "title": "Airtel Help",
            "url": "https://www.airtel.in/help",
            "icon": "📞"
          }
        ],
        "proTips": [
          "VoLTE aur HD Calling support on rakho",
          "Call settings mein barring aur forwarding check karo",
          "Weak signal pe calls drop hoti hain — location change karo"
        ],
        "faqs": [
          {
            "q": "Call connect nahi ho rahi to sabse pehle kya check karu?",
            "a": "Network bars, VoLTE, aur call barring settings check karo."
          },
          {
            "q": "Sirf ek hi number pe call fail ho rahi hai?",
            "a": "Ho sakta hai doosre side ka issue ho. Kisi aur number pe try karke compare karo."
          },
          {
            "q": "Voice distorted kyu lag rahi hai?",
            "a": "Weak signal, network congestion, ya handset mic/receiver issue ho sakta hai."
          },
          {
            "q": "WiFi calling kab use karni chahiye?",
            "a": "Jab indoor signal weak ho aur WiFi strong ho."
          }
        ],
        "related": [
          {
            "title": "Network Signal Kam Hai",
            "slug": "network-signal-kam-hai",
            "category": "network"
          },
          {
            "title": "Volte Icon Gayab",
            "slug": "volte-icon-gayab",
            "category": "network"
          }
        ],
        "keywords": [
          "incoming call nahi aa rahi",
          "call failed",
          "volte issue",
          "voice issue"
        ],
        "variants": [
          "incoming call nahi aa rahi",
          "call problem",
          "voice call issue",
          "calling not working"
        ]
      },
      {
        "slug": "call-drop-bahut-hota-hai",
        "category": "network",
        "metaTitle": "Call Drop Bahut Hota Hai? Calling Problem Fix Guide | JharForm",
        "metaDescription": "Call Drop Bahut Hota Hai ka issue? Call Drop Bahut Hota Hai ke piche network mode, VoLTE, barring, aur weak signal jaisi common wajah hoti hain. Yeh guide call ko stable karne ke practical steps batati hai. Simple Hinglish steps se fix karo.",
        "h1": "Call Drop Bahut Hota Hai — Complete Hinglish Fix Guide",
        "lastUpdated": "May 2026",
        "readingTime": "4 min",
        "difficulty": "Easy",
        "description": "Call Drop Bahut Hota Hai ke piche network mode, VoLTE, barring, aur weak signal jaisi common wajah hoti hain. Yeh guide call ko stable karne ke practical steps batati hai.",
        "steps": [
          {
            "title": "VoLTE/HD Calling on karo",
            "detail": "Settings > Mobile Network > VoLTE ya HD Calling ko on rakho. Isse call quality aur success rate improve hota hai."
          },
          {
            "title": "Airplane mode off-on karke network refresh karo",
            "detail": "10 second ke liye airplane mode on karo, phir off. Ye radio stack ko reset karta hai."
          },
          {
            "title": "Call barring/call forwarding check karo",
            "detail": "Kabhi kabhi settings me barring on hoti hai. Use off karo aur phir call test karo."
          },
          {
            "title": "Network mode auto rakho",
            "detail": "4G/3G/2G Auto use karo. Sirf 2G pe call routing weak ho sakti hai."
          },
          {
            "title": "SIM ko reseat ya दूसरे slot me try karo",
            "detail": "SIM tray nikaal ke wapas lagao. Dual SIM phone me slot change karke test karo."
          },
          {
            "title": "Operator support ya app se complaint karo",
            "detail": "Agar baar-baar call fail ho raha hai to network issue ho sakta hai."
          },
          {
            "title": "Ek test call doosre number pe karo",
            "detail": "Agar kisi ek number pe problem hai to issue side mismatch ho sakta hai. Test karke isolate karo."
          },
          {
            "title": "VoLTE/HD Calling setting on rakho",
            "detail": "Isse voice call stability aur clarity dono better hoti hain."
          }
        ],
        "screenshots": [
          {
            "caption": "Call Drop Bahut Hota Hai issue screen showing warning banner, network status, aur quick settings shortcuts",
            "alt": "Call Drop Bahut Hota Hai issue screen showing warning banner and quick settings shortcuts",
            "type": "phone",
            "mockupType": "call-drop-bahut-hota-hai-screen-1"
          },
          {
            "caption": "Step-by-step fix screen for call drop bahut hota hai with settings path, toggle buttons, aur status after fix note",
            "alt": "Step-by-step fix screen for Call Drop Bahut Hota Hai with settings path and status after fix",
            "type": "phone",
            "mockupType": "call-drop-bahut-hota-hai-screen-2"
          }
        ],
        "sources": [
          {
            "title": "TRAI Consumer Portal",
            "url": "https://www.trai.gov.in/consumer",
            "icon": "🏛️"
          },
          {
            "title": "Airtel Help",
            "url": "https://www.airtel.in/help",
            "icon": "📞"
          }
        ],
        "proTips": [
          "VoLTE aur HD Calling support on rakho",
          "Call settings mein barring aur forwarding check karo",
          "Weak signal pe calls drop hoti hain — location change karo"
        ],
        "faqs": [
          {
            "q": "Call connect nahi ho rahi to sabse pehle kya check karu?",
            "a": "Network bars, VoLTE, aur call barring settings check karo."
          },
          {
            "q": "Sirf ek hi number pe call fail ho rahi hai?",
            "a": "Ho sakta hai doosre side ka issue ho. Kisi aur number pe try karke compare karo."
          },
          {
            "q": "Voice distorted kyu lag rahi hai?",
            "a": "Weak signal, network congestion, ya handset mic/receiver issue ho sakta hai."
          },
          {
            "q": "WiFi calling kab use karni chahiye?",
            "a": "Jab indoor signal weak ho aur WiFi strong ho."
          }
        ],
        "related": [
          {
            "title": "Network Signal Kam Hai",
            "slug": "network-signal-kam-hai",
            "category": "network"
          },
          {
            "title": "Volte Icon Gayab",
            "slug": "volte-icon-gayab",
            "category": "network"
          }
        ],
        "keywords": [
          "call drop bahut hota hai",
          "call failed",
          "volte issue",
          "voice issue"
        ],
        "variants": [
          "call drop bahut hota hai",
          "call problem",
          "voice call issue",
          "calling not working"
        ]
      },
      {
        "slug": "voice-quality-bad-hai",
        "category": "network",
        "metaTitle": "Voice Quality Bad Hai? Calling Problem Fix Guide | JharForm",
        "metaDescription": "Voice Quality Bad Hai ka issue? Voice Quality Bad Hai ke piche network mode, VoLTE, barring, aur weak signal jaisi common wajah hoti hain. Yeh guide call ko stable karne ke practical steps batati hai. Simple Hinglish steps se fix karo.",
        "h1": "Voice Quality Bad Hai — Complete Hinglish Fix Guide",
        "lastUpdated": "May 2026",
        "readingTime": "4 min",
        "difficulty": "Easy",
        "description": "Voice Quality Bad Hai ke piche network mode, VoLTE, barring, aur weak signal jaisi common wajah hoti hain. Yeh guide call ko stable karne ke practical steps batati hai.",
        "steps": [
          {
            "title": "VoLTE/HD Calling on karo",
            "detail": "Settings > Mobile Network > VoLTE ya HD Calling ko on rakho. Isse call quality aur success rate improve hota hai."
          },
          {
            "title": "Airplane mode off-on karke network refresh karo",
            "detail": "10 second ke liye airplane mode on karo, phir off. Ye radio stack ko reset karta hai."
          },
          {
            "title": "Call barring/call forwarding check karo",
            "detail": "Kabhi kabhi settings me barring on hoti hai. Use off karo aur phir call test karo."
          },
          {
            "title": "Network mode auto rakho",
            "detail": "4G/3G/2G Auto use karo. Sirf 2G pe call routing weak ho sakti hai."
          },
          {
            "title": "SIM ko reseat ya दूसरे slot me try karo",
            "detail": "SIM tray nikaal ke wapas lagao. Dual SIM phone me slot change karke test karo."
          },
          {
            "title": "Operator support ya app se complaint karo",
            "detail": "Agar baar-baar call fail ho raha hai to network issue ho sakta hai."
          },
          {
            "title": "Ek test call doosre number pe karo",
            "detail": "Agar kisi ek number pe problem hai to issue side mismatch ho sakta hai. Test karke isolate karo."
          },
          {
            "title": "VoLTE/HD Calling setting on rakho",
            "detail": "Isse voice call stability aur clarity dono better hoti hain."
          }
        ],
        "screenshots": [
          {
            "caption": "Voice Quality Bad Hai issue screen showing warning banner, network status, aur quick settings shortcuts",
            "alt": "Voice Quality Bad Hai issue screen showing warning banner and quick settings shortcuts",
            "type": "phone",
            "mockupType": "voice-quality-bad-hai-screen-1"
          },
          {
            "caption": "Step-by-step fix screen for voice quality bad hai with settings path, toggle buttons, aur status after fix note",
            "alt": "Step-by-step fix screen for Voice Quality Bad Hai with settings path and status after fix",
            "type": "phone",
            "mockupType": "voice-quality-bad-hai-screen-2"
          }
        ],
        "sources": [
          {
            "title": "TRAI Consumer Portal",
            "url": "https://www.trai.gov.in/consumer",
            "icon": "🏛️"
          },
          {
            "title": "Airtel Help",
            "url": "https://www.airtel.in/help",
            "icon": "📞"
          }
        ],
        "proTips": [
          "VoLTE aur HD Calling support on rakho",
          "Call settings mein barring aur forwarding check karo",
          "Weak signal pe calls drop hoti hain — location change karo"
        ],
        "faqs": [
          {
            "q": "Call connect nahi ho rahi to sabse pehle kya check karu?",
            "a": "Network bars, VoLTE, aur call barring settings check karo."
          },
          {
            "q": "Sirf ek hi number pe call fail ho rahi hai?",
            "a": "Ho sakta hai doosre side ka issue ho. Kisi aur number pe try karke compare karo."
          },
          {
            "q": "Voice distorted kyu lag rahi hai?",
            "a": "Weak signal, network congestion, ya handset mic/receiver issue ho sakta hai."
          },
          {
            "q": "WiFi calling kab use karni chahiye?",
            "a": "Jab indoor signal weak ho aur WiFi strong ho."
          }
        ],
        "related": [
          {
            "title": "Network Signal Kam Hai",
            "slug": "network-signal-kam-hai",
            "category": "network"
          },
          {
            "title": "Volte Icon Gayab",
            "slug": "volte-icon-gayab",
            "category": "network"
          }
        ],
        "keywords": [
          "voice quality bad hai",
          "call failed",
          "volte issue",
          "voice issue"
        ],
        "variants": [
          "voice quality bad hai",
          "call problem",
          "voice call issue",
          "calling not working"
        ]
      },
      {
        "slug": "volte-icon-gayab",
        "category": "network",
        "metaTitle": "VoLTE Icon Gayab? Calling Problem Fix Guide | JharForm",
        "metaDescription": "VoLTE Icon Gayab ka issue? VoLTE Icon Gayab ke piche network mode, VoLTE, barring, aur weak signal jaisi common wajah hoti hain. Yeh guide call ko stable karne ke practical steps batati hai. Simple Hinglish steps se fix karo.",
        "h1": "VoLTE Icon Gayab — Complete Hinglish Fix Guide",
        "lastUpdated": "May 2026",
        "readingTime": "4 min",
        "difficulty": "Easy",
        "description": "VoLTE Icon Gayab ke piche network mode, VoLTE, barring, aur weak signal jaisi common wajah hoti hain. Yeh guide call ko stable karne ke practical steps batati hai.",
        "steps": [
          {
            "title": "VoLTE/HD Calling on karo",
            "detail": "Settings > Mobile Network > VoLTE ya HD Calling ko on rakho. Isse call quality aur success rate improve hota hai."
          },
          {
            "title": "Airplane mode off-on karke network refresh karo",
            "detail": "10 second ke liye airplane mode on karo, phir off. Ye radio stack ko reset karta hai."
          },
          {
            "title": "Call barring/call forwarding check karo",
            "detail": "Kabhi kabhi settings me barring on hoti hai. Use off karo aur phir call test karo."
          },
          {
            "title": "Network mode auto rakho",
            "detail": "4G/3G/2G Auto use karo. Sirf 2G pe call routing weak ho sakti hai."
          },
          {
            "title": "SIM ko reseat ya दूसरे slot me try karo",
            "detail": "SIM tray nikaal ke wapas lagao. Dual SIM phone me slot change karke test karo."
          },
          {
            "title": "Operator support ya app se complaint karo",
            "detail": "Agar baar-baar call fail ho raha hai to network issue ho sakta hai."
          },
          {
            "title": "Ek test call doosre number pe karo",
            "detail": "Agar kisi ek number pe problem hai to issue side mismatch ho sakta hai. Test karke isolate karo."
          },
          {
            "title": "VoLTE/HD Calling setting on rakho",
            "detail": "Isse voice call stability aur clarity dono better hoti hain."
          }
        ],
        "screenshots": [
          {
            "caption": "VoLTE Icon Gayab issue screen showing warning banner, network status, aur quick settings shortcuts",
            "alt": "VoLTE Icon Gayab issue screen showing warning banner and quick settings shortcuts",
            "type": "phone",
            "mockupType": "volte-icon-gayab-screen-1"
          },
          {
            "caption": "Step-by-step fix screen for volte icon gayab with settings path, toggle buttons, aur status after fix note",
            "alt": "Step-by-step fix screen for VoLTE Icon Gayab with settings path and status after fix",
            "type": "phone",
            "mockupType": "volte-icon-gayab-screen-2"
          }
        ],
        "sources": [
          {
            "title": "TRAI Consumer Portal",
            "url": "https://www.trai.gov.in/consumer",
            "icon": "🏛️"
          },
          {
            "title": "Airtel Help",
            "url": "https://www.airtel.in/help",
            "icon": "📞"
          }
        ],
        "proTips": [
          "VoLTE aur HD Calling support on rakho",
          "Call settings mein barring aur forwarding check karo",
          "Weak signal pe calls drop hoti hain — location change karo"
        ],
        "faqs": [
          {
            "q": "Call connect nahi ho rahi to sabse pehle kya check karu?",
            "a": "Network bars, VoLTE, aur call barring settings check karo."
          },
          {
            "q": "Sirf ek hi number pe call fail ho rahi hai?",
            "a": "Ho sakta hai doosre side ka issue ho. Kisi aur number pe try karke compare karo."
          },
          {
            "q": "Voice distorted kyu lag rahi hai?",
            "a": "Weak signal, network congestion, ya handset mic/receiver issue ho sakta hai."
          },
          {
            "q": "WiFi calling kab use karni chahiye?",
            "a": "Jab indoor signal weak ho aur WiFi strong ho."
          }
        ],
        "related": [
          {
            "title": "Network Signal Kam Hai",
            "slug": "network-signal-kam-hai",
            "category": "network"
          },
          {
            "title": "Volte Icon Gayab",
            "slug": "volte-icon-gayab",
            "category": "network"
          }
        ],
        "keywords": [
          "volte icon gayab",
          "call failed",
          "volte issue",
          "voice issue"
        ],
        "variants": [
          "volte icon gayab",
          "call problem",
          "voice call issue",
          "calling not working"
        ]
      },
      {
        "slug": "wifi-calling-not-working",
        "category": "network",
        "metaTitle": "WiFi Calling Not Working? Calling Problem Fix Guide | JharForm",
        "metaDescription": "WiFi Calling Not Working ka issue? WiFi Calling Not Working ke piche network mode, VoLTE, barring, aur weak signal jaisi common wajah hoti hain. Yeh guide call ko stable karne ke practical steps batati hai. Simple Hinglish steps se fix karo.",
        "h1": "WiFi Calling Not Working — Complete Hinglish Fix Guide",
        "lastUpdated": "May 2026",
        "readingTime": "4 min",
        "difficulty": "Easy",
        "description": "WiFi Calling Not Working ke piche network mode, VoLTE, barring, aur weak signal jaisi common wajah hoti hain. Yeh guide call ko stable karne ke practical steps batati hai.",
        "steps": [
          {
            "title": "VoLTE/HD Calling on karo",
            "detail": "Settings > Mobile Network > VoLTE ya HD Calling ko on rakho. Isse call quality aur success rate improve hota hai."
          },
          {
            "title": "Airplane mode off-on karke network refresh karo",
            "detail": "10 second ke liye airplane mode on karo, phir off. Ye radio stack ko reset karta hai."
          },
          {
            "title": "Call barring/call forwarding check karo",
            "detail": "Kabhi kabhi settings me barring on hoti hai. Use off karo aur phir call test karo."
          },
          {
            "title": "Network mode auto rakho",
            "detail": "4G/3G/2G Auto use karo. Sirf 2G pe call routing weak ho sakti hai."
          },
          {
            "title": "SIM ko reseat ya दूसरे slot me try karo",
            "detail": "SIM tray nikaal ke wapas lagao. Dual SIM phone me slot change karke test karo."
          },
          {
            "title": "Operator support ya app se complaint karo",
            "detail": "Agar baar-baar call fail ho raha hai to network issue ho sakta hai."
          },
          {
            "title": "Ek test call doosre number pe karo",
            "detail": "Agar kisi ek number pe problem hai to issue side mismatch ho sakta hai. Test karke isolate karo."
          },
          {
            "title": "VoLTE/HD Calling setting on rakho",
            "detail": "Isse voice call stability aur clarity dono better hoti hain."
          }
        ],
        "screenshots": [
          {
            "caption": "WiFi Calling Not Working issue screen showing warning banner, network status, aur quick settings shortcuts",
            "alt": "WiFi Calling Not Working issue screen showing warning banner and quick settings shortcuts",
            "type": "phone",
            "mockupType": "wifi-calling-not-working-screen-1"
          },
          {
            "caption": "Step-by-step fix screen for wifi calling not working with settings path, toggle buttons, aur status after fix note",
            "alt": "Step-by-step fix screen for WiFi Calling Not Working with settings path and status after fix",
            "type": "phone",
            "mockupType": "wifi-calling-not-working-screen-2"
          }
        ],
        "sources": [
          {
            "title": "TRAI Consumer Portal",
            "url": "https://www.trai.gov.in/consumer",
            "icon": "🏛️"
          },
          {
            "title": "Airtel Help",
            "url": "https://www.airtel.in/help",
            "icon": "📞"
          }
        ],
        "proTips": [
          "VoLTE aur HD Calling support on rakho",
          "Call settings mein barring aur forwarding check karo",
          "Weak signal pe calls drop hoti hain — location change karo"
        ],
        "faqs": [
          {
            "q": "Call connect nahi ho rahi to sabse pehle kya check karu?",
            "a": "Network bars, VoLTE, aur call barring settings check karo."
          },
          {
            "q": "Sirf ek hi number pe call fail ho rahi hai?",
            "a": "Ho sakta hai doosre side ka issue ho. Kisi aur number pe try karke compare karo."
          },
          {
            "q": "Voice distorted kyu lag rahi hai?",
            "a": "Weak signal, network congestion, ya handset mic/receiver issue ho sakta hai."
          },
          {
            "q": "WiFi calling kab use karni chahiye?",
            "a": "Jab indoor signal weak ho aur WiFi strong ho."
          }
        ],
        "related": [
          {
            "title": "Network Signal Kam Hai",
            "slug": "network-signal-kam-hai",
            "category": "network"
          },
          {
            "title": "Volte Icon Gayab",
            "slug": "volte-icon-gayab",
            "category": "network"
          }
        ],
        "keywords": [
          "wifi calling not working",
          "call failed",
          "volte issue",
          "voice issue"
        ],
        "variants": [
          "wifi calling not working",
          "call problem",
          "voice call issue",
          "calling not working"
        ]
      },
      {
        "slug": "call-barring-on-hai",
        "category": "network",
        "metaTitle": "Call Barring On Hai? Calling Problem Fix Guide | JharForm",
        "metaDescription": "Call Barring On Hai ka issue? Call Barring On Hai ke piche network mode, VoLTE, barring, aur weak signal jaisi common wajah hoti hain. Yeh guide call ko stable karne ke practical steps batati hai. Simple Hinglish steps se fix karo.",
        "h1": "Call Barring On Hai — Complete Hinglish Fix Guide",
        "lastUpdated": "May 2026",
        "readingTime": "4 min",
        "difficulty": "Easy",
        "description": "Call Barring On Hai ke piche network mode, VoLTE, barring, aur weak signal jaisi common wajah hoti hain. Yeh guide call ko stable karne ke practical steps batati hai.",
        "steps": [
          {
            "title": "VoLTE/HD Calling on karo",
            "detail": "Settings > Mobile Network > VoLTE ya HD Calling ko on rakho. Isse call quality aur success rate improve hota hai."
          },
          {
            "title": "Airplane mode off-on karke network refresh karo",
            "detail": "10 second ke liye airplane mode on karo, phir off. Ye radio stack ko reset karta hai."
          },
          {
            "title": "Call barring/call forwarding check karo",
            "detail": "Kabhi kabhi settings me barring on hoti hai. Use off karo aur phir call test karo."
          },
          {
            "title": "Network mode auto rakho",
            "detail": "4G/3G/2G Auto use karo. Sirf 2G pe call routing weak ho sakti hai."
          },
          {
            "title": "SIM ko reseat ya दूसरे slot me try karo",
            "detail": "SIM tray nikaal ke wapas lagao. Dual SIM phone me slot change karke test karo."
          },
          {
            "title": "Operator support ya app se complaint karo",
            "detail": "Agar baar-baar call fail ho raha hai to network issue ho sakta hai."
          },
          {
            "title": "Ek test call doosre number pe karo",
            "detail": "Agar kisi ek number pe problem hai to issue side mismatch ho sakta hai. Test karke isolate karo."
          },
          {
            "title": "VoLTE/HD Calling setting on rakho",
            "detail": "Isse voice call stability aur clarity dono better hoti hain."
          }
        ],
        "screenshots": [
          {
            "caption": "Call Barring On Hai issue screen showing warning banner, network status, aur quick settings shortcuts",
            "alt": "Call Barring On Hai issue screen showing warning banner and quick settings shortcuts",
            "type": "phone",
            "mockupType": "call-barring-on-hai-screen-1"
          },
          {
            "caption": "Step-by-step fix screen for call barring on hai with settings path, toggle buttons, aur status after fix note",
            "alt": "Step-by-step fix screen for Call Barring On Hai with settings path and status after fix",
            "type": "phone",
            "mockupType": "call-barring-on-hai-screen-2"
          }
        ],
        "sources": [
          {
            "title": "TRAI Consumer Portal",
            "url": "https://www.trai.gov.in/consumer",
            "icon": "🏛️"
          },
          {
            "title": "Airtel Help",
            "url": "https://www.airtel.in/help",
            "icon": "📞"
          }
        ],
        "proTips": [
          "VoLTE aur HD Calling support on rakho",
          "Call settings mein barring aur forwarding check karo",
          "Weak signal pe calls drop hoti hain — location change karo"
        ],
        "faqs": [
          {
            "q": "Call connect nahi ho rahi to sabse pehle kya check karu?",
            "a": "Network bars, VoLTE, aur call barring settings check karo."
          },
          {
            "q": "Sirf ek hi number pe call fail ho rahi hai?",
            "a": "Ho sakta hai doosre side ka issue ho. Kisi aur number pe try karke compare karo."
          },
          {
            "q": "Voice distorted kyu lag rahi hai?",
            "a": "Weak signal, network congestion, ya handset mic/receiver issue ho sakta hai."
          },
          {
            "q": "WiFi calling kab use karni chahiye?",
            "a": "Jab indoor signal weak ho aur WiFi strong ho."
          }
        ],
        "related": [
          {
            "title": "Network Signal Kam Hai",
            "slug": "network-signal-kam-hai",
            "category": "network"
          },
          {
            "title": "Volte Icon Gayab",
            "slug": "volte-icon-gayab",
            "category": "network"
          }
        ],
        "keywords": [
          "call barring on hai",
          "call failed",
          "volte issue",
          "voice issue"
        ],
        "variants": [
          "call barring on hai",
          "call problem",
          "voice call issue",
          "calling not working"
        ]
      },
      {
        "slug": "sim-activate-kaise-kare",
        "category": "network",
        "metaTitle": "SIM Activate Kaise Kare? SIM Repair & Activation Guide | JharForm",
        "metaDescription": "SIM Activate Kaise Kare ka issue? SIM Activate Kaise Kare ka issue SIM status, KYC, slot damage, ya purani SIM ki wajah se aa sakta hai. Is page me activation aur replacement ka clear solution hai. Simple Hinglish steps se fix karo.",
        "h1": "SIM Activate Kaise Kare — Complete Hinglish Fix Guide",
        "lastUpdated": "May 2026",
        "readingTime": "4 min",
        "difficulty": "Easy",
        "description": "SIM Activate Kaise Kare ka issue SIM status, KYC, slot damage, ya purani SIM ki wajah se aa sakta hai. Is page me activation aur replacement ka clear solution hai.",
        "steps": [
          {
            "title": "SIM tray nikaal ke card reseat karo",
            "detail": "SIM ko soft cloth se saaf karke correct orientation me wapas lagao."
          },
          {
            "title": "Doosre phone mein SIM test karo",
            "detail": "Agar wahan bhi issue hai to SIM kharab ya block ho sakti hai."
          },
          {
            "title": "KYC aur active status check karo",
            "detail": "Suspended ya pending KYC se service off ho sakti hai."
          },
          {
            "title": "Old SIM ho to replacement lo",
            "detail": "Purani SIM 4G/VoLTE support miss kar sakti hai."
          },
          {
            "title": "PIN/PUK ya blocking issue fix karo",
            "detail": "Wrong PIN attempts se SIM lock ho jaati hai; operator se PUK reset karo."
          },
          {
            "title": "Store ya customer support se reissue karwao",
            "detail": "Same number ki duplicate SIM issue karwao with ID proof."
          },
          {
            "title": "SIM ko दूसरे phone me test karo",
            "detail": "Agar wahan bhi same issue hai to SIM replacement ya KYC fix karwana padega."
          },
          {
            "title": "Old SIM ho to replacement lo",
            "detail": "Purani SIM card often 4G/VoLTE issues deti hai. Store se same number SIM mil jaati hai."
          }
        ],
        "screenshots": [
          {
            "caption": "SIM Activate Kaise Kare issue screen showing warning banner, network status, aur quick settings shortcuts",
            "alt": "SIM Activate Kaise Kare issue screen showing warning banner and quick settings shortcuts",
            "type": "phone",
            "mockupType": "sim-activate-kaise-kare-screen-1"
          },
          {
            "caption": "Step-by-step fix screen for sim activate kaise kare with settings path, toggle buttons, aur status after fix note",
            "alt": "Step-by-step fix screen for SIM Activate Kaise Kare with settings path and status after fix",
            "type": "phone",
            "mockupType": "sim-activate-kaise-kare-screen-2"
          }
        ],
        "sources": [
          {
            "title": "DoT Sanchar Saathi",
            "url": "https://www.sancharsaathi.gov.in/",
            "icon": "🏛️"
          },
          {
            "title": "Airtel Help",
            "url": "https://www.airtel.in/help",
            "icon": "📞"
          }
        ],
        "proTips": [
          "SIM tray aur gold contacts ko clean rakho",
          "Old SIM replace karna cheap aur effective hota hai",
          "KYC updated ho to activation fast hoti hai"
        ],
        "faqs": [
          {
            "q": "No SIM error aata hai to kya karu?",
            "a": "SIM reseat, another phone test, aur network settings reset karo."
          },
          {
            "q": "SIM block ho gayi to number delete ho jata hai?",
            "a": "Nahi, number same rehta hai. Replacement SIM se service wapas aa jaati hai."
          },
          {
            "q": "SIM PIN bhool gaya to pukhta solution kya hai?",
            "a": "PUK code ya operator app/store se reset. 3 wrong attempts ke baad SIM lock ho sakti hai."
          },
          {
            "q": "Duplicate SIM mil jaati hai?",
            "a": "Haan, same number ke liye operator store se duplicate SIM issue hoti hai with ID proof."
          }
        ],
        "related": [
          {
            "title": "Airtel/Vi No Network",
            "slug": "airtel-vi-idea-no-network",
            "category": "network"
          },
          {
            "title": "SIM Not Detected",
            "slug": "sim-not-detected-phone-mein",
            "category": "network"
          }
        ],
        "keywords": [
          "sim activate kaise kare",
          "sim problem",
          "sim activation",
          "sim blocked"
        ],
        "variants": [
          "sim activate kaise kare",
          "sim issue",
          "card not detected",
          "sim activation problem"
        ]
      },
      {
        "slug": "sim-block-ho-gaya",
        "category": "network",
        "metaTitle": "SIM Block Ho Gaya? SIM Repair & Activation Guide | JharForm",
        "metaDescription": "SIM Block Ho Gaya ka issue? SIM Block Ho Gaya ka issue SIM status, KYC, slot damage, ya purani SIM ki wajah se aa sakta hai. Is page me activation aur replacement ka clear solution hai. Simple Hinglish steps se fix karo.",
        "h1": "SIM Block Ho Gaya — Complete Hinglish Fix Guide",
        "lastUpdated": "May 2026",
        "readingTime": "4 min",
        "difficulty": "Easy",
        "description": "SIM Block Ho Gaya ka issue SIM status, KYC, slot damage, ya purani SIM ki wajah se aa sakta hai. Is page me activation aur replacement ka clear solution hai.",
        "steps": [
          {
            "title": "SIM tray nikaal ke card reseat karo",
            "detail": "SIM ko soft cloth se saaf karke correct orientation me wapas lagao."
          },
          {
            "title": "Doosre phone mein SIM test karo",
            "detail": "Agar wahan bhi issue hai to SIM kharab ya block ho sakti hai."
          },
          {
            "title": "KYC aur active status check karo",
            "detail": "Suspended ya pending KYC se service off ho sakti hai."
          },
          {
            "title": "Old SIM ho to replacement lo",
            "detail": "Purani SIM 4G/VoLTE support miss kar sakti hai."
          },
          {
            "title": "PIN/PUK ya blocking issue fix karo",
            "detail": "Wrong PIN attempts se SIM lock ho jaati hai; operator se PUK reset karo."
          },
          {
            "title": "Store ya customer support se reissue karwao",
            "detail": "Same number ki duplicate SIM issue karwao with ID proof."
          },
          {
            "title": "SIM ko दूसरे phone me test karo",
            "detail": "Agar wahan bhi same issue hai to SIM replacement ya KYC fix karwana padega."
          },
          {
            "title": "Old SIM ho to replacement lo",
            "detail": "Purani SIM card often 4G/VoLTE issues deti hai. Store se same number SIM mil jaati hai."
          }
        ],
        "screenshots": [
          {
            "caption": "SIM Block Ho Gaya issue screen showing warning banner, network status, aur quick settings shortcuts",
            "alt": "SIM Block Ho Gaya issue screen showing warning banner and quick settings shortcuts",
            "type": "phone",
            "mockupType": "sim-block-ho-gaya-screen-1"
          },
          {
            "caption": "Step-by-step fix screen for sim block ho gaya with settings path, toggle buttons, aur status after fix note",
            "alt": "Step-by-step fix screen for SIM Block Ho Gaya with settings path and status after fix",
            "type": "phone",
            "mockupType": "sim-block-ho-gaya-screen-2"
          }
        ],
        "sources": [
          {
            "title": "DoT Sanchar Saathi",
            "url": "https://www.sancharsaathi.gov.in/",
            "icon": "🏛️"
          },
          {
            "title": "Airtel Help",
            "url": "https://www.airtel.in/help",
            "icon": "📞"
          }
        ],
        "proTips": [
          "SIM tray aur gold contacts ko clean rakho",
          "Old SIM replace karna cheap aur effective hota hai",
          "KYC updated ho to activation fast hoti hai"
        ],
        "faqs": [
          {
            "q": "No SIM error aata hai to kya karu?",
            "a": "SIM reseat, another phone test, aur network settings reset karo."
          },
          {
            "q": "SIM block ho gayi to number delete ho jata hai?",
            "a": "Nahi, number same rehta hai. Replacement SIM se service wapas aa jaati hai."
          },
          {
            "q": "SIM PIN bhool gaya to pukhta solution kya hai?",
            "a": "PUK code ya operator app/store se reset. 3 wrong attempts ke baad SIM lock ho sakti hai."
          },
          {
            "q": "Duplicate SIM mil jaati hai?",
            "a": "Haan, same number ke liye operator store se duplicate SIM issue hoti hai with ID proof."
          }
        ],
        "related": [
          {
            "title": "Airtel/Vi No Network",
            "slug": "airtel-vi-idea-no-network",
            "category": "network"
          },
          {
            "title": "SIM Not Detected",
            "slug": "sim-not-detected-phone-mein",
            "category": "network"
          }
        ],
        "keywords": [
          "sim block ho gaya",
          "sim problem",
          "sim activation",
          "sim blocked"
        ],
        "variants": [
          "sim block ho gaya",
          "sim issue",
          "card not detected",
          "sim activation problem"
        ]
      },
      {
        "slug": "sim-pin-bhool-gaya",
        "category": "network",
        "metaTitle": "SIM PIN Bhool Gaya? SIM Repair & Activation Guide | JharForm",
        "metaDescription": "SIM PIN Bhool Gaya ka issue? SIM PIN Bhool Gaya ka issue SIM status, KYC, slot damage, ya purani SIM ki wajah se aa sakta hai. Is page me activation aur replacement ka clear solution hai. Simple Hinglish steps se fix karo.",
        "h1": "SIM PIN Bhool Gaya — Complete Hinglish Fix Guide",
        "lastUpdated": "May 2026",
        "readingTime": "4 min",
        "difficulty": "Easy",
        "description": "SIM PIN Bhool Gaya ka issue SIM status, KYC, slot damage, ya purani SIM ki wajah se aa sakta hai. Is page me activation aur replacement ka clear solution hai.",
        "steps": [
          {
            "title": "SIM tray nikaal ke card reseat karo",
            "detail": "SIM ko soft cloth se saaf karke correct orientation me wapas lagao."
          },
          {
            "title": "Doosre phone mein SIM test karo",
            "detail": "Agar wahan bhi issue hai to SIM kharab ya block ho sakti hai."
          },
          {
            "title": "KYC aur active status check karo",
            "detail": "Suspended ya pending KYC se service off ho sakti hai."
          },
          {
            "title": "Old SIM ho to replacement lo",
            "detail": "Purani SIM 4G/VoLTE support miss kar sakti hai."
          },
          {
            "title": "PIN/PUK ya blocking issue fix karo",
            "detail": "Wrong PIN attempts se SIM lock ho jaati hai; operator se PUK reset karo."
          },
          {
            "title": "Store ya customer support se reissue karwao",
            "detail": "Same number ki duplicate SIM issue karwao with ID proof."
          },
          {
            "title": "SIM ko दूसरे phone me test karo",
            "detail": "Agar wahan bhi same issue hai to SIM replacement ya KYC fix karwana padega."
          },
          {
            "title": "Old SIM ho to replacement lo",
            "detail": "Purani SIM card often 4G/VoLTE issues deti hai. Store se same number SIM mil jaati hai."
          }
        ],
        "screenshots": [
          {
            "caption": "SIM PIN Bhool Gaya issue screen showing warning banner, network status, aur quick settings shortcuts",
            "alt": "SIM PIN Bhool Gaya issue screen showing warning banner and quick settings shortcuts",
            "type": "phone",
            "mockupType": "sim-pin-bhool-gaya-screen-1"
          },
          {
            "caption": "Step-by-step fix screen for sim pin bhool gaya with settings path, toggle buttons, aur status after fix note",
            "alt": "Step-by-step fix screen for SIM PIN Bhool Gaya with settings path and status after fix",
            "type": "phone",
            "mockupType": "sim-pin-bhool-gaya-screen-2"
          }
        ],
        "sources": [
          {
            "title": "DoT Sanchar Saathi",
            "url": "https://www.sancharsaathi.gov.in/",
            "icon": "🏛️"
          },
          {
            "title": "Airtel Help",
            "url": "https://www.airtel.in/help",
            "icon": "📞"
          }
        ],
        "proTips": [
          "SIM tray aur gold contacts ko clean rakho",
          "Old SIM replace karna cheap aur effective hota hai",
          "KYC updated ho to activation fast hoti hai"
        ],
        "faqs": [
          {
            "q": "No SIM error aata hai to kya karu?",
            "a": "SIM reseat, another phone test, aur network settings reset karo."
          },
          {
            "q": "SIM block ho gayi to number delete ho jata hai?",
            "a": "Nahi, number same rehta hai. Replacement SIM se service wapas aa jaati hai."
          },
          {
            "q": "SIM PIN bhool gaya to pukhta solution kya hai?",
            "a": "PUK code ya operator app/store se reset. 3 wrong attempts ke baad SIM lock ho sakti hai."
          },
          {
            "q": "Duplicate SIM mil jaati hai?",
            "a": "Haan, same number ke liye operator store se duplicate SIM issue hoti hai with ID proof."
          }
        ],
        "related": [
          {
            "title": "Airtel/Vi No Network",
            "slug": "airtel-vi-idea-no-network",
            "category": "network"
          },
          {
            "title": "SIM Not Detected",
            "slug": "sim-not-detected-phone-mein",
            "category": "network"
          }
        ],
        "keywords": [
          "sim pin bhool gaya",
          "sim problem",
          "sim activation",
          "sim blocked"
        ],
        "variants": [
          "sim pin bhool gaya",
          "sim issue",
          "card not detected",
          "sim activation problem"
        ]
      },
      {
        "slug": "kyc-pending-sim-service-off",
        "category": "network",
        "metaTitle": "KYC Pending Se SIM Service Off? SIM Repair & Activation Guide | JharForm",
        "metaDescription": "KYC Pending Se SIM Service Off ka issue? KYC Pending Se SIM Service Off ka issue SIM status, KYC, slot damage, ya purani SIM ki wajah se aa sakta hai. Is page me activation aur replacement ka clear solution hai. Simple Hinglish steps se fix karo.",
        "h1": "KYC Pending Se SIM Service Off — Complete Hinglish Fix Guide",
        "lastUpdated": "May 2026",
        "readingTime": "4 min",
        "difficulty": "Easy",
        "description": "KYC Pending Se SIM Service Off ka issue SIM status, KYC, slot damage, ya purani SIM ki wajah se aa sakta hai. Is page me activation aur replacement ka clear solution hai.",
        "steps": [
          {
            "title": "SIM tray nikaal ke card reseat karo",
            "detail": "SIM ko soft cloth se saaf karke correct orientation me wapas lagao."
          },
          {
            "title": "Doosre phone mein SIM test karo",
            "detail": "Agar wahan bhi issue hai to SIM kharab ya block ho sakti hai."
          },
          {
            "title": "KYC aur active status check karo",
            "detail": "Suspended ya pending KYC se service off ho sakti hai."
          },
          {
            "title": "Old SIM ho to replacement lo",
            "detail": "Purani SIM 4G/VoLTE support miss kar sakti hai."
          },
          {
            "title": "PIN/PUK ya blocking issue fix karo",
            "detail": "Wrong PIN attempts se SIM lock ho jaati hai; operator se PUK reset karo."
          },
          {
            "title": "Store ya customer support se reissue karwao",
            "detail": "Same number ki duplicate SIM issue karwao with ID proof."
          },
          {
            "title": "SIM ko दूसरे phone me test karo",
            "detail": "Agar wahan bhi same issue hai to SIM replacement ya KYC fix karwana padega."
          },
          {
            "title": "Old SIM ho to replacement lo",
            "detail": "Purani SIM card often 4G/VoLTE issues deti hai. Store se same number SIM mil jaati hai."
          }
        ],
        "screenshots": [
          {
            "caption": "KYC Pending Se SIM Service Off issue screen showing warning banner, network status, aur quick settings shortcuts",
            "alt": "KYC Pending Se SIM Service Off issue screen showing warning banner and quick settings shortcuts",
            "type": "phone",
            "mockupType": "kyc-pending-sim-service-off-screen-1"
          },
          {
            "caption": "Step-by-step fix screen for kyc pending se sim service off with settings path, toggle buttons, aur status after fix note",
            "alt": "Step-by-step fix screen for KYC Pending Se SIM Service Off with settings path and status after fix",
            "type": "phone",
            "mockupType": "kyc-pending-sim-service-off-screen-2"
          }
        ],
        "sources": [
          {
            "title": "DoT Sanchar Saathi",
            "url": "https://www.sancharsaathi.gov.in/",
            "icon": "🏛️"
          },
          {
            "title": "Airtel Help",
            "url": "https://www.airtel.in/help",
            "icon": "📞"
          }
        ],
        "proTips": [
          "SIM tray aur gold contacts ko clean rakho",
          "Old SIM replace karna cheap aur effective hota hai",
          "KYC updated ho to activation fast hoti hai"
        ],
        "faqs": [
          {
            "q": "No SIM error aata hai to kya karu?",
            "a": "SIM reseat, another phone test, aur network settings reset karo."
          },
          {
            "q": "SIM block ho gayi to number delete ho jata hai?",
            "a": "Nahi, number same rehta hai. Replacement SIM se service wapas aa jaati hai."
          },
          {
            "q": "SIM PIN bhool gaya to pukhta solution kya hai?",
            "a": "PUK code ya operator app/store se reset. 3 wrong attempts ke baad SIM lock ho sakti hai."
          },
          {
            "q": "Duplicate SIM mil jaati hai?",
            "a": "Haan, same number ke liye operator store se duplicate SIM issue hoti hai with ID proof."
          }
        ],
        "related": [
          {
            "title": "Airtel/Vi No Network",
            "slug": "airtel-vi-idea-no-network",
            "category": "network"
          },
          {
            "title": "SIM Not Detected",
            "slug": "sim-not-detected-phone-mein",
            "category": "network"
          }
        ],
        "keywords": [
          "kyc pending sim service off",
          "sim problem",
          "sim activation",
          "sim blocked"
        ],
        "variants": [
          "kyc pending se sim service off",
          "sim issue",
          "card not detected",
          "sim activation problem"
        ]
      },
      {
        "slug": "duplicate-sim-lena-hai",
        "category": "network",
        "metaTitle": "Duplicate SIM Lena Hai? SIM Repair & Activation Guide | JharForm",
        "metaDescription": "Duplicate SIM Lena Hai ka issue? Duplicate SIM Lena Hai ka issue SIM status, KYC, slot damage, ya purani SIM ki wajah se aa sakta hai. Is page me activation aur replacement ka clear solution hai. Simple Hinglish steps se fix karo.",
        "h1": "Duplicate SIM Lena Hai — Complete Hinglish Fix Guide",
        "lastUpdated": "May 2026",
        "readingTime": "4 min",
        "difficulty": "Easy",
        "description": "Duplicate SIM Lena Hai ka issue SIM status, KYC, slot damage, ya purani SIM ki wajah se aa sakta hai. Is page me activation aur replacement ka clear solution hai.",
        "steps": [
          {
            "title": "SIM tray nikaal ke card reseat karo",
            "detail": "SIM ko soft cloth se saaf karke correct orientation me wapas lagao."
          },
          {
            "title": "Doosre phone mein SIM test karo",
            "detail": "Agar wahan bhi issue hai to SIM kharab ya block ho sakti hai."
          },
          {
            "title": "KYC aur active status check karo",
            "detail": "Suspended ya pending KYC se service off ho sakti hai."
          },
          {
            "title": "Old SIM ho to replacement lo",
            "detail": "Purani SIM 4G/VoLTE support miss kar sakti hai."
          },
          {
            "title": "PIN/PUK ya blocking issue fix karo",
            "detail": "Wrong PIN attempts se SIM lock ho jaati hai; operator se PUK reset karo."
          },
          {
            "title": "Store ya customer support se reissue karwao",
            "detail": "Same number ki duplicate SIM issue karwao with ID proof."
          },
          {
            "title": "SIM ko दूसरे phone me test karo",
            "detail": "Agar wahan bhi same issue hai to SIM replacement ya KYC fix karwana padega."
          },
          {
            "title": "Old SIM ho to replacement lo",
            "detail": "Purani SIM card often 4G/VoLTE issues deti hai. Store se same number SIM mil jaati hai."
          }
        ],
        "screenshots": [
          {
            "caption": "Duplicate SIM Lena Hai issue screen showing warning banner, network status, aur quick settings shortcuts",
            "alt": "Duplicate SIM Lena Hai issue screen showing warning banner and quick settings shortcuts",
            "type": "phone",
            "mockupType": "duplicate-sim-lena-hai-screen-1"
          },
          {
            "caption": "Step-by-step fix screen for duplicate sim lena hai with settings path, toggle buttons, aur status after fix note",
            "alt": "Step-by-step fix screen for Duplicate SIM Lena Hai with settings path and status after fix",
            "type": "phone",
            "mockupType": "duplicate-sim-lena-hai-screen-2"
          }
        ],
        "sources": [
          {
            "title": "DoT Sanchar Saathi",
            "url": "https://www.sancharsaathi.gov.in/",
            "icon": "🏛️"
          },
          {
            "title": "Airtel Help",
            "url": "https://www.airtel.in/help",
            "icon": "📞"
          }
        ],
        "proTips": [
          "SIM tray aur gold contacts ko clean rakho",
          "Old SIM replace karna cheap aur effective hota hai",
          "KYC updated ho to activation fast hoti hai"
        ],
        "faqs": [
          {
            "q": "No SIM error aata hai to kya karu?",
            "a": "SIM reseat, another phone test, aur network settings reset karo."
          },
          {
            "q": "SIM block ho gayi to number delete ho jata hai?",
            "a": "Nahi, number same rehta hai. Replacement SIM se service wapas aa jaati hai."
          },
          {
            "q": "SIM PIN bhool gaya to pukhta solution kya hai?",
            "a": "PUK code ya operator app/store se reset. 3 wrong attempts ke baad SIM lock ho sakti hai."
          },
          {
            "q": "Duplicate SIM mil jaati hai?",
            "a": "Haan, same number ke liye operator store se duplicate SIM issue hoti hai with ID proof."
          }
        ],
        "related": [
          {
            "title": "Airtel/Vi No Network",
            "slug": "airtel-vi-idea-no-network",
            "category": "network"
          },
          {
            "title": "SIM Not Detected",
            "slug": "sim-not-detected-phone-mein",
            "category": "network"
          }
        ],
        "keywords": [
          "duplicate sim lena hai",
          "sim problem",
          "sim activation",
          "sim blocked"
        ],
        "variants": [
          "duplicate sim lena hai",
          "sim issue",
          "card not detected",
          "sim activation problem"
        ]
      },
      {
        "slug": "sim-slot-damaged",
        "category": "network",
        "metaTitle": "SIM Slot Damaged? SIM Repair & Activation Guide | JharForm",
        "metaDescription": "SIM Slot Damaged ka issue? SIM Slot Damaged ka issue SIM status, KYC, slot damage, ya purani SIM ki wajah se aa sakta hai. Is page me activation aur replacement ka clear solution hai. Simple Hinglish steps se fix karo.",
        "h1": "SIM Slot Damaged — Complete Hinglish Fix Guide",
        "lastUpdated": "May 2026",
        "readingTime": "4 min",
        "difficulty": "Easy",
        "description": "SIM Slot Damaged ka issue SIM status, KYC, slot damage, ya purani SIM ki wajah se aa sakta hai. Is page me activation aur replacement ka clear solution hai.",
        "steps": [
          {
            "title": "SIM tray nikaal ke card reseat karo",
            "detail": "SIM ko soft cloth se saaf karke correct orientation me wapas lagao."
          },
          {
            "title": "Doosre phone mein SIM test karo",
            "detail": "Agar wahan bhi issue hai to SIM kharab ya block ho sakti hai."
          },
          {
            "title": "KYC aur active status check karo",
            "detail": "Suspended ya pending KYC se service off ho sakti hai."
          },
          {
            "title": "Old SIM ho to replacement lo",
            "detail": "Purani SIM 4G/VoLTE support miss kar sakti hai."
          },
          {
            "title": "PIN/PUK ya blocking issue fix karo",
            "detail": "Wrong PIN attempts se SIM lock ho jaati hai; operator se PUK reset karo."
          },
          {
            "title": "Store ya customer support se reissue karwao",
            "detail": "Same number ki duplicate SIM issue karwao with ID proof."
          },
          {
            "title": "SIM ko दूसरे phone me test karo",
            "detail": "Agar wahan bhi same issue hai to SIM replacement ya KYC fix karwana padega."
          },
          {
            "title": "Old SIM ho to replacement lo",
            "detail": "Purani SIM card often 4G/VoLTE issues deti hai. Store se same number SIM mil jaati hai."
          }
        ],
        "screenshots": [
          {
            "caption": "SIM Slot Damaged issue screen showing warning banner, network status, aur quick settings shortcuts",
            "alt": "SIM Slot Damaged issue screen showing warning banner and quick settings shortcuts",
            "type": "phone",
            "mockupType": "sim-slot-damaged-screen-1"
          },
          {
            "caption": "Step-by-step fix screen for sim slot damaged with settings path, toggle buttons, aur status after fix note",
            "alt": "Step-by-step fix screen for SIM Slot Damaged with settings path and status after fix",
            "type": "phone",
            "mockupType": "sim-slot-damaged-screen-2"
          }
        ],
        "sources": [
          {
            "title": "DoT Sanchar Saathi",
            "url": "https://www.sancharsaathi.gov.in/",
            "icon": "🏛️"
          },
          {
            "title": "Airtel Help",
            "url": "https://www.airtel.in/help",
            "icon": "📞"
          }
        ],
        "proTips": [
          "SIM tray aur gold contacts ko clean rakho",
          "Old SIM replace karna cheap aur effective hota hai",
          "KYC updated ho to activation fast hoti hai"
        ],
        "faqs": [
          {
            "q": "No SIM error aata hai to kya karu?",
            "a": "SIM reseat, another phone test, aur network settings reset karo."
          },
          {
            "q": "SIM block ho gayi to number delete ho jata hai?",
            "a": "Nahi, number same rehta hai. Replacement SIM se service wapas aa jaati hai."
          },
          {
            "q": "SIM PIN bhool gaya to pukhta solution kya hai?",
            "a": "PUK code ya operator app/store se reset. 3 wrong attempts ke baad SIM lock ho sakti hai."
          },
          {
            "q": "Duplicate SIM mil jaati hai?",
            "a": "Haan, same number ke liye operator store se duplicate SIM issue hoti hai with ID proof."
          }
        ],
        "related": [
          {
            "title": "Airtel/Vi No Network",
            "slug": "airtel-vi-idea-no-network",
            "category": "network"
          },
          {
            "title": "SIM Not Detected",
            "slug": "sim-not-detected-phone-mein",
            "category": "network"
          }
        ],
        "keywords": [
          "sim slot damaged",
          "sim problem",
          "sim activation",
          "sim blocked"
        ],
        "variants": [
          "sim slot damaged",
          "sim issue",
          "card not detected",
          "sim activation problem"
        ]
      },
      {
        "slug": "dual-sim-not-working",
        "category": "network",
        "metaTitle": "Dual SIM Not Working? SIM Repair & Activation Guide | JharForm",
        "metaDescription": "Dual SIM Not Working ka issue? Dual SIM Not Working ka issue SIM status, KYC, slot damage, ya purani SIM ki wajah se aa sakta hai. Is page me activation aur replacement ka clear solution hai. Simple Hinglish steps se fix karo.",
        "h1": "Dual SIM Not Working — Complete Hinglish Fix Guide",
        "lastUpdated": "May 2026",
        "readingTime": "4 min",
        "difficulty": "Easy",
        "description": "Dual SIM Not Working ka issue SIM status, KYC, slot damage, ya purani SIM ki wajah se aa sakta hai. Is page me activation aur replacement ka clear solution hai.",
        "steps": [
          {
            "title": "SIM tray nikaal ke card reseat karo",
            "detail": "SIM ko soft cloth se saaf karke correct orientation me wapas lagao."
          },
          {
            "title": "Doosre phone mein SIM test karo",
            "detail": "Agar wahan bhi issue hai to SIM kharab ya block ho sakti hai."
          },
          {
            "title": "KYC aur active status check karo",
            "detail": "Suspended ya pending KYC se service off ho sakti hai."
          },
          {
            "title": "Old SIM ho to replacement lo",
            "detail": "Purani SIM 4G/VoLTE support miss kar sakti hai."
          },
          {
            "title": "PIN/PUK ya blocking issue fix karo",
            "detail": "Wrong PIN attempts se SIM lock ho jaati hai; operator se PUK reset karo."
          },
          {
            "title": "Store ya customer support se reissue karwao",
            "detail": "Same number ki duplicate SIM issue karwao with ID proof."
          },
          {
            "title": "SIM ko दूसरे phone me test karo",
            "detail": "Agar wahan bhi same issue hai to SIM replacement ya KYC fix karwana padega."
          },
          {
            "title": "Old SIM ho to replacement lo",
            "detail": "Purani SIM card often 4G/VoLTE issues deti hai. Store se same number SIM mil jaati hai."
          }
        ],
        "screenshots": [
          {
            "caption": "Dual SIM Not Working issue screen showing warning banner, network status, aur quick settings shortcuts",
            "alt": "Dual SIM Not Working issue screen showing warning banner and quick settings shortcuts",
            "type": "phone",
            "mockupType": "dual-sim-not-working-screen-1"
          },
          {
            "caption": "Step-by-step fix screen for dual sim not working with settings path, toggle buttons, aur status after fix note",
            "alt": "Step-by-step fix screen for Dual SIM Not Working with settings path and status after fix",
            "type": "phone",
            "mockupType": "dual-sim-not-working-screen-2"
          }
        ],
        "sources": [
          {
            "title": "DoT Sanchar Saathi",
            "url": "https://www.sancharsaathi.gov.in/",
            "icon": "🏛️"
          },
          {
            "title": "Airtel Help",
            "url": "https://www.airtel.in/help",
            "icon": "📞"
          }
        ],
        "proTips": [
          "SIM tray aur gold contacts ko clean rakho",
          "Old SIM replace karna cheap aur effective hota hai",
          "KYC updated ho to activation fast hoti hai"
        ],
        "faqs": [
          {
            "q": "No SIM error aata hai to kya karu?",
            "a": "SIM reseat, another phone test, aur network settings reset karo."
          },
          {
            "q": "SIM block ho gayi to number delete ho jata hai?",
            "a": "Nahi, number same rehta hai. Replacement SIM se service wapas aa jaati hai."
          },
          {
            "q": "SIM PIN bhool gaya to pukhta solution kya hai?",
            "a": "PUK code ya operator app/store se reset. 3 wrong attempts ke baad SIM lock ho sakti hai."
          },
          {
            "q": "Duplicate SIM mil jaati hai?",
            "a": "Haan, same number ke liye operator store se duplicate SIM issue hoti hai with ID proof."
          }
        ],
        "related": [
          {
            "title": "Airtel/Vi No Network",
            "slug": "airtel-vi-idea-no-network",
            "category": "network"
          },
          {
            "title": "SIM Not Detected",
            "slug": "sim-not-detected-phone-mein",
            "category": "network"
          }
        ],
        "keywords": [
          "dual sim not working",
          "sim problem",
          "sim activation",
          "sim blocked"
        ],
        "variants": [
          "dual sim not working",
          "sim issue",
          "card not detected",
          "sim activation problem"
        ]
      },
      {
        "slug": "sim-expired",
        "category": "network",
        "metaTitle": "SIM Expired? SIM Repair & Activation Guide | JharForm",
        "metaDescription": "SIM Expired ka issue? SIM Expired ka issue SIM status, KYC, slot damage, ya purani SIM ki wajah se aa sakta hai. Is page me activation aur replacement ka clear solution hai. Simple Hinglish steps se fix karo.",
        "h1": "SIM Expired — Complete Hinglish Fix Guide",
        "lastUpdated": "May 2026",
        "readingTime": "4 min",
        "difficulty": "Easy",
        "description": "SIM Expired ka issue SIM status, KYC, slot damage, ya purani SIM ki wajah se aa sakta hai. Is page me activation aur replacement ka clear solution hai.",
        "steps": [
          {
            "title": "SIM tray nikaal ke card reseat karo",
            "detail": "SIM ko soft cloth se saaf karke correct orientation me wapas lagao."
          },
          {
            "title": "Doosre phone mein SIM test karo",
            "detail": "Agar wahan bhi issue hai to SIM kharab ya block ho sakti hai."
          },
          {
            "title": "KYC aur active status check karo",
            "detail": "Suspended ya pending KYC se service off ho sakti hai."
          },
          {
            "title": "Old SIM ho to replacement lo",
            "detail": "Purani SIM 4G/VoLTE support miss kar sakti hai."
          },
          {
            "title": "PIN/PUK ya blocking issue fix karo",
            "detail": "Wrong PIN attempts se SIM lock ho jaati hai; operator se PUK reset karo."
          },
          {
            "title": "Store ya customer support se reissue karwao",
            "detail": "Same number ki duplicate SIM issue karwao with ID proof."
          },
          {
            "title": "SIM ko दूसरे phone me test karo",
            "detail": "Agar wahan bhi same issue hai to SIM replacement ya KYC fix karwana padega."
          },
          {
            "title": "Old SIM ho to replacement lo",
            "detail": "Purani SIM card often 4G/VoLTE issues deti hai. Store se same number SIM mil jaati hai."
          }
        ],
        "screenshots": [
          {
            "caption": "SIM Expired issue screen showing warning banner, network status, aur quick settings shortcuts",
            "alt": "SIM Expired issue screen showing warning banner and quick settings shortcuts",
            "type": "phone",
            "mockupType": "sim-expired-screen-1"
          },
          {
            "caption": "Step-by-step fix screen for sim expired with settings path, toggle buttons, aur status after fix note",
            "alt": "Step-by-step fix screen for SIM Expired with settings path and status after fix",
            "type": "phone",
            "mockupType": "sim-expired-screen-2"
          }
        ],
        "sources": [
          {
            "title": "DoT Sanchar Saathi",
            "url": "https://www.sancharsaathi.gov.in/",
            "icon": "🏛️"
          },
          {
            "title": "Airtel Help",
            "url": "https://www.airtel.in/help",
            "icon": "📞"
          }
        ],
        "proTips": [
          "SIM tray aur gold contacts ko clean rakho",
          "Old SIM replace karna cheap aur effective hota hai",
          "KYC updated ho to activation fast hoti hai"
        ],
        "faqs": [
          {
            "q": "No SIM error aata hai to kya karu?",
            "a": "SIM reseat, another phone test, aur network settings reset karo."
          },
          {
            "q": "SIM block ho gayi to number delete ho jata hai?",
            "a": "Nahi, number same rehta hai. Replacement SIM se service wapas aa jaati hai."
          },
          {
            "q": "SIM PIN bhool gaya to pukhta solution kya hai?",
            "a": "PUK code ya operator app/store se reset. 3 wrong attempts ke baad SIM lock ho sakti hai."
          },
          {
            "q": "Duplicate SIM mil jaati hai?",
            "a": "Haan, same number ke liye operator store se duplicate SIM issue hoti hai with ID proof."
          }
        ],
        "related": [
          {
            "title": "Airtel/Vi No Network",
            "slug": "airtel-vi-idea-no-network",
            "category": "network"
          },
          {
            "title": "SIM Not Detected",
            "slug": "sim-not-detected-phone-mein",
            "category": "network"
          }
        ],
        "keywords": [
          "sim expired",
          "sim problem",
          "sim activation",
          "sim blocked"
        ],
        "variants": [
          "sim expired",
          "sim issue",
          "card not detected",
          "sim activation problem"
        ]
      },
      {
        "slug": "network-signal-kam-hai",
        "category": "network",
        "metaTitle": "Network Signal Kam Hai? No Network, Signal Fix Guide | JharForm",
        "metaDescription": "Network Signal Kam Hai ka issue? Network Signal Kam Hai mein tower coverage, indoor shielding, airplane mode bug, ya network settings fault common hote hain. Yeh fix guide real-life Indian use cases ke hisaab se hai. Simple Hinglish steps se fix karo.",
        "h1": "Network Signal Kam Hai — Complete Hinglish Fix Guide",
        "lastUpdated": "May 2026",
        "readingTime": "4 min",
        "difficulty": "Easy",
        "description": "Network Signal Kam Hai mein tower coverage, indoor shielding, airplane mode bug, ya network settings fault common hote hain. Yeh fix guide real-life Indian use cases ke hisaab se hai.",
        "steps": [
          {
            "title": "Airplane mode on-off karo",
            "detail": "Radio signal ko refresh karne ke liye airplane mode 10 second on karke off karo."
          },
          {
            "title": "Manual network operator select karo",
            "detail": "Auto ke bajay manually apna operator search aur select karo."
          },
          {
            "title": "Network settings reset karo",
            "detail": "Reset network settings se corrupted profiles fix ho sakti hain."
          },
          {
            "title": "Location change karke test karo",
            "detail": "Window, balcony ya bahar jaa kar signal compare karo."
          },
          {
            "title": "SIM slot ya device test karo",
            "detail": "Doosre phone me SIM aur doosri SIM apne phone me try karo."
          },
          {
            "title": "Outage ya coverage issue confirm karo",
            "detail": "Agar area me sabka same issue hai to tower/coverage problem ho sakti hai."
          },
          {
            "title": "Different location pe signal compare karo",
            "detail": "Window, balcony, ya सड़क ke paas jaake check karo taaki indoor shielding ka idea mile."
          },
          {
            "title": "Network reset ya manual operator search karo",
            "detail": "Corrupted profile ya wrong band selection issue ko yeh fix kar deta hai."
          }
        ],
        "screenshots": [
          {
            "caption": "Network Signal Kam Hai issue screen showing warning banner, network status, aur quick settings shortcuts",
            "alt": "Network Signal Kam Hai issue screen showing warning banner and quick settings shortcuts",
            "type": "phone",
            "mockupType": "network-signal-kam-hai-screen-1"
          },
          {
            "caption": "Step-by-step fix screen for network signal kam hai with settings path, toggle buttons, aur status after fix note",
            "alt": "Step-by-step fix screen for Network Signal Kam Hai with settings path and status after fix",
            "type": "phone",
            "mockupType": "network-signal-kam-hai-screen-2"
          }
        ],
        "sources": [
          {
            "title": "TRAI Consumer Portal",
            "url": "https://www.trai.gov.in/consumer",
            "icon": "🏛️"
          },
          {
            "title": "Vi Help",
            "url": "https://www.myvi.in/help",
            "icon": "📞"
          }
        ],
        "proTips": [
          "Manual network search ka ek baar test zaroor karo",
          "Indoor signal weak ho to window ke paas check karo",
          "Network reset ke baad WiFi password dobara dalna pad sakta hai"
        ],
        "faqs": [
          {
            "q": "Emergency Calls Only ka kya matlab hai?",
            "a": "Phone network pakad raha hai lekin SIM authenticate nahi ho pa rahi."
          },
          {
            "q": "Sirf ghar me signal kyu kam hai?",
            "a": "Building shielding, tower distance, ya indoor interference common reasons hain."
          },
          {
            "q": "2G show ho raha hai, 4G kyu nahi?",
            "a": "Coverage, handset band lock, ya preferred network type issue ho sakta hai."
          },
          {
            "q": "Tower outage kaise pata chale?",
            "a": "Operator app, nearby users, aur manual area test se idea milta hai."
          }
        ],
        "related": [
          {
            "title": "Jio Internet Slow",
            "slug": "jio-internet-slow",
            "category": "network"
          },
          {
            "title": "Airtel/Vi No Network",
            "slug": "airtel-vi-idea-no-network",
            "category": "network"
          }
        ],
        "keywords": [
          "network signal kam hai",
          "network signal",
          "no service",
          "airplane mode"
        ],
        "variants": [
          "network signal kam hai",
          "network problem",
          "no signal problem",
          "signal weak issue"
        ]
      },
      {
        "slug": "airplane-mode-stuck",
        "category": "network",
        "metaTitle": "Airplane Mode Stuck Hai? No Network, Signal Fix Guide | JharForm",
        "metaDescription": "Airplane Mode Stuck Hai ka issue? Airplane Mode Stuck Hai mein tower coverage, indoor shielding, airplane mode bug, ya network settings fault common hote hain. Yeh fix guide real-life Indian use cases ke hisaab se hai. Simple Hinglish steps se fix karo.",
        "h1": "Airplane Mode Stuck Hai — Complete Hinglish Fix Guide",
        "lastUpdated": "May 2026",
        "readingTime": "4 min",
        "difficulty": "Easy",
        "description": "Airplane Mode Stuck Hai mein tower coverage, indoor shielding, airplane mode bug, ya network settings fault common hote hain. Yeh fix guide real-life Indian use cases ke hisaab se hai.",
        "steps": [
          {
            "title": "Airplane mode on-off karo",
            "detail": "Radio signal ko refresh karne ke liye airplane mode 10 second on karke off karo."
          },
          {
            "title": "Manual network operator select karo",
            "detail": "Auto ke bajay manually apna operator search aur select karo."
          },
          {
            "title": "Network settings reset karo",
            "detail": "Reset network settings se corrupted profiles fix ho sakti hain."
          },
          {
            "title": "Location change karke test karo",
            "detail": "Window, balcony ya bahar jaa kar signal compare karo."
          },
          {
            "title": "SIM slot ya device test karo",
            "detail": "Doosre phone me SIM aur doosri SIM apne phone me try karo."
          },
          {
            "title": "Outage ya coverage issue confirm karo",
            "detail": "Agar area me sabka same issue hai to tower/coverage problem ho sakti hai."
          },
          {
            "title": "Different location pe signal compare karo",
            "detail": "Window, balcony, ya सड़क ke paas jaake check karo taaki indoor shielding ka idea mile."
          },
          {
            "title": "Network reset ya manual operator search karo",
            "detail": "Corrupted profile ya wrong band selection issue ko yeh fix kar deta hai."
          }
        ],
        "screenshots": [
          {
            "caption": "Airplane Mode Stuck Hai issue screen showing warning banner, network status, aur quick settings shortcuts",
            "alt": "Airplane Mode Stuck Hai issue screen showing warning banner and quick settings shortcuts",
            "type": "phone",
            "mockupType": "airplane-mode-stuck-screen-1"
          },
          {
            "caption": "Step-by-step fix screen for airplane mode stuck hai with settings path, toggle buttons, aur status after fix note",
            "alt": "Step-by-step fix screen for Airplane Mode Stuck Hai with settings path and status after fix",
            "type": "phone",
            "mockupType": "airplane-mode-stuck-screen-2"
          }
        ],
        "sources": [
          {
            "title": "TRAI Consumer Portal",
            "url": "https://www.trai.gov.in/consumer",
            "icon": "🏛️"
          },
          {
            "title": "Vi Help",
            "url": "https://www.myvi.in/help",
            "icon": "📞"
          }
        ],
        "proTips": [
          "Manual network search ka ek baar test zaroor karo",
          "Indoor signal weak ho to window ke paas check karo",
          "Network reset ke baad WiFi password dobara dalna pad sakta hai"
        ],
        "faqs": [
          {
            "q": "Emergency Calls Only ka kya matlab hai?",
            "a": "Phone network pakad raha hai lekin SIM authenticate nahi ho pa rahi."
          },
          {
            "q": "Sirf ghar me signal kyu kam hai?",
            "a": "Building shielding, tower distance, ya indoor interference common reasons hain."
          },
          {
            "q": "2G show ho raha hai, 4G kyu nahi?",
            "a": "Coverage, handset band lock, ya preferred network type issue ho sakta hai."
          },
          {
            "q": "Tower outage kaise pata chale?",
            "a": "Operator app, nearby users, aur manual area test se idea milta hai."
          }
        ],
        "related": [
          {
            "title": "Jio Internet Slow",
            "slug": "jio-internet-slow",
            "category": "network"
          },
          {
            "title": "Airtel/Vi No Network",
            "slug": "airtel-vi-idea-no-network",
            "category": "network"
          }
        ],
        "keywords": [
          "airplane mode stuck",
          "network signal",
          "no service",
          "airplane mode"
        ],
        "variants": [
          "airplane mode stuck hai",
          "network problem",
          "no signal problem",
          "signal weak issue"
        ]
      },
      {
        "slug": "network-reset-kaise-kare",
        "category": "network",
        "metaTitle": "Network Reset Kaise Kare? No Network, Signal Fix Guide | JharForm",
        "metaDescription": "Network Reset Kaise Kare ka issue? Network Reset Kaise Kare mein tower coverage, indoor shielding, airplane mode bug, ya network settings fault common hote hain. Yeh fix guide real-life Indian use cases ke hisaab se hai. Simple Hinglish steps se fix karo.",
        "h1": "Network Reset Kaise Kare — Complete Hinglish Fix Guide",
        "lastUpdated": "May 2026",
        "readingTime": "4 min",
        "difficulty": "Easy",
        "description": "Network Reset Kaise Kare mein tower coverage, indoor shielding, airplane mode bug, ya network settings fault common hote hain. Yeh fix guide real-life Indian use cases ke hisaab se hai.",
        "steps": [
          {
            "title": "Airplane mode on-off karo",
            "detail": "Radio signal ko refresh karne ke liye airplane mode 10 second on karke off karo."
          },
          {
            "title": "Manual network operator select karo",
            "detail": "Auto ke bajay manually apna operator search aur select karo."
          },
          {
            "title": "Network settings reset karo",
            "detail": "Reset network settings se corrupted profiles fix ho sakti hain."
          },
          {
            "title": "Location change karke test karo",
            "detail": "Window, balcony ya bahar jaa kar signal compare karo."
          },
          {
            "title": "SIM slot ya device test karo",
            "detail": "Doosre phone me SIM aur doosri SIM apne phone me try karo."
          },
          {
            "title": "Outage ya coverage issue confirm karo",
            "detail": "Agar area me sabka same issue hai to tower/coverage problem ho sakti hai."
          },
          {
            "title": "Different location pe signal compare karo",
            "detail": "Window, balcony, ya सड़क ke paas jaake check karo taaki indoor shielding ka idea mile."
          },
          {
            "title": "Network reset ya manual operator search karo",
            "detail": "Corrupted profile ya wrong band selection issue ko yeh fix kar deta hai."
          }
        ],
        "screenshots": [
          {
            "caption": "Network Reset Kaise Kare issue screen showing warning banner, network status, aur quick settings shortcuts",
            "alt": "Network Reset Kaise Kare issue screen showing warning banner and quick settings shortcuts",
            "type": "phone",
            "mockupType": "network-reset-kaise-kare-screen-1"
          },
          {
            "caption": "Step-by-step fix screen for network reset kaise kare with settings path, toggle buttons, aur status after fix note",
            "alt": "Step-by-step fix screen for Network Reset Kaise Kare with settings path and status after fix",
            "type": "phone",
            "mockupType": "network-reset-kaise-kare-screen-2"
          }
        ],
        "sources": [
          {
            "title": "TRAI Consumer Portal",
            "url": "https://www.trai.gov.in/consumer",
            "icon": "🏛️"
          },
          {
            "title": "Vi Help",
            "url": "https://www.myvi.in/help",
            "icon": "📞"
          }
        ],
        "proTips": [
          "Manual network search ka ek baar test zaroor karo",
          "Indoor signal weak ho to window ke paas check karo",
          "Network reset ke baad WiFi password dobara dalna pad sakta hai"
        ],
        "faqs": [
          {
            "q": "Emergency Calls Only ka kya matlab hai?",
            "a": "Phone network pakad raha hai lekin SIM authenticate nahi ho pa rahi."
          },
          {
            "q": "Sirf ghar me signal kyu kam hai?",
            "a": "Building shielding, tower distance, ya indoor interference common reasons hain."
          },
          {
            "q": "2G show ho raha hai, 4G kyu nahi?",
            "a": "Coverage, handset band lock, ya preferred network type issue ho sakta hai."
          },
          {
            "q": "Tower outage kaise pata chale?",
            "a": "Operator app, nearby users, aur manual area test se idea milta hai."
          }
        ],
        "related": [
          {
            "title": "Jio Internet Slow",
            "slug": "jio-internet-slow",
            "category": "network"
          },
          {
            "title": "Airtel/Vi No Network",
            "slug": "airtel-vi-idea-no-network",
            "category": "network"
          }
        ],
        "keywords": [
          "network reset kaise kare",
          "network signal",
          "no service",
          "airplane mode"
        ],
        "variants": [
          "network reset kaise kare",
          "network problem",
          "no signal problem",
          "signal weak issue"
        ]
      },
      {
        "slug": "4g-signal-2g-show-ho-raha",
        "category": "network",
        "metaTitle": "4G Signal 2G Show Ho Raha Hai? No Network, Signal Fix Guide | JharForm",
        "metaDescription": "4G Signal 2G Show Ho Raha Hai ka issue? 4G Signal 2G Show Ho Raha Hai mein tower coverage, indoor shielding, airplane mode bug, ya network settings fault common hote hain. Yeh fix guide real-life Indian use cases ke hisaab se hai. Simple Hinglish steps se fix karo.",
        "h1": "4G Signal 2G Show Ho Raha Hai — Complete Hinglish Fix Guide",
        "lastUpdated": "May 2026",
        "readingTime": "4 min",
        "difficulty": "Easy",
        "description": "4G Signal 2G Show Ho Raha Hai mein tower coverage, indoor shielding, airplane mode bug, ya network settings fault common hote hain. Yeh fix guide real-life Indian use cases ke hisaab se hai.",
        "steps": [
          {
            "title": "Airplane mode on-off karo",
            "detail": "Radio signal ko refresh karne ke liye airplane mode 10 second on karke off karo."
          },
          {
            "title": "Manual network operator select karo",
            "detail": "Auto ke bajay manually apna operator search aur select karo."
          },
          {
            "title": "Network settings reset karo",
            "detail": "Reset network settings se corrupted profiles fix ho sakti hain."
          },
          {
            "title": "Location change karke test karo",
            "detail": "Window, balcony ya bahar jaa kar signal compare karo."
          },
          {
            "title": "SIM slot ya device test karo",
            "detail": "Doosre phone me SIM aur doosri SIM apne phone me try karo."
          },
          {
            "title": "Outage ya coverage issue confirm karo",
            "detail": "Agar area me sabka same issue hai to tower/coverage problem ho sakti hai."
          },
          {
            "title": "Different location pe signal compare karo",
            "detail": "Window, balcony, ya सड़क ke paas jaake check karo taaki indoor shielding ka idea mile."
          },
          {
            "title": "Network reset ya manual operator search karo",
            "detail": "Corrupted profile ya wrong band selection issue ko yeh fix kar deta hai."
          }
        ],
        "screenshots": [
          {
            "caption": "4G Signal 2G Show Ho Raha Hai issue screen showing warning banner, network status, aur quick settings shortcuts",
            "alt": "4G Signal 2G Show Ho Raha Hai issue screen showing warning banner and quick settings shortcuts",
            "type": "phone",
            "mockupType": "4g-signal-2g-show-ho-raha-screen-1"
          },
          {
            "caption": "Step-by-step fix screen for 4g signal 2g show ho raha hai with settings path, toggle buttons, aur status after fix note",
            "alt": "Step-by-step fix screen for 4G Signal 2G Show Ho Raha Hai with settings path and status after fix",
            "type": "phone",
            "mockupType": "4g-signal-2g-show-ho-raha-screen-2"
          }
        ],
        "sources": [
          {
            "title": "TRAI Consumer Portal",
            "url": "https://www.trai.gov.in/consumer",
            "icon": "🏛️"
          },
          {
            "title": "Vi Help",
            "url": "https://www.myvi.in/help",
            "icon": "📞"
          }
        ],
        "proTips": [
          "Manual network search ka ek baar test zaroor karo",
          "Indoor signal weak ho to window ke paas check karo",
          "Network reset ke baad WiFi password dobara dalna pad sakta hai"
        ],
        "faqs": [
          {
            "q": "Emergency Calls Only ka kya matlab hai?",
            "a": "Phone network pakad raha hai lekin SIM authenticate nahi ho pa rahi."
          },
          {
            "q": "Sirf ghar me signal kyu kam hai?",
            "a": "Building shielding, tower distance, ya indoor interference common reasons hain."
          },
          {
            "q": "2G show ho raha hai, 4G kyu nahi?",
            "a": "Coverage, handset band lock, ya preferred network type issue ho sakta hai."
          },
          {
            "q": "Tower outage kaise pata chale?",
            "a": "Operator app, nearby users, aur manual area test se idea milta hai."
          }
        ],
        "related": [
          {
            "title": "Jio Internet Slow",
            "slug": "jio-internet-slow",
            "category": "network"
          },
          {
            "title": "Airtel/Vi No Network",
            "slug": "airtel-vi-idea-no-network",
            "category": "network"
          }
        ],
        "keywords": [
          "4g signal 2g show ho raha",
          "network signal",
          "no service",
          "airplane mode"
        ],
        "variants": [
          "4g signal 2g show ho raha hai",
          "network problem",
          "no signal problem",
          "signal weak issue"
        ]
      },
      {
        "slug": "no-service-only-one-area",
        "category": "network",
        "metaTitle": "No Service Sirf Ek Area Mein? No Network, Signal Fix Guide | JharForm",
        "metaDescription": "No Service Sirf Ek Area Mein ka issue? No Service Sirf Ek Area Mein mein tower coverage, indoor shielding, airplane mode bug, ya network settings fault common hote hain. Yeh fix guide real-life Indian use cases ke hisaab se hai. Simple Hinglish steps se fix karo.",
        "h1": "No Service Sirf Ek Area Mein — Complete Hinglish Fix Guide",
        "lastUpdated": "May 2026",
        "readingTime": "4 min",
        "difficulty": "Easy",
        "description": "No Service Sirf Ek Area Mein mein tower coverage, indoor shielding, airplane mode bug, ya network settings fault common hote hain. Yeh fix guide real-life Indian use cases ke hisaab se hai.",
        "steps": [
          {
            "title": "Airplane mode on-off karo",
            "detail": "Radio signal ko refresh karne ke liye airplane mode 10 second on karke off karo."
          },
          {
            "title": "Manual network operator select karo",
            "detail": "Auto ke bajay manually apna operator search aur select karo."
          },
          {
            "title": "Network settings reset karo",
            "detail": "Reset network settings se corrupted profiles fix ho sakti hain."
          },
          {
            "title": "Location change karke test karo",
            "detail": "Window, balcony ya bahar jaa kar signal compare karo."
          },
          {
            "title": "SIM slot ya device test karo",
            "detail": "Doosre phone me SIM aur doosri SIM apne phone me try karo."
          },
          {
            "title": "Outage ya coverage issue confirm karo",
            "detail": "Agar area me sabka same issue hai to tower/coverage problem ho sakti hai."
          },
          {
            "title": "Different location pe signal compare karo",
            "detail": "Window, balcony, ya सड़क ke paas jaake check karo taaki indoor shielding ka idea mile."
          },
          {
            "title": "Network reset ya manual operator search karo",
            "detail": "Corrupted profile ya wrong band selection issue ko yeh fix kar deta hai."
          }
        ],
        "screenshots": [
          {
            "caption": "No Service Sirf Ek Area Mein issue screen showing warning banner, network status, aur quick settings shortcuts",
            "alt": "No Service Sirf Ek Area Mein issue screen showing warning banner and quick settings shortcuts",
            "type": "phone",
            "mockupType": "no-service-only-one-area-screen-1"
          },
          {
            "caption": "Step-by-step fix screen for no service sirf ek area mein with settings path, toggle buttons, aur status after fix note",
            "alt": "Step-by-step fix screen for No Service Sirf Ek Area Mein with settings path and status after fix",
            "type": "phone",
            "mockupType": "no-service-only-one-area-screen-2"
          }
        ],
        "sources": [
          {
            "title": "TRAI Consumer Portal",
            "url": "https://www.trai.gov.in/consumer",
            "icon": "🏛️"
          },
          {
            "title": "Vi Help",
            "url": "https://www.myvi.in/help",
            "icon": "📞"
          }
        ],
        "proTips": [
          "Manual network search ka ek baar test zaroor karo",
          "Indoor signal weak ho to window ke paas check karo",
          "Network reset ke baad WiFi password dobara dalna pad sakta hai"
        ],
        "faqs": [
          {
            "q": "Emergency Calls Only ka kya matlab hai?",
            "a": "Phone network pakad raha hai lekin SIM authenticate nahi ho pa rahi."
          },
          {
            "q": "Sirf ghar me signal kyu kam hai?",
            "a": "Building shielding, tower distance, ya indoor interference common reasons hain."
          },
          {
            "q": "2G show ho raha hai, 4G kyu nahi?",
            "a": "Coverage, handset band lock, ya preferred network type issue ho sakta hai."
          },
          {
            "q": "Tower outage kaise pata chale?",
            "a": "Operator app, nearby users, aur manual area test se idea milta hai."
          }
        ],
        "related": [
          {
            "title": "Jio Internet Slow",
            "slug": "jio-internet-slow",
            "category": "network"
          },
          {
            "title": "Airtel/Vi No Network",
            "slug": "airtel-vi-idea-no-network",
            "category": "network"
          }
        ],
        "keywords": [
          "no service only one area",
          "network signal",
          "no service",
          "airplane mode"
        ],
        "variants": [
          "no service sirf ek area mein",
          "network problem",
          "no signal problem",
          "signal weak issue"
        ]
      },
      {
        "slug": "emergency-calls-only",
        "category": "network",
        "metaTitle": "Emergency Calls Only Problem? No Network, Signal Fix Guide | JharForm",
        "metaDescription": "Emergency Calls Only Problem ka issue? Emergency Calls Only Problem mein tower coverage, indoor shielding, airplane mode bug, ya network settings fault common hote hain. Yeh fix guide real-life Indian use cases ke hisaab se hai. Simple Hinglish steps se fix karo.",
        "h1": "Emergency Calls Only Problem — Complete Hinglish Fix Guide",
        "lastUpdated": "May 2026",
        "readingTime": "4 min",
        "difficulty": "Easy",
        "description": "Emergency Calls Only Problem mein tower coverage, indoor shielding, airplane mode bug, ya network settings fault common hote hain. Yeh fix guide real-life Indian use cases ke hisaab se hai.",
        "steps": [
          {
            "title": "Airplane mode on-off karo",
            "detail": "Radio signal ko refresh karne ke liye airplane mode 10 second on karke off karo."
          },
          {
            "title": "Manual network operator select karo",
            "detail": "Auto ke bajay manually apna operator search aur select karo."
          },
          {
            "title": "Network settings reset karo",
            "detail": "Reset network settings se corrupted profiles fix ho sakti hain."
          },
          {
            "title": "Location change karke test karo",
            "detail": "Window, balcony ya bahar jaa kar signal compare karo."
          },
          {
            "title": "SIM slot ya device test karo",
            "detail": "Doosre phone me SIM aur doosri SIM apne phone me try karo."
          },
          {
            "title": "Outage ya coverage issue confirm karo",
            "detail": "Agar area me sabka same issue hai to tower/coverage problem ho sakti hai."
          },
          {
            "title": "Different location pe signal compare karo",
            "detail": "Window, balcony, ya सड़क ke paas jaake check karo taaki indoor shielding ka idea mile."
          },
          {
            "title": "Network reset ya manual operator search karo",
            "detail": "Corrupted profile ya wrong band selection issue ko yeh fix kar deta hai."
          }
        ],
        "screenshots": [
          {
            "caption": "Emergency Calls Only Problem issue screen showing warning banner, network status, aur quick settings shortcuts",
            "alt": "Emergency Calls Only Problem issue screen showing warning banner and quick settings shortcuts",
            "type": "phone",
            "mockupType": "emergency-calls-only-screen-1"
          },
          {
            "caption": "Step-by-step fix screen for emergency calls only problem with settings path, toggle buttons, aur status after fix note",
            "alt": "Step-by-step fix screen for Emergency Calls Only Problem with settings path and status after fix",
            "type": "phone",
            "mockupType": "emergency-calls-only-screen-2"
          }
        ],
        "sources": [
          {
            "title": "TRAI Consumer Portal",
            "url": "https://www.trai.gov.in/consumer",
            "icon": "🏛️"
          },
          {
            "title": "Vi Help",
            "url": "https://www.myvi.in/help",
            "icon": "📞"
          }
        ],
        "proTips": [
          "Manual network search ka ek baar test zaroor karo",
          "Indoor signal weak ho to window ke paas check karo",
          "Network reset ke baad WiFi password dobara dalna pad sakta hai"
        ],
        "faqs": [
          {
            "q": "Emergency Calls Only ka kya matlab hai?",
            "a": "Phone network pakad raha hai lekin SIM authenticate nahi ho pa rahi."
          },
          {
            "q": "Sirf ghar me signal kyu kam hai?",
            "a": "Building shielding, tower distance, ya indoor interference common reasons hain."
          },
          {
            "q": "2G show ho raha hai, 4G kyu nahi?",
            "a": "Coverage, handset band lock, ya preferred network type issue ho sakta hai."
          },
          {
            "q": "Tower outage kaise pata chale?",
            "a": "Operator app, nearby users, aur manual area test se idea milta hai."
          }
        ],
        "related": [
          {
            "title": "Jio Internet Slow",
            "slug": "jio-internet-slow",
            "category": "network"
          },
          {
            "title": "Airtel/Vi No Network",
            "slug": "airtel-vi-idea-no-network",
            "category": "network"
          }
        ],
        "keywords": [
          "emergency calls only",
          "network signal",
          "no service",
          "airplane mode"
        ],
        "variants": [
          "emergency calls only problem",
          "network problem",
          "no signal problem",
          "signal weak issue"
        ]
      },
      {
        "slug": "tower-outage-kaise-check-kare",
        "category": "network",
        "metaTitle": "Tower Outage Kaise Check Kare? No Network, Signal Fix Guide | JharForm",
        "metaDescription": "Tower Outage Kaise Check Kare ka issue? Tower Outage Kaise Check Kare mein tower coverage, indoor shielding, airplane mode bug, ya network settings fault common hote hain. Yeh fix guide real-life Indian use cases ke hisaab se hai. Simple Hinglish steps se fix karo.",
        "h1": "Tower Outage Kaise Check Kare — Complete Hinglish Fix Guide",
        "lastUpdated": "May 2026",
        "readingTime": "4 min",
        "difficulty": "Easy",
        "description": "Tower Outage Kaise Check Kare mein tower coverage, indoor shielding, airplane mode bug, ya network settings fault common hote hain. Yeh fix guide real-life Indian use cases ke hisaab se hai.",
        "steps": [
          {
            "title": "Airplane mode on-off karo",
            "detail": "Radio signal ko refresh karne ke liye airplane mode 10 second on karke off karo."
          },
          {
            "title": "Manual network operator select karo",
            "detail": "Auto ke bajay manually apna operator search aur select karo."
          },
          {
            "title": "Network settings reset karo",
            "detail": "Reset network settings se corrupted profiles fix ho sakti hain."
          },
          {
            "title": "Location change karke test karo",
            "detail": "Window, balcony ya bahar jaa kar signal compare karo."
          },
          {
            "title": "SIM slot ya device test karo",
            "detail": "Doosre phone me SIM aur doosri SIM apne phone me try karo."
          },
          {
            "title": "Outage ya coverage issue confirm karo",
            "detail": "Agar area me sabka same issue hai to tower/coverage problem ho sakti hai."
          },
          {
            "title": "Different location pe signal compare karo",
            "detail": "Window, balcony, ya सड़क ke paas jaake check karo taaki indoor shielding ka idea mile."
          },
          {
            "title": "Network reset ya manual operator search karo",
            "detail": "Corrupted profile ya wrong band selection issue ko yeh fix kar deta hai."
          }
        ],
        "screenshots": [
          {
            "caption": "Tower Outage Kaise Check Kare issue screen showing warning banner, network status, aur quick settings shortcuts",
            "alt": "Tower Outage Kaise Check Kare issue screen showing warning banner and quick settings shortcuts",
            "type": "phone",
            "mockupType": "tower-outage-kaise-check-kare-screen-1"
          },
          {
            "caption": "Step-by-step fix screen for tower outage kaise check kare with settings path, toggle buttons, aur status after fix note",
            "alt": "Step-by-step fix screen for Tower Outage Kaise Check Kare with settings path and status after fix",
            "type": "phone",
            "mockupType": "tower-outage-kaise-check-kare-screen-2"
          }
        ],
        "sources": [
          {
            "title": "TRAI Consumer Portal",
            "url": "https://www.trai.gov.in/consumer",
            "icon": "🏛️"
          },
          {
            "title": "Vi Help",
            "url": "https://www.myvi.in/help",
            "icon": "📞"
          }
        ],
        "proTips": [
          "Manual network search ka ek baar test zaroor karo",
          "Indoor signal weak ho to window ke paas check karo",
          "Network reset ke baad WiFi password dobara dalna pad sakta hai"
        ],
        "faqs": [
          {
            "q": "Emergency Calls Only ka kya matlab hai?",
            "a": "Phone network pakad raha hai lekin SIM authenticate nahi ho pa rahi."
          },
          {
            "q": "Sirf ghar me signal kyu kam hai?",
            "a": "Building shielding, tower distance, ya indoor interference common reasons hain."
          },
          {
            "q": "2G show ho raha hai, 4G kyu nahi?",
            "a": "Coverage, handset band lock, ya preferred network type issue ho sakta hai."
          },
          {
            "q": "Tower outage kaise pata chale?",
            "a": "Operator app, nearby users, aur manual area test se idea milta hai."
          }
        ],
        "related": [
          {
            "title": "Jio Internet Slow",
            "slug": "jio-internet-slow",
            "category": "network"
          },
          {
            "title": "Airtel/Vi No Network",
            "slug": "airtel-vi-idea-no-network",
            "category": "network"
          }
        ],
        "keywords": [
          "tower outage kaise check kare",
          "network signal",
          "no service",
          "airplane mode"
        ],
        "variants": [
          "tower outage kaise check kare",
          "network problem",
          "no signal problem",
          "signal weak issue"
        ]
      },
      {
        "slug": "network-issue-in-village",
        "category": "network",
        "metaTitle": "Gaon Mein Network Issue? No Network, Signal Fix Guide | JharForm",
        "metaDescription": "Gaon Mein Network Issue ka issue? Gaon Mein Network Issue mein tower coverage, indoor shielding, airplane mode bug, ya network settings fault common hote hain. Yeh fix guide real-life Indian use cases ke hisaab se hai. Simple Hinglish steps se fix karo.",
        "h1": "Gaon Mein Network Issue — Complete Hinglish Fix Guide",
        "lastUpdated": "May 2026",
        "readingTime": "4 min",
        "difficulty": "Easy",
        "description": "Gaon Mein Network Issue mein tower coverage, indoor shielding, airplane mode bug, ya network settings fault common hote hain. Yeh fix guide real-life Indian use cases ke hisaab se hai.",
        "steps": [
          {
            "title": "Airplane mode on-off karo",
            "detail": "Radio signal ko refresh karne ke liye airplane mode 10 second on karke off karo."
          },
          {
            "title": "Manual network operator select karo",
            "detail": "Auto ke bajay manually apna operator search aur select karo."
          },
          {
            "title": "Network settings reset karo",
            "detail": "Reset network settings se corrupted profiles fix ho sakti hain."
          },
          {
            "title": "Location change karke test karo",
            "detail": "Window, balcony ya bahar jaa kar signal compare karo."
          },
          {
            "title": "SIM slot ya device test karo",
            "detail": "Doosre phone me SIM aur doosri SIM apne phone me try karo."
          },
          {
            "title": "Outage ya coverage issue confirm karo",
            "detail": "Agar area me sabka same issue hai to tower/coverage problem ho sakti hai."
          },
          {
            "title": "Different location pe signal compare karo",
            "detail": "Window, balcony, ya सड़क ke paas jaake check karo taaki indoor shielding ka idea mile."
          },
          {
            "title": "Network reset ya manual operator search karo",
            "detail": "Corrupted profile ya wrong band selection issue ko yeh fix kar deta hai."
          }
        ],
        "screenshots": [
          {
            "caption": "Gaon Mein Network Issue issue screen showing warning banner, network status, aur quick settings shortcuts",
            "alt": "Gaon Mein Network Issue issue screen showing warning banner and quick settings shortcuts",
            "type": "phone",
            "mockupType": "network-issue-in-village-screen-1"
          },
          {
            "caption": "Step-by-step fix screen for gaon mein network issue with settings path, toggle buttons, aur status after fix note",
            "alt": "Step-by-step fix screen for Gaon Mein Network Issue with settings path and status after fix",
            "type": "phone",
            "mockupType": "network-issue-in-village-screen-2"
          }
        ],
        "sources": [
          {
            "title": "TRAI Consumer Portal",
            "url": "https://www.trai.gov.in/consumer",
            "icon": "🏛️"
          },
          {
            "title": "Vi Help",
            "url": "https://www.myvi.in/help",
            "icon": "📞"
          }
        ],
        "proTips": [
          "Manual network search ka ek baar test zaroor karo",
          "Indoor signal weak ho to window ke paas check karo",
          "Network reset ke baad WiFi password dobara dalna pad sakta hai"
        ],
        "faqs": [
          {
            "q": "Emergency Calls Only ka kya matlab hai?",
            "a": "Phone network pakad raha hai lekin SIM authenticate nahi ho pa rahi."
          },
          {
            "q": "Sirf ghar me signal kyu kam hai?",
            "a": "Building shielding, tower distance, ya indoor interference common reasons hain."
          },
          {
            "q": "2G show ho raha hai, 4G kyu nahi?",
            "a": "Coverage, handset band lock, ya preferred network type issue ho sakta hai."
          },
          {
            "q": "Tower outage kaise pata chale?",
            "a": "Operator app, nearby users, aur manual area test se idea milta hai."
          }
        ],
        "related": [
          {
            "title": "Jio Internet Slow",
            "slug": "jio-internet-slow",
            "category": "network"
          },
          {
            "title": "Airtel/Vi No Network",
            "slug": "airtel-vi-idea-no-network",
            "category": "network"
          }
        ],
        "keywords": [
          "network issue in village",
          "network signal",
          "no service",
          "airplane mode"
        ],
        "variants": [
          "gaon mein network issue",
          "network problem",
          "no signal problem",
          "signal weak issue"
        ]
      },
      {
        "slug": "sms-send-nahi-ho-raha",
        "category": "network",
        "metaTitle": "SMS Send Nahi Ho Raha? OTP & SMS Fix Guide | JharForm",
        "metaDescription": "SMS Send Nahi Ho Raha ka issue? SMS Send Nahi Ho Raha ka issue DND, SMS center, weak signal, ya carrier-side restriction se aata hai. OTP aur normal SMS dono ke liye steps diye gaye hain. Simple Hinglish steps se fix karo.",
        "h1": "SMS Send Nahi Ho Raha — Complete Hinglish Fix Guide",
        "lastUpdated": "May 2026",
        "readingTime": "3 min",
        "difficulty": "Easy",
        "description": "SMS Send Nahi Ho Raha ka issue DND, SMS center, weak signal, ya carrier-side restriction se aata hai. OTP aur normal SMS dono ke liye steps diye gaye hain.",
        "steps": [
          {
            "title": "Default SMS app set karo",
            "detail": "Messages app ko default rakho aur retry karo."
          },
          {
            "title": "Message center number verify karo",
            "detail": "SMS service center number galat ho to operator se correct number lo."
          },
          {
            "title": "Signal aur network mode check karo",
            "detail": "Low signal pe SMS send delay ya fail ho sakta hai."
          },
          {
            "title": "DND/blocked sender settings dekho",
            "detail": "Kuch apps aur sender IDs filter ho jate hain."
          },
          {
            "title": "App permissions aur cache clear karo",
            "detail": "Messaging app ka cache clear karke test karo."
          },
          {
            "title": "Operator support se SMS service status pucho",
            "detail": "Agar sab kuch theek hai to network-side issue ho sakta hai."
          },
          {
            "title": "SMS app aur permissions check karo",
            "detail": "Default app, permissions, aur blocked sender list verify karo."
          },
          {
            "title": "Network mode aur signal stable karo",
            "detail": "Weak signal me SMS/OTP late aate hain; 4G/3G auto pe test karo."
          }
        ],
        "screenshots": [
          {
            "caption": "SMS Send Nahi Ho Raha issue screen showing warning banner, network status, aur quick settings shortcuts",
            "alt": "SMS Send Nahi Ho Raha issue screen showing warning banner and quick settings shortcuts",
            "type": "phone",
            "mockupType": "sms-send-nahi-ho-raha-screen-1"
          },
          {
            "caption": "Step-by-step fix screen for sms send nahi ho raha with settings path, toggle buttons, aur status after fix note",
            "alt": "Step-by-step fix screen for SMS Send Nahi Ho Raha with settings path and status after fix",
            "type": "phone",
            "mockupType": "sms-send-nahi-ho-raha-screen-2"
          }
        ],
        "sources": [
          {
            "title": "TRAI Consumer Portal",
            "url": "https://www.trai.gov.in/consumer",
            "icon": "🏛️"
          },
          {
            "title": "Android Help Center",
            "url": "https://support.google.com/android/answer/9075928",
            "icon": "📞"
          }
        ],
        "proTips": [
          "Default SMS app ko hi use karo",
          "SMS center number check karna useful hota hai",
          "DND aur blocked sender settings zaroor dekhna"
        ],
        "faqs": [
          {
            "q": "OTP message nahi aa raha to kyun?",
            "a": "Network, DND, app permission, ya SMS center issue ho sakta hai."
          },
          {
            "q": "Missed call OTP fail hota hai?",
            "a": "Low signal ya operator congestion mein missed call verification fail ho sakta hai."
          },
          {
            "q": "Bank OTP ka problem network se hai?",
            "a": "Kai baar haan, especially indoor weak signal mein."
          },
          {
            "q": "SMS send fail ho raha hai, kya first check karu?",
            "a": "Balance, signal, center number, aur app permissions."
          }
        ],
        "related": [
          {
            "title": "OTP Nahi Aa Raha",
            "slug": "otp-nahi-aa-raha-network",
            "category": "network"
          },
          {
            "title": "Bank OTP Nahi Aa Raha",
            "slug": "bank-otp-nahi-aa-raha",
            "category": "network"
          }
        ],
        "keywords": [
          "sms send nahi ho raha",
          "sms problem",
          "otp issue",
          "message center"
        ],
        "variants": [
          "sms send nahi ho raha",
          "sms issue",
          "otp not coming",
          "message not sending"
        ]
      },
      {
        "slug": "otp-nahi-aa-raha-network",
        "category": "network",
        "metaTitle": "OTP Nahi Aa Raha Network Wajah Se? OTP & SMS Fix Guide | JharForm",
        "metaDescription": "OTP Nahi Aa Raha Network Wajah Se ka issue? OTP Nahi Aa Raha Network Wajah Se ka issue DND, SMS center, weak signal, ya carrier-side restriction se aata hai. OTP aur normal SMS dono ke liye steps diye gaye hain. Simple Hinglish steps se fix karo.",
        "h1": "OTP Nahi Aa Raha Network Wajah Se — Complete Hinglish Fix Guide",
        "lastUpdated": "May 2026",
        "readingTime": "3 min",
        "difficulty": "Easy",
        "description": "OTP Nahi Aa Raha Network Wajah Se ka issue DND, SMS center, weak signal, ya carrier-side restriction se aata hai. OTP aur normal SMS dono ke liye steps diye gaye hain.",
        "steps": [
          {
            "title": "Default SMS app set karo",
            "detail": "Messages app ko default rakho aur retry karo."
          },
          {
            "title": "Message center number verify karo",
            "detail": "SMS service center number galat ho to operator se correct number lo."
          },
          {
            "title": "Signal aur network mode check karo",
            "detail": "Low signal pe SMS send delay ya fail ho sakta hai."
          },
          {
            "title": "DND/blocked sender settings dekho",
            "detail": "Kuch apps aur sender IDs filter ho jate hain."
          },
          {
            "title": "App permissions aur cache clear karo",
            "detail": "Messaging app ka cache clear karke test karo."
          },
          {
            "title": "Operator support se SMS service status pucho",
            "detail": "Agar sab kuch theek hai to network-side issue ho sakta hai."
          },
          {
            "title": "SMS app aur permissions check karo",
            "detail": "Default app, permissions, aur blocked sender list verify karo."
          },
          {
            "title": "Network mode aur signal stable karo",
            "detail": "Weak signal me SMS/OTP late aate hain; 4G/3G auto pe test karo."
          }
        ],
        "screenshots": [
          {
            "caption": "OTP Nahi Aa Raha Network Wajah Se issue screen showing warning banner, network status, aur quick settings shortcuts",
            "alt": "OTP Nahi Aa Raha Network Wajah Se issue screen showing warning banner and quick settings shortcuts",
            "type": "phone",
            "mockupType": "otp-nahi-aa-raha-network-screen-1"
          },
          {
            "caption": "Step-by-step fix screen for otp nahi aa raha network wajah se with settings path, toggle buttons, aur status after fix note",
            "alt": "Step-by-step fix screen for OTP Nahi Aa Raha Network Wajah Se with settings path and status after fix",
            "type": "phone",
            "mockupType": "otp-nahi-aa-raha-network-screen-2"
          }
        ],
        "sources": [
          {
            "title": "TRAI Consumer Portal",
            "url": "https://www.trai.gov.in/consumer",
            "icon": "🏛️"
          },
          {
            "title": "Android Help Center",
            "url": "https://support.google.com/android/answer/9075928",
            "icon": "📞"
          }
        ],
        "proTips": [
          "Default SMS app ko hi use karo",
          "SMS center number check karna useful hota hai",
          "DND aur blocked sender settings zaroor dekhna"
        ],
        "faqs": [
          {
            "q": "OTP message nahi aa raha to kyun?",
            "a": "Network, DND, app permission, ya SMS center issue ho sakta hai."
          },
          {
            "q": "Missed call OTP fail hota hai?",
            "a": "Low signal ya operator congestion mein missed call verification fail ho sakta hai."
          },
          {
            "q": "Bank OTP ka problem network se hai?",
            "a": "Kai baar haan, especially indoor weak signal mein."
          },
          {
            "q": "SMS send fail ho raha hai, kya first check karu?",
            "a": "Balance, signal, center number, aur app permissions."
          }
        ],
        "related": [
          {
            "title": "OTP Nahi Aa Raha",
            "slug": "otp-nahi-aa-raha-network",
            "category": "network"
          },
          {
            "title": "Bank OTP Nahi Aa Raha",
            "slug": "bank-otp-nahi-aa-raha",
            "category": "network"
          }
        ],
        "keywords": [
          "otp nahi aa raha network",
          "sms problem",
          "otp issue",
          "message center"
        ],
        "variants": [
          "otp nahi aa raha network wajah se",
          "sms issue",
          "otp not coming",
          "message not sending"
        ]
      },
      {
        "slug": "missed-call-otp-nahi-aa-raha",
        "category": "network",
        "metaTitle": "Missed Call OTP Nahi Aa Raha? OTP & SMS Fix Guide | JharForm",
        "metaDescription": "Missed Call OTP Nahi Aa Raha ka issue? Missed Call OTP Nahi Aa Raha ka issue DND, SMS center, weak signal, ya carrier-side restriction se aata hai. OTP aur normal SMS dono ke liye steps diye gaye hain. Simple Hinglish steps se fix karo.",
        "h1": "Missed Call OTP Nahi Aa Raha — Complete Hinglish Fix Guide",
        "lastUpdated": "May 2026",
        "readingTime": "3 min",
        "difficulty": "Easy",
        "description": "Missed Call OTP Nahi Aa Raha ka issue DND, SMS center, weak signal, ya carrier-side restriction se aata hai. OTP aur normal SMS dono ke liye steps diye gaye hain.",
        "steps": [
          {
            "title": "Default SMS app set karo",
            "detail": "Messages app ko default rakho aur retry karo."
          },
          {
            "title": "Message center number verify karo",
            "detail": "SMS service center number galat ho to operator se correct number lo."
          },
          {
            "title": "Signal aur network mode check karo",
            "detail": "Low signal pe SMS send delay ya fail ho sakta hai."
          },
          {
            "title": "DND/blocked sender settings dekho",
            "detail": "Kuch apps aur sender IDs filter ho jate hain."
          },
          {
            "title": "App permissions aur cache clear karo",
            "detail": "Messaging app ka cache clear karke test karo."
          },
          {
            "title": "Operator support se SMS service status pucho",
            "detail": "Agar sab kuch theek hai to network-side issue ho sakta hai."
          },
          {
            "title": "SMS app aur permissions check karo",
            "detail": "Default app, permissions, aur blocked sender list verify karo."
          },
          {
            "title": "Network mode aur signal stable karo",
            "detail": "Weak signal me SMS/OTP late aate hain; 4G/3G auto pe test karo."
          }
        ],
        "screenshots": [
          {
            "caption": "Missed Call OTP Nahi Aa Raha issue screen showing warning banner, network status, aur quick settings shortcuts",
            "alt": "Missed Call OTP Nahi Aa Raha issue screen showing warning banner and quick settings shortcuts",
            "type": "phone",
            "mockupType": "missed-call-otp-nahi-aa-raha-screen-1"
          },
          {
            "caption": "Step-by-step fix screen for missed call otp nahi aa raha with settings path, toggle buttons, aur status after fix note",
            "alt": "Step-by-step fix screen for Missed Call OTP Nahi Aa Raha with settings path and status after fix",
            "type": "phone",
            "mockupType": "missed-call-otp-nahi-aa-raha-screen-2"
          }
        ],
        "sources": [
          {
            "title": "TRAI Consumer Portal",
            "url": "https://www.trai.gov.in/consumer",
            "icon": "🏛️"
          },
          {
            "title": "Android Help Center",
            "url": "https://support.google.com/android/answer/9075928",
            "icon": "📞"
          }
        ],
        "proTips": [
          "Default SMS app ko hi use karo",
          "SMS center number check karna useful hota hai",
          "DND aur blocked sender settings zaroor dekhna"
        ],
        "faqs": [
          {
            "q": "OTP message nahi aa raha to kyun?",
            "a": "Network, DND, app permission, ya SMS center issue ho sakta hai."
          },
          {
            "q": "Missed call OTP fail hota hai?",
            "a": "Low signal ya operator congestion mein missed call verification fail ho sakta hai."
          },
          {
            "q": "Bank OTP ka problem network se hai?",
            "a": "Kai baar haan, especially indoor weak signal mein."
          },
          {
            "q": "SMS send fail ho raha hai, kya first check karu?",
            "a": "Balance, signal, center number, aur app permissions."
          }
        ],
        "related": [
          {
            "title": "OTP Nahi Aa Raha",
            "slug": "otp-nahi-aa-raha-network",
            "category": "network"
          },
          {
            "title": "Bank OTP Nahi Aa Raha",
            "slug": "bank-otp-nahi-aa-raha",
            "category": "network"
          }
        ],
        "keywords": [
          "missed call otp nahi aa raha",
          "sms problem",
          "otp issue",
          "message center"
        ],
        "variants": [
          "missed call otp nahi aa raha",
          "sms issue",
          "otp not coming",
          "message not sending"
        ]
      },
      {
        "slug": "bank-otp-nahi-aa-raha",
        "category": "network",
        "metaTitle": "Bank OTP Nahi Aa Raha? OTP & SMS Fix Guide | JharForm",
        "metaDescription": "Bank OTP Nahi Aa Raha ka issue? Bank OTP Nahi Aa Raha ka issue DND, SMS center, weak signal, ya carrier-side restriction se aata hai. OTP aur normal SMS dono ke liye steps diye gaye hain. Simple Hinglish steps se fix karo.",
        "h1": "Bank OTP Nahi Aa Raha — Complete Hinglish Fix Guide",
        "lastUpdated": "May 2026",
        "readingTime": "3 min",
        "difficulty": "Easy",
        "description": "Bank OTP Nahi Aa Raha ka issue DND, SMS center, weak signal, ya carrier-side restriction se aata hai. OTP aur normal SMS dono ke liye steps diye gaye hain.",
        "steps": [
          {
            "title": "Default SMS app set karo",
            "detail": "Messages app ko default rakho aur retry karo."
          },
          {
            "title": "Message center number verify karo",
            "detail": "SMS service center number galat ho to operator se correct number lo."
          },
          {
            "title": "Signal aur network mode check karo",
            "detail": "Low signal pe SMS send delay ya fail ho sakta hai."
          },
          {
            "title": "DND/blocked sender settings dekho",
            "detail": "Kuch apps aur sender IDs filter ho jate hain."
          },
          {
            "title": "App permissions aur cache clear karo",
            "detail": "Messaging app ka cache clear karke test karo."
          },
          {
            "title": "Operator support se SMS service status pucho",
            "detail": "Agar sab kuch theek hai to network-side issue ho sakta hai."
          },
          {
            "title": "SMS app aur permissions check karo",
            "detail": "Default app, permissions, aur blocked sender list verify karo."
          },
          {
            "title": "Network mode aur signal stable karo",
            "detail": "Weak signal me SMS/OTP late aate hain; 4G/3G auto pe test karo."
          }
        ],
        "screenshots": [
          {
            "caption": "Bank OTP Nahi Aa Raha issue screen showing warning banner, network status, aur quick settings shortcuts",
            "alt": "Bank OTP Nahi Aa Raha issue screen showing warning banner and quick settings shortcuts",
            "type": "phone",
            "mockupType": "bank-otp-nahi-aa-raha-screen-1"
          },
          {
            "caption": "Step-by-step fix screen for bank otp nahi aa raha with settings path, toggle buttons, aur status after fix note",
            "alt": "Step-by-step fix screen for Bank OTP Nahi Aa Raha with settings path and status after fix",
            "type": "phone",
            "mockupType": "bank-otp-nahi-aa-raha-screen-2"
          }
        ],
        "sources": [
          {
            "title": "TRAI Consumer Portal",
            "url": "https://www.trai.gov.in/consumer",
            "icon": "🏛️"
          },
          {
            "title": "Android Help Center",
            "url": "https://support.google.com/android/answer/9075928",
            "icon": "📞"
          }
        ],
        "proTips": [
          "Default SMS app ko hi use karo",
          "SMS center number check karna useful hota hai",
          "DND aur blocked sender settings zaroor dekhna"
        ],
        "faqs": [
          {
            "q": "OTP message nahi aa raha to kyun?",
            "a": "Network, DND, app permission, ya SMS center issue ho sakta hai."
          },
          {
            "q": "Missed call OTP fail hota hai?",
            "a": "Low signal ya operator congestion mein missed call verification fail ho sakta hai."
          },
          {
            "q": "Bank OTP ka problem network se hai?",
            "a": "Kai baar haan, especially indoor weak signal mein."
          },
          {
            "q": "SMS send fail ho raha hai, kya first check karu?",
            "a": "Balance, signal, center number, aur app permissions."
          }
        ],
        "related": [
          {
            "title": "OTP Nahi Aa Raha",
            "slug": "otp-nahi-aa-raha-network",
            "category": "network"
          },
          {
            "title": "Bank OTP Nahi Aa Raha",
            "slug": "bank-otp-nahi-aa-raha",
            "category": "network"
          }
        ],
        "keywords": [
          "bank otp nahi aa raha",
          "sms problem",
          "otp issue",
          "message center"
        ],
        "variants": [
          "bank otp nahi aa raha",
          "sms issue",
          "otp not coming",
          "message not sending"
        ]
      },
      {
        "slug": "message-center-number-galat",
        "category": "network",
        "metaTitle": "Message Center Number Galat? OTP & SMS Fix Guide | JharForm",
        "metaDescription": "Message Center Number Galat ka issue? Message Center Number Galat ka issue DND, SMS center, weak signal, ya carrier-side restriction se aata hai. OTP aur normal SMS dono ke liye steps diye gaye hain. Simple Hinglish steps se fix karo.",
        "h1": "Message Center Number Galat — Complete Hinglish Fix Guide",
        "lastUpdated": "May 2026",
        "readingTime": "3 min",
        "difficulty": "Easy",
        "description": "Message Center Number Galat ka issue DND, SMS center, weak signal, ya carrier-side restriction se aata hai. OTP aur normal SMS dono ke liye steps diye gaye hain.",
        "steps": [
          {
            "title": "Default SMS app set karo",
            "detail": "Messages app ko default rakho aur retry karo."
          },
          {
            "title": "Message center number verify karo",
            "detail": "SMS service center number galat ho to operator se correct number lo."
          },
          {
            "title": "Signal aur network mode check karo",
            "detail": "Low signal pe SMS send delay ya fail ho sakta hai."
          },
          {
            "title": "DND/blocked sender settings dekho",
            "detail": "Kuch apps aur sender IDs filter ho jate hain."
          },
          {
            "title": "App permissions aur cache clear karo",
            "detail": "Messaging app ka cache clear karke test karo."
          },
          {
            "title": "Operator support se SMS service status pucho",
            "detail": "Agar sab kuch theek hai to network-side issue ho sakta hai."
          },
          {
            "title": "SMS app aur permissions check karo",
            "detail": "Default app, permissions, aur blocked sender list verify karo."
          },
          {
            "title": "Network mode aur signal stable karo",
            "detail": "Weak signal me SMS/OTP late aate hain; 4G/3G auto pe test karo."
          }
        ],
        "screenshots": [
          {
            "caption": "Message Center Number Galat issue screen showing warning banner, network status, aur quick settings shortcuts",
            "alt": "Message Center Number Galat issue screen showing warning banner and quick settings shortcuts",
            "type": "phone",
            "mockupType": "message-center-number-galat-screen-1"
          },
          {
            "caption": "Step-by-step fix screen for message center number galat with settings path, toggle buttons, aur status after fix note",
            "alt": "Step-by-step fix screen for Message Center Number Galat with settings path and status after fix",
            "type": "phone",
            "mockupType": "message-center-number-galat-screen-2"
          }
        ],
        "sources": [
          {
            "title": "TRAI Consumer Portal",
            "url": "https://www.trai.gov.in/consumer",
            "icon": "🏛️"
          },
          {
            "title": "Android Help Center",
            "url": "https://support.google.com/android/answer/9075928",
            "icon": "📞"
          }
        ],
        "proTips": [
          "Default SMS app ko hi use karo",
          "SMS center number check karna useful hota hai",
          "DND aur blocked sender settings zaroor dekhna"
        ],
        "faqs": [
          {
            "q": "OTP message nahi aa raha to kyun?",
            "a": "Network, DND, app permission, ya SMS center issue ho sakta hai."
          },
          {
            "q": "Missed call OTP fail hota hai?",
            "a": "Low signal ya operator congestion mein missed call verification fail ho sakta hai."
          },
          {
            "q": "Bank OTP ka problem network se hai?",
            "a": "Kai baar haan, especially indoor weak signal mein."
          },
          {
            "q": "SMS send fail ho raha hai, kya first check karu?",
            "a": "Balance, signal, center number, aur app permissions."
          }
        ],
        "related": [
          {
            "title": "OTP Nahi Aa Raha",
            "slug": "otp-nahi-aa-raha-network",
            "category": "network"
          },
          {
            "title": "Bank OTP Nahi Aa Raha",
            "slug": "bank-otp-nahi-aa-raha",
            "category": "network"
          }
        ],
        "keywords": [
          "message center number galat",
          "sms problem",
          "otp issue",
          "message center"
        ],
        "variants": [
          "message center number galat",
          "sms issue",
          "otp not coming",
          "message not sending"
        ]
      },
      {
        "slug": "sms-delivery-failed",
        "category": "network",
        "metaTitle": "SMS Delivery Failed? OTP & SMS Fix Guide | JharForm",
        "metaDescription": "SMS Delivery Failed ka issue? SMS Delivery Failed ka issue DND, SMS center, weak signal, ya carrier-side restriction se aata hai. OTP aur normal SMS dono ke liye steps diye gaye hain. Simple Hinglish steps se fix karo.",
        "h1": "SMS Delivery Failed — Complete Hinglish Fix Guide",
        "lastUpdated": "May 2026",
        "readingTime": "3 min",
        "difficulty": "Easy",
        "description": "SMS Delivery Failed ka issue DND, SMS center, weak signal, ya carrier-side restriction se aata hai. OTP aur normal SMS dono ke liye steps diye gaye hain.",
        "steps": [
          {
            "title": "Default SMS app set karo",
            "detail": "Messages app ko default rakho aur retry karo."
          },
          {
            "title": "Message center number verify karo",
            "detail": "SMS service center number galat ho to operator se correct number lo."
          },
          {
            "title": "Signal aur network mode check karo",
            "detail": "Low signal pe SMS send delay ya fail ho sakta hai."
          },
          {
            "title": "DND/blocked sender settings dekho",
            "detail": "Kuch apps aur sender IDs filter ho jate hain."
          },
          {
            "title": "App permissions aur cache clear karo",
            "detail": "Messaging app ka cache clear karke test karo."
          },
          {
            "title": "Operator support se SMS service status pucho",
            "detail": "Agar sab kuch theek hai to network-side issue ho sakta hai."
          },
          {
            "title": "SMS app aur permissions check karo",
            "detail": "Default app, permissions, aur blocked sender list verify karo."
          },
          {
            "title": "Network mode aur signal stable karo",
            "detail": "Weak signal me SMS/OTP late aate hain; 4G/3G auto pe test karo."
          }
        ],
        "screenshots": [
          {
            "caption": "SMS Delivery Failed issue screen showing warning banner, network status, aur quick settings shortcuts",
            "alt": "SMS Delivery Failed issue screen showing warning banner and quick settings shortcuts",
            "type": "phone",
            "mockupType": "sms-delivery-failed-screen-1"
          },
          {
            "caption": "Step-by-step fix screen for sms delivery failed with settings path, toggle buttons, aur status after fix note",
            "alt": "Step-by-step fix screen for SMS Delivery Failed with settings path and status after fix",
            "type": "phone",
            "mockupType": "sms-delivery-failed-screen-2"
          }
        ],
        "sources": [
          {
            "title": "TRAI Consumer Portal",
            "url": "https://www.trai.gov.in/consumer",
            "icon": "🏛️"
          },
          {
            "title": "Android Help Center",
            "url": "https://support.google.com/android/answer/9075928",
            "icon": "📞"
          }
        ],
        "proTips": [
          "Default SMS app ko hi use karo",
          "SMS center number check karna useful hota hai",
          "DND aur blocked sender settings zaroor dekhna"
        ],
        "faqs": [
          {
            "q": "OTP message nahi aa raha to kyun?",
            "a": "Network, DND, app permission, ya SMS center issue ho sakta hai."
          },
          {
            "q": "Missed call OTP fail hota hai?",
            "a": "Low signal ya operator congestion mein missed call verification fail ho sakta hai."
          },
          {
            "q": "Bank OTP ka problem network se hai?",
            "a": "Kai baar haan, especially indoor weak signal mein."
          },
          {
            "q": "SMS send fail ho raha hai, kya first check karu?",
            "a": "Balance, signal, center number, aur app permissions."
          }
        ],
        "related": [
          {
            "title": "OTP Nahi Aa Raha",
            "slug": "otp-nahi-aa-raha-network",
            "category": "network"
          },
          {
            "title": "Bank OTP Nahi Aa Raha",
            "slug": "bank-otp-nahi-aa-raha",
            "category": "network"
          }
        ],
        "keywords": [
          "sms delivery failed",
          "sms problem",
          "otp issue",
          "message center"
        ],
        "variants": [
          "sms delivery failed",
          "sms issue",
          "otp not coming",
          "message not sending"
        ]
      },
      {
        "slug": "dnd-otp-block",
        "category": "network",
        "metaTitle": "DND Se OTP Block? OTP & SMS Fix Guide | JharForm",
        "metaDescription": "DND Se OTP Block ka issue? DND Se OTP Block ka issue DND, SMS center, weak signal, ya carrier-side restriction se aata hai. OTP aur normal SMS dono ke liye steps diye gaye hain. Simple Hinglish steps se fix karo.",
        "h1": "DND Se OTP Block — Complete Hinglish Fix Guide",
        "lastUpdated": "May 2026",
        "readingTime": "3 min",
        "difficulty": "Easy",
        "description": "DND Se OTP Block ka issue DND, SMS center, weak signal, ya carrier-side restriction se aata hai. OTP aur normal SMS dono ke liye steps diye gaye hain.",
        "steps": [
          {
            "title": "Default SMS app set karo",
            "detail": "Messages app ko default rakho aur retry karo."
          },
          {
            "title": "Message center number verify karo",
            "detail": "SMS service center number galat ho to operator se correct number lo."
          },
          {
            "title": "Signal aur network mode check karo",
            "detail": "Low signal pe SMS send delay ya fail ho sakta hai."
          },
          {
            "title": "DND/blocked sender settings dekho",
            "detail": "Kuch apps aur sender IDs filter ho jate hain."
          },
          {
            "title": "App permissions aur cache clear karo",
            "detail": "Messaging app ka cache clear karke test karo."
          },
          {
            "title": "Operator support se SMS service status pucho",
            "detail": "Agar sab kuch theek hai to network-side issue ho sakta hai."
          },
          {
            "title": "SMS app aur permissions check karo",
            "detail": "Default app, permissions, aur blocked sender list verify karo."
          },
          {
            "title": "Network mode aur signal stable karo",
            "detail": "Weak signal me SMS/OTP late aate hain; 4G/3G auto pe test karo."
          }
        ],
        "screenshots": [
          {
            "caption": "DND Se OTP Block issue screen showing warning banner, network status, aur quick settings shortcuts",
            "alt": "DND Se OTP Block issue screen showing warning banner and quick settings shortcuts",
            "type": "phone",
            "mockupType": "dnd-otp-block-screen-1"
          },
          {
            "caption": "Step-by-step fix screen for dnd se otp block with settings path, toggle buttons, aur status after fix note",
            "alt": "Step-by-step fix screen for DND Se OTP Block with settings path and status after fix",
            "type": "phone",
            "mockupType": "dnd-otp-block-screen-2"
          }
        ],
        "sources": [
          {
            "title": "TRAI Consumer Portal",
            "url": "https://www.trai.gov.in/consumer",
            "icon": "🏛️"
          },
          {
            "title": "Android Help Center",
            "url": "https://support.google.com/android/answer/9075928",
            "icon": "📞"
          }
        ],
        "proTips": [
          "Default SMS app ko hi use karo",
          "SMS center number check karna useful hota hai",
          "DND aur blocked sender settings zaroor dekhna"
        ],
        "faqs": [
          {
            "q": "OTP message nahi aa raha to kyun?",
            "a": "Network, DND, app permission, ya SMS center issue ho sakta hai."
          },
          {
            "q": "Missed call OTP fail hota hai?",
            "a": "Low signal ya operator congestion mein missed call verification fail ho sakta hai."
          },
          {
            "q": "Bank OTP ka problem network se hai?",
            "a": "Kai baar haan, especially indoor weak signal mein."
          },
          {
            "q": "SMS send fail ho raha hai, kya first check karu?",
            "a": "Balance, signal, center number, aur app permissions."
          }
        ],
        "related": [
          {
            "title": "OTP Nahi Aa Raha",
            "slug": "otp-nahi-aa-raha-network",
            "category": "network"
          },
          {
            "title": "Bank OTP Nahi Aa Raha",
            "slug": "bank-otp-nahi-aa-raha",
            "category": "network"
          }
        ],
        "keywords": [
          "dnd otp block",
          "sms problem",
          "otp issue",
          "message center"
        ],
        "variants": [
          "dnd se otp block",
          "sms issue",
          "otp not coming",
          "message not sending"
        ]
      },
      {
        "slug": "sim-sms-service-off",
        "category": "network",
        "metaTitle": "SIM SMS Service Off? OTP & SMS Fix Guide | JharForm",
        "metaDescription": "SIM SMS Service Off ka issue? SIM SMS Service Off ka issue DND, SMS center, weak signal, ya carrier-side restriction se aata hai. OTP aur normal SMS dono ke liye steps diye gaye hain. Simple Hinglish steps se fix karo.",
        "h1": "SIM SMS Service Off — Complete Hinglish Fix Guide",
        "lastUpdated": "May 2026",
        "readingTime": "3 min",
        "difficulty": "Easy",
        "description": "SIM SMS Service Off ka issue DND, SMS center, weak signal, ya carrier-side restriction se aata hai. OTP aur normal SMS dono ke liye steps diye gaye hain.",
        "steps": [
          {
            "title": "Default SMS app set karo",
            "detail": "Messages app ko default rakho aur retry karo."
          },
          {
            "title": "Message center number verify karo",
            "detail": "SMS service center number galat ho to operator se correct number lo."
          },
          {
            "title": "Signal aur network mode check karo",
            "detail": "Low signal pe SMS send delay ya fail ho sakta hai."
          },
          {
            "title": "DND/blocked sender settings dekho",
            "detail": "Kuch apps aur sender IDs filter ho jate hain."
          },
          {
            "title": "App permissions aur cache clear karo",
            "detail": "Messaging app ka cache clear karke test karo."
          },
          {
            "title": "Operator support se SMS service status pucho",
            "detail": "Agar sab kuch theek hai to network-side issue ho sakta hai."
          },
          {
            "title": "SMS app aur permissions check karo",
            "detail": "Default app, permissions, aur blocked sender list verify karo."
          },
          {
            "title": "Network mode aur signal stable karo",
            "detail": "Weak signal me SMS/OTP late aate hain; 4G/3G auto pe test karo."
          }
        ],
        "screenshots": [
          {
            "caption": "SIM SMS Service Off issue screen showing warning banner, network status, aur quick settings shortcuts",
            "alt": "SIM SMS Service Off issue screen showing warning banner and quick settings shortcuts",
            "type": "phone",
            "mockupType": "sim-sms-service-off-screen-1"
          },
          {
            "caption": "Step-by-step fix screen for sim sms service off with settings path, toggle buttons, aur status after fix note",
            "alt": "Step-by-step fix screen for SIM SMS Service Off with settings path and status after fix",
            "type": "phone",
            "mockupType": "sim-sms-service-off-screen-2"
          }
        ],
        "sources": [
          {
            "title": "TRAI Consumer Portal",
            "url": "https://www.trai.gov.in/consumer",
            "icon": "🏛️"
          },
          {
            "title": "Android Help Center",
            "url": "https://support.google.com/android/answer/9075928",
            "icon": "📞"
          }
        ],
        "proTips": [
          "Default SMS app ko hi use karo",
          "SMS center number check karna useful hota hai",
          "DND aur blocked sender settings zaroor dekhna"
        ],
        "faqs": [
          {
            "q": "OTP message nahi aa raha to kyun?",
            "a": "Network, DND, app permission, ya SMS center issue ho sakta hai."
          },
          {
            "q": "Missed call OTP fail hota hai?",
            "a": "Low signal ya operator congestion mein missed call verification fail ho sakta hai."
          },
          {
            "q": "Bank OTP ka problem network se hai?",
            "a": "Kai baar haan, especially indoor weak signal mein."
          },
          {
            "q": "SMS send fail ho raha hai, kya first check karu?",
            "a": "Balance, signal, center number, aur app permissions."
          }
        ],
        "related": [
          {
            "title": "OTP Nahi Aa Raha",
            "slug": "otp-nahi-aa-raha-network",
            "category": "network"
          },
          {
            "title": "Bank OTP Nahi Aa Raha",
            "slug": "bank-otp-nahi-aa-raha",
            "category": "network"
          }
        ],
        "keywords": [
          "sim sms service off",
          "sms problem",
          "otp issue",
          "message center"
        ],
        "variants": [
          "sim sms service off",
          "sms issue",
          "otp not coming",
          "message not sending"
        ]
      },
      {
        "slug": "number-port-nahi-ho-raha",
        "category": "network",
        "metaTitle": "Number Port Nahi Ho Raha? Porting/UPC Fix Guide | JharForm",
        "metaDescription": "Number Port Nahi Ho Raha ka issue? Number Port Nahi Ho Raha me porting eligibility, UPC, pending dues, ya KYC mismatch sabse common reasons hote hain. Porting ko smoothly complete karne ke steps yahan hain. Simple Hinglish steps se fix karo.",
        "h1": "Number Port Nahi Ho Raha — Complete Hinglish Fix Guide",
        "lastUpdated": "May 2026",
        "readingTime": "4 min",
        "difficulty": "Easy",
        "description": "Number Port Nahi Ho Raha me porting eligibility, UPC, pending dues, ya KYC mismatch sabse common reasons hote hain. Porting ko smoothly complete karne ke steps yahan hain.",
        "steps": [
          {
            "title": "Active number aur eligibility check karo",
            "detail": "Porting se pehle current SIM active hona chahiye."
          },
          {
            "title": "UPC code sahi generate karo",
            "detail": "Porting ke liye current operator ka valid code chahiye."
          },
          {
            "title": "Pending dues clear karo",
            "detail": "Outstanding balance ya unpaid bill porting delay karta hai."
          },
          {
            "title": "KYC aur ID details match karo",
            "detail": "Mismatch se port request reject ho sakti hai."
          },
          {
            "title": "Waiting period ka dhyan rakho",
            "detail": "Recent porting ke baad kuch time tak re-port limited hota hai."
          },
          {
            "title": "New operator activation confirm karo",
            "detail": "Port complete hone ke baad network, calls aur data test karo."
          },
          {
            "title": "Porting eligibility aur pending dues clear karo",
            "detail": "Recent porting cooldown, KYC mismatch, ya unpaid balance ho to pehle fix karo."
          },
          {
            "title": "Operator app ya SMS status follow karo",
            "detail": "Porting complete hone tak status updates save rakho."
          }
        ],
        "screenshots": [
          {
            "caption": "Number Port Nahi Ho Raha issue screen showing warning banner, network status, aur quick settings shortcuts",
            "alt": "Number Port Nahi Ho Raha issue screen showing warning banner and quick settings shortcuts",
            "type": "phone",
            "mockupType": "number-port-nahi-ho-raha-screen-1"
          },
          {
            "caption": "Step-by-step fix screen for number port nahi ho raha with settings path, toggle buttons, aur status after fix note",
            "alt": "Step-by-step fix screen for Number Port Nahi Ho Raha with settings path and status after fix",
            "type": "phone",
            "mockupType": "number-port-nahi-ho-raha-screen-2"
          }
        ],
        "sources": [
          {
            "title": "DoT Sanchar Saathi",
            "url": "https://www.sancharsaathi.gov.in/",
            "icon": "🏛️"
          },
          {
            "title": "TRAI Consumer Portal",
            "url": "https://www.trai.gov.in/consumer",
            "icon": "🏛️"
          }
        ],
        "proTips": [
          "Porting se pehle prepaid balance aur plan validity check karo",
          "UPC code note karke rakho",
          "Active SIM aur same ID proof handy rakho"
        ],
        "faqs": [
          {
            "q": "Number port nahi ho raha, kaunse reasons hote hain?",
            "a": "Pending dues, KYC issue, recent porting cooldown, ya mismatch common hai."
          },
          {
            "q": "Port out code kahan se milta hai?",
            "a": "Operator ke UPC SMS process ya app/status se. Format operator ke rules pe depend karta hai."
          },
          {
            "q": "Porting reject ho gayi to kya karu?",
            "a": "Reason correct karke reapply karo."
          },
          {
            "q": "Porting status track kaise karu?",
            "a": "Operator app, SMS updates, ya customer support se."
          }
        ],
        "related": [
          {
            "title": "SIM Activate Kaise Kare",
            "slug": "sim-activate-kaise-kare",
            "category": "network"
          },
          {
            "title": "Airtel/Vi No Network",
            "slug": "airtel-vi-idea-no-network",
            "category": "network"
          }
        ],
        "keywords": [
          "number port nahi ho raha",
          "mnp",
          "porting issue",
          "port code"
        ],
        "variants": [
          "number port nahi ho raha",
          "number port problem",
          "mnp issue",
          "porting not working"
        ]
      },
      {
        "slug": "port-out-code-nahi-aa-raha",
        "category": "network",
        "metaTitle": "Port Out Code Nahi Aa Raha? Porting/UPC Fix Guide | JharForm",
        "metaDescription": "Port Out Code Nahi Aa Raha ka issue? Port Out Code Nahi Aa Raha me porting eligibility, UPC, pending dues, ya KYC mismatch sabse common reasons hote hain. Porting ko smoothly complete karne ke steps yahan hain. Simple Hinglish steps se fix karo.",
        "h1": "Port Out Code Nahi Aa Raha — Complete Hinglish Fix Guide",
        "lastUpdated": "May 2026",
        "readingTime": "4 min",
        "difficulty": "Easy",
        "description": "Port Out Code Nahi Aa Raha me porting eligibility, UPC, pending dues, ya KYC mismatch sabse common reasons hote hain. Porting ko smoothly complete karne ke steps yahan hain.",
        "steps": [
          {
            "title": "Active number aur eligibility check karo",
            "detail": "Porting se pehle current SIM active hona chahiye."
          },
          {
            "title": "UPC code sahi generate karo",
            "detail": "Porting ke liye current operator ka valid code chahiye."
          },
          {
            "title": "Pending dues clear karo",
            "detail": "Outstanding balance ya unpaid bill porting delay karta hai."
          },
          {
            "title": "KYC aur ID details match karo",
            "detail": "Mismatch se port request reject ho sakti hai."
          },
          {
            "title": "Waiting period ka dhyan rakho",
            "detail": "Recent porting ke baad kuch time tak re-port limited hota hai."
          },
          {
            "title": "New operator activation confirm karo",
            "detail": "Port complete hone ke baad network, calls aur data test karo."
          },
          {
            "title": "Porting eligibility aur pending dues clear karo",
            "detail": "Recent porting cooldown, KYC mismatch, ya unpaid balance ho to pehle fix karo."
          },
          {
            "title": "Operator app ya SMS status follow karo",
            "detail": "Porting complete hone tak status updates save rakho."
          }
        ],
        "screenshots": [
          {
            "caption": "Port Out Code Nahi Aa Raha issue screen showing warning banner, network status, aur quick settings shortcuts",
            "alt": "Port Out Code Nahi Aa Raha issue screen showing warning banner and quick settings shortcuts",
            "type": "phone",
            "mockupType": "port-out-code-nahi-aa-raha-screen-1"
          },
          {
            "caption": "Step-by-step fix screen for port out code nahi aa raha with settings path, toggle buttons, aur status after fix note",
            "alt": "Step-by-step fix screen for Port Out Code Nahi Aa Raha with settings path and status after fix",
            "type": "phone",
            "mockupType": "port-out-code-nahi-aa-raha-screen-2"
          }
        ],
        "sources": [
          {
            "title": "DoT Sanchar Saathi",
            "url": "https://www.sancharsaathi.gov.in/",
            "icon": "🏛️"
          },
          {
            "title": "TRAI Consumer Portal",
            "url": "https://www.trai.gov.in/consumer",
            "icon": "🏛️"
          }
        ],
        "proTips": [
          "Porting se pehle prepaid balance aur plan validity check karo",
          "UPC code note karke rakho",
          "Active SIM aur same ID proof handy rakho"
        ],
        "faqs": [
          {
            "q": "Number port nahi ho raha, kaunse reasons hote hain?",
            "a": "Pending dues, KYC issue, recent porting cooldown, ya mismatch common hai."
          },
          {
            "q": "Port out code kahan se milta hai?",
            "a": "Operator ke UPC SMS process ya app/status se. Format operator ke rules pe depend karta hai."
          },
          {
            "q": "Porting reject ho gayi to kya karu?",
            "a": "Reason correct karke reapply karo."
          },
          {
            "q": "Porting status track kaise karu?",
            "a": "Operator app, SMS updates, ya customer support se."
          }
        ],
        "related": [
          {
            "title": "SIM Activate Kaise Kare",
            "slug": "sim-activate-kaise-kare",
            "category": "network"
          },
          {
            "title": "Airtel/Vi No Network",
            "slug": "airtel-vi-idea-no-network",
            "category": "network"
          }
        ],
        "keywords": [
          "port out code nahi aa raha",
          "mnp",
          "porting issue",
          "port code"
        ],
        "variants": [
          "port out code nahi aa raha",
          "number port problem",
          "mnp issue",
          "porting not working"
        ]
      },
      {
        "slug": "mnp-rejected",
        "category": "network",
        "metaTitle": "MNP Rejected Ho Gaya? Porting/UPC Fix Guide | JharForm",
        "metaDescription": "MNP Rejected Ho Gaya ka issue? MNP Rejected Ho Gaya me porting eligibility, UPC, pending dues, ya KYC mismatch sabse common reasons hote hain. Porting ko smoothly complete karne ke steps yahan hain. Simple Hinglish steps se fix karo.",
        "h1": "MNP Rejected Ho Gaya — Complete Hinglish Fix Guide",
        "lastUpdated": "May 2026",
        "readingTime": "4 min",
        "difficulty": "Easy",
        "description": "MNP Rejected Ho Gaya me porting eligibility, UPC, pending dues, ya KYC mismatch sabse common reasons hote hain. Porting ko smoothly complete karne ke steps yahan hain.",
        "steps": [
          {
            "title": "Active number aur eligibility check karo",
            "detail": "Porting se pehle current SIM active hona chahiye."
          },
          {
            "title": "UPC code sahi generate karo",
            "detail": "Porting ke liye current operator ka valid code chahiye."
          },
          {
            "title": "Pending dues clear karo",
            "detail": "Outstanding balance ya unpaid bill porting delay karta hai."
          },
          {
            "title": "KYC aur ID details match karo",
            "detail": "Mismatch se port request reject ho sakti hai."
          },
          {
            "title": "Waiting period ka dhyan rakho",
            "detail": "Recent porting ke baad kuch time tak re-port limited hota hai."
          },
          {
            "title": "New operator activation confirm karo",
            "detail": "Port complete hone ke baad network, calls aur data test karo."
          },
          {
            "title": "Porting eligibility aur pending dues clear karo",
            "detail": "Recent porting cooldown, KYC mismatch, ya unpaid balance ho to pehle fix karo."
          },
          {
            "title": "Operator app ya SMS status follow karo",
            "detail": "Porting complete hone tak status updates save rakho."
          }
        ],
        "screenshots": [
          {
            "caption": "MNP Rejected Ho Gaya issue screen showing warning banner, network status, aur quick settings shortcuts",
            "alt": "MNP Rejected Ho Gaya issue screen showing warning banner and quick settings shortcuts",
            "type": "phone",
            "mockupType": "mnp-rejected-screen-1"
          },
          {
            "caption": "Step-by-step fix screen for mnp rejected ho gaya with settings path, toggle buttons, aur status after fix note",
            "alt": "Step-by-step fix screen for MNP Rejected Ho Gaya with settings path and status after fix",
            "type": "phone",
            "mockupType": "mnp-rejected-screen-2"
          }
        ],
        "sources": [
          {
            "title": "DoT Sanchar Saathi",
            "url": "https://www.sancharsaathi.gov.in/",
            "icon": "🏛️"
          },
          {
            "title": "TRAI Consumer Portal",
            "url": "https://www.trai.gov.in/consumer",
            "icon": "🏛️"
          }
        ],
        "proTips": [
          "Porting se pehle prepaid balance aur plan validity check karo",
          "UPC code note karke rakho",
          "Active SIM aur same ID proof handy rakho"
        ],
        "faqs": [
          {
            "q": "Number port nahi ho raha, kaunse reasons hote hain?",
            "a": "Pending dues, KYC issue, recent porting cooldown, ya mismatch common hai."
          },
          {
            "q": "Port out code kahan se milta hai?",
            "a": "Operator ke UPC SMS process ya app/status se. Format operator ke rules pe depend karta hai."
          },
          {
            "q": "Porting reject ho gayi to kya karu?",
            "a": "Reason correct karke reapply karo."
          },
          {
            "q": "Porting status track kaise karu?",
            "a": "Operator app, SMS updates, ya customer support se."
          }
        ],
        "related": [
          {
            "title": "SIM Activate Kaise Kare",
            "slug": "sim-activate-kaise-kare",
            "category": "network"
          },
          {
            "title": "Airtel/Vi No Network",
            "slug": "airtel-vi-idea-no-network",
            "category": "network"
          }
        ],
        "keywords": [
          "mnp rejected",
          "mnp",
          "porting issue",
          "port code"
        ],
        "variants": [
          "mnp rejected ho gaya",
          "number port problem",
          "mnp issue",
          "porting not working"
        ]
      },
      {
        "slug": "mobile-number-porting-track",
        "category": "network",
        "metaTitle": "Mobile Number Porting Track Kaise Kare? Porting/UPC Fix Guide | JharForm",
        "metaDescription": "Mobile Number Porting Track Kaise Kare ka issue? Mobile Number Porting Track Kaise Kare me porting eligibility, UPC, pending dues, ya KYC mismatch sabse common reasons hote hain. Porting ko smoothly complete karne ke steps yahan hain. Simple Hinglish steps se fix karo.",
        "h1": "Mobile Number Porting Track Kaise Kare — Complete Hinglish Fix Guide",
        "lastUpdated": "May 2026",
        "readingTime": "4 min",
        "difficulty": "Easy",
        "description": "Mobile Number Porting Track Kaise Kare me porting eligibility, UPC, pending dues, ya KYC mismatch sabse common reasons hote hain. Porting ko smoothly complete karne ke steps yahan hain.",
        "steps": [
          {
            "title": "Active number aur eligibility check karo",
            "detail": "Porting se pehle current SIM active hona chahiye."
          },
          {
            "title": "UPC code sahi generate karo",
            "detail": "Porting ke liye current operator ka valid code chahiye."
          },
          {
            "title": "Pending dues clear karo",
            "detail": "Outstanding balance ya unpaid bill porting delay karta hai."
          },
          {
            "title": "KYC aur ID details match karo",
            "detail": "Mismatch se port request reject ho sakti hai."
          },
          {
            "title": "Waiting period ka dhyan rakho",
            "detail": "Recent porting ke baad kuch time tak re-port limited hota hai."
          },
          {
            "title": "New operator activation confirm karo",
            "detail": "Port complete hone ke baad network, calls aur data test karo."
          },
          {
            "title": "Porting eligibility aur pending dues clear karo",
            "detail": "Recent porting cooldown, KYC mismatch, ya unpaid balance ho to pehle fix karo."
          },
          {
            "title": "Operator app ya SMS status follow karo",
            "detail": "Porting complete hone tak status updates save rakho."
          }
        ],
        "screenshots": [
          {
            "caption": "Mobile Number Porting Track Kaise Kare issue screen showing warning banner, network status, aur quick settings shortcuts",
            "alt": "Mobile Number Porting Track Kaise Kare issue screen showing warning banner and quick settings shortcuts",
            "type": "phone",
            "mockupType": "mobile-number-porting-track-screen-1"
          },
          {
            "caption": "Step-by-step fix screen for mobile number porting track kaise kare with settings path, toggle buttons, aur status after fix note",
            "alt": "Step-by-step fix screen for Mobile Number Porting Track Kaise Kare with settings path and status after fix",
            "type": "phone",
            "mockupType": "mobile-number-porting-track-screen-2"
          }
        ],
        "sources": [
          {
            "title": "DoT Sanchar Saathi",
            "url": "https://www.sancharsaathi.gov.in/",
            "icon": "🏛️"
          },
          {
            "title": "TRAI Consumer Portal",
            "url": "https://www.trai.gov.in/consumer",
            "icon": "🏛️"
          }
        ],
        "proTips": [
          "Porting se pehle prepaid balance aur plan validity check karo",
          "UPC code note karke rakho",
          "Active SIM aur same ID proof handy rakho"
        ],
        "faqs": [
          {
            "q": "Number port nahi ho raha, kaunse reasons hote hain?",
            "a": "Pending dues, KYC issue, recent porting cooldown, ya mismatch common hai."
          },
          {
            "q": "Port out code kahan se milta hai?",
            "a": "Operator ke UPC SMS process ya app/status se. Format operator ke rules pe depend karta hai."
          },
          {
            "q": "Porting reject ho gayi to kya karu?",
            "a": "Reason correct karke reapply karo."
          },
          {
            "q": "Porting status track kaise karu?",
            "a": "Operator app, SMS updates, ya customer support se."
          }
        ],
        "related": [
          {
            "title": "SIM Activate Kaise Kare",
            "slug": "sim-activate-kaise-kare",
            "category": "network"
          },
          {
            "title": "Airtel/Vi No Network",
            "slug": "airtel-vi-idea-no-network",
            "category": "network"
          }
        ],
        "keywords": [
          "mobile number porting track",
          "mnp",
          "porting issue",
          "port code"
        ],
        "variants": [
          "mobile number porting track kaise kare",
          "number port problem",
          "mnp issue",
          "porting not working"
        ]
      },
      {
        "slug": "esim-activate-kaise-kare",
        "category": "network",
        "metaTitle": "eSIM Activate Kaise Kare? eSIM Setup Guide | JharForm",
        "metaDescription": "eSIM Activate Kaise Kare ka issue? eSIM Activate Kaise Kare ke liye compatible phone, stable internet, QR/profile setup, aur carrier activation process zaroori hota hai. Yeh guide easy Hinglish me hai. Simple Hinglish steps se fix karo.",
        "h1": "eSIM Activate Kaise Kare — Complete Hinglish Fix Guide",
        "lastUpdated": "May 2026",
        "readingTime": "4 min",
        "difficulty": "Medium",
        "description": "eSIM Activate Kaise Kare ke liye compatible phone, stable internet, QR/profile setup, aur carrier activation process zaroori hota hai. Yeh guide easy Hinglish me hai.",
        "steps": [
          {
            "title": "Phone eSIM compatible hai ya nahi check karo",
            "detail": "Settings ya official support list se model compatibility confirm karo."
          },
          {
            "title": "Operator se eSIM QR/profile lo",
            "detail": "QR code ya activation details securely obtain karo."
          },
          {
            "title": "WiFi stable rakho",
            "detail": "eSIM download aur activation ke liye stable internet chahiye."
          },
          {
            "title": "Old SIM line status note karo",
            "detail": "Physical SIM deactivate hone ka time dhyan me rakho."
          },
          {
            "title": "Profile install karke restart karo",
            "detail": "eSIM profile install ke baad phone reboot karo."
          },
          {
            "title": "Signal, calls aur data test karo",
            "detail": "Activation complete hone ke baad sab services verify karo."
          },
          {
            "title": "Device compatibility verify karo",
            "detail": "eSIM supported model, software update, aur stable WiFi confirm karo."
          },
          {
            "title": "QR/profile install ke baad restart karo",
            "detail": "eSIM activation apply hone ke liye reboot useful hota hai."
          }
        ],
        "screenshots": [
          {
            "caption": "eSIM Activate Kaise Kare issue screen showing warning banner, network status, aur quick settings shortcuts",
            "alt": "eSIM Activate Kaise Kare issue screen showing warning banner and quick settings shortcuts",
            "type": "phone",
            "mockupType": "esim-activate-kaise-kare-screen-1"
          },
          {
            "caption": "Step-by-step fix screen for esim activate kaise kare with settings path, toggle buttons, aur status after fix note",
            "alt": "Step-by-step fix screen for eSIM Activate Kaise Kare with settings path and status after fix",
            "type": "phone",
            "mockupType": "esim-activate-kaise-kare-screen-2"
          }
        ],
        "sources": [
          {
            "title": "Apple Support",
            "url": "https://support.apple.com/en-in",
            "icon": "📱"
          },
          {
            "title": "TRAI Consumer Portal",
            "url": "https://www.trai.gov.in/consumer",
            "icon": "🏛️"
          }
        ],
        "proTips": [
          "QR code secure rakho",
          "WiFi ke bina eSIM activation difficult ho sakti hai",
          "Purani SIM deactivate hone ka time note karo"
        ],
        "faqs": [
          {
            "q": "eSIM activate karne ke liye internet chahiye?",
            "a": "Haan, usually WiFi ya stable mobile data helpful hota hai."
          },
          {
            "q": "eSIM transfer kaise hota hai?",
            "a": "New device me carrier process aur QR/profile transfer se."
          },
          {
            "q": "eSIM sab phones me chalti hai?",
            "a": "Nahi, device support zaroori hai."
          },
          {
            "q": "eSIM fail ho jaye to kya karu?",
            "a": "Operator support ya store me reissue karwao."
          }
        ],
        "related": [
          {
            "title": "Number Port Nahi Ho Raha",
            "slug": "number-port-nahi-ho-raha",
            "category": "network"
          },
          {
            "title": "SIM Activate Kaise Kare",
            "slug": "sim-activate-kaise-kare",
            "category": "network"
          }
        ],
        "keywords": [
          "esim activate kaise kare",
          "esim activation",
          "esim transfer",
          "carrier qr"
        ],
        "variants": [
          "esim activate kaise kare",
          "esim issue",
          "digital sim problem",
          "qr activation issue"
        ]
      },
      {
        "slug": "esim-transfer-kaise-kare",
        "category": "network",
        "metaTitle": "eSIM Transfer Kaise Kare? eSIM Setup Guide | JharForm",
        "metaDescription": "eSIM Transfer Kaise Kare ka issue? eSIM Transfer Kaise Kare ke liye compatible phone, stable internet, QR/profile setup, aur carrier activation process zaroori hota hai. Yeh guide easy Hinglish me hai. Simple Hinglish steps se fix karo.",
        "h1": "eSIM Transfer Kaise Kare — Complete Hinglish Fix Guide",
        "lastUpdated": "May 2026",
        "readingTime": "4 min",
        "difficulty": "Medium",
        "description": "eSIM Transfer Kaise Kare ke liye compatible phone, stable internet, QR/profile setup, aur carrier activation process zaroori hota hai. Yeh guide easy Hinglish me hai.",
        "steps": [
          {
            "title": "Phone eSIM compatible hai ya nahi check karo",
            "detail": "Settings ya official support list se model compatibility confirm karo."
          },
          {
            "title": "Operator se eSIM QR/profile lo",
            "detail": "QR code ya activation details securely obtain karo."
          },
          {
            "title": "WiFi stable rakho",
            "detail": "eSIM download aur activation ke liye stable internet chahiye."
          },
          {
            "title": "Old SIM line status note karo",
            "detail": "Physical SIM deactivate hone ka time dhyan me rakho."
          },
          {
            "title": "Profile install karke restart karo",
            "detail": "eSIM profile install ke baad phone reboot karo."
          },
          {
            "title": "Signal, calls aur data test karo",
            "detail": "Activation complete hone ke baad sab services verify karo."
          },
          {
            "title": "Device compatibility verify karo",
            "detail": "eSIM supported model, software update, aur stable WiFi confirm karo."
          },
          {
            "title": "QR/profile install ke baad restart karo",
            "detail": "eSIM activation apply hone ke liye reboot useful hota hai."
          }
        ],
        "screenshots": [
          {
            "caption": "eSIM Transfer Kaise Kare issue screen showing warning banner, network status, aur quick settings shortcuts",
            "alt": "eSIM Transfer Kaise Kare issue screen showing warning banner and quick settings shortcuts",
            "type": "phone",
            "mockupType": "esim-transfer-kaise-kare-screen-1"
          },
          {
            "caption": "Step-by-step fix screen for esim transfer kaise kare with settings path, toggle buttons, aur status after fix note",
            "alt": "Step-by-step fix screen for eSIM Transfer Kaise Kare with settings path and status after fix",
            "type": "phone",
            "mockupType": "esim-transfer-kaise-kare-screen-2"
          }
        ],
        "sources": [
          {
            "title": "Apple Support",
            "url": "https://support.apple.com/en-in",
            "icon": "📱"
          },
          {
            "title": "TRAI Consumer Portal",
            "url": "https://www.trai.gov.in/consumer",
            "icon": "🏛️"
          }
        ],
        "proTips": [
          "QR code secure rakho",
          "WiFi ke bina eSIM activation difficult ho sakti hai",
          "Purani SIM deactivate hone ka time note karo"
        ],
        "faqs": [
          {
            "q": "eSIM activate karne ke liye internet chahiye?",
            "a": "Haan, usually WiFi ya stable mobile data helpful hota hai."
          },
          {
            "q": "eSIM transfer kaise hota hai?",
            "a": "New device me carrier process aur QR/profile transfer se."
          },
          {
            "q": "eSIM sab phones me chalti hai?",
            "a": "Nahi, device support zaroori hai."
          },
          {
            "q": "eSIM fail ho jaye to kya karu?",
            "a": "Operator support ya store me reissue karwao."
          }
        ],
        "related": [
          {
            "title": "Number Port Nahi Ho Raha",
            "slug": "number-port-nahi-ho-raha",
            "category": "network"
          },
          {
            "title": "SIM Activate Kaise Kare",
            "slug": "sim-activate-kaise-kare",
            "category": "network"
          }
        ],
        "keywords": [
          "esim transfer kaise kare",
          "esim activation",
          "esim transfer",
          "carrier qr"
        ],
        "variants": [
          "esim transfer kaise kare",
          "esim issue",
          "digital sim problem",
          "qr activation issue"
        ]
      },
      {
        "slug": "hotspot-connect-nahi-ho-raha",
        "category": "network",
        "metaTitle": "Hotspot Connect Nahi Ho Raha? Hotspot & JioFi Fix Guide | JharForm",
        "metaDescription": "Hotspot Connect Nahi Ho Raha ka issue? Hotspot Connect Nahi Ho Raha mein password, battery saver, data plan, ya compatibility issue hota hai. Yeh page phone hotspot aur JioFi dono par useful hai. Simple Hinglish steps se fix karo.",
        "h1": "Hotspot Connect Nahi Ho Raha — Complete Hinglish Fix Guide",
        "lastUpdated": "May 2026",
        "readingTime": "4 min",
        "difficulty": "Easy",
        "description": "Hotspot Connect Nahi Ho Raha mein password, battery saver, data plan, ya compatibility issue hota hai. Yeh page phone hotspot aur JioFi dono par useful hai.",
        "steps": [
          {
            "title": "Hotspot password aur band check karo",
            "detail": "2.4GHz/5GHz aur password mismatch hotspot connect nahi ho raha issue dekh lo."
          },
          {
            "title": "Battery saver off karo",
            "detail": "Battery saver hotspot ko auto off kar deta hai."
          },
          {
            "title": "Max connections limit dekho",
            "detail": "Bahut devices connect honge to speed aur stability dono girti hai."
          },
          {
            "title": "APN aur data status verify karo",
            "detail": "Without active data plan hotspot bhi internet nahi dega."
          },
          {
            "title": "Phone restart aur heat control karo",
            "detail": "Overheating se hotspot cut hota hai."
          },
          {
            "title": "Dusre device se test karo",
            "detail": "Agar ek device connect hota hai aur dusra nahi, issue device compatibility ka ho sakta hai."
          },
          {
            "title": "Connected devices aur battery saver check karo",
            "detail": "Bahut devices ya battery saver se hotspot baar baar off ho sakta hai."
          },
          {
            "title": "APN aur hotspot band settings verify karo",
            "detail": "Galat APN ya band selection se hotspot connect nahi hota."
          }
        ],
        "screenshots": [
          {
            "caption": "Hotspot Connect Nahi Ho Raha issue screen showing warning banner, network status, aur quick settings shortcuts",
            "alt": "Hotspot Connect Nahi Ho Raha issue screen showing warning banner and quick settings shortcuts",
            "type": "phone",
            "mockupType": "hotspot-connect-nahi-ho-raha-screen-1"
          },
          {
            "caption": "Step-by-step fix screen for hotspot connect nahi ho raha with settings path, toggle buttons, aur status after fix note",
            "alt": "Step-by-step fix screen for Hotspot Connect Nahi Ho Raha with settings path and status after fix",
            "type": "phone",
            "mockupType": "hotspot-connect-nahi-ho-raha-screen-2"
          }
        ],
        "sources": [
          {
            "title": "Android Help Center",
            "url": "https://support.google.com/android/answer/9059108",
            "icon": "📞"
          },
          {
            "title": "Jio Help",
            "url": "https://www.jio.com/help",
            "icon": "📞"
          }
        ],
        "proTips": [
          "Hotspot password simple mat rakho",
          "Data saver hotspot speed ko affect kar sakta hai",
          "Phone heat zyada ho to hotspot band karke thoda cool karo"
        ],
        "faqs": [
          {
            "q": "Hotspot connect nahi ho raha to kya karu?",
            "a": "Password, band selection, aur maximum users limit check karo."
          },
          {
            "q": "JioFi connected but internet nahi?",
            "a": "Device signal aur recharge validity check karo."
          },
          {
            "q": "Hotspot baar baar disconnect kyu hota hai?",
            "a": "Battery saver, overheating, ya power saving mode issue ho sakta hai."
          },
          {
            "q": "Hotspot on hote hi net slow kyu?",
            "a": "Multiple devices ya weak signal ki wajah se speed divide ho jaati hai."
          }
        ],
        "related": [
          {
            "title": "Mobile Internet Nahi Chal Raha",
            "slug": "mobile-internet-nahi-chal-raha",
            "category": "network"
          },
          {
            "title": "Data Speed Bahut Slow",
            "slug": "data-speed-bahut-slow",
            "category": "network"
          }
        ],
        "keywords": [
          "hotspot connect nahi ho raha",
          "hotspot issue",
          "jiofi issue",
          "tethering problem"
        ],
        "variants": [
          "hotspot connect nahi ho raha",
          "hotspot issue",
          "tethering not working",
          "wifi sharing problem"
        ]
      },
      {
        "slug": "hotspot-bar-bar-disconnect",
        "category": "network",
        "metaTitle": "Hotspot Baar Baar Disconnect Ho Raha Hai? Hotspot & JioFi Fix Guide | JharForm",
        "metaDescription": "Hotspot Baar Baar Disconnect Ho Raha Hai ka issue? Hotspot Baar Baar Disconnect Ho Raha Hai mein password, battery saver, data plan, ya compatibility issue hota hai. Yeh page phone hotspot aur JioFi dono par useful hai. Simple Hinglish steps se fix karo.",
        "h1": "Hotspot Baar Baar Disconnect Ho Raha Hai — Complete Hinglish Fix Guide",
        "lastUpdated": "May 2026",
        "readingTime": "4 min",
        "difficulty": "Easy",
        "description": "Hotspot Baar Baar Disconnect Ho Raha Hai mein password, battery saver, data plan, ya compatibility issue hota hai. Yeh page phone hotspot aur JioFi dono par useful hai.",
        "steps": [
          {
            "title": "Hotspot password aur band check karo",
            "detail": "2.4GHz/5GHz aur password mismatch hotspot baar baar disconnect ho raha hai issue dekh lo."
          },
          {
            "title": "Battery saver off karo",
            "detail": "Battery saver hotspot ko auto off kar deta hai."
          },
          {
            "title": "Max connections limit dekho",
            "detail": "Bahut devices connect honge to speed aur stability dono girti hai."
          },
          {
            "title": "APN aur data status verify karo",
            "detail": "Without active data plan hotspot bhi internet nahi dega."
          },
          {
            "title": "Phone restart aur heat control karo",
            "detail": "Overheating se hotspot cut hota hai."
          },
          {
            "title": "Dusre device se test karo",
            "detail": "Agar ek device connect hota hai aur dusra nahi, issue device compatibility ka ho sakta hai."
          },
          {
            "title": "Connected devices aur battery saver check karo",
            "detail": "Bahut devices ya battery saver se hotspot baar baar off ho sakta hai."
          },
          {
            "title": "APN aur hotspot band settings verify karo",
            "detail": "Galat APN ya band selection se hotspot connect nahi hota."
          }
        ],
        "screenshots": [
          {
            "caption": "Hotspot Baar Baar Disconnect Ho Raha Hai issue screen showing warning banner, network status, aur quick settings shortcuts",
            "alt": "Hotspot Baar Baar Disconnect Ho Raha Hai issue screen showing warning banner and quick settings shortcuts",
            "type": "phone",
            "mockupType": "hotspot-bar-bar-disconnect-screen-1"
          },
          {
            "caption": "Step-by-step fix screen for hotspot baar baar disconnect ho raha hai with settings path, toggle buttons, aur status after fix note",
            "alt": "Step-by-step fix screen for Hotspot Baar Baar Disconnect Ho Raha Hai with settings path and status after fix",
            "type": "phone",
            "mockupType": "hotspot-bar-bar-disconnect-screen-2"
          }
        ],
        "sources": [
          {
            "title": "Android Help Center",
            "url": "https://support.google.com/android/answer/9059108",
            "icon": "📞"
          },
          {
            "title": "Jio Help",
            "url": "https://www.jio.com/help",
            "icon": "📞"
          }
        ],
        "proTips": [
          "Hotspot password simple mat rakho",
          "Data saver hotspot speed ko affect kar sakta hai",
          "Phone heat zyada ho to hotspot band karke thoda cool karo"
        ],
        "faqs": [
          {
            "q": "Hotspot connect nahi ho raha to kya karu?",
            "a": "Password, band selection, aur maximum users limit check karo."
          },
          {
            "q": "JioFi connected but internet nahi?",
            "a": "Device signal aur recharge validity check karo."
          },
          {
            "q": "Hotspot baar baar disconnect kyu hota hai?",
            "a": "Battery saver, overheating, ya power saving mode issue ho sakta hai."
          },
          {
            "q": "Hotspot on hote hi net slow kyu?",
            "a": "Multiple devices ya weak signal ki wajah se speed divide ho jaati hai."
          }
        ],
        "related": [
          {
            "title": "Mobile Internet Nahi Chal Raha",
            "slug": "mobile-internet-nahi-chal-raha",
            "category": "network"
          },
          {
            "title": "Data Speed Bahut Slow",
            "slug": "data-speed-bahut-slow",
            "category": "network"
          }
        ],
        "keywords": [
          "hotspot bar bar disconnect",
          "hotspot issue",
          "jiofi issue",
          "tethering problem"
        ],
        "variants": [
          "hotspot baar baar disconnect ho raha hai",
          "hotspot issue",
          "tethering not working",
          "wifi sharing problem"
        ]
      },
    ]
  };
