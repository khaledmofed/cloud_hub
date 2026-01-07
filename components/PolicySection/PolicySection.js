import React from "react";
import { useTranslation } from "next-i18next";
import sIcon1 from "/public/images/icons/icon_user_check.svg";
import sIcon2 from "/public/images/icons/icon_headphone.svg";
import sIcon3 from "/public/images/icons/icon_dollar.svg";
import Image from "next/image";

const getPolicy = (t) => [
  {
    title: t("policy.expertTeam"),
    subTitle: t("policy.expertTeamDesc"),
    icon: sIcon1,
  },
  {
    title: t("policy.fastestService"),
    subTitle: t("policy.fastestServiceDesc"),
    icon: sIcon2,
  },
  {
    title: t("policy.reasonablePricing"),
    subTitle: t("policy.reasonablePricingDesc"),
    icon: sIcon3,
  },
];

const PolicySection = (props) => {
  const { t } = useTranslation("common");
  const Policy = getPolicy(t);

  return (
    <section className="policy_section">
      <div className="container">
        <div className="row">
          {Policy.map((policy, pitem) => (
            <div className="col-lg-4" key={pitem}>
              <div className="iconbox_block layout_icon_left">
                <div className="iconbox_icon bg-secondary-subtle">
                  <Image src={policy.icon} alt="Dollar SVG Icon" />
                </div>
                <div className="iconbox_content">
                  <h3 className="iconbox_title">{policy.title}</h3>
                  <p className="mb-0">{policy.subTitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PolicySection;
