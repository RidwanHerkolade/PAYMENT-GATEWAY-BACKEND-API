export function PaymentArtifact() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-20 flex items-start justify-between gap-8">
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-slate-500">
            <span className="h-px w-10 bg-emerald-400/70" />
            <span>Payment activity</span>
          </div>

          <span className="hidden font-mono text-[10px] text-slate-700 sm:block">
            PAYFLOW / 02
          </span>
        </div>

        <div className="relative min-h-[680px]">
          {/* Huge typography */}
          <div className="absolute left-0 top-0 z-0">
            <p className="text-[8rem] font-medium leading-[0.8] tracking-[-0.09em] text-white sm:text-[12rem] lg:text-[16rem]">
              ₦5,000
            </p>

            <div className="mt-7 flex items-center gap-4">
              <span className="h-px w-16 bg-white/20" />

              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600">
                Transaction value
              </span>
            </div>
          </div>

          {/* Receipt */}
          <div className="absolute right-[4%] top-32 z-20 w-[290px] rotate-[3deg] border border-white/10 bg-[#0b0d0c] p-6 shadow-2xl sm:w-[340px]">
            {/* Receipt top */}
            <div className="flex items-center justify-between border-b border-dashed border-white/10 pb-5">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600">
                Payment receipt
              </span>

              <span className="text-[9px] text-emerald-400">● LIVE</span>
            </div>

            {/* Reference */}
            <div className="py-8">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-700">
                Reference
              </p>

              <p className="mt-2 font-mono text-sm text-slate-300">
                PAY-7A49F
              </p>
            </div>

            {/* Status */}
            <div className="flex items-end justify-between border-y border-dashed border-white/10 py-6">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-700">
                  Status
                </p>

                <p className="mt-2 text-2xl font-medium tracking-[-0.04em] text-white">
                  Successful
                </p>
              </div>

              <span className="text-3xl text-emerald-400">↗</span>
            </div>

            {/* Detail */}
            <div className="space-y-4 pt-6">
              <div className="flex justify-between gap-4">
                <span className="text-xs text-slate-600">Currency</span>
                <span className="font-mono text-xs text-slate-400">NGN</span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-xs text-slate-600">Method</span>
                <span className="font-mono text-xs text-slate-400">
                  PAYSTACK
                </span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-xs text-slate-600">Recorded</span>
                <span className="font-mono text-xs text-slate-400">
                  14:21:46
                </span>
              </div>
            </div>

            {/* Barcode */}
            <div className="mt-10 flex h-8 items-end gap-[3px] opacity-30">
              <span className="h-full w-[2px] bg-white" />
              <span className="h-5 w-[3px] bg-white" />
              <span className="h-full w-[1px] bg-white" />
              <span className="h-6 w-[4px] bg-white" />
              <span className="h-full w-[2px] bg-white" />
              <span className="h-4 w-[2px] bg-white" />
              <span className="h-full w-[5px] bg-white" />
              <span className="h-6 w-[1px] bg-white" />
              <span className="h-full w-[3px] bg-white" />
              <span className="h-5 w-[2px] bg-white" />
              <span className="h-full w-[4px] bg-white" />
              <span className="h-7 w-[1px] bg-white" />
              <span className="h-full w-[2px] bg-white" />
              <span className="h-5 w-[3px] bg-white" />
              <span className="h-full w-[1px] bg-white" />
            </div>
          </div>

          {/* Vertical statement */}
          <div className="absolute bottom-16 left-[7%] z-10 hidden lg:block">
            <p
              className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-700"
              style={{ writingMode: "vertical-rl" }}
            >
              money leaves evidence
            </p>
          </div>

          {/* Event trail */}
          <div className="absolute bottom-0 right-0 z-10 w-full max-w-[500px]">
            <div className="flex items-center gap-5 border-t border-white/10 pt-6">
              <span className="font-mono text-[10px] text-slate-700">03</span>

              <span className="h-px flex-1 bg-white/10" />

              <span className="text-[10px] uppercase tracking-[0.2em] text-slate-600">
                Events recorded
              </span>
            </div>

            <div className="mt-7 grid grid-cols-3 gap-5">
              <div>
                <p className="font-mono text-[9px] text-emerald-400/70">
                  01
                </p>
                <p className="mt-2 text-xs text-slate-500">
                  Initialized
                </p>
              </div>

              <div>
                <p className="font-mono text-[9px] text-slate-600">02</p>
                <p className="mt-2 text-xs text-slate-500">
                  Checkout
                </p>
              </div>

              <div>
                <p className="font-mono text-[9px] text-slate-600">03</p>
                <p className="mt-2 text-xs text-slate-500">
                  Confirmed
                </p>
              </div>
            </div>
          </div>

          {/* Small floating annotation */}
          <div className="absolute left-[33%] top-[48%] hidden rotate-[-8deg] border border-white/10 px-4 py-3 lg:block">
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-700">
              verified / recorded
            </p>
          </div>

          {/* Accent line */}
          <div className="absolute bottom-24 left-0 h-px w-[27%] bg-emerald-400/40" />
        </div>
      </div>
    </section>
  );
}