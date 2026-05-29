import { AdaptiveMockup } from "./AdaptiveMockup";

export type MockupType = string;

export type KnownMockupType =
  | "android-network-mode"
  | "android-apn"
  | "android-battery-chart"
  | "android-battery-apps"
  | "playstore-pending"
  | "android-app-storage"
  | "phonepe-transaction"
  | "upi-dispute"
  | "amazon-refund"
  | "bank-passbook"
  | "myjio-app"
  | "android-network-4g"
  | "whatsapp-banned"
  | "whatsapp-email"
  | "gmail-login"
  | "google-recovery"
  | "jharsewa-portal"
  | "uidai-update"
  | "uidai-documents"
  | "android-settings-storage"
  | "android-settings-battery"
  | "android-settings-apps"
  | "android-settings-network"
  | "android-settings-sound"
  | "android-settings-display"
  | "android-settings-security"
  | "android-settings-system"
  | "android-settings-location"
  | "android-settings-bluetooth"
  | "android-settings-sim"
  | "android-settings-hotspot"
  | "android-settings-notifications"
  | "android-settings-camera"
  | "android-settings-volume"
  | "android-settings-keyboard"
  | "android-settings-ringtone"
  | "android-settings-sdcard"
  | "android-settings-safemode"
  | "android-settings-screentime"
  | "whatsapp-ban-real"
  | "whatsapp-privacy-last-seen-settings"
  | "whatsapp-privacy-support-flow"
  | "whatsapp-otp-help-screen"
  | "whatsapp-restore-setup-screen"
  | "whatsapp-status-upload-progress"
  | "phonepe-payment-failed"
  | "phonepe-payment-pending"
  | "youtube-quality-selector"
  | "instagram-login-activity"
  | "google-account-disabled-real"
  | "android-wifi-no-internet"
  | "windows-device-manager"
  | "paytm-kyc-pending-real"
  | "sbi-card-blocked"
  | "instagram-recovery-screen"
  | "android-otp-sms"
  | "gpay-failed-transaction"
  | "youtube-buffering-screen"
  | "android-app-crash"
  | "windows-slow-startup"
  | "phone-water-damage"
  | "cockroach-removal-setup"
  | "stain-removal-oil"
  | "sleep-alarm-schedule"
  | "self-confidence-tracker"
  | "study-pomodoro-timer"
  | "android-safe-mode-boot"
  | "laptop-overheat-cpu"
  | "antivirus-scan-result"
  | "upi-pin-reset-screen"
  | "whatsapp-restore-screen"
  | "whatsapp-status-upload-stuck"
  | "youtube-account-suspended-real"
  | "google-photos-storage-full-real"
  | "android-sim-settings"
  | "pan-card-portal"
  | "dl-renewal-portal"
  | "cyber-crime-complaint"
  | "sbi-netbanking-blocked";

function AndroidStatusBar({ time = "9:41" }: { time?: string }) {
  return (
    <div className="flex items-center justify-between px-3 py-1 bg-inherit" style={{ fontSize: 10, fontFamily: "sans-serif" }}>
      <span style={{ fontWeight: 600, color: "#111" }}>{time}</span>
      <div className="flex items-center gap-1">
        <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
          <rect x="0" y="6" width="2" height="4" rx="0.5" fill="#111"/>
          <rect x="3" y="4" width="2" height="6" rx="0.5" fill="#111"/>
          <rect x="6" y="2" width="2" height="8" rx="0.5" fill="#111"/>
          <rect x="9" y="0" width="2" height="10" rx="0.5" fill="#111"/>
        </svg>
        <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
          <path d="M7.5 2.5C9.8 2.5 11.8 3.5 13.2 5.1L14.5 3.7C12.7 1.8 10.2 0.5 7.5 0.5C4.8 0.5 2.3 1.8 0.5 3.7L1.8 5.1C3.2 3.5 5.2 2.5 7.5 2.5Z" fill="#111"/>
          <path d="M7.5 5.5C9 5.5 10.3 6.1 11.3 7.1L12.6 5.7C11.2 4.4 9.4 3.5 7.5 3.5C5.6 3.5 3.8 4.4 2.4 5.7L3.7 7.1C4.7 6.1 6 5.5 7.5 5.5Z" fill="#111"/>
          <circle cx="7.5" cy="9.5" r="1.5" fill="#111"/>
        </svg>
        <div className="flex items-center gap-0.5">
          <div style={{ width: 20, height: 10, border: "1.5px solid #111", borderRadius: 2, padding: 1.5, display: "flex", alignItems: "center" }}>
            <div style={{ width: "80%", height: "100%", background: "#22c55e", borderRadius: 1 }}/>
          </div>
        </div>
      </div>
    </div>
  );
}

function AndroidTopBar({ title, back = true }: { title: string; back?: boolean }) {
  return (
    <div className="flex items-center gap-3 px-3 py-2 bg-white" style={{ borderBottom: "1px solid #e5e7eb" }}>
      {back && (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" fill="#374151"/>
        </svg>
      )}
      <span style={{ fontSize: 16, fontWeight: 500, color: "#111", fontFamily: "sans-serif" }}>{title}</span>
    </div>
  );
}

function ChromeBar({ url }: { url: string }) {
  return (
    <div style={{ background: "#f1f3f4", padding: "6px 12px", display: "flex", alignItems: "center", gap: 8 }}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="#5f6368">
        <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
      </svg>
      <span style={{ fontSize: 11, color: "#202124", flex: 1, background: "white", borderRadius: 12, padding: "3px 10px", border: "1px solid #ddd", fontFamily: "sans-serif" }}>
        {url}
      </span>
    </div>
  );
}

function Row({ label, value, sub, highlight }: { label: string; value?: string; sub?: string; highlight?: boolean }) {
  return (
    <div style={{ padding: "12px 16px", borderBottom: "1px solid #f3f4f6", background: highlight ? "#f0fdf4" : "white" }}>
      <div style={{ fontSize: 13, color: "#374151", fontFamily: "sans-serif" }}>{label}</div>
      {value && <div style={{ fontSize: 12, color: highlight ? "#16a34a" : "#6b7280", marginTop: 2, fontFamily: "sans-serif" }}>{value}</div>}
      {sub && <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 1, fontFamily: "sans-serif" }}>{sub}</div>}
    </div>
  );
}

export function AndroidNetworkMode() {
  return (
    <div style={{ background: "#f9fafb", height: "100%", display: "flex", flexDirection: "column" }}>
      <AndroidStatusBar />
      <AndroidTopBar title="Network Mode" />
      <div style={{ padding: "8px 0", flex: 1 }}>
        <div style={{ padding: "8px 16px 4px", fontSize: 11, color: "#6b7280", fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: 0.5 }}>Select network type</div>
        {[
          { label: "LTE/4G/3G/2G (Auto connect)", selected: true },
          { label: "LTE/4G only", selected: false },
          { label: "3G/2G (Auto connect)", selected: false },
          { label: "2G only", selected: false },
        ].map((item) => (
          <div key={item.label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", background: "white", borderBottom: "1px solid #f3f4f6" }}>
            <span style={{ fontSize: 14, color: "#111", fontFamily: "sans-serif" }}>{item.label}</span>
            <div style={{ width: 20, height: 20, borderRadius: "50%", border: item.selected ? "6px solid #1a73e8" : "2px solid #9ca3af", background: "white" }} />
          </div>
        ))}
        <div style={{ padding: "12px 16px", background: "#eff6ff", margin: "8px", borderRadius: 8 }}>
          <p style={{ fontSize: 12, color: "#1d4ed8", fontFamily: "sans-serif" }}>✓ Auto connect best network speed deta hai. Manual 4G-only tab use karo jab network stable ho.</p>
        </div>
      </div>
    </div>
  );
}

export function AndroidApn() {
  return (
    <div style={{ background: "#f9fafb", height: "100%", display: "flex", flexDirection: "column" }}>
      <AndroidStatusBar />
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 16px", background: "#1a73e8" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
          </svg>
          <span style={{ fontSize: 16, fontWeight: 500, color: "white", fontFamily: "sans-serif" }}>Access Point Names</span>
        </div>
        <span style={{ color: "white", fontSize: 20, cursor: "pointer" }}>⋮</span>
      </div>
      <div style={{ padding: "0", flex: 1 }}>
        {[
          { name: "Jio 4G", apn: "jionet", selected: true },
          { name: "Airtel Internet", apn: "airtelgprs.com", selected: false },
          { name: "Vi (Vodafone)", apn: "portalnmms", selected: false },
        ].map((item) => (
          <div key={item.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", background: "white", borderBottom: "1px solid #f3f4f6" }}>
            <div>
              <div style={{ fontSize: 14, color: "#111", fontFamily: "sans-serif", fontWeight: 500 }}>{item.name}</div>
              <div style={{ fontSize: 12, color: "#6b7280", fontFamily: "sans-serif" }}>{item.apn}</div>
            </div>
            <div style={{ width: 20, height: 20, borderRadius: "50%", border: item.selected ? "6px solid #1a73e8" : "2px solid #9ca3af" }} />
          </div>
        ))}
        <div style={{ padding: "12px 16px", background: "#fef3c7", margin: "8px", borderRadius: 8 }}>
          <p style={{ fontSize: 12, color: "#92400e", fontFamily: "sans-serif" }}>⋮ menu &gt; Reset to default se APN settings reset ho jaati hain.</p>
        </div>
      </div>
    </div>
  );
}

export function AndroidBatteryChart() {
  const bars = [45, 60, 30, 80, 55, 40, 90, 70, 50, 65, 85, 55];
  return (
    <div style={{ background: "#f9fafb", height: "100%", display: "flex", flexDirection: "column" }}>
      <AndroidStatusBar />
      <AndroidTopBar title="Battery" />
      <div style={{ flex: 1, overflowY: "auto", background: "white" }}>
        <div style={{ padding: "16px", textAlign: "center", borderBottom: "1px solid #f3f4f6" }}>
          <div style={{ fontSize: 48, fontWeight: 300, color: "#111", fontFamily: "sans-serif" }}>34<span style={{ fontSize: 24 }}>%</span></div>
          <div style={{ fontSize: 12, color: "#6b7280", fontFamily: "sans-serif" }}>Est. 2h 14m remaining</div>
        </div>
        <div style={{ padding: "12px 16px" }}>
          <div style={{ fontSize: 13, color: "#374151", fontFamily: "sans-serif", marginBottom: 8, fontWeight: 500 }}>Battery usage — last 24 hours</div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 60 }}>
            {bars.map((h, i) => (
              <div key={i} style={{ flex: 1, height: `${h}%`, background: i === 9 ? "#ef4444" : "#1a73e8", borderRadius: "2px 2px 0 0", opacity: 0.7 + i * 0.02 }} />
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "#9ca3af", marginTop: 4, fontFamily: "sans-serif" }}>
            <span>12am</span><span>6am</span><span>12pm</span><span>Now</span>
          </div>
        </div>
        <div style={{ margin: "0 16px 8px", background: "#fef2f2", borderRadius: 8, padding: "10px 12px" }}>
          <div style={{ fontSize: 13, color: "#991b1b", fontFamily: "sans-serif", fontWeight: 600 }}>⚠ Screen — 35%</div>
          <div style={{ fontSize: 12, color: "#7f1d1d", fontFamily: "sans-serif" }}>Sabse zyada battery le raha hai</div>
        </div>
        <Row label="Mobile Network Standby" value="18% — Background data use" />
        <Row label="Android System" value="12% — Normal" />
        <Row label="Wi-Fi" value="8%" />
      </div>
    </div>
  );
}

export function AndroidBatteryApps() {
  const apps = [
    { name: "Facebook", pct: 23, color: "#1877f2" },
    { name: "Instagram", pct: 18, color: "#e1306c" },
    { name: "Google Maps", pct: 12, color: "#34a853" },
    { name: "Chrome", pct: 9, color: "#fbbc04" },
    { name: "WhatsApp", pct: 8, color: "#25d366" },
    { name: "YouTube", pct: 7, color: "#ff0000" },
  ];
  return (
    <div style={{ background: "#f9fafb", height: "100%", display: "flex", flexDirection: "column" }}>
      <AndroidStatusBar />
      <AndroidTopBar title="Battery Usage" />
      <div style={{ flex: 1, background: "white" }}>
        <div style={{ padding: "10px 16px", fontSize: 12, color: "#6b7280", fontFamily: "sans-serif", borderBottom: "1px solid #f3f4f6" }}>
          Since last full charge • 6h 42m ago
        </div>
        {apps.map((app) => (
          <div key={app.name} style={{ padding: "12px 16px", borderBottom: "1px solid #f3f4f6", display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: 8, background: app.color, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "white", fontSize: 16, fontWeight: 700 }}>{app.name[0]}</span>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, color: "#111", fontFamily: "sans-serif", fontWeight: 500 }}>{app.name}</div>
              <div style={{ width: "100%", height: 4, background: "#f3f4f6", borderRadius: 2, marginTop: 4 }}>
                <div style={{ width: `${app.pct * 4}%`, height: "100%", background: app.color, borderRadius: 2 }} />
              </div>
            </div>
            <span style={{ fontSize: 14, fontWeight: 600, color: app.pct > 15 ? "#dc2626" : "#374151", fontFamily: "sans-serif" }}>{app.pct}%</span>
          </div>
        ))}
        <div style={{ padding: "10px 16px", background: "#fef3c7", margin: "8px", borderRadius: 8 }}>
          <p style={{ fontSize: 12, color: "#92400e", fontFamily: "sans-serif" }}>💡 Facebook aur Instagram uninstall karo ya Lite version use karo — battery 30%+ bachegi</p>
        </div>
      </div>
    </div>
  );
}

export function PlayStorePending() {
  return (
    <div style={{ background: "#f9fafb", height: "100%", display: "flex", flexDirection: "column" }}>
      <AndroidStatusBar />
      <div style={{ background: "#1a73e8", padding: "10px 16px", display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{ fontSize: 22, fontWeight: 700, color: "white", fontFamily: "sans-serif" }}>▶ Google Play</span>
      </div>
      <div style={{ flex: 1, background: "white", overflowY: "auto" }}>
        <div style={{ padding: "16px", borderBottom: "1px solid #f3f4f6", display: "flex", gap: 12 }}>
          <div style={{ width: 64, height: 64, borderRadius: 12, background: "#e8f5e9", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28 }}>📲</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 16, fontWeight: 600, color: "#111", fontFamily: "sans-serif" }}>WhatsApp Messenger</div>
            <div style={{ fontSize: 12, color: "#6b7280", fontFamily: "sans-serif" }}>WhatsApp LLC</div>
            <div style={{ fontSize: 12, color: "#6b7280", fontFamily: "sans-serif", marginTop: 2 }}>★★★★☆ 4.2 • 5B+ downloads</div>
          </div>
        </div>
        <div style={{ padding: "16px" }}>
          <div style={{ width: "100%", height: 4, background: "#e5e7eb", borderRadius: 2, marginBottom: 8 }}>
            <div style={{ width: "0%", height: "100%", background: "#9ca3af", borderRadius: 2 }} />
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <div style={{ flex: 1, background: "#f3f4f6", border: "1px solid #e5e7eb", borderRadius: 4, padding: "10px 0", textAlign: "center" }}>
              <span style={{ fontSize: 13, color: "#6b7280", fontFamily: "sans-serif", fontWeight: 500 }}>Pending...</span>
            </div>
            <div style={{ background: "#f3f4f6", border: "1px solid #e5e7eb", borderRadius: 4, padding: "10px 16px", textAlign: "center" }}>
              <span style={{ fontSize: 13, color: "#374151", fontFamily: "sans-serif" }}>Cancel</span>
            </div>
          </div>
          <div style={{ marginTop: 8, padding: "8px 12px", background: "#fef3c7", borderRadius: 6 }}>
            <p style={{ fontSize: 12, color: "#92400e", fontFamily: "sans-serif" }}>Download pending hai — WiFi check karo ya cache clear karo</p>
          </div>
        </div>
        <div style={{ padding: "0 16px" }}>
          <div style={{ fontSize: 13, color: "#374151", fontFamily: "sans-serif", fontWeight: 500, marginBottom: 8 }}>Downloads in queue (3)</div>
          {["Telegram", "Google Pay"].map(n => (
            <div key={n} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0", borderTop: "1px solid #f3f4f6" }}>
              <div style={{ width: 40, height: 40, borderRadius: 8, background: "#f3f4f6" }} />
              <div style={{ fontSize: 13, color: "#374151", fontFamily: "sans-serif" }}>{n}</div>
              <div style={{ marginLeft: "auto", fontSize: 12, color: "#9ca3af", fontFamily: "sans-serif" }}>Waiting</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function AndroidAppStorage() {
  return (
    <div style={{ background: "#f9fafb", height: "100%", display: "flex", flexDirection: "column" }}>
      <AndroidStatusBar />
      <AndroidTopBar title="App info — Play Store" />
      <div style={{ flex: 1, background: "white" }}>
        <div style={{ padding: "16px", textAlign: "center", borderBottom: "1px solid #f3f4f6" }}>
          <div style={{ width: 64, height: 64, borderRadius: 12, background: "#e8f5e9", margin: "0 auto 8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28 }}>▶</div>
          <div style={{ fontSize: 16, fontWeight: 600, fontFamily: "sans-serif" }}>Google Play Store</div>
          <div style={{ fontSize: 12, color: "#6b7280", fontFamily: "sans-serif" }}>com.android.vending • v39.4.28</div>
        </div>
        <div style={{ padding: "8px 0" }}>
          <div style={{ padding: "8px 16px", fontSize: 11, color: "#6b7280", fontFamily: "sans-serif", textTransform: "uppercase" }}>Storage & cache</div>
          <Row label="App storage" value="152 MB" />
          <Row label="Cache" value="89 MB" />
          <Row label="Total" value="241 MB" />
          <div style={{ padding: "12px 16px", display: "flex", gap: 8 }}>
            <div style={{ flex: 1, background: "#1a73e8", borderRadius: 4, padding: "10px", textAlign: "center" }}>
              <span style={{ fontSize: 13, color: "white", fontFamily: "sans-serif", fontWeight: 500 }}>Clear Cache</span>
            </div>
            <div style={{ flex: 1, background: "#f3f4f6", borderRadius: 4, padding: "10px", textAlign: "center" }}>
              <span style={{ fontSize: 13, color: "#374151", fontFamily: "sans-serif" }}>Clear Data</span>
            </div>
          </div>
          <div style={{ padding: "8px 16px", background: "#eff6ff", margin: "0 16px", borderRadius: 8 }}>
            <p style={{ fontSize: 12, color: "#1d4ed8", fontFamily: "sans-serif" }}>✓ Sirf Clear Cache dabao — Clear Data se account remove ho sakta hai</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PhonePeTransaction() {
  return (
    <div style={{ background: "#f9fafb", height: "100%", display: "flex", flexDirection: "column" }}>
      <AndroidStatusBar time="10:23" />
      <div style={{ background: "#5f259f", padding: "10px 16px", display: "flex", alignItems: "center", gap: 12 }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
        </svg>
        <span style={{ fontSize: 16, fontWeight: 500, color: "white", fontFamily: "sans-serif" }}>Transaction History</span>
      </div>
      <div style={{ flex: 1, background: "white" }}>
        <div style={{ padding: "8px 16px", fontSize: 11, color: "#6b7280", fontFamily: "sans-serif", background: "#f9fafb", borderBottom: "1px solid #f3f4f6" }}>
          May 2026
        </div>
        {[
          { name: "Rahul Kumar", amount: "₹ 500", status: "FAILED", time: "2:34 PM", upi: "rahul@paytm", color: "#dc2626" },
          { name: "Electricity Bill", amount: "₹ 1,240", status: "SUCCESS", time: "11:05 AM", upi: "BSES Delhi", color: "#16a34a" },
          { name: "Recharge", amount: "₹ 239", status: "SUCCESS", time: "9:15 AM", upi: "Jio Prepaid", color: "#16a34a" },
        ].map((txn, i) => (
          <div key={i} style={{ padding: "12px 16px", borderBottom: "1px solid #f3f4f6", display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 40, height: 40, borderRadius: "50%", background: i === 0 ? "#fef2f2" : "#f0fdf4", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: 18 }}>{i === 0 ? "👤" : i === 1 ? "⚡" : "📶"}</span>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 500, color: "#111", fontFamily: "sans-serif" }}>{txn.name}</div>
              <div style={{ fontSize: 11, color: "#6b7280", fontFamily: "sans-serif" }}>{txn.upi} • {txn.time}</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: txn.color, fontFamily: "sans-serif" }}>{txn.amount}</div>
              <div style={{ fontSize: 11, color: txn.color, fontFamily: "sans-serif", fontWeight: 500 }}>{txn.status}</div>
            </div>
          </div>
        ))}
        <div style={{ padding: "10px 16px", background: "#fef2f2", margin: "8px", borderRadius: 8 }}>
          <p style={{ fontSize: 12, color: "#991b1b", fontFamily: "sans-serif" }}>Failed transaction pe tap karo → Raise Dispute karein</p>
        </div>
      </div>
    </div>
  );
}

export function UpiDispute() {
  return (
    <div style={{ background: "#f9fafb", height: "100%", display: "flex", flexDirection: "column" }}>
      <AndroidStatusBar time="10:24" />
      <div style={{ background: "#5f259f", padding: "10px 16px", display: "flex", alignItems: "center", gap: 12 }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
        </svg>
        <span style={{ fontSize: 16, fontWeight: 500, color: "white", fontFamily: "sans-serif" }}>Transaction Details</span>
      </div>
      <div style={{ flex: 1, background: "white", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "20px 16px", textAlign: "center", borderBottom: "1px solid #f3f4f6" }}>
          <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#fef2f2", margin: "0 auto 8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 28 }}>✗</span>
          </div>
          <div style={{ fontSize: 24, fontWeight: 700, color: "#dc2626", fontFamily: "sans-serif" }}>₹ 500</div>
          <div style={{ fontSize: 14, color: "#dc2626", fontWeight: 600, fontFamily: "sans-serif" }}>Payment Failed</div>
        </div>
        <div style={{ padding: "0 16px" }}>
          <Row label="To" value="Rahul Kumar • rahul@paytm" />
          <Row label="UPI Ref No." value="426789034512345" />
          <Row label="Date & Time" value="23 May 2026 • 2:34 PM" />
          <Row label="Bank" value="State Bank of India" />
          <Row label="Status" value="Amount debited, reversal pending" sub="Auto-reversal in 5-7 working days" />
        </div>
        <div style={{ marginTop: "auto", padding: "16px", display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ background: "#5f259f", borderRadius: 8, padding: "14px", textAlign: "center" }}>
            <span style={{ fontSize: 15, color: "white", fontFamily: "sans-serif", fontWeight: 600 }}>Raise Dispute</span>
          </div>
          <div style={{ background: "#f3f4f6", borderRadius: 8, padding: "12px", textAlign: "center" }}>
            <span style={{ fontSize: 14, color: "#374151", fontFamily: "sans-serif" }}>Share Receipt</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AmazonRefund() {
  return (
    <div style={{ background: "#f9fafb", height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ background: "#131921", padding: "8px 12px", display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ fontSize: 18, fontWeight: 700, color: "#ff9900", fontFamily: "sans-serif" }}>amazon</span>
        <div style={{ flex: 1, background: "white", borderRadius: 4, padding: "4px 8px", fontSize: 12, color: "#6b7280", fontFamily: "sans-serif" }}>Search</div>
      </div>
      <ChromeBar url="amazon.in/gp/your-account/order-history" />
      <div style={{ flex: 1, background: "white", overflowY: "auto" }}>
        <div style={{ padding: "12px 16px", borderBottom: "2px solid #ff9900" }}>
          <div style={{ fontSize: 16, fontWeight: 600, color: "#111", fontFamily: "sans-serif" }}>Your Orders</div>
        </div>
        <div style={{ padding: "12px 16px", borderBottom: "1px solid #e5e7eb" }}>
          <div style={{ fontSize: 12, color: "#6b7280", fontFamily: "sans-serif", marginBottom: 6 }}>Ordered: 18 May 2026 | Order# 402-4598871-0034521</div>
          <div style={{ display: "flex", gap: 10, marginBottom: 8 }}>
            <div style={{ width: 56, height: 56, background: "#f3f4f6", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>📦</div>
            <div>
              <div style={{ fontSize: 13, color: "#111", fontFamily: "sans-serif", fontWeight: 500 }}>Boat Rockerz 255 Pro+ Wireless</div>
              <div style={{ fontSize: 12, color: "#6b7280", fontFamily: "sans-serif" }}>₹ 1,299 • Return approved</div>
            </div>
          </div>
          <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 6, padding: "8px 12px" }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#15803d", fontFamily: "sans-serif" }}>✓ Refund Initiated</div>
            <div style={{ fontSize: 12, color: "#166534", fontFamily: "sans-serif", marginTop: 2 }}>₹ 1,299 → SBI Debit Card ending 4521</div>
            <div style={{ fontSize: 12, color: "#16a34a", fontFamily: "sans-serif", marginTop: 2 }}>Expected by: 28 May 2026 (3-5 days)</div>
          </div>
        </div>
        <div style={{ padding: "8px 16px", background: "#eff6ff", margin: "8px", borderRadius: 8 }}>
          <p style={{ fontSize: 12, color: "#1d4ed8", fontFamily: "sans-serif" }}>📧 Refund confirmation email check karo — transaction reference number wahan hoga</p>
        </div>
      </div>
    </div>
  );
}

export function BankPassbook() {
  const entries = [
    { date: "23 May", desc: "REFUND-AMAZ402458", credit: "₹1,299", debit: "", balance: "₹24,340" },
    { date: "22 May", desc: "UPI/PHONEPE/TXN426", credit: "", debit: "₹500", balance: "₹23,041" },
    { date: "22 May", desc: "SALARY CREDIT MAY", credit: "₹18,000", debit: "", balance: "₹23,541" },
    { date: "20 May", desc: "ELECTRICITY BILL", credit: "", debit: "₹1,240", balance: "₹5,541" },
  ];
  return (
    <div style={{ background: "#f9fafb", height: "100%", display: "flex", flexDirection: "column" }}>
      <AndroidStatusBar time="11:05" />
      <div style={{ background: "#1a3a6b", padding: "10px 16px", display: "flex", alignItems: "center", gap: 12 }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
        </svg>
        <span style={{ fontSize: 16, fontWeight: 500, color: "white", fontFamily: "sans-serif" }}>Account Statement</span>
      </div>
      <div style={{ background: "#1a3a6b", padding: "12px 16px 16px" }}>
        <div style={{ fontSize: 11, color: "#93c5fd", fontFamily: "sans-serif" }}>SBI Savings Account</div>
        <div style={{ fontSize: 20, fontWeight: 700, color: "white", fontFamily: "sans-serif", marginTop: 2 }}>₹ 24,340.00</div>
        <div style={{ fontSize: 11, color: "#93c5fd", fontFamily: "sans-serif" }}>Acct: XXXX XXXX 4521 • May 2026</div>
      </div>
      <div style={{ flex: 1, background: "white" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 4fr 2fr 2fr 2fr", padding: "6px 8px", background: "#f3f4f6", borderBottom: "1px solid #e5e7eb" }}>
          {["Date", "Description", "Credit", "Debit", "Balance"].map(h => (
            <span key={h} style={{ fontSize: 10, color: "#6b7280", fontFamily: "sans-serif", fontWeight: 600 }}>{h}</span>
          ))}
        </div>
        {entries.map((e, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "2fr 4fr 2fr 2fr 2fr", padding: "8px", borderBottom: "1px solid #f3f4f6", background: i === 0 ? "#f0fdf4" : "white" }}>
            <span style={{ fontSize: 10, color: "#374151", fontFamily: "sans-serif" }}>{e.date}</span>
            <span style={{ fontSize: 10, color: i === 0 ? "#15803d" : "#374151", fontFamily: "sans-serif", fontWeight: i === 0 ? 600 : 400 }}>{e.desc}</span>
            <span style={{ fontSize: 10, color: "#16a34a", fontFamily: "sans-serif", fontWeight: 600 }}>{e.credit}</span>
            <span style={{ fontSize: 10, color: "#dc2626", fontFamily: "sans-serif" }}>{e.debit}</span>
            <span style={{ fontSize: 10, color: "#111", fontFamily: "sans-serif" }}>{e.balance}</span>
          </div>
        ))}
        <div style={{ padding: "8px 12px", background: "#f0fdf4", margin: "8px", borderRadius: 6 }}>
          <p style={{ fontSize: 11, color: "#15803d", fontFamily: "sans-serif" }}>✓ REFUND credit entry dikh raha hai — 23 May ko ₹1,299 wapas aaya</p>
        </div>
      </div>
    </div>
  );
}

export function MyJioApp() {
  return (
    <div style={{ background: "#0a0a3e", height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "6px 12px", background: "#0a0a3e" }}>
        <span style={{ fontSize: 10, fontWeight: 600, color: "white" }}>9:41</span>
        <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
          <span style={{ fontSize: 10, color: "white" }}>📶 🔋</span>
        </div>
      </div>
      <div style={{ background: "#0a0a3e", padding: "8px 16px 16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <span style={{ fontSize: 18, fontWeight: 700, color: "#00b9f5", fontFamily: "sans-serif" }}>MyJio</span>
          <span style={{ fontSize: 11, color: "#93c5fd", fontFamily: "sans-serif" }}>+91 98765 43210</span>
        </div>
        <div style={{ background: "#1a1a5e", borderRadius: 12, padding: "12px" }}>
          <div style={{ fontSize: 11, color: "#93c5fd", fontFamily: "sans-serif" }}>Daily Data Used</div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 4, margin: "4px 0" }}>
            <span style={{ fontSize: 28, fontWeight: 700, color: "white", fontFamily: "sans-serif" }}>1.2</span>
            <span style={{ fontSize: 14, color: "#93c5fd", fontFamily: "sans-serif" }}>/ 1.5 GB</span>
          </div>
          <div style={{ width: "100%", height: 8, background: "#374151", borderRadius: 4 }}>
            <div style={{ width: "80%", height: "100%", background: "linear-gradient(90deg, #00b9f5, #e11d48)", borderRadius: 4 }} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
            <span style={{ fontSize: 10, color: "#f87171", fontFamily: "sans-serif" }}>⚠ FUP limit paas aa rahi hai</span>
            <span style={{ fontSize: 10, color: "#6b7280", fontFamily: "sans-serif" }}>300 MB bachi</span>
          </div>
        </div>
      </div>
      <div style={{ flex: 1, background: "#f9fafb", borderRadius: "20px 20px 0 0", padding: "16px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 8 }}>
          {[
            { label: "Plan", value: "JioTrue 5G 239", icon: "📶" },
            { label: "Validity", value: "28 days left", icon: "📅" },
            { label: "Night Data", value: "Unlimited (2am-6am)", icon: "🌙" },
            { label: "Voice", value: "Unlimited calls", icon: "📞" },
          ].map((c) => (
            <div key={c.label} style={{ background: "white", borderRadius: 10, padding: "10px", boxShadow: "0 1px 3px #0001" }}>
              <div style={{ fontSize: 16 }}>{c.icon}</div>
              <div style={{ fontSize: 10, color: "#6b7280", fontFamily: "sans-serif", marginTop: 2 }}>{c.label}</div>
              <div style={{ fontSize: 12, fontWeight: 600, color: "#111", fontFamily: "sans-serif" }}>{c.value}</div>
            </div>
          ))}
        </div>
        <div style={{ background: "#fef3c7", borderRadius: 8, padding: "10px 12px" }}>
          <p style={{ fontSize: 12, color: "#92400e", fontFamily: "sans-serif" }}>💡 FUP khatam hone se pehle ₹11 wala 1GB add-on lao ya raat 2am tak wait karo</p>
        </div>
      </div>
    </div>
  );
}

export function AndroidNetwork4G() {
  return <AndroidNetworkMode />;
}

export function WhatsAppBanned() {
  return (
    <div style={{ background: "#f9fafb", height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "6px 12px 2px", background: "#128C7E" }}>
        <span style={{ fontSize: 10, fontWeight: 600, color: "white" }}>9:41</span>
        <div style={{ fontSize: 10, color: "white" }}>📶🔋</div>
      </div>
      <div style={{ background: "#128C7E", padding: "10px 16px 12px", display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{ fontSize: 22, color: "white", fontWeight: 700, fontFamily: "sans-serif" }}>WhatsApp</span>
      </div>
      <div style={{ flex: 1, background: "#e5ddd5", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px 20px" }}>
        <div style={{ background: "white", borderRadius: 16, padding: "24px 20px", textAlign: "center", boxShadow: "0 2px 12px #0002", maxWidth: 280 }}>
          <div style={{ width: 64, height: 64, background: "#fef2f2", borderRadius: "50%", margin: "0 auto 12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 32 }}>⛔</span>
          </div>
          <div style={{ fontSize: 17, fontWeight: 700, color: "#111", fontFamily: "sans-serif", marginBottom: 8 }}>Your account has been banned</div>
          <div style={{ fontSize: 13, color: "#6b7280", fontFamily: "sans-serif", lineHeight: 1.5, marginBottom: 16 }}>
            WhatsApp ke Terms of Service violate hue hain. Agar yeh galat lagne wala hai to appeal karo.
          </div>
          <div style={{ background: "#25d366", borderRadius: 8, padding: "12px", marginBottom: 8 }}>
            <span style={{ fontSize: 14, fontWeight: 600, color: "white", fontFamily: "sans-serif" }}>Request a Review</span>
          </div>
          <div style={{ fontSize: 11, color: "#9ca3af", fontFamily: "sans-serif" }}>Case #WA-2026-4857291</div>
        </div>
        <div style={{ marginTop: 12, background: "#fef3c7", borderRadius: 8, padding: "8px 12px" }}>
          <p style={{ fontSize: 12, color: "#92400e", fontFamily: "sans-serif", textAlign: "center" }}>GBWhatsApp ya modded app use kiya tha? Turant uninstall karo phir official WhatsApp se Request a Review karo</p>
        </div>
      </div>
    </div>
  );
}

export function WhatsAppEmail() {
  return (
    <div style={{ background: "#f9fafb", height: "100%", display: "flex", flexDirection: "column" }}>
      <ChromeBar url="mail.google.com/mail" />
      <div style={{ background: "#25d366", padding: "8px 16px", display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ fontSize: 14, fontWeight: 600, color: "white", fontFamily: "sans-serif" }}>WhatsApp Support • Reply</span>
      </div>
      <div style={{ flex: 1, background: "white", padding: "16px", overflowY: "auto" }}>
        <div style={{ borderBottom: "1px solid #e5e7eb", paddingBottom: 12, marginBottom: 12 }}>
          <div style={{ fontSize: 15, fontWeight: 600, color: "#111", fontFamily: "sans-serif", marginBottom: 4 }}>Re: Account Banned — +91 987XXXXX10</div>
          <div style={{ fontSize: 12, color: "#6b7280", fontFamily: "sans-serif" }}>From: <span style={{ color: "#1a73e8" }}>support@whatsapp.com</span></div>
          <div style={{ fontSize: 12, color: "#6b7280", fontFamily: "sans-serif" }}>23 May 2026 • 11:42 AM</div>
        </div>
        <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 8, padding: "12px", marginBottom: 12 }}>
          <div style={{ fontSize: 12, color: "#15803d", fontWeight: 600, fontFamily: "sans-serif", marginBottom: 4 }}>Case Reference: WA-2026-4857291</div>
          <div style={{ fontSize: 12, color: "#166534", fontFamily: "sans-serif", lineHeight: 1.6 }}>
            Aapki request receive ho gayi hai. Hamari team 24-48 hours mein review karegi. Tab tak please official WhatsApp use karo aur modified apps delete kar do.
          </div>
        </div>
        <div style={{ fontSize: 12, color: "#374151", fontFamily: "sans-serif", lineHeight: 1.6 }}>
          <p><strong>Review status:</strong> <span style={{ color: "#f59e0b" }}>🔄 Under Review</span></p>
          <p style={{ marginTop: 6 }}>Agar 48 hours mein koi update nahi aaya to dobara support@whatsapp.com pe email karo.</p>
        </div>
      </div>
    </div>
  );
}

export function GmailLogin() {
  return (
    <div style={{ background: "#f9fafb", height: "100%", display: "flex", flexDirection: "column" }}>
      <ChromeBar url="accounts.google.com/signin" />
      <div style={{ flex: 1, background: "white", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px 20px" }}>
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <div style={{ fontSize: 28, fontWeight: 400, color: "#202124", fontFamily: "sans-serif" }}>Sign in</div>
          <div style={{ fontSize: 14, color: "#5f6368", fontFamily: "sans-serif", marginTop: 4 }}>with your Google Account</div>
        </div>
        <div style={{ width: "100%", maxWidth: 300 }}>
          <div style={{ border: "2px solid #e5e7eb", borderRadius: 4, padding: "12px", marginBottom: 12, background: "#fafafa" }}>
            <div style={{ fontSize: 11, color: "#5f6368", fontFamily: "sans-serif" }}>Email or phone</div>
            <div style={{ fontSize: 13, color: "#202124", fontFamily: "sans-serif", marginTop: 2 }}>user@gmail.com</div>
          </div>
          <div style={{ border: "2px solid #1a73e8", borderRadius: 4, padding: "12px", marginBottom: 4 }}>
            <div style={{ fontSize: 11, color: "#1a73e8", fontFamily: "sans-serif" }}>Enter your password</div>
            <div style={{ fontSize: 13, color: "#202124", fontFamily: "sans-serif", marginTop: 2 }}>••••••••••</div>
          </div>
          <div style={{ textAlign: "right", marginBottom: 16 }}>
            <span style={{ fontSize: 13, color: "#1a73e8", fontFamily: "sans-serif", fontWeight: 500, cursor: "pointer", background: "#eff6ff", padding: "2px 6px", borderRadius: 4 }}>
              🔍 Forgot password?
            </span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 13, color: "#1a73e8", fontFamily: "sans-serif" }}>Create account</span>
            <div style={{ background: "#1a73e8", borderRadius: 4, padding: "8px 20px" }}>
              <span style={{ fontSize: 13, color: "white", fontFamily: "sans-serif", fontWeight: 500 }}>Next</span>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 16, padding: "8px 12px", background: "#eff6ff", borderRadius: 8, maxWidth: 300 }}>
          <p style={{ fontSize: 12, color: "#1d4ed8", fontFamily: "sans-serif" }}>⬆ "Forgot password?" pe click karo — account recovery shuru ho jaayegi</p>
        </div>
      </div>
    </div>
  );
}

export function GoogleRecovery() {
  return (
    <div style={{ background: "#f9fafb", height: "100%", display: "flex", flexDirection: "column" }}>
      <ChromeBar url="accounts.google.com/signin/recovery" />
      <div style={{ flex: 1, background: "white", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "20px 20px" }}>
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <div style={{ fontSize: 20, fontWeight: 400, color: "#202124", fontFamily: "sans-serif" }}>Verify it's you</div>
          <div style={{ fontSize: 13, color: "#5f6368", fontFamily: "sans-serif", marginTop: 4 }}>user@gmail.com</div>
        </div>
        <div style={{ width: "100%", maxWidth: 300, display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ border: "2px solid #1a73e8", borderRadius: 8, padding: "12px 14px", display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 20 }}>📱</span>
            <div>
              <div style={{ fontSize: 13, fontWeight: 500, color: "#202124", fontFamily: "sans-serif" }}>Get a verification code</div>
              <div style={{ fontSize: 12, color: "#5f6368", fontFamily: "sans-serif" }}>Sent to +91 •••• ••43 10</div>
            </div>
          </div>
          <div style={{ border: "1px solid #e5e7eb", borderRadius: 8, padding: "12px 14px", display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 20 }}>📧</span>
            <div>
              <div style={{ fontSize: 13, color: "#202124", fontFamily: "sans-serif" }}>Confirm recovery email</div>
              <div style={{ fontSize: 12, color: "#5f6368", fontFamily: "sans-serif" }}>r•••@yahoo.com</div>
            </div>
          </div>
          <div style={{ border: "1px solid #e5e7eb", borderRadius: 8, padding: "12px 14px", display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 20 }}>🔑</span>
            <div>
              <div style={{ fontSize: 13, color: "#202124", fontFamily: "sans-serif" }}>Enter backup code</div>
              <div style={{ fontSize: 12, color: "#5f6368", fontFamily: "sans-serif" }}>If you saved them</div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 14, padding: "8px 12px", background: "#f0fdf4", borderRadius: 8, maxWidth: 300 }}>
          <p style={{ fontSize: 12, color: "#15803d", fontFamily: "sans-serif" }}>✓ Pehla option select karo — registered phone pe OTP aayega</p>
        </div>
      </div>
    </div>
  );
}

export function JharsewaPortal() {
  return (
    <div style={{ background: "#f9fafb", height: "100%", display: "flex", flexDirection: "column" }}>
      <ChromeBar url="jharsewa.jharkhand.gov.in/stateportal/citizenHome.do" />
      <div style={{ background: "#1a3a6b", padding: "8px 16px", display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ fontSize: 14, fontWeight: 700, color: "white", fontFamily: "sans-serif" }}>🏛 JharSewa — Jharkhand Gov</span>
      </div>
      <div style={{ flex: 1, background: "white", overflowY: "auto" }}>
        <div style={{ background: "#f3f4f6", padding: "8px 16px", borderBottom: "1px solid #e5e7eb" }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#374151", fontFamily: "sans-serif" }}>Track Application Status</div>
        </div>
        <div style={{ padding: "16px" }}>
          <div style={{ background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: 8, padding: "12px 14px", marginBottom: 12 }}>
            <div style={{ fontSize: 11, color: "#1d4ed8", fontFamily: "sans-serif", fontWeight: 600 }}>Application No.: JH-2026-IC-84923</div>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#111", fontFamily: "sans-serif", margin: "4px 0" }}>Income Certificate / आय प्रमाण पत्र</div>
            <div style={{ fontSize: 11, color: "#6b7280", fontFamily: "sans-serif" }}>Applied: 10 May 2026 | District: Ranchi</div>
          </div>
          <div style={{ borderLeft: "3px solid #f59e0b", paddingLeft: 12 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#92400e", fontFamily: "sans-serif" }}>🔄 Under Verification</div>
            <div style={{ fontSize: 12, color: "#6b7280", fontFamily: "sans-serif", marginTop: 2 }}>Block Development Officer ke paas hai</div>
            <div style={{ fontSize: 11, color: "#9ca3af", fontFamily: "sans-serif", marginTop: 2 }}>Last updated: 20 May 2026</div>
          </div>
          <div style={{ margin: "12px 0", position: "relative" }}>
            {[
              { label: "Application Submitted", done: true },
              { label: "Panchayat Verification", done: true },
              { label: "Block Office Review", done: false, current: true },
              { label: "SDO Approval", done: false },
              { label: "Certificate Ready", done: false },
            ].map((step, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 8 }}>
                <div style={{ width: 18, height: 18, borderRadius: "50%", background: step.done ? "#16a34a" : step.current ? "#f59e0b" : "#e5e7eb", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                  <span style={{ fontSize: 10, color: "white", fontWeight: 700 }}>{step.done ? "✓" : i + 1}</span>
                </div>
                <span style={{ fontSize: 12, color: step.done ? "#374151" : step.current ? "#92400e" : "#9ca3af", fontFamily: "sans-serif", fontWeight: step.current ? 600 : 400 }}>{step.label}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "#fef3c7", borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 12, color: "#92400e", fontFamily: "sans-serif" }}>📋 Agar 15 working days ho gaye hain to Block office mein personally jao aur officer se request karo</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function UidaiUpdate() {
  return (
    <div style={{ background: "#f9fafb", height: "100%", display: "flex", flexDirection: "column" }}>
      <ChromeBar url="myaadhaar.uidai.gov.in/update-aadhaar" />
      <div style={{ background: "#1a3a6b", padding: "8px 16px", display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: "white", fontFamily: "sans-serif" }}>🆔 myAadhaar — UIDAI Gov</span>
      </div>
      <div style={{ flex: 1, background: "white", overflowY: "auto" }}>
        <div style={{ background: "#f3f4f6", padding: "8px 16px", borderBottom: "1px solid #e5e7eb" }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#374151", fontFamily: "sans-serif" }}>Update Aadhaar Online</div>
        </div>
        <div style={{ padding: "12px 16px" }}>
          <div style={{ fontSize: 12, color: "#6b7280", fontFamily: "sans-serif", marginBottom: 10 }}>Select what you want to update:</div>
          {[
            { label: "Name (नाम)", icon: "👤", fee: "₹50", highlight: true },
            { label: "Date of Birth (जन्म तिथि)", icon: "📅", fee: "₹50 (once only)", highlight: false },
            { label: "Address (पता)", icon: "🏠", fee: "₹50", highlight: false },
            { label: "Gender (लिंग)", icon: "👥", fee: "₹50", highlight: false },
            { label: "Mobile Number", icon: "📱", fee: "Aadhaar Centre only", highlight: false },
          ].map((item) => (
            <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", background: item.highlight ? "#eff6ff" : "white", border: `1px solid ${item.highlight ? "#bfdbfe" : "#e5e7eb"}`, borderRadius: 8, marginBottom: 6 }}>
              <span style={{ fontSize: 18 }}>{item.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, color: "#111", fontFamily: "sans-serif", fontWeight: item.highlight ? 600 : 400 }}>{item.label}</div>
                <div style={{ fontSize: 11, color: "#6b7280", fontFamily: "sans-serif" }}>Fee: {item.fee}</div>
              </div>
              {item.highlight && <span style={{ fontSize: 11, color: "#1d4ed8", fontFamily: "sans-serif", fontWeight: 600 }}>→</span>}
            </div>
          ))}
          <div style={{ marginTop: 10, background: "#f0fdf4", borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 12, color: "#15803d", fontFamily: "sans-serif" }}>✓ Rs. 50 fee UPI se pay kar sakte hain. SRN number save karo tracking ke liye.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function UidaiDocuments() {
  return (
    <div style={{ background: "#f9fafb", height: "100%", display: "flex", flexDirection: "column" }}>
      <ChromeBar url="myaadhaar.uidai.gov.in/update-aadhaar/upload" />
      <div style={{ background: "#1a3a6b", padding: "8px 16px" }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: "white", fontFamily: "sans-serif" }}>🆔 Upload Supporting Documents</span>
      </div>
      <div style={{ flex: 1, background: "white", overflowY: "auto", padding: "12px 16px" }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: "#374151", fontFamily: "sans-serif", marginBottom: 8 }}>Name Update ke liye accepted documents:</div>
        {[
          { doc: "10th Board Marksheet", strong: true },
          { doc: "Passport (valid)", strong: true },
          { doc: "Voter ID Card", strong: false },
          { doc: "PAN Card", strong: false },
          { doc: "School Leaving Certificate", strong: false },
          { doc: "Birth Certificate", strong: false },
        ].map((item) => (
          <div key={item.doc} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 0", borderBottom: "1px solid #f3f4f6" }}>
            <span style={{ color: "#16a34a", fontSize: 14 }}>✓</span>
            <span style={{ fontSize: 13, color: "#374151", fontFamily: "sans-serif" }}>{item.doc}</span>
            {item.strong && <span style={{ fontSize: 10, background: "#dcfce7", color: "#15803d", padding: "1px 6px", borderRadius: 4, fontFamily: "sans-serif" }}>Recommended</span>}
          </div>
        ))}
        <div style={{ marginTop: 12, border: "2px dashed #bfdbfe", borderRadius: 8, padding: "16px", textAlign: "center", background: "#eff6ff" }}>
          <div style={{ fontSize: 24, marginBottom: 4 }}>📎</div>
          <div style={{ fontSize: 13, color: "#1d4ed8", fontFamily: "sans-serif", fontWeight: 500 }}>Upload Document</div>
          <div style={{ fontSize: 11, color: "#6b7280", fontFamily: "sans-serif" }}>JPG, PNG, PDF • Max 2MB</div>
        </div>
        <div style={{ marginTop: 10, background: "#fef3c7", borderRadius: 8, padding: "10px 12px" }}>
          <p style={{ fontSize: 12, color: "#92400e", fontFamily: "sans-serif" }}>💡 10th Marksheet sabse strong document hai naam correction ke liye — use karo agar available hai</p>
        </div>
      </div>
    </div>
  );
}

export function AndroidSettingsStorage() {
  return (
    <div style={{ background: "#f9fafb", height: "100%", display: "flex", flexDirection: "column" }}>
      <AndroidStatusBar />
      <AndroidTopBar title="Storage" />
      <div style={{ flex: 1, background: "white", overflowY: "auto" }}>
        <div style={{ padding: "16px", textAlign: "center", borderBottom: "1px solid #f3f4f6" }}>
          <div style={{ fontSize: 36, fontWeight: 300, color: "#111", fontFamily: "sans-serif" }}>58<span style={{ fontSize: 18 }}>GB</span></div>
          <div style={{ fontSize: 12, color: "#6b7280", fontFamily: "sans-serif" }}>Used of 64 GB</div>
        </div>
        <Row label="Apps" value="28 GB (48 apps)" />
        <Row label="Images" value="12 GB" />
        <Row label="Videos" value="8 GB" />
        <Row label="Audio" value="3 GB" />
        <Row label="System" value="7 GB" />
        <div style={{ padding: "12px 16px", background: "#fef2f2", margin: "8px", borderRadius: 8 }}>
          <div style={{ fontSize: 13, color: "#991b1b", fontFamily: "sans-serif", fontWeight: 600 }}>⚠ Storage almost full</div>
          <div style={{ fontSize: 12, color: "#7f1d1d", fontFamily: "sans-serif" }}>6 GB remaining — clear cache to free space</div>
        </div>
        <div style={{ padding: "12px 16px", display: "flex", gap: 8 }}>
          <div style={{ flex: 1, background: "#1a73e8", borderRadius: 4, padding: "10px", textAlign: "center" }}>
            <span style={{ fontSize: 13, color: "white", fontFamily: "sans-serif", fontWeight: 500 }}>Clear Cache</span>
          </div>
          <div style={{ flex: 1, background: "#f3f4f6", borderRadius: 4, padding: "10px", textAlign: "center" }}>
            <span style={{ fontSize: 13, color: "#374151", fontFamily: "sans-serif" }}>Manage Apps</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AndroidSettingsBattery() {
  return (
    <div style={{ background: "#f9fafb", height: "100%", display: "flex", flexDirection: "column" }}>
      <AndroidStatusBar />
      <AndroidTopBar title="Battery" />
      <div style={{ flex: 1, background: "white", overflowY: "auto" }}>
        <div style={{ padding: "16px", textAlign: "center", borderBottom: "1px solid #f3f4f6" }}>
          <div style={{ fontSize: 48, fontWeight: 300, color: "#111", fontFamily: "sans-serif" }}>34<span style={{ fontSize: 24 }}>%</span></div>
          <div style={{ fontSize: 12, color: "#6b7280", fontFamily: "sans-serif" }}>Est. 2h 14m remaining</div>
        </div>
        <Row label="Battery usage" value="Last 24 hours" />
        <Row label="Screen" value="35% — Top consumer" />
        <Row label="Mobile Network" value="18%" />
        <Row label="Android System" value="12%" />
        <Row label="Wi-Fi" value="8%" />
        <div style={{ padding: "12px 16px", background: "#fef3c7", margin: "8px", borderRadius: 8 }}>
          <div style={{ fontSize: 13, color: "#92400e", fontFamily: "sans-serif" }}>💡 Turn on Battery Saver to extend life by 2+ hours</div>
        </div>
      </div>
    </div>
  );
}

export function AndroidSettingsApps() {
  return (
    <div style={{ background: "#f9fafb", height: "100%", display: "flex", flexDirection: "column" }}>
      <AndroidStatusBar />
      <AndroidTopBar title="Apps" />
      <div style={{ flex: 1, background: "white", overflowY: "auto" }}>
        <Row label="See all apps" value="48 apps installed" />
        <Row label="App permissions" value="Manage access" />
        <Row label="Default apps" value="Browser, Phone, SMS" />
        <Row label="App info" value="Storage, Battery, Notifications" />
        <div style={{ padding: "8px 16px", fontSize: 11, color: "#6b7280", fontFamily: "sans-serif", textTransform: "uppercase" }}>Recently opened</div>
        {["WhatsApp", "Instagram", "Facebook", "Chrome", "YouTube"].map((app, i) => (
          <div key={app} style={{ padding: "12px 16px", borderBottom: "1px solid #f3f4f6", display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 36, height: 36, borderRadius: 8, background: ["#25d366", "#e1306c", "#1877f2", "#fbbc04", "#ff0000"][i], display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "white", fontSize: 14, fontWeight: 700 }}>{app[0]}</span>
            </div>
            <span style={{ fontSize: 14, color: "#111", fontFamily: "sans-serif" }}>{app}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AndroidSettingsNetwork() {
  return (
    <div style={{ background: "#f9fafb", height: "100%", display: "flex", flexDirection: "column" }}>
      <AndroidStatusBar />
      <AndroidTopBar title="Network & Internet" />
      <div style={{ flex: 1, background: "white", overflowY: "auto" }}>
        <Row label="Wi-Fi" value="Connected — Home_5G" highlight />
        <Row label="Mobile network" value="Jio 4G — 2 bars" />
        <Row label="Hotspot & tethering" value="Off" />
        <Row label="Airplane mode" value="Off" />
        <Row label="Data usage" value="1.2 GB / 1.5 GB today" />
        <Row label="SIM cards" value="Jio + Airtel" />
        <div style={{ padding: "12px 16px", background: "#eff6ff", margin: "8px", borderRadius: 8 }}>
          <div style={{ fontSize: 13, color: "#1d4ed8", fontFamily: "sans-serif" }}>✓ Network diagnostics: DNS resolving, Internet reachable</div>
        </div>
      </div>
    </div>
  );
}

export function AndroidSettingsSound() {
  return (
    <div style={{ background: "#f9fafb", height: "100%", display: "flex", flexDirection: "column" }}>
      <AndroidStatusBar />
      <AndroidTopBar title="Sound" />
      <div style={{ flex: 1, background: "white", overflowY: "auto" }}>
        <div style={{ padding: "12px 16px", fontSize: 11, color: "#6b7280", fontFamily: "sans-serif", textTransform: "uppercase" }}>Volume</div>
        <Row label="Ring volume" value="80% — Loud" />
        <Row label="Media volume" value="60%" />
        <Row label="Alarm volume" value="100% — Max" />
        <Row label="Call volume" value="70%" />
        <div style={{ padding: "12px 16px", fontSize: 11, color: "#6b7280", fontFamily: "sans-serif", textTransform: "uppercase" }}>Other</div>
        <Row label="Do Not Disturb" value="Off" />
        <Row label="Default notification sound" value="Note" />
        <Row label="Vibrate on call" value="On" />
        <div style={{ padding: "12px 16px", background: "#fef3c7", margin: "8px", borderRadius: 8 }}>
          <div style={{ fontSize: 13, color: "#92400e", fontFamily: "sans-serif" }}>💡 Check if Do Not Disturb is accidentally enabled</div>
        </div>
      </div>
    </div>
  );
}

export function AndroidSettingsDisplay() {
  return (
    <div style={{ background: "#f9fafb", height: "100%", display: "flex", flexDirection: "column" }}>
      <AndroidStatusBar />
      <AndroidTopBar title="Display" />
      <div style={{ flex: 1, background: "white", overflowY: "auto" }}>
        <Row label="Brightness" value="Auto-adjust: ON — 45%" />
        <Row label="Dark theme" value="Off" />
        <Row label="Night Light" value="Off — schedule 10pm-6am" />
        <Row label="Font size" value="Default" />
        <Row label="Screen timeout" value="2 minutes" />
        <Row label="Auto-rotate screen" value="On" />
        <div style={{ padding: "12px 16px", background: "#f0fdf4", margin: "8px", borderRadius: 8 }}>
          <div style={{ fontSize: 13, color: "#15803d", fontFamily: "sans-serif" }}>✓ Night Light on karne se raat mein aankhon pe kam strain hota hai</div>
        </div>
      </div>
    </div>
  );
}

export function AndroidSettingsSecurity() {
  return (
    <div style={{ background: "#f9fafb", height: "100%", display: "flex", flexDirection: "column" }}>
      <AndroidStatusBar />
      <AndroidTopBar title="Security" />
      <div style={{ flex: 1, background: "white", overflowY: "auto" }}>
        <Row label="Screen lock" value="Pattern — Secure" />
        <Row label="Fingerprint" value="2 fingers registered" />
        <Row label="Smart Lock" value="Off" />
        <Row label="Find My Device" value="On — location enabled" />
        <Row label="App pinning" value="Off" />
        <div style={{ padding: "12px 16px", background: "#eff6ff", margin: "8px", borderRadius: 8 }}>
          <div style={{ fontSize: 13, color: "#1d4ed8", fontFamily: "sans-serif" }}>✓ Fingerprint ko dobara register karo agar recognition slow hai</div>
        </div>
      </div>
    </div>
  );
}

export function AndroidSettingsSystem() {
  return (
    <div style={{ background: "#f9fafb", height: "100%", display: "flex", flexDirection: "column" }}>
      <AndroidStatusBar />
      <AndroidTopBar title="System" />
      <div style={{ flex: 1, background: "white", overflowY: "auto" }}>
        <Row label="Languages" value="English (India), Hindi" />
        <Row label="Gestures" value="Swipe to navigate, Double-tap to wake" />
        <Row label="Date & Time" value="Automatic — IST +05:30" />
        <Row label="Backup" value="Google Drive — Last: 2 days ago" />
        <Row label="Reset options" value="Reset WiFi, Reset apps, Factory reset" />
        <Row label="Developer options" value="On — 12 options enabled" />
        <Row label="About phone" value="Android 14 — May 2026 security patch" />
        <div style={{ padding: "12px 16px", background: "#fef3c7", margin: "8px", borderRadius: 8 }}>
          <div style={{ fontSize: 13, color: "#92400e", fontFamily: "sans-serif" }}>⚠ Factory reset se sab data delete hoga — pehle backup karo</div>
        </div>
      </div>
    </div>
  );
}

export function AndroidSettingsLocation() {
  return (
    <div style={{ background: "#f9fafb", height: "100%", display: "flex", flexDirection: "column" }}>
      <AndroidStatusBar />
      <AndroidTopBar title="Location" />
      <div style={{ flex: 1, background: "white", overflowY: "auto" }}>
        <Row label="Location services" value="On — GPS + WiFi + Mobile" />
        <Row label="App access to location" value="24 apps allowed" />
        <Row label="Emergency location service" value="On" />
        <Row label="Google Location Accuracy" value="On — improves GPS" />
        <div style={{ padding: "12px 16px", background: "#eff6ff", margin: "8px", borderRadius: 8 }}>
          <div style={{ fontSize: 13, color: "#1d4ed8", fontFamily: "sans-serif" }}>✓ GPS accuracy ke liye Google Location Accuracy ON rakho</div>
        </div>
      </div>
    </div>
  );
}

export function AndroidSettingsBluetooth() {
  return (
    <div style={{ background: "#f9fafb", height: "100%", display: "flex", flexDirection: "column" }}>
      <AndroidStatusBar />
      <AndroidTopBar title="Bluetooth" />
      <div style={{ flex: 1, background: "white", overflowY: "auto" }}>
        <Row label="Bluetooth" value="On — Discoverable as 'Redmi Note 12'" />
        <div style={{ padding: "8px 16px", fontSize: 11, color: "#6b7280", fontFamily: "sans-serif", textTransform: "uppercase" }}>Paired devices</div>
        {["Boat Rockerz 255", "Mi Band 7", "JBL Flip 5"].map((dev) => (
          <div key={dev} style={{ padding: "12px 16px", borderBottom: "1px solid #f3f4f6", display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 18 }}>🔊</span>
            <span style={{ fontSize: 14, color: "#111", fontFamily: "sans-serif" }}>{dev}</span>
            <span style={{ marginLeft: "auto", fontSize: 12, color: "#16a34a", fontFamily: "sans-serif" }}>Connected</span>
          </div>
        ))}
        <div style={{ padding: "8px 16px", fontSize: 11, color: "#6b7280", fontFamily: "sans-serif", textTransform: "uppercase" }}>Available devices</div>
        <div style={{ padding: "12px 16px", borderBottom: "1px solid #f3f4f6", display: "flex", alignItems: "center", gap: 10, opacity: 0.6 }}>
          <span style={{ fontSize: 18 }}>🔊</span>
          <span style={{ fontSize: 14, color: "#6b7280", fontFamily: "sans-serif" }}>Searching for devices...</span>
        </div>
      </div>
    </div>
  );
}

export function AndroidSettingsSIM() {
  return (
    <div style={{ background: "#f9fafb", height: "100%", display: "flex", flexDirection: "column" }}>
      <AndroidStatusBar />
      <AndroidTopBar title="SIM cards" />
      <div style={{ flex: 1, background: "white", overflowY: "auto" }}>
        <Row label="SIM 1 — Jio" value="+91 98765 43210 — Active" highlight />
        <Row label="SIM 2 — Airtel" value="+91 87654 32109 — Active" />
        <Row label="Preferred network type" value="5G/4G/3G/2G (Auto)" />
        <Row label="Calls" value="Always ask" />
        <Row label="SMS" value="SIM 1 (Jio)" />
        <Row label="Mobile data" value="SIM 1 (Jio)" />
        <div style={{ padding: "12px 16px", background: "#fef2f2", margin: "8px", borderRadius: 8 }}>
          <div style={{ fontSize: 13, color: "#991b1b", fontFamily: "sans-serif" }}>⚠ SIM 2 network not available — check if SIM inserted properly</div>
        </div>
      </div>
    </div>
  );
}

export function AndroidSettingsHotspot() {
  return (
    <div style={{ background: "#f9fafb", height: "100%", display: "flex", flexDirection: "column" }}>
      <AndroidStatusBar />
      <AndroidTopBar title="Hotspot & tethering" />
      <div style={{ flex: 1, background: "white", overflowY: "auto" }}>
        <Row label="Wi-Fi hotspot" value="Off — MyPhone5G" />
        <Row label="USB tethering" value="Off" />
        <Row label="Bluetooth tethering" value="Off" />
        <div style={{ padding: "12px 16px", background: "#eff6ff", margin: "8px", borderRadius: 8 }}>
          <div style={{ fontSize: 13, color: "#1d4ed8", fontFamily: "sans-serif" }}>✓ Hotspot ON karne se doosre devices connect kar sakte hain</div>
        </div>
        <div style={{ padding: "12px 16px" }}>
          <div style={{ fontSize: 13, color: "#374151", fontFamily: "sans-serif", fontWeight: 500, marginBottom: 6 }}>Hotspot settings</div>
          <Row label="Network name" value="MyPhone5G" />
          <Row label="Password" value="••••••••" />
          <Row label="Band" value="2.4 GHz + 5 GHz" />
          <Row label="Security" value="WPA3-Personal" />
        </div>
      </div>
    </div>
  );
}

export function AndroidSettingsNotifications() {
  return (
    <div style={{ background: "#f9fafb", height: "100%", display: "flex", flexDirection: "column" }}>
      <AndroidStatusBar />
      <AndroidTopBar title="Notifications" />
      <div style={{ flex: 1, background: "white", overflowY: "auto" }}>
        <Row label="App notifications" value="48 apps — 12 silenced" />
        <Row label="Do Not Disturb" value="Off — schedule: 11pm-7am" />
        <Row label="Notification history" value="Last 24 hours" />
        <Row label="Bubbles" value="Off" />
        <Row label="Device & app notifications" value="On — 5 recent" />
        <div style={{ padding: "12px 16px", background: "#f0fdf4", margin: "8px", borderRadius: 8 }}>
          <div style={{ fontSize: 13, color: "#15803d", fontFamily: "sans-serif" }}>✓ Important apps ko priority notifications do — calls aur messages miss nahi honge</div>
        </div>
      </div>
    </div>
  );
}

export function AndroidSettingsCamera() {
  return (
    <div style={{ background: "#f9fafb", height: "100%", display: "flex", flexDirection: "column" }}>
      <AndroidStatusBar />
      <AndroidTopBar title="Camera" />
      <div style={{ flex: 1, background: "white", overflowY: "auto" }}>
        <div style={{ padding: "16px", textAlign: "center", borderBottom: "1px solid #f3f4f6" }}>
          <div style={{ width: 64, height: 64, borderRadius: 12, background: "#e8f5e9", margin: "0 auto 8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28 }}>📸</div>
          <div style={{ fontSize: 16, fontWeight: 600, fontFamily: "sans-serif" }}>Camera</div>
          <div style={{ fontSize: 12, color: "#6b7280", fontFamily: "sans-serif" }}>com.android.camera — v5.2.1</div>
        </div>
        <Row label="App permissions" value="Camera, Microphone, Storage — Allowed" />
        <Row label="Storage used" value="156 MB" />
        <Row label="Open by default" value="Camera photos, Videos" />
        <div style={{ padding: "12px 16px", background: "#fef3c7", margin: "8px", borderRadius: 8 }}>
          <div style={{ fontSize: 13, color: "#92400e", fontFamily: "sans-serif" }}>💡 Lens saaf karo aur app cache clear karo agar photo blurry aa rahi hai</div>
        </div>
      </div>
    </div>
  );
}

export function AndroidSettingsVolume() {
  return (
    <div style={{ background: "#f9fafb", height: "100%", display: "flex", flexDirection: "column" }}>
      <AndroidStatusBar />
      <AndroidTopBar title="Sound & vibration" />
      <div style={{ flex: 1, background: "white", overflowY: "auto" }}>
        <div style={{ padding: "8px 16px", fontSize: 11, color: "#6b7280", fontFamily: "sans-serif", textTransform: "uppercase" }}>Volume sliders</div>
        {[
          { label: "Ring & notification", pct: 80 },
          { label: "Media", pct: 60 },
          { label: "Alarm", pct: 100 },
          { label: "Call", pct: 70 },
        ].map((v) => (
          <div key={v.label} style={{ padding: "12px 16px", borderBottom: "1px solid #f3f4f6" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
              <span style={{ fontSize: 14, color: "#111", fontFamily: "sans-serif" }}>{v.label}</span>
              <span style={{ fontSize: 12, color: "#6b7280", fontFamily: "sans-serif" }}>{v.pct}%</span>
            </div>
            <div style={{ width: "100%", height: 6, background: "#e5e7eb", borderRadius: 3 }}>
              <div style={{ width: `${v.pct}%`, height: "100%", background: "#1a73e8", borderRadius: 3 }} />
            </div>
          </div>
        ))}
        <div style={{ padding: "12px 16px", background: "#eff6ff", margin: "8px", borderRadius: 8 }}>
          <div style={{ fontSize: 13, color: "#1d4ed8", fontFamily: "sans-serif" }}>✓ Ring volume 80% se zyada rakho taaki calls sunai dein</div>
        </div>
      </div>
    </div>
  );
}

export function AndroidSettingsKeyboard() {
  return (
    <div style={{ background: "#f9fafb", height: "100%", display: "flex", flexDirection: "column" }}>
      <AndroidStatusBar />
      <AndroidTopBar title="Keyboard" />
      <div style={{ flex: 1, background: "white", overflowY: "auto" }}>
        <Row label="Current keyboard" value="Gboard — Google" highlight />
        <Row label="Manage keyboards" value="Gboard, Hindi, SwiftKey" />
        <Row label="Spell check" value="On" />
        <Row label="Auto-correction" value="On — Aggressive" />
        <Row label="Predictive text" value="On" />
        <Row label="Glide typing" value="On" />
        <div style={{ padding: "12px 16px", background: "#f0fdf4", margin: "8px", borderRadius: 8 }}>
          <div style={{ fontSize: 13, color: "#15803d", fontFamily: "sans-serif" }}>✓ Gboard update karo Play Store se agar typing mein delay ho raha hai</div>
        </div>
      </div>
    </div>
  );
}

export function AndroidSettingsRingtone() {
  return (
    <div style={{ background: "#f9fafb", height: "100%", display: "flex", flexDirection: "column" }}>
      <AndroidStatusBar />
      <AndroidTopBar title="Ringtone" />
      <div style={{ flex: 1, background: "white", overflowY: "auto" }}>
        <Row label="Current ringtone" value="Note — selected" highlight />
        <div style={{ padding: "8px 16px", fontSize: 11, color: "#6b7280", fontFamily: "sans-serif", textTransform: "uppercase" }}>Available ringtones</div>
        {["Note", "Bounce", "Dance", "Luminary", "Moto", "Nokia"].map((tone, i) => (
          <div key={tone} style={{ padding: "12px 16px", borderBottom: "1px solid #f3f4f6", display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 20, height: 20, borderRadius: "50%", border: i === 0 ? "6px solid #1a73e8" : "2px solid #9ca3af", background: "white" }} />
            <span style={{ fontSize: 14, color: "#111", fontFamily: "sans-serif" }}>{tone}</span>
          </div>
        ))}
        <div style={{ padding: "12px 16px", background: "#fef3c7", margin: "8px", borderRadius: 8 }}>
          <div style={{ fontSize: 13, color: "#92400e", fontFamily: "sans-serif" }}>💡 Ringtone "None" select na ho — silent mode ki wajah se nahi baj rahi hogi</div>
        </div>
      </div>
    </div>
  );
}

export function AndroidSettingsSDCard() {
  return (
    <div style={{ background: "#f9fafb", height: "100%", display: "flex", flexDirection: "column" }}>
      <AndroidStatusBar />
      <AndroidTopBar title="Storage" />
      <div style={{ flex: 1, background: "white", overflowY: "auto" }}>
        <div style={{ padding: "16px", textAlign: "center", borderBottom: "1px solid #f3f4f6" }}>
          <div style={{ fontSize: 36, fontWeight: 300, color: "#111", fontFamily: "sans-serif" }}>59<span style={{ fontSize: 18 }}>GB</span></div>
          <div style={{ fontSize: 12, color: "#6b7280", fontFamily: "sans-serif" }}>SD Card — Used of 64 GB</div>
        </div>
        <Row label="SD Card status" value="Mounted — SanDisk 64GB" highlight />
        <Row label="Format" value="exFAT" />
        <Row label="Photos & videos" value="42 GB" />
        <Row label="Music" value="8 GB" />
        <Row label="Other files" value="9 GB" />
        <div style={{ padding: "12px 16px", display: "flex", gap: 8 }}>
          <div style={{ flex: 1, background: "#dc2626", borderRadius: 4, padding: "10px", textAlign: "center" }}>
            <span style={{ fontSize: 13, color: "white", fontFamily: "sans-serif", fontWeight: 500 }}>Format SD Card</span>
          </div>
          <div style={{ flex: 1, background: "#f3f4f6", borderRadius: 4, padding: "10px", textAlign: "center" }}>
            <span style={{ fontSize: 13, color: "#374151", fontFamily: "sans-serif" }}>Eject</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AndroidSettingsSafeMode() {
  return (
    <div style={{ background: "#f9fafb", height: "100%", display: "flex", flexDirection: "column" }}>
      <AndroidStatusBar />
      <AndroidTopBar title="System" />
      <div style={{ flex: 1, background: "white", overflowY: "auto" }}>
        <div style={{ padding: "16px", background: "#fef2f2", margin: "8px", borderRadius: 8, border: "1px solid #fecaca" }}>
          <div style={{ fontSize: 16, fontWeight: 600, color: "#991b1b", fontFamily: "sans-serif", marginBottom: 4 }}>Safe Mode Active</div>
          <div style={{ fontSize: 12, color: "#7f1d1d", fontFamily: "sans-serif" }}>Third-party apps are temporarily disabled for troubleshooting</div>
        </div>
        <Row label="Restart phone" value="Exits Safe Mode" highlight />
        <Row label="Factory reset" value="Wipes all data" />
        <div style={{ padding: "12px 16px", background: "#eff6ff", margin: "8px", borderRadius: 8 }}>
          <div style={{ fontSize: 13, color: "#1d4ed8", fontFamily: "sans-serif" }}>✓ Restart karo — 90% phones Safe Mode se bahar aa jaate hain</div>
        </div>
      </div>
    </div>
  );
}

export function AndroidSettingsScreenTime() {
  return (
    <div style={{ background: "#f9fafb", height: "100%", display: "flex", flexDirection: "column" }}>
      <AndroidStatusBar />
      <AndroidTopBar title="Digital Wellbeing" />
      <div style={{ flex: 1, background: "white", overflowY: "auto" }}>
        <div style={{ padding: "16px", textAlign: "center", borderBottom: "1px solid #f3f4f6" }}>
          <div style={{ fontSize: 48, fontWeight: 300, color: "#111", fontFamily: "sans-serif" }}>4<span style={{ fontSize: 24 }}>h 32m</span></div>
          <div style={{ fontSize: 12, color: "#6b7280", fontFamily: "sans-serif" }}>Screen time today — 23% less than yesterday</div>
        </div>
        <Row label="App timers" value="12 apps limited" />
        <Row label="Bedtime mode" value="On — 10pm-7am" />
        <Row label="Focus mode" value="Off" />
        <div style={{ padding: "12px 16px", background: "#f0fdf4", margin: "8px", borderRadius: 8 }}>
          <div style={{ fontSize: 13, color: "#15803d", fontFamily: "sans-serif" }}>✓ App limit PIN bhool gaye? Google account se reset karo</div>
        </div>
      </div>
    </div>
  );
}

export function WhatsAppBanReal() {
  return (
    <div style={{ background: "#f0f2f5", height: "100%", display: "flex", flexDirection: "column" }}>
      <AndroidStatusBar time="10:23" />
      <div style={{ background: "#128c7e", padding: "12px 16px", display: "flex", alignItems: "center", gap: 12 }}>
        <svg width="28" height="28" viewBox="0 0 48 48" fill="white"><path d="M24 4C12.95 4 4 12.95 4 24c0 3.74 1.01 7.24 2.77 10.27L4 44l9.97-2.73A19.87 19.87 0 0 0 24 44c11.05 0 20-8.95 20-20S35.05 4 24 4z"/><path d="M34.11 29.2c-.48-.24-2.84-1.4-3.28-1.56-.44-.16-.76-.24-1.08.24-.32.48-1.24 1.56-1.52 1.88-.28.32-.56.36-1.04.12-.48-.24-2.04-.75-3.88-2.39-1.44-1.28-2.41-2.86-2.69-3.34-.28-.48-.03-.74.21-.98.22-.22.48-.56.72-.84.24-.28.32-.48.48-.8.16-.32.08-.6-.04-.84-.12-.24-1.08-2.6-1.48-3.56-.39-.93-.78-.8-1.08-.82-.28-.01-.6-.02-.92-.02-.32 0-.84.12-1.28.6-.44.48-1.68 1.64-1.68 4s1.72 4.64 1.96 4.96c.24.32 3.38 5.16 8.2 7.24 1.15.49 2.04.79 2.74 1.01 1.15.36 2.2.31 3.03.19.92-.14 2.84-1.16 3.24-2.28.4-1.12.4-2.08.28-2.28-.12-.2-.44-.32-.92-.56z" fill="#128c7e"/></svg>
        <span style={{ color: "white", fontWeight: 700, fontSize: 18, fontFamily: "sans-serif" }}>WhatsApp</span>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px 20px", textAlign: "center", gap: 20 }}>
        <div style={{ width: 80, height: 80, borderRadius: "50%", background: "#ff3b30", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
        </div>
        <div>
          <div style={{ fontSize: 17, fontWeight: 700, color: "#111", fontFamily: "sans-serif", marginBottom: 10 }}>
            Your phone number is banned from using WhatsApp.
          </div>
          <div style={{ fontSize: 13, color: "#667781", fontFamily: "sans-serif", lineHeight: 1.5 }}>
            Contact support if you think this is a mistake.
          </div>
        </div>
        <div style={{ borderTop: "1px solid #e9edef", width: "100%", paddingTop: 16, display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ background: "#25d366", borderRadius: 8, padding: "12px 0", textAlign: "center" }}>
            <span style={{ color: "white", fontWeight: 600, fontSize: 15, fontFamily: "sans-serif" }}>Request Review</span>
          </div>
          <div style={{ border: "1px solid #25d366", borderRadius: 8, padding: "12px 0", textAlign: "center" }}>
            <span style={{ color: "#25d366", fontWeight: 600, fontSize: 15, fontFamily: "sans-serif" }}>Contact Support</span>
          </div>
        </div>
        <div style={{ background: "#fff3cd", borderRadius: 8, padding: "10px 14px", width: "100%", textAlign: "left" }}>
          <div style={{ fontSize: 11, color: "#856404", fontFamily: "sans-serif", fontWeight: 600 }}>Common reasons:</div>
          <div style={{ fontSize: 11, color: "#856404", fontFamily: "sans-serif", marginTop: 4, lineHeight: 1.6 }}>• GB WhatsApp / WhatsApp Plus use karna{"\n"}• Spam messages bhejne par{"\n"}• Bulk/automated messages</div>
        </div>
      </div>
    </div>
  );
}

export function PhonePePaymentFailed() {
  return (
    <div style={{ background: "#f5f5f5", height: "100%", display: "flex", flexDirection: "column" }}>
      <AndroidStatusBar time="2:47" />
      <div style={{ background: "#5f259f", padding: "12px 16px", display: "flex", alignItems: "center", gap: 12 }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
        <span style={{ color: "white", fontWeight: 700, fontSize: 17, fontFamily: "sans-serif" }}>Payment Status</span>
      </div>
      <div style={{ flex: 1, background: "white", display: "flex", flexDirection: "column", alignItems: "center", padding: "30px 20px", gap: 16 }}>
        <div style={{ width: 76, height: 76, borderRadius: "50%", background: "#fef2f2", border: "3px solid #dc2626", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="38" height="38" viewBox="0 0 24 24" fill="#dc2626"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 20, fontWeight: 700, color: "#dc2626", fontFamily: "sans-serif" }}>Payment Failed</div>
          <div style={{ fontSize: 26, fontWeight: 700, color: "#111", fontFamily: "sans-serif", marginTop: 6 }}>₹2,499.00</div>
          <div style={{ fontSize: 13, color: "#6b7280", fontFamily: "sans-serif", marginTop: 4 }}>To: Zomato</div>
        </div>
        <div style={{ width: "100%", background: "#fef2f2", borderRadius: 10, padding: "14px 16px" }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#991b1b", fontFamily: "sans-serif", marginBottom: 6 }}>Failure Reason</div>
          <div style={{ fontSize: 13, color: "#7f1d1d", fontFamily: "sans-serif", lineHeight: 1.5 }}>Bank server is not responding. Please try again after some time or use a different payment method.</div>
        </div>
        <div style={{ width: "100%", borderRadius: 10, border: "1px solid #e5e7eb", overflow: "hidden" }}>
          {[["UPI Ref No.", "432895671234"], ["Time", "2:47 PM, 24 May 2026"], ["Status", "FAILED"]].map(([k, v]) => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "10px 14px", borderBottom: "1px solid #f3f4f6" }}>
              <span style={{ fontSize: 12, color: "#6b7280", fontFamily: "sans-serif" }}>{k}</span>
              <span style={{ fontSize: 12, fontWeight: 500, color: k === "Status" ? "#dc2626" : "#111", fontFamily: "sans-serif" }}>{v}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: 10, width: "100%" }}>
          <div style={{ flex: 1, background: "#5f259f", borderRadius: 8, padding: "12px 0", textAlign: "center" }}>
            <span style={{ color: "white", fontWeight: 600, fontSize: 14, fontFamily: "sans-serif" }}>Retry Payment</span>
          </div>
          <div style={{ flex: 1, border: "1px solid #5f259f", borderRadius: 8, padding: "12px 0", textAlign: "center" }}>
            <span style={{ color: "#5f259f", fontWeight: 600, fontSize: 14, fontFamily: "sans-serif" }}>Raise Dispute</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function YouTubeQualitySelector() {
  return (
    <div style={{ background: "#000", height: "100%", display: "flex", flexDirection: "column" }}>
      <AndroidStatusBar time="8:15" />
      <div style={{ background: "#000", flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ background: "#1a1a1a", height: 160, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
          <div style={{ width: 50, height: 50, borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
          </div>
          <div style={{ position: "absolute", bottom: 10, right: 10, background: "rgba(0,0,0,0.8)", borderRadius: 4, padding: "2px 6px" }}>
            <span style={{ color: "white", fontSize: 11, fontFamily: "sans-serif" }}>⚙ 144p</span>
          </div>
          <div style={{ position: "absolute", bottom: 6, left: 8, right: 8, height: 2, background: "rgba(255,255,255,0.2)", borderRadius: 1 }}>
            <div style={{ width: "32%", height: "100%", background: "#ff0000", borderRadius: 1 }} />
          </div>
        </div>
        <div style={{ background: "#212121", padding: "12px 16px" }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: "white", fontFamily: "sans-serif" }}>Video Quality</div>
          <div style={{ fontSize: 11, color: "#aaa", fontFamily: "sans-serif", marginTop: 2 }}>Select quality for this video</div>
        </div>
        <div style={{ flex: 1, background: "#212121" }}>
          {[
            { label: "Auto (144p)", desc: "Data saver on", selected: true },
            { label: "480p", desc: "Standard definition", selected: false },
            { label: "720p", desc: "HD - Recommended", selected: false },
            { label: "1080p", desc: "Full HD", selected: false },
          ].map((q) => (
            <div key={q.label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", borderBottom: "1px solid #333" }}>
              <div>
                <div style={{ fontSize: 14, color: q.selected ? "#ff0000" : "white", fontFamily: "sans-serif", fontWeight: q.selected ? 600 : 400 }}>{q.label}</div>
                <div style={{ fontSize: 11, color: "#aaa", fontFamily: "sans-serif" }}>{q.desc}</div>
              </div>
              {q.selected && <svg width="18" height="18" viewBox="0 0 24 24" fill="#ff0000"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>}
            </div>
          ))}
          <div style={{ padding: "12px 16px", background: "#1a1a1a", margin: "10px", borderRadius: 8 }}>
            <div style={{ fontSize: 12, color: "#ffd700", fontFamily: "sans-serif", fontWeight: 600 }}>💡 Data Saver band karo</div>
            <div style={{ fontSize: 11, color: "#999", fontFamily: "sans-serif", marginTop: 4 }}>YouTube Settings → Data Saving → Off karke 720p set karo</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function InstagramLoginActivity() {
  return (
    <div style={{ background: "#fff", height: "100%", display: "flex", flexDirection: "column" }}>
      <AndroidStatusBar time="11:02" />
      <div style={{ background: "#fff", borderBottom: "1px solid #dbdbdb", padding: "10px 16px", display: "flex", alignItems: "center", gap: 12 }}>
        <svg width="20" height="20" viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
        <span style={{ fontSize: 16, fontWeight: 700, fontFamily: "sans-serif", color: "#111" }}>Login Activity</span>
      </div>
      <div style={{ padding: "14px 16px", background: "#fff3cd", borderBottom: "1px solid #ffc107" }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: "#856404", fontFamily: "sans-serif" }}>⚠ Suspicious Login Detected</div>
        <div style={{ fontSize: 12, color: "#856404", fontFamily: "sans-serif", marginTop: 4, lineHeight: 1.5 }}>An unusual login was detected on your account. Review the sessions below and log out from unrecognized devices.</div>
      </div>
      <div style={{ flex: 1, background: "#fafafa", overflowY: "auto" }}>
        {[
          { device: "iPhone 14 Pro", location: "Mumbai, India", time: "Just now", status: "current", icon: "📱" },
          { device: "Samsung Galaxy S21", location: "Delhi, India", time: "2h ago", status: "suspicious", icon: "⚠️" },
          { device: "Windows PC", location: "Patna, India", time: "Yesterday", status: "normal", icon: "💻" },
        ].map((s, i) => (
          <div key={i} style={{ background: "white", margin: "8px 12px", borderRadius: 10, padding: "14px", border: s.status === "suspicious" ? "1px solid #ffc107" : "1px solid #e5e7eb", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 22 }}>{s.icon}</span>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#111", fontFamily: "sans-serif" }}>{s.device}</div>
                  <div style={{ fontSize: 12, color: "#6b7280", fontFamily: "sans-serif" }}>{s.location} · {s.time}</div>
                </div>
              </div>
              {s.status === "current" && <span style={{ fontSize: 11, background: "#dcfce7", color: "#16a34a", padding: "2px 8px", borderRadius: 12, fontFamily: "sans-serif", fontWeight: 600 }}>Active</span>}
              {s.status === "suspicious" && <span style={{ fontSize: 11, background: "#fef3c7", color: "#d97706", padding: "2px 8px", borderRadius: 12, fontFamily: "sans-serif", fontWeight: 600 }}>Suspicious</span>}
            </div>
            {s.status !== "current" && (
              <div style={{ marginTop: 10, background: "#e11d48", borderRadius: 6, padding: "8px 0", textAlign: "center" }}>
                <span style={{ color: "white", fontSize: 13, fontWeight: 600, fontFamily: "sans-serif" }}>Log Out</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function GoogleAccountDisabledReal() {
  return (
    <div style={{ background: "#fff", height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ background: "#f1f3f4", padding: "10px 16px", display: "flex", alignItems: "center", gap: 12, borderBottom: "1px solid #e0e0e0" }}>
        <div style={{ display: "flex", gap: 4 }}>
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
        </div>
        <div style={{ flex: 1, background: "white", borderRadius: 20, padding: "4px 14px", display: "flex", alignItems: "center", gap: 6, border: "1px solid #ddd" }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="#5f6368"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>
          <span style={{ fontSize: 11, color: "#202124", fontFamily: "sans-serif" }}>accounts.google.com</span>
        </div>
      </div>
      <div style={{ flex: 1, padding: "30px 24px", display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
        <svg width="64" height="64" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm2 30h-4v-4h4v4zm0-8h-4V14h4v12z"/></svg>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 20, fontWeight: 400, color: "#202124", fontFamily: "sans-serif", marginBottom: 8 }}>This account has been disabled</div>
          <div style={{ fontSize: 13, color: "#5f6368", fontFamily: "sans-serif", lineHeight: 1.6 }}>Your Google Account has been disabled. Please contact Google for more information about this account.</div>
        </div>
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ background: "#1a73e8", borderRadius: 4, padding: "10px 0", textAlign: "center" }}>
            <span style={{ color: "white", fontSize: 14, fontFamily: "sans-serif", fontWeight: 500 }}>Appeal This Decision</span>
          </div>
          <div style={{ border: "1px solid #dadce0", borderRadius: 4, padding: "10px 0", textAlign: "center" }}>
            <span style={{ color: "#1a73e8", fontSize: 14, fontFamily: "sans-serif", fontWeight: 500 }}>Use a different account</span>
          </div>
        </div>
        <div style={{ background: "#e8f0fe", borderRadius: 8, padding: "12px 14px", width: "100%" }}>
          <div style={{ fontSize: 12, color: "#1967d2", fontFamily: "sans-serif", fontWeight: 600 }}>Recovery Steps:</div>
          <div style={{ fontSize: 12, color: "#1967d2", fontFamily: "sans-serif", marginTop: 6, lineHeight: 1.7 }}>1. g.co/recover pe jao{"\n"}2. Appeal form bharo{"\n"}3. 2-5 working days wait karo</div>
        </div>
      </div>
    </div>
  );
}

export function AndroidWifiNoInternet() {
  return (
    <div style={{ background: "#f9fafb", height: "100%", display: "flex", flexDirection: "column" }}>
      <AndroidStatusBar time="3:18" />
      <AndroidTopBar title="Wi-Fi" />
      <div style={{ flex: 1, background: "white" }}>
        <div style={{ padding: "12px 16px", background: "#fef3c7", borderBottom: "1px solid #fde68a", display: "flex", gap: 10, alignItems: "flex-start" }}>
          <span style={{ fontSize: 18 }}>⚠️</span>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#92400e", fontFamily: "sans-serif" }}>Network may not have internet access</div>
            <div style={{ fontSize: 12, color: "#78350f", fontFamily: "sans-serif", marginTop: 2 }}>Router ya ISP problem ho sakti hai</div>
          </div>
        </div>
        <div style={{ padding: "8px 16px 4px", fontSize: 11, color: "#6b7280", fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: 0.5, marginTop: 8 }}>Current Network</div>
        <div style={{ display: "flex", alignItems: "center", padding: "14px 16px", borderBottom: "1px solid #f3f4f6", gap: 14 }}>
          <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#fef3c7", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#f59e0b"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/></svg>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 15, fontWeight: 600, color: "#111", fontFamily: "sans-serif" }}>Airtel_HomeWiFi_5G</div>
            <div style={{ fontSize: 12, color: "#f59e0b", fontFamily: "sans-serif", fontWeight: 500 }}>Saved • No internet</div>
          </div>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#9ca3af"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
        </div>
        <div style={{ padding: "8px 16px 4px", fontSize: 11, color: "#6b7280", fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: 0.5, marginTop: 8 }}>Available Networks</div>
        {[{ ssid: "Jio_4G_HotSpot", bars: 4, secured: true }, { ssid: "BSNL_Broadband", bars: 2, secured: true }, { ssid: "Vi_WiFi_Guest", bars: 3, secured: false }].map((n) => (
          <div key={n.ssid} style={{ display: "flex", alignItems: "center", padding: "14px 16px", borderBottom: "1px solid #f3f4f6", gap: 14 }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#9ca3af"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/></svg>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, color: "#111", fontFamily: "sans-serif" }}>{n.ssid}</div>
              <div style={{ fontSize: 12, color: "#6b7280", fontFamily: "sans-serif" }}>{n.secured ? "🔒 Secured" : "🔓 Open"}</div>
            </div>
          </div>
        ))}
        <div style={{ padding: "12px 16px", background: "#eff6ff", margin: "10px 12px", borderRadius: 8 }}>
          <div style={{ fontSize: 12, color: "#1d4ed8", fontFamily: "sans-serif", fontWeight: 600 }}>Quick Fix:</div>
          <div style={{ fontSize: 12, color: "#1e40af", fontFamily: "sans-serif", marginTop: 4, lineHeight: 1.6 }}>Router restart karo → 2 min wait karo → Reconnect karo</div>
        </div>
      </div>
    </div>
  );
}

export function WindowsDeviceManager() {
  return (
    <div style={{ background: "#f0f0f0", height: "100%", display: "flex", flexDirection: "column", fontFamily: "Segoe UI, sans-serif" }}>
      <div style={{ background: "#2c2c2c", display: "flex", alignItems: "center", padding: "6px 12px", gap: 8 }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#60a5fa"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><path d="M8 21h8m-4-4v4"/></svg>
        <span style={{ color: "white", fontSize: 12 }}>Device Manager</span>
        <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
          <span style={{ color: "#ccc", fontSize: 12 }}>—</span>
          <span style={{ color: "#ccc", fontSize: 12 }}>□</span>
          <span style={{ color: "#ccc", fontSize: 12 }}>✕</span>
        </div>
      </div>
      <div style={{ background: "#f0f0f0", padding: "4px 8px", display: "flex", gap: 16, borderBottom: "1px solid #ccc", fontSize: 11 }}>
        {["File", "Action", "View", "Help"].map(m => <span key={m} style={{ color: "#111", padding: "2px 4px" }}>{m}</span>)}
      </div>
      <div style={{ background: "#f0f0f0", padding: "4px 8px", display: "flex", gap: 8, borderBottom: "1px solid #ccc" }}>
        {["⬅", "➡", "🔄", "⚙"].map((icon, i) => <div key={i} style={{ width: 22, height: 22, background: "#e0e0e0", border: "1px solid #aaa", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 2, fontSize: 10 }}>{icon}</div>)}
      </div>
      <div style={{ flex: 1, background: "white", overflow: "auto", padding: "4px" }}>
        <div style={{ fontSize: 12, color: "#111", padding: "6px 10px", fontWeight: 600 }}>DESKTOP-USER7K3</div>
        {[
          { name: "Batteries", icon: "🔋", expanded: false },
          { name: "Computer", icon: "💻", expanded: false },
          { name: "Network adapters", icon: "🌐", expanded: true, children: [
            { name: "Intel(R) Wi-Fi 6 AX201", status: "disabled", warning: true },
            { name: "Realtek PCIe GbE Family Controller", status: "ok", warning: false },
          ]},
          { name: "Sound, video and game controllers", icon: "🔊", expanded: false },
        ].map((cat: any) => (
          <div key={cat.name}>
            <div style={{ display: "flex", alignItems: "center", padding: "3px 10px", gap: 6, background: cat.expanded ? "#e8f0fe" : "transparent" }}>
              <span style={{ fontSize: 10, color: "#555" }}>{cat.expanded ? "▼" : "▶"}</span>
              <span style={{ fontSize: 12 }}>{cat.icon}</span>
              <span style={{ fontSize: 12, color: "#111", fontWeight: cat.expanded ? 600 : 400 }}>{cat.name}</span>
            </div>
            {cat.expanded && cat.children?.map((child: any) => (
              <div key={child.name} style={{ display: "flex", alignItems: "center", padding: "4px 10px 4px 32px", gap: 6, background: child.warning ? "#fff8e1" : "transparent", borderBottom: "1px solid #f3f4f6" }}>
                <span style={{ fontSize: 14 }}>{child.warning ? "⚠️" : "✅"}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 12, color: "#111" }}>{child.name}</div>
                  <div style={{ fontSize: 10, color: child.warning ? "#e65100" : "#388e3c" }}>{child.warning ? "Device is disabled — right-click to Enable" : "Working properly"}</div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div style={{ background: "#f0f0f0", padding: "4px 10px", borderTop: "1px solid #ccc" }}>
        <span style={{ fontSize: 10, color: "#555" }}>Right-click Wi-Fi adapter → Enable Device</span>
      </div>
    </div>
  );
}

export function PaytmKycPendingReal() {
  return (
    <div style={{ background: "#f5f5f5", height: "100%", display: "flex", flexDirection: "column" }}>
      <AndroidStatusBar time="4:30" />
      <div style={{ background: "#002970", padding: "12px 16px", display: "flex", alignItems: "center", gap: 12 }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
        <span style={{ color: "white", fontWeight: 700, fontSize: 17, fontFamily: "sans-serif" }}>Paytm Wallet</span>
      </div>
      <div style={{ background: "#fff3cd", padding: "14px 16px", borderBottom: "1px solid #ffc107", display: "flex", gap: 10, alignItems: "flex-start" }}>
        <span style={{ fontSize: 22 }}>⚠️</span>
        <div>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#856404", fontFamily: "sans-serif" }}>Wallet Blocked — KYC Required</div>
          <div style={{ fontSize: 12, color: "#78350f", fontFamily: "sans-serif", marginTop: 3, lineHeight: 1.5 }}>RBI guidelines ke according full KYC karni padegi wallet use karne ke liye.</div>
        </div>
      </div>
      <div style={{ flex: 1, background: "white", padding: "16px" }}>
        <div style={{ borderRadius: 12, border: "1px solid #e5e7eb", overflow: "hidden", marginBottom: 16 }}>
          <div style={{ background: "#002970", padding: "12px 16px" }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: "white", fontFamily: "sans-serif" }}>KYC Status</div>
          </div>
          {[["Mini KYC", "✅ Complete", "#16a34a"], ["Full KYC", "⏳ Pending", "#d97706"], ["Wallet Limit", "₹0 (Blocked)", "#dc2626"]].map(([k, v, c]) => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", borderBottom: "1px solid #f3f4f6" }}>
              <span style={{ fontSize: 13, color: "#374151", fontFamily: "sans-serif" }}>{k}</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: c as string, fontFamily: "sans-serif" }}>{v}</span>
            </div>
          ))}
        </div>
        <div style={{ background: "#002970", borderRadius: 10, padding: "14px 0", textAlign: "center", marginBottom: 12 }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: "white", fontFamily: "sans-serif" }}>Complete Full KYC</div>
          <div style={{ fontSize: 12, color: "#93c5fd", fontFamily: "sans-serif", marginTop: 3 }}>Aadhaar + Biometric — Nearest KYC Centre</div>
        </div>
        <div style={{ background: "#eff6ff", borderRadius: 8, padding: "12px 14px" }}>
          <div style={{ fontSize: 12, color: "#1d4ed8", fontFamily: "sans-serif", lineHeight: 1.7 }}>📍 KYC Centre dhundhne ke liye: Paytm App → KYC → Find Centre Near Me</div>
        </div>
      </div>
    </div>
  );
}


export function PhonePePaymentPending() {
  return (
    <div style={{ background: "#f5f5f5", height: "100%", display: "flex", flexDirection: "column" }}>
      <AndroidStatusBar time="3:12" />
      <div style={{ background: "#5f259f", padding: "12px 16px", display: "flex", alignItems: "center", gap: 12 }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
        <span style={{ color: "white", fontWeight: 700, fontSize: 17, fontFamily: "sans-serif" }}>Payment Status</span>
      </div>
      <div style={{ flex: 1, background: "white", display: "flex", flexDirection: "column", alignItems: "center", padding: "24px 18px", gap: 14 }}>
        <div style={{ width: 76, height: 76, borderRadius: "50%", background: "#fff7ed", border: "3px solid #f59e0b", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="34" height="34" viewBox="0 0 24 24" fill="#f59e0b"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 10.59l2.3 2.3-1.41 1.41L11 13.41V7h2v5.59z"/></svg>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 20, fontWeight: 700, color: "#b45309", fontFamily: "sans-serif" }}>Payment Pending</div>
          <div style={{ fontSize: 28, fontWeight: 700, color: "#111", fontFamily: "sans-serif", marginTop: 6 }}>₹249.00</div>
          <div style={{ fontSize: 13, color: "#6b7280", fontFamily: "sans-serif", marginTop: 4 }}>To: Zomato</div>
        </div>
        <div style={{ width: "100%", background: "#fff7ed", borderRadius: 10, padding: "14px 16px", border: "1px solid #fed7aa" }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#9a3412", fontFamily: "sans-serif", marginBottom: 6 }}>Status</div>
          <div style={{ fontSize: 13, color: "#7c2d12", fontFamily: "sans-serif", lineHeight: 1.5 }}>Bank response abhi pending hai. Paise debit hue ho sakte hain, lekin final confirmation abhi nahi aaya hai.</div>
        </div>
        <div style={{ width: "100%", borderRadius: 10, border: "1px solid #e5e7eb", overflow: "hidden" }}>
          {[["UPI Ref No.", "583947201884"], ["Time", "3:12 PM, 24 May 2026"], ["Status", "PENDING AT BANK"]].map(([k, v]) => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "10px 14px", borderBottom: "1px solid #f3f4f6", background: k === "Status" ? "#fffbeb" : "white" }}>
              <span style={{ fontSize: 12, color: "#6b7280", fontFamily: "sans-serif" }}>{k}</span>
              <span style={{ fontSize: 12, fontWeight: 600, color: k === "Status" ? "#b45309" : "#111", fontFamily: "sans-serif" }}>{v}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: 10, width: "100%" }}>
          <div style={{ flex: 1, background: "#5f259f", borderRadius: 8, padding: "12px 0", textAlign: "center" }}>
            <span style={{ color: "white", fontWeight: 600, fontSize: 14, fontFamily: "sans-serif" }}>Check Status</span>
          </div>
          <div style={{ flex: 1, border: "1px solid #5f259f", borderRadius: 8, padding: "12px 0", textAlign: "center" }}>
            <span style={{ color: "#5f259f", fontWeight: 600, fontSize: 14, fontFamily: "sans-serif" }}>Raise Dispute</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SbiCardBlocked() {
  return (
    <div style={{ background: "#f5f5f5", height: "100%", display: "flex", flexDirection: "column" }}>
      <AndroidStatusBar time="6:15" />
      <div style={{ background: "#2d5016", padding: "12px 16px", display: "flex", alignItems: "center", gap: 12 }}>
        <svg width="28" height="28" viewBox="0 0 48 48" fill="white"><circle cx="24" cy="24" r="20"/><text x="24" y="30" textAnchor="middle" fontSize="18" fill="#2d5016" fontWeight="bold">SBI</text></svg>
        <div>
          <div style={{ color: "white", fontWeight: 700, fontSize: 15, fontFamily: "sans-serif" }}>YONO SBI</div>
          <div style={{ color: "#86efac", fontSize: 11, fontFamily: "sans-serif" }}>Cards & Loans</div>
        </div>
      </div>
      <div style={{ background: "white", margin: "12px", borderRadius: 12, overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
        <div style={{ background: "linear-gradient(135deg, #1e3a5f, #2d7dd2)", padding: "20px 16px", position: "relative" }}>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", fontFamily: "sans-serif" }}>DEBIT CARD</div>
          <div style={{ fontSize: 18, fontWeight: 700, color: "white", fontFamily: "monospace", marginTop: 8, letterSpacing: 2 }}>•••• •••• •••• 4821</div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 12 }}>
            <div><div style={{ fontSize: 10, color: "rgba(255,255,255,0.6)", fontFamily: "sans-serif" }}>VALID THRU</div><div style={{ fontSize: 13, color: "white", fontFamily: "sans-serif" }}>08/28</div></div>
            <div style={{ display: "flex", gap: -8 }}>
              <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(255,152,0,0.8)" }} />
              <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(255,0,0,0.8)", marginLeft: -10 }} />
            </div>
          </div>
          <div style={{ position: "absolute", top: 14, right: 14, background: "#dc2626", borderRadius: 6, padding: "4px 10px" }}>
            <span style={{ color: "white", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif" }}>🔒 BLOCKED</span>
          </div>
        </div>
        <div style={{ padding: "14px 16px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
            <span style={{ fontSize: 13, color: "#6b7280", fontFamily: "sans-serif" }}>Card Status</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: "#dc2626", fontFamily: "sans-serif" }}>Temporarily Blocked</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
            <span style={{ fontSize: 13, color: "#6b7280", fontFamily: "sans-serif" }}>Reason</span>
            <span style={{ fontSize: 13, color: "#374151", fontFamily: "sans-serif" }}>Wrong PIN (3 attempts)</span>
          </div>
          <div style={{ background: "#2d5016", borderRadius: 8, padding: "12px 0", textAlign: "center" }}>
            <span style={{ color: "white", fontWeight: 600, fontSize: 14, fontFamily: "sans-serif" }}>Unblock Card</span>
          </div>
          <div style={{ marginTop: 10, textAlign: "center" }}>
            <span style={{ fontSize: 12, color: "#1d4ed8", fontFamily: "sans-serif" }}>Call 1800 11 2211 (24×7 Free)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function InstagramRecoveryScreen() {
  return (
    <div style={{ background: "#fff", height: "100%", display: "flex", flexDirection: "column" }}>
      <AndroidStatusBar time="9:14" />
      <div style={{ padding: "20px 24px", display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
        <svg width="56" height="56" viewBox="0 0 56 56"><defs><radialGradient id="ig" cx="30%" cy="107%" r="150%"><stop offset="0%" stopColor="#fdf497"/><stop offset="5%" stopColor="#fdf497"/><stop offset="45%" stopColor="#fd5949"/><stop offset="60%" stopColor="#d6249f"/><stop offset="90%" stopColor="#285AEB"/></radialGradient></defs><rect width="56" height="56" rx="12" fill="url(#ig)"/><rect x="16" y="16" width="24" height="24" rx="7" stroke="white" strokeWidth="2.5" fill="none"/><circle cx="28" cy="28" r="6" stroke="white" strokeWidth="2.5" fill="none"/><circle cx="35.5" cy="20.5" r="1.8" fill="white"/></svg>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 20, fontWeight: 700, color: "#111", fontFamily: "sans-serif" }}>Help us confirm it's you</div>
          <div style={{ fontSize: 14, color: "#6b7280", fontFamily: "sans-serif", marginTop: 8, lineHeight: 1.5 }}>To log back into your account, we need to verify your identity.</div>
        </div>
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            { label: "Get a login link", desc: "Send to r***@gmail.com", icon: "📧" },
            { label: "Request code via SMS", desc: "+91 ••••••4521", icon: "💬" },
            { label: "Get help from friends", desc: "Trusted contacts", icon: "👥" },
          ].map((opt) => (
            <div key={opt.label} style={{ display: "flex", alignItems: "center", padding: "14px 16px", border: "1.5px solid #dbdbdb", borderRadius: 10, gap: 14 }}>
              <span style={{ fontSize: 22 }}>{opt.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#111", fontFamily: "sans-serif" }}>{opt.label}</div>
                <div style={{ fontSize: 12, color: "#6b7280", fontFamily: "sans-serif" }}>{opt.desc}</div>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#c8c8c8"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid #dbdbdb", width: "100%", paddingTop: 16, display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ textAlign: "center", fontSize: 14, color: "#6b7280", fontFamily: "sans-serif" }}>Need more help?</div>
          <div style={{ background: "#e8f4fd", borderRadius: 8, padding: "10px 14px" }}>
            <div style={{ fontSize: 12, color: "#1d4ed8", fontFamily: "sans-serif", lineHeight: 1.6 }}>📱 "Need more help?" → Selfie video verification submit karo → 24-72 hours mein response aata hai</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AndroidOtpSms() {
  return (
    <div style={{ background: "#f5f5f5", height: "100%", display: "flex", flexDirection: "column" }}>
      <AndroidStatusBar time="1:22" />
      <div style={{ background: "#1a73e8", padding: "10px 16px", display: "flex", alignItems: "center", gap: 12 }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
        <span style={{ color: "white", fontSize: 16, fontWeight: 700, fontFamily: "sans-serif" }}>Messages</span>
      </div>
      <div style={{ padding: "12px 16px", background: "#fff3cd", borderBottom: "1px solid #ffc107", display: "flex", gap: 10, alignItems: "flex-start" }}>
        <span style={{ fontSize: 18 }}>⚠️</span>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#856404", fontFamily: "sans-serif" }}>OTP messages nahi aa rahi hain</div>
          <div style={{ fontSize: 12, color: "#78350f", fontFamily: "sans-serif", marginTop: 2 }}>DND enabled ya spam filter block kar sakta hai</div>
        </div>
      </div>
      <div style={{ flex: 1, background: "#f5f5f5", overflowY: "auto" }}>
        {[
          { from: "BW-HDFCBK", msg: "Dear Customer, OTP for HDFC NetBanking login is 847291. Valid for 10 mins. Do not share with anyone.", time: "2 days ago", type: "bank" },
          { from: "VM-NETSBI", msg: "Your OTP for SBI Online is 612847. OTP is valid for 30 minutes.", time: "3 days ago", type: "bank" },
          { from: "Flipkart", msg: "Your Flipkart OTP is 293847. Use this to complete your purchase.", time: "1 week ago", type: "shopping" },
        ].map((sms, i) => (
          <div key={i} style={{ background: "white", margin: "6px 10px", borderRadius: 10, padding: "12px 14px", boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: "#1a73e8", fontFamily: "sans-serif" }}>{sms.from}</span>
              <span style={{ fontSize: 11, color: "#9ca3af", fontFamily: "sans-serif" }}>{sms.time}</span>
            </div>
            <div style={{ fontSize: 13, color: "#374151", fontFamily: "sans-serif", lineHeight: 1.5 }}>{sms.msg}</div>
          </div>
        ))}
        <div style={{ margin: "10px", background: "#fef2f2", borderRadius: 8, padding: "12px 14px", borderLeft: "3px solid #dc2626" }}>
          <div style={{ fontSize: 12, color: "#991b1b", fontFamily: "sans-serif", fontWeight: 600 }}>New OTP nahi aa rahi?</div>
          <div style={{ fontSize: 12, color: "#7f1d1d", fontFamily: "sans-serif", marginTop: 4, lineHeight: 1.6 }}>1. Airplane Mode on/off karo{"\n"}2. Settings → Messages → Spam check karo{"\n"}3. DND Service band karo: XXXXXXXXX pe SMS karo START</div>
        </div>
      </div>
    </div>
  );
}

export function GPayFailedTransaction() {
  return (
    <div style={{ background: "#fff", height: "100%", display: "flex", flexDirection: "column" }}>
      <AndroidStatusBar time="5:44" />
      <div style={{ background: "#fff", borderBottom: "1px solid #e8eaed", padding: "12px 16px", display: "flex", alignItems: "center", gap: 12 }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#5f6368"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
        <span style={{ fontSize: 16, fontWeight: 500, color: "#202124", fontFamily: "sans-serif" }}>Transaction Details</span>
      </div>
      <div style={{ flex: 1, padding: "24px 20px", display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
        <div style={{ width: 72, height: 72, borderRadius: "50%", background: "#fce8e6", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="#c5221f"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 16, color: "#c5221f", fontWeight: 600, fontFamily: "sans-serif" }}>Payment unsuccessful</div>
          <div style={{ fontSize: 28, fontWeight: 400, color: "#202124", fontFamily: "sans-serif", marginTop: 4 }}>₹850</div>
          <div style={{ fontSize: 13, color: "#5f6368", fontFamily: "sans-serif", marginTop: 4 }}>to Swiggy</div>
        </div>
        <div style={{ width: "100%", background: "#fce8e6", borderRadius: 10, padding: "14px 16px" }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#c5221f", fontFamily: "sans-serif" }}>Why did this fail?</div>
          <div style={{ fontSize: 13, color: "#b31412", fontFamily: "sans-serif", marginTop: 6, lineHeight: 1.6 }}>Your bank declined this payment. This could be due to insufficient balance or bank server issues. No money was deducted.</div>
        </div>
        {[["From", "rahul.sharma@okaxis"], ["To", "Swiggy@ybl"], ["Date", "24 May 2026, 5:44 PM"], ["UPI Ref ID", "—"], ["Status", "FAILED"]].map(([k, v]) => (
          <div key={k} style={{ display: "flex", justifyContent: "space-between", width: "100%", padding: "8px 0", borderBottom: "1px solid #f1f3f4" }}>
            <span style={{ fontSize: 13, color: "#5f6368", fontFamily: "sans-serif" }}>{k}</span>
            <span style={{ fontSize: 13, color: k === "Status" ? "#c5221f" : "#202124", fontWeight: k === "Status" ? 600 : 400, fontFamily: "sans-serif" }}>{v}</span>
          </div>
        ))}
        <div style={{ width: "100%", background: "#1a73e8", borderRadius: 8, padding: "12px 0", textAlign: "center" }}>
          <span style={{ color: "white", fontWeight: 500, fontSize: 14, fontFamily: "sans-serif" }}>Try Again</span>
        </div>
      </div>
    </div>
  );
}

export function YouTubeBufferingScreen() {
  return (
    <div style={{ background: "#0f0f0f", height: "100%", display: "flex", flexDirection: "column" }}>
      <AndroidStatusBar time="9:30" />
      <div style={{ background: "#0f0f0f", padding: "8px 14px", display: "flex", alignItems: "center", gap: 12 }}>
        <svg width="22" height="16" viewBox="0 0 90 63" fill="#ff0000"><rect width="90" height="63" rx="14"/><path d="M37 14.5L62 31.5L37 48.5V14.5Z" fill="white"/></svg>
        <div style={{ flex: 1, background: "#272727", borderRadius: 20, padding: "6px 14px", display: "flex", alignItems: "center", gap: 6 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#aaa"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <span style={{ fontSize: 12, color: "#aaa", fontFamily: "sans-serif" }}>Search YouTube</span>
        </div>
      </div>
      <div style={{ background: "#1a1a1a", height: 170, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
        <div style={{ width: 44, height: 44, border: "3px solid rgba(255,255,255,0.2)", borderTop: "3px solid white", borderRadius: "50%", animation: "spin 1s linear infinite" }} />
        <div style={{ position: "absolute", bottom: 8, left: 12, right: 12 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
            <span style={{ fontSize: 10, color: "#fff", fontFamily: "sans-serif" }}>0:12</span>
            <span style={{ fontSize: 10, color: "#aaa", fontFamily: "sans-serif" }}>• 144p ▾</span>
            <span style={{ fontSize: 10, color: "#fff", fontFamily: "sans-serif" }}>8:34</span>
          </div>
          <div style={{ height: 2, background: "rgba(255,255,255,0.2)", borderRadius: 1 }}>
            <div style={{ width: "23%", height: "100%", background: "#ff0000", borderRadius: 1 }} />
            <div style={{ width: "38%", height: "100%", background: "rgba(255,255,255,0.4)", borderRadius: 1, marginTop: -2 }} />
          </div>
        </div>
        <div style={{ position: "absolute", top: 8, right: 8, background: "rgba(0,0,0,0.7)", borderRadius: 4, padding: "3px 8px" }}>
          <span style={{ fontSize: 10, color: "white", fontFamily: "sans-serif" }}>Buffering...</span>
        </div>
      </div>
      <div style={{ background: "#0f0f0f", padding: "12px 14px" }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: "white", fontFamily: "sans-serif" }}>How To Fix Any Android Problem | Complete...</div>
        <div style={{ fontSize: 12, color: "#aaa", fontFamily: "sans-serif", marginTop: 4 }}>Tech Tips Hindi • 2.3M views • 3 days ago</div>
      </div>
      <div style={{ background: "#1a1a1a", margin: "0 10px 10px", borderRadius: 8, padding: "12px 14px" }}>
        <div style={{ fontSize: 12, color: "#ffd700", fontFamily: "sans-serif", fontWeight: 600, marginBottom: 6 }}>⚡ Buffering Fix:</div>
        {["Video quality → 480p manually set karo", "Data Saver: YouTube Settings → Off", "App cache clear karo"].map((tip, i) => (
          <div key={i} style={{ fontSize: 12, color: "#ccc", fontFamily: "sans-serif", padding: "3px 0", paddingLeft: 12 }}>• {tip}</div>
        ))}
      </div>
    </div>
  );
}

export function AndroidAppCrash() {
  return (
    <div style={{ background: "#f9fafb", height: "100%", display: "flex", flexDirection: "column" }}>
      <AndroidStatusBar time="7:50" />
      <div style={{ flex: 1, background: "white", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "20px" }}>
        <div style={{ width: 80, height: 80, borderRadius: 20, background: "#e11d48", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, boxShadow: "0 4px 14px rgba(225,29,72,0.3)" }}>
          <svg width="42" height="42" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
        </div>
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <div style={{ fontSize: 18, fontWeight: 700, color: "#111", fontFamily: "sans-serif" }}>Instagram keeps stopping</div>
          <div style={{ fontSize: 14, color: "#6b7280", fontFamily: "sans-serif", marginTop: 8, lineHeight: 1.6 }}>An error has occurred. The app has stopped unexpectedly and needs to restart.</div>
        </div>
        <div style={{ width: "100%", display: "flex", gap: 12 }}>
          <div style={{ flex: 1, border: "1px solid #e5e7eb", borderRadius: 8, padding: "12px 0", textAlign: "center" }}>
            <span style={{ fontSize: 14, color: "#374151", fontFamily: "sans-serif", fontWeight: 500 }}>Close App</span>
          </div>
          <div style={{ flex: 1, background: "#1a73e8", borderRadius: 8, padding: "12px 0", textAlign: "center" }}>
            <span style={{ fontSize: 14, color: "white", fontFamily: "sans-serif", fontWeight: 500 }}>Send Feedback</span>
          </div>
        </div>
        <div style={{ marginTop: 24, width: "100%", background: "#f0fdf4", borderRadius: 10, padding: "14px 16px", borderLeft: "3px solid #16a34a" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#15803d", fontFamily: "sans-serif", marginBottom: 8 }}>Quick Fix Steps:</div>
          {["Settings → Apps → Instagram → Force Stop", "Storage → Clear Cache (Data mat clear karo)", "Update karo Play Store se", "Reinstall karo agar nahi thaka"].map((s, i) => (
            <div key={i} style={{ fontSize: 12, color: "#166534", fontFamily: "sans-serif", padding: "2px 0", paddingLeft: 14 }}>Step {i + 1}: {s}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function WindowsSlowStartup() {
  return (
    <div style={{ background: "#f0f0f0", height: "100%", display: "flex", flexDirection: "column", fontFamily: "Segoe UI, sans-serif" }}>
      <div style={{ background: "#2c2c2c", display: "flex", alignItems: "center", padding: "6px 12px", gap: 8 }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#60a5fa"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/></svg>
        <span style={{ color: "white", fontSize: 12 }}>Task Manager</span>
        <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
          <span style={{ color: "#ccc", fontSize: 12 }}>—</span><span style={{ color: "#ccc", fontSize: 12 }}>□</span><span style={{ color: "#e74c3c", fontSize: 12 }}>✕</span>
        </div>
      </div>
      <div style={{ display: "flex", background: "#fafafa", borderBottom: "2px solid #0078d4" }}>
        {["Processes", "Performance", "Startup", "Users", "Details"].map((t, i) => (
          <div key={t} style={{ padding: "8px 14px", fontSize: 12, color: i === 2 ? "#0078d4" : "#555", borderBottom: i === 2 ? "2px solid #0078d4" : "none", fontWeight: i === 2 ? 600 : 400, cursor: "pointer" }}>{t}</div>
        ))}
      </div>
      <div style={{ background: "#fffbe6", padding: "8px 14px", fontSize: 11, color: "#7d5e00", display: "flex", gap: 8, alignItems: "center" }}>
        <span>⚠</span><span>Last boot time: <strong>4 min 38 sec</strong> (Slow)</span>
      </div>
      <div style={{ flex: 1, background: "white", overflow: "auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto auto auto", gap: 0, padding: "6px 12px", background: "#f5f5f5", borderBottom: "1px solid #e0e0e0", fontSize: 11, fontWeight: 600, color: "#555" }}>
          <span>Name</span><span style={{ textAlign: "center", width: 60 }}>Publisher</span><span style={{ textAlign: "center", width: 60 }}>Status</span><span style={{ textAlign: "right", width: 70 }}>Startup impact</span>
        </div>
        {[
          { name: "Spotify", pub: "Spotify AB", enabled: true, impact: "High", color: "#dc2626" },
          { name: "Discord", pub: "Discord Inc.", enabled: true, impact: "High", color: "#dc2626" },
          { name: "Adobe GC Invoker", pub: "Adobe", enabled: true, impact: "High", color: "#dc2626" },
          { name: "Skype", pub: "Microsoft", enabled: true, impact: "Medium", color: "#d97706" },
          { name: "Windows Security", pub: "Microsoft", enabled: true, impact: "Low", color: "#16a34a" },
          { name: "OneDrive", pub: "Microsoft", enabled: true, impact: "Medium", color: "#d97706" },
        ].map((app) => (
          <div key={app.name} style={{ display: "grid", gridTemplateColumns: "1fr auto auto auto", gap: 0, padding: "8px 12px", borderBottom: "1px solid #f3f4f6", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: 12, color: "#111" }}>{app.name}</div>
              <div style={{ fontSize: 10, color: "#888" }}>{app.pub}</div>
            </div>
            <span style={{ fontSize: 10, color: "#555", width: 60, textAlign: "center" }}>Enabled</span>
            <div style={{ width: 60, display: "flex", justifyContent: "center" }}>
              <div style={{ width: 28, height: 14, background: "#1a73e8", borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "flex-end", padding: "0 2px" }}>
                <div style={{ width: 10, height: 10, background: "white", borderRadius: "50%" }} />
              </div>
            </div>
            <span style={{ fontSize: 11, color: app.color as string, fontWeight: 600, width: 70, textAlign: "right" }}>{app.impact}</span>
          </div>
        ))}
      </div>
      <div style={{ padding: "8px 12px", background: "#e8f0fe", borderTop: "1px solid #c5d9f7" }}>
        <span style={{ fontSize: 11, color: "#1967d2" }}>💡 High impact apps ko right-click → Disable karo for faster boot</span>
      </div>
    </div>
  );
}

export function PhoneWaterDamage() {
  return (
    <div style={{ background: "#f0f9ff", height: "100%", display: "flex", flexDirection: "column" }}>
      <AndroidStatusBar time="2:15" />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px 16px", gap: 20 }}>
        <div style={{ width: 100, height: 140, borderRadius: 14, background: "#1e293b", border: "4px solid #334155", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", transform: "rotate(180deg)" }}>
          <div style={{ width: 50, height: 6, borderRadius: 3, background: "#0f172a", marginBottom: 12 }} />
          <div style={{ fontSize: 28 }}>💧</div>
          <div style={{ fontSize: 28, marginTop: 4 }}>💧</div>
          <div style={{ fontSize: 28, marginTop: 4 }}>💧</div>
          <div style={{ position: "absolute", bottom: -40, left: "50%", transform: "translateX(-50%)", fontSize: 24 }}>👇</div>
        </div>
        <div style={{ width: "100%", background: "#fee2e2", borderRadius: 12, padding: "14px 16px", borderLeft: "4px solid #ef4444" }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#991b1b", fontFamily: "sans-serif" }}>⚠️ TURANT BAND KARO PHONE</div>
          <div style={{ fontSize: 12, color: "#7f1d1d", fontFamily: "sans-serif", marginTop: 6, lineHeight: 1.6 }}>1. Power button long press → Off{"\n"}2. Charger turant nikaalo{"\n"}3. SIM tray nikaalo</div>
        </div>
        <div style={{ width: "100%", background: "#fef3c7", borderRadius: 12, padding: "14px 16px", borderLeft: "4px solid #f59e0b" }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#92400e", fontFamily: "sans-serif" }}>❌ HAIR DRYER MAT USE KARO</div>
          <div style={{ fontSize: 12, color: "#78350f", fontFamily: "sans-serif", marginTop: 4, lineHeight: 1.5 }}>Garam hawa paani ko steam bana ke andar bhejegi. Silica gel packets ke saath 48 ghante airtight bag mein rakho.</div>
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <div style={{ width: 48, height: 48, borderRadius: 8, background: "#e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>📦</div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#111", fontFamily: "sans-serif" }}>Silica Gel Packets</div>
            <div style={{ fontSize: 11, color: "#64748b", fontFamily: "sans-serif" }}>Shoe box, medicine box se nikaalo</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CockroachRemovalSetup() {
  return (
    <div style={{ background: "#fefce8", height: "100%", display: "flex", flexDirection: "column" }}>
      <AndroidStatusBar time="8:30" />
      <div style={{ flex: 1, padding: "16px", display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ textAlign: "center", marginBottom: 4 }}>
          <div style={{ fontSize: 18, fontWeight: 700, color: "#1a1a1a", fontFamily: "sans-serif" }}>🪳 Cockroach Elimination Kit</div>
          <div style={{ fontSize: 12, color: "#6b7280", fontFamily: "sans-serif", marginTop: 2 }}>Kitchen corners + cabinet ke neeche lagao</div>
        </div>
        <div style={{ background: "white", borderRadius: 12, padding: "14px", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", border: "1px solid #f3f4f6" }}>
          <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
            <div style={{ width: 40, height: 40, borderRadius: 8, background: "#fef3c7", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>🧪</div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#111", fontFamily: "sans-serif" }}>Boric Acid + Sugar Mix</div>
              <div style={{ fontSize: 11, color: "#6b7280", fontFamily: "sans-serif", marginTop: 2, lineHeight: 1.5 }}>2 tbsp boric powder + 1 tbsp sugar{"\n"}Small bottle caps mein daalo</div>
            </div>
          </div>
          <div style={{ marginTop: 10, display: "flex", gap: 8 }}>
            {[1, 2, 3].map(i => (
              <div key={i} style={{ flex: 1, height: 36, borderRadius: 6, background: "#f3f4f6", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 16, height: 16, borderRadius: "50%", background: "#fef3c7", border: "2px solid #f59e0b" }} />
              </div>
            ))}
          </div>
        </div>
        <div style={{ background: "white", borderRadius: 12, padding: "14px", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", border: "1px solid #f3f4f6" }}>
          <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
            <div style={{ width: 40, height: 40, borderRadius: 8, background: "#dbeafe", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>💧</div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#111", fontFamily: "sans-serif" }}>Gel Bait Dots (HIT/Baygon)</div>
              <div style={{ fontSize: 11, color: "#6b7280", fontFamily: "sans-serif", marginTop: 2, lineHeight: 1.5 }}>Kitchen corners, sink ke paas, cabinet junction pe chhote dots lagao</div>
            </div>
          </div>
          <div style={{ marginTop: 10, display: "flex", gap: 6 }}>
            {[1, 2, 3, 4].map(i => (
              <div key={i} style={{ width: 12, height: 12, borderRadius: "50%", background: "#1d4ed8" }} />
            ))}
          </div>
        </div>
        <div style={{ background: "#f0fdf4", borderRadius: 10, padding: "12px 14px", borderLeft: "3px solid #16a34a" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#15803d", fontFamily: "sans-serif" }}>✅ Natural: Neem/Bay Leaves</div>
          <div style={{ fontSize: 11, color: "#166534", fontFamily: "sans-serif", marginTop: 3 }}>Cabinet mein rakho — cockroach smell se dur rehte hain</div>
        </div>
        <div style={{ background: "#fef2f2", borderRadius: 10, padding: "12px 14px", borderLeft: "3px solid #ef4444" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#991b1b", fontFamily: "sans-serif" }}>⚠️ Warning</div>
          <div style={{ fontSize: 11, color: "#7f1d1d", fontFamily: "sans-serif", marginTop: 3 }}>Boric acid pets aur bachchon se dur rakho — toxic hai</div>
        </div>
      </div>
    </div>
  );
}

export function StainRemovalOil() {
  return (
    <div style={{ background: "#fafaf9", height: "100%", display: "flex", flexDirection: "column" }}>
      <AndroidStatusBar time="11:00" />
      <div style={{ flex: 1, padding: "16px", display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 18, fontWeight: 700, color: "#1a1a1a", fontFamily: "sans-serif" }}>👕 Stain Removal Guide</div>
          <div style={{ fontSize: 12, color: "#6b7280", fontFamily: "sans-serif" }}>Ghar ke desi nuskhe — no expensive detergent</div>
        </div>
        <div style={{ background: "white", borderRadius: 12, padding: "14px", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", border: "1px solid #f3f4f6" }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: "#374151", fontFamily: "sans-serif", marginBottom: 10 }}>🛢️ Oil/Grease Stain</div>
          <div style={{ width: "100%", height: 60, borderRadius: 8, background: "#f8fafc", border: "1px dashed #cbd5e1", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
            <span style={{ fontSize: 32 }}>👕</span>
            <div style={{ position: "absolute", top: 10, left: "40%", width: 30, height: 30, borderRadius: "50%", background: "#fef3c7", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid #f59e0b" }}>
              <span style={{ fontSize: 14 }}>✨</span>
            </div>
          </div>
          <div style={{ fontSize: 11, color: "#6b7280", fontFamily: "sans-serif", marginTop: 8, lineHeight: 1.5 }}>Talcum powder / Chalk powder lagao{"\n"}15-20 min rakh ke brush se nikaalo</div>
        </div>
        <div style={{ background: "white", borderRadius: 12, padding: "14px", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", border: "1px solid #f3f4f6" }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: "#374151", fontFamily: "sans-serif", marginBottom: 10 }}>☕ Tea/Coffee Stain</div>
          <div style={{ width: "100%", height: 60, borderRadius: 8, background: "#f8fafc", border: "1px dashed #cbd5e1", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
            <span style={{ fontSize: 32 }}>👕</span>
            <div style={{ position: "absolute", top: 10, left: "40%", width: 30, height: 30, borderRadius: "50%", background: "#e0e7ff", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid #6366f1" }}>
              <span style={{ fontSize: 14 }}>🍶</span>
            </div>
          </div>
          <div style={{ fontSize: 11, color: "#6b7280", fontFamily: "sans-serif", marginTop: 8, lineHeight: 1.5 }}>White vinegar 1 part + paani 2 parts{"\n"}Cotton se daag pe lagao, 10 min wait</div>
        </div>
        <div style={{ background: "#f0fdf4", borderRadius: 10, padding: "12px 14px", borderLeft: "3px solid #16a34a" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#15803d", fontFamily: "sans-serif" }}>💡 Pro Tip</div>
          <div style={{ fontSize: 11, color: "#166534", fontFamily: "sans-serif", marginTop: 3, lineHeight: 1.5 }}>Coloured kapde pe pehle hidden part test karo{"\n"}Blood stain = COLD paani (garam se protein set hota hai)</div>
        </div>
      </div>
    </div>
  );
}

export function SleepAlarmSchedule() {
  return (
    <div style={{ background: "#0f172a", height: "100%", display: "flex", flexDirection: "column" }}>
      <AndroidStatusBar time="10:28" />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px 16px", gap: 20 }}>
        <div style={{ fontSize: 48, fontWeight: 200, color: "#e2e8f0", fontFamily: "sans-serif" }}>10:28</div>
        <div style={{ fontSize: 14, color: "#94a3b8", fontFamily: "sans-serif" }}>Saturday, 24 May</div>
        <div style={{ width: "100%", background: "#1e293b", borderRadius: 16, padding: "20px", display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: "#3b82f6", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🌙</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#e2e8f0", fontFamily: "sans-serif" }}>Bedtime</div>
                <div style={{ fontSize: 12, color: "#94a3b8", fontFamily: "sans-serif" }}>10:30 PM — Everyday</div>
              </div>
            </div>
            <div style={{ width: 40, height: 24, borderRadius: 12, background: "#3b82f6", display: "flex", alignItems: "center", justifyContent: "flex-end", padding: "0 2px" }}>
              <div style={{ width: 20, height: 20, borderRadius: "50%", background: "white" }} />
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: "#f59e0b", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>☀️</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#e2e8f0", fontFamily: "sans-serif" }}>Wake Up</div>
                <div style={{ fontSize: 12, color: "#94a3b8", fontFamily: "sans-serif" }}>6:00 AM — Everyday</div>
              </div>
            </div>
            <div style={{ width: 40, height: 24, borderRadius: 12, background: "#3b82f6", display: "flex", alignItems: "center", justifyContent: "flex-end", padding: "0 2px" }}>
              <div style={{ width: 20, height: 20, borderRadius: "50%", background: "white" }} />
            </div>
          </div>
        </div>
        <div style={{ width: "100%", background: "#1e3a5f", borderRadius: 12, padding: "14px", display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 24 }}>🌡️</span>
          <div>
            <div style={{ fontSize: 13, color: "#93c5fd", fontFamily: "sans-serif", fontWeight: 600 }}>Room Temperature: 20°C</div>
            <div style={{ fontSize: 11, color: "#60a5fa", fontFamily: "sans-serif", marginTop: 2 }}>18-22°C best for sleep</div>
          </div>
        </div>
        <div style={{ width: "100%", background: "#fef3c7", borderRadius: 10, padding: "10px 14px", borderLeft: "3px solid #f59e0b" }}>
          <div style={{ fontSize: 12, color: "#92400e", fontFamily: "sans-serif", lineHeight: 1.5 }}>📵 Phone band karo 60 min pehle{"\n"}🚫 Caffeine shaam 4 baje ke baad mat lo</div>
        </div>
      </div>
    </div>
  );
}

export function SelfConfidenceTracker() {
  return (
    <div style={{ background: "#fafaf9", height: "100%", display: "flex", flexDirection: "column" }}>
      <AndroidStatusBar time="7:00" />
      <div style={{ flex: 1, padding: "16px", display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 20, fontWeight: 700, color: "#1a1a1a", fontFamily: "sans-serif" }}>💪 Weekly Progress Tracker</div>
          <div style={{ fontSize: 12, color: "#6b7280", fontFamily: "sans-serif" }}>Self-confidence build karne ka journal</div>
        </div>
        <div style={{ background: "white", borderRadius: 12, padding: "14px", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", border: "1px solid #f3f4f6" }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#111", fontFamily: "sans-serif", marginBottom: 10 }}>🪞 Daily Mirror Practice</div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, background: "#f0fdf4", borderRadius: 8, padding: "10px 12px" }}>
            <span style={{ fontSize: 28 }}>🧍</span>
            <div style={{ fontSize: 12, color: "#166534", fontFamily: "sans-serif", lineHeight: 1.5 }}>"Main capable hoon. Main deserve karta hoon. Main improve kar raha hoon."</div>
          </div>
          <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d, i) => (
              <div key={d} style={{ flex: 1, textAlign: "center" }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: i < 4 ? "#16a34a" : "#e5e7eb", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: 12, color: i < 4 ? "white" : "#9ca3af" }}>✓</span>
                </div>
                <div style={{ fontSize: 9, color: "#9ca3af", marginTop: 4, fontFamily: "sans-serif" }}>{d}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ background: "white", borderRadius: 12, padding: "14px", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", border: "1px solid #f3f4f6" }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#111", fontFamily: "sans-serif", marginBottom: 10 }}>🏆 Weekly Achievements</div>
          {[
            { text: "Aaj time par utha — 6:30 AM", done: true },
            { text: "Healthy breakfast kiya", done: true },
            { text: "Mirror mein 5 min practice", done: true },
            { text: "Ek new skill seekhi — CSS Grid", done: false },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 0", borderBottom: i < 3 ? "1px solid #f3f4f6" : "none" }}>
              <div style={{ width: 18, height: 18, borderRadius: 4, background: item.done ? "#16a34a" : "#e5e7eb", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: 10, color: item.done ? "white" : "#9ca3af" }}>✓</span>
              </div>
              <span style={{ fontSize: 12, color: item.done ? "#374151" : "#9ca3af", fontFamily: "sans-serif", textDecoration: item.done ? "none" : "line-through" }}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function StudyPomodoroTimer() {
  return (
    <div style={{ background: "#fefce8", height: "100%", display: "flex", flexDirection: "column" }}>
      <AndroidStatusBar time="3:45" />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px 16px", gap: 20 }}>
        <div style={{ fontSize: 64, fontWeight: 200, color: "#1a1a1a", fontFamily: "sans-serif" }}>25:00</div>
        <div style={{ width: "80%", height: 6, background: "#e5e7eb", borderRadius: 3 }}>
          <div style={{ width: "0%", height: "100%", background: "#ea580c", borderRadius: 3 }} />
        </div>
        <div style={{ fontSize: 14, color: "#6b7280", fontFamily: "sans-serif" }}>Focus: Mathematics — Chapter 3</div>
        <div style={{ display: "flex", gap: 16, marginTop: 8 }}>
          <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#ea580c", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 24, color: "white" }}>▶</span>
          </div>
          <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#f3f4f6", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 24, color: "#6b7280" }}>⏸</span>
          </div>
        </div>
        <div style={{ width: "100%", background: "white", borderRadius: 12, padding: "14px", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", border: "1px solid #f3f4f6", marginTop: 10 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#111", fontFamily: "sans-serif", marginBottom: 10 }}>📚 Clean Study Setup</div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <span style={{ fontSize: 24 }}>📖</span>
            <span style={{ fontSize: 24 }}>📝</span>
            <span style={{ fontSize: 24 }}>💧</span>
            <span style={{ fontSize: 20, color: "#ef4444" }}>❌📱</span>
          </div>
          <div style={{ fontSize: 11, color: "#6b7280", fontFamily: "sans-serif", marginTop: 8, lineHeight: 1.5 }}>Book + Notebook + Pen + Water{"\n"}Phone doosre room mein rakho</div>
        </div>
        <div style={{ width: "100%", background: "#f0fdf4", borderRadius: 10, padding: "10px 14px", borderLeft: "3px solid #16a34a" }}>
          <div style={{ fontSize: 12, color: "#15803d", fontFamily: "sans-serif", lineHeight: 1.5 }}>⏱️ 25 min study + 5 min break{"\n"}🎯 4 cycles = 1 session complete</div>
        </div>
      </div>
    </div>
  );
}

export function AndroidSafeModeBoot() {
  return (
    <div style={{ background: "#1a1a2e", height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px 16px", gap: 20 }}>
        <div style={{ width: 80, height: 80, borderRadius: "50%", background: "#16213e", display: "flex", alignItems: "center", justifyContent: "center", border: "3px solid #0f3460" }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="#e94560"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>
        </div>
        <div style={{ fontSize: 18, fontWeight: 700, color: "#e94560", fontFamily: "sans-serif" }}>Safe Mode</div>
        <div style={{ fontSize: 12, color: "#a0a0a0", fontFamily: "sans-serif", textAlign: "center", lineHeight: 1.6 }}>Third-party apps are disabled{"\n"}in Safe Mode. Only system apps run.</div>
        <div style={{ width: "100%", background: "#16213e", borderRadius: 12, padding: "14px 16px" }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: "#e2e8f0", fontFamily: "sans-serif", marginBottom: 8 }}>How to boot Safe Mode:</div>
          <div style={{ fontSize: 11, color: "#94a3b8", fontFamily: "sans-serif", lineHeight: 1.7 }}>
            1. Power button long press{"\n"}
            2. Power off pe long press{"\n"}
            3. 'Reboot to Safe Mode' tap{"\n"}
            4. OK press
          </div>
        </div>
        <div style={{ width: "100%", background: "#fef3c7", borderRadius: 10, padding: "10px 14px", borderLeft: "3px solid #f59e0b" }}>
          <div style={{ fontSize: 12, color: "#92400e", fontFamily: "sans-serif", lineHeight: 1.5 }}>⚠️ Bottom-left pe 'Safe Mode' watermark dikhega{"\n"}✅ Malware remove karo, phir normal restart</div>
        </div>
      </div>
    </div>
  );
}

export function AntivirusScanResult() {
  return (
    <div style={{ background: "#f5f5f5", height: "100%", display: "flex", flexDirection: "column" }}>
      <AndroidStatusBar time="1:30" />
      <div style={{ background: "#1a73e8", padding: "12px 16px", display: "flex", alignItems: "center", gap: 12 }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>
        <span style={{ color: "white", fontWeight: 700, fontSize: 17, fontFamily: "sans-serif" }}>Malwarebytes</span>
      </div>
      <div style={{ flex: 1, padding: "16px", display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, background: "#fef2f2", borderRadius: 12, padding: "16px" }}>
          <div style={{ width: 50, height: 50, borderRadius: "50%", background: "#fee2e2", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 24 }}>⚠️</span>
          </div>
          <div>
            <div style={{ fontSize: 20, fontWeight: 700, color: "#dc2626", fontFamily: "sans-serif" }}>3 Threats Found</div>
            <div style={{ fontSize: 12, color: "#991b1b", fontFamily: "sans-serif" }}>Scan complete — Action required</div>
          </div>
        </div>
        {[
          { name: "com.flashlight.super", type: "Adware", risk: "Medium" },
          { name: "com.cleaner.boost", type: "PUP", risk: "Low" },
          { name: "com.wallpaper.hd", type: "Trojan", risk: "High" },
        ].map((threat, i) => (
          <div key={i} style={{ background: "white", borderRadius: 10, padding: "12px 14px", display: "flex", alignItems: "center", justifyContent: "space-between", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: threat.risk === "High" ? "#fee2e2" : threat.risk === "Medium" ? "#fef3c7" : "#f0fdf4", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: 14 }}>🦠</span>
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#111", fontFamily: "sans-serif" }}>{threat.name}</div>
                <div style={{ fontSize: 11, color: "#6b7280", fontFamily: "sans-serif" }}>{threat.type}</div>
              </div>
            </div>
            <span style={{ fontSize: 11, fontWeight: 600, color: threat.risk === "High" ? "#dc2626" : threat.risk === "Medium" ? "#d97706" : "#16a34a", fontFamily: "sans-serif", background: threat.risk === "High" ? "#fee2e2" : threat.risk === "Medium" ? "#fef3c7" : "#f0fdf4", padding: "2px 8px", borderRadius: 4 }}>{threat.risk}</span>
          </div>
        ))}
        <div style={{ background: "#dc2626", borderRadius: 10, padding: "14px 0", textAlign: "center", marginTop: 4 }}>
          <span style={{ color: "white", fontWeight: 700, fontSize: 15, fontFamily: "sans-serif" }}>Remove All (3)</span>
        </div>
        <div style={{ background: "#fef3c7", borderRadius: 8, padding: "10px 14px" }}>
          <div style={{ fontSize: 12, color: "#92400e", fontFamily: "sans-serif", lineHeight: 1.5 }}>💡 After removal: Play Protect on rakho{"\n"}❌ Third-party APKs mat install karo</div>
        </div>
      </div>
    </div>
  );
}

export function LaptopOverheatCpu() {
  return (
    <div style={{ background: "#f0f0f0", height: "100%", display: "flex", flexDirection: "column", fontFamily: "Segoe UI, sans-serif" }}>
      <div style={{ background: "#2c2c2c", display: "flex", alignItems: "center", padding: "6px 12px", gap: 8 }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#60a5fa"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/></svg>
        <span style={{ color: "white", fontSize: 12 }}>Task Manager</span>
      </div>
      <div style={{ display: "flex", background: "#fafafa", borderBottom: "2px solid #0078d4" }}>
        {["Processes", "Performance", "App history", "Startup", "Users", "Details"].map((t, i) => (
          <div key={t} style={{ padding: "8px 12px", fontSize: 11, color: i === 0 ? "#0078d4" : "#555", borderBottom: i === 0 ? "2px solid #0078d4" : "none", fontWeight: i === 0 ? 600 : 400 }}>{t}</div>
        ))}
      </div>
      <div style={{ flex: 1, background: "white", overflow: "auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto auto", gap: 0, padding: "6px 12px", background: "#f5f5f5", borderBottom: "1px solid #e0e0e0", fontSize: 11, fontWeight: 600, color: "#555" }}>
          <span>Name</span><span style={{ textAlign: "right", width: 80 }}>CPU</span><span style={{ textAlign: "right", width: 80 }}>Memory</span>
        </div>
        {[
          { name: "Google Chrome (19)", cpu: 85, mem: "2,847 MB", warn: true },
          { name: "Windows Explorer", cpu: 8, mem: "312 MB", warn: false },
          { name: "Steam Client", cpu: 5, mem: "156 MB", warn: false },
          { name: "Discord", cpu: 3, mem: "198 MB", warn: false },
          { name: "Malwarebytes", cpu: 2, mem: "89 MB", warn: false },
        ].map((app) => (
          <div key={app.name} style={{ display: "grid", gridTemplateColumns: "1fr auto auto", gap: 0, padding: "8px 12px", borderBottom: "1px solid #f3f4f6", alignItems: "center", background: app.warn ? "#fff8e1" : "transparent" }}>
            <div>
              <div style={{ fontSize: 12, color: app.warn ? "#e65100" : "#111" }}>{app.name}</div>
            </div>
            <span style={{ fontSize: 11, color: app.warn ? "#e65100" : "#555", fontWeight: app.warn ? 700 : 400, width: 80, textAlign: "right" }}>{app.cpu}%</span>
            <span style={{ fontSize: 11, color: "#555", width: 80, textAlign: "right" }}>{app.mem}</span>
          </div>
        ))}
      </div>
      <div style={{ background: "#fef2f2", padding: "8px 12px", borderTop: "1px solid #e5e7eb", display: "flex", gap: 12, alignItems: "center" }}>
        <span style={{ fontSize: 16 }}>🌡️</span>
        <div>
          <div style={{ fontSize: 11, color: "#dc2626", fontWeight: 700 }}>CPU Temperature: 78°C (Warning!)</div>
          <div style={{ fontSize: 10, color: "#991b1b" }}>Chrome tabs band karo ya cooling pad lagao</div>
        </div>
      </div>
      <div style={{ padding: "8px 12px", background: "#e8f0fe", borderTop: "1px solid #c5d9f7" }}>
        <span style={{ fontSize: 11, color: "#1967d2" }}>🎯 Quick Fix: Chrome ke 19 processes ko End Task karo, cooling pad lagao, ya bed pe mat rakho laptop</span>
      </div>
    </div>
  );
}

export function UpiPinResetScreen() {
  return (
    <div style={{ background: "#f5f5f5", height: "100%", display: "flex", flexDirection: "column" }}>
      <AndroidStatusBar time="11:20" />
      <div style={{ background: "#5f259f", padding: "12px 16px", display: "flex", alignItems: "center", gap: 12 }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
        <span style={{ color: "white", fontWeight: 700, fontSize: 17, fontFamily: "sans-serif" }}>Bank Accounts</span>
      </div>
      <div style={{ flex: 1, background: "white", padding: "16px" }}>
        <div style={{ background: "white", borderRadius: 12, border: "1px solid #e5e7eb", overflow: "hidden", marginBottom: 16 }}>
          <div style={{ display: "flex", alignItems: "center", padding: "14px 16px", gap: 12, borderBottom: "1px solid #f3f4f6" }}>
            <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#2d5016", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "white", fontSize: 12, fontWeight: 700, fontFamily: "sans-serif" }}>SBI</span>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#111", fontFamily: "sans-serif" }}>State Bank of India</div>
              <div style={{ fontSize: 12, color: "#6b7280", fontFamily: "sans-serif" }}>XXXX XXXX 4821</div>
            </div>
            <div style={{ background: "#dcfce7", borderRadius: 6, padding: "2px 8px" }}>
              <span style={{ fontSize: 10, color: "#16a34a", fontWeight: 600, fontFamily: "sans-serif" }}>Active</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: 10, padding: "10px 16px" }}>
            <div style={{ flex: 1, background: "#5f259f", borderRadius: 8, padding: "10px 0", textAlign: "center" }}>
              <span style={{ color: "white", fontSize: 13, fontWeight: 600, fontFamily: "sans-serif" }}>Reset UPI PIN</span>
            </div>
            <div style={{ flex: 1, border: "1px solid #e5e7eb", borderRadius: 8, padding: "10px 0", textAlign: "center" }}>
              <span style={{ color: "#374151", fontSize: 13, fontFamily: "sans-serif" }}>Check Balance</span>
            </div>
          </div>
        </div>
        <div style={{ background: "#fef3c7", borderRadius: 10, padding: "12px 14px", borderLeft: "3px solid #f59e0b" }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: "#92400e", fontFamily: "sans-serif" }}>Forgot UPI PIN?</div>
          <div style={{ fontSize: 12, color: "#78350f", fontFamily: "sans-serif", marginTop: 4, lineHeight: 1.6 }}>1. Reset UPI PIN button dabao{"\n"}2. Last 6 digits of debit card + expiry{"\n"}3. OTP aayega registered mobile pe{"\n"}4. Naya 4-digit UPI PIN set karo</div>
        </div>
      </div>
    </div>
  );
}

export function WhatsappRestoreScreen() {
  return (
    <div style={{ background: "#f0f2f5", height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px 16px", gap: 20 }}>
        <svg width="64" height="64" viewBox="0 0 48 48"><path fill="#25D366" d="M24 4C12.95 4 4 12.95 4 24c0 3.74 1.01 7.24 2.77 10.27L4 44l9.97-2.73A19.87 19.87 0 0 0 24 44c11.05 0 20-8.95 20-20S35.05 4 24 4z"/><path fill="white" d="M34.11 29.2c-.48-.24-2.84-1.4-3.28-1.56-.44-.16-.76-.24-1.08.24-.32.48-1.24 1.56-1.52 1.88-.28.32-.56.36-1.04.12-.48-.24-2.04-.75-3.88-2.39-1.44-1.28-2.41-2.86-2.69-3.34-.28-.48-.03-.74.21-.98.22-.22.48-.56.72-.84.24-.28.32-.48.48-.8.16-.32.08-.6-.04-.84-.12-.24-1.08-2.6-1.48-3.56-.39-.93-.78-.8-1.08-.82-.28-.01-.6-.02-.92-.02-.32 0-.84.12-1.28.6-.44.48-1.68 1.64-1.68 4s1.72 4.64 1.96 4.96c.24.32 3.38 5.16 8.2 7.24 1.15.49 2.04.79 2.74 1.01 1.15.36 2.2.31 3.03.19.92-.14 2.84-1.16 3.24-2.28.4-1.12.4-2.08.28-2.28-.12-.2-.44-.32-.92-.56z"/></svg>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 20, fontWeight: 600, color: "#111", fontFamily: "sans-serif" }}>Restore your chats</div>
          <div style={{ fontSize: 13, color: "#667781", fontFamily: "sans-serif", marginTop: 6, lineHeight: 1.5 }}>A backup was found in your Google Drive account.</div>
        </div>
        <div style={{ width: "100%", background: "white", borderRadius: 12, padding: "16px", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
            <div style={{ width: 44, height: 44, borderRadius: 10, background: "#f0f9ff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>☁️</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#111", fontFamily: "sans-serif" }}>Google Drive Backup</div>
              <div style={{ fontSize: 12, color: "#6b7280", fontFamily: "sans-serif" }}>2.3 GB • 22 May 2026, 2:30 AM</div>
            </div>
          </div>
          <div style={{ background: "#25d366", borderRadius: 8, padding: "12px 0", textAlign: "center" }}>
            <span style={{ color: "white", fontWeight: 700, fontSize: 15, fontFamily: "sans-serif" }}>RESTORE</span>
          </div>
          <div style={{ marginTop: 10, textAlign: "center" }}>
            <span style={{ fontSize: 12, color: "#667781", fontFamily: "sans-serif" }}>SKIP AND START FRESH</span>
          </div>
        </div>
        <div style={{ background: "#fef3c7", borderRadius: 10, padding: "10px 14px", width: "100%" }}>
          <div style={{ fontSize: 12, color: "#92400e", fontFamily: "sans-serif", lineHeight: 1.5 }}>⚠️ GBWhatsApp se official app mein aane pe backup nahi dikhta{"\n"}✅ Google account same hona chahiye jo backup create kiya tha</div>
        </div>
      </div>
    </div>
  );
}

export function WhatsappStatusUploadStuck() {
  return (
    <div style={{ background: "#111b21", height: "100%", display: "flex", flexDirection: "column" }}>
      <AndroidStatusBar time="7:45" />
      <div style={{ background: "#202c33", padding: "12px 16px", display: "flex", alignItems: "center", gap: 12 }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
        <span style={{ color: "white", fontWeight: 600, fontSize: 16, fontFamily: "sans-serif" }}>My Status</span>
      </div>
      <div style={{ flex: 1, padding: "16px", display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px", background: "#202c33", borderRadius: 12 }}>
          <div style={{ width: 50, height: 50, borderRadius: 10, background: "#2a3942", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#667781"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2" stroke="#667781" strokeWidth="2" fill="none"/></svg>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: "white", fontFamily: "sans-serif" }}>Uploading Status...</div>
            <div style={{ width: "100%", height: 4, background: "#2a3942", borderRadius: 2, marginTop: 8 }}>
              <div style={{ width: "85%", height: "100%", background: "#25d366", borderRadius: 2 }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
              <span style={{ fontSize: 10, color: "#667781", fontFamily: "sans-serif" }}>85%</span>
              <span style={{ fontSize: 10, color: "#667781", fontFamily: "sans-serif" }}>Stuck for 3 min</span>
            </div>
          </div>
        </div>
        <div style={{ background: "#2a3942", borderRadius: 10, padding: "12px 14px", display: "flex", gap: 10, alignItems: "center" }}>
          <span style={{ fontSize: 18 }}>🔄</span>
          <span style={{ fontSize: 13, color: "white", fontFamily: "sans-serif" }}>Retry Upload</span>
        </div>
        <div style={{ background: "#fef3c7", borderRadius: 10, padding: "10px 14px", borderLeft: "3px solid #f59e0b" }}>
          <div style={{ fontSize: 12, color: "#92400e", fontFamily: "sans-serif", fontWeight: 600, marginBottom: 4 }}>Fix Steps:</div>
          <div style={{ fontSize: 11, color: "#78350f", fontFamily: "sans-serif", lineHeight: 1.6 }}>1. Force close WhatsApp → reopen{"\n"}2. Mobile data on/off karo{"\n"}3. Status delete karo, re-upload karo</div>
        </div>
      </div>
    </div>
  );
}

export function WhatsappPrivacyLastSeenSettings() {
  return (
    <div style={{ background: "#f0f2f5", height: "100%", display: "flex", flexDirection: "column" }}>
      <AndroidStatusBar time="9:41" />
      <div style={{ background: "#128c7e", padding: "12px 16px", display: "flex", alignItems: "center", gap: 12 }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
        <span style={{ color: "white", fontWeight: 700, fontSize: 17, fontFamily: "sans-serif" }}>Privacy</span>
      </div>
      <div style={{ flex: 1, padding: "16px", overflowY: "auto" }}>
        <div style={{ background: "white", borderRadius: 16, padding: "16px", boxShadow: "0 2px 10px rgba(0,0,0,0.05)", marginBottom: 12 }}>
          <div style={{ fontSize: 12, color: "#667781", fontFamily: "sans-serif", marginBottom: 10, fontWeight: 600 }}>Account privacy</div>
          {[
            { label: "Last seen and online", value: "My contacts except...", active: true },
            { label: "Profile photo", value: "My contacts", active: false },
            { label: "About", value: "My contacts", active: false },
            { label: "Read receipts", value: "Off", active: false },
          ].map((item) => (
            <div key={item.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderTop: "1px solid #eef2f7" }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#111", fontFamily: "sans-serif" }}>{item.label}</div>
                <div style={{ fontSize: 11, color: "#667781", fontFamily: "sans-serif", marginTop: 3 }}>Who can see this?</div>
              </div>
              <div style={{ fontSize: 12, fontWeight: 700, color: item.active ? "#128c7e" : "#374151", fontFamily: "sans-serif", textAlign: "right" }}>{item.value}</div>
            </div>
          ))}
        </div>
        <div style={{ background: "#fff3cd", borderRadius: 12, padding: "12px 14px", borderLeft: "3px solid #f59e0b", marginBottom: 12 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#92400e", fontFamily: "sans-serif", marginBottom: 4 }}>Why last seen disappears</div>
          <div style={{ fontSize: 12, color: "#78350f", fontFamily: "sans-serif", lineHeight: 1.6 }}>Agar aapne "Last seen and online" hide kiya hai, to doosron ko bhi aapka last seen nahi dikhega. Mutual privacy rule hota hai.</div>
        </div>
        <div style={{ background: "white", borderRadius: 12, padding: "12px 14px", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
          <div style={{ fontSize: 12, color: "#667781", fontFamily: "sans-serif", fontWeight: 600 }}>Quick check</div>
          <div style={{ fontSize: 12, color: "#374151", fontFamily: "sans-serif", lineHeight: 1.55, marginTop: 6 }}>Privacy → Last seen and online → select "Everyone" ya "My contacts" → app restart.</div>
        </div>
      </div>
    </div>
  );
}

export function WhatsappPrivacySupportFlow() {
  return (
    <div style={{ background: "#f9fafb", height: "100%", display: "flex", flexDirection: "column" }}>
      <ChromeBar url="faq.whatsapp.com/privacy/" />
      <div style={{ flex: 1, background: "white", overflowY: "auto", padding: "16px" }}>
        <div style={{ background: "#f0fdf4", borderRadius: 14, padding: "14px 16px", borderLeft: "4px solid #25d366", marginBottom: 12 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#166534", fontFamily: "sans-serif" }}>WhatsApp Privacy Help</div>
          <div style={{ fontSize: 12, color: "#166534", fontFamily: "sans-serif", marginTop: 4, lineHeight: 1.5 }}>Last seen, profile photo aur read receipts alag alag privacy controls se manage hote hain.</div>
        </div>
        <div style={{ background: "white", borderRadius: 14, border: "1px solid #e5e7eb", padding: "14px", marginBottom: 12 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#111", fontFamily: "sans-serif", marginBottom: 10 }}>Suggested steps</div>
          {[
            "Settings → Privacy → Last seen and online खोलो",
            "Read receipts on/off verify karo",
            "Blocked contacts list check karo",
            "WhatsApp ko restart karke visibility dubara test karo",
          ].map((step, i) => (
            <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 10 }}>
              <div style={{ width: 22, height: 22, borderRadius: "50%", background: "#e8f5e9", color: "#128c7e", fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i + 1}</div>
              <div style={{ fontSize: 12, color: "#374151", fontFamily: "sans-serif", lineHeight: 1.5 }}>{step}</div>
            </div>
          ))}
        </div>
        <div style={{ background: "#eff6ff", borderRadius: 14, padding: "12px 14px" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#1d4ed8", fontFamily: "sans-serif" }}>Privacy note</div>
          <div style={{ fontSize: 12, color: "#1e3a8a", fontFamily: "sans-serif", lineHeight: 1.5, marginTop: 4 }}>Aap apna last seen hide karoge to usually aap bhi dusron ka last seen partial ya hidden dekh sakte ho.</div>
        </div>
      </div>
    </div>
  );
}

export function WhatsappOtpHelpScreen() {
  return (
    <div style={{ background: "#f9fafb", height: "100%", display: "flex", flexDirection: "column" }}>
      <ChromeBar url="faq.whatsapp.com/verification/" />
      <div style={{ flex: 1, background: "white", display: "flex", flexDirection: "column", padding: "16px", overflowY: "auto" }}>
        <div style={{ textAlign: "center", marginBottom: 14 }}>
          <div style={{ fontSize: 18, fontWeight: 700, color: "#111", fontFamily: "sans-serif" }}>Verify your phone number</div>
          <div style={{ fontSize: 12, color: "#667781", fontFamily: "sans-serif", marginTop: 4 }}>Code sent to +91 •••• ••4521</div>
        </div>
        <div style={{ background: "#f0fdf4", borderRadius: 14, padding: "14px", border: "1px solid #bbf7d0", marginBottom: 12 }}>
          <div style={{ fontSize: 12, color: "#166534", fontFamily: "sans-serif", fontWeight: 700 }}>OTP not arriving?</div>
          <div style={{ fontSize: 12, color: "#166534", fontFamily: "sans-serif", marginTop: 4, lineHeight: 1.6 }}>Strong signal rakho, DND/spam check karo, aur resend sirf thoda wait karke karo.</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 8, marginBottom: 14 }}>
          {["•", "•", "•", "•", "•", "•"].map((v, i) => (
            <div key={i} style={{ height: 44, borderRadius: 10, border: "1px solid #d1d5db", background: "#fafafa", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, color: "#111" }}>{v}</div>
          ))}
        </div>
        <div style={{ display: "flex", gap: 10, marginBottom: 12 }}>
          <div style={{ flex: 1, background: "#25d366", borderRadius: 10, padding: "12px 0", textAlign: "center" }}>
            <span style={{ color: "white", fontWeight: 700, fontSize: 14, fontFamily: "sans-serif" }}>Resend SMS</span>
          </div>
          <div style={{ flex: 1, border: "1px solid #25d366", borderRadius: 10, padding: "12px 0", textAlign: "center" }}>
            <span style={{ color: "#25d366", fontWeight: 700, fontSize: 14, fontFamily: "sans-serif" }}>Call Me</span>
          </div>
        </div>
        <div style={{ background: "#fff7ed", borderRadius: 12, padding: "12px 14px", borderLeft: "3px solid #f59e0b" }}>
          <div style={{ fontSize: 12, color: "#92400e", fontFamily: "sans-serif", fontWeight: 700 }}>Common fix</div>
          <div style={{ fontSize: 12, color: "#78350f", fontFamily: "sans-serif", lineHeight: 1.6, marginTop: 4 }}>SIM active hai? Number wahi hai? Airplane mode off hai? Agar haan, 2-3 minute wait karke retry karo.</div>
        </div>
      </div>
    </div>
  );
}

export function WhatsappRestoreSetupScreen() {
  return (
    <div style={{ background: "#f0f2f5", height: "100%", display: "flex", flexDirection: "column" }}>
      <AndroidStatusBar time="9:41" />
      <div style={{ background: "#128c7e", padding: "12px 16px", display: "flex", alignItems: "center", gap: 12 }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
        <span style={{ color: "white", fontWeight: 700, fontSize: 17, fontFamily: "sans-serif" }}>Restore chats</span>
      </div>
      <div style={{ flex: 1, padding: "16px", display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ background: "white", borderRadius: 16, padding: "16px", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: "#e8f5e9", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>☁️</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#111", fontFamily: "sans-serif" }}>Google Drive backup found</div>
              <div style={{ fontSize: 12, color: "#667781", fontFamily: "sans-serif", marginTop: 2 }}>2.3 GB • 22 May 2026 • same number detected</div>
            </div>
          </div>
          <div style={{ background: "#f8fafc", borderRadius: 12, padding: "12px 14px", marginBottom: 12 }}>
            <div style={{ fontSize: 12, color: "#374151", fontFamily: "sans-serif", lineHeight: 1.55 }}>Restore can take a while. Same Google account aur same phone number required hain.</div>
          </div>
          <div style={{ background: "#25d366", borderRadius: 10, padding: "12px 0", textAlign: "center", marginBottom: 8 }}>
            <span style={{ color: "white", fontWeight: 700, fontSize: 15, fontFamily: "sans-serif" }}>RESTORE</span>
          </div>
          <div style={{ textAlign: "center" }}>
            <span style={{ fontSize: 12, color: "#667781", fontFamily: "sans-serif" }}>SKIP AND START FRESH</span>
          </div>
        </div>
        <div style={{ background: "#fff7ed", borderRadius: 12, padding: "12px 14px", borderLeft: "3px solid #f59e0b" }}>
          <div style={{ fontSize: 12, color: "#92400e", fontFamily: "sans-serif", fontWeight: 700 }}>Restore tip</div>
          <div style={{ fontSize: 12, color: "#78350f", fontFamily: "sans-serif", marginTop: 4, lineHeight: 1.6 }}>Backup nahi dikhe to Google account, date, aur old phone number check karo. GBWhatsApp se migrate kar rahe ho to official app use karo.</div>
        </div>
      </div>
    </div>
  );
}

export function WhatsappStatusUploadProgress() {
  return (
    <div style={{ background: "#111b21", height: "100%", display: "flex", flexDirection: "column" }}>
      <AndroidStatusBar time="7:45" />
      <div style={{ background: "#202c33", padding: "12px 16px", display: "flex", alignItems: "center", gap: 12 }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
        <span style={{ color: "white", fontWeight: 600, fontSize: 16, fontFamily: "sans-serif" }}>My Status</span>
      </div>
      <div style={{ flex: 1, padding: "16px", display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ background: "#202c33", borderRadius: 14, padding: "14px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
            <div style={{ width: 52, height: 52, borderRadius: 12, background: "#2a3942", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>📷</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: "white", fontFamily: "sans-serif" }}>Uploading status...</div>
              <div style={{ fontSize: 11, color: "#8696a0", fontFamily: "sans-serif", marginTop: 2 }}>Photo + text • 85%</div>
            </div>
          </div>
          <div style={{ width: "100%", height: 5, background: "#2a3942", borderRadius: 999, overflow: "hidden" }}>
            <div style={{ width: "85%", height: "100%", background: "#25d366" }} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
            <span style={{ fontSize: 11, color: "#8696a0", fontFamily: "sans-serif" }}>Stuck for 3 min</span>
            <span style={{ fontSize: 11, color: "#8696a0", fontFamily: "sans-serif" }}>Retry recommended</span>
          </div>
        </div>
        <div style={{ background: "#25d366", borderRadius: 10, padding: "12px 14px", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
          <span style={{ fontSize: 16 }}>🔄</span>
          <span style={{ fontSize: 13, fontWeight: 700, color: "white", fontFamily: "sans-serif" }}>Retry Upload</span>
        </div>
        <div style={{ background: "#fff3cd", borderRadius: 12, padding: "12px 14px", borderLeft: "3px solid #f59e0b" }}>
          <div style={{ fontSize: 12, color: "#92400e", fontFamily: "sans-serif", fontWeight: 700 }}>Fast fixes</div>
          <div style={{ fontSize: 12, color: "#78350f", fontFamily: "sans-serif", marginTop: 4, lineHeight: 1.6 }}>1. Force close WhatsApp → reopen{"\n"}2. Mobile data on/off karo{"\n"}3. Status delete karke re-upload karo</div>
        </div>
      </div>
    </div>
  );
}

export function YoutubeAccountSuspendedReal() {
  return (
    <div style={{ background: "#fff", height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ background: "#f1f3f4", padding: "10px 16px", display: "flex", alignItems: "center", gap: 12, borderBottom: "1px solid #e0e0e0" }}>
        <div style={{ display: "flex", gap: 4 }}>
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
        </div>
        <div style={{ flex: 1, background: "white", borderRadius: 20, padding: "4px 14px", display: "flex", alignItems: "center", gap: 6, border: "1px solid #ddd" }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="#5f6368"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <span style={{ fontSize: 11, color: "#202124", fontFamily: "sans-serif" }}>studio.youtube.com</span>
        </div>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "30px 24px", gap: 20 }}>
        <svg width="64" height="64" viewBox="0 0 90 63" fill="#ff0000"><rect width="90" height="63" rx="14"/><path d="M37 14.5L62 31.5L37 48.5V14.5Z" fill="white"/></svg>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 20, fontWeight: 400, color: "#202124", fontFamily: "sans-serif" }}>Account suspended</div>
          <div style={{ fontSize: 13, color: "#5f6368", fontFamily: "sans-serif", marginTop: 8, lineHeight: 1.6 }}>This account has been suspended due to Community Guidelines violations.</div>
        </div>
        <div style={{ width: "100%", background: "#fef2f2", borderRadius: 10, padding: "14px 16px", borderLeft: "3px solid #ef4444" }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#991b1b", fontFamily: "sans-serif", marginBottom: 6 }}>Strike Details:</div>
          <div style={{ fontSize: 12, color: "#7f1d1d", fontFamily: "sans-serif", lineHeight: 1.6 }}>Strike 1: Spam, deceptive practices & scams{"\n"}Video: "Earn Rs. 50000/month from home"{"\n"}Date issued: 20 May 2026 • Expires: 20 Aug 2026</div>
        </div>
        <div style={{ width: "100%", background: "#1a73e8", borderRadius: 8, padding: "12px 0", textAlign: "center" }}>
          <span style={{ color: "white", fontWeight: 500, fontSize: 14, fontFamily: "sans-serif" }}>Appeal</span>
        </div>
        <div style={{ width: "100%", border: "1px solid #dadce0", borderRadius: 8, padding: "12px 0", textAlign: "center" }}>
          <span style={{ color: "#5f6368", fontSize: 14, fontFamily: "sans-serif" }}>Learn more about Community Guidelines</span>
        </div>
      </div>
    </div>
  );
}

export function GooglePhotosStorageFullReal() {
  return (
    <div style={{ background: "#fff", height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ background: "#f1f3f4", padding: "10px 16px", display: "flex", alignItems: "center", gap: 12, borderBottom: "1px solid #e0e0e0" }}>
        <div style={{ display: "flex", gap: 4 }}>
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
        </div>
        <div style={{ flex: 1, background: "white", borderRadius: 20, padding: "4px 14px", display: "flex", alignItems: "center", gap: 6, border: "1px solid #ddd" }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="#5f6368"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <span style={{ fontSize: 11, color: "#202124", fontFamily: "sans-serif" }}>one.google.com/storage</span>
        </div>
      </div>
      <div style={{ flex: 1, padding: "24px 20px", display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
        <div style={{ width: 140, height: 140, borderRadius: "50%", background: "#fef2f2", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
          <svg width="100" height="100" viewBox="0 0 36 36"><path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#f3f4f6" strokeWidth="3"/><path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#ef4444" strokeWidth="3" strokeDasharray="98, 100"/></svg>
          <div style={{ position: "absolute", textAlign: "center" }}>
            <div style={{ fontSize: 18, fontWeight: 700, color: "#dc2626", fontFamily: "sans-serif" }}>98%</div>
            <div style={{ fontSize: 10, color: "#991b1b", fontFamily: "sans-serif" }}>Full</div>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 16, fontWeight: 500, color: "#202124", fontFamily: "sans-serif" }}>14.8 GB of 15 GB used</div>
          <div style={{ fontSize: 12, color: "#5f6368", fontFamily: "sans-serif", marginTop: 4 }}>0.2 GB remaining — Gmail bhejna band ho gaya</div>
        </div>
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 8 }}>
          {[
            { name: "Google Photos", size: "9.2 GB", pct: "62%", color: "#34a853" },
            { name: "Gmail", size: "3.1 GB", pct: "21%", color: "#ea4335" },
            { name: "Google Drive", size: "2.5 GB", pct: "17%", color: "#4285f4" },
          ].map((item) => (
            <div key={item.name} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: item.color, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "white", fontSize: 14 }}>📁</span>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 12, color: "#374151", fontFamily: "sans-serif" }}>{item.name}</span>
                  <span style={{ fontSize: 11, color: "#6b7280", fontFamily: "sans-serif" }}>{item.size}</span>
                </div>
                <div style={{ width: "100%", height: 4, background: "#f3f4f6", borderRadius: 2, marginTop: 4 }}>
                  <div style={{ width: item.pct, height: "100%", background: item.color, borderRadius: 2 }} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ background: "#1a73e8", borderRadius: 8, padding: "12px 0", textAlign: "center", width: "100%" }}>
          <span style={{ color: "white", fontWeight: 500, fontSize: 14, fontFamily: "sans-serif" }}>Get Google One — 100 GB ₹190/month</span>
        </div>
        <div style={{ width: "100%", border: "1px solid #dadce0", borderRadius: 8, padding: "12px 0", textAlign: "center" }}>
          <span style={{ color: "#1a73e8", fontSize: 14, fontFamily: "sans-serif" }}>Free up account storage</span>
        </div>
      </div>
    </div>
  );
}

export function AndroidSimSettings() {
  return (
    <div style={{ background: "#f9fafb", height: "100%", display: "flex", flexDirection: "column" }}>
      <AndroidStatusBar time="4:22" />
      <AndroidTopBar title="SIM Card Manager" />
      <div style={{ flex: 1, background: "white", overflowY: "auto" }}>
        <div style={{ padding: "12px 16px", background: "#fef2f2", borderBottom: "1px solid #fecaca", display: "flex", gap: 10, alignItems: "flex-start" }}>
          <span style={{ fontSize: 20 }}>⚠️</span>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#991b1b", fontFamily: "sans-serif" }}>No SIM card detected</div>
            <div style={{ fontSize: 12, color: "#7f1d1d", fontFamily: "sans-serif", marginTop: 2 }}>SIM card nikaal ke wapas lagao ya new SIM lo</div>
          </div>
        </div>
        <div style={{ padding: "14px 16px", borderBottom: "1px solid #f3f4f6" }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#374151", fontFamily: "sans-serif", marginBottom: 10 }}>SIM Status</div>
          {[
            { label: "SIM 1", status: "No SIM", icon: "❌" },
            { label: "SIM 2", status: "No SIM", icon: "❌" },
          ].map((sim) => (
            <div key={sim.label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #f3f4f6" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 18 }}>{sim.icon}</span>
                <span style={{ fontSize: 13, color: "#111", fontFamily: "sans-serif" }}>{sim.label}</span>
              </div>
              <span style={{ fontSize: 12, color: "#dc2626", fontWeight: 600, fontFamily: "sans-serif" }}>{sim.status}</span>
            </div>
          ))}
        </div>
        <div style={{ padding: "14px 16px" }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#374151", fontFamily: "sans-serif", marginBottom: 10 }}>Network Operators</div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #f3f4f6" }}>
            <span style={{ fontSize: 13, color: "#111", fontFamily: "sans-serif" }}>Auto-select network</span>
            <div style={{ width: 36, height: 20, borderRadius: 10, background: "#e5e7eb", display: "flex", alignItems: "center", padding: "0 2px" }}>
              <div style={{ width: 16, height: 16, borderRadius: "50%", background: "white" }} />
            </div>
          </div>
        </div>
        <div style={{ padding: "12px 16px", background: "#eff6ff", margin: "10px 12px", borderRadius: 8 }}>
          <div style={{ fontSize: 12, color: "#1d4ed8", fontFamily: "sans-serif", fontWeight: 600, marginBottom: 4 }}>Fix Steps:</div>
          <div style={{ fontSize: 11, color: "#1e40af", fontFamily: "sans-serif", lineHeight: 1.6 }}>1. SIM tray nikaalo (ejector pin){"\n"}2. SIM card saaf kapde se pocho{"\n"}3. Tight wapas lagao{"\n"}4. Nahi chala → Duplicate SIM bank se lo</div>
        </div>
      </div>
    </div>
  );
}

export function PanCardPortal() {
  return (
    <div style={{ background: "#fff", height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ background: "#2d5016", padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ color: "white", fontWeight: 700, fontSize: 16, fontFamily: "sans-serif" }}>UTIITSL — PAN Online</span>
        <span style={{ color: "#86efac", fontSize: 11, fontFamily: "sans-serif" }}>Govt. of India</span>
      </div>
      <div style={{ flex: 1, padding: "20px 16px", display: "flex", flexDirection: "column", gap: 14, overflowY: "auto" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 18, fontWeight: 700, color: "#1a1a1a", fontFamily: "sans-serif" }}>PAN Card Correction</div>
          <div style={{ fontSize: 12, color: "#6b7280", fontFamily: "sans-serif", marginTop: 4 }}>Name / DOB / Father's Name change</div>
        </div>
        <div style={{ background: "#fef3c7", borderRadius: 8, padding: "10px 14px" }}>
          <div style={{ fontSize: 12, color: "#92400e", fontFamily: "sans-serif", fontWeight: 600 }}>Fee: Rs. 110 (online payment)</div>
          <div style={{ fontSize: 11, color: "#78350f", fontFamily: "sans-serif", marginTop: 2 }}>Processing time: 15-20 working days</div>
        </div>
        {[
          { label: "PAN Number", placeholder: "ABCDE1234F" },
          { label: "Name (as per Aadhaar)", placeholder: "Full name exactly as Aadhaar" },
          { label: "Father's Name", placeholder: "Father's full name" },
          { label: "Date of Birth", placeholder: "DD/MM/YYYY" },
        ].map((field) => (
          <div key={field.label}>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#374151", fontFamily: "sans-serif", marginBottom: 4 }}>{field.label}</div>
            <div style={{ width: "100%", height: 36, borderRadius: 6, border: "1px solid #d1d5db", background: "#f9fafb", display: "flex", alignItems: "center", padding: "0 12px" }}>
              <span style={{ fontSize: 12, color: "#9ca3af", fontFamily: "sans-serif" }}>{field.placeholder}</span>
            </div>
          </div>
        ))}
        <div style={{ background: "#2d5016", borderRadius: 8, padding: "12px 0", textAlign: "center", marginTop: 4 }}>
          <span style={{ color: "white", fontWeight: 700, fontSize: 14, fontFamily: "sans-serif" }}>Submit Application</span>
        </div>
        <div style={{ background: "#f0fdf4", borderRadius: 8, padding: "10px 14px", borderLeft: "3px solid #16a34a" }}>
          <div style={{ fontSize: 11, color: "#15803d", fontFamily: "sans-serif", lineHeight: 1.5 }}>✅ Aadhaar link mandatory hai{"\n"}✅ Mobile OTP se verify hoga{"\n"}✅ Track: utiitsl.com → PAN → Know Status</div>
        </div>
      </div>
    </div>
  );
}

export function DlRenewalPortal() {
  return (
    <div style={{ background: "#fff", height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ background: "#1a365d", padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ color: "white", fontWeight: 700, fontSize: 16, fontFamily: "sans-serif" }}>Parivahan Sarathi</span>
        <span style={{ color: "#93c5fd", fontSize: 11, fontFamily: "sans-serif" }}>Ministry of Road Transport</span>
      </div>
      <div style={{ flex: 1, padding: "20px 16px", display: "flex", flexDirection: "column", gap: 14, overflowY: "auto" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 18, fontWeight: 700, color: "#1a1a1a", fontFamily: "sans-serif" }}>Driving License Renewal</div>
          <div style={{ fontSize: 12, color: "#6b7280", fontFamily: "sans-serif", marginTop: 4 }}>Sarathi portal se online apply karo</div>
        </div>
        <div style={{ background: "#fef3c7", borderRadius: 8, padding: "10px 14px" }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: "#92400e", fontFamily: "sans-serif" }}>Important:</div>
          <div style={{ fontSize: 11, color: "#78350f", fontFamily: "sans-serif", marginTop: 2, lineHeight: 1.5 }}>Expiry se 30 din pehle apply karo{"\n"}Expiry ke 5 saal baad re-test (Learner's) dena padega</div>
        </div>
        {[
          { label: "Driving License Number", placeholder: "MH02 20260012345" },
          { label: "Date of Birth", placeholder: "DD/MM/YYYY" },
          { label: "State", placeholder: "Select your state" },
          { label: "RTO Office", placeholder: "Select RTO" },
        ].map((field) => (
          <div key={field.label}>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#374151", fontFamily: "sans-serif", marginBottom: 4 }}>{field.label}</div>
            <div style={{ width: "100%", height: 36, borderRadius: 6, border: "1px solid #d1d5db", background: "#f9fafb", display: "flex", alignItems: "center", padding: "0 12px" }}>
              <span style={{ fontSize: 12, color: "#9ca3af", fontFamily: "sans-serif" }}>{field.placeholder}</span>
            </div>
          </div>
        ))}
        <div style={{ background: "#1a365d", borderRadius: 8, padding: "12px 0", textAlign: "center", marginTop: 4 }}>
          <span style={{ color: "white", fontWeight: 700, fontSize: 14, fontFamily: "sans-serif" }}>Proceed</span>
        </div>
        <div style={{ background: "#f0fdf4", borderRadius: 8, padding: "10px 14px", borderLeft: "3px solid #16a34a" }}>
          <div style={{ fontSize: 11, color: "#15803d", fontFamily: "sans-serif", lineHeight: 1.5 }}>✅ Documents: Aadhaar, passport photo, medical certificate (if {'>'}40 years){"\n"}✅ Fee: Rs. 200-500 (state wise){"\n"}✅ Smart card 7-15 days mein aa jaata hai</div>
        </div>
      </div>
    </div>
  );
}

export function CyberCrimeComplaint() {
  return (
    <div style={{ background: "#fff", height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ background: "#1a365d", padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ color: "white", fontWeight: 700, fontSize: 16, fontFamily: "sans-serif" }}>National Cyber Crime Portal</span>
        <span style={{ color: "#93c5fd", fontSize: 11, fontFamily: "sans-serif" }}>cybercrime.gov.in</span>
      </div>
      <div style={{ flex: 1, padding: "20px 16px", display: "flex", flexDirection: "column", gap: 14, overflowY: "auto" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 18, fontWeight: 700, color: "#1a1a1a", fontFamily: "sans-serif" }}>Report Financial Fraud</div>
          <div style={{ fontSize: 12, color: "#6b7280", fontFamily: "sans-serif", marginTop: 4 }}>Online shopping fraud, UPI fraud, job scam</div>
        </div>
        <div style={{ background: "#fef2f2", borderRadius: 8, padding: "10px 14px", borderLeft: "3px solid #ef4444" }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: "#991b1b", fontFamily: "sans-serif" }}>Helpline: 1930 (24×7)</div>
          <div style={{ fontSize: 11, color: "#7f1d1d", fontFamily: "sans-serif", marginTop: 2 }}>Turant paise freeze karne ke liye call karo</div>
        </div>
        {[
          { label: "Category", value: "Financial Fraud ▾" },
          { label: "Sub-category", value: "Online Shopping Fraud ▾" },
          { label: "Amount Lost (Rs.)", value: "Enter amount" },
          { label: "Date of Incident", value: "DD/MM/YYYY" },
          { label: "State", value: "Select state ▾" },
        ].map((field) => (
          <div key={field.label}>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#374151", fontFamily: "sans-serif", marginBottom: 4 }}>{field.label}</div>
            <div style={{ width: "100%", height: 36, borderRadius: 6, border: "1px solid #d1d5db", background: "#f9fafb", display: "flex", alignItems: "center", padding: "0 12px" }}>
              <span style={{ fontSize: 12, color: "#9ca3af", fontFamily: "sans-serif" }}>{field.value}</span>
            </div>
          </div>
        ))}
        <div style={{ background: "#1a365d", borderRadius: 8, padding: "12px 0", textAlign: "center", marginTop: 4 }}>
          <span style={{ color: "white", fontWeight: 700, fontSize: 14, fontFamily: "sans-serif" }}>File Complaint</span>
        </div>
        <div style={{ background: "#f0fdf4", borderRadius: 8, padding: "10px 14px", borderLeft: "3px solid #16a34a" }}>
          <div style={{ fontSize: 11, color: "#15803d", fontFamily: "sans-serif", lineHeight: 1.5 }}>✅ Screenshots, bank statement, chat screenshots attach karo{"\n"}✅ FIR bhi file karo nearest police station mein{"\n"}✅ 30 din mein update aata hai portal pe</div>
        </div>
      </div>
    </div>
  );
}


export function SbiNetBankingBlocked() {
  return (
    <div style={{ background: "#f9fafb", height: "100%", display: "flex", flexDirection: "column" }}>
      <ChromeBar url="online.sbi.sbi/retail/cards/card-services" />
      <div style={{ background: "#1e3a5f", padding: "12px 16px", display: "flex", alignItems: "center", gap: 12 }}>
        <svg width="28" height="28" viewBox="0 0 48 48" fill="white"><circle cx="24" cy="24" r="20"/><text x="24" y="30" textAnchor="middle" fontSize="18" fill="#1e3a5f" fontWeight="bold">SBI</text></svg>
        <div>
          <div style={{ color: "white", fontWeight: 700, fontSize: 15, fontFamily: "sans-serif" }}>Card Services</div>
          <div style={{ color: "#93c5fd", fontSize: 11, fontFamily: "sans-serif" }}>State Bank of India</div>
        </div>
      </div>
      <div style={{ flex: 1, background: "white", overflow: "hidden" }}>
        <div style={{ padding: "14px 16px", borderBottom: "1px solid #e5e7eb", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 13, color: "#6b7280", fontFamily: "sans-serif" }}>Debit Card ending 4821</div>
            <div style={{ fontSize: 18, fontWeight: 700, color: "#dc2626", fontFamily: "sans-serif", marginTop: 2 }}>Blocked</div>
          </div>
          <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#fef2f2", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 22 }}>🔒</span>
          </div>
        </div>
        <div style={{ padding: "12px 16px" }}>
          <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 10, padding: "12px 14px", marginBottom: 12 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#991b1b", fontFamily: "sans-serif" }}>Why blocked?</div>
            <div style={{ fontSize: 12, color: "#7f1d1d", fontFamily: "sans-serif", lineHeight: 1.6, marginTop: 4 }}>3 incorrect PIN attempts. Verify identity and unlock the card using OTP or branch visit.</div>
          </div>
          {[
            { label: "Unblock with OTP", sub: "Registered mobile par OTP aayega" },
            { label: "Reset Card PIN", sub: "New PIN set karke activate karo" },
            { label: "Visit Branch", sub: "ID proof ke saath service desk" },
          ].map((row, i) => (
            <div key={row.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: i === 2 ? "none" : "1px solid #f3f4f6" }}>
              <div>
                <div style={{ fontSize: 14, color: "#111", fontFamily: "sans-serif", fontWeight: 500 }}>{row.label}</div>
                <div style={{ fontSize: 11, color: "#6b7280", fontFamily: "sans-serif", marginTop: 2 }}>{row.sub}</div>
              </div>
              <div style={{ width: 18, height: 18, borderRadius: "50%", border: "2px solid #9ca3af" }} />
            </div>
          ))}
        </div>
      </div>
      <div style={{ background: "#f8fafc", borderTop: "1px solid #e5e7eb", padding: "10px 16px" }}>
        <div style={{ fontSize: 11, color: "#1d4ed8", fontFamily: "sans-serif", lineHeight: 1.6 }}>24x7 helpline: 1800 11 2211 • Internet banking se unblock karne ke liye OTP ready rakho</div>
      </div>
    </div>
  );
}

const mockupMap: Record<KnownMockupType, React.ComponentType> = {
  "android-network-mode": AndroidNetworkMode,
  "android-apn": AndroidApn,
  "android-battery-chart": AndroidBatteryChart,
  "android-battery-apps": AndroidBatteryApps,
  "playstore-pending": PlayStorePending,
  "android-app-storage": AndroidAppStorage,
  "phonepe-transaction": PhonePeTransaction,
  "upi-dispute": UpiDispute,
  "amazon-refund": AmazonRefund,
  "bank-passbook": BankPassbook,
  "myjio-app": MyJioApp,
  "android-network-4g": AndroidNetwork4G,
  "whatsapp-banned": WhatsAppBanned,
  "whatsapp-email": WhatsAppEmail,
  "gmail-login": GmailLogin,
  "google-recovery": GoogleRecovery,
  "jharsewa-portal": JharsewaPortal,
  "uidai-update": UidaiUpdate,
  "uidai-documents": UidaiDocuments,
  "android-settings-storage": AndroidSettingsStorage,
  "android-settings-battery": AndroidSettingsBattery,
  "android-settings-apps": AndroidSettingsApps,
  "android-settings-network": AndroidSettingsNetwork,
  "android-settings-sound": AndroidSettingsSound,
  "android-settings-display": AndroidSettingsDisplay,
  "android-settings-security": AndroidSettingsSecurity,
  "android-settings-system": AndroidSettingsSystem,
  "android-settings-location": AndroidSettingsLocation,
  "android-settings-bluetooth": AndroidSettingsBluetooth,
  "android-settings-sim": AndroidSettingsSIM,
  "android-settings-hotspot": AndroidSettingsHotspot,
  "android-settings-notifications": AndroidSettingsNotifications,
  "android-settings-camera": AndroidSettingsCamera,
  "android-settings-volume": AndroidSettingsVolume,
  "android-settings-keyboard": AndroidSettingsKeyboard,
  "android-settings-ringtone": AndroidSettingsRingtone,
  "android-settings-sdcard": AndroidSettingsSDCard,
  "android-settings-safemode": AndroidSettingsSafeMode,
  "android-settings-screentime": AndroidSettingsScreenTime,
  "whatsapp-ban-real": WhatsAppBanReal,
  "whatsapp-privacy-last-seen-settings": WhatsappPrivacyLastSeenSettings,
  "whatsapp-privacy-support-flow": WhatsappPrivacySupportFlow,
  "whatsapp-otp-help-screen": WhatsappOtpHelpScreen,
  "whatsapp-restore-setup-screen": WhatsappRestoreSetupScreen,
  "whatsapp-status-upload-progress": WhatsappStatusUploadProgress,
  "phonepe-payment-failed": PhonePePaymentFailed,
  "phonepe-payment-pending": PhonePePaymentPending,
  "youtube-quality-selector": YouTubeQualitySelector,
  "instagram-login-activity": InstagramLoginActivity,
  "google-account-disabled-real": GoogleAccountDisabledReal,
  "android-wifi-no-internet": AndroidWifiNoInternet,
  "windows-device-manager": WindowsDeviceManager,
  "paytm-kyc-pending-real": PaytmKycPendingReal,
  "sbi-card-blocked": SbiCardBlocked,
  "sbi-netbanking-blocked": SbiNetBankingBlocked,
  "instagram-recovery-screen": InstagramRecoveryScreen,
  "android-otp-sms": AndroidOtpSms,
  "gpay-failed-transaction": GPayFailedTransaction,
  "youtube-buffering-screen": YouTubeBufferingScreen,
  "android-app-crash": AndroidAppCrash,
  "windows-slow-startup": WindowsSlowStartup,
  "phone-water-damage": PhoneWaterDamage,
  "cockroach-removal-setup": CockroachRemovalSetup,
  "stain-removal-oil": StainRemovalOil,
  "sleep-alarm-schedule": SleepAlarmSchedule,
  "self-confidence-tracker": SelfConfidenceTracker,
  "study-pomodoro-timer": StudyPomodoroTimer,
  "android-safe-mode-boot": AndroidSafeModeBoot,
  "laptop-overheat-cpu": LaptopOverheatCpu,
  "antivirus-scan-result": AntivirusScanResult,
  "upi-pin-reset-screen": UpiPinResetScreen,
  "whatsapp-restore-screen": WhatsappRestoreScreen,
  "whatsapp-status-upload-stuck": WhatsappStatusUploadStuck,
  "youtube-account-suspended-real": YoutubeAccountSuspendedReal,
  "google-photos-storage-full-real": GooglePhotosStorageFullReal,
  "android-sim-settings": AndroidSimSettings,
  "pan-card-portal": PanCardPortal,
  "dl-renewal-portal": DlRenewalPortal,
  "cyber-crime-complaint": CyberCrimeComplaint,
};

export function renderMockup(type: MockupType) {
  const Component = mockupMap[type as KnownMockupType];
  return Component ? <Component /> : <AdaptiveMockup type={type} seed={type} />;
}
