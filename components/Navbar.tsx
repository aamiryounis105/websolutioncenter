"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Scroll states for sticky navbar
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

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

  // Scroll handling for sticky navbar
  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const linkClass = (path: string) =>
    `border-2 px-5 py-3 rounded-3xl hover:bg-white hover:border-white hover:text-secondary transition ${
      pathname === path
        ? "bg-primary text-secondary border-[var(--primary)]"
        : "text-white border-white"
    }`;

  const mobileLinkClass = (href: string) =>
  `block py-2 px-4 transition-colors duration-200 w-fit border-2 border-secondary rounded-full bg-secondary  ${
    pathname === href
      ? "text-accent"
      : "text-primary hover:text-accent"
    }`;

  return (
    <nav
  className={`fixed top-0 left-0 w-full z-50 
    transition-all duration-500 ease-in-out
    ${isVisible ? "translate-y-0" : "-translate-y-full"} 
    ${hasScrolled ? "bg-black/70 backdrop-blur-md shadow-md" : "bg-transparent"}
  `}
>
      <div className="mx-auto px-9 py-4 flex items-center justify-between max-w-8xl">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <img src="/WebSolutionCenter.png" alt="Logo" className="w-40" />
          </Link>
        </div>

        {/* Menu */}
        <div className="hidden lg:flex justify-center flex-1">
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
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="mailto:aamiryounis105@gmail.com"
            className="inline-flex items-center justify-between bg-primary text-secondary rounded-full px-4 py-3 w-fit hover:shadow-lg transition group hover:scale-95"
          >
            <h1 className="text-lg sm:text-xl mr-4 group-hover:translate-x-1 transition font-bold">
              Let&apos;s Meet
            </h1>
            <span className="bg-secondary rounded-full p-1.5 transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="w-4 h-4 text-primary" />
            </span>
          </Link>
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col justify-center items-center gap-1 w-8 h-8"
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
  className={`lg:hidden overflow-hidden transition-[max-height] duration-500 ease-in-out ${
    isOpen ? "max-h-[500px]" : "max-h-0"
  }`}
>
  <ul className="flex flex-col gap-4 text-2xl font-medium px-6 py-6 bg-primary text-secondary dark:bg-black">
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

    {/* Mobile CTA Button */}
    <li className="pt-4">
      <Link
            href="mailto:aamiryounis105@gmail.com"
            className="inline-flex items-center justify-between bg-secondary text-accent rounded-full px-6 py-3 w-fit hover:shadow-lg transition group hover:scale-95">
            <h1 className="text-lg sm:text-xl mr-4 group-hover:translate-x-1 transition font-bold">
              Let&apos;s Meet
            </h1>
            <span className="bg-primary rounded-full p-1.5 transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="w-4 h-4 text-secondary" />
            </span>
          </Link>
    </li>
  </ul>
</div>
    </nav>
  );
}
