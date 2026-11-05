export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 animate-pulse">
      {/* Hero skeleton */}
      <div className="mb-10 space-y-4">
        <div className="h-6 w-36 rounded-full bg-neutral-200 dark:bg-neutral-800" />
        <div className="h-12 w-3/4 max-w-lg rounded-2xl bg-neutral-200 dark:bg-neutral-800" />
        <div className="h-5 w-2/3 max-w-md rounded-xl bg-neutral-200 dark:bg-neutral-800" />
      </div>

      {/* Filter / Search Bar skeleton */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="h-10 w-full max-w-md rounded-xl bg-neutral-200 dark:bg-neutral-800" />
        <div className="flex gap-2">
          <div className="h-8 w-16 rounded-full bg-neutral-200 dark:bg-neutral-800" />
          <div className="h-8 w-20 rounded-full bg-neutral-200 dark:bg-neutral-800" />
          <div className="h-8 w-20 rounded-full bg-neutral-200 dark:bg-neutral-800" />
        </div>
      </div>

      {/* Grid skeleton */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900"
          >
            <div className="space-y-4">
              <div className="flex justify-between">
                <div className="h-5 w-16 rounded-full bg-neutral-200 dark:bg-neutral-800" />
                <div className="h-5 w-14 rounded-full bg-neutral-200 dark:bg-neutral-800" />
              </div>
              <div className="h-6 w-3/4 rounded-lg bg-neutral-200 dark:bg-neutral-800" />
              <div className="space-y-2">
                <div className="h-4 w-full rounded bg-neutral-200 dark:bg-neutral-800" />
                <div className="h-4 w-5/6 rounded bg-neutral-200 dark:bg-neutral-800" />
              </div>
            </div>
            <div className="mt-6 border-t border-neutral-100 pt-4 dark:border-neutral-800">
              <div className="flex justify-between">
                <div className="h-4 w-20 rounded bg-neutral-200 dark:bg-neutral-800" />
                <div className="h-4 w-20 rounded bg-neutral-200 dark:bg-neutral-800" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
