import React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const CtaSection = (props) => {
  const { t } = useTranslation("common");

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section
      className="calltoaction_section parallaxie"
      style={{
        backgroundImage: `url(${"/images/backgrounds/bg_image_1.webp"})`,
      }}
    >
      <div className="container text-center">
        <div className="heading_block text-white">
          <h2 className="heading_text">{t("cta.readyToWork")}</h2>
          <p className="heading_description mb-0">{t("cta.description")}</p>
        </div>
        <Link
          onClick={ClickHandler}
          href="/contact"
          className="btn btn-primary"
        >
          <span className="btn_label" data-text={t("cta.contactUsToday")}>
            {t("cta.contactUsToday")}
          </span>
          <span className="btn_icon">
            <i className="fa-solid fa-arrow-up-right"></i>
          </span>
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;
