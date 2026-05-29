const HINGLISH_PATTERNS = [
  /\bpractical Hinglish(?: fix| solution)?\b/gi,
  /\bSimple Hinglish(?: steps)?(?: se fix karo)?\b/gi,
  /\bclear Hinglish guide\b/gi,
  /\bHinglish\b/gi,
];

export function cleanVisibleCopy(text: string) {
  let output = text;

  for (const pattern of HINGLISH_PATTERNS) {
    output = output.replace(pattern, "");
  }

  return output
    .replace(/\s{2,}/g, " ")
    .replace(/\s+([,.;:!?])/g, "$1")
    .replace(/\s+—\s+/g, " — ")
    .replace(/\s+-\s+/g, " - ")
    .replace(/\(\s+\)/g, "")
    .replace(/\b(?:,|;|:)\s*(?:,|;|:)+\b/g, ", ")
    .replace(/\s+\./g, ".")
    .trim();
}
