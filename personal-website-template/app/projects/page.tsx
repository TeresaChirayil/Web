
import Link from "next/link";

const projects = [
  {
    name: "MotherNurture",
    blurb:
      "A mental health and community app for new and expecting parents navigating postpartum stress, anxiety, and isolation.",
    accent: "Community care",
    href: "https://asiabutt05.wixsite.com/mothernurture",
    tone: "bg-[#640810] text-[#f1ebeb]",
    panel:
      "bg-[radial-gradient(circle_at_65%_15%,rgba(241,235,235,0.12),transparent_22%),linear-gradient(145deg,#d5bfb2_0%,#640810_48%,#270708_100%)]",
  },
  {
    name: "PillPal",
    blurb:
      "A medication support app with reminders, pill scanning, and a chat assistant so users can manage daily care with more confidence.",
    accent: "Health technology",
    href: "",
    tone: "bg-[#270708] text-[#f1ebeb]",
    panel:
      "bg-[radial-gradient(circle_at_30%_20%,rgba(213,191,178,0.14),transparent_26%),linear-gradient(145deg,#640810_0%,#3f0910_42%,#270708_100%)]",
  },
  {
    name: "OnStage",
    blurb:
      "A networking platform for creatives with matchmaking, portfolio reels, and AI-assisted discovery for project collaborators.",
    accent: "Creative network",
    tone: "bg-[#270708] text-[#f1ebeb]",
    panel:
      "bg-[radial-gradient(circle_at_35%_18%,rgba(213,191,178,0.12),transparent_18%),linear-gradient(145deg,#640810_0%,#3f0910_45%,#270708_100%)]",
  },
  {
    name: "CoffeePunchCard",
    blurb:
      "A digital loyalty card experience that helps neighborhood coffee shops keep regulars coming back without paper punch cards.",
    accent: "Local commerce",
    tone: "bg-[#d5bfb2] text-[#270708]",
    panel:
      "bg-[radial-gradient(circle_at_60%_20%,rgba(241,235,235,0.18),transparent_24%),linear-gradient(145deg,#d5bfb2_0%,#b88f8f_40%,#640810_100%)]",
  },
] as const;

export default function ProjectsPage() {
  return (
    <main className="min-h-screen overflow-y-auto px-5 py-5 text-[#f1ebeb] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl overflow-hidden border border-[#d5bfb2]/15 bg-[#270708]/95 shadow-[0_30px_80px_rgba(13,1,4,0.6)]">
        <div className="flex items-center justify-between gap-6 border-b border-[#d5bfb2]/15 px-6 py-4 sm:px-8">
          <Link href="/" className="transition hover:text-[#f1ebeb]">
            Teresa Chirayil
          </Link>
          <div className="flex-1 text-center">
            <h1
              className="text-5xl tracking-tight text-[#f1ebeb] md:text-6xl"
              style={{ fontFamily: "var(--font-editorial-serif), serif" }}
            >
              Projects
            </h1>
            <div className="mx-auto mt-3 h-px w-24 bg-[#f1ebeb]/20" />
          </div>
          <nav className="flex items-center gap-6 text-[0.72rem] uppercase tracking-[0.35em] text-[#d5bfb2] sm:gap-10">
            <Link href="/about" className="transition hover:text-[#f1ebeb]">
              About
            </Link>
            <Link
              href="/projects"
              className="border-b border-[#f1ebeb] pb-1 text-[#f1ebeb]"
            >
              Projects
            </Link>
            <Link href="/contact" className="transition hover:text-[#f1ebeb]">
              Contact
            </Link>
          </nav>
        </div>

        <section className="grid gap-px bg-[#f1ebeb]/10">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className="grid bg-transparent md:grid-cols-2"
            >
              <div
                className={`flex flex-col justify-center px-6 py-12 sm:px-10 lg:px-12 ${project.tone} ${index % 2 === 1 ? "md:order-2" : ""}`}
              >
                <p className="text-[0.68rem] uppercase tracking-[0.32em] opacity-70">
                  {project.accent}
                </p>
                <h2
                  className="mt-5 text-5xl leading-none sm:text-6xl"
                  style={{ fontFamily: "var(--font-editorial-serif), serif" }}
                >
                  {project.name}
                </h2>
                <p className="mt-6 max-w-md text-sm leading-7 opacity-80 sm:text-base sm:leading-8">
                  {project.blurb}
                </p>
                <div className="mt-10">
                  {"href" in project && project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-block border px-5 py-3 text-[0.72rem] uppercase tracking-[0.24em] transition ${
                        project.tone.includes("bg-[#270708]")
                          ? "border-[#d5bfb2] text-[#f1ebeb] hover:bg-[#d5bfb2] hover:text-[#270708]"
                          : "border-[#270708]/50 text-current hover:bg-[#270708] hover:text-[#f1ebeb]"
                      }`}
                    >
                      View project
                    </a>
                  ) : (
                    <button
                      type="button"
                      className={`border px-5 py-3 text-[0.72rem] uppercase tracking-[0.24em] transition ${
                        project.tone.includes("bg-[#270708]")
                          ? "border-[#d5bfb2] text-[#f1ebeb] hover:bg-[#d5bfb2] hover:text-[#270708]"
                          : "border-[#270708]/50 text-current hover:bg-[#270708] hover:text-[#f1ebeb]"
                      }`}
                    >
                      View project
                    </button>
                  )}
                </div>
              </div>

              <div
                className={`min-h-[320px] border-t border-[#d5bfb2]/15 px-6 py-8 sm:px-10 lg:min-h-[420px] lg:px-12 lg:py-12 ${project.tone.includes("bg-[#270708]") ? "bg-[#640810]" : "bg-[#270708]"} ${index % 2 === 1 ? "md:order-1" : ""} md:border-t-0 md:border-l md:border-[#d5bfb2]/15`}
              >
                <div className="flex h-full min-h-[250px] items-end border border-[#d5bfb2]/30 bg-[#270708] p-4 shadow-[0_20px_50px_rgba(13,1,4,0.34)] lg:min-h-[320px]">
                  <div
                    className={`flex h-full w-full items-end p-5 ${project.panel}`}
                  >
                    <div className="border-l border-[#f1ebeb]/35 pl-4 text-[#f1ebeb]">
                      <p className="text-[0.65rem] uppercase tracking-[0.32em]">
                        Featured concept
                      </p>
                      <p
                        className="mt-4 text-3xl leading-none sm:text-4xl"
                        style={{
                          fontFamily: "var(--font-editorial-serif), serif",
                        }}
                      >
                        {project.name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
