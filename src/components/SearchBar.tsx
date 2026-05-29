"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import Link from "next/link";
import type { Problem } from "@/data/problems";
import { cleanVisibleCopy } from "@/lib/cleanVisibleCopy";

let searchEnginePromise: Promise<typeof import("@/lib/search-engine")> | null = null;

function loadSearchEngine() {
  if (!searchEnginePromise) {
    searchEnginePromise = import("@/lib/search-engine");
  }
  return searchEnginePromise;
}

export function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Problem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    const trimmed = query.trim();

    if (trimmed.length <= 1) {
      setResults([]);
      setIsOpen(false);
      setIsSearching(false);
      return () => {
        cancelled = true;
      };
    }

    setIsSearching(true);
    const timer = window.setTimeout(() => {
      loadSearchEngine()
        .then(({ searchProblems }) => {
          if (cancelled) return;
          const searchResults = searchProblems(trimmed).slice(0, 6);
          setResults(searchResults);
          setIsOpen(true);
        })
        .finally(() => {
          if (!cancelled) setIsSearching(false);
        });
    }, 120);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={searchRef} className="relative w-full max-w-2xl mx-auto z-40" role="search">
      <div className="relative flex items-center">
        <Search className="absolute left-4 w-5 h-5 text-muted-foreground" aria-hidden="true" />
        <label htmlFor="problem-search" className="sr-only">Apni problem search karo</label>
        <input
          id="problem-search"
          type="text"
          role="searchbox"
          aria-label="Problem search"
          aria-autocomplete="list"
          aria-expanded={isOpen}
          aria-controls={isOpen ? "search-results" : undefined}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => {
            if (results.length > 0) setIsOpen(true);
          }}
          placeholder="Problem likho (e.g. Jio net slow)..."
          className="w-full h-14 pl-12 pr-12 rounded-full border-2 border-primary/20 bg-background focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-lg shadow-sm"
        />
        {query && (
          <button
            onClick={() => {
              setQuery("");
              setResults([]);
              setIsOpen(false);
            }}
            className="absolute right-4 text-muted-foreground hover:text-foreground"
            aria-label="Search clear karo"
            type="button"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        )}
      </div>

      {isOpen && (results.length > 0 || isSearching) && (
        <div
          id="search-results"
          role="listbox"
          aria-label="Search suggestions"
          className="absolute top-full left-0 right-0 mt-2 bg-card border rounded-2xl shadow-xl overflow-hidden divide-y"
        >
          {isSearching && results.length === 0 ? (
            <div className="block p-4 text-sm text-muted-foreground">Searching...</div>
          ) : (
            results.map((problem, idx) => (
              <Link
                key={problem.slug}
                href={`/${problem.category}/${problem.slug}/`}
                onClick={() => setIsOpen(false)}
                className="block p-4 hover:bg-muted/50 transition-colors"
                role="option"
                aria-selected={idx === 0}
              >
                <h4 className="font-medium text-foreground line-clamp-1">{cleanVisibleCopy(problem.h1)}</h4>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-1">{cleanVisibleCopy(problem.metaDescription)}</p>
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
}
