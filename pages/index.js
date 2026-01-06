import React, { Fragment } from "react";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import Header from "../components/header/Header";
import Hero from "../components/hero/hero";
import FeaturesSection from "../components/FeaturesSection/FeaturesSection";
import About from "../components/about/about";
import PolicySection from "../components/PolicySection/PolicySection";
import ServiceSection from "../components/ServiceSection/ServiceSection";
import ProjectSection from "../components/ProjectSection/ProjectSection";
import Testimonial from "../components/Testimonial/Testimonial";
import TeamSection from "../components/TeamSection/TeamSection";
import BlogSection from "../components/BlogSection/BlogSection";
import CtaSection from "../components/CtaSection/CtaSection";
import Footer from "../components/footer/Footer";
import Scrollbar from "../components/scrollbar/scrollbar";

const HomePage = () => {
  const { t, i18n } = useTranslation('seo');
  const locale = i18n.language;

  return (
    <Fragment>
      <Head>
        <title>{t('home.title')}</title>
        <meta name="description" content={t('home.description')} />
        <meta name="keywords" content={t('home.keywords')} />
        <link rel="canonical" href={`${t('siteUrl')}${locale === 'ar' ? '/ar' : ''}`} />
        <link rel="alternate" hrefLang="en" href={`${t('siteUrl')}`} />
        <link rel="alternate" hrefLang="ar" href={`${t('siteUrl')}/ar`} />
        <link rel="alternate" hrefLang="x-default" href={`${t('siteUrl')}`} />
        <meta property="og:title" content={t('home.title')} />
        <meta property="og:description" content={t('home.description')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${t('siteUrl')}${locale === 'ar' ? '/ar' : ''}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('home.title')} />
        <meta name="twitter:description" content={t('home.description')} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": t('siteName'),
              "url": t('siteUrl'),
              "logo": `${t('siteUrl')}/images/site_logo/site_logo_3.svg`,
              "sameAs": [
                "https://www.facebook.com/cloudhub",
                "https://www.twitter.com/cloudhub",
                "https://www.linkedin.com/company/cloudhub"
              ]
            })
          }}
        />
      </Head>
      <div>
        <Header />
        <main className="page_content">
          <Hero />
          <FeaturesSection />
          <About />
          <PolicySection />
          <ServiceSection />
          <ProjectSection />
          <Testimonial />
          {/* <TeamSection /> */}
          {/* <BlogSection /> */}

          <CtaSection />
        </main>
        <Footer />
        <Scrollbar />
      </div>
    </Fragment>
  );
};

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'seo'])),
    },
  };
}

export default HomePage;
