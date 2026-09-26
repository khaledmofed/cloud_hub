import React, { Fragment } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Header from "../../components/header/Header";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import CtaSection from "../../components/CtaSection/CtaSection";
import ContactSection from "../../components/ContactSection";
import SEO from "../../components/SEO/SEO";
import { getBreadcrumbSchema } from "../../utils/seoSchemas";

const ContactPage = (props) => {
  const { t } = useTranslation("common");
  const { t: tSeo, i18n } = useTranslation("seo");
  const locale = i18n?.language || "ar";
  const isAr = locale === "ar";

  const breadcrumbs = getBreadcrumbSchema(
    [{ name: isAr ? "اتصل بنا" : "Contact Us", url: "/contact" }],
    locale
  );

  return (
    <Fragment>
      <SEO
        title={tSeo("contact.title")}
        description={tSeo("contact.description")}
        keywords={tSeo("contact.keywords")}
        locale={locale}
        path="/contact"
        structuredData={breadcrumbs}
      />
      <Header />
      <main className="page_content about-page">
        <PageTitle
          pageTitle={t("contactPage.contactUs")}
          pagesub={t("contactPage.us")}
          pageTop={t("contactPage.contact")}
        />
        <ContactSection />
        <CtaSection />
      </main>
      <Footer />
      <Scrollbar />
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

export default ContactPage;
