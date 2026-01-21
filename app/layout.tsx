import "./globals.css";
import { Anton, Archivo } from "next/font/google";
import SmoothScroll from "./SmoothScroll";
import { MotionWrapper } from "./ClientWrapper"; // client component

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${anton.variable} ${archivo.variable}`}>
      <head>
        <meta name="google-site-verification" content="MMf9LpgjUbuVvKC9ONw82PTjcDDFm5bllSTlmN68pfs" />
      </head>
      <body className="selection:bg-primary selection:text-secondary">
        <SmoothScroll>
          <MotionWrapper
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {children}
          </MotionWrapper>
        </SmoothScroll>
      </body>
    </html>
  );
}
