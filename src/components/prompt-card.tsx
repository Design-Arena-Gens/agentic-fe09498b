"use client";

import { useState } from "react";

type PromptCardProps = {
  index: number;
  title: string;
  prompt: string;
  focus: string;
};

export function PromptCard({ index, title, prompt, focus }: PromptCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy prompt", error);
    }
  };

  return (
    <article className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/80 p-6 shadow-lg shadow-sky-950/5 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-slate-900/80">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="inline-flex items-center rounded-full bg-sky-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 dark:text-sky-300">
            {title}
          </span>
          <p className="mt-4 text-sm font-medium uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
            {focus}
          </p>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="rounded-full border border-sky-500/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700 transition hover:border-sky-500 hover:bg-sky-500/10 dark:text-sky-200"
          aria-label={`Copy prompt ${index}`}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <p className="mt-6 text-sm leading-6 text-slate-600 dark:text-slate-200">
        {prompt}
      </p>
    </article>
  );
}
