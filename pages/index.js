import React, { Fragment } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Header from "../components/header/Header";
import Hero from "../components/hero/hero";
import FeaturesSection from "../components/FeaturesSection/FeaturesSection";
import About from "../components/about/about";
import PolicySection from "../components/PolicySection/PolicySection";
import ServiceSection from "../components/ServiceSection/ServiceSection";
import ProjectSection from "../components/ProjectSection/ProjectSection";
import PricingSection from "../components/PricingSection/PricingSection";
import PartnerSectionWrapper from "../components/PartnerSectionWrapper/PartnerSectionWrapper";
import Testimonial from "../components/Testimonial/Testimonial";
import TeamSection from "../components/TeamSection/TeamSection";
import BlogSection from "../components/BlogSection/BlogSection";
import CtaSection from "../components/CtaSection/CtaSection";
import Footer from "../components/footer/Footer";
import Scrollbar from "../components/scrollbar/scrollbar";
import SEO from "../components/SEO/SEO";
import { getOrganizationSchema, getWebSiteSchema } from "../utils/seoSchemas";

const HomePage = () => {
  const { t, i18n } = useTranslation("seo");
  const locale = i18n.language || "ar";

  const structuredData = [
    getOrganizationSchema(locale),
    getWebSiteSchema(locale),
  ];

  return (
    <Fragment>
      <SEO
        title={t("home.title")}
        description={t("home.description")}
        keywords={t("home.keywords")}
        locale={locale}
        path="/"
        ogType="website"
        structuredData={structuredData}
      />
      <div>
        <Header />
        <main className="page_content">
          <Hero />
          <PricingSection />
          <PartnerSectionWrapper />
          {/* <FeaturesSection /> */}
          <About />
          <PolicySection />
          <ServiceSection />
          <ProjectSection />

          {/* <Testimonial /> */}
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
      ...(await serverSideTranslations(locale, ["common", "seo"])),
    },
  };
}

export default HomePage;
