import React from "react";
import { useTranslation } from "next-i18next";
import ContactForm from "../ContactFrom/ContactForm";
import icon1 from "/public/images/icons/icon_map_mark_2.svg";
import icon2 from "/public/images/icons/icon_calling_2.svg";
import icon3 from "/public/images/icons/icon_mail_3.svg";
import icon4 from "/public/images/icons/icon_calendar_2.svg";
import Image from "next/image";

const ContactSection = (props) => {
  const { t } = useTranslation("common");

  return (
    <section className="contact_section section_space bg-light">
      <div className="container">
        <div className="contact_info_box row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="iconbox_block text-center">
              <div className="iconbox_icon">
                <Image src={icon1} alt={t("contactPage.mapIcon")} />
              </div>
              <div className="iconbox_content">
                <h3 className="iconbox_title">{t("contactPage.location")}</h3>
                <p className="mb-0">{t("contactPage.locationAddress")}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="iconbox_block text-center">
              <div className="iconbox_icon">
                <Image src={icon2} alt={t("contactPage.callingIcon")} />
              </div>
              <div className="iconbox_content">
                <h3 className="iconbox_title">{t("contactPage.contact")}</h3>
                <p className="mb-0 dir-ltr">+88(0) 555-0108</p>
                <div className="mb-0 dir-ltr">+88(0) 555-01117</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="iconbox_block text-center">
              <div className="iconbox_icon">
                <Image src={icon3} alt={t("contactPage.emailIcon")} />
              </div>
              <div className="iconbox_content">
                <h3 className="iconbox_title">{t("contactPage.email")}</h3>
                <p className="mb-0">CloudHub@example.com</p>
                <p className="mb-0">gmail.@example.com</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="iconbox_block text-center">
              <div className="iconbox_icon">
                <Image src={icon4} alt={t("contactPage.calendarIcon")} />
              </div>
              <div className="iconbox_content">
                <h3 className="iconbox_title">
                  {t("contactPage.visitBetween")}
                </h3>
                <p className="mb-0">{t("contactPage.workingHours")}</p>
                <p className="mb-0">{t("contactPage.sundayClosed")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="section_space pb-0">
          <div className="row justify-content-lg-between">
            <div className="col-lg-7">
              <div className="contact_form mb-0">
                <h3 className="details_item_info_title mb-1">
                  {t("contactPage.sendMessage")}
                </h3>
                <p className="mb-5">{t("contactPage.sendMessageDesc")}</p>
                <ContactForm />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="gmap_canvas ps-lg-5">
                <iframe
                  title={t("contactPage.map")}
                  src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
