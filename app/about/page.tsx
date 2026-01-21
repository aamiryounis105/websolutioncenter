"use client";
import Head from "next/head";
import MainLayout from "@/components/MainLayout";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import SEO from "@/components/SEO";

/* ===================== HERO ===================== */
function Hero() {
  return (
    <section className="bg-secondary text-white relative overflow-hidden pt-40 lg:pt-20">
      <div className="mx-auto px-6 lg:px-20 py-0 lg:py-24 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left Column: Text */}
        <div className="lg:w-1/2 text-center lg:text-left">
          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6">
            Hi, I&apos;m Aamir R.
          </h1>

          {/* Subheading */}
          <p className="mb-7 text-lg md:text-xl">
            Providing Custom Web Development, WordPress Solutions, and Expert
            HTML Email Systems. Over 5 Years of Experience Delivering 500+
            Projects on Fiverr & Upwork.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-between bg-primary text-secondary rounded-full px-4 py-3 w-fit hover:shadow-lg transition group hover:scale-95"
            >
              <h1 className="text-lg sm:text-xl mr-4 group-hover:translate-x-1 transition">
                Hire Me
              </h1>
              <span className="bg-secondary rounded-full p-1.5 transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="w-4 h-4 text-primary" />
              </span>
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-between bg-primary text-secondary rounded-full px-4 py-3 w-fit hover:shadow-lg transition group hover:scale-95"
            >
              <h1 className="text-lg sm:text-xl mr-4 group-hover:translate-x-1 transition">
                View Portfolio
              </h1>
              <span className="bg-secondary rounded-full p-1.5 transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="w-4 h-4 text-primary" />
              </span>
            </Link>
          </div>
        </div>
        {/* Right Column: Image */}
        <div className="lg:w-1/2 relative w-full flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl bg-primary">
            <Image
              src="/aamir-raza.webp"
              alt="Aamir Raza - Web Developer and Email Signature Specialist"
              fill
              className="object-contain pt-5"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
function AboutMe() {
  // === Scroll Animation Parallax ===
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * -0.4); // adjust intensity if needed
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const baseOffset = 300;

  return (
    <section className="bg-secondary text-white">
      <div className="mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-16">
        {/* Left: Image with Parallax Animation */}
        <div>
          <div
            className="
              relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96
              rounded-3xl overflow-hidden bg-primary -mr-32
              transition-transform duration-200 ease-out hidden lg:block
            "
            style={{
              transform: `translateY(${baseOffset + offset}px)`,
            }}
          >
            <Image
              src="/aamir-raza-1.webp"
              alt="Aamir Raza - Web Developer and Email Signature Specialist"
              fill
              className="object-contain pt-5"
              priority
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="bg-accent p-10 pl-10 lg:pl-28 rounded-3xl text-secondary text-center md:text-left">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:6xl mb-4 leading-tight md:leading-snug lg:leading-tight">
            Your Partner for High-Converting Websites
          </h1>

          {/* Description */}
          <p className="text-lg leading-relaxed mb-6">
            I&apos;m Aamir, a Custom Website Developer & WordPress Specialist
            with over 5 years of experience working with global clients on
            Fiverr and Upwork.
            <br />
            <br />
            I combine modern UI/UX design with clean, scalable development to
            create websites that look stunning, load fast, and convert better.
            <br />
            <br />
            Along with website design, I also specialize in:
          </p>

          {/* Skills List */}
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 w-full mx-auto md:mx-0 text-center md:text-left">
            <li className="flex items-center gap-2 bg-primary w-fit px-4 py-1 rounded-full mx-auto md:mx-0">
              <span className="text-secondary text-3xl">•</span> Custom Websites
            </li>
            <li className="flex items-center gap-2 bg-primary w-fit px-4 py-1 rounded-full mx-auto md:mx-0">
              <span className="text-secondary text-3xl">•</span> WordPress
              Websites
            </li>
            <li className="flex items-center gap-2 bg-primary w-fit px-4 py-1 rounded-full mx-auto md:mx-0">
              <span className="text-secondary text-3xl">•</span> Email Design
            </li>
            <li className="flex items-center gap-2 bg-primary w-fit px-4 py-1 rounded-full mx-auto md:mx-0">
              <span className="text-secondary text-3xl">•</span> HTML Email
              Signatures
            </li>
            <li className="flex items-center gap-2 bg-primary w-fit px-4 py-1 rounded-full mx-auto md:mx-0">
              <span className="text-secondary text-3xl">•</span> Signature
              Generators
            </li>
            <li className="flex items-center gap-2 bg-primary w-fit px-4 py-1 rounded-full mx-auto md:mx-0">
              <span className="text-secondary text-3xl">•</span> Branding & Web
              Strategy
            </li>
          </ul>

          {/* CTA */}
          <div className="mt-10">
            <Link
              href="/contact"
              className="
                inline-flex items-center justify-between 
                bg-primary text-secondary rounded-full px-4 py-3 w-fit
                hover:shadow-lg transition group hover:scale-95
              "
            >
              <h1 className="text-lg sm:text-xl mr-4 group-hover:translate-x-1 transition">
                Work With Me
              </h1>
              <span className="bg-secondary rounded-full p-1.5 transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="w-4 h-4 text-primary" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
function TechStack() {
  const techs = [
    { name: "HTML", icon: "/icons/html-logo.webp" },
    { name: "CSS", icon: "/icons/css-logo.webp" },
    { name: "JavaScript", icon: "/icons/js-logo.webp" },
    { name: "React", icon: "/icons/react-logo.webp" },
    { name: "Next.js", icon: "/icons/nextjs-logo.webp" },
    { name: "Node.js", icon: "/icons/nodejs-logo.webp" },
    { name: "WordPress", icon: "/icons/wordpress-logo.webp" },
    { name: "Figma", icon: "/icons/figma-logo.webp" },
  ];

  return (
    <section className="bg-secondary text-secondary py-24">
      <div className="max-full mx-auto px-6 lg:px-20">
        {/* Title */}
        <h2 className="text-4xl md:text-6xl text-accent mb-16 text-center">
          My Tech Stack
        </h2>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
          {techs.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center gap-4 p-6 rounded-3xl bg-primary hover:bg-accent hover:scale-105"
            >
              <div className="w-16 h-16 relative">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-bold">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function Experience() {
  const milestones = [
    {
      year: "2021",
      title: "Started Freelancing",
      description:
        "Began offering custom website and email signature design services on Fiverr and Upwork.",
    },
    {
      year: "2022",
      title: "First 100 Projects",
      description:
        "Completed over 100 projects, specializing in HTML email signatures and responsive websites.",
    },
    {
      year: "2023",
      title: "Signature Generator Tool",
      description:
        "Built and launched a custom email signature generator to simplify client workflows.",
    },
    {
      year: "2024",
      title: "Expanded Services",
      description:
        "Added full-stack development services using React, Next.js, Node.js, and Express.js.",
    },
    {
      year: "2025",
      title: "5+ Years Experience",
      description:
        "Over 500 projects completed with clients globally, building a strong reputation for quality and reliability.",
    },
  ];

  return (
    <section className="bg-secondary text-white pb-10">
      <div className="mx-auto px-6 lg:px-20">
        {/* Section Title */}
        <h2 className="text-4xl md:text-6xl text-accent text-center mb-16">
          My Experience
        </h2>

        {/* Timeline */}
        <div className="relative border-l-2 border-accent ml-4">
          {milestones.map((milestone, index) => (
            <div key={milestone.year} className="mb-12 ml-6 relative">
              <span className="absolute -left-5 top-0 w-4 h-4 bg-accent rounded-full border-2 border-white"></span>
              <div className="flex flex-col md:flex-row md:items-center md:gap-6">
                <div className="md:w-1/4 font-bold text-lg text-primary">
                  {milestone.year}
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl md:text-2xl mb-2 text-accent">
                    {milestone.title}
                  </h3>
                  <p className="text-white">{milestone.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function Services() {
  const services = [
    {
      title: "Custom Websites",
      description:
        "Responsive, modern, and high-converting websites tailored to your brand and business goals.",
      color: "bg-accent",
    },
    {
      title: "WordPress Development",
      description:
        "Fully functional WordPress sites, themes, and plugins, optimized for speed and SEO.",
      color: "bg-accent",
    },
    {
      title: "Email Design & Signatures",
      description:
        "HTML email templates and mobile-responsive email signatures for consistent branding.",
      color: "bg-accent",
    },
    {
      title: "Email Signature Generator",
      description:
        "Custom tools to generate professional signatures for all employees, saving time and effort.",
      color: "bg-primary",
    },
    {
      title: "Branding & Web Strategy",
      description:
        "Strategic planning to align your web presence with your brand and marketing goals.",
      color: "bg-primary",
    },
    {
      title: "Website SEO",
      description:
        "On-page and technical SEO strategies to boost your website visibility and search ranking.",
      color: "bg-primary",
    },
  ];

  return (
    <section className="bg-secondary text-white pb-14 md:pb-24">
      <div className="mx-auto px-6 lg:px-20">
        {/* Section Title */}
        <h2 className="text-4xl md:text-6xl text-accent text-center mb-16">
          Services I Offer
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.color} p-8 rounded-3xl shadow-lg hover:scale-105 transition transform duration-100`}
            >
              <h3 className="text-2xl mb-4 text-secondary text-center md:text-left">
                {service.title}
              </h3>
              <p className="text-secondary text-center md:text-left">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function CTASection() {
  return (
    <section className="text-secondary mt-16 lg:mt-24 mb-10">
      <div className="mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl mb-6 leading-tight md:leading-tight">
            Ready to Build Your Digital Presence?
          </h2>
          <p className="text-lg">
            Let&apos;s work together to create a website, email signature, or
            brand strategy that elevates your business. I bring 5+ years of
            experience in web development, design, and SEO to deliver results
            that matter.
          </p>
        </div>

        {/* Right CTA Button */}
        <div className="md:w-1/3 flex justify-center md:justify-end">
          <Link
            href="/contact"
            className="
                inline-flex items-center justify-between 
                bg-primary text-secondary rounded-full px-4 py-3 w-fit
                hover:shadow-lg transition group hover:scale-95
              "
          >
            <h1 className="text-lg sm:text-xl mr-4 group-hover:translate-x-1 transition">
              Work With Me
            </h1>
            <span className="bg-secondary rounded-full p-1.5 transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="w-4 h-4 text-primary" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
/* ===================== PAGE EXPORT ===================== */
export default function Page() {
  return (
    <MainLayout>
      <SEO
        title="About Aamir Raza | Founder of WebSolution Center"
        description="Learn about Aamir Raza, full-stack web developer and email signature specialist. Founder of WebSolution Center, creating websites, apps, and advanced HTML email signatures."
        url="https://websolutioncenter.com/about"
        image="https://websolutioncenter.com/og/og-about.webp"
        schema={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Aamir Raza",
          url: "https://websolutioncenter.com/about",
          image: "https://websolutioncenter.com/aamir-raza.webp",
          jobTitle: "Web Developer & Email Signature Specialist",
          description:
            "Aamir Raza is a full-stack web developer and email signature specialist. Founder of WebSolution Center, delivering modern websites, mobile apps, HTML email signatures, and custom signature solutions.",
          sameAs: [
            "https://facebook.com/aamiryounis105",
            "https://instagram.com/aamiryounis105",
            "https://x.com/aamiryounis105",
            "https://linkedin.com/in/aamiryounis105",
          ],
          worksFor: {
            "@type": "Organization",
            name: "WebSolution Center",
            url: "https://websolutioncenter.com",
            logo: "https://websolutioncenter.com/logo.png",
          },
          founderOf: {
            "@type": "Organization",
            name: "WebSolution Center",
            url: "https://websolutioncenter.com",
            logo: "https://websolutioncenter.com/logo.png",
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://websolutioncenter.com/about",
          },
        }}
      />
      <Hero />
      <AboutMe />
      <TechStack />
      <Experience />
      <Services />
      <CTASection />
    </MainLayout>
  );
}
