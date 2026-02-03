import React, { useState } from 'react'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import about1 from '/public/images/about/about_image_9.webp'
import about2 from '/public/images/about/about_image_11.webp'
import about3 from '/public/images/about/about_image_10.webp'
import ModalVideo from 'react-modal-video'
import Image from 'next/image'


const About = (props) => {
    const { t } = useTranslation('common')
    const router = useRouter()
    const [isOpen, setOpen] = useState(false)

    // دالة للحصول على رابط واتساب مع رسالة
    const getWhatsAppLink = () => {
        const phoneNumber = "966599555526";
        const message = router.locale === "ar" 
            ? "أريد تفاصيل انشاء متجر معكم"
            : "I want details about creating a store with you";
        return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    };

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="about_section section_space">
            <div className="container">
                <div className="row align-items-center justify-content-lg-between">
                    <div className="col-lg-6">
                        <div className="about_image_1">
                            <Image src={about1} alt="Cloud Hub - About" />
                            <Image src={about2} data-parallax='{"y" : 80, "smoothness": 6}' alt="Cloud Hub - About" />
                            <Image src={about3} data-parallax='{"y" : -80, "smoothness": 6}' alt="Cloud Hub - About" />
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="about_content">
                            <div className="heading_block">
                                <div className="heading_focus_text">
                                    {t('about.weAre')} 😃
                                    <span className="badge bg-secondary text-white">{t('about.badge')}</span>
                                </div>
                                <h2 className="heading_text">
                                    {t('about.title')}
                                </h2>
                                <p className="heading_description mb-0">
                                    {t('about.description')}
                                </p>
                            </div>
                            <ul className="icon_list unordered_list_block mb-5">
                                <li>
                                    <span className="icon_list_icon">
                                        <i className="fa-solid fa-circle fa-fw"></i>
                                    </span>
                                    <span className="icon_list_text">
                                        {t('about.growBusiness')}
                                    </span>
                                </li>
                                <li>
                                    <span className="icon_list_icon">
                                        <i className="fa-solid fa-circle fa-fw"></i>
                                    </span>
                                    <span className="icon_list_text">
                                        {t('about.businessGrowth')}
                                    </span>
                                </li>
                                <li>
                                    <span className="icon_list_icon">
                                        <i className="fa-solid fa-circle fa-fw"></i>
                                    </span>
                                    <span className="icon_list_text">
                                        {t('about.helpingYou')}
                                    </span>
                                </li>
                            </ul>
                            <ul className="btns_group unordered_list p-0 justify-content-start">
                                <li>
                                    <Link onClick={ClickHandler} href="/pricing" className="btn">
                                        <span className="btn_label" data-text={t('hero.getStarted')}>{t('hero.getStarted')}</span>
                                        <span className="btn_icon">
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href={getWhatsAppLink()}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="video_btn"
                                    >
                                        <span className="btn_icon p-0">
                                            <i className="fa-solid fa-store"></i>
                                        </span>
                                        <span className="btn_label">
                                        {router.locale === "ar" ? "أنشئ متجرك المتكامل بتكلفة بسيطة." : "Create your integrated store at a low cost."}
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="7e90gBu4pas" onClose={() => setOpen(false)} />
       
            <div
                style={{
                    background: "#fff",
                    borderRadius: "0px 0px 12px 12px",
                    marginTop: "-20px",
                    padding: "10px",
                    fontFamily: "'Cairo', sans-serif",
                    position: "relative",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                }}
            >
                <div className="property-features" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    <span>✔️ سعر مميز</span>
                    <span>✔️ أقساط مريحة</span>
                    <span>✔️ استثمار آمن</span>
                    <span>✔️ موقع حيوي</span>
                    <span>✔️ جنسية تركية</span>
                </div>

                <hr style={{ border: "none", borderTop: "1px solid #eee", margin: "15px 0" }} />
                <div
                    className="prpfoot"
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "10px",
                        minHeight: "30px",
                    }}
                >
                    <div style={{ fontSize: "16px", color: "#1a1a1a", fontWeight: "bold" }}>
                        تبدأ من
                        <span
                            style={{
                                fontSize: "18px",
                                color: "#1a1a1a",
                                fontWeight: "bold",
                                marginRight: "10px",
                            }}
                        >
                            $200,000
                        </span>
                    </div>

                    <a
                        className="whatsapp-btn"
                        style={{
                            fontSize: "14px",
                            color: "#002b5b",
                            background: "#ffffff",
                            borderRadius: "10px",
                            padding: "5px 15px",
                            fontWeight: 600,
                            textDecoration: "none",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "6px",
                        }}
                        href="https://wa.me/905458551690?text=أرغب بتفاصيل شقق وفلل فاخرة في بيلكدوزو"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-whatsapp"></i> اطلب التفاصيل
                    </a>
                </div>
            </div>
        </section>
    
    )
}

export default About;