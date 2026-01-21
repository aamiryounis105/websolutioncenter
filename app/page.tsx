"use client";
import { useEffect, useRef } from "react";
import {
  useInView,
  useAnimationFrame,
  motion,
  Variants,
  animate,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import MainLayout from "@/components/MainLayout";
import { FaQuoteLeft } from "react-icons/fa";
import SEO from "@/components/SEO";

/* ======================= HeroSection ======================= */
function HeroSection() {
  const name = "AAMIR";

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12, // Slightly slower stagger for a premium feel
        delayChildren: 0.4,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -150, // Increased distance for a more dramatic entrance
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 18, // Higher damping = smoother, more controlled stop
        stiffness: 70, // Lower stiffness = more "floaty" and elegant
        mass: 0.8,
      },
    },
  };
  return (
    <section className="relative flex flex-col items-center text-center pt-40 px-4 bg-secondary overflow-hidden">
      {/* Availability Badge */}
      <div className="mx-auto w-fit backdrop-blur-xl bg-white/10 border border-white/20 px-6 py-2 rounded-full flex items-center gap-3 uppercase mb-5 md:mb-2 relative z-10">
        <span className="text-3xl text-primary">•</span>
        <em className="text-accent text-xs md:text-sm">Available for Work</em>
      </div>

      {/* Rotating SVG Badge */}
      <div className="absolute top-48 right-48 w-[250px] h-[250px] mx-auto scale-75 hidden lg:block z-10">
        <svg viewBox="0 0 250 250" className="w-full h-full animate-spin-slow">
          <defs>
            <path
              id="circlePath"
              d="M 125, 125 m -100, 0 a 100,100 0 1,1 200,0 a 100,100 0 1,1 -200,0"
            />
          </defs>
          <text
            fill="#fff"
            fontSize="15"
            fontWeight="bold"
            textLength="628"
            lengthAdjust="spacing"
          >
            <textPath href="#circlePath" startOffset="0%">
              GET STARTED NOW - GET STARTED NOW - GET STARTED NOW - &nbsp;
            </textPath>
          </text>
        </svg>

        <Link
          href="/contact"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="flex items-center justify-center w-44 h-44 rounded-full bg-primary text-secondary hover:scale-105 transition-transform duration-300 hover:rotate-45">
            <ArrowUpRight className="w-20 h-20" />
          </div>
        </Link>
      </div>

      {/* ANIMATED NAME SECTION */}
      <motion.h1
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex leading-none tracking-wider text-[130px] md:text-[250px] lg:text-[400px] pt-40 md:pt-40 lg:pt-60 text-white font-bold"
      >
        {name.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>

      {/* Hero Image */}
      <Image
        src="/aamir-raza.webp"
        alt="Aamir Raza - Web Developer and Email Signature Specialist"
        width={600}
        height={600}
        className="w-[320px] md:w-[400px] lg:w-[600px] mx-auto -mt-[270px] md:-mt-[390px] lg:-mt-[600px] relative z-20 pointer-events-none"
        priority
      />
    </section>
  );
}

/* ======================= PROJECT IMAGES ======================= */
const projects = [
  {
    img: "/services/website-development.webp",
    alt: "Custom website development for businesses and brands",
  },
  {
    img: "/services/app-development.webp",
    alt: "Mobile app development for Android and iOS",
  },
  {
    img: "/services/email-signature.webp",
    alt: "HTML email signature design for professionals",
  },
  {
    img: "/services/email-signature-generator.webp",
    alt: "Email signature generator tool for teams and companies",
  },
];

/* ======================= SECTION ======================= */
function MarqueeSection() {
  return (
    <section className="bg-primary py-12 md:py-20 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-16 px-4">
        <h1 className="text-secondary text-4xl sm:text-5xl md:text-7xl leading-tight md:leading-tight">
          Building Modern Digital Experiences
        </h1>
        <p className="text-secondary text-lg md:text-xl max-w-4xl mx-auto mt-4">
          We build modern websites, high-performance mobile apps, and polished
          email signatures that elevate businesses and brands.
        </p>
      </div>

      {/* Project Track */}
      <div className="overflow-hidden w-full">
        <div className="flex gap-8 animate-slide px-4">
          {[...projects, ...projects].map((item, i) => (
            <div
              key={i}
              className="overflow-hidden
              shrink-0 w-[350px] md:w-[480px] lg:w-[550px]
              hover:scale-[0.97] transition-all duration-300"
            >
              <Image
                src={item.img}
                width={1920}
                height={1080}
                alt={item.alt}
                className="w-full h-full object-cover rounded-lg border-secondary border-2"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-16 md:mt-20 mb-3 md:mb-0">
        <Link
          href="/services"
          className="inline-flex items-center justify-between bg-secondary text-primary rounded-full px-5 py-3 w-fit hover:shadow-lg transition group hover:scale-95"
        >
          <h1 className="text-lg sm:text-2xl mr-4 group-hover:translate-x-1 transition">
            Explore Our Services
          </h1>
          <span className="bg-primary rounded-full p-1.5 transition-transform duration-300 group-hover:rotate-45">
            <ArrowUpRight className="w-5 h-5 text-secondary" />
          </span>
        </Link>
      </div>

      {/* Animations */}
      <style>{`
        .animate-slide {
          display: flex;
          animation: slide 25s linear infinite;
          width: fit-content;
        }

        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

/* ======================= ABOUT SECTION ======================= */
function AboutSection() {
  return (
    <section className="max-w-[90%] mx-auto my-20">
      <div className="bg-accent rounded-[50px] md:rounded-[100px] shadow-lg p-10 md:p-16 flex flex-col-reverse md:flex-row gap-12 items-center justify-between">
        <div className="w-full lg:w-1/2 text-center md:text-left">
          <p className="text-secondary mb-2">Hey, nice to meet you 👋</p>

          <h2 className="font-heading text-secondary text-2xl md:text-3xl leading-snug md:leading-snug">
            I&apos;m Aamir, a Web Designer based in Jahanian, Pakistan,
            specializing in Websites, WordPress, and HTML email signatures.
          </h2>

          <p className="text-secondary my-7 text-sm md:text-base">
            I help businesses stand out with custom websites and HTML email
            signatures. You focus on growth — I&apos;ll handle the design.
          </p>

          <Link
            href="/about"
            className="inline-flex items-center justify-between bg-primary text-secondary rounded-full px-4 py-3 w-fit hover:shadow-lg transition group hover:scale-95"
          >
            <h1 className="text-lg sm:text-xl mr-4 group-hover:translate-x-1 transition">
              About Me
            </h1>
            <span className="bg-secondary rounded-full p-1.5 transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="w-4 h-4 text-primary" />
            </span>
          </Link>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/aamir-circle.webp"
            alt="Aamir Raza - Web Developer and Email Signature Specialist"
            width={450}
            height={550}
            className="rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}

/* ======================= EXPERIENCE HERO WITH FIVERR + UPWORK ======================= */

/* --- 1. THE ANIMATED COUNTER COMPONENT --- */
function Counter({ value, suffix = "+" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const node = ref.current;

      // This is the manual animate function
      const controls = animate(0, value, {
        duration: 1.5, // Fast but smooth
        ease: "easeOut", // Clean finish without the 'spring' delay
        onUpdate(latest) {
          node.textContent = Math.floor(latest).toString() + suffix;
        },
      });

      return () => controls.stop();
    }
  }, [isInView, value, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}
/* --- 2. EXPERIENCE SECTION (CARDS WITHOUT ANIMATION) --- */
function ExperienceSection() {
  return (
    <section className="relative bg-black text-white py-16 px-6 lg:px-20 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* TOP BADGE */}
        <div
          className="mx-auto w-fit backdrop-blur-xl bg-white/10 border border-white/20 
          px-6 py-2 rounded-full flex items-center gap-3 text-sm uppercase tracking-wide mb-10"
        >
          <span className="text-3xl text-primary">•</span>
          <em className="text-accent text-xs md:text-sm">
            5+ Years on Fiverr & Upwork
          </em>
        </div>

        {/* Heading */}
        <h1 className="text-center text-accent leading-none text-6xl md:text-8xl lg:text-9xl">
          EXPERIENCE
        </h1>

        {/* PLATFORM CARDS (ANIMATION REMOVED) */}
        <div className="mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Fiverr Card */}
          <a
            href="https://fiverr.com/younis105"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex items-center gap-6 hover:scale-[1.03] transition-all"
          >
            <div className="w-20 h-20 bg-[#1dbf73] rounded-xl flex items-center justify-center shadow-[0_0_20px_#1dbf7344] group-hover:shadow-[0_0_40px_#1dbf7377] transition-all">
              <img src="/fiverr.webp" className="w-9" alt="Fiverr" />
            </div>
            <div>
              <p className="text-xl font-semibold">Level 2 Seller</p>
              <p className="text-gray-300 text-sm">200+ projects delivered</p>
              <p className="text-gray-300 text-xs md:text-sm mt-2">
                ➥ Click to view fiverr profile
              </p>
            </div>
          </a>

          {/* Upwork Card */}
          <a
            href="https://upwork.com/freelancers/aamiryounis105"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex items-center gap-6 hover:scale-[1.03] transition-all"
          >
            <div className="w-20 h-20 bg-accent rounded-xl flex items-center justify-center shadow-[0_0_20px_#6fda4444] group-hover:shadow-[0_0_40px_#6fda4477] transition-all">
              <img src="/upwork.webp" className="w-14" alt="Upwork" />
            </div>
            <div>
              <p className="text-xl font-semibold">Top Rated Seller</p>
              <p className="text-gray-300 text-sm">300+ projects delivered</p>
              <p className="text-gray-300 text-xs md:text-sm mt-2">
                ➥ Click to view upwork profile
              </p>
            </div>
          </a>
        </div>

        {/* STATS SECTION (ANIMATION KEPT) */}
        <div className="mt-14 md:mt-16 flex flex-wrap justify-center gap-8 md:gap-20">
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-primary">
              <Counter value={500} />
            </h3>
            <p className="text-accent mt-2">Projects</p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-primary">
              <Counter value={5} />
            </h3>
            <p className="text-accent mt-2">Years</p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-primary">
              <Counter value={30} />
            </h3>
            <p className="text-accent mt-2">Countries</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ======================= Testimonials ======================= */
const testimonials = [
  {
    id: 1,
    text: `"I want to thank Aamir for working with his team to create, design, develop and brand a wonderful website for my business. He is highly experienced and always delivers ahead of schedule. Excellent communication and great results!"`,
    name: "Harrison T.",
    role: "Business Owner",
    img: "/clients/harrison-t.webp",
  },
  {
    id: 2,
    text: `"Hello from Italy! It was a beautiful experience working with Aamir. He provided great insights and built multiple websites for me and my clients. Smooth communication and professional work. Highly recommended!"`,
    name: "Emanuele M.",
    role: "Entrepreneur",
    img: "/clients/emanuele-m.webp",
  },
  {
    id: 3,
    text: `"Just wanted to appreciate Aamir for helping me create my website. He made everything easy from planning to completion. Great support and very cooperative. I'm extremely happy with the final result!"`,
    name: "Micheal P.",
    role: "CDL Coach",
    img: "/clients/micheal-p.webp",
  },
  {
    id: 4,
    text: `"Aamir redesigned our company website and supported us throughout the whole process. He handled all challenges professionally with creativity and patience. We are extremely grateful for his work!"`,
    name: "Kristina Jones",
    role: "Minister - HI-TECH",
    img: "/clients/kristina-jones.webp",
  },
  {
    id: 5,
    text: `"Working with Aamir on our email signatures was a game-changer. He understood our branding perfectly and delivered a professional, clickable signature that works flawlessly across all email clients!"`,
    name: "Sarah Mitchell",
    role: "E-commerce Owner",
    img: "/clients/sarah-mitchell.webp",
  },
  {
    id: 6,
    text: `"Aamir transformed our outdated email signatures into modern, branded designs. The results were immediate – more consistent communication and a polished company image. Highly professional!"`,
    name: "David Chen",
    role: "Tech Startup Founder",
    img: "/clients/david-chen.webp",
  },
  {
    id: 7,
    text: `"From initial concept to final implementation, Aamir maintained excellent communication and delivered quality work on time. The signature generator he provided made updates effortless!"`,
    name: "Jessica Rodriguez",
    role: "Marketing Director",
    img: "/clients/jessica-rodriguez.webp",
  },
  {
    id: 8,
    text: `"Aamir's expertise in email signatures is unmatched. He created a design that perfectly represents our brand and provided a generator that simplifies management for our entire team. Absolutely thrilled!"`,
    name: "Laura Smith",
    role: "Small Business Owner",
    img: "/clients/laura-smith.webp",
  },
];

function TestimonialSection() {
  return (
    <section className="my-24 px-6 lg:px-16">
      {/* Top Heading */}
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-center mb-16">
        <h2 className="text-4xl md:text-6xl max-w-xl leading-tight text-center lg:text-left">
          Here&apos;s What My Client Has to Say About Me
        </h2>

        <p className="text-secondary text-lg max-w-md mt-6 lg:mt-0 text-center lg:text-left">
          Discover what our clients have to say about their experience! Real
          stories and genuine feedback from those who trusted us to bring their
          visions to life.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {testimonials.map((t) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: t.id * 0.1 }}
            className="bg-accent rounded-3xl p-8 shadow-lg flex flex-col"
          >
            <FaQuoteLeft className="text-6xl text-secondary mb-4" />

            <p className="text-secondary text-lg leading-relaxed mb-8">
              {t.text}
            </p>

            <div className="flex items-center gap-3 mt-auto">
              <Image
                src={t.img}
                alt={t.name}
                width={50}
                height={50}
                className="rounded-full w-12 h-12 object-cover"
              />
              <div>
                <h1 className="text-secondary text-lg">{t.name}</h1>
                <p className="text-secondary text-xs">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ======================= Team Preview ======================= */
const teamPreview = [
  {
    id: 1,
    name: "Muhammad Hamza",
    alt: "Hamza - Email Signature Designer",
    img: "/team/hamza.webp",
    title: "Email Signature Designer",
  },
  {
    id: 2,
    name: "Aamir Raza",
    alt: "Aamir Raza - Web Developer & Email Signature Specialist",
    img: "/team/aamir-raza.webp",
    title: [
      "Web Developer & Email Signature Specialist",
      "(Founder - WebSolution Center)",
    ],
  },
  {
    id: 3,
    name: "Muzammil Hussain",
    alt: "Muzammil Hussain - App Developer",
    img: "/team/muzammil.webp",
    title: "App Developer",
  },
];
function TeamOverview() {
  return (
    <section className="bg-secondary py-16 px-6 lg:px-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl text-accent mb-4">Meet Our Team</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-accent">
          Our talented team combines expertise in web development, app
          development, and email signature design.
        </p>
      </div>

      {/* Team Preview Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-5xl mx-auto mb-8">
        {teamPreview.map((member) => (
          <div
            key={member.id}
            className={`
              bg-primary rounded-3xl overflow-hidden shadow-lg flex flex-col items-center justify-end transition
              ${member.id === 2 ? "lg:scale-110 shadow-2xl z-10" : ""}
            `}
          >
            <Image
              src={member.img}
              alt={member.alt}
              width={member.id === 2 ? 260 : 200}
              height={member.id === 2 ? 260 : 200}
              className={`pt-2 object-contain 
                ${member.id === 2 ? "w-72 h-72" : "w-72 h-72"}`}
            />

            <div className="bg-accent w-full flex flex-col justify-center items-center py-4">
              <h3
                className={`text-secondary ${
                  member.id === 2 ? "text-3xl" : "text-2xl"
                }`}
              >
                {member.name}
              </h3>

              {/* Multi-line title (Aamir) */}
              {Array.isArray(member.title) ? (
                <div className="flex flex-col items-center mt-1">
                  {/* First line — with background */}
                  <span
                    className={`
                    px-3 py-1 bg-secondary rounded-full text-accent
                    ${member.id === 2 ? "text-xs" : "text-sm"}
                  `}
                  >
                    {member.title[0]}
                  </span>

                  {/* Second line — no background */}
                  <span
                    className={`
                    text-secondary mt-1
                    ${member.id === 2 ? "text-sm" : "text-xs"}
                  `}
                  >
                    {member.title[1]}
                  </span>
                </div>
              ) : (
                <span
                  className={`
                  mt-1 px-3 py-1 bg-secondary rounded-full text-accent
                  ${member.id === 2 ? "text-base" : "text-sm"}
                  `}
                >
                  {member.title}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* View Full Team Button */}
      <div className="text-center mt-16">
        <Link
          href="/team"
          className="inline-flex items-center justify-between bg-primary text-secondary rounded-full px-4 py-3 w-fit hover:shadow-lg transition group hover:scale-95"
        >
          <h1 className="text-lg sm:text-xl mr-4 group-hover:translate-x-1 transition">
            View Our Team
          </h1>
          <span className="bg-secondary rounded-full p-1.5 transition-transform duration-300 group-hover:rotate-45">
            <ArrowUpRight className="w-4 h-4 text-primary" />
          </span>
        </Link>
      </div>
    </section>
  );
}

/* ======================= CTASection ======================= */
function CTASection() {
  return (
    <section className="bg-white text-primary px-6 lg:px-20 mt-24">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
        <h2 className="text-4xl md:text-6xl">Ready to Work Together?</h2>
        <p className="text-lg md:text-xl text-secondary max-w-2xl">
          Whether it&apos;s a Custom Website, Wordpress Website, Email
          Signature, or an interactive Email Signature Generator, we provide
          solutions tailored to your needs. Let&apos;s create something amazing
          together.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center justify-between bg-primary text-secondary rounded-full px-4 py-3 w-fit hover:shadow-lg transition group hover:scale-95"
        >
          <h1 className="text-lg sm:text-xl mr-4 group-hover:translate-x-1 transition">
            Contact Us
          </h1>
          <span className="bg-secondary rounded-full p-1.5 transition-transform duration-300 group-hover:rotate-45">
            <ArrowUpRight className="w-4 h-4 text-primary" />
          </span>
        </Link>
      </div>
    </section>
  );
}

/* ======================= HOME PAGE ======================= */
export default function HomePage() {
  return (
    <MainLayout>
      <SEO
        title="WebSolution Center | Websites, Apps & Email Signatures"
        description="We build modern websites, mobile apps, HTML email signatures, and signature generators. High-performance digital solutions for businesses."
        url="https://websolutioncenter.com"
        image="https://websolutioncenter.com/og/og-home.webp"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "WebSolution Center",
          url: "https://websolutioncenter.com",
          description:
            "WebSolution Center provides website development, mobile app development, HTML email signatures, and custom signature generators for businesses.",
          publisher: {
            "@type": "Organization",
            name: "WebSolution Center",
            url: "https://websolutioncenter.com",
            logo: "https://websolutioncenter.com/logo.png",
            sameAs: [
              "https://facebook.com/aamiryounis105",
              "https://instagram.com/aamiryounis105",
              "https://x.com/aamiryounis105",
              "https://linkedin.com/in/aamiryounis105",
            ],
          },
          potentialAction: {
            "@type": "SearchAction",
            target: "https://websolutioncenter.com/?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://websolutioncenter.com",
          },
        }}
      />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ExperienceSection />
      <TestimonialSection />
      <TeamOverview />
      <CTASection />
    </MainLayout>
  );
}
