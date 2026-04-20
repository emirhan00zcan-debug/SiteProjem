import React from 'react';

const AboutSection = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <div className="about-image">
                    <img src="/assets/images/img.png" alt="Özcan Mobilya Atölye" />
                </div>
                <div className="about-text">
                    <span className="subtitle">Biz Kimiz?</span>
                    <h2>20 Yıllık Tecrübe ile Hayallerinizi Tasarlıyoruz</h2>
                    <p>2004 yılında Sinop'ta kurulan <strong>Özcan Mobilya</strong>, 20 yıla yaklaşan tecrübesiyle mobilya
                        imalat sektöründe öncü bir rol üstlenmektedir. Müşteri odaklı üretim anlayışımızla, evinizin her
                        köşesine estetik ve kaliteyi taşıyoruz.</p>
                    <p>Mutfak dolaplarından yatak odasına, banyo tasarımlarından özel dekorasyon projelerine kadar geniş bir
                        yelpazede hizmet veriyoruz. Modern teknoloji ile ustalık gerektiren el işçiliğini birleştirerek,
                        sadece mobilya değil, yaşam alanlarınıza ruh katıyoruz.</p>
                    <div className="about-stats">
                        <div className="stat-item">
                            <span className="stat-number">20+</span>
                            <span className="stat-label">Yıl Tecrübe</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">1000+</span>
                            <span className="stat-label">Mutlu Müşteri</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">Sinop</span>
                            <span className="stat-label">Merkez Şube</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
