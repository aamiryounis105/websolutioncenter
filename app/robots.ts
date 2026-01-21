import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://websolutioncenter.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Add disallow if needed in future
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
