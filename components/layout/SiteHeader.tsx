import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="relative z-50 border-b border-white/10">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-xl font-semibold tracking-[-0.03em] text-white"
        >
          Pay<span className="text-emerald-400">Flow</span>
        </Link>

        <nav className="flex items-center gap-2">
          <Link
            href="/signin"
            className="px-4 py-2 text-sm font-medium text-slate-400 transition hover:text-white"
          >
            Sign in
          </Link>

          <Link
            href="/signup"
            className="rounded-lg border border-white/10 bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
          >
            Get started
          </Link>
        </nav>
      </div>
    </header>
  );
}