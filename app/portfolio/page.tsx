"use client";

import { useState } from "react";
import MainLayout from "@/components/MainLayout";
import Image from "next/image";

// Sample project data
const projects: Record<"websites" | "emailSignatures" | "generators", Project[]> = {
  websites: [
    { id: 1, type: "website", title: "Business Website", img: "/portfolio/business-website.jpg", description: "Custom business website built with Next.js & Tailwind CSS." },
    { id: 2, type: "website", title: "E-commerce Website", img: "/portfolio/ecommerce-website.jpg", description: "WordPress WooCommerce website with responsive design." },
    { id: 3, type: "website", title: "Portfolio Website", img: "/portfolio/portfolio-website.jpg", description: "Personal portfolio website with modern design." },
    { id: 4, type: "website", title: "Blog Website", img: "/portfolio/blog-website.jpg", description: "Showcasing a collection of blog websites I have designed, featuring modern layouts, clean UI, and fully responsive structures." },
    { id: 5, type: "website", title: "Landing Page", img: "/portfolio/landing-page.jpg", description: "High-converting landing page for marketing campaigns." },
    { id: 6, type: "website", title: "Website for Energy Firm", img: "/portfolio/energy-company-website.jpg", description: "A modern and fully responsive website created for an energy company, designed to showcase services, highlight industry expertise, and build trust with clients." },
  ],
  emailSignatures: [
    { id: 1, type: "email", title: "Clcikable HTML Email Signature", img: "/portfolio/michael-signature.jpg", description: "I designed and developed custom, high-conversion HTML email signatures for real estate professionals. These signatures are engineered to build trust through professional imagery while serving as a functional lead-generation tool with clickable Call-to-Action (CTA) buttons." },
    { id: 2, type: "email", title: "Professional HTML Email Signature", img: "/portfolio/deepclean-email-signature.jpg", description: "I developed a dark-themed, animated HTML signature for Deepclean featuring high-contrast CTA buttons like 'View Our Reviews' to build instant social proof. The design uses a bold 'Quality Work' banner and interactive links to turn every email into a professional marketing tool." },
    { id: 3, type: "email", title: "Satic HTML Email Signature", img: "/portfolio/homepros-email-signature.jpg", description: "I created a high-conversion, animated HTML email signature tailored for a Real Estate Broker at Home Pros. This project emphasizes professional trust and direct accessibility, ensuring all contact methods are clear and clickable." },
    { id: 4, type: "email", title: "BetterFleet Branded Email Signature", img: "/portfolio/betterfleet-email-signature.gif", description: "I designed and developed a custom, high-performance HTML email signature for the Marketing Director at BetterFleet. This project focused on blending professional aesthetics with technical reliability across all major email clients." },
    { id: 5, type: "email", title: "Animated Realtor Email Signature", img: "/portfolio/eql-email-signature.gif", description: "This animated email signature was created for an Upwork client in the real estate industry. The design includes a modern layout, branded colors, high-resolution icons, and fully clickable links. It's optimized for Gmail, Outlook, and Apple Mail with responsive behavior across all devices." },
    { id: 6, type: "email", title: "Animated Modern Email Signature", img: "/portfolio/eventful-animated-html-signature.gif", description: "This animated email signature was built for an Upwork client in the media industry, featuring a modern split-layout design, branded color styling, and interactive animated icons." },
  ],
  generators: [
    { id: 1, type: "generator", title: "Kilamobler Email Signature Generator", img: "/portfolio/kila-mobler-generator.jpg", htmlPath: "https://emailsignatures.online/hubfs/kila-mobler-html-email-signature-generator.html" },
    { id: 2, type: "generator", title: "EasySuper Email Signature Generator", img: "/portfolio/easySuper-generator.jpg", htmlPath: "https://emailsignatures.online/hubfs/easySuper_Email_Signature_Generator.html" },
    { id: 3, type: "generator", title: "Minimalist Email Signature Design", img: "/portfolio/RealizeMg-generator.jpg", htmlPath: "https://emailsignatures.online/hubfs/RealizeMG_Email_Signature_Generator.html" },
    { id: 4, type: "generator", title: "Lupin Email Signature Generator", img: "/portfolio/lupin-generator.jpg", htmlPath: "https://emailsignatures.online/hubfs/LupinDental_Editable_Email_Signature_Template.html" },
    { id: 5, type: "generator", title: "List'd Email Signature Generator", img: "/portfolio/listd-generator.jpg", htmlPath: "https://emailsignatures.online/hubfs/Listd_Email_Signature-Generator.html" },
    { id: 6, type: "generator", title: "WS Email Signature Generator", img: "/portfolio/ws-generator.jpg", htmlPath: "https://emailsignatures.online/hubfs/WS-Email-Signature-Generator.html" },
  ],
};

interface Project {
  id: number;
  type: "website" | "email" | "generator";
  title: string;
  description?: string;
  img?: string;
  htmlPath?: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  // Full-width iframe for generators
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
// Portfolio Section Component
function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<
    "websites" | "emailSignatures" | "generators"
  >("websites");

  return (
    <section className="bg-secondary text-white py-24 px-6 lg:px-20">
      <h1 className="text-6xl md:text-8xl lg:text-9xl text-accent my-24 text-center">
        MY PORTFOLIO
      </h1>

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
          Wordpress Websites
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
              className="bg-primary rounded-xl border-2 shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition"
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
                  Click on project to view details
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
              className="bg-primary rounded-xl border-2 shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition"
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
                  Click on project to view details
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ------------------------- GENERATORS GRID (SEPARATE) ------------------------- */}
      {activeCategory === "generators" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1000px] mx-auto">
          {projects.generators.map((proj) => (
            <div
              key={proj.id}
              className="bg-primary rounded-xl border-2 shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition"
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
                  Click to view the live email signature generator
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
      title: "Branding & UI Design",
      description:
        "Clean and modern branding, layout planning, and UI/UX for strong digital identity.",
      icon: "🎨",
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
        What I Can Do For You
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
      <PortfolioSection />
      <ServicesSummary />
    </MainLayout>
  );
}
