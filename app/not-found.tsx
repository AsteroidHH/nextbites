import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 py-16 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-amber-100 text-4xl shadow-sm dark:bg-amber-950/60">
        🥣
      </div>
      <span className="mt-6 rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-700 ring-1 ring-inset ring-amber-600/20 dark:bg-amber-950/40 dark:text-amber-300">
        404 — Not Found
      </span>
      <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
        Recipe Not Found
      </h1>
      <p className="mt-3 text-base text-neutral-600 dark:text-neutral-400">
        We checked everywhere in the kitchen pantry, but this dish doesn&apos;t seem to exist. It might have been removed or the link might be misspelled.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
        >
          <span aria-hidden="true">←</span>
          Return to Recipes
        </Link>
      </div>
    </div>
  );
}
