"use client";

import MainLayout from "@/components/MainLayout";
import { useState, type FormEvent } from "react";
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { SiFiverr, SiUpwork } from "react-icons/si";

function Hero() {
  return (
    <section className="bg-secondary text-white py-24 px-6 lg:px-20">
      <h1 className="text-6xl md:text-8xl lg:text-9xl text-accent text-center mt-24 mb-5">
        CONTACT
      </h1>
      <p className="text-base md:text-lg text-accent text-center w-3/4 mx-auto">
        Let&apos;s discuss your project and see how I can help.
      </p>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      budget: (form.elements.namedItem("budget") as HTMLInputElement).value,
      project: (form.elements.namedItem("project") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("https://formspree.io/f/mblnwabv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("Form submitted successfully!");
        form.reset();
      } else {
        setStatus("Failed to send message. Try again.");
      }
    } catch {
      setStatus("An error occurred. Try again.");
    }

    setTimeout(() => setStatus(""), 5000);
  };

  return (
    <section className="flex flex-wrap md:flex-nowrap mx-auto bg-secondary px-6 lg:px-20 gap-10 pb-20">
      <div>
        <div className="border-primary border-2 rounded-full w-fit px-4 py-0 mb-6 text-accent flex items-center gap-2 text-sm uppercase">
          <span className="text-4xl text-primary">•</span>
          <em>Book a call</em>
        </div>

        <h1 className="text-4xl md:text-6xl text-accent font-[500] mb-10">
          I&apos;d love to hear from you!
        </h1>

        {/* WhatsApp */}
        <div className="flex items-center gap-2 border-2 border-primary w-fit px-4 py-2 rounded-full hover:bg-primary text-accent hover:text-secondary transition">
          <FaWhatsapp className="w-6 h-6" />
          <a
            href="https://wa.me/+923098382976"
            target="_blank"
            className="font-semibold text-lg"
          >
            +92 309 8382976
          </a>
        </div>

        {/* Email */}
        <div className="flex items-center gap-3 border-2 border-primary w-fit px-4 py-2 rounded-full hover:bg-primary text-accent hover:text-secondary transition mt-4">
          <FaEnvelope className="w-5 h-5" />
          <a
            href="mailto:aamiryounis105@gmail.com"
            target="_blank"
            className="font-semibold text-lg"
          >
            aamiryounis105@gmail.com
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex items-center gap-3 mt-7 text-accent">
          {/* Facebook */}
          <a
            href="https://facebook.com/aamiryounis105"
            target="_blank"
            className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-primary hover:bg-primary hover:text-secondary transition"
          >
            <FaFacebookF />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/aamiryounis105"
            target="_blank"
            className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-primary hover:bg-primary hover:text-secondary transition"
          >
            <FaInstagram />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/aamiryounis105"
            target="_blank"
            className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-primary hover:bg-primary hover:text-secondary transition"
          >
            <FaLinkedinIn />
          </a>

          {/* X (Twitter) */}
          <a
            href="https://x.com/aamiryounis105"
            target="_blank"
            className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-primary hover:bg-primary hover:text-secondary transition"
          >
            <FaTwitter />
          </a>

          {/* Fiverr */}
          <a
            href="https://fiverr.com/younis105"
            target="_blank"
            className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-primary hover:bg-primary hover:text-secondary transition"
          >
            <SiFiverr />
          </a>

          {/* Upwork */}
          <a
            href="https://upwork.com/freelancers/aamiryounis105"
            target="_blank"
            className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-primary hover:bg-primary hover:text-secondary transition"
          >
            <SiUpwork />
          </a>
        </div>
      </div>
      <div className="pt-10 md:pt-0">
        <h2 className="text-3xl font-heading text-primary mb-4">Contact Us</h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 bg-background text-foreground rounded outline-none focus:outline-2 focus:outline-primary"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 border border-secondary bg-background text-foreground rounded outline-none focus:outline-2 focus:outline-primary"
            required
          />

          <input
            type="text"
            name="budget"
            placeholder="Your Budget"
            className="w-full p-3 border border-secondary bg-background text-foreground rounded outline-none focus:outline-2 focus:outline-primary"
          />

          <textarea
            name="project"
            placeholder="Project Details"
            className="w-full p-3 border border-secondary bg-background text-foreground rounded h-32 outline-none focus:outline-2 focus:outline-primary"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-primary text-secondary px-6 py-3 rounded hover:bg-accent"
          >
            Send Message
          </button>

          {status && <p className="mt-2 text-white font-medium">{status}</p>}
        </form>
      </div>
    </section>
  );
}
/* ======================= FAQ SECTION WITH ACCORDION ======================= */
function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-background border-2 border-primary rounded-xl p-6 shadow-lg">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left"
      >
        <h3 className="text-xl font-normal text-secondary">{question}</h3>

        <span className="text-primary text-2xl font-bold">
          {open ? "−" : "+"}
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-40 mt-3" : "max-h-0"
        }`}
      >
        <p className="text-foreground text-sm md:text-base">{answer}</p>
      </div>
    </div>
  );
}

export function FAQSection() {
  return (
    <section className="mx-auto pt-20 px-6 lg:px-20">
      <p className="text-xl md:text-xl text-secondary text-center mb-5">Your Questions</p>
      <h2 className="text-4xl md:text-5xl text-primary text-center mb-16">
        Frequently Asked Questions
      </h2>

      {/* Two Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-8">
          <FAQItem
            question="How quickly will you respond to my message?"
            answer="I usually reply within a few hours, and always within 24 hours on business days."
          />
          <FAQItem
            question="Do you offer urgent project delivery?"
            answer="Yes, rush delivery is available depending on availability and project scope."
          />
          <FAQItem
            question="What information should I include in my message?"
            answer="A short description of your project, budget, and timeline helps me respond efficiently."
          />
        </div>

        <div className="space-y-8">
          <FAQItem
            question="Do you provide consultations or calls?"
            answer="Yes, you can book a discovery call to discuss your project in detail."
          />
          <FAQItem
            question="What services do you offer?"
            answer="Web design, WordPress development, SEO setup, branding, and email signature design."
          />
          <FAQItem
            question="Can we work together remotely?"
            answer="Absolutely! I work with clients from all over the world — communication is seamless."
          />
        </div>
      </div>
    </section>
  );
}
export default function Page() {
  return (
    <MainLayout>
      <Hero />
      <Contact />
      <FAQSection />
    </MainLayout>
  );
}
