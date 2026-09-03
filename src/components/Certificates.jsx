import {
  Award,
  ExternalLink,
} from "lucide-react";

import { certificates } from "../data/certificates";

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="bg-white py-24"
    >
      <div className="section-container">

        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 font-semibold text-orange-500">
            CERTIFICATES
          </p>

          <h2 className="section-title">
            Certifications & Achievements
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-neutral-500">
            Workshops, hackathons and other learning experiences
            that have helped me grow as a developer.
          </p>
        </div>

        {/* Certificate Cards */}
        <div className="grid gap-8 md:grid-cols-2">

          {certificates.map((certificate) => (
            <div
              key={certificate.title}
              className="card-hover overflow-hidden rounded-2xl border border-neutral-200 bg-white"
            >

              {/* Certificate Image */}
              <div className="overflow-hidden bg-neutral-100">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="h-64 w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              {/* Certificate Information */}
              <div className="p-6">

                <div className="mb-4 flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                    <Award size={22} />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-neutral-900">
                      {certificate.title}
                    </h3>

                    <p className="text-sm text-orange-500">
                      {certificate.organization}
                    </p>
                  </div>

                </div>

                <p className="text-sm font-medium text-neutral-400">
                  {certificate.date}
                </p>

                <p className="mt-3 leading-6 text-neutral-500">
                  {certificate.description}
                </p>

                {/* View Certificate */}
                <a
                  href={certificate.image}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600"
                >
                  View Certificate
                  <ExternalLink size={16} />
                </a>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}