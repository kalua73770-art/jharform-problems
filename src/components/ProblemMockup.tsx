import React from "react";

export type MockupType = string;

type Variant = "phone" | "browser";

type MockupSpec = {
  brand: string;
  title: string;
  subtitle: string;
  accent: string;
  accentSoft: string;
  header: string;
  badge: string;
  primaryAction: string;
  secondaryAction: string;
  rows: { label: string; value: string }[];
  note: string;
};

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
  if (type.includes("gpay") || type.includes("upi") || type.includes("phonepe") || type.includes("paytm")) return "Payments";
  if (type.includes("bank") || type.includes("sbi")) return "Banking";
  if (type.includes("windows")) return "Windows";
  if (type.includes("instagram")) return "Instagram";
  if (type.includes("facebook")) return "Facebook";
  if (type.includes("telegram")) return "Telegram";
  if (type.includes("android")) return "Android";
  return "System";
}

function deriveSpec(typeRaw: string, caption: string, alt: string): MockupSpec {
  const type = `${typeRaw} ${caption} ${alt}`.toLowerCase();
  const brand = detectBrand(type);
  const issue = titleCase(
    typeRaw
      .replace(/[-_]+/g, " ")
      .replace(/\s*(screen|page|flow|settings|console|dialog|menu|recovery|storage|repair|support).*/i, "")
      .trim() || alt || caption || "Problem"
  );

  const commonRows = [
    { label: "Status", value: type.includes("failed") || type.includes("error") ? "Attention needed" : "Needs review" },
    { label: "Cause", value: type.includes("network") ? "Signal / mode mismatch" : type.includes("storage") ? "Space / cache issue" : type.includes("login") || type.includes("otp") ? "Verification blocked" : "App / settings mismatch" },
    { label: "Fix", value: type.includes("reset") ? "Reset settings" : type.includes("restore") ? "Restore access" : type.includes("update") ? "Update & retry" : "Open troubleshooting steps" },
  ];

  if (type.includes("whatsapp")) {
    return {
      brand,
      title: issue || "WhatsApp Support",
      subtitle: "Account access and privacy problem",
      accent: "#25D366",
      accentSoft: "#DCFCE7",
      header: "#075E54",
      badge: "Official WhatsApp style",
      primaryAction: "Open support",
      secondaryAction: "Check privacy settings",
      rows: [
        { label: "Device", value: "Android phone" },
        { label: "Alert", value: "Login / ban / restore issue" },
        { label: "Recommended", value: "Verify number and retry" },
      ],
      note: "Use the support route shown below to continue safely.",
    };
  }

  if (type.includes("gmail") || type.includes("google") || type.includes("chrome") || type.includes("drive") || type.includes("photos") || type.includes("maps")) {
    return {
      brand,
      title: issue || "Google Account",
      subtitle: "Account access / sync problem",
      accent: "#2563EB",
      accentSoft: "#DBEAFE",
      header: "#1D4ED8",
      badge: "Google-style support",
      primaryAction: "Recover account",
      secondaryAction: "Check security",
      rows: [
        { label: "State", value: "Sign-in or sync interrupted" },
        { label: "Security", value: "Verify recovery details" },
        { label: "Next", value: "Use account help flow" },
      ],
      note: "The layout mirrors the common Google help flow for faster recognition.",
    };
  }

  if (type.includes("youtube")) {
    return {
      brand,
      title: issue || "YouTube Playback",
      subtitle: "Video / quality / buffering issue",
      accent: "#EF4444",
      accentSoft: "#FEE2E2",
      header: "#EF4444",
      badge: "YouTube-style player",
      primaryAction: "Change quality",
      secondaryAction: "Retry playback",
      rows: [
        { label: "Quality", value: "Auto / 144p / 720p" },
        { label: "Network", value: "Buffering or slow data" },
        { label: "Tip", value: "Use stable connection" },
      ],
      note: "A compact player mockup keeps load low while staying visually close.",
    };
  }

  if (type.includes("bank") || type.includes("upi") || type.includes("gpay") || type.includes("phonepe") || type.includes("paytm") || type.includes("transaction")) {
    return {
      brand,
      title: issue || "Payments",
      subtitle: "Transaction / UPI / wallet issue",
      accent: "#2563EB",
      accentSoft: "#DBEAFE",
      header: "#1D4ED8",
      badge: "Payment flow",
      primaryAction: "Retry payment",
      secondaryAction: "Check bank status",
      rows: [
        { label: "Transaction", value: "Pending / failed" },
        { label: "Bank", value: "UPI / wallet linked" },
        { label: "Next", value: "Review status and logs" },
      ],
      note: "This keeps the key payment states visible without a heavy render tree.",
    };
  }

  if (type.includes("instagram") || type.includes("facebook") || type.includes("telegram")) {
    return {
      brand,
      title: issue || brand,
      subtitle: "Social app recovery / login issue",
      accent: "#0EA5E9",
      accentSoft: "#E0F2FE",
      header: "#334155",
      badge: "Social support screen",
      primaryAction: "Continue recovery",
      secondaryAction: "Open help center",
      rows: commonRows,
      note: "Focused on the account recovery path so the mockup feels real but stays light.",
    };
  }

  if (type.includes("windows") || type.includes("computer") || type.includes("laptop") || type.includes("pc")) {
    return {
      brand,
      title: issue || "Windows Help",
      subtitle: "Settings / repair / system issue",
      accent: "#0EA5E9",
      accentSoft: "#E0F2FE",
      header: "#334155",
      badge: "Windows support",
      primaryAction: "Run troubleshooter",
      secondaryAction: "Open settings",
      rows: [
        { label: "Area", value: "Device / repair / updates" },
        { label: "Status", value: "Needs troubleshooting" },
        { label: "Next", value: "Apply fix steps" },
      ],
      note: "A clean Windows-style panel keeps desktop previews readable on all screens.",
    };
  }

  if (type.includes("android")) {
    return {
      brand,
      title: issue || "Android Settings",
      subtitle: "Phone / network / app issue",
      accent: "#16A34A",
      accentSoft: "#DCFCE7",
      header: "#16A34A",
      badge: "Android device",
      primaryAction: "Open settings",
      secondaryAction: "Try safe mode",
      rows: [
        { label: "Device", value: "Android phone" },
        { label: "Area", value: type.includes("battery") ? "Battery / power" : type.includes("network") ? "Network / SIM" : type.includes("apps") ? "Apps / storage" : "Device settings" },
        { label: "Next", value: "Apply recommended fix" },
      ],
      note: "This compact phone screen keeps the same vibe across mobile and desktop.",
    };
  }

  return {
    brand,
    title: issue || titleCase(typeRaw || "Problem"),
    subtitle: caption || alt || "Problem screen",
    accent: "#0F766E",
    accentSoft: "#CCFBF1",
    header: "#334155",
    badge: "Generic support",
    primaryAction: "View steps",
    secondaryAction: "Check details",
    rows: commonRows,
    note: "Lightweight, server-rendered preview for fast page loads.",
  };
}

function MiniHeader({ spec, variant }: { spec: MockupSpec; variant: Variant }) {
  return (
    <div
      style={{
        background: spec.header,
        color: "white",
        padding: variant === "phone" ? "10px 12px" : "12px 14px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
      }}
    >
      <div style={{ minWidth: 0 }}>
        <div style={{ fontSize: variant === "phone" ? 10 : 11, opacity: 0.85, letterSpacing: 0.4 }}>{spec.brand}</div>
        <div style={{ fontSize: variant === "phone" ? 14 : 16, fontWeight: 700, lineHeight: 1.2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
          {spec.title}
        </div>
      </div>
      <div style={{ fontSize: 10, background: "rgba(255,255,255,0.16)", padding: "4px 8px", borderRadius: 999 }}>
        {spec.badge}
      </div>
    </div>
  );
}

function MockupBody({ spec, variant }: { spec: MockupSpec; variant: Variant }) {
  return (
    <div style={{ background: "#fff", height: "100%", display: "flex", flexDirection: "column" }}>
      <MiniHeader spec={spec} variant={variant} />

      <div style={{ padding: variant === "phone" ? 12 : 16, display: "grid", gap: 10, flex: 1 }}>
        <div style={{ background: spec.accentSoft, border: `1px solid ${spec.accentSoft}`, borderRadius: 16, padding: variant === "phone" ? 10 : 12 }}>
          <div style={{ fontSize: variant === "phone" ? 11 : 12, color: "#334155", marginBottom: 2 }}>{spec.subtitle}</div>
          <div style={{ fontSize: variant === "phone" ? 15 : 17, fontWeight: 700, color: "#0f172a", lineHeight: 1.25 }}>{spec.title}</div>
        </div>

        <div style={{ display: "grid", gap: 8 }}>
          {spec.rows.map((row) => (
            <div key={row.label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, border: "1px solid #e5e7eb", borderRadius: 14, padding: variant === "phone" ? "8px 10px" : "10px 12px" }}>
              <span style={{ fontSize: variant === "phone" ? 11 : 12, color: "#64748b" }}>{row.label}</span>
              <span style={{ fontSize: variant === "phone" ? 12 : 13, color: "#111827", fontWeight: 600, textAlign: "right" }}>{row.value}</span>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gap: 8 }}>
          <button
            style={{
              border: 0,
              borderRadius: 14,
              background: spec.accent,
              color: "white",
              fontSize: variant === "phone" ? 12 : 14,
              fontWeight: 700,
              padding: variant === "phone" ? "10px 12px" : "12px 14px",
              width: "100%",
            }}
          >
            {spec.primaryAction}
          </button>
          <button
            style={{
              border: `1px solid ${spec.accent}`,
              borderRadius: 14,
              background: "white",
              color: spec.accent,
              fontSize: variant === "phone" ? 12 : 14,
              fontWeight: 700,
              padding: variant === "phone" ? "10px 12px" : "12px 14px",
              width: "100%",
            }}
          >
            {spec.secondaryAction}
          </button>
        </div>

        <div style={{ marginTop: "auto", fontSize: variant === "phone" ? 10 : 11, color: "#64748b", lineHeight: 1.4, background: "#f8fafc", borderRadius: 12, padding: variant === "phone" ? 10 : 12, border: "1px solid #eef2f7" }}>
          {spec.note}
        </div>
      </div>
    </div>
  );
}

export function renderProblemMockup(type: MockupType, caption = "", alt = "", variant: Variant = "phone") {
  const spec = deriveSpec(String(type || ""), caption, alt);

  if (variant === "phone") {
    return <MockupBody spec={spec} variant="phone" />;
  }

  return (
    <div style={{ background: "#fff", minHeight: 320, display: "flex", flexDirection: "column" }}>
      <div style={{ background: "#e5e7eb", height: 34, display: "flex", alignItems: "center", gap: 8, padding: "0 12px" }}>
        <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f57" }} />
        <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ffbd2e" }} />
        <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#28c840" }} />
        <div style={{ flex: 1, marginLeft: 6, height: 18, borderRadius: 999, background: "#f8fafc", border: "1px solid #dbe2ea" }} />
      </div>
      <div style={{ padding: 16, flex: 1 }}>
        <div style={{ border: "1px solid #e5e7eb", borderRadius: 18, overflow: "hidden", boxShadow: "0 16px 38px rgba(15,23,42,0.08)" }}>
          <div style={{ background: spec.header, padding: "14px 16px", color: "white", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
            <div>
              <div style={{ fontSize: 11, opacity: 0.8 }}>{spec.brand}</div>
              <div style={{ fontSize: 18, fontWeight: 800, lineHeight: 1.1 }}>{spec.title}</div>
            </div>
            <div style={{ fontSize: 10, background: "rgba(255,255,255,0.16)", padding: "4px 8px", borderRadius: 999 }}>{spec.badge}</div>
          </div>
          <div style={{ padding: 16, display: "grid", gap: 12, background: "#fff" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
              {spec.rows.slice(0, 3).map((row) => (
                <div key={row.label} style={{ border: "1px solid #e5e7eb", borderRadius: 14, padding: 12, background: "#fafafa" }}>
                  <div style={{ fontSize: 11, color: "#64748b" }}>{row.label}</div>
                  <div style={{ fontSize: 13, color: "#111827", fontWeight: 600, marginTop: 4 }}>{row.value}</div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <button style={{ border: 0, borderRadius: 14, background: spec.accent, color: "white", fontSize: 13, fontWeight: 700, padding: "12px 14px" }}>{spec.primaryAction}</button>
              <button style={{ border: `1px solid ${spec.accent}`, borderRadius: 14, background: "white", color: spec.accent, fontSize: 13, fontWeight: 700, padding: "12px 14px" }}>{spec.secondaryAction}</button>
            </div>
            <div style={{ fontSize: 12, color: "#64748b", lineHeight: 1.5, background: "#f8fafc", borderRadius: 14, padding: 12, border: "1px solid #eef2f7" }}>{spec.note}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
