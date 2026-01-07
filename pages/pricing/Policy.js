import React from 'react';
import { useTranslation } from 'next-i18next';
import sIcon1 from '/public/images/icons/icon_doc.svg'
import sIcon2 from '/public/images/icons/icon_analysis.svg'
import sIcon3 from '/public/images/icons/icon_headphone_2.svg'
import Image from 'next/image';

const PolicySection = (props) => {
    const { t } = useTranslation('common');

    const getPolicy = (t) => [
        {
            title: t('pricingPage.richDocumentation'),
            subTitle: t('pricingPage.richDocumentationDesc'),
            icon: sIcon1,
        },
        {
            title: t('pricingPage.fastestDelivery'),
            subTitle: t('pricingPage.fastestDeliveryDesc'),
            icon: sIcon2,
        },
        {
            title: t('pricingPage.lifetimeSupport'),
            subTitle: t('pricingPage.lifetimeSupportDesc'),
            icon: sIcon3,
        },
    ];

    const Policy = getPolicy(t);

    return (
        <section className="policy_section section_space">
            <div className="container">
                <div className="heading_block">
                    <div className="row justify-content-lg-between">
                        <div className="col-lg-6">
                            <h2 className="heading_text mb-0">
                                {t('pricingPage.celebratingFeatures')}
                            </h2>
                        </div>
                        <div className="col-lg-5">
                            <p className="heading_description mb-0">
                                {t('pricingPage.celebratingFeaturesDesc')}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row pricing_policy_wrap">
                    {Policy.map((policy, pitem) => (
                        <div className="col-lg-4" key={pitem}>
                            <div className="iconbox_block">
                                <div className="iconbox_icon">
                                    <Image src={policy.icon} alt={t('pricingPage.icon')} />
                                </div>
                                <div className="iconbox_content">
                                    <h3 className="iconbox_title">{policy.title}</h3>
                                    <p className="mb-0">
                                        {policy.subTitle}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PolicySection;