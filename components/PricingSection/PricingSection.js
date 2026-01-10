import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import offerBanner from "/public/images/icons/best_offer.svg.svg";
import Image from "next/image";

const PricingSection = () => {
  const { t } = useTranslation("common");
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

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
        <div className="pricing_toggle_btn text-center">
          <button
            type="button"
            onClick={handleToggle}
            className={isActive ? "active" : ""}
          >
            <span>
              {t("pricingPage.billedMonthly")} <small>-10%</small>
            </span>
            <span>
              {t("pricingPage.billedYearly")} <small>-30%</small>
            </span>
          </button>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className={`pricing_block ${isActive ? "active" : ""}`}>
              <div className="table_head">
                <div className="pricing_price_value bg-primary-subtle text-primary">
                  <span className="pricing_monthly">
                    <del>$54</del> $48<small>.6</small>{" "}
                    <sub>
                      {t("pricingPage.youllSave")} <u>$5.4</u>{" "}
                      {t("pricingPage.monthly")}
                    </sub>
                  </span>
                  <span className="pricing_annually">
                    <del>$648</del> $453<small>.6</small>{" "}
                    <sub>
                      {t("pricingPage.youllSave")} <u>$194.4</u>{" "}
                      {t("pricingPage.annually")}
                    </sub>
                  </span>
                </div>
                <div className="pricing_block_title">
                  <h3 className="pricing_package_title">
                    {t("pricingPage.proPackage")}
                  </h3>
                  <p className="pricing_package_description mb-0">
                    {t("pricingPage.proPackageDesc")}
                  </p>
                </div>
              </div>
              <ul className="icon_list unordered_list_block">
                <li>
                  <span className="icon_list_icon">
                    <i className="fa-regular fa-circle-check"></i>
                  </span>
                  <span className="icon_list_text">
                    {t("pricingPage.softwareDevelopment")}
                  </span>
                </li>
                <li>
                  <span className="icon_list_icon">
                    <i className="fa-regular fa-circle-check"></i>
                  </span>
                  <span className="icon_list_text">
                    {t("pricingPage.digitalProductDesign")}
                  </span>
                </li>
                <li>
                  <span className="icon_list_icon">
                    <i className="fa-regular fa-circle-check"></i>
                  </span>
                  <span className="icon_list_text">
                    {t("pricingPage.itConsulting")}
                  </span>
                </li>
                <li>
                  <span className="icon_list_icon">
                    <i className="fa-regular fa-circle-check"></i>
                  </span>
                  <span className="icon_list_text">
                    {t("pricingPage.websiteDevelopment")}
                  </span>
                </li>
                <li className="delete">
                  <span className="icon_list_icon">
                    <i className="fa-regular fa-circle-check"></i>
                  </span>
                  <span className="icon_list_text">
                    {t("pricingPage.cybersecurityServices")}
                  </span>
                </li>
                <li className="delete">
                  <span className="icon_list_icon">
                    <i className="fa-regular fa-circle-check"></i>
                  </span>
                  <span className="icon_list_text">
                    {t("pricingPage.cloudServices")}
                  </span>
                </li>
              </ul>
              <Link href="/pricing" className="btn btn-light">
                <span
                  className="btn_label"
                  data-text={t("pricingPage.purchaseNow")}
                >
                  {t("pricingPage.purchaseNow")}
                </span>
                <span className="btn_icon">
                  <i className="fa-solid fa-arrow-up-right"></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={`pricing_block ${isActive ? "active" : ""}`}>
              <div className="best_plan">
                <Image src={offerBanner} alt={t("pricingPage.bestOffer")} />
              </div>
              <div className="table_head">
                <div className="pricing_price_value bg-primary-subtle text-primary">
                  <span className="pricing_monthly">
                    <del>$60</del> $54{" "}
                    <sub>
                      {t("pricingPage.youllSave")} <u>$6</u>{" "}
                      {t("pricingPage.monthly")}
                    </sub>
                  </span>
                  <span className="pricing_annually">
                    <del>$720</del> $504{" "}
                    <sub>
                      {t("pricingPage.youllSave")} <u>$216</u>{" "}
                      {t("pricingPage.annually")}
                    </sub>
                  </span>
                </div>
                <div className="pricing_block_title">
                  <h3 className="pricing_package_title">
                    {t("pricingPage.teamPackage")}
                  </h3>
                  <p className="pricing_package_description mb-0">
                    {t("pricingPage.teamPackageDesc")}
                  </p>
                </div>
              </div>
              <ul className="icon_list unordered_list_block">
                <li>
                  <span className="icon_list_icon">
                    <i className="fa-regular fa-circle-check"></i>
                  </span>
                  <span className="icon_list_text">
                    {t("pricingPage.softwareDevelopment")}
                  </span>
                </li>
                <li>
                  <span className="icon_list_icon">
                    <i className="fa-regular fa-circle-check"></i>
                  </span>
                  <span className="icon_list_text">
                    {t("pricingPage.digitalProductDesign")}
                  </span>
                </li>
                <li>
                  <span className="icon_list_icon">
                    <i className="fa-regular fa-circle-check"></i>
                  </span>
                  <span className="icon_list_text">
                    {t("pricingPage.itConsulting")}
                  </span>
                </li>
                <li>
                  <span className="icon_list_icon">
                    <i className="fa-regular fa-circle-check"></i>
                  </span>
                  <span className="icon_list_text">
                    {t("pricingPage.websiteDevelopment")}
                  </span>
                </li>
                <li>
                  <span className="icon_list_icon">
                    <i className="fa-regular fa-circle-check"></i>
                  </span>
                  <span className="icon_list_text">
                    {t("pricingPage.cybersecurityServices")}
                  </span>
                </li>
                <li>
                  <span className="icon_list_icon">
                    <i className="fa-regular fa-circle-check"></i>
                  </span>
                  <span className="icon_list_text">
                    {t("pricingPage.cloudServices")}
                  </span>
                </li>
              </ul>
              <a className="btn btn-light" href="#!">
                <span
                  className="btn_label"
                  data-text={t("pricingPage.purchaseNow")}
                >
                  {t("pricingPage.purchaseNow")}
                </span>
                <span className="btn_icon">
                  <i className="fa-solid fa-arrow-up-right"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
