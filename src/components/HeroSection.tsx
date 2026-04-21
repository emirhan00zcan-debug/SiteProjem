'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            bgImage: "url(/assets/premium-kitchen-2.png)",
            tag: "⚡ KOMİSYONSUZ FİYATLAR ⚡",
            title: "Mağaza Komisyonu Yok! \n Doğrudan Atölye Fiyatı.",
            description: "Aracıları tamamen kaldırdık! Tüm mutfak ve dolap siparişlerinizde showroom maliyeti ödemeden, %25 net imalat indirimiyle birinci sınıf kaliteyi doğrudan üreticiden alın.",
            promotions: {
                box1: { label: "Mağaza Komisyonu", value: "0 TL" },
                box2: { label: "Özel Ölçü / Proje", value: "Ücretsiz" },
                banner: { label: "Tüm Mutfak ve Dolaplarda", value: "%25 Net İndirim" },
                footer: "Aracıları tamamen kaldırdık! Birinci sınıf kaliteyi doğrudan üreticiden alın."
            },
            buttons: [
                { text: "Şimdi İndirimli Fiyat Al", href: "/iletisim", primary: true }
            ],
            isSpecial: true
        },
        {
            bgImage: "url(/assets/insaat-proje.png)",
            tag: "İNŞAATÇILARA ÖZEL",
            title: "Projelerinize Üretici \n Gücüyle Değer Katın.",
            description: "Toplu konut ve inşaat projelerinde zamana sadık montaj ve projeye özel %40'a varan indirimler. Zamanında teslim, fabrika fiyatı.",
            promotions: {
                box1: { label: "Zamanında Teslim", value: "Garantili" },
                box2: { label: "Fabrika Fiyatı", value: "Net Maliyet" },
                banner: { label: "Toplu Konut ve Projelere", value: "%40'a Varan İndirim" },
                footer: "Projelerinize üretici gücüyle değer katın. Kurumsal çözümler için ulaşın."
            },
            buttons: [
                { text: "Kurumsal Katalog İsteyin", href: "/iletisim", primary: true }
            ],
            isSpecial: true
        },
        {
            bgImage: "url('/assets/ev-yenileme-kampanya.png')",
            tag: "FIRSATI KAÇIRMA",
            title: "Evinizde Yenilik Zamanı: \n Bu Haftaya Özel Fırsat!",
            description: "Mutfak, banyo ve portmanto yenilemelerinde net %20 indirim. Ölçü ve çizim bizden.",
            promotions: {
                box1: { label: "Ölçü ve Çizim", value: "Ücretsiz" },
                box2: { label: "Hafta Sonu", value: "Sınırlı" },
                banner: { label: "Mutfak, Banyo ve Portmanto", value: "Net %20 İndirim" },
                footer: "Bu haftaya özel yenileme fırsatını kaçırmayın, kaliteyi indirimli alın."
            },
            buttons: [
                { text: "Ücretsiz Keşif İste", href: "/iletisim", primary: true }
            ],
            isSpecial: true
        },
        {
            bgImage: "url('/assets/t1_pro_1769533091788.png')",
            tag: "PREMIUM COLLECTION",
            title: "Modern \n Yaşam Alanları",
            description: "Evinizin her köşesinde estetik ve konforu bir araya getiren özel tasarımlar.",
            buttons: [
                { text: "Koleksiyonu İncele", href: "/koleksiyon", primary: true },
                { text: "İletişim", href: "#contact", primary: false }
            ]
        },
        {
            bgImage: "url('/assets/pro-mutfak-3.png')",
            tag: "GURME MUTFAKLAR",
            title: "Hayalinizdeki \n Mutfak",
            description: "Fonksiyonel detaylar ve şık çizgilerle mutfakta geçirdiğiniz her anı keyfe dönüştürün.",
            buttons: [
                { text: "Keşfet", href: "/projeler?id=pro-ada", primary: true }
            ]
        },
        {
            bgImage: "url('/assets/premium-bedroom.png')",
            tag: "HUZURLU UYKU",
            title: "Yatak Odanızda \n Konfor",
            description: "Güne zinde başlamanız için tasarlanmış, huzur veren yatak odası koleksiyonları.",
            buttons: [
                { text: "Kataloğu Gör", href: "/projeler?id=pro-venedik", primary: true }
            ]
        },
        {
            bgImage: "url('/assets/premium-bathroom.png')",
            tag: "MODERN BANYO",
            title: "Ferah ve Şık \n Banyo Çözümleri",
            description: "Suyun dinginliğini modern tasarımla buluşturan, spa etkili banyo mobilyaları.",
            buttons: [
                { text: "İncele", href: "/projeler?id=pro-mermer", primary: true }
            ]
        },
        {
            bgImage: "url('/assets/d4_pro_1769532928933.png')",
            tag: "İLK İZLENİM",
            title: "Evinize Şık Bir \n Karşılama",
            description: "Fonksiyonel depolama alanlarıyla antrenizde düzeni ve estetiği yakalayın.",
            buttons: [
                { text: "Detaylı Gör", href: "/projeler?id=pro-smart", primary: true }
            ]
        },
        {
            bgImage: "url('/assets/d6_pro_1769532959772.png')",
            tag: "ŞIK DETAYLAR",
            title: "Evinizin \n Giriş İmzası",
            description: "Zarif dresuar modelleri ile yaşam alanlarınıza estetik bir dokunuş katın.",
            buttons: [
                { text: "İncele", href: "/projeler?id=pro-dresuar", primary: true }
            ]
        }
    ];

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, currentSlide === 0 ? 10000 : 5000);
        return () => clearTimeout(timeoutId);
    }, [currentSlide, slides.length]);

    return (
        <section id="home" className="hero-slider">
            <div className="slider-container" style={{ transform: `translateX(-${currentSlide * 100}%)`, width: '100%' }}>
                {slides.map((slide, index) => (
                    <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
                        <div className="kelebek-slide-layout">
                            <div className="kelebek-image-area">
                                <div className="slide-bg-overlay" style={{ backgroundImage: slide.bgImage }}></div>
                            </div>

                            <div className="kelebek-content-area">
                                <div className="kelebek-card">
                                    {slide.isSpecial && slide.promotions ? (
                                        <>
                                            <span style={{ display: 'inline-block', marginBottom: '1.5rem', color: '#e63946', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>{slide.tag}</span>
                                            <h1>
                                                {slide.title.split('\n')[0]} <br />
                                                <strong>{slide.title.split('\n')[1]}</strong>
                                            </h1>

                                            <div className="kelebek-promo-boxes">
                                                <div className="kelebek-promo-box split">
                                                    <div className="box-left">
                                                        <p>{slide.promotions.box1.label}</p>
                                                        <h3>{slide.promotions.box1.value}</h3>
                                                    </div>
                                                    <div className="box-right">
                                                        <p>{slide.promotions.box2.label}</p>
                                                        <h3>{slide.promotions.box2.value}</h3>
                                                    </div>
                                                </div>
                                                <div className="kelebek-promo-box red">
                                                    <div>
                                                        <p>{slide.promotions.banner.label}</p>
                                                    </div>
                                                    <div>
                                                        <h3>{slide.promotions.banner.value}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="kelebek-footer-text">
                                                {slide.promotions.footer}
                                            </p>
                                            <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
                                                {slide.buttons.map((btn, i) => (
                                                    <Link key={i} href={btn.href} className="kelebek-btn-special">
                                                        {btn.text} <i className="fas fa-chevron-right" style={{ fontSize: '1rem' }}></i>
                                                    </Link>
                                                ))}
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <span style={{ display: 'inline-block', marginBottom: '1.5rem', color: '#777', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>{slide.tag}</span>
                                            <h1>
                                                {slide.title.split('\n')[0]} <br />
                                                <strong>{slide.title.split('\n')[1]}</strong>
                                            </h1>
                                            <p style={{ color: '#555', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.6' }}>{slide.description}</p>
                                            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '20px' }}>
                                                {slide.buttons.map((btn, i) => (
                                                    <Link key={i} href={btn.href} className={btn.primary ? "kelebek-btn-primary" : "kelebek-btn-secondary"}>
                                                        {btn.text} {btn.primary && <i className="fas fa-arrow-right"></i>}
                                                    </Link>
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="prism-nav-btn prev-btn prev-slide" onClick={prevSlide}><i className="fas fa-chevron-left"></i></div>
            <div className="prism-nav-btn next-btn next-slide" onClick={nextSlide}><i className="fas fa-chevron-right"></i></div>

            <div className="slider-dots">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                    ></span>
                ))}
            </div>

            <div className="slider-progress-wrap">
                <div className="slider-progress-bar" style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}></div>
            </div>
        </section>
    );
};

export default HeroSection;
