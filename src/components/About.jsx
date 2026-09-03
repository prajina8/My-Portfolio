import {
  GraduationCap,
  Code2,
  Target,
  UserRound,
} from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-neutral-50 py-24">
      <div className="section-container">

        <div className="mb-14 text-center">
          <p className="mb-3 font-semibold text-orange-500">
            ABOUT ME
          </p>

          <h2 className="section-title">
            Get to know me
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2">

          <div>
            <h3 className="mb-5 text-2xl font-bold">
              Building things that solve real problems.
            </h3>

            <p className="mb-5 leading-8 text-neutral-600">
              I am a Computer Science student with a strong interest
              in full-stack web development. I enjoy transforming
              ideas into functional and visually appealing web
              applications.
            </p>

            <p className="leading-8 text-neutral-600">
              My main focus is the MERN stack, while I continuously
              improve my understanding of software development,
              APIs, databases, authentication and modern frontend
              development.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">

            <div className="card-hover rounded-2xl border border-neutral-200 bg-white p-6">
              <GraduationCap className="mb-4 text-orange-500" />
              <h3 className="font-bold">Education</h3>
              <p className="mt-2 text-sm text-neutral-500">
                BSc. CSIT
              </p>
            </div>

            <div className="card-hover rounded-2xl border border-neutral-200 bg-white p-6">
              <Code2 className="mb-4 text-orange-500" />
              <h3 className="font-bold">Development</h3>
              <p className="mt-2 text-sm text-neutral-500">
                MERN Stack
              </p>
            </div>

            <div className="card-hover rounded-2xl border border-neutral-200 bg-white p-6">
              <Target className="mb-4 text-orange-500" />
              <h3 className="font-bold">Goal</h3>
              <p className="mt-2 text-sm text-neutral-500">
                Become a strong software developer
              </p>
            </div>

            <div className="card-hover rounded-2xl border border-neutral-200 bg-white p-6">
              <UserRound className="mb-4 text-orange-500" />
              <h3 className="font-bold">Interests</h3>
              <p className="mt-2 text-sm text-neutral-500">
                Web & Software Development
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}