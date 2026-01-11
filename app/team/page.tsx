"use client";

import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { useState } from "react";
import MainLayout from "@/components/MainLayout";
import Image from "next/image";

// TEAM DATA
const teamMembers = [
  {
    id: 1,
    name: "Aamir Raza",
    role: [
    "Web Developer & Email Signature Specialist",
    "(Founder - WebSolution Center)"
    ],
    img: "/team/aamir-raza.png",
    description:
      "Aamir specializes in building custom-coded websites and modern WordPress solutions tailored for performance and branding. With deep expertise in React, Next.js, Tailwind CSS, and HTML email signature development, he delivers responsive, cross-client-compatible designs. He also creates advanced email signature generators that allow users to update and test signatures live. Aamir leads the team, manages client communication, and ensures every project meets top technical and visual standards.",
    whatsapp: "+923098382976",
    email: "aamiryounis105@gmail.com",
    level: "expert",
  },
  {
    id: 2,
    name: "Hamza Arian",
    role: "Expert Email Signature Designer",
    img: "/team/hamza.png",
    description:
      "Hamza specializes in designing clean, responsive HTML email signatures tailored for all major email clients, ensuring perfect rendering across Outlook, Gmail, and Apple Mail. He also assists in building email signature generators, helping automate live updates and custom signature creation. Hamza supports Aamir in execution, testing, and polishing every signature to maintain high-quality standards in all client projects.",
    whatsapp: "+923180162584",
    email: "hamzaarain21417@gmail.com",
    level: "expert",
  },
  {
    id: 3,
    name: "Muzammil Hussain",
    role: "Full Stack App Developer",
    img: "/team/muzammilhussain.png",
    description:
      "Muzammil develops high-performance mobile applications for both iOS and Android using Flutter, ensuring fast, scalable, and visually polished user experiences. He also works as a full-stack developer, handling backend integrations, APIs, and database structures with strong reliability. Muzammil collaborates closely with Aamir to build modern app solutions that align with client needs and deliver smooth functionality across all devices.",
    whatsapp: "+923061636105",
    email: "muzammalh1636@gmail.com",
    level: "expert",
  },
  {
    id: 4,
    name: "Hamzah Naeem",
    role: "Motivational Mentor & Freelance Guide",
    img: "/team/hamza-n.png",
    description:
      "Hamza serves as a motivational mentor, guiding our young learners and newcomers toward a positive and productive mindset. He helps them understand the value of freelancing, discipline, and continuous learning. By sharing real-world insights and encouragement, he builds their confidence and inspires them to pursue digital skills with purpose.",
    whatsapp: "+923467811143",
    email: "hamzanaeem4230@gmail.com",
    level: "junior",
  },
  {
    id: 5,
    name: "Mudassar Hussain",
    role: [
    "Junior App Development Assistant",
    "(Learning Full-Stack & Flutter)"
    ],
    img: "/team/mudassarh.png",
    description:
      "Muddassar is currently learning full-stack and mobile app development under the guidance of Muzammil. He assists in basic tasks such as testing features, organizing app assets, and helping during project builds. His enthusiasm for coding and willingness to learn make him a valuable support member in app-related projects.",
    whatsapp: "+923254797614",
    email: "aamiryounis105@gmail.com",
    level: "child",
  },
  {
    id: 6,
    name: "Arman Ali",
    role: [
      "Junior Web & Signature Assistant",
      "(Learning Web Development)"
    ],
    img: "/team/Arman-Ali.png",
    description:
      "Ali is learning modern web development and HTML email signature design, gradually building strong foundational skills. He assists with simple tasks such as content updates, organizing project assets, and performing basic testing across devices. His curiosity and growing confidence make him a supportive part of the workflow during website and signature projects.",
    email: "mohsinzia8839@gmail.com",
    level: "child",
  },
];

// =================================================
// TEAM MODAL COMPONENT
// =================================================

function TeamModal({
  member,
  onClose,
}: {
  member: any | null;
  onClose: () => void;
}) {
  if (!member) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
      <div className="bg-accent rounded-2xl max-w-lg w-full p-6 relative shadow-xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-secondary text-2xl font-bold"
        >
          ✕
        </button>

        {/* Image */}
        <Image
          src={member.img}
          alt={member.name}
          width={600}
          height={400}
          className="w-32 object-cover rounded-3xl mb-6 pt-2 bg-primary"
        />

        {/* Name */}
        <h2 className="text-3xl text-secondary mb-1">{member.name}</h2>

        <p className="text-secondary font-semibold mb-4 leading-snug">
          {Array.isArray(member.role)
            ? (member.role as string[]).map((line: string, index: number) => (
              <span key={index}>
                {line}
                {index < (member.role as string[]).length - 1 && <br />}
              </span>
            ))
          : member.role}
        </p>

        {/* Description */}
        <p className="text-secondary leading-tight mb-6">
          {member.description}
        </p>

        {/* Contact Section */}
        <div className="flex items-center gap-2 flex-wrap">

          {/* WhatsApp */}
          {member.whatsapp && (
            <div className="flex items-center gap-2 bg-secondary w-fit px-4 py-2 rounded-full hover:scale-105 transition hover:bg-primary text-primary hover:text-secondary">
              <FaWhatsapp className="w-6 h-6" />
              <a
                href={`https://wa.me/${member.whatsapp}`}
                target="_blank"
                className="font-semibold"
              >
                WhatsApp
              </a>
            </div>
          )}

          {/* Email */}
          {member.email && (
            <div className="flex items-center gap-2 bg-secondary w-fit px-4 py-2 rounded-full hover:scale-105 transition hover:bg-primary text-primary hover:text-secondary">
              <FaEnvelope className="w-5 h-5" />
              <a
                href={`mailto:${member.email}`}
                className="font-semibold"
              >
                Email
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
// =================================================
// TEAM PAGE SECTION
// =================================================

function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<any>(null);

  return (
    <section className="bg-secondary text-white py-24 px-6 lg:px-20">
      <h1 className="text-5xl md:text-8xl lg:text-9xl text-accent text-center my-24">
        MEET OUR TEAM
      </h1>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-primary rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition cursor-pointer"
            onClick={() => setSelectedMember(member)}
          >
            <Image
              src={member.img}
              alt={member.name}
              width={400}
              height={300}
              className="w-full h-80 object-contain pt-4"
            />

            <div className="py-3 px-5 bg-accent h-40 flex flex-col justify-center">
              <h3 className="text-3xl text-secondary">{member.name}</h3>

              {/* Multi-line Role Support */}
              <div className="text-secondary text-sm leading-tight mt-1">
                {Array.isArray(member.role) ? (
                  member.role.map((line: string, i: number) => (
                    <p key={i} className="m-0">
                      {line}
                    </p>
                  ))
                ) : (
                  <p className="m-0">{member.role}</p>
                )}
              </div>
              {/* Level Badges */}
              <div className="mt-2">
                {member.level === "expert" && (
                  <span className="px-3 py-1 bg-secondary text-primary rounded-full text-xs">
                    Expert
                  </span>
                )}

                {member.level === "junior" && (
                  <span className="px-3 py-1 bg-secondary text-primary rounded-full text-xs">
                    Mentor
                  </span>
                )}

                {member.level === "child" && (
                  <span className="px-3 py-1 bg-secondary text-primary rounded-full text-xs">
                    Creative Kids
                  </span>
                )}
              </div>
              <div className="text-right">
                  <span className="text-secondary text-sm">➥ Click to view more details</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedMember && (
        <TeamModal member={selectedMember} onClose={() => setSelectedMember(null)} />
      )}
    </section>
  );
}
// =================================================
// WHY CHOOSE US SECTION
// =================================================

function WhyChooseUsSection() {
  return (
    <section className="text-secondary pt-24 pb-14 px-6 lg:px-20">
      <h1 className="text-4xl md:text-6xl text-secondary text-center mb-16">
        Why Work With Us
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Item 1 */}
        <div className="flex flex-col items-center bg-accent text-center p-6 border rounded-3xl shadow hover:scale-105 transition">
          <span className="text-5xl mb-4">💡</span>
          <h3 className="text-2xl mb-2">Expertise</h3>
          <p>
            Our team specializes in custom web development, WordPress solutions, and advanced email signatures, ensuring high-quality and professional output.
          </p>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-center bg-accent text-center p-6 border rounded-2xl shadow hover:scale-105 transition">
          <span className="text-5xl mb-4">🚀</span>
          <h3 className="text-2xl mb-2">Innovation</h3>
          <p>
            We leverage modern technologies like React, Next.js, Tailwind, and interactive signature generators to create solutions that stand out.
          </p>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col items-center bg-accent text-center p-6 border rounded-2xl shadow hover:scale-105 transition">
          <span className="text-5xl mb-4">🤝</span>
          <h3 className="text-2xl mb-2">Collaboration</h3>
          <p>
            We work closely with clients, guide newcomers, and ensure smooth project delivery with a balance of expertise and mentorship.
          </p>
        </div>
      </div>
    </section>
  );
}
// =================================================
// FINAL PAGE EXPORT
// =================================================

export default function Page() {
  return (
    <MainLayout>
      <TeamSection />
      <WhyChooseUsSection />
    </MainLayout>
  );
}
