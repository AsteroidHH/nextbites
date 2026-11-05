import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { recipes, getRecipe } from "../../data/recipes";

export async function generateStaticParams() {
  return recipes.map((recipe) => ({
    id: recipe.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const recipe = getRecipe(id);

  if (!recipe) {
    return {
      title: "Recipe Not Found — NextBites",
    };
  }

  return {
    title: `${recipe.title} — NextBites`,
    description: recipe.description,
  };
}

export default async function RecipeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe = getRecipe(id);

  // Call notFound() when recipe is missing to trigger app/not-found.tsx
  if (!recipe) {
    notFound();
  }

  const difficultyColor =
    recipe.difficulty === "Easy"
      ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800"
      : recipe.difficulty === "Medium"
      ? "bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border-amber-200 dark:border-amber-800"
      : "bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300 border-rose-200 dark:border-rose-800";

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Back button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 hover:text-amber-600 dark:text-neutral-400 dark:hover:text-amber-400 transition-colors mb-6 group"
      >
        <span className="transition-transform group-hover:-translate-x-1" aria-hidden="true">
          ←
        </span>
        Back to all recipes
      </Link>

      <article className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-10 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        {/* Header Tags & Metadata */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider">
          <span className="rounded-full bg-neutral-100 px-3 py-1 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
            {recipe.cuisine}
          </span>
          <span
            className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${difficultyColor}`}
          >
            {recipe.difficulty}
          </span>
          <span className="text-neutral-400">•</span>
          <span className="text-neutral-500 dark:text-neutral-400 font-medium">
            Recipe #{recipe.id}
          </span>
        </div>

        {/* Title */}
        <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          {recipe.title}
        </h1>

        {/* Description */}
        <p className="mt-3 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
          {recipe.description}
        </p>

        {/* Quick Info bar */}
        <div className="mt-8 grid grid-cols-2 gap-4 rounded-2xl bg-neutral-50 p-4 sm:grid-cols-4 dark:bg-neutral-800/50">
          <div className="text-center">
            <span className="text-xs uppercase text-neutral-500 dark:text-neutral-400">Prep & Cook</span>
            <p className="text-base font-bold text-neutral-900 dark:text-neutral-100">
              {recipe.minutes} mins
            </p>
          </div>
          <div className="text-center">
            <span className="text-xs uppercase text-neutral-500 dark:text-neutral-400">Servings</span>
            <p className="text-base font-bold text-neutral-900 dark:text-neutral-100">
              {recipe.servings} people
            </p>
          </div>
          <div className="text-center">
            <span className="text-xs uppercase text-neutral-500 dark:text-neutral-400">Difficulty</span>
            <p className="text-base font-bold text-neutral-900 dark:text-neutral-100">
              {recipe.difficulty}
            </p>
          </div>
          <div className="text-center">
            <span className="text-xs uppercase text-neutral-500 dark:text-neutral-400">Cuisine</span>
            <p className="text-base font-bold text-neutral-900 dark:text-neutral-100">
              {recipe.cuisine}
            </p>
          </div>
        </div>

        {/* Content Columns: Ingredients & Instructions */}
        <div className="mt-10 grid gap-10 md:grid-cols-5">
          {/* Ingredients (2 cols) */}
          {recipe.ingredients && recipe.ingredients.length > 0 && (
            <div className="md:col-span-2">
              <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 pb-3 border-b border-neutral-100 dark:border-neutral-800">
                Ingredients
              </h2>
              <ul className="mt-4 space-y-2.5">
                {recipe.ingredients.map((ingredient, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-neutral-700 dark:text-neutral-300">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Instructions (3 cols) */}
          {recipe.instructions && recipe.instructions.length > 0 && (
            <div className="md:col-span-3">
              <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 pb-3 border-b border-neutral-100 dark:border-neutral-800">
                Instructions
              </h2>
              <ol className="mt-4 space-y-4">
                {recipe.instructions.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-800 dark:bg-amber-950/60 dark:text-amber-300">
                      {idx + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>

        {/* Tags */}
        {recipe.tags && recipe.tags.length > 0 && (
          <div className="mt-10 pt-6 border-t border-neutral-100 dark:border-neutral-800">
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider block mb-2">
              Tags
            </span>
            <div className="flex flex-wrap gap-2">
              {recipe.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
