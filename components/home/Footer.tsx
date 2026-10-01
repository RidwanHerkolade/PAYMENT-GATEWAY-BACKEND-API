import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        {/* Upper footer */}
        <div className="grid min-h-[340px] items-start gap-16 py-16 sm:py-20 lg:grid-cols-[1fr_auto]">
          {/* Brand statement */}
          <div>
            <Link
              href="/"
              className="inline-block text-2xl font-semibold tracking-[-0.05em] text-white"
            >
              PayFlow<span className="text-emerald-400">.</span>
            </Link>

            <p className="mt-8 max-w-sm text-sm leading-7 text-slate-500">
              Payment infrastructure for products that need money to move
              without getting in the way.
            </p>
          </div>

          {/* Navigation */}
          <nav className="grid grid-cols-2 gap-x-16 gap-y-5 text-sm sm:gap-x-24">
            <div>
              <p className="mb-5 font-mono text-[9px] uppercase tracking-[0.2em] text-slate-700">
                Explore
              </p>

              <div className="space-y-3">
                <Link
                  href="/"
                  className="block text-slate-500 transition-colors hover:text-white"
                >
                  Home
                </Link>

                <Link
                  href="/dashboard"
                  className="block text-slate-500 transition-colors hover:text-white"
                >
                  Dashboard
                </Link>
              </div>
            </div>

            <div>
              <p className="mb-5 font-mono text-[9px] uppercase tracking-[0.2em] text-slate-700">
                Account
              </p>

              <div className="space-y-3">
                <Link
                  href="/login"
                  className="block text-slate-500 transition-colors hover:text-white"
                >
                  Login
                </Link>

                <Link
                  href="/signup"
                  className="block text-slate-500 transition-colors hover:text-white"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </nav>
        </div>

        {/* Oversized footer word */}
        <div className="overflow-hidden border-t border-white/10 pt-8">
          <p className="select-none text-[18vw] font-semibold leading-[0.75] tracking-[-0.09em] text-white/[0.035]">
            PAYFLOW
          </p>
        </div>

        {/* Bottom line */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-[10px] uppercase tracking-[0.18em] text-slate-700 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 PayFlow</span>

          <div className="flex items-center gap-4">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
            <span>Payments in motion</span>
          </div>

          <span className="font-mono">NGN / 01</span>
        </div>
      </div>
    </footer>
  );
}