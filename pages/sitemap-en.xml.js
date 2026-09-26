import blogs from "../api/blogs";
import Services from "../api/service";
import Projects from "../api/project";
import Teams from "../api/team";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ch.sa";

function generateEnglishSiteMap() {
  const currentDate = new Date().toISOString().split("T")[0];

  const staticPages = [
    { path: "", priority: "1.0", changefreq: "daily" },
    { path: "/about", priority: "0.8", changefreq: "monthly" },
    { path: "/service", priority: "0.9", changefreq: "weekly" },
    { path: "/portfolio", priority: "0.8", changefreq: "weekly" },
    { path: "/pricing", priority: "0.9", changefreq: "weekly" },
    { path: "/blog", priority: "0.8", changefreq: "daily" },
    { path: "/contact", priority: "0.7", changefreq: "monthly" },
    { path: "/team", priority: "0.6", changefreq: "monthly" },
  ];

  const dynamicPages = [
    ...blogs.map((b) => ({
      path: `/blog-single/${encodeURIComponent(b.slug)}`,
      priority: "0.7",
      changefreq: "monthly",
    })),
    ...Services.map((s) => ({
      path: `/service-single/${encodeURIComponent(s.slug)}`,
      priority: "0.8",
      changefreq: "weekly",
    })),
    ...Projects.filter(
      (p) => p.slug && !p.slug.startsWith("http") && !p.slug.startsWith("#")
    ).map((p) => ({
      path: `/portfolio_details/${encodeURIComponent(p.slug)}`,
      priority: "0.7",
      changefreq: "monthly",
    })),
    ...Teams.map((t) => ({
      path: `/team-single/${encodeURIComponent(t.slug)}`,
      priority: "0.5",
      changefreq: "monthly",
    })),
  ];

  const uniqueMap = new Map();
  [...staticPages, ...dynamicPages].forEach((item) => {
    if (!uniqueMap.has(item.path)) {
      uniqueMap.set(item.path, item);
    }
  });
  const allPages = Array.from(uniqueMap.values());

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${allPages
  .map(({ path, priority, changefreq }) => {
    const enUrl = `${SITE_URL}${path}`;
    const arUrl = `${SITE_URL}/ar${path}`;
    return `  <url>
    <loc>${enUrl}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}"/>
    <xhtml:link rel="alternate" hreflang="ar" href="${arUrl}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${enUrl}"/>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>`;
}

export async function getServerSideProps({ res }) {
  const sitemap = generateEnglishSiteMap();

  res.setHeader("Content-Type", "text/xml; charset=utf-8");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate=43200"
  );
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function SiteMapEnglish() {
  return null;
}
