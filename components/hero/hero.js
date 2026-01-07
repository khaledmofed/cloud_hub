import React, { useState } from "react";
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
  const [domainName, setDomainName] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [isAvailable, setIsAvailable] = useState(null);
  const [searchedDomain, setSearchedDomain] = useState("");

  // دالة للتحقق من توفر النطاق
  // ملاحظة: تحتاج إلى استبدال هذا بـ API حقيقي من secure.ch.net.sa أو أي خدمة WHOIS
  const checkDomainAvailability = async (domain) => {
    if (!domain || domain.trim() === "") {
      return;
    }

    const cleanDomain = domain.trim().toLowerCase();
    setIsSearching(true);
    setSearchedDomain(cleanDomain);

    try {
      // خيار 1: إذا كان لديك API من secure.ch.net.sa، استخدمه هنا
      // مثال:
      // const response = await fetch(`https://secure.ch.net.sa/api/check-domain?domain=${cleanDomain}`);
      // const data = await response.json();
      // setIsAvailable(data.available);

      // خيار 2: استخدام WHOIS API (يحتاج إلى API key)
      // يمكنك التسجيل في whoisxmlapi.com أو أي خدمة مشابهة
      // const response = await fetch(
      //   `https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=YOUR_API_KEY&domainName=${cleanDomain}&outputFormat=JSON`
      // );
      // const data = await response.json();
      // setIsAvailable(!data.WhoisRecord || !data.WhoisRecord.registryData);

      // خيار 3: استخدام API مجاني (محدود)
      // مثال: domainr.com API (يحتاج إلى API key)

      // حالياً: محاكاة للاختبار (يجب استبدالها بـ API حقيقي)
      // يمكنك إزالة setTimeout واستخدام API حقيقي
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // هذا مجرد مثال - يجب استبداله بـ API حقيقي
      // يمكنك توجيه المستخدم مباشرة للتسجيل بدون التحقق المسبق
      setIsAvailable(true); // افتراضي: متاح (سيتم التحقق في صفحة التسجيل)
    } catch (error) {
      console.error("Error checking domain:", error);
      // في حالة الخطأ، يمكن توجيه المستخدم مباشرة للتسجيل
      setIsAvailable(true);
    } finally {
      setIsSearching(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkDomainAvailability(domainName);
  };

  const handleRegisterClick = () => {
    const registerUrl = `https://secure.ch.net.sa/cart.php?a=add&domain=register&query=${encodeURIComponent(
      searchedDomain
    )}`;
    window.open(registerUrl, "_blank");
  };

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
                {/* Domain Search Section */}
                <li className="domain_search_item">
                  <div className="domain_search_section">
                    <p className="domain_search_title mb-3">
                      {t("hero.domainSearchTitle")}
                    </p>
                    <form
                      onSubmit={handleSubmit}
                      className="domain_search_form"
                    >
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder={t("hero.domainSearchPlaceholder")}
                          value={domainName}
                          onChange={(e) => setDomainName(e.target.value)}
                          dir="ltr"
                        />
                        <button
                          type="submit"
                          className="btn"
                          disabled={isSearching}
                        >
                          <span
                            className="btn_label"
                            data-text={
                              isSearching
                                ? t("hero.domainChecking")
                                : t("hero.domainSearch")
                            }
                          >
                            {isSearching ? (
                              <i className="fa-solid fa-spinner fa-spin"></i>
                            ) : (
                              <>
                                <i className="fa-solid fa-magnifying-glass"></i>{" "}
                                {t("hero.domainSearch")}
                              </>
                            )}
                          </span>
                          <span className="btn_icon">
                            <i className="fa-solid fa-arrow-up-right"></i>
                          </span>
                        </button>
                      </div>
                    </form>

                    {/* Domain Search Results */}
                    {searchedDomain && (
                      <div className="domain_search_results mt-3">
                        {isSearching ? (
                          <div className="alert alert-info">
                            <i className="fa-solid fa-spinner fa-spin me-2"></i>
                            {t("hero.domainChecking")}
                          </div>
                        ) : isAvailable === true ? (
                          <div className="alert alert-success">
                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                              <div>
                                <i className="fa-solid fa-circle-check me-2"></i>
                                <strong>{searchedDomain}</strong>{" "}
                                {t("hero.domainAvailable")}
                              </div>
                              <button
                                type="button"
                                className="btn"
                                onClick={handleRegisterClick}
                              >
                                <span
                                  className="btn_label"
                                  data-text={t("hero.registerDomain")}
                                >
                                  {t("hero.registerDomain")}
                                </span>
                                <span className="btn_icon">
                                  <i className="fa-solid fa-arrow-up-right"></i>
                                </span>
                              </button>
                            </div>
                          </div>
                        ) : isAvailable === false ? (
                          <div className="alert alert-danger">
                            <i className="fa-solid fa-circle-xmark me-2"></i>
                            <strong>{searchedDomain}</strong>{" "}
                            {t("hero.domainNotAvailable")}
                          </div>
                        ) : null}
                      </div>
                    )}

                    {/* Popular TLDs */}
                    <div className="popular_tlds mt-3">
                      <ul className="tld_list unordered_list d-flex flex-wrap gap-3 mb-0">
                        {[
                          { ext: ".com", price: "$12.95", color: "#4A90E2" },
                          { ext: ".info", price: "$2.55", color: "#E74C3C" },
                          { ext: ".org", price: "$2.32", color: "#2ECC71" },
                          { ext: ".biz", price: "$1.9", color: "#9B59B6" },
                          { ext: ".xyz", price: "$0.99", color: "#F1C40F" },
                        ].map((tld, index) => (
                          <li key={index}>
                            <div
                              className="tld_item"
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                setDomainName(domainName + tld.ext);
                              }}
                            >
                              <span
                                className="tld_ext"
                                style={{ color: tld.color }}
                              >
                                {tld.ext}
                              </span>
                              <span className="tld_price">
                                {tld.price}/Year
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
                {/* <li>
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
                </li> */}
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
