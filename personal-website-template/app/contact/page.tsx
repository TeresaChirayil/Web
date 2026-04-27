import Link from "next/link";

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="currentColor"
    >
      <path d="M5.4 8.5A1.95 1.95 0 1 0 5.4 4.6a1.95 1.95 0 0 0 0 3.9ZM3.8 9.9h3.2v10.3H3.8V9.9Zm5.2 0h3.1v1.4h.1c.4-.8 1.5-1.7 3.3-1.7 3.5 0 4.1 2.1 4.1 5v5.6h-3.2v-5c0-1.2 0-2.8-1.8-2.8s-2.1 1.3-2.1 2.7v5.1H9V9.9Z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="currentColor"
    >
      <path d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.2.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.4-5.5-6A4.7 4.7 0 0 1 5.8 9c-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1a4.7 4.7 0 0 1 1.3 3.3c0 4.6-2.8 5.7-5.5 6 .4.3.9 1 .9 2v3c0 .4.2.7.8.6A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2.5" y="5.5" width="19" height="13" rx="1.75" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

const socialLinks = [
  { label: "LinkedIn", icon: LinkedInIcon, href: "#" },
  { label: "GitHub", icon: GitHubIcon, href: "#" },
  {
    label: "Email",
    icon: MailIcon,
    href: "mailto:teresachirayil2005@gmail.com",
  },
] as const;

export default function ContactPage() {
  return (
    <main className="min-h-screen px-5 py-5 text-[#f1ebeb] sm:px-8 lg:px-10">
      <div className="mx-auto flex min-h-[calc(100vh-2.5rem)] max-w-7xl flex-col overflow-hidden border border-[#d5bfb2]/15 bg-[#270708]/95 shadow-[0_30px_80px_rgba(13,1,4,0.6)]">
        <header className="flex items-start justify-between gap-8 border-b border-[#d5bfb2]/15 px-6 py-4 text-[0.72rem] uppercase tracking-[0.35em] text-[#d5bfb2] sm:px-8">
          <Link href="/" className="pt-1 transition hover:text-[#f1ebeb]">
            Teresa Chirayil
          </Link>

          <nav className="flex items-center gap-6 text-[0.72rem] sm:gap-10">
            <Link href="/about" className="transition hover:text-[#f1ebeb]">
              About
            </Link>
            <Link href="/projects" className="transition hover:text-[#f1ebeb]">
              Projects
            </Link>
            <Link
              href="/contact"
              className="border-b border-[#f1ebeb] pb-1 text-[#f1ebeb]"
            >
              Contact
            </Link>
          </nav>
        </header>

        <section className="flex-1 bg-[#d5bfb2] px-4 py-4 text-[#270708] sm:px-6 sm:py-6 lg:px-8 lg:py-8">
          <div className="border border-[#270708]/35 bg-[#efe4db] p-4 shadow-[0_18px_40px_rgba(39,7,8,0.12)] sm:p-6">
            <div className="border border-[#270708]/25 bg-[#f6ede6] px-4 py-5 sm:px-6">
              <p className="text-[0.75rem] uppercase tracking-[0.28em] text-[#640810]">
                Let&apos;s connect
              </p>
              <h1
                className="mt-3 text-4xl leading-tight text-[#270708] sm:text-5xl"
                style={{ fontFamily: "var(--font-editorial-serif), serif" }}
              >
                Get in Touch
              </h1>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-[#270708]/75 sm:text-base">
                I&apos;d love to hear from you. Fill out the form and your
                message will be ready to send with your email app.
              </p>
            </div>

            <div className="mt-5 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
              <aside className="border border-[#270708]/25 bg-[#f6ede6] px-4 py-5 sm:px-6 sm:py-6">
                <p className="text-[0.75rem] uppercase tracking-[0.28em] text-[#640810]">
                  Contact Info
                </p>
                <a
                  href="mailto:teresachirayil2005@gmail.com"
                  className="mt-6 inline-flex items-center gap-3 text-base text-[#270708] underline decoration-[#640810]/45 underline-offset-4 transition hover:text-[#640810]"
                >
                  <MailIcon />
                  teresachirayil2005@gmail.com
                </a>

                <div className="mt-10 flex items-center gap-4">
                  {socialLinks.map((item) => {
                    const Icon = item.icon;

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        aria-label={item.label}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-[#270708]/25 bg-[#efe4db] text-[#270708] transition hover:border-[#640810] hover:bg-[#640810] hover:text-[#f1ebeb]"
                      >
                        <Icon />
                      </a>
                    );
                  })}
                </div>
              </aside>

              <form
                className="border border-[#270708]/25 bg-[#f6ede6] px-4 py-5 sm:px-6 sm:py-6"
                action="mailto:teresachirayil2005@gmail.com"
                method="post"
                encType="text/plain"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="w-full border border-[#270708]/25 bg-[#efe4db] px-4 py-3 text-sm text-[#270708] outline-none placeholder:text-[#270708]/45 focus:border-[#640810]"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="w-full border border-[#270708]/25 bg-[#efe4db] px-4 py-3 text-sm text-[#270708] outline-none placeholder:text-[#270708]/45 focus:border-[#640810]"
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  className="mt-4 w-full border border-[#270708]/25 bg-[#efe4db] px-4 py-3 text-sm text-[#270708] outline-none placeholder:text-[#270708]/45 focus:border-[#640810]"
                />

                <textarea
                  name="message"
                  placeholder="Message"
                  rows={8}
                  className="mt-4 w-full resize-none border border-[#270708]/25 bg-[#efe4db] px-4 py-3 text-sm text-[#270708] outline-none placeholder:text-[#270708]/45 focus:border-[#640810]"
                />

                <div className="mt-4 flex justify-end">
                  <button
                    type="submit"
                    className="bg-[#640810] px-6 py-3 text-sm uppercase tracking-[0.24em] text-[#f1ebeb] transition hover:bg-[#270708]"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
