import { useState } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
} from "lucide-react";

const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Certificates", "certificates"],
  ["Experience", "experience"],
  ["Contact", "contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-neutral-200 bg-white/90 backdrop-blur-md">
      <div className="section-container">
        <div className="flex h-18 items-center justify-between">
          
          <button
            onClick={() => scrollToSection("home")}
            className="text-xl font-extrabold"
          >
            <span className="text-neutral-900">Prajina</span>
            
          </button>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map(([name, id]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-sm font-medium text-neutral-600 transition hover:text-black-500"
              >
                {name}
              </button>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="https://github.com/prajina8"
              target="_blank"
              rel="noreferrer"
              className="rounded-full p-2 hover:bg-neutral-100"
            >
              <Github size={19} />
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
              onClick={() => scrollToSection("contact")}
              className="rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              Contact Me
            </button>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="border-t border-neutral-100 py-4 md:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map(([name, id]) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="rounded-lg px-3 py-3 text-left text-sm font-medium hover:bg-orange-50 hover:text-black-500"
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}