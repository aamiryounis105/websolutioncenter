"use client";
import { navLinks } from "@/components/navData";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Navbar scroll states
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Handle scroll behavior for navbar
  useEffect(() => {
    const controlNavbar = () => {
      const current = window.scrollY;

      setHasScrolled(current > 50);
      setIsVisible(!(current > lastScrollY && current > 100));
      setLastScrollY(current);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

   const linkClass = (path: string) =>
    `border-2 px-5 py-2 rounded-3xl transition ${
      pathname === path
        ? "bg-primary text-secondary border-[var(--primary)]"
        : "text-white border-white hover:bg-white hover:text-secondary hover:border-white"
    }`;

  const mobileLinkClass = (href: string) =>
    `block py-2 px-4 transition-colors duration-200 w-fit rounded-full ${
      pathname === href ? "text-primary bg-secondary" : "border-2 border-secondary text-secondary hover:scale-95"
    }`;

  return (
    <>
      {/* 🔵 NAVBAR (scrolls normally) */}
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          hasScrolled
            ? "bg-black/70 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto px-6 lg:px-9 py-6 flex items-center justify-between max-w-8xl">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/web-solution-center.png"
                alt="Logo"
                width={160}
                height={40}
                className="w-40"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex justify-center flex-1">
            <ul className="flex flex-wrap items-center justify-center gap-4 text-lg font-heading">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass(item.href)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-between bg-primary text-secondary rounded-full px-4 py-3 w-fit hover:shadow-lg transition group hover:scale-95"
            >
              <span className="text-lg sm:text-xl mr-4 group-hover:translate-x-1 transition font-heading">
                Get Started
              </span>
              <span className="bg-secondary rounded-full p-1.5 transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="w-4 h-4 text-primary" />
              </span>
            </Link>
          </div>
        </div>
      </nav>

      {/* 🔴 FLOATING HAMBURGER (Always fixed — independent of navbar) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-6 right-6 flex flex-col justify-center items-center gap-1 
                   w-12 h-12 bg-primary border-2 rounded-lg p-4 z-[999] shadow-lg"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        {/* Top Line */}
        <span
          className={`block h-0.5 w-6 transform transition-all duration-300 ${
            isOpen
              ? "rotate-45 translate-y-1.5 bg-black"
              : "-translate-y-1.5 bg-secondary"
          }`}
        />

        {/* Middle Line */}
        <span
          className={`block h-0.5 w-6 bg-secondary transition-opacity duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Bottom Line */}
        <span
          className={`block h-0.5 w-6 transform transition-all duration-300 ${
            isOpen
              ? "-rotate-45 -translate-y-1.5 bg-black"
              : "translate-y-1.5 bg-secondary"
          }`}
        />
      </button>

      {/* 🔵 MOBILE SLIDE MENU */}
      <div
        className={`lg:hidden fixed top-3 h-fit w-[95%] bg-primary rounded-3xl z-[90] 
                    transition-all duration-500 ease-in-out ${
                      isOpen ? "right-3 translate-x-0" : "right-0 translate-x-full"
                    }`}
      >
        <ul className="flex flex-col gap-4 text-2xl font-heading px-6 py-10">
          {navLinks.map((item) => (
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

          {/* Mobile CTA */}
          <li className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-between 
                         bg-secondary text-primary rounded-full px-5 py-3 w-fit
                         hover:shadow-lg transition group hover:scale-95"
            >
              <span className="text-2xl mr-4 group-hover:translate-x-1 transition font-heading">
                Get Started
              </span>
              <span className="bg-primary rounded-full p-1.5 transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="w-4 h-4 text-secondary" />
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
