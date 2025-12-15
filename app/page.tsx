"use client";

import { useRef } from "react";
import { useAnimationFrame } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import MainLayout from "@/components/MainLayout";

const teamMembers = [
  { img: "/portfolio1.jpg" },
  { img: "/portfolio2.jpg" },
  { img: "/portfolio3.jpg" },
  { img: "/portfolio4.jpg" },
  { img: "/portfolio5.jpg" },
];

const topText = " Custom Websites • WordPress Web Development • SEO Strategy • Web Branding •";
const bottomText = " We design experiences that move businesses to the future ➺";

function Hero() {
  return (
    <section className="relative h-full md:h-full flex flex-col px-4 mt-10 lg:mt-28 -mb-4 md:mb-48 lg:mb-14 text-center">
      <div className="border-primary border-2 rounded-full w-fit px-4 py-0 mb-10 mt-20 mx-auto text-accent flex items-center gap-2 text-sm sm:text-sm uppercase">
        <span className="text-4xl text-primary">•</span><em>Available for Work</em>
      </div>
      <h1 className="text-[100px] md:text-[180px] lg:text-[250px] text-white font-semibold leading-none tracking-wider">
        AAMIR <br></br>RAZA
      </h1>
      <img src="/Web-Designer.png" alt="" className="w-[350px] md:w-[450px] lg:w-[550px] mx-auto md:-mb-52 lg:-mb-80 -mt-40 md:-mt-72 lg:-mt-96" />
      <p className="mt-24 mb-5 text-base text-white max-w-[300px] z-10 text-left hidden lg:block">
        I blend artistry with cutting-edge technology to deliver websites that not only look stunning but also drive results.
      </p>
      <Link
        href="/about"
        className="hidden lg:inline-flex items-center justify-between bg-primary text-secondary rounded-full px-5 py-3 w-fit hover:shadow-lg transition group hover:scale-95"
      >
        <h1 className="text-xl font-bold mr-4 group-hover:translate-x-1 transition">
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
      <section className="w-full mx-auto bg-primary flex flex-col items-center justify-center py-8 md:py-12 lg:py-14">
        <h1
          ref={topRef}
          className="w-full overflow-hidden whitespace-nowrap font-[800] text-secondary mb-6 text-7xl md:text-8xl lg:text-9xl leading-normal md:leading-normal lg:leading-normal"
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
            className="w-full h-40 sm:h-44 md:h-52 lg:h-60 object-cover rounded-[10px]"
          />
        </div>
      ))}
  </div>
</div>

        <h1
          ref={bottomRef}
          className="w-full overflow-hidden whitespace-nowrap font-[800] text-secondary mt-6 text-7xl md:text-8xl lg:text-9xl leading-normal md:leading-normal lg:leading-normal"
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
            <h1 className="text-2xl sm:text-3xl md:text-4xl pt-4 text-secondary md:leading-tight text-center md:text-left font-bold">
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
              <h1 className="text-lg sm:text-xl mr-4 group-hover:translate-x-1 transition font-bold">
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
      bgClass="bg-secondary"
    >
      <MainContent />
    </MainLayout>
  );
}
