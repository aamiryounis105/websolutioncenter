"use client";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-primary text-secondary">
      <h1 className="text-7xl mb-4">404</h1>
      <p className="text-xl mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      {/* Redirect Button */}
      <Link
        href="/"
        className="
                inline-flex items-center justify-between 
                bg-secondary text-primary rounded-full px-4 py-3 w-fit
                hover:shadow-lg transition group hover:scale-95
              "
      >
        <h1 className="text-lg sm:text-xl mr-4 group-hover:translate-x-1 transition">
          Go Back Home
        </h1>
        <span className="bg-primary rounded-full p-1.5 transition-transform duration-300 group-hover:rotate-45">
          <ArrowUpRight className="w-4 h-4 text-secondary" />
        </span>
      </Link>
    </div>
  );
}
