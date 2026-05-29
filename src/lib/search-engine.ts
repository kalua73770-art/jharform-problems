import Fuse from "fuse.js";
import { getAllProblems, type Problem } from "@/data/problems";

let fuse: Fuse<Problem> | null = null;

function getFuse() {
  if (!fuse) {
    fuse = new Fuse(getAllProblems(), {
      keys: [
        { name: "h1", weight: 0.4 },
        { name: "metaTitle", weight: 0.3 },
        { name: "metaDescription", weight: 0.2 },
        { name: "keywords", weight: 0.1 },
        { name: "variants", weight: 0.1 },
      ],
      threshold: 0.4,
      minMatchCharLength: 2,
    });
  }

  return fuse;
}

export function searchProblems(query: string) {
  if (query.trim().length <= 1) return [];
  return getFuse().search(query).map((result) => result.item);
}
