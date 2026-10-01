import Link from "next/link";
import { HeroScene } from "@/components/home/HeroScene";

export function Hero() {
  return (
    <section className="relative isolate min-h-[calc(100vh-81px)] overflow-hidden border-b border-white/10">
      <HeroScene />
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-81px)] max-w-7xl items-center px-6 py-20">
        <div className="max-w-2xl">
          <div className="mb-7 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
            <span className="h-px w-8 bg-emerald-400/60" />
            <span>Payment infrastructure</span>
          </div>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-8xl">
            Move money
            <br />
            <span className="text-slate-500">without the friction.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
            A simple payment layer for collecting money, tracking transactions,
            and knowing exactly what happened to every payment.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/signup"
              className="rounded-xl bg-emerald-400 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
              Get started
            </Link>

            <Link
              href="/signin"
              className="rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
