"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Moon, Sun } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Load from localStorage on first render
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Apply theme changes
  useEffect(() => {
    if (isDark) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const linkClass = (path: string) =>
    `border-2 px-5 py-3 rounded-3xl hover:bg-white hover:border-white hover:text-secondary transition ${
      pathname === path
        ? "bg-secondary text-primary border-[var(--secondary)]"
        : "text-white border-white"
    }`;

  const mobileLinkClass = (path: string) =>
    `hover:text-secondary transition ${
      pathname === path ? "text-secondary font-semibold" : ""
    }`;

  return (
    <nav className="text-white dark:text-white z-50 mx-3">
      <div className="mx-auto px-9 py-2 flex items-center justify-between max-w-8xl">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <img src="/WebSolutionCenter.png" alt="Logo" className="w-40" />
          </Link>
        </div>

        {/* Menu */}
        <div className="hidden md:flex justify-center flex-1">
          <ul className="flex gap-5 text-lg font-medium">
            {[
              { label: "Home", href: "/" },
              { label: "About Me", href: "/about" },
              { label: "Our Services", href: "/services" },
              { label: "Our Team", href: "/team" },
              { label: "Contact Us", href: "/contact" },
            ].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass(item.href)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle Dark Mode"
            className="text-white hover:text-secondary transition"
          >
            {isDark ? (
              <Sun className="w-6 h-6" />
            ) : (
              <Moon className="w-6 h-6" />
            )}
          </button>

          {/* CTA Button */}
          <Link
            href="/about"
            className="inline-flex items-center justify-between bg-primary text-secondary rounded-full px-4 py-3 w-fit hover:shadow-lg transition group hover:scale-95"
          >
            <h1 className="text-lg sm:text-xl mr-4 group-hover:translate-x-1 transition">
              Let's Meet
            </h1>
            <span className="bg-secondary rounded-full p-1.5 transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="w-4 h-4 text-primary" />
            </span>
          </Link>
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center gap-1 w-8 h-8"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span
            className={`block h-0.5 w-6 bg-white transform transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transform transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1.5"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-4 text-lg font-medium px-6 pb-6 bg-primary text-background dark:bg-black">
          {[
            { label: "Home", href: "/" },
            { label: "About Me", href: "/about" },
            { label: "Our Services", href: "/services" },
            { label: "Our Team", href: "/team" },
            { label: "Contact Us", href: "/contact" },
          ].map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={mobileLinkClass(item.href)}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={() => {
                setIsDark(!isDark);
                setIsOpen(false);
              }}
              className="flex items-center gap-2 mt-2"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
              <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
