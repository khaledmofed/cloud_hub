import React from "react";
import { useTranslation } from "next-i18next";
import Services from "../../api/service";
import Link from "next/link";
import Image from "next/image";

const ServiceSection = (props) => {
  const { t } = useTranslation("common");
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  // دالة لترجمة عنوان الخدمة بناءً على slug
  const getServiceTitle = (slug) => {
    const titleMap = {
      "IT-Management-Services": t("serviceItems.itManagement"),
      "Data-Tracking-and-Security": t("serviceItems.dataTracking"),
      "Website-Development": t("serviceItems.websiteDev"),
      "Modern-Technology-Solution": t("serviceItems.modernTech"),
      "UI-UX-Design-Services": t("serviceItems.uiuxDesign"),
      "Custom Software Development": t("serviceItems.customSoftware"),
    };
    return titleMap[slug] || slug;
  };

  // دالة لترجمة thumbs بناءً على slug و thumb index
  const getServiceThumb = (slug, thumbIndex) => {
    const thumbMap = {
      "IT-Management-Services": {
        thumb1: t("serviceItems.strategy"),
        thumb2: t("serviceItems.consultation"),
      },
      "Data-Tracking-and-Security": {
        thumb1: t("serviceItems.management"),
        thumb2: t("serviceItems.transfer"),
      },
      "Website-Development": {
        thumb1: t("serviceItems.landingPage"),
        thumb2: t("serviceItems.plugins"),
      },
      "Modern-Technology-Solution": {
        thumb1: t("serviceItems.consultation"),
        thumb2: t("serviceItems.solution"),
      },
      "UI-UX-Design-Services": {
        thumb1: t("serviceItems.website"),
        thumb2: t("serviceItems.mobileApp"),
      },
    };
    return thumbMap[slug]?.[thumbIndex] || "";
  };

  return (
    <section className="service_section section_space xb-hidden pb-0">
      <div className="container">
        <div className="heading_block text-center">
          <div className="heading_focus_text">
            {t("servicesSection.our")}
            <span className="badge bg-secondary text-white">
              {t("servicesSection.specialize")}
            </span>
          </div>
          <h2 className="heading_text mb-0">
            {t("servicesSection.featuredServices")}
          </h2>
        </div>

        <div className="row">
          {Services.slice(0, 5).map((service, srv) => (
            <div className={`${service.col} mt-30`} key={srv}>
              {service.title ? (
                <div className="service_block">
                  <div className="service_image">
                    <Image
                      src={service.sImg}
                      alt={getServiceTitle(service.slug)}
                    />
                  </div>
                  <div className="service_content">
                    <h3 className="service_title">
                      <Link
                        onClick={ClickHandler}
                        href={"/service-single/[slug]"}
                        as={`/service-single/${service.slug}`}
                      >
                        {getServiceTitle(service.slug)}
                      </Link>
                    </h3>

                    <div className="links_wrapper">
                      <ul className="category_btns_group unordered_list">
                        <li>
                          <Link
                            onClick={ClickHandler}
                            href={"/service-single/[slug]"}
                            as={`/service-single/${service.slug}`}
                          >
                            {getServiceThumb(service.slug, "thumb1")}
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={ClickHandler}
                            href={"/service-single/[slug]"}
                            as={`/service-single/${service.slug}`}
                          >
                            {getServiceThumb(service.slug, "thumb2")}
                          </Link>
                        </li>
                      </ul>
                      <Link
                        onClick={ClickHandler}
                        href={"/service-single/[slug]"}
                        as={`/service-single/${service.slug}`}
                        className="icon_block"
                      >
                        <i className="fa-regular fa-arrow-up-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>

        <div className="btns_group pb-0">
          <Link
            onClick={ClickHandler}
            className="btn btn-outline-light"
            href="/service"
          >
            <span
              className="btn_label"
              data-text={t("servicesSection.moreServices")}
            >
              {t("servicesSection.moreServices")}
            </span>
            <span className="btn_icon">
              <i className="fa-solid fa-arrow-up-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
