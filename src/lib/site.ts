// Single source of truth for the details that appear in metadata, structured
// data, the sitemap and robots.txt, so they cannot drift apart.
export const siteConfig = {
  name: "Gurleen Singh",
  role: "Front End Developer",
  description:
    "Front End Developer with 5+ years building high-performance React, Next.js and React Native applications. Explore my projects, skills and experience.",
  // Overridable per environment; falls back to the production deployment.
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://portfolio-gurleen.vercel.app",
  email: "grlnsngh@gmail.com",
  github: "https://github.com/grlnsngh",
  linkedin: "https://www.linkedin.com/in/grlnsngh/",
} as const;
