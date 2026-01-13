import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Link from "next/link";
import { Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Project from "../../api/project";

const ProjectSection = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  // دالة للحصول على عنوان المشروع بناءً على اللغة
  const getProjectTitle = (project) => {
    if (!project) return "";
    if (router.locale === "ar") {
      return (
        project.title_ar ||
        project.title_en ||
        getProjectTitleBySlug(project.slug)
      );
    }
    return (
      project.title_en ||
      project.title_ar ||
      getProjectTitleBySlug(project.slug)
    );
  };

  // دالة لترجمة عنوان المشروع بناءً على slug (fallback)
  const getProjectTitleBySlug = (slug) => {
    const titleMap = {
      "Mobile-App-Design": t("portfolioItems.mobileAppDesign"),
      "TOEFL-Coaching": t("portfolioItems.toeflCoaching"),
      "Dashboard-Design": t("portfolioItems.dashboardDesign"),
    };
    return titleMap[slug] || slug;
  };

  // دالة لترجمة sub بناءً على slug
  const getProjectSub = (project) => {
    if (!project || !project.slug) return "";
    const subMap = {
      "Mobile-App-Design": t("portfolioItems.appDesign"),
      "TOEFL-Coaching": "",
      "Dashboard-Design": t("portfolioItems.webDesign"),
    };
    return subMap[project.slug] || project.sub || "";
  };

  const displayedProjects = Project && Project.length > 0 ? Project : [];

  // المشاريع الستة الأخيرة للعرض في grid
  const gridProjects = displayedProjects.slice(-7);

  return (
    <section className="portfolio_section xb-hidden section_space">
      <div className="container">
        <div className="heading_block">
          <div className="row align-items-end">
            <div className="col-lg-7">
              <div className="heading_focus_text">
                <span className="badge bg-secondary text-white">
                  {t("projects.crafting")}
                </span>
                {t("projects.successWith")} {t("projects.project")} 😍
              </div>
              <h2 className="heading_text">{t("projects.recentBestWorks")}</h2>
              <p className="heading_description mb-0">
                {t("projects.description")}
              </p>
            </div>
            <div className="col-lg-5 d-none d-lg-flex justify-content-end">
              <Link
                onClick={ClickHandler}
                href="/portfolio"
                className="btn btn-primary"
              >
                <span className="btn_label" data-text={t("projects.allWorks")}>
                  {t("projects.allWorks")}
                </span>
                <span className="btn_icon">
                  <i className="fa-solid fa-arrow-up-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio_carousel">
        <Swiper
          key={router.locale}
          modules={[Pagination, A11y, Autoplay]}
          slidesPerView={1}
          loop={true}
          spaceBetween={30}
          allowTouchMove={true}
          centeredSlides={true}
          pagination={{ clickable: true }}
          speed={400}
          parallax={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          dir={router.locale === "ar" ? "rtl" : "ltr"}
          breakpoints={{
            1025: {
              slidesPerView: 2,
            },
          }}
        >
          {displayedProjects.map((project) => (
            <SwiperSlide key={project.Id}>
              <div className="portfolio_block">
                <div className="portfolio_image">
                  <Link
                    onClick={ClickHandler}
                    className="portfolio_image_wrap bg-light"
                    href={project.slug}
                    target="_blank"
                    // as={`/portfolio_details/${project.slug}`}
                  >
                    <Image
                      src={project.pImg}
                      alt={getProjectTitle(project)}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </Link>
                </div>
                <div className="portfolio_content">
                  <h3 className="portfolio_title">
                    <Link
                      onClick={ClickHandler}
                      // href={"/portfolio_details/[slug]"}
                      // as={`/portfolio_details/${project.slug}`}
                      href={project.slug}
                      target="_blank"
                    >
                      {getProjectTitle(project)}
                    </Link>
                  </h3>
                  <ul className="category_list unordered_list">
                    {getProjectSub(project) && (
                      <li>
                        <Link
                          // onClick={ClickHandler}
                          // href={"/portfolio_details/[slug]"}
                          // as={`/portfolio_details/${project.slug}`}
                          href={project.slug}
                          target="_blank"
                        >
                          {getProjectSub(project)}
                        </Link>
                      </li>
                    )}
                  </ul>
                  <Link
                    // onClick={ClickHandler}
                    className="btn btn-outline-light"
                    // href={"/portfolio_details/[slug]"}
                    // as={`/portfolio_details/${project.slug}`}
                    href={project.slug}
                    target="_blank"
                  >
                    <span
                      className="btn_label"
                      data-text={t("projects.explore")}
                    >
                      {t("projects.explore")}
                    </span>
                    <span className="btn_icon">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="container text-center d-block mt-5">
        <div className="row portfolio_carousel_home">
          {gridProjects.map((project) => (
            <div key={project.Id} className="col-lg-6 col-md-6 col-sm-6">
              <div className="details_item_image m-0">
                <Link
                  onClick={ClickHandler}
                  href={project.slug}
                  target={project.slug !== "#" ? "_blank" : undefined}
                >
                  <Image
                    src={project.pImg}
                    alt={getProjectTitle(project)}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container text-center d-block d-lg-none">
        <div className="btns_group pb-0">
          <Link
            onClick={ClickHandler}
            className="btn btn-primary"
            href="/portfolio"
          >
            <span className="btn_label" data-text={t("projects.allWorks")}>
              {t("projects.allWorks")}
            </span>
            <span className="btn_icon">
              <i className="fa-solid fa-arrow-up-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
