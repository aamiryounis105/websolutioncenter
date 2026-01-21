"use client";
import { useState } from "react";
import MainLayout from "@/components/MainLayout";
import Image from "next/image";
import SEO from "@/components/SEO";

// Sample project data
const projects: Record<
  "websites" | "emailSignatures" | "generators" | "mobileApps",
  Project[]
> = {
  websites: [
    {
      id: 1,
      type: "website",
      title: "Business Website",
      img: "/portfolio/business-website.webp",
      description: "Custom business website built with Next.js & Tailwind CSS.",
    },
    {
      id: 2,
      type: "website",
      title: "E-commerce Website",
      img: "/portfolio/ecommerce-website.webp",
      description: "WordPress WooCommerce website with responsive design.",
    },
    {
      id: 3,
      type: "website",
      title: "Portfolio Website",
      img: "/portfolio/portfolio-website.webp",
      description: "Personal portfolio website with modern design.",
    },
    {
      id: 4,
      type: "website",
      title: "Blog Website",
      img: "/portfolio/blog-website.webp",
      description:
        "Showcasing a collection of blog websites I have designed, featuring modern layouts, clean UI, and fully responsive structures.",
    },
    {
      id: 5,
      type: "website",
      title: "Landing Page",
      img: "/portfolio/landing-page.webp",
      description: "High-converting landing page for marketing campaigns.",
    },
    {
      id: 6,
      type: "website",
      title: "Website for Energy Firm",
      img: "/portfolio/energy-company-website.webp",
      description:
        "A modern and fully responsive website created for an energy company, designed to showcase services, highlight industry expertise, and build trust with clients.",
    },
  ],
  emailSignatures: [
    {
      id: 1,
      type: "email",
      title: "Clickable HTML Email Signature",
      img: "/portfolio/michael-email-signature.webp",
      description:
        "I designed and developed custom, high-conversion HTML email signatures for real estate professionals. These signatures are engineered to build trust through professional imagery while serving as a functional lead-generation tool with clickable Call-to-Action (CTA) buttons.",
    },
    {
      id: 2,
      type: "email",
      title: "Professional HTML Email Signature",
      img: "/portfolio/deepclean-email-signature.webp",
      description:
        "I developed a dark-themed, animated HTML signature for Deepclean featuring high-contrast CTA buttons like 'View Our Reviews' to build instant social proof. The design uses a bold 'Quality Work' banner and interactive links to turn every email into a professional marketing tool.",
    },
    {
      id: 3,
      type: "email",
      title: "Static HTML Email Signature",
      img: "/portfolio/homepros-email-signature.webp",
      description:
        "I created a high-conversion, animated HTML email signature tailored for a Real Estate Broker at Home Pros. This project emphasizes professional trust and direct accessibility, ensuring all contact methods are clear and clickable.",
    },
    {
      id: 4,
      type: "email",
      title: "BetterFleet Branded Email Signature",
      img: "/portfolio/betterfleet-email-signature.gif",
      description:
        "I designed and developed a custom, high-performance HTML email signature for the Marketing Director at BetterFleet. This project focused on blending professional aesthetics with technical reliability across all major email clients.",
    },
    {
      id: 5,
      type: "email",
      title: "Animated Realtor Email Signature",
      img: "/portfolio/eql-email-signature.gif",
      description:
        "This animated email signature was created for an Upwork client in the real estate industry. The design includes a modern layout, branded colors, high-resolution icons, and fully clickable links. It's optimized for Gmail, Outlook, and Apple Mail with responsive behavior across all devices.",
    },
    {
      id: 6,
      type: "email",
      title: "Animated Modern Email Signature",
      img: "/portfolio/eventful-animated-html-signature.gif",
      description:
        "This animated email signature was built for an Upwork client in the media industry, featuring a modern split-layout design, branded color styling, and interactive animated icons.",
    },
  ],
  generators: [
    {
      id: 1,
      type: "generator",
      title: "Kilamobler Email Signature Generator",
      img: "/portfolio/kila-mobler-generator.webp",
      htmlPath:
        "https://emailsignatures.online/hubfs/kila-mobler-html-email-signature-generator.html",
    },
    {
      id: 2,
      type: "generator",
      title: "EasySuper Email Signature Generator",
      img: "/portfolio/easySuper-generator.webp",
      htmlPath:
        "https://emailsignatures.online/hubfs/easySuper_Email_Signature_Generator.html",
    },
    {
      id: 3,
      type: "generator",
      title: "Minimalist Email Signature Design",
      img: "/portfolio/realizemg-generator.webp",
      htmlPath:
        "https://emailsignatures.online/hubfs/RealizeMG_Email_Signature_Generator.html",
    },
    {
      id: 4,
      type: "generator",
      title: "Lupin Email Signature Generator",
      img: "/portfolio/lupin-generator.webp",
      htmlPath:
        "https://emailsignatures.online/hubfs/LupinDental_Editable_Email_Signature_Template.html",
    },
    {
      id: 5,
      type: "generator",
      title: "List'd Email Signature Generator",
      img: "/portfolio/listd-generator.webp",
      htmlPath:
        "https://emailsignatures.online/hubfs/Listd_Email_Signature-Generator.html",
    },
    {
      id: 6,
      type: "generator",
      title: "WS Email Signature Generator",
      img: "/portfolio/ws-generator.webp",
      htmlPath:
        "https://emailsignatures.online/hubfs/WS-Email-Signature-Generator.html",
    },
  ],
  mobileApps: [
    {
      id: 1,
      type: "app",
      title: "PCG Resources App",
      img: "/portfolio/pcg-resources-1.webp",
      images: [
        "/portfolio/pcg-resources-1.webp",
        "/portfolio/pcg-resources-2.webp",
        "/portfolio/pcg-resources-3.webp",
      ],
      description:
        "Official app for the Presbyterian Church of Ghana offering offline access to hymnals, liturgy, almanac, and church resources in multiple languages. Fully structured content with no ads for easy reference anytime.",
      appLink:
        "https://play.google.com/store/apps/details?id=com.pcgerp.pcgerp",
    },
    {
      id: 2,
      type: "app",
      title: "AiDrive Driver App",
      img: "/portfolio/aidrive-driver-1.webp",
      images: [
        "/portfolio/aidrive-driver-1.webp",
        "/portfolio/aidrive-driver-2.webp",
        "/portfolio/aidrive-driver-3.webp",
      ],
      description:
        "Comprehensive driver app connecting you with customers for transportation, delivery, and logistics services. Features real-time ride requests, GPS navigation, earnings tracking, and in-app communication to enhance your driving experience.",
      appLink:
        "https://play.google.com/store/apps/details?id=com.highapp.co.uk.aidriver.driver",
    },
    {
      id: 3,
      type: "app",
      title: "ProxyMed Infirmier App",
      img: "/portfolio/proxymed-1.webp",
      images: [
        "/portfolio/proxymed-1.webp",
        "/portfolio/proxymed-2.webp",
        "/portfolio/proxymed-3.webp",
      ],
      description:
        "Telehealth app to book video consultations with doctors and licensed providers, access care from anywhere, and review visit details afterward.",
      appLink:
        "https://play.google.com/store/apps/details?id=com.highapp.proxymed.nurse",
    },
    {
      id: 4,
      type: "app",
      title: "KRIIP App",
      img: "/portfolio/kriip-1.webp",
      images: [
        "/portfolio/kriip-1.webp",
        "/portfolio/kriip-2.webp",
        "/portfolio/kriip-3.webp",
      ],
      description:
        "Designed a high-performance fintech app that simplifies crypto-to-fiat transactions. I focused on creating a clean, professional interface for buying, selling, and swapping digital assets, ensuring a seamless user journey from onboarding to asset management. My design bridges the gap between complex blockchain technology and intuitive mobile banking.",
      appLink:
        "https://play.google.com/store/apps/details?id=com.highapp.proxymed.nurse",
    },
    {
      id: 5,
      type: "app",
      title: "Hunt Share Live App",
      img: "/portfolio/hunt-share-live-1.webp",
      images: [
        "/portfolio/hunt-share-live-1.webp",
        "/portfolio/hunt-share-live-2.webp",
        "/portfolio/hunt-share-live-3.webp",
      ],
      description:
        "I designed a specialized mobile interface for real-time outdoor coordination and team tracking. The UX focuses on high-visibility mapping, live GPS location sharing, and intuitive waypoint marking to ensure safety and seamless communication for hunting parties in the field.",
      appLink:
        "https://play.google.com/store/apps/details?id=com.highapp.proxymed.nurse",
    },
    {
      id: 6,
      type: "app",
      title: "Sonata App",
      img: "/portfolio/sonata-1.webp",
      images: [
        "/portfolio/sonata-1.webp",
        "/portfolio/sonata-2.webp",
        "/portfolio/sonata-3.webp",
      ],
      description:
        "I designed a clean and engaging onboarding experience for Sonata, a social platform centered on professional and personal networking. My work focused on creating a streamlined user registration flow with intuitive form fields for profiles and clear visual hierarchies to encourage user completion.",
      appLink:
        "https://play.google.com/store/apps/details?id=com.highapp.proxymed.nurse",
    },
  ],
};

interface Project {
  id: number;
  type: "website" | "email" | "generator" | "app";
  title: string;
  description?: string;
  img?: string; // single image fallback
  images?: string[]; // <-- new multiple images
  htmlPath?: string;
  appLink?: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  // Full-screen iframe for generators
  if (project.type === "generator") {
    return (
      <div className="fixed inset-0 z-50 bg-secondary flex items-center justify-center p-4">
        <div className="w-full h-full max-w-full max-h-full relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-8 text-primary text-3xl font-bold z-50"
          >
            ✕
          </button>
          <iframe
            src={project.htmlPath}
            className="w-full h-full border-0"
          ></iframe>
        </div>
      </div>
    );
  }

  // Mobile App Modal
  if (project.type === "app") {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
        <div className="bg-accent rounded-xl max-w-lg w-full p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-3 text-secondary font-bold text-lg"
          >
            ✕
          </button>

          {/* Responsive Images */}
          {project.images && project.images.length > 0 && (
            <>
              {/* Small screen: show only the first image */}
              <div className="md:hidden mb-5">
                <Image
                  src={project.images[0]}
                  alt={`${project.title} screenshot 1`}
                  width={491}
                  height={1000}
                  className="w-auto h-72 object-cover rounded-3xl shadow-lg"
                />
              </div>

              {/* Medium+ screen: show all images side by side */}
              <div className="hidden md:grid md:grid-cols-3 gap-3 mb-5">
                {project.images.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    width={491}
                    height={1000}
                    className="w-auto h-72 object-cover rounded-3xl shadow-lg"
                  />
                ))}
              </div>
            </>
          )}

          {/* Single Image fallback */}
          {!project.images && project.img && (
            <Image
              src={project.img}
              alt={project.title}
              width={491}
              height={1000}
              className="w-auto h-72 rounded-3xl mb-5 shadow-2xl"
            />
          )}

          <h2 className="text-xl mb-3 text-secondary">{project.title}</h2>

          {project.description && (
            <p className="text-secondary text-sm mb-5">{project.description}</p>
          )}

          {project.appLink && (
            <a
              href={project.appLink}
              target="_blank"
              className="block text-center bg-primary text-secondary py-2 rounded-lg font-semibold transition hover:opacity-80"
            >
              View on App Store / Play Store
            </a>
          )}
        </div>
      </div>
    );
  }

  // Modal for website/email projects
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="bg-accent rounded-xl max-w-xl w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-secondary font-bold text-lg"
        >
          ✕
        </button>

        {project.img && (
          <Image
            src={project.img}
            alt={project.title}
            width={800}
            height={600}
            className="w-full h-auto rounded-lg mb-7 border-2 shadow-2xl"
          />
        )}

        <h2 className="text-xl mb-2 text-secondary">{project.title}</h2>
        {project.description && (
          <p className="text-secondary text-sm">{project.description}</p>
        )}
      </div>
    </div>
  );
}

// Portfolio Section Component
function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<
    "websites" | "emailSignatures" | "generators" | "mobileApps"
  >("websites");

  return (
    <section className="bg-secondary text-white py-24 px-6 lg:px-20">
      <h1 className="text-6xl md:text-8xl lg:text-9xl text-accent mt-24 text-center">
        OUR PORTFOLIO
      </h1>
      <p className="text-base md:text-lg text-accent text-center w-full md:w-2/4 mx-auto mb-24 mt-5">
        Showcasing high-quality websites, mobile apps, and email signatures
        designed to elevate brands and businesses.
      </p>
      <div className="flex flex-col items-center mb-14">
        {/* Animated down arrow */}
        <svg
          className="w-8 h-8 text-primary animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-5 mb-16">
        <button
          className={`px-4 py-2 rounded-full ${
            activeCategory === "websites"
              ? "bg-primary text-secondary"
              : "bg-accent text-secondary"
          }`}
          onClick={() => setActiveCategory("websites")}
        >
          Custom/Wordpress Websites
        </button>
        <button
          className={`px-4 py-2 rounded-full ${
            activeCategory === "mobileApps"
              ? "bg-primary text-secondary"
              : "bg-accent text-secondary"
          }`}
          onClick={() => setActiveCategory("mobileApps")}
        >
          Mobile App Development
        </button>
        <button
          className={`px-4 py-2 rounded-full ${
            activeCategory === "emailSignatures"
              ? "bg-primary text-secondary"
              : "bg-accent text-secondary"
          }`}
          onClick={() => setActiveCategory("emailSignatures")}
        >
          HTML Email Signatures
        </button>

        <button
          className={`px-4 py-2 rounded-full ${
            activeCategory === "generators"
              ? "bg-primary text-secondary"
              : "bg-accent text-secondary"
          }`}
          onClick={() => setActiveCategory("generators")}
        >
          Email Signature Generators
        </button>
      </div>

      {/* ------------------------- WEBSITES GRID ------------------------- */}
      {activeCategory === "websites" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.websites.map((proj) => (
            <div
              key={proj.id}
              className="bg-primary rounded-t-xl rounded-ee-3xl border-2 shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition"
              onClick={() => setSelectedProject(proj)}
            >
              {proj.img && (
                <Image
                  src={proj.img}
                  alt={proj.title}
                  width={1600}
                  height={1080}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="text-lg text-secondary mb-2">{proj.title}</h3>
                <span className="text-sm text-secondary border-2 border-secondary px-3 py-1 rounded-full">
                  ➥ Click on project to view details
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ------------------------- MOBILE APPS GRID (SEPARATE) ------------------------- */}
      {activeCategory === "mobileApps" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-[900px] mx-auto px-10 md:px-0">
          {projects.mobileApps.map((proj) => (
            <div
              key={proj.id}
              className="bg-primary rounded-t-[45px] rounded-ee-[43px] md:rounded-t-[43px] border-2 shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition px-1 pt-2 pb-1"
              onClick={() => setSelectedProject(proj)}
            >
              {proj.img && (
                <Image
                  src={proj.img}
                  alt={proj.title}
                  width={938}
                  height={1912}
                  className="w-full h-auto md:w-64 object-contain mx-auto"
                />
              )}

              <div className="p-4">
                <h3 className="text-lg text-secondary mb-2">{proj.title}</h3>

                <span className="text-xs text-secondary border-2 border-secondary px-2 py-1 rounded-full">
                  ➥ Click to view app details
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ------------------- EMAIL SIGNATURES GRID ------------------- */}
      {activeCategory === "emailSignatures" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.emailSignatures.map((proj) => (
            <div
              key={proj.id}
              className="bg-primary rounded-t-3xl rounded-ee-3xl border-2 shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition"
              onClick={() => setSelectedProject(proj)}
            >
              {proj.img && (
                <Image
                  src={proj.img}
                  alt={proj.title}
                  width={300}
                  height={220}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="text-lg text-secondary mb-2">{proj.title}</h3>
                <span className="text-sm text-secondary border-2 border-secondary px-3 py-1 rounded-full">
                  ➥ Click on project to view details
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ------------------------- GENERATORS GRID (SEPARATE) ------------------------- */}
      {activeCategory === "generators" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1050px] mx-auto">
          {projects.generators.map((proj) => (
            <div
              key={proj.id}
              className="bg-primary rounded-t-3xl rounded-ee-3xl border-2 shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition"
              onClick={() => setSelectedProject(proj)}
            >
              {proj.img && (
                <Image
                  src={proj.img}
                  alt={proj.title}
                  width={800}
                  height={600}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="text-lg text-secondary mb-2">{proj.title}</h3>

                <span className="text-xs text-secondary border-2 border-secondary px-2 py-1 rounded-full">
                  ➥ Click to view the live email signature generator
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ---------------- Modal ---------------- */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
// ======================
// Services Summary Section
// ======================

function ServicesSummary() {
  const services = [
    {
      title: "Custom Website Development",
      description:
        "Modern, fast, and SEO-optimized websites built with Next.js, React, and WordPress.",
      icon: "💻",
    },
    {
      title: "WordPress Development",
      description:
        "Complete WordPress solutions including Elementor, WooCommerce, and speed optimization.",
      icon: "⚙️",
    },
    {
      title: "Mobile App Development",
      description:
        "High-performance Android and iOS apps built with a single codebase for faster delivery and easier maintenance.",
      icon: "📲",
    },
    {
      title: "Email Signature Design",
      description:
        "Clickable, mobile-responsive HTML email signatures for Gmail, Outlook, and Apple Mail.",
      icon: "✉️",
    },
    {
      title: "Signature Generators",
      description:
        "Dynamic HTML signature generators where users can enter details and preview live output.",
      icon: "🛠️",
    },
    {
      title: "Website SEO",
      description:
        "On-page SEO implementation, technical fixes, and optimization for higher visibility.",
      icon: "📈",
    },
  ];

  return (
    <section className="bg-white pt-20 pb-5 px-6 lg:px-20">
      <h2 className="text-4xl md:text-7xl text-secondary text-center mb-16">
        What We Can Do For You
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-accent text-secondary rounded-3xl p-8 shadow-lg hover:scale-[0.97] transition"
          >
            <div className="text-5xl mb-4">{service.icon}</div>

            <h3 className="text-2xl mb-2">{service.title}</h3>

            <p className="text-secondary/80 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
// Final Page
export default function Page() {
  return (
    <MainLayout>
      <SEO
        title="Portfolio | WebSolution Center"
        description="View our best work — websites, apps, HTML email signatures, animated email signatures & custom tools."
        url="https://websolutioncenter.com/portfolio"
        image="https://websolutioncenter.com/og/og-portfolio.webp"
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Portfolio",
          url: "https://websolutioncenter.com/portfolio",
          description:
            "A showcase of digital projects created by WebSolution Center, including websites, mobile apps, HTML email signatures, animated email signatures, and custom tools.",
          about: {
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
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://websolutioncenter.com/portfolio",
          },
        }}
      />
      <PortfolioSection />
      <ServicesSummary />
    </MainLayout>
  );
}
