const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ch.sa";

export const getOrganizationSchema = (locale = "ar") => {
  const isAr = locale === "ar";
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: isAr ? "محور الحوسبة" : "Cloud Hub",
    legalName: isAr
      ? "مؤسسة محور الحوسبة لتقنية المعلومات"
      : "Cloud Hub Information Technology",
    url: SITE_URL,
    logo: `${SITE_URL}/images/site_logo/site_logo_3.svg`,
    image: `${SITE_URL}/images/site_logo/site_logo_3.svg`,
    description: isAr
      ? "محور الحوسبة منصة سعودية رائدة لحلول تقنية المعلومات وخدمات الاستضافة السحابية وتطوير البرمجيات والأمن السيبراني."
      : "Cloud Hub is a premier Saudi IT solutions platform delivering web and mobile development, cloud hosting, DevOps, cybersecurity, and server management.",
    telephone: "+966599555526",
    address: {
      "@type": "PostalAddress",
      addressCountry: "SA",
      addressRegion: "Riyadh",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+966599555526",
        contactType: "customer service",
        areaServed: "SA",
        availableLanguage: ["Arabic", "English"],
      },
    ],
    sameAs: [
      "https://www.facebook.com/cloudhub",
      "https://www.twitter.com/cloudhub",
      "https://www.linkedin.com/company/cloudhub",
      "https://wa.me/966599555526",
    ],
  };
};

export const getWebSiteSchema = (locale = "ar") => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: locale === "ar" ? "محور الحوسبة" : "Cloud Hub",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: [
      {
        "@type": "Language",
        name: "Arabic",
        alternateName: "ar",
      },
      {
        "@type": "Language",
        name: "English",
        alternateName: "en",
      },
    ],
  };
};

export const getBreadcrumbSchema = (items = [], locale = "ar") => {
  const isAr = locale === "ar";
  const homeName = isAr ? "الرئيسية" : "Home";
  const homeUrl = isAr ? `${SITE_URL}/ar` : SITE_URL;

  const itemListElement = [
    {
      "@type": "ListItem",
      position: 1,
      name: homeName,
      item: homeUrl,
    },
    ...items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 2,
      name: item.name,
      item: item.url.startsWith("http")
        ? item.url
        : `${SITE_URL}${item.url.startsWith("/") ? "" : "/"}${item.url}`,
    })),
  ];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };
};

export const getServiceSchema = ({ title, description, slug, image }, locale = "ar") => {
  const isAr = locale === "ar";
  const pageUrl = isAr
    ? `${SITE_URL}/ar/service-single/${slug}`
    : `${SITE_URL}/service-single/${slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description: description,
    url: pageUrl,
    provider: {
      "@id": `${SITE_URL}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "Saudi Arabia",
    },
    ...(image && {
      image: image.startsWith("http") ? image : `${SITE_URL}${image}`,
    }),
  };
};

export const getArticleSchema = (
  { title, description, slug, author, create_at, image },
  locale = "ar"
) => {
  const isAr = locale === "ar";
  const articleUrl = isAr
    ? `${SITE_URL}/ar/blog-single/${slug}`
    : `${SITE_URL}/blog-single/${slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    url: articleUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    author: {
      "@type": "Person",
      name: author || (isAr ? "محور الحوسبة" : "Cloud Hub"),
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    datePublished: create_at || new Date().toISOString(),
    ...(image && {
      image: image.startsWith("http") ? image : `${SITE_URL}${image}`,
    }),
  };
};
