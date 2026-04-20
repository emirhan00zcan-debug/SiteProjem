'use client';
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomerReviews from '@/components/CustomerReviews';

const GardiropPage = () => {
    const [activeColor, setActiveColor] = useState('anthracite');

    const reviews = [
        {
            id: 1,
            image: "/assets/images/y9.jpeg",
            location: "Sinop / Ada Mahallesi",
            text: "Yatak odam için yaptırdığım sürgülü dolap şahane oldu. İşçilik kalitesi tek kelimeyle kusursuz. Çok teşekkürler.",
            author: "Ayşe Yılmaz",
            initials: "AY",
            date: "22 Ocak 2026"
        },
        {
            id: 2,
            image: "/assets/images/GiyinmeOdası/g1.jpeg",
            location: "Sinop / Zeytinlik",
            text: "Giyinme odamızı tamamen baştan yarattılar. Hem çok şık hem de çok fonksiyonel bir kullanım alanı oluştu.",
            author: "Selin Demir",
            initials: "SD",
            date: "18 Ocak 2026"
        },
        {
            id: 3,
            image: "/assets/images/y10.jpeg",
            location: "Sinop / Kefevi",
            text: "Kaliteli işçilik ve zamanında teslimat. Özcan Mobilya'ya güvenimiz tam. Her aşamada çok yardımcı oldular.",
            author: "Mehmet Kaya",
            initials: "MK",
            date: "15 Ocak 2026"
        }
    ];

    return (
        <>
            <Navbar />

            <main className="category-hero">
                <div className="container l-layout">
                    <div className="l-image-container reveal-up">
                        <img src="/assets/images/premium-bedroom.png" alt="2026 Gardırop Trendi" />
                    </div>
                    <div className="l-details reveal-up">
                        <span className="trend-badge">2026 Yatak Odası Trendi</span>
                        <h1>Estetik ve Organize Yaşam</h1>
                        <p className="description">Füme cam kapaklar ve akıllı aydınlatma sistemleri ile yatak odanızda derinlik yaratın.</p>

                        <div className="material-cards-grid">
                            <div className="material-card">
                                <i className="fas fa-window-maximize"></i>
                                <div className="material-info">
                                    <h4>Füme Cam Kapaklar</h4>
                                    <p>Modern ve derinlik katan şeffaf dokulu yüzeyler.</p>
                                </div>
                            </div>
                            <div className="material-card">
                                <i className="fas fa-lightbulb"></i>
                                <div className="material-info">
                                    <h4>Entegre Sensörlü LED</h4>
                                    <p>Kapak açıldığında otomatik yanan raf içi aydınlatma.</p>
                                </div>
                            </div>
                            <div className="material-card">
                                <i className="fas fa-sliders-h"></i>
                                <div className="material-info">
                                    <h4>Modüler Raf Sistemi</h4>
                                    <p>İhtiyacınıza göre ayarlanabilir geniş depolama alanı.</p>
                                </div>
                            </div>
                        </div>

                        <div className="configurator">
                            <h4>Cam ve Gövde Uyumu</h4>
                            <div className="swatches">
                                <div className={`swatch ${activeColor === 'anthracite' ? 'active' : ''}`} style={{ background: '#34495e' }} onClick={() => setActiveColor('anthracite')} data-name="Füme Cam"></div>
                                <div className={`swatch ${activeColor === 'white' ? 'active' : ''}`} style={{ background: '#e0e0e0', border: '1px solid #ccc' }} onClick={() => setActiveColor('white')} data-name="Şeffaf Cam"></div>
                                <div className={`swatch ${activeColor === 'oak' ? 'active' : ''}`} style={{ background: '#8e735b' }} onClick={() => setActiveColor('oak')} data-name="Bronz Ayna"></div>
                            </div>
                        </div>

                        <a href="https://wa.me/903682614141?text=Gardırop%20sayfasındaki%20cam%20kapaklı%20modeliniz%20hakkında%20bilgi%20almak%20istiyorum." className="whatsapp-cta">
                            <i className="fab fa-whatsapp"></i> WhatsApp ile Bilgi Al
                        </a>
                    </div>
                </div>

                <CustomerReviews reviews={reviews} />
            </main>

            <Footer />
        </>
    );
};

export default GardiropPage;
