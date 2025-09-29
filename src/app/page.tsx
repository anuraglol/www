import { Divider } from "@/components";
import { ACHIEVEMENTS, EXPERIENCES, LINKS, PROJECTS, SKILLS } from "@/lib";
import Link from "next/link";

export default function Home() {
  const isSafeHtml = (value: string): boolean =>
    value.includes('data-safe="highlight"');

  return (
    <main className="min-h-screen w-full bg-background text-foreground/80 font-medium font-main py-16 sm:py-20 md:py-24 lowercase">
      <div className="w-full max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto flex flex-col px-2 lg:px-4 sm:px-6 md:px-0">
        <p>
          welcome to my <span className="highlight">corner</span> of the
          internet!
        </p>

        <div className="w-full h-64 sm:h-80 md:h-96 rounded-sm border border-neutral-400/40 border-dashed p-1 relative my-6">
          <img
            src="/bg.png"
            className="w-full h-full rounded-sm opacity-40 grayscale object-cover"
            alt="background"
          />
        </div>

        <p className="leading-6">
          ohayo! im anurag. i am an undergraduate student at{" "}
          <span className="highlight">nit durgapur</span>, pursuing{" "}
          <span className="highlight">biotechnology</span>. with over 4 years of
          experience in web engineering, i&apos;ve worked on a range of projects
          within the web3 ecosystem. i specialize in frontend development,
          focusing on building clean, scalable web applications that enhance
          user experiences.
        </p>

        <p className="mt-3 leading-6">
          thanks for stopping by! leaving the technical jargon behind, im an
          avid reader, mostly reading fiction. i enjoy playing around with
          different linux distros & i do maths for fun when im bored.
        </p>

        <div className="flex flex-wrap gap-4 items-center text-orange-600 mt-6">
          {LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="hover:underline underline-offset-4"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Divider />

        <section className="flex flex-col gap-3">
          <p className="text-lg sm:text-xl font-semibold text-foreground">
            experiences
          </p>
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="flex flex-col gap-1">
              <p className="text-base sm:text-[16px] font-semibold text-foreground">
                {exp.title}
              </p>
              <div className="flex flex-col gap-1">
                {exp.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex gap-3 items-baseline text-base sm:text-[16px]"
                  >
                    <span className="text-orange-600 font-semibold">-</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <Divider />

        <section className="flex flex-col gap-2">
          <p className="text-lg sm:text-xl font-semibold text-foreground">
            achievements
          </p>
          <div className="flex flex-col gap-2">
            {ACHIEVEMENTS.map((item, index) => (
              <div
                key={index}
                className="flex gap-3 items-baseline text-base sm:text-[16px]"
              >
                <span className="text-orange-600 font-semibold">-</span>
                {isSafeHtml(item) && (
                  <p dangerouslySetInnerHTML={{ __html: item }} />
                )}
              </div>
            ))}
          </div>
        </section>

        <Divider />

        <section className="flex flex-col gap-3">
          <p className="text-lg sm:text-xl font-semibold text-foreground">
            projects / gigs
          </p>
          {PROJECTS.map((proj, index) => (
            <div key={index} className="flex flex-col gap-1">
              <a
                href={proj.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-[16px] font-semibold text-foreground hover:underline"
              >
                {proj.title}
              </a>
              <div className="flex gap-3 items-baseline text-base sm:text-[16px] leading-snug">
                <span className="text-orange-600 font-semibold">-</span>
                <p>{proj.description}</p>
              </div>
            </div>
          ))}
        </section>

        <Divider />

        <section className="flex flex-col gap-2">
          <p className="text-lg sm:text-xl font-semibold text-foreground">
            technical skills
          </p>
          <div className="flex flex-col">
            {SKILLS.map((skill, index) => (
              <div
                key={index}
                className="flex gap-2 items-center text-base sm:text-[16px]"
              >
                <span className="text-orange-600 font-semibold">-</span>
                {isSafeHtml(skill) && (
                  <p dangerouslySetInnerHTML={{ __html: skill }} />
                )}
              </div>
            ))}
          </div>
        </section>

        <p className="text-center italic text-foreground/70 mt-6">
          and may the odds be ever in your favor.
        </p>
      </div>
    </main>
  );
}
