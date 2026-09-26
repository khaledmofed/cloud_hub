import React from "react";
import Head from "next/head";

const DEFAULT_SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ch.sa";

const SEO = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  ogType = "website",
  locale = "ar",
  path = "",
  structuredData,
  noIndex = false,
}) => {
  const siteUrl = DEFAULT_SITE_URL;
  const siteName = locale === "ar" ? "محور الحوسبة" : "Cloud Hub";

  // معالجة المسار
  const normalizedPath = path.startsWith("/") ? path : path ? `/${path}` : "";
  const enUrl = `${siteUrl}${normalizedPath}`;
  const arUrl = `${siteUrl}/ar${normalizedPath}`;
  const currentUrl = canonicalUrl || (locale === "ar" ? arUrl : enUrl);

  // صورة المعاينة (Open Graph)
  const defaultOgImage = `${siteUrl}/images/site_logo/site_logo_3.svg`;
  let resolvedOgImage = defaultOgImage;
  if (ogImage) {
    if (typeof ogImage === "string") {
      resolvedOgImage = ogImage.startsWith("http")
        ? ogImage
        : `${siteUrl}${ogImage.startsWith("/") ? "" : "/"}${ogImage}`;
    } else if (ogImage.src) {
      resolvedOgImage = ogImage.src.startsWith("http")
        ? ogImage.src
        : `${siteUrl}${ogImage.src.startsWith("/") ? "" : "/"}${ogImage.src}`;
    }
  }

  const ogLocale = locale === "ar" ? "ar_SA" : "en_US";
  const ogLocaleAlternate = locale === "ar" ? "en_US" : "ar_SA";

  // تحضير السكيمات
  const schemas = structuredData
    ? Array.isArray(structuredData)
      ? structuredData
      : [structuredData]
    : [];

  return (
    <Head>
      {/* الوسوم الأساسية */}
      {title && <title key="title">{title}</title>}
      {description && <meta key="description" name="description" content={description} />}
      {keywords && <meta key="keywords" name="keywords" content={keywords} />}
      <meta
        key="robots"
        name="robots"
        content={
          noIndex
            ? "noindex, nofollow"
            : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        }
      />

      {/* الروابط الأساسية واللغات المتعددة */}
      <link key="canonical" rel="canonical" href={currentUrl} />
      <link key="alt-en" rel="alternate" hrefLang="en" href={enUrl} />
      <link key="alt-ar" rel="alternate" hrefLang="ar" href={arUrl} />
      <link key="alt-x-default" rel="alternate" hrefLang="x-default" href={enUrl} />

      {/* وسوم Open Graph لمواقع التواصل الاجتماعي */}
      <meta key="og:site_name" property="og:site_name" content={siteName} />
      {title && <meta key="og:title" property="og:title" content={title} />}
      {description && <meta key="og:description" property="og:description" content={description} />}
      <meta key="og:type" property="og:type" content={ogType} />
      <meta key="og:url" property="og:url" content={currentUrl} />
      <meta key="og:image" property="og:image" content={resolvedOgImage} />
      <meta key="og:locale" property="og:locale" content={ogLocale} />
      <meta key="og:locale:alternate" property="og:locale:alternate" content={ogLocaleAlternate} />

      {/* بطاقات تويتر */}
      <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
      {title && <meta key="twitter:title" name="twitter:title" content={title} />}
      {description && <meta key="twitter:description" name="twitter:description" content={description} />}
      <meta key="twitter:image" name="twitter:image" content={resolvedOgImage} />

      {/* البيانات المنظمة JSON-LD */}
      {schemas.map((schema, index) => (
        <script
          key={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </Head>
  );
};

export default SEO;
