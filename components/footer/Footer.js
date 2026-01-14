import React from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Link from "next/link";
import icon1 from "/public/images/icons/icon_mail.svg";
import icon2 from "/public/images/icons/icon_calling.svg";
import icon4 from "/public/images/icons/icon_mail_2.svg";
import logo from "/public/images/site_logo/site_logo_3.svg";
import paypalIcon from "/public/images/payment-icon/paypal.svg";
import stcIcon from "/public/images/payment-icon/stc-icon.svg";
import mastercardIcon from "/public/images/payment-icon/master-icon.svg";
import visaIcon from "/public/images/payment-icon/visa-icon.svg";
import madaIcon from "/public/images/payment-icon/mada-icon.svg";
import Services from "../../api/service";
import WhatsAppButton from "../WhatsAppButton/WhatsAppButton";
import Image from "next/image";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const SubmitHandler = (e) => {
  e.preventDefault();
};

const Footer = (props) => {
  const { t } = useTranslation("common");
  const router = useRouter();

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
                <p className="mb-0">
                  <Link
                    href="mailto:info@ch.sa"
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                      transition: "opacity 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.target.style.opacity = "0.8")}
                    onMouseLeave={(e) => (e.target.style.opacity = "1")}
                  >
                    info@ch.sa
                  </Link>
                </p>
              </div>
            </div>
            <div className="iconbox_block layout_icon_left">
              <div className="iconbox_icon">
                <Image src={icon2} alt="Calling Check SVG Icon" />
              </div>
              <div className="iconbox_content">
                <h3 className="iconbox_title">{t("footer.callUs")}</h3>
                <p className="mb-0 dir-ltr">+(966) 59 955 5526</p>
              </div>
            </div>
            <div className="iconbox_block layout_icon_left">
              <div className="iconbox_icon">
                <i className="fa-brands fa-whatsapp"></i>
              </div>
              <div className="iconbox_content">
                <h3 className="iconbox_title">
                  {t("footer.contactViaWhatsapp")}
                </h3>
                <p className="mb-0 dir-ltr">
                  <Link
                    href={`https://wa.me/966599555526?text=${encodeURIComponent(
                      t("footer.whatsappMessage")
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                      transition: "opacity 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.target.style.opacity = "0.8")}
                    onMouseLeave={(e) => (e.target.style.opacity = "1")}
                  >
                    +966 59 955 5526
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="footer_main_content">
            <div className="row justify-content-lg-between">
              {/* القسم الأيمن - اللوجو والوصف والمنيو */}
              <div className="col-lg-6 col-md-12">
                <div className="footer_widget">
                  <Link
                    onClick={ClickHandler}
                    className="site_logo mb-4 d-inline-block"
                    href="/"
                  >
                    <Image
                      src={logo}
                      alt="Cloud Hub Logo"
                      width={150}
                      height={50}
                      style={{ filter: "brightness(0) invert(1)" }}
                    />
                  </Link>
                  <p className="mb-4">{t("footer.companyDescription")}</p>
                </div>
              </div>
              {/* القسم الأيسر - طرق الدفع */}
              <div className="col-lg-6 col-md-12">
                <div className="footer_widget">
                  <h3
                    className="footer_info_title mb-5 mt-2"
                    style={{ textAlign: "end" }}
                  >
                    {t("footer.acceptedPaymentMethods")}
                  </h3>
                  <div
                    className="payment_methods d-flex flex-wrap gap-2 align-items-center"
                    style={{
                      textAlign: "end",
                      direction: router.locale === "ar" ? "ltr" : "rtl",
                    }}
                  >
                    <div className="payment_method_item  d-flex align-items-center justify-content-center">
                      <Image
                        src={paypalIcon}
                        alt="PayPal"
                        width={80}
                        height={30}
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <div className="payment_method_item   d-flex align-items-center justify-content-center">
                      <Image
                        src={stcIcon}
                        alt="STC Bank"
                        width={80}
                        height={30}
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <div className="payment_method_item  d-flex align-items-center justify-content-center">
                      <Image
                        src={mastercardIcon}
                        alt="Mastercard"
                        width={80}
                        height={30}
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <div className="payment_method_item  d-flex align-items-center justify-content-center">
                      <Image
                        src={visaIcon}
                        alt="VISA"
                        width={80}
                        height={30}
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <div className="payment_method_item   d-flex align-items-center justify-content-center">
                      <Image
                        src={madaIcon}
                        alt="Mada"
                        width={80}
                        height={30}
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container d-md-flex align-items-md-center justify-content-md-between">
          <p className="copyright_text m-0">{t("footer.copyright")}</p>
          <p className="copyright_text m-0">{t("footer.tagline")}</p>
        </div>
      </div>
      <WhatsAppButton />
    </footer>
  );
};

export default Footer;
