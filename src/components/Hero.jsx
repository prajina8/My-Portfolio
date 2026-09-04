import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Download,
  Facebook,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center bg-white pt-20"
    >
      <div className="section-container">
        <div className="grid items-center gap-12 md:grid-cols-2">

          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black bg-orange-50 px-4 py-2 text-sm font-medium text-black">
              <span className="h-2 w-2 rounded-full bg-black"></span>
              Available for opportunities
            </div>

            <p className="mb-3 text-lg font-medium text-neutral-500">
              Hello, I'm
            </p>

            <h1 className="text-5xl font-extrabold leading-tight text-neutral-900 md:text-7xl">
              Prajina Adhikari
              
            </h1>

            <h2 className="mt-4 text-2xl font-bold text-neutral-700 md:text-3xl">
              MERN Stack Developer
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-neutral-500 md:text-lg">
              I am a BSc. CSIT student passionate about building
              modern, responsive and user-friendly web applications
              using React, Node.js, Express and MongoDB.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-black px-6 py-3 font-semibold text-white transition hover:bg-black"
              >
                View My Work
                <ArrowDown size={18} />
              </a>

              <a
                href="/PrajinaCV.pdf"
                download
                className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-6 py-3 font-semibold text-neutral-700 transition hover:border-orange-500 hover:text-orange-500"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>

            <div className="mt-8 flex items-center gap-5">
              <a
                href="https://github.com/prajina8"
                target="_blank"
                rel="noreferrer"
                className="text-neutral-500 hover:text-black"
              >
                <Github />
              </a>

             <a
  href="https://www.linkedin.com/in/prajina-adhikari-931b38343"
  target="_blank"
  rel="noreferrer"
  className="rounded-full p-2 hover:bg-neutral-100"
>
  <Linkedin size={19} />
</a>
    <a
  href="https://www.facebook.com/share/18Bue9rdvJ/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Facebook"
  className="text-neutral-500 hover:text-black transition-colors"
>
  <Facebook size={20} />
</a>

              <a
                href="mailto:prajinaadhikari5@gmail.com"
                className="text-neutral-500 hover:text-black"
              >
                <Mail />
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative">

              <div className="absolute -inset-5 rounded-full bg-black blur-2xl"></div>

              <div className="relative">
  <div className="absolute -inset-5 rounded-full bg-orange-100 blur-2xl"></div>

  <div className="relative h-72 w-72 overflow-hidden rounded-full border-8 border-orange-100 bg-neutral-100 md:h-96 md:w-96">
    <img
      src="/images/hello.jpg"
      alt="Prajina Adhikari"
      className="h-full w-full object-cover"
    />
  </div>
</div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}