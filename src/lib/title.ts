import { cleanVisibleCopy } from "@/lib/cleanVisibleCopy";

const BRAND = "JharForm Problems";

const BODY_SUFFIX_RULES: Array<{ pattern: RegExp; hook: string }> = [
  { pattern: /\bcomplete guide\b/i, hook: "Pakka Fix" },
  { pattern: /\bfix guide\b/i, hook: "7 Fix Jo Kaam Karte Hain" },
  { pattern: /\bquick fix guide\b/i, hook: "Fast Fix Jo Kaam Kare" },
  { pattern: /\beasy repair guide\b/i, hook: "Easy Repair Steps" },
  { pattern: /\brepair guide\b/i, hook: "Repair Steps" },
  { pattern: /\brecovery guide\b/i, hook: "Real Reason + Recovery Fix" },
  { pattern: /\bappeal guide\b/i, hook: "Appeal Steps + Fast Fix" },
  { pattern: /\bcomplete tarika\b/i, hook: "Simple Tarika Jo Kaam Kare" },
  { pattern: /\btarika\b/i, hook: "Simple Tarika Jo Kaam Kare" },
  { pattern: /\bfix\b/i, hook: "7 Fix Jo Kaam Karte Hain" },
  { pattern: /\bguide\b/i, hook: "Pakka Fix" },
  { pattern: /\bkya karein\b/i, hook: "Real Reason + Fix" },
  { pattern: /\breason\b/i, hook: "Real Reason + Fix" },
];

function stripBrandAndYear(value: string) {
  return cleanVisibleCopy(value)
    .replace(/\s*\(\d{4}\)\s*/g, " ")
    .replace(/\s*\|\s*JharForm(?: Problems)?\s*/gi, " ")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function splitBaseAndSuffix(value: string) {
  const parts = value.split(/\s+[—-]\s+/);
  if (parts.length < 2) {
    return { base: value.trim(), suffix: "" };
  }

  return {
    base: parts.slice(0, -1).join(" — ").trim(),
    suffix: (parts[parts.length - 1] ?? "").trim(),
  };
}

function chooseHook(rawSuffix: string, fallback = "Pakka Fix") {
  for (const rule of BODY_SUFFIX_RULES) {
    if (rule.pattern.test(rawSuffix)) {
      return rule.hook;
    }
  }
  return fallback;
}

function ensureQuestionMark(base: string) {
  const trimmed = base.trim();
  if (/[?؟]$/.test(trimmed)) return trimmed;
  return `${trimmed}?`;
}

function buildBodyTitle(rawTitle: string) {
  const stripped = stripBrandAndYear(rawTitle);
  const { base, suffix } = splitBaseAndSuffix(stripped);

  if (!suffix) {
    return stripped;
  }

  const hook = chooseHook(suffix);
  return `${ensureQuestionMark(base)} ${hook}`.trim();
}

export function buildPageTitle(rawTitle: string) {
  return buildBodyTitle(rawTitle);
}

export function buildSeoTitle(rawTitle: string) {
  const bodyTitle = buildBodyTitle(rawTitle);
  if (/\bJharForm\b/i.test(bodyTitle)) {
    return bodyTitle;
  }

  return `${bodyTitle} | ${BRAND}`;
}
