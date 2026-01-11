// components/MainLayout.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="relative z-50">
        <Navbar />
      </header>

      <main className="flex-1 bg-background">
        {children}
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
