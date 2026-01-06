import "react-toastify/dist/ReactToastify.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-modal-video/scss/modal-video.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/animate.css'
import '../styles/fontawesome.css';
import '../styles/themify-icons.css';
import '../styles/animate.css';
import '../styles/sass/style.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { appWithTranslation } from 'next-i18next';
import Head from "next/head";
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { locale } = router;

  useEffect(() => {
    // تحديث dir و lang في document.documentElement عند تغيير اللغة
    const dir = locale === 'ar' ? 'rtl' : 'ltr';
    const lang = locale || 'en';
    
    if (typeof document !== 'undefined') {
      // تحديث HTML element
      document.documentElement.setAttribute('dir', dir);
      document.documentElement.setAttribute('lang', lang);
      
      // إضافة/إزالة class للـ body حسب اللغة
      if (locale === 'ar') {
        document.body.classList.add('rtl');
        document.body.classList.remove('ltr');
      } else {
        document.body.classList.add('ltr');
        document.body.classList.remove('rtl');
      }
      
      // إضافة class للـ html element أيضاً
      if (locale === 'ar') {
        document.documentElement.classList.add('rtl');
        document.documentElement.classList.remove('ltr');
      } else {
        document.documentElement.classList.add('ltr');
        document.documentElement.classList.remove('rtl');
      }

      // تحميل خط Tajawal ديناميكياً عند اختيار العربية
      if (locale === 'ar') {
        const linkId = 'tajawal-font';
        if (!document.getElementById(linkId)) {
          const link = document.createElement('link');
          link.id = linkId;
          link.rel = 'stylesheet';
          link.href = 'https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800&display=swap';
          document.head.appendChild(link);
        }
      }
    }
  }, [locale]);

  return (
    <div>
      <Head>
        <title>Cloud Hub | Integrated IT & Cloud Solutions</title>
        <meta name="description" content="Cloud Hub is a comprehensive IT solutions platform delivering web and mobile development, cloud infrastructure, DevOps, systems engineering, hosting, and server management." />
        <meta name="keywords" content="IT solutions, cloud infrastructure, web development, mobile development, DevOps, systems engineering, hosting, server management" />
        <meta property="og:title" content="Cloud Hub | Integrated IT & Cloud Solutions" />
        <meta property="og:description" content="Cloud Hub is a comprehensive IT solutions platform delivering web and mobile development, cloud infrastructure, DevOps, systems engineering, hosting, and server management." />
      </Head>
      <Component {...pageProps} />
    </div>

  )
}

export default appWithTranslation(MyApp)
