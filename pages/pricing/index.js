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

const PricingPage = (props) => {
  const { t } = useTranslation("common");

  const [isOpen, setOpen] = useState(false);

  return (
    <Fragment>
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
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default PricingPage;
