import Head from "next/head";

export default function SEO({
  title = "WebSolution Center | Websites, Apps & Email Signatures",
  description = "We build modern websites, mobile apps, HTML email signatures, and custom digital solutions for businesses. High-performance, responsive, and branded solutions tailored to your needs.",
  url = "https://websolutioncenter.com",
  image = "https://websolutioncenter.com/og/og-home.webp",
  schema,
  twitterHandle = "@aamiryounis105",
  
}: {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  schema?: any;
  twitterHandle?: string;
}) {
  // Default Organization Schema (used globally)
  const defaultOrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "WebSolution Center",
    url: "https://websolutioncenter.com",
    description: description,
    logo: "https://websolutioncenter.com/logo.png",
    sameAs: [
      "https://facebook.com/aamiryounis105",
      "https://x.com/aamiryounis105",
      "https://instagram.com/aamiryounis105",
      "https://linkedin.com/in/aamiryounis105",
    ],
  };

  return (
    <Head>
      {/* BASIC SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#0066FF" />

      {/* OPEN GRAPH (Facebook, LinkedIn, etc.) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="WebSolution Center" />
      <meta property="og:type" content="website" />

      {/* TWITTER / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />

      {/* PAGE-SPECIFIC JSON-LD SCHEMA */}
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema, null, 2),
          }}
        />
      )}

      {/* GLOBAL ORGANIZATION JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(defaultOrganizationSchema, null, 2),
        }}
      />
    </Head>
  );
}
