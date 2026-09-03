import {
  Award,
  ExternalLink,
} from "lucide-react";
import { certificates } from "../data/certificates";

export default function Certificates() {
  return (
    <section id="certificates" className="bg-white py-24">
      <div className="section-container">

        <div className="mb-14 text-center">
          <p className="mb-3 font-semibold text-orange-500">
            CERTIFICATES
          </p>

          <h2 className="section-title">
            Certifications & learning
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-neutral-500">
            Some of the courses and certifications that have
            contributed to my technical growth.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">

          {certificates.map((certificate) => (
            <div
              key={certificate.title}
              className="card-hover rounded-2xl border border-neutral-200 bg-white p-6"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                <Award />
              </div>

              <p className="text-sm font-medium text-orange-500">
                {certificate.date}
              </p>

              <h3 className="mt-2 text-lg font-bold">
                {certificate.title}
              </h3>

              <p className="mt-1 text-sm font-medium text-neutral-500">
                {certificate.organization}
              </p>

              <p className="mt-4 text-sm leading-6 text-neutral-500">
                {certificate.description}
              </p>

              <a
                href={certificate.link}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-orange-500 hover:text-orange-600"
              >
                View Certificate
                <ExternalLink size={15} />
              </a>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}