import type { Category } from "../types";

export const paymentCategory: Category = {
    slug: "payment",
    name: "Payment Problems",
    icon: "💸",
    description: "UPI payment failed, refund pending, transaction stuck — India ke sabse common payment problems ka step-by-step solution.",
    metaTitle: "Payment Problems — UPI, PhonePe, GPay Fix | JharForm Problems",
    metaDescription: "UPI payment failed, refund pending, transaction stuck — India ke sabse common payment problems ka step-by-step solution.",
    problems: [
      {
        slug: "upi-payment-pending",
        category: "payment",
        metaTitle: "UPI Payment Pending? Paise Kab Aayenge — Complete Guide (2026) | JharForm",
        metaDescription: "UPI se payment fail hua par paise kat gaye? PhonePe, GPay, Paytm payment failed? Samjho kya karna chahiye aur paise kab wapas aate hain.",
        h1: "UPI Payment Failed/Pending — Paise Wapas Kab Aayenge?",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Easy",
        description: "UPI se payment karte waqt 'Transaction Failed' ya 'Pending' dikhta hai par account se paise kat jaate hain — yeh bank server issue, network problem, ya UPI infrastructure slowness ki wajah se hota hai. 95% cases mein auto-reversal hoti hai.",
        steps: [
          { title: "2-3 minute wait karo", detail: "Banks automatic reversal karte hain. Panic mat karo — pehle 2-3 minute wait karo." },
          { title: "Transaction status check karo", detail: "UPI app mein History/Transactions section mein jao. Exact status dekho: Pending, Failed, ya Reversed." },
          { title: "Bank account balance check karo", detail: "Bank app ya netbanking mein actual balance check karo — debit hua hai ya nahi confirm karo." },
          { title: "Receiver se confirm karo", detail: "Agar debit hua hai to receiver se puchho — unhe credit hua ya nahi. Sometimes delay hoti hai." },
          { title: "UPI app mein Raise Dispute karo", detail: "Transaction details mein jaao. 'Raise Dispute' ya 'Report an Issue' button pe complaint register karo." },
          { title: "Bank customer care pe call karo", detail: "PhonePe: 80-68727374, GPay: 1800-419-0157, Paytm: 0120-4456-456. Transaction reference number ready rakho." },
          { title: "NPCI helpline use karo", detail: "NPCI helpline: 1800-120-1740 (toll free). Ya pgportal.gov.in pe grievance file karo." }
        ],
        screenshots: [
          { caption: "PhonePe Payment Pending screen showing Rs. 249 pending at bank with timer, UPI reference number, and Check Status button", alt: "PhonePe payment pending screen showing transaction pending at bank with dispute option", type: "phone", mockupType: "phonepe-payment-pending" },
          { caption: "GPay transaction details screen showing failed payment to Swiggy with bank declined reason and try again button", alt: "Google Pay payment unsuccessful screen showing failed transaction with bank declined reason and try again button", type: "phone", mockupType: "gpay-failed-transaction" }
        ],
        sources: [
          { title: "NPCI UPI Guidelines", url: "https://www.npci.org.in/what-we-do/upi/product-overview", icon: "📊" },
          { title: "RBI UPI Customer Grievance", url: "https://www.rbi.org.in/Scripts/FAQView.aspx?Id=127", icon: "🏦" }
        ],
        proTips: ["Screenshot lo turant — transaction ID note karo", "5 working days mein refund auto-credit hota hai normally", "Bank holidays pe zyada delay hoti hai"],
        faqs: [
          { q: "Paise kat gaye par failed dikha — kya karu?", a: "2-3 working days wait karo. Auto-reversal hoti hai. 5 days mein nahi aaya to bank se dispute raise karo." },
          { q: "PhonePe payment failed refund kitne din mein?", a: "Usually 5-7 working days. PhonePe app > Help > Transaction not successful > Raise issue se track karo." },
          { q: "Weekend pe failed transaction ka refund kab?", a: "Bank working days count hote hain — 5 working days matlab actually 7-8 calendar days ho sakte hain." },
          { q: "Refund nahi aaya to consumer forum kaise?", a: "consumerhelpline.gov.in pe online complaint darj karo. Bank naam, transaction ID, amount ke saath." }
        ],
        related: [
          { title: "Refund Nahi Mila", slug: "refund-nahi-mila", category: "payment" },
          { title: "OTP Nahi Aa Raha", slug: "otp-nahi-aa-raha", category: "mobile" }
        ],
        keywords: ["upi payment pending", "upi payment failed", "phonepe payment failed", "gpay transaction failed"],
        variants: ["upi payment nahi hua", "paise kat gaye nahi mile", "phonepe se paise nahi gaye", "gpay failed", "paytm payment pending", "upi pe fail"]
      },
      {
        slug: "refund-nahi-mila",
        category: "payment",
        metaTitle: "Refund Nahi Aaya? Kitne Din Lagte Hain — Complete Guide (2026) | JharForm",
        metaDescription: "Online shopping ya UPI ka refund pending hai? Amazon, Flipkart refund kitne din mein aata hai? Yeh guide se refund track karo aur complaint karo.",
        h1: "Refund Kab Aayega — UPI/Debit/Credit Card Complete Guide",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Easy",
        description: "Online shopping ya UPI payment ka refund pending hai — har bank aur payment method ka alag timeline hota hai. UPI mein 5 days, Debit Card mein 7-10 days, Credit Card mein 5-7 days normally refund aata hai.",
        steps: [
          { title: "Order/Transaction ID save karo", detail: "Cancellation confirmation email mein order ID ya transaction reference number note karo." },
          { title: "Platform pe status check karo", detail: "Amazon: Orders > Order Details > Refund Status. Flipkart: My Orders > Return/Refund." },
          { title: "Timeline yaad rakho", detail: "UPI: 5 working days. Debit Card: 7-10 working days. Credit Card: 5-7 working days. Net Banking: 3-5 working days." },
          { title: "Bank helpline call karo", detail: "Bank se confirm karo ki refund initiate hua hai ya nahi. Transaction reference do." },
          { title: "Platform customer care contact karo", detail: "Amazon: 1800-3000-9009, Flipkart: 1800-202-9898, Myntra: 1800-102-9400." },
          { title: "NPCI portal pe complaint karo", detail: "15+ din ho gaye: npci.org.in > Grievance pe complaint darj karo." },
          { title: "Consumer Forum mein complaint karo", detail: "30+ din ho gaye: consumerhelpline.gov.in pe online complaint. Sab proofs attach karo." }
        ],
        screenshots: [
          { caption: "Amazon Orders page showing Refund Initiated with expected date in green", alt: "Amazon orders page showing refund initiated status with expected date", type: "browser", mockupType: "amazon-refund" },
          { caption: "Bank passbook statement showing REFUND credit entry with reference number", alt: "Bank passbook statement showing refund credit entry with reference number", type: "phone", mockupType: "bank-passbook" }
        ],
        sources: [
          { title: "RBI Consumer Education: Refunds", url: "https://www.rbi.org.in/commonman/English/Scripts/FAQs.aspx", icon: "🏦" }
        ],
        proTips: ["Refund initiation email/SMS save karo", "Bank statement mein REFUND ya merchant name se search karo", "Credit card pe refund statement mein aane mein time lagta hai"],
        faqs: [
          { q: "Amazon refund kitne din mein aata hai?", a: "3-5 business days mein bank account mein. Credit card pe 5-7 days. Debit card pe 3-5 days." },
          { q: "Refund show kar raha hai par account mein nahi aaya?", a: "Bank processing mein 24 hours aur lag sakti hai. Kal dobara check karo. 48 hours baad bhi nahi to bank contact karo." },
          { q: "Refund wrong account mein gaya?", a: "Turant platform customer care contact karo aur bank branch mein jao. Written complaint do." }
        ],
        related: [
          { title: "UPI Payment Pending", slug: "upi-payment-pending", category: "payment" },
          { title: "OTP Nahi Aa Raha", slug: "otp-nahi-aa-raha", category: "mobile" }
        ],
        keywords: ["refund nahi mila", "refund kab aayega", "amazon refund pending", "flipkart refund"],
        variants: ["refund nahi aaya", "paise wapas nahi aaye", "return ka paise nahi mila", "amazon ka refund", "online shopping refund"]
      },
      {
        slug: "atm-card-blocked-ho-gaya",
        category: "payment",
        metaTitle: "ATM Card Blocked Ho Gaya? Unblock Karne Ka Tarika (2026) | JharForm",
        metaDescription: "ATM card blocked ho gaya? Wrong PIN 3 baar, suspicious transaction, ya bank ne block kar diya? Card unblock karne ka step-by-step tarika.",
        h1: "ATM Card Blocked — Unblock Karne Ka Complete Tarika",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "ATM card PIN 3 baar galat dalne se automatic block ho jaata hai. Suspicious transaction detect hone pe bhi bank block kar deta hai. Debit card unblock karne ke liye bank branch jana, net banking se PIN reset, ya customer care se unblock karwana padta hai. Different banks ka alag process hota hai lekin zyaadatar online unblock ho jaata hai.",
        steps: [
          { title: "Bank customer care pe call karo", detail: "Debit card ke peeche toll-free number hota hai. SBI: 1800 11 2211, HDFC: 1800 202 6161, ICICI: 1860 120 7777. Card number aur registered mobile se verify hoga." },
          { title: "Net banking se PIN reset karo", detail: "Bank net banking login karo. Cards section > Debit Card > PIN Reset. OTP aayega registered mobile pe. Naya PIN set karo. Card unblock ho jaayega." },
          { title: "Bank branch mein jao (instant fix)", detail: "Passbook aur ID proof le jao. Customer service desk pe card unblock request do. 10-15 minute mein unblock ho jaata hai." },
          { title: "Mobile banking app se unblock karo", detail: "SBI YONO, HDFC PayZapp, ICICI iMobile — Cards section mein 'Unblock Card' ya 'Card Services' option hota hai. OTP verify karke unblock." },
          { title: "Card permanently block ho gaya ho to replacement mangao", detail: "Net banking ya branch se new card request karo. Charges: Rs. 100-300. 7-10 working days mein naya card aa jaata hai." }
        ],
        screenshots: [
          { caption: "SBI YONO app Cards section showing debit card ending 4821 with Blocked status badge, Unblock Card green button, aur toll-free helpline number 1800 11 2211", alt: "SBI YONO mobile banking app showing debit card with blocked status badge and unblock card button", type: "phone", mockupType: "sbi-card-blocked" },
          { caption: "SBI net banking card services page showing blocked debit card, OTP unblock option, PIN reset, and branch visit details", alt: "SBI net banking card services showing blocked debit card unblock options and OTP flow", type: "browser", mockupType: "sbi-netbanking-blocked" }
        ],
        sources: [
          { title: "SBI Card Services", url: "https://www.sbicard.com/en/personal/help/contact-us.page", icon: "🏦" },
          { title: "RBI Customer Grievance", url: "https://www.rbi.org.in/commonman/English/Scripts/ContactUs.aspx", icon: "🏦" }
        ],
        proTips: ["PIN hamesha yaad rakho — phone mein encrypted note mein safe rakho", "Card block hone pe turant call karo — 24 hours mein unblock easy hota hai", "International transactions ke liye alag PIN mat rakho — confuse hote hain"],
        faqs: [
          { q: "Wrong PIN kitni baar dalne se block hota hai?", a: "3 consecutive wrong attempts se automatic block. 24 hours baad kuch banks mein auto-unblock hota hai. Lekin safe side pe reset karwao." },
          { q: "Card block se online transactions bhi band?", a: "Haan — debit card block hone se ATM, POS, aur online (Netflix, Amazon) sab band ho jaate hain. UPI alag hota hai — woh chalta rahega agar UPI PIN alag hai." },
          { q: "New card ka kitna charge lagta hai?", a: "SBI: Rs. 204, HDFC: Rs. 200, ICICI: Rs. 150-250. Premium cards mein zyada. First replacement free hota hai kuch banks mein." },
          { q: "Card lost nahi hai sirf block hua hai — branch jaana zaroori?", a: "Nahi — net banking ya customer care se unblock ho jaata hai. Branch sirf jab online option na ho ya urgent ho." }
        ],
        related: [
          { title: "UPI Payment Pending", slug: "upi-payment-pending", category: "payment" },
          { title: "Refund Nahi Mila", slug: "refund-nahi-mila", category: "payment" }
        ],
        keywords: ["atm card blocked", "debit card blocked", "card unblock kaise kare", "atm pin block"],
        variants: ["atm card block ho gaya", "debit card block ho gaya", "card unblock kaise kare", "atm pin 3 baar galat", "card blocked by bank"]
      },
      {
        slug: "upi-pin-bhool-gaya-reset",
        category: "payment",
        metaTitle: "UPI PIN Bhool Gaya? Reset Karne Ka Tarika (2026) | JharForm",
        metaDescription: "PhonePe, GPay, Paytm ya bank app ka UPI PIN bhool gaya? UPI PIN reset karne ka step-by-step guide — bank account se linked mobile chahiye.",
        h1: "UPI PIN Bhool Gaya — Reset Karne Ka Complete Guide",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "PhonePe, Google Pay, Paytm, ya bank app ka UPI PIN bhool gaya hai — payment nahi ho rahi, 'Wrong UPI PIN' aa raha hai, ya PIN enter karne ka option hi nahi aa raha. UPI PIN reset karne ke liye bank account se linked mobile pe OTP aata hai aur debit card details verify hote hain. Sab UPI apps mein same process hota hai.",
        steps: [
          { title: "UPI app kholo > Profile > Bank Accounts", detail: "PhonePe: Profile > Bank Accounts. GPay: Profile > Bank Accounts. Paytm: UPI Money Transfer > Bank Accounts." },
          { title: "Bank account select karo > Reset UPI PIN", detail: "Bank account card pe click karo. 'Forgot UPI PIN' ya 'Reset PIN' option dikhega. Tap karo." },
          { title: "Debit card last 6 digits aur expiry daalo", detail: "Debit card ke aage ke last 6 digits aur MM/YY expiry date daalo. Card physically hona zaroori hai." },
          { title: "OTP verify karo (registered mobile pe)", detail: "Bank se OTP aayega registered mobile pe. Enter karo. OTP 10 minute valid rehta hai." },
          { title: "Naya UPI PIN set karo", detail: "4-6 digit ka naya PIN banao. Confirm karo. PIN kabhi birthdate, phone number, ya simple sequence (1234, 0000) mat rakho." },
          { title: "Test transaction karo", detail: "Rs. 1 ka UPI payment karo kisi trusted contact ko. Successful hua to PIN reset complete hai." }
        ],
        screenshots: [
          { caption: "PhonePe Bank Accounts page showing Reset UPI PIN option for linked SBI account", alt: "PhonePe app bank accounts section showing reset UPI PIN option for linked bank account", type: "phone", mockupType: "phonepe-transaction" },
          { caption: "PhonePe UPI PIN reset screen showing last 6 digits of debit card expiry date entry, OTP on registered mobile, and new 4-digit UPI PIN set confirmation, aur same PIN multiple apps mein rakh sakte hain note", alt: "PhonePe UPI PIN reset flow showing debit card details and OTP verification", type: "phone", mockupType: "upi-pin-reset-screen" }
        ],
        sources: [
          { title: "NPCI UPI Guidelines", url: "https://www.npci.org.in/what-we-do/upi/product-overview", icon: "📈" }
        ],
        proTips: ["UPI PIN hamesha alag rakho — phone lock PIN se alag", "Debit card details phone mein mat save karo — security risk", "Ek hi UPI PIN multiple apps mein same rakh sakte hain — convenient aur safe"],
        faqs: [
          { q: "UPI PIN reset ke liye debit card zaroori hai?", a: "Haan — without debit card details UPI PIN reset nahi hota. Aadhaar OTP se bhi ho sakta hai kuch banks mein (SBI, HDFC)." },
          { q: "Debit card nahi hai to UPI PIN reset kaise?", a: "Bank branch jao. UPI PIN reset karne ki request do. Ya net banking se UPI section mein reset option try karo." },
          { q: "UPI PIN kitni baar galat dalne se block hota hai?", a: "3 consecutive wrong attempts se block. 24 hours baad auto-unblock. Ya reset karke naya PIN banao." },
          { q: "Same UPI PIN multiple apps mein rakhna safe hai?", a: "Haan — UPI PIN device-specific nahi hai. Same PIN PhonePe, GPay, Paytm sab mein chalega. Convenience ke liye same rakho." }
        ],
        related: [
          { title: "UPI Payment Pending", slug: "upi-payment-pending", category: "payment" },
          { title: "ATM Card Blocked Ho Gaya", slug: "atm-card-blocked-ho-gaya", category: "payment" }
        ],
        keywords: ["upi pin bhool gaya", "upi pin reset", "phonepe pin reset", "gpay upi pin forgot"],
        variants: ["upi pin bhool gaya", "phonepe pin reset kaise kare", "gpay pin bhool gaya", "paytm upi pin reset", "upi pin kaise change kare"]
      },
      {
        slug: "online-shopping-fraud-ho-gaya",
        category: "payment",
        metaTitle: "Online Shopping Fraud Ho Gaya? Kya Karein — Complete Guide (2026) | JharForm",
        metaDescription: "Online shopping fraud ho gaya? Fake website se order kiya, product nahi aaya, ya galat product aa gaya? Paise wapas aur complaint karne ka step-by-step guide.",
        h1: "Online Shopping Fraud Ho Gaya — Paise Wapas Aur Complaint Kaise Kare",
        lastUpdated: "May 2026",
        readingTime: "6 min",
        difficulty: "Medium",
        description: "Online shopping fraud ho gaya hai — fake website se payment kar diya product nahi aaya, Facebook/Instagram seller ne block kar diya payment lene ke baad, ya product bilkul alag aa gaya jo order kiya tha. India mein online fraud cases bahut badh rahe hain. Turant action lena zaroori hai — payment reversal, platform complaint, cyber crime report, aur consumer forum — sab options cover karta hai yeh guide.",
        steps: [
          { title: "Sab screenshots aur proof collect karo", detail: "Website screenshot, payment receipt, chat screenshots, product photo (agar galat aaya), seller details — sab ek folder mein save karo. Yeh evidence court aur police ke liye zaroori hai." },
          { title: "Bank/payment app se transaction dispute karo", detail: "Net banking: Unauthorised Transaction report karo. UPI app: Transaction > Report Issue > Fraud. Credit card: Chargeback request karo bank ko. 24-48 hours mein temporary reversal milta hai." },
          { title: "Platform pe complaint raise karo", detail: "Amazon/Flipkart: Order > Return/Refund > 'Item not received' ya 'Wrong item'. Facebook Marketplace: Report Seller. Instagram: Report Account. Platform ka buyer protection activate karo." },
          { title: "Cyber Crime Portal pe complaint darj karo", detail: "cybercrime.gov.in pe jao. Citizen Financial Cyber Fraud Reporting System. Transaction details, screenshots, aur seller info daalo. Acknowledgement number milega." },
          { title: "Local police station mein FIR karwao", detail: "Cyber Crime police station ya local thana mein jao. Online fraud IPC sections 420, 406, 66D IT Act ke under hota hai. FIR ka copy rakho — bank aur court ke liye." },
          { title: "Consumer Forum mein complaint karo", detail: "consumerhelpline.gov.in pe online complaint. Amount ke hisaab se District/State/National Consumer Forum. Rs. 100-500 court fee. Lawyer ki zaroorat nahi — self-represent kar sakte hain." },
          { title: "Social media pe seller expose karo (cautiously)", detail: "Twitter, Instagram, Facebook pe seller tag karo with proofs. Public pressure se kabhi kabhi seller refund deta hai. Defamation se bacho — sirf facts share karo." }
        ],
        screenshots: [
          { caption: "Cyber Crime Portal homepage showing Financial Fraud Reporting option with complaint registration form", alt: "Cyber crime gov in portal showing financial fraud reporting system with complaint registration", type: "browser", mockupType: "upi-dispute" },
          { caption: "National Cyber Crime Portal showing report financial fraud form with category online shopping fraud sub-category, amount lost input, date of incident, state selection, helpline 1930 banner, and file complaint button with document upload note", alt: "National cyber crime portal financial fraud complaint form with category and amount fields", type: "browser", mockupType: "cyber-crime-complaint" }
        ],
        sources: [
          { title: "National Cyber Crime Portal", url: "https://cybercrime.gov.in", icon: "🚨" },
          { title: "Consumer Helpline", url: "https://consumerhelpline.gov.in", icon: "🏢" },
          { title: "RBI: Safe Digital Banking", url: "https://www.rbi.org.in/commonman/English/Scripts/DigitalBanking.aspx", icon: "🏦" }
        ],
        proTips: ["COD (Cash on Delivery) prefer karo — new websites aur unknown sellers se", "Website ka URL check karo — https:// hai ya nahi, padlocks icon dikhta hai ya nahi", "Unbelievable discounts (90% off iPhone) = 100% fraud — avoid karo"],
        faqs: [
          { q: "Payment kar diya par order confirmation nahi aaya — fraud hai?", a: "Haan — genuine sites turant confirmation email/SMS bhejti hain. 1 ghante mein nahi aaya toh immediately bank se dispute karo." },
          { q: "Facebook/Instagram seller ne block kar diya — kya karu?", a: "Cyber Crime portal pe complaint karo. UPI ID se transaction trace hoti hai. Bank account freeze ho sakta hai police ke order se. Screenshot + UPI ID + phone number — sab details ke saath report karo." },
          { q: "Chargeback kitne din mein process hota hai?", a: "Credit card: 30-60 days. Debit card/UPI: 45-90 days. Temporary credit 24-48 hours mein milti hai. Permanent decision investigation ke baad." },
          { q: "Fraud seller ka bank account kaise pata chalega?", a: "Cyber Crime police ke paas authority hai bank se account details maangne ki. Aap directly nahi pata kar sakte. Cyber Crime portal pe complaint se yeh process start hota hai." }
        ],
        related: [
          { title: "UPI Payment Pending", slug: "upi-payment-pending", category: "payment" },
          { title: "Refund Nahi Mila", slug: "refund-nahi-mila", category: "payment" }
        ],
        keywords: ["online shopping fraud", "online fraud complaint", "ecommerce fraud", "fake website shopping"],
        variants: ["online shopping fraud ho gaya", "fake website se order kiya", "online fraud complaint kaise kare", "payment kar diya product nahi aaya"]
      },
      {
              slug: "phonepe-payment-pending",
              category: "payment",
              metaTitle: "PhonePe Payment Pending? Failed Transaction Fix (2026) | JharForm",
              metaDescription: "PhonePe se payment pending ya failed ho gaya? Paise kat gaye? Yeh Hinglish step-by-step guide refund aur dispute process samjhata hai.",
              h1: "PhonePe Payment Pending / Failed — Paise Wapas Kab Aayenge?",
              lastUpdated: "May 2026",
              readingTime: "5 min",
              difficulty: "Easy",
              description: "PhonePe se payment karte waqt pending ya failed dikhta hai aur paise account se cut ho jaate hain to usually ye bank response, network, ya UPI switch delay hota hai. Sahi status check karke dispute raise karo.",
              steps: [
                {
                  title: "2-3 minute wait karo",
                  detail: "PhonePe aur bank ke beech auto-reversal kabhi thodi delay se aati hai. Panic mat karo, pehle 2-3 minute wait karo."
                },
                {
                  title: "Transaction history kholkar status dekho",
                  detail: "PhonePe app ke Transactions/History section mein jao aur status Pending, Failed ya Reversed hai kya check karo."
                },
                {
                  title: "Bank balance verify karo",
                  detail: "Bank app ya netbanking mein actual balance check karo. Kabhi app failed dikhata hai lekin debit later reverse ho jaata hai."
                },
                {
                  title: "Receiver ko confirm karwao",
                  detail: "Agar debit dikha tha to receiver se poochho ki credit mila ya nahi. Kabhi settlement thodi late hoti hai."
                },
                {
                  title: "Raise dispute / report issue",
                  detail: "PhonePe ki transaction details mein 'Raise Dispute', 'Report an Issue' ya 'Get Help' option se complaint log karo."
                },
                {
                  title: "Official complaint route ready rakho",
                  detail: "Transaction ID, UTR number aur screenshot save karo. Agar 48-72 hours mein issue na resolve ho to bank/RBI grievance file karo."
                }
              ],
              screenshots: [
                {
                  caption: "PhonePe payment failed screen showing Rs. 1,499 failed transaction with retry button and red error banner",
                  alt: "PhonePe app payment failed screen showing retry and dispute options",
                  type: "phone",
                  mockupType: "phonepe-payment-failed"
                },
                {
                  caption: "PhonePe transaction history screen showing Pending/Failed status with UTR reference and support link",
                  alt: "PhonePe transaction history showing failed status and reference number",
                  type: "phone",
                  mockupType: "gpay-failed-transaction"
                }
              ],
              sources: [
                {
                  title: "NPCI UPI Help",
                  url: "https://upihelp.npci.org.in/",
                  icon: "📊"
                },
                {
                  title: "RBI Complaints",
                  url: "https://rbi.org.in/Scripts/Complaints.aspx",
                  icon: "🏦"
                },
                {
                  title: "National Consumer Helpline",
                  url: "https://consumerhelpline.gov.in/",
                  icon: "🛡️"
                }
              ],
              proTips: [
                "Screenshot lo aur reference number note karo.",
                "Bank/app support ko exact error text bhejo.",
                "Grievance number ko follow-up me use karo."
              ],
              faqs: [
                {
                  q: "Paise cut ho gaye aur failed dikha — kya karu?",
                  a: "Pehle 2-3 working days wait karo. Aksar auto-reversal hoti hai. Agar 5 din se zyada ho gaye to dispute raise karo."
                },
                {
                  q: "PhonePe payment failed refund kitne din mein aata hai?",
                  a: "Usually 3-7 working days mein reversal aa jaati hai, but bank aur weekend ke hisaab se delay ho sakti hai."
                },
                {
                  q: "Weekend pe pending transaction ka kya hoga?",
                  a: "Working days count hote hain, isliye weekend ya bank holiday ke baad settlement thodi late ho sakti hai."
                }
              ],
              related: [
                {
                  title: "Refund Nahi Mila",
                  slug: "refund-nahi-mila",
                  category: "payment"
                },
                {
                  title: "UPI PIN Bhool Gaya",
                  slug: "upi-pin-bhool-gaya-reset",
                  category: "payment"
                }
              ],
              keywords: [
                "upi payment pending",
                "payment failed refund",
                "transaction failed paise cut gaye",
                "PhonePe payment pending"
              ],
              variants: [
                "payment pending",
                "payment failed",
                "paise kat gaye",
                "PhonePe se paise nahi gaye",
                "transaction failed"
              ]
            },

      {
              slug: "gpay-payment-pending",
              category: "payment",
              metaTitle: "Google Pay Payment Pending? Failed Transaction Fix (2026) | JharForm",
              metaDescription: "Google Pay se payment pending ya failed ho gaya? Paise kat gaye? Yeh Hinglish step-by-step guide refund aur dispute process samjhata hai.",
              h1: "Google Pay Payment Pending / Failed — Paise Wapas Kab Aayenge?",
              lastUpdated: "May 2026",
              readingTime: "5 min",
              difficulty: "Easy",
              description: "Google Pay se payment karte waqt pending ya failed dikhta hai aur paise account se cut ho jaate hain to usually ye bank response, network, ya UPI switch delay hota hai. Sahi status check karke dispute raise karo.",
              steps: [
                {
                  title: "2-3 minute wait karo",
                  detail: "Google Pay aur bank ke beech auto-reversal kabhi thodi delay se aati hai. Panic mat karo, pehle 2-3 minute wait karo."
                },
                {
                  title: "Transaction history kholkar status dekho",
                  detail: "Google Pay app ke Transactions/History section mein jao aur status Pending, Failed ya Reversed hai kya check karo."
                },
                {
                  title: "Bank balance verify karo",
                  detail: "Bank app ya netbanking mein actual balance check karo. Kabhi app failed dikhata hai lekin debit later reverse ho jaata hai."
                },
                {
                  title: "Receiver ko confirm karwao",
                  detail: "Agar debit dikha tha to receiver se poochho ki credit mila ya nahi. Kabhi settlement thodi late hoti hai."
                },
                {
                  title: "Raise dispute / report issue",
                  detail: "Google Pay ki transaction details mein 'Raise Dispute', 'Report an Issue' ya 'Get Help' option se complaint log karo."
                },
                {
                  title: "Official complaint route ready rakho",
                  detail: "Transaction ID, UTR number aur screenshot save karo. Agar 48-72 hours mein issue na resolve ho to bank/RBI grievance file karo."
                }
              ],
              screenshots: [
                {
                  caption: "Google Pay payment failed screen showing Rs. 1,499 failed transaction with retry button and red error banner",
                  alt: "Google Pay app payment failed screen showing retry and dispute options",
                  type: "phone",
                  mockupType: "phonepe-payment-failed"
                },
                {
                  caption: "Google Pay transaction history screen showing Pending/Failed status with UTR reference and support link",
                  alt: "Google Pay transaction history showing failed status and reference number",
                  type: "phone",
                  mockupType: "gpay-failed-transaction"
                }
              ],
              sources: [
                {
                  title: "NPCI UPI Help",
                  url: "https://upihelp.npci.org.in/",
                  icon: "📊"
                },
                {
                  title: "RBI Complaints",
                  url: "https://rbi.org.in/Scripts/Complaints.aspx",
                  icon: "🏦"
                },
                {
                  title: "National Consumer Helpline",
                  url: "https://consumerhelpline.gov.in/",
                  icon: "🛡️"
                }
              ],
              proTips: [
                "Screenshot lo aur reference number note karo.",
                "Bank/app support ko exact error text bhejo.",
                "Grievance number ko follow-up me use karo."
              ],
              faqs: [
                {
                  q: "Paise cut ho gaye aur failed dikha — kya karu?",
                  a: "Pehle 2-3 working days wait karo. Aksar auto-reversal hoti hai. Agar 5 din se zyada ho gaye to dispute raise karo."
                },
                {
                  q: "Google Pay payment failed refund kitne din mein aata hai?",
                  a: "Usually 3-7 working days mein reversal aa jaati hai, but bank aur weekend ke hisaab se delay ho sakti hai."
                },
                {
                  q: "Weekend pe pending transaction ka kya hoga?",
                  a: "Working days count hote hain, isliye weekend ya bank holiday ke baad settlement thodi late ho sakti hai."
                }
              ],
              related: [
                {
                  title: "Refund Nahi Mila",
                  slug: "refund-nahi-mila",
                  category: "payment"
                },
                {
                  title: "UPI PIN Bhool Gaya",
                  slug: "upi-pin-bhool-gaya-reset",
                  category: "payment"
                }
              ],
              keywords: [
                "upi payment pending",
                "payment failed refund",
                "transaction failed paise cut gaye",
                "Google Pay payment pending"
              ],
              variants: [
                "payment pending",
                "payment failed",
                "paise kat gaye",
                "Google Pay se paise nahi gaye",
                "transaction failed"
              ]
            },

      {
              slug: "paytm-payment-pending",
              category: "payment",
              metaTitle: "Paytm Payment Pending? Failed Transaction Fix (2026) | JharForm",
              metaDescription: "Paytm se payment pending ya failed ho gaya? Paise kat gaye? Yeh Hinglish step-by-step guide refund aur dispute process samjhata hai.",
              h1: "Paytm Payment Pending / Failed — Paise Wapas Kab Aayenge?",
              lastUpdated: "May 2026",
              readingTime: "5 min",
              difficulty: "Easy",
              description: "Paytm se payment karte waqt pending ya failed dikhta hai aur paise account se cut ho jaate hain to usually ye bank response, network, ya UPI switch delay hota hai. Sahi status check karke dispute raise karo.",
              steps: [
                {
                  title: "2-3 minute wait karo",
                  detail: "Paytm aur bank ke beech auto-reversal kabhi thodi delay se aati hai. Panic mat karo, pehle 2-3 minute wait karo."
                },
                {
                  title: "Transaction history kholkar status dekho",
                  detail: "Paytm app ke Transactions/History section mein jao aur status Pending, Failed ya Reversed hai kya check karo."
                },
                {
                  title: "Bank balance verify karo",
                  detail: "Bank app ya netbanking mein actual balance check karo. Kabhi app failed dikhata hai lekin debit later reverse ho jaata hai."
                },
                {
                  title: "Receiver ko confirm karwao",
                  detail: "Agar debit dikha tha to receiver se poochho ki credit mila ya nahi. Kabhi settlement thodi late hoti hai."
                },
                {
                  title: "Raise dispute / report issue",
                  detail: "Paytm ki transaction details mein 'Raise Dispute', 'Report an Issue' ya 'Get Help' option se complaint log karo."
                },
                {
                  title: "Official complaint route ready rakho",
                  detail: "Transaction ID, UTR number aur screenshot save karo. Agar 48-72 hours mein issue na resolve ho to bank/RBI grievance file karo."
                }
              ],
              screenshots: [
                {
                  caption: "Paytm payment failed screen showing Rs. 1,499 failed transaction with retry button and red error banner",
                  alt: "Paytm app payment failed screen showing retry and dispute options",
                  type: "phone",
                  mockupType: "phonepe-payment-failed"
                },
                {
                  caption: "Paytm transaction history screen showing Pending/Failed status with UTR reference and support link",
                  alt: "Paytm transaction history showing failed status and reference number",
                  type: "phone",
                  mockupType: "gpay-failed-transaction"
                }
              ],
              sources: [
                {
                  title: "NPCI UPI Help",
                  url: "https://upihelp.npci.org.in/",
                  icon: "📊"
                },
                {
                  title: "RBI Complaints",
                  url: "https://rbi.org.in/Scripts/Complaints.aspx",
                  icon: "🏦"
                },
                {
                  title: "National Consumer Helpline",
                  url: "https://consumerhelpline.gov.in/",
                  icon: "🛡️"
                }
              ],
              proTips: [
                "Screenshot lo aur reference number note karo.",
                "Bank/app support ko exact error text bhejo.",
                "Grievance number ko follow-up me use karo."
              ],
              faqs: [
                {
                  q: "Paise cut ho gaye aur failed dikha — kya karu?",
                  a: "Pehle 2-3 working days wait karo. Aksar auto-reversal hoti hai. Agar 5 din se zyada ho gaye to dispute raise karo."
                },
                {
                  q: "Paytm payment failed refund kitne din mein aata hai?",
                  a: "Usually 3-7 working days mein reversal aa jaati hai, but bank aur weekend ke hisaab se delay ho sakti hai."
                },
                {
                  q: "Weekend pe pending transaction ka kya hoga?",
                  a: "Working days count hote hain, isliye weekend ya bank holiday ke baad settlement thodi late ho sakti hai."
                }
              ],
              related: [
                {
                  title: "Refund Nahi Mila",
                  slug: "refund-nahi-mila",
                  category: "payment"
                },
                {
                  title: "UPI PIN Bhool Gaya",
                  slug: "upi-pin-bhool-gaya-reset",
                  category: "payment"
                }
              ],
              keywords: [
                "upi payment pending",
                "payment failed refund",
                "transaction failed paise cut gaye",
                "Paytm payment pending"
              ],
              variants: [
                "payment pending",
                "payment failed",
                "paise kat gaye",
                "Paytm se paise nahi gaye",
                "transaction failed"
              ]
            },

      {
              slug: "phonepe-upi-limit-exceeded",
              category: "payment",
              metaTitle: "PhonePe UPI Limit Exceeded? Daily Limit Fix (2026) | JharForm",
              metaDescription: "PhonePe UPI limit exceeded ho rahi hai? Daily limit, per-transaction limit aur bank rules samjho aur fix karo.",
              h1: "PhonePe UPI Limit Exceeded — Limit Cross Ho Gayi To Kya Kare?",
              lastUpdated: "May 2026",
              readingTime: "5 min",
              difficulty: "Easy",
              description: "PhonePe par UPI limit cross ho gayi ho to payment reject ho sakti hai. Daily limit, per-transaction limit aur bank-specific rules alag hote hain.",
              steps: [
                {
                  title: "App me available limit check karo",
                  detail: "PhonePe open karke UPI settings ya bank account section me daily aur per-transaction limit dekho."
                },
                {
                  title: "24 hours reset wait karo",
                  detail: "Bahut saari banks mein daily UPI limit 24 ghante me reset hoti hai. Agar same day limit cross hui hai to thoda wait karo."
                },
                {
                  title: "Bank app me limit verify karo",
                  detail: "Kai baar bank ne apni side se low limit set ki hoti hai. Bank app ya netbanking me UPI limit settings check karo."
                },
                {
                  title: "Payment split karke bhejo",
                  detail: "Agar merchant allow karta hai to amount ko chhote parts me bhejo, lekin artificial splitting har jagah work nahi karti."
                },
                {
                  title: "Different bank account use karo",
                  detail: "Agar ek account ki limit full ho gayi hai to same mobile number se linked dusra bank account try karo."
                },
                {
                  title: "Bank support se confirm karo",
                  detail: "Agar repeatedly limit error aa rahi hai to bank support ko transaction screenshot ke saath issue report karo."
                }
              ],
              screenshots: [
                {
                  caption: "PhonePe payment screen showing limit exceeded warning with retry after 24 hours note",
                  alt: "PhonePe limit exceeded screen with retry later message",
                  type: "phone",
                  mockupType: "phonepe-transaction"
                },
                {
                  caption: "UPI transaction limit settings screen with daily limit highlighted and bank note visible",
                  alt: "UPI limit settings showing current daily limit and bank-specific cap",
                  type: "phone",
                  mockupType: "upi-dispute"
                }
              ],
              sources: [
                {
                  title: "NPCI UPI Help",
                  url: "https://upihelp.npci.org.in/",
                  icon: "📊"
                },
                {
                  title: "RBI Complaints",
                  url: "https://rbi.org.in/Scripts/Complaints.aspx",
                  icon: "🏦"
                },
                {
                  title: "National Consumer Helpline",
                  url: "https://consumerhelpline.gov.in/",
                  icon: "🛡️"
                }
              ],
              proTips: [
                "Screenshot lo aur reference number note karo.",
                "Bank/app support ko exact error text bhejo.",
                "Grievance number ko follow-up me use karo."
              ],
              faqs: [
                {
                  q: "UPI limit har bank ki same hoti hai?",
                  a: "Nahi, bank aur app ke hisaab se limit change hoti hai. Same app par alag bank accounts ki limits bhi different ho sakti hain."
                },
                {
                  q: "Same day me limit reset ho sakti hai?",
                  a: "Generally daily limit next 24 hours me reset hoti hai. Immediate reset usually possible nahi hota."
                },
                {
                  q: "Limit error ke baad paise cut ho gaye to?",
                  a: "Agar debit hua hai to pending/failure guide follow karo; warna transaction simply reject bhi ho sakta hai."
                }
              ],
              related: [
                {
                  title: "UPI Payment Pending",
                  slug: "upi-payment-pending",
                  category: "payment"
                },
                {
                  title: "UPI PIN Bhool Gaya",
                  slug: "upi-pin-bhool-gaya-reset",
                  category: "payment"
                }
              ],
              keywords: [
                "upi limit exceeded",
                "daily limit crossed",
                "PhonePe limit issue",
                "payment limit problem"
              ],
              variants: [
                "limit exceeded",
                "daily limit crossed",
                "PhonePe limit",
                "upi transaction limit",
                "payment limit"
              ]
            },

      {
              slug: "gpay-upi-limit-exceeded",
              category: "payment",
              metaTitle: "Google Pay UPI Limit Exceeded? Daily Limit Fix (2026) | JharForm",
              metaDescription: "Google Pay UPI limit exceeded ho rahi hai? Daily limit, per-transaction limit aur bank rules samjho aur fix karo.",
              h1: "Google Pay UPI Limit Exceeded — Limit Cross Ho Gayi To Kya Kare?",
              lastUpdated: "May 2026",
              readingTime: "5 min",
              difficulty: "Easy",
              description: "Google Pay par UPI limit cross ho gayi ho to payment reject ho sakti hai. Daily limit, per-transaction limit aur bank-specific rules alag hote hain.",
              steps: [
                {
                  title: "App me available limit check karo",
                  detail: "Google Pay open karke UPI settings ya bank account section me daily aur per-transaction limit dekho."
                },
                {
                  title: "24 hours reset wait karo",
                  detail: "Bahut saari banks mein daily UPI limit 24 ghante me reset hoti hai. Agar same day limit cross hui hai to thoda wait karo."
                },
                {
                  title: "Bank app me limit verify karo",
                  detail: "Kai baar bank ne apni side se low limit set ki hoti hai. Bank app ya netbanking me UPI limit settings check karo."
                },
                {
                  title: "Payment split karke bhejo",
                  detail: "Agar merchant allow karta hai to amount ko chhote parts me bhejo, lekin artificial splitting har jagah work nahi karti."
                },
                {
                  title: "Different bank account use karo",
                  detail: "Agar ek account ki limit full ho gayi hai to same mobile number se linked dusra bank account try karo."
                },
                {
                  title: "Bank support se confirm karo",
                  detail: "Agar repeatedly limit error aa rahi hai to bank support ko transaction screenshot ke saath issue report karo."
                }
              ],
              screenshots: [
                {
                  caption: "Google Pay payment screen showing limit exceeded warning with retry after 24 hours note",
                  alt: "Google Pay limit exceeded screen with retry later message",
                  type: "phone",
                  mockupType: "phonepe-transaction"
                },
                {
                  caption: "UPI transaction limit settings screen with daily limit highlighted and bank note visible",
                  alt: "UPI limit settings showing current daily limit and bank-specific cap",
                  type: "phone",
                  mockupType: "upi-dispute"
                }
              ],
              sources: [
                {
                  title: "NPCI UPI Help",
                  url: "https://upihelp.npci.org.in/",
                  icon: "📊"
                },
                {
                  title: "RBI Complaints",
                  url: "https://rbi.org.in/Scripts/Complaints.aspx",
                  icon: "🏦"
                },
                {
                  title: "National Consumer Helpline",
                  url: "https://consumerhelpline.gov.in/",
                  icon: "🛡️"
                }
              ],
              proTips: [
                "Screenshot lo aur reference number note karo.",
                "Bank/app support ko exact error text bhejo.",
                "Grievance number ko follow-up me use karo."
              ],
              faqs: [
                {
                  q: "UPI limit har bank ki same hoti hai?",
                  a: "Nahi, bank aur app ke hisaab se limit change hoti hai. Same app par alag bank accounts ki limits bhi different ho sakti hain."
                },
                {
                  q: "Same day me limit reset ho sakti hai?",
                  a: "Generally daily limit next 24 hours me reset hoti hai. Immediate reset usually possible nahi hota."
                },
                {
                  q: "Limit error ke baad paise cut ho gaye to?",
                  a: "Agar debit hua hai to pending/failure guide follow karo; warna transaction simply reject bhi ho sakta hai."
                }
              ],
              related: [
                {
                  title: "UPI Payment Pending",
                  slug: "upi-payment-pending",
                  category: "payment"
                },
                {
                  title: "UPI PIN Bhool Gaya",
                  slug: "upi-pin-bhool-gaya-reset",
                  category: "payment"
                }
              ],
              keywords: [
                "upi limit exceeded",
                "daily limit crossed",
                "Google Pay limit issue",
                "payment limit problem"
              ],
              variants: [
                "limit exceeded",
                "daily limit crossed",
                "Google Pay limit",
                "upi transaction limit",
                "payment limit"
              ]
            },

      {
              slug: "paytm-upi-limit-exceeded",
              category: "payment",
              metaTitle: "Paytm UPI Limit Exceeded? Daily Limit Fix (2026) | JharForm",
              metaDescription: "Paytm UPI limit exceeded ho rahi hai? Daily limit, per-transaction limit aur bank rules samjho aur fix karo.",
              h1: "Paytm UPI Limit Exceeded — Limit Cross Ho Gayi To Kya Kare?",
              lastUpdated: "May 2026",
              readingTime: "5 min",
              difficulty: "Easy",
              description: "Paytm par UPI limit cross ho gayi ho to payment reject ho sakti hai. Daily limit, per-transaction limit aur bank-specific rules alag hote hain.",
              steps: [
                {
                  title: "App me available limit check karo",
                  detail: "Paytm open karke UPI settings ya bank account section me daily aur per-transaction limit dekho."
                },
                {
                  title: "24 hours reset wait karo",
                  detail: "Bahut saari banks mein daily UPI limit 24 ghante me reset hoti hai. Agar same day limit cross hui hai to thoda wait karo."
                },
                {
                  title: "Bank app me limit verify karo",
                  detail: "Kai baar bank ne apni side se low limit set ki hoti hai. Bank app ya netbanking me UPI limit settings check karo."
                },
                {
                  title: "Payment split karke bhejo",
                  detail: "Agar merchant allow karta hai to amount ko chhote parts me bhejo, lekin artificial splitting har jagah work nahi karti."
                },
                {
                  title: "Different bank account use karo",
                  detail: "Agar ek account ki limit full ho gayi hai to same mobile number se linked dusra bank account try karo."
                },
                {
                  title: "Bank support se confirm karo",
                  detail: "Agar repeatedly limit error aa rahi hai to bank support ko transaction screenshot ke saath issue report karo."
                }
              ],
              screenshots: [
                {
                  caption: "Paytm payment screen showing limit exceeded warning with retry after 24 hours note",
                  alt: "Paytm limit exceeded screen with retry later message",
                  type: "phone",
                  mockupType: "phonepe-transaction"
                },
                {
                  caption: "UPI transaction limit settings screen with daily limit highlighted and bank note visible",
                  alt: "UPI limit settings showing current daily limit and bank-specific cap",
                  type: "phone",
                  mockupType: "upi-dispute"
                }
              ],
              sources: [
                {
                  title: "NPCI UPI Help",
                  url: "https://upihelp.npci.org.in/",
                  icon: "📊"
                },
                {
                  title: "RBI Complaints",
                  url: "https://rbi.org.in/Scripts/Complaints.aspx",
                  icon: "🏦"
                },
                {
                  title: "National Consumer Helpline",
                  url: "https://consumerhelpline.gov.in/",
                  icon: "🛡️"
                }
              ],
              proTips: [
                "Screenshot lo aur reference number note karo.",
                "Bank/app support ko exact error text bhejo.",
                "Grievance number ko follow-up me use karo."
              ],
              faqs: [
                {
                  q: "UPI limit har bank ki same hoti hai?",
                  a: "Nahi, bank aur app ke hisaab se limit change hoti hai. Same app par alag bank accounts ki limits bhi different ho sakti hain."
                },
                {
                  q: "Same day me limit reset ho sakti hai?",
                  a: "Generally daily limit next 24 hours me reset hoti hai. Immediate reset usually possible nahi hota."
                },
                {
                  q: "Limit error ke baad paise cut ho gaye to?",
                  a: "Agar debit hua hai to pending/failure guide follow karo; warna transaction simply reject bhi ho sakta hai."
                }
              ],
              related: [
                {
                  title: "UPI Payment Pending",
                  slug: "upi-payment-pending",
                  category: "payment"
                },
                {
                  title: "UPI PIN Bhool Gaya",
                  slug: "upi-pin-bhool-gaya-reset",
                  category: "payment"
                }
              ],
              keywords: [
                "upi limit exceeded",
                "daily limit crossed",
                "Paytm limit issue",
                "payment limit problem"
              ],
              variants: [
                "limit exceeded",
                "daily limit crossed",
                "Paytm limit",
                "upi transaction limit",
                "payment limit"
              ]
            },

      {
              slug: "phonepe-upi-pin-wrong",
              category: "payment",
              metaTitle: "PhonePe UPI PIN Bhool Gaya? Reset Ka Tarika (2026) | JharForm",
              metaDescription: "PhonePe ka UPI PIN bhool gaye? Wrong PIN, reset process aur safe new PIN setup ka step-by-step guide.",
              h1: "PhonePe UPI PIN Bhool Gaya — Reset Karne Ka Complete Guide",
              lastUpdated: "May 2026",
              readingTime: "4 min",
              difficulty: "Easy",
              description: "PhonePe me UPI PIN bhool gaya ya wrong PIN aa raha hai to PIN reset karna padega. Debit card aur registered mobile number ready rakho.",
              steps: [
                {
                  title: "Bank accounts section kholo",
                  detail: "PhonePe app me Profile/Bank Accounts section open karo."
                },
                {
                  title: "Forgot/Reset UPI PIN select karo",
                  detail: "Apna linked bank account choose karo aur 'Forgot UPI PIN' ya 'Reset UPI PIN' option dabao."
                },
                {
                  title: "Debit card details enter karo",
                  detail: "Debit card ke last 6 digits aur expiry date daalni hoti hai. Card physically available hona chahiye."
                },
                {
                  title: "OTP verify karo",
                  detail: "Registered mobile number par OTP aayega. Use enter karke verification complete karo."
                },
                {
                  title: "Naya PIN set karo",
                  detail: "4-6 digit ka strong UPI PIN banao. Birthdate, 1234, 0000 jaise easy PIN mat rakho."
                },
                {
                  title: "Test transaction karo",
                  detail: "Reset ke baad 1 rupee ki test payment karke confirm karo ki PIN sahi kaam kar raha hai."
                }
              ],
              screenshots: [
                {
                  caption: "PhonePe UPI PIN reset screen showing debit card last 6 digits and OTP verification",
                  alt: "PhonePe UPI PIN reset flow with debit card verification",
                  type: "phone",
                  mockupType: "upi-pin-reset-screen"
                },
                {
                  caption: "PhonePe payment screen showing wrong PIN error and try again option",
                  alt: "PhonePe wrong PIN error screen",
                  type: "phone",
                  mockupType: "phonepe-transaction"
                }
              ],
              sources: [
                {
                  title: "NPCI UPI Help",
                  url: "https://upihelp.npci.org.in/",
                  icon: "📊"
                },
                {
                  title: "RBI Complaints",
                  url: "https://rbi.org.in/Scripts/Complaints.aspx",
                  icon: "🏦"
                },
                {
                  title: "National Consumer Helpline",
                  url: "https://consumerhelpline.gov.in/",
                  icon: "🛡️"
                }
              ],
              proTips: [
                "Screenshot lo aur reference number note karo.",
                "Bank/app support ko exact error text bhejo.",
                "Grievance number ko follow-up me use karo."
              ],
              faqs: [
                {
                  q: "UPI PIN kitni baar galat dalne se block hota hai?",
                  a: "3 consecutive wrong attempts ke baad temporary block ho sakta hai."
                },
                {
                  q: "Debit card ke bina PIN reset hoga?",
                  a: "Kuch banks alternate method dete hain, lekin generally debit card details chahiye hoti hain."
                },
                {
                  q: "Same PIN multiple apps me use kar sakta hoon?",
                  a: "Haan, UPI PIN account ke saath linked hota hai, app ke saath nahi."
                }
              ],
              related: [
                {
                  title: "UPI Payment Pending",
                  slug: "upi-payment-pending",
                  category: "payment"
                },
                {
                  title: "ATM Card Blocked Ho Gaya",
                  slug: "atm-card-blocked-ho-gaya",
                  category: "payment"
                }
              ],
              keywords: [
                "upi pin bhool gaya",
                "upi pin reset",
                "PhonePe pin forgot",
                "wrong upi pin"
              ],
              variants: [
                "upi pin bhool gaya",
                "pin reset",
                "PhonePe upi pin",
                "wrong pin",
                "upi pin change"
              ]
            },

      {
              slug: "gpay-upi-pin-wrong",
              category: "payment",
              metaTitle: "Google Pay UPI PIN Bhool Gaya? Reset Ka Tarika (2026) | JharForm",
              metaDescription: "Google Pay ka UPI PIN bhool gaye? Wrong PIN, reset process aur safe new PIN setup ka step-by-step guide.",
              h1: "Google Pay UPI PIN Bhool Gaya — Reset Karne Ka Complete Guide",
              lastUpdated: "May 2026",
              readingTime: "4 min",
              difficulty: "Easy",
              description: "Google Pay me UPI PIN bhool gaya ya wrong PIN aa raha hai to PIN reset karna padega. Debit card aur registered mobile number ready rakho.",
              steps: [
                {
                  title: "Bank accounts section kholo",
                  detail: "Google Pay app me Profile/Bank Accounts section open karo."
                },
                {
                  title: "Forgot/Reset UPI PIN select karo",
                  detail: "Apna linked bank account choose karo aur 'Forgot UPI PIN' ya 'Reset UPI PIN' option dabao."
                },
                {
                  title: "Debit card details enter karo",
                  detail: "Debit card ke last 6 digits aur expiry date daalni hoti hai. Card physically available hona chahiye."
                },
                {
                  title: "OTP verify karo",
                  detail: "Registered mobile number par OTP aayega. Use enter karke verification complete karo."
                },
                {
                  title: "Naya PIN set karo",
                  detail: "4-6 digit ka strong UPI PIN banao. Birthdate, 1234, 0000 jaise easy PIN mat rakho."
                },
                {
                  title: "Test transaction karo",
                  detail: "Reset ke baad 1 rupee ki test payment karke confirm karo ki PIN sahi kaam kar raha hai."
                }
              ],
              screenshots: [
                {
                  caption: "Google Pay UPI PIN reset screen showing debit card last 6 digits and OTP verification",
                  alt: "Google Pay UPI PIN reset flow with debit card verification",
                  type: "phone",
                  mockupType: "upi-pin-reset-screen"
                },
                {
                  caption: "Google Pay payment screen showing wrong PIN error and try again option",
                  alt: "Google Pay wrong PIN error screen",
                  type: "phone",
                  mockupType: "phonepe-transaction"
                }
              ],
              sources: [
                {
                  title: "NPCI UPI Help",
                  url: "https://upihelp.npci.org.in/",
                  icon: "📊"
                },
                {
                  title: "RBI Complaints",
                  url: "https://rbi.org.in/Scripts/Complaints.aspx",
                  icon: "🏦"
                },
                {
                  title: "National Consumer Helpline",
                  url: "https://consumerhelpline.gov.in/",
                  icon: "🛡️"
                }
              ],
              proTips: [
                "Screenshot lo aur reference number note karo.",
                "Bank/app support ko exact error text bhejo.",
                "Grievance number ko follow-up me use karo."
              ],
              faqs: [
                {
                  q: "UPI PIN kitni baar galat dalne se block hota hai?",
                  a: "3 consecutive wrong attempts ke baad temporary block ho sakta hai."
                },
                {
                  q: "Debit card ke bina PIN reset hoga?",
                  a: "Kuch banks alternate method dete hain, lekin generally debit card details chahiye hoti hain."
                },
                {
                  q: "Same PIN multiple apps me use kar sakta hoon?",
                  a: "Haan, UPI PIN account ke saath linked hota hai, app ke saath nahi."
                }
              ],
              related: [
                {
                  title: "UPI Payment Pending",
                  slug: "upi-payment-pending",
                  category: "payment"
                },
                {
                  title: "ATM Card Blocked Ho Gaya",
                  slug: "atm-card-blocked-ho-gaya",
                  category: "payment"
                }
              ],
              keywords: [
                "upi pin bhool gaya",
                "upi pin reset",
                "Google Pay pin forgot",
                "wrong upi pin"
              ],
              variants: [
                "upi pin bhool gaya",
                "pin reset",
                "Google Pay upi pin",
                "wrong pin",
                "upi pin change"
              ]
            },

      {
              slug: "paytm-upi-pin-wrong",
              category: "payment",
              metaTitle: "Paytm UPI PIN Bhool Gaya? Reset Ka Tarika (2026) | JharForm",
              metaDescription: "Paytm ka UPI PIN bhool gaye? Wrong PIN, reset process aur safe new PIN setup ka step-by-step guide.",
              h1: "Paytm UPI PIN Bhool Gaya — Reset Karne Ka Complete Guide",
              lastUpdated: "May 2026",
              readingTime: "4 min",
              difficulty: "Easy",
              description: "Paytm me UPI PIN bhool gaya ya wrong PIN aa raha hai to PIN reset karna padega. Debit card aur registered mobile number ready rakho.",
              steps: [
                {
                  title: "Bank accounts section kholo",
                  detail: "Paytm app me Profile/Bank Accounts section open karo."
                },
                {
                  title: "Forgot/Reset UPI PIN select karo",
                  detail: "Apna linked bank account choose karo aur 'Forgot UPI PIN' ya 'Reset UPI PIN' option dabao."
                },
                {
                  title: "Debit card details enter karo",
                  detail: "Debit card ke last 6 digits aur expiry date daalni hoti hai. Card physically available hona chahiye."
                },
                {
                  title: "OTP verify karo",
                  detail: "Registered mobile number par OTP aayega. Use enter karke verification complete karo."
                },
                {
                  title: "Naya PIN set karo",
                  detail: "4-6 digit ka strong UPI PIN banao. Birthdate, 1234, 0000 jaise easy PIN mat rakho."
                },
                {
                  title: "Test transaction karo",
                  detail: "Reset ke baad 1 rupee ki test payment karke confirm karo ki PIN sahi kaam kar raha hai."
                }
              ],
              screenshots: [
                {
                  caption: "Paytm UPI PIN reset screen showing debit card last 6 digits and OTP verification",
                  alt: "Paytm UPI PIN reset flow with debit card verification",
                  type: "phone",
                  mockupType: "upi-pin-reset-screen"
                },
                {
                  caption: "Paytm payment screen showing wrong PIN error and try again option",
                  alt: "Paytm wrong PIN error screen",
                  type: "phone",
                  mockupType: "phonepe-transaction"
                }
              ],
              sources: [
                {
                  title: "NPCI UPI Help",
                  url: "https://upihelp.npci.org.in/",
                  icon: "📊"
                },
                {
                  title: "RBI Complaints",
                  url: "https://rbi.org.in/Scripts/Complaints.aspx",
                  icon: "🏦"
                },
                {
                  title: "National Consumer Helpline",
                  url: "https://consumerhelpline.gov.in/",
                  icon: "🛡️"
                }
              ],
              proTips: [
                "Screenshot lo aur reference number note karo.",
                "Bank/app support ko exact error text bhejo.",
                "Grievance number ko follow-up me use karo."
              ],
              faqs: [
                {
                  q: "UPI PIN kitni baar galat dalne se block hota hai?",
                  a: "3 consecutive wrong attempts ke baad temporary block ho sakta hai."
                },
                {
                  q: "Debit card ke bina PIN reset hoga?",
                  a: "Kuch banks alternate method dete hain, lekin generally debit card details chahiye hoti hain."
                },
                {
                  q: "Same PIN multiple apps me use kar sakta hoon?",
                  a: "Haan, UPI PIN account ke saath linked hota hai, app ke saath nahi."
                }
              ],
              related: [
                {
                  title: "UPI Payment Pending",
                  slug: "upi-payment-pending",
                  category: "payment"
                },
                {
                  title: "ATM Card Blocked Ho Gaya",
                  slug: "atm-card-blocked-ho-gaya",
                  category: "payment"
                }
              ],
              keywords: [
                "upi pin bhool gaya",
                "upi pin reset",
                "Paytm pin forgot",
                "wrong upi pin"
              ],
              variants: [
                "upi pin bhool gaya",
                "pin reset",
                "Paytm upi pin",
                "wrong pin",
                "upi pin change"
              ]
            },

      {
              slug: "phonepe-money-deducted-not-received",
              category: "payment",
              metaTitle: "PhonePe Money Deducted But Not Received? Fix (2026) | JharForm",
              metaDescription: "PhonePe se paise cut gaye but receiver ko nahi mile? UTR check, dispute raise aur refund tracking ka full guide.",
              h1: "PhonePe Se Paise Cut Ho Gaye Par Receiver Ko Nahi Mile — Kya Kare?",
              lastUpdated: "May 2026",
              readingTime: "5 min",
              difficulty: "Easy",
              description: "PhonePe se paise cut ho gaye lekin receiver ko credit nahi hua to settlement delay ya reversal issue ho sakta hai. UTR aur screenshot safe rakho.",
              steps: [
                {
                  title: "Receiver se turant confirm karo",
                  detail: "PhonePe se bheji gayi payment ka receiver status sabse pehle confirm karo."
                },
                {
                  title: "UTR / reference number note karo",
                  detail: "Transaction ID, UTR aur exact amount screenshot me save karo. Ye complaint me kaam aayega."
                },
                {
                  title: "Auto-reversal wait karo",
                  detail: "Kabhi-kabhi settlement fail hone par amount auto-reverse ho jaati hai."
                },
                {
                  title: "Transaction issue report karo",
                  detail: "PhonePe ki help section me 'Report Issue' ya 'Raise Dispute' se complaint open karo."
                },
                {
                  title: "Bank grievance file karo",
                  detail: "Agar pending issue 48-72 hours se zyada ho gaya hai to bank complaint aur RBI grievance file karo."
                },
                {
                  title: "Written proof sambhal kar rakho",
                  detail: "Bank statement, SMS alert aur app screenshot proof ke taur par save rakho."
                }
              ],
              screenshots: [
                {
                  caption: "PhonePe transaction dispute screen showing debited amount and complaint button",
                  alt: "PhonePe dispute screen with debited amount",
                  type: "phone",
                  mockupType: "upi-dispute"
                },
                {
                  caption: "Bank passbook screen showing debit entry without matching credit on receiver side",
                  alt: "Bank passbook debit entry for unresolved UPI transfer",
                  type: "phone",
                  mockupType: "bank-passbook"
                }
              ],
              sources: [
                {
                  title: "NPCI UPI Help",
                  url: "https://upihelp.npci.org.in/",
                  icon: "📊"
                },
                {
                  title: "RBI Complaints",
                  url: "https://rbi.org.in/Scripts/Complaints.aspx",
                  icon: "🏦"
                },
                {
                  title: "National Consumer Helpline",
                  url: "https://consumerhelpline.gov.in/",
                  icon: "🛡️"
                }
              ],
              proTips: [
                "Screenshot lo aur reference number note karo.",
                "Bank/app support ko exact error text bhejo.",
                "Grievance number ko follow-up me use karo."
              ],
              faqs: [
                {
                  q: "Receiver ko nahi mila lekin app successful dikhata hai — kya hoga?",
                  a: "Aksar settlement delay hoti hai. 1-3 working days me reversal ya credit ho sakti hai."
                },
                {
                  q: "Paise do baar deduct ho gaye to?",
                  a: "Duplicate debit alag issue hai; complaint me dono reference numbers attach karo."
                },
                {
                  q: "Bank complaint ka response kab aata hai?",
                  a: "Usually 7 working days ke andar initial response aata hai."
                }
              ],
              related: [
                {
                  title: "UPI Payment Pending",
                  slug: "upi-payment-pending",
                  category: "payment"
                },
                {
                  title: "Refund Nahi Mila",
                  slug: "refund-nahi-mila",
                  category: "payment"
                }
              ],
              keywords: [
                "money deducted but not received",
                "paise cut gaye nahi mile",
                "PhonePe transaction issue",
                "upi receiver not received"
              ],
              variants: [
                "paise cut gaye",
                "money not received",
                "PhonePe money deducted",
                "receiver ko nahi mila",
                "upi credited not received"
              ]
            },

      {
              slug: "gpay-money-deducted-not-received",
              category: "payment",
              metaTitle: "Google Pay Money Deducted But Not Received? Fix (2026) | JharForm",
              metaDescription: "Google Pay se paise cut gaye but receiver ko nahi mile? UTR check, dispute raise aur refund tracking ka full guide.",
              h1: "Google Pay Se Paise Cut Ho Gaye Par Receiver Ko Nahi Mile — Kya Kare?",
              lastUpdated: "May 2026",
              readingTime: "5 min",
              difficulty: "Easy",
              description: "Google Pay se paise cut ho gaye lekin receiver ko credit nahi hua to settlement delay ya reversal issue ho sakta hai. UTR aur screenshot safe rakho.",
              steps: [
                {
                  title: "Receiver se turant confirm karo",
                  detail: "Google Pay se bheji gayi payment ka receiver status sabse pehle confirm karo."
                },
                {
                  title: "UTR / reference number note karo",
                  detail: "Transaction ID, UTR aur exact amount screenshot me save karo. Ye complaint me kaam aayega."
                },
                {
                  title: "Auto-reversal wait karo",
                  detail: "Kabhi-kabhi settlement fail hone par amount auto-reverse ho jaati hai."
                },
                {
                  title: "Transaction issue report karo",
                  detail: "Google Pay ki help section me 'Report Issue' ya 'Raise Dispute' se complaint open karo."
                },
                {
                  title: "Bank grievance file karo",
                  detail: "Agar pending issue 48-72 hours se zyada ho gaya hai to bank complaint aur RBI grievance file karo."
                },
                {
                  title: "Written proof sambhal kar rakho",
                  detail: "Bank statement, SMS alert aur app screenshot proof ke taur par save rakho."
                }
              ],
              screenshots: [
                {
                  caption: "Google Pay transaction dispute screen showing debited amount and complaint button",
                  alt: "Google Pay dispute screen with debited amount",
                  type: "phone",
                  mockupType: "upi-dispute"
                },
                {
                  caption: "Bank passbook screen showing debit entry without matching credit on receiver side",
                  alt: "Bank passbook debit entry for unresolved UPI transfer",
                  type: "phone",
                  mockupType: "bank-passbook"
                }
              ],
              sources: [
                {
                  title: "NPCI UPI Help",
                  url: "https://upihelp.npci.org.in/",
                  icon: "📊"
                },
                {
                  title: "RBI Complaints",
                  url: "https://rbi.org.in/Scripts/Complaints.aspx",
                  icon: "🏦"
                },
                {
                  title: "National Consumer Helpline",
                  url: "https://consumerhelpline.gov.in/",
                  icon: "🛡️"
                }
              ],
              proTips: [
                "Screenshot lo aur reference number note karo.",
                "Bank/app support ko exact error text bhejo.",
                "Grievance number ko follow-up me use karo."
              ],
              faqs: [
                {
                  q: "Receiver ko nahi mila lekin app successful dikhata hai — kya hoga?",
                  a: "Aksar settlement delay hoti hai. 1-3 working days me reversal ya credit ho sakti hai."
                },
                {
                  q: "Paise do baar deduct ho gaye to?",
                  a: "Duplicate debit alag issue hai; complaint me dono reference numbers attach karo."
                },
                {
                  q: "Bank complaint ka response kab aata hai?",
                  a: "Usually 7 working days ke andar initial response aata hai."
                }
              ],
              related: [
                {
                  title: "UPI Payment Pending",
                  slug: "upi-payment-pending",
                  category: "payment"
                },
                {
                  title: "Refund Nahi Mila",
                  slug: "refund-nahi-mila",
                  category: "payment"
                }
              ],
              keywords: [
                "money deducted but not received",
                "paise cut gaye nahi mile",
                "Google Pay transaction issue",
                "upi receiver not received"
              ],
              variants: [
                "paise cut gaye",
                "money not received",
                "Google Pay money deducted",
                "receiver ko nahi mila",
                "upi credited not received"
              ]
            },

      {
              slug: "paytm-money-deducted-not-received",
              category: "payment",
              metaTitle: "Paytm Money Deducted But Not Received? Fix (2026) | JharForm",
              metaDescription: "Paytm se paise cut gaye but receiver ko nahi mile? UTR check, dispute raise aur refund tracking ka full guide.",
              h1: "Paytm Se Paise Cut Ho Gaye Par Receiver Ko Nahi Mile — Kya Kare?",
              lastUpdated: "May 2026",
              readingTime: "5 min",
              difficulty: "Easy",
              description: "Paytm se paise cut ho gaye lekin receiver ko credit nahi hua to settlement delay ya reversal issue ho sakta hai. UTR aur screenshot safe rakho.",
              steps: [
                {
                  title: "Receiver se turant confirm karo",
                  detail: "Paytm se bheji gayi payment ka receiver status sabse pehle confirm karo."
                },
                {
                  title: "UTR / reference number note karo",
                  detail: "Transaction ID, UTR aur exact amount screenshot me save karo. Ye complaint me kaam aayega."
                },
                {
                  title: "Auto-reversal wait karo",
                  detail: "Kabhi-kabhi settlement fail hone par amount auto-reverse ho jaati hai."
                },
                {
                  title: "Transaction issue report karo",
                  detail: "Paytm ki help section me 'Report Issue' ya 'Raise Dispute' se complaint open karo."
                },
                {
                  title: "Bank grievance file karo",
                  detail: "Agar pending issue 48-72 hours se zyada ho gaya hai to bank complaint aur RBI grievance file karo."
                },
                {
                  title: "Written proof sambhal kar rakho",
                  detail: "Bank statement, SMS alert aur app screenshot proof ke taur par save rakho."
                }
              ],
              screenshots: [
                {
                  caption: "Paytm transaction dispute screen showing debited amount and complaint button",
                  alt: "Paytm dispute screen with debited amount",
                  type: "phone",
                  mockupType: "upi-dispute"
                },
                {
                  caption: "Bank passbook screen showing debit entry without matching credit on receiver side",
                  alt: "Bank passbook debit entry for unresolved UPI transfer",
                  type: "phone",
                  mockupType: "bank-passbook"
                }
              ],
              sources: [
                {
                  title: "NPCI UPI Help",
                  url: "https://upihelp.npci.org.in/",
                  icon: "📊"
                },
                {
                  title: "RBI Complaints",
                  url: "https://rbi.org.in/Scripts/Complaints.aspx",
                  icon: "🏦"
                },
                {
                  title: "National Consumer Helpline",
                  url: "https://consumerhelpline.gov.in/",
                  icon: "🛡️"
                }
              ],
              proTips: [
                "Screenshot lo aur reference number note karo.",
                "Bank/app support ko exact error text bhejo.",
                "Grievance number ko follow-up me use karo."
              ],
              faqs: [
                {
                  q: "Receiver ko nahi mila lekin app successful dikhata hai — kya hoga?",
                  a: "Aksar settlement delay hoti hai. 1-3 working days me reversal ya credit ho sakti hai."
                },
                {
                  q: "Paise do baar deduct ho gaye to?",
                  a: "Duplicate debit alag issue hai; complaint me dono reference numbers attach karo."
                },
                {
                  q: "Bank complaint ka response kab aata hai?",
                  a: "Usually 7 working days ke andar initial response aata hai."
                }
              ],
              related: [
                {
                  title: "UPI Payment Pending",
                  slug: "upi-payment-pending",
                  category: "payment"
                },
                {
                  title: "Refund Nahi Mila",
                  slug: "refund-nahi-mila",
                  category: "payment"
                }
              ],
              keywords: [
                "money deducted but not received",
                "paise cut gaye nahi mile",
                "Paytm transaction issue",
                "upi receiver not received"
              ],
              variants: [
                "paise cut gaye",
                "money not received",
                "Paytm money deducted",
                "receiver ko nahi mila",
                "upi credited not received"
              ]
            },

      {
              slug: "phonepe-qr-code-not-scanning",
              category: "payment",
              metaTitle: "PhonePe QR Code Not Scanning? Fix Guide (2026) | JharForm",
              metaDescription: "PhonePe QR code scan nahi ho raha? Camera, brightness aur QR quality fix steps Hinglish me.",
              h1: "PhonePe QR Code Scan Nahi Ho Raha — Kya Kare?",
              lastUpdated: "May 2026",
              readingTime: "4 min",
              difficulty: "Easy",
              description: "PhonePe se QR code scan nahi ho raha to camera, brightness, QR quality ya internet issue ho sakta hai. Manual UPI ID se bhi payment ho sakti hai.",
              steps: [
                {
                  title: "Camera lens saaf karo",
                  detail: "PhonePe app me scan start karne se pehle camera lens wipe karo aur low-light me flash on karo."
                },
                {
                  title: "Brightness increase karo",
                  detail: "Phone brightness full karo. Dim screen ya printed QR blurry ho to scan fail hota hai."
                },
                {
                  title: "QR zoom ya angle change karo",
                  detail: "Code ko thoda distance se aur seedhe angle se scan karo. Folded ya damaged print avoid karo."
                },
                {
                  title: "Internet connection check karo",
                  detail: "UPI QR scan ke time network weak ho to transaction atak sakti hai."
                },
                {
                  title: "Manual UPI ID use karo",
                  detail: "Agar QR scan nahi ho raha to merchant ka UPI ID manually enter karo."
                },
                {
                  title: "Merchant se fresh QR lo",
                  detail: "Static QR damaged hai to naya QR print ya digital QR maango."
                }
              ],
              screenshots: [
                {
                  caption: "PhonePe scan screen showing QR code focus box and error banner about unreadable code",
                  alt: "PhonePe QR scan error screen",
                  type: "phone",
                  mockupType: "phonepe-transaction"
                },
                {
                  caption: "Merchant QR payment screen with blurred code and manual UPI ID option",
                  alt: "QR code merchant screen showing manual UPI ID alternative",
                  type: "browser",
                  mockupType: "gpay-failed-transaction"
                }
              ],
              sources: [
                {
                  title: "NPCI UPI Help",
                  url: "https://upihelp.npci.org.in/",
                  icon: "📊"
                },
                {
                  title: "RBI Complaints",
                  url: "https://rbi.org.in/Scripts/Complaints.aspx",
                  icon: "🏦"
                },
                {
                  title: "National Consumer Helpline",
                  url: "https://consumerhelpline.gov.in/",
                  icon: "🛡️"
                }
              ],
              proTips: [
                "Screenshot lo aur reference number note karo.",
                "Bank/app support ko exact error text bhejo.",
                "Grievance number ko follow-up me use karo."
              ],
              faqs: [
                {
                  q: "QR code expired ho sakta hai?",
                  a: "Dynamic QR expire ho sakta hai, static QR me issue usually damage ya quality ka hota hai."
                },
                {
                  q: "Payment app scan but amount show na kare to?",
                  a: "App update karke dobara try karo. Kabhi permission issue bhi hota hai."
                },
                {
                  q: "Manual UPI ID safe hai?",
                  a: "Haan, lekin spelling aur domain carefully verify karo."
                }
              ],
              related: [
                {
                  title: "UPI Payment Pending",
                  slug: "upi-payment-pending",
                  category: "payment"
                },
                {
                  title: "Online Shopping Fraud Ho Gaya",
                  slug: "online-shopping-fraud-ho-gaya",
                  category: "payment"
                }
              ],
              keywords: [
                "qr code not scanning",
                "upi qr scan problem",
                "PhonePe qr issue",
                "scan qr code failure"
              ],
              variants: [
                "qr code scan nahi ho raha",
                "qr fail",
                "PhonePe qr scanner",
                "payment qr problem"
              ]
            },

      {
              slug: "gpay-qr-code-not-scanning",
              category: "payment",
              metaTitle: "Google Pay QR Code Not Scanning? Fix Guide (2026) | JharForm",
              metaDescription: "Google Pay QR code scan nahi ho raha? Camera, brightness aur QR quality fix steps Hinglish me.",
              h1: "Google Pay QR Code Scan Nahi Ho Raha — Kya Kare?",
              lastUpdated: "May 2026",
              readingTime: "4 min",
              difficulty: "Easy",
              description: "Google Pay se QR code scan nahi ho raha to camera, brightness, QR quality ya internet issue ho sakta hai. Manual UPI ID se bhi payment ho sakti hai.",
              steps: [
                {
                  title: "Camera lens saaf karo",
                  detail: "Google Pay app me scan start karne se pehle camera lens wipe karo aur low-light me flash on karo."
                },
                {
                  title: "Brightness increase karo",
                  detail: "Phone brightness full karo. Dim screen ya printed QR blurry ho to scan fail hota hai."
                },
                {
                  title: "QR zoom ya angle change karo",
                  detail: "Code ko thoda distance se aur seedhe angle se scan karo. Folded ya damaged print avoid karo."
                },
                {
                  title: "Internet connection check karo",
                  detail: "UPI QR scan ke time network weak ho to transaction atak sakti hai."
                },
                {
                  title: "Manual UPI ID use karo",
                  detail: "Agar QR scan nahi ho raha to merchant ka UPI ID manually enter karo."
                },
                {
                  title: "Merchant se fresh QR lo",
                  detail: "Static QR damaged hai to naya QR print ya digital QR maango."
                }
              ],
              screenshots: [
                {
                  caption: "Google Pay scan screen showing QR code focus box and error banner about unreadable code",
                  alt: "Google Pay QR scan error screen",
                  type: "phone",
                  mockupType: "phonepe-transaction"
                },
                {
                  caption: "Merchant QR payment screen with blurred code and manual UPI ID option",
                  alt: "QR code merchant screen showing manual UPI ID alternative",
                  type: "browser",
                  mockupType: "gpay-failed-transaction"
                }
              ],
              sources: [
                {
                  title: "NPCI UPI Help",
                  url: "https://upihelp.npci.org.in/",
                  icon: "📊"
                },
                {
                  title: "RBI Complaints",
                  url: "https://rbi.org.in/Scripts/Complaints.aspx",
                  icon: "🏦"
                },
                {
                  title: "National Consumer Helpline",
                  url: "https://consumerhelpline.gov.in/",
                  icon: "🛡️"
                }
              ],
              proTips: [
                "Screenshot lo aur reference number note karo.",
                "Bank/app support ko exact error text bhejo.",
                "Grievance number ko follow-up me use karo."
              ],
              faqs: [
                {
                  q: "QR code expired ho sakta hai?",
                  a: "Dynamic QR expire ho sakta hai, static QR me issue usually damage ya quality ka hota hai."
                },
                {
                  q: "Payment app scan but amount show na kare to?",
                  a: "App update karke dobara try karo. Kabhi permission issue bhi hota hai."
                },
                {
                  q: "Manual UPI ID safe hai?",
                  a: "Haan, lekin spelling aur domain carefully verify karo."
                }
              ],
              related: [
                {
                  title: "UPI Payment Pending",
                  slug: "upi-payment-pending",
                  category: "payment"
                },
                {
                  title: "Online Shopping Fraud Ho Gaya",
                  slug: "online-shopping-fraud-ho-gaya",
                  category: "payment"
                }
              ],
              keywords: [
                "qr code not scanning",
                "upi qr scan problem",
                "Google Pay qr issue",
                "scan qr code failure"
              ],
              variants: [
                "qr code scan nahi ho raha",
                "qr fail",
                "Google Pay qr scanner",
                "payment qr problem"
              ]
            },

      {
              slug: "paytm-qr-code-not-scanning",
              category: "payment",
              metaTitle: "Paytm QR Code Not Scanning? Fix Guide (2026) | JharForm",
              metaDescription: "Paytm QR code scan nahi ho raha? Camera, brightness aur QR quality fix steps Hinglish me.",
              h1: "Paytm QR Code Scan Nahi Ho Raha — Kya Kare?",
              lastUpdated: "May 2026",
              readingTime: "4 min",
              difficulty: "Easy",
              description: "Paytm se QR code scan nahi ho raha to camera, brightness, QR quality ya internet issue ho sakta hai. Manual UPI ID se bhi payment ho sakti hai.",
              steps: [
                {
                  title: "Camera lens saaf karo",
                  detail: "Paytm app me scan start karne se pehle camera lens wipe karo aur low-light me flash on karo."
                },
                {
                  title: "Brightness increase karo",
                  detail: "Phone brightness full karo. Dim screen ya printed QR blurry ho to scan fail hota hai."
                },
                {
                  title: "QR zoom ya angle change karo",
                  detail: "Code ko thoda distance se aur seedhe angle se scan karo. Folded ya damaged print avoid karo."
                },
                {
                  title: "Internet connection check karo",
                  detail: "UPI QR scan ke time network weak ho to transaction atak sakti hai."
                },
                {
                  title: "Manual UPI ID use karo",
                  detail: "Agar QR scan nahi ho raha to merchant ka UPI ID manually enter karo."
                },
                {
                  title: "Merchant se fresh QR lo",
                  detail: "Static QR damaged hai to naya QR print ya digital QR maango."
                }
              ],
              screenshots: [
                {
                  caption: "Paytm scan screen showing QR code focus box and error banner about unreadable code",
                  alt: "Paytm QR scan error screen",
                  type: "phone",
                  mockupType: "phonepe-transaction"
                },
                {
                  caption: "Merchant QR payment screen with blurred code and manual UPI ID option",
                  alt: "QR code merchant screen showing manual UPI ID alternative",
                  type: "browser",
                  mockupType: "gpay-failed-transaction"
                }
              ],
              sources: [
                {
                  title: "NPCI UPI Help",
                  url: "https://upihelp.npci.org.in/",
                  icon: "📊"
                },
                {
                  title: "RBI Complaints",
                  url: "https://rbi.org.in/Scripts/Complaints.aspx",
                  icon: "🏦"
                },
                {
                  title: "National Consumer Helpline",
                  url: "https://consumerhelpline.gov.in/",
                  icon: "🛡️"
                }
              ],
              proTips: [
                "Screenshot lo aur reference number note karo.",
                "Bank/app support ko exact error text bhejo.",
                "Grievance number ko follow-up me use karo."
              ],
              faqs: [
                {
                  q: "QR code expired ho sakta hai?",
                  a: "Dynamic QR expire ho sakta hai, static QR me issue usually damage ya quality ka hota hai."
                },
                {
                  q: "Payment app scan but amount show na kare to?",
                  a: "App update karke dobara try karo. Kabhi permission issue bhi hota hai."
                },
                {
                  q: "Manual UPI ID safe hai?",
                  a: "Haan, lekin spelling aur domain carefully verify karo."
                }
              ],
              related: [
                {
                  title: "UPI Payment Pending",
                  slug: "upi-payment-pending",
                  category: "payment"
                },
                {
                  title: "Online Shopping Fraud Ho Gaya",
                  slug: "online-shopping-fraud-ho-gaya",
                  category: "payment"
                }
              ],
              keywords: [
                "qr code not scanning",
                "upi qr scan problem",
                "Paytm qr issue",
                "scan qr code failure"
              ],
              variants: [
                "qr code scan nahi ho raha",
                "qr fail",
                "Paytm qr scanner",
                "payment qr problem"
              ]
            },

      {
              slug: "sbi-upi-not-working",
              category: "payment",
              metaTitle: "SBI UPI Not Working? Server Down Fix (2026) | JharForm",
              metaDescription: "SBI UPI service down, bank server issue ya transaction timeout? Simple fix aur complaint steps.",
              h1: "SBI UPI Not Working — Server Down Ho To Kya Kare?",
              lastUpdated: "May 2026",
              readingTime: "5 min",
              difficulty: "Easy",
              description: "SBI bank ke server ya UPI switch me temporary issue ho to SBI app/payment service down dikh sakti hai. Aise me alternate timing ya alternate account use hota hai.",
              steps: [
                {
                  title: "Bank app aur internet check karo",
                  detail: "SBI app me login karke ya bank status page check karke outage confirm karo."
                },
                {
                  title: "Thoda wait karke retry karo",
                  detail: "Server issue ho to 15-30 minute baad payment dubara try karo."
                },
                {
                  title: "Different network use karo",
                  detail: "Wi-Fi band karke mobile data ya dusra network use karke dekh lo."
                },
                {
                  title: "Alternate bank account try karo",
                  detail: "Same mobile number se linked dusre bank account se payment ho sakti hai."
                },
                {
                  title: "Bank support ko screenshot bhejo",
                  detail: "SBI customer support ko transaction screenshot aur exact error text bhejo."
                },
                {
                  title: "Grievance log karo",
                  detail: "Agar amount debit hua hai aur issue unresolved hai to complaint register karo."
                }
              ],
              screenshots: [
                {
                  caption: "SBI app payment failed screen showing server unavailable and try again later",
                  alt: "SBI app server unavailable error",
                  type: "phone",
                  mockupType: "phonepe-payment-failed"
                },
                {
                  caption: "Bank status style screen showing maintenance notice and UPI retry suggestion",
                  alt: "SBI service maintenance notice for UPI",
                  type: "browser",
                  mockupType: "gpay-failed-transaction"
                }
              ],
              sources: [
                {
                  title: "NPCI UPI Help",
                  url: "https://upihelp.npci.org.in/",
                  icon: "📊"
                },
                {
                  title: "RBI Complaints",
                  url: "https://rbi.org.in/Scripts/Complaints.aspx",
                  icon: "🏦"
                },
                {
                  title: "National Consumer Helpline",
                  url: "https://consumerhelpline.gov.in/",
                  icon: "🛡️"
                }
              ],
              proTips: [
                "Screenshot lo aur reference number note karo.",
                "Bank/app support ko exact error text bhejo.",
                "Grievance number ko follow-up me use karo."
              ],
              faqs: [
                {
                  q: "Bank server down ka pata kaise chale?",
                  a: "Kai baar app me maintenance banner ya repeated timeout error aati hai."
                },
                {
                  q: "Server down me payment pending ho gayi to?",
                  a: "Normal pending/failure flow follow karo aur complaint ID note karo."
                },
                {
                  q: "Same bank ka dusra UPI app work karega?",
                  a: "Kabhi-kabhi nahi, kyunki issue bank side hota hai, app side nahi."
                }
              ],
              related: [
                {
                  title: "UPI Payment Pending",
                  slug: "upi-payment-pending",
                  category: "payment"
                },
                {
                  title: "Refund Nahi Mila",
                  slug: "refund-nahi-mila",
                  category: "payment"
                }
              ],
              keywords: [
                "bank server down",
                "upi not working",
                "SBI payment issue",
                "transaction timeout bank"
              ],
              variants: [
                "server down",
                "upi not working",
                "SBI upi",
                "payment timeout",
                "bank app issue"
              ]
            },

      {
              slug: "hdfc-upi-not-working",
              category: "payment",
              metaTitle: "HDFC UPI Not Working? Server Down Fix (2026) | JharForm",
              metaDescription: "HDFC UPI service down, bank server issue ya transaction timeout? Simple fix aur complaint steps.",
              h1: "HDFC UPI Not Working — Server Down Ho To Kya Kare?",
              lastUpdated: "May 2026",
              readingTime: "5 min",
              difficulty: "Easy",
              description: "HDFC bank ke server ya UPI switch me temporary issue ho to HDFC app/payment service down dikh sakti hai. Aise me alternate timing ya alternate account use hota hai.",
              steps: [
                {
                  title: "Bank app aur internet check karo",
                  detail: "HDFC app me login karke ya bank status page check karke outage confirm karo."
                },
                {
                  title: "Thoda wait karke retry karo",
                  detail: "Server issue ho to 15-30 minute baad payment dubara try karo."
                },
                {
                  title: "Different network use karo",
                  detail: "Wi-Fi band karke mobile data ya dusra network use karke dekh lo."
                },
                {
                  title: "Alternate bank account try karo",
                  detail: "Same mobile number se linked dusre bank account se payment ho sakti hai."
                },
                {
                  title: "Bank support ko screenshot bhejo",
                  detail: "HDFC customer support ko transaction screenshot aur exact error text bhejo."
                },
                {
                  title: "Grievance log karo",
                  detail: "Agar amount debit hua hai aur issue unresolved hai to complaint register karo."
                }
              ],
              screenshots: [
                {
                  caption: "HDFC app payment failed screen showing server unavailable and try again later",
                  alt: "HDFC app server unavailable error",
                  type: "phone",
                  mockupType: "phonepe-payment-failed"
                },
                {
                  caption: "Bank status style screen showing maintenance notice and UPI retry suggestion",
                  alt: "HDFC service maintenance notice for UPI",
                  type: "browser",
                  mockupType: "gpay-failed-transaction"
                }
              ],
              sources: [
                {
                  title: "NPCI UPI Help",
                  url: "https://upihelp.npci.org.in/",
                  icon: "📊"
                },
                {
                  title: "RBI Complaints",
                  url: "https://rbi.org.in/Scripts/Complaints.aspx",
                  icon: "🏦"
                },
                {
                  title: "National Consumer Helpline",
                  url: "https://consumerhelpline.gov.in/",
                  icon: "🛡️"
                }
              ],
              proTips: [
                "Screenshot lo aur reference number note karo.",
                "Bank/app support ko exact error text bhejo.",
                "Grievance number ko follow-up me use karo."
              ],
              faqs: [
                {
                  q: "Bank server down ka pata kaise chale?",
                  a: "Kai baar app me maintenance banner ya repeated timeout error aati hai."
                },
                {
                  q: "Server down me payment pending ho gayi to?",
                  a: "Normal pending/failure flow follow karo aur complaint ID note karo."
                },
                {
                  q: "Same bank ka dusra UPI app work karega?",
                  a: "Kabhi-kabhi nahi, kyunki issue bank side hota hai, app side nahi."
                }
              ],
              related: [
                {
                  title: "UPI Payment Pending",
                  slug: "upi-payment-pending",
                  category: "payment"
                },
                {
                  title: "Refund Nahi Mila",
                  slug: "refund-nahi-mila",
                  category: "payment"
                }
              ],
              keywords: [
                "bank server down",
                "upi not working",
                "HDFC payment issue",
                "transaction timeout bank"
              ],
              variants: [
                "server down",
                "upi not working",
                "HDFC upi",
                "payment timeout",
                "bank app issue"
              ]
            },

      {
              slug: "icici-upi-not-working",
              category: "payment",
              metaTitle: "ICICI UPI Not Working? Server Down Fix (2026) | JharForm",
              metaDescription: "ICICI UPI service down, bank server issue ya transaction timeout? Simple fix aur complaint steps.",
              h1: "ICICI UPI Not Working — Server Down Ho To Kya Kare?",
              lastUpdated: "May 2026",
              readingTime: "5 min",
              difficulty: "Easy",
              description: "ICICI bank ke server ya UPI switch me temporary issue ho to ICICI app/payment service down dikh sakti hai. Aise me alternate timing ya alternate account use hota hai.",
              steps: [
                {
                  title: "Bank app aur internet check karo",
                  detail: "ICICI app me login karke ya bank status page check karke outage confirm karo."
                },
                {
                  title: "Thoda wait karke retry karo",
                  detail: "Server issue ho to 15-30 minute baad payment dubara try karo."
                },
                {
                  title: "Different network use karo",
                  detail: "Wi-Fi band karke mobile data ya dusra network use karke dekh lo."
                },
                {
                  title: "Alternate bank account try karo",
                  detail: "Same mobile number se linked dusre bank account se payment ho sakti hai."
                },
                {
                  title: "Bank support ko screenshot bhejo",
                  detail: "ICICI customer support ko transaction screenshot aur exact error text bhejo."
                },
                {
                  title: "Grievance log karo",
                  detail: "Agar amount debit hua hai aur issue unresolved hai to complaint register karo."
                }
              ],
              screenshots: [
                {
                  caption: "ICICI app payment failed screen showing server unavailable and try again later",
                  alt: "ICICI app server unavailable error",
                  type: "phone",
                  mockupType: "phonepe-payment-failed"
                },
                {
                  caption: "Bank status style screen showing maintenance notice and UPI retry suggestion",
                  alt: "ICICI service maintenance notice for UPI",
                  type: "browser",
                  mockupType: "gpay-failed-transaction"
                }
              ],
              sources: [
                {
                  title: "NPCI UPI Help",
                  url: "https://upihelp.npci.org.in/",
                  icon: "📊"
                },
                {
                  title: "RBI Complaints",
                  url: "https://rbi.org.in/Scripts/Complaints.aspx",
                  icon: "🏦"
                },
                {
                  title: "National Consumer Helpline",
                  url: "https://consumerhelpline.gov.in/",
                  icon: "🛡️"
                }
              ],
              proTips: [
                "Screenshot lo aur reference number note karo.",
                "Bank/app support ko exact error text bhejo.",
                "Grievance number ko follow-up me use karo."
              ],
              faqs: [
                {
                  q: "Bank server down ka pata kaise chale?",
                  a: "Kai baar app me maintenance banner ya repeated timeout error aati hai."
                },
                {
                  q: "Server down me payment pending ho gayi to?",
                  a: "Normal pending/failure flow follow karo aur complaint ID note karo."
                },
                {
                  q: "Same bank ka dusra UPI app work karega?",
                  a: "Kabhi-kabhi nahi, kyunki issue bank side hota hai, app side nahi."
                }
              ],
              related: [
                {
                  title: "UPI Payment Pending",
                  slug: "upi-payment-pending",
                  category: "payment"
                },
                {
                  title: "Refund Nahi Mila",
                  slug: "refund-nahi-mila",
                  category: "payment"
                }
              ],
              keywords: [
                "bank server down",
                "upi not working",
                "ICICI payment issue",
                "transaction timeout bank"
              ],
              variants: [
                "server down",
                "upi not working",
                "ICICI upi",
                "payment timeout",
                "bank app issue"
              ]
            },

      {
              slug: "phonepe-payment-deducted-twice",
              category: "payment",
              metaTitle: "PhonePe Payment Deducted Twice? Duplicate Debit Fix (2026) | JharForm",
              metaDescription: "PhonePe se same payment do baar cut ho gayi? Duplicate debit, reversal aur complaint process samjho.",
              h1: "PhonePe Payment Deducted Twice — Duplicate Debit Ka Fix",
              lastUpdated: "May 2026",
              readingTime: "5 min",
              difficulty: "Medium",
              description: "PhonePe me same transaction do baar debit ho gayi ho to duplicate settlement ya repeated tap issue ho sakta hai. Dono references note karna important hai.",
              steps: [
                {
                  title: "Dono transaction ID alag alag note karo",
                  detail: "PhonePe history me jaakar duplicate entries aur reference numbers note karo."
                },
                {
                  title: "Merchant se billing verify karo",
                  detail: "Kabhi receipt me sirf ek hi successful payment hoti hai. Merchant confirmation lo."
                },
                {
                  title: "Bank statement screenshot lo",
                  detail: "Dono debit entries ka screenshot bank passbook ya statement me save karo."
                },
                {
                  title: "App me duplicate dispute raise karo",
                  detail: "PhonePe help/dispute section me duplicate payment complaint file karo."
                },
                {
                  title: "Refund timeline wait karo",
                  detail: "Duplicate debit me aksar auto-reversal aati hai, but bank based investigation bhi lag sakti hai."
                },
                {
                  title: "Chargeback / bank escalation",
                  detail: "Agar card se pay kiya tha to chargeback aur bank escalation dono option use karo."
                }
              ],
              screenshots: [
                {
                  caption: "PhonePe transaction dispute screen showing two same amount debits with complaint option",
                  alt: "PhonePe duplicate debit dispute screen",
                  type: "phone",
                  mockupType: "upi-dispute"
                },
                {
                  caption: "Bank passbook showing two identical debit entries and refund expected note",
                  alt: "Bank passbook with duplicate debit entries",
                  type: "phone",
                  mockupType: "bank-passbook"
                }
              ],
              sources: [
                {
                  title: "NPCI UPI Help",
                  url: "https://upihelp.npci.org.in/",
                  icon: "📊"
                },
                {
                  title: "RBI Complaints",
                  url: "https://rbi.org.in/Scripts/Complaints.aspx",
                  icon: "🏦"
                },
                {
                  title: "National Consumer Helpline",
                  url: "https://consumerhelpline.gov.in/",
                  icon: "🛡️"
                }
              ],
              proTips: [
                "Screenshot lo aur reference number note karo.",
                "Bank/app support ko exact error text bhejo.",
                "Grievance number ko follow-up me use karo."
              ],
              faqs: [
                {
                  q: "Do baar debit hone par refund automatically aata hai?",
                  a: "Aksar aa jata hai, but investigation ke bina confirm nahi hota."
                },
                {
                  q: "Merchant ne ek hi payment bola to?",
                  a: "Bank statement aur UTR se proof ready rakho."
                },
                {
                  q: "Card aur UPI duplicate me difference hai?",
                  a: "Haan, card me chargeback aur UPI me dispute flow alag hota hai."
                }
              ],
              related: [
                {
                  title: "UPI Payment Pending",
                  slug: "upi-payment-pending",
                  category: "payment"
                },
                {
                  title: "Refund Nahi Mila",
                  slug: "refund-nahi-mila",
                  category: "payment"
                }
              ],
              keywords: [
                "payment deducted twice",
                "duplicate debit",
                "PhonePe double payment",
                "same payment twice"
              ],
              variants: [
                "payment twice",
                "double debit",
                "PhonePe duplicate payment",
                "same amount cut twice",
                "duplicate transaction"
              ]
            },

      {
              slug: "gpay-payment-deducted-twice",
              category: "payment",
              metaTitle: "Google Pay Payment Deducted Twice? Duplicate Debit Fix (2026) | JharForm",
              metaDescription: "Google Pay se same payment do baar cut ho gayi? Duplicate debit, reversal aur complaint process samjho.",
              h1: "Google Pay Payment Deducted Twice — Duplicate Debit Ka Fix",
              lastUpdated: "May 2026",
              readingTime: "5 min",
              difficulty: "Medium",
              description: "Google Pay me same transaction do baar debit ho gayi ho to duplicate settlement ya repeated tap issue ho sakta hai. Dono references note karna important hai.",
              steps: [
                {
                  title: "Dono transaction ID alag alag note karo",
                  detail: "Google Pay history me jaakar duplicate entries aur reference numbers note karo."
                },
                {
                  title: "Merchant se billing verify karo",
                  detail: "Kabhi receipt me sirf ek hi successful payment hoti hai. Merchant confirmation lo."
                },
                {
                  title: "Bank statement screenshot lo",
                  detail: "Dono debit entries ka screenshot bank passbook ya statement me save karo."
                },
                {
                  title: "App me duplicate dispute raise karo",
                  detail: "Google Pay help/dispute section me duplicate payment complaint file karo."
                },
                {
                  title: "Refund timeline wait karo",
                  detail: "Duplicate debit me aksar auto-reversal aati hai, but bank based investigation bhi lag sakti hai."
                },
                {
                  title: "Chargeback / bank escalation",
                  detail: "Agar card se pay kiya tha to chargeback aur bank escalation dono option use karo."
                }
              ],
              screenshots: [
                {
                  caption: "Google Pay transaction dispute screen showing two same amount debits with complaint option",
                  alt: "Google Pay duplicate debit dispute screen",
                  type: "phone",
                  mockupType: "upi-dispute"
                },
                {
                  caption: "Bank passbook showing two identical debit entries and refund expected note",
                  alt: "Bank passbook with duplicate debit entries",
                  type: "phone",
                  mockupType: "bank-passbook"
                }
              ],
              sources: [
                {
                  title: "NPCI UPI Help",
                  url: "https://upihelp.npci.org.in/",
                  icon: "📊"
                },
                {
                  title: "RBI Complaints",
                  url: "https://rbi.org.in/Scripts/Complaints.aspx",
                  icon: "🏦"
                },
                {
                  title: "National Consumer Helpline",
                  url: "https://consumerhelpline.gov.in/",
                  icon: "🛡️"
                }
              ],
              proTips: [
                "Screenshot lo aur reference number note karo.",
                "Bank/app support ko exact error text bhejo.",
                "Grievance number ko follow-up me use karo."
              ],
              faqs: [
                {
                  q: "Do baar debit hone par refund automatically aata hai?",
                  a: "Aksar aa jata hai, but investigation ke bina confirm nahi hota."
                },
                {
                  q: "Merchant ne ek hi payment bola to?",
                  a: "Bank statement aur UTR se proof ready rakho."
                },
                {
                  q: "Card aur UPI duplicate me difference hai?",
                  a: "Haan, card me chargeback aur UPI me dispute flow alag hota hai."
                }
              ],
              related: [
                {
                  title: "UPI Payment Pending",
                  slug: "upi-payment-pending",
                  category: "payment"
                },
                {
                  title: "Refund Nahi Mila",
                  slug: "refund-nahi-mila",
                  category: "payment"
                }
              ],
              keywords: [
                "payment deducted twice",
                "duplicate debit",
                "Google Pay double payment",
                "same payment twice"
              ],
              variants: [
                "payment twice",
                "double debit",
                "Google Pay duplicate payment",
                "same amount cut twice",
                "duplicate transaction"
              ]
            },

      {
              slug: "paytm-payment-deducted-twice",
              category: "payment",
              metaTitle: "Paytm Payment Deducted Twice? Duplicate Debit Fix (2026) | JharForm",
              metaDescription: "Paytm se same payment do baar cut ho gayi? Duplicate debit, reversal aur complaint process samjho.",
              h1: "Paytm Payment Deducted Twice — Duplicate Debit Ka Fix",
              lastUpdated: "May 2026",
              readingTime: "5 min",
              difficulty: "Medium",
              description: "Paytm me same transaction do baar debit ho gayi ho to duplicate settlement ya repeated tap issue ho sakta hai. Dono references note karna important hai.",
              steps: [
                {
                  title: "Dono transaction ID alag alag note karo",
                  detail: "Paytm history me jaakar duplicate entries aur reference numbers note karo."
                },
                {
                  title: "Merchant se billing verify karo",
                  detail: "Kabhi receipt me sirf ek hi successful payment hoti hai. Merchant confirmation lo."
                },
                {
                  title: "Bank statement screenshot lo",
                  detail: "Dono debit entries ka screenshot bank passbook ya statement me save karo."
                },
                {
                  title: "App me duplicate dispute raise karo",
                  detail: "Paytm help/dispute section me duplicate payment complaint file karo."
                },
                {
                  title: "Refund timeline wait karo",
                  detail: "Duplicate debit me aksar auto-reversal aati hai, but bank based investigation bhi lag sakti hai."
                },
                {
                  title: "Chargeback / bank escalation",
                  detail: "Agar card se pay kiya tha to chargeback aur bank escalation dono option use karo."
                }
              ],
              screenshots: [
                {
                  caption: "Paytm transaction dispute screen showing two same amount debits with complaint option",
                  alt: "Paytm duplicate debit dispute screen",
                  type: "phone",
                  mockupType: "upi-dispute"
                },
                {
                  caption: "Bank passbook showing two identical debit entries and refund expected note",
                  alt: "Bank passbook with duplicate debit entries",
                  type: "phone",
                  mockupType: "bank-passbook"
                }
              ],
              sources: [
                {
                  title: "NPCI UPI Help",
                  url: "https://upihelp.npci.org.in/",
                  icon: "📊"
                },
                {
                  title: "RBI Complaints",
                  url: "https://rbi.org.in/Scripts/Complaints.aspx",
                  icon: "🏦"
                },
                {
                  title: "National Consumer Helpline",
                  url: "https://consumerhelpline.gov.in/",
                  icon: "🛡️"
                }
              ],
              proTips: [
                "Screenshot lo aur reference number note karo.",
                "Bank/app support ko exact error text bhejo.",
                "Grievance number ko follow-up me use karo."
              ],
              faqs: [
                {
                  q: "Do baar debit hone par refund automatically aata hai?",
                  a: "Aksar aa jata hai, but investigation ke bina confirm nahi hota."
                },
                {
                  q: "Merchant ne ek hi payment bola to?",
                  a: "Bank statement aur UTR se proof ready rakho."
                },
                {
                  q: "Card aur UPI duplicate me difference hai?",
                  a: "Haan, card me chargeback aur UPI me dispute flow alag hota hai."
                }
              ],
              related: [
                {
                  title: "UPI Payment Pending",
                  slug: "upi-payment-pending",
                  category: "payment"
                },
                {
                  title: "Refund Nahi Mila",
                  slug: "refund-nahi-mila",
                  category: "payment"
                }
              ],
              keywords: [
                "payment deducted twice",
                "duplicate debit",
                "Paytm double payment",
                "same payment twice"
              ],
              variants: [
                "payment twice",
                "double debit",
                "Paytm duplicate payment",
                "same amount cut twice",
                "duplicate transaction"
              ]
            },

      {
              slug: "amazon-refund-pending",
              category: "payment",
              metaTitle: "Amazon Refund Pending? Paise Kab Aayenge (2026) | JharForm",
              metaDescription: "Amazon refund pending hai? Refund initiated, expected date aur bank credit delay ka complete guide.",
              h1: "Amazon Refund Pending — Paise Kab Aayenge?",
              lastUpdated: "May 2026",
              readingTime: "5 min",
              difficulty: "Easy",
              description: "Amazon ka refund pending hai to order cancellation, merchant approval aur bank processing timeline sab dekhna padta hai. Har platform ka refund cycle alag hota hai.",
              steps: [
                {
                  title: "Order/transaction ID save karo",
                  detail: "Amazon refund ke liye order ID, cancellation ID ya transaction reference note karo."
                },
                {
                  title: "Refund status track karo",
                  detail: "Amazon account me Orders / Payments / Refund section me status check karo."
                },
                {
                  title: "Bank timeline samjho",
                  detail: "UPI, card aur wallet me credit timing alag hoti hai. Weekend me delay normal hai."
                },
                {
                  title: "Bank statement me search karo",
                  detail: "Refund initiated hone ke baad bank statement me merchant name ya REFUND entry search karo."
                },
                {
                  title: "Customer care ko screenshot bhejo",
                  detail: "Amazon support ko refund initiated proof, date aur payment reference bhejo."
                },
                {
                  title: "Official grievance use karo",
                  detail: "Agar refund promised date se zyada delay ho to consumer helpline aur bank complaint file karo."
                }
              ],
              screenshots: [
                {
                  caption: "Amazon refund initiated screen showing expected date and bank processing note",
                  alt: "Amazon refund initiated status screen",
                  type: "browser",
                  mockupType: "amazon-refund"
                },
                {
                  caption: "Bank passbook showing refund credit entry pending to be reflected",
                  alt: "Bank passbook refund credit pending example",
                  type: "phone",
                  mockupType: "bank-passbook"
                }
              ],
              sources: [
                {
                  title: "National Consumer Helpline",
                  url: "https://consumerhelpline.gov.in/",
                  icon: "🛡️"
                },
                {
                  title: "RBI Banking Ombudsman",
                  url: "https://rbi.org.in/bankingombudsman/",
                  icon: "🏦"
                },
                {
                  title: "RBI Complaints",
                  url: "https://rbi.org.in/Scripts/Complaints.aspx",
                  icon: "🏦"
                }
              ],
              proTips: [
                "Screenshot lo aur reference number note karo.",
                "Bank/app support ko exact error text bhejo.",
                "Grievance number ko follow-up me use karo."
              ],
              faqs: [
                {
                  q: "Refund initiated dikha raha hai but credit nahi aaya?",
                  a: "Bank processing me 24-48 hours aur lag sakte hain."
                },
                {
                  q: "Refund wrong account me gaya to?",
                  a: "Turant platform aur bank dono ko complaint karo."
                },
                {
                  q: "Kitne din wait karna chahiye?",
                  a: "Usually 3-10 working days, method ke hisaab se."
                }
              ],
              related: [
                {
                  title: "Refund Nahi Mila",
                  slug: "refund-nahi-mila",
                  category: "payment"
                },
                {
                  title: "Online Shopping Fraud Ho Gaya",
                  slug: "online-shopping-fraud-ho-gaya",
                  category: "payment"
                }
              ],
              keywords: [
                "refund pending",
                "Amazon refund",
                "refund not received",
                "refund kab aayega"
              ],
              variants: [
                "refund pending",
                "refund nahi aaya",
                "Amazon refund issue",
                "paise wapas",
                "refund delay"
              ]
            },

      {
              slug: "flipkart-refund-pending",
              category: "payment",
              metaTitle: "Flipkart Refund Pending? Paise Kab Aayenge (2026) | JharForm",
              metaDescription: "Flipkart refund pending hai? Refund initiated, expected date aur bank credit delay ka complete guide.",
              h1: "Flipkart Refund Pending — Paise Kab Aayenge?",
              lastUpdated: "May 2026",
              readingTime: "5 min",
              difficulty: "Easy",
              description: "Flipkart ka refund pending hai to order cancellation, merchant approval aur bank processing timeline sab dekhna padta hai. Har platform ka refund cycle alag hota hai.",
              steps: [
                {
                  title: "Order/transaction ID save karo",
                  detail: "Flipkart refund ke liye order ID, cancellation ID ya transaction reference note karo."
                },
                {
                  title: "Refund status track karo",
                  detail: "Flipkart account me Orders / Payments / Refund section me status check karo."
                },
                {
                  title: "Bank timeline samjho",
                  detail: "UPI, card aur wallet me credit timing alag hoti hai. Weekend me delay normal hai."
                },
                {
                  title: "Bank statement me search karo",
                  detail: "Refund initiated hone ke baad bank statement me merchant name ya REFUND entry search karo."
                },
                {
                  title: "Customer care ko screenshot bhejo",
                  detail: "Flipkart support ko refund initiated proof, date aur payment reference bhejo."
                },
                {
                  title: "Official grievance use karo",
                  detail: "Agar refund promised date se zyada delay ho to consumer helpline aur bank complaint file karo."
                }
              ],
              screenshots: [
                {
                  caption: "Flipkart refund initiated screen showing expected date and bank processing note",
                  alt: "Flipkart refund initiated status screen",
                  type: "browser",
                  mockupType: "amazon-refund"
                },
                {
                  caption: "Bank passbook showing refund credit entry pending to be reflected",
                  alt: "Bank passbook refund credit pending example",
                  type: "phone",
                  mockupType: "bank-passbook"
                }
              ],
              sources: [
                {
                  title: "National Consumer Helpline",
                  url: "https://consumerhelpline.gov.in/",
                  icon: "🛡️"
                },
                {
                  title: "RBI Banking Ombudsman",
                  url: "https://rbi.org.in/bankingombudsman/",
                  icon: "🏦"
                },
                {
                  title: "RBI Complaints",
                  url: "https://rbi.org.in/Scripts/Complaints.aspx",
                  icon: "🏦"
                }
              ],
              proTips: [
                "Screenshot lo aur reference number note karo.",
                "Bank/app support ko exact error text bhejo.",
                "Grievance number ko follow-up me use karo."
              ],
              faqs: [
                {
                  q: "Refund initiated dikha raha hai but credit nahi aaya?",
                  a: "Bank processing me 24-48 hours aur lag sakte hain."
                },
                {
                  q: "Refund wrong account me gaya to?",
                  a: "Turant platform aur bank dono ko complaint karo."
                },
                {
                  q: "Kitne din wait karna chahiye?",
                  a: "Usually 3-10 working days, method ke hisaab se."
                }
              ],
              related: [
                {
                  title: "Refund Nahi Mila",
                  slug: "refund-nahi-mila",
                  category: "payment"
                },
                {
                  title: "Online Shopping Fraud Ho Gaya",
                  slug: "online-shopping-fraud-ho-gaya",
                  category: "payment"
                }
              ],
              keywords: [
                "refund pending",
                "Flipkart refund",
                "refund not received",
                "refund kab aayega"
              ],
              variants: [
                "refund pending",
                "refund nahi aaya",
                "Flipkart refund issue",
                "paise wapas",
                "refund delay"
              ]
            },

      {
              slug: "myntra-refund-pending",
              category: "payment",
              metaTitle: "Myntra Refund Pending? Paise Kab Aayenge (2026) | JharForm",
              metaDescription: "Myntra refund pending hai? Refund initiated, expected date aur bank credit delay ka complete guide.",
              h1: "Myntra Refund Pending — Paise Kab Aayenge?",
              lastUpdated: "May 2026",
              readingTime: "5 min",
              difficulty: "Easy",
              description: "Myntra ka refund pending hai to order cancellation, merchant approval aur bank processing timeline sab dekhna padta hai. Har platform ka refund cycle alag hota hai.",
              steps: [
                {
                  title: "Order/transaction ID save karo",
                  detail: "Myntra refund ke liye order ID, cancellation ID ya transaction reference note karo."
                },
                {
                  title: "Refund status track karo",
                  detail: "Myntra account me Orders / Payments / Refund section me status check karo."
                },
                {
                  title: "Bank timeline samjho",
                  detail: "UPI, card aur wallet me credit timing alag hoti hai. Weekend me delay normal hai."
                },
                {
                  title: "Bank statement me search karo",
                  detail: "Refund initiated hone ke baad bank statement me merchant name ya REFUND entry search karo."
                },
                {
                  title: "Customer care ko screenshot bhejo",
                  detail: "Myntra support ko refund initiated proof, date aur payment reference bhejo."
                },
                {
                  title: "Official grievance use karo",
                  detail: "Agar refund promised date se zyada delay ho to consumer helpline aur bank complaint file karo."
                }
              ],
              screenshots: [
                {
                  caption: "Myntra refund initiated screen showing expected date and bank processing note",
                  alt: "Myntra refund initiated status screen",
                  type: "browser",
                  mockupType: "amazon-refund"
                },
                {
                  caption: "Bank passbook showing refund credit entry pending to be reflected",
                  alt: "Bank passbook refund credit pending example",
                  type: "phone",
                  mockupType: "bank-passbook"
                }
              ],
              sources: [
                {
                  title: "National Consumer Helpline",
                  url: "https://consumerhelpline.gov.in/",
                  icon: "🛡️"
                },
                {
                  title: "RBI Banking Ombudsman",
                  url: "https://rbi.org.in/bankingombudsman/",
                  icon: "🏦"
                },
                {
                  title: "RBI Complaints",
                  url: "https://rbi.org.in/Scripts/Complaints.aspx",
                  icon: "🏦"
                }
              ],
              proTips: [
                "Screenshot lo aur reference number note karo.",
                "Bank/app support ko exact error text bhejo.",
                "Grievance number ko follow-up me use karo."
              ],
              faqs: [
                {
                  q: "Refund initiated dikha raha hai but credit nahi aaya?",
                  a: "Bank processing me 24-48 hours aur lag sakte hain."
                },
                {
                  q: "Refund wrong account me gaya to?",
                  a: "Turant platform aur bank dono ko complaint karo."
                },
                {
                  q: "Kitne din wait karna chahiye?",
                  a: "Usually 3-10 working days, method ke hisaab se."
                }
              ],
              related: [
                {
                  title: "Refund Nahi Mila",
                  slug: "refund-nahi-mila",
                  category: "payment"
                },
                {
                  title: "Online Shopping Fraud Ho Gaya",
                  slug: "online-shopping-fraud-ho-gaya",
                  category: "payment"
                }
              ],
              keywords: [
                "refund pending",
                "Myntra refund",
                "refund not received",
                "refund kab aayega"
              ],
              variants: [
                "refund pending",
                "refund nahi aaya",
                "Myntra refund issue",
                "paise wapas",
                "refund delay"
              ]
            },

      {
              slug: "sbi-card-declined-online",
              category: "payment",
              metaTitle: "SBI Card Declined Online? Fix Guide (2026) | JharForm",
              metaDescription: "SBI card online declined, e-commerce failed ya payment rejected? Reason aur fix samjho.",
              h1: "SBI Card Declined Online — Fix Ka Tarika",
              lastUpdated: "May 2026",
              readingTime: "5 min",
              difficulty: "Easy",
              description: "SBI debit/credit card online decline ho rahi hai to online usage, CVV, limit, card status ya international enablement issue ho sakta hai.",
              steps: [
                {
                  title: "Card status check karo",
                  detail: "SBI app ya netbanking me card active hai ya blocked, ye verify karo."
                },
                {
                  title: "Online transaction enabled dekho",
                  detail: "Debit card me e-commerce/online payments enabled honi chahiye."
                },
                {
                  title: "CVV, expiry aur billing details sahi daalo",
                  detail: "Galat details se payment turant decline ho sakti hai."
                },
                {
                  title: "Limit aur international setting check karo",
                  detail: "Domestic, international aur per-transaction limit alag ho sakti hai."
                },
                {
                  title: "Card tokenization / secure payment update karo",
                  detail: "Merchant side secure payment mode ya card token refresh try karo."
                },
                {
                  title: "Bank support ko decline reason poochho",
                  detail: "Exact decline code ya message note karke support ko share karo."
                }
              ],
              screenshots: [
                {
                  caption: "SBI card payment declined screen showing error code and try another card message",
                  alt: "SBI card declined online screen",
                  type: "phone",
                  mockupType: "sbi-card-blocked"
                },
                {
                  caption: "Online checkout page with card declined banner and retry option",
                  alt: "Checkout page showing card declined",
                  type: "browser",
                  mockupType: "bank-passbook"
                }
              ],
              sources: [
                {
                  title: "NPCI RuPay",
                  url: "https://www.npci.org.in/product/rupay",
                  icon: "💳"
                },
                {
                  title: "RBI Complaints",
                  url: "https://rbi.org.in/Scripts/Complaints.aspx",
                  icon: "🏦"
                }
              ],
              proTips: [
                "Screenshot lo aur reference number note karo.",
                "Bank/app support ko exact error text bhejo.",
                "Grievance number ko follow-up me use karo."
              ],
              faqs: [
                {
                  q: "Balance hone ke baad bhi card decline kyu?",
                  a: "Card settings, limits, or merchant restrictions ki wajah se ho sakta hai."
                },
                {
                  q: "Online payment ke liye card unblock kaise?",
                  a: "Bank app me card service section check karo ya support se baat karo."
                },
                {
                  q: "RuPay card ka alag rule hota hai?",
                  a: "Haan, RuPay aur credit/debit card rules bank aur network dono ke hisaab se alag ho sakte hain."
                }
              ],
              related: [
                {
                  title: "ATM Card Blocked Ho Gaya",
                  slug: "atm-card-blocked-ho-gaya",
                  category: "payment"
                },
                {
                  title: "Refund Nahi Mila",
                  slug: "refund-nahi-mila",
                  category: "payment"
                }
              ],
              keywords: [
                "card declined online",
                "SBI card declined",
                "online card payment rejected",
                "payment card error"
              ],
              variants: [
                "card declined",
                "card payment failed",
                "SBI card online issue",
                "payment rejected",
                "debit card declined"
              ]
            },

      {
              slug: "hdfc-card-declined-online",
              category: "payment",
              metaTitle: "HDFC Card Declined Online? Fix Guide (2026) | JharForm",
              metaDescription: "HDFC card online declined, e-commerce failed ya payment rejected? Reason aur fix samjho.",
              h1: "HDFC Card Declined Online — Fix Ka Tarika",
              lastUpdated: "May 2026",
              readingTime: "5 min",
              difficulty: "Easy",
              description: "HDFC debit/credit card online decline ho rahi hai to online usage, CVV, limit, card status ya international enablement issue ho sakta hai.",
              steps: [
                {
                  title: "Card status check karo",
                  detail: "HDFC app ya netbanking me card active hai ya blocked, ye verify karo."
                },
                {
                  title: "Online transaction enabled dekho",
                  detail: "Debit card me e-commerce/online payments enabled honi chahiye."
                },
                {
                  title: "CVV, expiry aur billing details sahi daalo",
                  detail: "Galat details se payment turant decline ho sakti hai."
                },
                {
                  title: "Limit aur international setting check karo",
                  detail: "Domestic, international aur per-transaction limit alag ho sakti hai."
                },
                {
                  title: "Card tokenization / secure payment update karo",
                  detail: "Merchant side secure payment mode ya card token refresh try karo."
                },
                {
                  title: "Bank support ko decline reason poochho",
                  detail: "Exact decline code ya message note karke support ko share karo."
                }
              ],
              screenshots: [
                {
                  caption: "HDFC card payment declined screen showing error code and try another card message",
                  alt: "HDFC card declined online screen",
                  type: "phone",
                  mockupType: "sbi-card-blocked"
                },
                {
                  caption: "Online checkout page with card declined banner and retry option",
                  alt: "Checkout page showing card declined",
                  type: "browser",
                  mockupType: "bank-passbook"
                }
              ],
              sources: [
                {
                  title: "NPCI RuPay",
                  url: "https://www.npci.org.in/product/rupay",
                  icon: "💳"
                },
                {
                  title: "RBI Complaints",
                  url: "https://rbi.org.in/Scripts/Complaints.aspx",
                  icon: "🏦"
                }
              ],
              proTips: [
                "Screenshot lo aur reference number note karo.",
                "Bank/app support ko exact error text bhejo.",
                "Grievance number ko follow-up me use karo."
              ],
              faqs: [
                {
                  q: "Balance hone ke baad bhi card decline kyu?",
                  a: "Card settings, limits, or merchant restrictions ki wajah se ho sakta hai."
                },
                {
                  q: "Online payment ke liye card unblock kaise?",
                  a: "Bank app me card service section check karo ya support se baat karo."
                },
                {
                  q: "RuPay card ka alag rule hota hai?",
                  a: "Haan, RuPay aur credit/debit card rules bank aur network dono ke hisaab se alag ho sakte hain."
                }
              ],
              related: [
                {
                  title: "ATM Card Blocked Ho Gaya",
                  slug: "atm-card-blocked-ho-gaya",
                  category: "payment"
                },
                {
                  title: "Refund Nahi Mila",
                  slug: "refund-nahi-mila",
                  category: "payment"
                }
              ],
              keywords: [
                "card declined online",
                "HDFC card declined",
                "online card payment rejected",
                "payment card error"
              ],
              variants: [
                "card declined",
                "card payment failed",
                "HDFC card online issue",
                "payment rejected",
                "debit card declined"
              ]
            },

      {
              slug: "icici-card-declined-online",
              category: "payment",
              metaTitle: "ICICI Card Declined Online? Fix Guide (2026) | JharForm",
              metaDescription: "ICICI card online declined, e-commerce failed ya payment rejected? Reason aur fix samjho.",
              h1: "ICICI Card Declined Online — Fix Ka Tarika",
              lastUpdated: "May 2026",
              readingTime: "5 min",
              difficulty: "Easy",
              description: "ICICI debit/credit card online decline ho rahi hai to online usage, CVV, limit, card status ya international enablement issue ho sakta hai.",
              steps: [
                {
                  title: "Card status check karo",
                  detail: "ICICI app ya netbanking me card active hai ya blocked, ye verify karo."
                },
                {
                  title: "Online transaction enabled dekho",
                  detail: "Debit card me e-commerce/online payments enabled honi chahiye."
                },
                {
                  title: "CVV, expiry aur billing details sahi daalo",
                  detail: "Galat details se payment turant decline ho sakti hai."
                },
                {
                  title: "Limit aur international setting check karo",
                  detail: "Domestic, international aur per-transaction limit alag ho sakti hai."
                },
                {
                  title: "Card tokenization / secure payment update karo",
                  detail: "Merchant side secure payment mode ya card token refresh try karo."
                },
                {
                  title: "Bank support ko decline reason poochho",
                  detail: "Exact decline code ya message note karke support ko share karo."
                }
              ],
              screenshots: [
                {
                  caption: "ICICI card payment declined screen showing error code and try another card message",
                  alt: "ICICI card declined online screen",
                  type: "phone",
                  mockupType: "sbi-card-blocked"
                },
                {
                  caption: "Online checkout page with card declined banner and retry option",
                  alt: "Checkout page showing card declined",
                  type: "browser",
                  mockupType: "bank-passbook"
                }
              ],
              sources: [
                {
                  title: "NPCI RuPay",
                  url: "https://www.npci.org.in/product/rupay",
                  icon: "💳"
                },
                {
                  title: "RBI Complaints",
                  url: "https://rbi.org.in/Scripts/Complaints.aspx",
                  icon: "🏦"
                }
              ],
              proTips: [
                "Screenshot lo aur reference number note karo.",
                "Bank/app support ko exact error text bhejo.",
                "Grievance number ko follow-up me use karo."
              ],
              faqs: [
                {
                  q: "Balance hone ke baad bhi card decline kyu?",
                  a: "Card settings, limits, or merchant restrictions ki wajah se ho sakta hai."
                },
                {
                  q: "Online payment ke liye card unblock kaise?",
                  a: "Bank app me card service section check karo ya support se baat karo."
                },
                {
                  q: "RuPay card ka alag rule hota hai?",
                  a: "Haan, RuPay aur credit/debit card rules bank aur network dono ke hisaab se alag ho sakte hain."
                }
              ],
              related: [
                {
                  title: "ATM Card Blocked Ho Gaya",
                  slug: "atm-card-blocked-ho-gaya",
                  category: "payment"
                },
                {
                  title: "Refund Nahi Mila",
                  slug: "refund-nahi-mila",
                  category: "payment"
                }
              ],
              keywords: [
                "card declined online",
                "ICICI card declined",
                "online card payment rejected",
                "payment card error"
              ],
              variants: [
                "card declined",
                "card payment failed",
                "ICICI card online issue",
                "payment rejected",
                "debit card declined"
              ]
            },

      {
              slug: "sbi-otp-not-received",
              category: "payment",
              metaTitle: "SBI OTP Not Received for Payment? Fix (2026) | JharForm",
              metaDescription: "SBI card payment OTP nahi aa raha? SMS, network aur mobile number fix steps.",
              h1: "SBI OTP Nahi Aa Raha — Payment Complete Kaise Kare?",
              lastUpdated: "May 2026",
              readingTime: "4 min",
              difficulty: "Easy",
              description: "SBI card payment karte waqt OTP nahi aa raha to registered mobile, network, SMS inbox aur bank alerts check karne padte hain.",
              steps: [
                {
                  title: "Network aur DND check karo",
                  detail: "SBI registered mobile me signal strong hai ya nahi aur DND/SMS block to nahi hai, ye check karo."
                },
                {
                  title: "SMS inbox full na ho",
                  detail: "Purane alerts delete karo. Kabhi full inbox ki wajah se OTP delivery delay hoti hai."
                },
                {
                  title: "Resend OTP option use karo",
                  detail: "Ek minute wait karke resend OTP dabao. Baar-baar spam mat karo."
                },
                {
                  title: "Registered mobile number verify karo",
                  detail: "Bank me jo number linked hai wahi active hona chahiye."
                },
                {
                  title: "App/browser refresh karo",
                  detail: "Browser cache ya app session issue ho to logout-login ya refresh try karo."
                },
                {
                  title: "Bank support ko inform karo",
                  detail: "Agar 2-3 attempts ke baad bhi OTP na aaye to bank support ko issue batao."
                }
              ],
              screenshots: [
                {
                  caption: "SBI payment verification screen showing OTP not received and resend button",
                  alt: "SBI OTP not received payment screen",
                  type: "phone",
                  mockupType: "android-otp-sms"
                },
                {
                  caption: "Checkout page with OTP pending spinner and SMS delivery warning",
                  alt: "OTP waiting screen during card payment",
                  type: "browser",
                  mockupType: "bank-passbook"
                }
              ],
              sources: [
                {
                  title: "NPCI RuPay",
                  url: "https://www.npci.org.in/product/rupay",
                  icon: "💳"
                },
                {
                  title: "RBI Complaints",
                  url: "https://rbi.org.in/Scripts/Complaints.aspx",
                  icon: "🏦"
                }
              ],
              proTips: [
                "Screenshot lo aur reference number note karo.",
                "Bank/app support ko exact error text bhejo.",
                "Grievance number ko follow-up me use karo."
              ],
              faqs: [
                {
                  q: "OTP delay kitna ho sakta hai?",
                  a: "Usually few seconds se 2 minutes tak. Longer delay me network ya bank issue hota hai."
                },
                {
                  q: "International card me OTP aata hai?",
                  a: "Kabhi SMS, kabhi app approval; merchant aur bank ke hisaab se change hota hai."
                },
                {
                  q: "SMS block ho gaya to kaise pata chale?",
                  a: "Aapka bank alerts aur OTP SMS review karne par block/disable dikh sakta hai."
                }
              ],
              related: [
                {
                  title: "Card Declined Online",
                  slug: "card-declined-online",
                  category: "payment"
                },
                {
                  title: "UPI Payment Pending",
                  slug: "upi-payment-pending",
                  category: "payment"
                }
              ],
              keywords: [
                "otp not received",
                "SBI otp issue",
                "payment otp nahi aaya",
                "card payment otp problem"
              ],
              variants: [
                "otp nahi aa raha",
                "payment otp issue",
                "SBI otp",
                "sms otp not received",
                "card otp delay"
              ]
            },

      {
              slug: "hdfc-otp-not-received",
              category: "payment",
              metaTitle: "HDFC OTP Not Received for Payment? Fix (2026) | JharForm",
              metaDescription: "HDFC card payment OTP nahi aa raha? SMS, network aur mobile number fix steps.",
              h1: "HDFC OTP Nahi Aa Raha — Payment Complete Kaise Kare?",
              lastUpdated: "May 2026",
              readingTime: "4 min",
              difficulty: "Easy",
              description: "HDFC card payment karte waqt OTP nahi aa raha to registered mobile, network, SMS inbox aur bank alerts check karne padte hain.",
              steps: [
                {
                  title: "Network aur DND check karo",
                  detail: "HDFC registered mobile me signal strong hai ya nahi aur DND/SMS block to nahi hai, ye check karo."
                },
                {
                  title: "SMS inbox full na ho",
                  detail: "Purane alerts delete karo. Kabhi full inbox ki wajah se OTP delivery delay hoti hai."
                },
                {
                  title: "Resend OTP option use karo",
                  detail: "Ek minute wait karke resend OTP dabao. Baar-baar spam mat karo."
                },
                {
                  title: "Registered mobile number verify karo",
                  detail: "Bank me jo number linked hai wahi active hona chahiye."
                },
                {
                  title: "App/browser refresh karo",
                  detail: "Browser cache ya app session issue ho to logout-login ya refresh try karo."
                },
                {
                  title: "Bank support ko inform karo",
                  detail: "Agar 2-3 attempts ke baad bhi OTP na aaye to bank support ko issue batao."
                }
              ],
              screenshots: [
                {
                  caption: "HDFC payment verification screen showing OTP not received and resend button",
                  alt: "HDFC OTP not received payment screen",
                  type: "phone",
                  mockupType: "android-otp-sms"
                },
                {
                  caption: "Checkout page with OTP pending spinner and SMS delivery warning",
                  alt: "OTP waiting screen during card payment",
                  type: "browser",
                  mockupType: "bank-passbook"
                }
              ],
              sources: [
                {
                  title: "NPCI RuPay",
                  url: "https://www.npci.org.in/product/rupay",
                  icon: "💳"
                },
                {
                  title: "RBI Complaints",
                  url: "https://rbi.org.in/Scripts/Complaints.aspx",
                  icon: "🏦"
                }
              ],
              proTips: [
                "Screenshot lo aur reference number note karo.",
                "Bank/app support ko exact error text bhejo.",
                "Grievance number ko follow-up me use karo."
              ],
              faqs: [
                {
                  q: "OTP delay kitna ho sakta hai?",
                  a: "Usually few seconds se 2 minutes tak. Longer delay me network ya bank issue hota hai."
                },
                {
                  q: "International card me OTP aata hai?",
                  a: "Kabhi SMS, kabhi app approval; merchant aur bank ke hisaab se change hota hai."
                },
                {
                  q: "SMS block ho gaya to kaise pata chale?",
                  a: "Aapka bank alerts aur OTP SMS review karne par block/disable dikh sakta hai."
                }
              ],
              related: [
                {
                  title: "Card Declined Online",
                  slug: "card-declined-online",
                  category: "payment"
                },
                {
                  title: "UPI Payment Pending",
                  slug: "upi-payment-pending",
                  category: "payment"
                }
              ],
              keywords: [
                "otp not received",
                "HDFC otp issue",
                "payment otp nahi aaya",
                "card payment otp problem"
              ],
              variants: [
                "otp nahi aa raha",
                "payment otp issue",
                "HDFC otp",
                "sms otp not received",
                "card otp delay"
              ]
            },

      {
              slug: "icici-otp-not-received",
              category: "payment",
              metaTitle: "ICICI OTP Not Received for Payment? Fix (2026) | JharForm",
              metaDescription: "ICICI card payment OTP nahi aa raha? SMS, network aur mobile number fix steps.",
              h1: "ICICI OTP Nahi Aa Raha — Payment Complete Kaise Kare?",
              lastUpdated: "May 2026",
              readingTime: "4 min",
              difficulty: "Easy",
              description: "ICICI card payment karte waqt OTP nahi aa raha to registered mobile, network, SMS inbox aur bank alerts check karne padte hain.",
              steps: [
                {
                  title: "Network aur DND check karo",
                  detail: "ICICI registered mobile me signal strong hai ya nahi aur DND/SMS block to nahi hai, ye check karo."
                },
                {
                  title: "SMS inbox full na ho",
                  detail: "Purane alerts delete karo. Kabhi full inbox ki wajah se OTP delivery delay hoti hai."
                },
                {
                  title: "Resend OTP option use karo",
                  detail: "Ek minute wait karke resend OTP dabao. Baar-baar spam mat karo."
                },
                {
                  title: "Registered mobile number verify karo",
                  detail: "Bank me jo number linked hai wahi active hona chahiye."
                },
                {
                  title: "App/browser refresh karo",
                  detail: "Browser cache ya app session issue ho to logout-login ya refresh try karo."
                },
                {
                  title: "Bank support ko inform karo",
                  detail: "Agar 2-3 attempts ke baad bhi OTP na aaye to bank support ko issue batao."
                }
              ],
              screenshots: [
                {
                  caption: "ICICI payment verification screen showing OTP not received and resend button",
                  alt: "ICICI OTP not received payment screen",
                  type: "phone",
                  mockupType: "android-otp-sms"
                },
                {
                  caption: "Checkout page with OTP pending spinner and SMS delivery warning",
                  alt: "OTP waiting screen during card payment",
                  type: "browser",
                  mockupType: "bank-passbook"
                }
              ],
              sources: [
                {
                  title: "NPCI RuPay",
                  url: "https://www.npci.org.in/product/rupay",
                  icon: "💳"
                },
                {
                  title: "RBI Complaints",
                  url: "https://rbi.org.in/Scripts/Complaints.aspx",
                  icon: "🏦"
                }
              ],
              proTips: [
                "Screenshot lo aur reference number note karo.",
                "Bank/app support ko exact error text bhejo.",
                "Grievance number ko follow-up me use karo."
              ],
              faqs: [
                {
                  q: "OTP delay kitna ho sakta hai?",
                  a: "Usually few seconds se 2 minutes tak. Longer delay me network ya bank issue hota hai."
                },
                {
                  q: "International card me OTP aata hai?",
                  a: "Kabhi SMS, kabhi app approval; merchant aur bank ke hisaab se change hota hai."
                },
                {
                  q: "SMS block ho gaya to kaise pata chale?",
                  a: "Aapka bank alerts aur OTP SMS review karne par block/disable dikh sakta hai."
                }
              ],
              related: [
                {
                  title: "Card Declined Online",
                  slug: "card-declined-online",
                  category: "payment"
                },
                {
                  title: "UPI Payment Pending",
                  slug: "upi-payment-pending",
                  category: "payment"
                }
              ],
              keywords: [
                "otp not received",
                "ICICI otp issue",
                "payment otp nahi aaya",
                "card payment otp problem"
              ],
              variants: [
                "otp nahi aa raha",
                "payment otp issue",
                "ICICI otp",
                "sms otp not received",
                "card otp delay"
              ]
            },

      {
              slug: "sbi-atm-cash-not-dispensed",
              category: "payment",
              metaTitle: "SBI ATM Cash Debited But Not Dispensed? Fix (2026) | JharForm",
              metaDescription: "SBI ATM me cash debited but not dispensed? Reversal, complaint aur grievance process.",
              h1: "SBI ATM Se Paise Katen Aur Cash Nahi Nikla — Kya Kare?",
              lastUpdated: "May 2026",
              readingTime: "5 min",
              difficulty: "Medium",
              description: "SBI ATM se cash nahi nikla lekin account debit ho gaya to reversal complaint aur ATM details track karni padti hai.",
              steps: [
                {
                  title: "ATM receipt aur time note karo",
                  detail: "SBI ATM se transaction time, ATM location aur receipt screenshot save karo."
                },
                {
                  title: "Bank balance/mini statement check karo",
                  detail: "Debit entry confirm karo aur exact amount note karo."
                },
                {
                  title: "24 hours reversal wait karo",
                  detail: "Many ATM failures auto-reverse within 24 hours, but bank-wise time alag ho sakta hai."
                },
                {
                  title: "Bank complaint file karo",
                  detail: "Customer care ya branch ko transaction reference ke saath complaint karo."
                },
                {
                  title: "RBI grievance route use karo",
                  detail: "Agar 5-7 working days me problem resolve na ho to RBI complaint submit karo."
                },
                {
                  title: "Cash shortage proof sambhalo",
                  detail: "ATM slip, SMS, passbook screenshot aur location proof safe rakho."
                }
              ],
              screenshots: [
                {
                  caption: "SBI ATM cash withdrawal screen showing debited amount and cash not dispensed warning",
                  alt: "SBI ATM cash not dispensed screen",
                  type: "phone",
                  mockupType: "bank-passbook"
                },
                {
                  caption: "SBI ATM complaint screen with reversal expected note and transaction reference",
                  alt: "SBI ATM complaint and reversal note",
                  type: "browser",
                  mockupType: "sbi-card-blocked"
                }
              ],
              sources: [
                {
                  title: "NPCI RuPay",
                  url: "https://www.npci.org.in/product/rupay",
                  icon: "💳"
                },
                {
                  title: "RBI Complaints",
                  url: "https://rbi.org.in/Scripts/Complaints.aspx",
                  icon: "🏦"
                }
              ],
              proTips: [
                "Screenshot lo aur reference number note karo.",
                "Bank/app support ko exact error text bhejo.",
                "Grievance number ko follow-up me use karo."
              ],
              faqs: [
                {
                  q: "ATM cash not dispensed me refund kitne din mein?",
                  a: "Usually 24 hours to 7 working days, bank process ke hisaab se."
                },
                {
                  q: "Agar receipt nahi nikli to?",
                  a: "SMS alert, passbook entry aur ATM location details kaafi help karti hain."
                },
                {
                  q: "Same bank ka ATM aur dusra bank ka ATM process alag hai?",
                  a: "Complaint bank issuer handle karta hai, location details important hoti hai."
                }
              ],
              related: [
                {
                  title: "ATM Card Blocked Ho Gaya",
                  slug: "atm-card-blocked-ho-gaya",
                  category: "payment"
                },
                {
                  title: "Refund Nahi Mila",
                  slug: "refund-nahi-mila",
                  category: "payment"
                }
              ],
              keywords: [
                "atm cash not dispensed",
                "SBI atm debited not dispensed",
                "cash not received atm",
                "atm reversal"
              ],
              variants: [
                "atm se cash nahi nikla",
                "cash debited",
                "SBI atm issue",
                "atm withdrawal failed",
                "money not dispensed"
              ]
            },

      {
              slug: "hdfc-atm-cash-not-dispensed",
              category: "payment",
              metaTitle: "HDFC ATM Cash Debited But Not Dispensed? Fix (2026) | JharForm",
              metaDescription: "HDFC ATM me cash debited but not dispensed? Reversal, complaint aur grievance process.",
              h1: "HDFC ATM Se Paise Katen Aur Cash Nahi Nikla — Kya Kare?",
              lastUpdated: "May 2026",
              readingTime: "5 min",
              difficulty: "Medium",
              description: "HDFC ATM se cash nahi nikla lekin account debit ho gaya to reversal complaint aur ATM details track karni padti hai.",
              steps: [
                {
                  title: "ATM receipt aur time note karo",
                  detail: "HDFC ATM se transaction time, ATM location aur receipt screenshot save karo."
                },
                {
                  title: "Bank balance/mini statement check karo",
                  detail: "Debit entry confirm karo aur exact amount note karo."
                },
                {
                  title: "24 hours reversal wait karo",
                  detail: "Many ATM failures auto-reverse within 24 hours, but bank-wise time alag ho sakta hai."
                },
                {
                  title: "Bank complaint file karo",
                  detail: "Customer care ya branch ko transaction reference ke saath complaint karo."
                },
                {
                  title: "RBI grievance route use karo",
                  detail: "Agar 5-7 working days me problem resolve na ho to RBI complaint submit karo."
                },
                {
                  title: "Cash shortage proof sambhalo",
                  detail: "ATM slip, SMS, passbook screenshot aur location proof safe rakho."
                }
              ],
              screenshots: [
                {
                  caption: "HDFC ATM cash withdrawal screen showing debited amount and cash not dispensed warning",
                  alt: "HDFC ATM cash not dispensed screen",
                  type: "phone",
                  mockupType: "bank-passbook"
                },
                {
                  caption: "HDFC ATM complaint screen with reversal expected note and transaction reference",
                  alt: "HDFC ATM complaint and reversal note",
                  type: "browser",
                  mockupType: "sbi-card-blocked"
                }
              ],
              sources: [
                {
                  title: "NPCI RuPay",
                  url: "https://www.npci.org.in/product/rupay",
                  icon: "💳"
                },
                {
                  title: "RBI Complaints",
                  url: "https://rbi.org.in/Scripts/Complaints.aspx",
                  icon: "🏦"
                }
              ],
              proTips: [
                "Screenshot lo aur reference number note karo.",
                "Bank/app support ko exact error text bhejo.",
                "Grievance number ko follow-up me use karo."
              ],
              faqs: [
                {
                  q: "ATM cash not dispensed me refund kitne din mein?",
                  a: "Usually 24 hours to 7 working days, bank process ke hisaab se."
                },
                {
                  q: "Agar receipt nahi nikli to?",
                  a: "SMS alert, passbook entry aur ATM location details kaafi help karti hain."
                },
                {
                  q: "Same bank ka ATM aur dusra bank ka ATM process alag hai?",
                  a: "Complaint bank issuer handle karta hai, location details important hoti hai."
                }
              ],
              related: [
                {
                  title: "ATM Card Blocked Ho Gaya",
                  slug: "atm-card-blocked-ho-gaya",
                  category: "payment"
                },
                {
                  title: "Refund Nahi Mila",
                  slug: "refund-nahi-mila",
                  category: "payment"
                }
              ],
              keywords: [
                "atm cash not dispensed",
                "HDFC atm debited not dispensed",
                "cash not received atm",
                "atm reversal"
              ],
              variants: [
                "atm se cash nahi nikla",
                "cash debited",
                "HDFC atm issue",
                "atm withdrawal failed",
                "money not dispensed"
              ]
            },

      {
              slug: "icici-atm-cash-not-dispensed",
              category: "payment",
              metaTitle: "ICICI ATM Cash Debited But Not Dispensed? Fix (2026) | JharForm",
              metaDescription: "ICICI ATM me cash debited but not dispensed? Reversal, complaint aur grievance process.",
              h1: "ICICI ATM Se Paise Katen Aur Cash Nahi Nikla — Kya Kare?",
              lastUpdated: "May 2026",
              readingTime: "5 min",
              difficulty: "Medium",
              description: "ICICI ATM se cash nahi nikla lekin account debit ho gaya to reversal complaint aur ATM details track karni padti hai.",
              steps: [
                {
                  title: "ATM receipt aur time note karo",
                  detail: "ICICI ATM se transaction time, ATM location aur receipt screenshot save karo."
                },
                {
                  title: "Bank balance/mini statement check karo",
                  detail: "Debit entry confirm karo aur exact amount note karo."
                },
                {
                  title: "24 hours reversal wait karo",
                  detail: "Many ATM failures auto-reverse within 24 hours, but bank-wise time alag ho sakta hai."
                },
                {
                  title: "Bank complaint file karo",
                  detail: "Customer care ya branch ko transaction reference ke saath complaint karo."
                },
                {
                  title: "RBI grievance route use karo",
                  detail: "Agar 5-7 working days me problem resolve na ho to RBI complaint submit karo."
                },
                {
                  title: "Cash shortage proof sambhalo",
                  detail: "ATM slip, SMS, passbook screenshot aur location proof safe rakho."
                }
              ],
              screenshots: [
                {
                  caption: "ICICI ATM cash withdrawal screen showing debited amount and cash not dispensed warning",
                  alt: "ICICI ATM cash not dispensed screen",
                  type: "phone",
                  mockupType: "bank-passbook"
                },
                {
                  caption: "ICICI ATM complaint screen with reversal expected note and transaction reference",
                  alt: "ICICI ATM complaint and reversal note",
                  type: "browser",
                  mockupType: "sbi-card-blocked"
                }
              ],
              sources: [
                {
                  title: "NPCI RuPay",
                  url: "https://www.npci.org.in/product/rupay",
                  icon: "💳"
                },
                {
                  title: "RBI Complaints",
                  url: "https://rbi.org.in/Scripts/Complaints.aspx",
                  icon: "🏦"
                }
              ],
              proTips: [
                "Screenshot lo aur reference number note karo.",
                "Bank/app support ko exact error text bhejo.",
                "Grievance number ko follow-up me use karo."
              ],
              faqs: [
                {
                  q: "ATM cash not dispensed me refund kitne din mein?",
                  a: "Usually 24 hours to 7 working days, bank process ke hisaab se."
                },
                {
                  q: "Agar receipt nahi nikli to?",
                  a: "SMS alert, passbook entry aur ATM location details kaafi help karti hain."
                },
                {
                  q: "Same bank ka ATM aur dusra bank ka ATM process alag hai?",
                  a: "Complaint bank issuer handle karta hai, location details important hoti hai."
                }
              ],
              related: [
                {
                  title: "ATM Card Blocked Ho Gaya",
                  slug: "atm-card-blocked-ho-gaya",
                  category: "payment"
                },
                {
                  title: "Refund Nahi Mila",
                  slug: "refund-nahi-mila",
                  category: "payment"
                }
              ],
              keywords: [
                "atm cash not dispensed",
                "ICICI atm debited not dispensed",
                "cash not received atm",
                "atm reversal"
              ],
              variants: [
                "atm se cash nahi nikla",
                "cash debited",
                "ICICI atm issue",
                "atm withdrawal failed",
                "money not dispensed"
              ]
            },

      {
              slug: "phonepe-autopay-failed",
              category: "payment",
              metaTitle: "PhonePe Autopay Failed? Mandate Fix Guide (2026) | JharForm",
              metaDescription: "PhonePe UPI autopay mandate failed, recurring debit issue aur fix steps.",
              h1: "PhonePe UPI Autopay Failed — Mandate Kaise Sahi Kare?",
              lastUpdated: "May 2026",
              readingTime: "5 min",
              difficulty: "Medium",
              description: "PhonePe me UPI Autopay ya mandate fail ho jaye to balance, mandate expiry aur bank permissions check karni padti hain.",
              steps: [
                {
                  title: "Mandate status check karo",
                  detail: "PhonePe me Payments/Autopay/Mandate section kholkar active status dekho."
                },
                {
                  title: "Balance aur limit verify karo",
                  detail: "Recurring debit fail hone ka common reason insufficient balance ya low UPI limit hota hai."
                },
                {
                  title: "Mandate expiry dekho",
                  detail: "Kuch mandates date ke baad expire ho jaati hain; fresh approval dena padta hai."
                },
                {
                  title: "Permissions aur notifications on rakho",
                  detail: "Autopay reminder aur approval notifications off ho to payment miss ho sakti hai."
                },
                {
                  title: "Mandate re-create karo",
                  detail: "Old mandate delete karke naya autopay setup karo."
                },
                {
                  title: "Support ko failed ref bhejo",
                  detail: "Reference number ke saath app support ya bank support ko issue report karo."
                }
              ],
              screenshots: [
                {
                  caption: "PhonePe mandate failed screen showing retry approval and expired mandate warning",
                  alt: "PhonePe autopay mandate failed screen",
                  type: "phone",
                  mockupType: "upi-dispute"
                },
                {
                  caption: "Bank passbook style recurring debit failed entry with pending status",
                  alt: "Bank passbook recurring payment failed",
                  type: "phone",
                  mockupType: "bank-passbook"
                }
              ],
              sources: [
                {
                  title: "NPCI UPI",
                  url: "https://www.npci.org.in/product/upi",
                  icon: "📱"
                },
                {
                  title: "UPI Help",
                  url: "https://upihelp.npci.org.in/",
                  icon: "📊"
                },
                {
                  title: "RBI Complaints",
                  url: "https://rbi.org.in/Scripts/Complaints.aspx",
                  icon: "🏦"
                }
              ],
              proTips: [
                "Screenshot lo aur reference number note karo.",
                "Bank/app support ko exact error text bhejo.",
                "Grievance number ko follow-up me use karo."
              ],
              faqs: [
                {
                  q: "Autopay fail hone se penalty lag sakti hai?",
                  a: "Kuch billers late fee charge kar sakte hain, isliye quickly re-approve karo."
                },
                {
                  q: "Mandate cancel kaise hota hai?",
                  a: "App ya bank mandate list me jaake cancel option hota hai."
                },
                {
                  q: "UPI autopay aur card recurring same hai?",
                  a: "Nahi, setup aur approval flow different hota hai."
                }
              ],
              related: [
                {
                  title: "UPI Payment Pending",
                  slug: "upi-payment-pending",
                  category: "payment"
                },
                {
                  title: "Refund Nahi Mila",
                  slug: "refund-nahi-mila",
                  category: "payment"
                }
              ],
              keywords: [
                "upi autopay failed",
                "mandate failed",
                "PhonePe autopay issue",
                "recurring payment failed"
              ],
              variants: [
                "autopay failed",
                "mandate failed",
                "PhonePe autopay",
                "recurring debit problem",
                "subscription mandate"
              ]
            },

      {
              slug: "gpay-autopay-failed",
              category: "payment",
              metaTitle: "Google Pay Autopay Failed? Mandate Fix Guide (2026) | JharForm",
              metaDescription: "Google Pay UPI autopay mandate failed, recurring debit issue aur fix steps.",
              h1: "Google Pay UPI Autopay Failed — Mandate Kaise Sahi Kare?",
              lastUpdated: "May 2026",
              readingTime: "5 min",
              difficulty: "Medium",
              description: "Google Pay me UPI Autopay ya mandate fail ho jaye to balance, mandate expiry aur bank permissions check karni padti hain.",
              steps: [
                {
                  title: "Mandate status check karo",
                  detail: "Google Pay me Payments/Autopay/Mandate section kholkar active status dekho."
                },
                {
                  title: "Balance aur limit verify karo",
                  detail: "Recurring debit fail hone ka common reason insufficient balance ya low UPI limit hota hai."
                },
                {
                  title: "Mandate expiry dekho",
                  detail: "Kuch mandates date ke baad expire ho jaati hain; fresh approval dena padta hai."
                },
                {
                  title: "Permissions aur notifications on rakho",
                  detail: "Autopay reminder aur approval notifications off ho to payment miss ho sakti hai."
                },
                {
                  title: "Mandate re-create karo",
                  detail: "Old mandate delete karke naya autopay setup karo."
                },
                {
                  title: "Support ko failed ref bhejo",
                  detail: "Reference number ke saath app support ya bank support ko issue report karo."
                }
              ],
              screenshots: [
                {
                  caption: "Google Pay mandate failed screen showing retry approval and expired mandate warning",
                  alt: "Google Pay autopay mandate failed screen",
                  type: "phone",
                  mockupType: "upi-dispute"
                },
                {
                  caption: "Bank passbook style recurring debit failed entry with pending status",
                  alt: "Bank passbook recurring payment failed",
                  type: "phone",
                  mockupType: "bank-passbook"
                }
              ],
              sources: [
                {
                  title: "NPCI UPI",
                  url: "https://www.npci.org.in/product/upi",
                  icon: "📱"
                },
                {
                  title: "UPI Help",
                  url: "https://upihelp.npci.org.in/",
                  icon: "📊"
                },
                {
                  title: "RBI Complaints",
                  url: "https://rbi.org.in/Scripts/Complaints.aspx",
                  icon: "🏦"
                }
              ],
              proTips: [
                "Screenshot lo aur reference number note karo.",
                "Bank/app support ko exact error text bhejo.",
                "Grievance number ko follow-up me use karo."
              ],
              faqs: [
                {
                  q: "Autopay fail hone se penalty lag sakti hai?",
                  a: "Kuch billers late fee charge kar sakte hain, isliye quickly re-approve karo."
                },
                {
                  q: "Mandate cancel kaise hota hai?",
                  a: "App ya bank mandate list me jaake cancel option hota hai."
                },
                {
                  q: "UPI autopay aur card recurring same hai?",
                  a: "Nahi, setup aur approval flow different hota hai."
                }
              ],
              related: [
                {
                  title: "UPI Payment Pending",
                  slug: "upi-payment-pending",
                  category: "payment"
                },
                {
                  title: "Refund Nahi Mila",
                  slug: "refund-nahi-mila",
                  category: "payment"
                }
              ],
              keywords: [
                "upi autopay failed",
                "mandate failed",
                "Google Pay autopay issue",
                "recurring payment failed"
              ],
              variants: [
                "autopay failed",
                "mandate failed",
                "Google Pay autopay",
                "recurring debit problem",
                "subscription mandate"
              ]
            },

      {
              slug: "paytm-autopay-failed",
              category: "payment",
              metaTitle: "Paytm Autopay Failed? Mandate Fix Guide (2026) | JharForm",
              metaDescription: "Paytm UPI autopay mandate failed, recurring debit issue aur fix steps.",
              h1: "Paytm UPI Autopay Failed — Mandate Kaise Sahi Kare?",
              lastUpdated: "May 2026",
              readingTime: "5 min",
              difficulty: "Medium",
              description: "Paytm me UPI Autopay ya mandate fail ho jaye to balance, mandate expiry aur bank permissions check karni padti hain.",
              steps: [
                {
                  title: "Mandate status check karo",
                  detail: "Paytm me Payments/Autopay/Mandate section kholkar active status dekho."
                },
                {
                  title: "Balance aur limit verify karo",
                  detail: "Recurring debit fail hone ka common reason insufficient balance ya low UPI limit hota hai."
                },
                {
                  title: "Mandate expiry dekho",
                  detail: "Kuch mandates date ke baad expire ho jaati hain; fresh approval dena padta hai."
                },
                {
                  title: "Permissions aur notifications on rakho",
                  detail: "Autopay reminder aur approval notifications off ho to payment miss ho sakti hai."
                },
                {
                  title: "Mandate re-create karo",
                  detail: "Old mandate delete karke naya autopay setup karo."
                },
                {
                  title: "Support ko failed ref bhejo",
                  detail: "Reference number ke saath app support ya bank support ko issue report karo."
                }
              ],
              screenshots: [
                {
                  caption: "Paytm mandate failed screen showing retry approval and expired mandate warning",
                  alt: "Paytm autopay mandate failed screen",
                  type: "phone",
                  mockupType: "upi-dispute"
                },
                {
                  caption: "Bank passbook style recurring debit failed entry with pending status",
                  alt: "Bank passbook recurring payment failed",
                  type: "phone",
                  mockupType: "bank-passbook"
                }
              ],
              sources: [
                {
                  title: "NPCI UPI",
                  url: "https://www.npci.org.in/product/upi",
                  icon: "📱"
                },
                {
                  title: "UPI Help",
                  url: "https://upihelp.npci.org.in/",
                  icon: "📊"
                },
                {
                  title: "RBI Complaints",
                  url: "https://rbi.org.in/Scripts/Complaints.aspx",
                  icon: "🏦"
                }
              ],
              proTips: [
                "Screenshot lo aur reference number note karo.",
                "Bank/app support ko exact error text bhejo.",
                "Grievance number ko follow-up me use karo."
              ],
              faqs: [
                {
                  q: "Autopay fail hone se penalty lag sakti hai?",
                  a: "Kuch billers late fee charge kar sakte hain, isliye quickly re-approve karo."
                },
                {
                  q: "Mandate cancel kaise hota hai?",
                  a: "App ya bank mandate list me jaake cancel option hota hai."
                },
                {
                  q: "UPI autopay aur card recurring same hai?",
                  a: "Nahi, setup aur approval flow different hota hai."
                }
              ],
              related: [
                {
                  title: "UPI Payment Pending",
                  slug: "upi-payment-pending",
                  category: "payment"
                },
                {
                  title: "Refund Nahi Mila",
                  slug: "refund-nahi-mila",
                  category: "payment"
                }
              ],
              keywords: [
                "upi autopay failed",
                "mandate failed",
                "Paytm autopay issue",
                "recurring payment failed"
              ],
              variants: [
                "autopay failed",
                "mandate failed",
                "Paytm autopay",
                "recurring debit problem",
                "subscription mandate"
              ]
            },

      {
              slug: "netflix-subscription-payment-failed",
              category: "payment",
              metaTitle: "Netflix Subscription Payment Failed? Fix (2026) | JharForm",
              metaDescription: "Netflix subscription payment failed, renew nahi hua? Card/UPI fix steps aur support guide.",
              h1: "Netflix Subscription Payment Failed — Renew Kaise Kare?",
              lastUpdated: "May 2026",
              readingTime: "5 min",
              difficulty: "Easy",
              description: "Netflix subscription payment fail hone par card, UPI, autopay ya billing profile issue ho sakta hai. Service renew nahi hoti aur access block ho sakta hai.",
              steps: [
                {
                  title: "Billing method update karo",
                  detail: "Netflix account me payment method open karke active card/UPI add karo."
                },
                {
                  title: "Recurring permission check karo",
                  detail: "Autopay/recurring permission on hai ya nahi, ye verify karo."
                },
                {
                  title: "Retry payment manually karo",
                  detail: "Service dashboard se retry payment ya update subscription button use karo."
                },
                {
                  title: "Bank decline reason dekho",
                  detail: "Agar payment repeatedly fail ho rahi hai to bank decline text note karo."
                },
                {
                  title: "Service support contact karo",
                  detail: "Netflix support ko screenshot aur payment reference bhejo."
                },
                {
                  title: "Next billing date note karo",
                  detail: "Renewal miss hone se plan lock na ho isliye due date track karo."
                }
              ],
              screenshots: [
                {
                  caption: "Netflix billing screen showing failed subscription renewal and update payment method button",
                  alt: "Netflix subscription failed screen",
                  type: "browser",
                  mockupType: "upi-dispute"
                },
                {
                  caption: "Payment history screen showing recurring charge failed and retry option",
                  alt: "Subscription payment failure transaction history",
                  type: "phone",
                  mockupType: "phonepe-transaction"
                }
              ],
              sources: [
                {
                  title: "NPCI UPI",
                  url: "https://www.npci.org.in/product/upi",
                  icon: "📱"
                },
                {
                  title: "RBI Complaints",
                  url: "https://rbi.org.in/Scripts/Complaints.aspx",
                  icon: "🏦"
                },
                {
                  title: "National Consumer Helpline",
                  url: "https://consumerhelpline.gov.in/",
                  icon: "🛡️"
                }
              ],
              proTips: [
                "Screenshot lo aur reference number note karo.",
                "Bank/app support ko exact error text bhejo.",
                "Grievance number ko follow-up me use karo."
              ],
              faqs: [
                {
                  q: "Subscription payment fail hone par service turant band ho jaati hai?",
                  a: "Kabhi grace period milta hai, kabhi immediate suspend ho sakta hai."
                },
                {
                  q: "UPI se subscription chal sakti hai?",
                  a: "Haan, UPI Autopay ya regular one-time payment dono options mil sakte hain."
                },
                {
                  q: "Failed subscription ka refund milta hai?",
                  a: "Agar debit hua aur service activate nahi hui to merchant/service support refund process karta hai."
                }
              ],
              related: [
                {
                  title: "Refund Nahi Mila",
                  slug: "refund-nahi-mila",
                  category: "payment"
                },
                {
                  title: "UPI Payment Pending",
                  slug: "upi-payment-pending",
                  category: "payment"
                }
              ],
              keywords: [
                "subscription payment failed",
                "Netflix payment failed",
                "renewal failed",
                "subscription renew nahi hua"
              ],
              variants: [
                "subscription failed",
                "renewal failed",
                "Netflix subscription",
                "plan payment failed",
                "billing failed"
              ]
            },

      {
              slug: "youtube-premium-subscription-payment-failed",
              category: "payment",
              metaTitle: "YouTube Premium Subscription Payment Failed? Fix (2026) | JharForm",
              metaDescription: "YouTube Premium subscription payment failed, renew nahi hua? Card/UPI fix steps aur support guide.",
              h1: "YouTube Premium Subscription Payment Failed — Renew Kaise Kare?",
              lastUpdated: "May 2026",
              readingTime: "5 min",
              difficulty: "Easy",
              description: "YouTube Premium subscription payment fail hone par card, UPI, autopay ya billing profile issue ho sakta hai. Service renew nahi hoti aur access block ho sakta hai.",
              steps: [
                {
                  title: "Billing method update karo",
                  detail: "YouTube Premium account me payment method open karke active card/UPI add karo."
                },
                {
                  title: "Recurring permission check karo",
                  detail: "Autopay/recurring permission on hai ya nahi, ye verify karo."
                },
                {
                  title: "Retry payment manually karo",
                  detail: "Service dashboard se retry payment ya update subscription button use karo."
                },
                {
                  title: "Bank decline reason dekho",
                  detail: "Agar payment repeatedly fail ho rahi hai to bank decline text note karo."
                },
                {
                  title: "Service support contact karo",
                  detail: "YouTube Premium support ko screenshot aur payment reference bhejo."
                },
                {
                  title: "Next billing date note karo",
                  detail: "Renewal miss hone se plan lock na ho isliye due date track karo."
                }
              ],
              screenshots: [
                {
                  caption: "YouTube Premium billing screen showing failed subscription renewal and update payment method button",
                  alt: "YouTube Premium subscription failed screen",
                  type: "browser",
                  mockupType: "upi-dispute"
                },
                {
                  caption: "Payment history screen showing recurring charge failed and retry option",
                  alt: "Subscription payment failure transaction history",
                  type: "phone",
                  mockupType: "phonepe-transaction"
                }
              ],
              sources: [
                {
                  title: "NPCI UPI",
                  url: "https://www.npci.org.in/product/upi",
                  icon: "📱"
                },
                {
                  title: "RBI Complaints",
                  url: "https://rbi.org.in/Scripts/Complaints.aspx",
                  icon: "🏦"
                },
                {
                  title: "National Consumer Helpline",
                  url: "https://consumerhelpline.gov.in/",
                  icon: "🛡️"
                }
              ],
              proTips: [
                "Screenshot lo aur reference number note karo.",
                "Bank/app support ko exact error text bhejo.",
                "Grievance number ko follow-up me use karo."
              ],
              faqs: [
                {
                  q: "Subscription payment fail hone par service turant band ho jaati hai?",
                  a: "Kabhi grace period milta hai, kabhi immediate suspend ho sakta hai."
                },
                {
                  q: "UPI se subscription chal sakti hai?",
                  a: "Haan, UPI Autopay ya regular one-time payment dono options mil sakte hain."
                },
                {
                  q: "Failed subscription ka refund milta hai?",
                  a: "Agar debit hua aur service activate nahi hui to merchant/service support refund process karta hai."
                }
              ],
              related: [
                {
                  title: "Refund Nahi Mila",
                  slug: "refund-nahi-mila",
                  category: "payment"
                },
                {
                  title: "UPI Payment Pending",
                  slug: "upi-payment-pending",
                  category: "payment"
                }
              ],
              keywords: [
                "subscription payment failed",
                "YouTube Premium payment failed",
                "renewal failed",
                "subscription renew nahi hua"
              ],
              variants: [
                "subscription failed",
                "renewal failed",
                "YouTube Premium subscription",
                "plan payment failed",
                "billing failed"
              ]
            },

      {
              slug: "spotify-subscription-payment-failed",
              category: "payment",
              metaTitle: "Spotify Subscription Payment Failed? Fix (2026) | JharForm",
              metaDescription: "Spotify subscription payment failed, renew nahi hua? Card/UPI fix steps aur support guide.",
              h1: "Spotify Subscription Payment Failed — Renew Kaise Kare?",
              lastUpdated: "May 2026",
              readingTime: "5 min",
              difficulty: "Easy",
              description: "Spotify subscription payment fail hone par card, UPI, autopay ya billing profile issue ho sakta hai. Service renew nahi hoti aur access block ho sakta hai.",
              steps: [
                {
                  title: "Billing method update karo",
                  detail: "Spotify account me payment method open karke active card/UPI add karo."
                },
                {
                  title: "Recurring permission check karo",
                  detail: "Autopay/recurring permission on hai ya nahi, ye verify karo."
                },
                {
                  title: "Retry payment manually karo",
                  detail: "Service dashboard se retry payment ya update subscription button use karo."
                },
                {
                  title: "Bank decline reason dekho",
                  detail: "Agar payment repeatedly fail ho rahi hai to bank decline text note karo."
                },
                {
                  title: "Service support contact karo",
                  detail: "Spotify support ko screenshot aur payment reference bhejo."
                },
                {
                  title: "Next billing date note karo",
                  detail: "Renewal miss hone se plan lock na ho isliye due date track karo."
                }
              ],
              screenshots: [
                {
                  caption: "Spotify billing screen showing failed subscription renewal and update payment method button",
                  alt: "Spotify subscription failed screen",
                  type: "browser",
                  mockupType: "upi-dispute"
                },
                {
                  caption: "Payment history screen showing recurring charge failed and retry option",
                  alt: "Subscription payment failure transaction history",
                  type: "phone",
                  mockupType: "phonepe-transaction"
                }
              ],
              sources: [
                {
                  title: "NPCI UPI",
                  url: "https://www.npci.org.in/product/upi",
                  icon: "📱"
                },
                {
                  title: "RBI Complaints",
                  url: "https://rbi.org.in/Scripts/Complaints.aspx",
                  icon: "🏦"
                },
                {
                  title: "National Consumer Helpline",
                  url: "https://consumerhelpline.gov.in/",
                  icon: "🛡️"
                }
              ],
              proTips: [
                "Screenshot lo aur reference number note karo.",
                "Bank/app support ko exact error text bhejo.",
                "Grievance number ko follow-up me use karo."
              ],
              faqs: [
                {
                  q: "Subscription payment fail hone par service turant band ho jaati hai?",
                  a: "Kabhi grace period milta hai, kabhi immediate suspend ho sakta hai."
                },
                {
                  q: "UPI se subscription chal sakti hai?",
                  a: "Haan, UPI Autopay ya regular one-time payment dono options mil sakte hain."
                },
                {
                  q: "Failed subscription ka refund milta hai?",
                  a: "Agar debit hua aur service activate nahi hui to merchant/service support refund process karta hai."
                }
              ],
              related: [
                {
                  title: "Refund Nahi Mila",
                  slug: "refund-nahi-mila",
                  category: "payment"
                },
                {
                  title: "UPI Payment Pending",
                  slug: "upi-payment-pending",
                  category: "payment"
                }
              ],
              keywords: [
                "subscription payment failed",
                "Spotify payment failed",
                "renewal failed",
                "subscription renew nahi hua"
              ],
              variants: [
                "subscription failed",
                "renewal failed",
                "Spotify subscription",
                "plan payment failed",
                "billing failed"
              ]
            },

      {
              slug: "phonepe-wrong-upi-transfer",
              category: "payment",
              metaTitle: "PhonePe Wrong UPI Transfer Ho Gaya? Fix (2026) | JharForm",
              metaDescription: "PhonePe se galat UPI transfer ho gaya? Money reversal, dispute aur complaint steps.",
              h1: "PhonePe Se Galat Person Ko Paise Chale Gaye — Kya Kare?",
              lastUpdated: "May 2026",
              readingTime: "6 min",
              difficulty: "Medium",
              description: "PhonePe se galat UPI ID, phone number ya receiver ko money bhej di ho to speed matters. Jaldi complaint aur receiver contact important hai.",
              steps: [
                {
                  title: "Receiver ko turant call/msg karo",
                  detail: "PhonePe se galat transfer hua ho to receiver ko immediately contact karo."
                },
                {
                  title: "Transaction proof save karo",
                  detail: "UTR, receiver UPI ID aur amount screenshot strong proof hota hai."
                },
                {
                  title: "App dispute raise karo",
                  detail: "PhonePe history me transaction open karke 'Report Issue' ya 'Raise Dispute' karo."
                },
                {
                  title: "Bank ko inform karo",
                  detail: "Bank customer care ko same day inform karne se recovery chances better hote hain."
                },
                {
                  title: "Cybercrime complaint file karo",
                  detail: "Agar fraud ya intentional wrong transfer ho to cybercrime portal use karo."
                },
                {
                  title: "Consumer helpline / legal help",
                  detail: "Written complaint aur grievance number sambhal kar rakho."
                }
              ],
              screenshots: [
                {
                  caption: "PhonePe transaction dispute screen showing wrong receiver details and urgent help note",
                  alt: "PhonePe wrong transfer dispute screen",
                  type: "phone",
                  mockupType: "upi-dispute"
                },
                {
                  caption: "Cyber crime complaint screen showing financial fraud reporting and complaint number",
                  alt: "Cybercrime complaint flow for wrong transfer",
                  type: "browser",
                  mockupType: "cyber-crime-complaint"
                }
              ],
              sources: [
                {
                  title: "NPCI UPI Help",
                  url: "https://upihelp.npci.org.in/",
                  icon: "📊"
                },
                {
                  title: "National Cyber Crime Portal",
                  url: "https://cybercrime.gov.in/",
                  icon: "🚨"
                },
                {
                  title: "National Consumer Helpline",
                  url: "https://consumerhelpline.gov.in/",
                  icon: "🛡️"
                }
              ],
              proTips: [
                "Screenshot lo aur reference number note karo.",
                "Bank/app support ko exact error text bhejo.",
                "Grievance number ko follow-up me use karo."
              ],
              faqs: [
                {
                  q: "Galat UPI transfer return ho sakta hai?",
                  a: "Agar receiver cooperate kare to haan, warna bank/complaint route follow karna hota hai."
                },
                {
                  q: "Kitni jaldi action lena chahiye?",
                  a: "Same day sabse best hota hai."
                },
                {
                  q: "Fraud aur wrong transfer me difference?",
                  a: "Fraud me scam intent hota hai; wrong transfer me typing mistake ya wrong number hota hai."
                }
              ],
              related: [
                {
                  title: "Online Shopping Fraud Ho Gaya",
                  slug: "online-shopping-fraud-ho-gaya",
                  category: "payment"
                },
                {
                  title: "UPI Payment Pending",
                  slug: "upi-payment-pending",
                  category: "payment"
                }
              ],
              keywords: [
                "wrong upi transfer",
                "galat upi transfer",
                "PhonePe wrong payment",
                "money sent to wrong account"
              ],
              variants: [
                "wrong UPI transfer",
                "galat transfer",
                "PhonePe wrong send",
                "money to wrong account",
                "oops payment"
              ]
            },

      {
              slug: "gpay-wrong-upi-transfer",
              category: "payment",
              metaTitle: "Google Pay Wrong UPI Transfer Ho Gaya? Fix (2026) | JharForm",
              metaDescription: "Google Pay se galat UPI transfer ho gaya? Money reversal, dispute aur complaint steps.",
              h1: "Google Pay Se Galat Person Ko Paise Chale Gaye — Kya Kare?",
              lastUpdated: "May 2026",
              readingTime: "6 min",
              difficulty: "Medium",
              description: "Google Pay se galat UPI ID, phone number ya receiver ko money bhej di ho to speed matters. Jaldi complaint aur receiver contact important hai.",
              steps: [
                {
                  title: "Receiver ko turant call/msg karo",
                  detail: "Google Pay se galat transfer hua ho to receiver ko immediately contact karo."
                },
                {
                  title: "Transaction proof save karo",
                  detail: "UTR, receiver UPI ID aur amount screenshot strong proof hota hai."
                },
                {
                  title: "App dispute raise karo",
                  detail: "Google Pay history me transaction open karke 'Report Issue' ya 'Raise Dispute' karo."
                },
                {
                  title: "Bank ko inform karo",
                  detail: "Bank customer care ko same day inform karne se recovery chances better hote hain."
                },
                {
                  title: "Cybercrime complaint file karo",
                  detail: "Agar fraud ya intentional wrong transfer ho to cybercrime portal use karo."
                },
                {
                  title: "Consumer helpline / legal help",
                  detail: "Written complaint aur grievance number sambhal kar rakho."
                }
              ],
              screenshots: [
                {
                  caption: "Google Pay transaction dispute screen showing wrong receiver details and urgent help note",
                  alt: "Google Pay wrong transfer dispute screen",
                  type: "phone",
                  mockupType: "upi-dispute"
                },
                {
                  caption: "Cyber crime complaint screen showing financial fraud reporting and complaint number",
                  alt: "Cybercrime complaint flow for wrong transfer",
                  type: "browser",
                  mockupType: "cyber-crime-complaint"
                }
              ],
              sources: [
                {
                  title: "NPCI UPI Help",
                  url: "https://upihelp.npci.org.in/",
                  icon: "📊"
                },
                {
                  title: "National Cyber Crime Portal",
                  url: "https://cybercrime.gov.in/",
                  icon: "🚨"
                },
                {
                  title: "National Consumer Helpline",
                  url: "https://consumerhelpline.gov.in/",
                  icon: "🛡️"
                }
              ],
              proTips: [
                "Screenshot lo aur reference number note karo.",
                "Bank/app support ko exact error text bhejo.",
                "Grievance number ko follow-up me use karo."
              ],
              faqs: [
                {
                  q: "Galat UPI transfer return ho sakta hai?",
                  a: "Agar receiver cooperate kare to haan, warna bank/complaint route follow karna hota hai."
                },
                {
                  q: "Kitni jaldi action lena chahiye?",
                  a: "Same day sabse best hota hai."
                },
                {
                  q: "Fraud aur wrong transfer me difference?",
                  a: "Fraud me scam intent hota hai; wrong transfer me typing mistake ya wrong number hota hai."
                }
              ],
              related: [
                {
                  title: "Online Shopping Fraud Ho Gaya",
                  slug: "online-shopping-fraud-ho-gaya",
                  category: "payment"
                },
                {
                  title: "UPI Payment Pending",
                  slug: "upi-payment-pending",
                  category: "payment"
                }
              ],
              keywords: [
                "wrong upi transfer",
                "galat upi transfer",
                "Google Pay wrong payment",
                "money sent to wrong account"
              ],
              variants: [
                "wrong UPI transfer",
                "galat transfer",
                "Google Pay wrong send",
                "money to wrong account",
                "oops payment"
              ]
            },

      {
              slug: "paytm-wrong-upi-transfer",
              category: "payment",
              metaTitle: "Paytm Wrong UPI Transfer Ho Gaya? Fix (2026) | JharForm",
              metaDescription: "Paytm se galat UPI transfer ho gaya? Money reversal, dispute aur complaint steps.",
              h1: "Paytm Se Galat Person Ko Paise Chale Gaye — Kya Kare?",
              lastUpdated: "May 2026",
              readingTime: "6 min",
              difficulty: "Medium",
              description: "Paytm se galat UPI ID, phone number ya receiver ko money bhej di ho to speed matters. Jaldi complaint aur receiver contact important hai.",
              steps: [
                {
                  title: "Receiver ko turant call/msg karo",
                  detail: "Paytm se galat transfer hua ho to receiver ko immediately contact karo."
                },
                {
                  title: "Transaction proof save karo",
                  detail: "UTR, receiver UPI ID aur amount screenshot strong proof hota hai."
                },
                {
                  title: "App dispute raise karo",
                  detail: "Paytm history me transaction open karke 'Report Issue' ya 'Raise Dispute' karo."
                },
                {
                  title: "Bank ko inform karo",
                  detail: "Bank customer care ko same day inform karne se recovery chances better hote hain."
                },
                {
                  title: "Cybercrime complaint file karo",
                  detail: "Agar fraud ya intentional wrong transfer ho to cybercrime portal use karo."
                },
                {
                  title: "Consumer helpline / legal help",
                  detail: "Written complaint aur grievance number sambhal kar rakho."
                }
              ],
              screenshots: [
                {
                  caption: "Paytm transaction dispute screen showing wrong receiver details and urgent help note",
                  alt: "Paytm wrong transfer dispute screen",
                  type: "phone",
                  mockupType: "upi-dispute"
                },
                {
                  caption: "Cyber crime complaint screen showing financial fraud reporting and complaint number",
                  alt: "Cybercrime complaint flow for wrong transfer",
                  type: "browser",
                  mockupType: "cyber-crime-complaint"
                }
              ],
              sources: [
                {
                  title: "NPCI UPI Help",
                  url: "https://upihelp.npci.org.in/",
                  icon: "📊"
                },
                {
                  title: "National Cyber Crime Portal",
                  url: "https://cybercrime.gov.in/",
                  icon: "🚨"
                },
                {
                  title: "National Consumer Helpline",
                  url: "https://consumerhelpline.gov.in/",
                  icon: "🛡️"
                }
              ],
              proTips: [
                "Screenshot lo aur reference number note karo.",
                "Bank/app support ko exact error text bhejo.",
                "Grievance number ko follow-up me use karo."
              ],
              faqs: [
                {
                  q: "Galat UPI transfer return ho sakta hai?",
                  a: "Agar receiver cooperate kare to haan, warna bank/complaint route follow karna hota hai."
                },
                {
                  q: "Kitni jaldi action lena chahiye?",
                  a: "Same day sabse best hota hai."
                },
                {
                  q: "Fraud aur wrong transfer me difference?",
                  a: "Fraud me scam intent hota hai; wrong transfer me typing mistake ya wrong number hota hai."
                }
              ],
              related: [
                {
                  title: "Online Shopping Fraud Ho Gaya",
                  slug: "online-shopping-fraud-ho-gaya",
                  category: "payment"
                },
                {
                  title: "UPI Payment Pending",
                  slug: "upi-payment-pending",
                  category: "payment"
                }
              ],
              keywords: [
                "wrong upi transfer",
                "galat upi transfer",
                "Paytm wrong payment",
                "money sent to wrong account"
              ],
              variants: [
                "wrong UPI transfer",
                "galat transfer",
                "Paytm wrong send",
                "money to wrong account",
                "oops payment"
              ]
            },

      {
              slug: "fastag-recharge-failed",
              category: "payment",
              metaTitle: "FASTag Recharge FASTag Issue? Recharge / Deduction Fix (2026) | JharForm",
              metaDescription: "FASTag Recharge FASTag recharge failed, wrong toll deduction ya payment issue? Official fix steps aur complaint guide.",
              h1: "FASTag Recharge FASTag Issue — Recharge, Deduction Aur Toll Problem Ka Fix",
              lastUpdated: "May 2026",
              readingTime: "5 min",
              difficulty: "Medium",
              description: "FASTag Recharge se FASTag recharge fail ho gaya, wrong deduction hui ya toll payment problem aayi to NETC status aur bank complaint dono check karne padte hain.",
              steps: [
                {
                  title: "NETC status check karo",
                  detail: "FASTag status aur blacklist/low balance message check karo."
                },
                {
                  title: "Bank balance aur wallet verify karo",
                  detail: "Recharge debit hua hai ya nahi, statement me confirm karo."
                },
                {
                  title: "Wrong toll deduction report karo",
                  detail: "Agar galat toll cut hua hai to tag issuer ko dispute log karo."
                },
                {
                  title: "Vehicle aur tag details match karo",
                  detail: "Number plate, tag ID aur vehicle class mismatch se bhi problem aati hai."
                },
                {
                  title: "Refund timeline track karo",
                  detail: "Wrong deduction me investigation ke baad refund aa sakta hai."
                },
                {
                  title: "Official complaint submit karo",
                  detail: "NPCI NETC status page aur bank grievance portal use karo."
                }
              ],
              screenshots: [
                {
                  caption: "FASTag Recharge status screen showing low balance or recharge failed alert",
                  alt: "FASTag Recharge FASTag status screen with payment issue",
                  type: "browser",
                  mockupType: "upi-dispute"
                },
                {
                  caption: "Bank passbook with toll deduction entry and dispute note",
                  alt: "Bank passbook showing FASTag deduction entry",
                  type: "phone",
                  mockupType: "bank-passbook"
                }
              ],
              sources: [
                {
                  title: "NPCI NETC FASTag",
                  url: "https://www.npci.org.in/product/netc/about-netc",
                  icon: "🛣️"
                },
                {
                  title: "NETC FASTag Status",
                  url: "https://www.npci.org.in/netcfastag-status",
                  icon: "📍"
                },
                {
                  title: "RBI Complaints",
                  url: "https://rbi.org.in/Scripts/Complaints.aspx",
                  icon: "🏦"
                }
              ],
              proTips: [
                "Screenshot lo aur reference number note karo.",
                "Bank/app support ko exact error text bhejo.",
                "Grievance number ko follow-up me use karo."
              ],
              faqs: [
                {
                  q: "FASTag recharge failed but money cut ho gaya to?",
                  a: "Transaction pending/deduction issue me bank reversal ya tag credit check karna hota hai."
                },
                {
                  q: "Wrong toll deduction ka refund kitne din me?",
                  a: "Issuer bank ki investigation ke baad hota hai, timeline bank-dependent hoti hai."
                },
                {
                  q: "Tag blacklist ho gaya to?",
                  a: "Balance top-up aur KYC/vehicle details verify karni hoti hain."
                }
              ],
              related: [
                {
                  title: "UPI Payment Pending",
                  slug: "upi-payment-pending",
                  category: "payment"
                },
                {
                  title: "Refund Nahi Mila",
                  slug: "refund-nahi-mila",
                  category: "payment"
                }
              ],
              keywords: [
                "fastag issue",
                "fastag recharge failed",
                "wrong toll deduction",
                "FASTag Recharge fastag problem"
              ],
              variants: [
                "fastag recharge failed",
                "wrong deduction",
                "toll payment failed",
                "netc issue",
                "fastag problem"
              ]
            },

      {
              slug: "fastag-wrong-deduction",
              category: "payment",
              metaTitle: "FASTag Wrong Deduction FASTag Issue? Recharge / Deduction Fix (2026) | JharForm",
              metaDescription: "FASTag Wrong Deduction FASTag recharge failed, wrong toll deduction ya payment issue? Official fix steps aur complaint guide.",
              h1: "FASTag Wrong Deduction FASTag Issue — Recharge, Deduction Aur Toll Problem Ka Fix",
              lastUpdated: "May 2026",
              readingTime: "5 min",
              difficulty: "Medium",
              description: "FASTag Wrong Deduction se FASTag recharge fail ho gaya, wrong deduction hui ya toll payment problem aayi to NETC status aur bank complaint dono check karne padte hain.",
              steps: [
                {
                  title: "NETC status check karo",
                  detail: "FASTag status aur blacklist/low balance message check karo."
                },
                {
                  title: "Bank balance aur wallet verify karo",
                  detail: "Recharge debit hua hai ya nahi, statement me confirm karo."
                },
                {
                  title: "Wrong toll deduction report karo",
                  detail: "Agar galat toll cut hua hai to tag issuer ko dispute log karo."
                },
                {
                  title: "Vehicle aur tag details match karo",
                  detail: "Number plate, tag ID aur vehicle class mismatch se bhi problem aati hai."
                },
                {
                  title: "Refund timeline track karo",
                  detail: "Wrong deduction me investigation ke baad refund aa sakta hai."
                },
                {
                  title: "Official complaint submit karo",
                  detail: "NPCI NETC status page aur bank grievance portal use karo."
                }
              ],
              screenshots: [
                {
                  caption: "FASTag Wrong Deduction status screen showing low balance or recharge failed alert",
                  alt: "FASTag Wrong Deduction FASTag status screen with payment issue",
                  type: "browser",
                  mockupType: "upi-dispute"
                },
                {
                  caption: "Bank passbook with toll deduction entry and dispute note",
                  alt: "Bank passbook showing FASTag deduction entry",
                  type: "phone",
                  mockupType: "bank-passbook"
                }
              ],
              sources: [
                {
                  title: "NPCI NETC FASTag",
                  url: "https://www.npci.org.in/product/netc/about-netc",
                  icon: "🛣️"
                },
                {
                  title: "NETC FASTag Status",
                  url: "https://www.npci.org.in/netcfastag-status",
                  icon: "📍"
                },
                {
                  title: "RBI Complaints",
                  url: "https://rbi.org.in/Scripts/Complaints.aspx",
                  icon: "🏦"
                }
              ],
              proTips: [
                "Screenshot lo aur reference number note karo.",
                "Bank/app support ko exact error text bhejo.",
                "Grievance number ko follow-up me use karo."
              ],
              faqs: [
                {
                  q: "FASTag recharge failed but money cut ho gaya to?",
                  a: "Transaction pending/deduction issue me bank reversal ya tag credit check karna hota hai."
                },
                {
                  q: "Wrong toll deduction ka refund kitne din me?",
                  a: "Issuer bank ki investigation ke baad hota hai, timeline bank-dependent hoti hai."
                },
                {
                  q: "Tag blacklist ho gaya to?",
                  a: "Balance top-up aur KYC/vehicle details verify karni hoti hain."
                }
              ],
              related: [
                {
                  title: "UPI Payment Pending",
                  slug: "upi-payment-pending",
                  category: "payment"
                },
                {
                  title: "Refund Nahi Mila",
                  slug: "refund-nahi-mila",
                  category: "payment"
                }
              ],
              keywords: [
                "fastag issue",
                "fastag recharge failed",
                "wrong toll deduction",
                "FASTag Wrong Deduction fastag problem"
              ],
              variants: [
                "fastag recharge failed",
                "wrong deduction",
                "toll payment failed",
                "netc issue",
                "fastag problem"
              ]
            },

      {
              slug: "toll-payment-failed",
              category: "payment",
              metaTitle: "Toll Payment FASTag Issue? Recharge / Deduction Fix (2026) | JharForm",
              metaDescription: "Toll Payment FASTag recharge failed, wrong toll deduction ya payment issue? Official fix steps aur complaint guide.",
              h1: "Toll Payment FASTag Issue — Recharge, Deduction Aur Toll Problem Ka Fix",
              lastUpdated: "May 2026",
              readingTime: "5 min",
              difficulty: "Medium",
              description: "Toll Payment se FASTag recharge fail ho gaya, wrong deduction hui ya toll payment problem aayi to NETC status aur bank complaint dono check karne padte hain.",
              steps: [
                {
                  title: "NETC status check karo",
                  detail: "FASTag status aur blacklist/low balance message check karo."
                },
                {
                  title: "Bank balance aur wallet verify karo",
                  detail: "Recharge debit hua hai ya nahi, statement me confirm karo."
                },
                {
                  title: "Wrong toll deduction report karo",
                  detail: "Agar galat toll cut hua hai to tag issuer ko dispute log karo."
                },
                {
                  title: "Vehicle aur tag details match karo",
                  detail: "Number plate, tag ID aur vehicle class mismatch se bhi problem aati hai."
                },
                {
                  title: "Refund timeline track karo",
                  detail: "Wrong deduction me investigation ke baad refund aa sakta hai."
                },
                {
                  title: "Official complaint submit karo",
                  detail: "NPCI NETC status page aur bank grievance portal use karo."
                }
              ],
              screenshots: [
                {
                  caption: "Toll Payment status screen showing low balance or recharge failed alert",
                  alt: "Toll Payment FASTag status screen with payment issue",
                  type: "browser",
                  mockupType: "upi-dispute"
                },
                {
                  caption: "Bank passbook with toll deduction entry and dispute note",
                  alt: "Bank passbook showing FASTag deduction entry",
                  type: "phone",
                  mockupType: "bank-passbook"
                }
              ],
              sources: [
                {
                  title: "NPCI NETC FASTag",
                  url: "https://www.npci.org.in/product/netc/about-netc",
                  icon: "🛣️"
                },
                {
                  title: "NETC FASTag Status",
                  url: "https://www.npci.org.in/netcfastag-status",
                  icon: "📍"
                },
                {
                  title: "RBI Complaints",
                  url: "https://rbi.org.in/Scripts/Complaints.aspx",
                  icon: "🏦"
                }
              ],
              proTips: [
                "Screenshot lo aur reference number note karo.",
                "Bank/app support ko exact error text bhejo.",
                "Grievance number ko follow-up me use karo."
              ],
              faqs: [
                {
                  q: "FASTag recharge failed but money cut ho gaya to?",
                  a: "Transaction pending/deduction issue me bank reversal ya tag credit check karna hota hai."
                },
                {
                  q: "Wrong toll deduction ka refund kitne din me?",
                  a: "Issuer bank ki investigation ke baad hota hai, timeline bank-dependent hoti hai."
                },
                {
                  q: "Tag blacklist ho gaya to?",
                  a: "Balance top-up aur KYC/vehicle details verify karni hoti hain."
                }
              ],
              related: [
                {
                  title: "UPI Payment Pending",
                  slug: "upi-payment-pending",
                  category: "payment"
                },
                {
                  title: "Refund Nahi Mila",
                  slug: "refund-nahi-mila",
                  category: "payment"
                }
              ],
              keywords: [
                "fastag issue",
                "fastag recharge failed",
                "wrong toll deduction",
                "Toll Payment fastag problem"
              ],
              variants: [
                "fastag recharge failed",
                "wrong deduction",
                "toll payment failed",
                "netc issue",
                "fastag problem"
              ]
            }
    ]
  };
