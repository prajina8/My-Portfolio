import { useState } from "react";
import {
  Github,
  ExternalLink,
  FolderCode,
} from "lucide-react";
import { projects } from "../data/projects";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    "Full Stack",
    "Frontend",
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === filter
        );

  return (
    <section id="projects" className="bg-neutral-50 py-24">
      <div className="section-container">

        <div className="mb-10 text-center">
          <p className="mb-3 font-semibold text-orange-500">
            MY PROJECTS
          </p>

          <h2 className="section-title">
            Things I've built
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-neutral-500">
            Here are some of my projects that demonstrate my
            experience with frontend and full-stack development.
          </p>
        </div>

        <div className="mb-10 flex justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                filter === category
                  ? "bg-orange-500 text-white"
                  : "bg-white text-neutral-600 hover:text-orange-500"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-7 md:grid-cols-2">

          {filteredProjects.map((project) => (
            <article
              key={project.title}
              className="card-hover overflow-hidden rounded-2xl border border-neutral-200 bg-white"
            >

              <div className="flex h-48 items-center justify-center bg-neutral-900">
                <FolderCode
                  size={64}
                  className="text-orange-500"
                />
              </div>

              <div className="p-6">

                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-neutral-500">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800"
                  >
                    <Github size={16} />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-700 hover:border-orange-500 hover:text-orange-500"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>

                </div>
              </div>

            </article>
          ))}

        </div>
      </div>
    </section>
  );
}