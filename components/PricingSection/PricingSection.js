import React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import offerBanner from "/public/images/icons/best_offer.svg.svg";
import Image from "next/image";

const WHATSAPP_PHONE = "966599555526";

const PricingSection = () => {
  const { t } = useTranslation("common");

  const getWhatsAppUrl = (messageKey) => {
    const message = t(messageKey);
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
  };

  const wooFeatures = [
    "wooFeature1",
    "wooFeature2",
    "wooFeature3",
    "wooFeature4",
    "wooFeature5",
    "wooFeature6",
    "wooFeature7",
    "wooFeature8",
  ];

  const hostingFeatures = [
    "hostingFeature1",
    "hostingFeature2",
    "hostingFeature3",
    "hostingFeature4",
    "hostingFeature5",
    "hostingFeature6",
    "hostingFeature7",
    "hostingFeature8",
  ];

  return (
    <section
      className="pricing_section client_logo_section section_space pb-0 bg-light"
      style={{ backgroundImage: `url(${"/images/shapes/bg_pattern_1.svg"})` }}
    >
      <div className="container">
        <div className="heading_block text-center">
          <div className="heading_focus_text mb-2">
            {t("pricingPage.our")}
            <span className="badge bg-secondary text-white">
              {t("pricingPage.pricing")}
            </span>
          </div>
          <h2 className="heading_text mb-0">{t("pricingPage.bestPlan")}</h2>
        </div>

        <div className="row justify-content-center g-4">
          {/* باقة متجر الكتروني */}
          <div className="col-lg-6">
            <div className="pricing_block pricing_block_woo">
              <div className="best_plan">
                <Image src={offerBanner} alt={t("pricingPage.bestOffer")} />
              </div>
              <div className="table_head">
                <div className="pricing_price_value pricing_price_note bg-primary-subtle text-primary">
                  <div
                    className="pricing_single"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <span style={{ fontSize: "18px", fontWeight: "600" }}>
                      {t("pricingPage.wooPackageTitle")}
                    </span>
                    <span style={{ fontSize: "16px", fontWeight: "500" }}>
                      {t("pricingPage.wooPackageSubtitle")}
                    </span>
                    <span style={{ fontSize: "14px", fontWeight: "500" }}>
                      {t("pricingPage.wooPriceNote")}
                    </span>
                  </div>
                </div>
                <div className="pricing_block_title">
                  <h3 className="pricing_package_title">
                    
                  </h3>
                  <p className="pricing_package_description mb-0">
                    {t("pricingPage.wooPackageDesc")}
                  </p>
                </div>
              </div>
              <ul className="icon_list unordered_list_block">
                {wooFeatures.map((key, idx) => (
                  <li key={idx}>
                    <span className="icon_list_icon">
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    <span className="icon_list_text">{t(`pricingPage.${key}`)}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={getWhatsAppUrl("pricingPage.wooWhatsAppMsg")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-light"
              >
                <span
                  className="btn_label"
                  data-text={t("pricingPage.wooContactUs")}
                >
                  {t("pricingPage.wooContactUs")}
                </span>
                <span className="btn_icon">
                  <i className="fa-solid fa-arrow-up-right"></i>
                </span>
              </Link>
            </div>
          </div>

          {/* باقات الاستضافة */}
          <div className="col-lg-6">
            <div className="pricing_block pricing_block_hosting">
              <div className="table_head">
                <div className="pricing_price_value bg-primary-subtle text-primary fix-padding">
                  <div className="pricing_single" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                    <span style={{ fontSize: "18px", fontWeight: "600" }}>{t("pricingPage.hostingPrice")}</span>
                    <span style={{ fontSize: "16px", fontWeight: "500" }}>{t("pricingPage.hostingPriceFrom")}</span>
                    <span style={{ fontSize: "24px", fontWeight: "700" }}>{t("pricingPage.hostingPriceAmount")}</span>
                  </div>
                </div>
                <div className="pricing_block_title">
                  <h3 className="pricing_package_title">
                    
                  </h3>
                  <p className="pricing_package_description mb-0">
                    {t("pricingPage.hostingPackageDesc")}
                  </p>
                </div>
              </div>
              <ul className="icon_list unordered_list_block">
                {hostingFeatures.map((key, idx) => (
                  <li key={idx}>
                    <span className="icon_list_icon">
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    <span className="icon_list_text">{t(`pricingPage.${key}`)}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={getWhatsAppUrl("pricingPage.hostingWhatsAppMsg")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-light"
              >
                <span
                  className="btn_label"
                  data-text={t("pricingPage.hostingContactUs")}
                >
                  {t("pricingPage.hostingContactUs")}
                </span>
                <span className="btn_icon">
                  <i className="fa-solid fa-arrow-up-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
