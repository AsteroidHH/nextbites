import type { Recipe } from "../data/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  const difficultyColor =
    recipe.difficulty === "Easy"
      ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800"
      : recipe.difficulty === "Medium"
      ? "bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border-amber-200 dark:border-amber-800"
      : "bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300 border-rose-200 dark:border-rose-800";

  return (
    <article className="group flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-amber-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-amber-500/50">
      <div>
        <div className="flex items-center justify-between gap-2 text-xs font-semibold uppercase tracking-wider">
          <span className="rounded-full bg-neutral-100 px-3 py-1 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
            {recipe.cuisine}
          </span>
          <span
            className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${difficultyColor}`}
          >
            {recipe.difficulty}
          </span>
        </div>

        <h3 className="mt-4 text-xl font-bold tracking-tight text-neutral-900 group-hover:text-amber-600 transition-colors dark:text-neutral-50 dark:group-hover:text-amber-400">
          {recipe.title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 line-clamp-3">
          {recipe.description}
        </p>
      </div>

      <div className="mt-6 border-t border-neutral-100 pt-4 dark:border-neutral-800">
        <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
          <span className="flex items-center gap-1.5 font-medium">
            <svg
              className="h-4 w-4 text-amber-500"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            {recipe.minutes} mins
          </span>

          <span className="flex items-center gap-1.5 font-medium">
            <svg
              className="h-4 w-4 text-amber-500"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            Serves {recipe.servings}
          </span>
        </div>

        {recipe.tags && recipe.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {recipe.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-neutral-50 px-2 py-0.5 text-[11px] font-medium text-neutral-500 dark:bg-neutral-800/60 dark:text-neutral-400"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
