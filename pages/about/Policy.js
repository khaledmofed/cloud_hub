import React from 'react';
import { useTranslation } from 'next-i18next';
import sIcon1 from '/public/images/icons/icon_clock.svg'
import sIcon2 from '/public/images/icons/icon_dart_board_2.svg'
import sIcon3 from '/public/images/icons/icon_target.svg'
import Image from 'next/image';

const getPolicy = (t) => [
    {
        title: t('aboutPage.ourHistory'),
        subTitle: t('aboutPage.ourHistoryDesc'),
        icon: sIcon1,
    },
    {
        title: t('aboutPage.ourMission'),
        subTitle: t('aboutPage.ourMissionDesc'),
        icon: sIcon2,
    },
    {
        title: t('aboutPage.ourVision'),
        subTitle: t('aboutPage.ourVisionDesc'),
        icon: sIcon3,
    },
]


const PolicySection = (props) => {
    const { t } = useTranslation('common');
    const Policy = getPolicy(t);

    return (
        <section className="policy_section bg-light">
            <div className="container">
                <div className="row">
                    {Policy.map((policy, pitem) => (
                        <div className="col-lg-4" key={pitem}>
                            <div className="iconbox_block">
                                <div className="iconbox_icon">
                                    <Image src={policy.icon} alt={t('aboutPage.iconAlt')} />
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