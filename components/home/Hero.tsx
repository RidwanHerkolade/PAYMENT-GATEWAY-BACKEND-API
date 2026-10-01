import Link from "next/link";
import { HeroScene } from "@/components/home/HeroScene";

export function Hero() {
  return (
    <section className="relative isolate min-h-[calc(100vh-80px)] overflow-hidden">
      <HeroScene />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-20">
        <div className="max-w-3xl">
          <div className="mb-7 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
            <span className="h-px w-8 bg-emerald-400/60" />
            <span>Payment infrastructure</span>
          </div>

          <h1 className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-8xl">
            Move money
            <br />
            <span className="text-slate-500">
              without the friction.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
            Collect payments, track every transaction, and keep
            your payment activity in one place.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/signup"
              className="rounded-xl bg-emerald-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
              Start with PayFlow
            </Link>

            <Link
              href="/signin"
              className="px-3 py-3 text-sm font-medium text-slate-300 transition hover:text-white"
            >
              Sign in →
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.16em] text-slate-600">
            <span>Secure checkout</span>
            <span>Real-time status</span>
            <span>Payment history</span>
          </div>
        </div>
      </div>
    </section>
  );
}