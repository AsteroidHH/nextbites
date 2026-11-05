import Link from "next/link";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/80 bg-white/80 backdrop-blur-md dark:border-neutral-800/80 dark:bg-neutral-950/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white font-bold text-lg shadow-sm group-hover:scale-105 transition-transform">
            NB
          </span>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
              Next<span className="text-amber-500">Bites</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-neutral-600 dark:text-neutral-400 font-semibold -mt-1">
              Daily Recipes
            </span>
          </div>
        </Link>

        <nav aria-label="Main Navigation" className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-semibold text-amber-600 dark:text-amber-400 transition-colors"
          >
            Home
          </Link>
          <span className="inline-flex items-center rounded-full bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700 ring-1 ring-inset ring-amber-600/20 dark:bg-amber-950/40 dark:text-amber-300">
            Part 1: Home Page
          </span>
        </nav>
      </div>
    </header>
  );
}
