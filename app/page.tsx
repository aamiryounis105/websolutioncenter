"use client";

import { useRef } from "react";
import { useAnimationFrame } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import MainLayout from "@/components/MainLayout";

const teamMembers = [
  {img: "/Portfolio-1.png" },
  {img: "/Portfolio-2.jpg" },
  {img: "/Portfolio-3.jpg" },
  {img: "/Portfolio-4.jpg" },
  {img: "/Portfolio-5.jpg" },
];

const topText = " Custom Websites • WordPress Web Development • SEO Strategy • Web Branding •";
const bottomText = " We design experiences that move businesses to the future ➺";

function Hero() {
  return (
    <section className="relative h-[90vh] md:h-[90vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      <h1 className="text-4xl sm:text-5xl md:text-9xl text-white leading-tight sm:leading-tight md:leading-tight">
        We Build Modern<br></br> Digital Experiences
      </h1>
      <p className="my-8 text-lg sm:text-xl text-white max-w-2xl z-10">
        WebSolution Center specializes in email signatures, websites, SEO, and
        digital branding that move businesses into the future.
      </p>
      <Link
        href="/about"
        className="inline-flex items-center justify-between bg-primary text-secondary rounded-full px-5 py-3 w-fit hover:shadow-lg transition group hover:scale-95"
      >
        <h1 className="text-xl mr-4 group-hover:translate-x-1 transition">
          Get Started
        </h1>
        <span className="bg-secondary rounded-full p-2 transition-transform duration-300 group-hover:rotate-45">
          <ArrowUpRight className="w-5 h-5 text-primary" />
        </span>
      </Link>
    </section>
  );
}

function MainContent() {
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useAnimationFrame(() => {
    const top = topRef.current;
    const bottom = bottomRef.current;
    const track = trackRef.current;

    // Top: LEFT ➡ RIGHT
    if (top) {
      top.scrollLeft += 4;
      if (top.scrollLeft >= top.scrollWidth / 2) top.scrollLeft = 0;
    }

    // Track: RIGHT ➡ LEFT
    if (track) {
      track.scrollLeft -= 2;
      if (track.scrollLeft <= 0) track.scrollLeft = track.scrollWidth / 2;
    }

    // Bottom: LEFT ➡ RIGHT
    if (bottom) {
      bottom.scrollLeft += 4;
      if (bottom.scrollLeft >= bottom.scrollWidth / 2) bottom.scrollLeft = 0;
    }
  });

  return (
    <>
      {/* Marquee Section */}
      <section className="w-full mx-auto bg-secondary flex flex-col items-center justify-center py-8 sm:py-10 md:py-12 lg:py-14">
        <h1
          ref={topRef}
          className="w-full overflow-hidden whitespace-nowrap text-3xl font-semibold text-white mb-5 sm:text-6xl md:text-8xl leading-normal md:leading-normal"
        >
          <div className="inline-block min-w-full">{topText.repeat(20)}</div>
        </h1>

        <div
  ref={trackRef}
  className="w-full overflow-hidden whitespace-nowrap py-6 px-4 sm:px-6"
>
  <div className="inline-flex gap-6 min-w-max">
    {Array(7)
      .fill(teamMembers)
      .flat()
      .map((person, i) => (
        <div
          key={i}
          className="bg-accent rounded-[10px] shadow-md sm:w-[300px] md:w-[350px] lg:w-[400px] shrink-0 hover:shadow-xl transition-transform hover:scale-95"
        >
          <img
            src={person.img}
            alt={person.name}
            className="w-full h-40 sm:h-44 md:h-52 lg:h-60 object-cover rounded-[10px]"
          />
        </div>
      ))}
  </div>
</div>

        <h1
          ref={bottomRef}
          className="w-full overflow-hidden whitespace-nowrap text-3xl font-semibold text-white mt-5 sm:text-6xl md:text-8xl leading-normal md:leading-normal"
        >
          <div className="inline-block min-w-full">{bottomText.repeat(20)}</div>
        </h1>
      </section>

      {/* About Callout */}
      <section className="mx-auto my-20 max-w-[1152px] w-full">
        <div className="bg-accent flex flex-wrap-reverse md:flex-nowrap justify-between items-center gap-10 p-8 sm:p-12 md:p-20 rounded-[50px] md:rounded-[100px] mx-5 md:mx-auto shadow-lg">
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
            <p className="text-secondary text-base sm:text-lg text-center md:text-left">
              Hey, nice to meet you! 👋
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl pt-4 text-secondary md:leading-tight text-center md:text-left">
              I am Aamir, a Web Designer based in Multan, Pakistan, working
              globally!
            </h1>
            <p className="text-secondary py-5 text-sm sm:text-base text-center md:text-left">
              I&apos;m here to help entrepreneurs like you boost sales and attract
              more clients through your website. You can focus on growing your
              business while leaving the technical side to an expert like me.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center justify-between bg-primary text-secondary rounded-full px-5 py-3 w-fit hover:shadow-lg transition group hover:scale-95 mx-auto sm:mx-0 mt-3"
            >
              <h1 className="text-lg sm:text-xl mr-4 group-hover:translate-x-1 transition">
                About me
              </h1>
              <span className="bg-secondary rounded-full p-2 transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="w-5 h-5 text-primary" />
              </span>
            </Link>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/Aamir.png"
              alt="Aamir Raza"
              title="Aamir Raza"
              className="max-w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default function Page() {
  return (
    <MainLayout
      hero={<Hero />}
      bgClass="bg-[url('/hero_background.jpg')] bg-cover bg-center"
    >
      <MainContent />
    </MainLayout>
  );
}
