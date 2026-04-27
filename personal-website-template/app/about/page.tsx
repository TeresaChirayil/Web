import Link from "next/link";

const bio =
  "Hi, my name is Teresa! I am a junior studying CS. I am currently a member of the WiCyS experience team and I am making ctf challenges. I am the VP of Finnance of CSO. Through my internship at Everyone Can Code Apple I created two apps using swift, Machine Learning, and Firebase. I have also participated in two hackathons. The first one we created an app that helps local coffee shops by having digital punchcards. This year we created a website with React that helps people new to the industry find people to work on projects with, using a matchmaking feature and won the hackathon! I am also proficient in C++, C, Python, Java, and Javascript.";

export default function AboutPage() {
  return (
    <main className="min-h-screen px-5 py-5 text-[#f1ebeb] sm:px-8 lg:px-10">
      <div className="mx-auto flex min-h-[calc(100vh-2.5rem)] max-w-7xl flex-col overflow-hidden border border-[#d5bfb2]/15 bg-[#270708]/95 shadow-[0_30px_80px_rgba(13,1,4,0.6)]">
        <header className="flex items-start justify-between gap-8 border-b border-[#d5bfb2]/15 px-6 py-4 text-[0.72rem] uppercase tracking-[0.35em] text-[#d5bfb2] sm:px-8">
          <Link href="/" className="pt-1 transition hover:text-[#f1ebeb]">
            Teresa Chirayil
          </Link>

          <nav className="flex items-center gap-6 text-[0.72rem] sm:gap-10">
            <Link
              href="/about"
              className="border-b border-[#f1ebeb] pb-1 text-[#f1ebeb]"
            >
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

        <section className="grid flex-1 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col justify-center bg-[#640810] px-6 py-12 text-[#f1ebeb] sm:px-10 lg:px-12 lg:py-16">
            <h1
              className="text-5xl tracking-tight sm:text-6xl"
              style={{ fontFamily: "var(--font-editorial-serif), serif" }}
            >
              About me
            </h1>

            <p className="mt-8 max-w-4xl text-base leading-8 text-[#f1ebeb] sm:text-lg sm:leading-9 lg:text-[1.28rem] lg:leading-10">
              {bio}
            </p>

            <button
              type="button"
              className="mt-10 w-fit border border-[#d5bfb2] px-5 py-3 text-[0.72rem] uppercase tracking-[0.24em] text-[#f1ebeb] transition hover:bg-[#d5bfb2] hover:text-[#270708]"
            >
              Resume
            </button>

            <div className="mt-10 grid gap-px border border-[#d5bfb2]/30 bg-[#d5bfb2]/20 text-sm">
              <div className="bg-[#270708] px-5 py-4">Computer Science student</div>
              <div className="bg-[#270708] px-5 py-4">WiCyS experience team</div>
              <div className="bg-[#270708] px-5 py-4">Hackathon-winning builder</div>
            </div>
          </div>

          <aside className="flex items-end bg-[#d5bfb2] px-6 py-10 text-[#270708] sm:px-10 lg:px-12 lg:py-16">
            <div className="max-w-md">
              <p className="text-[0.68rem] uppercase tracking-[0.32em] text-[#640810]">
                Next step
              </p>
              <p
                className="mt-4 text-3xl leading-tight sm:text-4xl"
                style={{ fontFamily: "var(--font-editorial-serif), serif" }}
              >
                Visit the Contact page to connect.
              </p>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
