/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://ch.sa',
  generateRobotsTxt: false, // تم إعداد public/robots.txt يدوياً ومطابق للمواصفات
  generateIndexSitemap: true,
  sitemapSize: 7000,
  alternateRefs: [
    {
      href: 'https://ch.sa/ar',
      hreflang: 'ar',
    },
    {
      href: 'https://ch.sa',
      hreflang: 'en',
    },
    {
      href: 'https://ch.sa',
      hreflang: 'x-default',
    },
  ],
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: path === '/' || path === '/ar' ? 1.0 : config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};
