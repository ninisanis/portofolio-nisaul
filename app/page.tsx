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
            Nisa'ul Fadhilah
          </h1>

          <h2 className="mt-4 text-xl text-neutral-400 md:text-2xl">
            Quality Assurance Test Engineer at CIMB Niaga
          </h2>

          <p className="mt-6 text-neutral-400">
            Ex Data Engineer at Ditjen Nakes | Ex Backend Developer at PDDIKTI | Fresh Graduate Universitas Multimedia Nusantara
          </p>

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

        {/* PHOTOS GRID */}
<div className="grid grid-cols-2 gap-4">
  {[
    "/profile.jpg",
    "/profile.jpeg",
    "/profile3.jpeg",
    "/profile4.jpeg",
  ].map((src, index) => (
    <div
      key={index}
      className="relative h-32 w-32 md:h-40 md:w-40"
    >
      <Image
        src={src}
        alt={`Profile photo ${index + 1}`}
        fill
        className="rounded-xl object-cover border border-slate-800"
        priority={index === 0}
      />
    </div>
  ))}
</div>

      </section>

      {/* ================= ABOUT ================= */}
<section className="py-24">
  <h3 className="mb-8 text-2xl font-semibold text-butter">
    About Me
  </h3>

  <div className="max-w-3xl space-y-6 text-neutral-400 text-justify leading-relaxed">
    <p>
      I am a fresh graduate in Informatics from Universitas Multimedia Nusantara (UMN).
      During my studies, I actively participated in student organizations to develop
      my leadership skills and teamwork abilities.
    </p>

    <p>
      In addition to academic activities, I completed an internship where I gained
      practical experience in the tech industry. I also participated in an automation
      testing bootcamp, which strengthened my understanding of testing frameworks,
      test automation practices, and quality assurance workflows.
    </p>

    <p>
      I have experience in manual and automation testing, web development, and data
      engineering, and I am particularly interested in machine learning, especially
      in building models using transformer-based approaches such as BERT.
    </p>
  </div>
</section>



      {/* ================= EDUCATION ================= */}
      <section className="py-24">
        <h3 className="mb-10 text-2xl font-semibold text-butter">
          Education
        </h3>

        <div className="rounded-xl bg-butter p-6 text-black shadow-md hover:brightness-95 transition">
          <h4 className="text-lg font-semibold">
            Universitas Multimedia Nusantara
          </h4>

          <p className="mt-2">
            Bachelor Degree — Computer Science
          </p>

          <p className="mt-1 text-sm text-black/70">
            2021 – 2025
          </p>

          <p className="mt-1 text-sm text-black/70">
            Gpa: 3.65
          </p>


        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section className="py-24">
        <h3 className="mb-10 text-2xl font-semibold text-butter">
          Experience
        </h3>

        <div className="space-y-6">

          {/* INTERNSHIP */}
<div className="rounded-xl bg-butter p-6 text-black shadow-md hover:brightness-95 transition">
  <div className="flex items-start justify-between gap-4">
    <h4 className="font-semibold">
      QA Tester Engineer – CIMB Niaga
    </h4>
    <span className="text-sm font-medium text-black/70 whitespace-nowrap">
      Dec 2025 - Present
    </span>
  </div>

  <p className="mt-3 text-black/80">
    I was involved in both manual and automation testing activities. I developed and executed automated regression test scripts using Java and TestNG to ensure application stability and prevent recurring issues. In addition, I actively participated in managing testing tasks and tracking progress using ClickUp as the main project management tool.
  </p>
</div>

<div className="rounded-xl bg-butter p-6 text-black shadow-md hover:brightness-95 transition">
  <div className="flex items-start justify-between gap-4">
    <h4 className="font-semibold">
      Data Engineer Intern – Direktorat Jenderal Tenaga Kesehatan
    </h4>
    <span className="text-sm font-medium text-black/70 whitespace-nowrap">
      Sept 2024 - Feb 2025
    </span>
  </div>

  <p className="mt-3 text-black/80">
    I supported the data analytics team on the Satusehat SDMK platform by summarizing key insights from database queries, performing data mapping with Excel and Python for accurate alignment, and developing keyword-based search for seminar modules. I also designed BPMN workflows, explored API documentation with Swagger in Docker, and practiced backend tasks including Laravel code review, Git workflows, containerization, and server management.
  </p>
</div>

<div className="rounded-xl bg-butter p-6 text-black shadow-md hover:brightness-95 transition">
  <div className="flex items-start justify-between gap-4">
    <h4 className="font-semibold">
      Backend Developer Intern – PDDIKTI
    </h4>
    <span className="text-sm font-medium text-black/70 whitespace-nowrap">
      Feb 2024 - Jun 2024
    </span>
  </div>

  <p className="mt-3 text-black/80">
    I developed RESTful APIs using Golang and PostgreSQL for the PDDIKTI 2.0 website project, optimizing SQL queries to reduce execution time from over one minute to under one second. I implemented flexible search functionality for universities and individuals, conducted API and white-box testing with Postman, and performed unit testing using table-driven tests in Golang to ensure reliable business logic and minimize bugs. Additionally, I created and maintained API documentation, collaborated with QA, data analysts, and cross-functional teams, and followed Agile Scrum methodology to deliver tasks on schedule and support a successful project release.
  </p>
</div>
        </div>

      </section>

      {/* ================= TRAINING AND SERTIFICATION ================= */}
      <section className="py-24">
        <h3 className="mb-10 text-2xl font-semibold text-butter">
          TRAINING AND CERTIFICATION
        </h3>

        <div className="space-y-6">

          {/* INTERNSHIP */}
<div className="rounded-xl bg-butter p-6 text-black shadow-md hover:brightness-95 transition">
  <div className="flex items-start justify-between gap-4">
    <h4 className="font-semibold">
      TOEIC - International Test Center
    </h4>
    <span className="text-sm font-medium text-black/70 whitespace-nowrap">
      June 2025 - June 2027
    </span>
  </div>

  <p className="mt-3 text-black/80">
  Score: 564
  </p>
  <p className="mt-3 text-black/80">
  certificated
  </p>
</div>

<div className="rounded-xl bg-butter p-6 text-black shadow-md hover:brightness-95 transition">
  <div className="flex items-start justify-between gap-4">
    <h4 className="font-semibold">
      IT Specialist - Machine Learning by Certiport
    </h4>
    <span className="text-sm font-medium text-black/70 whitespace-nowrap">
      Failed
    </span>
  </div>

  <p className="mt-3 text-black/80">
  Score: 580
  </p>
  
</div>

<div className="rounded-xl bg-butter p-6 text-black shadow-md hover:brightness-95 transition">
  <div className="flex items-start justify-between gap-4">
    <h4 className="font-semibold">
      QA Automation Intensif Bootcamp - Sanbercode
    </h4>
    <span className="text-sm font-medium text-black/70 whitespace-nowrap">
      Nov 2025 - Dec 2025
    </span>
  </div>

  <p className="mt-3 text-black/80">
  Learned SDLC and STLC to understand the complete software development and testing lifecycle.
Practiced Black Box Testing, Grey Box Testing, and basic White Box Testing approaches.
Performed Manual Testing, including Functional Testing, UI Testing, End-to-End (E2E) Testing, and Regression Testing on web applications.
Conducted API Testing (manual & automation) using Postman, including creating collections, writing test scripts, validating responses, and generating HTML API reports.
Developed Automation Testing skills with Cypress, including UI automation, assertions, and regression test workflows.
Created complete testing documentation such as Test Plan, Test Scenarios, and Test Cases.
Learned and practiced basic SQL to validate data and support backend testing.
Performed bug reporting and collaborated in simulated QA workflow environments.
  </p>
</div>

<div className="rounded-xl bg-butter p-6 text-black shadow-md hover:brightness-95 transition">
  <div className="flex items-start justify-between gap-4">
    <h4 className="font-semibold">
      QA Manual & Automation Bootcamp - After Office Academy
    </h4>
    <span className="text-sm font-medium text-black/70 whitespace-nowrap">
      Dec 2025 - Dec 2025
    </span>
  </div>

  <p className="mt-3 text-black/80">
I built a strong understanding of QA principles, including SDLC, STLC, testing methods, requirement analysis, and the QA role within a development team. I developed test plans, strategies, scenarios, and cases based on real project requirements and performed manual testing covering functional, UI, regression, end-to-end, and exploratory testing. I conducted API testing using Postman and practiced API automation with Mocha, Chai, and Supertest. I implemented web UI automation with Cypress, created Selenium WebDriver scripts, and used Katalon Studio for web and mobile automation. Additionally, I performed performance testing with Apache JMeter and applied SQL fundamentals for data validation during testing.
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
  {/* Thumbnail Project */}
  <img
    src="/pddikti.png"
    alt="PDDIKTI Website"
    className="mb-4 w-full h-40 object-cover rounded-md"
  />

  <h4 className="text-lg font-semibold">
    PDDIKTI 2.0 Website
  </h4>

  <p className="mt-2 text-sm text-black/80">
PDDIKTI 2.0 is Indonesia’s higher education portal, allowing users to access comprehensive data and statistics on universities. The platform provides detailed information about lecturers, students, publications, and accreditation, and enables comparison between universities and study programs.  </p>

  <div className="mt-4 flex flex-wrap gap-2 text-xs">
    {["Golang", "PostgreSQL", "API Testing", "Unit Testing", "github", "Scrum", "Kanban"].map((tech) => (
      <span
        key={tech}
        className="rounded-full bg-black/10 px-3 py-1"
      >
        {tech}
      </span>
    ))}
  </div>

  {/* Link ke website */}
  <a
    href="https://pddikti.kemdiktisaintek.go.id/"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-4 inline-block text-black font-semibold"
  >
    Visit Website
  </a>
</div>



          {/* PROJECT 2 */}
<div className="rounded-xl bg-butter p-6 text-black shadow-md hover:brightness-95 transition">
  {/* Thumbnail Project */}
  <img
    src="/sisdmk.png"
    alt="Backoffice SISDMK"
    className="mb-4 w-full h-40 object-cover rounded-md"
  />

  <h4 className="text-lg font-semibold">
    Back Office SISDMK
  </h4>

  <p className="mt-2 text-sm text-black/80">
SISDMK is a human resources information system for healthcare facilities such as clinics, hospitals, and other health services. It maintains official records of all healthcare personnel, ensuring that every employee is registered and legally recognized.  </p>

  <div className="mt-4 flex flex-wrap gap-2 text-xs">
    {["Laravel", "PostgreSQL", "FileZila"].map((tech) => (
      <span
        key={tech}
        className="rounded-full bg-black/10 px-3 py-1"
      >
        {tech}
      </span>
    ))}
  </div>

  {/* Link ke website */}
  <a
    href="https://sisdmk.kemkes.go.id/"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-4 inline-block text-black font-semibold"
  >
    Visit Website
  </a>
</div>

          {/* PROJECT 2 */}
<div className="rounded-xl bg-butter p-6 text-black shadow-md hover:brightness-95 transition">
  {/* Thumbnail Project */}
  <img
    src="/arjuna.png"
    alt="Backoffice SISDMK"
    className="mb-4 w-full h-40 object-cover rounded-md"
  />

  <h4 className="text-lg font-semibold">
    Arjuna HR
  </h4>

  <p className="mt-2 text-sm text-black/80">
Arjuna HR is an integrated platform for employee management, covering attendance, booking, leave, permissions, loans, and other HR needs. The system integrates front office, back office, and mobile applications to streamline overall HR operations.  </p>

  <div className="mt-4 flex flex-wrap gap-2 text-xs">
    {["Java", "TestNG", "Manual Testing", "Automation Testing", "Kanban", "Clickup", "Regression Testing", "Bitbucket"].map((tech) => (
      <span
        key={tech}
        className="rounded-full bg-black/10 px-3 py-1"
      >
        {tech}
      </span>
    ))}
  </div>

  {/* Link ke website */}
  <a
    href="https://arjuna.cimbniaga.co.id/"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-4 inline-block text-black font-semibold"
  >
    Visit Website
  </a>
</div>

          {/* PROJECT 2 */}
<div className="rounded-xl bg-butter p-6 text-black shadow-md hover:brightness-95 transition">
  {/* Thumbnail Project */}
  <img
    src="/deteksiseksis.png"
    alt="Backoffice SISDMK"
    className="mb-4 w-full h-40 object-cover rounded-md"
  />

  <h4 className="text-lg font-semibold">
    Huggingface - Deteksi Komentar Seksis
  </h4>

  <p className="mt-2 text-sm text-black/80">
This platform is a research prototype designed to detect sexist comments on TikTok. The dataset includes comments scraped from January to May 2025, enabling analysis of content and trends in sexist language on the social media platform.  </p>

  <div className="mt-4 flex flex-wrap gap-2 text-xs">
    {["Indobert", "Python", "Huggingface"].map((tech) => (
      <span
        key={tech}
        className="rounded-full bg-black/10 px-3 py-1"
      >
        {tech}
      </span>
    ))}
  </div>

  {/* Link ke website */}
  <a
    href="https://huggingface.co/spaces/nisaulf/deteksi-komentar-seksis"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-4 inline-block text-black font-semibold"
  >
    Visit Website
  </a>
</div>




        </div>
        <h3 className="mt-10 text-center text-butter text-2xl font-semibold">
  Want to see more of my work? Let’s connect — I’d love to share more in an interview!
</h3>
      </section>






      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-24">
        <h3 className="mb-6 text-2xl font-semibold text-butter">
          Contact
        </h3>

        <div className="space-y-2 text-neutral-400">
          <p>
            Enail:{" "}
            <a
              href="mailto:nisaulfadhilah.work@gmail.com"
              className="text-butter hover:underline"
            >
              nisaulfadhilah.work@gmail.com
            </a>
          </p>
          <p>
            WhatsApp:{" "}
            <a
              href="https://wa.me/6282371803116"
              className="text-butter hover:underline"
            >
              wa.me/6282371803116
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/ninisanis"
              className="text-butter hover:underline"
            >
              github.com/ninisanis
            </a>
          </p>
          <p>
            Linkedin:{" "}
            <a
              href="https://www.linkedin.com/in/nisa-ul-fadhilah"
              className="text-butter hover:underline"
            >
              linkedin.com/in/nisa-ul-fadhilah
            </a>
          </p>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-neutral-800 py-8 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Nisaul. All rights reserved.
      </footer>

    </main>
  );
}
