export default function RecipeLoading() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 animate-pulse">
      {/* Back button skeleton */}
      <div className="mb-6 h-5 w-32 rounded bg-neutral-200 dark:bg-neutral-800" />

      <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-10 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        {/* Badges skeleton */}
        <div className="flex gap-2">
          <div className="h-6 w-20 rounded-full bg-neutral-200 dark:bg-neutral-800" />
          <div className="h-6 w-16 rounded-full bg-neutral-200 dark:bg-neutral-800" />
        </div>

        {/* Title skeleton */}
        <div className="mt-6 h-10 w-3/4 rounded-2xl bg-neutral-200 dark:bg-neutral-800" />

        {/* Description skeleton */}
        <div className="mt-4 space-y-2">
          <div className="h-4 w-full rounded bg-neutral-200 dark:bg-neutral-800" />
          <div className="h-4 w-5/6 rounded bg-neutral-200 dark:bg-neutral-800" />
        </div>

        {/* Metrics bar skeleton */}
        <div className="mt-8 grid grid-cols-2 gap-4 rounded-2xl bg-neutral-100 p-6 sm:grid-cols-4 dark:bg-neutral-800/60">
          <div className="h-8 rounded bg-neutral-200 dark:bg-neutral-700" />
          <div className="h-8 rounded bg-neutral-200 dark:bg-neutral-700" />
          <div className="h-8 rounded bg-neutral-200 dark:bg-neutral-700" />
          <div className="h-8 rounded bg-neutral-200 dark:bg-neutral-700" />
        </div>

        {/* Content columns skeleton */}
        <div className="mt-10 grid gap-10 md:grid-cols-5">
          <div className="space-y-3 md:col-span-2">
            <div className="h-6 w-28 rounded bg-neutral-200 dark:bg-neutral-800" />
            <div className="h-4 w-full rounded bg-neutral-200 dark:bg-neutral-800" />
            <div className="h-4 w-4/5 rounded bg-neutral-200 dark:bg-neutral-800" />
            <div className="h-4 w-5/6 rounded bg-neutral-200 dark:bg-neutral-800" />
          </div>
          <div className="space-y-4 md:col-span-3">
            <div className="h-6 w-32 rounded bg-neutral-200 dark:bg-neutral-800" />
            <div className="h-12 w-full rounded bg-neutral-200 dark:bg-neutral-800" />
            <div className="h-12 w-full rounded bg-neutral-200 dark:bg-neutral-800" />
          </div>
        </div>
      </div>
    </div>
  );
}
