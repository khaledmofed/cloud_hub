import React, { Fragment, useState } from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

const getMenus = (t) => [
  {
    id: 1,
    title: t("nav.home"),
    link: "/",
  },
  {
    id: 2,
    title: t("nav.about"),
    link: "/about",
  },
  {
    id: 3,
    title: t("nav.portfolio"),
    link: "/portfolio",
  },
  {
    id: 4,
    title: t("nav.services"),
    link: "/service",
    submenu: [
      {
        id: 41,
        title: t("services.allServices"),
        link: "/service",
      },
      {
        id: 42,
        title: t("services.itManagement"),
        link: "/service-single/IT-Management-Services",
      },
      {
        id: 43,
        title: t("services.dataTracking"),
        link: "/service-single/Data-Tracking-and-Security",
      },
      {
        id: 44,
        title: t("services.websiteDev"),
        link: "/service-single/IT-Management-Services",
      },
      {
        id: 45,
        title: t("services.crmSolutions"),
        link: "/service-single/IT-Management-Services",
      },
      {
        id: 46,
        title: t("services.uiuxDesign"),
        link: "/service-single/IT-Management-Services",
      },
      {
        id: 47,
        title: t("services.technologySolution"),
        link: "/service-single/IT-Management-Services",
      },
      {
        id: 48,
        title: t("services.softwareDev"),
        link: "/service-single/IT-Management-Services",
      },
    ],
  },
  {
    id: 5,
    title: t("nav.pricing"),
    link: "/pricing",
  },
  {
    id: 6,
    title: t("nav.contact"),
    link: "/contact",
  },
];

const MobileMenu = () => {
  const { t } = useTranslation("common");
  const [openId, setOpenId] = useState(0);
  const menus = getMenus(t);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <Fragment>
      <ul className="main_menu_list clearfix">
        {menus.map((item, mn) => {
          return (
            <li className={item.id === openId ? "active" : null} key={mn}>
              {item.submenu ? (
                <Fragment>
                  <p
                    onClick={() => setOpenId(item.id === openId ? 0 : item.id)}
                  >
                    {item.title}
                    <i
                      className={
                        item.id === openId
                          ? "fa fa-angle-up"
                          : "fa fa-angle-down"
                      }
                    ></i>
                  </p>
                  <ul
                    className="subMenu"
                    style={{
                      display: item.id === openId ? "block" : "none",
                      transition: "all 0.3s ease-in-out",
                    }}
                  >
                    {item.submenu.map((submenu, i) => {
                      return (
                        <li key={i}>
                          <Link
                            onClick={ClickHandler}
                            className="active"
                            href={submenu.link}
                          >
                            {submenu.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </Fragment>
              ) : (
                <Link className="active" href={item.link}>
                  {item.title}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
      <div
        className="mobile-language-switcher"
        style={{
          padding: "15px 20px",
          borderTop: "1px solid #eee",
          backgroundColor: "#fff",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          <span
            style={{
              fontSize: "14px",
              color: "#333",
              fontWeight: "500",
            }}
          >
            {t("common.language")}
          </span>
          <div style={{ flex: "1", maxWidth: "150px" }}>
            <LanguageSwitcher />
          </div>
        </div>
        <style jsx>{`
          .mobile-language-switcher :global(.language_switcher_btn) {
            background: #f5f5f5 !important;
            border: 1px solid #ddd !important;
            color: #333 !important;
            width: 100%;
          }
          .mobile-language-switcher :global(.language_switcher_btn:hover) {
            background: #e9e9e9 !important;
            border-color: #bbb !important;
          }
        `}</style>
      </div>
    </Fragment>
  );
};

export default MobileMenu;
