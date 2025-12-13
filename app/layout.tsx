// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Raleway, Archivo } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700" , "800", "900"],
  variable: "--font-raleway",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-archivo",
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
    <html lang="en" className={`${raleway.variable} ${archivo.variable}`} suppressHydrationWarning>
      <body className="bg-background text-foreground font-body" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
