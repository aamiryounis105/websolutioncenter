import { FaWhatsapp } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mx-auto bg-primary text-secondary py-10 mt-60">
      <section className="w-3/4 bg-secondary flex flex-column mx-auto rounded-[80px] px-16 py-5 gap-44 mt-[-200]">
        <div className="flex justify-center items-center">
          <div>
            <p className="text-primary text-lg">Contact us</p>
            <h1 className="text-primary text-4xl pt-4">
              Let us create spaces that inspire and elevate your brand!
            </h1>
          </div>
        </div>
        <div>
          <div className="relative w-[250px] h-[250px] mx-auto">
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
                fill="#65e5b5"
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
            <a
              href="/contact"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="flex items-center justify-center w-44 h-44 rounded-full bg-primary text-secondary hover:scale-105 transition-transform duration-300">
                <ArrowUpRight className="w-20 h-20" />
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center">
        <div className="text-[200px] mt-9">
          <h1>SAY HELLO!</h1>
        </div>
        <div>
          <a href="mailto:aamiryounis105@gmail.com" className="hover:underline">
            <h1 className="text-5xl">aamiryounis105@gmail.com</h1>
          </a>
        </div>
        <div className="my-10">
          <a
            href="https://wa.me/923098382976"
            className="flex items-center gap-5 hover:underline"
          >
            <FaWhatsapp className="w-14 h-14" />
            <h1 className="text-5xl">+92 309 8382976</h1>
          </a>
        </div>
        <div className="text-sm mt-9">
          &copy; {new Date().getFullYear()} Web Solution Center. All rights
          reserved.
        </div>
      </section>
    </footer>
  );
}
