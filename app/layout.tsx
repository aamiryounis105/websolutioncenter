import "./globals.css";
import { Anton, Archivo } from "next/font/google";
import ClientWrapper from "./ClientWrapper"; // client-safe wrapper
import { ReactNode } from "react";

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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${anton.variable} ${archivo.variable}`}>
      <head>
        {/* Google verification meta */}
        <meta
          name="google-site-verification"
          content="MMf9LpgjUbuVvKC9ONw82PTjcDDFm5bllSTlmN68pfs"
        />
      </head>
      <body className="selection:bg-primary selection:text-secondary">
        {/* Hydration-safe client components */}
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
