import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import icon1 from "/public/images/icons/icon_wifi.svg";
import icon2 from "/public/images/icons/icon_dollar_2.svg";
import icon3 from "/public/images/icons/icon_chart.svg";
import icon4 from "/public/images/icons/icon_tag_2.svg";
import icon5 from "/public/images/icons/icon_user_2.svg";
import icon6 from "/public/images/icons/icon_users.svg";
import icon7 from "/public/images/icons/icon_pen.svg";
import icon8 from "/public/images/clients/client_logo_9.webp";
import icon9 from "/public/images/clients/client_logo_10.webp";
import icon10 from "/public/images/avatar/avatar_7.webp";
import icon11 from "/public/images/icons/icon_quote.svg";
import logo from "/public/images/site_logo/site_logo_3.svg";
import cases from "/public/images/case/case_image_4.webp";
import MobileMenu from "../MobileMenu/MobileMenu";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import Image from "next/image";

const Header = (props) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [mobailActive, setMobailState] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="site_header site_header_1">
      <div className="header_top text-center">
        <div className="container">
          <p className="m-0">
            <span dangerouslySetInnerHTML={{ __html: t("header.topBanner") }} />{" "}
            <Link onClick={ClickHandler} href="/pricing">
              <u>{t("header.learnMore")}</u>{" "}
              <i
                className={`fa-solid fa-angle-${
                  router.locale === "ar" ? "left" : "right"
                }`}
              ></i>
            </Link>
          </p>
        </div>
      </div>
      <div
        className={`header_bottom stricky  ${
          isSticky ? "stricked-menu stricky-fixed" : ""
        }`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-3 col-lg-2 col-5">
              <div className="site_logo">
                <Link onClick={ClickHandler} className="site_link" href="/">
                  <Image
                    src={logo}
                    alt="Site Logo – Cloud Hub – Integrated IT & Cloud Solutions"
                  />
                </Link>
                <div className="badge bg-danger-subtle text-danger">
                  {t("header.hiring")}
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7 col-2">
              <nav className="main_menu navbar navbar-expand-lg">
                <div
                  className="main_menu_inner collapse navbar-collapse justify-content-lg-center"
                  id="main_menu_dropdown"
                >
                  <ul className="main_menu_list unordered_list justify-content-center">
                    <li>
                      <Link
                        onClick={ClickHandler}
                        className="nav-link"
                        href="/"
                      >
                        {t("nav.home")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={ClickHandler}
                        className="nav-link"
                        href="/about"
                      >
                        {t("nav.about")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={ClickHandler}
                        className="nav-link"
                        href="/portfolio"
                      >
                        {t("nav.portfolio")}
                      </Link>
                    </li>
                    <li className="dropdown">
                      <Link
                        onClick={ClickHandler}
                        className="nav-link"
                        href="/service"
                        id="services_submenu"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {t("nav.services")}
                      </Link>
                      <div
                        className="dropdown-menu mega_menu_wrapper p-0"
                        aria-labelledby="services_submenu"
                      >
                        <div className="container">
                          <div className="row justify-content-lg-between">
                            <div className="col-lg-8">
                              <div className="row">
                                <div className="col-lg-4">
                                  <div className="megamenu_widget">
                                    <h3 className="megamenu_info_title">
                                      {t("nav.services")}
                                    </h3>
                                    <ul className="icon_list unordered_list_block">
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          href="/service-single/IT-Management-Services"
                                        >
                                          <span className="icon_list_text">
                                            {t("services.itManagement")}
                                          </span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          href="/service-single/Data-Tracking-and-Security"
                                        >
                                          <span className="icon_list_text">
                                            {t("services.dataTracking")}
                                          </span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          href="/service-single/IT-Management-Services"
                                        >
                                          <span className="icon_list_text">
                                            {t("services.websiteDev")}
                                          </span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          href="/service-single/IT-Management-Services"
                                        >
                                          <span className="icon_list_text">
                                            {t("services.crmSolutions")}
                                          </span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          href="/service-single/IT-Management-Services"
                                        >
                                          <span className="icon_list_text">
                                            {t("services.uiuxDesign")}
                                          </span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          href="/service-single/IT-Management-Services"
                                        >
                                          <span className="icon_list_text">
                                            {t("services.technologySolution")}
                                          </span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          href="/service-single/IT-Management-Services"
                                        >
                                          <span className="icon_list_text">
                                            {t("services.softwareDev")}
                                          </span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="megamenu_widget">
                                    <h3 className="megamenu_info_title">
                                      {t("header.ourFields")}
                                    </h3>
                                    <ul className="icon_list unordered_list_block">
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          href="/service"
                                        >
                                          <span className="icon_list_text">
                                            {t("header.healthcare")}
                                          </span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          href="/service"
                                        >
                                          <span className="icon_list_text">
                                            {t("header.banks")}
                                          </span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          href="/service"
                                        >
                                          <span className="icon_list_text">
                                            {t("header.logistics")}
                                          </span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          href="/service"
                                        >
                                          <span className="icon_list_text">
                                            {t("header.supermarkets")}
                                          </span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          href="/service"
                                        >
                                          <span className="icon_list_text">
                                            {t("header.industries")}
                                          </span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          href="/service"
                                        >
                                          <span className="icon_list_text">
                                            {t("header.hotels")}
                                          </span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          href="/service"
                                        >
                                          <span className="icon_list_text">
                                            {t("header.fintech")}
                                          </span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="megamenu_widget">
                                    <h3 className="megamenu_info_title">
                                      {t("header.product")}
                                    </h3>
                                    <ul className="icon_list unordered_list_block">
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          href="/portfolio"
                                        >
                                          <span className="icon_list_text">
                                            {t("header.caseStudies")}
                                          </span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          href="/pricing"
                                        >
                                          <span className="icon_list_text">
                                            {t("header.ourPricing")}
                                          </span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          href="/service"
                                        >
                                          <span className="icon_list_text">
                                            {t("header.features")}
                                          </span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          href="/about"
                                        >
                                          <span className="icon_list_text">
                                            {t("header.overview")}
                                          </span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link onClick={ClickHandler} href="/">
                                          <span className="icon_list_text">
                                            {t("header.newReleases")}
                                          </span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          href="/service"
                                        >
                                          <span className="icon_list_text">
                                            {t("header.solutions")}
                                          </span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="social_area">
                                <ul
                                  className="social_icons_block unordered_list"
                                  data-text={t("header.followUs")}
                                >
                                  <li>
                                    <Link onClick={ClickHandler} href="/">
                                      <i className="fa-brands fa-facebook-f"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link onClick={ClickHandler} href="/">
                                      <i className="fa-brands fa-twitter"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link onClick={ClickHandler} href="/">
                                      <i className="fa-brands fa-linkedin-in"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link onClick={ClickHandler} href="/">
                                      <i className="fa-brands fa-dribbble"></i>
                                    </Link>
                                  </li>
                                </ul>
                                <p className="career_link m-0">
                                  {t("header.lookingForCareer")}{" "}
                                  <Link onClick={ClickHandler} href="/">
                                    {t("header.wereHiring")}
                                  </Link>
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="megamenu_case bg-primary">
                                <h3>{t("header.computerSoftware")}</h3>
                                <h4>{t("header.astarteMedical")}</h4>
                                <Image src={cases} alt={t("header.case")} />
                                <Link
                                  onClick={ClickHandler}
                                  className="btn"
                                  href="/portfolio"
                                >
                                  <span
                                    className="btn_label"
                                    data-text={t("header.readCase")}
                                  >
                                    {t("header.readCase")}
                                  </span>
                                  <span className="btn_icon">
                                    <i className="fa-solid fa-arrow-up-right"></i>
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <Link
                        onClick={ClickHandler}
                        className="nav-link"
                        href="/pricing"
                      >
                        {t("nav.pricing")}
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href="/contact">
                        {t("nav.contact")}
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="col-xl-3 col-lg-3 col-5">
              <ul className="header_btns_group unordered_list justify-content-end">
                <li>
                  <button
                    className="mobile_menu_btn"
                    onClick={() => setMobailState(!mobailActive)}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#main_menu_dropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <i className="far fa-bars"></i>
                  </button>
                </li>
                <li>
                  <LanguageSwitcher />
                </li>
                <li>
                  <Link
                    onClick={ClickHandler}
                    className="btn btn-outline-light"
                    href="/pricing"
                  >
                    <span className="btn_label" data-text={t("nav.getStarted")}>
                      {t("nav.getStarted")}
                    </span>
                    <span className="btn_icon">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mobail-wrap">
          <div className={`mobail-menu ${mobailActive ? "active" : ""}`}>
            <div className="xb-header-menu-scroll">
              <div
                className="xb-menu-close xb-hide-xl xb-close"
                onClick={() => setMobailState(!mobailActive)}
              ></div>
              <nav className="xb-header-nav">
                <MobileMenu />
              </nav>
            </div>
          </div>
          <div
            className="xb-header-menu-backdrop"
            onClick={() => setMobailState(false)}
          ></div>
        </div>
      </div>
      <style jsx>{`
        .desktop-language-switcher {
          display: flex;
          align-items: center;
          margin-left: 20px;
        }
        .desktop-language-switcher :global(.language_switcher) {
          position: relative;
        }
        .desktop-language-switcher :global(.language_switcher_btn) {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          padding: 6px 12px;
          color: var(--bs-dark);
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 13px;
          white-space: nowrap;
        }
        .desktop-language-switcher :global(.language_switcher_btn:hover) {
          background: rgba(0, 0, 0, 0.05);
          border-color: rgba(0, 0, 0, 0.2);
        }
        @media (max-width: 991px) {
          .desktop-language-switcher {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
