import React from 'react';
import { useTranslation } from 'next-i18next';
import wImg from '/public/images/about/about_image_5.webp'
import sIcon1 from '/public/images/icons/icon_check_2.svg'
import sIcon2 from '/public/images/icons/icon_leaf.svg'
import sIcon3 from '/public/images/icons/icon_box.svg'
import sIcon4 from '/public/images/icons/icon_receipt_add.svg'
import sIcon5 from '/public/images/icons/icon_monitor.svg'
import sIcon6 from '/public/images/icons/icon_microscope.svg'
import Image from 'next/image';

const getPolicy = (t) => [
    {
        title: t('aboutPage.qualityFirst'),
        icon: sIcon1,
    },
    {
        title: t('aboutPage.flexibleCooperation'),
        icon: sIcon2,
    },
    {
        title: t('aboutPage.onTimeDelivery'),
        icon: sIcon3,
    },
    {
        title: t('aboutPage.transparentCosts'),
        icon: sIcon4,
    },
    {
        title: t('aboutPage.qualifiedDevelopers'),
        icon: sIcon5,
    },
    {
        title: t('aboutPage.quickScaleUp'),
        icon: sIcon6,
    },
]


const WhyUs = (props) => {
    const { t } = useTranslation('common');
    const Policy = getPolicy(t);

    return (
        <section className="service_section section_space bg-light">
            <div className="container">
                <div className="row align-items-center justify-content-lg-between">
                    <div className="col-lg-6">
                        <div className="image_wrap">
                            <Image src={wImg} alt={t('aboutPage.aboutImageAlt')}/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="ps-lg-5">
                            <div className="heading_block">
                                <div className="heading_focus_text">
                                    <span className="badge bg-secondary text-white">{t('aboutPage.whyUs')}</span>
                                    {t('aboutPage.better')}
                                </div>
                                <h2 className="heading_text mb-0">
                                    {t('aboutPage.whyBetter')}
                                </h2>
                            </div>
                            <ul className="service_facilities_group unordered_list">
                                {Policy.map((policy, pitem) => (
                                    <li key={pitem}>
                                        <strong className="iconbox_block layout_icon_left">
                                            <span className="iconbox_icon">
                                                <Image src={policy.icon} alt={t('aboutPage.iconAlt')} />
                                            </span>
                                            <span className="iconbox_content">
                                                <strong className="iconbox_title mb-0">{policy.title}</strong>
                                            </span>
                                        </strong>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyUs;