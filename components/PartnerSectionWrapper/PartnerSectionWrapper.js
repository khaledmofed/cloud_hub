import React from "react";
import { useTranslation } from "next-i18next";
import PartnerSection from "../PartnerSection";

const PartnerSectionWrapper = () => {
  const { t } = useTranslation("common");

  return (
    <div
      className="client_logo_section section_space bg-light"
      style={{ backgroundImage: `url(${"/images/shapes/bg_pattern_1.svg"})` }}
    >
      <div className="container">
        <div className="heading_block text-center">
          <div className="heading_focus_text mb-0">
            <span className="badge bg-secondary text-white">
              {t("pricingPage.brandWe")}
            </span>
            {t("pricingPage.workWith")}
          </div>
        </div>
        <PartnerSection />
      </div>
    </div>
  );
};

export default PartnerSectionWrapper;
