"use client";
import MainLayout from "@/components/MainLayout";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BsPatchCheck } from "react-icons/bs";
import SEO from "@/components/SEO";
import {
  Code,
  Globe,
  Smartphone,
  PenTool,
  Layers,
  BarChart2,
} from "lucide-react";

// ================================
// Hero Section
// ================================
function Hero() {
  return (
    <section className="bg-secondary text-white py-24 px-6 lg:px-20">
      <h1 className="text-6xl md:text-8xl lg:text-9xl text-accent text-center mt-24 mb-5">
        SERVICES
      </h1>
      <p className="text-base md:text-lg text-accent text-center w-3/4 mx-auto">
        High-quality digital solutions tailored for brands, businesses, and
        creators.
      </p>
    </section>
  );
}

// ================================
// Service Card Component
// ================================
interface ServiceItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: string;
}

function ServiceItem({ icon, title, description }: ServiceItemProps) {
  return (
    <div className="relative block group w-full h-full hover:-translate-y-2 duration-300">
      {/* Hover Fill Layer (rotated) */}
      <div
        className="
      absolute -inset-2 bg-primary rounded-2xl
      opacity-0 group-hover:opacity-100
      transform-gpu group-hover:-rotate-3
      origin-center transition-all scale-95 duration-700
      z-10
    "
      ></div>

      {/* Static Stroke */}
      <div className="absolute inset-0 border-2 border-accent rounded-2xl pointer-events-none z-20"></div>

      {/* Card Content */}
      <div className="relative z-30 p-6 rounded-2xl flex flex-col h-full">
        {/* Icon */}
        <div className="mb-4 text-primary group-hover:text-secondary transition-colors duration-300">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-3xl mb-2 group-hover:text-secondary transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="mb-4 text-muted-foreground group-hover:text-secondary transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
}

// ================================
// Services Section
// ================================
function Services() {
  const services: ServiceItemProps[] = [
    {
      icon: <Globe size={40} />,
      title: "Custom Website Development",
      description:
        "Modern, high-performance custom websites built with Next.js and optimized for SEO, speed, and conversions.",
    },
    {
      icon: <Layers size={40} />,
      title: "WordPress Website",
      description:
        "Responsive, secure, and fully editable WordPress websites tailored for businesses of all sizes.",
    },
    {
      icon: <Smartphone size={40} />,
      title: "App Development (iOS & Android)",
      description:
        "Cross-platform mobile apps with beautiful UI, fast performance, and scalable architecture.",
    },
    {
      icon: <PenTool size={40} />,
      title: "HTML Email Signature",
      description:
        "Clickable, mobile-responsive, and pixel-perfect HTML signatures compatible with Gmail, Outlook, Apple Mail & more.",
      link: "/portfolio",
    },
    {
      icon: <Code size={40} />,
      title: "Email Signature Generator",
      description:
        "Live signature generator with customizable fields, instant preview, and export-ready HTML output.",
    },
    {
      icon: <BarChart2 size={40} />,
      title: "SEO Services",
      description:
        "Improve your website’s search ranking with on-page SEO, technical optimization, and keyword strategy for maximum visibility.",
    },
  ];

  return (
    <section className="pb-20 px-6 lg:px-20 bg-secondary text-accent">
      <div className="max-w-6xl mx-auto">
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
        <h2 className="text-4xl mb-16 text-center">What We Offer</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <ServiceItem key={i} {...service} />
          ))}
        </div>

        {/* Portfolio CTA */}
        <div className="text-center mt-16">
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-between bg-primary text-secondary rounded-full px-4 py-3 w-fit hover:shadow-lg transition group hover:scale-95"
          >
            <span className="text-lg sm:text-xl mr-4 group-hover:translate-x-1 transition font-heading">
              View Our Portfolio
            </span>
            <span className="bg-secondary rounded-full p-1.5 transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="w-4 h-4 text-primary" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

// ================================
// WebPricingSection
// ================================

const webpackages = [
  {
    id: 1,
    name: "Starter",
    price: "Starts at $499",
    description: "Suitable for new businesses just getting started",
    features: [
      "Basic logo",
      "Premium template",
      "Basic SEO",
      "Premium Theme",
      "Content Upload",
      "Stock images",
      "Upto 4 Pages",
      "2 Consultation Calls",
      "1 months free maintenance",
      "Time 2-3 weeks",
    ],
  },
  {
    id: 2,
    name: "Growth",
    price: "Starts at $999",
    description:
      "Full website and business solution for brands who want to grow online",
    features: [
      "Animations",
      "Premium Logo",
      "Brand font and colours",
      "Custom Design",
      "Wireframes Design",
      "Analytics setup",
      "Upto 8 pages",
      "User journey map",
      "4 consultation calls",
      "2 months free maintenance",
      "Adv. SEO",
      "VIP tech training & support",
      "Personalised strategy & advice",
      "Time 4-6 weeks",
    ],
  },
  {
    id: 3,
    name: "E-COMMERCE",
    price: "Starts at $1499",
    description:
      "Perfect for online stores aiming to generate sales and scale online",
    features: [
      "Digital Products (optional)",
      "Premium Logo",
      "Custom Design",
      "Brand font and colours",
      "Conversion copy-writing",
      "Wireframes Design",
      "Analytics setup",
      "Adv. SEO",
      "User journey map",
      "Upto 10 pages",
      "Personalised strategy & advice",
      "VIP tech training & support",
      "3 months free maintenance",
      "Time 6-8 weeks",
    ],
  },
];

function WebPricingSection() {
  return (
    <section className="py-24 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <p className="text-4xl md:text-6xl text-secondary font-heading">
          Choose the Perfect Plan
        </p>
        <p className="mt-4 text-xl text-secondary">
          Scalable pricing for every stage of your business.
        </p>
      </div>
      <hr className="border-t-8 border-primary w-1/4 mx-auto rounded-lg" />

      <div className="text-center mt-20 mb-16">
        <p className="text-4xl md:text-5xl leading-tight font-heading">Website Packages</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {webpackages.map((pkg) => (
          <div
            key={pkg.id}
            className="relative flex flex-col p-8 bg-accent hover:bg-primary border rounded-3xl shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            <div className="mb-8">
              <h3 className="text-3xl text-secondary">{pkg.name}</h3>
              <p className="mt-4 text-gray-600 text-lg">{pkg.description}</p>
              <p className="mt-6 flex items-baseline">
                <span className="text-4xl text-secondary font-heading">
                  {pkg.price}
                </span>
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-between bg-secondary text-primary rounded-full px-4 py-3 w-fit hover:shadow-lg transition group hover:scale-95 mb-8"
            >
              <span className="text-base sm:text-lg mr-4 group-hover:translate-x-1 transition font-heading">
                Get Started
              </span>
              <span className="bg-primary rounded-full p-1.5 transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="w-3 h-3 text-secondary" />
              </span>
            </Link>

            <ul className="flex-1 space-y-4 mb-8">
              {pkg.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <BsPatchCheck className="h-8 w-8 text-secondary shrink-0" />
                  <span className="ml-3 text-secondary text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

// ================================
// MobPricingSection (Updated for Real Mobile Apps)
// ================================

const mobpackages = [
  {
    id: 1,
    name: "Starter App",
    price: "Starts at $899",
    description: "Simple MVP apps with basic functionality and login",
    features: [
      "Basic UI/UX Design",
      "User Authentication",
      "Push Notifications",
      "Basic API Integration",
      "Up to 5 Screens",
      "Profile & Dashboard",
      "Testing & Bug Fixing",
      "1 Month Free Support",
      "Delivery: 2-4 Weeks",
    ],
  },
  {
    id: 2,
    name: "Growth App",
    price: "Starts at $1699",
    description:
      "Interactive apps for businesses with multiple features and user flows",
    features: [
      "Custom UI/UX Design",
      "Advanced API Integration",
      "Live Chat / Messaging",
      "Payment Gateway Integration",
      "Analytics & Reporting",
      "Up to 10 Screens",
      "Admin Panel / Dashboard",
      "2 Months Free Support",
      "Push Notifications & Alerts",
      "Delivery: 4-6 Weeks",
    ],
  },
  {
    id: 3,
    name: "Enterprise App",
    price: "Starts at $2999",
    description:
      "Full-scale apps for startups or enterprises with real-time and multi-user features",
    features: [
      "Fully Custom UI/UX Design",
      "Real-time Database & Sync",
      "Multi-user Roles & Permissions",
      "Advanced Reporting & Analytics",
      "E-commerce / Service Booking",
      "Push Notifications & Alerts",
      "Admin Portal / Super Admin",
      "3 Months Free Support",
      "Integration with Third-party Services",
      "Delivery: 6-10 Weeks",
    ],
  },
];

function MobPricingSection() {
  return (
    <section className="mb-24 px-6 lg:px-20">
      <div className="text-center mb-16">
        <p className="text-4xl md:text-5xl leading-tight font-heading">
          Mobile App Packages
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {mobpackages.map((pkg) => (
          <div
            key={pkg.id}
            className="relative flex flex-col p-8 bg-accent hover:bg-primary border rounded-3xl shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            <div className="mb-8">
              <h3 className="text-3xl text-secondary">{pkg.name}</h3>
              <p className="mt-4 text-gray-600 text-lg">{pkg.description}</p>
              <p className="mt-6 flex items-baseline">
                <span className="text-4xl text-secondary font-heading">
                  {pkg.price}
                </span>
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-between bg-secondary text-primary rounded-full px-4 py-3 w-fit hover:shadow-lg transition group hover:scale-95 mb-8"
            >
              <span className="text-base sm:text-lg mr-4 group-hover:translate-x-1 transition font-heading">
                Get Started
              </span>
              <span className="bg-primary rounded-full p-1.5 transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="w-3 h-3 text-secondary" />
              </span>
            </Link>

            <ul className="flex-1 space-y-4 mb-8">
              {pkg.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <BsPatchCheck className="h-8 w-8 text-secondary shrink-0" />
                  <span className="ml-3 text-secondary text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

// ================================
// SignaturePricingSection
// ================================

const sigpackages = [
  {
    id: 1,
    name: "Static HTML Email Signature",
    price: "Starts at $50",
    description:
      "Professional, clean, and reliable signatures for individuals.",
    features: [
      "100% Responsive HTML code",
      "Clickable Social Media Icons",
      "Clickable Contact Details",
      "Image/Logo Hosting included",
      "Premium Theme",
      "Compatible with Gmail & Outlook etc",
      "Full Installation Guide",
      "Time 1-2 Days",
    ],
  },
  {
    id: 2,
    name: "Animated HTML Email Signature",
    price: "Starts at $100",
    description: "Stand out with subtle motion and eye-catching branding",
    features: [
      "Everything in Static HTML",
      "Custom Animated GIF Logo",
      "Animated CTA Buttons",
      "Animated Social Icons",
      "Dark Mode Optimized",
      "Premium Design Layouts",
      "Full Installation Guide",
      "Time 2-3 Days",
    ],
  },
  {
    id: 3,
    name: "Email Signature Generator",
    price: "Starts at $200",
    description: "Self-service tool for teams and growing companies.",
    features: [
      "Signature Builder Access",
      "Manage Multiple Employees",
      "Live Preview Editor",
      "Brand font and colours",
      "Easy to Update",
      "Full Installation Guide",
      "Time 2-3 Days",
    ],
  },
];

function SignaturePricingSection() {
  return (
    <section className="px-6 lg:px-20">
      <div className="text-center mb-16">
        <p className="text-4xl md:text-5xl leading-tight font-heading">
          Email Signature Packages
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {sigpackages.map((pkg) => (
          <div
            key={pkg.id}
            className="relative flex flex-col p-8 bg-accent hover:bg-primary border rounded-3xl shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            <div className="mb-8">
              <h3 className="text-3xl text-secondary">{pkg.name}</h3>
              <p className="mt-4 text-gray-600 text-lg">{pkg.description}</p>
              <p className="mt-6 flex items-baseline">
                <span className="text-4xl text-secondary font-heading">
                  {pkg.price}
                </span>
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-between bg-secondary text-primary rounded-full px-4 py-3 w-fit hover:shadow-lg transition group hover:scale-95 mb-8"
            >
              <span className="text-base sm:text-lg mr-4 group-hover:translate-x-1 transition font-heading">
                Get Started
              </span>
              <span className="bg-primary rounded-full p-1.5 transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="w-3 h-3 text-secondary" />
              </span>
            </Link>

            <ul className="flex-1 space-y-4 mb-8">
              {pkg.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <BsPatchCheck className="h-8 w-8 text-secondary shrink-0" />
                  <span className="ml-3 text-secondary text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

// ================================
// Next Section Placeholder
// ================================
function NextSection() {
  return (
    <section className="pt-24 px-6 lg:px-20 text-secondary text-center">
      <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
        Ready to Start Your Project?
      </h2>
      <p className="mb-8 text-lg">
        Let&apos;s discuss your requirements and create something amazing
        together.
      </p>
      <Link
        href="/contact"
        className="inline-flex items-center justify-between bg-primary text-secondary rounded-full px-4 py-3 w-fit hover:shadow-lg transition group hover:scale-95"
      >
        <span className="text-lg sm:text-xl mr-4 group-hover:translate-x-1 transition font-heading">
          Contact Us
        </span>
        <span className="bg-secondary rounded-full p-1.5 transition-transform duration-300 group-hover:rotate-45">
          <ArrowUpRight className="w-4 h-4 text-primary" />
        </span>
      </Link>
    </section>
  );
}

// ================================
// Main Page
// ================================
export default function Page() {
  return (
    <MainLayout>
      <SEO
        title="Services | WebSolution Center"
        description="Custom website development, WordPress websites, mobile app development, HTML email signatures, and signature generators — tailored for businesses and brands."
        url="https://websolutioncenter.com/services"
        image="https://websolutioncenter.com/og/og-services.webp"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Web Development, Mobile Apps & Digital Solutions",
          description:
            "Professional web development, mobile app development, custom WordPress websites, HTML email signatures, and signature generators.",
          provider: {
            "@type": "Organization",
            name: "WebSolution Center",
            url: "https://websolutioncenter.com",
            logo: "https://websolutioncenter.com/logo.webp",
            sameAs: [
              "https://facebook.com/aamiryounis105",
              "https://instagram.com/aamiryounis105",
              "https://x.com/aamiryounis105",
              "https://linkedin.com/in/aamiryounis105",
            ],
          },
          serviceType: [
            "Custom Website Development",
            "WordPress Website Development",
            "Mobile App Development",
            "HTML Email Signature Design",
            "Email Signature Generator Development",
            "SEO Optimization",
          ],
          areaServed: {
            "@type": "GeoCircle",
            geoMidpoint: {
              "@type": "GeoCoordinates",
              latitude: "24.8607",
              longitude: "67.0011",
            },
            geoRadius: "50000",
          },
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            price: "Contact for quote",
            priceCurrency: "USD",
            url: "https://websolutioncenter.com/services",
          },
        }}
      />
      <Hero />
      <Services />
      <WebPricingSection />
      <MobPricingSection />
      <SignaturePricingSection />
      <NextSection />
    </MainLayout>
  );
}
