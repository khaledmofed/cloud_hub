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
      "Hosting-and-Domains-Services": t("serviceItems.hostingDomains"),
      "Mobile-App-Development": t("serviceItems.mobileAppDev"),
      "Digital-Transformation": t("serviceItems.digitalTransformation"),
      "Cybersecurity-Services": t("serviceItems.cybersecurity"),
    };
    return titleMap[slug] || ServiceDetails?.title || "";
  };

  // دالة للحصول على المحتوى المخصص حسب slug
  const getServiceContent = (slug) => {
    // محتوى خاص بخدمة Website-Development
    if (slug === "Website-Development") {
      return {
        description1: t("serviceSingle.websiteDevDesc1"),
        description2: t("serviceSingle.websiteDevDesc2"),
        outcomeDesc: t("serviceSingle.websiteDevOutcomeDesc"),
        features: [
          t("serviceSingle.responsiveDesign"),
          t("serviceSingle.seoOptimization"),
          t("serviceSingle.fastLoading"),
          t("serviceSingle.modernTechnologies"),
          t("serviceSingle.securityCompliance"),
          t("serviceSingle.ongoingSupport"),
        ],
      };
    }

    // محتوى خاص بخدمة Hosting-and-Domains-Services
    if (slug === "Hosting-and-Domains-Services") {
      return {
        description1: t("serviceSingle.hostingDesc1"),
        description2: t("serviceSingle.hostingDesc2"),
        outcomeDesc: t("serviceSingle.hostingOutcomeDesc"),
        features: [
          t("serviceSingle.hostingFeatures1"),
          t("serviceSingle.hostingFeatures2"),
          t("serviceSingle.hostingFeatures3"),
          t("serviceSingle.hostingFeatures4"),
          t("serviceSingle.hostingFeatures5"),
          t("serviceSingle.hostingFeatures6"),
        ],
      };
    }

    // محتوى خاص بخدمة Digital-Transformation
    if (slug === "Digital-Transformation") {
      return {
        description1: t("serviceSingle.digitalTransformationDesc1"),
        description2: t("serviceSingle.digitalTransformationDesc2"),
        outcomeDesc: t("serviceSingle.digitalTransformationOutcomeDesc"),
        features: [
          t("serviceSingle.digitalTransformationFeatures1"),
          t("serviceSingle.digitalTransformationFeatures2"),
          t("serviceSingle.digitalTransformationFeatures3"),
          t("serviceSingle.digitalTransformationFeatures4"),
          t("serviceSingle.digitalTransformationFeatures5"),
          t("serviceSingle.digitalTransformationFeatures6"),
        ],
      };
    }

    // محتوى خاص بخدمة Cybersecurity-Services
    if (slug === "Cybersecurity-Services") {
      return {
        description1: t("serviceSingle.cybersecurityDesc1"),
        description2: t("serviceSingle.cybersecurityDesc2"),
        outcomeDesc: t("serviceSingle.cybersecurityOutcomeDesc"),
        features: [
          t("serviceSingle.cybersecurityFeatures1"),
          t("serviceSingle.cybersecurityFeatures2"),
          t("serviceSingle.cybersecurityFeatures3"),
          t("serviceSingle.cybersecurityFeatures4"),
          t("serviceSingle.cybersecurityFeatures5"),
          t("serviceSingle.cybersecurityFeatures6"),
        ],
      };
    }

    // محتوى خاص بخدمة Mobile-App-Development
    if (slug === "Mobile-App-Development") {
      return {
        description1: t("serviceSingle.mobileAppDesc1"),
        description2: t("serviceSingle.mobileAppDesc2"),
        outcomeDesc: t("serviceSingle.mobileAppOutcomeDesc"),
        features: [
          t("serviceSingle.mobileAppFeatures1"),
          t("serviceSingle.mobileAppFeatures2"),
          t("serviceSingle.mobileAppFeatures3"),
          t("serviceSingle.mobileAppFeatures4"),
          t("serviceSingle.mobileAppFeatures5"),
          t("serviceSingle.mobileAppFeatures6"),
        ],
      };
    }

    // محتوى افتراضي للخدمات الأخرى
    return {
      description1: t("serviceSingle.description1"),
      description2: t("serviceSingle.description2"),
      outcomeDesc: t("serviceSingle.outcomeDesc"),
      features: [
        t("serviceSingle.scalabilityFlexibility"),
        t("serviceSingle.securityCompliance"),
        t("serviceSingle.performanceOptimization"),
        t("serviceSingle.userExperience"),
        t("serviceSingle.securityCompliance"),
        t("serviceSingle.trainingEducation"),
      ],
    };
  };

  const serviceContent = getServiceContent(ServiceDetails?.slug);

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
              {/* <button
                className="video_btn ripple_effect"
                onClick={() => setOpen(true)}
              >
                <span className="btn_icon">
                  <i className="fa-solid fa-play"></i>
                </span>
              </button> */}
            </div>
            <h2 className="details_item_title">
              {ServiceDetails?.slug ? getServiceTitle(ServiceDetails.slug) : ""}
            </h2>
            <p>{serviceContent.description1}</p>
            <p>{serviceContent.description2}</p>
            <ProcessTechnology />
            <h3 className="details_item_info_title">
              {t("serviceSingle.servicesOutcome")}
            </h3>
            <p className="mb-4">{serviceContent.outcomeDesc}</p>
            <div className="row mb-4">
              <div className="col-lg-6">
                <ul className="icon_list unordered_list_block">
                  {serviceContent.features.slice(0, 3).map((feature, index) => (
                    <li key={index}>
                      <span className="icon_list_icon">
                        <Image src={icon} alt={t("serviceSingle.checkIcon")} />
                      </span>
                      <span className="icon_list_text">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="icon_list unordered_list_block">
                  {serviceContent.features.slice(3, 6).map((feature, index) => (
                    <li key={index + 3}>
                      <span className="icon_list_icon">
                        <Image src={icon} alt={t("serviceSingle.checkIcon")} />
                      </span>
                      <span className="icon_list_text">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* <div className="row">
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
            </div> */}
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
