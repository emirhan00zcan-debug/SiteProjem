'use client';
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomerReviews from '@/components/CustomerReviews';

const VestiyerPage = () => {
    const [activeColor, setActiveColor] = useState('white');

    const reviews = [
        {
            id: 1,
            image: "/assets/images/p1.jpeg",
            location: "Sinop / Gelincik",
            text: "Antre alanımız artık çok daha düzenli ve şık. Beklentilerimizin çok üzerinde bir iş çıktı.",
            author: "Fatma Demir",
            initials: "FD",
            date: "20 Ocak 2026"
        },
        {
            id: 2,
            image: "/assets/images/p2.jpeg",
            location: "Sinop / Korucuk",
            text: "Özel tasarım vestiyerimiz odanın havasını tamamen değiştirdi. Kaliteli malzeme ve mükemmel montaj.",
            author: "Elif Hanım",
            initials: "EH",
            date: "17 Ocak 2026"
        },
        {
            id: 3,
            image: "/assets/images/p4.jpeg",
            location: "Sinop / Orduköy",
            text: "Özel ölçü vestiyer tam istediğimiz gibi oldu. Hem şık hem de pratik çözümleri çok beğendik.",
            author: "Ali Öztürk",
            initials: "AÖ",
            date: "10 Ocak 2026"
        }
    ];

    return (
        <>
            <Navbar />

            <main className="category-hero">
                <div className="container l-layout">
                    <div className="l-image-container reveal-up">
                        <img src="/assets/images/premium-vestiyer.png" alt="2026 Vestiyer Trendi" />
                    </div>
                    <div className="l-details reveal-up">
                        <span className="trend-badge">2026 Antre Trendi</span>
                        <h1>İlk İzlenimde Şıklık</h1>
                        <p className="description">Evinizin girişini fonksiyonel ve estetik detaylarla premium bir karşılama alanına dönüştürün.</p>

                        <div className="material-cards-grid">
                            <div className="material-card">
                                <i className="fas fa-door-open"></i>
                                <div className="material-info">
                                    <h4>Gizli Askı Alanları</h4>
                                    <p>Dışarıdan görünmeyen, minimalist kapak arkası düzenleme.</p>
                                </div>
                            </div>
                            <div className="material-card">
                                <i className="fas fa-couch"></i>
                                <div className="material-info">
                                    <h4>Entegre Oturma Alanı</h4>
                                    <p>Konforlu ve mobilya ile bütünleşik puf detayları.</p>
                                </div>
                            </div>
                            <div className="material-card">
                                <i className="fas fa-magic"></i>
                                <div className="material-info">
                                    <h4>Niche Aydınlatma</h4>
                                    <p>Anahtar ve aksesuarlar için ışıklandırılmış özel bölmeler.</p>
                                </div>
                            </div>
                        </div>

                        <div className="configurator">
                            <h4>Antre Stilini Yakalayın</h4>
                            <div className="swatches">
                                <div className={`swatch ${activeColor === 'white' ? 'active' : ''}`} style={{ background: '#fdfcfb' }} onClick={() => setActiveColor('white')} data-name="Kırık Beyaz"></div>
                                <div className={`swatch ${activeColor === 'anthracite' ? 'active' : ''}`} style={{ background: '#5d5c5c' }} onClick={() => setActiveColor('anthracite')} data-name="Antrasit"></div>
                                <div className={`swatch ${activeColor === 'oak' ? 'active' : ''}`} style={{ background: '#a68b6d' }} onClick={() => setActiveColor('oak')} data-name="Ceviz"></div>
                            </div>
                        </div>

                        <a href="https://wa.me/903682614141?text=Vestiyer%20sayfasındaki%20modern%20tasarımınız%20hakkında%20bilgi%20almak%20istiyorum." className="whatsapp-cta">
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

export default VestiyerPage;
