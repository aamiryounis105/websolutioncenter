"use client";

import MainLayout from "@/components/MainLayout";
import { useState } from "react";

function Hero() {
  return (
    <section className="relative h-[40vh] md:h-[60vh] lg:h-[70vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      <h1 className="text-8xl md:text-9xl lg:text-[200px] font-bold text-accent tracking-wider pt-24">
        CONTACT
      </h1>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
        form.reset(); // ✅ Clear the form
      } else {
        setStatus("Failed to send message. Try again.");
      }
    } catch (err) {
      setStatus("An error occurred. Try again.");
    }

    // Automatically hide status after 5 seconds
    setTimeout(() => setStatus(""), 5000);
  };

  return (
    <section className="flex flex-wrap lg:flex-nowrap mx-auto bg-secondary px-6 lg:px-20 py-20 gap-10">
      <div>
        <div className="border-primary border-2 rounded-full w-fit px-4 py-0 mb-6 text-accent flex items-center gap-2 text-sm sm:text-sm uppercase">
          <span className="text-4xl text-primary">•</span>
          <em>Book a call</em>
        </div>
        <h1 className="text-6xl text-accent font-[500]">
          I'd love to hear from you!
        </h1>
      </div>

      <div>
        <h2 className="text-3xl font-heading text-primary mb-4">
          Contact Us
        </h2>

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
            type="number"
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

          {status && (
            <p className="mt-2 text-white font-medium">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <MainLayout hero={<Hero />} bgClass="bg-secondary">
      <Contact />
    </MainLayout>
  );
}
