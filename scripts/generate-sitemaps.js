const fs = require('fs');
const path = require('path');

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ch.sa';
const currentDate = new Date().toISOString().split('T')[0];

function extractSlugs(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const matches = [...content.matchAll(/slug\s*:\s*['"]([^'"]+)['"]/g)];
    const slugs = matches.map(m => m[1].trim());
    return [...new Set(slugs)];
  } catch (e) {
    console.error(`Error reading ${filePath}:`, e.message);
    return [];
  }
}

// 1. المسارات الثابتة
const staticPages = [
  { path: '', priority: '1.0', changefreq: 'daily' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/service', priority: '0.9', changefreq: 'weekly' },
  { path: '/portfolio', priority: '0.8', changefreq: 'weekly' },
  { path: '/pricing', priority: '0.9', changefreq: 'weekly' },
  { path: '/blog', priority: '0.8', changefreq: 'daily' },
  { path: '/contact', priority: '0.7', changefreq: 'monthly' },
  { path: '/team', priority: '0.6', changefreq: 'monthly' },
];

// 2. استخراج المسارات الديناميكية من ملفات api
const blogSlugs = extractSlugs(path.join(__dirname, '../api/blogs.js'));
const serviceSlugs = extractSlugs(path.join(__dirname, '../api/service.js'));
const projectSlugs = extractSlugs(path.join(__dirname, '../api/project.js'))
  .filter(slug => !slug.startsWith('http') && !slug.startsWith('#'));
const teamSlugs = extractSlugs(path.join(__dirname, '../api/team.js'));

const dynamicPages = [
  ...blogSlugs.map(slug => ({
    path: `/blog-single/${encodeURIComponent(slug)}`,
    priority: '0.7',
    changefreq: 'monthly',
  })),
  ...serviceSlugs.map(slug => ({
    path: `/service-single/${encodeURIComponent(slug)}`,
    priority: '0.8',
    changefreq: 'weekly',
  })),
  ...projectSlugs.map(slug => ({
    path: `/portfolio_details/${encodeURIComponent(slug)}`,
    priority: '0.7',
    changefreq: 'monthly',
  })),
  ...teamSlugs.map(slug => ({
    path: `/team-single/${encodeURIComponent(slug)}`,
    priority: '0.5',
    changefreq: 'monthly',
  })),
];

const uniqueMap = new Map();
[...staticPages, ...dynamicPages].forEach(item => {
  if (!uniqueMap.has(item.path)) {
    uniqueMap.set(item.path, item);
  }
});
const allPages = Array.from(uniqueMap.values());

// 3. بناء خريطة الموقع العربية sitemap-ar.xml
const arabicXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${allPages.map(({ path, priority, changefreq }) => {
  const enUrl = `${SITE_URL}${path}`;
  const arUrl = `${SITE_URL}/ar${path}`;
  return `  <url>
    <loc>${arUrl}</loc>
    <xhtml:link rel="alternate" hreflang="ar" href="${arUrl}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${enUrl}"/>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}).join('\n')}
</urlset>`;

// 4. بناء خريطة الموقع الإنجليزية sitemap-en.xml
const englishXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${allPages.map(({ path, priority, changefreq }) => {
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
}).join('\n')}
</urlset>`;

// 5. بناء فهرس الخرائط الرئيسي sitemap.xml (Sitemap Index) لمنع تكرار الروابط
const sitemapIndexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${SITE_URL}/sitemap-ar.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${SITE_URL}/sitemap-en.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
</sitemapindex>`;

// الحفظ في مجلد public
const publicDir = path.join(__dirname, '../public');
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapIndexXml, 'utf8');
fs.writeFileSync(path.join(publicDir, 'sitemap-ar.xml'), arabicXml, 'utf8');
fs.writeFileSync(path.join(publicDir, 'sitemap-en.xml'), englishXml, 'utf8');

console.log('✅ Generated sitemaps successfully in public/:');
console.log(` - public/sitemap.xml (Sitemap Index pointing to sub-sitemaps)`);
console.log(` - public/sitemap-ar.xml (${allPages.length} Arabic URLs)`);
console.log(` - public/sitemap-en.xml (${allPages.length} English URLs)`);
