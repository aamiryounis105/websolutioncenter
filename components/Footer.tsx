import { ArrowUpRight } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { SiFiverr, SiUpwork } from "react-icons/si";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full mx-auto bg-secondary py-10 mt-72 md:mt-60">
      <section className="w-[85%] md:w-3/4 bg-primary flex flex-col md:flex-row justify-between items-center mx-auto rounded-3xl px-10 lg:px-20 py-10 gap-6 -mt-64 md:-mt-52">
        <div className="flex justify-center items-center text-center sm:text-start">
          <div>
            <p className="text-secondary text-lg">Contact us</p>
            <h1 className="text-secondary text-2xl pt-4 md:text-4xl leading-tight md:leading-tight">
              Let us create spaces that inspire and elevate your brand!
            </h1>
          </div>
        </div>
        <div>
          <div className="relative w-[250px] h-[250px] mx-auto scale-75 md:scale-100">
            <svg
              viewBox="0 0 250 250"
              className="w-full h-full animate-spin-slow"
            >
              <defs>
                <path
                  id="circlePath"
                  d="
          M 125, 125
          m -100, 0
          a 100,100 0 1,1 200,0
          a 100,100 0 1,1 -200,0
        "
                />
              </defs>

              <text
                fill="#000"
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

            {/* Center Icon */}
            <Link
              href="/contact"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="flex items-center justify-center w-44 h-44 rounded-full bg-secondary text-primary hover:scale-105 transition-transform duration-300 hover:rotate-45">
                <ArrowUpRight className="w-20 h-20" />
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center">
        <div className="text-7xl md:text-9xl lg:text-[200px] mt-9 text-center">
          <h1 className="font-bold my-9 text-accent leading-none md:leading-tight lg:leading-tight tracking-wide">
            SAY HELLO!
          </h1>
        </div>
        <div>
          <a
            href="mailto:aamiryounis105@gmail.com"
            className="hover:underline text-primary"
          >
            <h1 className="text-2xl md:text-5xl lg:text-7xl text-primary leading-none md:leading-none lg:leading-tight">
              aamiryounis105@gmail.com
            </h1>
          </a>
        </div>
        <div className="my-4 md:my-6">
          <a
            href="https://wa.me/923098382976"
            className="flex items-center gap-2 md:gap-5 hover:underline text-primary"
          >
            <FaWhatsapp className="w-8 h-8 md:w-14 md:h-14 text-primary" />
            <h1 className="text-2xl md:text-5xl lg:text-7xl text-primary leading-none md:leading-none lg:leading-none">
              +92 309 8382976
            </h1>
          </a>
        </div>
        <div className="flex items-center gap-3 mt-5 text-accent">
          {/* Facebook */}
          <a
            href="https://facebook.com/aamiryounis105"
            target="_blank"
            className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full border-2 border-primary hover:bg-primary hover:text-secondary transition"
          >
            <FaFacebookF />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/aamiryounis105"
            target="_blank"
            className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full border-2 border-primary hover:bg-primary hover:text-secondary transition"
          >
            <FaInstagram />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/aamiryounis105"
            target="_blank"
            className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full border-2 border-primary hover:bg-primary hover:text-secondary transition"
          >
            <FaLinkedinIn />
          </a>

          {/* X (Twitter) */}
          <a
            href="https://x.com/aamiryounis105"
            target="_blank"
            className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full border-2 border-primary hover:bg-primary hover:text-secondary transition"
          >
            <FaTwitter />
          </a>

          {/* Fiverr */}
          <a
            href="https://fiverr.com/younis105"
            target="_blank"
            className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full border-2 border-primary hover:bg-primary hover:text-secondary transition"
          >
            <SiFiverr />
          </a>

          {/* Upwork */}
          <a
            href="https://upwork.com/freelancers/aamiryounis105"
            target="_blank"
            className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full border-2 border-primary hover:bg-primary hover:text-secondary transition"
          >
            <SiUpwork />
          </a>
        </div>
        <div className="text-sm mt-9 text-accent">
          &copy; {new Date().getFullYear()} Web Solution Center. All rights
          reserved.
        </div>
      </section>
    </footer>
  );
}
