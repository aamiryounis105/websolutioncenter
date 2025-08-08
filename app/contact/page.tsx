import MainLayout from "@/components/MainLayout";

function Hero() {
  return (
    <section className="relative h-[90vh] md:h-[70vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold text-primary leading-tight z-10">
        We Build <span className="text-secondary">Modern</span> Digital
        Experiences
      </h1>
      <p className="mt-8 text-lg sm:text-xl text-primary max-w-2xl z-10 mb-5">
        WebSolution Center specializes in email signatures, websites, SEO, and
        digital branding that move businesses into the future.
      </p>
    </section>
  );
}

function Contact() {
  return (
    <section className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-heading text-primary mb-4">Contact Us</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border border-secondary bg-background text-foreground rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border border-secondary bg-background text-foreground rounded"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 border border-secondary bg-background text-foreground rounded h-32"
        ></textarea>
        <button
          type="submit"
          className="bg-accent text-background px-6 py-3 rounded hover:bg-secondary"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default function Page() {
  return (
    <MainLayout
      hero={<Hero />}
      bgClass="bg-[url('/Aamir.png')] bg-cover bg-center"
    >
      <Contact />
    </MainLayout>
  );
}
