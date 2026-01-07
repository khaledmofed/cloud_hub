import React, { Fragment } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Header from '../../components/header/Header';
import Project from '../../api/project';
import Link from "next/link";
import { useRouter } from 'next/router'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import psImg from '/public/images/portfolio/portfolio_details_image_1.webp'
import icon from '/public/images/icons/icon_check_3.svg'
import Image from 'next/image';


const PortfolioSinglePage = (props) => {
    const { t } = useTranslation('common');
    const router = useRouter()

    const PortfolioDetails = Project.find(item => item.slug === router.query.slug)

    // دالة لترجمة عنوان المشروع بناءً على slug
    const getProjectTitle = (slug) => {
        const titleMap = {
            'Mobile-App-Design': t('portfolioItems.mobileAppDesign'),
            'TOEFL-Coaching': t('portfolioItems.toeflCoaching'),
            'Dashboard-Design': t('portfolioItems.dashboardDesign'),
            'Astarte-Medical': t('portfolioItems.astarteMedical'),
            'CAE-Blue-Phantom': t('portfolioItems.caeBluePhantom'),
            'Liberkeys': t('portfolioItems.liberkeys'),
            'Driving-Digital-Transformation-Explore-the-Depth-of-Our-IT Projects': t('portfolioItems.drivingDigital'),
            'Explore-Our-IT-Solutions': t('portfolioItems.exploreSolutions'),
            'Innovative-Solutions-Showcase-the-Diversity-of-Our-IT-Portfolio': t('portfolioItems.innovativeSolutions'),
            'Tech-Triumphs-Celebrating-Our-Achievements-in-IT-Solutions': t('portfolioItems.techTriumphs'),
            'Revolutionizing-IT-Strategies-A-Closer-Look-at-Our-Dynamic-IT-Solutions': t('portfolioItems.revolutionizing'),
            'Cloud-Migration-and-Integration-Project-IT-Solutions-Portfolio': t('portfolioItems.cloudMigration'),
            'Pioneering-Progress-Exploring-the-Evolution-and-Impact-of': t('portfolioItems.pioneering'),
            'Unlocking-Potential-Explore-Our-Comprehensive-IT-Portfolio': t('portfolioItems.unlocking'),
        };
        return titleMap[slug] || (PortfolioDetails?.title || slug);
    };

    // دالة لترجمة thumbs بناءً على slug
    const getProjectThumb = (slug, thumbIndex) => {
        const thumbMap = {
            'Driving-Digital-Transformation-Explore-the-Depth-of-Our-IT Projects': {
                thumb1: t('portfolioItems.logoDesign'),
                thumb2: t('portfolioItems.finance'),
            },
            'Explore-Our-IT-Solutions': {
                thumb1: t('portfolioItems.appDesign'),
                thumb2: t('portfolioItems.public'),
            },
            'Innovative-Solutions-Showcase-the-Diversity-of-Our-IT-Portfolio': {
                thumb1: t('portfolioItems.cardDesign'),
                thumb2: t('portfolioItems.transportation'),
            },
            'Tech-Triumphs-Celebrating-Our-Achievements-in-IT-Solutions': {
                thumb1: t('portfolioItems.webDesign'),
                thumb2: t('portfolioItems.logistic'),
            },
            'Revolutionizing-IT-Strategies-A-Closer-Look-at-Our-Dynamic-IT-Solutions': {
                thumb1: t('portfolioItems.webDesign'),
                thumb2: t('portfolioItems.fusion'),
            },
            'Cloud-Migration-and-Integration-Project-IT-Solutions-Portfolio': {
                thumb1: t('portfolioItems.webDesign'),
                thumb2: t('portfolioItems.energy'),
            },
            'Pioneering-Progress-Exploring-the-Evolution-and-Impact-of': {
                thumb1: t('portfolioItems.webDesign'),
                thumb2: t('portfolioItems.health'),
            },
            'Unlocking-Potential-Explore-Our-Comprehensive-IT-Portfolio': {
                thumb1: t('portfolioItems.webDesign'),
                thumb2: t('portfolioItems.industry'),
            },
        };
        return thumbMap[slug]?.[thumbIndex] || '';
    };

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <Fragment>
            <Header />
            <main className="page_content about-page">
                <PageTitle pageTitle={PortfolioDetails?.title ? getProjectTitle(PortfolioDetails.slug) : ''} pagesub={t('portfolioDetails.details')} pageTop={t('portfolioDetails.portfolio')} />
                <section className="portfolio_details_section section_space bg-light">
                    <div className="container">
                        <div className="details_item_image">
                            <Image src={psImg} alt={t('portfolioDetails.portfolioItem')} />
                        </div>
                        <h2 className="details_item_title">{t('portfolioDetails.cloudMigrationTitle')}</h2>
                        <p>
                            {t('portfolioDetails.cloudMigrationDesc1')}
                        </p>
                        <p className="mb-0">
                            {t('portfolioDetails.cloudMigrationDesc2')}
                        </p>
                        <hr />
                        <ul className="portfolio_details_info_list icon_list unordered_list justify-content-lg-between mb-5">
                            <li>
                                <span className="icon_list_text">
                                    <strong className="text-dark text-uppercase">{t('portfolioDetails.services')}:</strong>
                                    {t('portfolioDetails.cloudMigration')}
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_text">
                                    <strong className="text-dark text-uppercase">{t('portfolioDetails.client')}:</strong>
                                    Cloud Hub
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_text">
                                    <strong className="text-dark text-uppercase">{t('portfolioDetails.location')}:</strong>
                                    New York,NY,USA
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_text">
                                    <strong className="text-dark text-uppercase">{t('portfolioDetails.completedDate')}:</strong>
                                    20-12-2024
                                </span>
                            </li>
                        </ul>

                        <h3 className="details_item_info_title pt-4">{t('portfolioDetails.projectRequirement')}</h3>
                        <p>
                            {t('portfolioDetails.requirementDesc')}
                        </p>
                        <div className="row mb-4">
                            <div className="col-lg-5">
                                <ul className="icon_list unordered_list_block">
                                    <li>
                                        <span className="icon_list_icon">
                                            <Image src={icon} alt={t('portfolioDetails.checkIcon')} />
                                        </span>
                                        <span className="icon_list_text">
                                            {t('portfolioDetails.comprehensiveAssessment')}
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_icon">
                                            <Image src={icon} alt={t('portfolioDetails.checkIcon')} />
                                        </span>
                                        <span className="icon_list_text">
                                            {t('portfolioDetails.strategicMigration')}
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_icon">
                                            <Image src={icon} alt={t('portfolioDetails.checkIcon')} />
                                        </span>
                                        <span className="icon_list_text">
                                            {t('portfolioDetails.robustDataMigration')}
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_icon">
                                            <Image src={icon} alt={t('portfolioDetails.checkIcon')} />
                                        </span>
                                        <span className="icon_list_text">
                                            {t('portfolioDetails.infrastructurePreparation')}
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-5">
                                <ul className="icon_list unordered_list_block">
                                    <li>
                                        <span className="icon_list_icon">
                                            <Image src={icon} alt={t('portfolioDetails.checkIcon')} />
                                        </span>
                                        <span className="icon_list_text">
                                            {t('portfolioDetails.applicationMigration')}
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_icon">
                                            <Image src={icon} alt={t('portfolioDetails.checkIcon')} />
                                        </span>
                                        <span className="icon_list_text">
                                            {t('portfolioDetails.trainingDocumentation')}
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_icon">
                                            <Image src={icon} alt={t('portfolioDetails.checkIcon')} />
                                        </span>
                                        <span className="icon_list_text">
                                            {t('portfolioDetails.infrastructurePreparation')}
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_icon">
                                            <Image src={icon} alt={t('portfolioDetails.checkIcon')} />
                                        </span>
                                        <span className="icon_list_text">
                                            {t('portfolioDetails.postMigrationSupport')}
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <h3 className="details_item_info_title pt-4">{t('portfolioDetails.solutionResult')}</h3>
                        <p>
                            {t('portfolioDetails.solutionDesc1')}
                        </p>
                        <p>
                            {t('portfolioDetails.solutionDesc2')}
                        </p>

                        <h3 className="details_item_info_title pt-5 mb-4">{t('portfolioDetails.similarProjects')}</h3>
                        <div className="row">
                            {Project.slice(10, 12).map((project, prj) => (
                                <div className="col-lg-6" key={prj}>
                                    <div className="portfolio_block portfolio_layout_2">
                                        <div className="portfolio_image">
                                            <Link onClick={ClickHandler} className="portfolio_image_wrap bg-light" href={'/portfolio_details/[slug]'} as={`/portfolio_details/${project.slug}`}>
                                                <Image src={project.pImg} alt={getProjectTitle(project.slug)} />
                                            </Link>
                                        </div>
                                        <div className="portfolio_content">
                                            <h3 className="portfolio_title">
                                                <Link onClick={ClickHandler} href={'/portfolio_details/[slug]'} as={`/portfolio_details/${project.slug}`}>
                                                    {getProjectTitle(project.slug)}
                                                </Link>
                                            </h3>
                                            <ul className="category_list unordered_list">
                                                <li><Link onClick={ClickHandler} href={'/portfolio_details/[slug]'} as={`/portfolio_details/${project.slug}`}><i className="fa-solid fa-tags"></i> {getProjectThumb(project.slug, 'thumb1')}</Link></li>
                                                <li><Link onClick={ClickHandler} href={'/portfolio_details/[slug]'} as={`/portfolio_details/${project.slug}`}><i className="fa-solid fa-building"></i> {getProjectThumb(project.slug, 'thumb2')}</Link></li>
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
    )
};

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default PortfolioSinglePage;