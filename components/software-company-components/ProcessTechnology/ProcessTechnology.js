import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import shape1 from "/public/images/shapes/shape_line_2.svg";
import shape2 from "/public/images/shapes/shape_line_3.svg";
import shape3 from "/public/images/shapes/shape_line_4.svg";
import shape4 from "/public/images/shapes/shape_space_3.svg";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import TechnologySection from "../TechnologySection/TechnologySection";
import Testimonial from "../Testimonial/Testimonial";
import Image from "next/image";

const ProcessTechnology = (props) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const serviceSlug = props?.serviceSlug || router?.query?.slug;

  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  // دالة للحصول على محتوى العملية حسب الخدمة
  const getProcessContent = (slug) => {
    const baseSteps = {
      step1: t("serviceSingle.discoveryPhase"),
      step2: t("serviceSingle.designDevelopment"),
      step3: t("serviceSingle.testingQA"),
      step4: t("serviceSingle.deployment"),
      step5: t("serviceSingle.maintenance"),
    };

    // محتوى خاص بخدمة Website-Development
    if (slug === "Website-Development") {
      return {
        title: t("serviceSingle.workingProcess"),
        subtitle: t("serviceSingle.ourApproach"),
        steps: [
          {
            id: "1",
            title: baseSteps.step1,
            description: t("serviceSingle.discoveryPhaseDesc"),
          },
          {
            id: "2",
            title: baseSteps.step2,
            description: t("serviceSingle.designDevelopmentDesc"),
          },
          {
            id: "3",
            title: baseSteps.step3,
            description: t("serviceSingle.testingQADesc"),
          },
          {
            id: "4",
            title: baseSteps.step4,
            description: t("serviceSingle.deploymentDesc"),
          },
          {
            id: "5",
            title: baseSteps.step5,
            description: t("serviceSingle.maintenanceDesc"),
          },
        ],
      };
    }

    // محتوى خاص بخدمة Hosting-and-Domains-Services
    if (slug === "Hosting-and-Domains-Services") {
      return {
        title: t("serviceSingle.workingProcess"),
        subtitle: t("serviceSingle.ourApproach"),
        steps: [
          {
            id: "1",
            title: baseSteps.step1,
            description: t("serviceSingle.hostingDiscoveryPhaseDesc"),
          },
          {
            id: "2",
            title: baseSteps.step2,
            description: t("serviceSingle.hostingDesignDevelopmentDesc"),
          },
          {
            id: "3",
            title: baseSteps.step3,
            description: t("serviceSingle.hostingTestingQADesc"),
          },
          {
            id: "4",
            title: baseSteps.step4,
            description: t("serviceSingle.hostingDeploymentDesc"),
          },
          {
            id: "5",
            title: baseSteps.step5,
            description: t("serviceSingle.hostingMaintenanceDesc"),
          },
        ],
      };
    }

    // محتوى خاص بخدمة Digital-Transformation
    if (slug === "Digital-Transformation") {
      return {
        title: t("serviceSingle.workingProcess"),
        subtitle: t("serviceSingle.ourApproach"),
        steps: [
          {
            id: "1",
            title: baseSteps.step1,
            description: t(
              "serviceSingle.digitalTransformationDiscoveryPhaseDesc"
            ),
          },
          {
            id: "2",
            title: baseSteps.step2,
            description: t(
              "serviceSingle.digitalTransformationDesignDevelopmentDesc"
            ),
          },
          {
            id: "3",
            title: baseSteps.step3,
            description: t("serviceSingle.digitalTransformationTestingQADesc"),
          },
          {
            id: "4",
            title: baseSteps.step4,
            description: t("serviceSingle.digitalTransformationDeploymentDesc"),
          },
          {
            id: "5",
            title: baseSteps.step5,
            description: t(
              "serviceSingle.digitalTransformationMaintenanceDesc"
            ),
          },
        ],
      };
    }

    // محتوى خاص بخدمة Cybersecurity-Services
    if (slug === "Cybersecurity-Services") {
      return {
        title: t("serviceSingle.workingProcess"),
        subtitle: t("serviceSingle.ourApproach"),
        steps: [
          {
            id: "1",
            title: baseSteps.step1,
            description: t("serviceSingle.cybersecurityDiscoveryPhaseDesc"),
          },
          {
            id: "2",
            title: baseSteps.step2,
            description: t("serviceSingle.cybersecurityDesignDevelopmentDesc"),
          },
          {
            id: "3",
            title: baseSteps.step3,
            description: t("serviceSingle.cybersecurityTestingQADesc"),
          },
          {
            id: "4",
            title: baseSteps.step4,
            description: t("serviceSingle.cybersecurityDeploymentDesc"),
          },
          {
            id: "5",
            title: baseSteps.step5,
            description: t("serviceSingle.cybersecurityMaintenanceDesc"),
          },
        ],
      };
    }

    // محتوى خاص بخدمة Mobile-App-Development
    if (slug === "Mobile-App-Development") {
      return {
        title: t("serviceSingle.workingProcess"),
        subtitle: t("serviceSingle.ourApproach"),
        steps: [
          {
            id: "1",
            title: baseSteps.step1,
            description: t("serviceSingle.mobileAppDiscoveryPhaseDesc"),
          },
          {
            id: "2",
            title: baseSteps.step2,
            description: t("serviceSingle.mobileAppDesignDevelopmentDesc"),
          },
          {
            id: "3",
            title: baseSteps.step3,
            description: t("serviceSingle.mobileAppTestingQADesc"),
          },
          {
            id: "4",
            title: baseSteps.step4,
            description: t("serviceSingle.mobileAppDeploymentDesc"),
          },
          {
            id: "5",
            title: baseSteps.step5,
            description: t("serviceSingle.mobileAppMaintenanceDesc"),
          },
        ],
      };
    }

    // محتوى افتراضي للخدمات الأخرى
    return {
      title: t("serviceSingle.workingProcess"),
      subtitle: t("serviceSingle.ourApproach"),
      steps: [
        {
          id: "1",
          title: baseSteps.step1,
          description: t("serviceSingle.discoveryPhaseDesc"),
        },
        {
          id: "2",
          title: baseSteps.step2,
          description: t("serviceSingle.designDevelopmentDesc"),
        },
        {
          id: "3",
          title: baseSteps.step3,
          description: t("serviceSingle.testingQADesc"),
        },
        {
          id: "4",
          title: baseSteps.step4,
          description: t("serviceSingle.deploymentDesc"),
        },
        {
          id: "5",
          title: baseSteps.step5,
          description: t("serviceSingle.maintenanceDesc"),
        },
      ],
    };
  };

  const processContent = getProcessContent(serviceSlug);

  return (
    <section className="process_technology_review_section bg-light section_decoration">
      <div className="container">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-lg-6">
            <div className="heading_block">
              <div
                className="heading_focus_text has_underline d-inline-flex"
                style={{
                  backgroundImage: `url(${"/images/shapes/shape_title_under_line.svg"})`,
                }}
              >
                {processContent.title}
              </div>
              <h2 className="heading_text mb-0">
                {processContent.subtitle.split(" ").slice(0, -1).join(" ")}{" "}
                <mark>{processContent.subtitle.split(" ").slice(-1)[0]}</mark>
              </h2>
            </div>
            <Accordion
              open={open}
              toggle={toggle}
              className="accordion"
              id="service_process_faq"
            >
              {processContent.steps.map((step) => (
                <AccordionItem key={step.id} className="accordion-item">
                  <AccordionHeader targetId={step.id}>
                    {step.title}
                  </AccordionHeader>
                  <AccordionBody accordionId={step.id} className="acc_body">
                    <p className="m-0">{step.description}</p>
                  </AccordionBody>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="col-lg-5">
            <Accordion
              open={open}
              toggle={toggle}
              className="accordion"
              id="service_process_faq"
            >
              <ul className="content_layer_group unordered_list_block text-center">
                {processContent.steps.map((step) => (
                  <li key={step.id}>
                    <AccordionHeader targetId={step.id}>
                      <span>{step.title.replace(/^\d+\.\s*/, "")}</span>
                    </AccordionHeader>
                  </li>
                ))}
              </ul>
            </Accordion>
          </div>
        </div>
        <TechnologySection />
        {/* <Testimonial /> */}
      </div>

      <div className="decoration_item shape_image_1">
        <Image src={shape1} alt="Cloud Hub Shape" />
      </div>
      <div className="decoration_item shape_image_2">
        <Image src={shape2} alt="Cloud Hub Shape" />
      </div>
      <div className="decoration_item shape_image_3">
        <Image src={shape3} alt="Cloud Hub Shape" />
      </div>
      <div className="decoration_item shape_image_4">
        <Image src={shape4} alt="Cloud Hub Shape" />
      </div>
    </section>
  );
};
export default ProcessTechnology;
