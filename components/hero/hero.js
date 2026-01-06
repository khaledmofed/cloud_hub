import React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import heroImg from "/public/images/hero/it_solution_hero_image_1.webp";
import icon from "/public/images/icons/icon_stars_trustpilot.svg";
import avatar1 from "/public/images/avatar/avatar_1.webp";
import avatar2 from "/public/images/avatar/avatar_2.webp";
import avatar3 from "/public/images/avatar/avatar_3.webp";
import Image from "next/image";

const Hero = () => {
  const { t } = useTranslation("common");

  return (
    <section className="it_solution_hero_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div
              className="it_solution_hero_content"
              style={{
                backgroundImage: `url(${"/images/shapes/it_solution_hero_bg_1.svg"})`,
              }}
            >
              <div className="heading_focus_text mb-0 d-inline-flex align-items-center">
                {t("hero.greeting")}{" "}
                <span className="badge bg-secondary text-white">
                  {t("hero.badge")}
                </span>
              </div>
              <h1>{t("hero.title")}</h1>
              <p>{t("hero.description")}</p>
              <ul className="btns_group unordered_list p-0 justify-content-start">
                <li>
                  <Link className="btn" href="/pricing">
                    <span
                      className="btn_label"
                      data-text={t("hero.getStarted")}
                    >
                      {t("hero.getStarted")}
                    </span>
                    <span className="btn_icon">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                  </Link>
                </li>
                <li>
                  <div className="review_short_info">
                    <div className="d-flex">
                      <Image src={icon} alt="Cloud Hub - Trustpilot Review" />
                      <span>{t("hero.rating")}</span>
                    </div>
                    <div
                      className="review_counter"
                      dangerouslySetInnerHTML={{ __html: t("hero.reviews") }}
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-5">
            <ul className="it_solution_hero_images unordered_list">
              <li>
                <Image src={heroImg} alt="Cloud Hub - IT Solution - Hero" />
              </li>
              <li>
                <div className="worldwide_clients">
                  <div className="counter_value">
                    {t("hero.worldwideClients")}
                  </div>
                  <p>{t("hero.worldwideText")}</p>
                  <ul className="avatar_group unordered_list">
                    <li>
                      <Image src={avatar1} alt="Cloud Hub - Avatar" />
                    </li>
                    <li>
                      <Image src={avatar2} alt="Cloud Hub - Avatar" />
                    </li>
                    <li>
                      <Image src={avatar3} alt="Cloud Hub - Avatar" />
                    </li>
                    <li>{t("hero.moreClients")}</li>
                  </ul>
                </div>
              </li>
              <li>
                <ul className="categories unordered_list_block">
                  <li>
                    <Link href="/">
                      <span>{t("hero.dataSecurity")}</span>
                      <i className="fa-solid fa-plus"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fa-solid fa-plus"></i>
                      <span>{t("hero.webDevelopment")}</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <span>{t("hero.analyticsOptimization")}</span>
                      <i className="fa-solid fa-plus"></i>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <div
                  className="business_growth_content"
                  style={{
                    backgroundImage: `url(${"/images/hero/it_solution_hero_image_2.webp"})`,
                  }}
                >
                  <div className="business_growth">
                    <div className="progress_content">
                      <svg
                        role="progressbar"
                        width="260"
                        height="260"
                        viewBox="0 0 100 100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        aria-valuenow="88"
                      >
                        <circle
                          cx="50%"
                          cy="50%"
                          r="42"
                          shapeRendering="geometricPrecision"
                          fill="none"
                          stroke="#f1f1f1"
                          strokeWidth="5"
                        ></circle>
                        <circle
                          cx="50%"
                          cy="50%"
                          r="42"
                          shapeRendering="geometricPrecision"
                          className="business_growth-circle-58"
                          fill="none"
                          strokeWidth="10"
                          strokeDashoffset="31.680000000000007"
                          strokeDasharray="264"
                          strokeLinecap="round"
                          style={{
                            transform: "rotate(-90deg)",
                            transformOrigin: "50% 50%",
                          }}
                          stroke="#fff"
                          data-angel="88"
                        ></circle>
                        <text
                          className="business_growth-text-58"
                          x="50%"
                          y="50%"
                          fill="#fff"
                          textAnchor="middle"
                          dy="0.35em"
                          fontSize="1.6rem"
                          fontWeight="400"
                        >
                          <tspan className="business_growth-percent-58">
                            88
                          </tspan>
                          <tspan className="business_growth-unit-58">%</tspan>
                        </text>
                      </svg>
                      <p>{t("hero.businessGrowth")}</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
