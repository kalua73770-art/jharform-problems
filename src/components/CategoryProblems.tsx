"use client";

import { useState } from "react";
import Link from "next/link";
import { Pagination } from "./Pagination";
import type { Problem } from "@/data/problems";
import { cleanVisibleCopy } from "@/lib/cleanVisibleCopy";

interface CategoryProblemsProps {
  problems: Problem[];
  categorySlug: string;
  categoryName: string;
  perPage?: number;
}

export function CategoryProblems({
  problems,
  categorySlug,
  perPage = 9,
}: CategoryProblemsProps) {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(problems.length / perPage);

  const paginated = problems.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="space-y-6">
      {problems.length > 0 ? (
        <>
          <div className="grid md:grid-cols-2 gap-6">
            {paginated.map((prob) => (
              <Link
                key={prob.slug}
                href={`/${categorySlug}/${prob.slug}/`}
                className="p-6 rounded-2xl border bg-card hover:shadow-md transition-all flex flex-col gap-4 group"
              >
                <h3 className="font-semibold text-xl group-hover:text-primary transition-colors line-clamp-2">
                  {cleanVisibleCopy(prob.h1)}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {cleanVisibleCopy(prob.metaDescription)}
                </p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground mt-auto">
                  <span className="px-2 py-1 rounded-md bg-muted">{prob.difficulty}</span>
                  <span>{prob.readingTime}</span>
                  <span>Updated {prob.lastUpdated}</span>
                </div>
                <div className="text-sm font-medium text-primary">Read Solution &rarr;</div>
              </Link>
            ))}
          </div>

          {totalPages > 1 && (
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          )}
        </>
      ) : (
        <div className="text-center py-12 bg-muted/30 rounded-2xl border border-dashed">
          <p className="text-muted-foreground">
            Is category mein abhi tak koi solution add nahi hua hai. Hum jaldi hi update karenge!
          </p>
        </div>
      )}
    </div>
  );
}
