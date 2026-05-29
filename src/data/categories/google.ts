import type { Category, Problem } from "../types";

export const googleCategory: Category = {
    slug: "google",
    name: "Google & Gmail",
    icon: "🔥",
    description: "Gmail login issue, Play Store pending, Google account disabled — har Google problem ka step-by-step Hindi solution yahan hai.",
    metaTitle: "Google & Gmail Problems — Complete Fix Guide | JharForm Problems",
    metaDescription: "Gmail login issue, Play Store pending, Google account disabled — har Google problem ka step-by-step Hindi solution yahan hai.",
    problems: ([
      {
        slug: "gmail-login-nahi-ho-raha",
        category: "google",
        metaTitle: "Gmail Login Nahi Ho Raha? Complete Recovery Guide (2026) | JharForm",
        metaDescription: "Gmail mein login fail ho raha hai? Password bhool gaye ya account lock hua? Yeh step-by-step guide se Gmail account 10 minute mein recover karo.",
        h1: "Gmail Me Login Nahi Ho Raha — Complete Fix Guide",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Medium",
        description: "Gmail app ya browser mein login fail hota hai — wrong password, account suspended, ya 2-step verification issue. Google account recovery ke liye recovery phone number ya backup email hona zaroori hai.",
        steps: [
          { title: "Password check karo", detail: "Caps Lock band karo. Password manager check karo. Browser mein saved password se copy karo." },
          { title: "Forgot Password pe click karo", detail: "Gmail login page pe 'Forgot password?' link pe click karo." },
          { title: "Google Account Recovery page kholo", detail: "accounts.google.com/signin/recovery direct URL se bhi jaa sakte ho." },
          { title: "Recovery phone se OTP lo", detail: "Registered mobile number pe SMS aayega. OTP enter karo." },
          { title: "Recovery email check karo", detail: "Alternate email address pe link aayega. Woh inbox aur spam folder check karo." },
          { title: "Account disabled ho to appeal karo", detail: "support.google.com/accounts/troubleshooter/6357590 pe jaao. Account creation details batao." },
          { title: "2-Step Verification backup codes use karo", detail: "Backup codes hain to unhe use karo. Ya trusted device se login karo." }
        ],
        screenshots: [
          { caption: "Gmail login page showing email input, password field, Forgot password link, Create account button, aur sign-in options with phone number", alt: "Gmail sign in page showing forgot password link and account creation options", type: "browser", mockupType: "gmail-login" },
          { caption: "Google Account Recovery page showing recovery phone number last digits, alternate email option, security question, aur backup codes use option", alt: "Google account recovery page with phone number email and backup codes options", type: "browser", mockupType: "google-recovery" }
        ],
        sources: [
          { title: "Official Google Account Recovery", url: "https://accounts.google.com/signin/recovery", icon: "🔗" },
          { title: "Google Help: Can't Sign In", url: "https://support.google.com/accounts/answer/7682439", icon: "📚" }
        ],
        proTips: ["Account creation ka approx date yaad karo — Google verify karta hai", "Pehla email kisko bheja tha yaad rakho", "Trusted device se login zyada aasaan hai"],
        faqs: [
          { q: "Account permanently delete ho gaya kya?", a: "Nahi — recovery try karo. 3-4 different methods available hain. Ek baar mein nahi toh doosre din dobara try karo." },
          { q: "Recovery phone number nahi hai to?", a: "Recovery email ya account creation details try karo. Google multiple verification options deta hai." },
          { q: "Account hack ho gaya lagta hai?", a: "Immediately: myaccount.google.com/security pe jao, active sessions check karo, password change karo." },
          { q: "Gmail 2-step verification kyun zaroori hai?", a: "Account security ke liye bahut important hai. Login ke baad turant on karo — myaccount.google.com/security pe." }
        ],
        related: [
          { title: "Play Store Download Pending", slug: "play-store-download-pending", category: "google" },
          { title: "OTP Nahi Aa Raha", slug: "otp-nahi-aa-raha", category: "mobile" }
        ],
        keywords: ["gmail login nahi ho raha", "gmail account recover", "gmail password forgot", "google account recovery"],
        variants: ["gmail mein login nahi ho raha", "gmail ka password bhool gaya", "gmail account locked", "gamil login", "jeemail login", "gmail recover kaise kare"]
      },
      {
        slug: "play-store-download-pending",
        category: "google",
        metaTitle: "Play Store Download Pending? 6 Quick Fix (2026) | JharForm",
        metaDescription: "Google Play Store mein app download ya update pending mein stuck hai? Yeh 6 simple steps se pending fix karo aur apps download shuru karo.",
        h1: "Play Store Download Pending — 6 Quick Fix",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Google Play Store mein apps download ya update 'Pending' mein stuck ho jaate hain. Cache corruption, account issues, storage problem, ya network connectivity iska reason hoti hai.",
        steps: [
          { title: "Download cancel aur retry karo", detail: "Play Store mein app page kholo. Download cancel karo. 30 sec wait karo. Phir dobara install press karo." },
          { title: "Play Store cache clear karo", detail: "Settings > Apps > Google Play Store > Storage > Clear Cache. Data mat clear karo abhi." },
          { title: "Google Play Services cache clear karo", detail: "Settings > Apps > Google Play Services > Storage > Clear Cache. Yeh alag app hai." },
          { title: "WiFi se connect karo", detail: "Mobile data pe Play Store slow hota hai. WiFi pe switch karo ya strong signal area mein jao." },
          { title: "Storage free karo", detail: "Settings > Storage check karo. Kam se kam 1-2GB free honi chahiye. Purane files delete karo." },
          { title: "Google account remove aur add karo", detail: "Settings > Accounts > Google > account name > Remove account. Phone restart. Settings > Accounts > Add account > Google." }
        ],
        screenshots: [
          { caption: "Play Store app page showing 'Pending' grey status button with cancel option", alt: "Google Play Store app page showing pending download status with cancel button", type: "phone", mockupType: "playstore-pending" },
          { caption: "Settings > Apps > Google Play Store > Storage showing Clear Cache button with 89 MB", alt: "Android settings showing Google Play Store storage with clear cache option", type: "phone", mockupType: "android-settings-battery" }
        ],
        sources: [
          { title: "Google Play Help: Fix app download issues", url: "https://support.google.com/googleplay/answer/6280651", icon: "📚" }
        ],
        proTips: ["Background downloads band karo: Play Store > Settings > Auto-update apps > Don't auto-update", "Queue mein sirf ek download rakho", "Play Store update karo — 3 dots > Settings > Play Store version"],
        faqs: [
          { q: "Download stuck at 0% hai to?", a: "Network problem hai. WiFi check karo. Play Store aur Play Services cache clear karo." },
          { q: "Update download nahi ho rahi?", a: "Auto-update disable karo: Play Store > Profile icon > Settings > Network preferences > Don't auto-update apps." },
          { q: "Error code aa raha hai?", a: "Error 927, 963: Play Store cache+data clear karo. Error 403: account remove/add karo." }
        ],
        related: [
          { title: "Gmail Login Nahi Ho Raha", slug: "gmail-login-nahi-ho-raha", category: "google" },
          { title: "Storage Full Hai", slug: "storage-full-hai", category: "mobile" }
        ],
        keywords: ["play store pending", "play store download pending", "app download nahi ho raha", "google play store fix"],
        variants: ["play store download nahi ho raha", "play store stuck", "app install nahi ho rahi", "google play pending", "pley stor"]
      },
      {
        slug: "google-account-disabled",
        category: "google",
        metaTitle: "Google Account Disabled Ho Gaya? Appeal Se Wapas Kaise Laaye (2026) | JharForm",
        metaDescription: "Google account disabled ho gaya? 'This account has been disabled' message aa raha hai? Account appeal karke wapas laane ka step-by-step guide.",
        h1: "Google Account Disabled — Appeal Karke Wapas Kaise Laaye",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Medium",
        description: "Google account disabled ho gaya hai — sign in karte waqt 'This account has been disabled' message aa raha hai. Spam, suspicious activity, age verification failure, ya terms violation ki wajah se Google account disable karta hai. Appeal form bhar ke account recover ho sakta hai temporary violations mein. Permanent violations mein account wapas nahi milta.",
        steps: [
          { title: "Appeal form kholo", detail: "accounts.google.com/signin/v2/challenge/appeal pe jao. Disabled hone ka exact reason aur time likho." },
          { title: "Google Account Recovery attempt karo", detail: "g.co/recover pe jao. Phone/email verification se access mil sakta hai. Agar hacker ne details badle hain to appeal hi option hai." },
          { title: "Google Account Disabled Appeal form bharo", detail: "Full name, date of birth, alternate email, aur recovery phone daalo. Account creation ka approx date batao." },
          { title: "Valid reason likho appeal mein", detail: "Agar account hack hua tha to batao. Ya agar mistake se terms violate hua to explain karo. Honest aur detailed reason likho." },
          { title: "Associated services check karo", detail: "Gmail, YouTube, Google Photos, Drive — sab data ek hi account mein hoti hai. Backup nahi tha toh data permanently lost ho sakta hai." },
          { title: "Google One support contact karo", detail: "Agar Google One subscriber ho to priority support milta hai. Google One app ya support.google.com pe contact karo." }
        ],
        screenshots: [
          { caption: "Google accounts.google.com page showing 'This account has been disabled' error with red warning icon, Appeal This Decision button, aur Use a different account option", alt: "Google account disabled page showing this account has been disabled error with appeal button", type: "browser", mockupType: "google-account-disabled-real" },
          { caption: "Google Account Disabled Appeal form showing full name DOB alternate email recovery phone fields, account creation approx date input, and associated services Gmail YouTube Drive Photos warning", alt: "Google account disabled appeal form with personal details and services warning", type: "browser", mockupType: "google-account-disabled-real" }
        ],
        sources: [
          { title: "Google Account Recovery", url: "https://g.co/recover", icon: "🔗" },
          { title: "Google Help: Disabled Accounts", url: "https://support.google.com/accounts/answer/40695", icon: "📘" }
        ],
        proTips: ["Hamesha 2-Step Verification on rakho — disabled hone se bachata hai", "Google Takeout se regularly data backup karo — google.com/takeout", "Multiple Google accounts banayein — important data distribute karo"],
        faqs: [
          { q: "Disabled account permanent hai ya temporary?", a: "Temporary: appeal se recover ho sakta hai. Permanent: nahi. Google appeal ke baad decision deta hai — usually 2-5 business days." },
          { q: "Appeal ke baad kitne din mein response aata hai?", a: "2-5 working days mein email aata hai. Spam folder bhi check karo. Agar nahi aaya to dobara appeal kar sakte hain." },
          { q: "Disabled account ka data kho jayega?", a: "Agar account permanently disabled ho to haan — Gmail, Drive, Photos, YouTube sab delete ho sakta hai. Pehle se backup zaroori hai." },
          { q: "Naya Google account bana sakte hain?", a: "Haan — lekin purana account ka data, emails, aur subscriptions sab lost ho jaayenge. Old account recover karne ki koshish pehle karo." }
        ],
        related: [
          { title: "Gmail Login Nahi Ho Raha", slug: "gmail-login-nahi-ho-raha", category: "google" },
          { title: "Instagram Account Hack Ho Gaya", slug: "instagram-account-hacked", category: "apps" }
        ],
        keywords: ["google account disabled", "google account appeal", "google account recovery disabled", "this account has been disabled"],
        variants: ["google account band ho gaya", "google account disabled kaise wapas laaye", "gmail account disabled", "google account hack ho gaya"]
      },
      {
        slug: "youtube-account-suspended",
        category: "google",
        metaTitle: "YouTube Channel Suspended? Account Wapas Kaise Laaye (2026) | JharForm",
        metaDescription: "YouTube channel suspended ho gaya? Copyright strike, community guidelines violation, ya suspicious activity? Channel appeal karke wapas laane ka guide.",
        h1: "YouTube Channel Suspended — Appeal Se Wapas Kaise Laaye",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Hard",
        description: "YouTube channel suspended ho gaya hai — 'This account has been terminated' message aa raha hai. Copyright strikes, community guidelines violations (spam, hate speech, harmful content), ya suspicious activity se suspension hota hai. First-time ya minor violations mein appeal successful hota hai. Repeat violations mein permanent hota hai.",
        steps: [
          { title: "Termination reason check karo email mein", detail: "Suspension email mein exact reason hota hai: Copyright strike, Community Guidelines, Terms of Service. Reason samajhna zaroori hai appeal likhne ke liye." },
          { title: "YouTube Studio mein appeal option khojo", detail: "youtube.com/channel_features pe jao. 'Account suspended' dikhega. 'Appeal' button dikhega agar eligible ho." },
          { title: "Appeal form bharo detailed explanation ke saath", detail: "Kya galat hua, kyu hua, aur aage se kaise avoid karoge — yeh teen points cover karo. Honest raho. Copy-paste templates avoid karo." },
          { title: "Copyright strike ho to counter-notification bhejo", detail: "Agar aapka content fair use tha (commentary, education, parody) to counter-notification bhejo. 10 business days mein claimant respond karta hai." },
          { title: "YouTube Creator Support se contact karo", detail: "1000+ subscribers ho to Creator Support access milta hai. YouTube Studio > Help > Get Support. Direct chat ya email se escalate karo." },
          { title: "Social media pe YouTube team ko tag karo", detail: "@TeamYouTube Twitter/X pe tag karo. Channel URL aur suspension reason ke saath. Public shaming se sometimes faster response milta hai." }
        ],
        screenshots: [
          { caption: "YouTube Studio showing Account Suspended message with Appeal button highlighted", alt: "YouTube studio dashboard showing account suspended status with appeal submission button", type: "browser", mockupType: "google-recovery" },
          { caption: "YouTube account suspended page showing strike details spam deceptive practices community guidelines violation, appeal button, counter-notification option, aur learn more community guidelines link", alt: "YouTube account suspension appeal page with strike details and appeal options", type: "browser", mockupType: "youtube-account-suspended-real" }
        ],
        sources: [
          { title: "YouTube Help: Account Suspension", url: "https://support.google.com/youtube/answer/2797387", icon: "📺" },
          { title: "YouTube Copyright Center", url: "https://www.youtube.com/howyoutubeworks/policies/copyright/", icon: "©️" }
        ],
        proTips: ["Hamesha original content banao — reused content policy se bacho", "3 copyright strikes = permanent termination — har strike ko seriously lo", "YouTube Community Guidelines har 3-6 mahine review karo — rules change hote hain"],
        faqs: [
          { q: "First appeal reject ho gaya to dobara kar sakte hain?", a: "Nahi — ek baar appeal submit karne ke baad dobara nahi kar sakte. Pehle appeal carefully aur detailed likho." },
          { q: "Channel subscribers aur watch hours wapas milenge?", a: "Agar appeal successful hua to sab wapas milta hai. Naya channel banane se zero se shuru karna padega." },
          { q: "Copyright strike kaise hataye?", a: "Strike expire hota hai 90 din mein. Counter-notification bhejo agar fair use hai. Original creator se contact karke retraction bhi maang sakte hain." },
          { q: "Monetization disable ho gaya par channel nahi?", a: "Alag issue hai — AdSense policy violation, reused content, ya invalid traffic. YouTube Studio > Monetization > Appeal available hota hai." }
        ],
        related: [
          { title: "Google Account Disabled", slug: "google-account-disabled", category: "google" },
          { title: "YouTube Video Buffering", slug: "youtube-buffering-hai", category: "apps" }
        ],
        keywords: ["youtube channel suspended", "youtube account terminated", "youtube appeal", "youtube strike remove"],
        variants: ["youtube channel band ho gaya", "youtube account suspended", "youtube terminated", "youtube channel wapas kaise laaye"]
      },
      {
        slug: "google-photos-storage-full",
        category: "google",
        metaTitle: "Google Photos Storage Full Ho Gaya? Free Space Kaise Laaye (2026) | JharForm",
        metaDescription: "Google Photos mein 'Storage Full' aa raha hai? 15GB free limit khatam? Photos aur videos bina delete kiye space free karne ka guide.",
        h1: "Google Photos Storage Full — 7 Tarike Se Space Free Karo",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Google Photos mein 'Storage Full' notification aa raha hai — 15GB free Google Drive storage khatam ho gayi hai. Photos, videos, Gmail, aur Google Drive sab milke 15GB count hota hai. Bina photos delete kiye storage free karne ke tarike hain: duplicate photos delete, compressed storage use, old emails delete, aur unnecessary Drive files hatao.",
        steps: [
          { title: "Google One Storage page check karo", detail: "one.google.com/storage pe jao. Kaunsa service kitna use kar rahi hai dikhega: Gmail, Drive, Photos. Sabse zyada wala identify karo." },
          { title: "Google Photos mein duplicate aur blurry photos hatao", detail: "Google Photos app > Library > Utilities > Free Up Space. Duplicate, blurry, aur screenshots auto-detect honge. Ek click mein delete honge." },
          { title: "Large videos identify karo aur delete karo", detail: "Google Photos > Search > Videos. Size sort karke sabse bade videos top pe aayenge. Old unnecessary videos delete karo. 1 minute 4K video ~350MB hoti hai." },
          { title: "Gmail mein purani emails aur attachments hatao", detail: "Gmail > Search: has:attachment larger:10M. 10MB se zyada wali emails aa jayengi. Purani newsletters, promotional emails, aur large attachments delete karo." },
          { title: "Google Drive mein unnecessary files hatao", detail: "drive.google.com pe jao. Storage view mein sabse bade files sort karo. Old documents, duplicate files, aur shared files jo aapke copy hain — delete karo." },
          { title: "Storage Saver mode on karo (future photos ke liye)", detail: "Google Photos > Profile > Photos Settings > Backup > Storage Saver. High quality mein backup hoga — 16MP photos aur 1080p videos. Original quality se 60% kam space leta hai." },
          { title: "Google One plan socho (agar 15GB kam pad rahi hai)", detail: "100GB: Rs. 130/month. 200GB: Rs. 210/month. Family share kar sakte hain. 1 year ka plan cheaper rehta hai." }
        ],
        screenshots: [
          { caption: "Google One Storage page showing 14.8GB of 15GB used with breakdown by Photos Gmail and Drive", alt: "Google One storage page showing 14.8 GB of 15 GB used with service breakdown", type: "browser", mockupType: "google-recovery" },
          { caption: "Google One storage full page showing 98 percent used 14.8 GB of 15 GB with pie chart, storage breakdown Photos 9.2GB Gmail 3.1GB Drive 2.5GB, get Google One 100GB Rs 190 button, and free up storage link", alt: "Google One storage full breakdown showing usage by service and upgrade options", type: "browser", mockupType: "google-photos-storage-full-real" }
        ],
        sources: [
          { title: "Google One Storage", url: "https://one.google.com/storage", icon: "📱" },
          { title: "Google Photos Help: Storage", url: "https://support.google.com/photos/answer/6223681", icon: "📸" }
        ],
        proTips: ["Google Photos 'Free Up Space' weekly run karo — auto detects junk", "WhatsApp media Google Photos backup nahi honi chahiye — alag space khaati hai", "Gmail mein 'Unsubscribe' karo newsletters se — future storage bachegi"],
        faqs: [
          { q: "Google Photos mein photos delete karne se phone se bhi gayab hongi?", a: "Nahi — agar 'Free Up Space' use kar rahe ho to sirf cloud se backup hui photos device se delete hoti hain. Cloud pe safe rehti hain. Manual delete se dono jagah se gayab hoti hain." },
          { q: "Storage Saver mode se photo quality kam hoti hai?", a: "Normal use mein farak nahi dikhta. 16MP mein 99% photos same dikhti hain. Sirf professional photographers ko farak dikhega. Videos 1080p mein sufficient hain." },
          { q: "Shared files/messages bhi storage count hoti hai?", a: "Haan — Gmail mein received attachments, Drive mein shared files ka copy, aur Photos mein shared albums — sab count hoti hain." },
          { q: "100GB Google One enough hai?", a: "Average user ke liye 2-3 saal chalti hai. Heavy photo/video user ke liye 200GB better hai. Family mein 200GB 5 logon ke liye sufficient rehti hai." }
        ],
        related: [
          { title: "Play Store Download Pending", slug: "play-store-download-pending", category: "google" },
          { title: "Storage Full Hai", slug: "storage-full-hai", category: "mobile" }
        ],
        keywords: ["google photos storage full", "google drive storage full", "google storage free up", "google 15gb full"],
        variants: ["google photos storage full", "google drive full ho gaya", "gmail storage full", "google storage kaise free kare"]
      },
,
      {
        slug: "gmail-emails-not-receiving",
        category: "google",
        metaTitle: "Gmail Me Emails Receive Nahi Ho Rahi — Quick Fix Guide (2026) | JharForm",
        metaDescription: "Gmail inbox me naye emails nahi aa rahe — filters, storage full, blocked sender, ya sync issue iska reason hota hai.",
        h1: "Gmail Me Emails Receive Nahi Ho Rahi — Step-by-Step Fix",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Gmail inbox me naye emails nahi aa rahe — filters, storage full, blocked sender, ya sync issue iska reason hota hai.",
        steps: [
          { title: "Storage check karo", detail: "one.google.com/storage pe 15GB limit dekho. Full hai to emails bounce hote hain." },
          { title: "Spam aur All Mail folder dekho", detail: "Left sidebar > More > Spam aur All Mail. Filter ne shift kar diya ho shayad." },
          { title: "Filters review karo", detail: "Gmail > Settings > See all settings > Filters and Blocked Addresses — purane filters delete karo." },
          { title: "Blocked addresses unblock karo", detail: "Same Filters tab me Blocked Addresses list dekho. Important sender unblock karo." },
          { title: "IMAP/POP settings reset karo", detail: "Settings > Forwarding and POP/IMAP > IMAP enable karo." },
          { title: "Gmail app cache clear karo", detail: "Android: Settings > Apps > Gmail > Storage > Clear Cache. Phir Gmail kholo." }
        ],
        screenshots: [
          { caption: "Gmail Me Emails Receive Nahi Ho Rahi — interface mockup showing fix steps", alt: "Gmail Me Emails Receive Nahi Ho Rahi screenshot showing fix interface", type: "browser", mockupType: "gmail-login" },
          { caption: "Gmail Me Emails Receive Nahi Ho Rahi — settings screen mockup with options", alt: "Gmail Me Emails Receive Nahi Ho Rahi settings screen mockup", type: "phone", mockupType: "android-settings-notifications" }
        ],
        sources: [
          { title: "Gmail Help: Missing emails", url: "https://support.google.com/mail/answer/6594", icon: "🔗" },
          { title: "Google Workspace Status", url: "https://www.google.com/appsstatus", icon: "🔗" }
        ],
        proTips: ["Important contacts ko 'Mark as not spam' karo ek baar", "Forwarding rules check karo — kahin auto-delete to nahi", "Mobile data pe sync delay hota hai, WiFi try karo"],
        faqs: [
          { q: "Specific sender ka mail nahi aa raha?", a: "Spam folder dekho aur 'Report not spam' karo. Phir contact ko whitelist karo via filter." },
          { q: "Sirf promotional tab me aa rahe hain?", a: "Inbox tabs hide karo: Settings > Inbox > Categories > Primary only." },
          { q: "Push notification kab band hua?", a: "Gmail app > Settings > [account] > Notifications > All new mail." },
          { q: "Server downtime kaise check karein?", a: "workspace.google.com/dashboard — Google official status dashboard hai." }
        ],
        related: [
          { title: "Gmail Login Nahi Ho Raha", slug: "gmail-login-nahi-ho-raha", category: "google" },
          { title: "Gmail Storage Full", slug: "gmail-storage-full", category: "google" }
        ],
        keywords: ["gmail emails not receiving", "gmail me email nahi aa rahi", "gmail inbox empty"],
        variants: ["gmail me email nahi aa rahi", "gmail inbox empty", "gmail mail receive nahi ho raha"]
      },
      {
        slug: "gmail-emails-not-sending",
        category: "google",
        metaTitle: "Gmail Se Email Send Nahi Ho Raha — Quick Fix Guide (2026) | JharForm",
        metaDescription: "Compose karke Send karte hi error aata hai ya 'Outbox' me stuck rehta hai — daily sending limit, attachment size, ya SMTP issue.",
        h1: "Gmail Se Email Send Nahi Ho Raha — Step-by-Step Fix",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Compose karke Send karte hi error aata hai ya 'Outbox' me stuck rehta hai — daily sending limit, attachment size, ya SMTP issue.",
        steps: [
          { title: "Internet connection verify karo", detail: "Browser me google.com khol ke check karo — slow/offline to send fail hota hai." },
          { title: "Attachment size 25MB se kam karo", detail: "Bade file Google Drive me upload karo aur share link bhejo." },
          { title: "Outbox folder check karo (mobile)", detail: "Gmail app > Outbox. Stuck mail tap karke retry karo ya delete karo." },
          { title: "Daily sending limit dekho", detail: "Free Gmail: 500 emails/day. Limit exceed ho gayi to 24 ghante wait." },
          { title: "Browser cache clear karo", detail: "Chrome: Ctrl+Shift+Del > Cached images and files > Clear." },
          { title: "Different account/browser try karo", detail: "Incognito window me Gmail kholo — extension conflict isolate hoga." }
        ],
        screenshots: [
          { caption: "Gmail Se Email Send Nahi Ho Raha — interface mockup showing fix steps", alt: "Gmail Se Email Send Nahi Ho Raha screenshot showing fix interface", type: "browser", mockupType: "gmail-login" },
          { caption: "Gmail Se Email Send Nahi Ho Raha — settings screen mockup with options", alt: "Gmail Se Email Send Nahi Ho Raha settings screen mockup", type: "phone", mockupType: "android-wifi-no-internet" }
        ],
        sources: [
          { title: "Gmail Sending Limits", url: "https://support.google.com/mail/answer/22839", icon: "🔗" },
          { title: "Gmail Help: Can't send", url: "https://support.google.com/mail/answer/8689", icon: "🔗" }
        ],
        proTips: ["1000 to: bcc/cc combined recipient limit hai ek mail me", "Suspicious activity detect ho to 24h ke liye send block hota hai", "Attachment encrypt ho to scanner reject kar deta hai"],
        faqs: [
          { q: "'Message could not be sent' error?", a: "Recipient address misspell check karo. Phir attachment 25MB se chhota karo." },
          { q: "Bulk email send karna ho to?", a: "Google Groups ya Mail Merge addon use karo — limit safer." },
          { q: "Sent folder me dikh raha but receiver ko nahi mila?", a: "Receiver ke spam me check karwao. SPF/DKIM Gmail handle karta hai." },
          { q: "Outlook se forward Gmail send fail?", a: "SMTP smtp.gmail.com:465 SSL, App password generate karo — myaccount.google.com/apppasswords." }
        ],
        related: [
          { title: "Gmail Emails Not Receiving", slug: "gmail-emails-not-receiving", category: "google" },
          { title: "Gmail Attachment Not Downloading", slug: "gmail-attachment-not-downloading", category: "google" }
        ],
        keywords: ["gmail email send nahi ho raha", "gmail send fail", "mail bhej nahi pa raha"],
        variants: ["gmail send fail", "mail bhej nahi pa raha", "gmail outbox stuck"]
      },
      {
        slug: "gmail-storage-full",
        category: "google",
        metaTitle: "Gmail Storage Full Ho Gaya — Quick Fix Guide (2026) | JharForm",
        metaDescription: "15GB free Google storage khatam — Gmail, Drive, Photos sab is mein count hote hain. Bina paid plan ke space free karne ke tarike.",
        h1: "Gmail Storage Full Ho Gaya — Step-by-Step Fix",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "15GB free Google storage khatam — Gmail, Drive, Photos sab is mein count hote hain. Bina paid plan ke space free karne ke tarike.",
        steps: [
          { title: "Storage breakdown dekho", detail: "one.google.com/storage — kaunsa service kitna use kar raha hai dikhega." },
          { title: "Bade attachments search karo", detail: "Gmail search bar me: has:attachment larger:10M — sab list ho jayegi." },
          { title: "Promotion aur Social tab clean karo", detail: "'category:promotions older_than:1y' search karke select all > delete." },
          { title: "Trash aur Spam permanently empty karo", detail: "Trash > Empty Trash now. Spam > Delete all spam messages now." },
          { title: "Google Photos backup ki quality kam karo", detail: "photos.google.com > Settings > Backup quality > Storage Saver." },
          { title: "Google Drive me large files identify karo", detail: "drive.google.com > Storage (left bottom). Size sort karke delete karo." }
        ],
        screenshots: [
          { caption: "Gmail Storage Full Ho Gaya — interface mockup showing fix steps", alt: "Gmail Storage Full Ho Gaya screenshot showing fix interface", type: "browser", mockupType: "google-photos-storage-full-real" },
          { caption: "Gmail Storage Full Ho Gaya — settings screen mockup with options", alt: "Gmail Storage Full Ho Gaya settings screen mockup", type: "phone", mockupType: "gmail-login" }
        ],
        sources: [
          { title: "Google One Storage", url: "https://one.google.com/storage", icon: "🔗" },
          { title: "Gmail Help: Free up storage", url: "https://support.google.com/mail/answer/6374270", icon: "🔗" }
        ],
        proTips: ["Sent folder bhi count hota hai — purane bade emails delete karo", "WhatsApp backup Drive me hai? — backup hatao agar important nahi", "'Forever' search operator nahi hai — date range use karo"],
        faqs: [
          { q: "Trash empty karne ke baad bhi space same?", a: "30 din lagte hain update hone me. Manual 'Empty Trash now' click karo." },
          { q: "Free me storage badha sakte hain?", a: "Nahi — 15GB fix hai. Google One se start hota hai 100GB Rs.130/month." },
          { q: "Email delete karne se sender ko pata chalta hai?", a: "Nahi — delete sirf aapke side hai. Sender ke pass copy rehta hai." },
          { q: "Shared file ka original delete kiya to?", a: "Shared link toot jata hai. Pehle copy nikal lo agar zaroorat hai." }
        ],
        related: [
          { title: "Google Photos Storage Full", slug: "google-photos-storage-full", category: "google" },
          { title: "Gmail Emails Not Receiving", slug: "gmail-emails-not-receiving", category: "google" }
        ],
        keywords: ["gmail storage full", "gmail storage full ho gaya", "gmail space khatam"],
        variants: ["gmail storage full ho gaya", "gmail space khatam", "google 15gb full"]
      },
      {
        slug: "gmail-spam-folder-issue",
        category: "google",
        metaTitle: "Important Emails Spam Me Ja Rahe — Quick Fix Guide (2026) | JharForm",
        metaDescription: "Bank OTP, work emails, ya newsletters Gmail ke Spam folder me chale jate hain — filter banake ya whitelist karke fix kar sakte ho.",
        h1: "Important Emails Spam Me Ja Rahe — Step-by-Step Fix",
        lastUpdated: "May 2026",
        readingTime: "3 min",
        difficulty: "Easy",
        description: "Bank OTP, work emails, ya newsletters Gmail ke Spam folder me chale jate hain — filter banake ya whitelist karke fix kar sakte ho.",
        steps: [
          { title: "Spam folder kholo aur 'Not spam' karo", detail: "mail.google.com/mail/u/0/#spam — important email select > 'Not spam' button." },
          { title: "Sender ko contacts me add karo", detail: "Email kholo > sender ke naam pe hover > 'Add to contacts'." },
          { title: "Filter create karo whitelist ke liye", detail: "Settings > Filters > Create filter > 'From' me sender daalo > 'Never send to Spam' tick." },
          { title: "Blocked addresses check karo", detail: "Settings > Filters and Blocked Addresses — galat block hata do." },
          { title: "Domain-level whitelist (Workspace admin)", detail: "Admin console > Apps > Gmail > Spam — bypass list me domain add karo." },
          { title: "SPF/DKIM sender ko request karo", detail: "Agar bulk sender ho to unhe DKIM setup karne ko bolo." }
        ],
        screenshots: [
          { caption: "Important Emails Spam Me Ja Rahe — interface mockup showing fix steps", alt: "Important Emails Spam Me Ja Rahe screenshot showing fix interface", type: "browser", mockupType: "gmail-login" },
          { caption: "Important Emails Spam Me Ja Rahe — settings screen mockup with options", alt: "Important Emails Spam Me Ja Rahe settings screen mockup", type: "phone", mockupType: "android-settings-notifications" }
        ],
        sources: [
          { title: "Gmail Help: Spam", url: "https://support.google.com/mail/answer/1366858", icon: "🔗" },
          { title: "Filters Guide", url: "https://support.google.com/mail/answer/6579", icon: "🔗" }
        ],
        proTips: ["Spam folder 30 din me auto delete hota hai — important mail jaldi recover karo", "Phishing report karne se Google AI seekhta hai", "Whitelisted sender bhi spam me kabhi-kabhi jata hai — manual check zaroori"],
        faqs: [
          { q: "Bank ka OTP spam me ja raha?", a: "Sender (e.g. 'AD-SBIBNK') ko filter me whitelist karo. Inbox-only delivery set karo." },
          { q: "Spam me jaate hi notification milti hai?", a: "Gmail > Settings > Inbox > Categories — Spam notification kabhi bhi nahi milti." },
          { q: "Spam folder bilkul hide kar sakte hain?", a: "Nahi — Gmail mandatory rakhta hai security ke liye." },
          { q: "Same sender baar-baar spam me?", a: "Filter banake 'Never send to spam' + 'Always mark as important' set karo." }
        ],
        related: [
          { title: "Gmail Filter Not Working", slug: "gmail-filter-not-working", category: "google" },
          { title: "Gmail Emails Not Receiving", slug: "gmail-emails-not-receiving", category: "google" }
        ],
        keywords: ["gmail spam folder issue", "important email spam me ja rahi", "gmail filter spam"],
        variants: ["important email spam me ja rahi", "gmail filter spam", "bank otp spam me"]
      },
      {
        slug: "gmail-attachment-not-downloading",
        category: "google",
        metaTitle: "Gmail Attachment Download Nahi Ho Raha — Quick Fix Guide (2026) | JharForm",
        metaDescription: "Attachment pe click karne pe 'Failed' ya kuch hota hi nahi — browser, antivirus, ya file-size issue ho sakta hai.",
        h1: "Gmail Attachment Download Nahi Ho Raha — Step-by-Step Fix",
        lastUpdated: "May 2026",
        readingTime: "3 min",
        difficulty: "Easy",
        description: "Attachment pe click karne pe 'Failed' ya kuch hota hi nahi — browser, antivirus, ya file-size issue ho sakta hai.",
        steps: [
          { title: "Browser refresh + retry", detail: "Ctrl+F5 se hard refresh karo. Phir attachment dobara click karo." },
          { title: "Different browser me try karo", detail: "Chrome me fail to Firefox/Edge. Extensions disable karke incognito try karo." },
          { title: "Storage space free karo (mobile)", detail: "Phone storage 1GB+ free chahiye. Settings > Storage > Free up." },
          { title: "Antivirus temporarily off karo", detail: "Windows Defender > Real-time protection off > download try." },
          { title: "Direct Drive me save karo", detail: "Attachment hover > Drive icon click > 'Add to My Drive'. Wahan se download." },
          { title: "Suspicious file ho to Google block karta hai", detail: "Executable (.exe), batch (.bat) blocked hote hain. Sender se zip me bhijwao." }
        ],
        screenshots: [
          { caption: "Gmail Attachment Download Nahi Ho Raha — interface mockup showing fix steps", alt: "Gmail Attachment Download Nahi Ho Raha screenshot showing fix interface", type: "browser", mockupType: "gmail-login" },
          { caption: "Gmail Attachment Download Nahi Ho Raha — settings screen mockup with options", alt: "Gmail Attachment Download Nahi Ho Raha settings screen mockup", type: "phone", mockupType: "android-settings-storage" }
        ],
        sources: [
          { title: "Gmail Help: Attachments", url: "https://support.google.com/mail/answer/6584", icon: "🔗" },
          { title: "Blocked file types", url: "https://support.google.com/mail/answer/6590", icon: "🔗" }
        ],
        proTips: ["Bade attachment ke liye 'View' mode pehle try karo, phir download", "Gmail mobile app me Files app me save hota hai by default", "Corporate VPN sometimes attachments block karta hai"],
        faqs: [
          { q: "'Virus scan failed' error?", a: "File 25MB+ ho to scan timeout hota hai. Sender se Drive link mangwao." },
          { q: "Multiple attachments ek saath?", a: "'Download all attachments' option Gmail me hai — zip me milte hain." },
          { q: "PDF preview hi nahi khulta?", a: "Browser PDF viewer enable karo. Chrome Settings > Privacy > Site settings > PDF documents." },
          { q: "Image attachments grey square dikhate hain?", a: "Images blocked: 'Display images below' click karo email me." }
        ],
        related: [
          { title: "Gmail Emails Not Sending", slug: "gmail-emails-not-sending", category: "google" },
          { title: "Gmail Storage Full", slug: "gmail-storage-full", category: "google" }
        ],
        keywords: ["gmail attachment download nahi ho raha", "attachment download fail", "gmail file download nahi"],
        variants: ["attachment download fail", "gmail file download nahi", "gmail pdf nahi khul raha"]
      },
      {
        slug: "gmail-signature-not-saving",
        category: "google",
        metaTitle: "Gmail Signature Save Nahi Ho Rahi — Quick Fix Guide (2026) | JharForm",
        metaDescription: "Settings me signature add ki par naye email me show nahi ho rahi — default signature, formatting, ya browser cache problem.",
        h1: "Gmail Signature Save Nahi Ho Rahi — Step-by-Step Fix",
        lastUpdated: "May 2026",
        readingTime: "3 min",
        difficulty: "Easy",
        description: "Settings me signature add ki par naye email me show nahi ho rahi — default signature, formatting, ya browser cache problem.",
        steps: [
          { title: "Settings > Signature kholo", detail: "Gmail > gear icon > See all settings > General > Signature section." },
          { title: "'Create new' click karke naam do", detail: "Pehle se hai to edit karo. Naam dena zaroori — blank fail hota hai." },
          { title: "Default signature dropdown set karo", detail: "Niche 'Signature defaults' me NEW EMAILS aur REPLY/FORWARD me apna signature select." },
          { title: "Save Changes bottom me click karo", detail: "Page ke bilkul bottom — easy to miss. Without this kuch save nahi hota." },
          { title: "Mobile app me alag set karna padta hai", detail: "Gmail mobile app > Settings > [account] > Mobile Signature." },
          { title: "HTML signature image issue?", detail: "Image public URL pe host karo. Gmail private images render nahi karta." }
        ],
        screenshots: [
          { caption: "Gmail Signature Save Nahi Ho Rahi — interface mockup showing fix steps", alt: "Gmail Signature Save Nahi Ho Rahi screenshot showing fix interface", type: "browser", mockupType: "gmail-login" },
          { caption: "Gmail Signature Save Nahi Ho Rahi — settings screen mockup with options", alt: "Gmail Signature Save Nahi Ho Rahi settings screen mockup", type: "phone", mockupType: "android-settings-system" }
        ],
        sources: [
          { title: "Gmail Help: Signature", url: "https://support.google.com/mail/answer/8395", icon: "🔗" },
          { title: "Email Signature Best Practices", url: "https://support.google.com/a/users/answer/9308783", icon: "🔗" }
        ],
        proTips: ["Signature 10,000 character tak allowed hai", "Multiple signatures bana sakte ho — 1 personal, 1 work", "Image signature ke liye Google Sites pe host best hai"],
        faqs: [
          { q: "Signature reply me kyun nahi aati?", a: "Defaults me 'On Reply/Forward Use' set nahi kiya hoga. Settings dobara dekho." },
          { q: "Mobile app ka signature alag dikhta hai?", a: "Haan — mobile signature separately set hota hai app settings me." },
          { q: "HTML signature insert kaise karein?", a: "Browser me HTML render karke copy karo (Ctrl+A, Ctrl+C), Signature box me paste." },
          { q: "Signature ke saath inline image?", a: "Image upload icon use karo signature box me — Drive ya URL se." }
        ],
        related: [
          { title: "Gmail Emails Not Sending", slug: "gmail-emails-not-sending", category: "google" },
          { title: "Gmail Filter Not Working", slug: "gmail-filter-not-working", category: "google" }
        ],
        keywords: ["gmail signature not saving", "gmail signature save nahi ho rahi", "email signature problem"],
        variants: ["gmail signature save nahi ho rahi", "email signature problem", "gmail mobile signature"]
      },
      {
        slug: "gmail-filter-not-working",
        category: "google",
        metaTitle: "Gmail Filter Apply Nahi Ho Raha — Quick Fix Guide (2026) | JharForm",
        metaDescription: "Filter banaya par incoming emails pe action nahi le raha — criteria mismatch, filter order, ya 'Apply to existing' miss kiya hoga.",
        h1: "Gmail Filter Apply Nahi Ho Raha — Step-by-Step Fix",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Medium",
        description: "Filter banaya par incoming emails pe action nahi le raha — criteria mismatch, filter order, ya 'Apply to existing' miss kiya hoga.",
        steps: [
          { title: "Settings > Filters tab kholo", detail: "See all settings > Filters and Blocked Addresses. Saare filter list me dikhenge." },
          { title: "Edit karke criteria verify karo", detail: "Email se exact 'from' address match hona chahiye. 'contains' me typo check karo." },
          { title: "'Also apply filter to matching conversations' tick karo", detail: "Create/Edit filter ke last step me. Existing emails pe bhi apply hoga." },
          { title: "Filter order matter karta hai", detail: "Pehla matching filter run hota hai, baad wale skip ho jate hain — important filter upar lao." },
          { title: "Conflicting filters delete karo", detail: "Ek hi sender ke liye 2 filter ho to dono confuse karte hain. Merge karo." },
          { title: "Test filter run karo", detail: "Test email bhej ke check karo. 'Has the words' me unique string daalo testing ke liye." }
        ],
        screenshots: [
          { caption: "Gmail Filter Apply Nahi Ho Raha — interface mockup showing fix steps", alt: "Gmail Filter Apply Nahi Ho Raha screenshot showing fix interface", type: "browser", mockupType: "gmail-login" },
          { caption: "Gmail Filter Apply Nahi Ho Raha — settings screen mockup with options", alt: "Gmail Filter Apply Nahi Ho Raha settings screen mockup", type: "phone", mockupType: "android-settings-notifications" }
        ],
        sources: [
          { title: "Gmail Filters Help", url: "https://support.google.com/mail/answer/6579", icon: "🔗" },
          { title: "Search Operators", url: "https://support.google.com/mail/answer/7190", icon: "🔗" }
        ],
        proTips: ["Forwarding filter ke liye verified address chahiye Settings me", "Filter export/import option Settings me available hai backup ke liye", "Filter sirf incoming pe chalta hai, sent pe nahi"],
        faqs: [
          { q: "Filter spam ko inbox me nahi laa raha?", a: "'Never send to spam' tick karo filter me. 'Skip the Inbox' uncheck karo." },
          { q: "Multiple labels apply karna ho?", a: "Ek filter me ek label. Multiple chahiye to multiple filters banao." },
          { q: "Filter mobile app me kaam karta hai?", a: "Haan — filters server-side hote hain, sab device pe same." },
          { q: "Auto-reply filter se kaise karein?", a: "Vacation responder + filter combine karo, ya Google Apps Script use karo." }
        ],
        related: [
          { title: "Gmail Spam Folder Issue", slug: "gmail-spam-folder-issue", category: "google" },
          { title: "Gmail Emails Not Receiving", slug: "gmail-emails-not-receiving", category: "google" }
        ],
        keywords: ["gmail filter not working", "gmail filter kaam nahi kar raha", "email auto sort nahi ho rahi"],
        variants: ["gmail filter kaam nahi kar raha", "email auto sort nahi ho rahi", "gmail rule problem"]
      },
      {
        slug: "gmail-two-factor-lost-phone",
        category: "google",
        metaTitle: "Gmail 2-Step Verification Phone Kho Gaya — Quick Fix Guide (2026) | JharForm",
        metaDescription: "2-Step on hai par registered phone kho gaya/badal gaya — backup codes, recovery email, ya alternate methods se access wapas.",
        h1: "Gmail 2-Step Verification Phone Kho Gaya — Step-by-Step Fix",
        lastUpdated: "May 2026",
        readingTime: "6 min",
        difficulty: "Hard",
        description: "2-Step on hai par registered phone kho gaya/badal gaya — backup codes, recovery email, ya alternate methods se access wapas.",
        steps: [
          { title: "Backup codes try karo", detail: "Login screen pe 'Try another way' > 'Enter one of your 8-digit backup codes'." },
          { title: "Trusted device se login karo", detail: "Pehle se logged-in laptop/tablet ho to wahan se security settings access karo." },
          { title: "Voice call OTP option chuno", detail: "'Try another way' > 'Get a verification code at [phone]' > Call option." },
          { title: "Recovery email pe code mangwao", detail: "Recovery email registered hai to 'Get help' > 'I don't have my phone'." },
          { title: "Account Recovery form bharo", detail: "g.co/recover > email daalo > 'Try another way' multiple times > recovery form." },
          { title: "Naya phone milne pe immediately 2FA update karo", detail: "myaccount.google.com/security > 2-Step Verification > Phone numbers update." }
        ],
        screenshots: [
          { caption: "Gmail 2-Step Verification Phone Kho Gaya — interface mockup showing fix steps", alt: "Gmail 2-Step Verification Phone Kho Gaya screenshot showing fix interface", type: "browser", mockupType: "google-recovery" },
          { caption: "Gmail 2-Step Verification Phone Kho Gaya — settings screen mockup with options", alt: "Gmail 2-Step Verification Phone Kho Gaya settings screen mockup", type: "phone", mockupType: "android-otp-sms" }
        ],
        sources: [
          { title: "Google Account Recovery", url: "https://g.co/recover", icon: "🔗" },
          { title: "2-Step Verification Help", url: "https://support.google.com/accounts/answer/185834", icon: "🔗" }
        ],
        proTips: ["Backup codes print karke wallet me rakho — emergency", "Authenticator app (Google Authenticator) backup phone pe sync karo", "Security key (YubiKey) backup method best hai"],
        faqs: [
          { q: "Recovery process kitna time leta hai?", a: "3-5 din. Manual review Google karta hai. Account creation details deni padti hai." },
          { q: "Backup codes generate kaise hote hain?", a: "myaccount.google.com/security > 2-Step Verification > Backup codes > Show codes." },
          { q: "Old SIM mil gayi to access wapas?", a: "Haan — number active ho to SMS OTP aayega. Number recycle ho gaya to nahi." },
          { q: "Authenticator app bina phone access kaise?", a: "Recovery codes, voice call, security key, ya recovery email — sab fallback hai." }
        ],
        related: [
          { title: "Gmail Login Nahi Ho Raha", slug: "gmail-login-nahi-ho-raha", category: "google" },
          { title: "Google Security Checkup", slug: "google-security-checkup", category: "google" }
        ],
        keywords: ["gmail 2 step verification phone lost", "2 step verification phone change", "gmail 2fa lost phone"],
        variants: ["2 step verification phone change", "gmail 2fa lost phone", "authenticator wapas kaise pao"]
      },
      {
        slug: "gmail-offline-mode-setup",
        category: "google",
        metaTitle: "Gmail Offline Mode Setup — Quick Fix Guide (2026) | JharForm",
        metaDescription: "Internet ke bina bhi emails read aur compose karna ho to Gmail Offline enable kar sakte ho — Chrome browser me kaam karta hai.",
        h1: "Gmail Offline Mode Setup — Step-by-Step Fix",
        lastUpdated: "May 2026",
        readingTime: "3 min",
        difficulty: "Easy",
        description: "Internet ke bina bhi emails read aur compose karna ho to Gmail Offline enable kar sakte ho — Chrome browser me kaam karta hai.",
        steps: [
          { title: "Chrome browser use karo", detail: "Offline mode sirf Chrome (desktop) pe officially supported hai." },
          { title: "Settings > Offline tab kholo", detail: "mail.google.com > gear > See all settings > Offline." },
          { title: "'Enable offline mail' check karo", detail: "Storage limit choose karo: 7/30/90 din ka email cache hoga." },
          { title: "Sync options set karo", detail: "Download attachments option enable karo agar offline files chahiye." },
          { title: "'Keep offline data on my computer' choose karo", detail: "Logout pe data rakhna ya delete karna — security trade-off." },
          { title: "Save Changes click karo", detail: "Initial sync hone do (5-10 min). Phir mail.google.com kholo internet bina." }
        ],
        screenshots: [
          { caption: "Gmail Offline Mode Setup — interface mockup showing fix steps", alt: "Gmail Offline Mode Setup screenshot showing fix interface", type: "browser", mockupType: "gmail-login" },
          { caption: "Gmail Offline Mode Setup — settings screen mockup with options", alt: "Gmail Offline Mode Setup settings screen mockup", type: "phone", mockupType: "android-settings-system" }
        ],
        sources: [
          { title: "Gmail Offline Setup", url: "https://support.google.com/mail/answer/1306849", icon: "🔗" },
          { title: "Chrome Offline Mode", url: "https://support.google.com/chrome/answer/95414", icon: "🔗" }
        ],
        proTips: ["Shared computer pe 'Remove offline data' choose karo", "Sent emails internet aane pe queue se send hote hain", "Search bhi offline kaam karti hai cached emails me"],
        faqs: [
          { q: "Mobile pe offline mode hai?", a: "Gmail mobile app default offline hai — sync ke baad cached emails dikhte hain." },
          { q: "Kitna storage leta hai?", a: "30 din ka data ~500MB-1GB. Settings me adjust kar sakte ho." },
          { q: "Compose kiya offline, internet pe automatic send?", a: "Haan — Outbox me queue hota hai, online hote hi send." },
          { q: "Multiple accounts pe alag setup?", a: "Haan — har account ke liye separately enable karna padta hai." }
        ],
        related: [
          { title: "Gmail Dark Mode", slug: "gmail-dark-mode", category: "google" },
          { title: "Gmail Storage Full", slug: "gmail-storage-full", category: "google" }
        ],
        keywords: ["gmail offline mode setup", "gmail bina internet kaise use kare", "gmail offline chrome"],
        variants: ["gmail bina internet kaise use kare", "gmail offline chrome", "gmail offline mobile"]
      },
      {
        slug: "gmail-dark-mode",
        category: "google",
        metaTitle: "Gmail Dark Mode Enable Karo — Quick Fix Guide (2026) | JharForm",
        metaDescription: "Gmail web aur mobile dono pe dark theme available hai — eyes ko relief aur battery save (OLED screens).",
        h1: "Gmail Dark Mode Enable Karo — Step-by-Step Fix",
        lastUpdated: "May 2026",
        readingTime: "2 min",
        difficulty: "Easy",
        description: "Gmail web aur mobile dono pe dark theme available hai — eyes ko relief aur battery save (OLED screens).",
        steps: [
          { title: "Web: Settings gear > Theme", detail: "Theme dropdown se 'Dark' choose karo. Preview turant dikhega." },
          { title: "Custom dark theme banayein", detail: "'View all' > black/grey backgrounds available." },
          { title: "Mobile Android: Gmail app > Settings", detail: "Hamburger menu > Settings > General settings > Theme > Dark." },
          { title: "iOS Gmail app: Settings > Theme", detail: "Theme > Dark/Light/System default select karo." },
          { title: "System theme match karo", detail: "'System default' choose karo — phone ke dark mode ke saath auto-switch." },
          { title: "Browser-level dark mode (force)", detail: "Chrome extension 'Dark Reader' install karo — har site dark hogi." }
        ],
        screenshots: [
          { caption: "Gmail Dark Mode Enable Karo — interface mockup showing fix steps", alt: "Gmail Dark Mode Enable Karo screenshot showing fix interface", type: "browser", mockupType: "gmail-login" },
          { caption: "Gmail Dark Mode Enable Karo — settings screen mockup with options", alt: "Gmail Dark Mode Enable Karo settings screen mockup", type: "phone", mockupType: "android-settings-display" }
        ],
        sources: [
          { title: "Gmail Themes Help", url: "https://support.google.com/mail/answer/112508", icon: "🔗" },
          { title: "Android Dark Theme", url: "https://support.google.com/android/answer/9533653", icon: "🔗" }
        ],
        proTips: ["OLED phones pe pure black battery saves karta hai 30-40%", "Eye strain night me kaafi kam hota hai dark theme se", "Some emails dark mode me galat dikhte hain — sender ka HTML issue"],
        faqs: [
          { q: "Sirf compose window dark nahi hota?", a: "Webmail bug hai — refresh karo. Theme dobara apply karo." },
          { q: "Dark mode auto-switch night ko?", a: "'System default' set karo. Phone ka schedule respect hoga." },
          { q: "Emails ka content dark dikhane ke liye?", a: "Limited support — sender ne dark-mode optimized HTML banaya ho tabhi." },
          { q: "Inbox ka background custom color?", a: "Themes > 'Pick your own photo' option hai webmail me." }
        ],
        related: [
          { title: "Gmail Offline Mode Setup", slug: "gmail-offline-mode-setup", category: "google" },
          { title: "Chrome Sync Not Working", slug: "chrome-sync-not-working", category: "google" }
        ],
        keywords: ["gmail dark mode", "gmail dark theme", "gmail black mode"],
        variants: ["gmail dark theme", "gmail black mode", "gmail night mode enable"]
      },
      {
        slug: "gmail-import-from-outlook",
        category: "google",
        metaTitle: "Outlook Se Gmail Me Import Karein — Quick Fix Guide (2026) | JharForm",
        metaDescription: "Outlook ke saare emails, contacts, calendar Gmail me transfer karna ho to Google ka import tool ya manual PST export use karo.",
        h1: "Outlook Se Gmail Me Import Karein — Step-by-Step Fix",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Medium",
        description: "Outlook ke saare emails, contacts, calendar Gmail me transfer karna ho to Google ka import tool ya manual PST export use karo.",
        steps: [
          { title: "Gmail Settings > Accounts and Import", detail: "See all settings > Accounts and Import > 'Import mail and contacts' click." },
          { title: "Outlook email address daalo", detail: "Pop-up me Outlook.com / hotmail.com address daalo. Sign-in karo." },
          { title: "Import options select karo", detail: "Import contacts, Import mail, Import new mail for next 30 days — apne hisab se tick." },
          { title: "Start Import click karo", detail: "Background me transfer hoga. 1-2 din lag sakte hain bade mailbox ke liye." },
          { title: "Manual PST export (Outlook desktop)", detail: "Outlook > File > Open & Export > Import/Export > Export to .pst." },
          { title: "Gmail me PST import (Google Workspace)", detail: "Workspace admin: Migration tool use karo. Personal: third-party tool jaise Gmvault." }
        ],
        screenshots: [
          { caption: "Outlook Se Gmail Me Import Karein — interface mockup showing fix steps", alt: "Outlook Se Gmail Me Import Karein screenshot showing fix interface", type: "browser", mockupType: "gmail-login" },
          { caption: "Outlook Se Gmail Me Import Karein — settings screen mockup with options", alt: "Outlook Se Gmail Me Import Karein settings screen mockup", type: "phone", mockupType: "android-settings-system" }
        ],
        sources: [
          { title: "Gmail Help: Import mail", url: "https://support.google.com/mail/answer/164640", icon: "🔗" },
          { title: "Google Workspace Migration", url: "https://support.google.com/a/answer/6251069", icon: "🔗" }
        ],
        proTips: ["Free personal accounts ke liye Google Takeout reverse direction me nahi karta", "Calendar import alag se: calendar.google.com > Settings > Import", "Bade mailbox (50GB+) ke liye Google Workspace admin migration tool best"],
        faqs: [
          { q: "Folder structure preserve hota hai?", a: "Haan — Gmail me labels ke form me dikhte hain Outlook folders." },
          { q: "Outlook contacts duplicate ho rahe?", a: "contacts.google.com > Merge & fix > duplicates auto-detect." },
          { q: "IMAP setup alternate option?", a: "Haan — Settings > Accounts > Add mail account > Outlook IMAP details." },
          { q: "Calendar events import?", a: "Outlook se .ics export > Google Calendar > Settings > Import & export." }
        ],
        related: [
          { title: "Gmail Forwarding Setup", slug: "gmail-forwarding-setup", category: "google" },
          { title: "Gmail Storage Full", slug: "gmail-storage-full", category: "google" }
        ],
        keywords: ["outlook to gmail import", "outlook se gmail me transfer", "email migrate to gmail"],
        variants: ["outlook se gmail me transfer", "email migrate to gmail", "hotmail import gmail"]
      },
      {
        slug: "gmail-unsubscribe-spam",
        category: "google",
        metaTitle: "Gmail Me Bulk Unsubscribe Karein — Quick Fix Guide (2026) | JharForm",
        metaDescription: "Daily 50+ promotional emails aati hain — Gmail ka built-in unsubscribe ya bulk tools se inbox clean karo.",
        h1: "Gmail Me Bulk Unsubscribe Karein — Step-by-Step Fix",
        lastUpdated: "May 2026",
        readingTime: "3 min",
        difficulty: "Easy",
        description: "Daily 50+ promotional emails aati hain — Gmail ka built-in unsubscribe ya bulk tools se inbox clean karo.",
        steps: [
          { title: "Email kholke 'Unsubscribe' link dabao", detail: "Gmail sender ke naam ke pas 'Unsubscribe' button dikhata hai — 2 clicks me ho jata hai." },
          { title: "Bulk: Promotions tab kholo", detail: "Inbox tabs me Promotions > sab select > delete. Filter banake auto-delete bhi possible." },
          { title: "'List-Unsubscribe' header use", detail: "Gmail compliant senders ke liye one-click unsubscribe banaya hai Google." },
          { title: "Third-party tool Unroll.me try karo", detail: "unroll.me account connect karke 100+ subscriptions ek baar me unsubscribe." },
          { title: "Block sender option", detail: "Email > 3 dots > Block 'sender'. Future emails automatically Spam me jayenge." },
          { title: "Filter se permanent solution", detail: "'Has the words: unsubscribe' filter banake auto-delete set karo bulk emails." }
        ],
        screenshots: [
          { caption: "Gmail Me Bulk Unsubscribe Karein — interface mockup showing fix steps", alt: "Gmail Me Bulk Unsubscribe Karein screenshot showing fix interface", type: "browser", mockupType: "gmail-login" },
          { caption: "Gmail Me Bulk Unsubscribe Karein — settings screen mockup with options", alt: "Gmail Me Bulk Unsubscribe Karein settings screen mockup", type: "phone", mockupType: "android-settings-notifications" }
        ],
        sources: [
          { title: "Gmail Help: Unsubscribe", url: "https://support.google.com/mail/answer/8151", icon: "🔗" },
          { title: "Inbox Categories", url: "https://support.google.com/mail/answer/3094499", icon: "🔗" }
        ],
        proTips: ["'Mark as spam' bhi unsubscribe ka kaam karta hai — Gmail seekhta hai", "Aadhar/PAN linked emails Unsubscribe se safe rakho", "Daily 5 minute spam clean karne se inbox manageable rehta hai"],
        faqs: [
          { q: "Unsubscribe link suspicious ho to?", a: "Click mat karo — 'Mark as spam' karo seedha." },
          { q: "Sirf ek sender block karna?", a: "Email > 3 dots > Block — saare future mails Spam me." },
          { q: "Subscription wapas chahiye to?", a: "Sender ki website pe ja ke firse subscribe karo." },
          { q: "Promotion tab band kar du?", a: "Settings > Inbox > Categories > sirf Primary tick karo." }
        ],
        related: [
          { title: "Gmail Spam Folder Issue", slug: "gmail-spam-folder-issue", category: "google" },
          { title: "Gmail Filter Not Working", slug: "gmail-filter-not-working", category: "google" }
        ],
        keywords: ["gmail bulk unsubscribe", "gmail spam unsubscribe", "newsletter band karein"],
        variants: ["gmail spam unsubscribe", "newsletter band karein", "promotion emails delete"]
      },
      {
        slug: "gmail-recovery-email-change",
        category: "google",
        metaTitle: "Gmail Recovery Email Change Karein — Quick Fix Guide (2026) | JharForm",
        metaDescription: "Account security ke liye recovery email update karna zaroori hai — purani email access nahi hai to recovery muskil ho jata hai.",
        h1: "Gmail Recovery Email Change Karein — Step-by-Step Fix",
        lastUpdated: "May 2026",
        readingTime: "3 min",
        difficulty: "Easy",
        description: "Account security ke liye recovery email update karna zaroori hai — purani email access nahi hai to recovery muskil ho jata hai.",
        steps: [
          { title: "myaccount.google.com kholo", detail: "Personal info > Contact info > Email." },
          { title: "Recovery email pe click karo", detail: "Current dikhega. Edit (pencil icon) click karo." },
          { title: "Naya recovery email enter karo", detail: "Working email daalo jiska access hai. Same Google account ka primary nahi ho sakta." },
          { title: "Verification code receive karo", detail: "Naye email pe Google verification code bhejega. Code enter karo." },
          { title: "Confirm aur save karo", detail: "Pop-up me yes karo. 24 ghante me update reflect hoga." },
          { title: "Recovery phone bhi update karo", detail: "Same page pe phone number bhi update kar lo backup security ke liye." }
        ],
        screenshots: [
          { caption: "Gmail Recovery Email Change Karein — interface mockup showing fix steps", alt: "Gmail Recovery Email Change Karein screenshot showing fix interface", type: "browser", mockupType: "google-recovery" },
          { caption: "Gmail Recovery Email Change Karein — settings screen mockup with options", alt: "Gmail Recovery Email Change Karein settings screen mockup", type: "phone", mockupType: "gmail-login" }
        ],
        sources: [
          { title: "Recovery Options", url: "https://myaccount.google.com/recovery", icon: "🔗" },
          { title: "Account Security", url: "https://myaccount.google.com/security", icon: "🔗" }
        ],
        proTips: ["Recovery email aapka primary Gmail nahi hona chahiye", "Family member ka email rakhna risky — unauthorized access", "Recovery email pe 2FA bhi enable rakho"],
        faqs: [
          { q: "Old recovery email access nahi?", a: "Naya add karne ke liye old verify nahi karna padta — direct change kar sakte ho." },
          { q: "Multiple recovery emails add ho sakte?", a: "Nahi — ek primary recovery email hi allowed hai." },
          { q: "Recovery email Gmail ka hi hona chahiye?", a: "Nahi — Outlook, Yahoo, koi bhi email work karta hai." },
          { q: "Email change ke baad immediately use kar sakte?", a: "Haan — pop-up confirm hote hi active hota hai." }
        ],
        related: [
          { title: "Gmail 2-Step Lost Phone", slug: "gmail-two-factor-lost-phone", category: "google" },
          { title: "Google Security Checkup", slug: "google-security-checkup", category: "google" }
        ],
        keywords: ["gmail recovery email change", "recovery email update karein", "gmail backup email change"],
        variants: ["recovery email update karein", "gmail backup email change", "alternate email change"]
      },
      {
        slug: "gmail-forwarding-setup",
        category: "google",
        metaTitle: "Gmail Auto Forwarding Setup Karein — Quick Fix Guide (2026) | JharForm",
        metaDescription: "Saare incoming emails kisi aur address pe automatically forward karne hain to Gmail me forwarding rule set karo.",
        h1: "Gmail Auto Forwarding Setup Karein — Step-by-Step Fix",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Medium",
        description: "Saare incoming emails kisi aur address pe automatically forward karne hain to Gmail me forwarding rule set karo.",
        steps: [
          { title: "Settings > Forwarding and POP/IMAP", detail: "See all settings me yeh tab kholo." },
          { title: "'Add a forwarding address' click karo", detail: "Pop-up me destination email address daalo." },
          { title: "Verification email check karo", detail: "Destination address pe Google verification code bhejega. Confirm karo." },
          { title: "Wapas Forwarding tab me settings karo", detail: "'Forward a copy of incoming mail to' radio button select karo." },
          { title: "Original ka kya karna chahiye choose karo", detail: "Keep Gmail's copy in inbox (recommended) ya delete/archive." },
          { title: "Save Changes (bottom)", detail: "Forwarding active. Mobile app me bhi reflect hoga." }
        ],
        screenshots: [
          { caption: "Gmail Auto Forwarding Setup Karein — interface mockup showing fix steps", alt: "Gmail Auto Forwarding Setup Karein screenshot showing fix interface", type: "browser", mockupType: "gmail-login" },
          { caption: "Gmail Auto Forwarding Setup Karein — settings screen mockup with options", alt: "Gmail Auto Forwarding Setup Karein settings screen mockup", type: "phone", mockupType: "android-settings-system" }
        ],
        sources: [
          { title: "Gmail Forwarding Help", url: "https://support.google.com/mail/answer/10957", icon: "🔗" },
          { title: "Filter-based forwarding", url: "https://support.google.com/mail/answer/6579", icon: "🔗" }
        ],
        proTips: ["Forwarding rule sirf incoming pe chalta hai, sent pe nahi", "Specific senders ke liye filter + forwarding combine karo", "Forwarding loop avoid karo — destination se wapas source mat bhejo"],
        faqs: [
          { q: "Forwarding band kaise karein?", a: "Same Forwarding tab > 'Disable forwarding' radio select > Save." },
          { q: "Multiple addresses forward kar sakte?", a: "Filters use karo — alag-alag conditions pe alag forwarding." },
          { q: "Forwarded email ka 'From' kya hota hai?", a: "Original sender hi rehta hai. Subject me 'Fwd:' nahi lagta auto-forwarding me." },
          { q: "Workspace admin block kar sakta hai?", a: "Haan — Workspace policies me 'Disable email forwarding' option hai." }
        ],
        related: [
          { title: "Gmail Filter Not Working", slug: "gmail-filter-not-working", category: "google" },
          { title: "Gmail Delegate Access", slug: "gmail-delegate-access", category: "google" }
        ],
        keywords: ["gmail email forwarding setup", "gmail forward setup", "gmail auto forward"],
        variants: ["gmail forward setup", "gmail auto forward", "email redirect karein"]
      },
      {
        slug: "gmail-delegate-access",
        category: "google",
        metaTitle: "Gmail Delegate Access (Assistant) — Quick Fix Guide (2026) | JharForm",
        metaDescription: "Apna Gmail kisi assistant ko access dena ho bina password share kiye — Delegate Access feature use karo.",
        h1: "Gmail Delegate Access (Assistant) — Step-by-Step Fix",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Medium",
        description: "Apna Gmail kisi assistant ko access dena ho bina password share kiye — Delegate Access feature use karo.",
        steps: [
          { title: "Settings > Accounts and Import", detail: "Personal/Workspace dono me available hai." },
          { title: "'Grant access to your account'", detail: "Add another account click karo." },
          { title: "Delegate ka email daalo", detail: "Same domain (Workspace) ya Gmail address support karta hai." },
          { title: "Email confirmation delegate ko jayegi", detail: "Unhe Accept karna padega — 30 min tak invite valid." },
          { title: "Permission level choose karo", detail: "Mark as read by delegate ya not — privacy ke hisab se." },
          { title: "Delegate Gmail me account switcher me dikhega", detail: "Profile pic > account list me delegated account select kar sakta hai." }
        ],
        screenshots: [
          { caption: "Gmail Delegate Access (Assistant) — interface mockup showing fix steps", alt: "Gmail Delegate Access (Assistant) screenshot showing fix interface", type: "browser", mockupType: "gmail-login" },
          { caption: "Gmail Delegate Access (Assistant) — settings screen mockup with options", alt: "Gmail Delegate Access (Assistant) settings screen mockup", type: "phone", mockupType: "android-settings-security" }
        ],
        sources: [
          { title: "Gmail Delegation Help", url: "https://support.google.com/mail/answer/138350", icon: "🔗" },
          { title: "Workspace Delegation", url: "https://support.google.com/a/answer/7223765", icon: "🔗" }
        ],
        proTips: ["Delegate Gmail ka password ya 2FA codes nahi dekh sakta", "Chat/Hangouts delegate ko access nahi hota", "10 delegates tak add ho sakte hain ek account pe"],
        faqs: [
          { q: "Delegate kya kya nahi kar sakta?", a: "Settings change, password update, 2FA modify — sab restricted." },
          { q: "Mobile app me delegate access hai?", a: "Sirf web pe full delegate access. Mobile pe limited." },
          { q: "Access revoke kaise karein?", a: "Same Accounts tab > delegate ke pas 'Delete' click karo." },
          { q: "Workspace me admin enable karta hai?", a: "Workspace admin features > Gmail > User settings me allow karna padta hai." }
        ],
        related: [
          { title: "Gmail Forwarding Setup", slug: "gmail-forwarding-setup", category: "google" },
          { title: "Google Security Checkup", slug: "google-security-checkup", category: "google" }
        ],
        keywords: ["gmail delegate access", "gmail assistant access", "gmail account share without password"],
        variants: ["gmail assistant access", "gmail account share without password", "gmail delegate setup"]
      },
      {
        slug: "google-password-change",
        category: "google",
        metaTitle: "Google Account Password Change Karein — Quick Fix Guide (2026) | JharForm",
        metaDescription: "Security ke liye Google password regular change karna chahiye — myaccount.google.com se 2 minute me ho jata hai.",
        h1: "Google Account Password Change Karein — Step-by-Step Fix",
        lastUpdated: "May 2026",
        readingTime: "3 min",
        difficulty: "Easy",
        description: "Security ke liye Google password regular change karna chahiye — myaccount.google.com se 2 minute me ho jata hai.",
        steps: [
          { title: "myaccount.google.com kholo", detail: "Logged-in account ka dashboard khulega." },
          { title: "Security tab > 'Password' click karo", detail: "Last changed date dikhegi yahan." },
          { title: "Current password enter karo verification ke liye", detail: "Galat dala to 5 baar wrong = temporary lock." },
          { title: "Naya password (12+ characters, mixed)", detail: "Letters + numbers + symbols. Common words avoid karo." },
          { title: "Confirm karke 'Change Password' click karo", detail: "Saari sessions automatically logout ho jayengi sab device se." },
          { title: "Trusted devices re-login karo", detail: "Phone, laptop sab pe naya password se login." }
        ],
        screenshots: [
          { caption: "Google Account Password Change Karein — interface mockup showing fix steps", alt: "Google Account Password Change Karein screenshot showing fix interface", type: "browser", mockupType: "google-recovery" },
          { caption: "Google Account Password Change Karein — settings screen mockup with options", alt: "Google Account Password Change Karein settings screen mockup", type: "phone", mockupType: "android-settings-security" }
        ],
        sources: [
          { title: "Change Password", url: "https://myaccount.google.com/security", icon: "🔗" },
          { title: "Password Best Practices", url: "https://support.google.com/accounts/answer/32040", icon: "🔗" }
        ],
        proTips: ["Password manager use karo — unique password har site pe", "12+ characters mandatory hai 2024+ accounts ke liye", "Same password 1 year tak limit — Google reminder bhi karta hai"],
        faqs: [
          { q: "Password change ke baad mobile apps logout?", a: "Haan — saari sessions reset hoti hain security ke liye." },
          { q: "App passwords ka kya hota hai?", a: "Old app passwords invalid ho jate hain — naye generate karne padte hain." },
          { q: "Password change reverse kar sakte?", a: "Nahi — old password kabhi wapas nahi mil sakta." },
          { q: "Bina old password ke change kaise?", a: "Account Recovery se reset karo — g.co/recover." }
        ],
        related: [
          { title: "Gmail Login Nahi Ho Raha", slug: "gmail-login-nahi-ho-raha", category: "google" },
          { title: "Google Security Checkup", slug: "google-security-checkup", category: "google" }
        ],
        keywords: ["google password change", "gmail password badle", "google password update"],
        variants: ["gmail password badle", "google password update", "gmail password reset"]
      },
      {
        slug: "gmail-name-change",
        category: "google",
        metaTitle: "Gmail Display Name Change Karein — Quick Fix Guide (2026) | JharForm",
        metaDescription: "Recipients ko jo naam dikhta hai email me, woh change karna ho to Account Settings se update kar sakte ho — username nahi badalta.",
        h1: "Gmail Display Name Change Karein — Step-by-Step Fix",
        lastUpdated: "May 2026",
        readingTime: "3 min",
        difficulty: "Easy",
        description: "Recipients ko jo naam dikhta hai email me, woh change karna ho to Account Settings se update kar sakte ho — username nahi badalta.",
        steps: [
          { title: "Gmail Settings > Accounts and Import", detail: "See all settings > 'Send mail as' section dekho." },
          { title: "Current email ke pas 'edit info'", detail: "Pop-up khulega name aur reply-to fields ke saath." },
          { title: "Naya naam daalo", detail: "First + Last name daalo. Recipients ko yeh dikhega 'From' me." },
          { title: "'Treat as an alias' tick karo (optional)", detail: "Multiple aliases ke liye useful." },
          { title: "Save Changes karo", detail: "Naya email se naya naam dikhega." },
          { title: "Google Account naam alag se update karo", detail: "myaccount.google.com > Personal info > Name — yeh sab Google services pe dikhta hai." }
        ],
        screenshots: [
          { caption: "Gmail Display Name Change Karein — interface mockup showing fix steps", alt: "Gmail Display Name Change Karein screenshot showing fix interface", type: "browser", mockupType: "gmail-login" },
          { caption: "Gmail Display Name Change Karein — settings screen mockup with options", alt: "Gmail Display Name Change Karein settings screen mockup", type: "phone", mockupType: "android-settings-system" }
        ],
        sources: [
          { title: "Gmail Name Change Help", url: "https://support.google.com/mail/answer/8158", icon: "🔗" },
          { title: "Google Account Name", url: "https://support.google.com/accounts/answer/27442", icon: "🔗" }
        ],
        proTips: ["Username (@gmail.com se pehle) kabhi change nahi hota", "Display name 3 baar/year change ki limit hai Google account me", "Workspace users ko admin change karta hai naam"],
        faqs: [
          { q: "Username badal sakte hain?", a: "Nahi — @gmail.com ke pehle ka part lifetime fixed hai." },
          { q: "Naam change recipients ko notify hota hai?", a: "Nahi — silent change. Future emails me naya naam dikhega." },
          { q: "Profile picture saath me change?", a: "Haan — myaccount.google.com > Personal info > Photo." },
          { q: "Mobile app me alag naam set kar sakte?", a: "Nahi — same naam sab pe sync hota hai." }
        ],
        related: [
          { title: "Profile Photo Change Nahi Ho Raha", slug: "profile-photo-change-nahi-ho-raha", category: "google" },
          { title: "Google Password Change", slug: "google-password-change", category: "google" }
        ],
        keywords: ["gmail name change", "gmail display name change", "google account name update"],
        variants: ["gmail display name change", "google account name update", "gmail user name change"]
      },
      {
        slug: "profile-photo-change-nahi-ho-raha",
        category: "google",
        metaTitle: "Google Profile Photo Change Nahi Ho Raha — Quick Fix Guide (2026) | JharForm",
        metaDescription: "Naya photo upload kiya par dikh nahi raha ya old photo wapas aa raha — cache, image format, ya sync issue.",
        h1: "Google Profile Photo Change Nahi Ho Raha — Step-by-Step Fix",
        lastUpdated: "May 2026",
        readingTime: "3 min",
        difficulty: "Easy",
        description: "Naya photo upload kiya par dikh nahi raha ya old photo wapas aa raha — cache, image format, ya sync issue.",
        steps: [
          { title: "myaccount.google.com > Personal info", detail: "Photo section me current photo aur 'Change' button milega." },
          { title: "JPG/PNG square format use karo", detail: "Min 200x200 px. 5MB se kam size." },
          { title: "Upload aur Save karo", detail: "Crop tool me square crop karo. Save click karo." },
          { title: "Cache clear karo (browser/app)", detail: "Chrome: Ctrl+Shift+Del. Gmail mobile app: Settings > Apps > Gmail > Clear cache." },
          { title: "Different device pe check karo", detail: "Mobile pe update hua par desktop pe nahi? — 1-24 ghante sync me lagte hain." },
          { title: "Workspace admin restrictions check karo", detail: "Office account ho to admin ne lock kiya ho sakta hai photo change." }
        ],
        screenshots: [
          { caption: "Google Profile Photo Change Nahi Ho Raha — interface mockup showing fix steps", alt: "Google Profile Photo Change Nahi Ho Raha screenshot showing fix interface", type: "browser", mockupType: "gmail-login" },
          { caption: "Google Profile Photo Change Nahi Ho Raha — settings screen mockup with options", alt: "Google Profile Photo Change Nahi Ho Raha settings screen mockup", type: "phone", mockupType: "android-settings-system" }
        ],
        sources: [
          { title: "Profile Photo Help", url: "https://support.google.com/accounts/answer/27442", icon: "🔗" },
          { title: "Photo Upload Issues", url: "https://support.google.com/contacts/answer/2999403", icon: "🔗" }
        ],
        proTips: ["Square photo best dikhta hai — circle crop apply hota hai", "Cartoon/anime allowed lekin offensive content remove hota hai", "Family Link supervised account me parent control karta hai"],
        faqs: [
          { q: "Photo upload error 'failed'?", a: "Format check karo. HEIC iPhone format Google nahi accept karta — JPG me convert karo." },
          { q: "Mobile me dikh raha lekin desktop pe nahi?", a: "Cache clear karo browser ka. Logout-login try karo." },
          { q: "Default avatar wapas kaise?", a: "Photo section me 'Remove photo' option hota hai — default initial dikhega." },
          { q: "YouTube channel photo same hota hai?", a: "Haan — Google account ka photo sab services pe propagate hota hai including YouTube." }
        ],
        related: [
          { title: "Gmail Name Change", slug: "gmail-name-change", category: "google" },
          { title: "Google Account Merge", slug: "google-account-merge", category: "google" }
        ],
        keywords: ["google profile photo change", "profile photo upload nahi ho raha", "gmail dp change"],
        variants: ["profile photo upload nahi ho raha", "gmail dp change", "google avatar update"]
      },
      {
        slug: "google-account-merge",
        category: "google",
        metaTitle: "Do Google Accounts Merge Kar Sakte Hain? — Quick Fix Guide (2026) | JharForm",
        metaDescription: "Short answer: Google officially accounts merge nahi karta. Lekin data transfer (Takeout) aur forwarding se workaround possible hai.",
        h1: "Do Google Accounts Merge Kar Sakte Hain? — Step-by-Step Fix",
        lastUpdated: "May 2026",
        readingTime: "6 min",
        difficulty: "Hard",
        description: "Short answer: Google officially accounts merge nahi karta. Lekin data transfer (Takeout) aur forwarding se workaround possible hai.",
        steps: [
          { title: "Important Google ek account ko primary banao", detail: "Jis account ka data zyada hai usko keep karo." },
          { title: "Secondary se Takeout export karo", detail: "takeout.google.com pe jao > sab data select > export." },
          { title: "Drive files transfer karo", detail: "Secondary Drive > files select > Share > primary account ko Editor access > 'Make a copy' primary se." },
          { title: "Gmail forwarding setup karo", detail: "Secondary Gmail > Settings > Forwarding > primary ka email." },
          { title: "Contacts import karo", detail: "contacts.google.com primary me > Import > Google CSV from secondary." },
          { title: "Secondary account delete socho carefully", detail: "Sab data transfer hone ke baad hi delete — irreversible step." }
        ],
        screenshots: [
          { caption: "Do Google Accounts Merge Kar Sakte Hain? — interface mockup showing fix steps", alt: "Do Google Accounts Merge Kar Sakte Hain? screenshot showing fix interface", type: "browser", mockupType: "google-recovery" },
          { caption: "Do Google Accounts Merge Kar Sakte Hain? — settings screen mockup with options", alt: "Do Google Accounts Merge Kar Sakte Hain? settings screen mockup", type: "phone", mockupType: "gmail-login" }
        ],
        sources: [
          { title: "Google Takeout", url: "https://takeout.google.com", icon: "🔗" },
          { title: "Account Help", url: "https://support.google.com/accounts/answer/32132", icon: "🔗" }
        ],
        proTips: ["Calendar events alag se import: .ics export-import", "YouTube channel transfer brand account ke through hota hai", "Subscription (Google One) merge nahi hota — refund le sakte ho"],
        faqs: [
          { q: "Data fully merge hota hai?", a: "Nahi — selective transfer hota hai. Some services (Play purchases) transfer nahi hote." },
          { q: "Photos kaise merge karein?", a: "Photos > Partner sharing setup karo. Phir Library me copy karo." },
          { q: "Both Gmail addresses chalu rakh sakte?", a: "Haan — primary me secondary 'Send mail as' add karke chalo." },
          { q: "Login history merge hoti hai?", a: "Nahi — security log alag rehta hai dono accounts ka." }
        ],
        related: [
          { title: "Account Permanently Delete", slug: "google-account-delete", category: "google" },
          { title: "Gmail Import From Outlook", slug: "gmail-import-from-outlook", category: "google" }
        ],
        keywords: ["google account merge", "do gmail merge karein", "google accounts combine"],
        variants: ["do gmail merge karein", "google accounts combine", "two gmail accounts merge"]
      },
      {
        slug: "google-account-delete",
        category: "google",
        metaTitle: "Google Account Permanently Delete Karein — Quick Fix Guide (2026) | JharForm",
        metaDescription: "Gmail, Drive, Photos, YouTube — sab data permanent delete karna ho to myaccount se 'Delete your account' option use karo.",
        h1: "Google Account Permanently Delete Karein — Step-by-Step Fix",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Hard",
        description: "Gmail, Drive, Photos, YouTube — sab data permanent delete karna ho to myaccount se 'Delete your account' option use karo.",
        steps: [
          { title: "Pehle Google Takeout se backup lo", detail: "takeout.google.com — sab data zip me download karo. Irreversible step hai." },
          { title: "Subscriptions cancel karo (YouTube Premium, Google One)", detail: "myaccount > Payments & subscriptions > active sub cancel." },
          { title: "myaccount.google.com > Data & privacy", detail: "Niche scroll karo > 'Delete your Google Account' click." },
          { title: "Account ka password dobara enter karo", detail: "Identity verify ke liye mandatory." },
          { title: "List of data dikhayega — read karke confirm", detail: "Gmail, Photos, Drive, YouTube channel — sab list me hoga." },
          { title: "Tick aur 'Delete account' click karo", detail: "2-3 weeks me permanent. Beech me login karke recover possible." }
        ],
        screenshots: [
          { caption: "Google Account Permanently Delete Karein — interface mockup showing fix steps", alt: "Google Account Permanently Delete Karein screenshot showing fix interface", type: "browser", mockupType: "google-recovery" },
          { caption: "Google Account Permanently Delete Karein — settings screen mockup with options", alt: "Google Account Permanently Delete Karein settings screen mockup", type: "phone", mockupType: "android-settings-security" }
        ],
        sources: [
          { title: "Delete Account Help", url: "https://support.google.com/accounts/answer/32046", icon: "🔗" },
          { title: "Download Your Data", url: "https://takeout.google.com", icon: "🔗" }
        ],
        proTips: ["Recovery window 20 din hai — uske baad bilkul gone", "Bank accounts/UPI linked ho to wahan se hatao pehle", "Email forward setup karo new account pe contacts ko info do"],
        faqs: [
          { q: "Account delete hone ke baad data recover?", a: "20 din andar login karke 'Recover' option try karo. Uske baad nahi." },
          { q: "Gmail ID dobara use kar sakte?", a: "Nahi — deleted Gmail address kabhi recycle nahi hota Google ke policy ke wajah se." },
          { q: "YouTube channel delete hoga?", a: "Haan — comments, videos, subscriptions sab gone. Pehle export karo." },
          { q: "Sirf Gmail delete karna possible hai?", a: "Haan — myaccount > Data & privacy > 'Delete a Google service' > Gmail." }
        ],
        related: [
          { title: "Google Account Merge", slug: "google-account-merge", category: "google" },
          { title: "Third Party App Access Remove", slug: "third-party-app-access-remove", category: "google" }
        ],
        keywords: ["google account permanently delete", "gmail account delete karein", "google account band karein"],
        variants: ["gmail account delete karein", "google account band karein", "gmail permanently delete"]
      },
      {
        slug: "third-party-app-access-remove",
        category: "google",
        metaTitle: "Third-Party App Ka Google Access Hatao — Quick Fix Guide (2026) | JharForm",
        metaDescription: "Purane apps (Instagram, games) ke pas Google account ka access reh jata hai — security ke liye revoke karo.",
        h1: "Third-Party App Ka Google Access Hatao — Step-by-Step Fix",
        lastUpdated: "May 2026",
        readingTime: "3 min",
        difficulty: "Easy",
        description: "Purane apps (Instagram, games) ke pas Google account ka access reh jata hai — security ke liye revoke karo.",
        steps: [
          { title: "myaccount.google.com > Security", detail: "Niche scroll karo > 'Third-party apps with account access' section." },
          { title: "'Manage third-party access' click karo", detail: "Saare connected apps ki list dikhegi with last-used date." },
          { title: "App icon pe click karo", detail: "Detailed permissions dikhegi — Calendar, Contacts, Drive, etc." },
          { title: "'Remove Access' button click karo", detail: "Confirm karo. Turant access revoke hota hai." },
          { title: "Saare unused apps remove karo", detail: "6 mahine+ purane apps remove karo — security best practice." },
          { title: "Sign-in tracking check karo", detail: "Same page pe 'Signing in with Google' section me sab third-party logins." }
        ],
        screenshots: [
          { caption: "Third-Party App Ka Google Access Hatao — interface mockup showing fix steps", alt: "Third-Party App Ka Google Access Hatao screenshot showing fix interface", type: "browser", mockupType: "google-recovery" },
          { caption: "Third-Party App Ka Google Access Hatao — settings screen mockup with options", alt: "Third-Party App Ka Google Access Hatao settings screen mockup", type: "phone", mockupType: "android-settings-security" }
        ],
        sources: [
          { title: "Permissions Manager", url: "https://myaccount.google.com/permissions", icon: "🔗" },
          { title: "Third-party Access", url: "https://support.google.com/accounts/answer/3466521", icon: "🔗" }
        ],
        proTips: ["Har 3 mahine me audit karo connected apps ka", "Suspicious app ka access dikhe to immediately revoke + password change", "Workspace admin admin-console se org-wide control kar sakta hai"],
        faqs: [
          { q: "Access remove karne se app me login lost?", a: "Haan — agla bar login karne pe phir Google permission mangega." },
          { q: "Permissions selectively revoke ho sakti?", a: "Nahi — full revoke hi possible hai. App firse permissions mangega." },
          { q: "Data app ke pas reh jata hai?", a: "Jo data app ne already save kiya hai woh app side me rehta hai." },
          { q: "Sign-in app aur full-access app me difference?", a: "Sign-in: bas email/name. Full access: Drive/Calendar/etc data access." }
        ],
        related: [
          { title: "Google Security Checkup", slug: "google-security-checkup", category: "google" },
          { title: "Suspicious Activity Alert", slug: "suspicious-activity-alert", category: "google" }
        ],
        keywords: ["third party app google access remove", "google app permissions revoke", "connected apps remove"],
        variants: ["google app permissions revoke", "connected apps remove", "app access hata do"]
      },
      {
        slug: "google-security-checkup",
        category: "google",
        metaTitle: "Google Security Checkup Karein — Quick Fix Guide (2026) | JharForm",
        metaDescription: "Account ka complete security audit 5 minute me — devices, third-party apps, recent activity, 2FA — sab ek jagah se manage karo.",
        h1: "Google Security Checkup Karein — Step-by-Step Fix",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Account ka complete security audit 5 minute me — devices, third-party apps, recent activity, 2FA — sab ek jagah se manage karo.",
        steps: [
          { title: "myaccount.google.com/security-checkup kholo", detail: "Comprehensive checkup wizard start hoga." },
          { title: "Sign-in & recovery review karo", detail: "Recovery phone aur email up-to-date hain confirm karo." },
          { title: "Recent security events check karo", detail: "Suspicious login attempts dikhege. 'Yes, that was me' ya 'No, secure account'." },
          { title: "Active devices list dekho", detail: "Purane phone/laptop sign-out karo. 'Don't recognize?' to 'Sign out' click." },
          { title: "Third-party apps audit", detail: "Connected apps me unused remove karo." },
          { title: "2-Step Verification on rakho", detail: "Off hai to abhi enable karo — security ke liye most important step." }
        ],
        screenshots: [
          { caption: "Google Security Checkup Karein — interface mockup showing fix steps", alt: "Google Security Checkup Karein screenshot showing fix interface", type: "browser", mockupType: "google-recovery" },
          { caption: "Google Security Checkup Karein — settings screen mockup with options", alt: "Google Security Checkup Karein settings screen mockup", type: "phone", mockupType: "android-settings-security" }
        ],
        sources: [
          { title: "Security Checkup", url: "https://myaccount.google.com/security-checkup", icon: "🔗" },
          { title: "Account Security", url: "https://myaccount.google.com/security", icon: "🔗" }
        ],
        proTips: ["Security Checkup mahine me 1 baar zaroor karo", "Saved passwords (Password Manager) me weak/reused passwords audit hota hai", "Suspicious login alerts email me aate hain — ignore mat karo"],
        faqs: [
          { q: "Notification kab aati hai security alert ki?", a: "New device login, password change, 2FA disable — sab time Google email + SMS bhejta hai." },
          { q: "Activity history kab tak save rehti?", a: "18 mahine tak. myaccount > Activity controls me settings hai." },
          { q: "Untrusted device sign-out reverse?", a: "Device wapas use karne pe firse password mangega — koi data loss nahi." },
          { q: "Workspace me admin alerts dekh sakta hai?", a: "Haan — Admin console > Reports > Audit log me sab events." }
        ],
        related: [
          { title: "Suspicious Activity Alert", slug: "suspicious-activity-alert", category: "google" },
          { title: "Third Party App Access Remove", slug: "third-party-app-access-remove", category: "google" }
        ],
        keywords: ["google security checkup", "google account security check", "google account safe karein"],
        variants: ["google account security check", "google account safe karein", "security audit google"]
      },
      {
        slug: "suspicious-activity-alert",
        category: "google",
        metaTitle: "Suspicious Activity Alert Aaya Google Se — Quick Fix Guide (2026) | JharForm",
        metaDescription: "Google ne email/notification bheja ki suspicious sign-in detect hua — kya karna hai immediately?",
        h1: "Suspicious Activity Alert Aaya Google Se — Step-by-Step Fix",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Medium",
        description: "Google ne email/notification bheja ki suspicious sign-in detect hua — kya karna hai immediately?",
        steps: [
          { title: "Email/notification ko verify karo", detail: "Sender 'no-reply@accounts.google.com' hona chahiye. Fake mail bhi aate hain — link click mat karo." },
          { title: "Direct myaccount.google.com kholo", detail: "Browser me type karke jao. Email link se nahi." },
          { title: "Recent security events check karo", detail: "Unrecognized device/location dikh raha? 'No, secure account' click karo." },
          { title: "Password immediately change karo", detail: "Strong unique password set karo." },
          { title: "Saari sessions sign-out karo", detail: "'Sign out all devices' option use karo Security page se." },
          { title: "2-Step Verification on karo", detail: "Already on hai to backup codes regenerate karo." }
        ],
        screenshots: [
          { caption: "Suspicious Activity Alert Aaya Google Se — interface mockup showing fix steps", alt: "Suspicious Activity Alert Aaya Google Se screenshot showing fix interface", type: "browser", mockupType: "google-recovery" },
          { caption: "Suspicious Activity Alert Aaya Google Se — settings screen mockup with options", alt: "Suspicious Activity Alert Aaya Google Se settings screen mockup", type: "phone", mockupType: "android-settings-security" }
        ],
        sources: [
          { title: "Security Alerts", url: "https://myaccount.google.com/notifications", icon: "🔗" },
          { title: "Phishing Help", url: "https://support.google.com/accounts/answer/6063333", icon: "🔗" }
        ],
        proTips: ["Phishing email aksar Google ki tarah dikhte hain — sender domain verify karna zaroori", "'g.co' URL Google ka official short link hai", "Suspicious activity ke baad bank/UPI accounts me bhi login check karo"],
        faqs: [
          { q: "Sign-in suspicious lagi par actually mein thi?", a: "'Yes, that was me' click karo. Future me usi location se alert nahi aayega." },
          { q: "Phone bhi compromise lagti hai?", a: "Phone reset karo factory + Google account remove karo phir add karo." },
          { q: "Sab data delete hoga password reset se?", a: "Nahi — sirf sessions reset hoti hain. Data safe rehta hai." },
          { q: "Notification mobile pe miss kar di?", a: "Email me bhi aati hai. myaccount > Security > recent events me history rehti hai 28 din." }
        ],
        related: [
          { title: "Google Security Checkup", slug: "google-security-checkup", category: "google" },
          { title: "Gmail 2-Step Lost Phone", slug: "gmail-two-factor-lost-phone", category: "google" }
        ],
        keywords: ["suspicious activity google", "google suspicious sign in", "unauthorized login google"],
        variants: ["google suspicious sign in", "unauthorized login google", "google account hacked alert"]
      },
      {
        slug: "play-store-nahi-khul-raha",
        category: "google",
        metaTitle: "Play Store App Nahi Khul Raha — Quick Fix Guide (2026) | JharForm",
        metaDescription: "Play Store icon tap karne pe blank screen, crash, ya 'check connection' error — cache, Play Services, ya account sync issue.",
        h1: "Play Store App Nahi Khul Raha — Step-by-Step Fix",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Play Store icon tap karne pe blank screen, crash, ya 'check connection' error — cache, Play Services, ya account sync issue.",
        steps: [
          { title: "Internet connection verify", detail: "WiFi/data on hai check karo. Browser me google.com khol ke try." },
          { title: "Play Store cache clear karo", detail: "Settings > Apps > Google Play Store > Storage > Clear Cache." },
          { title: "Play Services cache bhi clear", detail: "Settings > Apps > Google Play Services > Storage > Clear Cache." },
          { title: "Date/Time auto-sync on", detail: "Settings > System > Date & Time > Set automatically — Play Store time-sensitive." },
          { title: "Google account remove aur add karo", detail: "Settings > Accounts > Google > Remove account > restart > add back." },
          { title: "Play Store updates uninstall karo", detail: "Settings > Apps > Play Store > 3 dots > Uninstall updates. Phir auto-update hoga." }
        ],
        screenshots: [
          { caption: "Play Store App Nahi Khul Raha — interface mockup showing fix steps", alt: "Play Store App Nahi Khul Raha screenshot showing fix interface", type: "browser", mockupType: "playstore-pending" },
          { caption: "Play Store App Nahi Khul Raha — settings screen mockup with options", alt: "Play Store App Nahi Khul Raha settings screen mockup", type: "phone", mockupType: "android-settings-apps" }
        ],
        sources: [
          { title: "Play Store Help", url: "https://support.google.com/googleplay/answer/7513003", icon: "🔗" },
          { title: "Play Services Help", url: "https://support.google.com/googleplay/answer/9037938", icon: "🔗" }
        ],
        proTips: ["Play Store factory image se aata hai — uninstall fully possible nahi", "Beta program (Play Console) join hai to crashes zyada", "VPN on hai to disable karke try karo — sometimes blocks region"],
        faqs: [
          { q: "'Server error' aa rahi?", a: "Date/time check karo. Account remove-add try karo." },
          { q: "Specific app open nahi ho rahi Play Store me?", a: "App ki listing direct URL se kholo browser me — fir Play Store me jata hai." },
          { q: "Black screen aata hai?", a: "Force stop karo. Storage clear karo. Phone restart." },
          { q: "'No connection' aa raha hai par WiFi chalu?", a: "DNS change karo: WiFi settings > Advanced > 8.8.8.8 / 8.8.4.4." }
        ],
        related: [
          { title: "Play Store Download Pending", slug: "play-store-download-pending", category: "google" },
          { title: "Play Store Error RH 01", slug: "play-store-error-rh01", category: "google" }
        ],
        keywords: ["play store nahi khul raha", "play store crash", "play store nahi open ho raha"],
        variants: ["play store crash", "play store nahi open ho raha", "google play not working"]
      },
      {
        slug: "play-store-error-rh01",
        category: "google",
        metaTitle: "Play Store Error RH-01 / DF-DLA Fix Karein — Quick Fix Guide (2026) | JharForm",
        metaDescription: "Specific error codes — RH-01, DF-DLA, 919, 927 — alag-alag reasons. Account sync ya Play Services issue mostly.",
        h1: "Play Store Error RH-01 / DF-DLA Fix Karein — Step-by-Step Fix",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Medium",
        description: "Specific error codes — RH-01, DF-DLA, 919, 927 — alag-alag reasons. Account sync ya Play Services issue mostly.",
        steps: [
          { title: "Error code note karo", detail: "RH-01: server fetch fail. DF-DLA: download authentication fail. 919: storage full. 927: Play Store update during install." },
          { title: "Storage 1GB+ free karo", detail: "Settings > Storage > clean unused files." },
          { title: "Play Store cache+data clear karo", detail: "Settings > Apps > Play Store > Storage > Clear Storage (data bhi)." },
          { title: "Play Services cache+data clear karo", detail: "Settings > Apps > Google Play Services > Storage > Manage Storage > Clear all data." },
          { title: "Google account remove aur dobara add", detail: "Settings > Accounts > Google > Remove. Restart phone. Re-add." },
          { title: "Phone restart aur update try", detail: "Sab steps ke baad full restart, phir Play Store khol ke download retry." }
        ],
        screenshots: [
          { caption: "Play Store Error RH-01 / DF-DLA Fix Karein — interface mockup showing fix steps", alt: "Play Store Error RH-01 / DF-DLA Fix Karein screenshot showing fix interface", type: "browser", mockupType: "playstore-pending" },
          { caption: "Play Store Error RH-01 / DF-DLA Fix Karein — settings screen mockup with options", alt: "Play Store Error RH-01 / DF-DLA Fix Karein settings screen mockup", type: "phone", mockupType: "android-settings-apps" }
        ],
        sources: [
          { title: "Play Store Error Codes", url: "https://support.google.com/googleplay/answer/7513003", icon: "🔗" },
          { title: "Fix Connection Issues", url: "https://support.google.com/googleplay/answer/9037938", icon: "🔗" }
        ],
        proTips: ["Error 920 = Internet drop — WiFi/data change karo", "Error 504 = timeout — proxy/VPN off karo", "Error 491 = account auth — re-add account fix karta hai"],
        faqs: [
          { q: "Saare error codes ek hi tarah fix?", a: "Mostly haan — cache clear + account re-add 80% errors fix karta hai." },
          { q: "Custom ROM pe yeh errors zyada?", a: "Haan — Gapps installation incomplete ho to RH-01 common." },
          { q: "Rooted phone me solution different?", a: "Magisk-hide Play Services ke liye configure karo." },
          { q: "Error 403 specifically?", a: "Country restriction. Different account region change karo ya VPN." }
        ],
        related: [
          { title: "Play Store Nahi Khul Raha", slug: "play-store-nahi-khul-raha", category: "google" },
          { title: "Play Store Download Pending", slug: "play-store-download-pending", category: "google" }
        ],
        keywords: ["play store error rh-01", "play store rh-01 fix", "play store df-dla error"],
        variants: ["play store rh-01 fix", "play store df-dla error", "play store error 927"]
      },
      {
        slug: "app-update-nahi-ho-rahi",
        category: "google",
        metaTitle: "App Update Play Store Se Nahi Ho Rahi — Quick Fix Guide (2026) | JharForm",
        metaDescription: "Specific app update nahi ho rahi — pending, error, ya 'update unavailable for your device' message.",
        h1: "App Update Play Store Se Nahi Ho Rahi — Step-by-Step Fix",
        lastUpdated: "May 2026",
        readingTime: "3 min",
        difficulty: "Easy",
        description: "Specific app update nahi ho rahi — pending, error, ya 'update unavailable for your device' message.",
        steps: [
          { title: "App page kholo aur 'Update' dobara click", detail: "Pehle 'Cancel' phir 'Update' — fresh attempt." },
          { title: "WiFi pe switch karo", detail: "Mobile data pe Play Store slow. Auto-update default WiFi only hota hai." },
          { title: "Storage check karo (app size 2x chahiye)", detail: "100MB update ke liye 200MB+ free chahiye." },
          { title: "'Uninstall updates' karo app ka", detail: "Settings > Apps > [app] > 3 dots > Uninstall updates. Phir Play Store se fresh install." },
          { title: "Beta program leave karo", detail: "Play Store me app > scroll down > 'Leave program' if joined." },
          { title: "Compatibility check karo", detail: "'Your device isn't compatible' aata hai? Android version too old/new ho sakta hai." }
        ],
        screenshots: [
          { caption: "App Update Play Store Se Nahi Ho Rahi — interface mockup showing fix steps", alt: "App Update Play Store Se Nahi Ho Rahi screenshot showing fix interface", type: "browser", mockupType: "playstore-pending" },
          { caption: "App Update Play Store Se Nahi Ho Rahi — settings screen mockup with options", alt: "App Update Play Store Se Nahi Ho Rahi settings screen mockup", type: "phone", mockupType: "android-settings-apps" }
        ],
        sources: [
          { title: "Update Apps Help", url: "https://support.google.com/googleplay/answer/113412", icon: "🔗" },
          { title: "App Compatibility", url: "https://support.google.com/googleplay/answer/1727131", icon: "🔗" }
        ],
        proTips: ["Big updates (Instagram, Facebook) night me schedule kar do — auto", "Background data restricted nahi hona chahiye", "System Updates pending hai to phele woh karo"],
        faqs: [
          { q: "App pre-installed (system app) update nahi ho rahi?", a: "OEM updates ka wait karo — system apps Play Store se directly update nahi hote." },
          { q: "Specific app sab device pe fail?", a: "Developer end ka issue. Play Store reviews dekho — others bhi affected to wait karo." },
          { q: "'Download pending' me stuck?", a: "Other downloads cancel karo Play Store me — ek queue me ek hi smoothly chalti hai." },
          { q: "Update size large hai?", a: "Settings > Apps > [app] > Storage > Clear cache — phir Play Store kholo, less downloaded hoga." }
        ],
        related: [
          { title: "Play Store Download Pending", slug: "play-store-download-pending", category: "google" },
          { title: "Play Store Error RH 01", slug: "play-store-error-rh01", category: "google" }
        ],
        keywords: ["app update nahi ho rahi", "play store app update fail", "apps not updating"],
        variants: ["play store app update fail", "apps not updating", "play store update problem"]
      },
      {
        slug: "play-family-library-setup",
        category: "google",
        metaTitle: "Google Play Family Library Setup — Quick Fix Guide (2026) | JharForm",
        metaDescription: "Paid apps, games, movies family ke 6 members tak share karo — har family member ka apna Google account ho.",
        h1: "Google Play Family Library Setup — Step-by-Step Fix",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Medium",
        description: "Paid apps, games, movies family ke 6 members tak share karo — har family member ka apna Google account ho.",
        steps: [
          { title: "Family group banao", detail: "families.google.com > 'Create family group'. Family manager bano." },
          { title: "6 members tak add karo", detail: "Email se invite — 13+ age members hi add ho sakte. Younger ke liye Family Link." },
          { title: "Play Family Library on karo", detail: "Play Store > Profile icon > Settings > Family > Family Library." },
          { title: "Payment method add karo (family manager)", detail: "Family ki saari purchases ek card pe charge hongi." },
          { title: "Eligible apps share karo", detail: "Play Store > Library > app > 'Add to Family Library' icon." },
          { title: "Family members ne Library check karein", detail: "Play Store > Library > Family — wahan shared content milega." }
        ],
        screenshots: [
          { caption: "Google Play Family Library Setup — interface mockup showing fix steps", alt: "Google Play Family Library Setup screenshot showing fix interface", type: "browser", mockupType: "playstore-pending" },
          { caption: "Google Play Family Library Setup — settings screen mockup with options", alt: "Google Play Family Library Setup settings screen mockup", type: "phone", mockupType: "android-settings-system" }
        ],
        sources: [
          { title: "Family Library", url: "https://families.google.com", icon: "🔗" },
          { title: "Play Family Help", url: "https://support.google.com/googleplay/answer/7007852", icon: "🔗" }
        ],
        proTips: ["Sab apps eligible nahi hote — developer decide karta hai", "Movies/books bhi share hote hain Family Library me", "Family Manager change karne ke liye 1 year wait"],
        faqs: [
          { q: "Subscriptions share hoti hain?", a: "Some yes (YouTube Premium Family, Google One Family). Individual subscriptions usually nahi." },
          { q: "Family member dusra Google account use kar sakta hai?", a: "Haan — sirf shared apps ke liye family account context me login chahiye." },
          { q: "Family Library cancel karne se purchase lost?", a: "Nahi — sirf sharing stop. Original purchaser ke paas rehta hai." },
          { q: "Kids ka account add kar sakte?", a: "Family Link app se 13 saal se kam ke kids ka supervised account." }
        ],
        related: [
          { title: "Play Store Refund", slug: "play-store-refund", category: "google" },
          { title: "Play Gift Card Redeem", slug: "play-gift-card-redeem", category: "google" }
        ],
        keywords: ["google play family library", "play store family share", "apps share family ko"],
        variants: ["play store family share", "apps share family ko", "family library setup"]
      },
      {
        slug: "play-store-refund",
        category: "google",
        metaTitle: "Play Store Se Refund Kaise Lein — Quick Fix Guide (2026) | JharForm",
        metaDescription: "App accidentally khareed liya ya kaam nahi kar raha — 48 ghante andar Google se direct refund mil sakta hai.",
        h1: "Play Store Se Refund Kaise Lein — Step-by-Step Fix",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "App accidentally khareed liya ya kaam nahi kar raha — 48 ghante andar Google se direct refund mil sakta hai.",
        steps: [
          { title: "Purchase ke 2 ghante andar refund automatic", detail: "Play Store > Library > app > 'Refund' button visible hota hai 2h tak." },
          { title: "48 ghante tak Google se request karo", detail: "play.google.com/store/account > Order History > problem app > 'Request refund'." },
          { title: "Reason select karo", detail: "Accidental purchase, defective, etc. Honest reason zyada chances." },
          { title: "48h+ baad developer se request", detail: "'Contact developer' option milega. Developer manually approve karta hai." },
          { title: "Bank chargeback last resort", detail: "Card issuer se directly dispute. Google ke account suspend ka risk." },
          { title: "Refund 3-7 din me credit", detail: "Original payment method pe wapas aata hai. Wallet me nahi." }
        ],
        screenshots: [
          { caption: "Play Store Se Refund Kaise Lein — interface mockup showing fix steps", alt: "Play Store Se Refund Kaise Lein screenshot showing fix interface", type: "browser", mockupType: "playstore-pending" },
          { caption: "Play Store Se Refund Kaise Lein — settings screen mockup with options", alt: "Play Store Se Refund Kaise Lein settings screen mockup", type: "phone", mockupType: "gpay-failed-transaction" }
        ],
        sources: [
          { title: "Google Refund Policy", url: "https://support.google.com/googleplay/answer/2479637", icon: "🔗" },
          { title: "Refund Status", url: "https://play.google.com/store/account", icon: "🔗" }
        ],
        proTips: ["IAP (in-app purchases) bhi refundable hain 48h ke andar", "Subscription cancel + refund alag hote hain", "India me UPI refunds 1 din me — cards 3-5 din"],
        faqs: [
          { q: "Subscription mid-cycle cancel pe refund?", a: "Pro-rated refund nahi hota usually. Sirf trial period me 100% refund." },
          { q: "Multiple refunds le sakte ek user?", a: "Google tracks abuse. Frequent refunds account ban kar sakte." },
          { q: "Refund denied to dobara appeal?", a: "Customer support se chat. payments.google.com > Help > Contact us." },
          { q: "Money wapas nahi aaya bank me?", a: "Bank statement check karo 7 din baad. Phir Google Pay support ko contact karo." }
        ],
        related: [
          { title: "Play Family Library Setup", slug: "play-family-library-setup", category: "google" },
          { title: "GPay UPI Fail", slug: "gpay-upi-fail", category: "google" }
        ],
        keywords: ["play store refund", "app refund kaise lein", "play store paise wapas"],
        variants: ["app refund kaise lein", "play store paise wapas", "google play purchase refund"]
      },
      {
        slug: "play-gift-card-redeem",
        category: "google",
        metaTitle: "Play Store Gift Card Redeem Karein — Quick Fix Guide (2026) | JharForm",
        metaDescription: "Google Play gift card ka 20-digit code redeem karke wallet balance add karo apps, games, ya subscriptions ke liye.",
        h1: "Play Store Gift Card Redeem Karein — Step-by-Step Fix",
        lastUpdated: "May 2026",
        readingTime: "2 min",
        difficulty: "Easy",
        description: "Google Play gift card ka 20-digit code redeem karke wallet balance add karo apps, games, ya subscriptions ke liye.",
        steps: [
          { title: "Gift card scratch karo carefully", detail: "Silver foil hata ke 20-digit code dekho. Damage hua to support contact." },
          { title: "Play Store > Profile > Payments & subscriptions", detail: "'Redeem gift code' option pe tap." },
          { title: "Code accurate enter karo", detail: "Capital letters, hyphens automatically add hote. Camera scan bhi available." },
          { title: "Wallet balance verify", detail: "Same screen me 'Play balance' me amount reflect hoga." },
          { title: "Purchase me 'Google Play balance' choose", detail: "Checkout pe payment method me default select hoga." },
          { title: "Region matter karta hai", detail: "India gift card sirf India account pe redeem. US card India account pe nahi." }
        ],
        screenshots: [
          { caption: "Play Store Gift Card Redeem Karein — interface mockup showing fix steps", alt: "Play Store Gift Card Redeem Karein screenshot showing fix interface", type: "browser", mockupType: "playstore-pending" },
          { caption: "Play Store Gift Card Redeem Karein — settings screen mockup with options", alt: "Play Store Gift Card Redeem Karein settings screen mockup", type: "phone", mockupType: "android-settings-system" }
        ],
        sources: [
          { title: "Redeem Gift Card", url: "https://play.google.com/redeem", icon: "🔗" },
          { title: "Gift Card Help", url: "https://support.google.com/googleplay/answer/3422659", icon: "🔗" }
        ],
        proTips: ["Code expire nahi hota usually", "Balance non-refundable hota hai — soch ke buy karo", "Subscriptions ke liye bhi use ho sakti balance"],
        faqs: [
          { q: "Code 'invalid' aa raha hai?", a: "Country mismatch. Customer support contact: payments.google.com > Help." },
          { q: "Balance kaise check karein?", a: "Play Store > Profile > Payments & subscriptions > Payment methods." },
          { q: "Transfer kar sakte balance dusre account me?", a: "Nahi — non-transferable hai Google Play balance." },
          { q: "UPI ke liye use ho sakti?", a: "Nahi — sirf Play Store purchases ke liye. GPay/UPI alag hai." }
        ],
        related: [
          { title: "Play Store Refund", slug: "play-store-refund", category: "google" },
          { title: "Play Family Library Setup", slug: "play-family-library-setup", category: "google" }
        ],
        keywords: ["play store gift card redeem", "google play redeem code", "play store voucher use"],
        variants: ["google play redeem code", "play store voucher use", "play gift card add"]
      },
      {
        slug: "youtube-premium-cancel",
        category: "google",
        metaTitle: "YouTube Premium Cancel Karein — Quick Fix Guide (2026) | JharForm",
        metaDescription: "Premium subscription nahi chahiye to YouTube settings se 2 click me cancel karo — current cycle tak features active rehte.",
        h1: "YouTube Premium Cancel Karein — Step-by-Step Fix",
        lastUpdated: "May 2026",
        readingTime: "2 min",
        difficulty: "Easy",
        description: "Premium subscription nahi chahiye to YouTube settings se 2 click me cancel karo — current cycle tak features active rehte.",
        steps: [
          { title: "YouTube app kholo > Profile pic", detail: "Top right corner > 'Purchases and memberships'." },
          { title: "'YouTube Premium' pe click", detail: "Active subscription dikhega with renewal date." },
          { title: "'Deactivate' button click karo", detail: "Confirmation pop-up me 'Continue'." },
          { title: "Reason select karo (optional)", detail: "Survey skip kar sakte ho." },
          { title: "'No thanks' final confirm", detail: "Subscription cancel ho gaya. Current billing cycle tak features available." },
          { title: "Web pe alternative", detail: "youtube.com/paid_memberships > Manage > Deactivate." }
        ],
        screenshots: [
          { caption: "YouTube Premium Cancel Karein — interface mockup showing fix steps", alt: "YouTube Premium Cancel Karein screenshot showing fix interface", type: "browser", mockupType: "youtube-account-suspended-real" },
          { caption: "YouTube Premium Cancel Karein — settings screen mockup with options", alt: "YouTube Premium Cancel Karein settings screen mockup", type: "phone", mockupType: "gpay-failed-transaction" }
        ],
        sources: [
          { title: "Cancel Premium", url: "https://www.youtube.com/paid_memberships", icon: "🔗" },
          { title: "Premium Help", url: "https://support.google.com/youtube/answer/6308281", icon: "🔗" }
        ],
        proTips: ["Family plan cancel se 5 members ka access band", "Pre-paid annual plans pro-rated refund nahi", "Free trial cancel agar trial khatam hone se pehle to no charge"],
        faqs: [
          { q: "Apple/Android billing me different?", a: "Haan — iOS pe Apple ID se cancel: Settings > Apple ID > Subscriptions." },
          { q: "Cancel ke baad downloaded videos delete?", a: "Haan — offline videos premium ke saath remove ho jate hain." },
          { q: "Background play band ho jayega?", a: "Haan — sab Premium features (no ads, background, downloads) cycle end pe band." },
          { q: "Refund mil sakta?", a: "Free trial me haan. Paid cycle me usually nahi." }
        ],
        related: [
          { title: "YouTube Music Download Nahi Ho Raha", slug: "yt-music-download", category: "google" },
          { title: "Play Store Refund", slug: "play-store-refund", category: "google" }
        ],
        keywords: ["youtube premium cancel", "yt premium band karein", "youtube premium subscription cancel"],
        variants: ["yt premium band karein", "youtube premium subscription cancel", "yt premium cancel mobile"]
      },
      {
        slug: "youtube-comment-nahi-ho-raha",
        category: "google",
        metaTitle: "YouTube Comment Post Nahi Ho Raha — Quick Fix Guide (2026) | JharForm",
        metaDescription: "Comment likha aur 'Post' kiya par dikh nahi raha ya 'Comment not posted' error — channel restriction, account, ya filter issue.",
        h1: "YouTube Comment Post Nahi Ho Raha — Step-by-Step Fix",
        lastUpdated: "May 2026",
        readingTime: "3 min",
        difficulty: "Easy",
        description: "Comment likha aur 'Post' kiya par dikh nahi raha ya 'Comment not posted' error — channel restriction, account, ya filter issue.",
        steps: [
          { title: "Sign in verify karo", detail: "Profile pic dikh raha hai? Logged-in nahi to comment nahi hota." },
          { title: "Refresh karke check karo", detail: "Apne comment kabhi-kabhi sirf aapko dikhta hai initially. Incognito me dekho." },
          { title: "Channel ka comment policy check", detail: "Creator ne 'Hold for review' set kiya ho — moderator approve karega." },
          { title: "Suspicious content avoid", detail: "Links, all caps, emojis spam — Google AI auto-hide karta hai." },
          { title: "Account age 30 din+", detail: "Naya Google account 30 din se kam ka ho to YouTube restrict karta hai." },
          { title: "Browser cache clear + relogin", detail: "Chrome settings > Privacy > Clear browsing data > Cookies and cached files." }
        ],
        screenshots: [
          { caption: "YouTube Comment Post Nahi Ho Raha — interface mockup showing fix steps", alt: "YouTube Comment Post Nahi Ho Raha screenshot showing fix interface", type: "browser", mockupType: "youtube-account-suspended-real" },
          { caption: "YouTube Comment Post Nahi Ho Raha — settings screen mockup with options", alt: "YouTube Comment Post Nahi Ho Raha settings screen mockup", type: "phone", mockupType: "android-settings-notifications" }
        ],
        sources: [
          { title: "YouTube Comment Help", url: "https://support.google.com/youtube/answer/9269064", icon: "🔗" },
          { title: "Community Guidelines", url: "https://support.google.com/youtube/answer/9288567", icon: "🔗" }
        ],
        proTips: ["Channel members-only videos pe normal users comment nahi kar sakte", "YouTube Kids age-restricted me comments completely disabled", "Multiple accounts switch karke comment karne se shadow-ban hota hai"],
        faqs: [
          { q: "Comment hidden by AI to wapas dikhega?", a: "Creator ke 'Held for review' section me dikhta hai. Approve karein to public hota hai." },
          { q: "'You're unable to post' message?", a: "Google account temporarily restricted. 24-48 ghante wait." },
          { q: "Comments completely disabled video pe?", a: "Creator ne disable kiya — kuch nahi kar sakte." },
          { q: "Live chat me message stuck?", a: "Live stream me slow mode hai ya members-only chat enabled." }
        ],
        related: [
          { title: "YouTube Account Suspended", slug: "youtube-account-suspended", category: "google" },
          { title: "YouTube Buffering", slug: "youtube-buffering-hai", category: "apps" }
        ],
        keywords: ["youtube comment nahi ho raha", "yt comment post nahi ho raha", "youtube comment problem"],
        variants: ["yt comment post nahi ho raha", "youtube comment problem", "yt comment hidden"]
      },
      {
        slug: "youtube-age-restricted-bypass",
        category: "google",
        metaTitle: "YouTube Age Restricted Video Dekhne Ka Tarika — Quick Fix Guide (2026) | JharForm",
        metaDescription: "Age-restricted videos sign-in confirm karne ke baad dikhte hain — legal compliant tareeke se access.",
        h1: "YouTube Age Restricted Video Dekhne Ka Tarika — Step-by-Step Fix",
        lastUpdated: "May 2026",
        readingTime: "3 min",
        difficulty: "Easy",
        description: "Age-restricted videos sign-in confirm karne ke baad dikhte hain — legal compliant tareeke se access.",
        steps: [
          { title: "Google account me sign in karo", detail: "Logged out users age-restricted videos dekh nahi sakte." },
          { title: "Account ka DOB 18+ verify", detail: "myaccount.google.com > Personal info > Birthday — actual age set ho." },
          { title: "Confirm 'Yes I'm 18+'", detail: "Video pe warning aati hai — confirm karo." },
          { title: "Family Link supervised account hai?", detail: "Parent ne age-restricted block kiya hoga — wahi unlock karega." },
          { title: "Government ID se age verification (some regions)", detail: "EU me 2024+ se ID upload optional age-verification." },
          { title: "Workspace account restrictions", detail: "School/office Workspace account pe admin restrictions ho sakti hai." }
        ],
        screenshots: [
          { caption: "YouTube Age Restricted Video Dekhne Ka Tarika — interface mockup showing fix steps", alt: "YouTube Age Restricted Video Dekhne Ka Tarika screenshot showing fix interface", type: "browser", mockupType: "youtube-account-suspended-real" },
          { caption: "YouTube Age Restricted Video Dekhne Ka Tarika — settings screen mockup with options", alt: "YouTube Age Restricted Video Dekhne Ka Tarika settings screen mockup", type: "phone", mockupType: "google-recovery" }
        ],
        sources: [
          { title: "Age-restricted Help", url: "https://support.google.com/youtube/answer/2802167", icon: "🔗" },
          { title: "Age Verification", url: "https://support.google.com/youtube/answer/10070779", icon: "🔗" }
        ],
        proTips: ["Account region matter karta hai content availability ke liye", "DOB change Google me limited times allowed", "18+ confirm ek baar karne ke baad har video pe nahi puchhega"],
        faqs: [
          { q: "DOB recently change kiya?", a: "48h wait karo — Google verify karne tak restrictions same rehti." },
          { q: "'Content not available' kya hai?", a: "Country-specific restriction. VPN illegal nahi par recommended bhi nahi YouTube ke liye." },
          { q: "Incognito me dikhega?", a: "Nahi — sign-in needed hai age-restricted ke liye." },
          { q: "YouTube Kids me sab age-restricted block?", a: "Haan — YouTube Kids strict moderation ke saath chalta hai." }
        ],
        related: [
          { title: "YouTube Comment Nahi Ho Raha", slug: "youtube-comment-nahi-ho-raha", category: "google" },
          { title: "YouTube Premium Cancel", slug: "youtube-premium-cancel", category: "google" }
        ],
        keywords: ["youtube age restricted bypass", "yt age restricted video kaise dekhe", "youtube age verification"],
        variants: ["yt age restricted video kaise dekhe", "youtube age verification", "yt age 18 video"]
      },
      {
        slug: "youtube-monetization-disable",
        category: "google",
        metaTitle: "YouTube Monetization Disable Karein — Quick Fix Guide (2026) | JharForm",
        metaDescription: "Channel se ads hatane hain — monetization off karne ke liye YouTube Studio ke through karo. Re-enable bhi possible.",
        h1: "YouTube Monetization Disable Karein — Step-by-Step Fix",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Medium",
        description: "Channel se ads hatane hain — monetization off karne ke liye YouTube Studio ke through karo. Re-enable bhi possible.",
        steps: [
          { title: "YouTube Studio kholo", detail: "studio.youtube.com pe sign in karo apne creator account se." },
          { title: "Monetization tab pe jao", detail: "Left sidebar > 'Monetization' (YPP enabled hone par dikhega)." },
          { title: "'Disable monetization' option", detail: "Settings me niche scroll karo — temporary ya permanent option." },
          { title: "Reason select karo", detail: "Survey complete karo (optional)." },
          { title: "Confirm disable", detail: "30 din me ads completely removed honge channel se." },
          { title: "Individual videos pe bhi off karo", detail: "Each video > Edit > Monetization > Off — granular control." }
        ],
        screenshots: [
          { caption: "YouTube Monetization Disable Karein — interface mockup showing fix steps", alt: "YouTube Monetization Disable Karein screenshot showing fix interface", type: "browser", mockupType: "youtube-account-suspended-real" },
          { caption: "YouTube Monetization Disable Karein — settings screen mockup with options", alt: "YouTube Monetization Disable Karein settings screen mockup", type: "phone", mockupType: "android-settings-system" }
        ],
        sources: [
          { title: "Disable Monetization", url: "https://support.google.com/youtube/answer/9217566", icon: "🔗" },
          { title: "YPP Help", url: "https://support.google.com/youtube/answer/72857", icon: "🔗" }
        ],
        proTips: ["YPP wapas join karne ke 6 mahine ka cooldown ho sakta hai", "Earnings paid out hote rahenge $100 threshold cross karne par", "Channel transfer ke time monetization automatic disable"],
        faqs: [
          { q: "Earnings AdSense me reh jate?", a: "Haan — already earned money $100+ pe payout hota hai. Disable se loss nahi." },
          { q: "AdSense account band hota hai?", a: "Nahi — sirf YouTube link hatti. AdSense alag account hai." },
          { q: "Re-enable kab kar sakte?", a: "Cooldown ke baad re-apply karna padta hai YPP me." },
          { q: "Sponsorship monetization affect hoti?", a: "Nahi — sponsorship channel ke directly hote hain, YouTube monetization se alag." }
        ],
        related: [
          { title: "YouTube Account Suspended", slug: "youtube-account-suspended", category: "google" },
          { title: "YouTube Premium Cancel", slug: "youtube-premium-cancel", category: "google" }
        ],
        keywords: ["youtube monetization disable", "yt monetization off", "youtube ads disable"],
        variants: ["yt monetization off", "youtube ads disable", "channel monetization band"]
      },
      {
        slug: "yt-music-download",
        category: "google",
        metaTitle: "YouTube Music Download Nahi Ho Raha — Quick Fix Guide (2026) | JharForm",
        metaDescription: "Premium subscriber ho par songs offline download nahi ho rahe — storage, account, ya app issue.",
        h1: "YouTube Music Download Nahi Ho Raha — Step-by-Step Fix",
        lastUpdated: "May 2026",
        readingTime: "3 min",
        difficulty: "Easy",
        description: "Premium subscriber ho par songs offline download nahi ho rahe — storage, account, ya app issue.",
        steps: [
          { title: "Premium subscription active verify", detail: "music.youtube.com > Profile > Subscriptions me YouTube Music Premium active dikhna chahiye." },
          { title: "Storage 1GB+ free karo", detail: "Settings > Storage > clear cache. Songs ~5-8MB each." },
          { title: "Download quality dekho", detail: "YT Music > Settings > Downloads > Audio quality > Low (32kbps) chunne se zyada songs samate hain." },
          { title: "Sync only on Wi-Fi off karo (mobile data me download chahiye to)", detail: "Settings > Downloads > 'Download via Wi-Fi only' uncheck." },
          { title: "App cache clear karo", detail: "Settings > Apps > YouTube Music > Storage > Clear cache." },
          { title: "Sign out + sign in", detail: "App > Profile > Sign out. Restart app. Re-login." }
        ],
        screenshots: [
          { caption: "YouTube Music Download Nahi Ho Raha — interface mockup showing fix steps", alt: "YouTube Music Download Nahi Ho Raha screenshot showing fix interface", type: "browser", mockupType: "youtube-account-suspended-real" },
          { caption: "YouTube Music Download Nahi Ho Raha — settings screen mockup with options", alt: "YouTube Music Download Nahi Ho Raha settings screen mockup", type: "phone", mockupType: "android-settings-storage" }
        ],
        sources: [
          { title: "YT Music Download Help", url: "https://support.google.com/youtubemusic/answer/9009110", icon: "🔗" },
          { title: "Premium Features", url: "https://support.google.com/youtubemusic/answer/9356714", icon: "🔗" }
        ],
        proTips: ["500 songs tak offline allowed ek device pe (Premium)", "30 din me ek baar online connect mandatory — Premium check ke liye", "Lyrics offline available nahi hote — internet chahiye"],
        faqs: [
          { q: "Free user offline download kar sakta?", a: "Nahi — Premium subscription required hai officially." },
          { q: "Downloaded songs phone change pe lost?", a: "Haan — naye device pe re-download karna padta hai." },
          { q: "Smart downloads kya hai?", a: "AI suggested songs auto-download hote hain Wi-Fi pe. Toggle on rakho." },
          { q: "Music + YouTube Premium same?", a: "YouTube Premium me Music Premium include hota hai. Music Premium alag se sasta hai." }
        ],
        related: [
          { title: "YouTube Premium Cancel", slug: "youtube-premium-cancel", category: "google" },
          { title: "YouTube Account Suspended", slug: "youtube-account-suspended", category: "google" }
        ],
        keywords: ["youtube music download nahi ho raha", "yt music offline download fail", "youtube music premium download"],
        variants: ["yt music offline download fail", "youtube music premium download", "music offline nahi ho rahi"]
      },
      {
        slug: "gpay-upi-fail",
        category: "google",
        metaTitle: "GPay Se UPI Payment Fail Ho Raha — Quick Fix Guide (2026) | JharForm",
        metaDescription: "GPay se payment kiya par 'Transaction failed' message — server, UPI PIN, ya bank issue. Paise debit ho gaye ho to 7 din me wapas.",
        h1: "GPay Se UPI Payment Fail Ho Raha — Step-by-Step Fix",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Medium",
        description: "GPay se payment kiya par 'Transaction failed' message — server, UPI PIN, ya bank issue. Paise debit ho gaye ho to 7 din me wapas.",
        steps: [
          { title: "UPI PIN correct enter karo", detail: "6-digit PIN. 3 baar galat = 24h block." },
          { title: "Bank server status check karo", detail: "NPCI website pe live status — npci.org.in/what-we-do/upi/dispute-redressal-mechanism." },
          { title: "Different UPI ID try karo", detail: "One bank account fail ho raha to dusre bank ka UPI try karo." },
          { title: "Internet stable connection", detail: "WiFi se mobile data ya vice versa switch karo." },
          { title: "Daily limit check karo", detail: "Most banks 1 lakh/day. Beyond — next day try." },
          { title: "Pending debit 7 din me reverse", detail: "Paise kati par receiver ko nahi pahuche — auto-reverse hota hai 24-72h me usually." }
        ],
        screenshots: [
          { caption: "GPay Se UPI Payment Fail Ho Raha — interface mockup showing fix steps", alt: "GPay Se UPI Payment Fail Ho Raha screenshot showing fix interface", type: "browser", mockupType: "gpay-failed-transaction" },
          { caption: "GPay Se UPI Payment Fail Ho Raha — settings screen mockup with options", alt: "GPay Se UPI Payment Fail Ho Raha settings screen mockup", type: "phone", mockupType: "upi-pin-reset-screen" }
        ],
        sources: [
          { title: "UPI Dispute", url: "https://www.npci.org.in/what-we-do/upi/dispute-redressal-mechanism", icon: "🔗" },
          { title: "GPay Help", url: "https://support.google.com/pay", icon: "🔗" }
        ],
        proTips: ["UPI ID 'username@bank' format me hai check karo", "Beneficiary ka mobile/UPI verify pehle pay karne se", "Late night (1-3 AM) server maintenance common hai banks ka"],
        faqs: [
          { q: "Failed transaction me paise wapas kab?", a: "T+1 to T+7 working days. 7 din baad bhi nahi aaye to NPCI dispute file karo." },
          { q: "Receiver ko galti se zyada bhej diya?", a: "Receiver ki goodwill — UPI me forced reversal mechanism nahi." },
          { q: "'NPC service unavailable' error?", a: "NPCI server temporary down. 10-15 min me try karo." },
          { q: "Account suspended GPay me?", a: "KYC issue ho sakta hai. GPay > Profile > Help & Feedback > Contact us." }
        ],
        related: [
          { title: "GPay Reward Nahi Mila", slug: "gpay-reward-nahi-mila", category: "google" },
          { title: "Play Store Refund", slug: "play-store-refund", category: "google" }
        ],
        keywords: ["gpay upi payment fail", "google pay upi fail", "gpay paise transfer nahi hua"],
        variants: ["google pay upi fail", "gpay paise transfer nahi hua", "upi transaction failed"]
      },
      {
        slug: "gpay-reward-nahi-mila",
        category: "google",
        metaTitle: "GPay Scratch Card / Reward Nahi Mila — Quick Fix Guide (2026) | JharForm",
        metaDescription: "Transaction ke baad scratch card / cashback expected tha par nahi mila — eligibility, location, ya offer terms check karo.",
        h1: "GPay Scratch Card / Reward Nahi Mila — Step-by-Step Fix",
        lastUpdated: "May 2026",
        readingTime: "3 min",
        difficulty: "Easy",
        description: "Transaction ke baad scratch card / cashback expected tha par nahi mila — eligibility, location, ya offer terms check karo.",
        steps: [
          { title: "Transaction successful tha verify", detail: "GPay > history me 'Completed' status hona chahiye." },
          { title: "Offer eligibility dekho", detail: "Har offer ke alag rules — minimum amount, merchant category, location." },
          { title: "Rewards section check", detail: "GPay > 'Rewards' tab > active scratch cards. Sometimes notification miss hoti hai." },
          { title: "48 ghante wait karo", detail: "Rewards instant nahi hote — 24-48h me credit ho sakte hain." },
          { title: "Location services on hone chahiye", detail: "Many offers GPS-based — phone settings me Location enable." },
          { title: "Customer support contact", detail: "GPay > Profile > Help & Feedback > 'Rewards' issue select." }
        ],
        screenshots: [
          { caption: "GPay Scratch Card / Reward Nahi Mila — interface mockup showing fix steps", alt: "GPay Scratch Card / Reward Nahi Mila screenshot showing fix interface", type: "browser", mockupType: "gpay-failed-transaction" },
          { caption: "GPay Scratch Card / Reward Nahi Mila — settings screen mockup with options", alt: "GPay Scratch Card / Reward Nahi Mila settings screen mockup", type: "phone", mockupType: "android-settings-notifications" }
        ],
        sources: [
          { title: "GPay Rewards Help", url: "https://support.google.com/pay/answer/9054428", icon: "🔗" },
          { title: "GPay Offers", url: "https://pay.google.com/offers", icon: "🔗" }
        ],
        proTips: ["Daily/weekly cap hota hai max rewards ka", "Same merchant pe repeated transactions me limited cards", "KYC pending hai to rewards withheld ho sakte hain"],
        faqs: [
          { q: "Scratch card expire ho jata hai?", a: "90 din rakhna padta hai — uske baad expire." },
          { q: "Cashback wallet me kab milta?", a: "Bank account me direct credit hota hai usually 24h me." },
          { q: "Reward GPay account hack hone se gone?", a: "Account recovery + new card use karke chalo. Rewards bachane ka guarantee nahi." },
          { q: "Offers email/SMS me bhi aate?", a: "Haan — Settings > Notifications > Promotional on rakho." }
        ],
        related: [
          { title: "GPay UPI Fail", slug: "gpay-upi-fail", category: "google" },
          { title: "Play Store Refund", slug: "play-store-refund", category: "google" }
        ],
        keywords: ["gpay reward nahi mila", "gpay scratch card nahi mila", "google pay cashback"],
        variants: ["gpay scratch card nahi mila", "google pay cashback", "gpay reward problem"]
      },
      {
        slug: "google-one-cancel",
        category: "google",
        metaTitle: "Google One Subscription Cancel Karein — Quick Fix Guide (2026) | JharForm",
        metaDescription: "Storage subscription cancel karna ho to one.google.com se 2 click me — current cycle tak features active.",
        h1: "Google One Subscription Cancel Karein — Step-by-Step Fix",
        lastUpdated: "May 2026",
        readingTime: "2 min",
        difficulty: "Easy",
        description: "Storage subscription cancel karna ho to one.google.com se 2 click me — current cycle tak features active.",
        steps: [
          { title: "one.google.com kholo", detail: "Logged-in Google account ka dashboard." },
          { title: "Settings (gear icon) > Manage settings", detail: "Subscription details dikhenge." },
          { title: "'Cancel membership' link", detail: "Niche scroll karo settings me." },
          { title: "Confirmation pop-up", detail: "Cancel reason chuno. Skip kar sakte ho." },
          { title: "Final confirm karo", detail: "Cycle end pe storage 15GB pe wapas. Excess data read-only ho jata." },
          { title: "Data backup le lo extra ka", detail: "100GB plan se 15GB pe aane se pehle Takeout export." }
        ],
        screenshots: [
          { caption: "Google One Subscription Cancel Karein — interface mockup showing fix steps", alt: "Google One Subscription Cancel Karein screenshot showing fix interface", type: "browser", mockupType: "google-recovery" },
          { caption: "Google One Subscription Cancel Karein — settings screen mockup with options", alt: "Google One Subscription Cancel Karein settings screen mockup", type: "phone", mockupType: "gpay-failed-transaction" }
        ],
        sources: [
          { title: "Cancel Google One", url: "https://one.google.com/about", icon: "🔗" },
          { title: "Google One Help", url: "https://support.google.com/googleone", icon: "🔗" }
        ],
        proTips: ["Annual plans me pro-rated refund nahi", "Family plan cancel se 5 members affected", "Membership benefits (Google Store discounts) lost"],
        faqs: [
          { q: "Storage full ho jaye 15GB pe?", a: "Read-only mode — naye emails, photos sync nahi honge. Delete karna padega." },
          { q: "Cancel karte hi photos lost?", a: "Nahi — current cycle tak full access. Cycle end pe restrictions." },
          { q: "Family ke baki members ka kya?", a: "Family plan owner cancel kare to sab affected. Individual plans alag." },
          { q: "Refund mil sakta hai?", a: "Trial period me 100% refund. Paid cycle me usually nahi." }
        ],
        related: [
          { title: "Google Photos Storage Full", slug: "google-photos-storage-full", category: "google" },
          { title: "Gmail Storage Full", slug: "gmail-storage-full", category: "google" }
        ],
        keywords: ["google one cancel", "google one subscription band", "google storage plan cancel"],
        variants: ["google one subscription band", "google storage plan cancel", "google one cancel membership"]
      },
      {
        slug: "drive-shared-link-not-opening",
        category: "google",
        metaTitle: "Google Drive Shared Link Nahi Khul Raha — Quick Fix Guide (2026) | JharForm",
        metaDescription: "Kisi ne Drive ka link share kiya par 'Access denied' ya 'You need permission' aa raha — sharing settings ya account issue.",
        h1: "Google Drive Shared Link Nahi Khul Raha — Step-by-Step Fix",
        lastUpdated: "May 2026",
        readingTime: "3 min",
        difficulty: "Easy",
        description: "Kisi ne Drive ka link share kiya par 'Access denied' ya 'You need permission' aa raha — sharing settings ya account issue.",
        steps: [
          { title: "Correct Google account me sign-in verify", detail: "Link multiple accounts logged in me confusion karta hai. Right account se kholo." },
          { title: "Sender se 'Request access' karo", detail: "Page pe 'Request access' button click karo. Email se sender ko notification jayegi." },
          { title: "Sender se permission level confirm", detail: "'Anyone with the link' set ho — sender se request karo." },
          { title: "Link copy karo aur incognito me kholo", detail: "Personal account ke saath open karne se cleaner experience." },
          { title: "Workspace organization restrictions", detail: "Office account ho to outside-domain sharing block ho sakti hai admin se." },
          { title: "Mobile app me link kholo", detail: "Drive mobile app sometimes web link better handle karta hai." }
        ],
        screenshots: [
          { caption: "Google Drive Shared Link Nahi Khul Raha — interface mockup showing fix steps", alt: "Google Drive Shared Link Nahi Khul Raha screenshot showing fix interface", type: "browser", mockupType: "google-recovery" },
          { caption: "Google Drive Shared Link Nahi Khul Raha — settings screen mockup with options", alt: "Google Drive Shared Link Nahi Khul Raha settings screen mockup", type: "phone", mockupType: "gmail-login" }
        ],
        sources: [
          { title: "Drive Sharing Help", url: "https://support.google.com/drive/answer/2494822", icon: "🔗" },
          { title: "Permissions Guide", url: "https://support.google.com/drive/answer/7166529", icon: "🔗" }
        ],
        proTips: ["'Restricted' setting wala link sirf invited emails ke pas kaam karta", "Public link 'Anyone' setting ho to bhi count hota in viewer analytics", "Folder share alag se settings — files alag, parent folder alag"],
        faqs: [
          { q: "Sender ko email pahuchi hi nahi 'Request access' ki?", a: "Sender ke Drive notifications off ho sakte hain. Manual remind karo." },
          { q: "Download permission nahi mil rahi?", a: "Sender 'Viewer' diya hoga — 'Editor' ya 'Commenter' upgrade karna padega." },
          { q: "Link expire ho jata hai?", a: "Sender ne expiry set ki ho to expire hota — fir naya link mangwao." },
          { q: "Workspace shared drive pe sab member ko access?", a: "Shared Drive permissions — member levels (Manager/Contributor/Viewer) decide karta hai." }
        ],
        related: [
          { title: "Drive Sync Stuck", slug: "drive-sync-stuck", category: "google" },
          { title: "Google Account Disabled", slug: "google-account-disabled", category: "google" }
        ],
        keywords: ["drive shared link nahi khul raha", "google drive link access denied", "drive permission needed"],
        variants: ["google drive link access denied", "drive permission needed", "drive shared file problem"]
      },
      {
        slug: "drive-sync-stuck",
        category: "google",
        metaTitle: "Google Drive Sync Stuck Hai — Quick Fix Guide (2026) | JharForm",
        metaDescription: "Drive for Desktop ya mobile app pe files sync nahi ho rahe — 'Uploading' frozen ya 'Sync paused'.",
        h1: "Google Drive Sync Stuck Hai — Step-by-Step Fix",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Medium",
        description: "Drive for Desktop ya mobile app pe files sync nahi ho rahe — 'Uploading' frozen ya 'Sync paused'.",
        steps: [
          { title: "Drive app/desktop client restart karo", detail: "System tray icon > 3 dots > Quit. Phir dobara launch." },
          { title: "Pause and Resume sync", detail: "Same menu me 'Pause syncing' > 30 sec > 'Resume syncing'." },
          { title: "File size limits dekho", detail: "Single file 5TB max. Documents 50MB. Spreadsheets 10M cells." },
          { title: "Internet bandwidth check", detail: "Drive sync background me limited bandwidth use karta hai — settings me adjust." },
          { title: "Disconnect aur reconnect account", detail: "Drive for Desktop > Preferences > Account > Disconnect > re-add." },
          { title: "Storage full to space free karo", detail: "Local disk full hai to sync stop ho jata hai." }
        ],
        screenshots: [
          { caption: "Google Drive Sync Stuck Hai — interface mockup showing fix steps", alt: "Google Drive Sync Stuck Hai screenshot showing fix interface", type: "browser", mockupType: "google-recovery" },
          { caption: "Google Drive Sync Stuck Hai — settings screen mockup with options", alt: "Google Drive Sync Stuck Hai settings screen mockup", type: "phone", mockupType: "android-settings-network" }
        ],
        sources: [
          { title: "Drive Desktop Sync", url: "https://support.google.com/drive/answer/7638428", icon: "🔗" },
          { title: "Sync Issues", url: "https://support.google.com/drive/answer/2494884", icon: "🔗" }
        ],
        proTips: ["Bulk uploads ke liye drive.google.com web upload best", "'Mirror' vs 'Stream' mode select karo Drive for Desktop me", "Special characters (?, *, :) file names me sync issue karte hain"],
        faqs: [
          { q: "Specific file stuck hai?", a: "Same file rename karo — sync queue re-trigger hota hai." },
          { q: "Mobile pe photo backup stuck?", a: "Photos app > Settings > Backup > Pause and resume." },
          { q: "Multiple accounts ka sync slow?", a: "Sequential sync hota hai — patience required ya alag windows me sign-in." },
          { q: "VPN se sync block?", a: "Yes — corporate VPN sometimes Drive ports block karta hai." }
        ],
        related: [
          { title: "Drive Shared Link Not Opening", slug: "drive-shared-link-not-opening", category: "google" },
          { title: "Google Photos Backup Paused", slug: "photos-backup-paused", category: "google" }
        ],
        keywords: ["drive sync stuck", "google drive sync nahi ho rahi", "drive uploading stuck"],
        variants: ["google drive sync nahi ho rahi", "drive uploading stuck", "drive sync problem"]
      },
      {
        slug: "photos-backup-paused",
        category: "google",
        metaTitle: "Google Photos Backup Paused Aa Raha — Quick Fix Guide (2026) | JharForm",
        metaDescription: "Photos app me 'Backup paused' message — storage full, network, ya account sync issue.",
        h1: "Google Photos Backup Paused Aa Raha — Step-by-Step Fix",
        lastUpdated: "May 2026",
        readingTime: "3 min",
        difficulty: "Easy",
        description: "Photos app me 'Backup paused' message — storage full, network, ya account sync issue.",
        steps: [
          { title: "'Resume backup' click karo", detail: "App ke top pe banner aata hai — directly tap." },
          { title: "Storage check karo", detail: "one.google.com — 15GB free me se kitna bacha hai." },
          { title: "WiFi requirement settings", detail: "Photos > Profile > Photos settings > Backup > 'Use mobile data' enable agar WiFi nahi." },
          { title: "Account verify", detail: "App > Profile > correct Google account selected hai check karo." },
          { title: "Storage Saver mode try karo", detail: "Backup quality 'Storage Saver' kar do — 60% kam space." },
          { title: "Clear cache", detail: "Settings > Apps > Photos > Storage > Clear cache." }
        ],
        screenshots: [
          { caption: "Google Photos Backup Paused Aa Raha — interface mockup showing fix steps", alt: "Google Photos Backup Paused Aa Raha screenshot showing fix interface", type: "browser", mockupType: "google-photos-storage-full-real" },
          { caption: "Google Photos Backup Paused Aa Raha — settings screen mockup with options", alt: "Google Photos Backup Paused Aa Raha settings screen mockup", type: "phone", mockupType: "android-settings-network" }
        ],
        sources: [
          { title: "Photos Backup Help", url: "https://support.google.com/photos/answer/6193313", icon: "🔗" },
          { title: "Storage Saver", url: "https://support.google.com/photos/answer/7253802", icon: "🔗" }
        ],
        proTips: ["Battery saver mode background backup pause karta hai", "Charging me schedule karo backup — faster aur reliable", "Specific album ka backup alag se control"],
        faqs: [
          { q: "Backup paused phir kabhi auto resume?", a: "WiFi + charging detect hone pe auto-resume usually." },
          { q: "Original quality khatam kar diya storage?", a: "Storage Saver pe shift karke continue kar sakte ho free backup." },
          { q: "RAW files backup hote?", a: "Original quality me haan. Storage Saver me JPG me convert hote." },
          { q: "Backup speed slow?", a: "Background task hai. Foreground rakho phone me speed badhane ke liye." }
        ],
        related: [
          { title: "Google Photos Storage Full", slug: "google-photos-storage-full", category: "google" },
          { title: "Drive Sync Stuck", slug: "drive-sync-stuck", category: "google" }
        ],
        keywords: ["google photos backup paused", "photos backup nahi ho rahi", "photos upload stuck"],
        variants: ["photos backup nahi ho rahi", "photos upload stuck", "google photos sync paused"]
      },
      {
        slug: "photos-shared-album",
        category: "google",
        metaTitle: "Google Photos Shared Album Banayein — Quick Fix Guide (2026) | JharForm",
        metaDescription: "Family/friends ke saath photos share karne ka best tareeka — shared album banao jisme sab contribute kar sakein.",
        h1: "Google Photos Shared Album Banayein — Step-by-Step Fix",
        lastUpdated: "May 2026",
        readingTime: "3 min",
        difficulty: "Easy",
        description: "Family/friends ke saath photos share karne ka best tareeka — shared album banao jisme sab contribute kar sakein.",
        steps: [
          { title: "Photos app > Sharing tab", detail: "Bottom nav me 3rd icon." },
          { title: "'Create shared album' button", detail: "Top right > '+'> 'Shared album'." },
          { title: "Photos select karo", detail: "Initial photos add karo (skip bhi kar sakte — baad me add)." },
          { title: "Album naam do", detail: "Descriptive name (Goa Trip 2026)." },
          { title: "Contacts/email se share", detail: "Recipient ko link bheji jayegi. WhatsApp se bhi share possible." },
          { title: "Settings me permissions", detail: "'Allow comments' aur 'Allow others to add photos' toggle." }
        ],
        screenshots: [
          { caption: "Google Photos Shared Album Banayein — interface mockup showing fix steps", alt: "Google Photos Shared Album Banayein screenshot showing fix interface", type: "browser", mockupType: "google-photos-storage-full-real" },
          { caption: "Google Photos Shared Album Banayein — settings screen mockup with options", alt: "Google Photos Shared Album Banayein settings screen mockup", type: "phone", mockupType: "android-settings-system" }
        ],
        sources: [
          { title: "Shared Albums Help", url: "https://support.google.com/photos/answer/7378858", icon: "🔗" },
          { title: "Photos Sharing", url: "https://support.google.com/photos/answer/7378858", icon: "🔗" }
        ],
        proTips: ["20,000 photos per album max", "Removed photos sender ke Library me wapas chali jaati", "Album leave karne se uss user ke photos remove ho jate"],
        faqs: [
          { q: "Non-Google user ko share kar sakte?", a: "Haan — link share karne par koi bhi dekh sakta. Gmail required nahi viewing ke liye." },
          { q: "Album me video bhi add ho sakti?", a: "Haan — 10 minute tak ki videos." },
          { q: "Privacy concern hai?", a: "Link sharing public ban jata hai — sirf trusted ke saath share karo." },
          { q: "Album delete karne se members ka kya?", a: "Sab members se shared album hata jata hai. Original photos sender ke library me rehti." }
        ],
        related: [
          { title: "Google Photos Storage Full", slug: "google-photos-storage-full", category: "google" },
          { title: "Photos Backup Paused", slug: "photos-backup-paused", category: "google" }
        ],
        keywords: ["google photos shared album", "photos share family ko", "shared album banayein"],
        variants: ["photos share family ko", "shared album banayein", "photos collaboration"]
      },
      {
        slug: "meet-camera-not-working",
        category: "google",
        metaTitle: "Google Meet Me Camera Nahi Chal Raha — Quick Fix Guide (2026) | JharForm",
        metaDescription: "Meet join kiya par video off hai ya 'Camera failed to start' error — permissions, drivers, ya app conflict.",
        h1: "Google Meet Me Camera Nahi Chal Raha — Step-by-Step Fix",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Medium",
        description: "Meet join kiya par video off hai ya 'Camera failed to start' error — permissions, drivers, ya app conflict.",
        steps: [
          { title: "Browser permissions check", detail: "Chrome address bar me lock icon > Site settings > Camera 'Allow'." },
          { title: "Other apps band karo jo camera use kar rahi", detail: "Zoom, Skype, OBS bandh karo — ek time pe ek app camera access." },
          { title: "System privacy settings", detail: "Windows: Settings > Privacy > Camera > 'Allow apps to access camera' on." },
          { title: "Different camera select", detail: "Meet me video settings me dropdown se correct camera select." },
          { title: "Browser restart", detail: "Chrome/Edge fully close (task manager se) phir kholo." },
          { title: "Hardware test karo", detail: "camera test website (webcamtests.com) me alag se verify." }
        ],
        screenshots: [
          { caption: "Google Meet Me Camera Nahi Chal Raha — interface mockup showing fix steps", alt: "Google Meet Me Camera Nahi Chal Raha screenshot showing fix interface", type: "browser", mockupType: "google-recovery" },
          { caption: "Google Meet Me Camera Nahi Chal Raha — settings screen mockup with options", alt: "Google Meet Me Camera Nahi Chal Raha settings screen mockup", type: "phone", mockupType: "android-settings-camera" }
        ],
        sources: [
          { title: "Meet Troubleshooting", url: "https://support.google.com/meet/answer/7290405", icon: "🔗" },
          { title: "Camera Help", url: "https://support.google.com/meet/answer/7290450", icon: "🔗" }
        ],
        proTips: ["Antivirus camera block karta hai sometimes — exception add karo", "External webcam ke liye driver update karo", "Mobile me camera permission Settings > Apps > Meet > Permissions"],
        faqs: [
          { q: "Mic chal raha lekin camera nahi?", a: "Camera specifically blocked. Browser permissions dobara check karo." },
          { q: "Virtual background load nahi ho raha?", a: "Hardware acceleration on rakho browser settings me." },
          { q: "Mobile me selfie camera default?", a: "Settings > Meet app me front/back camera toggle hota hai." },
          { q: "Multiple meets me audio echo?", a: "Speaker mute karo jab dusra device same call me ho." }
        ],
        related: [
          { title: "Suspicious Activity Alert", slug: "suspicious-activity-alert", category: "google" },
          { title: "Chrome Sync Not Working", slug: "chrome-sync-not-working", category: "google" }
        ],
        keywords: ["google meet camera not working", "meet camera off", "meet video nahi chal raha"],
        variants: ["meet camera off", "meet video nahi chal raha", "google meet camera problem"]
      },
      {
        slug: "maps-location-wrong",
        category: "google",
        metaTitle: "Google Maps Location Galat Dikha Raha — Quick Fix Guide (2026) | JharForm",
        metaDescription: "Current location 1-2 km dur dikh raha ya GPS jump kar raha — calibration, mode, ya battery saver issue.",
        h1: "Google Maps Location Galat Dikha Raha — Step-by-Step Fix",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Medium",
        description: "Current location 1-2 km dur dikh raha ya GPS jump kar raha — calibration, mode, ya battery saver issue.",
        steps: [
          { title: "Location High Accuracy mode on", detail: "Settings > Location > Mode > 'High accuracy' (GPS + WiFi + Cellular)." },
          { title: "Compass calibrate karo", detail: "Maps me location dot pe tap > 'Calibrate compass' > figure-8 motion." },
          { title: "WiFi on rakho", detail: "Off bhi rakho to WiFi-based positioning kaam karta hai — 'WiFi scanning always on' enable." },
          { title: "Battery saver disable", detail: "Power saving mode location accuracy kam karta hai." },
          { title: "Google Maps cache clear", detail: "Settings > Apps > Google Maps > Storage > Clear cache." },
          { title: "Reset Google Play Services location", detail: "Settings > Apps > Google Play Services > Storage > Clear data." }
        ],
        screenshots: [
          { caption: "Google Maps Location Galat Dikha Raha — interface mockup showing fix steps", alt: "Google Maps Location Galat Dikha Raha screenshot showing fix interface", type: "browser", mockupType: "google-recovery" },
          { caption: "Google Maps Location Galat Dikha Raha — settings screen mockup with options", alt: "Google Maps Location Galat Dikha Raha settings screen mockup", type: "phone", mockupType: "android-settings-location" }
        ],
        sources: [
          { title: "Maps Help", url: "https://support.google.com/maps/answer/2839911", icon: "🔗" },
          { title: "Location Accuracy", url: "https://support.google.com/accounts/answer/3467281", icon: "🔗" }
        ],
        proTips: ["Indoor/basement me GPS naturally weak hota", "Phone ka GPS chip damage ho to repair karwana padega", "Survey/maps apps location share kar dete to drain hota battery"],
        faqs: [
          { q: "Indoor me galat location aa rahi?", a: "Normal hai — WiFi hotspots se calculate hoti. Outdoors zyada accurate." },
          { q: "Navigation me arrow ghoom raha rapidly?", a: "Compass calibration issue. Magnetic interference (cars, magnets) check karo." },
          { q: "Maps incognito mode kya karta?", a: "Search history save nahi hoti. Location accuracy same rehti." },
          { q: "Saved places sync nahi ho rahe?", a: "Google account same hai sab device pe verify karo." }
        ],
        related: [
          { title: "Photos Backup Paused", slug: "photos-backup-paused", category: "google" },
          { title: "Google Translate Offline", slug: "google-translate-offline", category: "google" }
        ],
        keywords: ["google maps location galat", "maps wrong location", "gps galat dikha raha"],
        variants: ["maps wrong location", "gps galat dikha raha", "maps accuracy problem"]
      },
      {
        slug: "chrome-sync-not-working",
        category: "google",
        metaTitle: "Chrome Sync Nahi Ho Rahi — Quick Fix Guide (2026) | JharForm",
        metaDescription: "Bookmarks, history, passwords laptop ke Chrome me hain par mobile pe sync nahi ho rahe — account sync settings issue.",
        h1: "Chrome Sync Nahi Ho Rahi — Step-by-Step Fix",
        lastUpdated: "May 2026",
        readingTime: "3 min",
        difficulty: "Easy",
        description: "Bookmarks, history, passwords laptop ke Chrome me hain par mobile pe sync nahi ho rahe — account sync settings issue.",
        steps: [
          { title: "Chrome > Settings > Sync verify", detail: "Hamburger menu > Settings > 'You and Google'." },
          { title: "Account signed-in confirm", detail: "Sahi Google account signed in hai check karo." },
          { title: "Manage what you sync", detail: "'Sync everything' on rakho ya selectively passwords/bookmarks/history." },
          { title: "Pause aur Resume sync", detail: "Same settings me 'Turn off' phir wapas 'Turn on sync'." },
          { title: "Cached browsing data clear", detail: "Chrome > More tools > Clear browsing data > 'All time'." },
          { title: "Chrome update karo latest", detail: "Settings > About Chrome > update automatic." }
        ],
        screenshots: [
          { caption: "Chrome Sync Nahi Ho Rahi — interface mockup showing fix steps", alt: "Chrome Sync Nahi Ho Rahi screenshot showing fix interface", type: "browser", mockupType: "google-recovery" },
          { caption: "Chrome Sync Nahi Ho Rahi — settings screen mockup with options", alt: "Chrome Sync Nahi Ho Rahi settings screen mockup", type: "phone", mockupType: "android-settings-system" }
        ],
        sources: [
          { title: "Chrome Sync Help", url: "https://support.google.com/chrome/answer/185277", icon: "🔗" },
          { title: "Sync Encryption", url: "https://support.google.com/chrome/answer/165139", icon: "🔗" }
        ],
        proTips: ["Passwords sync ke liye encryption passphrase set kar sakte ho extra security", "School/Workspace account me admin sync block kar sakta", "Incognito mode browsing sync nahi hoti"],
        faqs: [
          { q: "Specific extension cross-device sync hoti?", a: "Haan — extension Chrome Web Store install ho to sync hota." },
          { q: "Phone bookmarks laptop pe dikh rahe par reverse nahi?", a: "Sync direction one-way isn't — both ways hai. Restart Chrome try karo." },
          { q: "Encrypted passphrase bhul gaya?", a: "Sync reset karna padta hai — saari sync data Google se delete hoti, fresh start." },
          { q: "Multiple Chrome profiles kaise manage?", a: "Profile pic top-right > Add profile — har profile ka alag sync." }
        ],
        related: [
          { title: "Google Account Merge", slug: "google-account-merge", category: "google" },
          { title: "Gmail Dark Mode", slug: "gmail-dark-mode", category: "google" }
        ],
        keywords: ["chrome sync nahi ho rahi", "chrome bookmarks sync problem", "chrome passwords sync fail"],
        variants: ["chrome bookmarks sync problem", "chrome passwords sync fail", "chrome sync mobile laptop"]
      },
      {
        slug: "google-translate-offline",
        category: "google",
        metaTitle: "Google Translate Offline Use Karein — Quick Fix Guide (2026) | JharForm",
        metaDescription: "Internet ke bina foreign language translate karna ho to languages pre-download karke offline use karo.",
        h1: "Google Translate Offline Use Karein — Step-by-Step Fix",
        lastUpdated: "May 2026",
        readingTime: "3 min",
        difficulty: "Easy",
        description: "Internet ke bina foreign language translate karna ho to languages pre-download karke offline use karo.",
        steps: [
          { title: "Translate app kholo (mobile)", detail: "Google Translate app — phone aur tablet pe available." },
          { title: "Settings > Offline translation", detail: "Bottom hamburger > Settings > Offline translation." },
          { title: "Languages select karo", detail: "Hindi, English, French — jo bhi chahiye. Each ~40-80MB." },
          { title: "Download icon tap karo language ke pas", detail: "WiFi pe download karo — large files." },
          { title: "Internet off karke test karo", detail: "Airplane mode > app me translate try karo." },
          { title: "Camera translation offline support", detail: "Camera mode bhi offline kaam karta downloaded languages ke saath." }
        ],
        screenshots: [
          { caption: "Google Translate Offline Use Karein — interface mockup showing fix steps", alt: "Google Translate Offline Use Karein screenshot showing fix interface", type: "browser", mockupType: "google-recovery" },
          { caption: "Google Translate Offline Use Karein — settings screen mockup with options", alt: "Google Translate Offline Use Karein settings screen mockup", type: "phone", mockupType: "android-settings-system" }
        ],
        sources: [
          { title: "Translate Offline", url: "https://support.google.com/translate/answer/6142473", icon: "🔗" },
          { title: "Translate Help", url: "https://support.google.com/translate", icon: "🔗" }
        ],
        proTips: ["Voice translation offline nahi hoti — internet chahiye", "Document translation web-only — offline nahi", "Auto-detect language offline limited support"],
        faqs: [
          { q: "Phrase book sync hoti?", a: "Haan — Google account se cloud sync hota. Offline access available downloaded." },
          { q: "Camera me text scan offline?", a: "Haan — language pack download ho to." },
          { q: "Updates kab aati offline packs ki?", a: "Periodic — settings me 'Available updates' notification." },
          { q: "Translation quality offline kam?", a: "Slightly — online cloud me bigger model use hota. 90% quality offline retain." }
        ],
        related: [
          { title: "Chrome Sync Not Working", slug: "chrome-sync-not-working", category: "google" },
          { title: "Google Maps Location Wrong", slug: "maps-location-wrong", category: "google" }
        ],
        keywords: ["google translate offline", "translate bina internet", "translate language download"],
        variants: ["translate bina internet", "translate language download", "translate offline mode"]
      }
    ].filter(Boolean) as Problem[])
  };
