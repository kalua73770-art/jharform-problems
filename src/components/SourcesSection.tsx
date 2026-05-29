import { ExternalLink, Shield } from "lucide-react";

interface Source {
  title: string;
  url: string;
  icon?: string;
}

interface SourcesSectionProps {
  sources: Source[];
}

export function SourcesSection({ sources }: SourcesSectionProps) {
  if (!sources || sources.length === 0) return null;

  return (
    <div id="sources" className="my-12 p-6 rounded-2xl bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/50 not-prose">
      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-500 mb-4 flex items-center gap-2">
        <Shield className="w-5 h-5" /> Official Sources & References
      </h3>
      <p className="text-sm text-blue-700/80 dark:text-blue-200/80 mb-4">
        Yeh information official sources se verify ki gayi hai. Aap direct links se aur details padh sakte hain:
      </p>
      <ul className="space-y-3">
        {sources.map((src, i) => (
          <li key={i}>
            <a
              href={src.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-700 dark:text-blue-400 hover:underline font-medium text-sm group"
            >
              <ExternalLink className="w-4 h-4 shrink-0 group-hover:translate-x-0.5 transition-transform" />
              {src.icon && <span className="text-base">{src.icon}</span>}
              {src.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
