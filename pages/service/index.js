import React, { Fragment } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Link from 'next/link'
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import srImg from '/public/images/services/service_image_8.webp' 
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import WhyUs from '../about/WhyUs';
import Image from 'next/image';
import SEO from '../../components/SEO/SEO';
import { getBreadcrumbSchema } from '../../utils/seoSchemas';

const ServicePage = (props) => {
    const { t } = useTranslation('common');
    const { t: tSeo, i18n } = useTranslation('seo');
    const locale = i18n?.language || 'ar';
    const isAr = locale === 'ar';

    const breadcrumbs = getBreadcrumbSchema(
        [{ name: isAr ? 'الخدمات' : 'Services', url: '/service' }],
        locale
    );

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <Fragment>
            <SEO
                title={tSeo('services.title')}
                description={tSeo('services.description')}
                keywords={tSeo('services.keywords')}
                locale={locale}
                path="/service"
                ogImage="/images/services/service_image_8.webp"
                structuredData={breadcrumbs}
            />
            <Header />
            <main className="page_content about-page">
                <PageTitle pageTitle={t('servicePage.ourServices')} pagesub={t('servicePage.services')} pageTop={t('servicePage.ourMain')} />
                <section className="about_section section_space bg-light">
                    <div className="container">
                        <div className="row align-items-center justify-content-lg-between">
                            <div className="col-lg-5 order-lg-last">
                                <div className="team_cartoon_image">
                                    <Image src={srImg} alt={t('servicePage.serviceCartoon')}/>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="about_content">
                                    <div className="heading_block">
                                        <div className="heading_focus_text">
                                            {t('servicePage.weAre')}
                                            <span className="badge bg-secondary text-white">{t('servicePage.itGuidance')}</span>
                                        </div>
                                        <h2 className="heading_text">
                                            {t('servicePage.tailoredSolutions')}
                                        </h2>
                                        <p className="heading_description mb-0">
                                            {t('servicePage.description')}
                                        </p>
                                    </div>
                                    <Link onClick={ClickHandler} href={'/contact'} className="btn">
                                        <span className="btn_label" data-text={t('servicePage.talkToExpert')}>{t('servicePage.talkToExpert')}</span>
                                        <span className="btn_icon">
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <ServiceSection />
                <div className="pt-130"></div>
                <WhyUs />
            </main>
            <CtaSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'seo'])),
    },
  };
}

export default ServicePage;
