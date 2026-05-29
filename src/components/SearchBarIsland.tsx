"use client";

import dynamic from "next/dynamic";

const SearchBar = dynamic(() => import("@/components/SearchBar").then((mod) => mod.SearchBar), {
  ssr: false,
  loading: () => <SearchBarShell />,
});

function SearchBarShell() {
  return (
    <div className="relative w-full max-w-2xl mx-auto z-40" role="search" aria-label="Problem search">
      <div className="relative flex items-center">
        <div className="absolute left-4 w-5 h-5 rounded-full bg-muted" aria-hidden="true" />
        <div className="w-full h-14 rounded-full border-2 border-primary/20 bg-background shadow-sm" />
      </div>
    </div>
  );
}

export function SearchBarIsland() {
  return <SearchBar />;
}
