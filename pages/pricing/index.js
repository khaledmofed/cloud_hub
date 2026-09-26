import React, { Fragment, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Header from "../../components/header/Header";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import ModalVideo from "react-modal-video";
import CtaSection from "../../components/CtaSection/CtaSection";
import PolicySection from "./Policy";
import PricingSection from "../../components/PricingSection/PricingSection";
import PartnerSectionWrapper from "../../components/PartnerSectionWrapper/PartnerSectionWrapper";
import SEO from "../../components/SEO/SEO";
import { getBreadcrumbSchema } from "../../utils/seoSchemas";

const PricingPage = (props) => {
  const { t } = useTranslation("common");
  const { t: tSeo, i18n } = useTranslation("seo");
  const locale = i18n?.language || "ar";
  const isAr = locale === "ar";

  const [isOpen, setOpen] = useState(false);

  const breadcrumbs = getBreadcrumbSchema(
    [{ name: isAr ? "الأسعار" : "Pricing", url: "/pricing" }],
    locale
  );

  return (
    <Fragment>
      <SEO
        title={tSeo("pricing.title")}
        description={tSeo("pricing.description")}
        keywords={tSeo("pricing.keywords")}
        locale={locale}
        path="/pricing"
        structuredData={breadcrumbs}
      />
      <Header />
      <main className="page_content about-page">
        <PageTitle
          pageTitle={t("pricingPage.pricingPlan")}
          pagesub={t("pricingPage.pricing")}
          pageTop={t("pricingPage.our")}
        />
        <PolicySection />
        <PricingSection />
        <PartnerSectionWrapper />
      </main>
      <CtaSection />
      <Footer />
      <Scrollbar />
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="7e90gBu4pas"
        onClose={() => setOpen(false)}
      />
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

export default PricingPage;
