import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";

import cnIcon1 from "/public/images/icons/icon_php.svg";
import cnIcon2 from "/public/images/icons/icon_javascript.svg";
import cnIcon3 from "/public/images/case/icon_elephent.svg";
import cnIcon4 from "/public/images/icons/icon_swift.svg";
import cnIcon5 from "/public/images/icons/icon_typescript.svg";
import cnIcon6 from "/public/images/icons/icon_python.svg";
import cnIcon7 from "/public/images/icons/icon_g318.svg";
import cnIcon8 from "/public/images/icons/icon_java.svg";
import cnIcon9 from "/public/images/icons/icon_ruby.svg";
import cnIcon10 from "/public/images/icons/icon_c_plus.svg";
import cnIcon11 from "/public/images/icons/icon_react_js.svg";
import cnIcon12 from "/public/images/icons/icon_laravel.svg";
import wpIcon from "/public/images/icons/wp.png";
import nextjsIcon from "/public/images/icons/nextjs.webp";
import flutterIcon from "/public/images/icons/fluter.webp";
import androidIcon from "/public/images/icons/android.svg";
import iosIcon from "/public/images/icons/ios.svg";
import Image from "next/image";

const TechnologyList = [
  // Web Platform
  {
    Id: "1",
    sIcon: cnIcon1,
    title: "PHP",
    category: "web",
  },
  {
    Id: "2",
    sIcon: cnIcon2,
    title: "JavaScript",
    category: "web",
  },
  {
    Id: "5",
    sIcon: cnIcon5,
    title: "Typescript",
    category: "web",
  },
  {
    Id: "11",
    sIcon: cnIcon11,
    title: "React Js",
    category: "web",
  },
  {
    Id: "12",
    sIcon: cnIcon12,
    title: "Laravel",
    category: "web",
  },
  {
    Id: "13",
    sIcon: wpIcon,
    title: "WordPress",
    category: "web",
  },
  {
    Id: "14",
    sIcon: nextjsIcon,
    title: "Next.js",
    category: "web",
  },
  // Databases
  {
    Id: "3",
    sIcon: cnIcon3,
    title: "PostgreSQL",
    category: "database",
  },
  {
    Id: "6",
    sIcon: cnIcon6,
    title: "Python",
    category: "database",
  },
  {
    Id: "8",
    sIcon: cnIcon8,
    title: "Java",
    category: "database",
  },
  // Cloud & DevOps
  {
    Id: "7",
    sIcon: cnIcon7,
    title: "G318",
    category: "cloud",
  },
  {
    Id: "9",
    sIcon: cnIcon9,
    title: "Ruby",
    category: "cloud",
  },
  {
    Id: "10",
    sIcon: cnIcon10,
    title: "C++",
    category: "cloud",
  },
  // Mobile Apps
  {
    Id: "4",
    sIcon: cnIcon4,
    title: "Swift",
    category: "mobile",
  },
  {
    Id: "15",
    sIcon: flutterIcon,
    title: "Flutter",
    category: "mobile",
  },
  {
    Id: "16",
    sIcon: androidIcon,
    title: "Android",
    category: "mobile",
  },
  {
    Id: "17",
    sIcon: iosIcon,
    title: "iOS",
    category: "mobile",
  },
  // Other Frameworks - إضافة جميع التقنيات الأخرى
  {
    Id: "18",
    sIcon: cnIcon2,
    title: "JavaScript",
    category: "other",
  },
  {
    Id: "19",
    sIcon: cnIcon5,
    title: "Typescript",
    category: "other",
  },
  {
    Id: "20",
    sIcon: cnIcon1,
    title: "PHP",
    category: "other",
  },
  {
    Id: "21",
    sIcon: cnIcon11,
    title: "React Js",
    category: "other",
  },
  {
    Id: "22",
    sIcon: cnIcon12,
    title: "Laravel",
    category: "other",
  },
  {
    Id: "23",
    sIcon: cnIcon6,
    title: "Python",
    category: "other",
  },
  {
    Id: "24",
    sIcon: cnIcon8,
    title: "Java",
    category: "other",
  },
  {
    Id: "25",
    sIcon: cnIcon9,
    title: "Ruby",
    category: "other",
  },
  {
    Id: "26",
    sIcon: cnIcon10,
    title: "C++",
    category: "other",
  },
];

const TechnologySection = (props) => {
  const { t } = useTranslation("common");
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  // دالة للحصول على التقنيات حسب التبويب
  const getTechnologiesByTab = (tabId) => {
    switch (tabId) {
      case "1": // Web Platform
        return TechnologyList.filter((tech) => tech.category === "web");
      case "2": // Databases
        return TechnologyList.filter((tech) => tech.category === "database");
      case "3": // Cloud & DevOps
        return TechnologyList.filter((tech) => tech.category === "cloud");
      case "4": // Mobile Apps
        return TechnologyList.filter((tech) => tech.category === "mobile");
      case "5": // Other Frameworks
        return TechnologyList.filter((tech) => tech.category === "other");
      default:
        return TechnologyList;
    }
  };

  return (
    <div className="section_space">
      <div className="heading_block text-center">
        <div
          className="heading_focus_text has_underline d-inline-flex"
          style={{
            backgroundImage: `url(${"/images/shapes/shape_title_under_line.svg"})`,
          }}
        >
          {t("serviceSingle.ourTechnologies")}
        </div>
        <h2 className="heading_text mb-0">
          {t("serviceSingle.weUseTechnologies")
            .split(" ")
            .slice(0, -1)
            .join(" ")}{" "}
          <mark>
            {t("serviceSingle.weUseTechnologies").split(" ").slice(-1)[0]}
          </mark>
        </h2>
      </div>

      <div className="tab_block_wrapper">
        <Nav tabs className="nav justify-content-center">
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "1" })}
              onClick={() => {
                toggle("1");
              }}
            >
              {t("serviceSingle.webPlatform")}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "2" })}
              onClick={() => {
                toggle("2");
              }}
            >
              {t("serviceSingle.databases")}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "3" })}
              onClick={() => {
                toggle("3");
              }}
            >
              {t("serviceSingle.cloudDevOps")}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "4" })}
              onClick={() => {
                toggle("4");
              }}
            >
              {t("serviceSingle.mobileApps")}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "5" })}
              onClick={() => {
                toggle("5");
              }}
            >
              {t("serviceSingle.otherFrameworks")}
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={activeTab}>
          {["1", "2", "3", "4", "5"].map((tabId) => (
            <TabPane key={tabId} tabId={tabId}>
              <div className="web_development_technologies row justify-content-center">
                {getTechnologiesByTab(tabId).map((technology, cnt) => (
                  <div
                    className="col-lg-2 col-md-3 col-sm-4 col-6"
                    key={technology.Id || cnt}
                  >
                    <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                      <div className="iconbox_icon">
                        <Image
                          src={technology.sIcon}
                          alt={technology.title}
                          width={60}
                          height={60}
                        />
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title mb-0">
                          {technology.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabPane>
          ))}
        </TabContent>
      </div>
    </div>
  );
};

export default TechnologySection;
