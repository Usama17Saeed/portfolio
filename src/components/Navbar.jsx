import { useState } from "react";
import { Link } from "react-scroll";

const navLinks = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Projects", to: "projects" },
  { label: "Contact", to: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          to="home"
          smooth
          duration={500}
          className="cursor-pointer text-lg font-bold tracking-wide text-white"
        >
          Usama Saeed
        </Link>

        <button
          type="button"
          className="rounded-md border border-white/20 px-3 py-1 text-white md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          Menu
        </button>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth
                duration={500}
                offset={-80}
                className="cursor-pointer text-sm text-gray-300 transition hover:text-blue-400"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {isOpen && (
        <ul className="space-y-3 border-t border-white/10 bg-black/90 px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth
                duration={500}
                offset={-80}
                onClick={() => setIsOpen(false)}
                className="block cursor-pointer text-gray-200 transition hover:text-blue-400"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
