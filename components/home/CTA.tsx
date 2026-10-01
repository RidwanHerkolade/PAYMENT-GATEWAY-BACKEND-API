import Link from "next/link";

export function CTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative min-h-[560px]">
          {/* Small identifier */}
          <div className="absolute left-0 top-0 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />

            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-600">
              PayFlow / Finish
            </span>
          </div>

          {/* Giant type */}
          <div className="pt-20 sm:pt-24">
            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-slate-600">
              Your next payment
            </p>

            <h2 className="mt-5 max-w-6xl text-[4.5rem] font-medium leading-[0.82] tracking-[-0.08em] text-white sm:text-[7rem] lg:text-[10rem]">
              Starts
              <br />
              <span className="ml-[10%] text-slate-600">here.</span>
            </h2>
          </div>

          {/* CTA */}
          <div className="absolute bottom-4 right-0 sm:bottom-8">
            <Link
              href="/signup"
              className="group flex items-center gap-8 border-b border-white/20 pb-4 text-sm text-white transition-colors duration-300 hover:border-emerald-400"
            >
              <span>Start with PayFlow</span>

              <span className="text-lg text-emerald-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </Link>
          </div>

          {/* Decorative rule */}
          <div className="absolute bottom-0 left-0 w-[42%] border-t border-white/10" />

          {/* Large background number */}
          <div className="pointer-events-none absolute -bottom-16 right-[10%] hidden select-none font-mono text-[12rem] leading-none text-white/[0.025] lg:block">
            03
          </div>

          {/* Floating annotation */}
          <div className="absolute right-[18%] top-[32%] hidden rotate-[7deg] border border-white/10 px-4 py-3 lg:block">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-700">
              payment / ready
            </span>
          </div>

          {/* Accent mark */}
          <div className="absolute left-[48%] top-[58%] hidden lg:block">
            <div className="h-12 w-12 rounded-full border border-emerald-400/30">
              <div className="ml-[15px] mt-[15px] h-5 w-5 rounded-full bg-emerald-400/80 blur-[1px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}