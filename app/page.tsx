import { Hero } from '@/components/home/Hero'
import Link from 'next/link'
import React from 'react'

const page = () => {
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

          <nav className="flex items-center gap-3">
            <Link
              href="/login"
              className="rounded-lg px-4 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="rounded-lg bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
              Create account
            </Link>
          </nav>
        </div>
      </header>

      <Hero />
    </main>

  )
}

export default page