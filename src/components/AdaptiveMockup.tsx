type MockupType = string;

type Theme = {
  shell: string;
  header: string;
  accent: string;
  accentSoft: string;
  text: string;
  muted: string;
  border: string;
  success: string;
  warning: string;
  danger: string;
};

function hashString(input: string) {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash * 31 + input.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

function titleCase(input: string) {
  return input
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();
}

function detectBrand(type: string) {
  if (type.includes("whatsapp")) return "WhatsApp";
  if (type.includes("gmail")) return "Gmail";
  if (type.includes("google")) return "Google";
  if (type.includes("youtube")) return "YouTube";
  if (type.includes("chrome")) return "Chrome";
  if (type.includes("maps")) return "Maps";
  if (type.includes("drive")) return "Drive";
  if (type.includes("photos")) return "Photos";
  if (type.includes("gpay") || type.includes("upi") || type.includes("phonepe")) return "Payments";
  if (type.includes("bank") || type.includes("sbi") || type.includes("paytm")) return "Banking";
  if (type.includes("windows")) return "Windows";
  if (type.includes("instagram")) return "Instagram";
  if (type.includes("facebook")) return "Facebook";
  if (type.includes("telegram")) return "Telegram";
  return "System";
}

function detectTheme(type: string): Theme {
  if (type.includes("whatsapp")) {
    return {
      shell: "#0f172a",
      header: "#075e54",
      accent: "#25d366",
      accentSoft: "#dcfce7",
      text: "#0f172a",
      muted: "#64748b",
      border: "#d1fae5",
      success: "#16a34a",
      warning: "#f59e0b",
      danger: "#dc2626",
    };
  }

  if (type.includes("youtube")) {
    return {
      shell: "#111827",
      header: "#ef4444",
      accent: "#ef4444",
      accentSoft: "#fee2e2",
      text: "#111827",
      muted: "#64748b",
      border: "#fecaca",
      success: "#16a34a",
      warning: "#f59e0b",
      danger: "#dc2626",
    };
  }

  if (type.includes("bank") || type.includes("upi") || type.includes("gpay") || type.includes("phonepe")) {
    return {
      shell: "#0f172a",
      header: "#1d4ed8",
      accent: "#2563eb",
      accentSoft: "#dbeafe",
      text: "#0f172a",
      muted: "#475569",
      border: "#bfdbfe",
      success: "#16a34a",
      warning: "#f59e0b",
      danger: "#dc2626",
    };
  }

  if (type.includes("google") || type.includes("gmail") || type.includes("chrome") || type.includes("drive") || type.includes("photos") || type.includes("maps")) {
    return {
      shell: "#0f172a",
      header: "#2563eb",
      accent: "#2563eb",
      accentSoft: "#dbeafe",
      text: "#0f172a",
      muted: "#475569",
      border: "#bfdbfe",
      success: "#16a34a",
      warning: "#f59e0b",
      danger: "#dc2626",
    };
  }

  if (type.includes("windows")) {
    return {
      shell: "#111827",
      header: "#334155",
      accent: "#0ea5e9",
      accentSoft: "#e0f2fe",
      text: "#111827",
      muted: "#64748b",
      border: "#e2e8f0",
      success: "#16a34a",
      warning: "#f59e0b",
      danger: "#dc2626",
    };
  }

  return {
    shell: "#1f2937",
    header: "#334155",
    accent: "#0f766e",
    accentSoft: "#ccfbf1",
    text: "#111827",
    muted: "#64748b",
    border: "#e2e8f0",
    success: "#16a34a",
    warning: "#f59e0b",
    danger: "#dc2626",
  };
}

function kindFromType(type: string) {
  if (type.includes("settings")) return "settings";
  if (type.includes("bank") || type.includes("upi") || type.includes("payment") || type.includes("transaction") || type.includes("passbook") || type.includes("refund")) return "finance";
  if (type.includes("recovery") || type.includes("disabled") || type.includes("banned") || type.includes("suspended") || type.includes("security") || type.includes("login") || type.includes("otp")) return "account";
  if (
    type.includes("instagram") ||
    type.includes("facebook") ||
    type.includes("whatsapp") ||
    type.includes("telegram") ||
    type.includes("snapchat") ||
    type.includes("linkedin") ||
    type.includes("threads") ||
    type.includes("discord") ||
    type.includes("zoom") ||
    type.includes("spotify") ||
    type.includes("netflix") ||
    type.includes("hotstar") ||
    type.includes("amazon") ||
    type.includes("flipkart") ||
    type.includes("canva") ||
    type.includes("truecaller") ||
    type.includes("sharechat") ||
    type.includes("mx")
  ) return "app";
  if (type.includes("playstore") || type.includes("youtube") || type.includes("chrome") || type.includes("drive") || type.includes("photos") || type.includes("maps") || type.includes("translate") || type.includes("meet")) return "browser";
  if (type.includes("windows") || type.includes("laptop")) return "desktop";
  if (type.includes("home") || type.includes("phone") || type.includes("water") || type.includes("stain") || type.includes("odor")) return "info";
  return "browser";
}

function seedPick<T>(items: T[], seed: number, step = 1) {
  if (items.length === 0) {
    throw new Error("seedPick requires at least one item");
  }
  return (items[(seed * step) % items.length] ?? items[0]) as T;
}

function isPhoneLayout(type: string) {
  return (
    type.includes("settings") ||
    type.includes("bank") ||
    type.includes("upi") ||
    type.includes("payment") ||
    type.includes("transaction") ||
    type.includes("passbook") ||
    type.includes("whatsapp") ||
    type.includes("mobile") ||
    type.includes("phone") ||
    type.includes("android") ||
    type.includes("instagram") ||
    type.includes("facebook") ||
    type.includes("telegram") ||
    type.includes("home") ||
    type.includes("water") ||
    type.includes("stain") ||
    type.includes("odor")
  );
}

function VariantBadge({ label, color }: { label: string; color: string }) {
  return (
    <span
      className="inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold"
      style={{ background: color, color: "#0f172a" }}
    >
      {label}
    </span>
  );
}

function Row({
  title,
  value,
  accent,
}: {
  title: string;
  value?: string;
  accent: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border bg-white px-4 py-3 shadow-sm" style={{ borderColor: accent === "#e2e8f0" ? accent : `${accent}22` }}>
      <div>
        <div className="text-sm font-medium text-slate-900">{title}</div>
        {value ? <div className="text-xs text-slate-500 mt-0.5">{value}</div> : null}
      </div>
      <div className="h-9 w-9 rounded-full" style={{ background: accent, opacity: 0.12 }} />
    </div>
  );
}

function ToggleRow({
  title,
  enabled,
  theme,
}: {
  title: string;
  enabled: boolean;
  theme: Theme;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border bg-white px-4 py-3 shadow-sm" style={{ borderColor: theme.border }}>
      <div>
        <div className="text-sm font-medium text-slate-900">{title}</div>
        <div className="text-xs text-slate-500 mt-0.5">{enabled ? "Enabled" : "Disabled"}</div>
      </div>
      <div
        className="relative h-6 w-11 rounded-full transition-colors"
        style={{ background: enabled ? theme.accent : "#cbd5e1" }}
      >
        <div
          className="absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform"
          style={{ left: enabled ? 24 : 2 }}
        />
      </div>
    </div>
  );
}

function PhoneShell({ children, theme }: { children: React.ReactNode; theme: Theme }) {
  return (
    <div
      className="relative overflow-hidden rounded-[2.25rem] border-8 shadow-2xl"
      style={{ borderColor: theme.shell, background: theme.shell }}
    >
      <div className="absolute inset-x-0 top-0 h-7" style={{ background: theme.shell }} />
      <div className="mx-auto mt-2 h-6 w-28 rounded-b-2xl" style={{ background: theme.shell }} />
      {children}
      <div className="absolute bottom-2 left-1/2 h-1.5 w-24 -translate-x-1/2 rounded-full bg-white/40" />
    </div>
  );
}

function BrowserShell({ children, theme }: { children: React.ReactNode; theme: Theme }) {
  return (
    <div className="overflow-hidden rounded-2xl border bg-white shadow-2xl" style={{ borderColor: theme.border }}>
      <div className="flex items-center gap-2 bg-slate-100 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
        </div>
        <div className="ml-3 flex-1 rounded-full bg-white px-3 py-1.5 text-xs text-slate-500 shadow-sm">
          {theme.accent === "#2563eb" ? "https://support.google.com" : "https://app.example.com"}
        </div>
      </div>
      {children}
    </div>
  );
}

export function AdaptiveMockup({ type, seed }: { type: MockupType; seed: string }) {
  const kind = kindFromType(type);
  const theme = detectTheme(type);
  const brand = detectBrand(type);
  const hash = hashString(`${type}|${seed}`);
  const variant = hash % 5;
  const bright = hash % 2 === 0;
  const seedTitle = seed.split(/[\u2013\u2014-]/)[0] ?? "";
  const title = titleCase(seedTitle.trim() || type);
  const status = seedPick(["Action needed", "Review required", "Pending", "Fix available", "Verified"], hash, 3);
  const subStatus = seedPick(["Recommended by support", "Recent change detected", "Needs attention", "Account step", "One-tap action"], hash, 7);
  const phoneLayout = isPhoneLayout(type);

  const topAccent = bright ? theme.header : theme.accent;

  const phoneContent = (
    <PhoneShell theme={theme}>
      <div className="min-h-[480px] bg-slate-50">
        <div className="flex items-center justify-between px-4 pt-4 pb-2 text-[10px] font-semibold text-slate-700">
          <span>9:41</span>
          <span className="rounded-full bg-white px-2 py-1 shadow-sm">{brand}</span>
        </div>
        <div className="px-3 pb-4">
          <div className="rounded-3xl p-4 text-white shadow-lg" style={{ background: `linear-gradient(135deg, ${topAccent}, ${theme.accent})` }}>
            <div className="text-[11px] uppercase tracking-[0.28em] text-white/80">{kind.toUpperCase()}</div>
            <div className="mt-2 text-lg font-semibold leading-tight">{title}</div>
            <div className="mt-1 text-xs text-white/85">{subStatus}</div>
          </div>

          <div className="mt-4 space-y-3">
            {kind === "settings" && (
              <>
                <Row title={seedPick(["Network & Internet", "Notifications", "App permissions", "Display timeout", "Storage cleanup"], hash, 1)} value={status} accent={theme.accent} />
                <ToggleRow title={seedPick(["Wi-Fi", "Mobile data", "Bluetooth", "Location", "2-Step Verification"], hash, 2)} enabled={variant % 2 === 0} theme={theme} />
                <ToggleRow title={seedPick(["Auto-sync", "Backup", "Dark mode", "Battery saver", "Data saver"], hash, 4)} enabled={variant % 3 !== 0} theme={theme} />
                <Row title={seedPick(["Account details", "Privacy controls", "Device security", "Support", "More options"], hash, 5)} value={seedPick(["Open to continue", "Tap to review", "Recommended"], hash, 6)} accent={theme.accent} />
              </>
            )}

            {kind === "finance" && (
              <>
                <div className="rounded-3xl border bg-white p-4 shadow-sm" style={{ borderColor: theme.border }}>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-widest text-slate-500">Transaction</div>
                      <div className="mt-1 text-xl font-semibold text-slate-900">Rs. {(hash % 2500) + 149}</div>
                    </div>
                    <div className="rounded-full px-3 py-1 text-xs font-semibold" style={{ background: theme.accentSoft, color: theme.text }}>
                      {seedPick(["Failed", "Pending", "Reversed", "Processed"], hash, 2)}
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <Row title={seedPick(["UPI Ref", "Bank Ref", "Transaction ID", "UTR"], hash, 1)} value={`#${hash % 100000000}`} accent={theme.accent} />
                    <Row title={seedPick(["Receiver", "Merchant", "Bank", "App"], hash, 3)} value={brand} accent={theme.accent} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button className="rounded-2xl px-4 py-3 text-sm font-semibold text-white shadow-lg" style={{ background: theme.accent }}>
                    {seedPick(["Report", "Retry", "Dispute", "Track"], hash, 2)}
                  </button>
                  <button className="rounded-2xl border px-4 py-3 text-sm font-semibold" style={{ borderColor: theme.border, background: "white" }}>
                    {seedPick(["Receipt", "Help", "Details", "Share"], hash, 4)}
                  </button>
                </div>
              </>
            )}

            {kind === "account" && (
              <>
                <div className="rounded-3xl border bg-white p-4 shadow-sm" style={{ borderColor: theme.border }}>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full text-white font-bold" style={{ background: theme.accent }}>
                      {brand.slice(0, 1) || "S"}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-slate-900">{brand} Account</div>
                      <div className="text-xs text-slate-500">{status}</div>
                    </div>
                  </div>
                  <div className="mt-4 rounded-2xl px-4 py-3 text-sm" style={{ background: theme.accentSoft }}>
                    {seedPick([
                      "Verify it's you to continue",
                      "We need a recovery method",
                      "Account activity needs review",
                      "Enter the code sent to your device",
                    ], hash, 1)}
                  </div>
                </div>
                <div className="grid gap-3">
                  <Row title={seedPick(["Recovery phone", "Backup email", "2-Step verification", "Security question"], hash, 2)} value={seedPick(["Available", "Checked", "Ready", "Connected"], hash, 3)} accent={theme.accent} />
                  <Row title={seedPick(["Continue", "Try another way", "Appeal", "Reset password"], hash, 4)} value="Tap to proceed" accent={theme.accent} />
                </div>
              </>
            )}

            {(kind === "browser" || kind === "desktop" || kind === "info") && (
              <>
                <div className="rounded-3xl border bg-white p-4 shadow-sm" style={{ borderColor: theme.border }}>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-widest text-slate-500">{brand}</div>
                      <div className="mt-1 text-lg font-semibold text-slate-900">{title}</div>
                    </div>
                    <div className="rounded-full px-3 py-1 text-xs font-semibold" style={{ background: theme.accentSoft, color: theme.text }}>
                      {status}
                    </div>
                  </div>
                  <div className="mt-4 grid gap-3">
                    <Row title={seedPick(["Primary action", "Recommended step", "Security check", "Settings page"], hash, 1)} value={subStatus} accent={theme.accent} />
                    <Row title={seedPick(["Helpful hint", "Next step", "Recovery option", "Related fix"], hash, 2)} value={seedPick(["Tap to continue", "Open now", "Review details"], hash, 3)} accent={theme.accent} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button className="rounded-2xl px-4 py-3 text-sm font-semibold text-white shadow-lg" style={{ background: theme.accent }}>
                    {seedPick(["Open", "Continue", "Check", "Review"], hash, 2)}
                  </button>
                  <button className="rounded-2xl border px-4 py-3 text-sm font-semibold" style={{ borderColor: theme.border, background: "white" }}>
                    {seedPick(["Later", "Cancel", "Back", "Help"], hash, 4)}
                  </button>
                </div>
              </>
            )}

            {kind === "app" && (
              <>
                <div className="rounded-3xl border bg-white p-4 shadow-sm" style={{ borderColor: theme.border }}>
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-xs uppercase tracking-widest text-slate-500">{brand} app</div>
                      <div className="mt-1 text-lg font-semibold text-slate-900">{title}</div>
                    </div>
                    <VariantBadge label={status} color={theme.accentSoft} />
                  </div>
                  <div className="mt-4 rounded-2xl p-4 text-white" style={{ background: `linear-gradient(135deg, ${topAccent}, ${theme.accent})` }}>
                    <div className="text-[11px] uppercase tracking-[0.3em] text-white/80">Issue summary</div>
                    <div className="mt-2 text-sm font-medium leading-relaxed text-white/90">{subStatus}</div>
                    <div className="mt-4 h-2 rounded-full bg-white/20">
                      <div className="h-2 rounded-full bg-white" style={{ width: `${55 + (hash % 30)}%` }} />
                    </div>
                  </div>
                  <div className="mt-4 grid gap-3">
                    <Row title="What happened" value={seedPick(["Login failed", "Content not loading", "Upload stuck", "Payment issue"], hash, 1)} accent={theme.accent} />
                    <Row title="Recommended fix" value={seedPick(["Clear cache", "Check network", "Update app", "Re-login"], hash, 2)} accent={theme.accent} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button className="rounded-2xl px-4 py-3 text-sm font-semibold text-white shadow-lg" style={{ background: theme.accent }}>
                    {seedPick(["Open app", "Continue", "Retry", "Review"], hash, 2)}
                  </button>
                  <button className="rounded-2xl border px-4 py-3 text-sm font-semibold" style={{ borderColor: theme.border, background: "white" }}>
                    {seedPick(["Help", "Later", "Back", "Details"], hash, 4)}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </PhoneShell>
  );

  const browserContent = (
    <BrowserShell theme={theme}>
      <div className="bg-slate-50 p-4">
        <div className="rounded-3xl border bg-white p-5 shadow-sm" style={{ borderColor: theme.border }}>
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-slate-500">{brand}</div>
              <h3 className="mt-1 text-xl font-semibold text-slate-900">{title}</h3>
            </div>
            <VariantBadge label={status} color={theme.accentSoft} />
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="text-xs uppercase tracking-widest text-slate-500">Current state</div>
              <div className="mt-2 text-sm font-medium text-slate-900">{subStatus}</div>
              <div className="mt-3 h-2 rounded-full bg-slate-200">
                <div className="h-2 rounded-full" style={{ width: `${40 + (hash % 50)}%`, background: theme.accent }} />
              </div>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="text-xs uppercase tracking-widest text-slate-500">Recommended</div>
              <div className="mt-2 text-sm font-medium text-slate-900">{seedPick(["Use official help", "Check your settings", "Verify your account", "Review recent activity"], hash, 3)}</div>
              <div className="mt-3 flex flex-wrap gap-2">
                <VariantBadge label={seedPick(["Open", "Verify", "Review", "Continue"], hash, 2)} color={theme.accentSoft} />
                <VariantBadge label={seedPick(["Safe", "Active", "Ready", "Connected"], hash, 4)} color={theme.accentSoft} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {[0, 1, 2].map((index) => (
            <div key={index} className="rounded-2xl border bg-white p-4 shadow-sm" style={{ borderColor: theme.border }}>
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium text-slate-900">{seedPick(["Help", "Security", "Account", "Activity", "Status"], hash + index, 2)}</div>
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: index === 1 ? theme.warning : index === 2 ? theme.success : theme.accent }} />
              </div>
              <div className="mt-2 text-xs text-slate-500">
                {seedPick([
                  "Open support article",
                  "Review recent changes",
                  "Continue to next step",
                  "Check permissions",
                ], hash + index, 4)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </BrowserShell>
  );

  return phoneLayout ? phoneContent : browserContent;
}
