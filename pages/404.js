import React, { Fragment } from 'react';
import Header from '../components/header/Header';
import Link from 'next/link';
import PageTitle from '../components/pagetitle/PageTitle';
import Scrollbar from '../components/scrollbar/scrollbar';
import Footer from '../components/footer/Footer';
import CtaSection from '../components/CtaSection/CtaSection';
import SEO from '../components/SEO/SEO';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const Custom404 = () => {
    const { t, i18n } = useTranslation('common');
    const locale = i18n?.language || 'ar';
    const isAr = locale === 'ar';

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <Fragment>
            <SEO
                title={isAr ? "404 - الصفحة غير موجودة | محور الحوسبة" : "404 - Page Not Found | Cloud Hub"}
                description={isAr ? "عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها." : "Sorry, the page you are looking for does not exist."}
                locale={locale}
                path="/404"
                noIndex={true}
            />
            <Header />
            <main className="page_content about-page">
                <PageTitle pageTitle={'404'} pagesub={isAr ? 'خطأ 🙂' : 'Error 🙂'} pageTop={'404'} />
                <div className="error-page">
                    <div className="container not-found-content">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <div className="contant-wrapper text-center">
                                    <div className="error-page__text">
                                        <h2>404</h2>
                                    </div>
                                    <div className="error-page__content mb-50">
                                        <h2>{isAr ? "عذراً، لم نتمكن من العثور على هذه الصفحة!" : "Hi Sorry We Can’t Find That Page!"}</h2>
                                        <p>{isAr ? "يبدو أن الصفحة التي تبحث عنها غير موجودة أو تم نقلها." : "Oops! The page you are looking for does not exist. It might have been moved or deleted."}</p>

                                        <div className="error-page-button">
                                            <Link onClick={ClickHandler} href="/" className="btn">
                                                <span className="btn_label" data-text={isAr ? "العودة للرئيسية" : "Go Back Home"}>
                                                    {isAr ? "العودة للرئيسية" : "Go Back Home"}
                                                </span>
                                                <span className="btn_icon">
                                                    <i className="fa-solid fa-arrow-up-right"></i>
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <CtaSection />
            </main>
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale || 'ar', ['common', 'seo'])),
        },
    };
}

export default Custom404;
