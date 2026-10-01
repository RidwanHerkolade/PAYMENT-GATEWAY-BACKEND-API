import Link from "next/link";
import { SignupForm } from "@/components/authcom/Signup";
export default function page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight"
          >
            Pay<span className="text-emerald-400">Flow</span>
          </Link>

          <Link
            href="/signin"
            className="text-sm text-slate-400 transition hover:text-white"
          >
            Sign in
          </Link>
        </div>
      </header>

      <section className="flex min-h-[calc(100vh-81px)] items-center justify-center px-6 py-12">
        <SignupForm />
      </section>
    </main>
  );
}