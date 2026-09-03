import { skills } from "../data/skills";
import {
  Code2,
  Database,
  Server,
  Wrench,
} from "lucide-react";

const icons = {
  Frontend: Code2,
  Backend: Server,
  Database: Database,
  Tools: Wrench,
  Programming: Code2,
};

export default function Skills() {
  return (
    <section id="skills" className="bg-white py-24">
      <div className="section-container">

        <div className="mb-14 text-center">
          <p className="mb-3 font-semibold text-orange-500">
            MY SKILLS
          </p>

          <h2 className="section-title">
            Technologies I work with
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-neutral-500">
            A collection of technologies and tools I use while
            building web applications and learning new concepts.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {skills.map((skill) => {
            const Icon = icons[skill.category] || Code2;

            return (
              <div
                key={skill.name}
                className="card-hover flex items-center justify-between rounded-xl border border-neutral-200 bg-white p-5"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-orange-50 p-3 text-orange-500">
                    <Icon size={22} />
                  </div>

                  <div>
                    <h3 className="font-bold">
                      {skill.name}
                    </h3>

                    <p className="text-xs text-neutral-500">
                      {skill.category}
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600">
                  {skill.level}
                </span>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}