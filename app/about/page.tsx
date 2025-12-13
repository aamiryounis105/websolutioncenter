"use client";

import MainLayout from "@/components/MainLayout";
import { motion } from "framer-motion";
import Image from "next/image";

// ✅ About Section Component
function Hero() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-4 md:px-20 py-20">
      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-center mb-12 text-primary"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        About Me
      </motion.h1>

      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Profile Image */}
        <motion.div
          className="relative w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-secondary shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image
            src="/profile.jpg"
            alt="Profile Picture"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Bio */}
        <motion.div
          className="max-w-2xl text-center md:text-left"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            Hi, I’m <span className="text-secondary font-semibold">Aamir R.</span> —
            an Email Signature Designer with over 4 years of experience, having
            completed more than 300 projects. I specialize in HTML-based,
            clickable, mobile-responsive signatures that work seamlessly across
            Outlook, Gmail, and Apple Mail.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            I also offer website services, app development, SEO, video editing,
            and AI content creation. My work blends technical precision with
            creative design to help brands communicate effectively.
          </p>
        </motion.div>
      </div>

      {/* Skills Section */}
      <motion.div
        className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        {[
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Next.js",
          "Node.js",
          "SEO",
          "Figma",
        ].map((skill) => (
          <motion.div
            key={skill}
            className="bg-gray-800 p-4 rounded-lg text-center shadow-lg hover:scale-105 transition-transform duration-300 text-primary"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}

// ✅ Final Page
export default function Page() {
  return (
    <MainLayout
      hero={<Hero />}
      bgClass="bg-gradient-to-b from-gray-900 to-black"
    >
    </MainLayout>
  );
}
