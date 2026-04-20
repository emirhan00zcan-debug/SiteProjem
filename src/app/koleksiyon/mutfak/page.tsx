'use client';
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomerReviews from '@/components/CustomerReviews';

const MutfakPage = () => {
    const [activeColor, setActiveColor] = useState('anthracite');

    const reviews = [
        {
            id: 1,
            image: "/assets/images/4.jpeg",
            location: "Sinop / Merkez",
            text: "Yeni mutfağım tam bir rüya! Her detay düşünülmüş. Estetik ve fonksiyonellik bir arada. Çok mutluyum.",
            author: "Zeynep Çelik",
            initials: "ZÇ",
            date: "18 Ocak 2026"
        },
        {
            id: 2,
            image: "/assets/images/6.jpeg",
            location: "Sinop / Ayancık",
            text: "Lake mutfak kapaklarımızın kalitesi mükemmel. Sinop'ta bu kalitede iş yapan tek firma Özcan Mobilya.",
            author: "Burak Kozan",
            initials: "BK",
            date: "14 Ocak 2026"
        },
        {
            id: 3,
            image: "/assets/images/9.jpeg",
            location: "Sinop / Gerze",
            text: "Mutfak dolaplarının ergonomisi ve şıklığı bizi mest etti. Tavsiye ederim, gerçekten profesyonel bir ekip.",
            author: "Caner Aydın",
            initials: "CA",
            date: "10 Ocak 2026"
        }
    ];

    return (
        <>
            <Navbar />

            <main className="category-hero">
                <div className="container l-layout">
                    <div className="l-image-container reveal-up">
                        <img src="/assets/images/premium-kitchen.png" alt="2026 Mutfak Trendi" />
                    </div>
                    <div className="l-details reveal-up">
                        <span className="trend-badge">2026 Mutfak Trendi</span>
                        <h1>Yeni Nesil Mutfak Çözümleri</h1>
                        <p className="description">Geleneksel mutfak anlayışını yıkan, ferahlık ve teknolojiyi birleştiren tasarımlarımızla tanışın.</p>

                        <div className="material-cards-grid">
                            <div className="material-card">
                                <i className="fas fa-layer-group"></i>
                                <div className="material-info">
                                    <h4>Yüzer Kabinler</h4>
                                    <p>Yerden yüksek tasarımıyla modern ve ferah görünüm.</p>
                                </div>
                            </div>
                            <div className="material-card">
                                <i className="fas fa-fingerprint"></i>
                                <div className="material-info">
                                    <h4>Leke Tutmaz Mat Lake</h4>
                                    <p>Soft touch yüzey ile parmak izine son.</p>
                                </div>
                            </div>
                            <div className="material-card">
                                <i className="fas fa-hand-pointer"></i>
                                <div className="material-info">
                                    <h4>Bas-Aç Sistem</h4>
                                    <p>Kulp gerektirmeyen minimalist kapaklar.</p>
                                </div>
                            </div>
                        </div>

                        <div className="configurator">
                            <h4>Kapak Rengi Seçimi</h4>
                            <div className="swatches">
                                <div className={`swatch ${activeColor === 'anthracite' ? 'active' : ''}`} style={{ background: '#2c3e50' }} onClick={() => setActiveColor('anthracite')} data-name="Antrasit"></div>
                                <div className={`swatch ${activeColor === 'white' ? 'active' : ''}`} style={{ background: '#ecf0f1' }} onClick={() => setActiveColor('white')} data-name="İnci Beyazı"></div>
                                <div className={`swatch ${activeColor === 'oak' ? 'active' : ''}`} style={{ background: '#d4a373' }} onClick={() => setActiveColor('oak')} data-name="Doğal Meşe"></div>
                                <div className={`swatch ${activeColor === 'black' ? 'active' : ''}`} style={{ background: '#1a1a1a' }} onClick={() => setActiveColor('black')} data-name="Mat Siyah"></div>
                            </div>
                        </div>

                        <a href="https://wa.me/903682614141?text=Mutfak%20sayfasındaki%20modern%20lake%20modeliniz%20hakkında%20bilgi%20almak%20istiyorum." className="whatsapp-cta">
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

export default MutfakPage;
