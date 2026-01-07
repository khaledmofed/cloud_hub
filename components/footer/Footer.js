import React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import icon1 from "/public/images/icons/icon_mail.svg";
import icon2 from "/public/images/icons/icon_calling.svg";
import icon3 from "/public/images/icons/icon_map_mark.svg";
import icon4 from "/public/images/icons/icon_mail_2.svg";
import Services from "../../api/service";
import Image from "next/image";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const SubmitHandler = (e) => {
  e.preventDefault();
};

const Footer = (props) => {
  const { t } = useTranslation("common");

  // دالة لترجمة عنوان الخدمة بناءً على slug
  const getServiceTitle = (slug) => {
    const titleMap = {
      "IT-Management-Services": t("serviceItems.itManagement"),
      "Data-Tracking-and-Security": t("serviceItems.dataTracking"),
      "Website-Development": t("serviceItems.websiteDev"),
      "Modern-Technology-Solution": t("serviceItems.modernTech"),
      "UI-UX-Design-Services": t("serviceItems.uiuxDesign"),
    };
    return titleMap[slug] || slug;
  };
  return (
    <footer className="site_footer footer_layout_1">
      <div
        className="content_box"
        style={{ backgroundImage: `url(${"/images/shapes/bg_pattern_3.svg"})` }}
      >
        <div className="container">
          <div className="diract_contact_links text-white">
            <div className="iconbox_block layout_icon_left">
              <div className="iconbox_icon">
                <Image src={icon1} alt="Mail SVG Icon" />
              </div>
              <div className="iconbox_content">
                <h3 className="iconbox_title">{t("footer.writeToUs")}</h3>
                <p className="mb-0">CloudHub@gmail.com</p>
              </div>
            </div>
            <div className="iconbox_block layout_icon_left">
              <div className="iconbox_icon">
                <Image src={icon2} alt="Calling Check SVG Icon" />
              </div>
              <div className="iconbox_content">
                <h3 className="iconbox_title">{t("footer.callUs")}</h3>
                <p className="mb-0">+(1) 1230 452 8597</p>
              </div>
            </div>
            <div className="iconbox_block layout_icon_left">
              <div className="iconbox_icon">
                <Image src={icon3} alt="Map Mark Check SVG Icon" />
              </div>
              <div className="iconbox_content">
                <h3 className="iconbox_title">{t("footer.ourOffice")}</h3>
                <p className="mb-0">Waterloo, Park, Australia</p>
              </div>
            </div>
          </div>
          <div className="footer_main_content">
            <div className="row justify-content-lg-between">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer_widget pe-md-3">
                  <h2 className="footer_info_title">{t("footer.newsletter")}</h2>
                  <p>
                    {t("footer.newsletterDesc")}
                  </p>
                  <form className="footer_newslatter" onSubmit={SubmitHandler}>
                    <label htmlFor="footer_mail_input">
                      <Image src={icon4} alt="Mail SVG Icon" />
                    </label>
                    <input
                      id="footer_mail_input"
                      type="email"
                      name="email"
                      placeholder={t("footer.enterEmail")}
                    />
                    <button type="submit">
                      <i className="fa-solid fa-paper-plane"></i>
                    </button>
                  </form>
                  <ul className="social_links_block unordered_list">
                    <li>
                      <Link onClick={ClickHandler} href="/">
                        {t("footer.facebook")}
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href="/">
                        {t("footer.twitter")}
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href="/">
                        {t("footer.linkedin")}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer_widget">
                  <h3 className="footer_info_title">{t("footer.services")}</h3>
                  <ul className="icon_list unordered_list_block">
                    {Services.slice(0, 6).map((service, srv) => (
                      <li key={srv}>
                        {service.title ? (
                          <Link
                            onClick={ClickHandler}
                            href={"/service-single/[slug]"}
                            as={`/service-single/${service.slug}`}
                          >
                            <span className="icon_list_text">
                              {getServiceTitle(service.slug)}
                            </span>
                          </Link>
                        ) : (
                          ""
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="footer_widget">
                  <h3 className="footer_info_title">{t("footer.information")}</h3>
                  <ul className="icon_list unordered_list_block">
                    <li>
                      <Link onClick={ClickHandler} href="/about">
                        <span className="icon_list_text">{t("footer.aboutCloudHub")}</span>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href="/service">
                        <span className="icon_list_text">{t("footer.investors")}</span>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href="/contact">
                        <span className="icon_list_text">{t("footer.contact")}</span>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href="/about">
                        <span className="icon_list_text">
                          {t("footer.affiliateProgram")}
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href="/portfolio">
                        <span className="icon_list_text">{t("footer.career")}</span>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href="/pricing">
                        <span className="icon_list_text">{t("footer.pricingPlan")}</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="footer_widget">
                  <h3 className="footer_info_title">{t("footer.product")}</h3>
                  <ul className="icon_list unordered_list_block">
                    <li>
                      <Link onClick={ClickHandler} href="/portfolio">
                        <span className="icon_list_text">{t("footer.caseStudies")}</span>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href="/pricing">
                        <span className="icon_list_text">{t("footer.ourPricing")}</span>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href="/service">
                        <span className="icon_list_text">{t("footer.features")}</span>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href="/about">
                        <span className="icon_list_text">{t("footer.overview")}</span>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href="/blog">
                        <span className="icon_list_text">{t("footer.newReleases")}</span>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href="/pricing">
                        <span className="icon_list_text">{t("footer.solutions")}</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container d-md-flex align-items-md-center justify-content-md-between">
          <p className="copyright_text m-0">
            {t("footer.copyright")}
          </p>
          <p className="copyright_text m-0">
            {t("footer.tagline")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
