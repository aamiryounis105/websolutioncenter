// components/MainLayout.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MainLayout({
  hero,
  children,
  bgClass,
}: {
  hero: React.ReactNode;
  children: React.ReactNode;
  bgClass: string;
}) {
  return (
    <div>
      {/* Shared background with overlay for Navbar + Hero */}
      <div className={`relative ${bgClass} py-4`}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0" />

        {/* Content above overlay */}
        <div className="relative z-10">
          <Navbar />
          {hero}
        </div>
      </div>

      {/* Light background for main content */}
      <main className="min-h-[85vh]">{children}</main>

      <Footer />
    </div>
  );
}
