import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const WhatsAppButton = () => {
  const { t } = useTranslation("common");
  const router = useRouter();

  // دالة للحصول على اسم الخدمة من slug
  const getServiceTitle = (slug) => {
    const titleMap = {
      "Hosting-and-Domains-Services": t("serviceItems.hostingDomains"),
      "Digital-Transformation": t("serviceItems.digitalTransformation"),
      "Website-Development": t("serviceItems.websiteDev"),
      "Cybersecurity-Services": t("serviceItems.cybersecurity"),
      "Mobile-App-Development": t("serviceItems.mobileAppDev"),
      "IT-Management-Services": t("serviceItems.itManagement"),
      "Data-Tracking-and-Security": t("serviceItems.dataTracking"),
      "Modern-Technology-Solution": t("serviceItems.modernTech"),
      "UI-UX-Design-Services": t("serviceItems.uiuxDesign"),
      "Custom Software Development": t("serviceItems.customSoftware"),
    };
    return titleMap[slug] || null;
  };

  // التحقق إذا كنا في صفحة خدمة
  const isServicePage = router.pathname === "/service-single/[slug]";
  const serviceSlug = router.query?.slug;
  const serviceName = isServicePage && serviceSlug ? getServiceTitle(serviceSlug) : null;

  // بناء الرسالة
  const getWhatsAppMessage = () => {
    const baseMessage = t("footer.whatsappMessage");
    if (serviceName) {
      // إذا كان في صفحة خدمة، أضف اسم الخدمة للرسالة
      return `${baseMessage}\n\n${t("footer.serviceInquiry")}: ${serviceName}`;
    }
    return baseMessage;
  };

  return (
    <div className="whatsapp_button">
      <Link
        href={`https://wa.me/966599555526?text=${encodeURIComponent(
          getWhatsAppMessage()
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp_link"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </Link>
    </div>
  );
};

export default WhatsAppButton;
