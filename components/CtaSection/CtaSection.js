import React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const CtaSection = (props) => {
  const { t } = useTranslation("common");

  // بناء رابط الواتساب مع الرسالة
  const getWhatsAppLink = () => {
    const message = t("footer.whatsappMessage");
    return `https://wa.me/966599555526?text=${encodeURIComponent(message)}`;
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
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
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
