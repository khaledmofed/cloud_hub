import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const LanguageSwitcher = () => {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;
  const isArabic = locale === "ar";

  const handleLanguageChange = (newLocale) => {
    // تحديث dir و lang فوراً قبل الانتقال
    if (typeof document !== "undefined") {
      const dir = newLocale === "ar" ? "rtl" : "ltr";
      document.documentElement.setAttribute("dir", dir);
      document.documentElement.setAttribute("lang", newLocale);

      // إضافة/إزالة class للـ body
      if (newLocale === "ar") {
        document.body.classList.add("rtl");
        document.body.classList.remove("ltr");
      } else {
        document.body.classList.add("ltr");
        document.body.classList.remove("rtl");
      }
    }
    // الانتقال إلى اللغة الجديدة
    router.push({ pathname, query }, asPath, {
      locale: newLocale,
      scroll: false,
    });
  };

  // تحديد اللغة المعاكسة
  const oppositeLocale = isArabic ? "en" : "ar";
  const oppositeFlag = isArabic ? "/images/flag/en.png" : "/images/flag/ar.png";
  const oppositeLabel = isArabic ? "Switch to English" : "Switch to Arabic";
  const oppositeAlt = isArabic ? "English" : "Arabic";

  return (
    <div className="language_switcher_toggle">
      <button
        className="language_toggle_btn"
        onClick={() => handleLanguageChange(oppositeLocale)}
        type="button"
        aria-label={oppositeLabel}
      >
        <Image
          src={oppositeFlag}
          alt={oppositeAlt}
          width={30}
          height={30}
          className="flag_image"
        />
      </button>

      <style jsx>{`
        .language_switcher_toggle {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .language_toggle_btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border: none;
          border-radius: 50%;
          background: #f5f5f5;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
          position: relative;
        }

        .language_toggle_btn:hover {
          background: #e9e9e9;
          transform: scale(1.05);
        }

        .flag_image {
          width: 24px;
          height: 24px;
          object-fit: cover;
          border-radius: 50%;
        }

        @media (max-width: 768px) {
          .language_toggle_btn {
            width: 36px;
            height: 36px;
          }

          .flag_image {
            width: 20px;
            height: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default LanguageSwitcher;
