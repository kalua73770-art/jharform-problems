export type MockupType = string;

export interface ProblemStep { title: string; detail: string; }
export interface Screenshot { caption: string; alt: string; type: "phone" | "browser"; mockupType?: MockupType; imagePath?: string; }
export interface FAQ { q: string; a: string; }
export interface RelatedProblem { title: string; slug: string; category: string; }
export interface Source { title: string; url: string; icon?: string; }
export interface Problem {
  slug: string; category: string;
  metaTitle: string; metaDescription: string; h1: string;
  lastUpdated: string; readingTime: string; difficulty: "Easy" | "Medium" | "Hard";
  description: string; steps: ProblemStep[]; screenshots: Screenshot[];
  proTips: string[]; faqs: FAQ[]; related: RelatedProblem[];
  keywords: string[]; variants: string[];
  sources?: Source[];
}
export interface Category {
  slug: string; name: string; icon: string; description: string;
  metaTitle: string; metaDescription: string; problems: Problem[];
}
