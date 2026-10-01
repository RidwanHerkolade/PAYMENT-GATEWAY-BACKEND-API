import Link from "next/link";
import {LoginForm} from "@/components/authcom/Signin";

export default function LoginPage() {
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
            href="/signup"
            className="text-sm text-slate-400 transition hover:text-white"
          >
            Create account
          </Link>
        </div>
      </header>

      <section className="flex min-h-[calc(100vh-81px)] items-center justify-center px-6 py-12">
        <LoginForm />
      </section>
    </main>
  );
}