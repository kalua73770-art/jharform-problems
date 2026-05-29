import type { Category } from "../types";

export const documentCategory: Category = {
    slug: "document",
    name: "Government Documents",
    icon: "🏛️",
    description: "Income certificate pending, Aadhaar mismatch, scholarship rejected — government documents ke saare problems ka step-by-step solution.",
    metaTitle: "Government Document Problems — Certificate Fix Guide | JharForm",
    metaDescription: "Income certificate pending, Aadhaar mismatch, scholarship rejected — government documents ke saare problems ka step-by-step solution.",
    problems: [
      {
        slug: "income-certificate-pending",
        category: "document",
        metaTitle: "Income Certificate Pending Hai? Kaise Fix Kare (2026) | JharForm",
        metaDescription: "Jharkhand ya kisi state mein income certificate apply kiya par status pending dikh raha hai? Complete step-by-step solution guide.",
        h1: "Income Certificate Pending — Step by Step Solution",
        lastUpdated: "May 2026",
        readingTime: "6 min",
        difficulty: "Medium",
        description: "Income certificate online apply karne ke baad status 'Pending' ya 'Under Process' dikhta hai — offline verification, officer approval, ya document issue pending hoti hai. Official timeline 15 days hai lekin practically 30-45 days lag sakte hain.",
        steps: [
          { title: "Application reference number note karo", detail: "Application form ya confirmation SMS/email mein reference number hota hai — yeh save karo." },
          { title: "Portal pe status check karo", detail: "Jharkhand: jharsewa.jharkhand.gov.in ya ekalyan.nic.in. Dusri states apne state portal pe dekho." },
          { title: "Exact status samjho", detail: "Under Verification: wait karo 7-15 days. Approved: certificate download karo. Rejected: reason dekho aur fresh apply karo." },
          { title: "Block/Tehsil office mein jao", detail: "Original documents le jao: Ration Card, Voter ID, Aadhaar, Bank Passbook. Officer se status inquiry karo." },
          { title: "SDO office mein follow up karo", detail: "Sub-Divisional Officer ke office mein request register karo. Written application do agar zyada time ho gaya." },
          { title: "Grievance portal pe complaint karo", detail: "30 working days se zyada: pgportal.gov.in ya state grievance portal pe complaint darj karo." },
          { title: "CM Helpline use karo", detail: "Jharkhand: 181 pe call karo. Most states ka CM helpline available hai." }
        ],
        screenshots: [],
        sources: [
          { title: "Jharkhand JharSewa Portal", url: "https://jharsewa.jharkhand.gov.in", icon: "🏗️" },
          { title: "eKalyan Scholarship Portal", url: "https://ekalyan.cgg.gov.in", icon: "🎓" },
          { title: "Public Grievance Portal (PGPortal)", url: "https://pgportal.gov.in", icon: "🏫" }
        ],
        proTips: ["Sab original documents ki photocopies banao aur saath rakho", "Officer se written receipt lo jab bhi office jao", "Application number SMS mein save karo — kabhi delete mat karo"],
        faqs: [
          { q: "Income certificate officially kitne din mein banta hai?", a: "Official government timeline 15 working days hai. Practically 30-45 days common hai. 45 days se zyada ho to grievance file karo." },
          { q: "Pending se Rejected ho gaya to kya karu?", a: "Rejection reason note karo — photo quality poor, wrong details, ya missing documents. Correct karke fresh apply karo." },
          { q: "Income certificate online track kaise kare?", a: "Jharkhand: jharsewa.jharkhand.gov.in pe application number se track hota hai." },
          { q: "Income certificate kitne saal valid hota hai?", a: "Usually 6 months ya 1 saal. Scholarship ya job ke liye fresh certificate maanga jaata hai." }
        ],
        related: [
          { title: "Aadhaar Mismatch", slug: "aadhaar-mismatch", category: "document" },
          { title: "OTP Nahi Aa Raha", slug: "otp-nahi-aa-raha", category: "mobile" }
        ],
        keywords: ["income certificate pending", "income certificate kaise banaye", "aay praman patra", "income proof"],
        variants: ["income certificate online apply", "aay praman patra pending", "income ka certificate nahi bana", "ekalyan income pending", "income certificate status"]
      },
      {
        slug: "aadhaar-mismatch",
        category: "document",
        metaTitle: "Aadhaar Name ya DOB Galat Hai? UIDAI Se Fix Karo (2026) | JharForm",
        metaDescription: "Aadhaar card mein naam, date of birth, ya address galat hai ya kisi document se match nahi karta? UIDAI portal se online correction ka step-by-step tarika.",
        h1: "Aadhaar Mismatch Problem — UIDAI Se Online Fix Karo",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Medium",
        description: "Aadhaar card mein naam spelling, date of birth, ya address galat hai — job, scholarship, ya bank application mein mismatch aa raha hai. UIDAI online portal se Rs. 50 fee mein correction hoti hai. 90 days mein complete hoti hai.",
        steps: [
          { title: "myAadhaar portal kholo", detail: "myaadhaar.uidai.gov.in kholo. Official site hai — spelling dhyan se check karo." },
          { title: "Update Aadhaar section mein jao", detail: "Update Aadhaar option click karo. OTP login karo registered mobile se." },
          { title: "Kya change karna hai select karo", detail: "Name, Date of Birth, Address, Gender, Mobile, Email — jo galat hai wo select karo." },
          { title: "Supporting documents upload karo", detail: "Name/DOB ke liye: 10th Marksheet, Passport, Voter ID, PAN Card. Address ke liye: Ration Card, Bank Statement." },
          { title: "Fee pay karo", detail: "Rs. 50 online fee pay karo — UPI, Netbanking, ya Debit/Credit Card se." },
          { title: "SRN note karo", detail: "Service Request Number (SRN) note karo — yeh tracking ke liye zaroori hai." },
          { title: "Status track karo", detail: "resident.uidai.gov.in pe SRN se status track karo. 90 days mein update complete hoti hai." }
        ],
        screenshots: [],
        sources: [
          { title: "Official UIDAI myAadhaar Portal", url: "https://myaadhaar.uidai.gov.in", icon: "📌" },
          { title: "UIDAI Resident Portal", url: "https://resident.uidai.gov.in", icon: "📚" },
          { title: "Aadhaar Update Guidelines", url: "https://uidai.gov.in/aadhaar-ecosystem.html", icon: "📋" }
        ],
        proTips: ["Name correction ke liye government school marksheet sabse strong proof hai", "Mobile number update ke liye Aadhaar centre pe jaana padta hai — online nahi hota", "SRN se SMS bhi aata hai — number save karo"],
        faqs: [
          { q: "Bina documents ke Aadhaar update hoga?", a: "Nahi — valid proof zaroori hai based on what you are updating." },
          { q: "Name spelling correction ke liye kaunsa document chahiye?", a: "10th Board Marksheet, Passport, School Leaving Certificate, ya Government ID acceptable hai." },
          { q: "Aadhaar Enrollment Centre pe jaana padega?", a: "Online update hoti hai. Sirf biometric update ke liye centre jana padta hai. Mobile number bhi centre se." },
          { q: "DOB ek baar se zyada update ho sakti hai?", a: "Nahi — Date of Birth sirf ek baar update hoti hai Aadhaar mein. Pehle carefully sahi documents gather karo." }
        ],
        related: [
          { title: "Income Certificate Pending", slug: "income-certificate-pending", category: "document" },
          { title: "OTP Nahi Aa Raha", slug: "otp-nahi-aa-raha", category: "mobile" }
        ],
        keywords: ["aadhaar mismatch", "aadhaar name correction", "aadhaar dob update", "uidai name change"],
        variants: ["aadhaar mein naam galat hai", "aadhaar correction online", "aadhar card update", "aadhaar address update", "uidai online correction"]
      },
      {
        slug: "pan-card-correction-online",
        category: "document",
        metaTitle: "PAN Card Mein Naam Ya DOB Galat? Online Correction Guide (2026) | JharForm",
        metaDescription: "PAN card mein naam spelling, date of birth, ya photo galat hai? NSDL/UTI portal se online correction Rs. 101 mein. Complete step-by-step guide.",
        h1: "PAN Card Correction — Naam, DOB, Photo Online Kaise Change Kare",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Easy",
        description: "PAN card mein naam spelling galat hai, date of birth alag dikh rahi hai, ya photo purani hai — NSDL ya UTIITSL portal se online correction kar sakte hain. Rs. 101 fee hoti hai. Digital signature ke saath 15-20 din mein updated PAN card aa jaata hai. Physical signature ke saath 30-45 din lagte hain. Correction ke liye valid proof documents chahiye hote hain.",
        steps: [
          { title: "NSDL ya UTI portal pe jao", detail: "tin-nsdl.com ya utiitsl.com pe jao. 'PAN Correction/Change' form select karo. Existing PAN number mandatory hai." },
          { title: "Kya change karna hai select karo", detail: "Name, Father's Name, Date of Birth, Photo, Signature, Address, Gender, Contact Details — jo bhi change karna hai tick karo." },
          { title: "Correct details fill karo", detail: "Name exactly jaise proof document pe hai waise daalo. DOB DD/MM/YYYY format mein. Spelling mismatch se reject hota hai." },
          { title: "Proof documents upload karo", detail: "Name/DOB change ke liye: Aadhaar, Passport, Driving License, Voter ID, 10th Marksheet. Address ke liye: Aadhaar, utility bill, bank statement." },
          { title: "Photo aur signature upload karo", detail: "Recent passport size photo (30KB-300KB, JPEG). Signature white background pe scan karo (10KB-300KB). Dimensions: 3.5cm x 2.5cm." },
          { title: "Fee pay karo — Rs. 101", detail: "Debit card, credit card, net banking, ya UPI se Rs. 101 pay karo. Physical PAN card bhi Rs. 101. E-PAN free hai (PDF only)." },
          { title: "Application number note karo", detail: "Acknowledgement number 15-digit hota hai. Status track karne ke liye zaroori. tin-nsdl.com pe 'Track PAN Status' se check karo." },
          { title: "Status track karo", detail: "15-20 din mein process hota hai. 'Application is under process' — wait karo. 'Dispatched' — 3-5 din mein ghar aa jayega." }
        ],
        screenshots: [],
        sources: [
          { title: "NSDL PAN Services", url: "https://tin-nsdl.com", icon: "📋" },
          { title: "UTIITSL PAN Services", url: "https://www.utiitsl.com", icon: "📋" },
          { title: "Income Tax PAN Guidelines", url: "https://www.incometax.gov.in/iec/foportal/help/how-to-apply-for-pan", icon: "🏢" }
        ],
        proTips: ["Name exactly Aadhaar card jaise daalo — Aadhaar-PAN linking easy hoga", "Photo recent 6 mahine ki honi chahiye — purani photo se reject ho sakta hai", "E-PAN Rs. 101 mein instant PDF milta hai — physical card ka wait nahi karna"],
        faqs: [
          { q: "PAN correction kitne din mein hota hai?", a: "Digital signature + e-KYC: 15-20 din. Physical signature + document upload: 30-45 din. TAT (Turn Around Time) track kar sakte hain." },
          { q: "PAN correction ke liye kaunsa document best hai?", a: "Aadhaar sabse best hai — government-issued, photo hai, aur Aadhaar-PAN linking mein help karta hai. Passport aur Driving License bhi accepted hain." },
          { q: "PAN card mein photo change ho sakti hai?", a: "Haan — lekin sirf tab jab existing photo unrecognizable ho. Normal photo update ke liye correction form use karo." },
          { q: "PAN correction mein kitni fee lagti hai?", a: "India address: Rs. 101 (physical) / Rs. 101 (e-PAN PDF). Foreign address: Rs. 1011. Fee non-refundable hai." }
        ],
        related: [
          { title: "Aadhaar Mismatch", slug: "aadhaar-mismatch", category: "document" },
          { title: "Income Certificate Pending", slug: "income-certificate-pending", category: "document" }
        ],
        keywords: ["pan card correction", "pan card name change", "pan card dob change", "nsdl pan correction"],
        variants: ["pan card mein naam galat hai", "pan card correction online", "pan card name change kaise kare", "pan card update"]
      },
      {
        slug: "driving-license-renewal-online",
        category: "document",
        metaTitle: "Driving License Renew Kaise Kare? Online Process (2026) | JharForm",
        metaDescription: "Driving License expire ho gaya ya expire hone wala hai? Sarathi portal se online renewal Rs. 200-500 mein. Complete step-by-step guide.",
        h1: "Driving License Renewal — Online Aur Offline Dono Tarike",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Medium",
        description: "Driving License expire ho gaya hai ya 30 din mein expire hone wala hai. Private vehicles ka license 20 saal ya 40 saal ki umar tak valid rehta hai (whichever earlier). Commercial vehicles ka 3 saal. Sarathi portal (parivahan.gov.in) se online renewal Rs. 200-500 mein hota hai. Medical certificate 40+ saal ke liye mandatory hai.",
        steps: [
          { title: "Sarathi portal pe jao", detail: "parivahan.gov.in/sarathiservice pe jao. State select karo jahan license issue hua tha. 'Apply for Driving License Renewal' select karo." },
          { title: "License number aur DOB daalo", detail: "Existing Driving License number daalo. Date of Birth DD/MM/YYYY format mein. System se details fetch hongi." },
          { title: "Medical certificate upload karo (40+ ke liye)", detail: "40 saal se upar ho to registered medical practitioner se Form 1A bharwao. Blood group, vision test, aur general fitness ka certificate." },
          { title: "Address update karo (agar change hua ho)", detail: "Current address daalo. Proof: Aadhaar, ration card, voter ID, utility bill. Agar same address hai toh same select karo." },
          { title: "Passport size photo aur signature upload karo", detail: "Recent photo (200KB-500KB JPEG). Signature white pe. Dimensions state ke hisaab se vary hoti hain." },
          { title: "Fee pay karo", detail: "Smart card DL: Rs. 200 (2 saar), Rs. 400 (5 saal commercial). Booklet DL: Rs. 300. Online payment: UPI, Debit Card, Net Banking." },
          { title: "Slot book karo RTO test ke liye", detail: "Kuch states mein online test (computer based) hota hai. Kuch mein RTO visit mandatory hai. Slot book karo nearest RTO ke liye." },
          { title: "RTO visit karo biometric ke liye", detail: "Appointment pe jao. Photo, signature, aur biometric capture hoga. Test pass hone ke baad renewed license 7-15 din mein aa jaayega." }
        ],
        screenshots: [],
        sources: [
          { title: "Sarathi Portal (Parivahan)", url: "https://parivahan.gov.in/sarathiservice", icon: "🚗" },
          { title: "Ministry of Road Transport", url: "https://morth.nic.in", icon: "🏛️" }
        ],
        proTips: ["Expiry se 30 din pehle renew karwao — late fee nahi lagti", "Medical certificate pehle se bana lo — RTO pe doctor available nahi hota hamesha", "Smart card DL prefer karo — booklet se zyada durable aur internationally recognized"],
        faqs: [
          { q: "License expire ho gaya to kitni late fee lagti hai?", a: "Expiry ke 30 din baad: Rs. 1000 late fee + renewal fee. 1 saal baad: Re-test (Learner + Driving test) dena padta hai. 5 saal baad: Fresh application." },
          { q: "Different state se renew kar sakte hain?", a: "Haan — lekin NOC (No Objection Certificate) chahiye pehle. NOC pehle state se online apply karo. Phir new state mein renewal." },
          { q: "Online test pass karna zaroori hai?", a: "Renewal mein nahi — sirf fresh license mein. Renewal mein sirf biometric + fee. Kuch states mein vision test hota hai RTO pe." },
          { q: "Commercial license renewal alag process hai?", a: "Haan — medical certificate zyada detailed hota hai. 3 saal validity. Fee zyada. Fitness certificate bhi chahiye commercial vehicles ke liye." }
        ],
        related: [
          { title: "Aadhaar Mismatch", slug: "aadhaar-mismatch", category: "document" },
          { title: "PAN Card Correction Online", slug: "pan-card-correction-online", category: "document" }
        ],
        keywords: ["driving license renewal", "dl renewal online", "sarathi portal renewal", "driving license expire"],
        variants: ["driving license renew kaise kare", "dl renewal online", "driving license expire ho gaya", "license renew kaise kare"]
      },
      {
        slug: "domicile-certificate-pending",
        category: "document",
        metaTitle: "Domicile Certificate Pending Hai? Complete Fix Guide (2026) | JharForm",
        metaDescription: "Domicile certificate apply kiya par pending hai? Status check, office follow-up, aur approval ka complete Hinglish guide.",
        h1: "Domicile Certificate Pending — Status Kaise Fix Kare",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Medium",
        description: "Domicile Certificate status pending ya under verification dikh raha hai — portal, office, aur grievance steps se problem ka clear fix mil sakta hai.",
        steps: [
        { title: "Application reference number note karo", detail: "Domicile Certificate application ke acknowledgement/SMS/email mein jo reference number hai use save karo." },
        { title: "JharSewa / State e-District portal pe status check karo", detail: "Official portal open karo aur status dekho: Pending, Under Verification, Approved, ya Rejected." },
        { title: "Required documents cross-check karo", detail: "Aadhaar, photo, address proof, income/caste/birth proof jaise documents missing to nahi hain, verify karo." },
        { title: "Office ya kiosk se follow up karo", detail: "CSC, e-District, Tehsil, ya concerned office mein jaakar written inquiry do aur status update maango." },
        { title: "Grievance raise karo", detail: "30 working days se zyada delay ho to state grievance portal ya PGPortal pe complaint file karo." },
        { title: "Helpline / Nodal officer contact karo", detail: "JharSewa / State e-District helpline ya nodal officer ko application number ke saath call/email karo." }
      ],
        screenshots: [],
        sources: [
        { title: "JharSewa / State e-District", url: "https://jharsewa.jharkhand.gov.in", icon: "🏛️" },
        { title: "Public Grievance Portal", url: "https://pgportal.gov.in", icon: "🏛️" }
      ],
        proTips: [
        "Application number aur SMS screenshot hamesha save rakho",
        "Office visit pe original aur photocopy dono le jao",
        "Portal refresh aur status check daily nahi, 2-3 din mein karo"
      ],
        faqs: [
        { q: "Domicile Certificate pending kitne din mein clear hota hai?", a: "Usually 7-15 working days, but office load ke hisaab se 30 din tak lag sakte hain." },
        { q: "Pending se reject ho gaya to kya karu?", a: "Reason dekho, missing document ya mismatch correct karke fresh apply karo." },
        { q: "Offline follow up zaroori hai kya?", a: "Agar portal pe delay ho raha hai to office ya CSC follow up helpful hota hai." },
        { q: "Status ka screenshot save karna chahiye?", a: "Haan, application ID aur status screenshot future complaint ke liye kaam aata hai." }
      ],
        related: [
        { title: "Income Certificate Pending", slug: "income-certificate-pending", category: "document" },
        { title: "Aadhaar Mismatch", slug: "aadhaar-mismatch", category: "document" }
      ],
        keywords: [
        "domicile certificate pending",
        "residence certificate status",
        "niwas praman patra",
        "domicile kaise banaye"
      ],
        variants: [
        "domicile certificate apply status",
        "niwas praman pending",
        "residence certificate not approved",
        "domicile certificate delay"
      ]
      },
      {
        slug: "caste-certificate-pending",
        category: "document",
        metaTitle: "Caste Certificate Pending Hai? Status Check & Fix (2026) | JharForm",
        metaDescription: "Caste certificate pending hai aur scholarship/college mein problem aa rahi hai? Status, office follow-up, aur grievance steps.",
        h1: "Caste Certificate Pending — Jaldi Kaise Clear Kare",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Medium",
        description: "Caste Certificate status pending ya under verification dikh raha hai — portal, office, aur grievance steps se problem ka clear fix mil sakta hai.",
        steps: [
        { title: "Application reference number note karo", detail: "Caste Certificate application ke acknowledgement/SMS/email mein jo reference number hai use save karo." },
        { title: "JharSewa / e-District portal pe status check karo", detail: "Official portal open karo aur status dekho: Pending, Under Verification, Approved, ya Rejected." },
        { title: "Required documents cross-check karo", detail: "Aadhaar, photo, address proof, income/caste/birth proof jaise documents missing to nahi hain, verify karo." },
        { title: "Office ya kiosk se follow up karo", detail: "CSC, e-District, Tehsil, ya concerned office mein jaakar written inquiry do aur status update maango." },
        { title: "Grievance raise karo", detail: "30 working days se zyada delay ho to state grievance portal ya PGPortal pe complaint file karo." },
        { title: "Helpline / Nodal officer contact karo", detail: "JharSewa / e-District helpline ya nodal officer ko application number ke saath call/email karo." }
      ],
        screenshots: [],
        sources: [
        { title: "JharSewa / e-District", url: "https://jharsewa.jharkhand.gov.in", icon: "🏛️" },
        { title: "PGPortal", url: "https://pgportal.gov.in", icon: "🏛️" }
      ],
        proTips: [
        "Application number aur SMS screenshot hamesha save rakho",
        "Office visit pe original aur photocopy dono le jao",
        "Portal refresh aur status check daily nahi, 2-3 din mein karo"
      ],
        faqs: [
        { q: "Caste Certificate pending kitne din mein clear hota hai?", a: "Usually 7-15 working days, but office load ke hisaab se 30 din tak lag sakte hain." },
        { q: "Pending se reject ho gaya to kya karu?", a: "Reason dekho, missing document ya mismatch correct karke fresh apply karo." },
        { q: "Offline follow up zaroori hai kya?", a: "Agar portal pe delay ho raha hai to office ya CSC follow up helpful hota hai." },
        { q: "Status ka screenshot save karna chahiye?", a: "Haan, application ID aur status screenshot future complaint ke liye kaam aata hai." }
      ],
        related: [
        { title: "Scholarship Rejected", slug: "scholarship-rejected-income", category: "document" },
        { title: "Income Certificate Pending", slug: "income-certificate-pending", category: "document" }
      ],
        keywords: [
        "caste certificate pending",
        "jati praman patra",
        "caste certificate status",
        "caste certificate kaise bane"
      ],
        variants: [
        "caste certificate apply status",
        "jati certificate pending",
        "caste praman atka hua hai",
        "caste certificate delay"
      ]
      },
      {
        slug: "ews-certificate-apply",
        category: "document",
        metaTitle: "EWS Certificate Kaise Banaye? Online Apply (2026) | JharForm",
        metaDescription: "EWS certificate apply karna hai? Income proof, affidavit, aur online portal se apply karne ka step-by-step guide.",
        h1: "EWS Certificate Kaise Banaye — Online Apply Guide",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Medium",
        description: "EWS Certificate apply karna hai — official portal, documents, aur verification ka complete Hinglish guide.",
        steps: [
        { title: "State e-District / JharSewa pe online application karo", detail: "Official portal open karke EWS Certificate apply form fill karo." },
        { title: "Eligibility aur category select karo", detail: "Category, income group, family members, area, ya purpose sahi select karo." },
        { title: "Documents upload karo", detail: "Photo, Aadhaar, address proof, income proof, caste proof, age proof jo required ho upload karo." },
        { title: "Verification complete karo", detail: "OTP, biometric, field verification, ya office verification jo bhi applicable ho complete karo." },
        { title: "Application ID save karo", detail: "Receipt / application number note karo. Yehi later status check mein kaam aayega." },
        { title: "Status follow up karo", detail: "Portal, office, or helpline pe status check karke approval/download karo." }
      ],
        screenshots: [],
        sources: [
        { title: "State e-District / JharSewa", url: "https://jharsewa.jharkhand.gov.in", icon: "🏛️" },
        { title: "e-District Helpdesk", url: "https://serviceonline.gov.in", icon: "🏛️" }
      ],
        proTips: [
        "Portal login ke baad form ko save draft mein rakh sakte ho",
        "Aadhaar-linked mobile hamesha active rakho",
        "Proof docs ka size aur format pehle check karo"
      ],
        faqs: [
        { q: "EWS Certificate ke liye kaunse documents chahiye?", a: "Aadhaar, photo, address proof, aur issue-specific supporting documents usually chahiye hote hain." },
        { q: "Online apply karne ke baad kya karna hota hai?", a: "Application ID save karke status track aur office follow up karna hota hai." },
        { q: "Application reject ho gaya to reapply kar sakte hain?", a: "Haan, reason correct karke reapply kar sakte hain." },
        { q: "App ya portal ka official copy use karna safe hai?", a: "Haan, hamesha official portal ya DigiLocker copy use karo." }
      ],
        related: [
        { title: "Income Certificate Pending", slug: "income-certificate-pending", category: "document" },
        { title: "Aadhaar Mismatch", slug: "aadhaar-mismatch", category: "document" }
      ],
        keywords: [
        "ews certificate apply",
        "economic weaker section certificate",
        "ews kaise banaye",
        "ews certificate online"
      ],
        variants: [
        "ews praman patra",
        "ews certificate online apply",
        "economically weaker section certificate",
        "ews certificate banaye"
      ]
      },
      {
        slug: "income-certificate-expired",
        category: "document",
        metaTitle: "Income Certificate Expired? Renew / Reissue Guide (2026) | JharForm",
        metaDescription: "Income certificate valid nahi raha? Scholarship, school, ya job ke liye naya income certificate kaise banaye.",
        h1: "Income Certificate Expired — Naya Certificate Kaise Banaye",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Income Certificate expire, pending, ya update chahiye — official portal pe renewal / reissue ka simple process.",
        steps: [
        { title: "JharSewa / e-District renewal page kholo", detail: "Official portal pe renewal / reissue / update service select karo." },
        { title: "Current details verify karo", detail: "Existing Income Certificate number, DOB, address, aur mobile verify karo." },
        { title: "Required documents upload karo", detail: "Photo, ID proof, address proof, medical certificate ya supporting docs jo required hain, upload karo." },
        { title: "Fee pay karo", detail: "Renewal/reissue fee online pay karo aur receipt save karo." },
        { title: "Slot / appointment book karo", detail: "Jahan biometric, verification, ya office visit required ho wahan appointment slot book karo." },
        { title: "Receipt aur status track karo", detail: "Receipt, ARN/SRN number save karke status track karo." }
      ],
        screenshots: [],
        sources: [
        { title: "JharSewa / e-District", url: "https://jharsewa.jharkhand.gov.in", icon: "🏛️" },
        { title: "Block Office", url: "https://pgportal.gov.in", icon: "🏛️" }
      ],
        proTips: [
        "Expiry se pehle kaam start karo taaki late fee na lage",
        "Medical/biometric docs pehle se ready rakho",
        "Receipt aur ARN number note karna mat bhoolo"
      ],
        faqs: [
        { q: "Income Certificate renewal overdue ho gaya to kya hoga?", a: "Late fee, extra verification, ya fresh application lag sakti hai." },
        { q: "Renewal ke liye office jana zaroori hai?", a: "Kuch services mein online hi ho jata hai, kuch mein biometric/visit required hota hai." },
        { q: "Old number aur details change ho sakte hain?", a: "Haan, lekin proof documents ke saath hi update hota hai." },
        { q: "Renewed copy kab milti hai?", a: "Status approved hone ke baad portal download ya postal delivery ke through milti hai." }
      ],
        related: [
        { title: "Income Certificate Pending", slug: "income-certificate-pending", category: "document" },
        { title: "EWS Certificate Apply", slug: "ews-certificate-apply", category: "document" }
      ],
        keywords: [
        "income certificate expired",
        "income certificate renewal",
        "aay praman patra new",
        "income certificate fresh"
      ],
        variants: [
        "income certificate naya chahiye",
        "income certificate valid nahi",
        "aay certificate expired",
        "income proof updated"
      ]
      },
      {
        slug: "birth-certificate-not-found",
        category: "document",
        metaTitle: "Birth Certificate Not Found? Duplicate Download Guide (2026) | JharForm",
        metaDescription: "Birth certificate nahi mil raha? DigiLocker, municipal record, aur duplicate birth certificate nikalne ka guide.",
        h1: "Birth Certificate Not Found — Duplicate Kaise Nikale",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Birth Certificate lost, not found, ya download nahi ho raha — DigiLocker aur official portal se duplicate / PDF nikalne ka easy guide.",
        steps: [
        { title: "CRS / Municipal Portal ya DigiLocker kholo", detail: "Official portal ya DigiLocker par login karke Birth Certificate search/download section kholo." },
        { title: "Details sahi daalo", detail: "Name, DOB, mobile, registration number, ya EPIC/PAN number exactly match hona chahiye." },
        { title: "OTP verify karo", detail: "Registered mobile pe aaya OTP enter karke access unlock karo." },
        { title: "Duplicate / e-copy download karo", detail: "PDF download karo ya print nikaalo. Agar record na mile to office record room me search request do." },
        { title: "Mismatch ho to correction request do", detail: "Old record se mismatch aa raha hai to correction form file karo." },
        { title: "Final print aur laminate rakho", detail: "Download ke baad print nikaal kar safe file mein rakho, aur needed ho to laminate karwa lo." }
      ],
        screenshots: [],
        sources: [
        { title: "CRS / Municipal Portal", url: "https://crsorgi.gov.in", icon: "🏛️" },
        { title: "DigiLocker", url: "https://www.digilocker.gov.in", icon: "🏛️" }
      ],
        proTips: [
        "DigiLocker account pehle se active rakho",
        "Password aur OTP access safe rakho",
        "Print nikaal kar laminated copy ka backup rakho"
      ],
        faqs: [
        { q: "Birth Certificate DigiLocker mein mil jayega?", a: "Agar authority ne DigiLocker support diya hai to easily mil sakta hai." },
        { q: "Download nahi ho raha to kya karein?", a: "Portal login, OTP, ya record mismatch check karo. Nahi to office se certified copy lo." },
        { q: "Print nikaalna enough hai?", a: "Bahut cases mein print enough hota hai, but original verification ke liye soft copy bhi rakho." },
        { q: "Record nahi mila to kya karein?", a: "Aapko manual verification ya correction request file karni pad sakti hai." }
      ],
        related: [
        { title: "Birth Certificate Correction", slug: "birth-certificate-correction", category: "document" },
        { title: "Death Certificate Apply", slug: "death-certificate-apply", category: "document" }
      ],
        keywords: [
        "birth certificate not found",
        "janam praman patra",
        "birth certificate duplicate",
        "birth certificate search"
      ],
        variants: [
        "birth certificate missing",
        "janam certificate nahi mil raha",
        "birth certificate ka copy",
        "birth certificate locate"
      ]
      },
      {
        slug: "birth-certificate-correction",
        category: "document",
        metaTitle: "Birth Certificate Correction Online? Name/DOB Fix Guide (2026) | JharForm",
        metaDescription: "Birth certificate mein naam, date of birth, ya parents name galat hai? Correction ka step-by-step guide.",
        h1: "Birth Certificate Correction Online Kaise Kare",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Medium",
        description: "Birth Certificate mein naam, DOB, address, ya other detail galat hai — official portal se correction ka complete step-by-step guide.",
        steps: [
        { title: "CRS / Municipal Office login karo", detail: "Official portal par login karke Birth Certificate correction/update section kholo." },
        { title: "Galat field select karo", detail: "Naam, DOB, address, photo, mobile, ya family detail jo galat hai usse select karo." },
        { title: "Proof document upload karo", detail: "Valid supporting documents scan karke upload karo. Details document se exact match honi chahiye." },
        { title: "Fee ya OTP verify karo", detail: "Jahan fee lage wahan pay karo. Jahan OTP lage wahan registered mobile pe code verify karo." },
        { title: "Application number note karo", detail: "Correction request ka acknowledgement number save karo taaki status later track ho sake." },
        { title: "Status track karke download karo", detail: "Approved hone ke baad updated certificate/card download ya print karo." }
      ],
        screenshots: [],
        sources: [
        { title: "CRS / Municipal Office", url: "https://crsorgi.gov.in", icon: "🏛️" },
        { title: "Municipal Ward Office", url: "https://crsorgi.gov.in", icon: "🏛️" }
      ],
        proTips: [
        "Details exact proof document jaise hi fill karo",
        "Photo aur scan clear hona chahiye warna reject ho sakta hai",
        "Submit se pehle spelling double-check karo"
      ],
        faqs: [
        { q: "Birth Certificate correction online ho jayegi?", a: "Haan, agar portal correction allow karta hai aur valid proof docs available hain." },
        { q: "Kitni fee lagti hai?", a: "Fee portal aur state ke hisaab se different hoti hai; confirmation page par exact amount dikhega." },
        { q: "Proof document kaunsa best hai?", a: "Government-issued document jisme correct details already present ho, woh best hota hai." },
        { q: "Update ke baad old copy invalid ho jaati hai?", a: "Usually updated version use karna chahiye; old copy sirf reference ke liye rakho." }
      ],
        related: [
        { title: "Birth Certificate Not Found", slug: "birth-certificate-not-found", category: "document" },
        { title: "Aadhaar Mismatch", slug: "aadhaar-mismatch", category: "document" }
      ],
        keywords: [
        "birth certificate correction",
        "janam praman patra correction",
        "birth certificate name change",
        "birth certificate dob fix"
      ],
        variants: [
        "birth certificate mein naam galat",
        "birth certificate dob correction",
        "birth certificate update",
        "janam praman correction"
      ]
      },
      {
        slug: "birth-certificate-duplicate",
        category: "document",
        metaTitle: "Birth Certificate Duplicate Download Guide (2026) | JharForm",
        metaDescription: "Birth certificate duplicate चाहिए? Online record search, DigiLocker, aur municipal office se duplicate kaise nikale.",
        h1: "Birth Certificate Duplicate Kaise Nikale",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Birth Certificate lost, not found, ya download nahi ho raha — DigiLocker aur official portal se duplicate / PDF nikalne ka easy guide.",
        steps: [
        { title: "CRS / DigiLocker ya DigiLocker kholo", detail: "Official portal ya DigiLocker par login karke Birth Certificate search/download section kholo." },
        { title: "Details sahi daalo", detail: "Name, DOB, mobile, registration number, ya EPIC/PAN number exactly match hona chahiye." },
        { title: "OTP verify karo", detail: "Registered mobile pe aaya OTP enter karke access unlock karo." },
        { title: "Duplicate / e-copy download karo", detail: "PDF download karo ya print nikaalo. Agar record na mile to office record room me search request do." },
        { title: "Mismatch ho to correction request do", detail: "Old record se mismatch aa raha hai to correction form file karo." },
        { title: "Final print aur laminate rakho", detail: "Download ke baad print nikaal kar safe file mein rakho, aur needed ho to laminate karwa lo." }
      ],
        screenshots: [],
        sources: [
        { title: "CRS / DigiLocker", url: "https://crsorgi.gov.in", icon: "🏛️" },
        { title: "DigiLocker", url: "https://www.digilocker.gov.in", icon: "🏛️" }
      ],
        proTips: [
        "DigiLocker account pehle se active rakho",
        "Password aur OTP access safe rakho",
        "Print nikaal kar laminated copy ka backup rakho"
      ],
        faqs: [
        { q: "Birth Certificate DigiLocker mein mil jayega?", a: "Agar authority ne DigiLocker support diya hai to easily mil sakta hai." },
        { q: "Download nahi ho raha to kya karein?", a: "Portal login, OTP, ya record mismatch check karo. Nahi to office se certified copy lo." },
        { q: "Print nikaalna enough hai?", a: "Bahut cases mein print enough hota hai, but original verification ke liye soft copy bhi rakho." },
        { q: "Record nahi mila to kya karein?", a: "Aapko manual verification ya correction request file karni pad sakti hai." }
      ],
        related: [
        { title: "Birth Certificate Not Found", slug: "birth-certificate-not-found", category: "document" },
        { title: "Birth Certificate Correction", slug: "birth-certificate-correction", category: "document" }
      ],
        keywords: [
        "birth certificate duplicate",
        "janam praman patra duplicate",
        "birth certificate download",
        "birth certificate lost"
      ],
        variants: [
        "birth certificate ka duplicate",
        "birth certificate lost ho gaya",
        "janam certificate duplicate",
        "birth certificate print"
      ]
      },
      {
        slug: "death-certificate-apply",
        category: "document",
        metaTitle: "Death Certificate Apply Kaise Kare? Online Guide (2026) | JharForm",
        metaDescription: "Death certificate apply karna hai? Hospital report, family details, aur municipal portal se apply karne ka guide.",
        h1: "Death Certificate Kaise Banaye — Online Apply Guide",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Medium",
        description: "Death Certificate apply karna hai — official portal, documents, aur verification ka complete Hinglish guide.",
        steps: [
        { title: "CRS / Municipal Portal pe online application karo", detail: "Official portal open karke Death Certificate apply form fill karo." },
        { title: "Eligibility aur category select karo", detail: "Category, income group, family members, area, ya purpose sahi select karo." },
        { title: "Documents upload karo", detail: "Photo, Aadhaar, address proof, income proof, caste proof, age proof jo required ho upload karo." },
        { title: "Verification complete karo", detail: "OTP, biometric, field verification, ya office verification jo bhi applicable ho complete karo." },
        { title: "Application ID save karo", detail: "Receipt / application number note karo. Yehi later status check mein kaam aayega." },
        { title: "Status follow up karo", detail: "Portal, office, or helpline pe status check karke approval/download karo." }
      ],
        screenshots: [],
        sources: [
        { title: "CRS / Municipal Portal", url: "https://crsorgi.gov.in", icon: "🏛️" },
        { title: "Municipal Office", url: "https://crsorgi.gov.in", icon: "🏛️" }
      ],
        proTips: [
        "Portal login ke baad form ko save draft mein rakh sakte ho",
        "Aadhaar-linked mobile hamesha active rakho",
        "Proof docs ka size aur format pehle check karo"
      ],
        faqs: [
        { q: "Death Certificate ke liye kaunse documents chahiye?", a: "Aadhaar, photo, address proof, aur issue-specific supporting documents usually chahiye hote hain." },
        { q: "Online apply karne ke baad kya karna hota hai?", a: "Application ID save karke status track aur office follow up karna hota hai." },
        { q: "Application reject ho gaya to reapply kar sakte hain?", a: "Haan, reason correct karke reapply kar sakte hain." },
        { q: "App ya portal ka official copy use karna safe hai?", a: "Haan, hamesha official portal ya DigiLocker copy use karo." }
      ],
        related: [
        { title: "Birth Certificate Not Found", slug: "birth-certificate-not-found", category: "document" },
        { title: "Character Certificate", slug: "character-certificate", category: "document" }
      ],
        keywords: [
        "death certificate apply",
        "mrityu praman patra",
        "death certificate online",
        "death certificate kaise banaye"
      ],
        variants: [
        "death certificate kaise banaye",
        "mrityu certificate online",
        "death certificate registration",
        "death certificate form"
      ]
      },
      {
        slug: "marriage-certificate-apply",
        category: "document",
        metaTitle: "Marriage Certificate Apply Online Kaise Kare (2026) | JharForm",
        metaDescription: "Marriage certificate kaise banaye? Witness, photo, proof aur online marriage registration guide.",
        h1: "Marriage Certificate Kaise Banwaye — Online Apply Guide",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Medium",
        description: "Marriage Certificate apply karna hai — official portal, documents, aur verification ka complete Hinglish guide.",
        steps: [
        { title: "State Marriage Registration Portal pe online application karo", detail: "Official portal open karke Marriage Certificate apply form fill karo." },
        { title: "Eligibility aur category select karo", detail: "Category, income group, family members, area, ya purpose sahi select karo." },
        { title: "Documents upload karo", detail: "Photo, Aadhaar, address proof, income proof, caste proof, age proof jo required ho upload karo." },
        { title: "Verification complete karo", detail: "OTP, biometric, field verification, ya office verification jo bhi applicable ho complete karo." },
        { title: "Application ID save karo", detail: "Receipt / application number note karo. Yehi later status check mein kaam aayega." },
        { title: "Status follow up karo", detail: "Portal, office, or helpline pe status check karke approval/download karo." }
      ],
        screenshots: [],
        sources: [
        { title: "State Marriage Registration Portal", url: "https://serviceonline.gov.in", icon: "🍚" },
        { title: "Registrar Office", url: "https://serviceonline.gov.in", icon: "🏛️" }
      ],
        proTips: [
        "Portal login ke baad form ko save draft mein rakh sakte ho",
        "Aadhaar-linked mobile hamesha active rakho",
        "Proof docs ka size aur format pehle check karo"
      ],
        faqs: [
        { q: "Marriage Certificate ke liye kaunse documents chahiye?", a: "Aadhaar, photo, address proof, aur issue-specific supporting documents usually chahiye hote hain." },
        { q: "Online apply karne ke baad kya karna hota hai?", a: "Application ID save karke status track aur office follow up karna hota hai." },
        { q: "Application reject ho gaya to reapply kar sakte hain?", a: "Haan, reason correct karke reapply kar sakte hain." },
        { q: "App ya portal ka official copy use karna safe hai?", a: "Haan, hamesha official portal ya DigiLocker copy use karo." }
      ],
        related: [
        { title: "Aadhaar Mismatch", slug: "aadhaar-mismatch", category: "document" },
        { title: "Passport Name Correction", slug: "passport-name-correction", category: "document" }
      ],
        keywords: [
        "marriage certificate apply",
        "vivah praman patra",
        "marriage registration online",
        "marriage certificate kaise bane"
      ],
        variants: [
        "marriage certificate online",
        "vivah certificate apply",
        "shaadi certificate",
        "marriage registration form"
      ]
      },
      {
        slug: "voter-id-name-correction",
        category: "document",
        metaTitle: "Voter ID Name Correction Online? EPIC Fix Guide (2026) | JharForm",
        metaDescription: "Voter ID mein naam galat hai? Voters portal se name correction, address change, aur photo update ka guide.",
        h1: "Voter ID Name Correction Online Kaise Kare",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Voter ID mein naam, DOB, address, ya other detail galat hai — official portal se correction ka complete step-by-step guide.",
        steps: [
        { title: "Voters Portal login karo", detail: "Official portal par login karke Voter ID correction/update section kholo." },
        { title: "Galat field select karo", detail: "Naam, DOB, address, photo, mobile, ya family detail jo galat hai usse select karo." },
        { title: "Proof document upload karo", detail: "Valid supporting documents scan karke upload karo. Details document se exact match honi chahiye." },
        { title: "Fee ya OTP verify karo", detail: "Jahan fee lage wahan pay karo. Jahan OTP lage wahan registered mobile pe code verify karo." },
        { title: "Application number note karo", detail: "Correction request ka acknowledgement number save karo taaki status later track ho sake." },
        { title: "Status track karke download karo", detail: "Approved hone ke baad updated certificate/card download ya print karo." }
      ],
        screenshots: [],
        sources: [
        { title: "Voters Portal", url: "https://voters.eci.gov.in", icon: "🗳️" },
        { title: "Election Commission Helpdesk", url: "https://voters.eci.gov.in", icon: "🗳️" }
      ],
        proTips: [
        "Details exact proof document jaise hi fill karo",
        "Photo aur scan clear hona chahiye warna reject ho sakta hai",
        "Submit se pehle spelling double-check karo"
      ],
        faqs: [
        { q: "Voter ID correction online ho jayegi?", a: "Haan, agar portal correction allow karta hai aur valid proof docs available hain." },
        { q: "Kitni fee lagti hai?", a: "Fee portal aur state ke hisaab se different hoti hai; confirmation page par exact amount dikhega." },
        { q: "Proof document kaunsa best hai?", a: "Government-issued document jisme correct details already present ho, woh best hota hai." },
        { q: "Update ke baad old copy invalid ho jaati hai?", a: "Usually updated version use karna chahiye; old copy sirf reference ke liye rakho." }
      ],
        related: [
        { title: "Voter ID Not Found", slug: "voter-id-not-found", category: "document" },
        { title: "Voter EPIC Download", slug: "voter-epic-download", category: "document" }
      ],
        keywords: [
        "voter id name correction",
        "epic correction online",
        "voter card naam galat",
        "voter id update"
      ],
        variants: [
        "voter card correction",
        "epic name change",
        "voter id spelling fix",
        "voter id update online"
      ]
      },
      {
        slug: "voter-id-not-found",
        category: "document",
        metaTitle: "Voter ID Not Found? EPIC Search & Download Guide (2026) | JharForm",
        metaDescription: "Voter ID nahi mil raha? EPIC search, name by search, aur voter card download ka guide.",
        h1: "Voter ID Not Found — EPIC Kaise Search Kare",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Voter ID lost, not found, ya download nahi ho raha — DigiLocker aur official portal se duplicate / PDF nikalne ka easy guide.",
        steps: [
        { title: "Voters Portal ya DigiLocker kholo", detail: "Official portal ya DigiLocker par login karke Voter ID search/download section kholo." },
        { title: "Details sahi daalo", detail: "Name, DOB, mobile, registration number, ya EPIC/PAN number exactly match hona chahiye." },
        { title: "OTP verify karo", detail: "Registered mobile pe aaya OTP enter karke access unlock karo." },
        { title: "Duplicate / e-copy download karo", detail: "PDF download karo ya print nikaalo. Agar record na mile to office record room me search request do." },
        { title: "Mismatch ho to correction request do", detail: "Old record se mismatch aa raha hai to correction form file karo." },
        { title: "Final print aur laminate rakho", detail: "Download ke baad print nikaal kar safe file mein rakho, aur needed ho to laminate karwa lo." }
      ],
        screenshots: [],
        sources: [
        { title: "Voters Portal", url: "https://voters.eci.gov.in", icon: "🗳️" },
        { title: "ECI Support", url: "https://voters.eci.gov.in", icon: "🗳️" }
      ],
        proTips: [
        "DigiLocker account pehle se active rakho",
        "Password aur OTP access safe rakho",
        "Print nikaal kar laminated copy ka backup rakho"
      ],
        faqs: [
        { q: "Voter ID DigiLocker mein mil jayega?", a: "Agar authority ne DigiLocker support diya hai to easily mil sakta hai." },
        { q: "Download nahi ho raha to kya karein?", a: "Portal login, OTP, ya record mismatch check karo. Nahi to office se certified copy lo." },
        { q: "Print nikaalna enough hai?", a: "Bahut cases mein print enough hota hai, but original verification ke liye soft copy bhi rakho." },
        { q: "Record nahi mila to kya karein?", a: "Aapko manual verification ya correction request file karni pad sakti hai." }
      ],
        related: [
        { title: "Voter EPIC Download", slug: "voter-epic-download", category: "document" },
        { title: "Voter ID Name Correction", slug: "voter-id-name-correction", category: "document" }
      ],
        keywords: [
        "voter id not found",
        "epic number search",
        "voter card search",
        "voter card missing"
      ],
        variants: [
        "voter id nahi mil raha",
        "epic card search",
        "voter card kaise nikale",
        "voter id find"
      ]
      },
      {
        slug: "voter-epic-download",
        category: "document",
        metaTitle: "Voter EPIC Download Online (2026) | JharForm",
        metaDescription: "Voter EPIC card download karna hai? Voters portal se PDF aur print ka step-by-step guide.",
        h1: "Voter EPIC Download Kaise Kare",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Voter EPIC lost, not found, ya download nahi ho raha — DigiLocker aur official portal se duplicate / PDF nikalne ka easy guide.",
        steps: [
        { title: "Voters Portal ya DigiLocker kholo", detail: "Official portal ya DigiLocker par login karke Voter EPIC search/download section kholo." },
        { title: "Details sahi daalo", detail: "Name, DOB, mobile, registration number, ya EPIC/PAN number exactly match hona chahiye." },
        { title: "OTP verify karo", detail: "Registered mobile pe aaya OTP enter karke access unlock karo." },
        { title: "Duplicate / e-copy download karo", detail: "PDF download karo ya print nikaalo. Agar record na mile to office record room me search request do." },
        { title: "Mismatch ho to correction request do", detail: "Old record se mismatch aa raha hai to correction form file karo." },
        { title: "Final print aur laminate rakho", detail: "Download ke baad print nikaal kar safe file mein rakho, aur needed ho to laminate karwa lo." }
      ],
        screenshots: [],
        sources: [
        { title: "Voters Portal", url: "https://voters.eci.gov.in", icon: "🗳️" },
        { title: "Election Commission", url: "https://voters.eci.gov.in", icon: "🗳️" }
      ],
        proTips: [
        "DigiLocker account pehle se active rakho",
        "Password aur OTP access safe rakho",
        "Print nikaal kar laminated copy ka backup rakho"
      ],
        faqs: [
        { q: "Voter EPIC DigiLocker mein mil jayega?", a: "Agar authority ne DigiLocker support diya hai to easily mil sakta hai." },
        { q: "Download nahi ho raha to kya karein?", a: "Portal login, OTP, ya record mismatch check karo. Nahi to office se certified copy lo." },
        { q: "Print nikaalna enough hai?", a: "Bahut cases mein print enough hota hai, but original verification ke liye soft copy bhi rakho." },
        { q: "Record nahi mila to kya karein?", a: "Aapko manual verification ya correction request file karni pad sakti hai." }
      ],
        related: [
        { title: "Voter ID Not Found", slug: "voter-id-not-found", category: "document" },
        { title: "Voter ID Name Correction", slug: "voter-id-name-correction", category: "document" }
      ],
        keywords: [
        "voter epic download",
        "voter card pdf",
        "epic download online",
        "voter id pdf"
      ],
        variants: [
        "voter id download",
        "epic card pdf",
        "voter card print",
        "voter e card"
      ]
      },
      {
        slug: "passport-police-verification-pending",
        category: "document",
        metaTitle: "Passport Police Verification Pending? Fix Guide (2026) | JharForm",
        metaDescription: "Passport police verification pending hai? Status, police station follow-up, aur fast processing ka guide.",
        h1: "Passport Police Verification Pending — Kya Karein",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Medium",
        description: "Passport status pending ya under verification dikh raha hai — portal, office, aur grievance steps se problem ka clear fix mil sakta hai.",
        steps: [
        { title: "Application reference number note karo", detail: "Passport application ke acknowledgement/SMS/email mein jo reference number hai use save karo." },
        { title: "Passport Seva portal pe status check karo", detail: "Official portal open karo aur status dekho: Pending, Under Verification, Approved, ya Rejected." },
        { title: "Required documents cross-check karo", detail: "Aadhaar, photo, address proof, income/caste/birth proof jaise documents missing to nahi hain, verify karo." },
        { title: "Office ya kiosk se follow up karo", detail: "CSC, e-District, Tehsil, ya concerned office mein jaakar written inquiry do aur status update maango." },
        { title: "Grievance raise karo", detail: "30 working days se zyada delay ho to state grievance portal ya PGPortal pe complaint file karo." },
        { title: "Helpline / Nodal officer contact karo", detail: "Passport Seva helpline ya nodal officer ko application number ke saath call/email karo." }
      ],
        screenshots: [],
        sources: [
        { title: "Passport Seva", url: "https://passportindia.gov.in", icon: "✈️" },
        { title: "Passport Seva Helpdesk", url: "https://passportindia.gov.in", icon: "✈️" }
      ],
        proTips: [
        "Application number aur SMS screenshot hamesha save rakho",
        "Office visit pe original aur photocopy dono le jao",
        "Portal refresh aur status check daily nahi, 2-3 din mein karo"
      ],
        faqs: [
        { q: "Passport pending kitne din mein clear hota hai?", a: "Usually 7-15 working days, but office load ke hisaab se 30 din tak lag sakte hain." },
        { q: "Pending se reject ho gaya to kya karu?", a: "Reason dekho, missing document ya mismatch correct karke fresh apply karo." },
        { q: "Offline follow up zaroori hai kya?", a: "Agar portal pe delay ho raha hai to office ya CSC follow up helpful hota hai." },
        { q: "Status ka screenshot save karna chahiye?", a: "Haan, application ID aur status screenshot future complaint ke liye kaam aata hai." }
      ],
        related: [
        { title: "Passport Name Correction", slug: "passport-name-correction", category: "document" },
        { title: "Passport Address Change", slug: "passport-address-change", category: "document" }
      ],
        keywords: [
        "passport police verification pending",
        "passport status pending",
        "passport verification delay",
        "passport police report"
      ],
        variants: [
        "passport verification atka",
        "passport police pending",
        "passport file status",
        "passport delay"
      ]
      },
      {
        slug: "passport-name-correction",
        category: "document",
        metaTitle: "Passport Name Correction Online? Fix Guide (2026) | JharForm",
        metaDescription: "Passport mein naam ya surname galat hai? Passport Seva se correction / reissue ka guide.",
        h1: "Passport Mein Name Galat Hai? Correction Kaise Kare",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Medium",
        description: "Passport mein naam, DOB, address, ya other detail galat hai — official portal se correction ka complete step-by-step guide.",
        steps: [
        { title: "Passport Seva login karo", detail: "Official portal par login karke Passport correction/update section kholo." },
        { title: "Galat field select karo", detail: "Naam, DOB, address, photo, mobile, ya family detail jo galat hai usse select karo." },
        { title: "Proof document upload karo", detail: "Valid supporting documents scan karke upload karo. Details document se exact match honi chahiye." },
        { title: "Fee ya OTP verify karo", detail: "Jahan fee lage wahan pay karo. Jahan OTP lage wahan registered mobile pe code verify karo." },
        { title: "Application number note karo", detail: "Correction request ka acknowledgement number save karo taaki status later track ho sake." },
        { title: "Status track karke download karo", detail: "Approved hone ke baad updated certificate/card download ya print karo." }
      ],
        screenshots: [],
        sources: [
        { title: "Passport Seva", url: "https://passportindia.gov.in", icon: "✈️" },
        { title: "Passport Seva Kendra", url: "https://passportindia.gov.in", icon: "✈️" }
      ],
        proTips: [
        "Details exact proof document jaise hi fill karo",
        "Photo aur scan clear hona chahiye warna reject ho sakta hai",
        "Submit se pehle spelling double-check karo"
      ],
        faqs: [
        { q: "Passport correction online ho jayegi?", a: "Haan, agar portal correction allow karta hai aur valid proof docs available hain." },
        { q: "Kitni fee lagti hai?", a: "Fee portal aur state ke hisaab se different hoti hai; confirmation page par exact amount dikhega." },
        { q: "Proof document kaunsa best hai?", a: "Government-issued document jisme correct details already present ho, woh best hota hai." },
        { q: "Update ke baad old copy invalid ho jaati hai?", a: "Usually updated version use karna chahiye; old copy sirf reference ke liye rakho." }
      ],
        related: [
        { title: "Passport Address Change", slug: "passport-address-change", category: "document" },
        { title: "Aadhaar Mismatch", slug: "aadhaar-mismatch", category: "document" }
      ],
        keywords: [
        "passport name correction",
        "passport surname change",
        "passport reissue",
        "passport correction online"
      ],
        variants: [
        "passport mein naam galat",
        "passport spelling correction",
        "passport update",
        "passport reissue name"
      ]
      },
      {
        slug: "passport-address-change",
        category: "document",
        metaTitle: "Passport Address Change Online Guide (2026) | JharForm",
        metaDescription: "Passport address change karna hai? Reissue, address proof, aur Passport Seva process ka guide.",
        h1: "Passport Address Change Kaise Kare",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Medium",
        description: "Passport mein naam, DOB, address, ya other detail galat hai — official portal se correction ka complete step-by-step guide.",
        steps: [
        { title: "Passport Seva login karo", detail: "Official portal par login karke Passport correction/update section kholo." },
        { title: "Galat field select karo", detail: "Naam, DOB, address, photo, mobile, ya family detail jo galat hai usse select karo." },
        { title: "Proof document upload karo", detail: "Valid supporting documents scan karke upload karo. Details document se exact match honi chahiye." },
        { title: "Fee ya OTP verify karo", detail: "Jahan fee lage wahan pay karo. Jahan OTP lage wahan registered mobile pe code verify karo." },
        { title: "Application number note karo", detail: "Correction request ka acknowledgement number save karo taaki status later track ho sake." },
        { title: "Status track karke download karo", detail: "Approved hone ke baad updated certificate/card download ya print karo." }
      ],
        screenshots: [],
        sources: [
        { title: "Passport Seva", url: "https://passportindia.gov.in", icon: "✈️" },
        { title: "Passport Seva Kendra", url: "https://passportindia.gov.in", icon: "✈️" }
      ],
        proTips: [
        "Details exact proof document jaise hi fill karo",
        "Photo aur scan clear hona chahiye warna reject ho sakta hai",
        "Submit se pehle spelling double-check karo"
      ],
        faqs: [
        { q: "Passport correction online ho jayegi?", a: "Haan, agar portal correction allow karta hai aur valid proof docs available hain." },
        { q: "Kitni fee lagti hai?", a: "Fee portal aur state ke hisaab se different hoti hai; confirmation page par exact amount dikhega." },
        { q: "Proof document kaunsa best hai?", a: "Government-issued document jisme correct details already present ho, woh best hota hai." },
        { q: "Update ke baad old copy invalid ho jaati hai?", a: "Usually updated version use karna chahiye; old copy sirf reference ke liye rakho." }
      ],
        related: [
        { title: "Passport Name Correction", slug: "passport-name-correction", category: "document" },
        { title: "Aadhaar Mismatch", slug: "aadhaar-mismatch", category: "document" }
      ],
        keywords: [
        "passport address change",
        "passport address update",
        "passport reissue address",
        "passport current address"
      ],
        variants: [
        "passport address correction",
        "passport mein address change",
        "passport reissue address update",
        "passport address fix"
      ]
      },
      {
        slug: "passport-police-reject",
        category: "document",
        metaTitle: "Passport Police Reject? Reverification & Reapply Guide (2026) | JharForm",
        metaDescription: "Passport police verification reject ho gaya? Reason samjho, documents correct karo, aur re-verification ka guide.",
        h1: "Passport Police Reject Ho Gaya — Reverification Kaise Kare",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Medium",
        description: "Passport status pending ya under verification dikh raha hai — portal, office, aur grievance steps se problem ka clear fix mil sakta hai.",
        steps: [
        { title: "Application reference number note karo", detail: "Passport application ke acknowledgement/SMS/email mein jo reference number hai use save karo." },
        { title: "Passport Seva portal pe status check karo", detail: "Official portal open karo aur status dekho: Pending, Under Verification, Approved, ya Rejected." },
        { title: "Required documents cross-check karo", detail: "Aadhaar, photo, address proof, income/caste/birth proof jaise documents missing to nahi hain, verify karo." },
        { title: "Office ya kiosk se follow up karo", detail: "CSC, e-District, Tehsil, ya concerned office mein jaakar written inquiry do aur status update maango." },
        { title: "Grievance raise karo", detail: "30 working days se zyada delay ho to state grievance portal ya PGPortal pe complaint file karo." },
        { title: "Helpline / Nodal officer contact karo", detail: "Passport Seva helpline ya nodal officer ko application number ke saath call/email karo." }
      ],
        screenshots: [],
        sources: [
        { title: "Passport Seva", url: "https://passportindia.gov.in", icon: "✈️" },
        { title: "Passport Seva Helpdesk", url: "https://passportindia.gov.in", icon: "✈️" }
      ],
        proTips: [
        "Application number aur SMS screenshot hamesha save rakho",
        "Office visit pe original aur photocopy dono le jao",
        "Portal refresh aur status check daily nahi, 2-3 din mein karo"
      ],
        faqs: [
        { q: "Passport pending kitne din mein clear hota hai?", a: "Usually 7-15 working days, but office load ke hisaab se 30 din tak lag sakte hain." },
        { q: "Pending se reject ho gaya to kya karu?", a: "Reason dekho, missing document ya mismatch correct karke fresh apply karo." },
        { q: "Offline follow up zaroori hai kya?", a: "Agar portal pe delay ho raha hai to office ya CSC follow up helpful hota hai." },
        { q: "Status ka screenshot save karna chahiye?", a: "Haan, application ID aur status screenshot future complaint ke liye kaam aata hai." }
      ],
        related: [
        { title: "Passport Police Verification Pending", slug: "passport-police-verification-pending", category: "document" },
        { title: "Aadhaar Mismatch", slug: "aadhaar-mismatch", category: "document" }
      ],
        keywords: [
        "passport police reject",
        "passport adverse report",
        "passport verification rejected",
        "passport re verification"
      ],
        variants: [
        "passport police rejected",
        "passport verification reject",
        "passport file reject",
        "passport adverse"
      ]
      },
      {
        slug: "ration-card-new-apply",
        category: "document",
        metaTitle: "Ration Card Apply Online? New Card Guide (2026) | JharForm",
        metaDescription: "Naya ration card apply karna hai? Family details, Aadhaar, income proof aur state portal process.",
        h1: "New Ration Card Kaise Banaye — Online Apply Guide",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Medium",
        description: "Ration Card apply karna hai — official portal, documents, aur verification ka complete Hinglish guide.",
        steps: [
        { title: "NFSA / State Food Portal pe online application karo", detail: "Official portal open karke Ration Card apply form fill karo." },
        { title: "Eligibility aur category select karo", detail: "Category, income group, family members, area, ya purpose sahi select karo." },
        { title: "Documents upload karo", detail: "Photo, Aadhaar, address proof, income proof, caste proof, age proof jo required ho upload karo." },
        { title: "Verification complete karo", detail: "OTP, biometric, field verification, ya office verification jo bhi applicable ho complete karo." },
        { title: "Application ID save karo", detail: "Receipt / application number note karo. Yehi later status check mein kaam aayega." },
        { title: "Status follow up karo", detail: "Portal, office, or helpline pe status check karke approval/download karo." }
      ],
        screenshots: [],
        sources: [
        { title: "NFSA / State Food Portal", url: "https://nfsa.gov.in", icon: "🍚" },
        { title: "PDS Helpdesk", url: "https://nfsa.gov.in", icon: "🍚" }
      ],
        proTips: [
        "Portal login ke baad form ko save draft mein rakh sakte ho",
        "Aadhaar-linked mobile hamesha active rakho",
        "Proof docs ka size aur format pehle check karo"
      ],
        faqs: [
        { q: "Ration Card ke liye kaunse documents chahiye?", a: "Aadhaar, photo, address proof, aur issue-specific supporting documents usually chahiye hote hain." },
        { q: "Online apply karne ke baad kya karna hota hai?", a: "Application ID save karke status track aur office follow up karna hota hai." },
        { q: "Application reject ho gaya to reapply kar sakte hain?", a: "Haan, reason correct karke reapply kar sakte hain." },
        { q: "App ya portal ka official copy use karna safe hai?", a: "Haan, hamesha official portal ya DigiLocker copy use karo." }
      ],
        related: [
        { title: "Ration Card Duplicate", slug: "ration-card-duplicate", category: "document" },
        { title: "Aadhaar Mismatch", slug: "aadhaar-mismatch", category: "document" }
      ],
        keywords: [
        "ration card apply",
        "new ration card",
        "pds card online",
        "ration card kaise banaye"
      ],
        variants: [
        "ration card online apply",
        "new ration card apply",
        "ration card banaye",
        "ration card form"
      ]
      },
      {
        slug: "ration-card-name-add",
        category: "document",
        metaTitle: "Ration Card Name Add Online Guide (2026) | JharForm",
        metaDescription: "Ration card mein family member ka naam add karna hai? Online update aur office process ka guide.",
        h1: "Ration Card Mein Name Kaise Add Kare",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Medium",
        description: "Ration Card mein naam, DOB, address, ya other detail galat hai — official portal se correction ka complete step-by-step guide.",
        steps: [
        { title: "NFSA / State PDS Portal login karo", detail: "Official portal par login karke Ration Card correction/update section kholo." },
        { title: "Galat field select karo", detail: "Naam, DOB, address, photo, mobile, ya family detail jo galat hai usse select karo." },
        { title: "Proof document upload karo", detail: "Valid supporting documents scan karke upload karo. Details document se exact match honi chahiye." },
        { title: "Fee ya OTP verify karo", detail: "Jahan fee lage wahan pay karo. Jahan OTP lage wahan registered mobile pe code verify karo." },
        { title: "Application number note karo", detail: "Correction request ka acknowledgement number save karo taaki status later track ho sake." },
        { title: "Status track karke download karo", detail: "Approved hone ke baad updated certificate/card download ya print karo." }
      ],
        screenshots: [],
        sources: [
        { title: "NFSA / State PDS Portal", url: "https://nfsa.gov.in", icon: "🍚" },
        { title: "Fair Price Shop / Food Office", url: "https://nfsa.gov.in", icon: "🍚" }
      ],
        proTips: [
        "Details exact proof document jaise hi fill karo",
        "Photo aur scan clear hona chahiye warna reject ho sakta hai",
        "Submit se pehle spelling double-check karo"
      ],
        faqs: [
        { q: "Ration Card correction online ho jayegi?", a: "Haan, agar portal correction allow karta hai aur valid proof docs available hain." },
        { q: "Kitni fee lagti hai?", a: "Fee portal aur state ke hisaab se different hoti hai; confirmation page par exact amount dikhega." },
        { q: "Proof document kaunsa best hai?", a: "Government-issued document jisme correct details already present ho, woh best hota hai." },
        { q: "Update ke baad old copy invalid ho jaati hai?", a: "Usually updated version use karna chahiye; old copy sirf reference ke liye rakho." }
      ],
        related: [
        { title: "Ration Card Member Remove", slug: "ration-card-member-remove", category: "document" },
        { title: "Ration Card Duplicate", slug: "ration-card-duplicate", category: "document" }
      ],
        keywords: [
        "ration card name add",
        "family member add ration card",
        "pds update",
        "ration card member add"
      ],
        variants: [
        "ration card mein naam add",
        "ration card new member",
        "family member name add",
        "ration card update"
      ]
      },
      {
        slug: "ration-card-member-remove",
        category: "document",
        metaTitle: "Ration Card Member Remove Online Guide (2026) | JharForm",
        metaDescription: "Ration card se family member remove karna hai? Death, marriage, migration, ya duplicate member removal process.",
        h1: "Ration Card Se Member Remove Kaise Kare",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Medium",
        description: "Ration Card mein naam, DOB, address, ya other detail galat hai — official portal se correction ka complete step-by-step guide.",
        steps: [
        { title: "NFSA / State PDS Portal login karo", detail: "Official portal par login karke Ration Card correction/update section kholo." },
        { title: "Galat field select karo", detail: "Naam, DOB, address, photo, mobile, ya family detail jo galat hai usse select karo." },
        { title: "Proof document upload karo", detail: "Valid supporting documents scan karke upload karo. Details document se exact match honi chahiye." },
        { title: "Fee ya OTP verify karo", detail: "Jahan fee lage wahan pay karo. Jahan OTP lage wahan registered mobile pe code verify karo." },
        { title: "Application number note karo", detail: "Correction request ka acknowledgement number save karo taaki status later track ho sake." },
        { title: "Status track karke download karo", detail: "Approved hone ke baad updated certificate/card download ya print karo." }
      ],
        screenshots: [],
        sources: [
        { title: "NFSA / State PDS Portal", url: "https://nfsa.gov.in", icon: "🍚" },
        { title: "Food & Civil Supplies Office", url: "https://nfsa.gov.in", icon: "🍚" }
      ],
        proTips: [
        "Details exact proof document jaise hi fill karo",
        "Photo aur scan clear hona chahiye warna reject ho sakta hai",
        "Submit se pehle spelling double-check karo"
      ],
        faqs: [
        { q: "Ration Card correction online ho jayegi?", a: "Haan, agar portal correction allow karta hai aur valid proof docs available hain." },
        { q: "Kitni fee lagti hai?", a: "Fee portal aur state ke hisaab se different hoti hai; confirmation page par exact amount dikhega." },
        { q: "Proof document kaunsa best hai?", a: "Government-issued document jisme correct details already present ho, woh best hota hai." },
        { q: "Update ke baad old copy invalid ho jaati hai?", a: "Usually updated version use karna chahiye; old copy sirf reference ke liye rakho." }
      ],
        related: [
        { title: "Ration Card Name Add", slug: "ration-card-name-add", category: "document" },
        { title: "Ration Card Duplicate", slug: "ration-card-duplicate", category: "document" }
      ],
        keywords: [
        "ration card member remove",
        "ration card naam delete",
        "pds correction",
        "ration card update"
      ],
        variants: [
        "ration card se naam hatana",
        "member remove ration card",
        "ration card correction",
        "ration card family change"
      ]
      },
      {
        slug: "ration-card-duplicate",
        category: "document",
        metaTitle: "Ration Card Duplicate Download Guide (2026) | JharForm",
        metaDescription: "Ration card lost ho gaya? Duplicate / e-ration card kaise nikaale aur print karein.",
        h1: "Ration Card Duplicate Kaise Nikale",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Ration Card lost, not found, ya download nahi ho raha — DigiLocker aur official portal se duplicate / PDF nikalne ka easy guide.",
        steps: [
        { title: "NFSA / State Portal ya DigiLocker kholo", detail: "Official portal ya DigiLocker par login karke Ration Card search/download section kholo." },
        { title: "Details sahi daalo", detail: "Name, DOB, mobile, registration number, ya EPIC/PAN number exactly match hona chahiye." },
        { title: "OTP verify karo", detail: "Registered mobile pe aaya OTP enter karke access unlock karo." },
        { title: "Duplicate / e-copy download karo", detail: "PDF download karo ya print nikaalo. Agar record na mile to office record room me search request do." },
        { title: "Mismatch ho to correction request do", detail: "Old record se mismatch aa raha hai to correction form file karo." },
        { title: "Final print aur laminate rakho", detail: "Download ke baad print nikaal kar safe file mein rakho, aur needed ho to laminate karwa lo." }
      ],
        screenshots: [],
        sources: [
        { title: "NFSA / State Portal", url: "https://nfsa.gov.in", icon: "🍚" },
        { title: "DigiLocker", url: "https://www.digilocker.gov.in", icon: "🏛️" }
      ],
        proTips: [
        "DigiLocker account pehle se active rakho",
        "Password aur OTP access safe rakho",
        "Print nikaal kar laminated copy ka backup rakho"
      ],
        faqs: [
        { q: "Ration Card DigiLocker mein mil jayega?", a: "Agar authority ne DigiLocker support diya hai to easily mil sakta hai." },
        { q: "Download nahi ho raha to kya karein?", a: "Portal login, OTP, ya record mismatch check karo. Nahi to office se certified copy lo." },
        { q: "Print nikaalna enough hai?", a: "Bahut cases mein print enough hota hai, but original verification ke liye soft copy bhi rakho." },
        { q: "Record nahi mila to kya karein?", a: "Aapko manual verification ya correction request file karni pad sakti hai." }
      ],
        related: [
        { title: "Ration Card New Apply", slug: "ration-card-new-apply", category: "document" },
        { title: "Ration Card Name Add", slug: "ration-card-name-add", category: "document" }
      ],
        keywords: [
        "ration card duplicate",
        "ration card download",
        "e ration card",
        "pds card pdf"
      ],
        variants: [
        "ration card lost",
        "ration card duplicate print",
        "ration card ka copy",
        "ration card pdf"
      ]
      },
      {
        slug: "ration-card-kyc-pending",
        category: "document",
        metaTitle: "Ration Card KYC Pending? Complete Fix Guide (2026) | JharForm",
        metaDescription: "Ration card KYC pending hai aur ration band hone ka issue aa raha hai? E-KYC complete karne ka guide.",
        h1: "Ration Card KYC Pending — Kaise Complete Kare",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Ration Card status pending ya under verification dikh raha hai — portal, office, aur grievance steps se problem ka clear fix mil sakta hai.",
        steps: [
        { title: "Application reference number note karo", detail: "Ration Card application ke acknowledgement/SMS/email mein jo reference number hai use save karo." },
        { title: "NFSA / PDS Portal portal pe status check karo", detail: "Official portal open karo aur status dekho: Pending, Under Verification, Approved, ya Rejected." },
        { title: "Required documents cross-check karo", detail: "Aadhaar, photo, address proof, income/caste/birth proof jaise documents missing to nahi hain, verify karo." },
        { title: "Office ya kiosk se follow up karo", detail: "CSC, e-District, Tehsil, ya concerned office mein jaakar written inquiry do aur status update maango." },
        { title: "Grievance raise karo", detail: "30 working days se zyada delay ho to state grievance portal ya PGPortal pe complaint file karo." },
        { title: "Helpline / Nodal officer contact karo", detail: "NFSA / PDS Portal helpline ya nodal officer ko application number ke saath call/email karo." }
      ],
        screenshots: [],
        sources: [
        { title: "NFSA / PDS Portal", url: "https://nfsa.gov.in", icon: "🍚" },
        { title: "Fair Price Shop", url: "https://nfsa.gov.in", icon: "🍚" }
      ],
        proTips: [
        "Application number aur SMS screenshot hamesha save rakho",
        "Office visit pe original aur photocopy dono le jao",
        "Portal refresh aur status check daily nahi, 2-3 din mein karo"
      ],
        faqs: [
        { q: "Ration Card pending kitne din mein clear hota hai?", a: "Usually 7-15 working days, but office load ke hisaab se 30 din tak lag sakte hain." },
        { q: "Pending se reject ho gaya to kya karu?", a: "Reason dekho, missing document ya mismatch correct karke fresh apply karo." },
        { q: "Offline follow up zaroori hai kya?", a: "Agar portal pe delay ho raha hai to office ya CSC follow up helpful hota hai." },
        { q: "Status ka screenshot save karna chahiye?", a: "Haan, application ID aur status screenshot future complaint ke liye kaam aata hai." }
      ],
        related: [
        { title: "Ration Card Duplicate", slug: "ration-card-duplicate", category: "document" },
        { title: "Aadhaar Mismatch", slug: "aadhaar-mismatch", category: "document" }
      ],
        keywords: [
        "ration card kyc pending",
        "ration ekyc",
        "pds kyc status",
        "ration card verification"
      ],
        variants: [
        "ration card kyc complete",
        "ration card e kyc pending",
        "ration verification",
        "pds ekyc"
      ]
      },
      {
        slug: "scholarship-application-pending",
        category: "document",
        metaTitle: "Scholarship Application Pending? Status & Fix Guide (2026) | JharForm",
        metaDescription: "Scholarship application pending hai? NSP/eKalyan portal pe status check aur correction ka guide.",
        h1: "Scholarship Application Pending — Status Kaise Check Kare",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Medium",
        description: "Scholarship Application status pending ya under verification dikh raha hai — portal, office, aur grievance steps se problem ka clear fix mil sakta hai.",
        steps: [
        { title: "Application reference number note karo", detail: "Scholarship Application application ke acknowledgement/SMS/email mein jo reference number hai use save karo." },
        { title: "National Scholarship Portal portal pe status check karo", detail: "Official portal open karo aur status dekho: Pending, Under Verification, Approved, ya Rejected." },
        { title: "Required documents cross-check karo", detail: "Aadhaar, photo, address proof, income/caste/birth proof jaise documents missing to nahi hain, verify karo." },
        { title: "Office ya kiosk se follow up karo", detail: "CSC, e-District, Tehsil, ya concerned office mein jaakar written inquiry do aur status update maango." },
        { title: "Grievance raise karo", detail: "30 working days se zyada delay ho to state grievance portal ya PGPortal pe complaint file karo." },
        { title: "Helpline / Nodal officer contact karo", detail: "National Scholarship Portal helpline ya nodal officer ko application number ke saath call/email karo." }
      ],
        screenshots: [],
        sources: [
        { title: "National Scholarship Portal", url: "https://scholarships.gov.in", icon: "🎓" },
        { title: "NSP Helpdesk", url: "https://scholarships.gov.in", icon: "🎓" }
      ],
        proTips: [
        "Application number aur SMS screenshot hamesha save rakho",
        "Office visit pe original aur photocopy dono le jao",
        "Portal refresh aur status check daily nahi, 2-3 din mein karo"
      ],
        faqs: [
        { q: "Scholarship Application pending kitne din mein clear hota hai?", a: "Usually 7-15 working days, but office load ke hisaab se 30 din tak lag sakte hain." },
        { q: "Pending se reject ho gaya to kya karu?", a: "Reason dekho, missing document ya mismatch correct karke fresh apply karo." },
        { q: "Offline follow up zaroori hai kya?", a: "Agar portal pe delay ho raha hai to office ya CSC follow up helpful hota hai." },
        { q: "Status ka screenshot save karna chahiye?", a: "Haan, application ID aur status screenshot future complaint ke liye kaam aata hai." }
      ],
        related: [
        { title: "Scholarship Rejected Income", slug: "scholarship-rejected-income", category: "document" },
        { title: "Income Certificate Pending", slug: "income-certificate-pending", category: "document" }
      ],
        keywords: [
        "scholarship application pending",
        "nsp status pending",
        "scholarship verification",
        "scholarship delay"
      ],
        variants: [
        "scholarship pending status",
        "nsp pending",
        "scholarship atki hui",
        "scholarship application status"
      ]
      },
      {
        slug: "scholarship-rejected-income",
        category: "document",
        metaTitle: "Scholarship Rejected Due to Income? Fix Guide (2026) | JharForm",
        metaDescription: "Scholarship reject ho gayi income proof ki wajah se? Income certificate, Aadhaar, aur correction process ka guide.",
        h1: "Scholarship Rejected Income Issue — Fix Kaise Kare",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Medium",
        description: "Scholarship mein naam, DOB, address, ya other detail galat hai — official portal se correction ka complete step-by-step guide.",
        steps: [
        { title: "National Scholarship Portal login karo", detail: "Official portal par login karke Scholarship correction/update section kholo." },
        { title: "Galat field select karo", detail: "Naam, DOB, address, photo, mobile, ya family detail jo galat hai usse select karo." },
        { title: "Proof document upload karo", detail: "Valid supporting documents scan karke upload karo. Details document se exact match honi chahiye." },
        { title: "Fee ya OTP verify karo", detail: "Jahan fee lage wahan pay karo. Jahan OTP lage wahan registered mobile pe code verify karo." },
        { title: "Application number note karo", detail: "Correction request ka acknowledgement number save karo taaki status later track ho sake." },
        { title: "Status track karke download karo", detail: "Approved hone ke baad updated certificate/card download ya print karo." }
      ],
        screenshots: [],
        sources: [
        { title: "National Scholarship Portal", url: "https://scholarships.gov.in", icon: "🎓" },
        { title: "College Scholarship Office", url: "https://scholarships.gov.in", icon: "🎓" }
      ],
        proTips: [
        "Details exact proof document jaise hi fill karo",
        "Photo aur scan clear hona chahiye warna reject ho sakta hai",
        "Submit se pehle spelling double-check karo"
      ],
        faqs: [
        { q: "Scholarship correction online ho jayegi?", a: "Haan, agar portal correction allow karta hai aur valid proof docs available hain." },
        { q: "Kitni fee lagti hai?", a: "Fee portal aur state ke hisaab se different hoti hai; confirmation page par exact amount dikhega." },
        { q: "Proof document kaunsa best hai?", a: "Government-issued document jisme correct details already present ho, woh best hota hai." },
        { q: "Update ke baad old copy invalid ho jaati hai?", a: "Usually updated version use karna chahiye; old copy sirf reference ke liye rakho." }
      ],
        related: [
        { title: "Scholarship Application Pending", slug: "scholarship-application-pending", category: "document" },
        { title: "Income Certificate Expired", slug: "income-certificate-expired", category: "document" }
      ],
        keywords: [
        "scholarship rejected income",
        "income proof scholarship",
        "nsp correction",
        "scholarship income mismatch"
      ],
        variants: [
        "scholarship reject income reason",
        "income certificate issue",
        "scholarship correction online",
        "nsp income proof"
      ]
      },
      {
        slug: "school-leaving-certificate",
        category: "document",
        metaTitle: "School Leaving Certificate Download Guide (2026) | JharForm",
        metaDescription: "School leaving certificate, TC, ya transfer certificate nahi mil raha? DigiLocker ya school office se kaise nikale.",
        h1: "School Leaving Certificate Kaise Nikale",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "School Leaving Certificate lost, not found, ya download nahi ho raha — DigiLocker aur official portal se duplicate / PDF nikalne ka easy guide.",
        steps: [
        { title: "DigiLocker / School Portal ya DigiLocker kholo", detail: "Official portal ya DigiLocker par login karke School Leaving Certificate search/download section kholo." },
        { title: "Details sahi daalo", detail: "Name, DOB, mobile, registration number, ya EPIC/PAN number exactly match hona chahiye." },
        { title: "OTP verify karo", detail: "Registered mobile pe aaya OTP enter karke access unlock karo." },
        { title: "Duplicate / e-copy download karo", detail: "PDF download karo ya print nikaalo. Agar record na mile to office record room me search request do." },
        { title: "Mismatch ho to correction request do", detail: "Old record se mismatch aa raha hai to correction form file karo." },
        { title: "Final print aur laminate rakho", detail: "Download ke baad print nikaal kar safe file mein rakho, aur needed ho to laminate karwa lo." }
      ],
        screenshots: [],
        sources: [
        { title: "DigiLocker / School Portal", url: "https://www.digilocker.gov.in", icon: "🏛️" },
        { title: "School Office", url: "https://www.digilocker.gov.in", icon: "🏛️" }
      ],
        proTips: [
        "DigiLocker account pehle se active rakho",
        "Password aur OTP access safe rakho",
        "Print nikaal kar laminated copy ka backup rakho"
      ],
        faqs: [
        { q: "School Leaving Certificate DigiLocker mein mil jayega?", a: "Agar authority ne DigiLocker support diya hai to easily mil sakta hai." },
        { q: "Download nahi ho raha to kya karein?", a: "Portal login, OTP, ya record mismatch check karo. Nahi to office se certified copy lo." },
        { q: "Print nikaalna enough hai?", a: "Bahut cases mein print enough hota hai, but original verification ke liye soft copy bhi rakho." },
        { q: "Record nahi mila to kya karein?", a: "Aapko manual verification ya correction request file karni pad sakti hai." }
      ],
        related: [
        { title: "Migration Certificate", slug: "migration-certificate", category: "document" },
        { title: "Character Certificate", slug: "character-certificate", category: "document" }
      ],
        keywords: [
        "school leaving certificate",
        "tc download",
        "transfer certificate",
        "school certificate pdf"
      ],
        variants: [
        "school leaving certificate download",
        "tc kaise nikale",
        "transfer certificate",
        "slc certificate"
      ]
      },
      {
        slug: "migration-certificate",
        category: "document",
        metaTitle: "Migration Certificate Apply Online Guide (2026) | JharForm",
        metaDescription: "Migration certificate चाहिए college admission ke liye? University/school se apply karne ka guide.",
        h1: "Migration Certificate Kaise Banwaye",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Medium",
        description: "Migration Certificate apply karna hai — official portal, documents, aur verification ka complete Hinglish guide.",
        steps: [
        { title: "University / School Portal pe online application karo", detail: "Official portal open karke Migration Certificate apply form fill karo." },
        { title: "Eligibility aur category select karo", detail: "Category, income group, family members, area, ya purpose sahi select karo." },
        { title: "Documents upload karo", detail: "Photo, Aadhaar, address proof, income proof, caste proof, age proof jo required ho upload karo." },
        { title: "Verification complete karo", detail: "OTP, biometric, field verification, ya office verification jo bhi applicable ho complete karo." },
        { title: "Application ID save karo", detail: "Receipt / application number note karo. Yehi later status check mein kaam aayega." },
        { title: "Status follow up karo", detail: "Portal, office, or helpline pe status check karke approval/download karo." }
      ],
        screenshots: [],
        sources: [
        { title: "University / School Portal", url: "https://www.digilocker.gov.in", icon: "🏛️" },
        { title: "College Office", url: "https://www.digilocker.gov.in", icon: "🏛️" }
      ],
        proTips: [
        "Portal login ke baad form ko save draft mein rakh sakte ho",
        "Aadhaar-linked mobile hamesha active rakho",
        "Proof docs ka size aur format pehle check karo"
      ],
        faqs: [
        { q: "Migration Certificate ke liye kaunse documents chahiye?", a: "Aadhaar, photo, address proof, aur issue-specific supporting documents usually chahiye hote hain." },
        { q: "Online apply karne ke baad kya karna hota hai?", a: "Application ID save karke status track aur office follow up karna hota hai." },
        { q: "Application reject ho gaya to reapply kar sakte hain?", a: "Haan, reason correct karke reapply kar sakte hain." },
        { q: "App ya portal ka official copy use karna safe hai?", a: "Haan, hamesha official portal ya DigiLocker copy use karo." }
      ],
        related: [
        { title: "School Leaving Certificate", slug: "school-leaving-certificate", category: "document" },
        { title: "Character Certificate", slug: "character-certificate", category: "document" }
      ],
        keywords: [
        "migration certificate",
        "migration certificate apply",
        "college migration form",
        "migration certificate online"
      ],
        variants: [
        "migration certificate kaise bane",
        "migration certificate apply online",
        "university migration",
        "migration proof"
      ]
      },
      {
        slug: "character-certificate",
        category: "document",
        metaTitle: "Character Certificate Apply Online (2026) | JharForm",
        metaDescription: "Job, visa, ya college ke liye character certificate chahiye? Apply process aur police verification guide.",
        h1: "Character Certificate Kaise Banwaye — Online Guide",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Medium",
        description: "Character Certificate apply karna hai — official portal, documents, aur verification ka complete Hinglish guide.",
        steps: [
        { title: "State e-District / Police Portal pe online application karo", detail: "Official portal open karke Character Certificate apply form fill karo." },
        { title: "Eligibility aur category select karo", detail: "Category, income group, family members, area, ya purpose sahi select karo." },
        { title: "Documents upload karo", detail: "Photo, Aadhaar, address proof, income proof, caste proof, age proof jo required ho upload karo." },
        { title: "Verification complete karo", detail: "OTP, biometric, field verification, ya office verification jo bhi applicable ho complete karo." },
        { title: "Application ID save karo", detail: "Receipt / application number note karo. Yehi later status check mein kaam aayega." },
        { title: "Status follow up karo", detail: "Portal, office, or helpline pe status check karke approval/download karo." }
      ],
        screenshots: [],
        sources: [
        { title: "State e-District / Police Portal", url: "https://serviceonline.gov.in", icon: "🏛️" },
        { title: "Police Verification Office", url: "https://serviceonline.gov.in", icon: "🏛️" }
      ],
        proTips: [
        "Portal login ke baad form ko save draft mein rakh sakte ho",
        "Aadhaar-linked mobile hamesha active rakho",
        "Proof docs ka size aur format pehle check karo"
      ],
        faqs: [
        { q: "Character Certificate ke liye kaunse documents chahiye?", a: "Aadhaar, photo, address proof, aur issue-specific supporting documents usually chahiye hote hain." },
        { q: "Online apply karne ke baad kya karna hota hai?", a: "Application ID save karke status track aur office follow up karna hota hai." },
        { q: "Application reject ho gaya to reapply kar sakte hain?", a: "Haan, reason correct karke reapply kar sakte hain." },
        { q: "App ya portal ka official copy use karna safe hai?", a: "Haan, hamesha official portal ya DigiLocker copy use karo." }
      ],
        related: [
        { title: "Police Verification Certificate", slug: "police-verification-certificate", category: "document" },
        { title: "Passport Police Verification Pending", slug: "passport-police-verification-pending", category: "document" }
      ],
        keywords: [
        "character certificate",
        "police character certificate",
        "good conduct certificate",
        "character प्रमाण पत्र"
      ],
        variants: [
        "character certificate apply",
        "good conduct certificate online",
        "police verification certificate",
        "character praman patra"
      ]
      },
      {
        slug: "police-verification-certificate",
        category: "document",
        metaTitle: "Police Verification Certificate Apply Online (2026) | JharForm",
        metaDescription: "Police verification certificate online kaise le? Job, rental, visa, ya school use ke liye guide.",
        h1: "Police Verification Certificate Kaise Banwaye",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Medium",
        description: "Police Verification Certificate apply karna hai — official portal, documents, aur verification ka complete Hinglish guide.",
        steps: [
        { title: "Police / e-District Portal pe online application karo", detail: "Official portal open karke Police Verification Certificate apply form fill karo." },
        { title: "Eligibility aur category select karo", detail: "Category, income group, family members, area, ya purpose sahi select karo." },
        { title: "Documents upload karo", detail: "Photo, Aadhaar, address proof, income proof, caste proof, age proof jo required ho upload karo." },
        { title: "Verification complete karo", detail: "OTP, biometric, field verification, ya office verification jo bhi applicable ho complete karo." },
        { title: "Application ID save karo", detail: "Receipt / application number note karo. Yehi later status check mein kaam aayega." },
        { title: "Status follow up karo", detail: "Portal, office, or helpline pe status check karke approval/download karo." }
      ],
        screenshots: [],
        sources: [
        { title: "Police / e-District Portal", url: "https://serviceonline.gov.in", icon: "🏛️" },
        { title: "Local Police Station", url: "https://serviceonline.gov.in", icon: "🏛️" }
      ],
        proTips: [
        "Portal login ke baad form ko save draft mein rakh sakte ho",
        "Aadhaar-linked mobile hamesha active rakho",
        "Proof docs ka size aur format pehle check karo"
      ],
        faqs: [
        { q: "Police Verification Certificate ke liye kaunse documents chahiye?", a: "Aadhaar, photo, address proof, aur issue-specific supporting documents usually chahiye hote hain." },
        { q: "Online apply karne ke baad kya karna hota hai?", a: "Application ID save karke status track aur office follow up karna hota hai." },
        { q: "Application reject ho gaya to reapply kar sakte hain?", a: "Haan, reason correct karke reapply kar sakte hain." },
        { q: "App ya portal ka official copy use karna safe hai?", a: "Haan, hamesha official portal ya DigiLocker copy use karo." }
      ],
        related: [
        { title: "Character Certificate", slug: "character-certificate", category: "document" },
        { title: "Passport Police Verification Pending", slug: "passport-police-verification-pending", category: "document" }
      ],
        keywords: [
        "police verification certificate",
        "police certificate apply",
        "verification certificate online",
        "police clearance"
      ],
        variants: [
        "police certificate online",
        "verification certificate kaise banaye",
        "police clearance certificate",
        "character police"
      ]
      },
      {
        slug: "affidavit-format-download",
        category: "document",
        metaTitle: "Affidavit Format Download? Ready Sample Guide (2026) | JharForm",
        metaDescription: "Affidavit format चाहिए? Name change, address proof, lost document, ya declaration ke liye format download guide.",
        h1: "Affidavit Format Download Kaise Kare",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Affidavit lost, not found, ya download nahi ho raha — DigiLocker aur official portal se duplicate / PDF nikalne ka easy guide.",
        steps: [
        { title: "e-Stamp / eCourt ya DigiLocker kholo", detail: "Official portal ya DigiLocker par login karke Affidavit search/download section kholo." },
        { title: "Details sahi daalo", detail: "Name, DOB, mobile, registration number, ya EPIC/PAN number exactly match hona chahiye." },
        { title: "OTP verify karo", detail: "Registered mobile pe aaya OTP enter karke access unlock karo." },
        { title: "Duplicate / e-copy download karo", detail: "PDF download karo ya print nikaalo. Agar record na mile to office record room me search request do." },
        { title: "Mismatch ho to correction request do", detail: "Old record se mismatch aa raha hai to correction form file karo." },
        { title: "Final print aur laminate rakho", detail: "Download ke baad print nikaal kar safe file mein rakho, aur needed ho to laminate karwa lo." }
      ],
        screenshots: [],
        sources: [
        { title: "e-Stamp / eCourt", url: "https://services.india.gov.in", icon: "⚖️" },
        { title: "DigiLocker", url: "https://www.digilocker.gov.in", icon: "🏛️" }
      ],
        proTips: [
        "DigiLocker account pehle se active rakho",
        "Password aur OTP access safe rakho",
        "Print nikaal kar laminated copy ka backup rakho"
      ],
        faqs: [
        { q: "Affidavit DigiLocker mein mil jayega?", a: "Agar authority ne DigiLocker support diya hai to easily mil sakta hai." },
        { q: "Download nahi ho raha to kya karein?", a: "Portal login, OTP, ya record mismatch check karo. Nahi to office se certified copy lo." },
        { q: "Print nikaalna enough hai?", a: "Bahut cases mein print enough hota hai, but original verification ke liye soft copy bhi rakho." },
        { q: "Record nahi mila to kya karein?", a: "Aapko manual verification ya correction request file karni pad sakti hai." }
      ],
        related: [
        { title: "PAN Card Correction", slug: "pan-card-correction-online", category: "document" },
        { title: "Aadhaar Mismatch", slug: "aadhaar-mismatch", category: "document" }
      ],
        keywords: [
        "affidavit format download",
        "affidavit sample",
        "declaration format",
        "shapath patra"
      ],
        variants: [
        "affidavit ka format",
        "affidavit sample pdf",
        "declaration affidavit",
        "name change affidavit"
      ]
      },
      {
        slug: "court-certified-copy",
        category: "document",
        metaTitle: "Court Certified Copy Download / Apply Guide (2026) | JharForm",
        metaDescription: "Case file certified copy, judgment copy, ya order copy chahiye? eCourts se kaise apply kare.",
        h1: "Court Certified Copy Kaise Nikale",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Medium",
        description: "Certified Copy lost, not found, ya download nahi ho raha — DigiLocker aur official portal se duplicate / PDF nikalne ka easy guide.",
        steps: [
        { title: "eCourts ya DigiLocker kholo", detail: "Official portal ya DigiLocker par login karke Certified Copy search/download section kholo." },
        { title: "Details sahi daalo", detail: "Name, DOB, mobile, registration number, ya EPIC/PAN number exactly match hona chahiye." },
        { title: "OTP verify karo", detail: "Registered mobile pe aaya OTP enter karke access unlock karo." },
        { title: "Duplicate / e-copy download karo", detail: "PDF download karo ya print nikaalo. Agar record na mile to office record room me search request do." },
        { title: "Mismatch ho to correction request do", detail: "Old record se mismatch aa raha hai to correction form file karo." },
        { title: "Final print aur laminate rakho", detail: "Download ke baad print nikaal kar safe file mein rakho, aur needed ho to laminate karwa lo." }
      ],
        screenshots: [],
        sources: [
        { title: "eCourts", url: "https://ecourts.gov.in", icon: "⚖️" },
        { title: "Court Copy Section", url: "https://ecourts.gov.in", icon: "⚖️" }
      ],
        proTips: [
        "DigiLocker account pehle se active rakho",
        "Password aur OTP access safe rakho",
        "Print nikaal kar laminated copy ka backup rakho"
      ],
        faqs: [
        { q: "Certified Copy DigiLocker mein mil jayega?", a: "Agar authority ne DigiLocker support diya hai to easily mil sakta hai." },
        { q: "Download nahi ho raha to kya karein?", a: "Portal login, OTP, ya record mismatch check karo. Nahi to office se certified copy lo." },
        { q: "Print nikaalna enough hai?", a: "Bahut cases mein print enough hota hai, but original verification ke liye soft copy bhi rakho." },
        { q: "Record nahi mila to kya karein?", a: "Aapko manual verification ya correction request file karni pad sakti hai." }
      ],
        related: [
        { title: "Affidavit Format Download", slug: "affidavit-format-download", category: "document" },
        { title: "Character Certificate", slug: "character-certificate", category: "document" }
      ],
        keywords: [
        "certified copy court",
        "judgment copy download",
        "case copy online",
        "court certified copy"
      ],
        variants: [
        "court copy kaise nikale",
        "judgment certified copy",
        "case file copy",
        "order copy download"
      ]
      },
      {
        slug: "land-mutation-pending",
        category: "document",
        metaTitle: "Land Mutation Pending? Complete Fix Guide (2026) | JharForm",
        metaDescription: "Land mutation pending hai? Khata, registry, aur land record update ka follow-up guide.",
        h1: "Land Mutation Pending — Status Kaise Clear Kare",
        lastUpdated: "May 2026",
        readingTime: "6 min",
        difficulty: "Medium",
        description: "Land Mutation status pending ya under verification dikh raha hai — portal, office, aur grievance steps se problem ka clear fix mil sakta hai.",
        steps: [
        { title: "Application reference number note karo", detail: "Land Mutation application ke acknowledgement/SMS/email mein jo reference number hai use save karo." },
        { title: "Land Records Portal portal pe status check karo", detail: "Official portal open karo aur status dekho: Pending, Under Verification, Approved, ya Rejected." },
        { title: "Required documents cross-check karo", detail: "Aadhaar, photo, address proof, income/caste/birth proof jaise documents missing to nahi hain, verify karo." },
        { title: "Office ya kiosk se follow up karo", detail: "CSC, e-District, Tehsil, ya concerned office mein jaakar written inquiry do aur status update maango." },
        { title: "Grievance raise karo", detail: "30 working days se zyada delay ho to state grievance portal ya PGPortal pe complaint file karo." },
        { title: "Helpline / Nodal officer contact karo", detail: "Land Records Portal helpline ya nodal officer ko application number ke saath call/email karo." }
      ],
        screenshots: [],
        sources: [
        { title: "Land Records Portal", url: "https://landrecords.nic.in", icon: "🗺️" },
        { title: "Revenue Office", url: "https://landrecords.nic.in", icon: "🗺️" }
      ],
        proTips: [
        "Application number aur SMS screenshot hamesha save rakho",
        "Office visit pe original aur photocopy dono le jao",
        "Portal refresh aur status check daily nahi, 2-3 din mein karo"
      ],
        faqs: [
        { q: "Land Mutation pending kitne din mein clear hota hai?", a: "Usually 7-15 working days, but office load ke hisaab se 30 din tak lag sakte hain." },
        { q: "Pending se reject ho gaya to kya karu?", a: "Reason dekho, missing document ya mismatch correct karke fresh apply karo." },
        { q: "Offline follow up zaroori hai kya?", a: "Agar portal pe delay ho raha hai to office ya CSC follow up helpful hota hai." },
        { q: "Status ka screenshot save karna chahiye?", a: "Haan, application ID aur status screenshot future complaint ke liye kaam aata hai." }
      ],
        related: [
        { title: "Khata Khatoni Download", slug: "land-khata-khatoni-download", category: "document" },
        { title: "Property Registration Documents", slug: "property-registration-documents", category: "document" }
      ],
        keywords: [
        "land mutation pending",
        "mutation status",
        "jamabandi update",
        "land record pending"
      ],
        variants: [
        "mutation atka hua",
        "land mutation online",
        "jamabandi pending",
        "khata mutation delay"
      ]
      },
      {
        slug: "land-khata-khatoni-download",
        category: "document",
        metaTitle: "Khata Khatoni Download Online (2026) | JharForm",
        metaDescription: "Khata khatoni, jamabandi, ya land record online download karna hai? Step-by-step guide.",
        h1: "Khata Khatoni Download Kaise Kare",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Khata Khatoni lost, not found, ya download nahi ho raha — DigiLocker aur official portal se duplicate / PDF nikalne ka easy guide.",
        steps: [
        { title: "Land Records Portal ya DigiLocker kholo", detail: "Official portal ya DigiLocker par login karke Khata Khatoni search/download section kholo." },
        { title: "Details sahi daalo", detail: "Name, DOB, mobile, registration number, ya EPIC/PAN number exactly match hona chahiye." },
        { title: "OTP verify karo", detail: "Registered mobile pe aaya OTP enter karke access unlock karo." },
        { title: "Duplicate / e-copy download karo", detail: "PDF download karo ya print nikaalo. Agar record na mile to office record room me search request do." },
        { title: "Mismatch ho to correction request do", detail: "Old record se mismatch aa raha hai to correction form file karo." },
        { title: "Final print aur laminate rakho", detail: "Download ke baad print nikaal kar safe file mein rakho, aur needed ho to laminate karwa lo." }
      ],
        screenshots: [],
        sources: [
        { title: "Land Records Portal", url: "https://landrecords.nic.in", icon: "🗺️" },
        { title: "Bhunaksha / State Portal", url: "https://landrecords.nic.in", icon: "🗺️" }
      ],
        proTips: [
        "DigiLocker account pehle se active rakho",
        "Password aur OTP access safe rakho",
        "Print nikaal kar laminated copy ka backup rakho"
      ],
        faqs: [
        { q: "Khata Khatoni DigiLocker mein mil jayega?", a: "Agar authority ne DigiLocker support diya hai to easily mil sakta hai." },
        { q: "Download nahi ho raha to kya karein?", a: "Portal login, OTP, ya record mismatch check karo. Nahi to office se certified copy lo." },
        { q: "Print nikaalna enough hai?", a: "Bahut cases mein print enough hota hai, but original verification ke liye soft copy bhi rakho." },
        { q: "Record nahi mila to kya karein?", a: "Aapko manual verification ya correction request file karni pad sakti hai." }
      ],
        related: [
        { title: "Land Mutation Pending", slug: "land-mutation-pending", category: "document" },
        { title: "Land Map Download", slug: "land-map-download", category: "document" }
      ],
        keywords: [
        "khata khatoni download",
        "jamabandi download",
        "land record pdf",
        "khata copy online"
      ],
        variants: [
        "khata download",
        "khatoni ka copy",
        "jamabandi nikale",
        "land record print"
      ]
      },
      {
        slug: "land-map-download",
        category: "document",
        metaTitle: "Land Map Download Guide (2026) | JharForm",
        metaDescription: "Bhunaksha ya land map download karna hai? Plot map, khasra map, aur survey map ka guide.",
        h1: "Land Map Download Kaise Kare",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Land Map lost, not found, ya download nahi ho raha — DigiLocker aur official portal se duplicate / PDF nikalne ka easy guide.",
        steps: [
        { title: "Bhunaksha Portal ya DigiLocker kholo", detail: "Official portal ya DigiLocker par login karke Land Map search/download section kholo." },
        { title: "Details sahi daalo", detail: "Name, DOB, mobile, registration number, ya EPIC/PAN number exactly match hona chahiye." },
        { title: "OTP verify karo", detail: "Registered mobile pe aaya OTP enter karke access unlock karo." },
        { title: "Duplicate / e-copy download karo", detail: "PDF download karo ya print nikaalo. Agar record na mile to office record room me search request do." },
        { title: "Mismatch ho to correction request do", detail: "Old record se mismatch aa raha hai to correction form file karo." },
        { title: "Final print aur laminate rakho", detail: "Download ke baad print nikaal kar safe file mein rakho, aur needed ho to laminate karwa lo." }
      ],
        screenshots: [],
        sources: [
        { title: "Bhunaksha Portal", url: "https://bhunaksha.nic.in", icon: "🗺️" },
        { title: "Land Records Office", url: "https://landrecords.nic.in", icon: "🗺️" }
      ],
        proTips: [
        "DigiLocker account pehle se active rakho",
        "Password aur OTP access safe rakho",
        "Print nikaal kar laminated copy ka backup rakho"
      ],
        faqs: [
        { q: "Land Map DigiLocker mein mil jayega?", a: "Agar authority ne DigiLocker support diya hai to easily mil sakta hai." },
        { q: "Download nahi ho raha to kya karein?", a: "Portal login, OTP, ya record mismatch check karo. Nahi to office se certified copy lo." },
        { q: "Print nikaalna enough hai?", a: "Bahut cases mein print enough hota hai, but original verification ke liye soft copy bhi rakho." },
        { q: "Record nahi mila to kya karein?", a: "Aapko manual verification ya correction request file karni pad sakti hai." }
      ],
        related: [
        { title: "Khata Khatoni Download", slug: "land-khata-khatoni-download", category: "document" },
        { title: "Land Mutation Pending", slug: "land-mutation-pending", category: "document" }
      ],
        keywords: [
        "land map download",
        "bhunaksha map",
        "plot map online",
        "khasra map"
      ],
        variants: [
        "land map kaise nikale",
        "plot map download",
        "bhunaksha pdf",
        "survey map online"
      ]
      },
      {
        slug: "property-registration-documents",
        category: "document",
        metaTitle: "Property Registration Documents List (2026) | JharForm",
        metaDescription: "Property registration ke liye required documents, stamp duty, aur deed checklist samjho.",
        h1: "Property Registration Ke Liye Kaunse Documents Chahiye",
        lastUpdated: "May 2026",
        readingTime: "6 min",
        difficulty: "Medium",
        description: "Property Registration apply karna hai — official portal, documents, aur verification ka complete Hinglish guide.",
        steps: [
        { title: "State Registration Department pe online application karo", detail: "Official portal open karke Property Registration apply form fill karo." },
        { title: "Eligibility aur category select karo", detail: "Category, income group, family members, area, ya purpose sahi select karo." },
        { title: "Documents upload karo", detail: "Photo, Aadhaar, address proof, income proof, caste proof, age proof jo required ho upload karo." },
        { title: "Verification complete karo", detail: "OTP, biometric, field verification, ya office verification jo bhi applicable ho complete karo." },
        { title: "Application ID save karo", detail: "Receipt / application number note karo. Yehi later status check mein kaam aayega." },
        { title: "Status follow up karo", detail: "Portal, office, or helpline pe status check karke approval/download karo." }
      ],
        screenshots: [],
        sources: [
        { title: "State Registration Department", url: "https://services.india.gov.in", icon: "🍚" },
        { title: "Sub-Registrar Office", url: "https://services.india.gov.in", icon: "🏛️" }
      ],
        proTips: [
        "Portal login ke baad form ko save draft mein rakh sakte ho",
        "Aadhaar-linked mobile hamesha active rakho",
        "Proof docs ka size aur format pehle check karo"
      ],
        faqs: [
        { q: "Property Registration ke liye kaunse documents chahiye?", a: "Aadhaar, photo, address proof, aur issue-specific supporting documents usually chahiye hote hain." },
        { q: "Online apply karne ke baad kya karna hota hai?", a: "Application ID save karke status track aur office follow up karna hota hai." },
        { q: "Application reject ho gaya to reapply kar sakte hain?", a: "Haan, reason correct karke reapply kar sakte hain." },
        { q: "App ya portal ka official copy use karna safe hai?", a: "Haan, hamesha official portal ya DigiLocker copy use karo." }
      ],
        related: [
        { title: "Khata Khatoni Download", slug: "land-khata-khatoni-download", category: "document" },
        { title: "Affidavit Format Download", slug: "affidavit-format-download", category: "document" }
      ],
        keywords: [
        "property registration documents",
        "registry documents",
        "sale deed papers",
        "property deed checklist"
      ],
        variants: [
        "property registry documents",
        "registration papers list",
        "sale deed documents",
        "property transfer docs"
      ]
      },
      {
        slug: "property-tax-receipt",
        category: "document",
        metaTitle: "Property Tax Receipt Download Guide (2026) | JharForm",
        metaDescription: "Property tax receipt, holding tax, aur municipal tax online download ka guide.",
        h1: "Property Tax Receipt Download Kaise Kare",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Property Tax Receipt lost, not found, ya download nahi ho raha — DigiLocker aur official portal se duplicate / PDF nikalne ka easy guide.",
        steps: [
        { title: "Municipal Portal ya DigiLocker kholo", detail: "Official portal ya DigiLocker par login karke Property Tax Receipt search/download section kholo." },
        { title: "Details sahi daalo", detail: "Name, DOB, mobile, registration number, ya EPIC/PAN number exactly match hona chahiye." },
        { title: "OTP verify karo", detail: "Registered mobile pe aaya OTP enter karke access unlock karo." },
        { title: "Duplicate / e-copy download karo", detail: "PDF download karo ya print nikaalo. Agar record na mile to office record room me search request do." },
        { title: "Mismatch ho to correction request do", detail: "Old record se mismatch aa raha hai to correction form file karo." },
        { title: "Final print aur laminate rakho", detail: "Download ke baad print nikaal kar safe file mein rakho, aur needed ho to laminate karwa lo." }
      ],
        screenshots: [],
        sources: [
        { title: "Municipal Portal", url: "https://services.india.gov.in", icon: "🏛️" },
        { title: "नगर निगम / Municipal Office", url: "https://services.india.gov.in", icon: "🏛️" }
      ],
        proTips: [
        "DigiLocker account pehle se active rakho",
        "Password aur OTP access safe rakho",
        "Print nikaal kar laminated copy ka backup rakho"
      ],
        faqs: [
        { q: "Property Tax Receipt DigiLocker mein mil jayega?", a: "Agar authority ne DigiLocker support diya hai to easily mil sakta hai." },
        { q: "Download nahi ho raha to kya karein?", a: "Portal login, OTP, ya record mismatch check karo. Nahi to office se certified copy lo." },
        { q: "Print nikaalna enough hai?", a: "Bahut cases mein print enough hota hai, but original verification ke liye soft copy bhi rakho." },
        { q: "Record nahi mila to kya karein?", a: "Aapko manual verification ya correction request file karni pad sakti hai." }
      ],
        related: [
        { title: "Trade License Renewal", slug: "trade-license-renewal", category: "document" },
        { title: "Khata Khatoni Download", slug: "land-khata-khatoni-download", category: "document" }
      ],
        keywords: [
        "property tax receipt",
        "holding tax receipt",
        "municipal tax receipt",
        "property tax print"
      ],
        variants: [
        "property tax download",
        "holding tax receipt pdf",
        "municipal tax slip",
        "tax paid receipt"
      ]
      },
      {
        slug: "udyam-registration-correction",
        category: "document",
        metaTitle: "Udyam Registration Correction Guide (2026) | JharForm",
        metaDescription: "Udyam registration mein naam, address, ya activity change karna hai? Correction process ka guide.",
        h1: "Udyam Registration Mein Correction Kaise Kare",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Easy",
        description: "Udyam Registration mein naam, DOB, address, ya other detail galat hai — official portal se correction ka complete step-by-step guide.",
        steps: [
        { title: "Udyam Portal login karo", detail: "Official portal par login karke Udyam Registration correction/update section kholo." },
        { title: "Galat field select karo", detail: "Naam, DOB, address, photo, mobile, ya family detail jo galat hai usse select karo." },
        { title: "Proof document upload karo", detail: "Valid supporting documents scan karke upload karo. Details document se exact match honi chahiye." },
        { title: "Fee ya OTP verify karo", detail: "Jahan fee lage wahan pay karo. Jahan OTP lage wahan registered mobile pe code verify karo." },
        { title: "Application number note karo", detail: "Correction request ka acknowledgement number save karo taaki status later track ho sake." },
        { title: "Status track karke download karo", detail: "Approved hone ke baad updated certificate/card download ya print karo." }
      ],
        screenshots: [],
        sources: [
        { title: "Udyam Portal", url: "https://udyamregistration.gov.in", icon: "🍚" },
        { title: "MSME Helpdesk", url: "https://udyamregistration.gov.in", icon: "🍚" }
      ],
        proTips: [
        "Details exact proof document jaise hi fill karo",
        "Photo aur scan clear hona chahiye warna reject ho sakta hai",
        "Submit se pehle spelling double-check karo"
      ],
        faqs: [
        { q: "Udyam Registration correction online ho jayegi?", a: "Haan, agar portal correction allow karta hai aur valid proof docs available hain." },
        { q: "Kitni fee lagti hai?", a: "Fee portal aur state ke hisaab se different hoti hai; confirmation page par exact amount dikhega." },
        { q: "Proof document kaunsa best hai?", a: "Government-issued document jisme correct details already present ho, woh best hota hai." },
        { q: "Update ke baad old copy invalid ho jaati hai?", a: "Usually updated version use karna chahiye; old copy sirf reference ke liye rakho." }
      ],
        related: [
        { title: "Aadhaar Mismatch", slug: "aadhaar-mismatch", category: "document" },
        { title: "PAN Card Correction", slug: "pan-card-correction-online", category: "document" }
      ],
        keywords: [
        "udyam correction",
        "udyam registration update",
        "msme certificate change",
        "udyam name change"
      ],
        variants: [
        "udyam mein correction",
        "udyam update online",
        "udyam registration modify",
        "msme update"
      ]
      },
      {
        slug: "trade-license-renewal",
        category: "document",
        metaTitle: "Trade License Renew Online Guide (2026) | JharForm",
        metaDescription: "Trade license renew karna hai? Municipal portal, fee, aur documents ka step-by-step guide.",
        h1: "Trade License Renewal Kaise Kare",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Medium",
        description: "Trade License expire, pending, ya update chahiye — official portal pe renewal / reissue ka simple process.",
        steps: [
        { title: "Municipal Portal renewal page kholo", detail: "Official portal pe renewal / reissue / update service select karo." },
        { title: "Current details verify karo", detail: "Existing Trade License number, DOB, address, aur mobile verify karo." },
        { title: "Required documents upload karo", detail: "Photo, ID proof, address proof, medical certificate ya supporting docs jo required hain, upload karo." },
        { title: "Fee pay karo", detail: "Renewal/reissue fee online pay karo aur receipt save karo." },
        { title: "Slot / appointment book karo", detail: "Jahan biometric, verification, ya office visit required ho wahan appointment slot book karo." },
        { title: "Receipt aur status track karo", detail: "Receipt, ARN/SRN number save karke status track karo." }
      ],
        screenshots: [],
        sources: [
        { title: "Municipal Portal", url: "https://services.india.gov.in", icon: "🏛️" },
        { title: "Municipal Corporation Office", url: "https://services.india.gov.in", icon: "🍚" }
      ],
        proTips: [
        "Expiry se pehle kaam start karo taaki late fee na lage",
        "Medical/biometric docs pehle se ready rakho",
        "Receipt aur ARN number note karna mat bhoolo"
      ],
        faqs: [
        { q: "Trade License renewal overdue ho gaya to kya hoga?", a: "Late fee, extra verification, ya fresh application lag sakti hai." },
        { q: "Renewal ke liye office jana zaroori hai?", a: "Kuch services mein online hi ho jata hai, kuch mein biometric/visit required hota hai." },
        { q: "Old number aur details change ho sakte hain?", a: "Haan, lekin proof documents ke saath hi update hota hai." },
        { q: "Renewed copy kab milti hai?", a: "Status approved hone ke baad portal download ya postal delivery ke through milti hai." }
      ],
        related: [
        { title: "Property Tax Receipt", slug: "property-tax-receipt", category: "document" },
        { title: "Udyam Registration Correction", slug: "udyam-registration-correction", category: "document" }
      ],
        keywords: [
        "trade license renewal",
        "shop license renew",
        "municipal license",
        "business license renewal"
      ],
        variants: [
        "trade license renew",
        "shop license update",
        "business trade license",
        "municipal renewal"
      ]
      },
      {
        slug: "digital-signature-certificate",
        category: "document",
        metaTitle: "Digital Signature Certificate Apply Online (2026) | JharForm",
        metaDescription: "Digital signature certificate चाहिए GST, MCA, या tender work ke liye? Apply guide.",
        h1: "Digital Signature Certificate Kaise Banwaye",
        lastUpdated: "May 2026",
        readingTime: "6 min",
        difficulty: "Medium",
        description: "Digital Signature Certificate apply karna hai — official portal, documents, aur verification ka complete Hinglish guide.",
        steps: [
        { title: "CCA / Licensed Certifying Authority pe online application karo", detail: "Official portal open karke Digital Signature Certificate apply form fill karo." },
        { title: "Eligibility aur category select karo", detail: "Category, income group, family members, area, ya purpose sahi select karo." },
        { title: "Documents upload karo", detail: "Photo, Aadhaar, address proof, income proof, caste proof, age proof jo required ho upload karo." },
        { title: "Verification complete karo", detail: "OTP, biometric, field verification, ya office verification jo bhi applicable ho complete karo." },
        { title: "Application ID save karo", detail: "Receipt / application number note karo. Yehi later status check mein kaam aayega." },
        { title: "Status follow up karo", detail: "Portal, office, or helpline pe status check karke approval/download karo." }
      ],
        screenshots: [],
        sources: [
        { title: "CCA / Licensed Certifying Authority", url: "https://cca.gov.in", icon: "✍️" },
        { title: "Certifying Authority Portal", url: "https://cca.gov.in", icon: "✍️" }
      ],
        proTips: [
        "Portal login ke baad form ko save draft mein rakh sakte ho",
        "Aadhaar-linked mobile hamesha active rakho",
        "Proof docs ka size aur format pehle check karo"
      ],
        faqs: [
        { q: "Digital Signature Certificate ke liye kaunse documents chahiye?", a: "Aadhaar, photo, address proof, aur issue-specific supporting documents usually chahiye hote hain." },
        { q: "Online apply karne ke baad kya karna hota hai?", a: "Application ID save karke status track aur office follow up karna hota hai." },
        { q: "Application reject ho gaya to reapply kar sakte hain?", a: "Haan, reason correct karke reapply kar sakte hain." },
        { q: "App ya portal ka official copy use karna safe hai?", a: "Haan, hamesha official portal ya DigiLocker copy use karo." }
      ],
        related: [
        { title: "Udyam Registration", slug: "udyam-registration-correction", category: "document" },
        { title: "PAN Card Correction", slug: "pan-card-correction-online", category: "document" }
      ],
        keywords: [
        "digital signature certificate",
        "dsc apply",
        "class 3 dsc",
        "e signature certificate"
      ],
        variants: [
        "dsc kaise banaye",
        "digital signature apply",
        "class 3 certificate",
        "signature certificate online"
      ]
      },
      {
        slug: "pan-aadhaar-link",
        category: "document",
        metaTitle: "PAN Aadhaar Link Online? Step-by-Step Fix (2026) | JharForm",
        metaDescription: "PAN aur Aadhaar link nahi hai? Income tax portal se link karne ka simple guide.",
        h1: "PAN Aadhaar Link Kaise Kare — Online Guide",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "PAN-Aadhaar Link mein naam, DOB, address, ya other detail galat hai — official portal se correction ka complete step-by-step guide.",
        steps: [
        { title: "Income Tax Portal login karo", detail: "Official portal par login karke PAN-Aadhaar Link correction/update section kholo." },
        { title: "Galat field select karo", detail: "Naam, DOB, address, photo, mobile, ya family detail jo galat hai usse select karo." },
        { title: "Proof document upload karo", detail: "Valid supporting documents scan karke upload karo. Details document se exact match honi chahiye." },
        { title: "Fee ya OTP verify karo", detail: "Jahan fee lage wahan pay karo. Jahan OTP lage wahan registered mobile pe code verify karo." },
        { title: "Application number note karo", detail: "Correction request ka acknowledgement number save karo taaki status later track ho sake." },
        { title: "Status track karke download karo", detail: "Approved hone ke baad updated certificate/card download ya print karo." }
      ],
        screenshots: [],
        sources: [
        { title: "Income Tax Portal", url: "https://www.incometax.gov.in", icon: "🏛️" },
        { title: "Income Tax Helpdesk", url: "https://www.incometax.gov.in", icon: "🏛️" }
      ],
        proTips: [
        "Details exact proof document jaise hi fill karo",
        "Photo aur scan clear hona chahiye warna reject ho sakta hai",
        "Submit se pehle spelling double-check karo"
      ],
        faqs: [
        { q: "PAN-Aadhaar Link correction online ho jayegi?", a: "Haan, agar portal correction allow karta hai aur valid proof docs available hain." },
        { q: "Kitni fee lagti hai?", a: "Fee portal aur state ke hisaab se different hoti hai; confirmation page par exact amount dikhega." },
        { q: "Proof document kaunsa best hai?", a: "Government-issued document jisme correct details already present ho, woh best hota hai." },
        { q: "Update ke baad old copy invalid ho jaati hai?", a: "Usually updated version use karna chahiye; old copy sirf reference ke liye rakho." }
      ],
        related: [
        { title: "PAN Card Correction", slug: "pan-card-correction-online", category: "document" },
        { title: "Aadhaar Mismatch", slug: "aadhaar-mismatch", category: "document" }
      ],
        keywords: [
        "pan aadhaar link",
        "pan aadhaar seeding",
        "pan aadhaar mismatch",
        "link pan aadhaar"
      ],
        variants: [
        "pan aadhaar link online",
        "aadhaar pan link",
        "pan se aadhaar jodo",
        "seeding pan aadhaar"
      ]
      },
      {
        slug: "aadhaar-mobile-update",
        category: "document",
        metaTitle: "Aadhaar Mobile Update Guide (2026) | JharForm",
        metaDescription: "Aadhaar mobile number update online/offline kaise kare? OTP active rakhne ke liye guide.",
        h1: "Aadhaar Mobile Number Update Kaise Kare",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Medium",
        description: "Aadhaar Mobile Update expire, pending, ya update chahiye — official portal pe renewal / reissue ka simple process.",
        steps: [
        { title: "UIDAI renewal page kholo", detail: "Official portal pe renewal / reissue / update service select karo." },
        { title: "Current details verify karo", detail: "Existing Aadhaar Mobile Update number, DOB, address, aur mobile verify karo." },
        { title: "Required documents upload karo", detail: "Photo, ID proof, address proof, medical certificate ya supporting docs jo required hain, upload karo." },
        { title: "Fee pay karo", detail: "Renewal/reissue fee online pay karo aur receipt save karo." },
        { title: "Slot / appointment book karo", detail: "Jahan biometric, verification, ya office visit required ho wahan appointment slot book karo." },
        { title: "Receipt aur status track karo", detail: "Receipt, ARN/SRN number save karke status track karo." }
      ],
        screenshots: [],
        sources: [
        { title: "UIDAI", url: "https://myaadhaar.uidai.gov.in", icon: "🪪" },
        { title: "Aadhaar Seva Kendra", url: "https://myaadhaar.uidai.gov.in", icon: "🪪" }
      ],
        proTips: [
        "Expiry se pehle kaam start karo taaki late fee na lage",
        "Medical/biometric docs pehle se ready rakho",
        "Receipt aur ARN number note karna mat bhoolo"
      ],
        faqs: [
        { q: "Aadhaar Mobile Update renewal overdue ho gaya to kya hoga?", a: "Late fee, extra verification, ya fresh application lag sakti hai." },
        { q: "Renewal ke liye office jana zaroori hai?", a: "Kuch services mein online hi ho jata hai, kuch mein biometric/visit required hota hai." },
        { q: "Old number aur details change ho sakte hain?", a: "Haan, lekin proof documents ke saath hi update hota hai." },
        { q: "Renewed copy kab milti hai?", a: "Status approved hone ke baad portal download ya postal delivery ke through milti hai." }
      ],
        related: [
        { title: "Aadhaar Address Update", slug: "aadhaar-address-update", category: "document" },
        { title: "Aadhaar Mismatch", slug: "aadhaar-mismatch", category: "document" }
      ],
        keywords: [
        "aadhaar mobile update",
        "aadhaar mobile change",
        "uidai mobile number",
        "aadhaar otp not coming"
      ],
        variants: [
        "aadhaar mobile number update",
        "aadhaar phone change",
        "aadhar mobile update",
        "aadhaar otp fix"
      ]
      },
      {
        slug: "aadhaar-address-update",
        category: "document",
        metaTitle: "Aadhaar Address Update Online Guide (2026) | JharForm",
        metaDescription: "Aadhaar address change karna hai? UIDAI portal se address update ka guide.",
        h1: "Aadhaar Address Update Kaise Kare",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Aadhaar Address Update mein naam, DOB, address, ya other detail galat hai — official portal se correction ka complete step-by-step guide.",
        steps: [
        { title: "UIDAI myAadhaar login karo", detail: "Official portal par login karke Aadhaar Address Update correction/update section kholo." },
        { title: "Galat field select karo", detail: "Naam, DOB, address, photo, mobile, ya family detail jo galat hai usse select karo." },
        { title: "Proof document upload karo", detail: "Valid supporting documents scan karke upload karo. Details document se exact match honi chahiye." },
        { title: "Fee ya OTP verify karo", detail: "Jahan fee lage wahan pay karo. Jahan OTP lage wahan registered mobile pe code verify karo." },
        { title: "Application number note karo", detail: "Correction request ka acknowledgement number save karo taaki status later track ho sake." },
        { title: "Status track karke download karo", detail: "Approved hone ke baad updated certificate/card download ya print karo." }
      ],
        screenshots: [],
        sources: [
        { title: "UIDAI myAadhaar", url: "https://myaadhaar.uidai.gov.in", icon: "🪪" },
        { title: "UIDAI Helpdesk", url: "https://myaadhaar.uidai.gov.in", icon: "🪪" }
      ],
        proTips: [
        "Details exact proof document jaise hi fill karo",
        "Photo aur scan clear hona chahiye warna reject ho sakta hai",
        "Submit se pehle spelling double-check karo"
      ],
        faqs: [
        { q: "Aadhaar Address Update correction online ho jayegi?", a: "Haan, agar portal correction allow karta hai aur valid proof docs available hain." },
        { q: "Kitni fee lagti hai?", a: "Fee portal aur state ke hisaab se different hoti hai; confirmation page par exact amount dikhega." },
        { q: "Proof document kaunsa best hai?", a: "Government-issued document jisme correct details already present ho, woh best hota hai." },
        { q: "Update ke baad old copy invalid ho jaati hai?", a: "Usually updated version use karna chahiye; old copy sirf reference ke liye rakho." }
      ],
        related: [
        { title: "Aadhaar Mobile Update", slug: "aadhaar-mobile-update", category: "document" },
        { title: "PAN Aadhaar Link", slug: "pan-aadhaar-link", category: "document" }
      ],
        keywords: [
        "aadhaar address update",
        "aadhaar address change",
        "uidai address correction",
        "aadhaar current address"
      ],
        variants: [
        "aadhaar address change online",
        "aadhar address update",
        "aadhaar ghar ka address",
        "aadhaar update address"
      ]
      },
      {
        slug: "aadhaar-biometric-update",
        category: "document",
        metaTitle: "Aadhaar Biometric Update Guide (2026) | JharForm",
        metaDescription: "Fingerprint ya iris update karna hai? Aadhaar biometric update ka step-by-step guide.",
        h1: "Aadhaar Biometric Update Kaise Kare",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Medium",
        description: "Aadhaar Biometric Update expire, pending, ya update chahiye — official portal pe renewal / reissue ka simple process.",
        steps: [
        { title: "UIDAI renewal page kholo", detail: "Official portal pe renewal / reissue / update service select karo." },
        { title: "Current details verify karo", detail: "Existing Aadhaar Biometric Update number, DOB, address, aur mobile verify karo." },
        { title: "Required documents upload karo", detail: "Photo, ID proof, address proof, medical certificate ya supporting docs jo required hain, upload karo." },
        { title: "Fee pay karo", detail: "Renewal/reissue fee online pay karo aur receipt save karo." },
        { title: "Slot / appointment book karo", detail: "Jahan biometric, verification, ya office visit required ho wahan appointment slot book karo." },
        { title: "Receipt aur status track karo", detail: "Receipt, ARN/SRN number save karke status track karo." }
      ],
        screenshots: [],
        sources: [
        { title: "UIDAI", url: "https://myaadhaar.uidai.gov.in", icon: "🪪" },
        { title: "Aadhaar Seva Kendra", url: "https://myaadhaar.uidai.gov.in", icon: "🪪" }
      ],
        proTips: [
        "Expiry se pehle kaam start karo taaki late fee na lage",
        "Medical/biometric docs pehle se ready rakho",
        "Receipt aur ARN number note karna mat bhoolo"
      ],
        faqs: [
        { q: "Aadhaar Biometric Update renewal overdue ho gaya to kya hoga?", a: "Late fee, extra verification, ya fresh application lag sakti hai." },
        { q: "Renewal ke liye office jana zaroori hai?", a: "Kuch services mein online hi ho jata hai, kuch mein biometric/visit required hota hai." },
        { q: "Old number aur details change ho sakte hain?", a: "Haan, lekin proof documents ke saath hi update hota hai." },
        { q: "Renewed copy kab milti hai?", a: "Status approved hone ke baad portal download ya postal delivery ke through milti hai." }
      ],
        related: [
        { title: "Aadhaar Mobile Update", slug: "aadhaar-mobile-update", category: "document" },
        { title: "Aadhaar Address Update", slug: "aadhaar-address-update", category: "document" }
      ],
        keywords: [
        "aadhaar biometric update",
        "fingerprint update aadhaar",
        "uidai biometric",
        "aadhaar iris update"
      ],
        variants: [
        "aadhaar fingerprint update",
        "biometric correction aadhaar",
        "aadhar biometric update",
        "aadhaar biometric fix"
      ]
      },
      {
        slug: "senior-citizen-card",
        category: "document",
        metaTitle: "Senior Citizen Card Apply Online (2026) | JharForm",
        metaDescription: "Senior citizen card, discount card, ya welfare benefits ke liye apply ka guide.",
        h1: "Senior Citizen Card Kaise Banwaye",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Senior Citizen Card apply karna hai — official portal, documents, aur verification ka complete Hinglish guide.",
        steps: [
        { title: "State Social Welfare Portal pe online application karo", detail: "Official portal open karke Senior Citizen Card apply form fill karo." },
        { title: "Eligibility aur category select karo", detail: "Category, income group, family members, area, ya purpose sahi select karo." },
        { title: "Documents upload karo", detail: "Photo, Aadhaar, address proof, income proof, caste proof, age proof jo required ho upload karo." },
        { title: "Verification complete karo", detail: "OTP, biometric, field verification, ya office verification jo bhi applicable ho complete karo." },
        { title: "Application ID save karo", detail: "Receipt / application number note karo. Yehi later status check mein kaam aayega." },
        { title: "Status follow up karo", detail: "Portal, office, or helpline pe status check karke approval/download karo." }
      ],
        screenshots: [],
        sources: [
        { title: "State Social Welfare Portal", url: "https://serviceonline.gov.in", icon: "🏛️" },
        { title: "District Social Welfare Office", url: "https://serviceonline.gov.in", icon: "🏛️" }
      ],
        proTips: [
        "Portal login ke baad form ko save draft mein rakh sakte ho",
        "Aadhaar-linked mobile hamesha active rakho",
        "Proof docs ka size aur format pehle check karo"
      ],
        faqs: [
        { q: "Senior Citizen Card ke liye kaunse documents chahiye?", a: "Aadhaar, photo, address proof, aur issue-specific supporting documents usually chahiye hote hain." },
        { q: "Online apply karne ke baad kya karna hota hai?", a: "Application ID save karke status track aur office follow up karna hota hai." },
        { q: "Application reject ho gaya to reapply kar sakte hain?", a: "Haan, reason correct karke reapply kar sakte hain." },
        { q: "App ya portal ka official copy use karna safe hai?", a: "Haan, hamesha official portal ya DigiLocker copy use karo." }
      ],
        related: [
        { title: "Disability Certificate", slug: "disability-certificate", category: "document" },
        { title: "Widow Certificate", slug: "widow-certificate", category: "document" }
      ],
        keywords: [
        "senior citizen card",
        "old age card",
        "senior citizen certificate",
        "senior citizen benefits"
      ],
        variants: [
        "senior citizen apply",
        "old age card online",
        "senior citizen id",
        "senior citizen praman patra"
      ]
      },
      {
        slug: "disability-certificate",
        category: "document",
        metaTitle: "Disability Certificate Apply Online Guide (2026) | JharForm",
        metaDescription: "Disability certificate / benchmark disability certificate apply karna hai? Medical board process ka guide.",
        h1: "Disability Certificate Kaise Banwaye",
        lastUpdated: "May 2026",
        readingTime: "6 min",
        difficulty: "Medium",
        description: "Disability Certificate apply karna hai — official portal, documents, aur verification ka complete Hinglish guide.",
        steps: [
        { title: "Disability Portal / Hospital Board pe online application karo", detail: "Official portal open karke Disability Certificate apply form fill karo." },
        { title: "Eligibility aur category select karo", detail: "Category, income group, family members, area, ya purpose sahi select karo." },
        { title: "Documents upload karo", detail: "Photo, Aadhaar, address proof, income proof, caste proof, age proof jo required ho upload karo." },
        { title: "Verification complete karo", detail: "OTP, biometric, field verification, ya office verification jo bhi applicable ho complete karo." },
        { title: "Application ID save karo", detail: "Receipt / application number note karo. Yehi later status check mein kaam aayega." },
        { title: "Status follow up karo", detail: "Portal, office, or helpline pe status check karke approval/download karo." }
      ],
        screenshots: [],
        sources: [
        { title: "Disability Portal / Hospital Board", url: "https://services.india.gov.in", icon: "🏛️" },
        { title: "Medical Board", url: "https://services.india.gov.in", icon: "🏛️" }
      ],
        proTips: [
        "Portal login ke baad form ko save draft mein rakh sakte ho",
        "Aadhaar-linked mobile hamesha active rakho",
        "Proof docs ka size aur format pehle check karo"
      ],
        faqs: [
        { q: "Disability Certificate ke liye kaunse documents chahiye?", a: "Aadhaar, photo, address proof, aur issue-specific supporting documents usually chahiye hote hain." },
        { q: "Online apply karne ke baad kya karna hota hai?", a: "Application ID save karke status track aur office follow up karna hota hai." },
        { q: "Application reject ho gaya to reapply kar sakte hain?", a: "Haan, reason correct karke reapply kar sakte hain." },
        { q: "App ya portal ka official copy use karna safe hai?", a: "Haan, hamesha official portal ya DigiLocker copy use karo." }
      ],
        related: [
        { title: "Senior Citizen Card", slug: "senior-citizen-card", category: "document" },
        { title: "Widow Certificate", slug: "widow-certificate", category: "document" }
      ],
        keywords: [
        "disability certificate",
        "viklang certificate",
        "benchmark disability",
        "medical disability certificate"
      ],
        variants: [
        "disability praman patra",
        "viklang certificate online",
        "medical board certificate",
        "disability card"
      ]
      },
      {
        slug: "widow-certificate",
        category: "document",
        metaTitle: "Widow Certificate Apply Guide (2026) | JharForm",
        metaDescription: "Widow certificate apply karna hai? State e-district ya welfare office process ka guide.",
        h1: "Widow Certificate Kaise Banwaye",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Easy",
        description: "Widow Certificate apply karna hai — official portal, documents, aur verification ka complete Hinglish guide.",
        steps: [
        { title: "State e-District / Welfare Portal pe online application karo", detail: "Official portal open karke Widow Certificate apply form fill karo." },
        { title: "Eligibility aur category select karo", detail: "Category, income group, family members, area, ya purpose sahi select karo." },
        { title: "Documents upload karo", detail: "Photo, Aadhaar, address proof, income proof, caste proof, age proof jo required ho upload karo." },
        { title: "Verification complete karo", detail: "OTP, biometric, field verification, ya office verification jo bhi applicable ho complete karo." },
        { title: "Application ID save karo", detail: "Receipt / application number note karo. Yehi later status check mein kaam aayega." },
        { title: "Status follow up karo", detail: "Portal, office, or helpline pe status check karke approval/download karo." }
      ],
        screenshots: [],
        sources: [
        { title: "State e-District / Welfare Portal", url: "https://serviceonline.gov.in", icon: "🏛️" },
        { title: "Women & Child Welfare Office", url: "https://serviceonline.gov.in", icon: "🏛️" }
      ],
        proTips: [
        "Portal login ke baad form ko save draft mein rakh sakte ho",
        "Aadhaar-linked mobile hamesha active rakho",
        "Proof docs ka size aur format pehle check karo"
      ],
        faqs: [
        { q: "Widow Certificate ke liye kaunse documents chahiye?", a: "Aadhaar, photo, address proof, aur issue-specific supporting documents usually chahiye hote hain." },
        { q: "Online apply karne ke baad kya karna hota hai?", a: "Application ID save karke status track aur office follow up karna hota hai." },
        { q: "Application reject ho gaya to reapply kar sakte hain?", a: "Haan, reason correct karke reapply kar sakte hain." },
        { q: "App ya portal ka official copy use karna safe hai?", a: "Haan, hamesha official portal ya DigiLocker copy use karo." }
      ],
        related: [
        { title: "Senior Citizen Card", slug: "senior-citizen-card", category: "document" },
        { title: "Disability Certificate", slug: "disability-certificate", category: "document" }
      ],
        keywords: [
        "widow certificate",
        "vidhwa certificate",
        "widow pension certificate",
        "widow proof"
      ],
        variants: [
        "widow praman patra",
        "vidhwa certificate online",
        "widow status certificate",
        "widow welfare certificate"
      ]
      },
      {
        slug: "pension-life-certificate",
        category: "document",
        metaTitle: "Pension Life Certificate / Jeevan Pramaan Guide (2026) | JharForm",
        metaDescription: "Pension life certificate submit karna hai? Jeevan Pramaan online process aur biometric guide.",
        h1: "Pension Life Certificate Kaise Banaye",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Medium",
        description: "Life Certificate expire, pending, ya update chahiye — official portal pe renewal / reissue ka simple process.",
        steps: [
        { title: "Jeevan Pramaan renewal page kholo", detail: "Official portal pe renewal / reissue / update service select karo." },
        { title: "Current details verify karo", detail: "Existing Life Certificate number, DOB, address, aur mobile verify karo." },
        { title: "Required documents upload karo", detail: "Photo, ID proof, address proof, medical certificate ya supporting docs jo required hain, upload karo." },
        { title: "Fee pay karo", detail: "Renewal/reissue fee online pay karo aur receipt save karo." },
        { title: "Slot / appointment book karo", detail: "Jahan biometric, verification, ya office visit required ho wahan appointment slot book karo." },
        { title: "Receipt aur status track karo", detail: "Receipt, ARN/SRN number save karke status track karo." }
      ],
        screenshots: [],
        sources: [
        { title: "Jeevan Pramaan", url: "https://jeevanpramaan.gov.in", icon: "👴" },
        { title: "Pension Office", url: "https://jeevanpramaan.gov.in", icon: "👴" }
      ],
        proTips: [
        "Expiry se pehle kaam start karo taaki late fee na lage",
        "Medical/biometric docs pehle se ready rakho",
        "Receipt aur ARN number note karna mat bhoolo"
      ],
        faqs: [
        { q: "Life Certificate renewal overdue ho gaya to kya hoga?", a: "Late fee, extra verification, ya fresh application lag sakti hai." },
        { q: "Renewal ke liye office jana zaroori hai?", a: "Kuch services mein online hi ho jata hai, kuch mein biometric/visit required hota hai." },
        { q: "Old number aur details change ho sakte hain?", a: "Haan, lekin proof documents ke saath hi update hota hai." },
        { q: "Renewed copy kab milti hai?", a: "Status approved hone ke baad portal download ya postal delivery ke through milti hai." }
      ],
        related: [
        { title: "Senior Citizen Card", slug: "senior-citizen-card", category: "document" },
        { title: "Widow Certificate", slug: "widow-certificate", category: "document" }
      ],
        keywords: [
        "life certificate pension",
        "jeevan pramaan",
        "pension life certificate",
        "digital life certificate"
      ],
        variants: [
        "pension life certificate online",
        "jeevan pramaan certificate",
        "life certificate submit",
        "pension proof"
      ]
      },
      {
        slug: "caste-certificate-reissue",
        category: "document",
        metaTitle: "Caste Certificate Reissue / Duplicate Guide (2026) | JharForm",
        metaDescription: "Caste certificate lost ho gaya ya damaged hai? Reissue aur duplicate ka guide.",
        h1: "Caste Certificate Reissue Kaise Kare",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Caste Certificate expire, pending, ya update chahiye — official portal pe renewal / reissue ka simple process.",
        steps: [
        { title: "JharSewa / e-District renewal page kholo", detail: "Official portal pe renewal / reissue / update service select karo." },
        { title: "Current details verify karo", detail: "Existing Caste Certificate number, DOB, address, aur mobile verify karo." },
        { title: "Required documents upload karo", detail: "Photo, ID proof, address proof, medical certificate ya supporting docs jo required hain, upload karo." },
        { title: "Fee pay karo", detail: "Renewal/reissue fee online pay karo aur receipt save karo." },
        { title: "Slot / appointment book karo", detail: "Jahan biometric, verification, ya office visit required ho wahan appointment slot book karo." },
        { title: "Receipt aur status track karo", detail: "Receipt, ARN/SRN number save karke status track karo." }
      ],
        screenshots: [],
        sources: [
        { title: "JharSewa / e-District", url: "https://jharsewa.jharkhand.gov.in", icon: "🏛️" },
        { title: "Tehsil / Block Office", url: "https://jharsewa.jharkhand.gov.in", icon: "🏛️" }
      ],
        proTips: [
        "Expiry se pehle kaam start karo taaki late fee na lage",
        "Medical/biometric docs pehle se ready rakho",
        "Receipt aur ARN number note karna mat bhoolo"
      ],
        faqs: [
        { q: "Caste Certificate renewal overdue ho gaya to kya hoga?", a: "Late fee, extra verification, ya fresh application lag sakti hai." },
        { q: "Renewal ke liye office jana zaroori hai?", a: "Kuch services mein online hi ho jata hai, kuch mein biometric/visit required hota hai." },
        { q: "Old number aur details change ho sakte hain?", a: "Haan, lekin proof documents ke saath hi update hota hai." },
        { q: "Renewed copy kab milti hai?", a: "Status approved hone ke baad portal download ya postal delivery ke through milti hai." }
      ],
        related: [
        { title: "Caste Certificate Pending", slug: "caste-certificate-pending", category: "document" },
        { title: "Income Certificate Expired", slug: "income-certificate-expired", category: "document" }
      ],
        keywords: [
        "caste certificate reissue",
        "caste certificate duplicate",
        "jati praman patra duplicate",
        "caste certificate lost"
      ],
        variants: [
        "caste certificate dubara",
        "jati certificate lost",
        "caste certificate print",
        "caste certificate copy"
      ]
      },
    ]
  };
