"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to console or error reporting service
    console.error("NextBites caught an error:", error);
  }, [error]);

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 py-16 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-rose-100 text-4xl shadow-sm dark:bg-rose-950/60">
        ⚠️
      </div>

      <span className="mt-6 rounded-full bg-rose-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-rose-700 ring-1 ring-inset ring-rose-600/20 dark:bg-rose-950/40 dark:text-rose-300">
        Something Went Wrong
      </span>

      <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
        Oops! The Kitchen Hit a Snag
      </h1>

      <p className="mt-3 text-base text-neutral-600 dark:text-neutral-400">
        An unexpected error occurred while loading this recipe page. Don&apos;t worry, you can try reloading the component or heading back home.
      </p>

      {error.message && (
        <div className="mt-4 max-w-md rounded-xl bg-neutral-100 p-3 text-xs font-mono text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
          {error.message}
        </div>
      )}

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={() => reset()}
          className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
          >
            <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
            <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
            <path d="M16 21h5v-5" />
          </svg>
          Try Again
        </button>

        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-700 shadow-sm transition hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
