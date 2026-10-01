// const steps = [
//   {
//     number: "01",
//     title: "Initialize",
//     description:
//       "Create a payment securely from your authenticated account.",
//   },
//   {
//     number: "02",
//     title: "Checkout",
//     description:
//       "Complete the transaction through a secure hosted checkout.",
//   },
//   {
//     number: "03",
//     title: "Confirm",
//     description:
//       "Verify the payment and keep the final status in your history.",
//   },
// ];

// export function PaymentFlow() {
//   return (
//     <section className="border-b border-white/10 bg-slate-950 px-6 py-28">
//       <div className="mx-auto max-w-7xl">
//         <div className="max-w-2xl">
//           <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-400">
//             How it works
//           </p>

//           <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
//             From payment intent
//             <br />
//             to confirmed transaction.
//           </h2>

//           <p className="mt-5 max-w-xl text-base leading-7 text-slate-500">
//             PayFlow keeps the payment lifecycle simple: initialize
//             the transaction, complete checkout, and confirm the result.
//           </p>
//         </div>

//         <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
//           {steps.map((step) => (
//             <div
//               key={step.number}
//               className="group bg-slate-950 p-8 transition hover:bg-slate-900"
//             >
//               <div className="flex items-center justify-between">
//                 <span className="text-sm font-medium text-slate-600">
//                   {step.number}
//                 </span>

//                 <span className="h-2 w-2 rounded-full bg-emerald-400 opacity-60 transition group-hover:opacity-100" />
//               </div>

//               <h3 className="mt-16 text-2xl font-semibold tracking-tight text-white">
//                 {step.title}
//               </h3>

//               <p className="mt-4 max-w-xs text-sm leading-6 text-slate-500">
//                 {step.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

export function PaymentFlow() {
  const steps = [
    {
      number: "01",
      title: "Start a payment",
      description:
        "Create a transaction for the amount you want to collect.",
      tag: "CREATE",
    },
    {
      number: "02",
      title: "Complete checkout",
      description:
        "The customer is taken through Paystack's secure hosted checkout.",
      tag: "CHECKOUT",
    },
    {
      number: "03",
      title: "Track the result",
      description:
        "PayFlow verifies the transaction and keeps the final status in your history.",
      tag: "CONFIRM",
    },
  ];

  return (
    <section className="relative border-t border-white/10 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
              <span className="h-px w-8 bg-emerald-400/70" />
              <span>How PayFlow works</span>
            </div>
          </div>

          <div>
            <h2 className="max-w-4xl text-4xl font-medium leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl">
              Every payment
              <br />
              <span className="text-slate-600">leaves a clear trace.</span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              From the moment a transaction starts to the moment it is
              confirmed, PayFlow keeps the entire payment flow visible.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mt-24">
          {/* Connecting line */}
          <div className="absolute left-[35px] top-0 hidden h-full w-px bg-white/10 md:block" />

          <div className="space-y-0">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="group relative grid gap-8 border-t border-white/10 py-10 md:grid-cols-[72px_0.9fr_1.1fr] md:items-start md:gap-10"
              >
                {/* Number */}
                <div className="relative z-10 flex h-[72px] w-[72px] items-center justify-center bg-[#080a09]">
                  <span className="text-4xl font-medium tracking-[-0.06em] text-slate-700 transition-colors duration-500 group-hover:text-emerald-400">
                    {step.number}
                  </span>

                  {/* timeline node */}
                  <span className="absolute right-[-4px] top-1/2 hidden h-2 w-2 -translate-y-1/2 rounded-full bg-slate-700 transition-colors duration-500 group-hover:bg-emerald-400 md:block" />
                </div>

                {/* Main title */}
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-600">
                    {step.tag}
                  </p>

                  <h3 className="mt-3 text-2xl font-medium tracking-[-0.03em] text-white sm:text-3xl">
                    {step.title}
                  </h3>
                </div>

                {/* Description + visual */}
                <div className="flex items-start justify-between gap-8">
                  <p className="max-w-md text-sm leading-7 text-slate-500 sm:text-base">
                    {step.description}
                  </p>

                  {/* Minimal visual marker */}
                  <div className="hidden shrink-0 pt-1 sm:block">
                    {index === 0 && (
                      <div className="h-10 w-16 border border-white/10">
                        <div className="m-2 h-1.5 w-7 bg-emerald-400/70" />
                        <div className="mx-2 h-1.5 w-10 bg-white/10" />
                        <div className="mx-2 mt-1.5 h-1.5 w-5 bg-white/10" />
                      </div>
                    )}

                    {index === 1 && (
                      <div className="flex h-10 w-16 items-center justify-center border border-white/10">
                        <span className="h-3 w-3 rounded-full border border-emerald-400/70" />
                      </div>
                    )}

                    {index === 2 && (
                      <div className="flex h-10 w-16 items-center justify-center border border-white/10">
                        <span className="text-[10px] uppercase tracking-[0.18em] text-emerald-400">
                          OK
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
}