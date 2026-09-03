import {
  BriefcaseBusiness,
  CalendarDays,
} from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="bg-neutral-50 py-24">
      <div className="section-container">

        <div className="mb-14 text-center">
          <p className="mb-3 font-semibold text-orange-500">
            EXPERIENCE
          </p>

          <h2 className="section-title">
            My professional journey
          </h2>
        </div>

        <div className="mx-auto max-w-3xl">

          <div className="relative border-l-2 border-orange-200 pl-8">

            <div className="absolute -left-3 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 ring-8 ring-orange-50">
              <div className="h-2 w-2 rounded-full bg-white"></div>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-7">

              <div className="flex flex-wrap items-start justify-between gap-3">

                <div>
                  <div className="flex items-center gap-2">
                    <BriefcaseBusiness
                      size={19}
                      className="text-orange-500"
                    />

                    <h3 className="text-xl font-bold">
                      MERN Stack Developer Intern
                    </h3>
                  </div>

                  <p className="mt-2 font-medium text-orange-500">
                    Internship / Professional Experience
                  </p>
                </div>

                <div className="flex items-center gap-2 text-sm text-neutral-500">
                  <CalendarDays size={16} />
                  2026
                </div>

              </div>

              <p className="mt-5 leading-7 text-neutral-500">
                Worked on modern web development concepts,
                frontend interfaces, backend APIs, databases and
                full-stack application development using the MERN
                stack.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "React",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "Git",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}