"use client";

import { useState, useMemo } from "react";
import type { Recipe } from "../data/recipes";
import RecipeCard from "./RecipeCard";

export default function RecipeSearch({ initialRecipes }: { initialRecipes: Recipe[] }) {
  const [query, setQuery] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState<string>("All");

  const cuisines = useMemo(() => {
    const list = Array.from(new Set(initialRecipes.map((r) => r.cuisine)));
    return ["All", ...list];
  }, [initialRecipes]);

  const filteredRecipes = useMemo(() => {
    return initialRecipes.filter((recipe) => {
      const matchesSearch =
        recipe.title.toLowerCase().includes(query.toLowerCase()) ||
        recipe.description.toLowerCase().includes(query.toLowerCase()) ||
        recipe.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()));

      const matchesCuisine =
        selectedCuisine === "All" || recipe.cuisine === selectedCuisine;

      return matchesSearch && matchesCuisine;
    });
  }, [initialRecipes, query, selectedCuisine]);

  return (
    <div>
      {/* Search and Filters Bar */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 max-w-md">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
            <svg
              className="h-4 w-4 text-neutral-400"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </div>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search recipes, tags, ingredients..."
            className="w-full rounded-xl border border-neutral-200 bg-white py-2.5 pl-10 pr-4 text-sm text-neutral-900 placeholder-neutral-400 shadow-sm transition focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder-neutral-500"
          />
        </div>

        {/* Cuisine Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          {cuisines.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCuisine(c)}
              className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                selectedCuisine === c
                  ? "bg-amber-500 text-white shadow-sm"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Header / Summary */}
      <div className="mb-6 flex items-center justify-between border-b border-neutral-200 pb-4 dark:border-neutral-800">
        <div>
          <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
            {query ? `Search Results for "${query}"` : "Featured Recipes"}
          </h2>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            {filteredRecipes.length} {filteredRecipes.length === 1 ? "dish" : "dishes"} found
          </p>
        </div>
        {(query || selectedCuisine !== "All") && (
          <button
            onClick={() => {
              setQuery("");
              setSelectedCuisine("All");
            }}
            className="text-xs font-semibold text-amber-600 hover:underline dark:text-amber-400"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Recipes Grid or Empty State */}
      {filteredRecipes.length > 0 ? (
        <section
          aria-label="Recipe List"
          className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          }}
        >
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </section>
      ) : (
        <div className="my-16 flex flex-col items-center justify-center text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-50 text-2xl dark:bg-amber-950/40">
            🍽️
          </div>
          <h3 className="mt-4 text-base font-bold text-neutral-900 dark:text-neutral-100">
            No matching recipes found
          </h3>
          <p className="mt-1 max-w-sm text-sm text-neutral-500 dark:text-neutral-400">
            Try adjusting your search terms or picking another cuisine filter.
          </p>
          <button
            onClick={() => {
              setQuery("");
              setSelectedCuisine("All");
            }}
            className="mt-4 rounded-lg bg-neutral-900 px-4 py-2 text-xs font-semibold text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100 transition"
          >
            Reset Search
          </button>
        </div>
      )}
    </div>
  );
}
