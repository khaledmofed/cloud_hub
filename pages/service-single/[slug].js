import React, { Fragment, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Services from "../../api/service";
import { useRouter } from "next/router";
import ModalVideo from "react-modal-video";
import Header from "../../components/header/Header";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import CtaSection from "../../components/CtaSection/CtaSection";
import ProcessTechnology from "../../components/software-company-components/ProcessTechnology/ProcessTechnology";
import srImg from "/public/images/services/service_details_image_1.webp";
import srImg2 from "/public/images/services/service_details_image_2.webp";
import srImg3 from "/public/images/services/service_details_image_3.webp";
import srImg4 from "/public/images/services/service_details_image_4.webp";
import icon from "/public/images/icons/icon_check_3.svg";
import Image from "next/image";

const ServiceSinglePage = (props) => {
  const { t } = useTranslation("common");
  const router = useRouter();

  const ServiceDetails = Services.find(
    (item) => item.slug === router.query.slug
  );

  // دالة لترجمة عنوان الخدمة بناءً على slug
  const getServiceTitle = (slug) => {
    const titleMap = {
      "IT-Management-Services": t("serviceItems.itManagement"),
      "Data-Tracking-and-Security": t("serviceItems.dataTracking"),
      "Website-Development": t("serviceItems.websiteDev"),
      "Modern-Technology-Solution": t("serviceItems.modernTech"),
      "UI-UX-Design-Services": t("serviceItems.uiuxDesign"),
    };
    return titleMap[slug] || ServiceDetails?.title || "";
  };

  const [isOpen, setOpen] = useState(false);

  return (
    <Fragment>
      <Header />
      <main className="page_content service-single-page">
        <PageTitle
          pageTitle={
            ServiceDetails?.slug ? getServiceTitle(ServiceDetails.slug) : ""
          }
          pagesub={t("serviceSingle.details")}
          pageTop={t("serviceSingle.services")}
        />
        <section className="service_details_section section_space bg-light">
          <div className="container">
            <div className="details_item_image position-relative">
              <Image src={srImg} alt={t("serviceSingle.serviceDetails")} />
              <button
                className="video_btn ripple_effect"
                onClick={() => setOpen(true)}
              >
                <span className="btn_icon">
                  <i className="fa-solid fa-play"></i>
                </span>
              </button>
            </div>
            <h2 className="details_item_title">
              {ServiceDetails?.slug ? getServiceTitle(ServiceDetails.slug) : ""}
            </h2>
            <p>{t("serviceSingle.description1")}</p>
            <p>{t("serviceSingle.description2")}</p>
            <ProcessTechnology />
            <h3 className="details_item_info_title">
              {t("serviceSingle.servicesOutcome")}
            </h3>
            <p className="mb-4">{t("serviceSingle.outcomeDesc")}</p>
            <div className="row mb-4">
              <div className="col-lg-6">
                <ul className="icon_list unordered_list_block">
                  <li>
                    <span className="icon_list_icon">
                      <Image src={icon} alt={t("serviceSingle.checkIcon")} />
                    </span>
                    <span className="icon_list_text">
                      {t("serviceSingle.scalabilityFlexibility")}
                    </span>
                  </li>
                  <li>
                    <span className="icon_list_icon">
                      <Image src={icon} alt={t("serviceSingle.checkIcon")} />
                    </span>
                    <span className="icon_list_text">
                      {t("serviceSingle.securityCompliance")}
                    </span>
                  </li>
                  <li>
                    <span className="icon_list_icon">
                      <Image src={icon} alt={t("serviceSingle.checkIcon")} />
                    </span>
                    <span className="icon_list_text">
                      {t("serviceSingle.performanceOptimization")}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="icon_list unordered_list_block">
                  <li>
                    <span className="icon_list_icon">
                      <Image src={icon} alt={t("serviceSingle.checkIcon")} />
                    </span>
                    <span className="icon_list_text">
                      {t("serviceSingle.userExperience")}
                    </span>
                  </li>
                  <li>
                    <span className="icon_list_icon">
                      <Image src={icon} alt={t("serviceSingle.checkIcon")} />
                    </span>
                    <span className="icon_list_text">
                      {t("serviceSingle.securityCompliance")}
                    </span>
                  </li>
                  <li>
                    <span className="icon_list_icon">
                      <Image src={icon} alt={t("serviceSingle.checkIcon")} />
                    </span>
                    <span className="icon_list_text">
                      {t("serviceSingle.trainingEducation")}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="details_item_image m-0">
                  <Image src={srImg2} alt={t("serviceSingle.serviceDetails")} />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="details_item_image m-0">
                  <Image src={srImg3} alt={t("serviceSingle.serviceDetails")} />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="details_item_image m-0">
                  <Image src={srImg4} alt={t("serviceSingle.serviceDetails")} />
                </div>
              </div>
            </div>
          </div>
        </section>
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

export default ServiceSinglePage;
