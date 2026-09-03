import { useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  MapPin,
} from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio contact from ${form.name}`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );

    window.location.href =
      `mailto:your-email@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="bg-neutral-900 py-24 text-white">
      <div className="section-container">

        <div className="mb-14 text-center">
          <p className="mb-3 font-semibold text-orange-500">
            CONTACT
          </p>

          <h2 className="text-4xl font-extrabold md:text-5xl">
            Let's work together
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-neutral-400">
            Have a project, internship opportunity or simply want
            to connect? Feel free to send me a message.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">

          <div>

            <h3 className="text-2xl font-bold">
              Get in touch
            </h3>

            <p className="mt-4 leading-7 text-neutral-400">
              I'm always interested in discussing new projects,
              development opportunities and interesting ideas.
            </p>

            <div className="mt-8 space-y-5">

              <a
                href="mailto:your-email@example.com"
                className="flex items-center gap-4 text-neutral-300 hover:text-orange-500"
              >
                <div className="rounded-lg bg-neutral-800 p-3">
                  <Mail size={20} />
                </div>
                your-email@example.com
              </a>

              <div className="flex items-center gap-4 text-neutral-300">
                <div className="rounded-lg bg-neutral-800 p-3">
                  <MapPin size={20} />
                </div>
                Nepal
              </div>

            </div>

            <div className="mt-8 flex gap-3">

              <a
                href="https://github.com/prajina8"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-neutral-800 p-3 transition hover:bg-orange-500"
              >
                <Github />
              </a>

              <a
                href="#"
                className="rounded-lg bg-neutral-800 p-3 transition hover:bg-orange-500"
              >
                <Linkedin />
              </a>

            </div>

          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-white p-7 text-neutral-900"
          >

            <div className="mb-5">
              <label className="mb-2 block text-sm font-semibold">
                Your Name
              </label>

              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full rounded-lg border border-neutral-300 px-4 py-3 outline-none transition focus:border-orange-500"
              />
            </div>

            <div className="mb-5">
              <label className="mb-2 block text-sm font-semibold">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-lg border border-neutral-300 px-4 py-3 outline-none transition focus:border-orange-500"
              />
            </div>

            <div className="mb-5">
              <label className="mb-2 block text-sm font-semibold">
                Message
              </label>

              <textarea
                name="message"
                required
                value={form.message}
                onChange={handleChange}
                rows="5"
                placeholder="Write your message..."
                className="w-full resize-none rounded-lg border border-neutral-300 px-4 py-3 outline-none transition focus:border-orange-500"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              Send Message
              <Send size={18} />
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}