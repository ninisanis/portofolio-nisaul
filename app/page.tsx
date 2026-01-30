import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 px-6 md:px-20 text-neutral-200">

      {/* ================= HERO ================= */}
      <section className="flex min-h-screen flex-col items-center justify-center gap-12 md:flex-row">
        
        {/* TEXT */}
        <div className="max-w-xl">
          <p className="mb-2 text-butter">Hi, I’m</p>

          <h1 className="text-4xl font-bold md:text-6xl">
            Nisaul
          </h1>

          <h2 className="mt-4 text-xl text-neutral-400 md:text-2xl">
            QA Engineer · Automation Testing
          </h2>

          <p className="mt-6 text-neutral-400">
            I focus on ensuring product quality through structured testing,
            reliable automation, and continuous improvement.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-butter px-6 py-3 font-medium text-black hover:brightness-95 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-neutral-700 px-6 py-3 hover:bg-neutral-900 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* PHOTO */}
        <div className="relative h-64 w-64 md:h-80 md:w-80">
          <Image
            src="/profile.jpg"
            alt="Profile photo"
            fill
            className="rounded-2xl object-cover"
            priority
          />
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-24">
        <h3 className="mb-6 text-2xl font-semibold text-butter">
          About Me
        </h3>

        <p className="max-w-3xl text-neutral-400">
          I am a Quality Assurance Engineer with experience in manual
          and automation testing. I enjoy finding edge cases,
          improving test coverage, and collaborating with teams
          to deliver reliable software.
        </p>
      </section>

      {/* ================= EDUCATION ================= */}
      <section className="py-24">
        <h3 className="mb-10 text-2xl font-semibold text-butter">
          Education
        </h3>

        <div className="rounded-xl bg-butter p-6 text-black shadow-md hover:brightness-95 transition">
          <h4 className="text-lg font-semibold">
            Universitas XXXXX
          </h4>

          <p className="mt-2">
            Bachelor Degree — Information Systems
          </p>

          <p className="mt-1 text-sm text-black/70">
            2020 – 2024
          </p>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section className="py-24">
        <h3 className="mb-10 text-2xl font-semibold text-butter">
          Experience
        </h3>

        <div className="space-y-6">

          {/* ORGANIZATION */}
          <div className="rounded-xl bg-butter p-6 text-black shadow-md hover:brightness-95 transition">
            <h4 className="font-semibold">
              Organization — QA Division
            </h4>

            <p className="mt-2 text-black/80">
              Assisted in planning testing strategies, reviewing
              requirements, and maintaining test documentation
              for internal systems.
            </p>
          </div>

          {/* VOLUNTEER */}
          <div className="rounded-xl bg-butter p-6 text-black shadow-md hover:brightness-95 transition">
            <h4 className="font-semibold">
              Volunteer — Technical Support
            </h4>

            <p className="mt-2 text-black/80">
              Supported system checks, event operations, and
              coordination between technical and non-technical teams.
            </p>
          </div>

        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="py-24">
        <h3 className="mb-10 text-2xl font-semibold text-butter">
          Projects
        </h3>

        <div className="grid gap-6 md:grid-cols-2">

          {/* PROJECT 1 */}
          <div className="rounded-xl bg-butter p-6 text-black shadow-md hover:brightness-95 transition">
            <h4 className="text-lg font-semibold">
              Booking Service API Automation
            </h4>

            <p className="mt-2 text-sm text-black/80">
              Automated API testing using Rest Assured,
              covering positive, negative, and edge case scenarios
              to ensure system reliability.
            </p>

            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              {["Java", "Rest Assured", "TestNG", "Postman"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-black/10 px-3 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* PROJECT 2 */}
          <div className="rounded-xl bg-butter p-6 text-black shadow-md hover:brightness-95 transition">
            <h4 className="text-lg font-semibold">
              Web UI Automation Testing
            </h4>

            <p className="mt-2 text-sm text-black/80">
              Developed UI automation scripts using Selenium
              to validate critical user flows and prevent regression issues.
            </p>

            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              {["Selenium", "Java", "TestNG", "Git"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-black/10 px-3 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-24">
        <h3 className="mb-6 text-2xl font-semibold text-butter">
          Contact
        </h3>

        <div className="space-y-2 text-neutral-400">
          <p>Email: nisaul@email.com</p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/ninisanis"
              className="text-butter hover:underline"
            >
              github.com/ninisanis
            </a>
          </p>
          <p>LinkedIn: linkedin.com/in/your-profile</p>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-neutral-800 py-8 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Nisaul. All rights reserved.
      </footer>

    </main>
  );
}
