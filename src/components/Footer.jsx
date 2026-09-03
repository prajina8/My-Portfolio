import {
  Github,
  Linkedin,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black py-8 text-white">
      <div className="section-container">

        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">

          <div>
            <p className="font-bold">
              Prajina<span className="text-orange-500">.</span>
            </p>

            <p className="mt-1 text-sm text-neutral-500">
              MERN Stack Developer
            </p>
          </div>

          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Prajina. All rights reserved.
          </p>

          <div className="flex items-center gap-3">

            <a
              href="https://github.com/prajina8"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-neutral-900 p-2 hover:text-orange-500"
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

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="rounded-lg bg-orange-500 p-2 hover:bg-orange-600"
            >
              <ArrowUp size={18} />
            </button>

          </div>

        </div>

      </div>
    </footer>
  );
}