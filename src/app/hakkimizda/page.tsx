import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function HakkimizdaPage() {
    return (
        <>
            <Navbar />

            {/* 1. Hero Bölümü (Giriş Alanı) */}
            <section className="about-hero-section" style={{ backgroundImage: "url('/assets/images/premium-living.png')" }}>
                <div className="about-hero-overlay"></div>
                <div className="about-hero-content">
                    <h1>Hakkımızda</h1>
                    <p className="motto">2004'ten beri her detayda bir hikaye, her tasarımda bir ruh.</p>
                </div>
            </section>

            {/* 2. "Hikayemiz" Bölümü (Storytelling) */}
            <section className="about-story-section">
                <div className="split-screen-row">
                    <div className="split-screen-col">
                        <div className="story-image-wrapper">
                            <img src="/assets/images/workshop-craftsmanship.png" alt="Özcan Mobilya Atölye" />
                        </div>
                    </div>
                    <div className="split-screen-col">
                        <span className="section-label">HİKAYEMİZ</span>
                        <h2>Dünden Bugüne Özcan Mobilya</h2>
                        <p>
                            <span className="highlight-text">2004 yılında Sinop'ta</span> küçük bir atölye olarak başladığımız yolculuğumuz, bugün bölgenin en prestijli mobilya üretim tesislerinden birine dönüştü. Kurucumuzun "Kalite tesadüf değildir" vizyonuyla çıktığımız bu yolda, her geçen gün üretim kapasitemizi ve tasarım vizyonumuzu geliştirdik.
                        </p>
                        <p>
                            Yıllar içinde yüzlerce ailenin evine konuk olduk, binlerce metrekare yaşam alanını dönüştürdük. Geleneksel ahşap işçiliğinin sıcaklığını, modern teknolojinin hassasiyetiyle buluşturarak, sadece mobilya değil, nesilden nesile aktarılacak değerler üretiyoruz.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. "Rakamlarla Biz" */}
            <section className="about-stats-section">
                <div className="about-stats-container">
                    <div className="stat-item">
                        <span className="stat-number">20+</span>
                        <span className="stat-title">Yıllık Deneyim</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">1000+</span>
                        <span className="stat-title">Tamamlanan Proje</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">%100</span>
                        <span className="stat-title">Müşteri Memnuniyeti</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">500+</span>
                        <span className="stat-title">m² Üretim Alanı</span>
                    </div>
                </div>
            </section>

            {/* 4. "Değerlerimiz" */}
            <section className="about-values-section">
                <div className="values-header">
                    <span className="section-label">VİZYONUMUZ</span>
                    <h2>Değerlerimiz</h2>
                    <p>Sadece bir mobilya üreticisi değil, yaşam alanlarınızın güvenilir mimarıyız.</p>
                </div>
                <div className="values-grid">
                    <div className="value-card">
                        <div className="value-icon">
                            <i className="fas fa-hammer"></i>
                        </div>
                        <h3>Kusursuz İşçilik</h3>
                        <p>Her detayda mükemmeli arayan üretim anlayışımızla, en yüksek kaliteli malzemeleri ustalıkla işliyoruz.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">
                            <i className="fas fa-leaf"></i>
                        </div>
                        <h3>Sürdürülebilirlik</h3>
                        <p>Doğanın bize sunduklarına saygı duyarak, çevre dostu üretim süreçleri ve geri dönüştürülebilir materyaller kullanıyoruz.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">
                            <i className="fas fa-users"></i>
                        </div>
                        <h3>Müşteri Mutluluğu</h3>
                        <p>Müşterilerimizin hayallerini merkeze alıyor, satış öncesi ve sonrasında şeffaf, samimi bir destek sağlıyoruz.</p>
                    </div>
                </div>
            </section>

            {/* 5. Üretim Felsefesi ve Malzeme Kalitesi */}
            <section className="about-philosophy-section">
                <div className="philosophy-banner">
                    <div className="philosophy-bg" style={{ backgroundImage: "url('/assets/images/cabinet-black.jpg')" }}></div>
                    <div className="philosophy-overlay"></div>
                    <div className="philosophy-content">
                        <p>"Doğanın sıcaklığını modern teknolojiyle işliyoruz."</p>
                        <span>Dünya standartlarında Blum ve Hettich mekanizmaları ile yıllara meydan okuyan dayanıklılık.</span>
                    </div>
                </div>
            </section>

            {/* 6. Video Bölümü */}
            <section className="about-video-section">
                <div className="video-container">
                    <video
                        src="https://evdxtjhdysrgnkvjiycq.supabase.co/storage/v1/object/public/video/Agent_video_Pippit_20260419203700.mp4"
                        autoPlay
                        muted
                        playsInline
                        controls
                        className="about-video-player"
                    >
                        Tarayıcınız video etiketini desteklemiyor.
                    </video>
                </div>
            </section>

            {/* 7. Modern Bir "Call to Action" */}
            <section className="about-cta-section">
                <div className="cta-container">
                    <h2>Sizin hayalinizdeki mekanı birlikte tasarlayalım mı?</h2>
                    <div className="cta-buttons">
                        <Link href="/projeler" className="cta-btn primary">Projelerimizi İnceleyin</Link>
                        <Link href="/iletisim" className="cta-btn outline">İletişime Geçin</Link>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
