import React, { Fragment } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Header from "../../components/header/Header";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import CtaSection from "../../components/CtaSection/CtaSection";
import ContactSection from "../../components/ContactSection";

const ContactPage = (props) => {
  const { t } = useTranslation("common");

  return (
    <Fragment>
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
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default ContactPage;
