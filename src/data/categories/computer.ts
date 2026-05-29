import type { Category } from "../types";

export const computerCategory: Category = {
    slug: "computer",
    name: "Laptop & PC",
    icon: "💻",
    description: "Laptop WiFi issue, Windows slow, printer problem — sabhi computer problems ka step-by-step solution.",
    metaTitle: "Laptop & PC Problems — Windows Fix Guide | JharForm Problems",
    metaDescription: "Laptop WiFi issue, Windows slow, printer problem — sabhi computer problems ka step-by-step solution.",
    problems: [
      {
        slug: "laptop-wifi-nahi-chal-raha",
        category: "computer",
        metaTitle: "Laptop WiFi Nahi Chal Raha? 8 Fix (2026) | JharForm",
        metaDescription: "Laptop mein WiFi connect nahi ho raha? WiFi icon missing hai, connected par internet nahi aa raha? Windows 10/11 mein fix ka complete guide.",
        h1: "Laptop WiFi Nahi Chal Raha — Windows 10/11 Mein 8 Fix",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Easy",
        description: "Laptop mein WiFi icon missing hai, networks dikh rahi hain par connect nahi ho rahi, ya connected hone ke baad internet nahi aa raha. Windows driver issue, hardware switch off, ya network adapter problem ho sakta hai. 90% cases mein software fix se solve hota hai.",
        steps: [
          { title: "WiFi hardware switch check karo", detail: "Laptop keyboard pe F2/F3/F5/F12 mein WiFi icon hoga. Fn key ke saath press karo. Kuch laptops mein side switch bhi hota hai." },
          { title: "Airplane Mode off karo", detail: "Taskbar pe aeroplane icon dikhta hai to click karke Airplane Mode off karo. Ya Settings > Network & Internet > Airplane Mode > Off." },
          { title: "Network Adapter restart karo", detail: "Device Manager > Network Adapters > WiFi adapter right-click > Disable. 5 sec wait. Phir right-click > Enable." },
          { title: "WiFi driver update karo", detail: "Device Manager > Network Adapters > WiFi adapter right-click > Update Driver > Search automatically. Internet nahi hai to phone se driver download karo." },
          { title: "Network troubleshooter run karo", detail: "Settings > Network & Internet > Advanced Network Settings > Network Reset. Ya Start menu mein 'Network Troubleshooter' search karo." },
          { title: "WiFi adapter ko uninstall karke reinstall karo", detail: "Device Manager > WiFi adapter > Uninstall. Restart karo. Windows automatically driver reinstall karega." },
          { title: "Network settings reset karo", detail: "Settings > Network & Internet > Advanced Network Settings > Network Reset > Reset Now. Sab WiFi passwords delete honge." },
          { title: "Router restart karo", detail: "Router ka power nikaalo, 30 second wait, wapas lagao. 2 minute mein network aa jayega." }
        ],
        screenshots: [
          { caption: "Windows Device Manager showing Network Adapters section expanded with Intel Wi-Fi 6 AX201 highlighted in yellow warning showing Device is disabled — right-click to Enable", alt: "Windows device manager network adapters showing intel wifi adapter disabled with yellow warning icon", type: "browser", mockupType: "windows-device-manager" },
          { caption: "Android WiFi Settings showing Airtel HomeWiFi 5G connected with Saved No internet warning banner aur available networks list", alt: "Android wifi settings showing saved no internet warning for connected wifi network", type: "phone", mockupType: "android-wifi-no-internet" }
        ],
        sources: [
          { title: "Microsoft Support: WiFi Issues", url: "https://support.microsoft.com/en-us/windows/fix-wi-fi-connection-issues-6d160d54-5a07-4cd2-8a09-391cd4122f19", icon: "🪟" }
        ],
        proTips: ["Driver download karo pehle se phone se — Intel/Dell/HP website se", "Ethernet cable se temporarily connect karo driver update ke liye", "Windows Update bhi WiFi driver update karta hai — check karo"],
        faqs: [
          { q: "WiFi icon taskbar se gayab ho gaya?", a: "Network adapter disable ho gaya hai. Device Manager mein enable karo. Ya Windows update ke baad glitch ho sakta hai — restart karo." },
          { q: "WiFi networks dikh rahi hain par connect nahi ho rahi?", a: "Password galat ho sakta hai. Ya IP conflict hai. Network adapter disable-enable karo. Router bhi restart karo." },
          { q: "Laptop mein WiFi option hi nahi aa raha?", a: "Hardware switch off hai ya driver completely missing hai. Fn+WiFi key try karo. Nahi to driver reinstall karo." },
          { q: "Phone mein WiFi chal raha hai par laptop mein nahi?", a: "Laptop specific issue hai. Driver ya hardware problem. Updater tools use karo ya service center le jao." }
        ],
        related: [
          { title: "Windows Slow Ho Gaya", slug: "windows-slow-ho-gaya", category: "computer" },
          { title: "Jio Internet Slow", slug: "jio-internet-slow", category: "network" }
        ],
        keywords: ["laptop wifi nahi chal raha", "windows wifi not working", "laptop wifi connected no internet", "wifi adapter missing"],
        variants: ["laptop wifi nahi aa raha", "laptop mein wifi gayab ho gaya", "windows 10 wifi nahi chal raha", "laptop internet nahi aa raha"]
      },
      {
        slug: "windows-slow-ho-gaya",
        category: "computer",
        metaTitle: "Windows Laptop Bahut Slow Ho Gaya? 10 Fix (2026) | JharForm",
        metaDescription: "Windows 10/11 laptop bahut slow ho gaya hai? Boot time zyada, apps hang ho rahi hain? 10 proven steps se laptop ka speed wapas lao.",
        h1: "Windows Laptop Slow Ho Gaya — 10 Steps Mein Speed Wapas Lao",
        lastUpdated: "May 2026",
        readingTime: "6 min",
        difficulty: "Easy",
        description: "Windows laptop boot time 5+ minute ho gaya, apps 30 second mein khul rahi hain, aur multitasking mein hang ho raha hai. Startup programs, disk full, malware, ya Windows update issues common reasons hain. Bina format kiye speed improve ho sakti hai.",
        steps: [
          { title: "Startup programs disable karo", detail: "Ctrl+Shift+Esc > Startup tab. Sab unnecessary apps (Spotify, Skype, Adobe) right-click > Disable. Sirf antivirus aur essential rakho." },
          { title: "Disk Cleanup run karo", detail: "Start menu mein 'Disk Cleanup' search karo. C: drive select karo. Temporary files, Recycle Bin, Downloads, Thumbnails select karo > OK." },
          { title: "Storage Sense on karo", detail: "Settings > System > Storage > Storage Sense > On. Automatic temp files aur recycle bin clean karega." },
          { title: "Background apps band karo", detail: "Settings > Apps > Startup. Ya Settings > Privacy & Security > Background Apps. Sab unnecessary ko Off karo." },
          { title: "Windows visual effects kam karo", detail: "Start > 'Adjust appearance' search karo. 'Adjust for best performance' select karo. Animation band hogi — speed badhegi." },
          { title: "Malware scan karo", detail: "Windows Security > Virus & Threat Protection > Quick Scan. Ya Malwarebytes free download karke full scan karo." },
          { title: "Unnecessary programs uninstall karo", detail: "Settings > Apps > Installed Apps. Jo use nahi hote — uninstall karo. Bloatware (games, trials) sab nikaalo." },
          { title: "Windows Update check karo", detail: "Settings > Windows Update > Check for Updates. Pending updates performance issues cause karte hain." },
          { title: "Browser tabs aur extensions kam karo", detail: "Chrome mein 50+ tabs aur 20+ extensions RAM khaate hain. Tabs close karo. Unnecessary extensions remove karo." },
          { title: "SSD upgrade socho", detail: "HDD se SSD mein upgrade karne se boot time 2 min se 20 sec ho jaata hai. Rs. 2000-4000 mein 256GB SSD milta hai." }
        ],
        screenshots: [
          { caption: "Windows Task Manager Startup tab showing Spotify Discord Adobe GC Invoker all enabled with High startup impact rating aur last boot time 4 min 38 sec", alt: "Windows task manager startup tab showing spotify discord adobe with high startup impact causing slow boot", type: "browser", mockupType: "windows-slow-startup" },
          { caption: "Windows Task Manager Startup tab with right-click context menu showing Disable option to stop high-impact startup programs", alt: "Windows task manager startup tab showing disable option in right click menu for high impact startup app", type: "browser", mockupType: "windows-slow-startup" }
        ],
        sources: [
          { title: "Microsoft: Improve Windows Performance", url: "https://support.microsoft.com/en-us/windows/tips-to-improve-pc-performance-in-windows-b437e559-a770-430d-9781-8e680520559e", icon: "🪟" }
        ],
        proTips: ["SSD upgrade sabse impactful fix hai — purana laptop bhi naya jaisa chalega", "Monthly Disk Cleanup schedule karo", "Browser mein sirf 3-5 essential extensions rakho"],
        faqs: [
          { q: "Windows 11 mein slow hai ya Windows 10?", a: "Windows 11 zyada resources leta hai. 4GB RAM pe Windows 10 better hai. 8GB+ pe Windows 11 smooth chalta hai." },
          { q: "Format karne se permanently fast hoga?", a: "1-2 mahine fast hoga phir same ho jaayega agar same habits rahi. Maintenance zaroori hai. SSD upgrade best long-term solution hai." },
          { q: "C drive full hai — performance pe asar?", a: "Haan — Windows ko 15-20% free space chahiye. Virtual memory bhi C drive pe hoti hai. Temp files clean karo." },
          { q: "Antivirus se slow hota hai?", a: "Thoda haan — real-time scanning CPU use karta hai. Windows Defender lightweight hai. Third-party heavy hote hain." }
        ],
        related: [
          { title: "Laptop Heat Ho Raha Hai", slug: "laptop-heat-ho-raha-hai", category: "computer" },
          { title: "Phone Hang Ho Raha Hai", slug: "mobile-hang-ho-raha-hai", category: "mobile" }
        ],
        keywords: ["windows slow ho gaya", "laptop slow fix", "windows 10 slow", "windows 11 slow performance"],
        variants: ["laptop bahut slow chal raha hai", "windows slow boot", "computer hang ho raha hai", "windows speed kaise badhaye"]
      },
      {
        slug: "laptop-heat-ho-raha-hai",
        category: "computer",
        metaTitle: "Laptop Bahut Garam Ho Raha Hai? Overheat Fix (2026) | JharForm",
        metaDescription: "Laptop bahut garam ho raha hai, fan tez chal raha hai, performance drop ho raha hai? Overheating se damage ho sakta hai — yeh steps se thanda rakho.",
        h1: "Laptop Overheating — Thanda Rakho Performance Bachao",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Easy",
        description: "Laptop bottom bahut garam ho raha hai, CPU fan tez awaaz kar raha hai, aur performance lag rahi hai. Dust buildup, thermal paste dry hone, blocked vents, ya heavy workload se overheating hoti hai. 70°C+ temperature laptop ke liye dangerous hai.",
        steps: [
          { title: "Laptop ko hawa mein rakho", detail: "Hard surface (table, desk) pe rakho. Bed, pillow, ya lap pe mat rakho — air vents block hote hain." },
          { title: "Cooling pad use karo", detail: "Rs. 500-1500 mein laptop cooling pad milta hai. USB powered extra fans hote hain. 10-15°C temperature kam kar sakti hai." },
          { title: "Air vents saaf karo", detail: "Compressed air can se side aur back vents mein dust nikaalo. Laptop band hona chahiye. Fan blades dhyan se saaf karo." },
          { title: "Background apps band karo", detail: "Ctrl+Shift+Esc > CPU usage zyada dikha raha apps ko End Task karo. Chrome ke multiple tabs bhi band karo." },
          { title: "Power plan balanced karo", detail: "Control Panel > Power Options > Balanced ya Power Saver select karo. High Performance zyada heat generate karta hai." },
          { title: "Thermal paste replace karwao (advanced)", detail: "2+ saal purana laptop ho to service center mein thermal paste replace karwao. Rs. 300-500 mein hota hai. Temperature 20°C kam ho jaata hai." },
          { title: "Laptop kholo aur dust nikaalo (carefully)", detail: "YouTube pe apne model ka teardown video dekho. Screws nikaalo, fan aur heat sink saaf karo. Warranty void ho sakti hai." }
        ],
        screenshots: [
          { caption: "Windows Task Manager Processes tab showing Chrome 19 processes consuming 85% CPU 2847MB RAM, CPU temperature 78C warning in red, aur end task tip", alt: "Windows task manager showing chrome high CPU usage and 78 degree temperature warning", type: "browser", mockupType: "laptop-overheat-cpu" },
          { caption: "Laptop cooling pad with dual fans USB powered, air vents cleaning compressed air can, power plan balanced setting, aur thermal paste replacement note", alt: "Laptop overheating fixes showing cooling pad compressed air cleaning and power plan settings", type: "browser", mockupType: "laptop-overheat-cpu" }
        ],
        sources: [
          { title: "Microsoft: Laptop Care Tips", url: "https://support.microsoft.com/en-us/windows/take-care-of-your-laptop-battery-and-it-will-take-care-of-you-60b9b70e-1ba3-4019-9e02-23d185f18a28", icon: "🪟" }
        ],
        proTips: ["Core Temp ya HWMonitor app se CPU temperature track karo — 70°C+ dangerous", "Gaming ya video editing ke liye dedicated cooling pad must hai", "Har 6-12 mahine mein vents saaf karo"],
        faqs: [
          { q: "Laptop 80°C+ ho raha hai — khatarnak hai?", a: "Haan — 80°C se zyada CPU ko damage hota hai. Thermal throttling se performance slow hoti hai. Turant cool karo." },
          { q: "Cooling pad actually kaam karti hai?", a: "Haan — 5-15°C temperature drop milta hai. Lekin dust cleaning aur thermal paste se zyada farak padta hai." },
          { q: "Thermal paste kitne din mein dry hoti hai?", a: "2-3 saal mein dry ho jaati hai. Gaming laptop mein 1-2 saal mein. Replace karne se temperature bahut kam hota hai." },
          { q: "Laptop bed pe use karna safe hai?", a: "Nahi — vents block hote hain. Bedsheet dust bhi andar jaati hai. Table ya cooling pad pe use karo hamesha." }
        ],
        related: [
          { title: "Windows Slow Ho Gaya", slug: "windows-slow-ho-gaya", category: "computer" },
          { title: "Phone Bahut Garam Ho Raha Hai", slug: "phone-heat-ho-raha-hai", category: "mobile" }
        ],
        keywords: ["laptop overheating", "laptop heat fix", "laptop fan loud", "laptop temperature high"],
        variants: ["laptop bahut garam ho raha hai", "laptop overheat solution", "laptop fan tez chal raha hai", "laptop heat problem"]
      },
      {
        slug: "laptop-battery-fast-drain-ho-rahi-hai",
        category: "computer",
        metaTitle: "Laptop Battery Fast Drain Ho Rahi Hai? 7 Fix (2026) | JharForm",
        metaDescription: "Laptop ki battery jaldi khatam ho rahi hai? 100% se 30% tak jaldi gir rahi? Battery health aur power settings se fix karo.",
        h1: "Battery fast drain — Complete Fix Guide",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Easy",
        description: "Battery fast drain ka issue aksar charger, battery health, power settings ya background load ki wajah se hota hai. Sahi steps follow karo to bina format kiye problem kaafi cases mein solve ho jaati hai.",
        steps: [
          { title: "Charger aur cable check karo", detail: "Original charger use karo. Cable tight lagao aur charging light dekhlo. Loose pin ya adapter issue bahut common hai." },
          { title: "Battery report dekho", detail: "Windows terminal mein powercfg /batteryreport chalao. Battery health aur recent usage ka idea mil jaata hai." },
          { title: "Power mode balanced rakho", detail: "Settings > System > Power & battery mein Best power efficiency ya Balanced use karo. High performance battery fast drain karta hai." },
          { title: "Background apps band karo", detail: "Task Manager aur Startup apps mein unnecessary cheezein disable karo. Extra load se battery jaldi khatam hoti hai." },
          { title: "Battery driver / firmware update karo", detail: "Device Manager aur manufacturer support app se battery ya BIOS updates install karo." },
          { title: "Battery health weak ho to replacement socho", detail: "Agar battery swell, overheating ya 1 ghante se kam backup de rahi hai to service center ya battery replacement best option hai." }
        ],
        screenshots: [
          { caption: "Windows battery settings showing battery usage by app, battery saver toggle, aur recent usage graph for Battery fast drain", alt: "Windows battery settings showing battery usage and battery saver for Battery fast drain", type: "browser", mockupType: "laptop-battery-fast-drain-ho-rahi-hai-battery-settings" },
          { caption: "Laptop charging indicator screen showing battery percentage, plugged in status, aur power mode options for Battery fast drain", alt: "Laptop battery and charging status screen for Battery fast drain", type: "browser", mockupType: "laptop-battery-fast-drain-ho-rahi-hai-battery-status" }
        ],
        sources: [
          { title: "Microsoft Support", url: "https://support.microsoft.com/", icon: "🪟" }
        ],
        proTips: [
          "Brightness 60-70% pe rakho — battery bachti hai",
          "Chrome tabs kam rakho — hidden battery hog hote hain",
          "Battery ko 0% tak bar-bar mat girao"
        ],
        faqs: [
          { q: "Battery fast drain normal hai ya problem?", a: "Agar backup achanak bahut kam ho gaya hai to issue hai. Battery health aur startup load check karo." },
          { q: "Battery report kaise dekhu?", a: "Windows Terminal ko admin mode mein kholkar powercfg /batteryreport chalao. Report HTML file ban jaati hai." },
          { q: "Fast drain ka sabse common reason kya hota hai?", a: "Brightness high, background apps, old battery aur heavy browser tabs sabse common reasons hain." },
          { q: "Kab battery replace karni chahiye?", a: "Agar health bahut low ho, swelling ho, ya backup 30-45 minute se bhi kam ho jaye to replace karo." }
        ],
        related: [
          { title: "Laptop WiFi Nahi Chal Raha", slug: "laptop-wifi-nahi-chal-raha", category: "computer" },
          { title: "Charging problem", slug: "laptop-charging-nahi-ho-raha", category: "computer" }
        ],
        keywords: ["laptop battery fast drain ho rahi hai", "battery issue", "laptop battery problem", "windows battery fix"],
        variants: ["battery fast drain", "laptop battery issue", "battery fast drain", "power problem"]
      },
      {
        slug: "laptop-charging-nahi-ho-raha",
        category: "computer",
        metaTitle: "Laptop Charging Nahi Ho Raha? 8 Fix (2026) | JharForm",
        metaDescription: "Laptop charge nahi ho raha, plugged in not charging aa raha, ya charging light blink nahi kar rahi? Charger, port aur battery check karo.",
        h1: "Charging problem — Complete Fix Guide",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Easy",
        description: "Charging problem ka issue aksar charger, battery health, power settings ya background load ki wajah se hota hai. Sahi steps follow karo to bina format kiye problem kaafi cases mein solve ho jaati hai.",
        steps: [
          { title: "Charger aur cable check karo", detail: "Original charger use karo. Cable tight lagao aur charging light dekhlo. Loose pin ya adapter issue bahut common hai." },
          { title: "Battery report dekho", detail: "Windows terminal mein powercfg /batteryreport chalao. Battery health aur recent usage ka idea mil jaata hai." },
          { title: "Power mode balanced rakho", detail: "Settings > System > Power & battery mein Best power efficiency ya Balanced use karo. High performance battery fast drain karta hai." },
          { title: "Background apps band karo", detail: "Task Manager aur Startup apps mein unnecessary cheezein disable karo. Extra load se battery jaldi khatam hoti hai." },
          { title: "Battery driver / firmware update karo", detail: "Device Manager aur manufacturer support app se battery ya BIOS updates install karo." },
          { title: "Battery health weak ho to replacement socho", detail: "Agar battery swell, overheating ya 1 ghante se kam backup de rahi hai to service center ya battery replacement best option hai." }
        ],
        screenshots: [
          { caption: "Windows battery settings showing battery usage by app, battery saver toggle, aur recent usage graph for Charging problem", alt: "Windows battery settings showing battery usage and battery saver for Charging problem", type: "browser", mockupType: "laptop-charging-nahi-ho-raha-battery-settings" },
          { caption: "Laptop charging indicator screen showing battery percentage, plugged in status, aur power mode options for Charging problem", alt: "Laptop battery and charging status screen for Charging problem", type: "browser", mockupType: "laptop-charging-nahi-ho-raha-battery-status" }
        ],
        sources: [
          { title: "Microsoft Support", url: "https://support.microsoft.com/", icon: "🪟" }
        ],
        proTips: [
          "Brightness 60-70% pe rakho — battery bachti hai",
          "Chrome tabs kam rakho — hidden battery hog hote hain",
          "Battery ko 0% tak bar-bar mat girao"
        ],
        faqs: [
          { q: "Charging problem normal hai ya problem?", a: "Agar backup achanak bahut kam ho gaya hai to issue hai. Battery health aur startup load check karo." },
          { q: "Battery report kaise dekhu?", a: "Windows Terminal ko admin mode mein kholkar powercfg /batteryreport chalao. Report HTML file ban jaati hai." },
          { q: "Fast drain ka sabse common reason kya hota hai?", a: "Brightness high, background apps, old battery aur heavy browser tabs sabse common reasons hain." },
          { q: "Kab battery replace karni chahiye?", a: "Agar health bahut low ho, swelling ho, ya backup 30-45 minute se bhi kam ho jaye to replace karo." }
        ],
        related: [
          { title: "Battery fast drain", slug: "laptop-battery-fast-drain-ho-rahi-hai", category: "computer" },
          { title: "Laptop WiFi Nahi Chal Raha", slug: "laptop-wifi-nahi-chal-raha", category: "computer" }
        ],
        keywords: ["laptop charging nahi ho raha", "battery issue", "laptop battery problem", "windows battery fix"],
        variants: ["charging problem", "laptop battery issue", "battery fast drain", "power problem"]
      },
      {
        slug: "laptop-suddenly-shutdown-ho-raha-hai",
        category: "computer",
        metaTitle: "Laptop Sudden Shutdown Ho Raha Hai? Reason & Fix (2026) | JharForm",
        metaDescription: "Laptop achanak band ho ja raha hai? Battery, overheating, power settings ya adapter issue ho sakta hai.",
        h1: "Sudden shutdown — Complete Fix Guide",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Easy",
        description: "Sudden shutdown ka issue aksar charger, battery health, power settings ya background load ki wajah se hota hai. Sahi steps follow karo to bina format kiye problem kaafi cases mein solve ho jaati hai.",
        steps: [
          { title: "Charger aur cable check karo", detail: "Original charger use karo. Cable tight lagao aur charging light dekhlo. Loose pin ya adapter issue bahut common hai." },
          { title: "Battery report dekho", detail: "Windows terminal mein powercfg /batteryreport chalao. Battery health aur recent usage ka idea mil jaata hai." },
          { title: "Power mode balanced rakho", detail: "Settings > System > Power & battery mein Best power efficiency ya Balanced use karo. High performance battery fast drain karta hai." },
          { title: "Background apps band karo", detail: "Task Manager aur Startup apps mein unnecessary cheezein disable karo. Extra load se battery jaldi khatam hoti hai." },
          { title: "Battery driver / firmware update karo", detail: "Device Manager aur manufacturer support app se battery ya BIOS updates install karo." },
          { title: "Battery health weak ho to replacement socho", detail: "Agar battery swell, overheating ya 1 ghante se kam backup de rahi hai to service center ya battery replacement best option hai." }
        ],
        screenshots: [
          { caption: "Windows battery settings showing battery usage by app, battery saver toggle, aur recent usage graph for Sudden shutdown", alt: "Windows battery settings showing battery usage and battery saver for Sudden shutdown", type: "browser", mockupType: "laptop-suddenly-shutdown-ho-raha-hai-battery-settings" },
          { caption: "Laptop charging indicator screen showing battery percentage, plugged in status, aur power mode options for Sudden shutdown", alt: "Laptop battery and charging status screen for Sudden shutdown", type: "browser", mockupType: "laptop-suddenly-shutdown-ho-raha-hai-battery-status" }
        ],
        sources: [
          { title: "Microsoft Support", url: "https://support.microsoft.com/", icon: "🪟" }
        ],
        proTips: [
          "Brightness 60-70% pe rakho — battery bachti hai",
          "Chrome tabs kam rakho — hidden battery hog hote hain",
          "Battery ko 0% tak bar-bar mat girao"
        ],
        faqs: [
          { q: "Sudden shutdown normal hai ya problem?", a: "Agar backup achanak bahut kam ho gaya hai to issue hai. Battery health aur startup load check karo." },
          { q: "Battery report kaise dekhu?", a: "Windows Terminal ko admin mode mein kholkar powercfg /batteryreport chalao. Report HTML file ban jaati hai." },
          { q: "Fast drain ka sabse common reason kya hota hai?", a: "Brightness high, background apps, old battery aur heavy browser tabs sabse common reasons hain." },
          { q: "Kab battery replace karni chahiye?", a: "Agar health bahut low ho, swelling ho, ya backup 30-45 minute se bhi kam ho jaye to replace karo." }
        ],
        related: [
          { title: "Charging problem", slug: "laptop-charging-nahi-ho-raha", category: "computer" },
          { title: "Laptop WiFi Nahi Chal Raha", slug: "laptop-wifi-nahi-chal-raha", category: "computer" }
        ],
        keywords: ["laptop suddenly shutdown ho raha hai", "battery issue", "laptop battery problem", "windows battery fix"],
        variants: ["sudden shutdown", "laptop battery issue", "battery fast drain", "power problem"]
      },
      {
        slug: "laptop-screen-black-ho-gayi",
        category: "computer",
        metaTitle: "Laptop Screen Black Ho Gayi? 9 Fix (2026) | JharForm",
        metaDescription: "Laptop on ho raha hai par screen black hai? Display cable, brightness, driver aur boot issue solve karo.",
        h1: "Black screen — Easy Repair Guide",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Black screen mein display black, flicker, no signal ya output detect issue ho sakta hai. Cable, driver, brightness aur display mode ko step by step check karo.",
        steps: [
          { title: "Brightness aur display mode check karo", detail: "Fn brightness keys aur Windows display projection mode (Win+P) verify karo." },
          { title: "Cable / connector reseat karo", detail: "HDMI, VGA, DisplayPort ya internal connector ko nikaal kar dobara lagao." },
          { title: "Graphics driver update karo", detail: "Device Manager ya manufacturer app se GPU driver update karo." },
          { title: "Refresh rate aur resolution reset karo", detail: "Advanced display settings mein supported resolution aur refresh rate select karo." },
          { title: "External monitor se test karo", detail: "Agar laptop screen issue hai to external display pe output aata hai ya nahi dekho." },
          { title: "Hardware fault ho to service center", detail: "Lines, cracks, ya no backlight jaisa symptom ho to panel replacement lag sakta hai." }
        ],
        screenshots: [
          { caption: "Windows display projection menu showing Duplicate, Extend, and Second screen only for Black screen", alt: "Windows projection display menu for Black screen", type: "browser", mockupType: "laptop-screen-black-ho-gayi-display-menu" },
          { caption: "Laptop black screen or flickering display diagnostic screen for Black screen", alt: "Laptop display problem screen for Black screen", type: "browser", mockupType: "laptop-screen-black-ho-gayi-display-diagnostic" }
        ],
        sources: [
          { title: "Microsoft Support", url: "https://support.microsoft.com/", icon: "🪟" }
        ],
        proTips: [
          "Win+P se output mode turant check karo",
          "Internal panel fault ho to external monitor se confirm karo",
          "Display cable ko rough tarike se mat hilao"
        ],
        faqs: [
          { q: "Black screen par laptop chal raha hota hai?", a: "Haan, kabhi display driver ya backlight issue hota hai. External monitor test useful hai." },
          { q: "Flicker ka simple fix kya hai?", a: "Driver update, refresh rate change aur loose cable check karna best first steps hain." },
          { q: "No signal ka matlab monitor kharab hai?", a: "Nahi, source input galat, cable faulty ya output mode wrong bhi ho sakta hai." },
          { q: "Brightness keys kaam nahi kar rahi?", a: "Function key lock, hotkey driver ya display utility issue ho sakta hai." }
        ],
        related: [
          { title: "Sudden shutdown", slug: "laptop-suddenly-shutdown-ho-raha-hai", category: "computer" },
          { title: "Laptop WiFi Nahi Chal Raha", slug: "laptop-wifi-nahi-chal-raha", category: "computer" }
        ],
        keywords: ["laptop screen black ho gayi", "display issue", "monitor problem", "screen fix"],
        variants: ["black screen", "screen problem", "display not working", "monitor issue"]
      },
      {
        slug: "laptop-screen-flickering",
        category: "computer",
        metaTitle: "Laptop Screen Flickering Ho Rahi Hai? Easy Fix (2026) | JharForm",
        metaDescription: "Laptop ki screen blink, flicker ya line bana rahi hai? Driver, refresh rate aur cable issue fix karo.",
        h1: "Screen flickering — Easy Repair Guide",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Screen flickering mein display black, flicker, no signal ya output detect issue ho sakta hai. Cable, driver, brightness aur display mode ko step by step check karo.",
        steps: [
          { title: "Brightness aur display mode check karo", detail: "Fn brightness keys aur Windows display projection mode (Win+P) verify karo." },
          { title: "Cable / connector reseat karo", detail: "HDMI, VGA, DisplayPort ya internal connector ko nikaal kar dobara lagao." },
          { title: "Graphics driver update karo", detail: "Device Manager ya manufacturer app se GPU driver update karo." },
          { title: "Refresh rate aur resolution reset karo", detail: "Advanced display settings mein supported resolution aur refresh rate select karo." },
          { title: "External monitor se test karo", detail: "Agar laptop screen issue hai to external display pe output aata hai ya nahi dekho." },
          { title: "Hardware fault ho to service center", detail: "Lines, cracks, ya no backlight jaisa symptom ho to panel replacement lag sakta hai." }
        ],
        screenshots: [
          { caption: "Windows display projection menu showing Duplicate, Extend, and Second screen only for Screen flickering", alt: "Windows projection display menu for Screen flickering", type: "browser", mockupType: "laptop-screen-flickering-display-menu" },
          { caption: "Laptop black screen or flickering display diagnostic screen for Screen flickering", alt: "Laptop display problem screen for Screen flickering", type: "browser", mockupType: "laptop-screen-flickering-display-diagnostic" }
        ],
        sources: [
          { title: "Microsoft Support", url: "https://support.microsoft.com/", icon: "🪟" }
        ],
        proTips: [
          "Win+P se output mode turant check karo",
          "Internal panel fault ho to external monitor se confirm karo",
          "Display cable ko rough tarike se mat hilao"
        ],
        faqs: [
          { q: "Black screen par laptop chal raha hota hai?", a: "Haan, kabhi display driver ya backlight issue hota hai. External monitor test useful hai." },
          { q: "Flicker ka simple fix kya hai?", a: "Driver update, refresh rate change aur loose cable check karna best first steps hain." },
          { q: "No signal ka matlab monitor kharab hai?", a: "Nahi, source input galat, cable faulty ya output mode wrong bhi ho sakta hai." },
          { q: "Brightness keys kaam nahi kar rahi?", a: "Function key lock, hotkey driver ya display utility issue ho sakta hai." }
        ],
        related: [
          { title: "Black screen", slug: "laptop-screen-black-ho-gayi", category: "computer" },
          { title: "Laptop WiFi Nahi Chal Raha", slug: "laptop-wifi-nahi-chal-raha", category: "computer" }
        ],
        keywords: ["laptop screen flickering", "display issue", "monitor problem", "screen fix"],
        variants: ["screen flickering", "screen problem", "display not working", "monitor issue"]
      },
      {
        slug: "laptop-hinge-loose-ho-gaya",
        category: "computer",
        metaTitle: "Laptop Hinge Loose Ho Gaya? Repair Guide (2026) | JharForm",
        metaDescription: "Laptop ka hinge loose, crack ya tootne wala lag raha hai? Temporary fix aur proper repair steps dekho.",
        h1: "Loose hinge — Repair & Fix Guide",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Loose hinge ka issue physical wear, dust, loose parts ya heat se related ho sakta hai. Pehle safe troubleshooting karo, phir hardware inspection.",
        steps: [
          { title: "Physical damage inspect karo", detail: "Crack, bend, loose part ya abnormal sound ho to pehle visual check karo." },
          { title: "Dust aur heat check karo", detail: "Fan area, vents aur hinges ke around dust aur heat buildup dekho." },
          { title: "Temporary software fix try karo", detail: "Restart, driver update aur power reset jaise steps kabhi symptoms kam kar dete hain." },
          { title: "External accessory remove karo", detail: "USB, dock, mouse, keyboard jaise accessories hata kar issue isolate karo." },
          { title: "Data backup karo", detail: "Agar hardware weak lag raha hai to files backup kar lo." },
          { title: "Service center ya technician", detail: "Loose hinge, fan noise ya internal breakage mein professional repair better hai." }
        ],
        screenshots: [
          { caption: "Laptop body inspection and hinge / fan area highlighted for Loose hinge", alt: "Laptop hardware inspection for Loose hinge", type: "browser", mockupType: "laptop-hinge-loose-ho-gaya-hardware-inspect" },
          { caption: "Laptop service center repair checklist for Loose hinge", alt: "Laptop repair checklist for Loose hinge", type: "browser", mockupType: "laptop-hinge-loose-ho-gaya-hardware-repair" }
        ],
        sources: [
          { title: "Microsoft Support", url: "https://support.microsoft.com/", icon: "🪟" }
        ],
        proTips: [
          "Warranty valid ho to khud open mat karo",
          "Loose parts ko tape se permanent fix mat banao",
          "Heat symptoms ignore mat karo"
        ],
        faqs: [
          { q: "Loose hinge khud theek kar sakte hain?", a: "Temporary support mil sakta hai, par proper repair technician se hi karwana chahiye." },
          { q: "Fan awaz ka matlab hamesha damage hota hai?", a: "Nahi, dust aur heat bhi reason ho sakte hain. Cleaning se kaam chal sakta hai." },
          { q: "Hardware problem mein laptop use karna safe hai?", a: "Agar sparking, smell, swelling ya crack ho to use band kar do." },
          { q: "Screws loose hone se bhi issue aata hai?", a: "Haan, especially hinges, back cover aur fan assembly mein." }
        ],
        related: [
          { title: "Screen flickering", slug: "laptop-screen-flickering", category: "computer" },
          { title: "Laptop WiFi Nahi Chal Raha", slug: "laptop-wifi-nahi-chal-raha", category: "computer" }
        ],
        keywords: ["laptop hinge loose ho gaya", "hardware issue", "laptop repair", "physical damage"],
        variants: ["loose hinge", "laptop hardware problem", "repair issue", "body issue"]
      },
      {
        slug: "laptop-fan-zyada-awaz-kar-raha-hai",
        category: "computer",
        metaTitle: "Laptop Fan Zyada Awaz Kar Raha Hai? Fix (2026) | JharForm",
        metaDescription: "Laptop fan bahut loud hai? Dust, heat aur fan calibration issue ka practical fix yahan hai.",
        h1: "Fan noise — Repair & Fix Guide",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Fan noise ka issue physical wear, dust, loose parts ya heat se related ho sakta hai. Pehle safe troubleshooting karo, phir hardware inspection.",
        steps: [
          { title: "Physical damage inspect karo", detail: "Crack, bend, loose part ya abnormal sound ho to pehle visual check karo." },
          { title: "Dust aur heat check karo", detail: "Fan area, vents aur hinges ke around dust aur heat buildup dekho." },
          { title: "Temporary software fix try karo", detail: "Restart, driver update aur power reset jaise steps kabhi symptoms kam kar dete hain." },
          { title: "External accessory remove karo", detail: "USB, dock, mouse, keyboard jaise accessories hata kar issue isolate karo." },
          { title: "Data backup karo", detail: "Agar hardware weak lag raha hai to files backup kar lo." },
          { title: "Service center ya technician", detail: "Loose hinge, fan noise ya internal breakage mein professional repair better hai." }
        ],
        screenshots: [
          { caption: "Laptop body inspection and hinge / fan area highlighted for Fan noise", alt: "Laptop hardware inspection for Fan noise", type: "browser", mockupType: "laptop-fan-zyada-awaz-kar-raha-hai-hardware-inspect" },
          { caption: "Laptop service center repair checklist for Fan noise", alt: "Laptop repair checklist for Fan noise", type: "browser", mockupType: "laptop-fan-zyada-awaz-kar-raha-hai-hardware-repair" }
        ],
        sources: [
          { title: "Microsoft Support", url: "https://support.microsoft.com/", icon: "🪟" }
        ],
        proTips: [
          "Warranty valid ho to khud open mat karo",
          "Loose parts ko tape se permanent fix mat banao",
          "Heat symptoms ignore mat karo"
        ],
        faqs: [
          { q: "Loose hinge khud theek kar sakte hain?", a: "Temporary support mil sakta hai, par proper repair technician se hi karwana chahiye." },
          { q: "Fan awaz ka matlab hamesha damage hota hai?", a: "Nahi, dust aur heat bhi reason ho sakte hain. Cleaning se kaam chal sakta hai." },
          { q: "Hardware problem mein laptop use karna safe hai?", a: "Agar sparking, smell, swelling ya crack ho to use band kar do." },
          { q: "Screws loose hone se bhi issue aata hai?", a: "Haan, especially hinges, back cover aur fan assembly mein." }
        ],
        related: [
          { title: "Loose hinge", slug: "laptop-hinge-loose-ho-gaya", category: "computer" },
          { title: "Laptop WiFi Nahi Chal Raha", slug: "laptop-wifi-nahi-chal-raha", category: "computer" }
        ],
        keywords: ["laptop fan zyada awaz kar raha hai", "hardware issue", "laptop repair", "physical damage"],
        variants: ["fan noise", "laptop hardware problem", "repair issue", "body issue"]
      },
      {
        slug: "touchpad-work-nahi-kar-raha",
        category: "computer",
        metaTitle: "Laptop Touchpad Work Nahi Kar Raha? 7 Fix (2026) | JharForm",
        metaDescription: "Touchpad move ya click nahi kar raha? Fn key, driver aur settings se problem solve karo.",
        h1: "Touchpad issue — Quick Fix Guide",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Touchpad issue mein keyboard, touchpad ya mouse ko response dene mein problem hoti hai. Driver, settings aur physical connection check karo.",
        steps: [
          { title: "Fn keys aur settings check karo", detail: "Touchpad on/off, keyboard lock ya pointer speed setting verify karo." },
          { title: "Device Manager mein driver dekho", detail: "Keyboard / mouse / touchpad device ko disable-enable karke test karo." },
          { title: "USB port ya Bluetooth test karo", detail: "External mouse/keyboard ko doosre port ya doosre device pe try karo." },
          { title: "Accessibility settings check karo", detail: "Filter Keys, Sticky Keys, Pointer speed aur touchpad sensitivity adjust karo." },
          { title: "Restart aur safe mode test karo", detail: "Software conflict isolate karne ke liye normal restart aur safe mode dono try karo." },
          { title: "Hardware fault ho to replace/repair", detail: "Physical damage ya dead keys ho to part replacement best option hai." }
        ],
        screenshots: [
          { caption: "Windows device manager showing keyboard or touchpad device status for Touchpad issue", alt: "Windows input device manager for Touchpad issue", type: "browser", mockupType: "touchpad-work-nahi-kar-raha-input-device" },
          { caption: "Laptop keyboard and touchpad troubleshooting screen for Touchpad issue", alt: "Laptop input troubleshooting for Touchpad issue", type: "browser", mockupType: "touchpad-work-nahi-kar-raha-input-troubleshoot" }
        ],
        sources: [
          { title: "Microsoft Support", url: "https://support.microsoft.com/", icon: "🪟" }
        ],
        proTips: [
          "Fn + touchpad key ek baar zaroor try karo",
          "External keyboard se test karke root cause isolate karo",
          "Liquid spill hua ho to turant power off karo"
        ],
        faqs: [
          { q: "Keyboard ka ek row kaam nahi kar rahi?", a: "Physical damage, liquid spill ya ribbon cable issue ho sakta hai." },
          { q: "Touchpad cursor move nahi kar raha?", a: "Touchpad disable ho sakta hai ya driver issue ho sakta hai." },
          { q: "Mouse click to ho raha hai par move nahi?", a: "Sensor, battery ya USB port issue check karo." },
          { q: "Windows update ke baad input problem aayi?", a: "Driver rollback ya update se issue fix ho sakta hai." }
        ],
        related: [
          { title: "Fan noise", slug: "laptop-fan-zyada-awaz-kar-raha-hai", category: "computer" },
          { title: "Laptop WiFi Nahi Chal Raha", slug: "laptop-wifi-nahi-chal-raha", category: "computer" }
        ],
        keywords: ["touchpad work nahi kar raha", "keyboard not working", "touchpad issue", "mouse problem"],
        variants: ["touchpad issue", "input device problem", "typing issue", "cursor issue"]
      },
      {
        slug: "keyboard-typing-nahi-kar-raha",
        category: "computer",
        metaTitle: "Laptop Keyboard Typing Nahi Kar Raha? Fix (2026) | JharForm",
        metaDescription: "Laptop keyboard keys respond nahi kar rahi? Driver, filter keys aur physical issue check karo.",
        h1: "Keyboard not typing — Quick Fix Guide",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Keyboard not typing mein keyboard, touchpad ya mouse ko response dene mein problem hoti hai. Driver, settings aur physical connection check karo.",
        steps: [
          { title: "Fn keys aur settings check karo", detail: "Touchpad on/off, keyboard lock ya pointer speed setting verify karo." },
          { title: "Device Manager mein driver dekho", detail: "Keyboard / mouse / touchpad device ko disable-enable karke test karo." },
          { title: "USB port ya Bluetooth test karo", detail: "External mouse/keyboard ko doosre port ya doosre device pe try karo." },
          { title: "Accessibility settings check karo", detail: "Filter Keys, Sticky Keys, Pointer speed aur touchpad sensitivity adjust karo." },
          { title: "Restart aur safe mode test karo", detail: "Software conflict isolate karne ke liye normal restart aur safe mode dono try karo." },
          { title: "Hardware fault ho to replace/repair", detail: "Physical damage ya dead keys ho to part replacement best option hai." }
        ],
        screenshots: [
          { caption: "Windows device manager showing keyboard or touchpad device status for Keyboard not typing", alt: "Windows input device manager for Keyboard not typing", type: "browser", mockupType: "keyboard-typing-nahi-kar-raha-input-device" },
          { caption: "Laptop keyboard and touchpad troubleshooting screen for Keyboard not typing", alt: "Laptop input troubleshooting for Keyboard not typing", type: "browser", mockupType: "keyboard-typing-nahi-kar-raha-input-troubleshoot" }
        ],
        sources: [
          { title: "Microsoft Support", url: "https://support.microsoft.com/", icon: "🪟" }
        ],
        proTips: [
          "Fn + touchpad key ek baar zaroor try karo",
          "External keyboard se test karke root cause isolate karo",
          "Liquid spill hua ho to turant power off karo"
        ],
        faqs: [
          { q: "Keyboard ka ek row kaam nahi kar rahi?", a: "Physical damage, liquid spill ya ribbon cable issue ho sakta hai." },
          { q: "Touchpad cursor move nahi kar raha?", a: "Touchpad disable ho sakta hai ya driver issue ho sakta hai." },
          { q: "Mouse click to ho raha hai par move nahi?", a: "Sensor, battery ya USB port issue check karo." },
          { q: "Windows update ke baad input problem aayi?", a: "Driver rollback ya update se issue fix ho sakta hai." }
        ],
        related: [
          { title: "Touchpad issue", slug: "touchpad-work-nahi-kar-raha", category: "computer" },
          { title: "Laptop WiFi Nahi Chal Raha", slug: "laptop-wifi-nahi-chal-raha", category: "computer" }
        ],
        keywords: ["keyboard typing nahi kar raha", "keyboard not working", "touchpad issue", "mouse problem"],
        variants: ["keyboard not typing", "input device problem", "typing issue", "cursor issue"]
      },
      {
        slug: "mouse-not-working",
        category: "computer",
        metaTitle: "Mouse Not Working? USB/ वायरलेस Fix (2026) | JharForm",
        metaDescription: "Mouse move ya click nahi kar raha? USB port, battery, driver aur settings se quick fix lo.",
        h1: "Mouse not working — Quick Fix Guide",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Mouse not working mein keyboard, touchpad ya mouse ko response dene mein problem hoti hai. Driver, settings aur physical connection check karo.",
        steps: [
          { title: "Fn keys aur settings check karo", detail: "Touchpad on/off, keyboard lock ya pointer speed setting verify karo." },
          { title: "Device Manager mein driver dekho", detail: "Keyboard / mouse / touchpad device ko disable-enable karke test karo." },
          { title: "USB port ya Bluetooth test karo", detail: "External mouse/keyboard ko doosre port ya doosre device pe try karo." },
          { title: "Accessibility settings check karo", detail: "Filter Keys, Sticky Keys, Pointer speed aur touchpad sensitivity adjust karo." },
          { title: "Restart aur safe mode test karo", detail: "Software conflict isolate karne ke liye normal restart aur safe mode dono try karo." },
          { title: "Hardware fault ho to replace/repair", detail: "Physical damage ya dead keys ho to part replacement best option hai." }
        ],
        screenshots: [
          { caption: "Windows device manager showing keyboard or touchpad device status for Mouse not working", alt: "Windows input device manager for Mouse not working", type: "browser", mockupType: "mouse-not-working-input-device" },
          { caption: "Laptop keyboard and touchpad troubleshooting screen for Mouse not working", alt: "Laptop input troubleshooting for Mouse not working", type: "browser", mockupType: "mouse-not-working-input-troubleshoot" }
        ],
        sources: [
          { title: "Microsoft Support", url: "https://support.microsoft.com/", icon: "🪟" }
        ],
        proTips: [
          "Fn + touchpad key ek baar zaroor try karo",
          "External keyboard se test karke root cause isolate karo",
          "Liquid spill hua ho to turant power off karo"
        ],
        faqs: [
          { q: "Keyboard ka ek row kaam nahi kar rahi?", a: "Physical damage, liquid spill ya ribbon cable issue ho sakta hai." },
          { q: "Touchpad cursor move nahi kar raha?", a: "Touchpad disable ho sakta hai ya driver issue ho sakta hai." },
          { q: "Mouse click to ho raha hai par move nahi?", a: "Sensor, battery ya USB port issue check karo." },
          { q: "Windows update ke baad input problem aayi?", a: "Driver rollback ya update se issue fix ho sakta hai." }
        ],
        related: [
          { title: "Keyboard not typing", slug: "keyboard-typing-nahi-kar-raha", category: "computer" },
          { title: "Laptop WiFi Nahi Chal Raha", slug: "laptop-wifi-nahi-chal-raha", category: "computer" }
        ],
        keywords: ["mouse not working", "keyboard not working", "touchpad issue", "mouse problem"],
        variants: ["mouse not working", "input device problem", "typing issue", "cursor issue"]
      },
      {
        slug: "webcam-nahi-chal-rahi",
        category: "computer",
        metaTitle: "Laptop Webcam Nahi Chal Rahi? 8 Fix (2026) | JharForm",
        metaDescription: "Laptop camera open nahi ho rahi? Privacy permission, driver aur app access fix karo.",
        h1: "Webcam issue — Fix Guide",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Webcam issue mein camera, mic ya speaker se related permission, driver ya hardware issue ho sakta hai. App settings aur system permissions check karo.",
        steps: [
          { title: "App permission allow karo", detail: "Settings > Privacy mein camera/microphone access on karo." },
          { title: "Default device select karo", detail: "Sound settings mein correct input/output device choose karo." },
          { title: "Driver update karo", detail: "Device Manager mein audio/camera driver update karo." },
          { title: "App close karke reopen karo", detail: "Zoom, Teams, Meet ya Camera app ko close karke fresh start do." },
          { title: "Privacy shutter ya mute switch check karo", detail: "Webcam cover, mic mute button ya speaker mute key off ho." },
          { title: "Hardware test karo", detail: "Dusre app ya online test tool se mic/camera/speaker confirm karo." }
        ],
        screenshots: [
          { caption: "Windows privacy settings and camera/microphone access screen for Webcam issue", alt: "Windows privacy settings for Webcam issue", type: "browser", mockupType: "webcam-nahi-chal-rahi-privacy-settings" },
          { caption: "Video call app device selection screen showing camera and mic options for Webcam issue", alt: "Video app audio video device options for Webcam issue", type: "browser", mockupType: "webcam-nahi-chal-rahi-audio-video" }
        ],
        sources: [
          { title: "Microsoft Support", url: "https://support.microsoft.com/", icon: "🪟" }
        ],
        proTips: [
          "Meeting apps mein default mic/speaker alag ho sakte hain",
          "Privacy shutter sabse pehle check karo",
          "Bluetooth headset ko test mode mein use karo"
        ],
        faqs: [
          { q: "Mic permission on hone ke baad bhi sound nahi?", a: "Input device wrong select ho sakta hai ya driver issue ho sakta hai." },
          { q: "Webcam black screen kyu deti hai?", a: "Privacy shutter, driver conflict ya app access issue common hai." },
          { q: "Speaker mein awaaz low ho to?", a: "Output volume, app volume mixer aur driver update check karo." },
          { q: "Video call mein camera detected but not working?", a: "Dusri app lock kar rahi ho sakti hai. Sab apps close karke retry karo." }
        ],
        related: [
          { title: "Mouse not working", slug: "mouse-not-working", category: "computer" },
          { title: "Laptop WiFi Nahi Chal Raha", slug: "laptop-wifi-nahi-chal-raha", category: "computer" }
        ],
        keywords: ["webcam nahi chal rahi", "microphone issue", "webcam problem", "speaker not working"],
        variants: ["webcam issue", "audio issue", "camera problem", "mic not working"]
      },
      {
        slug: "microphone-sound-nahi-aa-rahi",
        category: "computer",
        metaTitle: "Microphone Sound Nahi Aa Rahi? Fix Guide (2026) | JharForm",
        metaDescription: "Mic record nahi kar rahi ya voice low aa rahi? Permission, driver aur input settings dekho.",
        h1: "Mic issue — Fix Guide",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Mic issue mein camera, mic ya speaker se related permission, driver ya hardware issue ho sakta hai. App settings aur system permissions check karo.",
        steps: [
          { title: "App permission allow karo", detail: "Settings > Privacy mein camera/microphone access on karo." },
          { title: "Default device select karo", detail: "Sound settings mein correct input/output device choose karo." },
          { title: "Driver update karo", detail: "Device Manager mein audio/camera driver update karo." },
          { title: "App close karke reopen karo", detail: "Zoom, Teams, Meet ya Camera app ko close karke fresh start do." },
          { title: "Privacy shutter ya mute switch check karo", detail: "Webcam cover, mic mute button ya speaker mute key off ho." },
          { title: "Hardware test karo", detail: "Dusre app ya online test tool se mic/camera/speaker confirm karo." }
        ],
        screenshots: [
          { caption: "Windows privacy settings and camera/microphone access screen for Mic issue", alt: "Windows privacy settings for Mic issue", type: "browser", mockupType: "microphone-sound-nahi-aa-rahi-privacy-settings" },
          { caption: "Video call app device selection screen showing camera and mic options for Mic issue", alt: "Video app audio video device options for Mic issue", type: "browser", mockupType: "microphone-sound-nahi-aa-rahi-audio-video" }
        ],
        sources: [
          { title: "Microsoft Support", url: "https://support.microsoft.com/", icon: "🪟" }
        ],
        proTips: [
          "Meeting apps mein default mic/speaker alag ho sakte hain",
          "Privacy shutter sabse pehle check karo",
          "Bluetooth headset ko test mode mein use karo"
        ],
        faqs: [
          { q: "Mic permission on hone ke baad bhi sound nahi?", a: "Input device wrong select ho sakta hai ya driver issue ho sakta hai." },
          { q: "Webcam black screen kyu deti hai?", a: "Privacy shutter, driver conflict ya app access issue common hai." },
          { q: "Speaker mein awaaz low ho to?", a: "Output volume, app volume mixer aur driver update check karo." },
          { q: "Video call mein camera detected but not working?", a: "Dusri app lock kar rahi ho sakti hai. Sab apps close karke retry karo." }
        ],
        related: [
          { title: "Webcam issue", slug: "webcam-nahi-chal-rahi", category: "computer" },
          { title: "Laptop WiFi Nahi Chal Raha", slug: "laptop-wifi-nahi-chal-raha", category: "computer" }
        ],
        keywords: ["microphone sound nahi aa rahi", "microphone issue", "webcam problem", "speaker not working"],
        variants: ["mic issue", "audio issue", "camera problem", "mic not working"]
      },
      {
        slug: "speaker-sound-nahi-aa-raha",
        category: "computer",
        metaTitle: "Laptop Speaker Sound Nahi Aa Raha? Fix (2026) | JharForm",
        metaDescription: "Laptop mein awaaz nahi aa rahi? Output device, driver aur mute settings check karo.",
        h1: "Speaker issue — Fix Guide",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Speaker issue mein camera, mic ya speaker se related permission, driver ya hardware issue ho sakta hai. App settings aur system permissions check karo.",
        steps: [
          { title: "App permission allow karo", detail: "Settings > Privacy mein camera/microphone access on karo." },
          { title: "Default device select karo", detail: "Sound settings mein correct input/output device choose karo." },
          { title: "Driver update karo", detail: "Device Manager mein audio/camera driver update karo." },
          { title: "App close karke reopen karo", detail: "Zoom, Teams, Meet ya Camera app ko close karke fresh start do." },
          { title: "Privacy shutter ya mute switch check karo", detail: "Webcam cover, mic mute button ya speaker mute key off ho." },
          { title: "Hardware test karo", detail: "Dusre app ya online test tool se mic/camera/speaker confirm karo." }
        ],
        screenshots: [
          { caption: "Windows privacy settings and camera/microphone access screen for Speaker issue", alt: "Windows privacy settings for Speaker issue", type: "browser", mockupType: "speaker-sound-nahi-aa-raha-privacy-settings" },
          { caption: "Video call app device selection screen showing camera and mic options for Speaker issue", alt: "Video app audio video device options for Speaker issue", type: "browser", mockupType: "speaker-sound-nahi-aa-raha-audio-video" }
        ],
        sources: [
          { title: "Microsoft Support", url: "https://support.microsoft.com/", icon: "🪟" }
        ],
        proTips: [
          "Meeting apps mein default mic/speaker alag ho sakte hain",
          "Privacy shutter sabse pehle check karo",
          "Bluetooth headset ko test mode mein use karo"
        ],
        faqs: [
          { q: "Mic permission on hone ke baad bhi sound nahi?", a: "Input device wrong select ho sakta hai ya driver issue ho sakta hai." },
          { q: "Webcam black screen kyu deti hai?", a: "Privacy shutter, driver conflict ya app access issue common hai." },
          { q: "Speaker mein awaaz low ho to?", a: "Output volume, app volume mixer aur driver update check karo." },
          { q: "Video call mein camera detected but not working?", a: "Dusri app lock kar rahi ho sakti hai. Sab apps close karke retry karo." }
        ],
        related: [
          { title: "Mic issue", slug: "microphone-sound-nahi-aa-rahi", category: "computer" },
          { title: "Laptop WiFi Nahi Chal Raha", slug: "laptop-wifi-nahi-chal-raha", category: "computer" }
        ],
        keywords: ["speaker sound nahi aa raha", "microphone issue", "webcam problem", "speaker not working"],
        variants: ["speaker issue", "audio issue", "camera problem", "mic not working"]
      },
      {
        slug: "bluetooth-connect-nahi-ho-raha",
        category: "computer",
        metaTitle: "Bluetooth Connect Nahi Ho Raha? Windows Fix (2026) | JharForm",
        metaDescription: "Bluetooth pairing fail ho rahi? Devices remove/re-add, driver aur services check karo.",
        h1: "Bluetooth issue — Full Fix",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Bluetooth issue mein Bluetooth ya network pairing issue hota hai. Device removal, driver refresh aur service restart se kaafi baar problem solve ho jaati hai.",
        steps: [
          { title: "Device forget karke reconnect karo", detail: "Bluetooth ya WiFi device ko remove / forget karke dobara pair karo." },
          { title: "Airplane mode aur toggles check karo", detail: "Bluetooth/WiFi switch on hona chahiye. Airplane mode off rakho." },
          { title: "Driver aur service restart karo", detail: "Bluetooth Support Service ya network service restart karo." },
          { title: "Device near rakho", detail: "Distance aur interference pairing ko affect karta hai." },
          { title: "System update install karo", detail: "Windows update se connectivity bugs fix ho jaate hain." },
          { title: "Hardware fault test karo", detail: "Dusre device se pair karke confirm karo ki issue laptop side hai ya accessory side." }
        ],
        screenshots: [
          { caption: "Windows network and Bluetooth settings page showing device list and toggle buttons for Bluetooth issue", alt: "Windows network bluetooth settings for Bluetooth issue", type: "browser", mockupType: "bluetooth-connect-nahi-ho-raha-connectivity-settings" },
          { caption: "Bluetooth pairing or WiFi connection troubleshooting screen for Bluetooth issue", alt: "Connectivity troubleshooting screen for Bluetooth issue", type: "browser", mockupType: "bluetooth-connect-nahi-ho-raha-connectivity-troubleshoot" }
        ],
        sources: [
          { title: "Microsoft Support", url: "https://support.microsoft.com/en-us/windows/fix-wi-fi-connection-issues-6d160d54-5a07-4cd2-8a09-391cd4122f19", icon: "🪟" }
        ],
        proTips: [
          "Bluetooth devices ko full charge rakho",
          "Router restart se half connectivity problems solve ho jaati hain",
          "Airplane mode on/off trick simple but effective hai"
        ],
        faqs: [
          { q: "Bluetooth pair nahi ho raha to?", a: "Old pairing remove karo aur device ko reset karke fresh pair try karo." },
          { q: "WiFi driver missing kyu hota hai?", a: "Update, corruption ya uninstall ke baad hota hai. Reinstall karna hota hai." },
          { q: "LAN cable dalke bhi net nahi?", a: "Cable, router port ya IP configuration issue ho sakta hai." },
          { q: "Internet slow sirf laptop pe kyu?", a: "Background downloads, DNS ya browser conflict check karo." }
        ],
        related: [
          { title: "Speaker issue", slug: "speaker-sound-nahi-aa-raha", category: "computer" },
          { title: "Laptop WiFi Nahi Chal Raha", slug: "laptop-wifi-nahi-chal-raha", category: "computer" }
        ],
        keywords: ["bluetooth connect nahi ho raha", "bluetooth issue", "wifi issue", "network problem"],
        variants: ["bluetooth issue", "connectivity issue", "pairing problem", "network fix"]
      },
      {
        slug: "external-monitor-detect-nahi-ho-raha",
        category: "computer",
        metaTitle: "External Monitor Detect Nahi Ho Raha? Fix (2026) | JharForm",
        metaDescription: "Laptop se monitor connect nahi ho raha? HDMI, display mode aur driver check karo.",
        h1: "External display — Easy Repair Guide",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "External display mein display black, flicker, no signal ya output detect issue ho sakta hai. Cable, driver, brightness aur display mode ko step by step check karo.",
        steps: [
          { title: "Brightness aur display mode check karo", detail: "Fn brightness keys aur Windows display projection mode (Win+P) verify karo." },
          { title: "Cable / connector reseat karo", detail: "HDMI, VGA, DisplayPort ya internal connector ko nikaal kar dobara lagao." },
          { title: "Graphics driver update karo", detail: "Device Manager ya manufacturer app se GPU driver update karo." },
          { title: "Refresh rate aur resolution reset karo", detail: "Advanced display settings mein supported resolution aur refresh rate select karo." },
          { title: "External monitor se test karo", detail: "Agar laptop screen issue hai to external display pe output aata hai ya nahi dekho." },
          { title: "Hardware fault ho to service center", detail: "Lines, cracks, ya no backlight jaisa symptom ho to panel replacement lag sakta hai." }
        ],
        screenshots: [
          { caption: "Windows display projection menu showing Duplicate, Extend, and Second screen only for External display", alt: "Windows projection display menu for External display", type: "browser", mockupType: "external-monitor-detect-nahi-ho-raha-display-menu" },
          { caption: "Laptop black screen or flickering display diagnostic screen for External display", alt: "Laptop display problem screen for External display", type: "browser", mockupType: "external-monitor-detect-nahi-ho-raha-display-diagnostic" }
        ],
        sources: [
          { title: "Microsoft Support", url: "https://support.microsoft.com/", icon: "🪟" }
        ],
        proTips: [
          "Win+P se output mode turant check karo",
          "Internal panel fault ho to external monitor se confirm karo",
          "Display cable ko rough tarike se mat hilao"
        ],
        faqs: [
          { q: "Black screen par laptop chal raha hota hai?", a: "Haan, kabhi display driver ya backlight issue hota hai. External monitor test useful hai." },
          { q: "Flicker ka simple fix kya hai?", a: "Driver update, refresh rate change aur loose cable check karna best first steps hain." },
          { q: "No signal ka matlab monitor kharab hai?", a: "Nahi, source input galat, cable faulty ya output mode wrong bhi ho sakta hai." },
          { q: "Brightness keys kaam nahi kar rahi?", a: "Function key lock, hotkey driver ya display utility issue ho sakta hai." }
        ],
        related: [
          { title: "Bluetooth issue", slug: "bluetooth-connect-nahi-ho-raha", category: "computer" },
          { title: "Laptop WiFi Nahi Chal Raha", slug: "laptop-wifi-nahi-chal-raha", category: "computer" }
        ],
        keywords: ["external monitor detect nahi ho raha", "display issue", "monitor problem", "screen fix"],
        variants: ["external display", "screen problem", "display not working", "monitor issue"]
      },
      {
        slug: "hdmi-no-signal",
        category: "computer",
        metaTitle: "HDMI No Signal Aa Raha Hai? Laptop Fix (2026) | JharForm",
        metaDescription: "HDMI se TV/monitor par signal nahi aa raha? Cable, input source aur GPU settings dekho.",
        h1: "HDMI no signal — Easy Repair Guide",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "HDMI no signal mein display black, flicker, no signal ya output detect issue ho sakta hai. Cable, driver, brightness aur display mode ko step by step check karo.",
        steps: [
          { title: "Brightness aur display mode check karo", detail: "Fn brightness keys aur Windows display projection mode (Win+P) verify karo." },
          { title: "Cable / connector reseat karo", detail: "HDMI, VGA, DisplayPort ya internal connector ko nikaal kar dobara lagao." },
          { title: "Graphics driver update karo", detail: "Device Manager ya manufacturer app se GPU driver update karo." },
          { title: "Refresh rate aur resolution reset karo", detail: "Advanced display settings mein supported resolution aur refresh rate select karo." },
          { title: "External monitor se test karo", detail: "Agar laptop screen issue hai to external display pe output aata hai ya nahi dekho." },
          { title: "Hardware fault ho to service center", detail: "Lines, cracks, ya no backlight jaisa symptom ho to panel replacement lag sakta hai." }
        ],
        screenshots: [
          { caption: "Windows display projection menu showing Duplicate, Extend, and Second screen only for HDMI no signal", alt: "Windows projection display menu for HDMI no signal", type: "browser", mockupType: "hdmi-no-signal-display-menu" },
          { caption: "Laptop black screen or flickering display diagnostic screen for HDMI no signal", alt: "Laptop display problem screen for HDMI no signal", type: "browser", mockupType: "hdmi-no-signal-display-diagnostic" }
        ],
        sources: [
          { title: "Microsoft Support", url: "https://support.microsoft.com/", icon: "🪟" }
        ],
        proTips: [
          "Win+P se output mode turant check karo",
          "Internal panel fault ho to external monitor se confirm karo",
          "Display cable ko rough tarike se mat hilao"
        ],
        faqs: [
          { q: "Black screen par laptop chal raha hota hai?", a: "Haan, kabhi display driver ya backlight issue hota hai. External monitor test useful hai." },
          { q: "Flicker ka simple fix kya hai?", a: "Driver update, refresh rate change aur loose cable check karna best first steps hain." },
          { q: "No signal ka matlab monitor kharab hai?", a: "Nahi, source input galat, cable faulty ya output mode wrong bhi ho sakta hai." },
          { q: "Brightness keys kaam nahi kar rahi?", a: "Function key lock, hotkey driver ya display utility issue ho sakta hai." }
        ],
        related: [
          { title: "External display", slug: "external-monitor-detect-nahi-ho-raha", category: "computer" },
          { title: "Laptop WiFi Nahi Chal Raha", slug: "laptop-wifi-nahi-chal-raha", category: "computer" }
        ],
        keywords: ["hdmi no signal", "display issue", "monitor problem", "screen fix"],
        variants: ["hdmi no signal", "screen problem", "display not working", "monitor issue"]
      },
      {
        slug: "printer-print-nahi-kar-raha",
        category: "computer",
        metaTitle: "Printer Print Nahi Kar Raha? Complete Fix (2026) | JharForm",
        metaDescription: "Printer command bhejne par kuch print nahi ho raha? Queue, driver aur paper path check karo.",
        h1: "Printer not printing — Step by Step Fix",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Easy",
        description: "Printer not printing mein queue, driver, offline status ya cable issue ho sakta hai. Printer aur Windows dono side pe basic troubleshooting zaroor karo.",
        steps: [
          { title: "Printer power aur paper check karo", detail: "Printer on ho, paper loaded ho aur error light na jal rahi ho." },
          { title: "Print queue clear karo", detail: "Windows printer queue mein stuck jobs delete karo." },
          { title: "Printer ko default set karo", detail: "Settings > Printers mein default printer select karo." },
          { title: "Driver reinstall karo", detail: "Manufacturer website se latest printer driver install karo." },
          { title: "USB/WiFi connection test karo", detail: "Cable, router aur IP status verify karo." },
          { title: "Spooler service restart karo", detail: "Print Spooler service restart karne se offline issue aksar fix ho jaata hai." }
        ],
        screenshots: [
          { caption: "Windows printers and scanners page showing offline printer status for Printer not printing", alt: "Windows printers settings for Printer not printing", type: "browser", mockupType: "printer-print-nahi-kar-raha-printer-settings" },
          { caption: "Printer queue screen with stuck document and clear queue option for Printer not printing", alt: "Printer queue troubleshooting for Printer not printing", type: "browser", mockupType: "printer-print-nahi-kar-raha-printer-queue" }
        ],
        sources: [
          { title: "Microsoft Support", url: "https://support.microsoft.com/", icon: "🪟" }
        ],
        proTips: [
          "Printer ko static IP do agar WiFi model hai",
          "Original driver package install karo, generic driver nahi",
          "Spooler restart simple aur effective fix hai"
        ],
        faqs: [
          { q: "Printer offline kyu dikhti hai?", a: "Connection loose, sleep mode, spooler issue ya default printer setting reason ho sakta hai." },
          { q: "Print nahi ho raha par page queue mein hai?", a: "Queue stuck hai. Clear karo aur spooler restart karo." },
          { q: "Scanner detect nahi ho rahi?", a: "Driver package missing ya WIA service issue ho sakta hai." },
          { q: "WiFi printer baar-baar disconnect kyu?", a: "Router band, signal weak ya IP change hone ki wajah se." }
        ],
        related: [
          { title: "HDMI no signal", slug: "hdmi-no-signal", category: "computer" },
          { title: "Laptop WiFi Nahi Chal Raha", slug: "laptop-wifi-nahi-chal-raha", category: "computer" }
        ],
        keywords: ["printer print nahi kar raha", "printer problem", "print issue", "scanner issue"],
        variants: ["printer not printing", "printer offline", "print not working", "printer error"]
      },
      {
        slug: "printer-offline-dikha-raha-hai",
        category: "computer",
        metaTitle: "Printer Offline Dikha Raha Hai? 8 Fix (2026) | JharForm",
        metaDescription: "Printer offline aa raha hai? Wi-Fi, spooler service aur default printer settings ka fix.",
        h1: "Printer offline — Step by Step Fix",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Easy",
        description: "Printer offline mein queue, driver, offline status ya cable issue ho sakta hai. Printer aur Windows dono side pe basic troubleshooting zaroor karo.",
        steps: [
          { title: "Printer power aur paper check karo", detail: "Printer on ho, paper loaded ho aur error light na jal rahi ho." },
          { title: "Print queue clear karo", detail: "Windows printer queue mein stuck jobs delete karo." },
          { title: "Printer ko default set karo", detail: "Settings > Printers mein default printer select karo." },
          { title: "Driver reinstall karo", detail: "Manufacturer website se latest printer driver install karo." },
          { title: "USB/WiFi connection test karo", detail: "Cable, router aur IP status verify karo." },
          { title: "Spooler service restart karo", detail: "Print Spooler service restart karne se offline issue aksar fix ho jaata hai." }
        ],
        screenshots: [
          { caption: "Windows printers and scanners page showing offline printer status for Printer offline", alt: "Windows printers settings for Printer offline", type: "browser", mockupType: "printer-offline-dikha-raha-hai-printer-settings" },
          { caption: "Printer queue screen with stuck document and clear queue option for Printer offline", alt: "Printer queue troubleshooting for Printer offline", type: "browser", mockupType: "printer-offline-dikha-raha-hai-printer-queue" }
        ],
        sources: [
          { title: "Microsoft Support", url: "https://support.microsoft.com/", icon: "🪟" }
        ],
        proTips: [
          "Printer ko static IP do agar WiFi model hai",
          "Original driver package install karo, generic driver nahi",
          "Spooler restart simple aur effective fix hai"
        ],
        faqs: [
          { q: "Printer offline kyu dikhti hai?", a: "Connection loose, sleep mode, spooler issue ya default printer setting reason ho sakta hai." },
          { q: "Print nahi ho raha par page queue mein hai?", a: "Queue stuck hai. Clear karo aur spooler restart karo." },
          { q: "Scanner detect nahi ho rahi?", a: "Driver package missing ya WIA service issue ho sakta hai." },
          { q: "WiFi printer baar-baar disconnect kyu?", a: "Router band, signal weak ya IP change hone ki wajah se." }
        ],
        related: [
          { title: "Printer not printing", slug: "printer-print-nahi-kar-raha", category: "computer" },
          { title: "Laptop WiFi Nahi Chal Raha", slug: "laptop-wifi-nahi-chal-raha", category: "computer" }
        ],
        keywords: ["printer offline dikha raha hai", "printer problem", "print issue", "scanner issue"],
        variants: ["printer offline", "printer offline", "print not working", "printer error"]
      },
      {
        slug: "scanner-detect-nahi-ho-raha",
        category: "computer",
        metaTitle: "Scanner Detect Nahi Ho Raha? Fix Guide (2026) | JharForm",
        metaDescription: "Scanner app device ko detect nahi kar rahi? Driver, USB cable aur WIA service check karo.",
        h1: "Scanner issue — Step by Step Fix",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Easy",
        description: "Scanner issue mein queue, driver, offline status ya cable issue ho sakta hai. Printer aur Windows dono side pe basic troubleshooting zaroor karo.",
        steps: [
          { title: "Printer power aur paper check karo", detail: "Printer on ho, paper loaded ho aur error light na jal rahi ho." },
          { title: "Print queue clear karo", detail: "Windows printer queue mein stuck jobs delete karo." },
          { title: "Printer ko default set karo", detail: "Settings > Printers mein default printer select karo." },
          { title: "Driver reinstall karo", detail: "Manufacturer website se latest printer driver install karo." },
          { title: "USB/WiFi connection test karo", detail: "Cable, router aur IP status verify karo." },
          { title: "Spooler service restart karo", detail: "Print Spooler service restart karne se offline issue aksar fix ho jaata hai." }
        ],
        screenshots: [
          { caption: "Windows printers and scanners page showing offline printer status for Scanner issue", alt: "Windows printers settings for Scanner issue", type: "browser", mockupType: "scanner-detect-nahi-ho-raha-printer-settings" },
          { caption: "Printer queue screen with stuck document and clear queue option for Scanner issue", alt: "Printer queue troubleshooting for Scanner issue", type: "browser", mockupType: "scanner-detect-nahi-ho-raha-printer-queue" }
        ],
        sources: [
          { title: "Microsoft Support", url: "https://support.microsoft.com/", icon: "🪟" }
        ],
        proTips: [
          "Printer ko static IP do agar WiFi model hai",
          "Original driver package install karo, generic driver nahi",
          "Spooler restart simple aur effective fix hai"
        ],
        faqs: [
          { q: "Printer offline kyu dikhti hai?", a: "Connection loose, sleep mode, spooler issue ya default printer setting reason ho sakta hai." },
          { q: "Print nahi ho raha par page queue mein hai?", a: "Queue stuck hai. Clear karo aur spooler restart karo." },
          { q: "Scanner detect nahi ho rahi?", a: "Driver package missing ya WIA service issue ho sakta hai." },
          { q: "WiFi printer baar-baar disconnect kyu?", a: "Router band, signal weak ya IP change hone ki wajah se." }
        ],
        related: [
          { title: "Printer offline", slug: "printer-offline-dikha-raha-hai", category: "computer" },
          { title: "Laptop WiFi Nahi Chal Raha", slug: "laptop-wifi-nahi-chal-raha", category: "computer" }
        ],
        keywords: ["scanner detect nahi ho raha", "printer problem", "print issue", "scanner issue"],
        variants: ["scanner issue", "printer offline", "print not working", "printer error"]
      },
      {
        slug: "wifi-connected-no-internet",
        category: "computer",
        metaTitle: "WiFi Connected Hai Par Internet Nahi Chal Raha? Fix (2026) | JharForm",
        metaDescription: "WiFi connected dikh raha hai par internet nahi? DNS, router aur adapter reset steps dekho.",
        h1: "WiFi no internet — Full Fix",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "WiFi no internet mein Bluetooth ya network pairing issue hota hai. Device removal, driver refresh aur service restart se kaafi baar problem solve ho jaati hai.",
        steps: [
          { title: "Device forget karke reconnect karo", detail: "Bluetooth ya WiFi device ko remove / forget karke dobara pair karo." },
          { title: "Airplane mode aur toggles check karo", detail: "Bluetooth/WiFi switch on hona chahiye. Airplane mode off rakho." },
          { title: "Driver aur service restart karo", detail: "Bluetooth Support Service ya network service restart karo." },
          { title: "Device near rakho", detail: "Distance aur interference pairing ko affect karta hai." },
          { title: "System update install karo", detail: "Windows update se connectivity bugs fix ho jaate hain." },
          { title: "Hardware fault test karo", detail: "Dusre device se pair karke confirm karo ki issue laptop side hai ya accessory side." }
        ],
        screenshots: [
          { caption: "Windows network and Bluetooth settings page showing device list and toggle buttons for WiFi no internet", alt: "Windows network bluetooth settings for WiFi no internet", type: "browser", mockupType: "wifi-connected-no-internet-connectivity-settings" },
          { caption: "Bluetooth pairing or WiFi connection troubleshooting screen for WiFi no internet", alt: "Connectivity troubleshooting screen for WiFi no internet", type: "browser", mockupType: "wifi-connected-no-internet-connectivity-troubleshoot" }
        ],
        sources: [
          { title: "Microsoft Support", url: "https://support.microsoft.com/en-us/windows/fix-wi-fi-connection-issues-6d160d54-5a07-4cd2-8a09-391cd4122f19", icon: "🪟" }
        ],
        proTips: [
          "Bluetooth devices ko full charge rakho",
          "Router restart se half connectivity problems solve ho jaati hain",
          "Airplane mode on/off trick simple but effective hai"
        ],
        faqs: [
          { q: "Bluetooth pair nahi ho raha to?", a: "Old pairing remove karo aur device ko reset karke fresh pair try karo." },
          { q: "WiFi driver missing kyu hota hai?", a: "Update, corruption ya uninstall ke baad hota hai. Reinstall karna hota hai." },
          { q: "LAN cable dalke bhi net nahi?", a: "Cable, router port ya IP configuration issue ho sakta hai." },
          { q: "Internet slow sirf laptop pe kyu?", a: "Background downloads, DNS ya browser conflict check karo." }
        ],
        related: [
          { title: "Scanner issue", slug: "scanner-detect-nahi-ho-raha", category: "computer" },
          { title: "Laptop WiFi Nahi Chal Raha", slug: "laptop-wifi-nahi-chal-raha", category: "computer" }
        ],
        keywords: ["wifi connected no internet", "bluetooth issue", "wifi issue", "network problem"],
        variants: ["wifi no internet", "connectivity issue", "pairing problem", "network fix"]
      },
      {
        slug: "wifi-driver-missing",
        category: "computer",
        metaTitle: "WiFi Driver Missing Ho Gaya? Install Kaise Kare (2026) | JharForm",
        metaDescription: "WiFi option gayab ho gaya? Driver missing ya corrupted hai — manual install guide yahan hai.",
        h1: "WiFi driver missing — Full Fix",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "WiFi driver missing mein Bluetooth ya network pairing issue hota hai. Device removal, driver refresh aur service restart se kaafi baar problem solve ho jaati hai.",
        steps: [
          { title: "Device forget karke reconnect karo", detail: "Bluetooth ya WiFi device ko remove / forget karke dobara pair karo." },
          { title: "Airplane mode aur toggles check karo", detail: "Bluetooth/WiFi switch on hona chahiye. Airplane mode off rakho." },
          { title: "Driver aur service restart karo", detail: "Bluetooth Support Service ya network service restart karo." },
          { title: "Device near rakho", detail: "Distance aur interference pairing ko affect karta hai." },
          { title: "System update install karo", detail: "Windows update se connectivity bugs fix ho jaate hain." },
          { title: "Hardware fault test karo", detail: "Dusre device se pair karke confirm karo ki issue laptop side hai ya accessory side." }
        ],
        screenshots: [
          { caption: "Windows network and Bluetooth settings page showing device list and toggle buttons for WiFi driver missing", alt: "Windows network bluetooth settings for WiFi driver missing", type: "browser", mockupType: "wifi-driver-missing-connectivity-settings" },
          { caption: "Bluetooth pairing or WiFi connection troubleshooting screen for WiFi driver missing", alt: "Connectivity troubleshooting screen for WiFi driver missing", type: "browser", mockupType: "wifi-driver-missing-connectivity-troubleshoot" }
        ],
        sources: [
          { title: "Microsoft Support", url: "https://support.microsoft.com/en-us/windows/fix-wi-fi-connection-issues-6d160d54-5a07-4cd2-8a09-391cd4122f19", icon: "🪟" }
        ],
        proTips: [
          "Bluetooth devices ko full charge rakho",
          "Router restart se half connectivity problems solve ho jaati hain",
          "Airplane mode on/off trick simple but effective hai"
        ],
        faqs: [
          { q: "Bluetooth pair nahi ho raha to?", a: "Old pairing remove karo aur device ko reset karke fresh pair try karo." },
          { q: "WiFi driver missing kyu hota hai?", a: "Update, corruption ya uninstall ke baad hota hai. Reinstall karna hota hai." },
          { q: "LAN cable dalke bhi net nahi?", a: "Cable, router port ya IP configuration issue ho sakta hai." },
          { q: "Internet slow sirf laptop pe kyu?", a: "Background downloads, DNS ya browser conflict check karo." }
        ],
        related: [
          { title: "WiFi no internet", slug: "wifi-connected-no-internet", category: "computer" },
          { title: "Laptop WiFi Nahi Chal Raha", slug: "laptop-wifi-nahi-chal-raha", category: "computer" }
        ],
        keywords: ["wifi driver missing", "bluetooth issue", "wifi issue", "network problem"],
        variants: ["wifi driver missing", "connectivity issue", "pairing problem", "network fix"]
      },
      {
        slug: "lan-cable-not-working",
        category: "computer",
        metaTitle: "LAN Cable Not Working? Internet Fix (2026) | JharForm",
        metaDescription: "Ethernet cable laga ke bhi net nahi aa raha? Port, cable aur IP settings check karo.",
        h1: "LAN issue — Full Fix",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "LAN issue mein Bluetooth ya network pairing issue hota hai. Device removal, driver refresh aur service restart se kaafi baar problem solve ho jaati hai.",
        steps: [
          { title: "Device forget karke reconnect karo", detail: "Bluetooth ya WiFi device ko remove / forget karke dobara pair karo." },
          { title: "Airplane mode aur toggles check karo", detail: "Bluetooth/WiFi switch on hona chahiye. Airplane mode off rakho." },
          { title: "Driver aur service restart karo", detail: "Bluetooth Support Service ya network service restart karo." },
          { title: "Device near rakho", detail: "Distance aur interference pairing ko affect karta hai." },
          { title: "System update install karo", detail: "Windows update se connectivity bugs fix ho jaate hain." },
          { title: "Hardware fault test karo", detail: "Dusre device se pair karke confirm karo ki issue laptop side hai ya accessory side." }
        ],
        screenshots: [
          { caption: "Windows network and Bluetooth settings page showing device list and toggle buttons for LAN issue", alt: "Windows network bluetooth settings for LAN issue", type: "browser", mockupType: "lan-cable-not-working-connectivity-settings" },
          { caption: "Bluetooth pairing or WiFi connection troubleshooting screen for LAN issue", alt: "Connectivity troubleshooting screen for LAN issue", type: "browser", mockupType: "lan-cable-not-working-connectivity-troubleshoot" }
        ],
        sources: [
          { title: "Microsoft Support", url: "https://support.microsoft.com/en-us/windows/fix-wi-fi-connection-issues-6d160d54-5a07-4cd2-8a09-391cd4122f19", icon: "🪟" }
        ],
        proTips: [
          "Bluetooth devices ko full charge rakho",
          "Router restart se half connectivity problems solve ho jaati hain",
          "Airplane mode on/off trick simple but effective hai"
        ],
        faqs: [
          { q: "Bluetooth pair nahi ho raha to?", a: "Old pairing remove karo aur device ko reset karke fresh pair try karo." },
          { q: "WiFi driver missing kyu hota hai?", a: "Update, corruption ya uninstall ke baad hota hai. Reinstall karna hota hai." },
          { q: "LAN cable dalke bhi net nahi?", a: "Cable, router port ya IP configuration issue ho sakta hai." },
          { q: "Internet slow sirf laptop pe kyu?", a: "Background downloads, DNS ya browser conflict check karo." }
        ],
        related: [
          { title: "WiFi driver missing", slug: "wifi-driver-missing", category: "computer" },
          { title: "Laptop WiFi Nahi Chal Raha", slug: "laptop-wifi-nahi-chal-raha", category: "computer" }
        ],
        keywords: ["lan cable not working", "bluetooth issue", "wifi issue", "network problem"],
        variants: ["lan issue", "connectivity issue", "pairing problem", "network fix"]
      },
      {
        slug: "internet-slow-on-laptop",
        category: "computer",
        metaTitle: "Laptop Internet Slow Hai? 10 Fix (2026) | JharForm",
        metaDescription: "Laptop mein net slow chal raha hai? Browser, DNS, router aur background download block karo.",
        h1: "Slow internet — Full Fix",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Slow internet mein Bluetooth ya network pairing issue hota hai. Device removal, driver refresh aur service restart se kaafi baar problem solve ho jaati hai.",
        steps: [
          { title: "Device forget karke reconnect karo", detail: "Bluetooth ya WiFi device ko remove / forget karke dobara pair karo." },
          { title: "Airplane mode aur toggles check karo", detail: "Bluetooth/WiFi switch on hona chahiye. Airplane mode off rakho." },
          { title: "Driver aur service restart karo", detail: "Bluetooth Support Service ya network service restart karo." },
          { title: "Device near rakho", detail: "Distance aur interference pairing ko affect karta hai." },
          { title: "System update install karo", detail: "Windows update se connectivity bugs fix ho jaate hain." },
          { title: "Hardware fault test karo", detail: "Dusre device se pair karke confirm karo ki issue laptop side hai ya accessory side." }
        ],
        screenshots: [
          { caption: "Windows network and Bluetooth settings page showing device list and toggle buttons for Slow internet", alt: "Windows network bluetooth settings for Slow internet", type: "browser", mockupType: "internet-slow-on-laptop-connectivity-settings" },
          { caption: "Bluetooth pairing or WiFi connection troubleshooting screen for Slow internet", alt: "Connectivity troubleshooting screen for Slow internet", type: "browser", mockupType: "internet-slow-on-laptop-connectivity-troubleshoot" }
        ],
        sources: [
          { title: "Microsoft Support", url: "https://support.microsoft.com/en-us/windows/fix-wi-fi-connection-issues-6d160d54-5a07-4cd2-8a09-391cd4122f19", icon: "🪟" }
        ],
        proTips: [
          "Bluetooth devices ko full charge rakho",
          "Router restart se half connectivity problems solve ho jaati hain",
          "Airplane mode on/off trick simple but effective hai"
        ],
        faqs: [
          { q: "Bluetooth pair nahi ho raha to?", a: "Old pairing remove karo aur device ko reset karke fresh pair try karo." },
          { q: "WiFi driver missing kyu hota hai?", a: "Update, corruption ya uninstall ke baad hota hai. Reinstall karna hota hai." },
          { q: "LAN cable dalke bhi net nahi?", a: "Cable, router port ya IP configuration issue ho sakta hai." },
          { q: "Internet slow sirf laptop pe kyu?", a: "Background downloads, DNS ya browser conflict check karo." }
        ],
        related: [
          { title: "LAN issue", slug: "lan-cable-not-working", category: "computer" },
          { title: "Laptop WiFi Nahi Chal Raha", slug: "laptop-wifi-nahi-chal-raha", category: "computer" }
        ],
        keywords: ["internet slow on laptop", "bluetooth issue", "wifi issue", "network problem"],
        variants: ["slow internet", "connectivity issue", "pairing problem", "network fix"]
      },
      {
        slug: "file-explorer-not-responding",
        category: "computer",
        metaTitle: "File Explorer Not Responding? Windows Fix (2026) | JharForm",
        metaDescription: "File Explorer open hoke freeze ho raha hai? Cache, shell extension aur restart steps dekho.",
        h1: "File Explorer issue — Windows Fix",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Medium",
        description: "File Explorer issue jaisi Windows problems aksar update, cache, corrupted system files ya policy issue se hoti hain. In steps se safe troubleshoot karo.",
        steps: [
          { title: "Restart aur updates check karo", detail: "Simple restart aur pending update check first step hona chahiye." },
          { title: "System file scan chalao", detail: "Admin terminal mein sfc /scannow aur DISM run karo." },
          { title: "Safe Mode test karo", detail: "Safe Mode mein issue kam hota hai to third-party software culprit hai." },
          { title: "Startup programs disable karo", detail: "Task Manager > Startup se heavy apps band karo." },
          { title: "Recent driver rollback karo", detail: "Agar update ke baad issue aaya hai to driver rollback try karo." },
          { title: "System Restore / Recovery use karo", detail: "Restore point ho to wapas ja sakte ho. Last option repair install hai." }
        ],
        screenshots: [
          { caption: "Windows settings dashboard showing update, recovery, and troubleshoot tiles for File Explorer issue", alt: "Windows settings troubleshoot screen for File Explorer issue", type: "browser", mockupType: "file-explorer-not-responding-windows-settings" },
          { caption: "Command prompt or PowerShell repair commands screen for File Explorer issue", alt: "Windows repair command screen for File Explorer issue", type: "browser", mockupType: "file-explorer-not-responding-repair-console" }
        ],
        sources: [
          { title: "Microsoft Support", url: "https://support.microsoft.com/en-us/windows", icon: "🪟" }
        ],
        proTips: [
          "System Restore point hamesha on rakho",
          "Major update se pehle backup lo",
          "Admin terminal ka use sikh lo — kaafi fixes usi se hote hain"
        ],
        faqs: [
          { q: "Windows error aaya to pehle kya karun?", a: "Screenshot lo, restart karo, phir update aur system scan check karo." },
          { q: "Blue screen ka matlab format hi karna padta hai?", a: "Nahi, driver aur RAM issues ka fix aksar format se pehle ho jaata hai." },
          { q: "Activation failed usually kyu hota hai?", a: "License mismatch, internet issue ya wrong edition reason ho sakta hai." },
          { q: "Update stuck ho to format जरूरी hai?", a: "Nahi, update cache reset aur troubleshooter try karo." }
        ],
        related: [
          { title: "Slow internet", slug: "internet-slow-on-laptop", category: "computer" },
          { title: "Laptop WiFi Nahi Chal Raha", slug: "laptop-wifi-nahi-chal-raha", category: "computer" }
        ],
        keywords: ["file explorer not responding", "windows issue", "windows fix", "pc problem"],
        variants: ["file explorer issue", "windows problem", "computer issue", "pc issue"]
      },
      {
        slug: "task-manager-not-opening",
        category: "computer",
        metaTitle: "Task Manager Not Opening? Fix Guide (2026) | JharForm",
        metaDescription: "Ctrl+Shift+Esc se Task Manager nahi khul raha? Policy, virus aur registry issue solve karo.",
        h1: "Task Manager issue — Windows Fix",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Medium",
        description: "Task Manager issue jaisi Windows problems aksar update, cache, corrupted system files ya policy issue se hoti hain. In steps se safe troubleshoot karo.",
        steps: [
          { title: "Restart aur updates check karo", detail: "Simple restart aur pending update check first step hona chahiye." },
          { title: "System file scan chalao", detail: "Admin terminal mein sfc /scannow aur DISM run karo." },
          { title: "Safe Mode test karo", detail: "Safe Mode mein issue kam hota hai to third-party software culprit hai." },
          { title: "Startup programs disable karo", detail: "Task Manager > Startup se heavy apps band karo." },
          { title: "Recent driver rollback karo", detail: "Agar update ke baad issue aaya hai to driver rollback try karo." },
          { title: "System Restore / Recovery use karo", detail: "Restore point ho to wapas ja sakte ho. Last option repair install hai." }
        ],
        screenshots: [
          { caption: "Windows settings dashboard showing update, recovery, and troubleshoot tiles for Task Manager issue", alt: "Windows settings troubleshoot screen for Task Manager issue", type: "browser", mockupType: "task-manager-not-opening-windows-settings" },
          { caption: "Command prompt or PowerShell repair commands screen for Task Manager issue", alt: "Windows repair command screen for Task Manager issue", type: "browser", mockupType: "task-manager-not-opening-repair-console" }
        ],
        sources: [
          { title: "Microsoft Support", url: "https://support.microsoft.com/en-us/windows", icon: "🪟" }
        ],
        proTips: [
          "System Restore point hamesha on rakho",
          "Major update se pehle backup lo",
          "Admin terminal ka use sikh lo — kaafi fixes usi se hote hain"
        ],
        faqs: [
          { q: "Windows error aaya to pehle kya karun?", a: "Screenshot lo, restart karo, phir update aur system scan check karo." },
          { q: "Blue screen ka matlab format hi karna padta hai?", a: "Nahi, driver aur RAM issues ka fix aksar format se pehle ho jaata hai." },
          { q: "Activation failed usually kyu hota hai?", a: "License mismatch, internet issue ya wrong edition reason ho sakta hai." },
          { q: "Update stuck ho to format जरूरी hai?", a: "Nahi, update cache reset aur troubleshooter try karo." }
        ],
        related: [
          { title: "File Explorer issue", slug: "file-explorer-not-responding", category: "computer" },
          { title: "Laptop WiFi Nahi Chal Raha", slug: "laptop-wifi-nahi-chal-raha", category: "computer" }
        ],
        keywords: ["task manager not opening", "windows issue", "windows fix", "pc problem"],
        variants: ["task manager issue", "windows problem", "computer issue", "pc issue"]
      },
      {
        slug: "windows-blue-screen",
        category: "computer",
        metaTitle: "Windows Blue Screen Aa Raha Hai? Complete Fix (2026) | JharForm",
        metaDescription: "Blue screen error aa gaya? Driver, RAM, disk aur safe mode troubleshooting yahan hai.",
        h1: "Blue Screen — Windows Fix",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Medium",
        description: "Blue Screen jaisi Windows problems aksar update, cache, corrupted system files ya policy issue se hoti hain. In steps se safe troubleshoot karo.",
        steps: [
          { title: "Restart aur updates check karo", detail: "Simple restart aur pending update check first step hona chahiye." },
          { title: "System file scan chalao", detail: "Admin terminal mein sfc /scannow aur DISM run karo." },
          { title: "Safe Mode test karo", detail: "Safe Mode mein issue kam hota hai to third-party software culprit hai." },
          { title: "Startup programs disable karo", detail: "Task Manager > Startup se heavy apps band karo." },
          { title: "Recent driver rollback karo", detail: "Agar update ke baad issue aaya hai to driver rollback try karo." },
          { title: "System Restore / Recovery use karo", detail: "Restore point ho to wapas ja sakte ho. Last option repair install hai." }
        ],
        screenshots: [
          { caption: "Windows settings dashboard showing update, recovery, and troubleshoot tiles for Blue Screen", alt: "Windows settings troubleshoot screen for Blue Screen", type: "browser", mockupType: "windows-blue-screen-windows-settings" },
          { caption: "Command prompt or PowerShell repair commands screen for Blue Screen", alt: "Windows repair command screen for Blue Screen", type: "browser", mockupType: "windows-blue-screen-repair-console" }
        ],
        sources: [
          { title: "Microsoft Support", url: "https://support.microsoft.com/en-us/windows", icon: "🪟" }
        ],
        proTips: [
          "System Restore point hamesha on rakho",
          "Major update se pehle backup lo",
          "Admin terminal ka use sikh lo — kaafi fixes usi se hote hain"
        ],
        faqs: [
          { q: "Windows error aaya to pehle kya karun?", a: "Screenshot lo, restart karo, phir update aur system scan check karo." },
          { q: "Blue screen ka matlab format hi karna padta hai?", a: "Nahi, driver aur RAM issues ka fix aksar format se pehle ho jaata hai." },
          { q: "Activation failed usually kyu hota hai?", a: "License mismatch, internet issue ya wrong edition reason ho sakta hai." },
          { q: "Update stuck ho to format जरूरी hai?", a: "Nahi, update cache reset aur troubleshooter try karo." }
        ],
        related: [
          { title: "Task Manager issue", slug: "task-manager-not-opening", category: "computer" },
          { title: "Laptop WiFi Nahi Chal Raha", slug: "laptop-wifi-nahi-chal-raha", category: "computer" }
        ],
        keywords: ["windows blue screen", "windows issue", "windows fix", "pc problem"],
        variants: ["blue screen", "windows problem", "computer issue", "pc issue"]
      },
      {
        slug: "windows-activation-failed",
        category: "computer",
        metaTitle: "Windows Activation Failed? 2026 Fix Guide | JharForm",
        metaDescription: "Windows activate nahi ho raha? Product key, digital license aur internet activation steps dekho.",
        h1: "Activation failed — Windows Fix",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Medium",
        description: "Activation failed jaisi Windows problems aksar update, cache, corrupted system files ya policy issue se hoti hain. In steps se safe troubleshoot karo.",
        steps: [
          { title: "Restart aur updates check karo", detail: "Simple restart aur pending update check first step hona chahiye." },
          { title: "System file scan chalao", detail: "Admin terminal mein sfc /scannow aur DISM run karo." },
          { title: "Safe Mode test karo", detail: "Safe Mode mein issue kam hota hai to third-party software culprit hai." },
          { title: "Startup programs disable karo", detail: "Task Manager > Startup se heavy apps band karo." },
          { title: "Recent driver rollback karo", detail: "Agar update ke baad issue aaya hai to driver rollback try karo." },
          { title: "System Restore / Recovery use karo", detail: "Restore point ho to wapas ja sakte ho. Last option repair install hai." }
        ],
        screenshots: [
          { caption: "Windows settings dashboard showing update, recovery, and troubleshoot tiles for Activation failed", alt: "Windows settings troubleshoot screen for Activation failed", type: "browser", mockupType: "windows-activation-failed-windows-settings" },
          { caption: "Command prompt or PowerShell repair commands screen for Activation failed", alt: "Windows repair command screen for Activation failed", type: "browser", mockupType: "windows-activation-failed-repair-console" }
        ],
        sources: [
          { title: "Microsoft Support", url: "https://support.microsoft.com/en-us/windows", icon: "🪟" }
        ],
        proTips: [
          "System Restore point hamesha on rakho",
          "Major update se pehle backup lo",
          "Admin terminal ka use sikh lo — kaafi fixes usi se hote hain"
        ],
        faqs: [
          { q: "Windows error aaya to pehle kya karun?", a: "Screenshot lo, restart karo, phir update aur system scan check karo." },
          { q: "Blue screen ka matlab format hi karna padta hai?", a: "Nahi, driver aur RAM issues ka fix aksar format se pehle ho jaata hai." },
          { q: "Activation failed usually kyu hota hai?", a: "License mismatch, internet issue ya wrong edition reason ho sakta hai." },
          { q: "Update stuck ho to format जरूरी hai?", a: "Nahi, update cache reset aur troubleshooter try karo." }
        ],
        related: [
          { title: "Blue Screen", slug: "windows-blue-screen", category: "computer" },
          { title: "Laptop WiFi Nahi Chal Raha", slug: "laptop-wifi-nahi-chal-raha", category: "computer" }
        ],
        keywords: ["windows activation failed", "windows issue", "windows fix", "pc problem"],
        variants: ["activation failed", "windows problem", "computer issue", "pc issue"]
      },
      {
        slug: "windows-update-stuck",
        category: "computer",
        metaTitle: "Windows Update Stuck Ho Gaya? 9 Fix (2026) | JharForm",
        metaDescription: "Windows update 0%, pending ya installing pe atak gaya? Update service aur cache reset karo.",
        h1: "Update stuck — Windows Fix",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Medium",
        description: "Update stuck jaisi Windows problems aksar update, cache, corrupted system files ya policy issue se hoti hain. In steps se safe troubleshoot karo.",
        steps: [
          { title: "Restart aur updates check karo", detail: "Simple restart aur pending update check first step hona chahiye." },
          { title: "System file scan chalao", detail: "Admin terminal mein sfc /scannow aur DISM run karo." },
          { title: "Safe Mode test karo", detail: "Safe Mode mein issue kam hota hai to third-party software culprit hai." },
          { title: "Startup programs disable karo", detail: "Task Manager > Startup se heavy apps band karo." },
          { title: "Recent driver rollback karo", detail: "Agar update ke baad issue aaya hai to driver rollback try karo." },
          { title: "System Restore / Recovery use karo", detail: "Restore point ho to wapas ja sakte ho. Last option repair install hai." }
        ],
        screenshots: [
          { caption: "Windows settings dashboard showing update, recovery, and troubleshoot tiles for Update stuck", alt: "Windows settings troubleshoot screen for Update stuck", type: "browser", mockupType: "windows-update-stuck-windows-settings" },
          { caption: "Command prompt or PowerShell repair commands screen for Update stuck", alt: "Windows repair command screen for Update stuck", type: "browser", mockupType: "windows-update-stuck-repair-console" }
        ],
        sources: [
          { title: "Microsoft Support", url: "https://support.microsoft.com/en-us/windows", icon: "🪟" }
        ],
        proTips: [
          "System Restore point hamesha on rakho",
          "Major update se pehle backup lo",
          "Admin terminal ka use sikh lo — kaafi fixes usi se hote hain"
        ],
        faqs: [
          { q: "Windows error aaya to pehle kya karun?", a: "Screenshot lo, restart karo, phir update aur system scan check karo." },
          { q: "Blue screen ka matlab format hi karna padta hai?", a: "Nahi, driver aur RAM issues ka fix aksar format se pehle ho jaata hai." },
          { q: "Activation failed usually kyu hota hai?", a: "License mismatch, internet issue ya wrong edition reason ho sakta hai." },
          { q: "Update stuck ho to format जरूरी hai?", a: "Nahi, update cache reset aur troubleshooter try karo." }
        ],
        related: [
          { title: "Activation failed", slug: "windows-activation-failed", category: "computer" },
          { title: "Laptop WiFi Nahi Chal Raha", slug: "laptop-wifi-nahi-chal-raha", category: "computer" }
        ],
        keywords: ["windows update stuck", "windows issue", "windows fix", "pc problem"],
        variants: ["update stuck", "windows problem", "computer issue", "pc issue"]
      },
      {
        slug: "windows-password-bhool-gaya",
        category: "computer",
        metaTitle: "Windows Password Bhool Gaya? Login Recover Kaise Kare (2026) | JharForm",
        metaDescription: "Windows login password bhool gaye? Microsoft account, local account aur reset disk methods.",
        h1: "Password forgotten — Windows Fix",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Medium",
        description: "Password forgotten jaisi Windows problems aksar update, cache, corrupted system files ya policy issue se hoti hain. In steps se safe troubleshoot karo.",
        steps: [
          { title: "Restart aur updates check karo", detail: "Simple restart aur pending update check first step hona chahiye." },
          { title: "System file scan chalao", detail: "Admin terminal mein sfc /scannow aur DISM run karo." },
          { title: "Safe Mode test karo", detail: "Safe Mode mein issue kam hota hai to third-party software culprit hai." },
          { title: "Startup programs disable karo", detail: "Task Manager > Startup se heavy apps band karo." },
          { title: "Recent driver rollback karo", detail: "Agar update ke baad issue aaya hai to driver rollback try karo." },
          { title: "System Restore / Recovery use karo", detail: "Restore point ho to wapas ja sakte ho. Last option repair install hai." }
        ],
        screenshots: [
          { caption: "Windows settings dashboard showing update, recovery, and troubleshoot tiles for Password forgotten", alt: "Windows settings troubleshoot screen for Password forgotten", type: "browser", mockupType: "windows-password-bhool-gaya-windows-settings" },
          { caption: "Command prompt or PowerShell repair commands screen for Password forgotten", alt: "Windows repair command screen for Password forgotten", type: "browser", mockupType: "windows-password-bhool-gaya-repair-console" }
        ],
        sources: [
          { title: "Microsoft Support", url: "https://support.microsoft.com/en-us/windows", icon: "🪟" }
        ],
        proTips: [
          "System Restore point hamesha on rakho",
          "Major update se pehle backup lo",
          "Admin terminal ka use sikh lo — kaafi fixes usi se hote hain"
        ],
        faqs: [
          { q: "Windows error aaya to pehle kya karun?", a: "Screenshot lo, restart karo, phir update aur system scan check karo." },
          { q: "Blue screen ka matlab format hi karna padta hai?", a: "Nahi, driver aur RAM issues ka fix aksar format se pehle ho jaata hai." },
          { q: "Activation failed usually kyu hota hai?", a: "License mismatch, internet issue ya wrong edition reason ho sakta hai." },
          { q: "Update stuck ho to format जरूरी hai?", a: "Nahi, update cache reset aur troubleshooter try karo." }
        ],
        related: [
          { title: "Update stuck", slug: "windows-update-stuck", category: "computer" },
          { title: "Laptop WiFi Nahi Chal Raha", slug: "laptop-wifi-nahi-chal-raha", category: "computer" }
        ],
        keywords: ["windows password bhool gaya", "windows issue", "windows fix", "pc problem"],
        variants: ["password forgotten", "windows problem", "computer issue", "pc issue"]
      },
      {
        slug: "restart-loop-mein-atka-hua",
        category: "computer",
        metaTitle: "Laptop Restart Loop Mein Atka Hua Hai? Fix (2026) | JharForm",
        metaDescription: "Laptop baar-baar restart ho raha hai? Startup repair, safe mode aur system restore use karo.",
        h1: "Restart loop — Startup Fix Guide",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Medium",
        description: "Restart loop jaisi startup problems mein Windows login se pehle hi issue aa jata hai. Safe boot, repair aur recovery options pe focus karo.",
        steps: [
          { title: "Power drain aur hard reset karo", detail: "Laptop off karke charger remove, power button 20 sec hold, phir restart." },
          { title: "External devices hatao", detail: "USB, mouse, pendrive, printer sab remove karke boot karo." },
          { title: "Automatic Repair mode use karo", detail: "Startup repair se boot files fix ho sakti hain." },
          { title: "Safe Mode mein login karo", detail: "Safe Mode mein third-party app driver conflict isolate hota hai." },
          { title: "Recent changes rollback karo", detail: "New driver/update ke baad issue aaya ho to uninstall karo." },
          { title: "Recovery environment ka use karo", detail: "System restore ya reset this PC last resort hai." }
        ],
        screenshots: [
          { caption: "Windows advanced startup recovery menu for Restart loop", alt: "Windows recovery menu for Restart loop", type: "browser", mockupType: "restart-loop-mein-atka-hua-recovery-menu" },
          { caption: "Automatic repair screen and startup repair troubleshooting for Restart loop", alt: "Windows startup repair screen for Restart loop", type: "browser", mockupType: "restart-loop-mein-atka-hua-startup-repair" }
        ],
        sources: [
          { title: "Microsoft Support", url: "https://support.microsoft.com/en-us/windows/recovery-options-in-windows-2d61-1f0e-5b1f-3f9a-fc2f4d0f0d1a", icon: "🪟" }
        ],
        proTips: [
          "Startup repair ko 2-3 baar chance do",
          "External devices hata ke boot test bahut helpful hai",
          "Important files ka backup पहले se rakho"
        ],
        faqs: [
          { q: "Restart loop kyun hota hai?", a: "Corrupt update, bad driver ya disk issue common reasons hain." },
          { q: "Black screen aur boot loop same hai?", a: "Nahi, black screen output issue bhi ho sakta hai." },
          { q: "Safe Mode kaise aata hai?", a: "Windows recovery options se advanced startup kholkar safe mode choose karo." },
          { q: "Data loss hoga kya?", a: "System restore usually data delete nahi karta. Reset karte waqt option dhyan se chuno." }
        ],
        related: [
          { title: "Password forgotten", slug: "windows-password-bhool-gaya", category: "computer" },
          { title: "Laptop WiFi Nahi Chal Raha", slug: "laptop-wifi-nahi-chal-raha", category: "computer" }
        ],
        keywords: ["restart loop mein atka hua", "boot issue", "startup problem", "restart loop"],
        variants: ["restart loop", "boot problem", "startup error", "boot fix"]
      },
      {
        slug: "black-screen-on-startup",
        category: "computer",
        metaTitle: "Black Screen on Startup? Laptop Fix (2026) | JharForm",
        metaDescription: "Laptop start hote hi black screen aa rahi hai? Display, boot aur BIOS checks karo.",
        h1: "Black screen startup — Startup Fix Guide",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Medium",
        description: "Black screen startup jaisi startup problems mein Windows login se pehle hi issue aa jata hai. Safe boot, repair aur recovery options pe focus karo.",
        steps: [
          { title: "Power drain aur hard reset karo", detail: "Laptop off karke charger remove, power button 20 sec hold, phir restart." },
          { title: "External devices hatao", detail: "USB, mouse, pendrive, printer sab remove karke boot karo." },
          { title: "Automatic Repair mode use karo", detail: "Startup repair se boot files fix ho sakti hain." },
          { title: "Safe Mode mein login karo", detail: "Safe Mode mein third-party app driver conflict isolate hota hai." },
          { title: "Recent changes rollback karo", detail: "New driver/update ke baad issue aaya ho to uninstall karo." },
          { title: "Recovery environment ka use karo", detail: "System restore ya reset this PC last resort hai." }
        ],
        screenshots: [
          { caption: "Windows advanced startup recovery menu for Black screen startup", alt: "Windows recovery menu for Black screen startup", type: "browser", mockupType: "black-screen-on-startup-recovery-menu" },
          { caption: "Automatic repair screen and startup repair troubleshooting for Black screen startup", alt: "Windows startup repair screen for Black screen startup", type: "browser", mockupType: "black-screen-on-startup-startup-repair" }
        ],
        sources: [
          { title: "Microsoft Support", url: "https://support.microsoft.com/en-us/windows/recovery-options-in-windows-2d61-1f0e-5b1f-3f9a-fc2f4d0f0d1a", icon: "🪟" }
        ],
        proTips: [
          "Startup repair ko 2-3 baar chance do",
          "External devices hata ke boot test bahut helpful hai",
          "Important files ka backup पहले se rakho"
        ],
        faqs: [
          { q: "Restart loop kyun hota hai?", a: "Corrupt update, bad driver ya disk issue common reasons hain." },
          { q: "Black screen aur boot loop same hai?", a: "Nahi, black screen output issue bhi ho sakta hai." },
          { q: "Safe Mode kaise aata hai?", a: "Windows recovery options se advanced startup kholkar safe mode choose karo." },
          { q: "Data loss hoga kya?", a: "System restore usually data delete nahi karta. Reset karte waqt option dhyan se chuno." }
        ],
        related: [
          { title: "Restart loop", slug: "restart-loop-mein-atka-hua", category: "computer" },
          { title: "Laptop WiFi Nahi Chal Raha", slug: "laptop-wifi-nahi-chal-raha", category: "computer" }
        ],
        keywords: ["black screen on startup", "boot issue", "startup problem", "restart loop"],
        variants: ["black screen startup", "boot problem", "startup error", "boot fix"]
      },
      {
        slug: "desktop-icons-missing",
        category: "computer",
        metaTitle: "Desktop Icons Missing Ho Gaye? Windows Fix (2026) | JharForm",
        metaDescription: "Desktop icons gayab ho gaye? View settings, explorer restart aur icon cache fix karo.",
        h1: "Desktop icons missing — Windows Fix",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Medium",
        description: "Desktop icons missing jaisi Windows problems aksar update, cache, corrupted system files ya policy issue se hoti hain. In steps se safe troubleshoot karo.",
        steps: [
          { title: "Restart aur updates check karo", detail: "Simple restart aur pending update check first step hona chahiye." },
          { title: "System file scan chalao", detail: "Admin terminal mein sfc /scannow aur DISM run karo." },
          { title: "Safe Mode test karo", detail: "Safe Mode mein issue kam hota hai to third-party software culprit hai." },
          { title: "Startup programs disable karo", detail: "Task Manager > Startup se heavy apps band karo." },
          { title: "Recent driver rollback karo", detail: "Agar update ke baad issue aaya hai to driver rollback try karo." },
          { title: "System Restore / Recovery use karo", detail: "Restore point ho to wapas ja sakte ho. Last option repair install hai." }
        ],
        screenshots: [
          { caption: "Windows settings dashboard showing update, recovery, and troubleshoot tiles for Desktop icons missing", alt: "Windows settings troubleshoot screen for Desktop icons missing", type: "browser", mockupType: "desktop-icons-missing-windows-settings" },
          { caption: "Command prompt or PowerShell repair commands screen for Desktop icons missing", alt: "Windows repair command screen for Desktop icons missing", type: "browser", mockupType: "desktop-icons-missing-repair-console" }
        ],
        sources: [
          { title: "Microsoft Support", url: "https://support.microsoft.com/en-us/windows", icon: "🪟" }
        ],
        proTips: [
          "System Restore point hamesha on rakho",
          "Major update se pehle backup lo",
          "Admin terminal ka use sikh lo — kaafi fixes usi se hote hain"
        ],
        faqs: [
          { q: "Windows error aaya to pehle kya karun?", a: "Screenshot lo, restart karo, phir update aur system scan check karo." },
          { q: "Blue screen ka matlab format hi karna padta hai?", a: "Nahi, driver aur RAM issues ka fix aksar format se pehle ho jaata hai." },
          { q: "Activation failed usually kyu hota hai?", a: "License mismatch, internet issue ya wrong edition reason ho sakta hai." },
          { q: "Update stuck ho to format जरूरी hai?", a: "Nahi, update cache reset aur troubleshooter try karo." }
        ],
        related: [
          { title: "Black screen startup", slug: "black-screen-on-startup", category: "computer" },
          { title: "Laptop WiFi Nahi Chal Raha", slug: "laptop-wifi-nahi-chal-raha", category: "computer" }
        ],
        keywords: ["desktop icons missing", "windows issue", "windows fix", "pc problem"],
        variants: ["desktop icons missing", "windows problem", "computer issue", "pc issue"]
      },
      {
        slug: "ctrl-alt-del-not-working",
        category: "computer",
        metaTitle: "Ctrl Alt Del Not Working? Windows Fix (2026) | JharForm",
        metaDescription: "Ctrl+Alt+Del response nahi de raha? Keyboard, policy aur system hang issue solve karo.",
        h1: "Ctrl Alt Del issue — Windows Fix",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Medium",
        description: "Ctrl Alt Del issue jaisi Windows problems aksar update, cache, corrupted system files ya policy issue se hoti hain. In steps se safe troubleshoot karo.",
        steps: [
          { title: "Restart aur updates check karo", detail: "Simple restart aur pending update check first step hona chahiye." },
          { title: "System file scan chalao", detail: "Admin terminal mein sfc /scannow aur DISM run karo." },
          { title: "Safe Mode test karo", detail: "Safe Mode mein issue kam hota hai to third-party software culprit hai." },
          { title: "Startup programs disable karo", detail: "Task Manager > Startup se heavy apps band karo." },
          { title: "Recent driver rollback karo", detail: "Agar update ke baad issue aaya hai to driver rollback try karo." },
          { title: "System Restore / Recovery use karo", detail: "Restore point ho to wapas ja sakte ho. Last option repair install hai." }
        ],
        screenshots: [
          { caption: "Windows settings dashboard showing update, recovery, and troubleshoot tiles for Ctrl Alt Del issue", alt: "Windows settings troubleshoot screen for Ctrl Alt Del issue", type: "browser", mockupType: "ctrl-alt-del-not-working-windows-settings" },
          { caption: "Command prompt or PowerShell repair commands screen for Ctrl Alt Del issue", alt: "Windows repair command screen for Ctrl Alt Del issue", type: "browser", mockupType: "ctrl-alt-del-not-working-repair-console" }
        ],
        sources: [
          { title: "Microsoft Support", url: "https://support.microsoft.com/en-us/windows", icon: "🪟" }
        ],
        proTips: [
          "System Restore point hamesha on rakho",
          "Major update se pehle backup lo",
          "Admin terminal ka use sikh lo — kaafi fixes usi se hote hain"
        ],
        faqs: [
          { q: "Windows error aaya to pehle kya karun?", a: "Screenshot lo, restart karo, phir update aur system scan check karo." },
          { q: "Blue screen ka matlab format hi karna padta hai?", a: "Nahi, driver aur RAM issues ka fix aksar format se pehle ho jaata hai." },
          { q: "Activation failed usually kyu hota hai?", a: "License mismatch, internet issue ya wrong edition reason ho sakta hai." },
          { q: "Update stuck ho to format जरूरी hai?", a: "Nahi, update cache reset aur troubleshooter try karo." }
        ],
        related: [
          { title: "Desktop icons missing", slug: "desktop-icons-missing", category: "computer" },
          { title: "Laptop WiFi Nahi Chal Raha", slug: "laptop-wifi-nahi-chal-raha", category: "computer" }
        ],
        keywords: ["ctrl alt del not working", "windows issue", "windows fix", "pc problem"],
        variants: ["ctrl alt del issue", "windows problem", "computer issue", "pc issue"]
      },
      {
        slug: "hard-disk-not-detected",
        category: "computer",
        metaTitle: "Hard Disk Not Detected? Data & Fix Guide (2026) | JharForm",
        metaDescription: "Hard disk BIOS ya Windows mein detect nahi ho rahi? Cable, partition aur health check karo.",
        h1: "Hard disk not detected — Fix & Recovery",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Medium",
        description: "Hard disk not detected mein drive detection, corruption ya file access issue ho sakta hai. Disk management aur cable se लेकर recovery तक sab check karo.",
        steps: [
          { title: "Cable aur port change karo", detail: "USB/SATA cable, port ya enclosure change karke test karo." },
          { title: "Disk Management check karo", detail: "Win+X > Disk Management mein drive visible hai ya nahi dekho." },
          { title: "Drive letter assign karo", detail: "Agar visible hai par letter nahi hai to assign new letter karo." },
          { title: "Device Manager aur BIOS verify karo", detail: "Disk BIOS mein show ho rahi hai ya nahi, aur Device Manager status check karo." },
          { title: "File system repair chalao", detail: "chkdsk aur repair tools corruption fix karne mein help karte hain." },
          { title: "Recovery ya replacement", detail: "Agar drive health low hai to data recovery aur replacement consider karo." }
        ],
        screenshots: [
          { caption: "Windows Disk Management showing unallocated or missing drive status for Hard disk not detected", alt: "Disk management view for Hard disk not detected", type: "browser", mockupType: "hard-disk-not-detected-disk-management" },
          { caption: "Storage device health or recovery screen for Hard disk not detected", alt: "Storage recovery screen for Hard disk not detected", type: "browser", mockupType: "hard-disk-not-detected-storage-recovery" }
        ],
        sources: [
          { title: "Microsoft Support", url: "https://support.microsoft.com/en-us/windows", icon: "🪟" }
        ],
        proTips: [
          "Drive ko baar-baar unplug mat karo",
          "Important data ka backup 3-2-1 rule pe rakho",
          "Disk health monitor karna smart habit hai"
        ],
        faqs: [
          { q: "Drive detect nahi ho rahi to kya hard disk kharab hai?", a: "Zaroori nahi. Cable, port, letter assignment ya enclosure issue bhi ho sakta hai." },
          { q: "SSD show nahi ho rahi par nayi hai", a: "Disk Management mein initialize aur format option check karo." },
          { q: "USB pendrive corrupt ho gayi?", a: "Agar data important hai to format se pehle recovery try karo." },
          { q: "File corrupted open nahi ho rahi?", a: "Backup ya version history available ho to use karo, warna repair tool try karo." }
        ],
        related: [
          { title: "Ctrl Alt Del issue", slug: "ctrl-alt-del-not-working", category: "computer" },
          { title: "Laptop WiFi Nahi Chal Raha", slug: "laptop-wifi-nahi-chal-raha", category: "computer" }
        ],
        keywords: ["hard disk not detected", "drive issue", "disk problem", "storage fix"],
        variants: ["hard disk not detected", "storage problem", "hard disk issue", "drive fix"]
      },
      {
        slug: "ssd-not-showing",
        category: "computer",
        metaTitle: "SSD Not Showing in Windows? Fix Guide (2026) | JharForm",
        metaDescription: "Nayi SSD show nahi ho rahi? Disk management, BIOS aur driver steps dekho.",
        h1: "SSD not showing — Fix & Recovery",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Medium",
        description: "SSD not showing mein drive detection, corruption ya file access issue ho sakta hai. Disk management aur cable se लेकर recovery तक sab check karo.",
        steps: [
          { title: "Cable aur port change karo", detail: "USB/SATA cable, port ya enclosure change karke test karo." },
          { title: "Disk Management check karo", detail: "Win+X > Disk Management mein drive visible hai ya nahi dekho." },
          { title: "Drive letter assign karo", detail: "Agar visible hai par letter nahi hai to assign new letter karo." },
          { title: "Device Manager aur BIOS verify karo", detail: "Disk BIOS mein show ho rahi hai ya nahi, aur Device Manager status check karo." },
          { title: "File system repair chalao", detail: "chkdsk aur repair tools corruption fix karne mein help karte hain." },
          { title: "Recovery ya replacement", detail: "Agar drive health low hai to data recovery aur replacement consider karo." }
        ],
        screenshots: [
          { caption: "Windows Disk Management showing unallocated or missing drive status for SSD not showing", alt: "Disk management view for SSD not showing", type: "browser", mockupType: "ssd-not-showing-disk-management" },
          { caption: "Storage device health or recovery screen for SSD not showing", alt: "Storage recovery screen for SSD not showing", type: "browser", mockupType: "ssd-not-showing-storage-recovery" }
        ],
        sources: [
          { title: "Microsoft Support", url: "https://support.microsoft.com/en-us/windows", icon: "🪟" }
        ],
        proTips: [
          "Drive ko baar-baar unplug mat karo",
          "Important data ka backup 3-2-1 rule pe rakho",
          "Disk health monitor karna smart habit hai"
        ],
        faqs: [
          { q: "Drive detect nahi ho rahi to kya hard disk kharab hai?", a: "Zaroori nahi. Cable, port, letter assignment ya enclosure issue bhi ho sakta hai." },
          { q: "SSD show nahi ho rahi par nayi hai", a: "Disk Management mein initialize aur format option check karo." },
          { q: "USB pendrive corrupt ho gayi?", a: "Agar data important hai to format se pehle recovery try karo." },
          { q: "File corrupted open nahi ho rahi?", a: "Backup ya version history available ho to use karo, warna repair tool try karo." }
        ],
        related: [
          { title: "Hard disk not detected", slug: "hard-disk-not-detected", category: "computer" },
          { title: "Laptop WiFi Nahi Chal Raha", slug: "laptop-wifi-nahi-chal-raha", category: "computer" }
        ],
        keywords: ["ssd not showing", "drive issue", "disk problem", "storage fix"],
        variants: ["ssd not showing", "storage problem", "hard disk issue", "drive fix"]
      },
      {
        slug: "usb-drive-not-detected",
        category: "computer",
        metaTitle: "USB Drive Not Detected? Quick Fix (2026) | JharForm",
        metaDescription: "Pendrive connect karne par detect nahi ho rahi? Port, drive letter aur device manager steps.",
        h1: "USB drive not detected — Fix & Recovery",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Medium",
        description: "USB drive not detected mein drive detection, corruption ya file access issue ho sakta hai. Disk management aur cable se लेकर recovery तक sab check karo.",
        steps: [
          { title: "Cable aur port change karo", detail: "USB/SATA cable, port ya enclosure change karke test karo." },
          { title: "Disk Management check karo", detail: "Win+X > Disk Management mein drive visible hai ya nahi dekho." },
          { title: "Drive letter assign karo", detail: "Agar visible hai par letter nahi hai to assign new letter karo." },
          { title: "Device Manager aur BIOS verify karo", detail: "Disk BIOS mein show ho rahi hai ya nahi, aur Device Manager status check karo." },
          { title: "File system repair chalao", detail: "chkdsk aur repair tools corruption fix karne mein help karte hain." },
          { title: "Recovery ya replacement", detail: "Agar drive health low hai to data recovery aur replacement consider karo." }
        ],
        screenshots: [
          { caption: "Windows Disk Management showing unallocated or missing drive status for USB drive not detected", alt: "Disk management view for USB drive not detected", type: "browser", mockupType: "usb-drive-not-detected-disk-management" },
          { caption: "Storage device health or recovery screen for USB drive not detected", alt: "Storage recovery screen for USB drive not detected", type: "browser", mockupType: "usb-drive-not-detected-storage-recovery" }
        ],
        sources: [
          { title: "Microsoft Support", url: "https://support.microsoft.com/en-us/windows", icon: "🪟" }
        ],
        proTips: [
          "Drive ko baar-baar unplug mat karo",
          "Important data ka backup 3-2-1 rule pe rakho",
          "Disk health monitor karna smart habit hai"
        ],
        faqs: [
          { q: "Drive detect nahi ho rahi to kya hard disk kharab hai?", a: "Zaroori nahi. Cable, port, letter assignment ya enclosure issue bhi ho sakta hai." },
          { q: "SSD show nahi ho rahi par nayi hai", a: "Disk Management mein initialize aur format option check karo." },
          { q: "USB pendrive corrupt ho gayi?", a: "Agar data important hai to format se pehle recovery try karo." },
          { q: "File corrupted open nahi ho rahi?", a: "Backup ya version history available ho to use karo, warna repair tool try karo." }
        ],
        related: [
          { title: "SSD not showing", slug: "ssd-not-showing", category: "computer" },
          { title: "Laptop WiFi Nahi Chal Raha", slug: "laptop-wifi-nahi-chal-raha", category: "computer" }
        ],
        keywords: ["usb drive not detected", "drive issue", "disk problem", "storage fix"],
        variants: ["usb drive not detected", "storage problem", "hard disk issue", "drive fix"]
      },
      {
        slug: "sd-card-not-reading",
        category: "computer",
        metaTitle: "SD Card Not Reading? Recovery Fix (2026) | JharForm",
        metaDescription: "SD card read nahi ho rahi? Card lock, adapter aur corruption issue dekho.",
        h1: "SD card issue — Fix & Recovery",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Medium",
        description: "SD card issue mein drive detection, corruption ya file access issue ho sakta hai. Disk management aur cable se लेकर recovery तक sab check karo.",
        steps: [
          { title: "Cable aur port change karo", detail: "USB/SATA cable, port ya enclosure change karke test karo." },
          { title: "Disk Management check karo", detail: "Win+X > Disk Management mein drive visible hai ya nahi dekho." },
          { title: "Drive letter assign karo", detail: "Agar visible hai par letter nahi hai to assign new letter karo." },
          { title: "Device Manager aur BIOS verify karo", detail: "Disk BIOS mein show ho rahi hai ya nahi, aur Device Manager status check karo." },
          { title: "File system repair chalao", detail: "chkdsk aur repair tools corruption fix karne mein help karte hain." },
          { title: "Recovery ya replacement", detail: "Agar drive health low hai to data recovery aur replacement consider karo." }
        ],
        screenshots: [
          { caption: "Windows Disk Management showing unallocated or missing drive status for SD card issue", alt: "Disk management view for SD card issue", type: "browser", mockupType: "sd-card-not-reading-disk-management" },
          { caption: "Storage device health or recovery screen for SD card issue", alt: "Storage recovery screen for SD card issue", type: "browser", mockupType: "sd-card-not-reading-storage-recovery" }
        ],
        sources: [
          { title: "Microsoft Support", url: "https://support.microsoft.com/en-us/windows", icon: "🪟" }
        ],
        proTips: [
          "Drive ko baar-baar unplug mat karo",
          "Important data ka backup 3-2-1 rule pe rakho",
          "Disk health monitor karna smart habit hai"
        ],
        faqs: [
          { q: "Drive detect nahi ho rahi to kya hard disk kharab hai?", a: "Zaroori nahi. Cable, port, letter assignment ya enclosure issue bhi ho sakta hai." },
          { q: "SSD show nahi ho rahi par nayi hai", a: "Disk Management mein initialize aur format option check karo." },
          { q: "USB pendrive corrupt ho gayi?", a: "Agar data important hai to format se pehle recovery try karo." },
          { q: "File corrupted open nahi ho rahi?", a: "Backup ya version history available ho to use karo, warna repair tool try karo." }
        ],
        related: [
          { title: "USB drive not detected", slug: "usb-drive-not-detected", category: "computer" },
          { title: "Laptop WiFi Nahi Chal Raha", slug: "laptop-wifi-nahi-chal-raha", category: "computer" }
        ],
        keywords: ["sd card not reading", "drive issue", "disk problem", "storage fix"],
        variants: ["sd card issue", "storage problem", "hard disk issue", "drive fix"]
      },
      {
        slug: "pdf-open-nahi-ho-raha",
        category: "computer",
        metaTitle: "PDF Open Nahi Ho Raha? Fix Guide (2026) | JharForm",
        metaDescription: "PDF file open nahi ho rahi? Reader app, file corruption aur default app set karo.",
        h1: "PDF open issue — Open/Fix Guide",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "PDF open issue app ya file open nahi ho rahi to app repair, default settings aur file corruption check karna padta hai.",
        steps: [
          { title: "App ko close karke reopen karo", detail: "Simple restart se memory lock issue fix ho jata hai." },
          { title: "Default app set karo", detail: "Right click > Open with > default app select karo." },
          { title: "Repair / update install karo", detail: "Office, PDF reader ya browser ko update karo." },
          { title: "Protected view / security block check karo", detail: "Blocked files ko unprotect ya trust settings se open karo." },
          { title: "File copy karke local path pe try karo", detail: "Network path ya cloud sync issue ko isolate karo." },
          { title: "Reinstall or restore version", detail: "App repair se kaam na bane to clean reinstall ya backup version use karo." }
        ],
        screenshots: [
          { caption: "Software repair or open-with dialog screen for PDF open issue", alt: "Software open fix dialog for PDF open issue", type: "browser", mockupType: "pdf-open-nahi-ho-raha-software-dialog" },
          { caption: "App repair and reset screen for PDF open issue", alt: "App repair screen for PDF open issue", type: "browser", mockupType: "pdf-open-nahi-ho-raha-software-repair" }
        ],
        sources: [
          { title: "Microsoft Support", url: "https://support.microsoft.com/", icon: "🪟" }
        ],
        proTips: [
          "Kaam wali files ka backup OneDrive/Drive mein rakho",
          "Ek hi file ko multiple apps mein open karke test karo",
          "App updates delay mat karo"
        ],
        faqs: [
          { q: "File corrupt ho gayi to open hogi?", a: "Kabhi-kabhi repair tool, version history ya backup se recover ho jaati hai." },
          { q: "Word/Excel/PPT alag alag issue kyu hota hai?", a: "Add-ins, file format, protected view ya app cache different hote hain." },
          { q: "Chrome slow kyu hota hai?", a: "Cache, extensions aur too many tabs se browser heavy ho jata hai." },
          { q: "PDF print nahi ho rahi?", a: "Reader issue, printer queue aur page scaling check karo." }
        ],
        related: [
          { title: "SD card issue", slug: "sd-card-not-reading", category: "computer" },
          { title: "Laptop WiFi Nahi Chal Raha", slug: "laptop-wifi-nahi-chal-raha", category: "computer" }
        ],
        keywords: ["pdf open nahi ho raha", "file not opening", "app issue", "software problem"],
        variants: ["pdf open issue", "open nahi ho raha", "software issue", "file fix"]
      },
      {
        slug: "pdf-print-nahi-ho-raha",
        category: "computer",
        metaTitle: "PDF Print Nahi Ho Raha? Printer Fix (2026) | JharForm",
        metaDescription: "PDF print command fail ho raha? Reader, printer queue aur page settings check karo.",
        h1: "PDF print issue — Open/Fix Guide",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "PDF print issue app ya file open nahi ho rahi to app repair, default settings aur file corruption check karna padta hai.",
        steps: [
          { title: "App ko close karke reopen karo", detail: "Simple restart se memory lock issue fix ho jata hai." },
          { title: "Default app set karo", detail: "Right click > Open with > default app select karo." },
          { title: "Repair / update install karo", detail: "Office, PDF reader ya browser ko update karo." },
          { title: "Protected view / security block check karo", detail: "Blocked files ko unprotect ya trust settings se open karo." },
          { title: "File copy karke local path pe try karo", detail: "Network path ya cloud sync issue ko isolate karo." },
          { title: "Reinstall or restore version", detail: "App repair se kaam na bane to clean reinstall ya backup version use karo." }
        ],
        screenshots: [
          { caption: "Software repair or open-with dialog screen for PDF print issue", alt: "Software open fix dialog for PDF print issue", type: "browser", mockupType: "pdf-print-nahi-ho-raha-software-dialog" },
          { caption: "App repair and reset screen for PDF print issue", alt: "App repair screen for PDF print issue", type: "browser", mockupType: "pdf-print-nahi-ho-raha-software-repair" }
        ],
        sources: [
          { title: "Microsoft Support", url: "https://support.microsoft.com/", icon: "🪟" }
        ],
        proTips: [
          "Kaam wali files ka backup OneDrive/Drive mein rakho",
          "Ek hi file ko multiple apps mein open karke test karo",
          "App updates delay mat karo"
        ],
        faqs: [
          { q: "File corrupt ho gayi to open hogi?", a: "Kabhi-kabhi repair tool, version history ya backup se recover ho jaati hai." },
          { q: "Word/Excel/PPT alag alag issue kyu hota hai?", a: "Add-ins, file format, protected view ya app cache different hote hain." },
          { q: "Chrome slow kyu hota hai?", a: "Cache, extensions aur too many tabs se browser heavy ho jata hai." },
          { q: "PDF print nahi ho rahi?", a: "Reader issue, printer queue aur page scaling check karo." }
        ],
        related: [
          { title: "PDF open issue", slug: "pdf-open-nahi-ho-raha", category: "computer" },
          { title: "Laptop WiFi Nahi Chal Raha", slug: "laptop-wifi-nahi-chal-raha", category: "computer" }
        ],
        keywords: ["pdf print nahi ho raha", "file not opening", "app issue", "software problem"],
        variants: ["pdf print issue", "open nahi ho raha", "software issue", "file fix"]
      },
      {
        slug: "word-open-nahi-ho-raha",
        category: "computer",
        metaTitle: "MS Word Open Nahi Ho Raha? Fix (2026) | JharForm",
        metaDescription: "Word file open nahi ho rahi? Corrupt file, safe mode aur repair steps dekho.",
        h1: "Word issue — Open/Fix Guide",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Word issue app ya file open nahi ho rahi to app repair, default settings aur file corruption check karna padta hai.",
        steps: [
          { title: "App ko close karke reopen karo", detail: "Simple restart se memory lock issue fix ho jata hai." },
          { title: "Default app set karo", detail: "Right click > Open with > default app select karo." },
          { title: "Repair / update install karo", detail: "Office, PDF reader ya browser ko update karo." },
          { title: "Protected view / security block check karo", detail: "Blocked files ko unprotect ya trust settings se open karo." },
          { title: "File copy karke local path pe try karo", detail: "Network path ya cloud sync issue ko isolate karo." },
          { title: "Reinstall or restore version", detail: "App repair se kaam na bane to clean reinstall ya backup version use karo." }
        ],
        screenshots: [
          { caption: "Software repair or open-with dialog screen for Word issue", alt: "Software open fix dialog for Word issue", type: "browser", mockupType: "word-open-nahi-ho-raha-software-dialog" },
          { caption: "App repair and reset screen for Word issue", alt: "App repair screen for Word issue", type: "browser", mockupType: "word-open-nahi-ho-raha-software-repair" }
        ],
        sources: [
          { title: "Microsoft Support", url: "https://support.microsoft.com/", icon: "🪟" }
        ],
        proTips: [
          "Kaam wali files ka backup OneDrive/Drive mein rakho",
          "Ek hi file ko multiple apps mein open karke test karo",
          "App updates delay mat karo"
        ],
        faqs: [
          { q: "File corrupt ho gayi to open hogi?", a: "Kabhi-kabhi repair tool, version history ya backup se recover ho jaati hai." },
          { q: "Word/Excel/PPT alag alag issue kyu hota hai?", a: "Add-ins, file format, protected view ya app cache different hote hain." },
          { q: "Chrome slow kyu hota hai?", a: "Cache, extensions aur too many tabs se browser heavy ho jata hai." },
          { q: "PDF print nahi ho rahi?", a: "Reader issue, printer queue aur page scaling check karo." }
        ],
        related: [
          { title: "PDF print issue", slug: "pdf-print-nahi-ho-raha", category: "computer" },
          { title: "Laptop WiFi Nahi Chal Raha", slug: "laptop-wifi-nahi-chal-raha", category: "computer" }
        ],
        keywords: ["word open nahi ho raha", "file not opening", "app issue", "software problem"],
        variants: ["word issue", "open nahi ho raha", "software issue", "file fix"]
      },
      {
        slug: "excel-open-nahi-ho-raha",
        category: "computer",
        metaTitle: "Excel Open Nahi Ho Raha? Easy Fix (2026) | JharForm",
        metaDescription: "Excel sheet nahi khul rahi? Add-ins, file repair aur compatibility fix karo.",
        h1: "Excel issue — Open/Fix Guide",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Excel issue app ya file open nahi ho rahi to app repair, default settings aur file corruption check karna padta hai.",
        steps: [
          { title: "App ko close karke reopen karo", detail: "Simple restart se memory lock issue fix ho jata hai." },
          { title: "Default app set karo", detail: "Right click > Open with > default app select karo." },
          { title: "Repair / update install karo", detail: "Office, PDF reader ya browser ko update karo." },
          { title: "Protected view / security block check karo", detail: "Blocked files ko unprotect ya trust settings se open karo." },
          { title: "File copy karke local path pe try karo", detail: "Network path ya cloud sync issue ko isolate karo." },
          { title: "Reinstall or restore version", detail: "App repair se kaam na bane to clean reinstall ya backup version use karo." }
        ],
        screenshots: [
          { caption: "Software repair or open-with dialog screen for Excel issue", alt: "Software open fix dialog for Excel issue", type: "browser", mockupType: "excel-open-nahi-ho-raha-software-dialog" },
          { caption: "App repair and reset screen for Excel issue", alt: "App repair screen for Excel issue", type: "browser", mockupType: "excel-open-nahi-ho-raha-software-repair" }
        ],
        sources: [
          { title: "Microsoft Support", url: "https://support.microsoft.com/", icon: "🪟" }
        ],
        proTips: [
          "Kaam wali files ka backup OneDrive/Drive mein rakho",
          "Ek hi file ko multiple apps mein open karke test karo",
          "App updates delay mat karo"
        ],
        faqs: [
          { q: "File corrupt ho gayi to open hogi?", a: "Kabhi-kabhi repair tool, version history ya backup se recover ho jaati hai." },
          { q: "Word/Excel/PPT alag alag issue kyu hota hai?", a: "Add-ins, file format, protected view ya app cache different hote hain." },
          { q: "Chrome slow kyu hota hai?", a: "Cache, extensions aur too many tabs se browser heavy ho jata hai." },
          { q: "PDF print nahi ho rahi?", a: "Reader issue, printer queue aur page scaling check karo." }
        ],
        related: [
          { title: "Word issue", slug: "word-open-nahi-ho-raha", category: "computer" },
          { title: "Laptop WiFi Nahi Chal Raha", slug: "laptop-wifi-nahi-chal-raha", category: "computer" }
        ],
        keywords: ["excel open nahi ho raha", "file not opening", "app issue", "software problem"],
        variants: ["excel issue", "open nahi ho raha", "software issue", "file fix"]
      },
      {
        slug: "powerpoint-open-nahi-ho-raha",
        category: "computer",
        metaTitle: "PowerPoint Open Nahi Ho Raha? Fix (2026) | JharForm",
        metaDescription: "PowerPoint presentation load nahi ho rahi? File repair aur protected view steps.",
        h1: "PowerPoint issue — Open/Fix Guide",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "PowerPoint issue app ya file open nahi ho rahi to app repair, default settings aur file corruption check karna padta hai.",
        steps: [
          { title: "App ko close karke reopen karo", detail: "Simple restart se memory lock issue fix ho jata hai." },
          { title: "Default app set karo", detail: "Right click > Open with > default app select karo." },
          { title: "Repair / update install karo", detail: "Office, PDF reader ya browser ko update karo." },
          { title: "Protected view / security block check karo", detail: "Blocked files ko unprotect ya trust settings se open karo." },
          { title: "File copy karke local path pe try karo", detail: "Network path ya cloud sync issue ko isolate karo." },
          { title: "Reinstall or restore version", detail: "App repair se kaam na bane to clean reinstall ya backup version use karo." }
        ],
        screenshots: [
          { caption: "Software repair or open-with dialog screen for PowerPoint issue", alt: "Software open fix dialog for PowerPoint issue", type: "browser", mockupType: "powerpoint-open-nahi-ho-raha-software-dialog" },
          { caption: "App repair and reset screen for PowerPoint issue", alt: "App repair screen for PowerPoint issue", type: "browser", mockupType: "powerpoint-open-nahi-ho-raha-software-repair" }
        ],
        sources: [
          { title: "Microsoft Support", url: "https://support.microsoft.com/", icon: "🪟" }
        ],
        proTips: [
          "Kaam wali files ka backup OneDrive/Drive mein rakho",
          "Ek hi file ko multiple apps mein open karke test karo",
          "App updates delay mat karo"
        ],
        faqs: [
          { q: "File corrupt ho gayi to open hogi?", a: "Kabhi-kabhi repair tool, version history ya backup se recover ho jaati hai." },
          { q: "Word/Excel/PPT alag alag issue kyu hota hai?", a: "Add-ins, file format, protected view ya app cache different hote hain." },
          { q: "Chrome slow kyu hota hai?", a: "Cache, extensions aur too many tabs se browser heavy ho jata hai." },
          { q: "PDF print nahi ho rahi?", a: "Reader issue, printer queue aur page scaling check karo." }
        ],
        related: [
          { title: "Excel issue", slug: "excel-open-nahi-ho-raha", category: "computer" },
          { title: "Laptop WiFi Nahi Chal Raha", slug: "laptop-wifi-nahi-chal-raha", category: "computer" }
        ],
        keywords: ["powerpoint open nahi ho raha", "file not opening", "app issue", "software problem"],
        variants: ["powerpoint issue", "open nahi ho raha", "software issue", "file fix"]
      },
      {
        slug: "chrome-slow-ho-raha-hai",
        category: "computer",
        metaTitle: "Chrome Slow Ho Raha Hai? 10 Fix (2026) | JharForm",
        metaDescription: "Chrome bahut slow chal raha hai? Cache, extensions aur hardware acceleration fix karo.",
        h1: "Chrome slow — Open/Fix Guide",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Chrome slow app ya file open nahi ho rahi to app repair, default settings aur file corruption check karna padta hai.",
        steps: [
          { title: "App ko close karke reopen karo", detail: "Simple restart se memory lock issue fix ho jata hai." },
          { title: "Default app set karo", detail: "Right click > Open with > default app select karo." },
          { title: "Repair / update install karo", detail: "Office, PDF reader ya browser ko update karo." },
          { title: "Protected view / security block check karo", detail: "Blocked files ko unprotect ya trust settings se open karo." },
          { title: "File copy karke local path pe try karo", detail: "Network path ya cloud sync issue ko isolate karo." },
          { title: "Reinstall or restore version", detail: "App repair se kaam na bane to clean reinstall ya backup version use karo." }
        ],
        screenshots: [
          { caption: "Software repair or open-with dialog screen for Chrome slow", alt: "Software open fix dialog for Chrome slow", type: "browser", mockupType: "chrome-slow-ho-raha-hai-software-dialog" },
          { caption: "App repair and reset screen for Chrome slow", alt: "App repair screen for Chrome slow", type: "browser", mockupType: "chrome-slow-ho-raha-hai-software-repair" }
        ],
        sources: [
          { title: "Microsoft Support", url: "https://support.microsoft.com/", icon: "🪟" }
        ],
        proTips: [
          "Kaam wali files ka backup OneDrive/Drive mein rakho",
          "Ek hi file ko multiple apps mein open karke test karo",
          "App updates delay mat karo"
        ],
        faqs: [
          { q: "File corrupt ho gayi to open hogi?", a: "Kabhi-kabhi repair tool, version history ya backup se recover ho jaati hai." },
          { q: "Word/Excel/PPT alag alag issue kyu hota hai?", a: "Add-ins, file format, protected view ya app cache different hote hain." },
          { q: "Chrome slow kyu hota hai?", a: "Cache, extensions aur too many tabs se browser heavy ho jata hai." },
          { q: "PDF print nahi ho rahi?", a: "Reader issue, printer queue aur page scaling check karo." }
        ],
        related: [
          { title: "PowerPoint issue", slug: "powerpoint-open-nahi-ho-raha", category: "computer" },
          { title: "Laptop WiFi Nahi Chal Raha", slug: "laptop-wifi-nahi-chal-raha", category: "computer" }
        ],
        keywords: ["chrome slow ho raha hai", "file not opening", "app issue", "software problem"],
        variants: ["chrome slow", "open nahi ho raha", "software issue", "file fix"]
      },
      {
        slug: "file-corrupted-open-nahi-ho-rahi",
        category: "computer",
        metaTitle: "File Corrupted Hai? Open Kaise Kare (2026) | JharForm",
        metaDescription: "File corrupted ho gayi aur open nahi ho rahi? Repair, restore aur backup steps dekho.",
        h1: "Corrupted file — Open/Fix Guide",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Corrupted file app ya file open nahi ho rahi to app repair, default settings aur file corruption check karna padta hai.",
        steps: [
          { title: "App ko close karke reopen karo", detail: "Simple restart se memory lock issue fix ho jata hai." },
          { title: "Default app set karo", detail: "Right click > Open with > default app select karo." },
          { title: "Repair / update install karo", detail: "Office, PDF reader ya browser ko update karo." },
          { title: "Protected view / security block check karo", detail: "Blocked files ko unprotect ya trust settings se open karo." },
          { title: "File copy karke local path pe try karo", detail: "Network path ya cloud sync issue ko isolate karo." },
          { title: "Reinstall or restore version", detail: "App repair se kaam na bane to clean reinstall ya backup version use karo." }
        ],
        screenshots: [
          { caption: "Software repair or open-with dialog screen for Corrupted file", alt: "Software open fix dialog for Corrupted file", type: "browser", mockupType: "file-corrupted-open-nahi-ho-rahi-software-dialog" },
          { caption: "App repair and reset screen for Corrupted file", alt: "App repair screen for Corrupted file", type: "browser", mockupType: "file-corrupted-open-nahi-ho-rahi-software-repair" }
        ],
        sources: [
          { title: "Microsoft Support", url: "https://support.microsoft.com/", icon: "🪟" }
        ],
        proTips: [
          "Kaam wali files ka backup OneDrive/Drive mein rakho",
          "Ek hi file ko multiple apps mein open karke test karo",
          "App updates delay mat karo"
        ],
        faqs: [
          { q: "File corrupt ho gayi to open hogi?", a: "Kabhi-kabhi repair tool, version history ya backup se recover ho jaati hai." },
          { q: "Word/Excel/PPT alag alag issue kyu hota hai?", a: "Add-ins, file format, protected view ya app cache different hote hain." },
          { q: "Chrome slow kyu hota hai?", a: "Cache, extensions aur too many tabs se browser heavy ho jata hai." },
          { q: "PDF print nahi ho rahi?", a: "Reader issue, printer queue aur page scaling check karo." }
        ],
        related: [
          { title: "Chrome slow", slug: "chrome-slow-ho-raha-hai", category: "computer" },
          { title: "Laptop WiFi Nahi Chal Raha", slug: "laptop-wifi-nahi-chal-raha", category: "computer" }
        ],
        keywords: ["file corrupted open nahi ho rahi", "file not opening", "app issue", "software problem"],
        variants: ["corrupted file", "open nahi ho raha", "software issue", "file fix"]
      },
      {
        slug: "onedrive-sync-issue",
        category: "computer",
        metaTitle: "OneDrive Sync Issue? Fix Guide (2026) | JharForm",
        metaDescription: "OneDrive files sync nahi ho rahi? Sign in, storage aur sync reset steps dekho.",
        h1: "OneDrive sync — Sync Fix Guide",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "OneDrive sync jaisi cloud sync issues mein sign-in, storage, background sync aur internet connection sab check karna hota hai.",
        steps: [
          { title: "Account sign-in verify karo", detail: "Same email/account se login ho ya nahi confirm karo." },
          { title: "Storage space check karo", detail: "OneDrive / Drive storage full ho to sync ruk jaati hai." },
          { title: "Sync pause/resume karo", detail: "Client app ko pause karke resume karo." },
          { title: "App update ya reinstall karo", detail: "Desktop sync client update ho to bugs fix ho jate hain." },
          { title: "Folder select settings dekho", detail: "Selective sync ya backup folders hidden to nahi." },
          { title: "Internet aur firewall check karo", detail: "Firewall / proxy sync ko block kar sakta hai." }
        ],
        screenshots: [
          { caption: "Cloud sync client showing paused sync, pending files, and storage quota for OneDrive sync", alt: "Cloud sync screen for OneDrive sync", type: "browser", mockupType: "onedrive-sync-issue-cloud-sync" },
          { caption: "OneDrive or Google Drive desktop status icon showing sync error for OneDrive sync", alt: "Cloud sync error icon for OneDrive sync", type: "browser", mockupType: "onedrive-sync-issue-cloud-status" }
        ],
        sources: [
          { title: "Microsoft Support", url: "https://support.microsoft.com/onedrive", icon: "☁️" }
        ],
        proTips: [
          "Cloud sync ke liye stable internet zaroori hai",
          "Large folders ko ek saath upload mat karo",
          "Account password ya 2FA updated rakho"
        ],
        faqs: [
          { q: "Files sync nahi ho rahi par upload show ho raha?", a: "Client stuck ho sakta hai. Pause/resume aur re-login try karo." },
          { q: "Storage full warning kyu aati hai?", a: "Cloud quota cross hone par new sync ruk jaati hai." },
          { q: "Multiple devices pe conflict kyu?", a: "Same file ko different devices edit karne se version conflict hota hai." },
          { q: "Offline file kab sync hogi?", a: "Internet stable hote hi auto sync resume ho sakti hai." }
        ],
        related: [
          { title: "Corrupted file", slug: "file-corrupted-open-nahi-ho-rahi", category: "computer" },
          { title: "Laptop WiFi Nahi Chal Raha", slug: "laptop-wifi-nahi-chal-raha", category: "computer" }
        ],
        keywords: ["onedrive sync issue", "sync problem", "cloud issue", "upload issue"],
        variants: ["onedrive sync", "sync nahi ho raha", "cloud problem", "backup issue"]
      },
      {
        slug: "google-drive-sync-issue",
        category: "computer",
        metaTitle: "Google Drive Sync Issue? Fix Guide (2026) | JharForm",
        metaDescription: "Google Drive upload/sync problem? Internet, desktop app aur account sync check karo.",
        h1: "Google Drive sync — Sync Fix Guide",
        lastUpdated: "May 2026",
        readingTime: "4 min",
        difficulty: "Easy",
        description: "Google Drive sync jaisi cloud sync issues mein sign-in, storage, background sync aur internet connection sab check karna hota hai.",
        steps: [
          { title: "Account sign-in verify karo", detail: "Same email/account se login ho ya nahi confirm karo." },
          { title: "Storage space check karo", detail: "OneDrive / Drive storage full ho to sync ruk jaati hai." },
          { title: "Sync pause/resume karo", detail: "Client app ko pause karke resume karo." },
          { title: "App update ya reinstall karo", detail: "Desktop sync client update ho to bugs fix ho jate hain." },
          { title: "Folder select settings dekho", detail: "Selective sync ya backup folders hidden to nahi." },
          { title: "Internet aur firewall check karo", detail: "Firewall / proxy sync ko block kar sakta hai." }
        ],
        screenshots: [
          { caption: "Cloud sync client showing paused sync, pending files, and storage quota for Google Drive sync", alt: "Cloud sync screen for Google Drive sync", type: "browser", mockupType: "google-drive-sync-issue-cloud-sync" },
          { caption: "OneDrive or Google Drive desktop status icon showing sync error for Google Drive sync", alt: "Cloud sync error icon for Google Drive sync", type: "browser", mockupType: "google-drive-sync-issue-cloud-status" }
        ],
        sources: [
          { title: "Microsoft Support", url: "https://support.microsoft.com/onedrive", icon: "☁️" }
        ],
        proTips: [
          "Cloud sync ke liye stable internet zaroori hai",
          "Large folders ko ek saath upload mat karo",
          "Account password ya 2FA updated rakho"
        ],
        faqs: [
          { q: "Files sync nahi ho rahi par upload show ho raha?", a: "Client stuck ho sakta hai. Pause/resume aur re-login try karo." },
          { q: "Storage full warning kyu aati hai?", a: "Cloud quota cross hone par new sync ruk jaati hai." },
          { q: "Multiple devices pe conflict kyu?", a: "Same file ko different devices edit karne se version conflict hota hai." },
          { q: "Offline file kab sync hogi?", a: "Internet stable hote hi auto sync resume ho sakti hai." }
        ],
        related: [
          { title: "OneDrive sync", slug: "onedrive-sync-issue", category: "computer" },
          { title: "Laptop WiFi Nahi Chal Raha", slug: "laptop-wifi-nahi-chal-raha", category: "computer" }
        ],
        keywords: ["google drive sync issue", "sync problem", "cloud issue", "upload issue"],
        variants: ["google drive sync", "sync nahi ho raha", "cloud problem", "backup issue"]
      },
      {
        slug: "computer-hang-ho-raha-hai",
        category: "computer",
        metaTitle: "Computer Hang Ho Raha Hai? 10 Fix (2026) | JharForm",
        metaDescription: "Computer bar-bar hang ho raha hai? RAM, disk, heat aur startup load manage karo.",
        h1: "Computer hanging — Speed Fix Guide",
        lastUpdated: "May 2026",
        readingTime: "5 min",
        difficulty: "Easy",
        description: "Computer hanging jaisi performance issue mein RAM, disk, heat aur startup load sab combine hote hain. Isliye slow jaisa feel hota hai aur hang bhi ho sakta hai.",
        steps: [
          { title: "Restart aur startup control karo", detail: "Heavy startup apps disable karo aur device reboot karo." },
          { title: "RAM aur disk usage dekhो", detail: "Task Manager mein high usage app identify karo." },
          { title: "Temp files aur cache clear karo", detail: "Browser cache, downloads aur temp files clean karo." },
          { title: "Heat check karo", detail: "Overheating se CPU throttle hota hai aur hang hota hai." },
          { title: "Windows update aur driver check karo", detail: "Buggy driver performance ko girata hai." },
          { title: "Upgrade plan karo", detail: "SSD + RAM upgrade long-term best solution hai." }
        ],
        screenshots: [
          { caption: "Windows Task Manager showing CPU, RAM, and disk usage for Computer hanging", alt: "Windows performance monitor for Computer hanging", type: "browser", mockupType: "computer-hang-ho-raha-hai-task-manager" },
          { caption: "Startup apps and storage cleanup screen for Computer hanging", alt: "Windows performance cleanup screen for Computer hanging", type: "browser", mockupType: "computer-hang-ho-raha-hai-cleanup" }
        ],
        sources: [
          { title: "Microsoft Support", url: "https://support.microsoft.com/en-us/windows/tips-to-improve-pc-performance-in-windows-b437e559-a770-430d-9781-8e680520559e", icon: "🪟" }
        ],
        proTips: [
          "Regular restart se memory leak recover hota hai",
          "Browser extensions kam rakho",
          "SSD + RAM combo सबसे smart upgrade hai"
        ],
        faqs: [
          { q: "Hang aur slow mein difference kya hai?", a: "Slow gradually hota hai, hang mein device temporary respond nahi karta." },
          { q: "RAM badhane se farak padega?", a: "Agar multitasking zyada hai to RAM upgrade kaafi help karti hai." },
          { q: "SSD sabse effective upgrade hai?", a: "Haan, boot aur app launch speed mein huge improvement aata hai." },
          { q: "Virus se bhi hang hota hai?", a: "Haan, malware hidden resources use karke system slow kar sakta hai." }
        ],
        related: [
          { title: "Google Drive sync", slug: "google-drive-sync-issue", category: "computer" },
          { title: "Laptop WiFi Nahi Chal Raha", slug: "laptop-wifi-nahi-chal-raha", category: "computer" }
        ],
        keywords: ["computer hang ho raha hai", "slow pc", "computer hang", "performance issue"],
        variants: ["computer hanging", "computer slow", "pc slow", "hang issue"]
      }
    ]
  };
