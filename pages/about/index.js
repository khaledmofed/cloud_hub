import React, { Fragment, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Header from "../../components/header/Header";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import aImg from "/public/images/about/about_image_3.webp";
import aImg2 from "/public/images/about/about_image_4.webp";
import ModalVideo from "react-modal-video";
import PolicySection from "./Policy";
import WhyUs from "./WhyUs";
import FeaturesSection from "../../components/FeaturesSection/FeaturesSection";
import TeamSection from "../../components/TeamSection/TeamSection";
import CtaSection from "../../components/CtaSection/CtaSection";
import Image from "next/image";

const AboutUsPage = (props) => {
  const { t } = useTranslation("common");
  const [isOpen, setOpen] = useState(false);
  return (
    <Fragment>
      <Header />
      <main className="page_content about-page">
        <PageTitle
          pageTitle={t("aboutPage.aboutUs")}
          pagesub={t("aboutPage.moreCloudHub")}
          pageTop={t("aboutPage.about")}
        />
        <section className="intro_about_section section_space bg-light">
          <div className="intro_about_content">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="image_wrap">
                    <Image src={aImg} alt={t("aboutPage.aboutImageAlt")} />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="image_wrap position-relative">
                    <Image src={aImg2} alt={t("aboutPage.aboutImageAlt")} />
                    <button
                      className="video_btn ripple_effect"
                      onClick={() => setOpen(true)}
                    >
                      <span className="btn_icon">
                        <i className="fa-solid fa-play"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="heading_block mb-0">
              <div className="row justify-content-lg-between">
                <div className="col-lg-4">
                  <div className="heading_focus_text">
                    {t("aboutPage.about")}
                    <span className="badge bg-secondary text-white">
                      {t("aboutPage.cloudHub")}
                    </span>
                  </div>
                  <h2 className="heading_text mb-0">
                    {t("aboutPage.flexibleServices")}
                  </h2>
                </div>
                <div className="col-lg-6">
                  <p className="heading_description mb-0">
                    {t("aboutPage.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <PolicySection />
        <FeaturesSection />
        <TeamSection />
        <WhyUs />
        <CtaSection />
      </main>
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

export default AboutUsPage;
