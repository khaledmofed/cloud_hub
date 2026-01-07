import React, { Fragment, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Project from "../../api/project";
import Link from "next/link";
import Header from "../../components/header/Header";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import CtaSection from "../../components/CtaSection/CtaSection";
import Image from "next/image";

const PortfolioPage = (props) => {
  const { t } = useTranslation("common");
  const [activeFilter, setActiveFilter] = useState("all");

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  // دالة لترجمة عنوان المشروع بناءً على slug
  const getProjectTitle = (slug) => {
    const titleMap = {
      "Driving-Digital-Transformation-Explore-the-Depth-of-Our-IT Projects": t(
        "portfolioItems.drivingDigital"
      ),
      "Explore-Our-IT-Solutions": t("portfolioItems.exploreSolutions"),
      "Innovative-Solutions-Showcase-the-Diversity-of-Our-IT-Portfolio": t(
        "portfolioItems.innovativeSolutions"
      ),
      "Tech-Triumphs-Celebrating-Our-Achievements-in-IT-Solutions": t(
        "portfolioItems.techTriumphs"
      ),
      "Revolutionizing-IT-Strategies-A-Closer-Look-at-Our-Dynamic-IT-Solutions":
        t("portfolioItems.revolutionizing"),
      "Cloud-Migration-and-Integration-Project-IT-Solutions-Portfolio": t(
        "portfolioItems.cloudMigration"
      ),
      "Pioneering-Progress-Exploring-the-Evolution-and-Impact-of": t(
        "portfolioItems.pioneering"
      ),
      "Unlocking-Potential-Explore-Our-Comprehensive-IT-Portfolio": t(
        "portfolioItems.unlocking"
      ),
    };
    return titleMap[slug] || slug;
  };

  // دالة لترجمة thumbs بناءً على slug
  const getProjectThumb = (slug, thumbIndex) => {
    const thumbMap = {
      "Driving-Digital-Transformation-Explore-the-Depth-of-Our-IT Projects": {
        thumb1: t("portfolioItems.logoDesign"),
        thumb2: t("portfolioItems.finance"),
      },
      "Explore-Our-IT-Solutions": {
        thumb1: t("portfolioItems.appDesign"),
        thumb2: t("portfolioItems.public"),
      },
      "Innovative-Solutions-Showcase-the-Diversity-of-Our-IT-Portfolio": {
        thumb1: t("portfolioItems.cardDesign"),
        thumb2: t("portfolioItems.transportation"),
      },
      "Tech-Triumphs-Celebrating-Our-Achievements-in-IT-Solutions": {
        thumb1: t("portfolioItems.webDesign"),
        thumb2: t("portfolioItems.logistic"),
      },
      "Revolutionizing-IT-Strategies-A-Closer-Look-at-Our-Dynamic-IT-Solutions":
        {
          thumb1: t("portfolioItems.webDesign"),
          thumb2: t("portfolioItems.fusion"),
        },
      "Cloud-Migration-and-Integration-Project-IT-Solutions-Portfolio": {
        thumb1: t("portfolioItems.webDesign"),
        thumb2: t("portfolioItems.energy"),
      },
      "Pioneering-Progress-Exploring-the-Evolution-and-Impact-of": {
        thumb1: t("portfolioItems.webDesign"),
        thumb2: t("portfolioItems.health"),
      },
      "Unlocking-Potential-Explore-Our-Comprehensive-IT-Portfolio": {
        thumb1: t("portfolioItems.webDesign"),
        thumb2: t("portfolioItems.industry"),
      },
    };
    return thumbMap[slug]?.[thumbIndex] || "";
  };

  const filteredProjects =
    activeFilter === "all"
      ? Project.slice(9, 18)
      : Project.slice(9, 18).filter(
          (project) => project.category === activeFilter
        );

  return (
    <Fragment>
      <Header />
      <main className="page_content about-page">
        <PageTitle
          pageTitle={t("portfolio.ourPortfolio")}
          pagesub={t("portfolio.portfolio")}
          pageTop={t("portfolio.our")}
        />
        <section className="portfolio_section section_space bg-light">
          <div className="container">
            <div className="filter_elements_nav">
              <ul className="unordered_list justify-content-center">
                <li
                  className={activeFilter === "all" ? "active" : ""}
                  onClick={() => handleFilterClick("all")}
                >
                  {t("portfolio.seeAll")}
                </li>
                <li
                  className={activeFilter === "technology" ? "active" : ""}
                  onClick={() => handleFilterClick("technology")}
                >
                  {t("portfolio.technology")}
                </li>
                <li
                  className={activeFilter === "helpdesk" ? "active" : ""}
                  onClick={() => handleFilterClick("helpdesk")}
                >
                  {t("portfolio.helpdesk")}
                </li>
                <li
                  className={activeFilter === "analysis" ? "active" : ""}
                  onClick={() => handleFilterClick("analysis")}
                >
                  {t("portfolio.analysis")}
                </li>
                <li
                  className={activeFilter === "marketing" ? "active" : ""}
                  onClick={() => handleFilterClick("marketing")}
                >
                  {t("portfolio.marketing")}
                </li>
              </ul>
            </div>
            <div className="filter_elements_wrapper row">
              {filteredProjects.map((project, prj) => (
                <div className="col-lg-6" key={prj}>
                  <div className="portfolio_block portfolio_layout_2">
                    <div className="portfolio_image">
                      <Link
                        onClick={ClickHandler}
                        className="portfolio_image_wrap bg-light"
                        href={"/portfolio_details/[slug]"}
                        as={`/portfolio_details/${project.slug}`}
                      >
                        <Image
                          src={project.pImg}
                          alt={getProjectTitle(project.slug)}
                        />
                      </Link>
                    </div>
                    <div className="portfolio_content">
                      <h3 className="portfolio_title">
                        <Link
                          onClick={ClickHandler}
                          href={"/portfolio_details/[slug]"}
                          as={`/portfolio_details/${project.slug}`}
                        >
                          {getProjectTitle(project.slug)}
                        </Link>
                      </h3>
                      <ul className="category_list unordered_list">
                        <li>
                          <Link
                            onClick={ClickHandler}
                            href={"/portfolio_details/[slug]"}
                            as={`/portfolio_details/${project.slug}`}
                          >
                            <i className="fa-solid fa-tags"></i>{" "}
                            {getProjectThumb(project.slug, "thumb1")}
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={ClickHandler}
                            href={"/portfolio_details/[slug]"}
                            as={`/portfolio_details/${project.slug}`}
                          >
                            <i className="fa-solid fa-building"></i>{" "}
                            {getProjectThumb(project.slug, "thumb2")}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default PortfolioPage;
