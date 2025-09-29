import { Divider } from "@/components";
import { ACHIEVEMENTS, EXPERIENCES, LINKS, PROJECTS, SKILLS } from "@/lib";
import { Divide } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const isSafeHtml = (value: string): boolean =>
    value.includes('data-safe="highlight"');

  return (
    <main className="min-h-screen w-full bg-background text-foreground/80 font-medium font-main py-24 lowercase">
      <div className="max-w-2xl mx-auto flex flex-col">
        <p>
          welcome to my <span className="highlight">corner</span> of the
          internet!
        </p>

        <div className="w-full h-96 rounded-sm border-[1.5] border-neutral-400/40 border-dashed p-1 relative my-6">
          <img
            src="/bg.png"
            className="w-full h-full rounded-sm opacity-40 grayscale"
            alt="background"
          />
        </div>

        <p className="lowercase leading-6">
          ohayo! im anurag. I am an undergraduate student at{" "}
          <span className="highlight">nit durgapur</span>, pursuing
          <span className="highlight"> biotechnology</span>. With over 4 years
          of experience in web engineering, I&apos;ve worked on a range of
          projects within the Web3 ecosystem. I specialize in frontend
          development, focusing on building clean, scalable web applications
          that enhance user experiences.
        </p>

        <p className="mt-3 leading-6">
          thanks for stopping by! leaving the technical jargon behind, im an
          avid reader, mostly reading fiction. i enjoy playing around with
          different linux distros & i do maths for fun when im bored.
        </p>

        <div className="flex gap-4 items-center text-[16px] text-orange-600 mt-6">
          {LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="hover:underline underline-offset-4 transition-all duration-50"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <Divider />

        <div className="flex flex-col lowercase gap-3">
          <p className="text-xl font-semibold text-foreground">experiences</p>
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="flex flex-col gap-1">
              <p className="text-[16px] font-semibold text-foreground">
                {exp.title}
              </p>
              <div className="flex flex-col gap-1">
                {exp.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex text-[16px] gap-3 items-baseline"
                  >
                    <span className="text-orange-600 font-semibold justify-self-start">
                      -
                    </span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}{" "}
        </div>

        <Divider />
        <div className="flex flex-col lowercase gap-2">
          <p className="text-xl font-semibold text-foreground">achievements</p>
          <div className="flex flex-col gap-2">
            {ACHIEVEMENTS.map((item, index) => (
              <div
                key={index}
                className="flex text-[16px] gap-3 items-baseline"
              >
                <span className="text-orange-600 font-semibold justify-self-start">
                  -
                </span>
                {isSafeHtml(item) && (
                  <p dangerouslySetInnerHTML={{ __html: item }} className="" />
                )}
              </div>
            ))}
          </div>
        </div>

        <Divider />

        <div className="flex flex-col lowercase gap-3">
          <p className="text-xl font-semibold text-foreground">
            projects / gigs
          </p>
          {PROJECTS.map((proj, index) => (
            <div key={index} className="flex flex-col gap-1">
              <a
                href={proj.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[16px] font-semibold text-foreground hover:underline"
              >
                {proj.title}
              </a>
              <div className="flex text-[16px] gap-3 items-baseline leading-[1.3rem]">
                <span className="text-orange-600 font-semibold justify-self-start">
                  -
                </span>
                <p>{proj.description}</p>
              </div>
            </div>
          ))}
        </div>

        <Divider />

        <div className="flex flex-col lowercase gap-2">
          <p className="text-xl font-semibold text-foreground">
            technical skills
          </p>
          <div className="flex flex-col text-[16px]">
            {SKILLS.map((skill, index) => (
              <div key={index} className="flex gap-2 items-center">
                <span className="text-orange-600 font-semibold justify-self-start">
                  -
                </span>
                {isSafeHtml(skill) && (
                  <p dangerouslySetInnerHTML={{ __html: skill }} />
                )}
              </div>
            ))}
          </div>
        </div>

        <p className="text-center italic text-foreground/70 mt-6">
          may the odds be ever in your favor.
        </p>
      </div>
    </main>
  );
}
