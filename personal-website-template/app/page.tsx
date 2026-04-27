'use client';

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen px-5 py-5 text-[#f1ebeb] sm:px-8 lg:px-10">
      <div className="mx-auto flex min-h-[calc(100vh-2.5rem)] max-w-7xl flex-col overflow-hidden border border-[#d5bfb2]/15 bg-[#270708]/95 shadow-[0_30px_80px_rgba(13,1,4,0.6)]">
        <header className="flex items-center justify-end border-b border-[#d5bfb2]/15 px-5 py-4 text-[0.72rem] uppercase tracking-[0.35em] text-[#d5bfb2] sm:px-8">
          <nav className="flex items-center gap-5 text-[0.7rem] sm:gap-8">
            <Link href="/about" className="transition hover:text-[#f1ebeb]">
              About
            </Link>
            <Link href="/projects" className="transition hover:text-[#f1ebeb]">
              Projects
            </Link>
            <Link href="/contact" className="transition hover:text-[#f1ebeb]">
              Contact
            </Link>
          </nav>
        </header>

        <section className="grid flex-1 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="flex flex-col justify-between border-b border-[#d5bfb2]/15 bg-[#270708] px-6 py-10 sm:px-10 lg:border-b-0 lg:border-r lg:border-[#d5bfb2]/15 lg:px-12 lg:py-14">
            <div>
              <p className="mb-4 text-[0.72rem] uppercase tracking-[0.28em] text-[#d5bfb2]">
                Hello, my name is
              </p>
              <h1
                className="max-w-md text-6xl leading-[0.9] text-[#f1ebeb] sm:text-7xl lg:text-[5.5rem]"
                style={{ fontFamily: "var(--font-editorial-serif), serif" }}
              >
                Teresa Chirayil
              </h1>
            </div>
          </div>

          <div className="relative overflow-hidden bg-[#640810] px-6 py-10 text-[#f1ebeb] sm:px-10 lg:px-12 lg:py-14">
            <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(213,191,178,0.14),rgba(255,255,255,0))]" />
            <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="border border-[#d5bfb2]/30 bg-[linear-gradient(145deg,#640810_0%,#270708_100%)] p-4 shadow-[0_20px_50px_rgba(13,1,4,0.34)]">
                <div className="flex min-h-[420px] items-end bg-[radial-gradient(circle_at_30%_20%,rgba(213,191,178,0.18),transparent_28%),linear-gradient(135deg,#640810_0%,#3f0910_52%,#270708_100%)] p-6 sm:min-h-[520px]">
                  <div className="max-w-xs border-l border-[#f1ebeb]/35 pl-4 text-[#f1ebeb]" />
                </div>
              </div>

              <div className="hidden lg:block" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
