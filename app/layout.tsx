import "./globals.css";
import type { Metadata } from "next";
import { Anton, Archivo } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"], 
  variable: "--font-anton",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Web Solution Center",
  description: "Modern website with Next.js and Tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${archivo.variable}`}
      suppressHydrationWarning
    >
      <body 
        className="selection:bg-primary selection:text-secondary" 
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}