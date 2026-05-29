import type { Category, Problem, RelatedProblem } from "./types";
import { mobileCategory } from "./categories/mobile";
import { googleCategory } from "./categories/google";
import { paymentCategory } from "./categories/payment";
import { documentCategory } from "./categories/document";
import { networkCategory } from "./categories/network";
import { whatsappCategory } from "./categories/whatsapp";
import { appsCategory } from "./categories/apps";
import { computerCategory } from "./categories/computer";
import { real_lifeCategory } from "./categories/real_life";
import { homeCategory } from "./categories/home";

export * from "./types";

export const categories: Category[] = [
  mobileCategory,
  googleCategory,
  paymentCategory,
  documentCategory,
  networkCategory,
  whatsappCategory,
  appsCategory,
  computerCategory,
  real_lifeCategory,
  homeCategory,
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug);
}

export function getProblemBySlug(categorySlug: string, problemSlug: string): import("./types").Problem | undefined {
  return getCategoryBySlug(categorySlug)?.problems.find(p => p.slug === problemSlug);
}

export function getAllProblems(): import("./types").Problem[] {
  return categories.flatMap(c => c.problems);
}

const STOP_WORDS = new Set([
  "hai",
  "ho",
  "ho raha",
  "ho rahi",
  "nahi",
  "nahi ho raha",
  "kya",
  "kaise",
  "kar",
  "karna",
  "wala",
  "wale",
  "wali",
  "mein",
  "me",
  "se",
  "aur",
  "the",
  "and",
  "of",
  "to",
  "ka",
  "ki",
  "ke",
  "ko",
  "pe",
  "par",
  "ya",
  "aur",
  "this",
  "that",
  "for",
  "with",
]);

function tokenize(value: string): string[] {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .split(/\s+/)
    .map((token) => token.trim())
    .filter((token) => token.length > 2 && !STOP_WORDS.has(token));
}

function uniqueTokens(problem: Problem): string[] {
  return Array.from(
    new Set([
      ...tokenize(problem.slug),
      ...tokenize(problem.h1),
      ...tokenize(problem.metaTitle),
      ...tokenize(problem.metaDescription),
      ...problem.keywords.flatMap(tokenize),
      ...problem.variants.flatMap(tokenize),
    ])
  );
}

export function getSmartRelatedProblems(problem: Problem, limit = 4): RelatedProblem[] {
  const all = getAllProblems();
  const byKey = new Map<string, Problem>(all.map((p) => [`${p.category}/${p.slug}`, p] as const));
  const seen = new Set<string>();
  const output: RelatedProblem[] = [];

  const pushIfValid = (candidate: RelatedProblem) => {
    const key = `${candidate.category}/${candidate.slug}`;
    if (key === `${problem.category}/${problem.slug}`) return;
    if (!byKey.has(key)) return;
    if (seen.has(key)) return;
    seen.add(key);
    output.push(candidate);
  };

  for (const candidate of problem.related) {
    pushIfValid(candidate);
    if (output.length >= limit) return output.slice(0, limit);
  }

  const baseTokens = new Set(uniqueTokens(problem));
  const baseBrand = tokenize(problem.category);

  const scored = all
    .filter((candidate) => candidate.category !== problem.category || candidate.slug !== problem.slug)
    .map((candidate) => {
      const key = `${candidate.category}/${candidate.slug}`;
      const candidateTokens = uniqueTokens(candidate);
      let score = 0;

      if (candidate.category === problem.category) score += 8;
      if (candidate.category === problem.category && candidate.slug !== problem.slug) score += 2;

      for (const token of candidateTokens) {
        if (baseTokens.has(token)) score += 3;
        if (baseBrand.includes(token)) score += 1;
      }

      const sharedKeywords = candidate.keywords.filter((kw) => problem.keywords.includes(kw)).length;
      score += sharedKeywords * 4;

      const sharedVariants = candidate.variants.filter((variant) => problem.variants.includes(variant)).length;
      score += sharedVariants * 2;

      if (candidate.slug.split("-")[0] === problem.slug.split("-")[0]) score += 2;

      return { key, candidate, score };
    })
    .sort((a, b) => b.score - a.score || a.candidate.h1.localeCompare(b.candidate.h1));

  for (const entry of scored) {
    pushIfValid({
      title: entry.candidate.h1,
      slug: entry.candidate.slug,
      category: entry.candidate.category,
    });
    if (output.length >= limit) break;
  }

  return output.slice(0, limit);
}
