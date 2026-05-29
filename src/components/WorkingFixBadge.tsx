import { CheckCircle2, UserCheck } from "lucide-react";

interface WorkingFixBadgeProps {
  author?: string;
  lastChecked?: string;
}

export function WorkingFixBadge({ author = "JharForm Problems Team", lastChecked = "May 2026" }: WorkingFixBadgeProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 my-4">
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium border border-green-200 dark:border-green-800/50">
        <CheckCircle2 className="w-4 h-4" />
        Working Fix 2026
      </div>
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 text-xs font-medium border border-blue-200 dark:border-blue-800/40">
        <UserCheck className="w-3 h-3" />
        Last checked: {lastChecked} · Reviewed by {author}
      </div>
    </div>
  );
}